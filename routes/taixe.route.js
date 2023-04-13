import express from "express";
// import TaixeService from "../services/taixe.service.js";

const router = express.Router();

router.get('/signin', function (req, res) {
    res.render('vwTaiXe/signin', {
        layout: 'TaiXe/main'
    })
})
router.get('/home', function (req, res) {
    res.render('vwTaiXe/home', {
        layout: 'TaiXe/main1'
    })
})
export default router