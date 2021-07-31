import { Request, Response } from 'express'

import BookModel, { Book } from '../models/Book';

class BooksController {


    public async index(req: Request, res: Response) {
        const books: Book[] = await BookModel.find();

        res.render('books/index', {
            title: 'Books',
            books
        });
    }

    public renderFormBook(req: Request, res: Response): void {
        res.render('books/add', {
            title: 'Add A Book'
        });
    }

    public async saveBook(req: Request, res: Response) {
        const { title, author, isbn } = req.body;
        const book: Book = new BookModel({ title, author, isbn });
        const save = await book.save();

        if (save) res.redirect('/books');
    }
}


export const booksController = new BooksController();