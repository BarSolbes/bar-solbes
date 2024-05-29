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
        <div class="row">
            <div class="col-5"> 
                <img class="card-img event-main-img" src="../../public/img/bar1.jpg" alt="a4" />
    
            </div>
            <div class="col-5">
                <h1 class="display-3">RESERVA YA</h1>
                <a class="btn btn-primary" @click="$router.push('/calendario')">Reservar</a>

            </div>
        </div>
        
    </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Pacifico|Anton");

div img {
    height: 680px;
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

.btn-primary{
    --bs-btn-bg:#93BE0F;
    --bs-btn-border-color:#93BE0F;
    --bs-btn-color: #93BE0F,
}

</style>