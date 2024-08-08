const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const app = express();

// Middleware для обробки CORS
app.use(cors());

// Middleware для обробки JSON-запитів
app.use(express.json());

// Налаштування multer для зберігання завантажених файлів
const upload = multer({
    dest: 'uploads/', // Директорія для зберігання файлів
    limits: { fileSize: 10000000 } // Максимальний розмір файлу 10 MB
});

// Директорія для статичних файлів
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const books = [
    { id: 1, title: 'Book 1', fileUrl: '/uploads/book1.pdf' },
    { id: 2, title: 'Book 2', fileUrl: '/uploads/book2.pdf' }
];

// Маршрут для отримання книг
app.get('/books', (req, res) => {
    res.json(books);
});

// Маршрут для завантаження нової книги
app.post('/books', upload.single('file'), (req, res) => {
    const newBook = { id: books.length + 1, title: req.body.title, fileUrl: `/uploads/${req.file.filename}` };
    books.push(newBook);
    res.json(newBook);
});

// Запуск сервера на порту 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
