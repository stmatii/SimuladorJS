// seleccion de especialidad medica
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});


// Formulario inicio

var inputs = document.getElementsByClassName("formulario__input");
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijar')
        }else {
            this.nextElementSibling.classList.remove('fijar')
        }
    })
}


//Captura de datos para la confirmación

const capturarDatos1 = () => {
  const paciente = document.getElementById("paciente").value;
  const dni = document.getElementById("dni").value;
  document.getElementById("paciente_inner").innerHTML = paciente;
  document.getElementById("dni_inner").innerHTML = dni;

  var usuario1 = new Object()
  usuario1.nombre = paciente;
  usuario1.dni = dni;

  const usuario1Json = JSON.stringify(usuario1)
  localStorage.setItem('paciente', usuario1Json);
  console.log(usuario1Json)
}



function selectHospital() {
    const hospital = document.getElementById("idHospital").value;
    document.getElementById("hospital_inner").innerHTML = hospital ;

    const horario = document.getElementById("idHorario").value;
    document.getElementById("horario_inner").innerHTML = horario;

    var fecha = $('#fecha').val();
    document.getElementById("fecha_inner").innerHTML = fecha;

    var usuario = new Object ();
    usuario.hospital = hospital;
    usuario.fecha = fecha;

    const usuarioJson = JSON.stringify(usuario)
    
    localStorage.setItem('paciten1', usuarioJson);
    console.log(usuarioJson)
  }

// Uso de AJAX y JSON

document.querySelector('#idHospital').addEventListener('click', traerDatos);
  function traerDatos(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'hospitales.json',true);
    xhttp.send();
    
    xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
    let datos = JSON.parse(this.responseText);

    let res = document.querySelector('#idHospital');

  
    for(let item of datos){
      var opt = document.createElement('option');
      opt.innerHTML += `${item.Establecimiento}`
      res.appendChild(opt);
    }
  } }
}

//Animaciones

$(".formulario").fadeIn(1000)

$("#boton").on("click", function(e){
  e.preventDefault()
  $(".formulario").fadeOut(1000);
  $(".formulario2").fadeIn(2000);
})


$("#finalizar").on("click", function(e){
  e.preventDefault()
  $(".formulario2").fadeOut(1000);
  $(".formulario3").fadeIn(2000);
})


$("#terminar").on("click", function(e){
  e.preventDefault()
  $(".formulario3").fadeOut(1000);
  $(".formulario").fadeIn(1000)
})


