<template>
  <div class="container">
    <h1 class="mb-3">Nuestra Carta</h1>
    <div class="card-group vgr-cards">
      <div class="card align-items-center">
        <div class="card-img-body d-flex">
          <img class="card-img" :src="'/img/menu1.png'" alt="Card image cap" />
          <img class="card-img" :src="'/img/menu2.png'" alt="Card image cap" />
        </div>
        <div class="card-body">
          <p class="card-text">
            En el Bar Solbes, nos esforzamos por ofrecer una variedad de
            opciones que se adapten a las necesidades y preferencias de todos
            nuestros clientes. Precios de las Tapas Los precios indicados en
            nuestra carta están basados en las tapas para dos personas. Sin
            embargo, entendemos que cada grupo tiene necesidades diferentes, por
            lo que también ofrecemos tapas en porciones para una persona y para
            tres o más personas. El precio de las tapas variará en función del
            tamaño de la porción que elijas.
          </p>
          <ul>
            <li>
              Tapas para 1 persona: Ideal para quienes desean disfrutar de una
              tapa individualmente o como aperitivo.
            </li>
            <li>Tapas para 2 personas: Perfectas para compartir en pareja.</li>
            <li>
              Tapas para 3 o más personas: Pensadas para grupos más grandes,
              estas porciones son más generosas y permiten una experiencia
              compartida más completa.
            </li>
            <li>
              Platos Combinados Nuestros platos combinados están diseñados para
              ofrecer una comida completa y equilibrada. Todos los platos
              combinados vienen acompañados de patatas y una ración de verduras
              frescas.
            </li>
          </ul>
          <p>
            Estamos aquí para hacer tu experiencia en el Bar Solbes lo más
            agradable posible, así que si tienes alguna duda o necesitas más
            información sobre nuestros precios y opciones de la carta, no dudes
            en consultarnos. ¡Esperamos que disfrutes de tu visita!
          </p>
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
  color: #1f79ff;
}

.card {
  border: none;
}

.card-img {
  border-radius: 0;
}

.vgr-cards .card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}

.card-img-body {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
}

.card-img {
  width: 48%;
}

@media (max-width: 576px) {
  .card-img-body {
    flex-direction: column;
    align-items: center;
  }

  .card-img {
    width: 100%;
    margin-bottom: 10px;
  }
}

.vgr-cards .card-body {
  flex: 2;
  padding: 0 0 0 1.25rem;
}

@media (max-width: 576px) {
  .vgr-cards .card-body {
    padding: 0;
  }
}
</style>
