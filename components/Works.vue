<script setup>
const works = [
  {
    title: "Лестничные ограждения",
    desc: "Частный дом",
    img: "/images/works3.webp",
  },
  {
    title: "Перила в ТЦ",
    desc: "Коммерческий объект",
    img: "/images/works2.webp",
  },
  { title: "Балконные ограждения", desc: "ЖК", img: "/images/works1.webp" },
];
</script>

<template>
  <section id="works" class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold mb-10 text-center">
        Наши работы
      </h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="(item, i) in works"
          :key="i"
          class="rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div class="h-48 overflow-hidden">
            <img
              :src="item.img"
              :alt="`Ограждения ${item.title}`"
              class="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div class="p-4">
            <h3 class="font-semibold text-lg">{{ item.title }}</h3>
            <p class="text-gray-500 text-sm mt-1">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
