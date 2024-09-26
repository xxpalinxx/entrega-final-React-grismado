export let remeras = [
    {
        id: 1,
        nombre: "vuejs",
        precio: 25,
        color: "gris",
        stock: 6
    },
    {
        id: 2,
        nombre: "angularjs", 
        precio: 25, 
        color: "gris", 
        stock: 4
    },
    { 
        id: 3, 
        nombre: "react", 
        precio: 40, 
        color: "negro", 
        stock: 10 
    },
    { 
        id: 4, 
        nombre: "redux", 
        precio: 25, 
        color: "amarillo", 
        stock: 5 
    },
    { 
        id: 5, 
        nombre: "nodejs", 
        precio: 35, 
        color: "gris", 
        stock: 8 
    },
    { 
        id: 6, 
        nombre: "sass", 
        precio: 25, 
        color: "negro", 
        stock: 3 
    },
    { 
        id: 7, 
        nombre: "html5", 
        precio: 15, 
        color: "gris", 
        stock: 5 
    },
    { 
        id: 8, 
        nombre: "github", 
        precio: 10, 
        color: "violeta", 
        stock: 9 
    },
    { 
        id: 9, 
        nombre: "bulma", 
        precio: 25, 
        color: "rojo", 
        stock: 2 
    },
    { 
        id: 10, 
        nombre: "typescript", 
        precio: 35, 
        color: "blanco", 
        stock: 7 
    },
    { 
        id: 11, 
        nombre: "drupal", 
        precio: 25, 
        color: "azul", 
        stock: 4 
    },
    { 
        id: 12, 
        nombre: "javascript", 
        precio: 45, 
        color: "amarillo", 
        stock: 8 
    },
    { 
        id: 13, 
        nombre: "graphql", 
        precio: 25, 
        color: "negro", 
        stock: 4 
    },
    { 
        id: 14, 
        nombre: "wordpress", 
        precio: 25, 
        color: "rojo", 
        stock: 3 
    }
]

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(remeras)
    }, 1600)
})

export default getProducts