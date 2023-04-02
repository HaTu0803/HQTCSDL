import express from "express";

const router = express.Router();

router.get('/signin', function (req, res) {
    res.render('vwNhanVien/signin', {
        layout: 'NhanVien/main'
    })
})

export default router