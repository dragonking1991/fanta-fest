<script setup></script>

<template>
  <div
    class="relative bg-[url(public/assets/images/bg-2.jpg)] dk:bg-[url(public/assets/images/dk/bg-1.jpg)] bg-no-repeat bg-[cover] bg-top w-full min-h-screen"
  >
    <img
      src="public/assets/images/dk/bg-bottle.png"
      alt="image"
      class="absolute top-[5%] dk:top-0 left-[50%] translate-x-[-50%]"
    />
    <img
      src="public/assets/images/BG.png"
      alt="image"
      class="absolute bottom-0 left-0 w-full dk:hidden"
    />
    <div
      class="gradient-bar absolute top-0 left-0 w-full p-[30px] dk:p-[60px_0_40px] rounded-b-[20px] z-10"
    >
      <Icon
        name="arrow-left"
        class="absolute top-[32px] left-[19px] dk:left-10 cursor-pointer dk:text-[30px]"
        @click="$emit('back')"
      />

      <div
        class="text-sm dk:text-base text-center dk:flex justify-center gap-[80px]"
      >
        <p class="mb-[15px] dk:mb-0">
          <span class="text-xlm dk:text-avg dk:text-xxl uppercase leading-fp"
            >Timeline:</span
          ><br />
          <span class="font-fs font-bold">9th - 10th Nov, 2024</span>
        </p>
        <p>
          <span class="text-xlm dk:text-avg dk:text-xxl uppercase leading-fp"
            >Location</span
          ><br />
          <span class="font-fs font-bold">Nimibutr Stadium, Bangkok</span>
        </p>
      </div>
    </div>

    <div
      class="container relative pt-[159px] pb-[90px] dk:max-w-[587px] dk:px-0"
    >
      <div class="px-[53.5px] dk:px-0">
        <div class="my-[30px] mb-5 px-[0px] text-center">
          <h3 class="uppercase text-blue text-xlm dk:text-avg dk:mb-8">
            artist line up
          </h3>
          <div class="dk:flex gap-10 items-center text-sm dk:text-base font-fs">
            <div>
              <p class="mb-[10px]">
                Saturday, 9th Nov<br /><strong
                  >BUS | THE TOYS | PERSES  l  VIIS</strong
                >
              </p>
              <p class="mb-[10px]">
                Sunday, 10th Nov<br /><strong>NUNEW | DICE | BADMIXY</strong>
              </p>

              <div class="hidden dk:block mt-6">
                <img
                  src="public/assets/images/Frame 6312375.png"
                  alt="image"
                  class="m-auto mb-[5px]"
                />
                <p class="text-center text-sm font-fs mb-[10px] px-4">
                  Join “TikTok Challenge” to win a chance perform with your
                  favorite artist on stage!
                </p>
                <Button type="full" variation="black" class="dk:text-sm"
                  >Join now</Button
                >
              </div>
            </div>
            <div>
              <img
                src="public/assets/images/Group 90567.png"
                alt="image"
                class="w-full mt-[10px] dk:mt-0"
              />
            </div>
          </div>
        </div>
        <div class="dk:hidden">
          <img
            src="public/assets/images/Frame 6312375.png"
            alt="image"
            class="m-auto mb-[5px]"
          />
          <p class="text-center text-sm dk:text-base font-fs mb-[10px]">
            Join “TikTok Challenge” to win a chance perform with your favorite
            artist on stage!
          </p>
          <Button type="full" variation="black">Join now</Button>
        </div>
      </div>

      <div class="mt-[30px] dk:mt-[80px] px-[50px] dk:px-0 text-center">
        <h3 class="text-blue text-xlm dk:text-avg font-bold mb-[10px] dk:mb-8">
          MOST EPIC EXPERIENCE
        </h3>
        <div class="dk:flex flex-wrap gap-[40px]">
          <div class="dk:w-[calc(50%-20px)]">
            <div class="flex gap-[10px] mb-[10px] font-fs">
              <div class="flex-none">
                <img
                  src="public/assets/images/Mask group.png"
                  alt="image"
                  class="rounded-[20px]"
                />
              </div>
              <div class="flex-auto text-left">
                <h3 class="text-lg font-bold">
                  EXTRA MUSIC <br /><small>EXPERIENCE</small>
                </h3>
                <p class="text-sm">Lorem Ipsum</p>
              </div>
            </div>
            <div class="flex gap-[10px] mb-[10px] font-fs">
              <div class="flex-none">
                <img
                  src="public/assets/images/Mask group-1.png"
                  alt="image"
                  class="rounded-[20px]"
                />
              </div>
              <div class="flex-auto text-left">
                <h3 class="text-lg font-bold">
                  EXTRA GAMING <br /><small>EXPERIENCE</small>
                </h3>
                <p class="text-sm">Real life Pac Man giant game</p>
              </div>
            </div>
          </div>
          <div class="dk:w-[calc(50%-20px)]">
            <div class="flex gap-[10px] mb-[10px] font-fs">
              <div class="flex-none">
                <img
                  src="public/assets/images/Mask group-2.png"
                  alt="image"
                  class="rounded-[20px]"
                />
              </div>
              <div class="flex-auto text-left">
                <h3 class="text-lg font-bold">
                  EXTRA trendy <br /><small>EXPERIENCE</small>
                </h3>
                <p class="text-sm">Lorem Ipsum</p>
              </div>
            </div>
            <div class="flex gap-[10px] mb-[10px] font-fs">
              <div class="flex-none">
                <img
                  src="public/assets/images/Mask group-3.png"
                  alt="image"
                  class="rounded-[20px]"
                />
              </div>
              <div class="flex-auto text-left">
                <h3 class="text-lg font-bold">
                  EXTRA SNACKING <br /><small>EXPERIENCE</small>
                </h3>
                <p class="text-sm">Early bird survival pack</p>
              </div>
            </div>
          </div>
        </div>

        <Button
          variation="black"
          type="full"
          class="dk:w-[250px] mb-5 dk:mt-8"
          @click="$emit('linkPrizes')"
        >
          Redeem Your Ticket Now
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.gradient-bar {
  background: linear-gradient(
    218.54deg,
    #128dff -3.1%,
    #193abe 29.56%,
    #9747ff 70.08%,
    #ff2fd1 114.23%
  );
}
</style>
