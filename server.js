const express = require('express');
const path = require('path');

const app = express();

// Set view engine ke EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware untuk file statis
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/index'));
app.use('/contact', require('./routes/contact'));


// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
