# Anthropology project

# Start the client
```
cd client
npm install
npm start
```

# Start the server
Before running the commands, make sure you change the credential in dbconnection.js.
Also create the accounts table using the following sql command
```
create table if not exists accounts(
	id int(11) not null auto_increment,
	username varchar(50) not null,
	password varchar(255) not null,
	email varchar(100) not null,
	primary key (id)
)
```
```
cd server
npm install
npm start
```
