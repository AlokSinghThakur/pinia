<template>
  <div class="home">
    <Counter />
    <div class="button">
      <button @click="counter.increaseCount">+</button>
      <button @click="counter.decreaseCount">-</button>
    </div>
    <br />
    <hr />
    <div>This number is : {{ counter.oddOrEven }}</div>
  </div>
  <hr />
  <div>
    <h3>Edit Counter</h3>
    <input v-model="counter.count" type="number" />
  </div>
</template>

<script setup>
import Counter from "../components/Counter.vue";
import { useCounterStore } from "../stores/counter";
const counter = useCounterStore();
</script>
<style>
.count {
  font-size: 60px;
  margin: 20px;
}
.buttons button {
  font-size: 40px;
  margin: 10px;
}
</style>
