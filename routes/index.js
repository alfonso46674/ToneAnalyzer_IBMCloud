const router = require('express').Router()

const autoresRoute = require("./autor")



router.use('/autor', autoresRoute)


router.get('/',(req,res)=>{
    res.json({
        paths:[
            {get :"/autor"}
        ]
    })
})

module.exports = router