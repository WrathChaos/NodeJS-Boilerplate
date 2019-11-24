const express = require("express");
import noteController from "../modules/note/core/controller/noteController";

const router = express.Router();
router.use(noteController);
module.exports = router;
