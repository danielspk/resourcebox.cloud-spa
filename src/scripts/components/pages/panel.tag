<panel-page>
  <header-tag title={ header.title } links={ header.links }></header-tag>
  <div class="content">
    <div class="content-header ui-content-header">
      <div class="container">
				<div class="row">
					<div class="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2">
						<h1 class="content-heading">My Resources</h1>
					</div>
				</div>
			</div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2">
          <section class="content-inner margin-top-no">
            <div class="card">
              <div class="card-main">
                <div class="card-inner">
                  <p>Here you will find a list of resources. Click on any of them to see a detail of it. From the detail you can navigate to other resources and download your attachments.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6">
          <div class="card">
            <a class="card-side pull-right waves-attach waves-effect" href="javascript:void(0)">
              <span class="card-heading">Show</span>
            </a>
            <div class="card-main">
              <div class="card-inner">
                <p class="card-heading">Primary Area!</p>
                <p class="margin-bottom-lg">
                  Lorem ipsum dolor sit amet.<br>
                  Consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="card">
            <a class="card-side pull-right waves-attach waves-effect" href="javascript:void(0)">
              <span class="card-heading">Show</span>
            </a>
            <div class="card-main">
              <div class="card-inner">
                <p class="card-heading">Primary Area!</p>
                <p class="margin-bottom-lg">
                  Lorem ipsum dolor sit amet.<br>
                  Consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="card">
            <a class="card-side pull-right waves-attach waves-effect" href="javascript:void(0)">
              <span class="card-heading">Show</span>
            </a>
            <div class="card-main">
              <div class="card-inner">
                <p class="card-heading">Primary Area!</p>
                <p class="margin-bottom-lg">
                  Lorem ipsum dolor sit amet.<br>
                  Consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script type="babel">
    import settings from './../../settings';

    this.header = {
      title: 'Resourcebox Accounts - Panel',
      links: settings.menu
    };
  </script>

</panel-page>
