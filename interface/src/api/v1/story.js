const Router = require('koa-router')
const useDb = require('../../mysql/db') 
const router = new Router();


router.get('/story',async(ctx)=>{
  let res = await useDb('SELECT * FROM test.story')
  let animal = res.slice(0,6)
  let botany = res.slice(6,12)
  let microorganism = res.slice(12,18)
  ctx.body = {
    animal,
    botany,
    microorganism
  }
})
router.get('/story/content',async(ctx)=>{
  let res = await useDb(`SELECT * FROM test.story WHERE flag = '${ctx.query.id}'`)
  ctx.body = res
})










module.exports = router;