<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

import { mapActions } from 'pinia';
import { useDataStore } from '../stores/data.js'
export default {
    components: {
        FullCalendar
    },
    data() {
        return {
            fechasRender: [],
            calendarOptions: {
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                plugins: [dayGridPlugin, interactionPlugin],
                initialView: 'dayGridMonth',
                locale: 'es',
                dateClick: this.reservar,
                events: [],
            },
        }
    },
    methods: {
        ...mapActions(useDataStore, ['getAllFechas', 'addMessege', 'getServeiByFecha']),
        reservar: async function (arg) {
            const sePuedeReservar = this.comprobarFecha(arg.dateStr)
            if (sePuedeReservar) {
                const servei = await this.getServeiByFecha(arg.dateStr)
                if(!this.hayPlazas(servei)) {
                    this.addMessege('danger', 'No quedan plazas disponibles para ese día')
                } else {
                    this.$router.push('/addReserva/' + servei.id)
                }
            } else {
                this.addMessege('danger', 'No se puede reservar ese día (seleccione los días que estén en verde)')
            }
        },

        hayPlazas(servicio) {
            let plazasDisponibles = servicio.placesDisponibles - servicio.placesReservades;
            if(plazasDisponibles <= 0) {
                return false
            }
            return true
        },

        comprobarFecha(date) {
            let diaActual = new Date();
            let dateService = new Date(date)
            if (diaActual > dateService) {
                return false
            } else {
                return this.fechasRender.find((item) => item.fecha == date)
            }
            
        },

        async getFechasInBD() {
            this.fechasRender = await this.getAllFechas()
            let diaActual = new Date();
            this.fechasRender.forEach((fecha) => {
                let dateService = new Date(fecha.fecha)
                if (diaActual < dateService) {
                    let plazasDisponibles = fecha.placesDisponibles - fecha.placesReservades;
                    let colorEvent = ''
                    if(plazasDisponibles <= fecha.overbooking) {
                        colorEvent = 'yellow'
                    }
                    this.calendarOptions.events.push({
                        title: 'Plazas Disponibles: ' + plazasDisponibles,
                        start: fecha.fecha,
                        display: 'background',
                        color: colorEvent,
                    })
                }
            })
        },
    },
    
    mounted() {
        this.getFechasInBD()
    }
}
</script>
<template>
    <div class="container">
        <div class="row text-center">
            <h1>Selecciona el dia de la reserva</h1>
            <div class="col-lg-3"></div>
            <FullCalendar :options="calendarOptions" class="col-lg-6 mb-3 mt-3" />
            <div class="col-lg-3"></div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-family: 'pacifico';
    color: #1f79ff;;
}
</style>
