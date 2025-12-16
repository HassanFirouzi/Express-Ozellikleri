import express from 'express'

const router = express.Router();

router.route('/')
    .get((req,res)=>{
        res.status(200).send('Gonderi tarafina GET istegi attiniz.')
    })
    .post((req,res)=>{
        res.status(200).send('Gonderi tarafina POST istegi attiniz.')
    })
    .patch((req,res)=>{
        res.status(200).send('Gonderi tarafina PATCH istegi attiniz.')
    })
    .delete((req,res)=>{
        res.status(200).send('Gonderi tarafina DELETE istegi attiniz.')
    })

       // catch-all method (geri kalan hepsini yakalayan rota)
    router
        .use((req,res) =>{
            res. status (404). send ("Burouterın sadece v1 sürümü bulunmaktadır.")
        })

    export default router;