<template>
    <div class="flex flex-col gap-4 p-4 bg-white hover:shadow-md">
        <slot>
        </slot>
        <h3 class="text-xl font-bold text-[#236A8D]">{{ title }}</h3>
        <p class="font-normal">{{ text }}</p>
    </div>
</template>
<script setup lang="ts">

defineProps({
    title: String,
    text: String,
})
</script>