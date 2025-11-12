const Blood = require('../models/Blood');

const addBlood = async (req, res) => {
  try {
    const { bloodGroup, donorId, collectionDate } = req.body;
    
    const newBlood = new Blood({
      bloodGroup,
      donorId,
      collectionDate,
      status: 'available'
    });
    
    await newBlood.save();
    res.json({ success: true, blood: newBlood });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAvailableBlood = async (req, res) => {
  try {
    const { bloodGroup } = req.params;
    const blood = await Blood.find({ bloodGroup, status: 'available' });
    res.json({ success: true, blood });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDonorHistory = async (req, res) => {
  try {
    const { donorId } = req.params;
    const history = await Blood.find({ donorId });
    res.json({ success: true, history });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const requestBlood = async (req, res) => {
  try {
    const { bloodGroup, quantity, hospitalId } = req.body;
    // Logic to request blood
    res.json({ success: true, message: 'Request submitted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addBlood, getAvailableBlood, getDonorHistory, requestBlood };
