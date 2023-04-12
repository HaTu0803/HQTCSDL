import AdminRoute from "../routes/admin.route.js";
import DoiTacRoute from "../routes/doitac.route.js";
import KhachhangRoute from "../routes/khachhang.route.js";
import NhanvienRoute from "../routes/nhanvien.route.js";
import TaixeRoute from "../routes/taixe.route.js";
import AccountRoute from "../routes/account.route.js";
import authWithRequiredPermission from "./auth.mdw.js";
import DoitacService from "../services/doitac.service.js";

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
  app.use('/taixe',authWithRequiredPermission(3),TaixeRoute)




// assuming you have an API endpoint that receives the MADT value
// and returns the corresponding MATDDA data in JSON format
  app.get('/api/matdda', async function (req, res) {
    const { madt } = req.query;
    const list = await DoitacService.findAllMaThucDon(madt);
    res.send(list);
  });
  app.get('/api/mama', async function (req, res) {
    const { matdda } = req.query;
    const list1 = await DoitacService.findAllMonAn_doitac(matdda);
    res.send(list1);
  });
  app.get('/api/monan', async function (req, res) {
    const { mama,matd } = req.query;
    const list2 = await DoitacService.findAllMonAn(mama,matd);
    res.send(list2);
  });
}