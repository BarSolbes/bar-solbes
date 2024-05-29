<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

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
                dateClick: '',
                events: [],
            },
        }
    },
    methods: {
    },
}
</script>
<template>
    <div class="container mb-5">
        <div class="row text-center">
            <h1>Selecciona el dia de la reserva</h1>
            <div class="col-lg-3"></div>
            <FullCalendar :options="calendarOptions" class="col-lg-6 mb-5 mt-3" />
            <div class="col-lg-3"></div>
        </div>
    </div>
</template>
  
<style scoped>
h1 {
    font-family: "Times New Roman", Times, serif;
    color: #000000;;
}
body{
    margin: 0;
    padding: 0;
    height: 100vh;
  }
  
</style>
  