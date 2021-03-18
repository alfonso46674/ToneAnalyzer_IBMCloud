const router = require('express').Router()

router.get('/',(req,res)=>{
    res.json({
        alumno : "Alfonso Ramirez Castro",
        servicio: "Cloud Foundry en IBM Cloud"
    })
})

module.exports = router