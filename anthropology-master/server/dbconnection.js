const mariadb=require('mariadb/callback');
const conn=mariadb.createConnection({
    host: '127.0.0.1',
    port:3306,
    user:'root',
    password:'arminarlert',
    database:'nonhumanprimates'
});

module.exports=conn;