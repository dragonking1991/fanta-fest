<script setup></script>

<template>
  <BgPrimary>
    <div
      class="absolute top-[12px] left-[12px] text-[20px] dk:top-5 dk:left-5"
      @click="$emit('back')"
    >
      <Icon name="arrow-left" class="cursor-pointer" />
    </div>
    <div class="relative z-10 mt-[10%] dk:mt-0">
      <h3
        class="uppercase text-blue font-bold text-xxl dk:text-enormous mb-[10px] dk:mb-3 text-center"
      >
        about the <br class="dk:hidden" />
        promotion
      </h3>
      <div class="dk:max-w-[406px] m-auto">
        <div class="text-center p-5">
          <p class="font-fs text-sn dk:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            imperdiet nulla at sapien rhoncus, in posuere neque rhoncus. Nam
            maximus bibendum urna sit amet aliquam. Proin lacinia libero vitae
            tempor ultrices. Quisque.
          </p>
        </div>
        <div class="text-center text-base p-5">
          <h3 class="uppercase text-blue font-bold text-xxl dk:text-avg">
            how to join
          </h3>
          <h4 class="uppercase text-blue font-bold mt-[10px]">step 1.</h4>
          <p class="font-fs text-sn dk:text-base">
            Sign up to activate your wallet.
          </p>
          <h4 class="uppercase text-blue font-bold mt-[10px]">step 2.</h4>
          <p class="font-fs text-sn dk:text-base">
            Find your pin from under Fanta bottle cap, inside Tasto packs or
            from participating fast food merchants.
          </p>
          <h4 class="uppercase text-blue font-bold mt-[10px]">step 3.</h4>
          <p class="font-fs text-sn dk:text-base">
            Go on EARN POINTS and enter your pin to start collecting points!
          </p>
          <h4 class="uppercase text-blue font-bold mt-[10px]">step 4.</h4>
          <p class="font-fs text-sn dk:text-base">
            Go to REDEEM PRIZES to get your rewards.
          </p>
        </div>
        <div class="text-center mt-[2px] dk:mt-6 max-w-[280px] mx-auto">
          <Button type="full" variation="black" @click="$emit('linkEnterPin')"
            >Join Now</Button
          >
        </div>
      </div>
    </div>
  </BgPrimary>
</template>

<style scoped lang="scss"></style>
