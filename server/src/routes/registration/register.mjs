import pool from '../../database/db.mjs';
import { Router } from 'express';
import { body, checkSchema, validationResult, matchedData } from 'express-validator';
import registerSchema from './registerSchema.mjs';
import { encrypt, decrypt } from './crypto.mjs';
import dotenv from 'dotenv';

dotenv.config();
const router = Router();

router.post('/api/register', checkSchema(registerSchema), async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result.array());
    return res.status(400).json({ errors: result.array() });
  }

  const { username, email, password } = matchedData(req);
  try {
    const con = await pool.getConnection();
    const sql = 'INSERT INTO `users` (`user_username`, `user_email`, `user_password`) VALUES (?, ?, ?)';
    const encryptedPassword = encrypt(password, process.env.KEY);
    const [result, fields] = await con.execute(sql, [username, email, encryptedPassword]);
    con.release();
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
})

export default router;