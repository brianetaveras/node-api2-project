const express = require('express');
const server = express();
const postRoutes = require('./routes/post_routes');

server.use(express.json())

server.use('/api/posts', postRoutes)

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



