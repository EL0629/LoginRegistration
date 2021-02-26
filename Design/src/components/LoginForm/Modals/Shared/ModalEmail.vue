<template>
  <div class="row">
    <q-input
      clearable
      clear-icon="close"
      outlined
      :rules="[
        val => isValidEmailAddress(val) || 'Please enter a valid email address'
      ]"
      ref="email"
      placeholder="Enter Email"
      :value="email"
      @input="$emit('update:email', $event)"
      :dense="dense"
      debounce="300"
      class="user-input col"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dense: false
    };
  },
  props: ["email"],
  methods: {
    isValidEmailAddress(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }
};
</script>

<style lang="stylus"></style>
