const router = require('express').Router()
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

//tone Analyzer authentication
const toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
    authenticator: new IamAuthenticator({
      apikey: process.env.APIKEY,
    }),
    serviceUrl: process.env.URL,
  });


router.post('/', async(req,res)=>{
    const toneParams = {
        toneInput: { 'text': req.body },
        contentType: 'text/plain; charset=utf-8',
      };

    let response = await toneAnalyzer.tone(toneParams)

    res.json({
        "tonesArray":response.result.document_tone.tones
    })
})

module.exports = router