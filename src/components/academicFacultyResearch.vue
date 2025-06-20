<template>
    <div>
        <div class="flex flex-col items-center">
            <div class="flex justify-center gap-3 mb-8">
                <h1 class="text-3xl font-bold text-[#236A8D]">Научно-исследовательская деятельность профессорского-преподавательского состава</h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-6">
                <applicantsInfo :title="'Научные проекты'">
                    <p>Описание или детали по научным проектам...</p>
                </applicantsInfo>
                <applicantsInfo :title="'Регистрация авторских прав'">
                    <p>Описание или детали по регистрации авторских прав...</p>
                </applicantsInfo>
                <applicantsInfo :title="'Публикационная активность'">
                    <p>Описание или детали по публикационной активности...</p>
                </applicantsInfo>
                <applicantsInfo :title="'Портфолио ученых'">
                    <p>Описание или детали по портфолио ученых...</p>
                </applicantsInfo>
                <applicantsInfo :title="'Соискание ученых званий'">
                    <p>Описание или детали по соисканию ученых званий...</p>
                </applicantsInfo>
                <applicantsInfo :title="'Конкурс «Лучший преподаватель ВУЗа»'">
                    <p>Описание или детали по конкурсу...</p>
                </applicantsInfo>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import applicantsInfo from './applicantsInfo.vue';
</script> 