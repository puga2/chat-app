const express = require('express');
const { protectRoute } = require('../middleware/auth.middleware');
const { getUersForSidebar, getMessages, sendMessage } = require('../controllers/message.controller');

const router = express.Router();

router.get('/users',protectRoute,getUersForSidebar);
router.get("/:id",protectRoute,getMessages);
router.post("/send/:id",protectRoute,sendMessage);
module.exports  = router;