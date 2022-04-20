import App from './App.vue';
import { createApp, h } from 'vue';
import { routes } from './routes/index.js';
import { createRouter, createWebHistory } from 'vue-router';
import './assets/index.css';
import { VueHammer } from './plugins/vue-hammer.js';

const router = createRouter({
	history: createWebHistory(),
	routes,
});

const app = createApp({
	render: () => h(App),
});
app.use(router);
app.use(VueHammer, {
	threshold: 0,
});
app.mount('#app');
