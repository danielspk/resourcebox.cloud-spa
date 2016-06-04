'use strict';

// dependencies
import riot from 'riot';

// tags
import './tags/header.tag';
import './tags/signin.tag';

// pages
import './pages/signin.tag';

// routes
import './routes';

window.onload = () => {
  riot.mount('*');
};
