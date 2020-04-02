const app = require('./app');

const port = 9001; 


app.listen(port, () =>{
    console.log(`listening in port ${port}`);
});