<template>
  <div
    class="image-container"
    :style="{
      height: height,
      width: width,
      backgroundImage: `url('${src}')`,
      backgroundSize: fit,
      backgroundPosition: position,
      backgroundRepeat: repeat
    }"
  />
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    height: {
      type: String,
      default: '100%'
    },
    width: {
      type: String,
      default: '100%'
    },
    fit: {
      type: String,
      default: 'contain'
    },
    position: {
      type: String,
      default: 'center center'
    },
    repeat: {
      type: String,
      default: 'no-repeat'
    }
  }
};
</script>
