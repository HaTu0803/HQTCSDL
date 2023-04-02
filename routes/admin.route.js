import express from "express";

const router = express.Router();

router.get('/', function (req, res) {
    res.render('vwAdmin/home', {
        layout: 'Admin/main'
    })
})

router.get('/signup', function (req, res) {
    res.render('vwAdmin/signup', {
        layout: 'Admin/main'
    })
})

export default router