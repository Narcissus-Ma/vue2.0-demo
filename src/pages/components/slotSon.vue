<template>
  <div class="son">
    <!-- 默认插槽 -->
    <slot></slot>
    <!-- 具名插槽01 -->
    <slot name="slot01"></slot>
    <slot name="slot011"></slot>
    <slot name="slot012"></slot>
    <!-- 作用域插槽 -->
    <slot name="slot02" msg="hello world"></slot>
  </div>
</template>

<script>
export default {};
</script>
