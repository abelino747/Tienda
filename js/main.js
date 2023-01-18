const usuario = document.querySelector(".correo");
const menu = document.querySelector(".menu");

usuario.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("inactive");
  //si la orden esta abierta cierre
  if (!orden.classList.contains("inactive")) {
    orden.classList.toggle("inactive");
  }
  //si menu mobile esta abierto cierre
  if (!menuMovil.classList.contains("inactive")) {
    menuMovil.classList.toggle("inactive");
  }
     //si detalleProducto escritorio esta abierto cierre
     if (!ordenCompra.classList.contains("inactive")) {
        ordenCompra.classList.toggle("inactive");
      }
}

const hamburger = document.querySelector(".hamburger");
const menuMovil = document.querySelector(".menuMobile");

hamburger.addEventListener("click", toggleMenuMovil);

function toggleMenuMovil() {
  menuMovil.classList.toggle("inactive");
  //si la orden esta abierta cierre
  if (!orden.classList.contains("inactive")) {
    orden.classList.toggle("inactive");
  }
  //si sing out escritorio esta abierto cierre
  if (!menu.classList.contains("inactive")) {
    menu.classList.toggle("inactive");
  }
   //si detalleProducto escritorio esta abierto cierre
   if (!ordenCompra.classList.contains("inactive")) {
    ordenCompra.classList.toggle("inactive");
  }
}

const orden = document.querySelector(".orden");
const carrito = document.querySelector(".shopping_cart");

carrito.addEventListener("click", toggleOrden);

function toggleOrden() {
  orden.classList.toggle("inactive");
  //si el menu movil esta abierto, cierrelo
  if (!menuMovil.classList.contains("inactive")) {
    menuMovil.classList.toggle("inactive");
  }
  //si sing out escritorio esta abierto cierre
  if (!menu.classList.contains("inactive")) {
    menu.classList.toggle("inactive");
  }
  //si detalleProducto escritorio esta abierto cierre
  if (!ordenCompra.classList.contains("inactive")) {
    ordenCompra.classList.toggle("inactive");
  }
}

// detalle del producto al dar click en la imagen
const ordenCompra = document.querySelector(".pedido");
function mostrarOrden() {
  ordenCompra.classList.remove("inactive");
  
  // agrega class inactive para no mostrar mientras este desplegado ordenCompra
  menu.classList.add("inactive");
  menuMovil.classList.add("inactive");
  orden.classList.add("inactive");

 





}

//boton cerrar en el detalle pr0ducto
const cerrar = document.querySelector(".cerrar");
cerrar.addEventListener("click", cerrarProducto);
function cerrarProducto() {
  ordenCompra.classList.add("inactive");


}


//creacion de las card con los productos
const listaProductos = [];
listaProductos.push({
  nombre: "computador",
  precio: 1200,
  imagen:
    "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

listaProductos.push({
  nombre: "computador",
  precio: 1200,
  imagen:
    "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

listaProductos.push({
  nombre: "computador",
  precio: 1200,
  imagen:
    "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

/*
<div class="container1">

<div class="productoDetalle">
  <div class="card">
    <img
      class="producto"
      src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="imagen"
    />
    <h1>$100</h1>
    <img
      class="carrito"
      src="icons/icon_shopping_cart.svg"
      alt="carrito"
    />
    <span>Computador</span>
  </div>
</div>

</div>
*/
const con = document.querySelector(".conten");

function renderProducts(listaProductos) {
  for (producto of listaProductos) {
    console.log(producto.precio);

    const nombreProducto = document.createElement("span");
    nombreProducto.innerText = producto.nombre;

    const iconCarrito = document.createElement("img");
    iconCarrito.setAttribute("src", "icons/icon_shopping_cart.svg");
    iconCarrito.classList.add("carrito");

    const price = document.createElement("h1");
    price.innerText = "$ " + producto.precio;

    const productoImg = document.createElement("img");
    productoImg.setAttribute("src", producto.imagen);
    productoImg.classList.add("producto");
    productoImg.addEventListener("click", mostrarOrden);

    const card = document.createElement("div");
    card.classList.add("card");
    card.append(productoImg, price, iconCarrito, nombreProducto);

    const productoDetalle = document.createElement("div");
    productoDetalle.classList.add("productoDetalle");
    productoDetalle.appendChild(card);

    const containe = document.createElement("div");
    containe.classList.add("container1");
    containe.appendChild(productoDetalle);

    con.appendChild(containe);
  }
}
renderProducts(listaProductos);
