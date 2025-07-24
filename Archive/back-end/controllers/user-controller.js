import User from "./../api/v2/models/user.js"
import Playlist from "./../api/v2/models/playlist.js"

export const login = async (req, res)=>{
    // res.json({message:'Login '});

    try {
        const dbUser = await User.findOne(req.body).exec();
        if(!dbUser){
            console.log("not found")
        } else {
            console.log("found")
        }
        res.status(200).json({message: "done", dbUser});
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
export const register = async (req, res)=>{
    // console.log('Data rec ', req.body);
    // const userModel = new User(req.body);
    // userModel.save()
    // res.json({message:'Register '});
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
export const profile = (req, res)=>{
    res.json({message:'Profile '});
}

// Add playlist to user
export const createPlaylist = async (req, res) => {
    try {
        const playlist = new Playlist({ name: req.body.name });
        await playlist.save();
        const user = await User.findById(req.params.userId);
        user.playlists.push(playlist._id);
        await user.save(); // update
        res.status(201).json(playlist);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}