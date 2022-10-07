function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    read 
        ? this.readString = "have read" 
        : this.readString = "not read yet";
}


Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages; ${this.readString}.`;
}


Book.prototype.display = function () {
    const library = document.querySelector(".library");
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    const bookTitleDisplay = document.createElement("h2");
    bookTitleDisplay.classList.add("book-title");
    const bookAuthorDisplay = document.createElement("span");
    bookAuthorDisplay.classList.add("book-author");
    const bookPagesDisplay = document.createElement("span");
    bookPagesDisplay.classList.add("book-pages");

    bookTitleDisplay.textContent = this.title;
    bookAuthorDisplay.textContent = "Author: " + this.author;
    bookPagesDisplay.textContent = "Pages: " + this.pages;
    
    const btnRead = document.createElement("button");
    if (this.read) {
        bookCard.classList.add("book-completed");
        btnRead.classList.add("btn", "btn-outline", "btn-read-true");
        btnRead.textContent = "✓ Completed";
        btnRead.addEventListener("click", toggleReadBtn);
    } else {
        bookCard.classList.add("book-uncompleted")
        btnRead.classList.add("btn", "btn-outline", "btn-read-false");
        btnRead.textContent = "× Uncompleted";
        btnRead.addEventListener("click", toggleReadBtn);
    }

    bookCard.appendChild(bookTitleDisplay);
    bookCard.appendChild(bookAuthorDisplay);    
    bookCard.appendChild(bookPagesDisplay);

    const cardBtns = document.createElement("div");
    cardBtns.classList.add("card-btns");
    

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-outline", "btn-delete");
    deleteBtn.textContent = "− Delete";

    cardBtns.appendChild(btnRead);
    cardBtns.appendChild(deleteBtn);
    bookCard.appendChild(cardBtns);

    library.appendChild(bookCard);
}


function addToLibrary(book, libraryArr) {
    libraryArr.push(book);
}


const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const theStranger = new Book("The Stranger", "Albert Camus", 159, true);

let myLibrary = []
addToLibrary(theHobbit, myLibrary);
addToLibrary(theStranger, myLibrary);

for (let i = 0; i < myLibrary.length; i++) {
    myLibrary[i].display();
}

// CREATE NEW BOOK
function createBook(e) {
    e.preventDefault();

    const newBookTitle = document.getElementById("book-name").value;
    const newBookAuthor = document.getElementById("book-author").value;
    const newBookPages = document.getElementById("book-pages").value;
    const newBookRead = document.getElementById("book-read").checked;
    const newBook = new Book(newBookTitle, newBookAuthor, newBookPages, newBookRead);

    addToLibrary(newBook, myLibrary);
    myLibrary[myLibrary.length - 1].display();
    document.querySelector("form").reset();
    modalContainer.style.display = "none";
}

document.getElementById("submit").addEventListener("click", createBook)


// TOGGLE READ STATUS
function toggleReadBtn(e) {
    if (e.target.classList.contains("btn-read-true")) {
        e.target.parentElement.parentElement.classList.remove("book-completed");
        e.target.parentElement.parentElement.classList.add("book-uncompleted");

        e.target.classList.remove("btn-read-true");
        e.target.classList.add("btn-read-false");
        e.target.textContent = "× Uncompleted";
    } else {
        e.target.parentElement.parentElement.classList.remove("book-uncompleted");
        e.target.parentElement.parentElement.classList.add("book-completed");

        e.target.classList.remove("btn-read-false");
        e.target.classList.add("btn-read-true");
        e.target.textContent = "✓ Completed";
    }
}


// MODAL
const modalContainer = document.querySelector(".modal-container");
const openModal = document.querySelector("#open");
const closeModal = document.querySelector("#close");

openModal.addEventListener("click", () => {
    modalContainer.setAttribute("style", "display: flex; justify-content:center; align-items: center;");
});

closeModal.addEventListener("click", () => {
    modalContainer.style.display = "none";
});

window.addEventListener("click", outsideClick);

function outsideClick(e) {
    if (e.target == modalContainer) {
        modalContainer.style.display = "none";
    }
}