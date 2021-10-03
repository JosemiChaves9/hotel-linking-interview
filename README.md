# Requirements

- NodeJs
- NPM
- PHP
- Composer
- MySQL

---

### 1. Copy project

You can copy the project in various ways:

- Git
  `git clone https://github.com/JosemiChaves9/hotel-linking-interview.git`

- Wget

  ```bash
  wget https://github.com/JosemiChaves9/hotel-linking-interview/archive/refs/heads/master.zip
  unzip master.zip
  ```

- [Download](https://github.com/JosemiChaves9/hotel-linking-interview/archive/refs/heads/master.zip) and unzip manually

---

### 2. Initialize Database

1. You need to have installed MySQL (if you dont have it you can do it following these tutorials [Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04), [macOs](https://flaviocopes.com/mysql-how-to-install/), [Windows](https://www.mysqltutorial.org/install-mysql/)).

2. Create a user (if you've already created one skip to the next step)

   ```sql
   CREATE USER 'newuser'@'localhost' IDENTIFIED BY  'password';
   GRANT ALL PRIVILEGES ON  * . *  TO  'newuser'@'localhost';
   FLUSH PRIVILEGES;
   ```

3. Create the database
   Once you've created you user, and logged in with it `mysql -u admin -p`
   You can create the database where you'll import the data:
   ```sql
   CREATE DATABASE 'database-name';
   ```
4. Import the data into the database (if you don't want to use the predefined data skip to the next section)
   Change to the directory where you unziped the project `cd path/to/the/project`
   From the bash run `mysql -u username -p 'dbname' < ./initDb.sql`
   `database-name` is the name of the database you've created before.

   If everything worked fine you'll have the database initalized!

---

### 3. Initalize project

1. Install npm, yarn, node.js and Composer
   Follow these [tutorial](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for installing , Node.js and npm, once you have installed npm you can install yarn `npm install -g yarn`, and finally can install [Composer](https://getcomposer.org/download/).

2. Install dependencies

   - in `workspaces/backend` run `composer install`
   - in `workspaces/frontend` run `yarn install`

3. If you didn't choosse to import the data you'll need to run the moirgations in order to create the tables to store the data, run `php artisan migrate` from the `./workspaces/backend` path, if not, continue to next step

4. Load enviroment variables

You need to declare the enviroment variables for the backend and frontend

- In Backend you need to declare:

  - `DB_DATABASE='db-name'`
  - `DB_USERNAME='db-user`
  - `DB_PASSWORD='db-user-password'`

  `db-name`, `db-user` and `db-user-password` are the data that you created before.

      You can store this enviroment variables in the .env or pass it inline when you start the app in step 4.

5. Generate token for JWT
   ```bash
   cd workspaces/backend
   php artisan jwt:secret
   ```

---

### 4. Start the app

(_these commands are executed from the root_)

1. To run the server `yarn startBack`
2. To run the client `yarn startFront`

You need to run both in order to have the app fully functional.
\_\_\_

### 5. Using the app

1. There's already a predefined user with the following credentials:

   - Email: admin@admin.com
   - Password: Password12345

2. If you didn't choose to import the data you'll need to create offers in order to obtain them, you can do it in the `/newoffer` path.

---

### 6. Testing

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
