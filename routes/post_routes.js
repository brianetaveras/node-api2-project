const express = require('express');
const router = express.Router();
const db = require('../data/db');


router.post('/', async (req, res) => {
    try {
        if (!req.body.title || !req.body.contents) {
            return res.status(400).json({
                message: "Please make sure to include the title and content!"
            })
        }
        db.insert(req.body);
        res.json({
            ...req.body,
            id: data.id
        })

    } catch {
        res.status(500).json({
            message: "Oops! There was an internal server error"
        })
    }
})

router.post('/:id/comments', async (req, res) => {
    try {
        !req.body.text ? res.status(400).json({message: "The text field is required"}) : null
        const post = await db.findById(req.params.id);
        if (post) {
            res.status(201).json(await db.insertComment(req.body))
        }
    } catch {
        res.status(500).json('There was an error while adding your comment')
    }

})

router.get('/', async (req, res) => {
    try {
        res.json(await db.find())
    } catch (err) {
        res.status(500).json({ message: 'There was an error while getting the post list. Contact the Administrator.' })
    }

});
router.get('/:id', async (req, res) => {    
    try {
        const post = await db.findById(req.params.id);
        if (post) {
            return res.status(201).json(post);
        }
        res.status(404).json({ message: "The post was not found." })

    } catch {
        res.status(500).json({
            message: "Error while fetching the resource. Try again later!"
        })
    }

})

router.get('/:id/comments', async (req, res) => {
    try {
        const post = await db.findById(req.params.id);
        if (post.length){
            return res.json(await db.findPostComments(req.params.id))
        }
        res.status(404).json({
            message: "The specified post was not found."
        })
    } catch {
        res.json({ message: "There was an error while fetching the comments. Try again later." })
    }

})


router.delete('/:id', async (req, res) => {

    try{
        const post = await db.findById(req.params.id);
        if(post){
            await db.remove(req.params.id);
            return res.json({message: 'Deleted'})
        }

        res.status(404).json({message: "You are trying to delete something that doesn't exist :("})

    } catch(err) {
        console.log(err)
        res.status(500).json({message: "There was an internal server error. Contact the admin"})
    }



})

router.put('/:id', async (req, res) => {
    try {
        if(!req.body.title || !req.body.contents){
            return res.status(400).json({message: "Request invalid. Please make sure all fields are sent"})
        } 
        const post = await db.findById(req.params.id);
        post ? res.json(await db.update(req.params.id, req.body)) : res.status(404).json({message: "The post you are trying to update doesn't exist"})

    } catch {

    }

})

module.exports = router