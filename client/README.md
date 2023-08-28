# EPL Database Frontend

### Tools used

This frontend was built in ReactJS. It uses the axios package to make HTTP requests to the backend. It also uses the dotenv package to load environment variables from a .env file.

### Files

- `App.js`: This is the main file that contains the React code for the frontend. It contains the code for the dropdowns, the table, and the modal.
- `components/`: This directory contains the components that are used in `App.js`.
  - `Dropdown.js`: This is the component that contains the dropdowns.
  - `MatchTable.js`: This is the component that contains the table of matches, with some information about each match.
  - `MatchDetails.js`: This is the component that displays more detailed information about each match.
- `utils/`: This directory contains the functions that are used by multiple components.
  - `formatDate.js`: This is the class that contains static functions to format the date of a match into more readable formats.

### How to Run

1. Clone the repository
2. Run `npm install` in the `epl-database/client` directory
3. Create a .env file in the `epl-database/client` directory. It should contain the following:
   - `REACT_APP_API_URL`: The URL of the backend
4. Run `npm start` in the `epl-database/client` directory
