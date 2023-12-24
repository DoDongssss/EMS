<template>
  <div class="h-screen flex flex-col items-center relative bg-gray-50 p-4">
    <Header />
    <main class="h-full w-full flex flex-col mt-5">
      <div class="flex h-[70px] items-center justify-between">
        <div class="relative flex items-center">
          <input
            type="text"
            class="w-[270px] rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-gray-500"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="absolute right-4 h-5 w-5 fill-gray-500"
            viewBox="0 0 512 512"
          >
            <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
        </div>
        <div>
          <button
            @click="reservationStore.modalToggle"
            class="flex items-center justify-center rounded bg-blue-700 px-4 py-2 font-semibold text-white transition-all hover:bg-blue-600"
          >
            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1 h-4 w-4 fill-white"
              viewBox="0 0 448 512"
            >
              <path
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
              />
            </svg> -->
            Create Reservation
          </button>
        </div>
      </div>
      <div
        class="max-full max-w-full overflow-hidden overflow-y-auto overflow-x-hidden rounded-md border border-blue-700 bg-white p-3 shadow-sm"
      >
        <el-table
          :data="filteredData"
          stripe
          style="width: 100%"
          max-height="500"
        >
          <el-table-column sortable prop="id" label="ID" width="100" />
          <el-table-column
            sortable
            prop="fullname"
            label="Fullname"
            width="250"
          />
          <el-table-column
            sortable
            prop="description"
            label="Description"
            width="300"
          />
          <el-table-column
            sortable
            prop="address"
            label="address"
            width="250"
          />
          <el-table-column sortable prop="email" label="Email" width="150" />
          <el-table-column sortable prop="phone" label="Phone" width="150" />
          <el-table-column sortable prop="date" label="Date" width="120" />
          <el-table-column
            sortable
            prop="time_from"
            label="Start_Time"
            width="150"
          />
          <el-table-column
            sortable
            prop="time_from"
            label="End_Time"
            width="150"
          />
          <el-table-column
            sortable
            fixed="right"
            prop="status"
            label="STATUS"
            width="100"
          />
          <el-table-column fixed="right" label="ACTIONS" width="150">
            <template #default="scope">
              <el-button
                size="small"
                @click="reservationStore.modalToggle(scope.row)"
                >Edit</el-button
              >
              <!-- <el-button
                size="small"
                type="danger"
                @click="dentistStore.destoryDentist(scope.row)"
                >Cancel</el-button
              > -->
              <el-button
                size="small"
                type="danger"
                @click="reservationStore.destroyReservation(scope.row)"
                >Delete</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </main>
    <BottomNavigation />
  </div>

  <!-- MODAL -->

  <el-dialog
    v-model="reservationStore.modalStatus"
    title="Reservation"
    append-to-body
    center
  >
    <form
      action=""
      class="flex flex-col items-center justify-center gap-3"
      @submit.prevent="
        reservationStore.createReservation(reservationStore.reservationModal)
      "
    >
      <div class="flex w-full gap-2">
        <div class="flex w-full gap-4">
          <div class="relative flex w-full flex-col">
            <label for="" class="font-semibold"
              >Name<span class="text-red-600 ml-1">*</span></label
            >
            <div class="relative flex w-full items-center justify-center">
              <input
                v-model="reservationStore.reservationModal.fullname"
                type="text"
                class="mt-1 w-full min-w-[100px] rounded-md border border-gray-400 px-4 py-2 transition-[border] focus:border-[#3C2A21] focus:outline-none"
                placeholder="Enter Fullname"
                required
              />
            </div>
          </div>
        </div>
        <div class="flex w-full gap-4">
          <div class="relative flex w-full flex-col">
            <label for="" class="font-semibold"
              >Address<span class="text-red-600 ml-1">*</span></label
            >
            <div class="relative flex w-full items-center justify-center">
              <input
                v-model="reservationStore.reservationModal.address"
                type="text"
                class="mt-1 w-full min-w-[100px] rounded-md border border-gray-400 px-4 py-2 transition-[border] focus:border-[#3C2A21] focus:outline-none"
                placeholder="Enter Address"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full gap-2">
        <div class="flex w-full gap-4">
          <div class="relative flex w-full flex-col">
            <label for="" class="font-semibold"
              >Description<span class="text-red-600 ml-1">*</span></label
            >
            <div class="relative flex w-full items-center justify-center">
              <textarea
                v-model="reservationStore.reservationModal.description"
                name=""
                id=""
                cols="30"
                rows="2"
                class="mt-1 w-full min-w-[100px] rounded-md border border-gray-400 px-4 py-2 transition-[border] focus:border-[#3C2A21] focus:outline-none"
                placeholder="Enter Event Description"
                required
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full gap-2">
        <div class="flex w-full gap-4">
          <div class="relative flex w-full flex-col">
            <label for="" class="font-semibold"
              >Email<span class="text-red-600 ml-1">*</span></label
            >
            <div class="relative flex w-full items-center justify-center">
              <input
                v-model="reservationStore.reservationModal.email"
                type="email"
                class="mt-1 w-full min-w-[100px] rounded-md border border-gray-400 px-4 py-2 transition-[border] focus:border-[#3C2A21] focus:outline-none"
                placeholder="Enter Email"
                required
              />
            </div>
          </div>
        </div>
        <div class="flex w-full gap-4">
          <div class="relative flex w-full flex-col">
            <label for="" class="font-semibold"
              >Phone<span class="text-red-600 ml-1">*</span></label
            >
            <div class="relative flex w-full items-center justify-center">
              <input
                v-model="reservationStore.reservationModal.phone"
                type="text"
                class="mt-1 w-full min-w-[100px] rounded-md border border-gray-400 px-4 py-2 transition-[border] focus:border-[#3C2A21] focus:outline-none"
                placeholder="Enter Phone Number"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full gap-2">
        <div class="flex w-full gap-4">
          <div class="relative flex w-full flex-col">
            <label for="" class="font-semibold"
              >Date<span class="text-red-600 ml-1">*</span></label
            >
            <div class="relative flex w-full items-center justify-center">
              <input
                v-model="reservationStore.reservationModal.date"
                type="date"
                class="mt-1 w-full min-w-[100px] rounded-md border border-gray-400 px-4 py-2 transition-[border] focus:border-[#3C2A21] focus:outline-none"
                placeholder="Enter Fullname"
                required
              />
            </div>
          </div>
        </div>
        <div class="flex w-full gap-4">
          <div class="relative flex w-full flex-col">
            <label for="" class="font-semibold"
              >Time Start<span class="text-red-600 ml-1">*</span></label
            >
            <div class="relative flex w-full items-center justify-center">
              <input
                v-model="reservationStore.reservationModal.time_from"
                type="time"
                class="mt-1 w-full min-w-[100px] rounded-md border border-gray-400 px-4 py-2 transition-[border] focus:border-[#3C2A21] focus:outline-none"
                required
              />
            </div>
          </div>
        </div>
        <div class="flex w-full gap-4">
          <div class="relative flex w-full flex-col">
            <label for="" class="font-semibold"
              >Time End<span class="text-red-600 ml-1">*</span></label
            >
            <div class="relative flex w-full items-center justify-center">
              <input
                v-model="reservationStore.reservationModal.time_to"
                type="time"
                class="mt-1 w-full min-w-[100px] rounded-md border border-gray-400 px-4 py-2 transition-[border] focus:border-[#3C2A21] focus:outline-none"
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div class="w-full flex items-center justify-end mt-2">
        <button
          type="submit"
          class="flex items-center justify-center rounded bg-blue-700 px-4 py-2 font-semibold text-white transition-all hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>

    <!-- <template #footer>
    <span class="dialog-footer">
      <el-button @click="centerDialogVisible = false">Cancel</el-button>
      <el-button type="primary" @click="centerDialogVisible = false">
        Confirm
      </el-button>
    </span>
  </template> -->
  </el-dialog>
</template>

<script>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import BottomNavigation from "@/components/BottomNavigation.vue";
import { useReservationStore } from "@/stores/Reservation";

export default {
  components: {
    Header,
    BottomNavigation,
  },
  setup() {
    const reservationStore = useReservationStore();
    const search = ref("");

    return {
      reservationStore,
      search,
    };
  },
  computed: {
    filteredData() {
      if (this.search != "") {
        return this.reservationStore.reservationData.filter((data) => {
          return data.fullname
            .toLowerCase()
            .includes(this.search.toLowerCase());
        });
      } else {
        return this.reservationStore.reservationData;
      }
    },
  },
  mounted() {
    this.reservationStore.getUserReservation();
  },
};
</script>

<style lang="scss" scoped></style>
