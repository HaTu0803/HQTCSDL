import db from '../utils/db.js';

export default {
    async findAllHopDongDaKy() {
        const sql = `select * from HOPDONG`
        try {
            const list = await db.raw(sql)
            return list
        } catch (error) {
            console.log(error);
        }
    },
    async findAllHopDongChuaKy() {
        const sql = `select * from DON_DK`
        try {
            const list = await db.raw(sql)
            console.log(list);
            return list
        } catch (error) {
            console.log(error);
        }
    }
}
