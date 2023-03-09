let books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', libraryID: 3245 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', libraryID: 6789 },
    { title: '1984', author: 'George Orwell', libraryID: 1254 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', libraryID: 4321 },
    { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', libraryID: 8765 },
  ];
  
  // Function to sort books by title
  function sortByTitle(books) {
    return books.sort((a, b) => {
      let titleA = a.title.toUpperCase();
      let titleB = b.title.toUpperCase();
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
  }
  
  // Function to create an array of author names
  function getAuthorNames(books) {
    return books.map(book => book.author);
  }
  
  // Function to filter books by library ID
  function filterByLibraryID(books, libraryID) {
    return books.filter(book => book.libraryID === libraryID);
  }
  // Sort books by title
const sortedBooks = sortByTitle(books);
console.log(sortedBooks);

// Get array of author names
const authorNames = getAuthorNames(books);
console.log(authorNames);

// Filter books by library ID
const filteredBooks = filterByLibraryID(books, 1254);
console.log(filteredBooks);
