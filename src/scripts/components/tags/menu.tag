<menu-tag>
  <ul class="nav navbar-nav">
    <li class={ active: is.panel }><a href="#/panel">Main Panel { example }</a></li>
    <li class={ active: is.about }><a href="#/about">About</a></li>
    <li class={ active: is.contact }><a href="#/contact">Contact</a>
  </ul>

  <script>

    this.is = {
      panel: false,
      about: false,
      contact: false
    };

    this.example = "route initial";

    this.changeNav = (route) => {
      route = route.replace("-page", "");
      console.log(route);
      if (this.is[route] !== undefined) {
        for (let r in this.is) {
          this.is[r] = (r === route);
        }
      }
      this.example = "route is " + route;
      this.update();
    };

    this.on('mount', () => {
      console.log('mount');
      this.observable.on('route.changed', this.changeNav);
      //setTimeout(() => { this.observable.trigger('route.changed', 'setTimeout'); }, 1500);
    })

    this.on('unmount', () => {
      this.observable.off('route.changed');
    });

  </script>

</menu-tag>
