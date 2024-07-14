/* ----- Modelo de Seleccion de celular de Pagina Web de venta de celulares ---------- */

/* funcion- estrcutura iterativa- unif  */

function Bienvenida(){
    alert("Bienvenida/o a Nuestra Pagina Web, Iphone San Miguel...")
}

const contactos ={
    whatsapp:"+5491123034557", gmail:"IphoneSanmiguel@gmail.com", instagram:"@iphone_sanmiguel"
}

const iphones={
    Iphone12:770,Iphone13:800,Iphone14:950,Iphone15:1100
}

Bienvenida()

let stock
let opcion= Number (prompt("Elija una de las siguientes opciones:\n1 Busco ayuda tecnica para arreglar Mi dispositivo...\n2 Busco adquirir un nuevo celular o algun producto...\n3 Quiero conocer donde puedo encontrar el local...\n0 Para salir."))
while (opcion !== 0){
if(opcion === 1){
    alert("Para conseguir atencion tecnica especifica, te dejaremos nuestro contacto: \nWhatsapp:" + contactos.whatsapp + "\nGmail:" + contactos.gmail + "\nInstagram:"+ contactos.instagram)
} else if(opcion === 2){ 
    alert("Bueno tienes dos formas de ver nuestro stock, o puedes mandarnos un msj a nuestro Whatsapp," + contactos.whatsapp + ", o nuestro Instragram," + contactos.instagram + ".\nLa otra manera es eligiendo uno del listado que tenemos en el siguiente recuadro")
    stock= Number (prompt("Listado de los Iphones: \n1 Iphone 12:$770     2 Iphone 13:$800\n3 Iphone 14:$950     4 Iphone 15:$1100"))
    if (stock >= 1 && stock <= 4) {
        alert("El Iphone ya ha sido encargado, debe comunicarse a nuestro instagram, con el siguiente código: #4583");
        alert("Nuestro Instagram es " + contactos.instagram);
    } else {
        alert("No eligió ninguna de las opciones válidas. Lo mandaremos al principio.");
    }
} else if(opcion === 3) {
    alert("Nuestro Local se ubica en la provincia de Buenos Aires, San Miguel, la direccion es Av. Pte Perón 586")
} else if(opcion === ""){
    alert("No escribio nada...")
} else{
    alert("Opcion Incorrecta")
} 
opcion= Number (prompt("Elija una de las siguientes opciones:\n1 Busco ayuda tecnica para arreglar Mi dispositivo...\n2 Busco adquirir un nuevo celular o algun producto...\n3 Quiero conocer donde puedo encontrar el local...\n0 Para salir."))
}
