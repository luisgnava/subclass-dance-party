  var Dancer = function(top, left, timeBetweenSteps) {
    var dancer = {};
    this.$node = $('<span class="dancer"></span>');

    this._timeBetweenSteps = timeBetweenSteps;

    this.step();

    this.setPosition(top, left);
  };

  Dancer.prototype.step = function() {
    setTimeout(dancer.step, this._timeBetweenSteps);
  };

  Dancer.prototype.setPosition = function(top, left) {
    Dancer.prototype.setPosition(top, left);
    var styleSettings = {
      top: top,
      left: left
    }
  };
  dancer.$node.css(styleSettings);
  };