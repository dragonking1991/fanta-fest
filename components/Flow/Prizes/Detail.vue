<script setup>
const $emit = defineEmits(["back"]);
</script>

<template>
  <div
    class="relative bg-[url(../../public/assets/images/bg-3.jpg)] bg-cover bg-center w-full h-screen pt-[48px] text-center"
  >
    <div
      class="absolute top-[12px] left-[12px] text-[20px] text-black"
      @click="$emit('back')"
    >
      <Icon name="arrow-left" class="cursor-pointer" />
    </div>

    <h2 class="text-ex uppercase">
      <span class="">Fanta fest</span><br />
      <span class="text-blue">ticket</span>
    </h2>

    <div
      class="gradient text-center h-[50vh] px-[20px] absolute bottom-0 left-0 w-full rounded-t-[20px] pt-[15%]"
    >
      <div class="absolute bottom-[85%] left-[50%] translate-x-[-50%] aspect-square w-[50%]">
        <img
          src="public/assets/images/image 99.png"
          alt="image"
          class="object-contain w-full h-full"
        />
      </div>
      <h3 class="font-bold mb-[13px]">
        <span class="text-xl">50thb voucher</span><br />
        <span class="text-lg"> 70 points </span>
      </h3>
      <p class="text-sm mb-[10px] font-fs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula ex,
        varius nec leo a, egestas auctor sapien. In venenatis consectetur
        euismod.
      </p>
      <p class="font-bold mb-[22px]">EXP: XX/XX/XXXX</p>

      <Button type="full" variation="black" @click="$emit('linkPrizesReward')">REDEEM now</Button>
      <div class="underline font-fs text-xs mb-[5px]"  @click="$emit('linkHow')">How to join</div>
      <div class="underline font-fs text-xs"  @click="$emit('linkTnc')">Term & Conditions</div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
