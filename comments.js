// create web server
    const express = require('express');
const app = express();

// get comments
app.get('/comments', (req, res) => {
    res.json({
        data: [
            { id: 1, content: 'hello' },
            { id: 2, content: 'world' }
        ]
    });
});

// create comment
app.post('/comments', (req, res) => {
    res.json({
        data: { id: 3, content: 'new comment' }
    });
});

// update comment
app.put('/comments/:id', (req, res) => {
    res.json({
        data: { id: req.params.id, content: 'new content' }
    });
});

// delete comment
app.delete('/comments/:id', (req, res) => {
    res.json({
        data: { id: req.params.id, content: 'deleted' }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});