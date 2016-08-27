'use strict';

// dependencies
import riot from 'riot';

// tags
import './components/tags/header.tag';
import './components/tags/loader.tag';
import './components/tags/signin.tag';
import './components/tags/title.tag';

// pages
import './components/pages/about.tag';
import './components/pages/detail.tag';
import './components/pages/logout.tag';
import './components/pages/panel.tag';
import './components/pages/signin.tag';

// routes
import './routes';

// mixins
import observable from './observable';

// riot start
riot.mixin(observable);
riot.mount('*');
riot.route.start(true);
