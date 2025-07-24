import Playlist from "./../api/v2/models/playlist.js"
import Song from "./../api/v2/models/song.js"

export const getAllSongs = (req, res)=>{
    res.json({message:'Get All Songs '});
}
export const searchSongs = (req, res)=>{
    res.json({message:'Search Songs '});
}
export const addSong = async (req, res)=>{
    // req.body.name
    // req.body.playlistId

    // save song in database
    const song = new Song({name: req.body.song_name})
    await song.save();
    // find playlist from database
    const palylist = await Playlist.findById({_id: req.body.playlistId});
    palylist.songs.push(song._id);
    // put saved song id into playlist
    await palylist.save();

    res.json({message:'Add Song '});
}

export const updateSong = (req, res)=>{
    res.json({message:'Update Song '});
}