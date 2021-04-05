const express = require('express');
const fs = require('file-system');

const router = express.Router();
/*

router.use((req, res, next) => {
  res.locals.user = null;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followerIdList = [];
  next();
});
router.get('/profile', (req, res) => {
  res.render('profile', {title: '내 정보'});
});

router.get('/join', (req, res) => {
  res.render('join', {title: '회원가입'});
});

router.get('/', (req, res, next) => {
  const twits = [];
  res.render('main', {
    title: 'nodeB',
    twits,
  });
});
*/

router.get('/p', function(req, res, next) {
  res.render('index', { title: 'index' });
});



/*
const routerLst = [];

  let dirAddr = './views'+dirArr[key];
  
  fs.readdir(dirAddr,(err, files) =>{
    console.log(dirAddr, files)
    if(files !== undefined){
      files.forEach(file =>{
          file = file.split('.');
          file = file[0];
          routerLst.push(file);
      });
      routerLst.forEach(i =>{
        console.log(dirArr[key]+i)
        router.get(dirArr[key]+i, function(req, res, next){
          res.render(i, {title: i});
        });
      });
    }
  });
  
*/




module.exports = router;