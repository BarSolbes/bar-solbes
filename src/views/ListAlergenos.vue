<template>
    <div class="container">
        <h1 class="mb-5">¿Qué aprenden nuestros Alumnos?</h1>
        <div class="card-group vgr-cards mt-3">
            <div class="card align-items-center">
                <div class="card-img-body">
                    <img class="card-img" src="../../public/img/a1.jpg" alt="a1">
                </div>
                <div class="card-body text-center">
                    <h4 class="card-title">Operaciones básicas en bar-cafetería</h4>
                    <p class="card-text">Te prepara para asistir en el servicio y preparar 
                        y presentar bebidas sencillas y comidas rápidas, ejecutando 
                        y aplicando operaciones, técnicas y normas básicas de manipulación, 
                        preparación y conservación de alimentos y bebidas.</p>
                </div>
            </div>
            <div class="card align-items-center">
                <div class="card-img-body">
                    <img class="card-img" src="../../public/img/a2.jpg" alt="a2">
                </div>
                <div class="card-body text-center">
                    <h4 class="card-title">Servicios en restaurante y acontecimientos especiales</h4>
                    <p class="card-text">El servicio es una combinación de comunicación, 
                        atención, respeto y cuidado con y para el cliente para que se 
                        sienta como en casa y asegurarnos de que vuelva a nuestro restaurante y 
                        lo recomiende.</p>
                </div>
            </div>
            <div class="card align-items-center">
                <div class="card-img-body">
                    <img class="card-img" :src="'/img/a3.jpg'" alt="a3">
                </div>
                <div class="card-body text-center">
                    <h4 class="card-title">Técnicas de comunicación en restauración</h4>
                    <p class="card-text">Una comunicación eficaz permite que el objetivo de 
                        los mensajes transmitidos se cumpla satisfactoriamente para obtener 
                        un diálogo exitoso; mientras que una comunicación asertiva implica mantener 
                        un ambiente comprensivo y empático durante la transmisión de estos mensajes gracias 
                        a una correcta inteligencia emocional.</p>
                </div>
            </div>
            <div class="card align-items-center">
                <div class="card-img-body">
                    <img class="card-img" :src="'/img/a4.jpeg'" alt="a4">
                </div>
                <div class="card-body text-center">
                    <h4 class="card-title">Seguridad e higiene en la manipulación de alimentos</h4>
                    <p class="card-text">La seguridad alimentaria se refiere a las condiciones 
                        y prácticas que preservan la calidad de los alimentos. Estas prácticas 
                        previenen la contaminación y las enfermedades de origen alimentario.</p>
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
