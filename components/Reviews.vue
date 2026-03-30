<script setup>
const reviews = [
  {
    name: "Руслан",
    text: "Огромное спасибо менеджеру, который всё объяснил, рассказал, договорились сразу так как цена меня сразу устроила, на следующий день приехал мастер и быстро, профессионально, чисто, сделал свою работу за что ему большое спасибо! Качество материала на высшем уровне! Ещё раз СПАСИБО!!!!",
  },
  {
    name: "Мариана",
    text: "Заказали 4 переносные стойки. Изготовил за один день, хотя заказ у нас нестандартный. Качество и цена устроили полностью. Рекомендую, однозначно!",
  },
  {
    name: "Александр",
    text: "Отличные профессиональные сварщики, работу выполнили в срок, как и обговаривалось. Директор очень общительный человек, сделал скидку. Рекомендую!",
  },
];
</script>

<template>
  <section id="reviews" class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold mb-10 text-center">Отзывы</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="(item, i) in reviews"
          :key="i"
          class="p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <p class="mb-4 text-gray-600 text-sm md:text-base leading-relaxed">
            “{{ item.text }}”
          </p>
          <strong class="block mt-4 text-gray-800">{{ item.name }}</strong>
        </div>
      </div>
    </div>
  </section>
</template>
