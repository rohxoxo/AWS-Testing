const express = require('express')
const http = require('http')
const bodyparser = require('body-parser')
const cookieParser = require('cookie-parser')
const compression = require ('compression');
const cors = require ('cors');


const app = express();
const server = http.createServer(app);



app.use(cors({
  credentials: true,
}));

app.use(express.json());
app.use(compression());
app.use(cookieParser());
app.use(bodyparser.json());


app.use('/', (req, res)=>{
  res.status(200).json("Hello Denis");
});

const myPort = 3000;

const startServer = async () => {
  server.listen(myPort, () => {
    console.log(`Server running on http://localhost:${myPort}`);
  });
};

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});