function calculadoraIMC(){
    let peso = parseFloat(document.getElementById('valorPeso').value);
    let altura = parseFloat(document.getElementById('valorAltura').value);
    let imc = peso/(altura*altura);
    parseFloat(imc);
    asignartexto('#respuestaImc', `Su indice de masa corporal es: ${imc.toFixed(3)}`);
    document.querySelector('#valorPeso').value = '';
    document.querySelector('#valorAltura').value = '';
    return imc;
}

function asignartexto(id, texto){
    let elementohtml = document.querySelector(id);
    elementohtml.innerHTML = texto;
    return;
}
function calculaFactorial(){
    let num = parseInt(document.getElementById('numeroF').value);
    let resultadoF = 1;
    if(num === 0){
        asignartexto('#resultadoFactorial', `El factorial es: 1`); 
    } else {
        for(let i=1; i <= num; i++){
        resultadoF *=i;
        asignartexto('#resultadoFactorial', `El factorial es: ${resultadoF}`); 
    }
    }   
    document.querySelector('#numeroF').value = '';
    return resultadoF;
}
function cotizar(){
    let cantDolares = parseFloat(document.getElementById('dolar').value);
    let cotizacion = cantDolares*480;
    asignartexto('#resultadocotizar', `Tiene: R$ ${cotizacion.toFixed(2)} `); 
    document.querySelector('#dolar').value = '';
    return cotizacion;
}
function areaRectangular(){
    let ancho = parseInt(document.getElementById('valorAncho').value);
    let largo = parseInt(document.getElementById('valorLargo').value);
    let perimetroR = parseFloat(2*(ancho+largo));
    let areaR = parseFloat(ancho*largo);
    asignartexto('#rectangulo', `El perímetro es: ${perimetroR.toFixed(2)}.<br> El área es: ${areaR.toFixed(2)}. `); 
    document.querySelector('#valorAncho').value = '';
    document.querySelector('#valorLargo').value = '';
    return;
}
function areaCircular(){
    let radio = parseInt(document.getElementById('valorRadio').value);
    let perimetroC = parseFloat(2*radio*Math.PI);
    let areaC = parseFloat(radio*radio*Math.PI);
    asignartexto('#circulo', `El perímetro es: ${perimetroC.toFixed(3)}.<br> El área es: ${areaC.toFixed(3)}. `); 
    document.querySelector('#valorRadio').value = '';
    return areaC;
}
function calcularTabla(){
    let valornum = parseInt(document.getElementById('valorElegido').value);
    let resultadoFinal = `La tabla está aquí:<br>${valornum} x 0 = 0 <br>`;
    for (i=1; i <= 10; i++){
    var resultadoT = valornum * i;
    resultadoFinal += `${valornum} x ${i} = ${resultadoT}<br>`;
  }
    asignartexto('#tablaMultiplicar', resultadoFinal); 
    document.querySelector('#valorElegido').value = '';
    return;
}
