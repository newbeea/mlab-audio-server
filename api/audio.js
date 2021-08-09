var express = require('express');
var path = require('path');
var router = express.Router();
var mlabAudio = require('mlab-audio')
router.post('/remote', function(req, res, next) {
	var url = req.body.url || 'https://img.alicdn.com/imgextra/i1/6000000004244/TB2UoM4bKrAQeBjSZFNXXcgJVXa_!!0-47-open_wuxian.aac';
	var dist = '/acs/data/';
	mlabAudio.remote(url, dist)
	.then( r => res.send(r) )
	.catch( e => {
		console.log(e)
		res.send(e) 
	})
});
router.post('/local', function(req, res, next) {
	var mp3 = req.body.mp3 || 'TB2UoM4bKrAQeBjSZFNXXcgJVXa___0-47-open_wuxian.mp3';
	var dist = '/acs/data/';
	mlabAudio.local(dist + mp3)
	.then( r => res.send(r) )
	.catch( e => {
		console.log(e)
		res.send(e) 
	})
});
router.get('/remote', function(req, res, next) {
	var url = req.query.resource || 'https://img.alicdn.com/imgextra/i1/6000000004244/TB2UoM4bKrAQeBjSZFNXXcgJVXa_!!0-47-open_wuxian.aac';
	var dist = './'
	mlabAudio.remote(url, dist)
	.then( r => res.send(r) )
	.catch( e => {
		console.log(e)
		res.send(e) 
	})
});
module.exports = router;

