# 🎬 usePopcorn

**usePopcorn** is a movie-centric web application where users can search for movies, view detailed information, rate them, and add them to a watched list. The application uses the OMDB API to fetch real-time movie data, making it easy for users to find and manage their favorite movies.

## 📝 Features

- **Search Movies:** Search for any movie using the search bar. For example, searching for "Inception" will load a list of relevant movies fetched from the OMDB API.
- **View Movie Details:** Click on any movie from the search results to view an overview, including a summary, cast, and other details.
- **Rate Movies:** After viewing the details, you can rate the movie.
- **Add to Watched List:** Once rated, add the movie to your watched list.
- **Watched List Statistics:** The watched list provides insights and statistics about your movie-watching habits.
- **Update & Delete:** You can update your rating for a movie or remove it from your watched list. If you revisit a movie already in your watched list, the app will display the rating you gave earlier.

## 🖼️ Screenshots

1. ![Screenshot of the Application](screenshots/usePopcorn%20homescreen.PNG)

## 🚀 Technologies Used

The project was bootstrapped with Create React App and leverages the following technologies:

- ![Create React App](https://img.shields.io/badge/Create%20React%20App-blue?logo=react) **Create React App**
- ![React 18](https://img.shields.io/badge/React-18.0-blue?logo=react) **React 18**
- ![OMDB API](https://img.shields.io/badge/OMDB%20API-red?logo=themoviedatabase) **OMDB API** (`omdbapi.com`)

## 🛠️ Getting Started

### Prerequisites

Before you begin, ensure you have Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/usePopcorn.git
   cd usePopcorn
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**

   ```bash
   npm start
   ```

   The application will start on `http://localhost:3000`.

### API Key Configuration

To fetch movie data, you need an API key from [OMDB API](http://www.omdbapi.com/).

1. Register at [OMDB API](http://www.omdbapi.com/apikey.aspx) to get your API key.
2. Create a `.env` file in the root directory of the project and add your API key:

   ```bash
   REACT_APP_OMDB_API_KEY=your_api_key_here
   ```

3. Restart the application to use the new API key.

## 🧑‍💻 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project.
2. Create your feature branch: `git checkout -b feature/featureName`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/featureName`
5. Open a pull request.

## 📫 Contact

Feel free to reach out if you have any questions or suggestions!

- 📧 **Email**: [hello@paulanik.com](mailto:hello@paulanik.com)
- 🌐 **Portfolio**: [paulanik.com](https://paulanik.com)
- 💼 **LinkedIn**: [LinkedIn Profile](https://www.linkedin.com/in/anik-paul-dev/)
- 📝 **Dev.to**: [Dev.to Profile](https://dev.to/anikpaul)
