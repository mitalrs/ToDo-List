const { Sequelize } = require("sequelize");

const createDB  = new Sequelize("test-db", "user", "pass", {
    dialect: "sqlite",
    host: "./config/db.sqlite",
    logging: false,
});

const connectToDB = ()=>{
    createDB
    .sync()
    .then((res)=>{
        console.log("Successfully connected to database");
    })
    .catch((err)=> console.log("connet connect to database due to:", err));
};

module.exports = { createDB, connectToDB };

const userModel = require("../models/userModel");
const orderModel = require("../models/orderModel");

orderModel.belongsTo(userModel, { foreignkey: "buyerID"});
userModel.hasMany(orderModel, { foreignkey: "id"})