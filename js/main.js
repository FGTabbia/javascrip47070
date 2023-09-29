const velocidadNave = 92;

class Viaje {
    constructor(planeta,tipo,descripcion,distancia,tripulantes){
        this.planeta = planeta;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.distancia = parseFloat(distancia);
        this.tripulantes = parseInt(tripulantes);
    };
    presupuestoViaje (){
        return this.distancia * 1500 * this.tripulantes;
    }
    duracionViaje(){
        let tiempoViaje = this.distancia/velocidadNave;
        return parseInt(tiempoViaje*60) + " MINUTOS------equivalente a: " + parseInt(tiempoViaje) + " HORAS------equivalente a: " + parseInt(tiempoViaje/24) + " DIAS";
    }
};

let arrViajes = [];
let check = " ";
while (check != "listo" || check != "Listo" || check != "LISTO") {
    let check = prompt("Ingrese los nombres de sus planetas destino y una vez terminado ingrese listo en este campo para realizar su consulta");
    if (check === "listo" || check === "LISTO" || check === "Listo"){
        break;
    }else{
        planetaNombre = check;
        let planetaTipo = prompt("Tipo de planeta");
        let planetaDescripcion = prompt("Descripción del planeta");
        let checkDistancia = parseFloat(prompt("Distancia desde la tierra del sistema solar en años luz (Minimo 4.3)", "4.3"));
        console.log(checkDistancia);
        if (checkDistancia < 4.3 || isNaN(checkDistancia)){
            alert("Invalid")
            continue;
        };
        let cantidadTripulantes = parseInt(prompt("Cantidad de tripulantes (Minimo 1)"))
        console.log(cantidadTripulantes);
        if (cantidadTripulantes <= 0 || isNaN(cantidadTripulantes)){
            alert("invalid")
            continue;
        }
        arrViajes.push(new Viaje(planetaNombre,planetaTipo,planetaDescripcion,checkDistancia,cantidadTripulantes))         
    }   
}
console.log(arrViajes);

for (let viaje of arrViajes){
    document.write("<ul><li><h3>Nombre del planeta: " + viaje.planeta + "</h3></li>");
    document.write("<li><h3>Tipo de planeta: " + viaje.tipo + "</h3></li>");
    document.write("<li><h3>Descripcion del planeta: " + viaje.descripcion + "</h3></li>");
    document.write("<li><h3>Distancia respecto a la tierra: " + viaje.distancia + "</h3></li>");
    document.write("<li><h3>Cantidad de tripulantes: " + viaje.tripulantes + "</h3></li>");
    document.write("<li><h3>Coste del viaje: " + viaje.presupuestoViaje() + "</h3></li>");
    document.write("<li><h3>Duracion del viaje: " + viaje.duracionViaje() + "</h3></li></ul></br>");
}

let viajesCortos = arrViajes.filter(Viaje => Viaje.distancia<= 15456);
document.write("<h2> Viajes de corta duracion : </h2>")

for (let viaje of viajesCortos){
    document.write("<ul><li><h3>Nombre del planeta: " + viaje.planeta + "</h3></li>");
    document.write("<li><h3>Duracion del viaje: " + viaje.duracionViaje() + "</h3></li>");
    document.write("<li><h3>Tipo de planeta: " + viaje.tipo + "</h3></li>");
    document.write("<li><h3>Descripcion del planeta: " + viaje.descripcion + "</h3></li>");
    document.write("<li><h3>Distancia respecto a la tierra: " + viaje.distancia + "</h3></li></ul></br>");
}

let viajesMedios = arrViajes.filter(Viaje => Viaje.distancia > 15456 && Viaje.distancia <= 92736);
document.write("<h2> Viajes de media duracion : </h2>")

for (let viaje of viajesMedios){
    document.write("<ul><li><h3>Nombre del planeta: " + viaje.planeta + "</h3></li>");
    document.write("<li><h3>Duracion del viaje: " + viaje.duracionViaje() + "</h3></li>");
    document.write("<li><h3>Tipo de planeta: " + viaje.tipo + "</h3></li>");
    document.write("<li><h3>Descripcion del planeta: " + viaje.descripcion + "</h3></li>");
    document.write("<li><h3>Distancia respecto a la tierra: " + viaje.distancia + "</h3></li></ul></br>");
}

let viajesLargos = arrViajes.filter(Viaje => Viaje.distancia > 92736);
document.write("<h2> Viajes de larga duracion : </h2>")

for (let viaje of viajesLargos){
    document.write("<ul><li><h3>Nombre del planeta: " + viaje.planeta + "</h3></li>");
    document.write("<li><h3>Duracion del viaje: " + viaje.duracionViaje() + "</h3></li>");
    document.write("<li><h3>Tipo de planeta: " + viaje.tipo + "</h3></li>");
    document.write("<li><h3>Descripcion del planeta: " + viaje.descripcion + "</h3></li>");
    document.write("<li><h3>Distancia respecto a la tierra: " + viaje.distancia + "</h3></li></ul></br>");
}

let buscar = prompt("Ingresa el nombre del planeta que quieres buscar tu viaje")
let buscarPlaneta = arrViajes.filter(Viaje => Viaje.planeta.includes(buscar))

document.write("<h2>Viajes encontrados por nombre de planetas</h2>")

for(let viaje of buscarPlaneta){
    document.write("<ul><li><h3>Nombre del planeta: " + viaje.planeta + "</h3></li>");
    document.write("<li><h3>Duracion del viaje: " + viaje.duracionViaje() + "</h3></li>");
    document.write("<li><h3>Cantidad de tripulantes: " + viaje.tripulantes + "</h3></li>");
    document.write("<li><h3>Coste: " + viaje.presupuestoViaje() + "</h3></li></ul></br>");
}




