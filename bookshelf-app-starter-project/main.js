// Do your work here...
console.log("Hello, world!");

let books = [];

const bookTitle = document.getElementById("bookFormTitle");
const bookAuthor = document.getElementById("bookFormAuthor");
const bookYear = document.getElementById("bookFormYear");
const bookIsComplete = document.getElementById("bookFormIsComplete");

const submitBook = document.getElementById("bookFormSubmit");
const searchBook = document.getElementById("searchSubmit");

//Add to Finished or Unfinished

const moveBook = (book) => {
  const title = document.createElement("h3");
  title.innerText = book.title;

  const author = document.createElement("p");
  author.innerText = `Penulis: ${book.author}`;

  const year = document.createElement("p");
  year.innerText = `Tahun: ${book.year}`;

  const buttonFinish = document.createElement("button");
  buttonFinish.innerText = "Selesai dibaca";
  buttonFinish.setAttribute("data-testid", "bookItemIsCompleteButton");

  const buttonDelete = document.createElement("button");
  buttonDelete.innerText = "Hapus Buku";
  buttonDelete.setAttribute("data-testid", "bookItemDeleteButton");

  const buttonEdit = document.createElement("button");
  buttonEdit.innerText = "Edit Buku";
  buttonEdit.setAttribute("data-testid", "bookItemEditButton");

  const buttonContainer = document.createElement("div");
  buttonContainer.append(buttonFinish, buttonDelete, buttonEdit);

  const bookContainer = document.createElement("div");
  bookContainer.setAttribute("data-Bookid", book.id);
  bookContainer.setAttribute("data-testid", "bookItem");
  bookContainer.append(title, author, year, buttonContainer);

  return bookContainer;
};

//add book
const addBook = () => {
  const book = {
    id: Date.now(),
    title: bookTitle.value,
    author: bookAuthor.value,
    year: bookYear.value,
    isComplete: bookIsComplete.checked,
  };

  books.push(book);
  console.log(books);
  if (book.isComplete) {
    document.getElementById("completeBookList").appendChild(moveBook(book));
  } else {
    document.getElementById("incompleteBookList").appendChild(moveBook(book));
  }
};

//find book

const findBook = () => {
  const bookToFind = document.getElementById("searchBookTitle").value;
  let isFind = -1;
  for (let i = 0; i < books.length; i++) {
    if (bookToFind === books[i].title) {
      isFind = i;
      break;
    }
  }

  const searchResult = document.getElementById("searchBook");
  bookToFind.innerHTML = "";

  if (isFind !== -1) {
    const bookInfo = document.createElement("p");
    bookInfo.innerText = `Judul: ${books[isFind].title}, Penulis: ${
      books[isFind].author
    }, Tahun: ${books[isFind].year}, Selesai Dibaca: ${
      books[isFind].isComplete ? "Ya" : "Tidak"
    }`;
    document.getElementById("searchBook").appendChild(bookInfo);
  } else {
    console.log("No books found");
    const notFoundMsg = document.createElement("p");
    notFoundMsg.innerText = "Buku tidak ditemukan.";
    searchResult.appendChild(notFoundMsg);
  }
};

submitBook.addEventListener("click", function (e) {
  e.preventDefault();
  addBook();
});

searchBook.addEventListener("click", function (e) {
  e.preventDefault();
  findBook();
});
