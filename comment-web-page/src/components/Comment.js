import React, { Component } from 'react'
import $ from 'jquery'
import MaterialTable from 'material-table'
const cors  = require('cors')

export default class Comment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comment: "",
            values: []
        }

        this.saveComment = this.saveComment.bind(this);
    }

    listen() {
        const fs = require('fs');
        const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
        const { IamAuthenticator } = require('ibm-watson/auth');

        const textToSpeech = new TextToSpeechV1({
            authenticator: new IamAuthenticator({
                apikey: 'WD4AFtckuzKn_GGwcq6owpphCXSvpDMTm_c9CFzr1gkd',
            }),
            crossDomain: true,
            url: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com',
        });

        const synthesizeParams = {
            text: 'Hello world',
            accept: 'audio/wav',
            voice: 'en-US_AllisonV3Voice',
        };

        textToSpeech.synthesize(synthesizeParams)
            .then(response => {
                // only necessary for wav formats,
                // otherwise `response.result` can be directly piped to a file
                return textToSpeech.repairWavHeaderStream(response.result);
            })
            .then(buffer => {
                fs.writeFileSync('hello_world.wav', buffer);
            })
            .catch(err => {
                console.log('error:', err);
            });
    }

    saveComment() {
        this.setState(
            { comment: $('#new_comment').text() }
        )

        console.log(this.state)

        $.ajax({
            url: 'http://localhost:8080/api/appendcomment/',
            data: {
                "comment": this.state.comment
            },
            type: 'POST',
            crossDomain: true,
            dataType: 'json',
            success: (success) => {
                $.ajax({
                    url: 'http://localhost:8080/api/getcomment/',
                    type: 'GET',
                    crossDomain: true,
                    success: (success) => {
                        console.log(success)
                        success.forEach(element => {
                            element.listen = <button onClick={this.listen}>&#x266A;</button>
                        });
                        this.setState({
                            values: success
                        })
                    },
                    error: (err) => {
                        console.error(err)
                    }
                })
            },
            error: (error) => {
                console.log(error)
            }
        })
    }

    render() {
        return (
            <div className="comment" style={{ minWidth: '100%', display: 'inline-block' }}>
                <h2>Comentário</h2>
                <div style={{ width: '100%', display: 'block' }}>
                    <input id='new_comment' type="text" style={{ width: '100%', height: '100%', display: 'block' }} onChange={(event) => { this.setState({ comment: event.target.value }) }}></input>
                </div>
                <div style={{ width: '100%', display: 'block' }}>
                    <input type='button' value="Cadastrar" style={{ display: 'block' }} onClick={this.saveComment}></input>
                </div>
                <div style={{ minWidth: '100%', display: 'inline-grid' }}>
                    <MaterialTable
                        columns={[
                            { title: 'comment', field: 'comment' },
                            { title: 'listen', field: 'listen' },
                        ]}
                        data={this.state.values}
                        title=""
                        options={{
                            search: false,
                            rowStyle: {
                                backgroundColor: '#EEE',
                            },
                            grouping: false,
                            selection: false,
                            sorting: false,
                            paging: false
                        }}
                    />
                </div>

            </div>
        )
    }
}