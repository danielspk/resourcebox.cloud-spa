<loader-tag>
  <div id="progress" ref="progress" class="progress hidden">
    <div class="load-bar">
      <div class="load-bar-base">
        <div class="load-bar-content">
          <div class="load-bar-progress"></div>
          <div class="load-bar-progress load-bar-progress-brand"></div>
          <div class="load-bar-progress load-bar-progress-green"></div>
          <div class="load-bar-progress load-bar-progress-orange"></div>
        </div>
      </div>
    </div>
    <div class="load-bar">
      <div class="load-bar-base">
        <div class="load-bar-content">
          <div class="load-bar-progress"></div>
          <div class="load-bar-progress load-bar-progress-orange"></div>
          <div class="load-bar-progress load-bar-progress-green"></div>
          <div class="load-bar-progress load-bar-progress-brand"></div>
        </div>
      </div>
    </div>
  </div>

  <script>

    this.showProgress = () => {
      this.refs.progress.classList.remove('hidden');
    };

    this.hideProgress = () => {
      this.refs.progress.classList.add('hidden');
    };

    this.on('mount', () => {
      this.observable.on('loader.start', this.showProgress);
      this.observable.on('loader.end', this.hideProgress);
    })

    this.on('unmount', () => {
      this.observable.off('loader.start');
      this.observable.off('loader.end');
    });

  </script>

  <style scoped>

    .hidden {
      display: none;
    }

  </style>

</loader-tag>
