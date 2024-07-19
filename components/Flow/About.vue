<script setup>
</script>

<template>
  <div
    class="relative bg-[url(../../public/assets/images/Group90591.jpg)] bg-no-repeat bg-[cover] bg-top w-full min-h-screen"
  >
    <div
      class="absolute top-0 left-0 w-full gradient p-[30px] rounded-b-[20px] z-10"
    >
      <Icon
        name="arrow-left"
        class="absolute top-[32px] left-[19px] cursor-pointer"
        @click="$emit('back')"
      />

      <div class=" text-sm text-center">
        <p class="mb-[15px]">
          <span class="text-xlm uppercase leading-fp">Timeline:</span><br />
          <span class="font-fs font-sm font-bold">9th - 10th Nov, 2024</span>
        </p>
        <p>
          <span class="text-xlm uppercase leading-fp">Location</span><br />
          <span class="font-fs font-sm font-bold">Nimibutr Stadium, Bangkok</span>
        </p>
      </div>
    </div>

    <div class="container pt-[159px] pb-[90px] z-10">
      <div class="px-[53.5px]">
        <div class="my-[30px] mb-5 px-[0px] text-center">
          <h3 class="uppercase text-blue text-xlm">artist line up</h3>
          <p class="text-sm  font-fs mb-[10px]">
            Saturday, 9th Nov<br /><strong
              >BUS | THE TOYS | PERSES  l  VIIS</strong
            >
          </p>
          <p class="text-sm  font-fs mb-[10px]">
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
        <p class="text-center  text-sm font-fs mb-[10px]">
          Join “TikTok Challenge” to win a chance perform with your favorite
          artist on stage!
        </p>
        <Button type="full" variation="black">Join now</Button>
      </div>

      <div class="mt-[30px] px-[50px]">
        <h3 class="text-blue text-xlm font-bold text-center mb-[10px]">
          MOST EPIC EXPERIENCE
        </h3>
        <div class="flex gap-[10px] mb-[10px]  font-fs">
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
        <div class="flex gap-[10px] mb-[10px]  font-fs">
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
        <div class="flex gap-[10px] mb-[10px]  font-fs">
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
        <div class="flex gap-[10px] mb-[10px]  font-fs">
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
            <p class="text-sm">Early bird survival pack</p>
          </div>
        </div>

        <Button
          variation="black"
          type="full"
          class="mt-5"
          @click="$emit('linkPrizes')"
        >
          Redeem Your Ticket Now
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
