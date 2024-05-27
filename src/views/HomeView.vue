<script>

export default {
    data() {
    },
    computed: {
    },
    methods: {
    },
};
</script>
<template>
    <div class="container">
        <div id="carouselExampleCaptions" class="carousel slide mb-5" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img v-bind:src="'/img/c1.jpg'" class="d-block w-100" alt="Image1">
                    <div class="carousel-caption d-none d-md-block" id="t1">
                        <h5>BIENVENIDO</h5>
                        <p>Al restaurante L'assaig de Batoi</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img v-bind:src="'/img/c2.jpg'" class="d-block w-100" alt="Image2">
                    <div class="carousel-caption d-none d-md-block" id="t1">
                        <h5>Platos innovadores</h5>
                        <p>Prueba nuestras delicionas y elaboradas recetas.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img v-bind:src="'/img/c4.jpg'" class="d-block w-100" alt="Image4">
                    <div class="carousel-caption d-none d-md-block" id="t1">
                        <h5>Prueba nuestra reposteria</h5>
                        <p>Tenemos los mejores postres de Alcoy</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    <section id="header" class="jumbotron text-center mb-5">
        <h1 class="display-3">RESERVA YA</h1>
        <p class="lead">Prueba nuestros inovadores menus</p>
        <a class="btn btn-primary" @click="$router.push('/calendario')">Reservar</a>
    </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Pacifico|Anton");

div img {
    height: 600px;
}

div h5 {
    font-family: 'pacifico';
    font-size: 50px;
}

#t1 h5{
    color: black;
}

#t1 p{
    color: black;
}

#header {
    background: url(https://portal.edu.gva.es/cipfpbatoi/wp-content/uploads/sites/916/2021/03/slide2.jpg) center center / cover no-repeat;
    height: 300px;
    font-family: 'Anton';
    color: white;
}

#header h1 {
    padding-top: 60px;
}

</style>