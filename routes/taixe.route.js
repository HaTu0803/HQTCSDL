import express from "express";

const router = express.Router();

router.get('/signin', function (req, res) {
    res.render('vwTaiXe/signin', {
        layout: 'TaiXe/main'
    })
})

export default router