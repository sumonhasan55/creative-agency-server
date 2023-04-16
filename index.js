const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors())


app.get('/',(req,res)=>{
    res.send('Welcome to my create agency website')
})

const services =
    [
        {
            "name": "Web & Mobile design",
            "id": 1,
            "details": "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
            "img": "https://i.ibb.co/zbpB9Qh/service5.png"
        },
        {
            "name": "Graphic design",
            "id": 2,
            "details": "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
            "img": "https://i.ibb.co/S0NrS2r/service1.png"
        },
        {
            "name": "Web development",
            "id": 3,
            "details": "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
            "img": "https://i.ibb.co/prYp19c/service2.png"
        }
    ];

    app.get('/services',(req,res)=>{
        res.send(services)
    })


app.listen(port,()=>{
    console.log(`our server is runnning on port:${port}`)
})