<template>
  <div class="mainBox">
    <h1>{{ count }}</h1>
    <h1>getters:{{ doubleCount }}</h1>
    <el-select v-model="value" @change="onSelect" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-button @click="increment">+</el-button>
    <el-button @click="decrement">-</el-button>
    <el-button @click="incrementifodd">increment if odd</el-button>
    <el-button @click="incrementasync">increment async</el-button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["doubleCount"]),
  },
  data() {
    return {
      value: 0,
      timer: null,
      options: [
        {
          value: 1,
          label: "加1",
        },
        {
          value: 2,
          label: "加2",
        },
        {
          value: 3,
          label: "加3",
        },
      ],
    };
  },
  methods: {
    onSelect(val) {
      this.value = val;
    },
    increment() {
      this.$store.dispatch("increment", this.value);
    },
    decrement() {
      this.$store.dispatch("decrement", this.value);
    },
    incrementifodd() {
      this.$store.dispatch("incrementifodd", this.value);
    },
    incrementasync() {
      this.timer = setTimeout(() => {
        this.$store.dispatch("incrementasync", this.value);
      }, 1000);
    },
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
};
</script>

<style scoped></style>
