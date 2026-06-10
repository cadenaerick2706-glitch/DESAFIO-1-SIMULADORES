function calcularCalor() {
    // Captura estricta mediante document.getElementById
    const t0 = parseFloat(document.getElementById('t0').value);
    const ts = parseFloat(document.getElementById('ts').value);
    const k = parseFloat(document.getElementById('k').value);
    const t = parseFloat(document.getElementById('t_time').value);

    // Validación básica de datos
    if (isNaN(t0) || isNaN(ts) || isNaN(k) || isNaN(t)) {
        alert("Por favor, complete todos los campos con valores numéricos válidos.");
        return;
    }

    // Procesamiento con Math.exp() conforme a la Ley de Enfriamiento
    const resultadoExacto = ts + (t0 - ts) * Math.exp(-k * t);
    
    // Redondeo obligatorio al entero más cercano con Math.round()
    const resultadoRedondeado = Math.round(resultadoExacto);

    // Renderizado dinámico del resultado en el DOM
    document.getElementById('resultadoCalor').innerHTML = 
        `Temperatura Final Estimada: <br><strong style="font-size: 1.8rem; color: #f43f5e;">${resultadoRedondeado}°C</strong>`;
}