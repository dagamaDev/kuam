<template>
  <div class="bg-blue-50 py-10 px-6 flex justify-center">
    <div class="w-4/5">
      <h2 class="text-3xl font-bold text-center text-[#236A8D] mb-10">Academic Systems & Standards</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(section, index) in sections" :key="index" class="bg-white p-6 shadow-md">
          <h3 class="text-lg font-semibold text-[#236A8D] mb-2">{{ section.title }}</h3>
          <p class="text-gray-700 text-sm">{{ section.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const sections = [
  {
    title: 'Academic Orientation',
    description: `Education at xyz is oriented towards developing a person in a holistic manner. This entails developing in the individual an approach to life that is productive, stimulating, rewarding and beneficial to the immediate society as well as to mankind. The General Education Curriculum at zyx has been developed to address this orientation. This general education components are common to all`
  },
  {
    title: 'Student Advising',
    description: `The Student Advisory Services basically take two forms, viz. academic advising and personal advising. Academic advising is designed to assist students in analyzing and achieving their educational and career goals through academic programs in the university. Each student is provided specific guidance in choosing courses every semester, selecting major concentration as well as`
  },
  {
    title: 'Examination System',
    description: `In addition to class work, home assignments, term papers, project works, case studies, quizzes, weekly tests, presentations, etc., there shall be three compulsory examinations in each semester for each course, a first-term, a mid term and the final examination. The general guideline for students is that every class contact hour is to be backed up by a minimum of 3 hours of private study.`
  },
  {
    title: 'Classification & Course Load',
    description: `The normal course load for a full time student is twelve (12) credit hours in a semester. However, a student may register in a minimum of three (3) credit hours and a maximum of fifteen (15). The course load may vary from department to department and based on the result of a student.`
  },
  {
    title: 'Course Numbering System',
    description: `Each course is numbered by 3 capital letters followed by three digits, course title and credit hours. CEN 213 Civil Engineering Materials (3) where CEN refers the subject area, 213 refers the level of the course, ‘Civil Engineering Materials’ indicates title of the course and “3” indicates the number of credit hours the course carries.`
  },
  {
    title: 'Semester System',
    description: `The academic year is divided into 3 semesters namely Spring, Summer and Fall. Spring semester starts in January and ends in April, Summer semester starts in May and ends in August. FALL semester starts in September and ends in December.`
  }
]
</script>

<style scoped></style>