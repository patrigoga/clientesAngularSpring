let express = reuqire('express');

let path = require('path');

let app = express();

let port = 8089;

app.use(express.static('app-clientes'));

app.get('*', (req, res,next)=>{
    res.sendFile(path.resolve('app-clientes/index.html'));
});

app.listen(port, () => {
    console.log('el servidor se ha reinicia en el puerto '+ port);
})
