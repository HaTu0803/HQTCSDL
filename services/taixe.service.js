import db from "../utils/db.js";

export default {

    async findAllDonHangTheoMa(madh) {
        const sql = `select *
                     from DONHANG
                     where MATX is NULL
                       and MADH = '${madh}'`
        try {
            const list = await db.raw(sql)
            console.log(list);
            return list
        } catch (error) {
            console.log(error);
        }
    },
    async findAllDonHang() {
        const sql = `select * from DONHANG where MATX is NULL AND TINHTRANG = N'Đã gói hàng'`
        try {
            const list = await db.raw(sql)
            console.log(list);
            return list
        } catch (error) {
            console.log(error);
        }
    },
    async Taxixenhandon(matx,madh) {
        const sql = `exec TX_XAC_NHAN_DH '${matx}','${madh}'`
        try {
            const list = await db.raw(sql)
            console.log(list);
            return list
        } catch (error) {
            console.log(error);
        }
    },
}
