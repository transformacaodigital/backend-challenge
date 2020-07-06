const UserService = require('../services/user.service');

exports.getUsers = async (req, res, next) => {
  const page = req.params.page ? req.params.page : 1;
  const limit = req.params.limit ? req.params.limit : 10;
  try {
    const users = await UserService.getUsers({}, page, limit);
    console.log(`Users count: ${users.length}`);
    return res.json({items: users, meta: { total: users.length, page: page }});
  } catch (e) {
    const msgError = e.message || "Some error occurred while list all users.";
    return res.json({ status: false, msg: msgError });
  }
}

exports.showUser = async (req, res, next) => {
  if (!req.params.id) {
    return res.status(400).json({msg: "Parametro id obrigatorio !!!"});
  }
  const { id } = req.params;
  try {
    const user = await UserService.findUser(id);
    return res.json({user: user});
  } catch (e) {
    const msgError = e.message || "some error occurred while find user";
    return res.json({status: false, msg: msgError})
  }
}

exports.saveUser = async (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({status: 400, msg: "parametro name obrigatório !!!"});
  }
  const { name, title } = req.body;
  try {
    const user = await UserService.setUser(name, title);
    return res.json({status: true, data: user});
  } catch (e) {
    const msgError = e.message || "some error occurred while try save.";
    return res.json({status: false, msg: msgError});
  }
}

exports.savePost = async (req, res, next) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    const post = await UserService.savePostById(id, title);
    return res.json({ status: 200, item: post });
  } catch (e) {
    const msgError = e.message || "same error occurred while try save post.";
    return res.status(400).json({status: 400, msg: msgError });
  }
}

exports.editUser = async (req, res, next) => {
  const id = req.params.id;
  if (!req.body.name) {
    return res.status(400).json({msg: "Parametro obrigatorio !!!"});
  }
  try {
    const user = await UserService.editUser(id, req.body);
    return res.json({status: true, item: user});
  } catch(e) {
    const msgError = e.message || "some error occurred while try edit user";
    return res.json({status: false, msg: msgError});
  }
}

exports.deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await UserService.delUser(id);
    return res.json({status: true, item: user});
  } catch (e) {
    const msgError = e.message || "some error occurred while try delete user";
    return res.json({status: 400, msg: msgError});
  }
}

