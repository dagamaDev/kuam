<template>
    <div class="bg-[#f6faff]">
        <universityHeader />
        <div>
            <div class="relartive">
                <img class="w-full object-cover" src="../assets/Background.png" alt="">
                <universityMain class="absolute top-1/2 left-1/2 -translate-x-1/2"/>
            </div>
            <div class="flex justify-center">
                <div class="w-2/3 flex justify-center gap-12 -translate-y-1/2">
                    <universityQuality class="w-90 h-74" :text="'200-ден астам оқытушы'">
                        <img src="../assets/icon.svg" alt="">
                    </universityQuality>
                    <universityQuality class="w-90 h-74" :text="'20 мыңнан астам түлек'">
                        <img src="../assets/Vector.svg" alt="">
                    </universityQuality>
                    <universityQuality class="w-90 h-74" :text="'Сапа сертификаты'">
                        <img src="../assets/bulb.svg" alt="">
                    </universityQuality>
                </div>
            </div>
            <div class="flex justify-center mb-8">
                <div class="w-3/4">
                    <unversityAdvice />
                </div>
            </div>
            <div class="h-22 bg-[#236A8D] my-8"></div>
            <div class="flex justify-center mb-8">
                <div class="w-3/4">
                    <unversityEvents />
                </div>
            </div>
            <div class="flex justify-center mb-8">
                <div class="w-3/4">
                    <unversityApplicants />
                </div>
            </div>
            <div class="flex justify-center mb-8">
                <div class="w-full">
                    <universityTour />
                </div>
            </div>
            <div class="flex justify-center mb-8">
                <div class="w-full">
                    <universityStaff />
                </div>
            </div>
            <div class="flex justify-center mb-8">
                <div class="w-full">
                    <unversityGallery />
                </div>
            </div>
            <div class="flex justify-center">
                <div class="w-3/4 mt-4">
                    <studentOpinion />
                </div>
            </div>
        </div>
        <followNews class="translate-y-1/2" />
        <universityFooter />
    </div>
</template>
<script setup lang="ts">
import unversityApplicants from '../components/unversityApplicants.vue';
import universityHeader from '../components/universityHeader.vue';
import universityQuality from '../components/universityQuality.vue';
import unversityAdvice from '../components/unversityAdvice.vue';
import unversityEvents from '../components/unversityEvents.vue';
import universityTour from '../components/universityTour.vue';
import universityStaff from '../components/universityStaff.vue';
import unversityGallery from '../components/unversityGallery.vue';
import universityFooter from '../components/universityFooter.vue';
import followNews from '../components/followNews.vue';
import studentOpinion from '../components/studentOpinion.vue';
import universityMain from '../components/universityMain.vue';
</script>