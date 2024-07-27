/* ----- Modelo de Seleccion de celular de Pagina Web de venta de celulares ---------- */

/* funcion- estrcutura iterativa- unif  */

let productos = [
    { id: 1, nombre: "Iphone12", precio: 770, stock: 2 },
    { id: 2, nombre: "Iphone13", precio: 800, stock: 3 },
    { id: 3, nombre: "Iphone14", precio: 950, stock: 1 },
    { id: 4, nombre: "Iphone15", precio: 1100, stock: 5 },
]

let copiaproductos = productos.map(productos => productos.nombre)


for (const producto of productos) {
    console.log(producto.precio)
}



function Bienvenida() {
    alert("Bienvenida/o a Nuestra Pagina Web, Iphone San Miguel...")
}

const contactos = {
    whatsapp: "+5491123034557", gmail: "IphoneSanmiguel@gmail.com", instagram: "@iphone_sanmiguel"
}

const iphones = {
    Iphone12: 770, Iphone13: 800, Iphone14: 950, Iphone15: 1100
}
let idpuesto
Bienvenida()

let opcion = Number(prompt("Elija una de las siguientes opciones:\n1 Busco ayuda tecnica para arreglar Mi dispositivo...\n2 Busco adquirir un nuevo celular o algun producto...\n3 Quiero conocer donde puedo encontrar el local...\n0 Para salir."))
while (opcion !== 0) {
    if (opcion === 1) {
        alert("Para conseguir atencion tecnica especifica, te dejaremos nuestro contacto: \nWhatsapp:" + contactos.whatsapp + "\nGmail:" + contactos.gmail + "\nInstagram:" + contactos.instagram)
    } else if (opcion === 2) {
        alert("Bueno tienes dos formas de ver nuestro stock, o puedes mandarnos un msj a nuestro Whatsapp," + contactos.whatsapp + ", o nuestro Instragram," + contactos.instagram + ".\nLa otra manera es eligiendo el id de uno del listado que tenemos en el siguiente recuadro")
        let orden = Number(prompt("Si desea que le aparezcan los iPhones de menor a mayor precio, ingrese 5. Para de mayor a menor precio, ingrese 6."));
        let productosOrdenados;

        if (orden === 5) {
            productosOrdenados = productos.sort((a, b) => a.precio - b.precio);
        } else if (orden === 6) {
            productosOrdenados = productos.sort((a, b) => b.precio - a.precio);
        } else {
            alert("Opción incorrecta");
            continue;
        }
        idpuesto = Number(prompt("Listado:" + productos.map(productos => { return "\n Id: " + productos.id + "-" + productos.nombre + "- Precio: " + productos.precio + "- Stock: " + productos.stock})))
        if (productos.some(producto => producto.id === idpuesto)) {
            let productobuscados = productos.find(producto => producto.id === idpuesto)
            let carrito = []
            carrito.push({
                id: productobuscados.id,
                nombre: productobuscados.nombre,
                precioUnitario: productobuscados.precio,
                stock: productobuscados.id,
                Unidades: 1,
                subtotal: productobuscados.precio,
            })


            let opciones = Number(prompt("Elija alguna de las siguientes opciones:\n 1.Para seguir comprando...\n2. Para terminar la compra...\n0. Para salir"))
            while (opciones !== 0) {
                if (opciones === 1) {
                    alert("Usted ha elegido seguir su compra y aqui le dejaremos nuevamente el listado para que elija y agregue a su carrito")
                    idpuesto = Number(prompt("Listado:" + productos.map(productos => { return "\n Id: " + productos.id + "-" + productos.nombre + "- Precio: " + productos.precio + "- Stock: " + productos.stock })))
                    let productobuscado = productos.find(producto => producto.id === idpuesto)
                    let indiceBuscado = carrito.findIndex(producto => producto.id === idpuesto)
                    console.log(indiceBuscado)
                    if (productos.some(producto => producto.id === idpuesto)) {
                        if (indiceBuscado === -1) {
                            carrito.push({
                                id: productobuscado.id,
                                nombre: productobuscado.nombre,
                                precioUnitario: productobuscado.precio,
                                stock: productobuscado.id,
                                Unidades: 1,
                                subtotal: productobuscado.precio,
                            })
                        } else {
                            carrito[indiceBuscado].Unidades++;
                            carrito[indiceBuscado].subtotal = carrito[indiceBuscado].Unidades * carrito[indiceBuscado].precioUnitario
                            console.log(carrito)
                        }
                    }   else if(idpuesto === 5){const menoramayor= productos.filter(producto => producto.precio).sort((a, b) => a.precio - b.precio); console.log(menoramayor)}
                        else if(idpuesto === 6){const mayoramenor= productos.filter(producto => producto.precio).sort((b, a) => a.precio - b.precio)}
                    else { alert("La opcion es incorrecta") }

                } else if (opciones === 2) {
                    let total = 0;
                    carrito.forEach(producto => {
                        total += total + producto.subtotal
                    }); alert("El total de su compra seria:" + total + "usd, gracias por la compra."); break
                } else{ alert("La opcion es incorrecta") } 
                opciones = Number(prompt("Elija alguna de las siguientes opciones:\n 1.Para seguir comprando...\n2. Para terminar la compra...\n0. Para salir"))
            }
        } else { alert("La opcion es incorrecta, procedera a volver al princpio.") }



    } else if (opcion === 3) {
        alert("Nuestro Local se ubica en la provincia de Buenos Aires, San Miguel, la direccion es Av. Pte Perón 586")
    } else if (opcion === "") {
        alert("No escribio nada...")
    } else {
        alert("Opcion Incorrecta")
    }
    opcion = Number(prompt("Elija una de las siguientes opciones:\n1 Busco ayuda tecnica para arreglar Mi dispositivo...\n2 Busco adquirir un nuevo celular o algun producto...\n3 Quiero conocer donde puedo encontrar el local...\n0 Para salir."))
}


















