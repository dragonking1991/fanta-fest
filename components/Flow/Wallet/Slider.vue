<script setup>
import "swiper/scss";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";

const { list } = defineProps({
  list: Array,
});

const $emit = defineEmits("select");
</script>

<template>
  <Swiper
    class="mySwiper"
    :modules="[Autoplay, Navigation]"
    :autoplay="false"
    :centeredSlides="true"
    :loop="true"
    :navigation="true"
    :slidesPerView="3"
    :breakpoints="{
      '780': {
        slidesPerView: 3,
      },
    }"
  >
    <SwiperSlide v-for="(item, index) in list" :key="index">
      <div
        class="border-[3px] w-[103px] border-orange bg-white aspect-square rounded-[16px] flex flex-col justify-around m-auto"
      >
        <div class="overflow-hidden aspect-[60/40] cursor-pointer">
          <img
            :src="item.img"
            :alt="item.desc"
            class="object-contain object-top w-full h-full"
          />
        </div>
        <p class="text-black text-xs px-2">
          {{ item.desc }}
        </p>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped lang="scss">
.swiper {
  padding: 40px 10px;
  @media (min-width: 780px) {
    padding: 50px 10px;
  }
}
:deep {
  .swiper-button-next {
    right: -4px;
  }
  .swiper-button-prev {
    left: -4px;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
    &::after {
      font-size: 20px;
    }
  }
}
.swiper-slide-active {
  z-index: 10;
  transform: scale(1.8);
}
</style>
