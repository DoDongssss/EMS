import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { responseMessage } from "./Response";
import { redirectTo } from "./Redirect";
import router from "../router";

export const useReservationStore = defineStore("reservation", {
  state: () => ({
    reservationReservationData: ref([]),
    reservationReservationModal: ref({
      id: null,
      user_id: 2,
      fullname: "",
      description: "",
      address: "",
      email: "",
      phone: null,
      date: null,
      time_from: null,
      time_to: null,
      status: "PENDING",
    }),
    reservationModalStatus: ref(false),
    reservationErrors: ref([]),
    reservationLoading: ref(false),
  }),

  getters: {
    reservationData: (state) => state.reservationReservationData,
    reservationModal: (state) => state.reservationReservationModal,
    modalStatus: (state) => state.reservationModalStatus,
    errors: (state) => state.reservationErrors,
    loading: (state) => state.reservationLoading,
  },

  actions: {
    async getUserReservation() {
      await axios
        .get("api/v1/reservation")
        .then((res) => {
          this.reservationReservationData = res.data;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async createReservation(data) {
      if (data.id != undefined) {
        await axios
          .put("api/v1/reservation/" + data.id, data)
          .then((res) => {
            this.getUserReservation();
            this.modalToggle();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        await axios
          .post("api/v1/reservation", data)
          .then((res) => {
            this.getUserReservation();
            this.modalToggle();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    async destroyReservation(data) {
      await axios
        .delete("api/v1/reservation/" + data.id)
        .then((res) => {
          this.getUserReservation();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    reset() {
      this.reservationReservationModal.id = null;
      this.reservationReservationModal.fullname = null;
      this.reservationReservationModal.address = null;
      this.reservationReservationModal.description = null;
      this.reservationReservationModal.email = null;
      this.reservationReservationModal.phone = null;
      this.reservationReservationModal.date = null;
      this.reservationReservationModal.time_from = null;
      this.reservationReservationModal.time_to = null;
    },

    modalToggle(data) {
      this.reservationModalStatus = !this.reservationModalStatus;
      this.reset();

      if (data.id != undefined) {
        this.reservationReservationModal.id = data.id;
        this.reservationReservationModal.fullname = data.fullname;
        this.reservationReservationModal.address = data.address;
        this.reservationReservationModal.description = data.description;
        this.reservationReservationModal.email = data.email;
        this.reservationReservationModal.phone = data.phone;
        this.reservationReservationModal.date = data.date;
        this.reservationReservationModal.time_from = data.time_from;
        this.reservationReservationModal.time_to = data.time_to;
      }
    },
  },
});
