<script>
</script>
<template>
    <div class="container">
        <section id="header" class="jumbotron text-center mb-5">
            <h1 class="display-3">RESERVA YA</h1>
            <a class="btn btn-primary" @click="$router.push('/calendario')">Reservar</a>
        </section>
    </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Pacifico|Anton");

#header {
    background: url('../../public/img/bar1.jpg') center / cover no-repeat;
    height: 700px; /* Ajusta la altura según la imagen */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Anton';
    color: white;
}

#header h1 {
    margin-bottom: 20px;
}

#header .btn-primary {
    --bs-btn-bg: #93BE0F;
    --bs-btn-border-color: #93BE0F;
    --bs-btn-color: #fff;
}
</style>
