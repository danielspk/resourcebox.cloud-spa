<header-tag>
  <header class="header header-brand ui-header">

    <ul class="nav nav-list pull-left">
	  <li>
        <a data-toggle="menu" href="#ui_menu">
          <span class="icon icon-lg">menu</span>
        </a>
      </li>
    </ul>

    <span class="header-logo">{opts.title}</span>

    <ul class="nav nav-list pull-right">
	  <li class="dropdown margin-right">
	    <a class="dropdown-toggle padding-left-no padding-right-no" data-toggle="dropdown" aria-expanded="false">
		  <span class="access-hide">User account</span>
		  <span class="avatar avatar-sm">
		    <img alt="alt text for user account" src="img/avatar-001.jpg">
		  </span>
		</a>
		<ul class="dropdown-menu dropdown-menu-right">
		  <li each={ opts.links.avatar }>
		    <a class="padding-right-lg waves-attach waves-effect" href={ href }>
			  <span class="icon icon-lg margin-right">{ icon }</span>{ name }
			</a>
		  </li>
		</ul>
	  </li>
	</ul>

  </header>

  <nav aria-hidden="true" class="menu" id="ui_menu" tabindex="-1">
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

</header-tag>
