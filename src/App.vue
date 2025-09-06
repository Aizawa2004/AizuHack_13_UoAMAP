<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      id="hoge"
      elevated
      class="text-white"
      style="background-color: #009999"
      height-hint="98"
    >
      <Menu></Menu>
      
      <q-tabs
        class=""
        style="background-color: rgba(240, 255, 255, 0); width: 600px"
      >
        <div class="q-gutter-y-md column" style="width: 100%; max-width: 400px">
          <q-toolbar class="text-white rounded-borders justify-center">
            <q-input
              dark
              dense
              standout
              v-model="text"
              input-class="text-left custom-input-class"
              class="q-ml-md"
              style="background-color: #36d0d05c; width: 100%"
            >
              <template v-slot:append>
                <q-icon v-if="text === ''" name="search" />
                <q-icon
                  v-else
                  name="clear"
                  class="cursor-pointer"
                  @click="text = ''"
                />
              </template>
            </q-input>
          </q-toolbar>
        </div>
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
      <SearchResult @itemClick="openDialog" :filter="text" />
      <Mapping :selectedItem="selectedItem" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, watch } from "vue";
import SearchResult from "./components/SearchResult.vue";
import Mapping from "./components/Map.vue";
import Menu from "./Menu.vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
    const text = ref("");
    const filter = ref("");

    watch(text, (newValue) => {
      filter.value = newValue;
    });

    return {
      text,
      filter,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
  data() {
    return {
      selectedItem: null,
    };
  },
  components: { SearchResult, Mapping, Menu },
  methods: {
    openDialog(item) {
      this.selectedItem = item;
    },
  },
};
</script>

<style>
#hoge {
  display: flex;
}
</style>
