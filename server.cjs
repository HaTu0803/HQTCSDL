const http = require('http');
const sql = require('mssql');
const config = {
  server: 'localhost',
  user: 'sa',
  password: '123',
  database: 'QLGH',
  options: {
    trustServerCertificate: true
  }
};
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  (async () => {
    try {
      await sql.connect(config);
      console.log('Connected to Azure SQL Database');
      const result = await sql.query`SELECT * FROM NHANVIEN`;
      if (result.recordset) {
        let tableHtml = '<table><tr><th>ID</th><th>Tên nhân viên</th></tr>';
        result.recordset.forEach(row => {
          tableHtml += `<tr><td>${row.MANV}</td><td>${row.TENNV}</td></tr>`;
        });
        tableHtml += '</table>';
        res.end(tableHtml);
      } else {
        res.end('Không có dữ liệu');
      }
    } 
    catch (err) {
      console.error('Error connecting to Azure SQL Database', err);
    } finally {
      // Close the SQL connection when the script is finished
      sql.close();
    }
  })();
})
server.listen(3000, () => {
  console.log('Server is listening on port 3000...');
});


