<template>
    <universityHeader />
    <div>
        <div>
            <aboutMission />
        </div>
        <div class="mt-20">
            <aboutVision />
        </div>
        <div class="mt-20">
            <aboutInitiative />
        </div>
        <followNews class="translate-y-1/2" />
        <universityFooter />
    </div>
</template>
<script setup lang="ts">
import universityHeader from '../components/universityHeader.vue';
import aboutMission from '../components/aboutMission.vue';
import aboutVision from '../components/aboutVision.vue';
import followNews from '../components/followNews.vue';
import universityFooter from '../components/universityFooter.vue';
import aboutInitiative from '../components/aboutInitiative.vue';
</script>