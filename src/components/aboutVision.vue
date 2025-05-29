<template>
    <div class="flex justify-center mt-6 px-4">
      <div class="w-full max-w-7xl flex flex-col">
        <div class="flex justify-center mb-10 text-center">
          <h1 class="text-2xl md:text-4xl font-bold text-[#236A8D]">Vision Statement</h1>
        </div>
  
        <div class="flex flex-wrap justify-center gap-6">
          <visionType :title="'Fostering Excellence'">
            <img src="../assets/vision_good.svg" alt="Excellence Icon" class="h-24 w-auto" />
          </visionType>
          <visionType :title="'Sustainable Future'">
            <img src="../assets/vision_piece.svg" alt="Sustainability Icon" class="h-24 w-auto" />
          </visionType>
          <visionType :title="'Innovative Research'">
            <img src="../assets/union.svg" alt="Innovation Icon" class="h-24 w-auto" />
          </visionType>
          <visionType :title="'Global Impact'">
            <img src="../assets/vision_world.svg" alt="Global Icon" class="h-24 w-auto" />
          </visionType>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">  
  import visionType from '../components/visionType.vue';
  </script>
  