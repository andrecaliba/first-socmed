import pool from '../../database/db.mjs';
import { Router } from 'express';
import { checkSchema, validationResult, matchedData } from 'express-validator';
import loginSchema from './loginSchema.mjs';
import { encrypt, decrypt } from '../../utils/crypto.mjs';
import dotenv from 'dotenv';

dotenv.config();
const router = Router();

router.post('/api/login', checkSchema(loginSchema), async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ errors: result.array() });
  }
  const { email, password } = matchedData(req);
  try {
    const con = await pool.getConnection();
    const sql = 'SELECT * FROM `users` WHERE `user_email` = ?';
    const [rows, fields] = await con.execute(sql, [email]);

    if(rows.length === 0) {
      con.release();
      return res.status(401).json({ errors: [{ msg: 'Invalid credentials' }] });
    }

    const user = rows[0];
    const decryptedPassword = decrypt(user.User_Password, process.env.KEY);
    if(password !== decryptedPassword) {
      con.release();
      return res.status(401).json({ errors: [{ msg: 'Invalid credentials' }] });
    }

    req.session.visited = true;
    req.session.user = { id: user.User_ID };
    res.json({ msg: 'Login successful' });
    con.release();

  } catch(err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

export default router;