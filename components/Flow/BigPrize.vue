<template>
  <div class="text-center bg-green relative h-screen relative overflow-auto">
    <img
      src="public/assets/images/image 52.jpg"
      alt="bg"
      class="absolute top-0 left-0 w-full"
    />
    <div class="relative h-screen flex justify-center items-center">
      <div>
        <div
          class="relative bg-[url(public/assets/images/image53.png)] bg-cover aspect-[206/57] w-[206px] m-auto flex justify-center items-center"
        >
          <h2 class="font-ak text-xl uppercase text-green ">Big prize</h2>
        </div>
        <div class="rounded-[16px] relative w-[240px] m-auto my-5">
          <img
            src="public/assets/images/image 51.png"
            alt="bg"
            class="w-full"
          />
        </div>

        <Button @click="$emit('replay')"> Get your chance </Button>
      </div>
    </div>
  </div>

</template>
