document.addEventListener("DOMContentLoaded", () => {

    const usersBook = document.querySelector('#users-book');
    // const form = document.querySelector('form');
    const addButton = document.querySelector('#add-button');
    const resetButton = document.querySelector('#reset-button');

    const myLibrary = [];

    function Book() {
        // will build books here
    }

    function addBook(book) {
        myLibrary.push(book);
        console.log(myLibrary);
    }

    usersBook.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addBook(usersBook.value);
        }
    })

    resetButton.addEventListener('click', () => {
        while (myLibrary.length > 0) {
            myLibrary.pop();
            console.log(myLibrary);
        }
    })


})