const Router = require('koa-router')
const useDb = require('../../mysql/db') 
const router = new Router();
 
router.post('/login', async (ctx, next) => {
    let userInfo = [
      ctx.request.body.username,
      ctx.request.body.password,
      ctx.request.body.telephone,
      ctx.request.body.email
    ]
    await useDb("INSERT INTO test.user (username,password,telephone,email) VALUES (?,?,?,?);",userInfo)     
})
 
module.exports = router;