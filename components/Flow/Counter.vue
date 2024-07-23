<script setup>
const timeCounter = ref({
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const addLeadingZero = (number) => {
  if (number < 10) {
    return number.toString().padStart(2, "0");
  }
  return number.toString();
};

onMounted(() => {
  setInterval(() => {
    const singaporeTimezoneOffset = 8;
    const singaporeDate = new Date();
    const singaporeTime =
      singaporeDate.getTime() +
      (singaporeDate.getTimezoneOffset() + singaporeTimezoneOffset) * 60 * 1000;
    singaporeDate.setTime(singaporeTime);

    const targetDate = new Date("2024-8-1");

    const timeDiff = targetDate.getTime() - singaporeDate.getTime();
    timeCounter.value = {
      days: addLeadingZero(Math.floor(timeDiff / (1000 * 60 * 60 * 24))),
      hours: addLeadingZero(
        Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ),
      minutes: addLeadingZero(
        Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
      ),
      seconds: addLeadingZero(Math.floor((timeDiff % (1000 * 60)) / 1000)),
    };
  }, 1000);
});
</script>
<template>
  <div
    class="relative bg-[url(public/assets/images/bg-0.jpg)] dk:bg-[url(public/assets/images/dk/Countdown.jpg)] bg-cover bg-center"
  >
    <div class="container flex items-end dk:items-center min-h-screen pb-6">
      <div class="p-0 text-black dk:flex w-full dk:w-[50%]">
        <div
          class="bg-white rounded-[16px] shadow p-6 dk:p-[64px] font-tccc dk:min-h-[80vh] dk:flex flex-col justify-between w-full"
        >
          <div>
            <p class="text-xl uppercase font-bold mt-7 mb-8 hidden dk:block">
              Coming soon!
            </p>
            <h3 class="text-xl capitalize font-bold mt-7 mb-8">Fanta fest</h3>
          </div>

          <div>
            <div class="text-xl flex justify-start mb-8 text-center">
              <div>
                <strong> {{ timeCounter.hours }} </strong><br />
                <span class="text-xs"> Days </span>
              </div>
              <div class="mx-2">:</div>
              <div>
                <strong> {{ timeCounter.hours }} </strong><br />
                <span class="text-xs"> Hrs </span>
              </div>
              <div class="mx-2">:</div>
              <div>
                <strong> {{ timeCounter.minutes }} </strong><br />
                <span class="text-xs"> Min </span>
              </div>
              <div class="mx-2">:</div>
              <div>
                <strong> {{ timeCounter.seconds }} </strong><br />
                <span class="text-xs"> Sec </span>
              </div>
            </div>
            <Button
              class="mb-4 font-tccc border-2 border-black capitalize"
              type="full"
              variation="white"
              @click="$emit('login')"
            >
              Add to Calendar
            </Button>
          </div>
        </div>
      </div>
      <div class="hidden dk:block w-[50%] relative text-center">
        <img
          src="public/assets/images/dk/bg-bottle2.png"
          alt="image"
          class="absolute top-[50%] translate-y-[-50%] right-0 w-full"
        />
        <div class="w-[346px] m-auto relative">
            <div class="aspect-rect w-[95%] m-auto mb-4">
              <img
                src="public/assets/images/dk/image 71.png"
                alt="image"
                class="object-contain w-full h-full"
              />
            </div>
            <h3 class="text-xxl dk:text-ext leading-[0.8] mb-[62px]">
              SO SO EXTRA<br />
              <small class="text-lg dk:text-2xl">FOOD.MUSIC.GAMING</small>
            </h3>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
