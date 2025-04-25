<template>
    <div class="flex justify-center mt-6">
        <div class="w-4/5 flex flex-col">
            <div class="flex justify-center mb-16">
                <h1 class="text-4xl font-bold text-[#236A8D]">Exploring Research Frontiers</h1>
            </div>
            <div class="flex justify-between gap-10">
                <visionType :title="'Journal of Business & Economics'">
                    <img src="../assets/research-4.svg" alt="">
                </visionType>
                <visionType :title="'Governance & Management'">
                    <img src="../assets/research-5.svg" alt="">
                </visionType>
                <visionType :title="'Agricultural Innovation'">
                    <img src="../assets/research-6.svg" alt="">
                </visionType>
                <visionType :title="'Collaborating Institute'">
                    <img src="../assets/research-7.svg" alt="">
                </visionType>
            </div>
            <div></div>
            <div class="flex justify-center mt-10">
            <button class="bg-[#236A8D] flex text-white px-6 py-2 rounded-md">
                <span>See more</span> <span><img src='../assets/outline.svg' alt=""></span>
            </button>
        </div>
        </div>
    </div>
</template>
<script setup lang="ts">  
import visionType from '../components/visionType.vue';
</script>