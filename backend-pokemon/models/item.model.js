const db = require('../db');

const Item = {
  getAll: (callback) => {
    db.query('SELECT * FROM items', callback);
  },

  create: (name, image, callback) => {
    db.query('INSERT INTO items (name, image) VALUES (?, ?)', [name, image], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM items WHERE id = ?', [id], callback);
  }
};

module.exports = Item;
