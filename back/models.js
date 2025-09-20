const sequelize = require('./database')
const {DataTypes} = require('sequelize')

const Blog = sequelize.define('blog', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    image: {type: DataTypes.TEXT, allowNull: false},
    tag: {type: DataTypes.TEXT, allowNull: false},
    time: {type: DataTypes.INTEGER, allowNull: false},
    title: {type: DataTypes.TEXT, allowNull: false},
    desc: {type: DataTypes.TEXT, allowNull: false},
})

const Plan = sequelize.define('plan', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.TEXT, allowNull: false},
    monthly: {type: DataTypes.TEXT, allowNull: false},
    yearly: {type: DataTypes.TEXT, allowNull: false},
    bonus1: {type: DataTypes.TEXT, allowNull: true},
    bonus2: {type: DataTypes.TEXT, allowNull: true},
    bonus3: {type: DataTypes.TEXT, allowNull: true},
    bonus4: {type: DataTypes.TEXT, allowNull: true},
    bonus5: {type: DataTypes.TEXT, allowNull: true},
})

const Comment = sequelize.define('comment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rating: {type: DataTypes.INTEGER, allowNull: false},
    text: {type: DataTypes.TEXT, allowNull: false},
    photo: {type: DataTypes.TEXT, allowNull: false},
    name: {type: DataTypes.TEXT, allowNull: false},
    position: {type: DataTypes.TEXT, allowNull: false},
})

const Subscribe = sequelize.define('subscribe', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.TEXT, allowNull: false}
})

module.exports = {
    Blog, Plan, Comment, Subscribe
}