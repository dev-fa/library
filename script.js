function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    read 
        ? this.read = "have read" 
        : this.read = "not read yet";
    // this.info = function () {
    //     return `${this.title} by ${this.author}, ${this.pages} pages; ${this.read}.`;
    // }
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages; ${this.read}.`;
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());
const theStranger = new Book("The Stranger", "Albert Camus", 159, true);
console.log(theStranger.info());


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