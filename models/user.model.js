const mongoose = require('mongoose')

const UserSchema  = new mongoose.Schema({
    name: String,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref:'Post' }]
}, { timestamps: true });

UserSchema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const PostSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  user: { type:mongoose.Schema.Types.ObjectId, ref:'User' }
}, { timestamps: true });

PostSchema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});


const User = mongoose.model('User', UserSchema);
const Post = mongoose.model('Post', PostSchema);

module.exports = {User, Post}

