export let remeras = [
    {id: 1, img:"./img/1.jpg" , nombre: "vuejs", precio: 25, color: "gris", stock: 6},
    {id: 2, img:"./img/2.jpg" , nombre: "angularjs", precio: 25, color: "gris", stock: 4},
    {id: 3, img:"./img/3.jpg" , nombre: "react", precio: 40, color: "negro", stock: 10},
    {id: 4, img:"./img/4.jpg" , nombre: "redux", precio: 25, color: "amarillo", stock: 5},
    {id: 5, img:"./img/5.jpg" , nombre: "nodejs", precio: 35, color: "gris", stock: 8},
    {id: 6, img:"./img/6.jpg" , nombre: "sass", precio: 25, color: "negro", stock: 3},
    {id: 7, img:"./img/7.jpg" , nombre: "html5", precio: 15, color: "gris", stock: 5},
    {id: 8, img:"./img/8.jpg" , nombre: "github", precio: 10, color: "violeta", stock: 9},
    {id: 9, img:"./img/9.jpg" , nombre: "bulma", precio: 25, color: "rojo", stock: 2},
    {id: 10, img:"./img/10.jpg" , nombre: "typescript", precio: 35, color: "blanco", stock: 7},
    {id: 11, img:"./img/11.jpg" , nombre: "drupal", precio: 25, color: "azul", stock: 4},
    {id: 12, img:"./img/12.jpg" , nombre: "javascript", precio: 45, color: "amarillo", stock: 8},
    {id: 13, img:"./img/13.jpg" , nombre: "graphql", precio: 25, color: "negro", stock: 4},
    {id: 14, img:"./img/14.jpg" , nombre: "wordpress", precio: 25, color: "rojo", stock: 3}
]

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(remeras)
    }, 1600)
})

export default getProducts