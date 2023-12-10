document.addEventListener("DOMContentLoaded", () => {


    const bookAuthor = document.querySelector('#book-author');
    const bookTitle = document.querySelector('#book-title');
    const bookPages = document.querySelector('#book-pages');
    const bookReadStatus = document.querySelector('#book-has-read');

    const mainContainer = document.querySelector('#main-container');
    const newBookBtn = document.querySelector('#new-book');
    const form = document.querySelector('form');

    const cardAuthor = document.querySelector('.card-author');
    const cardTitle = document.querySelector('.card-title');
    const cardPages = document.querySelector('.card-pages');
    const cardReadStatus = document.querySelector('.card-has-read');
    // const form = document.querySelector('form');
    const addButton = document.querySelector('#add-button');
    const resetButton = document.querySelector('#reset-button');

    function Book(author, title, pages, hasRead) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.hasRead = Boolean(hasRead);
    }

    const myLibrary = [];
    console.log(myLibrary);

    function addBookToLibrary(book) {
        myLibrary.push(book);
        console.log(myLibrary);
        displayBooks();
    }

    function displayBooks() { // fancier displayInfo() sibling

        clearOldCards();

        for (const book of myLibrary) {

            const newCard = document.createElement('div');
            newCard.classList.add('card', 'container', 'border', 'border-secondary', 'bg-warning', 'm-2', 'p-3');

            mainContainer.appendChild(newCard);

            const newAuthor = document.createElement('p');
            newCard.appendChild(newAuthor);
            newAuthor.textContent = book.author;

            const newTitle = document.createElement('p');
            newCard.appendChild(newTitle);
            newTitle.textContent = book.title;

            const newPages = document.createElement('p');
            newCard.appendChild(newPages);
            newPages.textContent = book.pages;

            const newReadStatus = document.createElement('p');
            newCard.appendChild(newReadStatus);
            newReadStatus.textContent = book.readStatus;

            const newButton = document.createElement('button');
            newButton.classList.add('delete-btn');
            newButton.textContent = 'Delete Book';
            newCard.appendChild(newButton);

            newButton.addEventListener('click', (e) => {
                deleteCard(e);
            })
        }
    }

    function deleteCard(event) {
        event.target.parentNode.remove();
        myLibrary.shift();
        console.log(myLibrary);
    }

    function clearOldCards() {
        const cardList = document.querySelectorAll('.card');

        for (const card of cardList) {
            card.remove();
        }
    }

    function clearInputFields() {
        bookAuthor.value = '';
        bookTitle.value = '';
        bookPages.value = '';
        bookReadStatus.value = '';
    }

    addButton.addEventListener('click', () => {
        const createdBook = new Book(bookAuthor.value, bookTitle.value, bookPages.value, bookReadStatus.value)
        addBookToLibrary(createdBook);
        clearInputFields();
    })

    newBookBtn.addEventListener('click', () => {
        form.classList.replace('d-none', 'd-block');
    })





    // for (const book in myLibrary) {
    //     cardAuthor.textContent = bookAuthor.value;
    // }

    // console.log(myLibrary[0]);

    // function addBook(book) {
    //     myLibrary.push(book);
    //     console.log(myLibrary);
    // }


    // usersBook.addEventListener('keydown', (e) => {
    //     if (e.key === 'Enter') {
    //         addBook(usersBook.value);
    //         usersBook.value = '';
    //     }
    // })



})

// resetButton.addEventListener('click', () => {
//     while (myLibrary.length > 0) {
//         myLibrary.pop();
//         console.log(myLibrary);
//     }
// })   