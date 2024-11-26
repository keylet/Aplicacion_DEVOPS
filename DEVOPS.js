const http = require('http');

// HTML de la página
const htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenido a Programación</title>
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
        <h1>¡Bienvenido a la Página de Programación!</h1>
    </header>
    <main>
        <section>
            <h2>Descripción 1</h2>
            <p>Explora el mundo de la programación y aprende a crear soluciones para cualquier problema.</p>
        </section>
        <section>
            <h2>Descripción 2</h2>
            <p>Descubre herramientas y lenguajes que te llevarán al siguiente nivel en tu carrera tecnológica.</p>
        </section>
    </main>
    <footer>
        <p>Creado solo con Node.js.</p>
    </footer>
</body>
</html>
`;

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
    // Configurar encabezados
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Enviar el contenido HTML
    res.end(htmlContent);
});

// Escuchar en el puerto 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
