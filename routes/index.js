const router = require('express').Router()

const autoresRoute = require("./autor")
const toneAnalyzerRoute = require("./toneAnalyzer")


router.use('/autor', autoresRoute)
router.use('/toneAnalyzer',toneAnalyzerRoute)

router.get('/',(req,res)=>{
    res.json({
        paths:[
            {get :"/autor"},
            {post: '/toneAnalyzer'}
        ]
    })
})

module.exports = router