import express from "express";

const router = express.Router();

router.get('/signin', function (req, res) {
    res.render('vwTaiXe/signin', {
        layout: 'TaiXe/main'
    })
})
router.get('/home', function (req, res) {
    res.render('vwTaiXe/home', {
        layout: 'vwTaiXe/main1'
    })
})
export default router