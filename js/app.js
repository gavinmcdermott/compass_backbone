// Generated by CoffeeScript 1.4.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.Router = (function(_super) {

    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.routes = {
      '': 'index'
    };

    Router.prototype.initialize = function() {};

    Router.prototype.index = function() {
      this.indexView = new IndexView;
      return this.indexView.render();
    };

    return Router;

  })(Backbone.Router);

  window.IndexView = (function(_super) {

    __extends(IndexView, _super);

    function IndexView() {
      return IndexView.__super__.constructor.apply(this, arguments);
    }

    IndexView.prototype.el = '.container';

    IndexView.prototype.template = _.template('We\'re in it');

    IndexView.prototype.render = function() {
      return this.$el.html(this.template({}));
    };

    return IndexView;

  })(Backbone.View);

  $(document).ready(function() {
    var app;
    app = new Router;
    Backbone.history.start();
  });

}).call(this);
