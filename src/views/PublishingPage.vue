<template>
    <universityHeader />
    <div class="w-full flex justify-center py-12">
        <div class="w-4/5 space-y-8">
            <!-- Title -->
            <h1 class="text-3xl font-bold text-[#236A8D]">
                <a href="/publishing" class="hover:underline">Вестник КУ им. Абая Мырзахметова</a>
            </h1>

            <!-- Text + Expandable Links -->
            <div class="space-y-2">
                <p class="text-gray-700">
                    Научный журнал публикует оригинальные статьи по различным отраслям науки и образования.
                </p>
                <ul class="list-disc list-inside text-blue-700 space-y-1">
                    <li>
                        <a href="/publishing/rules" class="hover:underline">Правила для авторов</a>
                    </li>
                    <li>
                        <a href="/publishing/policy" class="hover:underline">Редакционная политика</a>
                    </li>
                </ul>
            </div>

            <!-- Archive by Years -->
            <div>
                <h2 class="text-xl font-semibold text-[#236A8D] mb-2">Архив выпусков по годам</h2>
                <ul class="space-y-1 text-blue-700">
                    <li><a href="/pdf/2024.pdf" target="_blank" class="hover:underline">2024</a></li>
                    <li><a href="/pdf/2023.pdf" target="_blank" class="hover:underline">2023</a></li>
                    <li><a href="/pdf/2022.pdf" target="_blank" class="hover:underline">2022</a></li>
                    <!-- Add more years as needed -->
                </ul>
            </div>
        </div>
    </div>

    <div>
        <followNews class="translate-y-1/2" />
        <universityFooter />
    </div>
</template>
<script setup lang="ts">
import universityHeader from '../components/universityHeader.vue';
import followNews from '../components/followNews.vue';
import universityFooter from '../components/universityFooter.vue';
</script>