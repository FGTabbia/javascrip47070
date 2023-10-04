const velocidadNave = 92;

class Viaje {
    constructor(planeta,tipo,descripcion,distancia,tripulantes){
        this.planeta = planeta;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.distancia = parseFloat(distancia);
        this.tripulantes = parseInt(tripulantes);
        let tiempoViaje = this.distancia/velocidadNave;
        this.presupuesto = "El presupuesto es: " + this.distancia * 1500 * this.tripulantes;
        this.duracion = parseInt(tiempoViaje*60) + " MINUTOS------equivalente a: " + parseInt(tiempoViaje) + " HORAS------equivalente a: " + parseInt(tiempoViaje/24) + " DIAS";
    };
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
            alert("Invalid");
            continue;
        };
        let cantidadTripulantes = parseInt(prompt("Cantidad de tripulantes (Minimo 1)", "1"));
        console.log(cantidadTripulantes);
        if (cantidadTripulantes <= 0 || isNaN(cantidadTripulantes)){
            alert("invalid");
            continue;
        }
        arrViajes.push(new Viaje(planetaNombre,planetaTipo,planetaDescripcion,checkDistancia,cantidadTripulantes));         
    }   
}
console.log(arrViajes);
alert("Ver mas informacion en la consola");

for (let viaje of arrViajes){
    console.log(viaje);
}

let viajesCortos = arrViajes.filter(Viaje => Viaje.distancia<= 15456);
alert("viaje de corta duracion");

for (let viaje of viajesCortos){
    alert(viaje.planeta);
    console.log("Viajes de corta duracion");
    console.log(viaje);
}

let viajesMedios = arrViajes.filter(Viaje => Viaje.distancia > 15456 && Viaje.distancia <= 92736);
alert("viajes de media duracion");

for (let viaje of viajesMedios){
    alert(viaje.planeta);
    console.log("Viajes de media duracion");
    console.log(viaje);
}

let viajesLargos = arrViajes.filter(Viaje => Viaje.distancia > 92736);
alert("viajes de larga duracion");

for (let viaje of viajesLargos){
    alert(viaje.planeta);
    console.log("Viajes de larga duracion");
    console.log(viaje);
}

let buscar = prompt("Ingresa el nombre del planeta que quieres buscar tu viaje");
let buscarPlaneta = arrViajes.filter(Viaje => Viaje.planeta.includes(buscar));

alert("Viajes encontrados con ese nombre");

for(let viaje of buscarPlaneta){
alert(viaje.planeta);
console.log("Viajes encontrados con ese nombre");
console.log(viaje);
}




