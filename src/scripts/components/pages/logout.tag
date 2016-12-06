<logout-page>
  
  <script>

    import route from 'riot-route';
    import Security from './../../security';

    this.observable.trigger('loader.start');

    Security.removeAuthentication();

    setTimeout(() => {
      this.observable.trigger('loader.end');

      route('/');
    }, 1200);

  </script>

</logout-page>
