const User = require("../models/user.model");
const Message = require("../models/message.model");
const { cloudinary_js_config } = require("../lib/cloudinary");
module.exports.getUersForSidebar = async (req,res)=>{
    try{
        const loggedInUserId = req.user._id;
        // $ne = mean not equal
        const filteredUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);

    }catch(err){
        console.log("Error in getUersForSidebar controller",err.message);
        res.status(500).json({message:"Internal server error"});
    }
}
module.exports.getMessages = async (req,res)=>{
    try{
        const {id:userToChatId}  = req.params;
        const myId = req.user._id;

        const messages  = await Message.find({
            $or:[ // or condition
                {senderId:myId,receivedId:userToChatId},
                {senderId:userToChatId,receivedId:myId}
            ]
        })
        res.status(200).json(messages);
    }catch(error){
        console.log("Error in getMessages controller",error.message);
        res.status(500).json({message:"Internal server error"});
    }
}
module.exports.sendMessage = async (req,res)=>{
    try{
        const {text,image} = req.body;
        const {id:receivedId} = req.params;
        const myId = req.user._id;

        let imageUrl ;
        if(image){
            const uploadResponse = await cloudinary_js_config.uploder.upload(image);
            imageUrl = uploadResponse.secure_url;
        }
        const newMessage = await Message({
            senderId:myId,
            receivedId,
            text:text,
            image:imageUrl,
        });
        await newMessage.save();

        // todo: realtime functionality goese here => socket.io
        
        res.status(201).json(newMessage);

    }catch(error){
        console.log("Error in sendMessage controller",error.message);
        res.status(500).json({message:"Internal server error"});
    }
}