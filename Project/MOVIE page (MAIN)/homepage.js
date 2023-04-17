// let movies = [
//   {
//     title: "John Wick 4",
//     genre: "Action",
//     rating: 8.2
//   },
//   {
//     title: "The Hangover",
//     genre: "Comedy",
//     rating: 7.7
//   },
//   {
//     title: "Luther: The Fallen Sun",
//     genre: "Action",
//     rating: 9.2
//   },
//   {
//     title: "Inside Man",
//     genre: "Action",
//     rating: 8.4
//   },
//   {
//     title: "Red Notice",
//     genre: "Action",
//     rating: 8.5
//   },
//   {
//     title: "Bridesmaids",
//     genre: "Comedy",
//     rating: 6.8
//   },
//   {
//     title: "You Don't Mess with the Zohan",
//     genre: "Comedy",
//     rating: 9.3
//   },
//   {
//     title: "Big Daddy",
//     genre: "Comedy",
//     rating: 8.0
//   },
//   {
//     title: "Interstellar",
//     genre: "Drama",
//     rating: 8.2
//   },
//   {
//     title: "Coach Carter",
//     genre: "Drama",
//     rating: 7.7
//   },
//   {
//     title: "Fifty Shades of Grey",
//     genre: "Drama",
//     rating: 9.2
//   },
//   {
//     title: "American Made",
//     genre: "Drama",
//     rating: 8.4
//   },
//   {
//     title: "Hereditary",
//     genre: "Horror",
//     rating: 8.5
//   },
//   {
//     title: "Scream",
//     genre: "Horror",
//     rating: 6.8
//   },
//   {
//     title: "The Conjuring",
//     genre: "Horror",
//     rating: 9.3
//   },
//   {
//     title: "Sinister",
//     genre: "Horror",
//     rating: 8.0
//   }
// ];

// let sortSelect = document.getElementById('sort-by');

// sortSelect.addEventListener('change', (e) => {
//   let value = e.target.value;
//   let movieList = document.getElementById('movie-list');
//   while (movieList.firstChild) {
//     movieList.removeChild(movieList.firstChild);
//   }
//   let filteredMovies;
//   if (value === 'all') {
//     filteredMovies = movies;
//   } else {
//     filteredMovies = movies.filter(movie => movie.genre === value);
//   }
//   filteredMovies.forEach(movie => {
//     let li = document.createElement('li');
//     li.textContent = `${movie.title} (${movie.genre}, ${movie.rating})`;
//     movieList.appendChild(li);
//   });
// });

// let movieList = document.getElementById('movie-list');
// movies.forEach(movie => {
//   let li = document.createElement('li');
//   li.textContent = `${movie.title} (${movie.genre}, ${movie.rating})`;
//   movieList.appendChild(li);
// });

// Example array of movies with genres
// let movies = [
//   { title: "John Wick 4", genre: "action" },
//   { title: "Red Notice", genre: "action" },
//   { title: "Luther: The Fallen Sun", genre:"action" },
//   { title: "Inside Man", genre: "action" },
//   { title: "The Hangover", genre: "comedy" },
//   { title: "Bridesmaids", genre: "comedy" },
//   { title: "You Don't Mess with the Zohan", genre: "comedy" },
//   { title: "Big Daddy", genre: "comedy" },
//   { title: "Interstellar", genre: "drama" },
//   { title: "Coach Carter", genre: "drama" },
//   { title: "Fifty Shades of Grey", genre: "drama" },
//   { title: "American Made", genre: "drama" },
//   { title: "Hereditary", genre: "horror" },
//   { title: "Scream", genre: "horror" },
//   { title: "The Conjuring", genre: "horror" },
//   { title: "Sinister", genre: "horror" },
// ];

// // Function to sort movies by title
// function sortMoviesByTitle(movies) {
//   return movies.sort((a, b) => {
//     const titleA = a.title.toUpperCase();
//     const titleB = b.title.toUpperCase();
//     if (titleA < titleB) {
//       return -1;
//     }
//     if (titleA > titleB) {
//       return 1;
//     }
//     return 0;
//   });
// }

// // Function to sort movies by genre and title
// function sortMovies(genre) {
//   // Filter movies by genre
//   const filteredMovies = movies.filter(movie => movie.genre === genre);
//   // Sort filtered movies by title
//   const sortedMovies = sortMoviesByTitle(filteredMovies);
//   // Display sorted movies (e.g. replace this with your own logic)
//   console.log(sortedMovies);
// }

// // Get the movie-sorting div
// const movieSortingDiv = document.getElementById("movie-sorting");

// // Create genre buttons using a for loop
// const genres = ["action", "comedy", "drama", "horror"];
// for (let i = 0; i < genres.length; i++) {
//   const genre = genres[i];
//   const btn = document.createElement("button");
//   btn.textContent = genre.charAt(0).toUpperCase() + genre.slice(1);
//   btn.classList.add("genre-btn");
//   btn.onclick = () => sortMovies(genre);
//   movieSortingDiv.appendChild(btn);
// }



