import db from '../utils/db.js';

export default {
    async findAllMonAn() {
        const sql = `select * from MONAN`
        try {
            const list = await db.raw(sql)
            return list
        } catch (error) {
            console.log(error);
        }
    }
}
