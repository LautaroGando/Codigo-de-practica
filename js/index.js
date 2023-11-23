//TODO - Recomendaciones:
//* Mostrar carteles para evitar clicks no deseados y mostrar alertas sobre el ingreso exitoso o denegado.

const cards = [
    {
        image: 'assets/images/html.jpg',
        title: 'HTML',
        description: 'HTML, siglas en inglés de HyperText Markup Language, hace referencia al lenguaje de marcado para la elaboración de páginas web.',
        difficulty: 1,
    },
    {
        image: 'assets/images/css.webp',
        title: 'CSS',
        description: 'CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.',
        difficulty: 2,
    },
    {
        image: 'assets/images/js.jpg',
        title: 'JS',
        description: 'JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,​ basado en prototipos, imperativo, débilmente tipado y dinámico.',
        difficulty: 4,
    },
    {
        image: 'assets/images/github.jpg',
        title: 'GitHub',
        description: 'GitHub es una forja para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador. El software que opera GitHub fue escrito en Ruby on Rails. Desde enero de 2010, GitHub opera bajo el nombre de GitHub, Inc.',
        difficulty: 3,
    },
    {
        image: 'assets/images/bootstrap.jpg',
        title: 'Bootstrap',
        description: 'Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web.',
        difficulty: 3,
    },
    {
        image: 'assets/images/sass.jpg',
        title: 'SASS',
        description: 'Sass es un lenguaje de hoja de estilos en cascada inicialmente diseñado por Hampton Catlin y desarrollado por Natalie Weizenbaum.​​ Después de sus versiones iniciales, Nathan Weizenbaum y Chris Eppstein han continuado extendiendo Sass con SassScript, un lenguaje de script simple, usado en los ficheros Sass.',
        difficulty: 3,
    },
    {
        image: 'assets/images/less.png',
        title: 'LESS',
        description: 'Less es un dinámico lenguaje de hojas de estilo que puede ser compilado en hojas de estilo en cascada y ejecutarse en el lado del cliente o en el lado del servidor. Diseñado por Alexis Sellier.',
        difficulty: 3,
    },
    {
        image: 'assets/images/reactjs.webp',
        title: 'ReactJS',
        description: 'React es una librería Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres.',
        difficulty: 3,
    },
    {
        image: 'assets/images/mongodb.webp',
        title: 'MongoDB',
        description: 'MongoDB es un sistema de base de datos NoSQL, orientado a documentos y de código abierto. En lugar de guardar los datos en tablas, tal y como se hace en las bases de datos relacionales.',
        difficulty: 4,
    },
    {
        image: 'assets/images/nodejs.png',
        title: 'NodeJS',
        description: 'Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.',
        difficulty: 5,
    },
];

const cardsHTML = document.getElementById('cards');

//? 1 - Pintar cards desde JS

//? -----------------------------------------------------------------