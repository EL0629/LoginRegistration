<template>
  <q-layout>
    <div class="limiters">
      <div class="container-login">
        <div class="wrap-login">
          <q-form class="login-form">
            <div class="item-container">
              <div class="center">
                <span class="login-form-title p-b-login-form">
                  <img src="../../public/images/cvsu-logo-test.png" />
                  CvSU - Imus Campus
                  <p>Facility Maintenance Management System</p>
                </span>

                <div class="login-item">
                  <q-input
                    align="right"
                    color="light-green"
                    v-model="formData.email"
                    placeholder="Enter Username"
                    :dense="dense"
                    class="login-username"
                  >
                    <template v-slot:prepend>
                      <q-icon name="account_circle" />
                    </template>
                  </q-input>
                </div>

                <div class="login-item">
                  <q-input
                    placeholder="Enter Password"
                    color="light-green"
                    v-model="formData.password"
                    :type="isPwd ? 'password' : 'text'"
                    id="input-password"
                    class="login-password"
                  >
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                    <template v-slot:prepend>
                      <q-icon name="vpn_key" />
                    </template>
                  </q-input>
                </div>

                <div class="login-item-btn">
                  <q-btn
                    rounded
                    class="login-btn q-mb-md"
                    label="Login"
                  />
                  <forgot-button />
                </div>
              </div>
            </div>
          </q-form>
          <tool-picture />
        </div>
      </div>
    </div>
    <q-dialog v-model="showForgotPassword" persistent>
      <add-forgot @close="showForgotPassword = false" />
    </q-dialog>
  </q-layout>
</template>

<script>
export default {
  data(){
    return{
      showForgotPassword: false,
      isPwd: true,
      dense: false,
      text: "",
      formData: {
        email: "",
        password: ""
      }
    } 
  },
  methods: {
    loginForm() {
      this.loginUser(this.formData);
    },
    handleKeyup(e) {
      if (e.keyCode == 13) {
        this.loginForm();
      }
    }
  },
  mounted() {
    this.$root.$on("showForgotPassword", () => {
      this.showForgotPassword = true;
    });
  },
  components: {
    "forgot-button": require("components/LoginForm/Tools/ForgetButton.vue")
      .default,
    "add-forgot": require("components/LoginForm/Modals/DialogForgotPass.vue")
      .default,
    "tool-picture": require("components/LoginForm/Tools/PictureForm.vue")
      .default
  }
}
</script>

<style lang="stylus">

</style>