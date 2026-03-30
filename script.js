window.addEventListener("load", function () {
  var nombre = "Gustavo Rojas";
  var hora = new Date().getHours();
  var saludo;

  if (hora >= 6 && hora < 12) 
    {
    saludo = "Buenos días";
  } 
  else if (hora >= 12 && hora < 19) 
    {
    saludo = "Buenas tardes";
  } 
  else 
    {
    saludo = "Buenas noches";
  }

  alert(saludo + ", bienvenido al portafolio de " + nombre + " 🌐");
});