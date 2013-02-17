class window.Router extends Backbone.Router
	routes:
		'' : 'index'

	initialize: ->

	index: ->
		@indexView = new IndexView
		@indexView.render()


class window.IndexView extends Backbone.View
	el: '.container'

	template: _.template('We\'re in it')

	render: ->
		@$el.html(@template({}))


$(document).ready ->
	app = new Router
	Backbone.history.start()
	return