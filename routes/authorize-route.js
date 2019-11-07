const jwt = require('../security/jwt');
const delay = require('delay');

module.exports = function (req, res) {
    var guid = createGuid();
    const session = {
      aud: 'http://localhost:4200',
      iss: 'HR',
      jti: guid,
      nbf: 1558919776,
      role: 'developer',
      sub: 'applepie',
      unique_name: 'XYZ\\applepie',
    };
    delay(1).then(() => {
        console.log('Login Data Valid');
        const token = jwt.tokenGeneration(session);
        res.status(200).json(token);
    });

    function createGuid(){  
        function S4() {  
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);  
        }  
        return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();  
      } 
  }
