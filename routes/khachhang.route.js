import express from "express";
import AdminService from "../services/khachhang.service.js";
import KhachhangService from "../services/khachhang.service.js";

const router = express.Router();

router.get('/signin', function (req, res) {
    res.render('vwKhachHang/signin', {
        layout: 'KhachHang/main'
    })
})

router.post('/signin', function (req, res) {
    const username = req.body.username
    const password = req.body.password

    // Check dang nhap


    res.redirect("/khachhang/home")
})
router.get('/home', function (req, res) {
    res.render('vwKhachHang/home', {
        layout: 'KhachHang/main1'
    })
})
router.get('/theodoidonhang', function (req, res) {
    res.render('vwKhachHang/follow', {
        layout: 'KhachHang/main1'
    })
})
router.get('/timkiem', async function (req, res) {
    const list = await KhachhangService.findAllMonAn()
    console.log(list)
    res.render('vwKhachHang/news', {
        list: list,
        empty: list.length === 0,
        layout: 'KhachHang/main1'

    })
})
router.get('/danhgiadonhang', function (req, res) {
    res.render('vwKhachHang/rate', {
        layout: 'KhachHang/main1'
    })
})

export default router