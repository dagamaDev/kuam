<template>
    <div class="flex justify-center mt-6">
        <div class="w-4/5 flex flex-col">
            <div class="flex justify-center mb-16">
                <h1 class="text-4xl font-bold text-[#236A8D]">Strategic Initiative</h1>
            </div>
            <div class="flex gap-10">
                <div class="flex flex-col justify-between gap-10 w-1/2">
                    <strategicInitiative :title="'Academic Excellence'">
                        <img src="../assets/Excellence.svg" alt="" class="p-4">
                    </strategicInitiative>
                    <strategicInitiative :title="'Student Success'" >
                        <img src="../assets/Promotion.svg" alt="" class="p-4">
                    </strategicInitiative>
                    <strategicInitiative :title="'Global Outreach'">
                        <img src="../assets/Worldwide.svg" alt="" class="p-4">
                    </strategicInitiative>
                </div>
                <div class="flex flex-col justify-between gap-10 w-1/2">
                    <strategicInitiative :title="'Sustainability'">
                        <img src="../assets/initiative.svg" alt="" class="p-4">
                    </strategicInitiative>
                    <strategicInitiative :title="'Global Outreach'">
                        <img src="../assets/Worldwide.svg" alt="" class="p-4">
                    </strategicInitiative>
                    <strategicInitiative :title="'Sustainability'">
                        <img src="../assets/initiative.svg" alt="" class="p-4">
                    </strategicInitiative>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
import strategicInitiative from './strategicInitiative.vue';
</script>