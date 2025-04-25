<template>
    <universityHeader />
    <div>
        <div>
            <jobHero />
        </div>
        <div class="mt-20">
            <jobInfo />
        </div>
        <div class="mt-20">
            <jobBenefits />
        </div>
        <div class="mt-20">
            <jobHR />
        </div>
        <followNews class="translate-y-1/2" />
        <universityFooter />
    </div>
</template>
<script setup lang="ts">
import jobInfo from '../components/jobInfo.vue';
import jobHero from '../components/jobHero.vue';
import jobBenefits from '../components/jobBenefits.vue';
import jobHR from '../components/jobHR.vue';
import followNews from '../components/followNews.vue';
import universityHeader from '../components/universityHeader.vue';
import universityFooter from '../components/universityFooter.vue';
</script>