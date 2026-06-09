// Función obligatoria e iterativa propia para calcular el factorial (!)
function calcularFactorial(num) {
    if (num < 0) return 0;
    let resultado = 1;
    for (let i = 1; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}

// Función que aplica algebraicamente la fórmula de combinaciones estándar
function obtenerCombinaciones(n, r) {
    if (r > n) return 0;
    // C(n,r) = n! / (r! * (n-r)!)
    return calcularFactorial(n) / (calcularFactorial(r) * calcularFactorial(n - r));
}

function calcularSorteo() {
    // Captura estricta desde el DOM
    const n1 = parseInt(document.getElementById('n1').value);
    const r1 = parseInt(document.getElementById('r1').value);
    const n2 = parseInt(document.getElementById('n2').value);
    const r2 = parseInt(document.getElementById('r2').value);

    // Validación estricta para evitar desbordamientos o lógicas incompatibles (r > n)
    if (r1 > n1 || r2 > n2) {
        alert("Error de consistencia matemática: El tamaño de la muestra (r) no puede superar al total de elementos (n).");
        return;
    }

    if (isNaN(n1) || isNaN(r1) || isNaN(n2) || isNaN(r2)) {
        alert("Por favor, asegúrese de ingresar números válidos en todos los campos.");
        return;
    }

    // Ejecución de la ecuación en ambos grupos y cálculo del producto total
    const combinacionesGrupo1 = obtenerCombinaciones(n1, r1);
    const combinacionesGrupo2 = obtenerCombinaciones(n2, r2);
    const totalCombinacionesSorteo = combinacionesGrupo1 * combinacionesGrupo2;

    // Renderizado dinámico y formateado
    document.getElementById('resultadoSorteo').innerHTML = 
        `Combinaciones Totales Posibles: <br><strong style="font-size: 1.8rem; color: #6366f1;">${totalCombinacionesSorteo.toLocaleString('es-BO')}</strong>`;
}