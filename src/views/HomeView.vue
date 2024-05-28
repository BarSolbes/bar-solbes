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
            <div>
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
    font-family: "Times New Roman", Times, serif;
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