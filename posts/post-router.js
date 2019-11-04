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

});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;