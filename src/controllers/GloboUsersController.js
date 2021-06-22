const GloboUsers = require('../models/GloboUsers');

module.exports = {

  async create(req, res) {
    const { email, senha, nivel_acesso } = req.body;

    const userExists = await GloboUsers.findOne({ email });
    
    if (!userExists) {
      const userCreated = await GloboUsers.create({
        email,
        senha,
        nivel_acesso
      });

      return res.json(userCreated);
    }

    return res.status(400).json({ error: `Usuário/Email (${email}) já cadastrado!` });
  },


  async read(req, res) {
    const usersList = await GloboUsers.find();

    return res.json(usersList);
  },


  async delete(req, res) {
    const { id } = req.params;

    const userDeleted = await GloboUsers.findOneAndDelete({ _id: id });

    if (userDeleted) {
      return res.json(userDeleted);
    }
    
    return res.status(401).json({ error: 'Não foi encontrado o User/Email para deletar' });
  },


  async update(req, res) {
    const { id } = req.params;
    const { email, nivel_acesso } = req.body;

    const user = await GloboUsers.findOne({ _id: id });

    if (email) user.email = email;
    if (nivel_acesso) user.nivel_acesso = nivel_acesso;

    await user.save();

    return res.json(user);
  }
};