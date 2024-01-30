const express = require('express');
const PORT = 8080;
const app = express();
const path = require('path');

const staticPath = path.join(__dirname , './public');
console.log(path.join(__dirname , './public') );

app.use(express.static(staticPath));
// console.log(app.use(express.static(staticPath)));

app.get('/' , (req , res)=>{

   res.send('hello from simple server ha:)')

});

app.listen(PORT , ()=>{
    console.log(`listening on port ${PORT}`);
})


