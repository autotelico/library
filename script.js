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
    const addButton = document.querySelector('#add-button');
    const resetButton = document.querySelector('#reset-button');

    function Book(author, title, pages, hasRead) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.hasRead = hasRead;
    }

    const myLibrary = [];
    console.log(myLibrary);

    function addBookToLibrary(book) {
        myLibrary.push(book);
        console.log(myLibrary);
        displayBooks();
    }

    function displayBooks() {

        clearOldCards();

        for (const book of myLibrary) {

            const newCard = document.createElement('div');
            newCard.classList.add('card', 'container', 'border', 'border-secondary', 'bg-warning', 'm-2', 'p-3', 'text-center');

            mainContainer.appendChild(newCard);

            const newAuthor = document.createElement('p');
            newCard.appendChild(newAuthor);
            newAuthor.textContent = `Author: ${book.author}`;

            const newTitle = document.createElement('p');
            newCard.appendChild(newTitle);
            newTitle.textContent = `Title: ${book.title}`;

            const newPages = document.createElement('p');
            newCard.appendChild(newPages);
            newPages.textContent = `Pages: ${book.pages}`;

            const newReadStatus = document.createElement('p');
            newCard.appendChild(newReadStatus);
            newReadStatus.textContent = `Read? ${book.hasRead}`;

            const newButton = document.createElement('button');
            newButton.classList.add('delete-btn', 'py-1', 'px-3', 'border', 'border-primary');
            newButton.textContent = 'Delete Book';
            newCard.appendChild(newButton);
            newCard.setAttribute('id', book.title);
            console.log('Card id is ' + newCard.id);

            const newInput = document.createElement('input');
            newInput.type = 'checkbox';
            const newSpan = document.createElement('span');
            newSpan.textContent = 'Change read status: '
            newSpan.appendChild(newInput);
            newReadStatus.after(newSpan);

            newInput.addEventListener('change', () => {
                if (newInput.checked) {
                    newReadStatus.textContent = `Read? Yes`;
                } else {
                    newReadStatus.textContent = `Read? No`;
                }
            })

            newButton.addEventListener('click', (e) => {
                deleteCard(e);
            })

        }
    }

    function deleteCard(event) {
        for (const book of myLibrary) {
            let targetedCard = event.target.parentNode;

            console.log(`CARD ID: ${targetedCard.id}`);
            console.log(`BOOK TITLE: ${book.title}`);

            if (targetedCard.id === book.title) {
                myLibrary.splice(myLibrary.indexOf(book), 1);
                targetedCard.remove();
                console.log(myLibrary);
            } else {
                console.log('book not found');
            }
        }
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
        bookReadStatus.checked = false;
    }

    function verifyReadStatus() {
        let read;
        if (bookReadStatus.checked) {
            read = 'Yes';
        } else {
            read = 'No';
        }
        return read;
    };

    form.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.target.value !== '') {
            const createdBook = new Book(bookAuthor.value, bookTitle.value, bookPages.value, verifyReadStatus());
            console.log('Verified read status: ' + verifyReadStatus());
            addBookToLibrary(createdBook);
            clearInputFields();
        }
    })
    
    addButton.addEventListener('click', () => {
        const createdBook = new Book(bookAuthor.value, bookTitle.value, bookPages.value, verifyReadStatus());
        addBookToLibrary(createdBook);
        clearInputFields();
    })

    newBookBtn.addEventListener('click', () => {
        form.classList.replace('d-none', 'd-block');
    })
})