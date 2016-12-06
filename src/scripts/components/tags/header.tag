<header-tag>
  <header class="header header-transparent header-waterfall affix-top ui-header">
    <ul if={ opts.links.menu } class="nav nav-list pull-left">
	  <li>
        <a data-toggle="menu" href="#ui_menu">
          <span class="icon icon-lg">menu</span>
        </a>
      </li>
    </ul>
    <span class="header-logo">{opts.title}</span>
    <ul if={ opts.links.avatar } class="nav nav-list pull-right">
	  <li class="dropdown margin-right">
	    <a class="dropdown-toggle padding-left-no padding-right-no" data-toggle="dropdown" aria-expanded="false">
		  <span class="access-hide">User account</span>
		  <span class="avatar avatar-sm">
		    <img alt="alt text for user account" src={ opts.links.avatar.src }>
		  </span>
		</a>
		<ul class="dropdown-menu dropdown-menu-right">
		  <li each={ opts.links.avatar.links }>
		    <a class="padding-right-lg waves-attach waves-effect" href={ href }>
			  <span class="icon icon-lg margin-right">{ icon }</span>{ name }
			</a>
		  </li>
		</ul>
	  </li>
	</ul>
  </header>
  <nav if={ opts.links.menu } aria-hidden="true" class="menu" id="ui_menu" tabindex="-1">
    <div class="menu-scroll">
      <div class="menu-content">
        <a class="menu-logo" href="index.html">Menu</a>
        <ul class="nav">
		  <li each={ opts.links.menu }>
		    <a class="collapsed waves-attach" data-toggle="collapse" href="#ui_menu_{ name }">{ name }</a>
			<ul class="menu-collapse collapse" id="ui_menu_{ name }">
			  <li each={ links }>
			    <a class="waves-attach" href={ href }>{ name }</a>
			  </li>
			</ul>
		  </li>
		</ul>
	  </div>
	</div>
  </nav>

  <script>
    this.on('unmount', () => {
      $('.menu-backdrop').remove();
    });
  </script>

</header-tag>
