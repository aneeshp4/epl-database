# EPL Database Backend

### Tools Used
This backend was built in NodeJS, using the Express framework. It uses the mysql package to connect to a MySQL database. It also uses the dotenv package to load environment variables from a .env file.

### Files
We separate this backend into 3 main parts: routes, controllers, and models.
1. Routes: These are the endpoints that the frontend can call. They are defined in the routes directory.
    - `dropdownRoutes.js`: This consists of the single endpoint that returns the dropdown options for the frontend.
    - `matchRoutes.js`: These are the endpoints that return the matches for the frontend. The first route returns multiple matches, giving only some information about each match; this is meant to update the homepage on the frontend, by providing matches that fit the user's search criteria. The second route returns information about a single match based on the provided matchID.
2. Controllers: These are the functions that are called when a route is called. They are defined in the controllers directory. Each route has an associated controller that it uses to properly get information.
3. Models: The models directory contains the functions that actually query the database. They are defined in the models directory. Each controller has an associated model that it uses to get information from the database.

