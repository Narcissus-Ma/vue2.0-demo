<template>
  <div class="parent">
    <SlotSon>
      <!-- 默认相当于 v-slot: default -->
      <p>我是默认插槽</p>
      <!-- # 是 v-slot缩写 -->
      <template v-slot:slot01>
        <h4>我是具名插槽 slot01</h4>
      </template>
      <template #slot011>
        <h4>我是具名插槽 slot011</h4>
      </template>
      <!-- 不用template的写法 -->
      <h4 slot="slot012">我是具名插槽 slot012</h4>

      <template v-slot:slot02="{ msg }">
        <p>我是作用域插槽 slot02: {{ msg }}</p>
      </template>
    </SlotSon>
  </div>
</template>

<script>
import SlotSon from "./components/slotSon";

export default {
  components: {
    SlotSon,
  },
};
</script>
