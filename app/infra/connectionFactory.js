var mysql  = require('mysql');

function createDBConnection() {
    if(!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1eaq7r',
            database: 'casadocodigo_nodejs'
        });
    }

    if(process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1eaq7r',
            database: 'casadocodigo_nodejs_test'
        });
    }

    if(process.env.NODE_ENV == 'production') {
        // var urlDeConexao = process.env.CLEARDB_DATABASE_URL;
        // var grupos = urlDeConexao.match(/mysql:\/\/(.*):(.*):@(.*)\/(.*)\?reconnect=true/);
        return mysql.createConnection({
            host: ' us-cdbr-iron-east-03.cleardb.ne',
            user: ' ba8ef26df29b2',
            password: 'd1368230',
            database: 'heroku_334c10cf10ae5f4'
        });
    }
}

module.exports = function() {
    return createDBConnection;
}
