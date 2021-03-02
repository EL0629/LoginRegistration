<template>
  <q-card-section class="row header">
    <div class="text-h6" align="center">
      <slot></slot>
    </div>
    <q-space />
    <q-btn v-close-popup flat round color="negative" dense icon="close" />
  </q-card-section>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.header{
  padding-bottom: 5px;
}
</style>
