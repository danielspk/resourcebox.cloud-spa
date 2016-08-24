<loader-tag>
  <div id="progress" class="progress hidden">
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
  
  <script type="babel">
    this.observable.on('loading.start', () => {
      this.progress.classList.remove('hidden');
    });
    this.observable.on('loading.end', () => {
      this.progress.classList.add('hidden');
    });
  </script>
  
  <style scoped>
    .hidden {
      display: none;
    }
  </style>
  
</loader-tag>
