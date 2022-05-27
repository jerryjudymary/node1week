const mongoose = require('mongoose');

const {Schema} = mongoose;

const postSchema = new Schema 
    ({
      posttitle: {
        type: String,
        required: true,
        trim: true,
      },
      postbody: {
        type: String,
        required: true,
        trim: true,
      },
      postwriter: {
        type: String,
        required: true,
        trim: true,
      },
      postpassword: {
        type: String,
        required: true,
        trim: true,
      },
      postId: {
        type: Number,
        required: true,
        trim: true,
      },
    },
    {
      timestamps: true,
    }
  );

const Posts = mongoose.model('Posts', postSchema);
module.exports = Posts;