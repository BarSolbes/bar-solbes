<template>
    <div class="container mb-5">
        <div class="row text-center">
            <h1>Selecciona el día de la reserva</h1>
            <div class="col-lg-3"></div>
            <div class="col-lg-6 mb-5 mt-3">
                <div class="calendar-container" style="height: 100%; overflow-y: auto;">
                    <FullCalendar :options="calendarOptions" />
                </div>
            </div>
            <div class="col-lg-3"></div>
        </div>
    </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import Swal from 'sweetalert2'

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
                    right: 'dayGridMonth,dayGridWeek,dayGridDay'
                },
                plugins: [dayGridPlugin, interactionPlugin],
                initialView: 'dayGridMonth',
                locale: 'es',
                dateClick: this.mostrarFormulario,
                events: [
                    // Eventos predefinidos para mostrar en el calendario
                    { title: 'Reserva 1', start: '2024-06-10' },
                    { title: 'Reserva 2', start: '2024-06-10' },
                    { title: 'Reserva 2', start: '2024-06-15' },
                    { title: 'Reserva 3', start: '2024-06-20' }
                ],
                firstDay: 1
            },
        }
    },
    methods: {
        async mostrarFormulario(info) {
            const { value: formValues } = await Swal.fire({
                title: 'Reserva',
                html:
                    '<input id="swal-input1" class="swal2-input" placeholder="Nombre">' +
                    '<input id="swal-input2" class="swal2-input" type="number" placeholder="Número de personas">',
                focusConfirm: false,
                preConfirm: () => {
                    return [
                        document.getElementById('swal-input1').value,
                        document.getElementById('swal-input2').value
                    ]
                }
            })

            if (formValues) {
                const [nombre, numPersonas] = formValues
                console.log("Nombre:", nombre);
                console.log("Número de personas:", numPersonas);
                console.log("Fecha seleccionada:", info.dateStr);

                // Agregar el nuevo evento al array de eventos
                this.calendarOptions.events.push({
                    title: `${nombre} - ${numPersonas}`,
                    start: info.dateStr
                });
            }
        }
    },
}
</script>

<style scoped>
h1 {
    font-family: "Times New Roman", Times, serif;
    color: #000000;
}

body {
    margin: 0;
    padding: 0;
    height: 100vh;
}

.calendar-container {
    height: 100%;
}
</style>
