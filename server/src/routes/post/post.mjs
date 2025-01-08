import { Router } from 'express';
import multer from 'multer';
import pool from '../../database/db.mjs';
import dotenv from 'dotenv';
dotenv.config();

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const name = `${Date.now()}-${file.originalname}`;
    cb(null, name);
  }
})

const upload = multer({ storage: storage });

const conn = await pool.getConnection();
const __dirname = import.meta.dirname;

router.post('/api/post', upload.single('file-photo'), async (req, res) => {
  const { id } = req.session.user;
  const { caption } = req.body;
  const photoDest = req.file.filename;
  const [result] = await conn.query('INSERT INTO `post` (`Post_User`, `Post_Caption`, `Post_Photo`) VALUES (?, ?, ?)', [id, caption, photoDest]);
  conn.release();
  res.json({ message: 'Post uploaded successfully' });
});

router.get('/api/posts', async (req, res) => {
  const [posts] = await conn.query('SELECT `Post_ID`, `Post_Photo`, `Post_Caption`, `Post_Likes`, `Post_Comments`, `users`.`User_Username` FROM `post` JOIN `users` ON `post`.`Post_User` = `users`.`User_ID`');
  conn.release();
  res.json(posts);
});

export default router;