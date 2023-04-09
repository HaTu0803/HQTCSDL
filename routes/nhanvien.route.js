import express from "express";
import nhanvienService from "../services/nhanvien.service.js";
import NhanvienService from "../services/nhanvien.service.js";

const router = express.Router();

router.get('/signin', function (req, res) {
    res.render('vwNhanVien/signin', {
        layout: 'NhanVien/main'
    })
})
router.post('/signin', function (req, res) {
    const username = req.body.username
    const password = req.body.password

    // Check dang nhap


    res.redirect("/nhanvien/home")
})
router.get('/home', function (req, res) {
    res.render('vwNhanVien/home', {
        layout: 'NhanVien/main1'
    })
})

router.get('/dsHopDongChuaKy', async function (req, res) {
    const list = await NhanvienService.findAllHopDongChuaKy()
    res.render('vwNhanVien/dsHopDongChuaKy', {
        layout: 'NhanVien/main1',
        list: list
    })
})

router.get('/dsHopDongDaKy', async function (req, res) {
    const list = await NhanvienService.findAllHopDongDaKy()
    res.render('vwNhanVien/dsHopDongDaKy', {
        layout: 'NhanVien/main1',
        list: list
    })
})



export default router