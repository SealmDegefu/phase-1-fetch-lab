function fetchBooks() {
  const url = "https://anapioficeandfire.com/api/books"
  return fetch(url).then(res => res.json()).then(renderBooks)
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h3 = document.createElement('h3');
    h3.innerHTML = book.authors;
    main.appendChild(h3);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
