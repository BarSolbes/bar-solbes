<template>
  <div class="container">
    <h1 class="mb-5">¡Bienvenidos al Bar Solbes!</h1>
    <div class="card-body text-center">
      Ubicado en el encantador pueblo de Bocairent, el Bar Solbes es un rincón
      acogedor donde tradición y buen gusto se encuentran. Desde nuestra
      apertura, nos hemos comprometido a ofrecer a nuestros clientes una
      experiencia culinaria única, combinando la auténtica cocina casera con un
      ambiente familiar y agradable.
    </div>
    <div class="card-group vgr-cards mt-3">
      <div class="card align-items-center">
        <div class="card-img-body">
          <img class="card-img" src="../../public/img/a3.jpg" alt="a1" />
        </div>
        <div class="card-body text-center">
          <h4 class="card-title">Nuestra Historia</h4>
          <p class="card-text">
            El Bar Solbes es más que un simple bar; es un lugar con historia y
            alma. Fundado por la familia Solbes, hemos mantenido la esencia de
            nuestras raíces a lo largo de los años, pasando de generación en
            generación las recetas que han deleitado a nuestros clientes desde
            el primer día. Cada plato que servimos está elaborado con el mismo
            cariño y dedicación que nuestras abuelas ponían en la cocina.
          </p>
        </div>
      </div>
      <div class="card align-items-center">
        <div class="card-img-body">
          <img class="card-img" src="../../public/img/a1.jpg" alt="a2" />
        </div>
        <div class="card-body text-center">
          <h4 class="card-title">Nuestra Filosofía</h4>
          <p class="card-text">
            Creemos en la importancia de la calidad y la autenticidad. Por ello,
            utilizamos ingredientes frescos y de primera calidad, muchos de
            ellos provenientes de productores locales. Esto no
          </p>
        </div>
      </div>
    </div>
    <!-- Imágenes agregadas -->
    <div class="row text-center align-items-center">
      <div class="col-6">
        <img class="img-fluid" src="../../public/img/imagen1.jpg" alt="Imagen 1" />
      </div>
      <div class="col-6">
        <img class="img-fluid" src="../../public/img/imagen2.jpg" alt="Imagen 2" />
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
}

.card {
  border: none;
}

.card-img {
  border-radius: 0;
}

.vgr-cards .card {
  display: flex;
  flex-flow: wrap;
  flex: 100%;
  margin-bottom: 40px;
}

.vgr-cards .card:nth-child(even) .card-img-body {
  order: 2;
}

.vgr-cards .card:nth-child(even) .card-body {
  padding-left: 0;
  padding-right: 1.25rem;
}

@media (max-width: 576px) {
  .vgr-cards .card {
    display: block;
  }
}

.vgr-cards .card-img-body {
  flex: 1;
  overflow: hidden;
  position: relative;
}

@media (max-width: 576px) {
  .vgr-cards .card-img-body {
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
  }
}

@media (min-width: 576px) {
  .vgr-cards .card-img-body {
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
  }
}

.vgr-cards .card-img {
  width: 100%;
  margin-left: 50%;
  transform: translateX(-50%);
}

@media (max-width: 1140px) {
  .vgr-cards .card-img {
    margin: 0;
    transform: none;
    width: 100%;
    height: 100%;
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
