<template>
    <div class="flex flex-col items-center">
        <div class="flex flex-col justify-center gap-3 mb-4">
            <h1 class="text-3xl font-bold text-[#236A8D]">Фото галлерия</h1>
            <p>Біздің академиялық саяхатымыздың, кампус өміріміздің және студенттік жетістіктеріміздің мәнін қамтитын
                көрнекі шедеврлердің жанды жинағын зерттеңіз. Біздің белсенді және серпінді қауымдастықтың бірегей
                тарихын баяндайтын кескіндердің калейдоскопына еніңіз.</p>
        </div>
        <div class="grid grid-cols-4 gap-5 mx-auto">
            <img src="../assets/1.png" alt="Image 1" class="object-cover row-span-2 col-span-1 w-full h-full">
            <img src="../assets/3.png" alt="Image 3" class="object-cover row-span-1 col-span-2 w-full h-full">
            <img src="../assets/5.png" alt="Image 5" class="object-cover row-span-1 col-span-1 w-full h-full">
            <img src="../assets/4.png" alt="Image 4" class="object-cover row-span-3 col-span-2 w-full h-full">
            <img src="../assets/6.png" alt="Image 6" class="object-cover row-span-2 col-span-1 w-full h-full">
            <img src="../assets/2.png" alt="Image 2" class="object-cover row-span-2 col-span-1 w-full h-full">
            <img src="../assets/8.png" alt="Image 8" class="object-cover row-span-1 col-span-3 w-full h-full">
            <img src="../assets/7.png" alt="Image 7"
                class="object-cover row-span-2 col-span-1 row-start-3 w-full h-full">
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
img {
    border-radius: 8px;
    overflow: hidden;
}
</style>
