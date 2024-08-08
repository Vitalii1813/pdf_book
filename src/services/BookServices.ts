import axios from 'axios';
import { Book } from '../types'; // Імпорт типу Book для TypeScript

const API_URL = 'http://localhost:3001/books'; // Базовий URL для API запитів

// Функція для отримання списку книг
export const fetchBooks = async (): Promise<Book[]> => {
    try {
        // Відправляємо GET запит до API для отримання книг
        const response = await axios.get(API_URL);
        return response.data; // Повертаємо дані з відповіді
    } catch (error) {
        // Логування помилок у консолі
        console.error('Error fetching books:', error);
        throw error; // Прокидуємо помилку далі
    }
};

// Функція для завантаження нової книги
export const uploadBook = async (formData: FormData): Promise<Book> => {
    try {
        // Відправляємо POST запит до API для завантаження книги
        const response = await axios.post(API_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data' // Вказуємо тип вмісту для FormData
            }
        });
        return response.data; // Повертаємо дані з відповіді
    } catch (error) {
        // Логування помилок у консолі
        console.error('Error uploading book:', error);
        throw error; // Прокидуємо помилку далі
    }
};
