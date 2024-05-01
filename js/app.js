document.addEventListener('DOMContentLoaded', function () {
  var imagen = document.querySelector('#profile-picture img');

  function mostrarMensaje() {
    alert('Hola! 👋, este es un mensaje secreto');
  }

  imagen.addEventListener('dblclick', mostrarMensaje);
});
