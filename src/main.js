import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { fas } from '@fortawesome/free-solid-svg-icons'; // Importing solid icons
import { fab } from '@fortawesome/free-brands-svg-icons'; // Importing brand icons

const app = createApp(App);

// Add solid icons to the library
library.add(fas);

// Add brand icons to the library
library.add(fab);

// Register the Font Awesome component globally
app.component("font-awesome-icon", FontAwesomeIcon);

// Use Vue Router
app.use(router);

// Mount the Vue app to the #app element
app.mount("#app");
