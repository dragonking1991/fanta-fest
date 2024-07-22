<script setup></script>

<template>
  <div
    class="relative bg-[url(public/assets/images/bg-4.jpg)] bg-cover bg-center w-full min-h-screen pt-[48px] px-[50px]"
  >
    <div
      class="absolute top-[12px] left-[12px] text-[20px]"
      @click="$emit('back')"
    >
      <Icon name="arrow-left" class="cursor-pointer" />
    </div>

    <div class="text-center p-5">
      <h3 class="uppercase text-blue font-bold text-xxl mb-[10px]">
        about the <br />
        promotion
      </h3>
      <p class="font-fs text-sn">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        imperdiet nulla at sapien rhoncus, in posuere neque rhoncus. Nam maximus
        bibendum urna sit amet aliquam. Proin lacinia libero vitae tempor
        ultrices. Quisque.
      </p>
    </div>
    <div class="text-center text-base p-5 ">
      <h3 class="uppercase text-blue font-bold text-xxl">how to join</h3>
      <h4 class="uppercase text-blue font-bold mt-[10px]">step 1.</h4>
      <p class="font-fs text-sn">Sign up to activate your wallet.</p>
      <h4 class="uppercase text-blue font-bold mt-[10px]">step 2.</h4>
      <p class="font-fs text-sn">
        Find your pin from under Fanta bottle cap, inside Tasto packs or from
        participating fast food merchants.
      </p>
      <h4 class="uppercase text-blue font-bold mt-[10px]">step 3.</h4>
      <p class="font-fs text-sn">Go on EARN POINTS and enter your pin to start collecting points!</p>
      <h4 class="uppercase text-blue font-bold mt-[10px]">step 4.</h4>
      <p class="font-fs text-sn">Go to REDEEM PRIZES to get your rewards.</p>
    </div>
    <div class="text-center mt-[2px]">
      <Button type="full" variation="black" @click="$emit('linkEnterPin')">Join Now</Button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
