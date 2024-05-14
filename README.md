# ALT-Portfolio
GitHub Repository Viewer
The GitHub Repository Viewer is a React application that allows users to browse and explore repositories hosted on GitHub. It utilizes the GitHub API to extract repository information and provides features such as pagination, responsiveness, and displaying detailed repository information when clicked on.

Features
Repository Listing: Displays a paginated list of repositories retrieved from the GitHub API.
Pagination: Enables users to navigate through multiple pages of repository listings.
Responsive Design: Provides an optimal viewing experience across a wide range of devices and screen sizes.
Repository Details: Allows users to view detailed information about a repository by clicking on it in the list.

**Technologies Used**
React: JavaScript library for building user interfaces.
GitHub API: Used to fetch repository data from GitHub.
React Router: Library for handling navigation and routing in a React application.
yarn: Dependency management tool for installing and managing project dependencies..
CSS: Styling for the user interface, including responsiveness.

Usage
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/KoredeKizzy/ALT-Portfolio.git
Install dependencies:

bash
Copy code
cd github-repo-viewer
npm install
Set up environment variables:

Create a .env file in the root directory.

Define your GitHub personal access token in the .env file:

plaintext
Copy code
REACT_APP_GITHUB_TOKEN=your_github_token_here

Run the application:

bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000 to view the GitHub Repository Viewer.

Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository, make your changes, and submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

