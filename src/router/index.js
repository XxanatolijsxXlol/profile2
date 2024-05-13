import { createRouter, createWebHistory } from 'vue-router';
import NavBar from '@/components/NavBar.vue'; // Import the NavBar component
import HomeView from '@/views/HomeView.vue';
import Friends from '@/views/Friends.vue';
import Messages from '@/views/Messages.vue';
import Notification from '@/views/Notification.vue';


const routes = [
  {
    path: '/',
    components: {
      default: HomeView, // Render HomeView for the default route
      navbar: NavBar // Include NavBar component in the layout
    }
  },
 
  {
    path: '/Friends', // Define route for HomeView
    name: 'Friends',
    component: Friends
    
  },
  {
    path: '/Messages', // Define route for HomeView
    name: 'Messages',
    component: Messages
  },
  {
    path: '/Notification', // Define route for HomeView
    name: 'Notification',
    component: Notification
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
