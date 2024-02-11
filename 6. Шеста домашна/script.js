function Library(name, books, address){
    this.name = !name ? "Unnamed" : name;
    this.books = !books ? [] : books;
    this.address = !address ? "No address" : address;
    this.numberOfMembers = this.books.length * 15;

    this.printBooks = function(){
        this.books.forEach(book => console.log(book));
    }

    this.addBook = function(book){
       let newBook = Object.create(book);
       this.books.push(newBook);
    }
}

function Book(title, genre, libraries, authors){
    this.title = !title ? "Unnamed" : title;
    this.genre = !genre ? "Unnamed" : genre;
    this.libraries = !libraries ? [] : libraries;
    this.authors = !authors ? [] : authors;

    this.addLibrary = function(library){
        this.libraries.push(library);
        library.books.push(this);

    }

    this.removeLibrary = function(library){
        this.libraries = this.libraries.filter(s => s !== library);
        library.books = library.books.filter(x => x !== this);
    }
}

function Author(firstName, lastName, yearOfBirth){
    this.firstName = !firstName ? "Unnamed" : firstName;
    this.lastName = !lastName ? "Unnamed" : lastName;
    this.yearOfBirth = isNaN(yearOfBirth) ? 1900 : yearOfBirth;
    this.books = !books ? [] : books;
    this.currentBook = null;

    this.startBook = function(book){
        if(this.currentBook != null){            
            this.books.push(this.currentBook);
            }
        this.currentBook = book;
        }
    }
