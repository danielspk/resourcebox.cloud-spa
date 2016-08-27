'use strict';

module.exports = {
  serverHost: 'http://localhost:3000/api/v1',
  clientId: 'example01',
  menu: {
    avatar: [
      {
        name: 'Logout',
        href: '#logout',
        icon: 'exit_to_app'
      }
    ],
    menu: [
      {
        name: 'About',
        links: [
          {
            name: 'Author',
            href: 'http://daniel-spiridione.com.ar'
          }
        ]
      }
    ]
  }
}
