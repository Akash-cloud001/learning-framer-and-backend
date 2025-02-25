
// videos [icon: video] {
//     id string pk --> automatically added
//     owner ObjectId users
//     videoFile string
//     thumbnail string
//     title string
//     description string
//     duration number
//     views number
//     isPublished boolean
//     createdAt Date
//     updatedAt Date
//   }

import mongoose, { Schema } from 'mongoose'
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const videoSchema = new Schema(
    {
        videoFile:{
            type: String,
            required: [true, 'video is required']
        },
        thumbnail:{
            type: String,
            required: [true, 'thumbnail is required']
        },
        title:{
            type: String,
            required: [true, 'title is required']
        },
        description:{
            type: String,
            required: [true, 'description is required']
        },
        views:{
            type: Number,
        },
        duration:{
            type: Number,
            default: 0
        },
        isPublished:{
            type: Boolean,
            default: true
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)
