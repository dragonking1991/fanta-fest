<script setup>
</script>

<template>
  <div
    class="relative bg-[url(../../public/assets/images/bg-3.jpg)] bg-cover bg-center w-full min-h-screen pt-[48px] pb-[90px]"
  >
    <div
      class="absolute top-0 left-0 w-full gradient p-[30px] rounded-b-[20px]"
    >
      <Icon
        name="arrow-left"
        class="absolute top-[32px] left-[19px] cursor-pointer"
        @click="$emit('back')"
      />

      <div class="text-white text-sm text-center">
        <strong class="text-xlm uppercase font-bold">Timeline:</strong><br />
        9th - 10th Nov, 2024<br />
        <strong class="text-xlm uppercase font-bold">Location</strong><br />
        Nimibutr Stadium, Bangkok
      </div>
    </div>

    <div class="container px-[53px] mt-[130px]">
      <div class="my-[30px] mb-5 px-[0px] text-center">
        <h3 class="uppercase text-blue text-xlm">artist line up</h3>
        <p class="text-sm text-white">
          Saturday, 9th Nov<br /><strong
            >BUS | THE TOYS | PERSES  l  VIIS</strong
          >
        </p>
        <p class="text-sm text-white">
          Sunday, 10th Nov<br /><strong>NUNEW | DICE | BADMIXY</strong>
        </p>
        <img
          src="../../public/assets/images/Group 90567.png"
          alt="image"
          class="w-full mt-[10px]"
        />
      </div>
      <img
        src="../../public/assets/images/Frame 6312375.png"
        alt="image"
        class="m-auto mb-[5px]"
      />
      <p class="text-center text-white text-sm">
        Join “TikTok Challenge” to win a chance perform with your favorite
        artist on stage!
      </p>
      <Button type="full" variation="black">Join now</Button>

      <div class="mt-[30px]">
        <h3 class="text-blue text-xlm font-bold text-center mb-[10px]">
          MOST EPIC EXPERIENCE
        </h3>
        <div class="flex gap-[10px] mb-[10px] text-white">
          <div class="flex-none">
            <img
              src="../../public/assets/images/Mask group.png"
              alt="image"
              class="rounded-[20px]"
            />
          </div>
          <div class="flex-auto">
            <h3 class="text-lg font-bold">
              EXTRA MUSIC <br /><small>EXPERIENCE</small>
            </h3>
            <p class="text-sm">Lorem Ipsum</p>
          </div>
        </div>
        <div class="flex gap-[10px] mb-[10px] text-white">
          <div class="flex-none">
            <img
              src="../../public/assets/images/Mask group-1.png"
              alt="image"
              class="rounded-[20px]"
            />
          </div>
          <div class="flex-auto">
            <h3 class="text-lg font-bold">
              EXTRA GAMING <br /><small>EXPERIENCE</small>
            </h3>
            <p class="text-sm">Real life Pac Man giant game</p>
          </div>
        </div>
        <div class="flex gap-[10px] mb-[10px] text-white">
          <div class="flex-none">
            <img
              src="../../public/assets/images/Mask group-2.png"
              alt="image"
              class="rounded-[20px]"
            />
          </div>
          <div class="flex-auto">
            <h3 class="text-lg font-bold">
              EXTRA trendy <br /><small>EXPERIENCE</small>
            </h3>
            <p class="text-sm">Lorem Ipsum</p>
          </div>
        </div>
        <div class="flex gap-[10px] mb-[10px] text-white">
          <div class="flex-none">
            <img
              src="../../public/assets/images/Mask group-3.png"
              alt="image"
              class="rounded-[20px]"
            />
          </div>
          <div class="flex-auto">
            <h3 class="text-lg font-bold">
              EXTRA SNACKING <br /><small>EXPERIENCE</small>
            </h3>
            <p class="text-sm">Early bird survival pack trendy</p>
          </div>
        </div>

        <Button
          variation="black"
          type="full"
          class="mt-5"
          @click="$emit('linkRedeem')"
        >
          Redeem Your Ticket Now
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
