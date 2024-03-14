document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll('input[type="text"]');
  inputs.forEach((input) => {
    input.addEventListener("keyup", validarNota);
  });
});

function validarNota(event) {
  const nota = parseFloat(event.target.value);
  if (isNaN(nota) || nota < 1 || nota > 10) {
    event.target.style.backgroundColor = "red";
  } else {
    event.target.style.backgroundColor = "green";
  }
}

function calcularPromedio() {
  const matematica = parseFloat(document.getElementById("matematica").value);
  const lengua = parseFloat(document.getElementById("lengua").value);
  const efsi = parseFloat(document.getElementById("efsi").value);

  confirmarDatos(matematica, lengua, efsi)

  const promedio = (matematica + lengua + efsi) / 3;
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `El promedio del alumno es: ${promedio.toFixed(2)}`;
  if (promedio >= 6) {
    resultadoDiv.style.color = "green";
    document.getElementById("imagen").src = "festejo.gif";
  } else {
    resultadoDiv.style.color = "red";
    document.getElementById("imagen").src = "pulgarAbajo.gif";
  }
}

function mostrarMayorNota() {
  const matematica = parseFloat(document.getElementById("matematica").value);
  const lengua = parseFloat(document.getElementById("lengua").value);
  const efsi = parseFloat(document.getElementById("efsi").value);

  confirmarDatos(matematica, lengua, efsi)

  const notas = { Matematica: matematica, Lengua: lengua, EFSI: efsi };
  Object.keys(notas).forEach((key) => {
    document.getElementById(`label${key}`).style.color = "black";
  });
  const maxNota = Math.max(...Object.values(notas));
  const materias = Object.keys(notas).filter(
    (materia) => notas[materia] === maxNota
  );

  const resultadoDiv = document.getElementById("resultado");
  materias.forEach((element) => {
    document.getElementById(`label${element}`).style.color = "blue";
  });
  resultadoDiv.innerHTML = `La materia con la mayor nota es: ${materias.join(", ")}`;
}

function confirmarDatos(dato1, dato2, dato3) {
  if (isNaN(dato1) || isNaN(dato2) || isNaN(dato3)) {
    alert("Ingresa todas las notas");
    return false;
  }
}