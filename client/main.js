// Libs
import { Meteor } from 'meteor/meteor';
import { Router } from 'meteor/akryum:vue-router';
// Main vue
import App from '/imports/ui/layout/App.vue';

// Router
const router = new Router({
  history: true,
  saveScrollPosition: true,
});

// App start
Meteor.startup(() => {
  // Start the router and create root vue instance
  router.start(App, 'app');
});
