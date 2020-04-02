const app = require('./app');

const port = 23456; 


app.listen(port, () =>{
    console.log(`listening in port ${port}`);
});