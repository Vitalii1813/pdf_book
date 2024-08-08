import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { uploadBook } from '../services/BookServices';
import styles from '../assets/module.css'; // Імпорт стилів

// Компонент для завантаження книги
const UploadBook: React.FC = () => {
    // Функція обробки файлів, які були перетягнуті або вибрані
    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        // Створюємо новий об'єкт FormData для відправки на сервер
        const formData = new FormData();
        // Додаємо вибраний файл до formData
        formData.append('file', acceptedFiles[0]);
        // Додаємо заголовок книги до formData
        formData.append('title', 'New Book');

        try {
            // Викликаємо функцію для завантаження книги на сервер
            const newBook = await uploadBook(formData);
            console.log('Uploaded book:', newBook); // Виводимо результат в консоль
        } catch (error) {
            console.error('Error uploading book:', error); // Виводимо помилку в консоль
        }
    }, []); // Залежності порожні, функція не буде змінюватися

    // Ініціалізація hook'у useDropzone для обробки дроп-зони
    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div
            {...getRootProps()} // Розподіляємо властивості дроп-зони
            className={styles.dropzone} // Додаємо клас стилів
        >
            <input {...getInputProps()} /> {/* Включаємо input для вибору файлів */}
            <p className={styles.message}>Drag 'n' drop a PDF file here, or click to select one</p> {/* Інструкція для користувача */}
        </div>
    );
};

export default UploadBook; // Експортуємо компонент для використання в інших частинах програми
