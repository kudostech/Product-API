// import express from 'express'
// const app = express();

// const PORT = 8090;
// // 
// //single get endpoint to say hello world
// app.get('/', (req, res) => {
//     console.log(req)
// res.send('Hello world!🌍');
// })

// app.get('/list', (req, res)=>{
//     res.send("list items are [MANGO, ORANGE, BANANA, PLANTAIN, CARS, PHONE] ")
// })

// app.listen(PORT, () => {
//     console.log(`server is running at http://localhost:${PORT}`);  
// })

import express from 'express'
import dotenv from 'dotenv'
import sequelize from './config.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config();

const app = express();

app.use(express.json());
app.use( '/api/products', productRoutes);

const PORT = process.env.APP_PORT || 8090;

sequelize.sync({alter: true})
.then(() => {
    console.log(" DATABASE CONNECTION SUCCESSFUL")
    app.listen(PORT, () => {
        console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
    });
})
.catch(err =>{
    console.error("DB CONNECTION FAILED:",err)
});