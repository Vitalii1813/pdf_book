import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../services/BookServices'; // Імпорт функції для отримання списку книг
import { Book } from '../types'; // Імпорт типу Book для TypeScript
import styles from '../assets/module.css'; // Імпорт стилів

const BookList: React.FC = () => {
    // Стан для зберігання списку книг
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        // Асиметрична функція для отримання книг з сервера
        const getBooks = async () => {
            try {
                const books = await fetchBooks(); // Викликаємо функцію для отримання книг
                setBooks(books); // Оновлюємо стан книг
            } catch (error) {
                console.error('Error fetching books:', error); // Логування помилок
            }
        };

        getBooks(); // Викликаємо функцію для отримання книг при монтуванні компонента
    }, []); // Порожній масив залежностей, функція викликається лише при монтуванні компонента

    return (
        <div>
            <h1 className="one">Library1</h1> {/* Заголовок сторінки */}
            <ul>
                {/* Відображення списку книг */}
                {books.map((book) => (
                    <li key={book.id}>
                        <a href={book.fileUrl} target="_blank" rel="noopener noreferrer">
                            {book.title} {/* Назва книги як посилання */}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList; // Експортуємо компонент для використання в інших частинах програми
