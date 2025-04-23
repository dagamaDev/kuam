<template>
    <div class="py-10 px-6 flex  justify-center">
        <div class="w-4/5">
            <h2 class="text-3xl font-bold text-center text-[#236A8D] mb-4">Grading System</h2>
            <p class="text-center text-gray-700 mb-8">
                xyz follows a letter grading system and the grades A, B+, B, B-, C+, C, C-, D+ and D are considered
                passing grades. Grade ‘F’ is the failing grade.
            </p>
            <div class="overflow-x-auto">
                <table class="min-w-full bg-white rounded-xl shadow-md">
                    <thead>
                        <tr class="bg-blue-100 text-[#236A8D] text-center">
                            <th class="py-3 px-4 font-semibold">Marks Range</th>
                            <th class="py-3 px-4 font-semibold">Letter Grade</th>
                            <th class="py-3 px-4 font-semibold">Grade Points</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-700 text-center">
                        <tr class="border-t">
                            <td class="py-2 px-4">90-100</td>
                            <td class="py-2 px-4">A</td>
                            <td class="py-2 px-4">4.0</td>
                        </tr>
                        <tr class="bg-blue-50 border-t">
                            <td class="py-2 px-4">87-89</td>
                            <td class="py-2 px-4">B+</td>
                            <td class="py-2 px-4">3.7</td>
                        </tr>
                        <tr class="border-t">
                            <td class="py-2 px-4">84-86</td>
                            <td class="py-2 px-4">B</td>
                            <td class="py-2 px-4">3.4</td>
                        </tr>
                        <tr class="bg-blue-50 border-t">
                            <td class="py-2 px-4">80-83</td>
                            <td class="py-2 px-4">B-</td>
                            <td class="py-2 px-4">3.1</td>
                        </tr>
                        <tr class="border-t">
                            <td class="py-2 px-4">77-79</td>
                            <td class="py-2 px-4">C+</td>
                            <td class="py-2 px-4">2.8</td>
                        </tr>
                        <tr class="bg-blue-50 border-t">
                            <td class="py-2 px-4">74-76</td>
                            <td class="py-2 px-4">C</td>
                            <td class="py-2 px-4">2.5</td>
                        </tr>
                        <tr class="border-t">
                            <td class="py-2 px-4">70-73</td>
                            <td class="py-2 px-4">C-</td>
                            <td class="py-2 px-4">2.2</td>
                        </tr>
                        <tr class="bg-blue-50 border-t">
                            <td class="py-2 px-4">65-69</td>
                            <td class="py-2 px-4">D+</td>
                            <td class="py-2 px-4">1.5</td>
                        </tr>
                        <tr class="border-t">
                            <td class="py-2 px-4">60-64</td>
                            <td class="py-2 px-4">D</td>
                            <td class="py-2 px-4">1.0</td>
                        </tr>
                        <tr class="bg-blue-50 border-t">
                            <td class="py-2 px-4">Below 60</td>
                            <td class="py-2 px-4">F</td>
                            <td class="py-2 px-4">0.0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>