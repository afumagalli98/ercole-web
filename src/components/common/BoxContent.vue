<template>
  <section :style="{ 'background-color': bgcolor }">
    <h2
      class="sub-title"
      v-if="title"
      :class="{ 'border-bottom': border }"
      :style="customStyleTitle"
    >
      {{ title }}
      <slot name="customTitle" />
    </h2>
    <article
      class="box-content"
      :class="{ 'bottom-space': mbottom, 'card card-custom': hasShadow }"
      :style="customStyle"
    >
      <slot />
    </article>
  </section>
</template>

<script>
export default {
  name: 'commom-boxcontent-component',
  props: {
    title: {
      type: String,
      default: null,
    },
    border: {
      type: Boolean,
      default: false,
    },
    mbottom: {
      type: Boolean,
      default: true,
    },
    bgcolor: {
      type: String,
      default: '#ffffff',
    },

    hasShadow: {
      type: Boolean,
      default: false,
    },
    customStyle: {
      type: String,
      default: '',
    },
    customStyleTitle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';
.box-content {
  padding: 0 0.5rem;
  height: 100%;
  position: relative;
}

.bottom-space {
  margin-bottom: 20px;
}

.sub-title {
  font-size: 0.9em;
  margin-bottom: 10px;
  padding: 5px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: $ercole-blue;
}

.border-bottom {
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
  margin-bottom: 15px;
}

.card-custom {
  padding: 20px 0;
}
</style>
