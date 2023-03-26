
document.getElementById('aceptar').addEventListener("click", function(e) {
  e.preventDefault();
  let numero = parseInt(document.getElementById('entrada').value);
  let farenheit=0;
  let kelvin=0;

  if (numero !== ''){
  if (!isNaN(numero)){
      farenheit = (1.8*numero)+32;
      kelvin = numero +  273.15;
      alert(`Tus grados Celsius son ${numero}, la conversion a grados Kelvin es: ${kelvin} y la conversion a grados Farenheit es: ${farenheit}`);
      
  }else{
    alert('Error el dato no es numero, por favor intentalo nuevamente');
  }
}else{
  alert('ingresa datos');
}
});