import db from '../utils/db.js';

export default {
    async findAllHopDongDaKy() {
        const sql = `select * from HOPDONG`
        try {
            const list = await db.raw(sql)
            console.log(list);
            return list
        } catch (error) {
            console.log(error);
        }
    }
}
