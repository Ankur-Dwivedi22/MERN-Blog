import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        content: {
            type:String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        image: {
            type: String,
            default: 'https://imgs.search.brave.com/PwtOlRlc9SXST8-unkIE0VJzFeqtTjH0TGxrkL2Tl5U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cnlyb2IuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzAy/L2lTdG9jay05NTY4/OTEzMzIuanBn'
        },
        category: {
            type: String,
            default: 'uncategorized',
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
    }, { timestamps : true}
);

const Post = mongoose.model('Post', postSchema);

export default Post;