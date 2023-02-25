const mysql = require("mysql2")
const { MYSQL_HOST,
  MYSQL_NAME,
  MYSQL_PASSWORD,
  MYSQL_PORT,
  MYSQL_DB } = require("../config/dotenv")
async function useDb(sql,params){
  const pool = mysql.createPool({
    host:MYSQL_HOST,user:MYSQL_NAME,password:MYSQL_PASSWORD,
    port:MYSQL_PORT,database:MYSQL_DB
  })
  const promisePool = pool.promise()
  const [rows,fields] = await promisePool.query(sql,params)
  return rows
}
module.exports = useDb