import mongoose from "mongoose"

const LinkSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : [true, "Title wajib di isi"],
            unique : true,
            trim : true
        },
        icon : {
            type : String,
            required : true
        },
        url : {
            type : String,
            required : true,
            unique : true
        },
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true
        }
    },
    {
        timestamps : true
    }
)

const LinkModel = mongoose.Model("Link", LinkSchema)

export default LinkModel