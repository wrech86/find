const Koa = require("koa")
const {APP_PORT,MYSQL_HOST} = require("./config/dotenv")
const InitManager = require('./core/init')
const cors = require('koa2-cors')
const path = require('path')
const static = require('koa-static')
const koaBody = require("koa-body")

const app = new Koa()

app.use(static(path.join(__dirname+'/assets')))
app.use(cors());
app.use(koaBody({
  multipart: true, 
  formidable: {
  uploadDir: path.join(__dirname,'./assets/picture'),
  keepExtensions: true,
 }}
))
InitManager.initCore(app)

app.listen(APP_PORT,()=>{
  console.log(`running on http://${MYSQL_HOST}:${APP_PORT}`);
})
