'use strict';

// dependencies
import riot from 'riot';

// tags
import './components/tags/header.tag';
import './components/tags/loader.tag';
import './components/tags/menu.tag';
import './components/tags/signin.tag';

// pages
import './components/pages/panel.tag';
import './components/pages/signin.tag';

// routes
import './routes';

// mixins
import observable from './observable';

// models



// riot start
riot.mixin(observable);
riot.mount('*');
riot.route.start(true);

// models instances
