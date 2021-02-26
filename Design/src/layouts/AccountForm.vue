<template>
  <q-layout view="hHh lpr lFf" class="shadow-2 rounded-borders">
    <q-header elevated class="elevated-color">
      <q-toolbar class="mainmenuheader">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      :width="300"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-form style="padding-top: 20px">
          <div class="column items-center">
            <q-avatar size="72px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>

            <q-item-section class="nav-label-info">
              <q-item-label class="q-ma-sm">My Profile</q-item-label>
            </q-item-section>

            <q-item-section>
              <q-item-label class="q-mt-xs nav-label-name">
                ANGELITO BORINAGA</q-item-label
              >
              <q-item-label
                align="center"
                class="q-mt-xs q-mb-md nav-label-num"
              >
                201711211</q-item-label
              >
            </q-item-section>
          </div>
        </q-form>

        <q-separator color="orange" class="q-mb-sm" inset />

        <q-item
          v-for="nav in topnavs"
          :key="nav.label"
          :to="nav.to"
          active-class="text-green-6"
          class="nav-items"
          exact
          clickable
        >
          <q-item-section avatar>
            <q-icon class="q-pa-sm" :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator size="2px" />

        <q-item-section class="nav-label">
          <q-item-label class="q-ml-md q-mb-sm q-mt-md"
            >Information</q-item-label
          >
        </q-item-section>

        <q-item
          v-for="midnav in midnavs"
          :key="midnav.label"
          :to="midnav.to"
          active-class="text-green-6"
          class="nav-items"
          exact
          clickable
        >
          <q-item-section avatar>
            <q-icon class="q-pa-sm" :name="midnav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ midnav.label }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator size="2px" />

        <q-item-section>
          <q-item-label class="q-ml-md q-mb-sm q-mt-md nav-label"
            >Other</q-item-label
          >
        </q-item-section>

        <q-item
          v-for="botnav in botnavs"
          :key="botnav.label"
          :to="botnav.to"
          active-class="text-green-6"
          class="nav-items"
          exact
          clickable
        >
          <q-item-section avatar quasar>
            <q-icon class="q-pa-sm" :name="botnav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ botnav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MyLayout",
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      //Array navigation Bar
      profile: [
        {
          label: "My Profile",
          to: ""
        }
      ],
      topnavs: [
        {
          label: "Home",
          icon: "home",
          to: ""
        }
      ],
      midnavs: [
        {
          label: "Profile",
          icon: "account_circle",
          to: ""
        },
      ],
      botnavs: [
        {
          label: "History, Mission & Vision",
          icon: "check_circle_outline",
          to: ""
        },
        {
          label: "About",
          icon: "info",
          to: ""
        },
        {
          label: "FAQ's",
          icon: "help_outline",
          to: ""
        },
        {
          label: "Logout",
          icon: "exit_to_app",
          to: ""
        }
      ]
    };
  }
};
</script>

<style lang="stylus"></style>