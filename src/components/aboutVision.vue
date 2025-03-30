<template>
    <div class="flex justify-center mt-6">
        <div class="w-4/5 flex flex-col">
            <div class="flex justify-center mb-16">
                <h1 class="text-4xl font-bold text-[#236A8D]">Vision Statement</h1>
            </div>
            <div class="flex justify-between gap-10">
                <visionType :title="'Fostering Excellence'">
                    <img src="../assets/vision_good.svg" alt="">
                </visionType>
                <visionType :title="'Sustainable Future'">
                    <img src="../assets/vision_piece.svg" alt="">
                </visionType>
                <visionType :title="'Innovative Research'">
                    <img src="../assets/union.svg" alt="">
                </visionType>
                <visionType :title="'Global Impact'">
                    <img src="../assets/vision_world.svg" alt="">
                </visionType>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">  
import visionType from '../components/visionType.vue';
</script>