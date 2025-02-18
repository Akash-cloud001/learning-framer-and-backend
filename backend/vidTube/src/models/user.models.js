// users [icon: user] {
//     id string pk --> automatically added
//     username string
//     email string
//     fullName string
//     avatar string
//     coverImage string
//     watchHistory ObjectId[] videos
//     password string
//     refreshToken string
//     createdAt Date
//     updatedAt Date
//   }

import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            index: true
        },
        fullname:{
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar:{
            type: String, //cloudinary url
            required: true,
        },
        coverImage:{
            type: String, //cloudinary url
        },
        watchHistory:[
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password:{
            type: String,
            required: [true, "Password is required"],
        },
        refreshToken:{
            type: String
        } 
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema)

// mongoose.model("User", userSchema) -> this line states that hey mongoose i want to create a  model called as User which will follow the structure of userSchema.