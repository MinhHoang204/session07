interface Book {
    title: string;
    author: string;
    price: number;
    printBook: () => void;
    updateBook: (title?: string, author?: string, price?: number) => void;
}

const book: Book = {
    title: "Sample Book",
    author: "Sample Author",
    price: 10.99,
    printBook: function() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Price: ${this.price}`);
    },
    updateBook: function(title?: string, author?: string, price?: number) {
        if (title) {
            this.title = title;
        }
        if (author) {
            this.author = author;
        }
        if (price) {
            this.price = price;
        }
    }
};

book.printBook();
book.updateBook("New Title", "New Author", 19.99);
book.printBook();