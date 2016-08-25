<menu-tag>
  <ul class="nav navbar-nav">
    <li class={ active: is.panel }><a href="#/panel">Main Panel { example }</a></li>
    <li class={ active: is.about }><a href="#/about">About</a></li>
    <li class={ active: is.contact }><a href="#/contact">Contact</a>
  </ul>

  <script type="babel">
    this.is = {
      panel: false,
      about: false, 
      contact: false
    };
    
    this.example = "example";

    this.changeNav = (route) => {
      route = route.replace("-page", "");
      console.log(route);
      if (this.is[route] !== undefined) {
        for (let r in this.is) {
          this.is[r] = (r === route);
        }
      }
      this.example = "example 2";
      //this.update();
    };

    this.on('mount', () => {
      console.log('mount');
      this.observable.on('route.changed', this.changeNav);
    })

    this.on('unmount', () => {
      this.observable.off('route.changed');
    });
  </script>

</menu-tag>
