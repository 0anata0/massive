import express from 'express'
import { bookingController, loggedInController, loginController, registerController } from '../controllers/authController'
import CekToken from '../middleware/CekToken'
import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      return cb(null, "./public/images");
  },
  filename: function (req, ktp, cb) {
      return cb(null, `${Date.now()}_${ktp.originalname}`);
  },
});

const upload = multer({ storage });

const router = express.Router()

router.post('/login', loginController)
router.post('/register', registerController)
router.get('/', CekToken, loggedInController)
router.post('/booking', upload.single('ktp'), bookingController)

export default router


