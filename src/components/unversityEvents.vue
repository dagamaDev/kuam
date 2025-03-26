<template>
    <div class="flex flex-col items-center">
        <div class="flex justify-center gap-3 mb-4">
            <h1 class="text-3xl font-bold text-[#236A8D]">Оқиғалар</h1> <img src="../assets/group.svg" alt="">
        </div>
        <div class="flex gap-6 justify-center mb-6">
            <eventInfo :title="'Annual sports day'" :text="textSport">
                <img src="../assets/events_beginning.png" alt="">
            </eventInfo>
            <eventInfo :title="'Initiation program'" :text="textSport">
                <img src="../assets/events_middle.png" alt="">
            </eventInfo>
            <eventInfo :title="'Convocation'" :text="textSport">
                <img src="../assets/events_end.png" alt="">
            </eventInfo>
        </div>
        <button class="bg-[#236A8D] flex text-white px-6 py-2 rounded-md">
            <span>Барлық оқиғалар</span> <span><img src='../assets/outline.svg' alt=""></span>
        </button>
    </div>
</template>
<script setup lang="ts">
import eventInfo from './eventInfo.vue';
const textSport = "Mark your calendars for the thrilling Annual Sports Day at our university on September 10, 2023 - a day of fierce competition and campus camaraderie you won't want to miss!"
</script>