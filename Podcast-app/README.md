# Podcast App Capstone Project

Welcome to the Podcast App Capstone Project for the CodeSpace Software Development Program! This project aims to build a podcast app that allows users to browse various podcast shows, play episodes, and track their favorite episodes.

## Table of Contents

- [Podcast App Capstone Project](#podcast-app-capstone-project)
  - [Table of Contents](#table-of-contents)
  - [Technology](#technology)
  - [Data](#data)
  - [Endpoints](#endpoints)
  - [User Stories](#user-stories)
  - [Getting Started](#getting-started)
  - [Deployment](#deployment)
  - [Usage](#usage)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)

## Technology

The project is built using [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/). It leverages the [Netlify](https://www.netlify.com/) platform for deployment and [Supabase](https://supabase.io/) for user authentication and database storage.

## Data

The app uses three main semantic units: EPISODE, SEASON, and SHOW. There are also PREVIEW objects with basic show information. The relationships between these units are explained in the project documentation.

## Endpoints

The data is fetched from the following endpoints:

- [https://podcast-api.netlify.app/shows](https://podcast-api.netlify.app/shows) - Returns an array of PREVIEW objects
- [https://podcast-api.netlify.app/id/<ID>](https://podcast-api.netlify.app/id/<ID>) - Returns detailed information about a specific SHOW

## User Stories

The project satisfies the following user stories:

- [List of user stories]

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone [repository_url]`
2. Navigate to the project directory: `cd podcast-app`
3. Install dependencies: `npm install`
4. Run the development server: `npm start`

## Deployment

The project is deployed to a custom Netlify URL: [https://your-netlify-url.netlify.app](https://your-netlify-url.netlify.app)

## Usage

[Include instructions on how to use the app, how to browse shows, play episodes, track favorites, etc.]

## Features

[List the main features of your app here]

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Netlify](https://www.netlify.com/)
- [Supabase](https://supabase.io/)

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
