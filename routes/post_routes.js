const express = require('express');
const router = express.Router;


router.post('/', (req, res)=>{

    res.json('yoyoyo, soy un post!')
    
})

router.post('/:id/comments', (req, res)=>{
    res.json('yoyoyo, you are posting stuff to an endpoint!')

})

router.get('/', (req, res)=>{
    
}
)
router.get('/:id', (req, res)=>{
    
})

router.get('/:id/comments', (req, res)=>{
    
})


router.delete('/:id', (req, res)=>{

})

router.put('/:id', (req, res)=>{
    
})