// registrar las ventas de una tienda durante cinco días.

let lunes = 400;
let martes = 300;
let miercoles = 200;
let jueves = 100;
let viernes = 500;

let ventaminima = 0;
let ventamaxima = 0;
let promedio = 0;
let totalventas = 0;
let diasMayores100 = 0;

function promedioventas(Lunes, Martes, Miercoles, Jueves, Viernes) 

{ console.log("Entrando a la funcion");

    // Calcular el total de ventas
    totalventas = Lunes + Martes + Miercoles + Jueves + Viernes;

    // Calcular el promedio
    promedio = totalventas / 5;

    // Identificar venta máxima y mínima
    let ventas = [Lunes, Martes, Miercoles, Jueves, Viernes];

    ventamaxima = Math.max(...ventas);
    ventaminima = Math.min(...ventas);

    // Contar días con ventas iguales o superiores a $100
    for (let i = 0; i < ventas.length; i++) {
        if (ventas[i] >= 100) {
            diasMayores100++;
        }
    }

    // Identificar el día con mayores ventas
    if (Lunes === ventamaxima) 
        {console.log("El día con mayores ventas fue el lunes");
    }
    if (Martes === ventamaxima) 
        {console.log("El día con mayores ventas fue el martes");
    }
    if (Miercoles === ventamaxima) 
        {console.log("El día con mayores ventas fue el miércoles");
    }
    if (Jueves === ventamaxima) 
        {console.log("El día con mayores ventas fue el jueves");
    }
    if (Viernes === ventamaxima) 
        {console.log("El día con mayores ventas fue el viernes");
    }

    // Mostrar resultados
    console.log("Total de ventas: $" + totalventas);
    console.log("Promedio diario: $" + promedio.toFixed(2));
    console.log("Días con ventas de $100 o más: " + diasMayores100);
    console.log("Venta máxima: $" + ventamaxima);
    console.log("Venta mínima: $" + ventaminima);
}

promedioventas(lunes, martes, miercoles, jueves, viernes);
