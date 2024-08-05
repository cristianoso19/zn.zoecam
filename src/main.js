function calculoCamaras(){
    const dias = parseFloat(document.getElementById('dias').value);
    const camaras = parseFloat(document.getElementById('camaras').value);
    const fulltime = 1.50
    const costoGrabacion = 0.5
    // Verificar que los valores sean números y mayores que cero
    if (isNaN(dias) || isNaN(camaras) || dias <= 0 || camaras <= 0) {
        alert('Por favor, ingrese valores válidos y mayores que cero.');
        return;
    } else if(!validarEntero(dias) || !validarEntero(camaras)) {
        alert('Por favor, ingrese solo números enteros.');
        return;
    }

    let valor = (costoGrabacion*dias*camaras)+fulltime
    let total = valor + 27.50
    
     // Mostrar el resultado
    const resultado = `
        <p class="text-xl text-slate-400 font-bold">Extra:<br/> <span class="font-bold text-xl text-slate-600">$ ${valor.toFixed(2)}</span></p>
        <p class="text-2xl text-slate-400 font-bold">Total del Plan:<br/> <span class="font-bold text-3xl text-slate-600">$ ${total.toFixed(2)}</span></p>
    `;
    document.getElementById('resultado').innerHTML = resultado;
}

function validarEntero(valor) {
    // Expresión regular para validar números enteros
    const regex = /^-?\d+$/;
    return regex.test(valor);
}