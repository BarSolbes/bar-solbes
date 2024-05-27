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
        <h1 class="mb-3">Menús de nuestro Restaurante</h1>
        <div class="card-group vgr-cards">
            <div class="card align-items-center">
                <div class="card-img-body">
                    <img class="card-img" :src="'/img/menu1.png'" alt="Card image cap">
                </div>
                <div class="card-body text-center">
                    <h4 class="card-title">Menú Koerà - Japonés</h4>
                    <p class="card-text">Se puede decir que la cocina coreana es una cocina de tipo rural, 
                        basada en alimentos sencillos, en su mayoría procedentes del huerto familiar, 
                        a los que se da un tratamiento especial, con las salsas y fermentados, obteniendo 
                        unos platos llenos de sabor, muy ricos en umami.</p>
                    <a @click="$router.push('/calendario')" class="btn btn-outline-primary">Reserva Ya</a>
                </div>
            </div>
            <div class="card align-items-center">
                <div class="card-img-body">
                    <img class="card-img" :src="'/img/menu2.png'" alt="Card image cap">
                </div>
                <div class="card-body text-center">
                    <h4 class="card-title">Menú Aleman</h4>
                    <p class="card-text">Entre las más populares podrás hallar la variedad 
                        Bratwurst (salchichas para asar), Bierwurst (salchicha ahumada), 
                        Bockwurst (en base a tripa de cerdo o res) y Currywurst que se acompaña 
                        con una deliciosa salsa de curry.</p>
                    <a @click="$router.push('/calendario')" class="btn btn-outline-primary">Reserva Ya</a>
                </div>
            </div>
            <div class="card align-items-center">
                <div class="card-img-body">
                    <img class="card-img" :src="'/img/menu3.png'" alt="Card image cap">
                </div>
                <div class="card-body text-center">
                    <h4 class="card-title">Menu venezolano</h4>
                    <p class="card-text">Las comidas más conocidas de la gastronomía venezolana son 
                        las asociadas con el maíz, más que nada con las harinas de maíz, por las famosas arepas; 
                        también el pabellón criollo, con su arroz blanco, los frijoles negros, la carne mechada y 
                        el plátano.</p>
                    <a @click="$router.push('/calendario')" class="btn btn-outline-primary">Reserva Ya</a>
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
    font-family: 'pacifico';
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
