function calculoCamaras(){
    const dias = parseFloat(document.getElementById('dias').value);
    const camaras = parseFloat(document.getElementById('camaras').value);
    const analitic = parseFloat(document.getElementById('analitica').value);
    const fulltime = 1.50
    const costoGrabacion = 0.5
    const costoAnalitica = 1.50
    // Verificar que los valores sean números y mayores que cero
    if (isNaN(dias) || isNaN(camaras) || dias <= 0 || camaras <= 0) {
        alert('Por favor, ingrese valores válidos y mayores que cero.');
        return;
    } else if(!validarEntero(dias) || !validarEntero(camaras)) {
        alert('Por favor, ingrese solo números enteros.');
        return;
    }
    
    let valor = 0;

    if(isNaN(analitic)){
        valor = (costoGrabacion*dias*camaras)+(fulltime*camaras)
        console.log(`Fulltime x camaras = ${fulltime*camaras}
Grabacion x dias x camaras = ${costoGrabacion*dias*camaras} 
            `)
    } else {
        valor = (costoGrabacion*dias*camaras)+(fulltime*camaras)+(analitic*costoAnalitica)
        console.log(`Fulltime x camaras = ${fulltime*camaras}
Grabacion x dias x camaras = ${costoGrabacion*dias*camaras} 
Analitica x camaras = ${analitic*costoAnalitica}
            `)

    }

    let total = valor + 27.50
    
     // Mostrar el resultado
    const resultado = `
        <p class="text-xl text-slate-400 font-bold">
            Zoecam <span>(Extra)</span>:<br/> 
            <span class="font-bold text-xl text-slate-600">$ ${valor.toFixed(2)}</span>
        </p>
        <p class="text-2xl text-slate-400 font-bold">
            Internet+Zoecam:<br/> 
            <span class="font-bold text-3xl text-slate-600">$ ${total.toFixed(2)}</span>
        </p>
    `;
    document.getElementById('resultado').innerHTML = resultado;
}

function validarEntero(valor) {
    // Expresión regular para validar números enteros
    const regex = /^-?\d+$/;
    return regex.test(valor);
}

document.getElementById('analiticaCheckbox').addEventListener('change', function() {
    const analiticaInput = document.getElementById('analitica');
    const analiticaLabel = document.getElementById('analiticaLabel');

    if (this.checked) {
        analiticaInput.hidden = false;
        analiticaLabel.hidden = false;
        analiticaInput.value = NaN;
    } else {
        analiticaInput.hidden = true;
        analiticaLabel.hidden = true;
        analiticaInput.value = NaN;
    }
});