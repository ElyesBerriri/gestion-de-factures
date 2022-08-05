import { Sequelize } from "sequelize";

const db = new Sequelize('postgres://qkcnlvycnqosfm:7c91bc545621dc0c413f9384a34b4752bcf429c7e9cd277030699b435d5f98fa@ec2-18-214-35-70.compute-1.amazonaws.com:5432/d2cngvstb18r4j');

/*const db = new Sequelize('d2cngvstb18r4j', 'root', '', {
    host: "localhost",
    dialect: "postgres"
});*/
 
export default db;

