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
          <div class="dk:h-[256px] mb-8">
            <p class="text-sx uppercase font-bold">Coming soon!</p>
            <h3 class="text-2xl capitalize font-bold mt-2 mb-8">Fanta fest</h3>
          </div>

          <div>
            <div class="text-xl flex justify-start mb-6 text-center">
              <div>
                <strong> {{ timeCounter.hours }} </strong><br />
                <span class="text-sx"> Days </span>
              </div>
              <div class="mx-2">:</div>
              <div>
                <strong> {{ timeCounter.hours }} </strong><br />
                <span class="text-sx"> Hrs </span>
              </div>
              <div class="mx-2">:</div>
              <div>
                <strong> {{ timeCounter.minutes }} </strong><br />
                <span class="text-sx"> Min </span>
              </div>
              <div class="mx-2">:</div>
              <div>
                <strong> {{ timeCounter.seconds }} </strong><br />
                <span class="text-sx"> Sec </span>
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
      <div class="absolute top-0 right-[12%] hidden dk:block w-[466px] text-center pt-[86px]">
        <img
          src="public/assets/images/dk/bg-bottle2.png"
          alt="image"
          class="absolute top-0 left-0 w-full"
        />
        <div class="w-[346px] m-auto relative pl-[10%]">
          <ImgHolder
            src="assets/images/dk/image 71.png"
            aspect="362/346"
            class="m-auto mb-4"
          />
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
