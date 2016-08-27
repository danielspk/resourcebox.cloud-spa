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
												<input class="form-control" id="modelUsername" type="text">
											</div>
										</div>
									</div>
									<div class="form-group form-group-label">
										<div class="row">
											<div class="col-md-10 col-md-push-1">
												<label class="floating-label" for="modelPassword">Password</label>
												<input class="form-control" id="modelPassword" type="password">
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
									<div class="form-group">
										<div class="row">
											<div class="col-md-10 col-md-push-1">
												<div class="checkbox checkbox-adv">
													<label for="ui_login_remember">
														<input class="access-hide" id="ui_login_remember" name="ui_login_remember" type="checkbox">Stay signed in
														<span class="checkbox-circle"></span><span class="checkbox-circle-check"></span><span class="checkbox-circle-icon icon">done</span>
													</label>
												</div>
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

  <script type="babel">

    this.sendSignin = (e) => {
			let data = {
				username: this.modelUsername.value, 
				password: this.modelPassword.value
			};

      this.observable.trigger('signin.submit', data);
			
      return false;
    }

  </script>

</signin-tag>
