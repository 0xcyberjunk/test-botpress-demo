
  const userId = event.target;
  
  const sqlite3 = require('sqlite3').verbose();
  let db = new sqlite3.Database('./users.db');

  db.get('SELECT * FROM users WHERE id = ?', [userId], (err, row) => {
    if (err) {
      throw err;
    }
    
    if (row) {
      // Пользователь зарегистрирован
      temp.isUserRegistered = true;
    } else {
      // Пользователь не зарегистрирован
      temp.isUserRegistered = false;
    }

    db.close();
  });