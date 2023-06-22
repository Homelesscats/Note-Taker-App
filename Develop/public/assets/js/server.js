    const express = require('express');
    const html_routes = require('./routes/html/-routes');
    const api_routes = require('./routes/api-routes');
    const port = 3001;
  //  Path: Develop\public\assets\js\server.js
   
   
    const app = express();
    //const PORT = process.env.PORT || 3001;
    //const PORT = 3001;
    
    app.use(express.urlencoded({ extended: false}));
    app.use(express.json());
    app.use(express.static("public"));
    app.use(html_routes);
    app.use(api_routes);
    //app.use(require('./routes/html-routes'));
    app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    });

// Path: Develop\public\assets\js\api-routes.js
    const router = require('express').Router();
    //const router = express.Router();
    const fs = require('fs');

    