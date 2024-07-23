<template>
  <div
    class="relative bg-[url(public/assets/images/bg-1.jpg)] dk:bg-[url(public/assets/images/dk/bg-1.jpg)] bg-cover bg-center w-full min-h-screen pt-[48px] dk:pt-[80px] px-[50px] pb-[30px]"
  >
    <img
      src="public/assets/images/dk/bg-bottle.png"
      alt="image"
      class="absolute top-0 dk:top-0 left-[50%] translate-x-[-50%]"
    />
    <img
      src="public/assets/images/BG.png"
      alt="image"
      class="absolute bottom-0 left-0 w-full dk:hidden"
    />
    <slot />
  </div>
</template>
