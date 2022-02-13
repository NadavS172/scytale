In order to start the app the following steps should be done:
1. Run the following queries in order to create the DB and table:
    CREATE DATABASE IF NOT EXISTS testdb;

	CREATE TABLE IF NOT EXISTS `client_forms` (
	  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	  company_details varchar(255) NOT NULL,
	  cloud_providers varchar(255) NOT NULL,
	  executives varchar(255) NOT NULL,
	  executives_names_and_emails varchar(255)
	) ENGINE=InnoDB DEFAULT CHARSET=utf8;
	
2. Set up your db configuration on file /config/db.config.js
3. Run npm install
4. Run npm start...
