<signin-page>
  <title-tag title="Resourcebox Accounts"></title-tag>
  <signin-tag></signin-tag>

  <script type="babel">
    import settings from './../../settings';
    import Security from './../../security';

    this.processSigin = (data) => {
      if (!data.username) {
        return $('body').snackbar({ content: 'Empty username' });
      }
      if (!data.password) {
        return $('body').snackbar({ content: 'Empty password' });
      }

      this.observable.trigger('loader.start');

      let status;

      fetch(settings.serverHost + '/oauth/token', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          grant_type: 'password',
          username: data.username,
          password: data.password,
          client_id: settings.clientId
        })
      })
        .then((response) => {
          status = response.status;
          return response.json();
        })
        .then((json) => {
          this.observable.trigger('loader.end');

          if (status === 401) {
            return $('body').snackbar({ content: 'Account credentials is not valid' });
          } else if (status !== 201) {
            return $('body').snackbar({ content: 'Error: ' + json.message });
          }

          Security.storeAuthentication(json.access_token);

          riot.route('panel');
        })
        .catch((err) => {
          this.observable.trigger('loader.end');

          $('body').snackbar({ content: 'Error: ' + err.message || 'unknown' });
        });
    };

    this.on('mount', () => {
      this.observable.on('signin.submit', this.processSigin);
    })

    this.on('unmount', () => {
      this.observable.off('signin.submit');
    });
  </script>

</signin-page>
