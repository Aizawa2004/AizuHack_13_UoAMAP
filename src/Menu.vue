<template>
  <q-toolbar
    style="background-color: rgba(127, 255, 212, 0); max-width: fit-content"
  >
    <q-btn round dense flat icon="menu" class="q-mr-xs">
      <q-menu transition-show="flip-right" transition-hide="flip-left">
        <q-list style="min-width: 100px">
          <div class="MENU">
            <q-item clickable>
              <q-item-section @click="rireki"> 履歴 </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>ブックマーク</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>設定</q-item-section>
            </q-item>
          </div>
        </q-list>
      </q-menu>
    </q-btn>

    <q-toolbar-title>
      <q-avatar>
        <img src="./assets/image/uoa-icon.jpg" />
      </q-avatar>
      UoA MAP
    </q-toolbar-title>
    <q-dialog v-model="rirekis">
      <div class="q-pa-md q-gutter-sm">
        <q-tree :nodes="simple" node-key="label" />
      </div>
    </q-dialog>
  </q-toolbar>
</template>

<script>
export default {
  setup() {
    return {
      simple: [
        {
          label: "Satisfied customers (with avatar)",
          avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              children: [
                { label: "Quality ingredients" },
                { label: "Good recipe" },
              ],
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              disabled: true,
              children: [
                { label: "Prompt attention" },
                { label: "Professional waiter" },
              ],
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              children: [
                {
                  label: "Happy atmosphere (with image)",
                  img: "https://cdn.quasar.dev/img/logo_calendar_128px.png",
                },
                { label: "Good table presentation" },
                { label: "Pleasing decor" },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
