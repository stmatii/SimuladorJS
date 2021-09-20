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
}

function selectHospital() {
    const hospital = document.getElementById("idHospital").value;
    document.getElementById("hospital_inner").innerHTML = hospital ;

    const horario = document.getElementById("idHorario").value;
    document.getElementById("horario_inner").innerHTML = horario;
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



