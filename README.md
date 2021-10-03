# HotelLinking Interview Tech Test

## Requirements
- NodeJs
- NPM
- PHP
- Composer
- MySQL

## Cloning the project
You can clone the project in several ways:
- Git
  ```bash 
  git clone https://github.com/JosemiChaves9/hotel-linking-interview.git
  ```
- Wget
  ```bash
  wget https://github.com/JosemiChaves9/hotel-linking-interview/archive/refs/heads/master.zip
  unzip master.zip
  ```
- [Download](https://github.com/JosemiChaves9/hotel-linking-interview/archive/refs/heads/master.zip) and unzip manually

## Initializing Database
1. **Install MySQL**

    You need to have installed MySQL (if you dont have it you can do it following these tutorials):
    - [Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04)
    - [macOs](https://flaviocopes.com/mysql-how-to-install/)
    - [Windows](https://www.mysqltutorial.org/install-mysql/)

2. **Create user**

    (_If you already have one created, skip to the next step_)
    ```sql
    CREATE USER 'newuser'@'localhost' IDENTIFIED BY  'password';
    GRANT ALL PRIVILEGES ON  * . *  TO  'newuser'@'localhost';
    FLUSH PRIVILEGES;
    ```
3. **Create the database**

    Once you've created you user, and logged in with it `mysql -u 'username' -p`

    You can create the database where you'll import the data:
    ```sql
    CREATE DATABASE 'database_name';
    ```
4. **Import the data(optional)**

    Change to the directory where you unziped the project 
    ```bash
    cd path/to/the/project
    ```
    Then run 
    ```bash
    mysql -u username -p 'dbname' < ./initDb.sql
    ```
    database-name is the name of the database you've created before.

  If everything worked fine you'll have the database initalized!

## 

## Initalize project
1. **Install php, npm, yarn, node.js and Composer**

    Follow these [tutorial](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for installing Node.js and npm, once you have installed npm you can install yarn with `npm install -g yarn`, then you install PHP (follow [this tutorial](https://kinsta.com/blog/install-php/)) and finally you can install [Composer](https://getcomposer.org/download/).

2. **Install dependencies**
    - in workspaces/backend run `composer install`
    - in workspaces/frontend run `yarn install`


    2.1 If you didn't choose to import the data you'll need to run the moirgations in order to create the tables to store the data, run `php artisan migrate` from the .`/workspaces/backend` path.

3. **Load enviroment variables**


    You need to declare the enviroment variables for the backend and frontend:
  
    In Backend you need to declare:   
    - DB_DATABASE=`'db-name'`
    - DB_USERNAME=`'db-user`
    - DB_PASSWORD=`'db-user-password'`

    `db-name`, `db-user` and `db-user-password` are the data that you created before.

    You can store this enviroment variables in the .env or pass it inline when you start the app.
    
4. **Generate secret for JWT**


    [JWT](https://jwt.io/) it's a libary thats iused for expeding autenthicated tokens to ensure a certain security in the backend, in order to work this library needs a secret key to firm the new expeded tokens, to generate this token we need to run:
    ```bash
    cd workspaces/backend
    php artisan jwt::secret
    ```
    And a secret key will generate and store in the .env.
    
## Start the app
1. **Start the services**
    - `yarn startFront`
    - `yarn startBack`

    You need to execute this two commands from the root in order to start both servers.

## Using the app
  There's already a predefined user with the following credentials:
  
  
   - Email: admin@admin.com
   - Password: Password12345

  If you didn't choose to import the data you'll need to create offers in order to obtain them, you can do it in the `/newoffer` path.

## Testing
  The app has builtin testing both in the backend and the frontend:

  - Backend
    ```bash
    cd workspaces/backend
    php artisan test
    ```
  - Frontend
    ```bash
    cd workspaces/frontend
    yarn test
    ```
___

Made with ❤️ by [Jose Miguel Chaves](https://github.com/JosemiChaves9)
