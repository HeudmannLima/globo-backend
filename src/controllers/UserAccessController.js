const GloboUsers = require('../models/GloboUsers');
const jwt = require('jsonwebtoken');

module.exports = {

  async login(req, res) {
    const { email, senha } = req.body;
    const user = await GloboUsers.findOne({ email });

    if(user && senha === user.senha){
      const { _id, nivel_acesso } = user;
      const token = jwt.sign({ _id }, process.env.GLOBO_JWT_SECRET, {
        expiresIn: 900
      });

      return res.json({ token: token, email, nivel_acesso });
    }
    
    return res.status(500).json({ message: 'Login inválido!' });
  },

  
  logout(req, res) {
    return res.json({ token: null });
  },
};