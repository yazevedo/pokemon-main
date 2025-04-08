const Item = require('../models/item.model');

exports.getAllItems = (req, res) => {
  Item.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.createItem = (req, res) => {
  const name = req.body.name;
  const image = req.file.filename;

  Item.create(name, image, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: result.insertId, name, image });
  });
};

exports.deleteItem = (req, res) => {
  const id = req.params.id;

  Item.delete(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ deleted: result.affectedRows });
  });
};
