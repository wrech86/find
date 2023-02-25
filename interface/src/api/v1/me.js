const Router = require('koa-router')
const useDb = require('../../mysql/db')
const path = require('path')
const timeAgo = require('../../fun/fun')
const {MYSQL_HOST} = require('../../config/dotenv')
const { log } = require('console')
const router = new Router();

router.post('/me', async (ctx, next) => {
    let res = await useDb(`SELECT * FROM test.user where username = '${ctx.request.body.username}' and password = '${ctx.request.body.password}'`)
    ctx.body = res.length
})
router.post('/me/img', async (ctx) => {
    let file = ctx.request.files.file
    let basename = path.basename(file.path)
    ctx.body = { url: `${ctx.origin}/picture/${basename}` }
})
router.post('/me/discuss/img', async (ctx) => {
    let file = ctx.request.files.file
    let basename = path.basename(file.path)
   
    ctx.body = { url: `${ctx.origin}/picture/${basename}` }
})
router.post('/me/discuss', async (ctx) => {
    let body = ctx.request.body
    let img = body.img
    if (img.length == 1) {
        await useDb(`INSERT INTO test.discuss (text,img1,username,touxiang,date,islike,isstar) VALUES ('${body.text}','${img[0].url}','${body.username}','${body.touxiang}','${body.date}','0','0')`)
    } else if (img.length == 2) {
        await useDb(`INSERT INTO test.discuss (text,img1,img2,username,touxiang,date,islike,isstar) VALUES ('${body.text}','${img[0].url}','${img[1].url}','${body.username}','${body.touxiang}','${body.date}','0','0')`)
    } else if (img.length == 3) {
        await useDb(`INSERT INTO test.discuss (text,img1,img2,img3,username,touxiang,date,islike,isstar) VALUES ('${body.text}','${img[0].url}','${img[1].url}','${img[2].url}','${body.username}','${body.touxiang}','${body.date}','0','0')`)
    }
    let res = await useDb(`SELECT * FROM test.discuss where text = '${body.text}'`)
    ctx.body = res
})
router.get('/me/discuss/chat',async (ctx) => {
   let res = await useDb(`SELECT * FROM test.discuss where iddiscuss = '${ctx.query.iid}'`)
   ctx.body=res
})
router.post('/me/discuss/chat/comment',async(ctx)=>{
    await useDb(`INSERT INTO test.comment (text,date,time,iid) VALUES('${ctx.request.body.text}','${''}','${ctx.request.body.date}','${ctx.request.body.iid}')`)
    
})
router.post('/me/discuss/chat/comment/text',async(ctx)=>{
    let res = await useDb(`SELECT * FROM test.comment WHERE iid = '${ctx.request.body.iid}'`)
    res.forEach((item)=>{
        item.date = timeAgo(item.time)
    })
    ctx.body = res
})
router.get('/me/discuss/all',async(ctx)=>{
    let res =await useDb('SELECT * FROM test.discuss')
    let data = []
    res.forEach((item)=>{
        let arr = {}
        arr.iddiscuss = item.iddiscuss
        arr.text = item.text
        if(item.img2==null&&item.img3==null){
            arr.img = [item.img1]
        }else if(item.img3==null){
            arr.img = [item.img1,item.img2]
        }else{
            arr.img = [item.img1,item.img2,item.img3]
        }
        arr.text = item.text
        arr.touxiang =  item.touxiang
        arr.date = item.date
        arr.username = item.username
        if(arr!=null){
            data.push(arr)
        }
    })
    ctx.body = data
})
router.get('/me/activity',async(ctx)=>{
  let res  = await useDb('SELECT * FROM test.activity')
  ctx.body = res
})
module.exports = router;