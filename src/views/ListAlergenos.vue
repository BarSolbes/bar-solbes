<script>
import { mapState } from 'pinia';
import { useDataStore } from '../stores/data';

export default {
    computed: {
        ...mapState(useDataStore, {
            alergenos: 'alergenos',
        })
    },
    methods: {

    }
};
</script>

<template>
    <div class="container-fluid text-center">
        <h1>Listado de Alérgenos</h1>
        <div class="row">
            <div class="item col-lg-3 col-sm-5 mb-2 mt-2" v-for="elem in alergenos" :key="elem.id" v-bind:elem="elem">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" :src="'/alergenos/' + elem.icono" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text">{{ elem.nombre }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Pacifico|Anton");

h1 {
    font-family: 'pacifico';
    color: #1f79ff;
}
.item {
    text-align: center;
}

img {
    width: 100px;
    margin-top: 5%;
    margin-left: 30%;
}

.row {
    margin-left: 5%;
}

@media (max-width: 1300px) {
    .item {
        margin-left: 5%;
    }
}

@media (max-width: 100px) {
    .item {
        margin-left: 0%;
    }
}
</style>