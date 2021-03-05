<template>
  <div class="row q-mb-lg">
    <q-input
      clearable
      clear-icon="close"
      outlined
      :type="isPwd ? 'password' : 'text'"
      :rules="[
        val =>
          isValidPassword(val) ||
          'Password must be min 8 letter password, with at least a symbol, upper and lower case letters and a number '
      ]"
      ref="password"
      :value="password"
      @input="$emit('update:password', $event)"
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
      isPwd: true,
      text: "",
      dense: false
    };
  },
  props: ["password"],
  methods: {
    isValidPassword(password) {
      var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return re.test(password);
    }
  }
};
</script>

<style lang="stylus"></style>
