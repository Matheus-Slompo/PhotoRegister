const DiskStorage = require('../providers/DiskStorage');
const knex = require('../database/knex');
const AppError = require('../utils/AppError');

class photoController {
  async create(request, response) {
    const photoFilename = request.file.filename;
    const diskStorage = new DiskStorage();
    const filename = await diskStorage.saveFile(photoFilename);

    await knex('photos').insert({
      url: filename
    });

    return response.json({ filename });
  }
  async update(request, response) {
    const { id } = request.params;
    const photoFilename = request.file.filename;
    const diskStorage = new DiskStorage();

    const photo = await knex('photos').where({ id }).first();

    if (!photo) {
      throw new AppError('No photo founded');
    }

    if (photo.url) {
      await diskStorage.deleteFile(photo.url);
    }

    const filename = await diskStorage.saveFile(photoFilename);

    photo.url = filename;

    await knex('photos').where({ id }).update(photo);

    return response.json(photo);
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex('photos').where({ id }).delete();

    return response.json();
  }
}

module.exports = photoController;
