const { Hashtag } = require('../models');

exports.getAllHashtags = async (_req, res) => {
  try {
    const getAllHashtags = await Hashtag.findAll();
    res.status(200).json(getAllHashtags);
  } catch (error) {
    res.status(500).json(error);
  }
}

exports.getHashtagByCategory = async (req, res) => {
  const specificCategory = req.params.category;
  const hashtag = await Hashtag.findAll({ where: { category: specificCategory}});

  if (!hashtag) {
    res.status(404).json({ message: `Hashtag ${hashtagId} does not exist` })
  } else {
    res.status(200).json(hashtag);
  }
}

exports.createHashtag = async (req, res) => {
  try {
    const newHashtag = await Hashtag.create(req.body);

    res.status(201).json(newHashtag);
  } catch (error) {
    const errorMessages = error.errors?.map((e) => e.message);

    res.status(400).json({ errors: errorMessages });
  }
}

exports.updateHashtagById = async (req, res) => {
  const hashtagId = req.params.id;

  try {
    const findHashtagById = await Hashtag.findByPk(hashtagId);
    if(!findHashtagById) {
      res.status(404).json({ message: `Hashtag ${hashtagId} does not exist` })
    } else {
      const updatedHashtag = await Hashtag.update(req.body, { where: { id: hashtagId } });
      res.status(200).json(updatedHashtag);
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

exports.deleteHashtagById = async (req, res) => {
  const hashtagId = req.params.id;

  try {
    const findHashtagById = await Hashtag.findByPk(hashtagId);
    if(!findHashtagById) {
      res.status(404).json({ message: `Hashtag ${hashtagId} does not exist` })
    } else {
      const deletedHashtag = await Hashtag.destroy({ where: { id: hashtagId } });
      res.status(200).json(deletedHashtag);
    }
  } catch (error) {
    res.status(500).json(error);
  }
}