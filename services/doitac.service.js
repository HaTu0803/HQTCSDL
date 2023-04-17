import db from '../utils/db.js';

export default {
    // async findAllThucDon() {
    //     const sql = `select * from THUCDON_DA`
    //     try {
    //         const list1 = await db.raw(sql)
    //         return list1
    //     } catch (error) {
    //         console.log(error);
    //     }
    // },
    async findAllMaChiNhanh(madt) {
        const sql = `select * from CHINHANH where MADT = '${madt}'`
        try {
            const list1 = await db.raw(sql)
            return list1
        } catch (error) {
            console.log(error);
        }
    },
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
        const sql = `select TT_MA_CN.MACN,TT_MA_CN.MATD_DA,TT_MA_CN.MAMA,SOLUONG,TENMA,MIEUTA,GIA from MONAN JOIN TT_MA_CN
                                                                                                                  ON MONAN.MATD_DA = TT_MA_CN.MATD_DA AND MONAN.MAMA = TT_MA_CN.MAMA where TT_MA_CN.MATD_DA = '${matdda}'`
        try {
            const list1 = await db.raw(sql)
            return list1
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
    async findAllMonAn(mama,matd) {
        const sql = `select TT_MA_CN.MACN,TT_MA_CN.MATD_DA,TT_MA_CN.MAMA,SOLUONG,TENMA,MIEUTA,GIA from MONAN JOIN TT_MA_CN
                                                                                                                  ON MONAN.MATD_DA = TT_MA_CN.MATD_DA AND MONAN.MAMA = TT_MA_CN.MAMA where TT_MA_CN.MAMA = '${mama}' and TT_MA_CN.MATD_DA='${matd}'`
        try {
            const list1 = await db.raw(sql)
            console.log(list1)
            return list1
        } catch (error) {
            console.log(error);
        }
    },
    async insertChiNhanh(dondk,macn,thanhpho,quan,huyen,giomo,giodong) {
        const sql = `exec P_CHINHANH '${dondk}','${macn}','${thanhpho}','${quan}','${huyen}','${giomo}','${giodong}'`
        try {
            await db.raw(sql)
        } catch (error) {
            console.log(error);
        }
    },
    // async insertHopDong(mahd,madt,maddk,manv,mst) {
    //     const sql = `exec P_HOPDONG '${mahd}','${madt}','${maddk}','${manv}','${mst}'`
    //     try {
    //         await db.raw(sql)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // },
    async themDonDangKy(nguoidd,email,sdt,tennh,diachinh,stk,tenquan,thanhpho,quan,diachi,loaiamthuc,sldonhangmn) {
        const sql = `exec P_DON_DK N'${tennh}',N'${diachinh}','${stk}','${email}',N'${tenquan}',N'${thanhpho}',N'${quan}',N'${diachi}',${sldonhangmn},N'${loaiamthuc}','${sdt}',N'${nguoidd}'`
        console.log(sql)
        try {
            await db.raw(sql)
        } catch (error) {
            console.log(error);
        }
    },

    async insertThucDon(madt,matd,mama,tenma,gia) {
        const sql = `exec P_UPDATE_MONAN '${madt}','${matd}','${mama}','${tenma}','${gia}'`
        try {
            await db.raw(sql)
        } catch (error) {
            console.log(error);
        }
    }
    ,async themMonAn(matd,mama,tenma,mieuta,gia) {
        const sql = `exec P_MONAN '${matd}','${mama}',N'${tenma}',N'${mieuta}','${gia}'`
        try {
            await db.raw(sql)
        } catch (error) {
            console.log(error);
        }
    },
    async CapNhatMonAn(tenma,mama,matd,gia) {
        const sql = `exec P_UPDATE_MONAN N'${tenma}','${mama}','${matd}','${gia}'`
        try {
            await db.raw(sql)
        } catch (error) {
            console.log(error);
        }
    },

}
