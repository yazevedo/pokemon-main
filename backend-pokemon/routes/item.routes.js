const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.controller');
const multer = require('multer');
const path = require('path');

// Configuração do multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

router.get('/', itemController.getAllItems);
router.post('/', upload.single('image'), itemController.createItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;
