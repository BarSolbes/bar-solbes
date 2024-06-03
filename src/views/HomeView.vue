<script></script>
<template>
  <div class="container">
    <section id="header" class="jumbotron text-center">
      <a class="btn btn-primary" @click="$router.push('/calendario')"
        >Reserva Ya!</a
      >
    </section>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Pacifico|Anton");

#header {
  background: url("../../public/img/bar1.jpg") center / cover no-repeat;
  height: 700px; /* Ajusta la altura según la imagen */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Anton";
  color: white;
}

#header h1 {
  margin-bottom: 20px;
}

#header .btn-primary {
  --bs-btn-bg: #93be0f;
  --bs-btn-border-color: #93be0f;
  --bs-btn-color: #fff;
  margin-top: 43%;
}

@media (max-width: 576px) {
    #header .btn-primary {
      margin-top: 102%;
    }
  }
</style>
