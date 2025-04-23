<template>
    <div>
        <div class="flex flex-col items-center">
        <div class="flex justify-center gap-3 mb-8">
            <h1 class="text-3xl font-bold text-[#236A8D]">Faculties</h1>
        </div>
        <div class="flex gap-6 justify-center mb-6">
            <applicantsInfo :title="'Бакалавриат'">
                <img class="w-61" src="../assets/bakalavr.png" alt="">
            </applicantsInfo>
            <applicantsInfo :title="'Кейінгі білім беру'">
                <img class="w-61" src="../assets/studies.png" alt="">
            </applicantsInfo>
            <applicantsInfo :title="'Әскери Кафедра'">
                <img class="w-61" src="../assets/Group.png" alt="">
            </applicantsInfo>
        </div>
    </div>
    </div>
</template>
<script setup lang="ts">
import applicantsInfo from './applicantsInfo.vue';
</script>