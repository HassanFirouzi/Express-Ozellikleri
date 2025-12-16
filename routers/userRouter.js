import express from 'express'

const router = express.Router();

router
    .route('/v1')  

    //^ iki ayrı GET isteği örneği - birincisi ana route'tan çekiyor.
    .get((req, res) => {
        res.status(200).send("Kullanicilara GET istegi atildi.")
    })
    
    .post((req,res)=>{
        res.status(201).send('Kullanicilara POST istegi atildi.')
    })

    .patch((req,res)=>{
        res.status(200).send('Kullanicilara PATCH istegi atildi.')
    })

    .delete((req,res)=>{
        res.status(204).send('Kullanicilara DELETE istegi atildi.')
    })

router
    .route('/v2')
    //^ ikincisi kendi yolunu belirliyor
    .get((req,res)=>{
        res.status(200).send("version 2'ye GET istegi atildi")
    })

    // catch-all method (geri kalan hepsini yakalayan rota)
    router
        .use((req,res) =>{
            res. status (404). send ("Burouterın sadece v1, v2 ve v3 sürümleri bulunmaktadır.")
        })


    export default router;
