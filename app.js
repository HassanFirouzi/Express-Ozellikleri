
import express from "express";
import userRouter from './routers/userRouter.js'
import postRouter from './routers/postRouter.js'


//? express kullanarak bir uygulama(sunucu) örneği alırız.

// const server = http.createServer() // düz nodejs kullansaydık
const app = express(); //* express yöntemi

// middlewareler ve rotaların(endpointler) belirlenmesi gerekir.

app.get("/", (req, res) => {
  res.status(200).send("Sunucu saglik testi basarili")
})

// kullanici endpointi istekleri
app.use('/users', userRouter)

// gönderi endpointi istekleri
app.use('/posts', postRouter)


// catch-all Route (geri kalan hepsini yakalayan rota)

app.use((req,res)=>{
    res.status(404).send('Istek attiginiz endpoint veya method gecersiz.')
})

// sunucuyu ayağa kaldırma kısmı
const PORT = 4000;

app.listen(PORT, () => {
  console.log("Sunucu Baslatildi");
})


