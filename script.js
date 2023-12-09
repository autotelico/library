document.addEventListener("DOMContentLoaded", () => {

    const bookAuthor = document.querySelector('#book-author');
    const bookTitle = document.querySelector('#book-title');
    const bookPageCount = document.querySelector('#book-page-count');
    const hasRead = document.querySelector('#book-has-read');

    const cardTitle = document.querySelector('.book-title');
    const cardDescription = document.querySelector('.book-description');
    // const form = document.querySelector('form');
    const addButton = document.querySelector('#add-button');
    const resetButton = document.querySelector('#reset-button');


    const myLibrary = [];

    function Book(title, description) {
        this.title = title;
        this.description = description;
    }

    function addBook(book) {
        myLibrary.push(book);
        console.log(myLibrary);
    }


    usersBook.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addBook(usersBook.value);
            usersBook.value = '';
        }
    })
    
    
    const theHobbit = new Book('The Hobbit', 'Cool book by J.R.R Tolkien');
    
    bookTitle.textContent = theHobbit.title;
    bookDescription.textContent = theHobbit.description;
    
})

// resetButton.addEventListener('click', () => {
//     while (myLibrary.length > 0) {
//         myLibrary.pop();
//         console.log(myLibrary);
//     }
// })   