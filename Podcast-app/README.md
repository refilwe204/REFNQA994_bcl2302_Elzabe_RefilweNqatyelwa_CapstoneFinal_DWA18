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

- ✅Project is deployed to a custom Netlify URL

✅ All views in the app display correctly on the smallest mobile device available, “iPhone SE”. This can be emulated in Chrome Dev tools.

✅ All favicon information has been created an added correctly via https://realfavicongenerator.net/ (you are welcome to use any free PNG image you find on https://www.flaticon.com/)

✅ All metatag information has been created and added via https://metatags.io/ (You are welcome to use any free image on https://unsplash.com/). Be mindful to manually replace all URL values (especially image URL) to absolute Netlify URL values (you will need to deploy to Netlify first)

✅ All show data loaded via a fetch call from the https://podcast-api.netlify.app/shows

✅ When viewing a specific show, data is loaded via fetch from individual show endpoint

✅ There is a loading state while initial data is being loaded

✅ There is a loading state while new data is being loaded

✅ User can view the details of a show broken down into seasons, sorted by number

✅ User can listen to any episode in a season of a show

✅ User can see a view where only episodes for a specifically selected season are shown

✅ User can toggle between different seasons for the same show

✅ User can see the name of all available shows on the platform

✅ User sees preview image of shows when browsing

✅ User sees the amount of seasons per show as a number when browsing

✅ User sees a human-readable date as to when a show was last updated

✅ User sees what genres (as genre titles) a show is associated with when browsing

✅ User sees a preview image of seasons for a specific show

✅ User sees the amount of episodes in a season as a number

✅ User can go back to a show view from a season-specific view

✅ User can mark specific episodes as favourites to find them again

✅ User can visit a view where they see all their favourites

✅ User can see the show and season of any episode in their favourites list

✅ Episodes related by season/show are grouped in favourites

✅ User is able to remove episodes from their favourites

✅ User can arrange the list of shows by title from A-Z

✅ User can arrange the list of shows by title from Z-A

✅ User can arrange the list of shows by date updated in ascending order

✅ User can arrange the list of shows by date updated in descending order

✅ User can filter shows by title through a text input

✅ User can find shows based on fuzzy matching of strings (you can use something like https://fusejs.io/)

✅ Automatically filter shows by genre if the genre label is clicked on

✅ User sees the date and time that an episode was added to their favourites list

✅ User can arrange favourites by show titles from A-Z

✅ User can arrange favourites by show titles from Z-A

✅ User can arrange favourites by date updated in ascending order

✅ User can arrange favourites by date updated in descending order

✅ Audio player shows current progress and episode length as timestamps

✅ Audio player is always visible, so the user can listen to episodes while they browse

✅ User is prompted to confirm they want to close the page when audio is playing

✅ App remembers which show and episode the user listened to last when returning to the platform

✅ App remembers which shows and episodes the user listened to all the way through

✅ App remembers the timestamp where the user stopped listening within a 10-second accuracy period of closing

✅ App remembers and shows the timestamp progress of any episode the user has started listening to

✅ User can "reset" all their progress, effectively removing their listening history

✅ User is presented with a sliding carousel of possible shows they might be interested in on the landing page

✅ User can log in via https://app.supabase.com authentication

✅ User favourites are stored in the https://app.supabase.com database

✅ User favourites are automatically synced when logged in, ensuring that they share favourites between devices

✅ Users can share their favourites as a publicly accessible URL

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
