<template>
  <q-card style="min-width: 320px">
    <modal-header>Forgot Password</modal-header>

    <q-form @submit.prevent="submitForm">
      <q-card-section>
        <modal-email :email.sync="formData.email" ref="modalEmail" />
      </q-card-section>
      <modal-button />
    </q-form>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      dense: false,
      formData: {
        email: ""
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.modalEmail.$refs.email.validate();
      if (!this.$refs.modalEmail.$refs.email.hasError) {
        this.forgotPasswordForm();
      }
    },
    forgotPasswordForm() {
      this.forgotPassword(this.formData);
      this.$emit("close");
    }
  },
  components: {
    "modal-header": require("components/LoginForm/Modals/Shared/ModalHeader.vue")
      .default,
    "modal-email": require("components/LoginForm/Modals/Shared/ModalEmail.vue")
      .default,
    "modal-button": require("components/LoginForm/Modals/Shared/ModalButton.vue")
      .default
  }
};
</script>

<style lang="stylus">

</style>
