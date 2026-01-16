const books = [
  {
    title: "Fahrenheit 451",
    authorName: "Ray Bradbury",
    releaseYear: 1953
  },
  {
    title: "The Idiot",
    authorName: "Fyodor Dostoevsky",
    releaseYear: 1869
  },
  {
    title: "Post Office",
    authorName: "Charles Bukowski",
    releaseYear: 1971
  },
  {
    title: "Women",
    authorName: "Charles Bukowski",
    releaseYear: 1978
  },
  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1949
  },
  {
    title: "The Little Prince",
    authorName: "Antoine de Saint-Exupéry",
    releaseYear: 1943
  },
  {
    title: "Wuthering Heights",
    authorName: "Emily Brontë",
    releaseYear: 1847
  },
  {
    title: "Memoirs of a Geisha",
    authorName: "Arthur Golden",
    releaseYear: 1997
  },
  {
    title: "Where the Sidewalk Ends",
    authorName: "Shel Silverstein",
    releaseYear: 1974
  },
  {
    title: "Brave New World",
    authorName: "Aldous Huxley",
    releaseYear: 1932
  },
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  };
};

const filteredBooks = books.filter(book => book.releaseYear < 1900);
filteredBooks.sort(sortByYear)