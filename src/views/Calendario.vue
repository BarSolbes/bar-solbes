<template>
  <div class="container mb-5">
    <div class="row text-center">
      <h1>Selecciona el día de la reserva</h1>
      <div class="col-lg-3"></div>
      <div class="col-lg-6 mb-5 mt-3">
        <div
          class="calendar-container text-center"
          style="height: 100%; overflow-y: auto"
        >
          <FullCalendar ref="fullCalendar" :options="calendarOptions" />
        </div>
      </div>
      <div class="col-lg-3"></div>
    </div>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Swal from "sweetalert2";

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      fechasRender: [],
      calendarOptions: {
        header: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        },
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        locale: "es",
        dateClick: this.mostrarFormulario,
        eventClick: this.mostrarEvento,
        events: [
          {
            id: 1,
            title: "Iker - 3p",
            start: "2024-06-08",
            descripcion: "Nombre: Iker, Personas: 3, Hora: 09:00",
          },
          {
            id: 2,
            title: "Paula - 5p",
            start: "2024-06-06",
            descripcion: "Nombre: Paula, Personas: 5, Hora: 10:00",
          },
          {
            id: 3,
            title: "Ester - 2p",
            start: "2024-06-07",
            descripcion: "Nombre: Ester, Personas: 2, Hora: 11:00",
          },
        ],
        firstDay: 1,
        validRange: this.validRange,
      },
    };
  },
  methods: {
    async mostrarFormulario(info) {
      const fecha = new Date(info.dateStr);
      if (fecha.getDay() === 3) { // 3 representa el miércoles
        await Swal.fire({
          icon: "error",
          title: "Reserva no disponible",
          text: "No se pueden hacer reservas los miércoles.",
        });
        return;
      }

      const { value: formValues } = await Swal.fire({
        title: "Reserva",
        html:
          '<input id="swal-input1" class="swal2-input" placeholder="Nombre">' +
          '<input id="swal-input2" class="swal2-input" type="number" placeholder="Número de personas">' +
          '<input id="swal-input3" class="swal2-input" type="time" placeholder="Hora">',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
            document.getElementById("swal-input3").value,
          ];
        },
      });

      if (formValues) {
        const [nombre, numPersonas, hora] = formValues;

        // Validaciones
        if (!nombre || !numPersonas || !hora) {
          await Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Por favor, rellena todos los campos.",
          });
          return;
        }

        // Check if number of people exceeds the limit
        const numPersonasInt = parseInt(numPersonas);
        if (numPersonasInt >= 30) {
          await Swal.fire({
            icon: "error",
            title: "Limite Excedido",
            text: "No se pueden agregar más de 30 personas en un evento.",
          });
          return;
        }

        // Add the event
        this.agregarEvento(nombre, numPersonas, hora, info.dateStr);
      }
    },

    async mostrarEvento(info) {
      const event = info.event;
      const eventDescription = event.extendedProps.descripcion;

      const result = await Swal.fire({
        title: event.title,
        html: eventDescription,
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cerrar",
      });

      if (result.isConfirmed) {
        const { value: password } = await Swal.fire({
          title: 'Introduce la contraseña',
          input: 'password',
          inputPlaceholder: 'Contraseña',
          showCancelButton: true,
          confirmButtonText: 'Eliminar',
          cancelButtonText: 'Cancelar',
        });

        if (password === 'solbes24') {
          this.eliminarEvento(event.id);
          await Swal.fire({
            icon: "success",
            title: "Reserva eliminada",
            text: "La reserva ha sido eliminada con éxito.",
          });
        } else if (password !== undefined) {
          await Swal.fire({
            icon: "error",
            title: "Contraseña incorrecta",
            text: "No se ha podido eliminar la reserva.",
          });
        }
      }
    },

    agregarEvento(nombre, numPersonas, hora, fecha) {
      const title = `${nombre} - ${numPersonas}p`;
      const nextId =
        this.calendarOptions.events.length > 0
          ? Math.max(...this.calendarOptions.events.map((event) => event.id)) +
            1
          : 1;
      this.calendarOptions.events.push({
        id: nextId,
        title: title,
        start: fecha,
        descripcion: `Nombre: ${nombre}, Personas: ${numPersonas}, Hora: ${hora}`,
      });
    },

    eliminarEvento(eventId) {
      const eventIndex = this.calendarOptions.events.findIndex(event => event.id === eventId);
      if (eventIndex !== -1) {
        this.calendarOptions.events.splice(eventIndex, 1);
      }
      const calendarApi = this.$refs.fullCalendar.getApi();
      const event = calendarApi.getEventById(eventId);
      if (event) {
        event.remove();
      }
    },

    validRange(nowDate) {
      const today = new Date();
      const end = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
      return {
        start: today,
        end: end,
      };
    }
  },
};
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
