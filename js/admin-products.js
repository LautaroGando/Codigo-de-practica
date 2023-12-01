//TODO - Recomendaciones:
//* Mostrar carteles para evitar clicks no deseados y mostrar alertas sobre el ingreso exitoso o denegado.

const tableProductsHTML = document.getElementById('tableProducts');
const formProductsHTML = document.getElementById('formProducts');
const buttonFormProductsHTML = formProductsHTML.querySelector('button[type="submit"]');
const buttonSearchProductsHTML = formProductsHTML.querySelector('button[type="button"]');
const searchHTML = document.getElementById('search');

const products = [
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/html.webp',
        name: 'HTML',
        description: 'HTML, siglas en inglés de HyperText Markup Language, hace referencia al lenguaje de marcado para la elaboración de páginas web.',
        category: 'Frontend',
        difficulty: 1,
        createDate: new Date('1993-10-28' + 'T00:00:00-03:00').getTime(),
    },
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/css.png',
        name: 'CSS',
        description: 'CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.​',
        category: 'Frontend',
        difficulty: 2,
        createDate: new Date('1996-12-17' + 'T00:00:00-03:00').getTime(),
    },
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/js.png',
        name: 'JS',
        description: 'JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,​ basado en prototipos, imperativo, débilmente tipado y dinámico.',
        category: 'Frontend',
        difficulty: 4,
        createDate: new Date('1995-12-04' + 'T00:00:00-03:00').getTime(),
    },
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/github.webp',
        name: 'GitHub',
        description: 'GitHub es una forja para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador. El software que opera GitHub fue escrito en Ruby on Rails. Desde enero de 2010, GitHub opera bajo el nombre de GitHub, Inc.',
        category: 'Frontend',
        difficulty: 3,
        createDate: new Date('2008-02-08' + 'T00:00:00-03:00').getTime(),
    },
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/bootstrap.Default',
        name: 'Bootstrap',
        description: 'Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web.',
        category: 'Frontend',
        difficulty: 3,
        createDate: new Date('2011-08-19' + 'T00:00:00-03:00').getTime(),
    },
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/sass.png',
        name: 'SASS',
        description: 'Sass es un lenguaje de hoja de estilos en cascada inicialmente diseñado por Hampton Catlin y desarrollado por Natalie Weizenbaum.​​ Después de sus versiones iniciales, Nathan Weizenbaum y Chris Eppstein han continuado extendiendo Sass con SassScript, un lenguaje de script simple, usado en los ficheros Sass.',
        category: 'Frontend',
        difficulty: 3,
        createDate: new Date('2006-11-28' + 'T00:00:00-03:00').getTime(),
    },
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/less.webp',
        name: 'LESS',
        description: 'Less es un dinámico lenguaje de hojas de estilo que puede ser compilado en hojas de estilo en cascada y ejecutarse en el lado del cliente o en el lado del servidor. Diseñado por Alexis Sellier.',
        category: 'Frontend',
        difficulty: 3,
        createDate: new Date('2009-03-12' + 'T00:00:00-03:00').getTime(),
    },
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/reactjs.png',
        name: 'ReactJS',
        description: 'React es una librería Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres.',
        category: 'Frontend',
        difficulty: 3,
        createDate: new Date('2013-05-29' + 'T00:00:00-03:00').getTime(),
    },
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/mongodb.webp',
        name: 'MongoDB',
        description: 'MongoDB es un sistema de base de datos NoSQL, orientado a documentos y de código abierto. En lugar de guardar los datos en tablas, tal y como se hace en las bases de datos relacionales.',
        category: 'Backend',
        difficulty: 4,
        createDate: new Date('2009-02-11' + 'T00:00:00-03:00').getTime(),
    },
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/nodejs.webp',
        name: 'NodeJS',
        description: 'Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.',
        category: 'Backend',
        difficulty: 5,
        createDate: new Date('2009-05-27' + 'T00:00:00-03:00').getTime(),
    },
];

//? 9 - Hacer Local Storage

//? -----------------------------------------------------------------

//? 1 - Pintar la tabla

//? -----------------------------------------------------------------

//? 2 - Formatear la fecha

//? -----------------------------------------------------------------

//? 3 - Eliminar producto

//? -----------------------------------------------------------------

//? 4 - Editar producto

//? -----------------------------------------------------------------

//? 5 - Formatear el input de la fecha

//? -----------------------------------------------------------------

//? 6 - Agregar o editar producto

//? -----------------------------------------------------------------

//? 7 - Resetear formulario

//? -----------------------------------------------------------------

//? 8 - Buscar producto cuando se haga click en el boton buscar

//? -----------------------------------------------------------------