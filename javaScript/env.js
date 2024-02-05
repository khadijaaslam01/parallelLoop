// env.js
import dotenv from "dotenv";
dotenv.config();

console.log(process.env);
console.log(process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASSWORD);
