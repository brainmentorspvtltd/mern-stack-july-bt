import User from "./../api/v2/models/user.js"

export const login = (req, res)=>{
    res.json({message:'Login '});
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