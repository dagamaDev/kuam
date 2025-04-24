<template>
    <div class="h-60 w-1/4 bg-[#E6EDF8] flex flex-col justify-between p-4 pt-6">

        <div class="flex justify-center">
            <slot></slot>
        </div>
        <div class="flex justify-center">
            <h4 class="text-2xl font-bold text-[#236A8D] text-center">{{ title }}</h4>
        </div>
    </div>

</template>
<script setup lang="ts">
defineProps({
    title: String,
})
</script>