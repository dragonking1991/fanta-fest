<script setup>
const canvas = ref(null);
const ctx = ref(null);
const fruits = ref([]);
const bombs = ref([]);
const score = ref(0);
const gameOver = ref(false);

const drawBall = (ball, color) => {
  ctx.value.beginPath();
  ctx.value.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.value.fillStyle = color;
  ctx.value.fill();
  ctx.value.closePath();
};

const drawScore = () => {
  ctx.value.font = "30px Arial";
  ctx.value.fillStyle = "white";
  ctx.value.fillText(`Score: ${score.value}`, 10, 30);
};

const update = () => {
  ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);

  fruits.value.forEach((fruit) => {
    drawBall(fruit, "red");
    if (fruit.y < canvas.value.height / 2) {
      fruit.y += fruit.speed;
    } else {
      fruit.y -= fruit.speed;
    }
    if (fruit.y > canvas.value.height) {
      fruit.y = 0;
      fruit.x = Math.random() * canvas.value.width;
    }
  });

  bombs.value.forEach((bomb) => {
    drawBall(bomb, "black");
    if (bomb.y < canvas.value.height / 2) {
      bomb.y += bomb.speed;
    } else {
      bomb.y -= bomb.speed;
    }
    if (bomb.y > canvas.value.height) {
      bomb.y = 0;
      bomb.x = Math.random() * canvas.value.width;
    }
  });

  drawScore();

  requestAnimationFrame(update);
};

onMounted(() => {
  ctx.value = canvas.value.getContext("2d");

  // Add some initial fruits and bombs
  for (let i = 0; i < 5; i++) {
    fruits.value.push({
      x: Math.random() * canvas.value.width,
      y: canvas.value.height,
      radius: 20,
      speed: 2,
    });
    bombs.value.push({
      x: Math.random() * canvas.value.width,
      y: canvas.value.height,
      radius: 20,
      speed: 3,
    });
  }

  update();
});
</script>

<template>
  <!-- <canvas ref="canvas" width="400" height="600"></canvas> -->
  <p>Points: {{ points }}</p>

  <button @click="restartGame" :disabled="!gameOver">Restart</button>
</template>
