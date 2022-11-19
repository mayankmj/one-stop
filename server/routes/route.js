// api end point
import express from 'express'

import { signupUser } from '../controller/user-controller.js'; // extension compulsory

const router = express.Router(); 

router.post('/signup' , signupUser);

export default router;