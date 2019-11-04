const express = require('express');

// database access using knex
const knex = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    // list of posts
    // SELECT * from Posts;
    knex.select('*').from('posts')
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(err => res.status(500).json({ error: 'Failed to get posts from database'}))
});

router.get('/:id', (req, res) => {
    knex.select('*').from('posts').where( 'id', '=', req.params.id).first()
    .then(post => res.status(200).json(post))
    .catch(err => res.status(500).json({ error: 'Failed to fetch post' }))

});

router.post('/', (req, res) => {
    knex.insert(req.body, 'id')
    .into('posts')
    .then(ids => res.status(200).json(ids))
    .catch(err => res.status(500).json({ error: 'failed to post post'}))

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;