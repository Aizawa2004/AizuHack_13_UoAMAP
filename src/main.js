import { createApp } from "vue";
import { Quasar } from "quasar";
import quasarLang from "quasar/lang/ja";

import "@quasar/extras/material-icons/material-icons.css";

import "quasar/src/css/index.sass";

import App from "./App.vue";

// インターフェースの構築をするための関数。(表示まではできない。構築のみ)　Vueにおける心臓部分
const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {},
  lang: quasarLang,
});

// createApp()が作ったインターフェースを表示する
// 引数にはどこに表示するかを文字列で指定
// この場合、html.indexの16行目に指定
myApp.mount("#app");
