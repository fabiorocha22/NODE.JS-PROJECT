module.exports = (sequelize, DataTypes) => {
    const comment = sequelize.define('comment', {
        comment: DataTypes.STRING,
    });

    return comment;
}