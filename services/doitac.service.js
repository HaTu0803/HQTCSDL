import db from '../utils/db.js';

export default {
    async findAllThucDon() {
        const sql = `select * from THUCDON_DA`
        try {
            const list = await db.raw(sql)
            return list
        } catch (error) {
            console.log(error);
        }
    },
    async findAllMonAn_doitac() {
        const sql = `select * from MONAN`
        try {
            const list = await db.raw(sql)
            return list
        } catch (error) {
            console.log(error);
        }
    }
}
