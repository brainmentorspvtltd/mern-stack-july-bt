// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
    name: String
});

// module.exports = mongoose.model('Song', songSchema);
const Song = mongoose.model('Song', songSchema);
export default Song;
