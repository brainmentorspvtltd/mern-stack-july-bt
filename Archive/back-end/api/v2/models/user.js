import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    playlists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' }]
});

const User = mongoose.model('User', userSchema);
export default User;
