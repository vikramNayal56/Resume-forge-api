const express = require("express");
const router = express.Router();
const exportController = require("../controllers/atsTailorExportController");
const auth = require("../middleware/auth");

router.post("/pdf", auth, exportController.exportPdf);
router.post("/docx", auth, exportController.exportDocx);

module.exports = router;