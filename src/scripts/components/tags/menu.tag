<menu-tag>
  <ul class="nav navbar-nav">
    <li class={active: is.panel}><a href="#/panel">Main Panel</a></li>
    <li class={active: is.about}><a href="#/about">About</a></li>
    <li class={active: is.contact}><a href="#/contact">Contact</a>
  </ul>

  <script type="babel">
    this.is = {
      panel: false,
      about: false, 
      contact: false
    };

    this.observable.on('route.changed', (routeName) => {
      routeName = routeName.replace("-page", "");

      if (this.is[routeName] !== undefined) {
        for (let r in this.is) {
          this.is[r] = (r === routeName);
        }
      }
      
      this.update();
    });

    this.on('unmount', function() {
      this.observable.off('route.changed');
    })
  </script>

</menu-tag>
