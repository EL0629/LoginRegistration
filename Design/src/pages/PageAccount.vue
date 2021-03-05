<template>
  <q-page padding>
    <div class="text-h6 q-mb-md">
      My Account
    </div>

    <q-card>
      <q-tabs align="left" v-model="tab" no-caps inline-label class="shadow-2">
        <q-tab name="info" icon="perm_identity" label="Basic Information" />
        <q-tab name="pass" icon="vpn_key" label="Change Password" />
        <q-tab name="audit" icon="vpn_key" label="Audit Trial"/>
        <!-- <q-tab name="userlog" icon="history" label="Audit Trial" /> -->
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="info">
          <div class="text-subtitle1 q-mb-md text-weight-bold">
            Basic Information
          </div>

          <div class="text-subtitle2 q-mb-sm">
            Account ID
          </div>
            <div class="row q-mb-lg">
              <q-input
              outlined
              v-model="text"
              placeholder="201711211"
              :dense="dense"
              debounce="300"
              class="user-input col"
              disable
              readonly />
            </div>

          <div class="text-subtitle2 q-mb-sm">
            Name
          </div>
            <div class="row q-mb-lg">
              <q-input
              outlined
              v-model="text"
              placeholder="Angelito"
              :dense="dense"
              debounce="300"
              class="user-input col"
              disable
              readonly />
            </div>

          <div class="text-subtitle2 q-mb-sm">
            Email Address
          </div>
            <div class="row q-mb-lg">
              <q-input
              outlined
              v-model="text"
              placeholder="borinaga.angelito@gmail.com"
              :dense="dense"
              debounce="300"
              class="user-input col"
              disable
              readonly />
            </div>

          <div class="text-subtitle2 q-mb-sm">
            Status
          </div>
            <div class="row q-mb-lg">
              <q-input
              outlined
              v-model="text"
              placeholder="Active"
              :dense="dense"
              debounce="300"
              class="user-input col"
              disable
              readonly />
            </div>

          <div class="text-subtitle2 q-mb-sm">
            User Level
          </div>
            <div class="row q-mb-lg">
              <q-input
              outlined
              v-model="text"
              placeholder="Administrator"
              :dense="dense"
              debounce="300"
              class="user-input col"
              disable
              readonly />
            </div>

          <div class="text-subtitle2 q-mb-sm">
            Description(BIO)
          </div>
            <div class="row q-mb-lg">
              <q-input
              outlined
              v-model="text"
              autogrow
              :dense="dense"
              debounce="300"
              class="user-input col"/>
            </div>

          <div class="text-subtitle2 q-mb-sm">
            Date Last Online
          </div>
            <div class="row q-mb-lg">
              <q-input
              outlined
              v-model="text"
              placeholder="Administrator"
              :dense="dense"
              debounce="300"
              class="user-input col"
              disable
              readonly />
            </div>

          <div class="text-subtitle2 q-mb-sm">
            Date Created
          </div>
            <div class="row q-mb-lg">
              <q-input
              outlined
              v-model="text"
              placeholder="Administrator"
              :dense="dense"
              debounce="300"
              class="user-input col"
              disable
              readonly />
            </div>

          <div class="text-subtitle2 q-mb-sm">
            Date Modified
          </div>
            <div class="row q-mb-lg">
              <q-input
              outlined
              v-model="text"
              placeholder="Administrator"
              :dense="dense"
              debounce="300"
              class="user-input col"
              disable
              readonly />
            </div>
        </q-tab-panel>

        <q-tab-panel name="pass">
          <div class="text-subtitle1 q-mb-md text-weight-bold">
            Account Credentials
          </div>

          <div class="text-subtitle2 q-mb-sm">
            Email Address
          </div>
          <div class="row q-mb-lg">
            <q-input
            outlined
            v-model="text"
            placeholder="borinaga.angelito@gmail.com"
            :dense="dense"
            debounce="300"
            class="user-input col"
            disable
            readonly />
          </div>

          
          <div class="text-subtitle2 q-mb-sm">
            New Password
          </div>
          <modal-pass :password.sync="formData.password" ref="modalPassword" />

          <div class="text-subtitle2 q-mb-sm">
            ReType New Password
          </div>
          <modal-confirmpass
            :confirmpassword.sync="formData.confirmpassword"
            ref="modalConfirmPassword"
          />
          <div align="right">
            <q-btn
              outline
              rounded
              v-bind:disable="
                formData.password === '' ||
                  formData.password != formData.confirmpassword
              "
              label="Submit"
              style="min-width: 220px; min-height: 50px;"
              type="submit"
              class="confirm-btn"
              @click.prevent="submitPassword()"
            />
          </div>
        </q-tab-panel>

        <q-tab-panel name="audit">
          <div class="text-subtitle1 q-mb-md">
            Basic Information
          </div>
          <div class="row q-mb-lg">
            <q-input
              clearable
              clear-icon="close"
              outlined
              :rules="[val => !!val || 'Field is required']"
              ref="birthplace"
              placeholder="Enter Birthplace"
              :value="birthplace"
              @input="$emit('update:birthplace', $event)"
              :dense="dense"
              debounce="300"
              class="user-input col"
            />
          </div>
        </q-tab-panel>

        <!-- <q-tab-panel name="userlog"> </q-tab-panel> -->
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<style></style>

<script>
export default {
  data() {
    return {
      tab: "info",
      formData: {
        password: "",
        confirmpassword: ""
      }
    };
  },
  components: {
    "modal-pass": require("components/Account/Modals/ModalPassword.vue")
      .default,
    "modal-confirmpass": require("components/Account/Modals/ModalConfirmPassword.vue")
      .default
  },
  methods: {
    submitPassword() {
      this.$emit("close");
    }
  }
};
</script>
<style lang="stylus" scoped>
.confirm-btn{
    color:#f7b205;
}
</style>
