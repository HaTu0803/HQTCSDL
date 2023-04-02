import express from "express";

const router = express.Router();

router.get('/signin', function (req, res) {
    res.render('vwDoiTac/signin', {
        layout: 'DoiTac/main'
    })
})

router.post('/signin', function (req, res) {
    const username = req.body.username
    const password = req.body.password

    // Check dang nhap


    res.redirect("/doitac/home")
})

router.get('/signup', function (req, res) {
    res.render('vwDoiTac/signup', {
        layout: 'DoiTac/main'
    })
})

router.post('/signup', function (req, res) {
    const username = req.body.username
    const password = req.body.password

    // Check dang nhap


    res.redirect("/doitac/home")
})
router.get('/home', function (req, res) {
    res.render('vwDoiTac/home', {
        layout: 'DoiTac/main1'
    })
})
router.get('/dangkyhopdong', function (req, res) {
    res.render('vwDoiTac/dangkyhopdong', {
        layout: 'DoiTac/main1'
    })
})
router.get('/thongtincanhan', function (req, res) {
    res.render('vwDoiTac/thongtincanhan', {
        layout: 'DoiTac/main1'
    })
})
router.get('/chinhanh', function (req, res) {
    res.render('vwDoiTac/chinhanh', {
        layout: 'DoiTac/main1'
    })
})
router.get('/doanhthu', function (req, res) {
    res.render('vwDoiTac/doanhthu', {
        layout: 'DoiTac/main1'
    })
})
export default router