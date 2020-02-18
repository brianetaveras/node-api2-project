const express = require('express');
const db = require('./data/db');
const server = express();

server.use(express.json())


server.get('/', (req, res)=>{
    res.json('Welcome to the blgos API!')
})




server.listen(4001, () => {
    console.log(
      `%c
   --------------------------------------------------------------
   |       ___                                                   |
   |      (^o^) <Server is running on http://localhost:4001>     |
   |     ((___))                                                 |
   |       ^ ^                                                   |
   --------------------------------------------------------------
          `,
      "font-family:monospace"
    );
  });



