import Home from '../views/Home.vue';
import Gather from '../views/Gather.vue';
import Login from '../views/Login.vue';

export const routes = [
	{ path: '/', component: Home, meta: { title: 'Home' } },
	{ path: '/gather', component: Gather, meta: { title: 'Gather' } },
	{ path: '/login', component: Login, meta: { title: 'Login' } },
];
