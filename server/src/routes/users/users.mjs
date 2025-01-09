import { Router } from 'express';
import pool from '../../database/db.mjs';
import { encrypt, decrypt } from '../../utils/crypto.mjs';
import dotenv from 'dotenv';
import { checkSchema, validationResult, matchedData } from 'express-validator';
import userSchema from './usersSchema.mjs';

dotenv.config();

const router = Router();
const conn = await pool.getConnection();

router.get("/api/users", async (req, res) => {
  try {
    const sql = "SELECT * FROM users";
    const [ rows ] = await conn.execute(sql);
    conn.release();

    const decryptedRows = rows.map((row) => {
      return {...row, User_Password: decrypt(row.User_Password, process.env.KEY)};
    })

    res.json(decryptedRows);
  } catch(err) {
    console.log(err.message);
  }
});

router.put("/api/users", checkSchema(userSchema), async (req, res) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
    const { username, email, password, id } = matchedData(req);
    const sql = "UPDATE users SET User_Username = ?, User_Email = ?, User_Password = ? WHERE User_ID = ?";
    const [rows, fields] = await conn.execute(sql, [username, email, encrypt(password, process.env.KEY), id]);
    res.json("Update Successful");
  } catch(err) {
    console.log(err.message);
  }
})

export default router;