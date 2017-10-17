var mysql = require('mysql');

function FotoDao() {
    this._connection = mysql.createConnection({
	    host: '127.0.0.1',
	    user: 'root',
	    password: 'root',
	    database: 'payfast'
	  });
}

FotoDao.prototype.salva = function(foto,callback) {
    this._connection.query('INSERT INTO fotos SET ?', foto, callback);
}


FotoDao.prototype.lista = function(callback) {
    this._connection.query('select * from fotos',callback);
}

FotoDao.prototype.buscaPorId = function (id,callback) {
    this._connection.query("select * from fotos where id = ?",[id],callback);
}

module.exports = function(){
    return FotoDao;
};
