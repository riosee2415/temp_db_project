import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import emp from "./db";
import mysql from "mysql2";
import ddalgiRouter from "./routers/ddalgiRouter";

const app = express();
const PORT = 3000;

const connection = mysql.createConnection({
  host: `localhost`,
  port: 3307,
  user: `root`,
  password: `fourleaf0309`,
  database: `edu`,
});

connection.connect();

app.set("view engine", "pug");
app.use(helmet());
app.use(morgan(`dev`));

app.get("/", (req, res) => {
  const sql = `SELECT   e_no,
                        m_no,
                        name,
                        gender,
                        CONCAT(SUBSTRING(mobile, 1, 3), "-", SUBSTRING(mobile, 4, 4), "-",  SUBSTRING(mobile, 8, 4)) as mobile,
                        DATE_FORMAT(birth, '%Y-%m-%d')	AS birth
                 FROM   emp
                ORDER   BY  e_no ASC`;

  const query = connection.query(sql, (error, rows) => {
    if (error) throw Error;

    res.render("db_main", { list: rows });
  });

  // res.render("main", { empList: emp });
});

console.log("1. 나는 app.js얌! 반가워!");
app.use("/page", ddalgiRouter);

app.listen(PORT, () => {
  console.log(`${PORT} SERVER START!`);
});
