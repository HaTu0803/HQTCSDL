import express from "express";

const router = express.Router();

router.get('/', function (req, res) {
    res.render('vwDoiTac/home', {
        layout: 'DoiTac/main'
    })
})

router.get('/signup', function (req, res) {
    res.render('vwDoiTac/signup', {
        layout: 'DoiTac/main'
    })
})
router.get('/dangkyhopdong', function (req, res) {
    res.render('vwDoiTac/dangkyhopdong', {
        layout: 'DoiTac/main1'
    })
})

export default router