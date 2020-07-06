const { User, Post } = require('../models/user.model')

exports.getUsers = async (query, page, limit) => {
    try {
        return await User.find(query).populate('posts', 'title -_id');
    } catch (e) {
        throw Error(`Error: ${e.message}`);
    }
}

exports.findUser = async (id) => {
  try {
    return await User.findById(id).populate('posts', 'title -_id');
  } catch (e) {
    throw Error(`Error: ${e.message}`);
  }
}

exports.editUser = async (id, user) => {
  try {
    return await User.findByIdAndUpdate(id, user, { useFindAndModify: false });
  } catch (e) {
    throw Error(`Error: ${e.message}`);
  }
}

exports.setUser = async (name, title) => {
  try {
    const user = new User({ name });
    await user.save();
    return user;
  } catch (e) {
    throw Error(`Error: ${e.message}`);
  }
}

exports.delUser = async (id) => {
  try {
    return await User.findByIdAndRemove(id, { useFindAndModify: false });
  } catch (e) {
    throw Error(`Error: ${e.message}`);
  }
}

exports.savePostById = async (id, title) => {
  try {
    const user = await User.findById(id);
    const post = await new Post({ title, user: user});
    await post.save();
    await user.posts.push(post);
    user.save();
    return post;
  } catch (e) {
    throw Error(`Error: ${e.message}`);
  }
}
