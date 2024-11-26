const http = require('http');


const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Programming</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            text-align: center;
            background-color: #f4f4f9;
        }
        header {
            background-color: #4CAF50;
            color: white;
            padding: 1em;
        }
        main {
            padding: 2em;
        }
        section {
            margin: 1.5em 0;
        }
        footer {
            margin-top: 2em;
            color: #777;
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to the Programming Page!</h1>
    </header>
    <main>
        <section>
            <h2>Description 1</h2>
            <p>Explore the world of programming and learn how to create solutions for any problem.</p>
        </section>
        <section>
            <h2>Description 2</h2>
            <p>Discover tools and languages that will take your tech career to the next level.</p>
        </section>
    </main>
    <footer>
        <p>Created using Node.js only.</p>
    </footer>
</body>
</html>
`;


const server = http.createServer((req, res) => {
    // Set response headers
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Send the HTML content
    res.end(htmlContent);
});


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
