const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('../configs/upload');
const PhotoController = require('../controllers/photoControllers');

const photoRoutes = Router();
const photosController = new PhotoController();

const upload = multer(uploadConfig.MULTER);

photoRoutes.post('/', upload.single('aaa'), photosController.create);
photoRoutes.put('/:id', upload.single('aaa'), photosController.update);
/*photoRoutes.get('/:id', photosController.show); */
photoRoutes.delete('/:id', photosController.delete);

module.exports = photoRoutes;
