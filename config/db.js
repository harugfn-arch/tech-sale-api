const sql = require("mssql");

const config = {
    user: "sa",
    password: "Vipertricks99@",
    server: "localhost",
    database: "tech_store",
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

const pool = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log("Kết nối SQL Server thành công");
        return pool;
    })
    .catch(err => console.log("DB Error:", err));

module.exports = {
    sql, pool
};