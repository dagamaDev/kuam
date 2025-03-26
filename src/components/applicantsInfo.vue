<template>
    <div class="bg-white">
        <div class="bg-[#e6edf8] p-2">
            <h3 class="text-2xl text-[#236A8D] font-bold">{{ title }}</h3>
        </div>
        <div class="p-8">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps({
    title: String,
})
</script>