const express =require ('express');
const cors = require ('cors');
const { appenFile } = require ('fs');
const routes = require ('./routes');
const server = express();

server.use(cors());
server.use(express.urlencoded({ extended: true}));

server.use('/' , routes.mainRouter);

server.listen(3000, function () {
    console.log('Servidor funcionando en el puerto 3000');
}
);
