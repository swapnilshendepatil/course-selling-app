const {Router} = require('express');
const courseRouter=Router()

courseRouter.post('/purchase',(req,res)=>{
    res.json({
        message:'purchase course endpoint'
    })
})
courseRouter.get('/preview',(req,res)=>{
    res.json({
        message:'preview courses endpoint'
    })
})

module.exports={
    courseRouter
}