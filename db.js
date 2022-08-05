//const Pool = require("pg").Pool;
import Pool from "pg";
//require("dotenv").config();
import dotenv from "dotenv" ;
dotenv.config();


const devConfig = "postgres://qkcnlvycnqosfm:7c91bc545621dc0c413f9384a34b4752bcf429c7e9cd277030699b435d5f98fa@ec2-18-214-35-70.compute-1.amazonaws.com:5432/d2cngvstb18r4j";

//const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
const proConfig = process.env.DATABASE_URL; // heroku addons

const pool = new Pool.Pool({
  connectionString:
    process.env.NODE_ENV === "production" ? proConfig : devConfig,
    ssl: {
        rejectUnauthorized: false
    }
});

//module.exports = pool;
export default pool;