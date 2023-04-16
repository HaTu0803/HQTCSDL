import db from '../utils/db.js';

export default {
    async findAllDoitac() {
        const sql = `select * from DOITAC`
        try {
            const list = await db.raw(sql)
            return list
        } catch (error) {
            console.log(error);
        }
    },
    async findAllMonAn_doitac(matdda) {
        const sql = `select * from MONAN where MATD_DA = '${matdda}'`
        try {
            const list1 = await db.raw(sql)
            return list1
        } catch (error) {
            console.log(error);
        }
    },
    async findAllMaDoiTac(macn) {
        const sql = `select * from DOITAC where MACN = '${macn}'`
        try {
            const list = await db.raw(sql)
            return list
        } catch (error) {
            console.log(error);
        }
    },
    async findAllMaThucDon(madt) {
        const sql = `select * from THUCDON_DA where MADT = '${madt}'`
        try {
            const list = await db.raw(sql)
            return list
        } catch (error) {
            console.log(error);
        }
    },
    async findAllMonAn() {
        const sql = `select * from MONAN`
        try {
            const list1 = await db.raw(sql)
            return list1
        } catch (error) {
            console.log(error);
        }
    },
    // async findAllMonAn(mama,matd) {
    //     const sql = `select * from MONAN where MAMA = '${mama}' and MATD_DA='${matd}'`
    //     try {
    //         const list1 = await db.raw(sql)
    //         return list1
    //     } catch (error) {
    //         console.log(error);
    //     }
    // },
    async findAllDonHang(madh) {
        const sql = `select TINHTRANG from DONHANG where MADH = '${madh}'`

        try {
            const list = await db.raw(sql);
            return list
        } catch (error) {
            console.log(error);
        }
    },
    async findAllDanhSach() {
        const sql = `select * from MONAN`

        try {
            const list = await db.raw(sql);
            return list
        } catch (error) {
            console.log(error);
        }
    },
    async Themmondonhang(makh,macn,matdda,matcda,mama,tenma,gia,sl) {
        const sql = `exec P_THEM_CHITIET_DH_DA '${macn}','${makh}',null,'${matdda}','${mama}',N'${tenma}','${sl}','${gia}'`
        try {
            await db.raw(sql)
            console.log(hello)
        } catch (error) {
            console.log(error);
        }
    },
}
