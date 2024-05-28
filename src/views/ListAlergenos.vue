<template>
    <div class="container">
      <h1 class="text-center">Evento Principal</h1>
      <!-- Evento principal -->
      <div class="card align-items-center mb-5">
        <div class="card-img-body">
          <img class="card-img event-main-img" src="../../public/img/foto4.png" alt="a4" />
        </div>
        <div class="card-body text-center">
          <p class="card-text">
            Para justificar que se han consumido las tapas, una vez servidas, se
            sellarán por los camareros.
          </p>
        </div>
      </div>
  
      <h1 class="text-center">Otros eventos</h1>
  
      <!-- Grid de otras fotos -->
      <div class="event-grid">
        <div class="event-item">
          <div class="card align-items-center">
            <div class="card-img-body">
              <img class="card-img" src="../../public/img/foto1.png" alt="a1" />
            </div>
          </div>
        </div>
        <div class="event-item">
          <div class="card align-items-center">
            <div class="card-img-body">
              <img class="card-img" src="../../public/img/foto3.png" alt="a2" />
            </div>
          </div>
        </div>
        <div class="event-item">
          <div class="card align-items-center">
            <div class="card-img-body">
              <img class="card-img" src="../../public/img/foto2.png" alt="a3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  body {
    margin-top: 20px;
  }
  
  h1 {
    text-align: center;
    font-family: "Times New Roman", Times, serif;
    color: #000;
    font-size: 3rem; /* Aumenta el tamaño del título */
  }
  
  .card {
    border: none;
  }
  
  .card-title {
    font-size: 2rem; /* Aumenta el tamaño de los títulos de las tarjetas */
    margin-bottom: 20px;
  }
  
  .card-img-body {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  
  .card-img {
    width: 100%;
    height: auto; /* Altura automática para mantener la proporción */
    margin-left: 50%;
    transform: translateX(-50%);
  }
  
  .card.align-items-center {
    margin: 0;
  }
  
  .mb-2 {
    margin-bottom: 5px; /* Reduce aún más el margen inferior entre las fotos */
  }
  
  .event-main-img {
    max-width: 500px; /* Ancho máximo para la imagen del evento principal */
  }
  
  .event-grid .card-img {
    max-width: 400px; /* Ancho máximo para las imágenes de otros eventos */
  }
  
  .event-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px; /* Reduce aún más el espacio entre las fotos */
  }
  
  .event-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0; /* Elimina el margen alrededor de los elementos */
  }
  </style>
  