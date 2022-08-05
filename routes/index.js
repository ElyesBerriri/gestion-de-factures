import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

/*const express = require ("express");
const { getUsers, Register, Login, Logout } = require ("../controllers/Users");
const  verifyToken = require ("../middleware/VerifyToken");
const  refreshToken = require ("../controllers/RefreshToken");*/
 
const router = express.Router();
 
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
 
export default router;
//module.exports = router;