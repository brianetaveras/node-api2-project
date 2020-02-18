const express = require('express');
const router = express.Router();
const db = require('../data/db');


router.post('/', async (req, res)=>{

    if (!req.body.title || !req.body.contents){
        return res.status(400).json({
            message: "Please make sure to include the title and content!"
        })
    }
    const data = await db.insert(req.body);

    res.json({
        ...req.body,
        id: data.id
    })
    
})

router.post('/:id/comments', (req, res)=>{
    res.json('yoyoyo, you are posting stuff to an endpoint!')
    
})

router.get('/', (req, res)=>{
    res.json('yoyoyo, soy un post!')
    
}
)
router.get('/:id', (req, res)=>{
    res.json('yoyoyo, soy un post!')
    
})

router.get('/:id/comments', (req, res)=>{
    res.json('yoyoyo, soy un post!')
    
})


router.delete('/:id', (req, res)=>{
    res.json('yoyoyo, soy un post!')
    
})

router.put('/:id', (req, res)=>{
    res.json('yoyoyo, soy un post!')

})

module.exports = router