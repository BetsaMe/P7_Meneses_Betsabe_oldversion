const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Comment extends Model {} 

Comment.init({
    content: DataTypes.TEXT
}, {
    sequelize,
    modelName: "post"
});

module.exports = Post;

