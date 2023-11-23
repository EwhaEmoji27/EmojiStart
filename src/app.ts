import express, { Request, Response } from "express";
import path from "path";

const app = express();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '0000',
    database: 'testDB'
});

const getConn = async () => {
    return await pool.getConnection(async (conn: any) => conn);
};



app.get('/testSelect', async (req, res) => {//추후에 정보 조회 쿼리 실행할 route
    /*const conn = await getConn();
    const query = '';
    let [rows, fields] = await conn.query(query, []);
    conn.release();

    res.send(rows);*/
});

app.use(express.static(path.join(__dirname, '../public')));
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen('8001', () => {
    console.log('Server started');
});