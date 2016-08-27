'use strict';

module.exports = {
  serverHost: 'http://localhost:3000/api/v1',
  clientId: 'example01',
  menu: {
    avatar: {
      src: 'img/avatar.jpg',
      links: [
        {
          name: 'Logout',
          href: '#logout',
          icon: 'exit_to_app'
        }
      ]
    },
    menu: [
      {
        name: 'About',
        links: [
          {
            name: 'About',
            href: '#about'
          },
          {
            name: 'Project Author',
            href: 'http://daniel-spiridione.com.ar'
          },
          {
            name: 'Resourcebox.cloud',
            href: 'https://resourcebox.cloud'
          }
        ]
      }
    ]
  }
}
