<template>
    <universityHeader />
    <div class="w-full flex justify-center py-12">
        <div class="w-4/5 space-y-8">
            <!-- Заголовок -->
            <h2 class="text-3xl font-bold text-[#236A8D]">🔬 Научные проекты</h2>

            <!-- Изображение -->
            <div class="w-full rounded-xl overflow-hidden shadow-md">
                <img src="../assets/research-banner.png" alt="Научные проекты"
                    class="w-full object-cover" />
            </div>

            <!-- Ссылки -->
            <div class="space-y-4 text-lg">
                <a href="https://kuam.edu.kz/ru/konkursy-na-grantovoe-finansirovanie#gsc.tab=0" target="_blank"
                    class="text-[#236A8D] hover:underline block">
                    📌 Конкурсы на грантовое финансирование
                </a>
                <a href="/downloads/docs_registration_nir.zip" class="text-[#236A8D] hover:underline block" download>
                    📄 Документы для регистрации НИР
                </a>
                <a href="/downloads/docs_execution_nir.zip" class="text-[#236A8D] hover:underline block" download>
                    📑 Документы по выполнению научно-исследовательских работ
                </a>
                <a href="/downloads/docs_commercialization.zip" class="text-[#236A8D] hover:underline block" download>
                    📃 Документы по заключению договора о коммерциализации
                </a>
                <a href="https://kuam.edu.kz/ru/realizaciya-proektov-po-grantovomu-finansirovaniyu#gsc.tab=0"
                    target="_blank" class="text-[#236A8D] hover:underline block">
                    ✅ Реализация проектов грантового финансирования
                </a>
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