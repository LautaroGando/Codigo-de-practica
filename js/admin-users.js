//TODO - Recomendaciones:
//* Mostrar carteles para evitar clicks no deseados y mostrar alertas sobre el ingreso exitoso o denegado.

const tableUsersHTML = document.getElementById('tableUsers');
const formUsersHTML = document.getElementById('formUsers');
const buttonFormUsersHTML = formUsersHTML.querySelector('button[type="submit"]');
const buttonSearchUsersHTML = formUsersHTML.querySelector('button[type="button"]');
const searchHTML = document.getElementById('search');

const users = [
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/user.png',
        fullname: 'Lautaro Gando',
        username: 'Gandito',
        email: 'lauticapo1910cavs@gmail.com',
        confirmEmail: 'lauticapo1910cavs@gmail.com',
        password: 'Ganditocapogaso.3',
        confirmPassword: 'Ganditocapogaso.3',
        location: 'Liniers',
        date: new Date('2001-05-22' + 'T00:00:00-03:00').getTime(),
        role: 'ADMIN',
        createDate: new Date().getTime(),
    },
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/user.png',
        fullname: 'Rocio Antonella Bonin',
        username: 'LaUru',
        email: 'rocioantonellabonin@gmail.com',
        confirmEmail: 'rocioantonellabonin@gmail.com',
        password: 'Rochycapa3',
        confirmPassword: 'Rochycapa3',
        location: 'Almagro',
        date: new Date('1999-08-03' + 'T00:00:00-03:00').getTime(),
        role: 'USER',
        createDate: new Date().getTime(),
    },
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/user.png',
        fullname: 'Lucas Ezequiel Sanagua',
        username: 'Lukytas',
        email: 'lukitas@gmail.com',
        confirmEmail: 'lukitas@gmail.com',
        password: 'LuquiSanagua.1',
        confirmPassword: 'LuquiSanagua.1',
        location: 'Liniers',
        date: new Date('2004-09-07' + 'T00:00:00-03:00').getTime(),
        role: 'USER',
        createDate: new Date().getTime(),
    },
];

//? 9 - Hacer Local Storage

//? -----------------------------------------------------------------

//? 1 - Pintar la tabla

//? -----------------------------------------------------------------

//? 2 - Formatear la fecha

//? -----------------------------------------------------------------

//? 3 - Eliminar usuario

//? -----------------------------------------------------------------

//? 4 - Editar usuario

//? -----------------------------------------------------------------

//? 5 - Formatear el input de la fecha

//? -----------------------------------------------------------------

//? 6 - Agregar o editar usuario

    //! - Comprobar si el correo coincide con el confirmar correo

    //! -----------------------------------------------------------

    //! - Comprobar si la clave coincide con el confirmar clave

    //! -----------------------------------------------------------

    //! - Comprobar si el email ya existe

    //! -----------------------------------------------------------

    //! - Comprobar si el usuario ya existe

    //! -----------------------------------------------------------

//? -----------------------------------------------------------------

//? 7 - Resetear formulario

//? -----------------------------------------------------------------

//? 8 - Buscar usuario cuando se haga click en el boton buscar

//? -----------------------------------------------------------------