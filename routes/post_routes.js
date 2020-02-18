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

router.post('/:id/comments', async (req, res)=>{
    try{
        
        const post = await db.findById(req.params.id);
    
    
        if (post){
            res.status(201).json(await db.insertComment(req.body))
        }
    } catch {
        res.status(500).json('There was an issue adding the comment. Try again later.')
    }
    
})

router.get('/', async (req, res)=>{
    try{
        const posts = await db.find()
        res.json(posts)
    } catch (err){
        res.status(500).json({message: 'There was an error while getting the post list. Contact the Administrator.'})
    }

}
)
router.get('/:id', async (req, res)=>{
    try{
        res.status(201).json(await db.findById(req.params.id))
    } catch {
        res.status(500).json({
            message: "Error while fetching the resource. Try again later!"
        })
    }
    
})

router.get('/:id/comments', async (req, res)=>{
    try{
        res.json(await db.findPostComments(req.params.id))
    } catch {
        res.json({message: "There was an error while fetching the comments. Try again later."})
    }
    
})


router.delete('/:id', (req, res)=>{
    res.json('yoyoyo, soy un post!')
    
})

router.put('/:id', (req, res)=>{
    res.json('yoyoyo, soy un post!')

})

module.exports = router