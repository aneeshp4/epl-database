# EPL Database Backend

### Tools Used
This backend was built in NodeJS, using the Express framework. It uses the mysql package to connect to a MySQL database. It also uses the dotenv package to load environment variables from a .env file.

### Files
We separate this backend into 4 main parts: routes, controllers, models, and utils.
1. Routes: These are the endpoints that the frontend can call. They are defined in the routes directory.
    - `dropdownRoutes.js`: This consists of the single endpoint that returns the dropdown options for the frontend.
    - `matchRoutes.js`: These are the endpoints that return the matches for the frontend. The first route returns multiple matches, giving only some information about each match; this is meant to update the homepage on the frontend, by providing matches that fit the user's search criteria. The second route returns information about a single match based on the provided matchID.
2. Controllers: These are the functions that are called when a route is called. They are defined in the controllers directory. Each route has an associated controller that it uses to properly get information.
3. Models: The models directory contains the functions that actually query the database. They are defined in the models directory. Each controller has an associated model that it uses to get information from the database.
4. Utils: The utils directory contains functions that are used by multiple models. They are defined in the utils directory. For this project, the only util we have is the `db.js` file, which contains a function that queries the database and returns the results.

### Our Setup
We have a MySQL database running on a AWS RDS instance. We connect to it to our backend using the mysql package. We have a .env file that contains the credentials to connect to the database. 

The Rest API itself is hosted on an AWS EC2 instance. The server runs on port 3000 by default. In order to have the server be active, we run the command `node app.js` in the `epl-database/server` directory. 

### How to Run
1. Clone the repository
2. Run `npm install` in the `epl-database/server` directory
3. Create a .env file in the `epl-database/server` directory. It should contain the following:
    - `DB_HOST`: The host of the database
    - `DB_USER`: The username of the database
    - `DB_PASSWORD`: The password of the database
    - `DB_DATABASE`: The name of the database
4. Run `node app.js` in the `epl-database/server` directory
