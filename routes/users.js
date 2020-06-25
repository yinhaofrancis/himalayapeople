var express = require('express');
var router = express.Router();
var fs = require('fs');
const { compile } = require('morgan');



/* GET users listing. */
router.get('/', function(req, res, next) {
  
  var privateCrt = fs.readFileSync("/etc/v2ray/config.json", 'utf8');
  var json = JSON.parse(privateCrt);
  console.log(json);
  res.send(privateCrt.toString());

});

router.post('/',function(req, res, next) {
  var code = req.headers["code"];
  var privateCrt = fs.readFileSync("/etc/v2ray/config.json", 'utf8');
  console.log(code,go(privateCrt));
  if (code == go(privateCrt)) {
    fs.writeFileSync("/etc/v2ray/config.json",JSON.stringify(req.body));
    res.json({"success":true});
    // )
  }else{
    res.json({"success":false});
  }
  
})

function go(code){
//   const crypto=require('crypto');
 
// //var obj=crypto.createHash('md5');
//   var obj=crypto.createHash('sha256');
 
//   obj.update(code);
 
//   var str=obj.digest('hex')
//   return str;
return "123456";
}

module.exports = router;
