const express = require('express')
const app = express()
const port = 5000
const { User } = require("./models/User");

const config = require('./config/key');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('mongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req,res) => {
    //회원 가입 할때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body)
  user.save( (err,userInfo) => {
    if (res.status(200)) 
      return res.json({success: true})
    else
      return res.json({success: fail })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at localhost:${port}`)
})