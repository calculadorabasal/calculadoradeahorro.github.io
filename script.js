const ERROR = document.getElementById("error");
const INPUT = document.getElementById("ingresos");
const BOTON = document.getElementById("calcular");
const GASTOS = document.getElementById("50");
const PERSONALES = document.getElementById("30");
const AHORRO = document.getElementById("20");

BOTON.addEventListener("click", () => {
    let ingresos = INPUT.valueAsNumber
    console.log("El ingreso mensual es de " + ingresos)
    GASTOS.style.display = "block";
    PERSONALES.style.display = "block"
    AHORRO.style.display = "block"
    
    if (ingresos > 0) {
        ERROR.style.display = "none";
        console.log(ingresos)
 
        let fijos = (ingresos * 50)/100
         console.log("los gastos fijos son " + fijos)
        GASTOS.innerHTML = "Los gastos en necesidades primarias deben se de " + fijos + " u.m"
        GASTOS.innerHTML.display = "block"

        let prescindibles = (ingresos * 30)/100
        console.log("Los gastos personales son de " + prescindibles + " u.m")
        PERSONALES.innerHTML = "Los gastos en deseos personales deben se de " + prescindibles + " u.m"
        PERSONALES.innerHTML.display = "block"

        let ahorros = (ingresos * 20)/100
        console.log("Los gastos personales son de " + ahorros + " u.m")
        AHORRO.innerHTML = "La cantidad de dinero que se debe destinar a los ahorros es de " + ahorros + " u.m"
        AHORRO.innerHTML.display = "block"
    } else {
        alert("El ingreso debe ser mayor a cero")
        console.log("Hay un error");
        ERROR.style.display = "block";
        GASTOS.style.display = "none";
        PERSONALES.style.display = "none"
        AHORRO.style.display = "none"
    }
})