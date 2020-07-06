const logger = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
mongoose.Promise = global.Promise;
const express = require('express'),
app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8080;

// Connecting to the database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/sampleapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

const user = require('./routes/user.routes.js');

app.use(logger('dev'));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/user', verifyJWT, user);

//authentication
app.post('/login', (req, res, next) => {
  //esse teste abaixo deve ser feito no seu banco de dados
  if(req.body.user === 'teste' && req.body.pwd === 'test123'){
    //auth ok
    const id = 1; //esse id viria do banco de dados
    var token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300 // expires in 5min
    });
    return res.json({ auth: true, token: token });
  }
  
  res.status(500).json({message: 'Login inválido!'});
});

app.post('/logout', function(req, res) {
  res.json({ auth: false, token: null });
});

function verifyJWT(req, res, next){
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, process.env.SECRET, function(err, decoded) {
    if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
    
    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    next();
  });
}

app.get('/', (req, res) => {
  res.send('test to sample api using node.js and mongoose !!!');
});

app.listen(PORT, () => {
  console.log(`Server listen in http://localhost:${PORT}`);
});

