<template>
    <universityHeader />
    <div>
        <div>
            <researchHero />
        </div>
        <div class="mt-20">
            <researchNumbers />
        </div>
        <div class="mt-20">
            <researchInstitute />
        </div>
        <div class="mt-20">
            <researchFrontiers />
        </div>
        <followNews class="translate-y-1/2" />
        <universityFooter />
    </div>
</template>
<script setup lang="ts">
import researchHero from '../components/researchHero.vue';
import researchNumbers from '../components/researchNumbers.vue';
import researchFrontiers from '../components/researchFrontiers.vue';
import researchInstitute from '../components/researchInstitute.vue';
import universityHeader from '../components/universityHeader.vue';
import followNews from '../components/followNews.vue';
import universityFooter from '../components/universityFooter.vue';
</script>