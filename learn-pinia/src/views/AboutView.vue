<template>
  <div class="about">
    <h1>About</h1>
    <button class="counter-button" @click="counter.increaseCount">{{ counter.count }}</button>
  </div>
</template>
<script setup>
import { useCounterStore } from "../stores/counter";
const counter = useCounterStore();
</script>
<style>
.counter-button {
  font-size: 30px;
}
</style>
