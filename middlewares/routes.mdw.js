import AdminRoute from "../routes/admin.route.js";
import DoiTacRoute from "../routes/doitac.route.js";
import KhachhangRoute from "../routes/khachhang.route.js";
import NhanvienRoute from "../routes/nhanvien.route.js";
import TaixeRoute from "../routes/taixe.route.js";

export default function (app) {
  app.get('/', function (req, res) {
    res.render('home', {
      layout: 'mainHome'
    })
  })
  app.use('/admin',AdminRoute)
  app.use('/doitac',DoiTacRoute)
  app.use('/khachhang',KhachhangRoute)
  app.use('/nhanvien',NhanvienRoute)
  app.use('/taixe',TaixeRoute)
}