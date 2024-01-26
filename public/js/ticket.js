async function get(){
  try {
      const response = await fetch('https://192.168.203.1:4000/sede')
      const {sedeJSON, servicioJSON, areaJSON} = await response.json();

      sedeJSON.forEach(sedeJSON => {
        mostrar(sedeJSON,'sede')
      });

      areaJSON.forEach(areaJSON => {
        mostrar(areaJSON,'area')
      });

      servicioJSON.forEach(sedeJSON => {
        mostrar(sedeJSON,'servicio')
      });


  } catch (error) {
      console.log(error);
  }  
}

function mostrar(objeto, select){
  const eSelect = document.getElementById(select);
  const option = document.createElement('option');
  option.setAttribute('value',objeto.id)
  option.innerText = objeto.nombre;

  eSelect.appendChild(option);
}

async function post(json) {
  const response = await fetch('https://192.168.203.1:4000/sede', {
    method: 'POST',
    body: json,  // No necesitas usar JSON.stringify aquí
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then(response => console.log(response)); // Agrega esta línea para parsear la respuesta JSON
    // Imprime la respuesta en la consola
}


get();

document.querySelector('form').addEventListener('submit', e => {
  const data = Object.fromEntries(new FormData(e.target));
  data.SEDE = parseInt(data.SEDE);
  data.SERVICIO = parseInt(data.SERVICIO);
  data.AREA = parseInt(data.AREA);
  const Data = JSON.stringify(data);
  post(Data);
  
});



