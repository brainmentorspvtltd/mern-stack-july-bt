import express from 'express';
import chalk from 'chalk';
import { indexRoute } from './api/v2/routes/index.js';
import { Error404 } from './utils/middlewares/404.js';
import cors from 'cors';
import dotenv from 'dotenv';
import { createConnection } from './utils/db/connection.js';
// import userRoutes from './api/v1/routes/user-routes.js';
// import musicRoutes from './api/v1/routes/music-routes.js';
const app = express();
console.log('Express ', typeof express);
console.log('App ', typeof app);
// app.use(middleware)
dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/api/v2', indexRoute);
// app.use('/api/v1', indexRoute);
// app.use('/api/v1/user', userRoutes);
// app.use('/api/v1/music',musicRoutes);
app.use(Error404);
// app.get('/', (req, res)=>{
//     res.send('<h1>Hello User </h1>');
// })
// app.get('/login', (req, res)=>{
//     res.send('<h2>Login Page.....</h2>');
// })
const promise = createConnection();
promise.then(()=>{
    console.log('DB Connection Created ... ');
    const server = app.listen(7777, (err)=>{
    if(err){
        console.log(chalk.redBright.italic('Server Crash '), err);
    }
    else{
        console.log(chalk.greenBright.bold('Server Up and Running '), server.address().port);
    }
})
}).catch(err=>{
    console.log(chalk.redBright.bold('DB Crash......... '), err);
})

