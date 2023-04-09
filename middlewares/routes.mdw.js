import AdminRoute from "../routes/admin.route.js";
import DoiTacRoute from "../routes/doitac.route.js";
import KhachhangRoute from "../routes/khachhang.route.js";
import NhanvienRoute from "../routes/nhanvien.route.js";
import TaixeRoute from "../routes/taixe.route.js";
import AccountRoute from "../routes/account.route.js";
import authWithRequiredPermission from "./auth.mdw.js";

export default function (app) {
  app.get('/', function (req, res) {
    res.render('home', {
      layout: 'mainHome'
    })
  })

  app.use('/account',AccountRoute)
  app.use('/admin',AdminRoute)
  app.use('/doitac',authWithRequiredPermission(2),DoiTacRoute)
  app.use('/khachhang',authWithRequiredPermission(0),KhachhangRoute)
  app.use('/nhanvien',authWithRequiredPermission(1),NhanvienRoute)

  app.use('/taixe',TaixeRoute)
}