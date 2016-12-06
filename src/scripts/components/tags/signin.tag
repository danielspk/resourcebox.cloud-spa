<signin-tag>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-lg-push-4 col-sm-6 col-sm-push-3">
        <section class="content-inner">
          <div class="card">
						<div class="card-main">
							<div class="card-header">
								<div class="card-inner">
									<h1 class="card-heading">Login</h1>
								</div>
							</div>
							<div class="card-inner">
								<p class="text-center">
									<span class="avatar avatar-inline avatar-lg">
										<img alt="Login" src="img/logo.png">
									</span>
								</p>
								<form class="form" action="" onsubmit={sendSignin}>
									<div class="form-group form-group-label">
										<div class="row">
											<div class="col-md-10 col-md-push-1">
												<label class="floating-label" for="modelUsername">Username</label>
												<input class="form-control" id="modelUsername" ref="modelUsername" type="text">
											</div>
										</div>
									</div>
									<div class="form-group form-group-label">
										<div class="row">
											<div class="col-md-10 col-md-push-1">
												<label class="floating-label" for="modelPassword">Password</label>
												<input class="form-control" id="modelPassword" ref="modelPassword" type="password">
											</div>
										</div>
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-md-10 col-md-push-1">
												<button class="btn btn-block btn-brand waves-attach waves-light">Sign In</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div class="clearfix">
						<p class="margin-no-top pull-right"><a class="btn btn-flat btn-brand waves-attach" target="_blank" href="https://resourcebox.cloud">Goto resourcebox.cloud</a></p>
					</div>
				</section>
			</div>
		</div>
	</div>

  <script>

    this.sendSignin = (e) => {
			e.preventDefault();

			let data = {
				username: this.refs.modelUsername.value, 
				password: this.refs.modelPassword.value
			};

      this.observable.trigger('signin.submit', data);
			
      return false;
    }

  </script>

</signin-tag>
