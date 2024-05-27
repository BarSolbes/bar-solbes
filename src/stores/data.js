import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
const SERVER = import.meta.env.VITE_SERVERURL
import axios from 'axios'

export const useDataStore = defineStore('data', {
  state() {
    return {
      alergenos: [],
      messages: []
    }
  },
  actions: {
    async loadData() {
      try {
        const response = await axios.get(SERVER + '/alergenos')
        this.alergenos = response.data.data
      } catch (error) {
        this.addMessege('danger', 'Error al cargar los alergenos: ' + error)
      }
    },
    
    async addReserva(newReserva, alergenos, serveiId) {
      try {
        const response = await axios.post(SERVER + '/reservas', {
          nombre: newReserva.nom,
          telefono: newReserva.tel,
          email: newReserva.email,
          comensales: newReserva.comensals,
          comentario: newReserva.observacions || "",
          subscripcio: newReserva.suscripcion,
          alergenos: alergenos || [],
          servei_id: serveiId
        })
        this.addMessege('success', 'Reserva realizada con éxito')
      } catch (error) {
        this.addMessege('danger', 'Error al realizar la reserva: ' + error.response.data)
      }
    },

    async getAllFechas() {
      try {
        const response = await axios.get(SERVER + '/serveis')
        return response.data.data
      } catch (error) {
        this.addMessege('danger', 'Error los servicios: ' + error)
      }
    },

    async getServeiByFecha(fecha) {
      try {
        const response = await axios.get(SERVER + '/' + fecha + '/serveis')
        return response.data.data
      } catch (error) {
        this.addMessege('danger', 'Error al cargar la fecha: ' + error)
      }
    },

    async getServeiById(id) {
      try {
        const response = await axios.get(SERVER + '/serveis/' + id)
        return response.data.data
      } catch (error) {
        this.addMessege('danger', 'Error al cargar el servicio: ' + error)
      }
    },

    delMessage(id) {
      this.messages = this.messages.filter((item) => item.id != id)
    },

    addMessege(type, text) {
      let mensaje = {
        id: this.getIdMessege(),
        type: type,
        text: text
      }
      this.messages.push(mensaje)
    },

    getIdMessege() {
      return this.messages.length + 1
    }

  },

  getters: {
    getAlergenoById: (state) =>  (id) => {
      return state.alergenos.find((alergeno) => alergeno.id == id) || {}
    },
  }
})