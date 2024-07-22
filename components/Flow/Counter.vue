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
    class="relative bg-[url(public/assets/images/bg-0.jpg)] bg-cover bg-center w-full min-h-screen"
  >
    <div
      class="p-6 absolute bottom-5 left-[50%] translate-x-[-50%] w-[100%] text-black"
    >
      <div class="bg-white rounded-[16px] shadow p-6 font-tccc">
        <h3 class="text-xl capitalize font-bold mt-7 mb-8">Fanta fest</h3>
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
</template>

<style scoped lang="scss"></style>
