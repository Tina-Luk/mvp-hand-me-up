const express = require('express');
const controller = require('./server/controller.js');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('client/dist'));

app.get('/posts', (req, res) => {
	controller.posts.get(req, res);
});

app.post('/posts', (req, res) => {
	controller.posts.post(req, res);
});

app.put('/posts/:id', (req, res) => {
	controller.posts.update(req, res);
});

app.delete('/post/:id', (req, res) => {
	controller.posts.delete(req, res);
});

app.get('/user/:id', (req, res) => {
	controller.user.get(req, res);
});

app.post('/user', (req, res) => {
	controller.user.post(req, res);
});

app.get('/login', (req, res) => {
	controller.user.login(req, res);
});

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});
