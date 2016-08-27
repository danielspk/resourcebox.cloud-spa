<logout-page>
  
  <script type="babel">

    import Security from './../../security';

    this.observable.trigger('loader.start');

    Security.removeAuthentication();

    setTimeout(() => {
      this.observable.trigger('loader.end');

      riot.route('/');
    }, 1200);

  </script>

</logout-page>
