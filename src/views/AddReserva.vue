<script>
import { mapActions, mapState } from 'pinia';
import { useDataStore } from '../stores/data';
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from 'yup';

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    props: {
        serveiId: String,
    },
    data() {
        const mySchema = yup.object({
            nom: yup.string().required("El nombre es obligatorio").min(3, "El campo nombre debe tener más de 3 caracteres").max(25, "El campo nombre como máximo debe tener 25 caracteres"),
            tel: yup.string().required("El teléfono es obligatorio").matches(/^\d{9}$/, 'El numero debe de tener 9 dígitos'),
            email: yup.string().required("El email es obligatorio").email("El email no es válido"),
            comensals: yup.number().required("El numero de comensales es obligatorio").min(1, 'No puedes reservar menos de 1 plaza').test('maxPlazas', 'No puedes reservar tantas plazas',(value) => { 
                if(value > this.getPlazasDisponibles()) {
                    return false
                }
                return true
            }),
            suscripcion: yup.string().required("Selecciona una de las dos opciones"),
        })
        return {
            currentTab: 0,
            newReserva: {},
            servicio: {},
            alergenosInForm: [],
            mySchema
        }
    },
    computed: {
        ...mapState(useDataStore, {
            alergenos: 'alergenos',
            getAlergenoById: 'getAlergenoById',
        }),
    },
    methods: {
        ...mapActions(useDataStore, ['addReserva', 'addMessege', 'getServeiById']),
        async onSubmit(values) {
            await this.addReserva(values, this.alergenosInForm, this.serveiId)
            this.$router.push('/',scrollTo(0,0))
            this.newReserva = ""
        },

        async getServeiInBd() {
            this.servicio = await this.getServeiById(this.serveiId)
        },

        getPlazasDisponibles() {
            return this.servicio.placesDisponibles - this.servicio.placesReservades
        },

        showTab(n) {
            var x = document.getElementsByClassName("tab");
            x[n].style.display = "block";
            if (n == 0) {
                document.getElementById("prevBtn").style.display = "none";
            } else {
                document.getElementById("prevBtn").style.display = "inline";
            }
            if (n == (x.length - 1)) {
                document.getElementById("nextBtn").innerHTML = '<i class="bi bi-arrow-right-circle"></i>';
            } else {
                document.getElementById("nextBtn").innerHTML = '<i class="bi bi-arrow-right-circle"></i>';
            }
            this.fixStepIndicator(n)
        },

        nextPrev(n) {
            var x = document.getElementsByClassName("tab");
            x[this.currentTab].style.display = "none";
            this.currentTab = this.currentTab + n;
            if (this.currentTab >= x.length) {
                document.getElementById("nextBtn").style.display = "none";
                document.getElementById("all-steps").style.display = "none";
                document.getElementById("register").style.display = "none";
                document.getElementById("text-message").style.display = "block";

            }
            if (this.currentTab >= x.length - 1) {
                document.getElementById("nextBtn").style.display = "none";
            } else {
                document.getElementById("nextBtn").style.display = "inline";
            }

            this.showTab(this.currentTab);
        },
        fixStepIndicator(n) {
            var i, x = document.getElementsByClassName("step");
            for (i = 0; i < x.length; i++) {
                x[i].className = x[i].className.replace(" active", "");
            }
            x[n].className += " active";
        }
    },
    mounted() {
        this.showTab(this.currentTab);
        this.currentTab = 0;
        this.getServeiInBd();
    }
};
</script>

<template>
    <div class="container mt-5">
        <div class="row d-flex justify-content-center align-items-center">
            <div class="col-md-8">
                <Form @submit="onSubmit" :validation-schema="mySchema" :initial-values="newReserva" id="regForm">
                    <h1 id="register">Reservar:</h1>
                    <div class="all-steps" id="all-steps">
                        <span class="step"><i class="bi bi-person-fill"></i></span>
                        <span class="step"><i class="bi bi-telephone-fill"></i></span>
                        <span class="step"><i class="bi bi-envelope-fill"></i></span>
                        <span class="step"><i class="bi bi-people-fill"></i></span>
                        <span class="step"><i class="bi bi-exclamation-triangle-fill"></i></span>
                        <span class="step"><i class="bi bi-pencil-fill"></i></span>
                    </div>
                    <div class="tab">
                        <h6>Nom:</h6>
                        <p>
                            <Field type="text" class="form-control" placeholder="Nom" name="nom"></Field>
                            <ErrorMessage name="nom" />
                        </p>
                    </div>
                    <div class="tab">
                        <h6>Telèfon:</h6>
                        <p>
                            <Field type="text" placeholder="Telèfon" name="tel">
                            </Field>
                            <ErrorMessage name="tel" />
                        </p>
                    </div>
                    <div class="tab">
                        <h6>E-mail:</h6>
                        <p>
                            <Field type="text" placeholder="email" name="email"></Field>
                            <ErrorMessage name="email" />
                        </p>
                    </div>
                    <div class="tab">
                        <h6>Núm. de Comensals:</h6>
                        <p>
                            <Field type="number" placeholder="Nombre de persones" name="comensals"></Field>
                            <ErrorMessage name="comensals" />
                        </p>
                    </div>
                    <div class="tab">
                        <h6>Al·lergògens:</h6>
                        <div class="container">
                            <div class="row">
                                <div v-for="alergeno in alergenos" :key="alergeno.id" :value="alergeno.id"
                                    class="form-check mx-2 my-2 form-switch text-center col-5 alergenos">
                                    <input class="form-check-input" style="width: 100%;" type="checkbox" role="switch"
                                        :id="'alergeno' + alergeno.id" :value="alergeno.id" v-model="alergenosInForm">
                                    <label class="form-check-label" :for="'alergeno' + alergeno.id">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-lg-6 col-md-12 col-sm-12">{{ alergeno.nombre }}</div>
                                                <div class="col-lg-6 col-md-12 col-sm-12">
                                                    <img :src="'/alergenos/' + alergeno.icono"
                                                        :alt="alergeno.nombre" class="imgAlerg">
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab">
                        <h6>Observaciones:</h6>
                        <p>
                            <Field type="text" placeholder="Observaciones" name="observacions"></Field>
                            <ErrorMessage name="observacions" />
                        </p>
                    </div>

                    <div class="tab text-center" id="text-message">
                        <h3>Resumen de su reserva:</h3>
                        <ul>
                            <li>
                                <h6>Nom:</h6>
                                <Field type="text" name="nom"></Field>
                                <ErrorMessage name="nom" />
                            </li>
                            <li>

                                <h6>Telefono:</h6>
                                <Field type="text" name="tel"></Field>
                                <ErrorMessage name="tel" />
                            </li>
                            <li>
                                <h6>E-mail:</h6>
                                <Field type="text" name="email"></Field>
                                <ErrorMessage name="email" />
                            </li>
                            <li>
                                <h6>Comensals:</h6>
                                <Field type="number" name="comensals"></Field>
                                <ErrorMessage name="comensals" />
                            </li>
                            <li>
                                <h6>Alergias:</h6><br><br>
                                <div class="container">
                                    <div class="row">
                                        <div v-for="alergeno in alergenosInForm" class="card col-lg-3">
                                            <div>
                                                <img :src="'/alergenos/' + this.getAlergenoById(alergeno).icono"
                                                    class="imgRes">
                                                <h5 class="card-title">{{ this.getAlergenoById(alergeno).nombre }}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <h6>Observaciones:</h6>
                                <Field type="text" name="observacions"></Field>
                                <ErrorMessage name="observacions" />
                            </li>
                            <li>
                                <div class="form-group">
                                    <h6>Subscripción:</h6>
                                    <Field as="select" class="form-select" name="suscripcion" required>
                                        <option value="" disabled>--- Selecciona una opción ---</option>
                                        <option value="true">Sí, deseo recibir correos con información</option>
                                        <option value="false">No, gracias</option>
                                    </Field>
                                    <ErrorMessage name="suscripcion" />
                                </div>
                            </li>
                        </ul>
                        <button type="submit" class="btn btn-default btn-dark">Guardar</button>
                    </div>
                    <div style="overflow:auto;" id="nextprevious">
                        <div style="float:right;">
                            <button type="button" id="prevBtn" @click="nextPrev(-1)"><i
                                    class="bi bi-arrow-left-circle"></i></button>
                            <button type="button" id="nextBtn" @click="nextPrev(1)" :validation-schema="mySchema"><i
                                    class="bi bi-arrow-right-circle"></i></button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
</div>
</template>

<style scoped>
/*** css formulario ***/

#regForm {
    background-color: #ffffff;
    margin: 0px auto;
    font-family: Raleway;
    padding: 40px;
    border-radius: 10px
}

#register {

    color: #1f79ff;
    font-family: 'pacifico';
}

h1 {
    text-align: center
}

input[type=text],
input[type=number] {
    padding: 10px;
    width: 100%;
    font-size: 17px;
    font-family: Raleway;
    border: 1px solid #aaaaaa;
    border-radius: 10px;
    -webkit-appearance: none;
}

.tab input:focus {

    border: 1px solid #1f79ff !important;
    outline: none;
}

input.invalid {

    border: 1px solid #e03a0666;
}

.tab {
    display: none
}

button {
    background-color: #1f79ff;
    color: #ffffff;
    border: none;
    border-radius: 50%;
    padding: 10px 20px;
    font-size: 17px;
    font-family: Raleway;
    cursor: pointer
}

button:hover {
    opacity: 0.8
}

button:focus {
    outline: none !important;
}

#prevBtn {
    background-color: #bbbbbb
}


.all-steps {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
    width: 100%;
    display: inline-flex;
    justify-content: center;
}

.step {
    height: 40px;
    width: 40px;
    margin: 0 2px;
    background-color: #bbbbbb;
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: #1f79ff;
    opacity: 0.5;
}

.step.active {
    opacity: 1
}


.step.finish {
    color: #fff;
    background: #1f79ff;
    opacity: 1;

}

.all-steps {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px
}

.thanks-message {
    display: none
}

h6 {
    font-family: 'pacifico';
}

h3 {
    font-family: 'pacifico';
    color: #1f79ff;
}

ul {
    list-style: none;
}

li h6 {
    margin-top: 10px;
    font-family: 'pacifico';
    float: left;
}

.imgRes {
    width: 40px;
    height: 40px;
    margin-right: auto;
    margin-top: auto;
}

/*** css formulario de input checkbox ***/

.alergenos label {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #d8d7d7;
    border-radius: 10px;
}

.alergenos input[type="checkbox"]:checked+label {
    background-color: #93BE0F;
}

.imgAlerg {
    width: 35px;
    height: 35px;
}

.alergenos input[type=checkbox] {
    position: absolute;
    left: -1000em;
}

form div span {
    color: red;
}

@media (max-width: 992px) {
    .alergenos label {
        height: 100px;
    }
}
</style>