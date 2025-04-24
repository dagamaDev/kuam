<template>
    <universityHeader />
    <div>
        <div>
            <admissionHero />
        </div>
        <div class="mt-20">
            <admissionTest />
        </div>
        <div class="mt-20">
            <admissionSchedule />
        </div>
        <div class="mt-20">
            <admissionInternational />
        </div>
        <div class="mt-20">
            <admissionScholarships />
        </div>
        <followNews class="translate-y-1/2" />
        <universityFooter />
    </div>
</template>
<script setup lang="ts">
import admissionSchedule from '../components/admissionSchedule.vue';
import admissionScholarships from '../components/admissionScholarships.vue';
import admissionHero from '../components/admissionHero.vue';
import admissionTest from '../components/admissionTest.vue';
import admissionInternational from '../components/admissionInternational.vue';
import universityHeader from '../components/universityHeader.vue';
import followNews from '../components/followNews.vue';
import universityFooter from '../components/universityFooter.vue';
</script>