<script setup>

</script>

<template>
  <div
    class="relative bg-[url(../../public/assets/images/bg-3.jpg)] bg-cover bg-center w-full min-h-screen pt-[48px]"
  >
    <div class="absolute top-[12px] left-[12px] text-[20px]" @click="$emit('back')">
      
      <Icon name="arrow-left" />
    </div>

    <div class="text-center text-white text-sx p-5">
      <h3 class="uppercase text-blue font-bold text-xxl">
        about the <br />
        promotion
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        imperdiet nulla at sapien rhoncus, in posuere neque rhoncus. Nam maximus
        bibendum urna sit amet aliquam. Proin lacinia libero vitae tempor
        ultrices. Quisque.
      </p>
    </div>
    <div class="text-center text-white text-sx p-5">
      <h3 class="uppercase text-blue font-bold text-xxl">how to join</h3>
      <h4 class="uppercase text-blue font-bold mt-[10px]">step 1.</h4>
      <p>Sign up to activate your wallet.</p>
      <h4 class="uppercase text-blue font-bold mt-[10px]">step 2.</h4>
      <p>
        Find your pin from under Fanta bottle cap, inside Tasto packs or from
        participating fast food merchants.
      </p>
      <h4 class="uppercase text-blue font-bold mt-[10px]">step 3.</h4>
      <p>Go on EARN POINTS and enter your pin to start collecting points!</p>
      <h4 class="uppercase text-blue font-bold mt-[10px]">step 4.</h4>
      <p>Go to REDEEM PRIZES to get your rewards.</p>
    </div>
    <div class="text-center mt-[30px]">
      <Button type="full" variation="black">Join Now</Button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
