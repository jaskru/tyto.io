var  theme = 
{
	/*
	 * Theme name, must be identical to the directory name
	 */
	name : 'twentythirteen',
	author : 'citizenhub',

	/*
	 * files refer to css and js files that your theme requires.
	 * by default Tyto will load style.css from the root of your theme directory, 
	 * if this is your only there is no need to specify it here.
	 * most likely you will need more than just a style.css file or you would like
	 * split files into sub-directories. This can be done as it below, don't include the file's 
	 * extension because Tyto will include it for you based on which array it comes out of (css, js).
	 * these paths are relative to the root of your theme directory
	 */
	files : {
		css : ['css/bootstrap', 'css/fonts/stylesheet', 'css/style'],
		js : []
	},

	/*
	 * Routes determine the uri's in your application and here you can map those to layouts, templates and controllers
	 * on the path and template are required, the rest are optional.
	 * Because how the paths and routing work, you need run tyto on a local server such as xampp (http://www.apachefriends.org/en/xampp.html) or mamp (http://www.mamp.info/en/index.html)
	 * 
	 * Definitions
	 * path: the url path ex: /home will map to http:localhost/tyto/home, IF you are working on your local machine with your application in a folder named tyto.
	 * layout: layouts are files that include page templates within them, layouts include any reusable structure through your application. Such as header, footer, and navigation.
	 * template: templates are the structure for individual pages, note that layouts and template files must use the extension .tpl.html which you don not include in the path the files here.
	 * controller : controllers are javascript functions that add functionality and link any resources the view requires. Controllers can be created by a js file included with a theme, or in the application's controllers file.
	 * title: titles are plain text that currently show up in your navigation if you use the <ty-menu> directive, they can also be accessed by a template or layout to show the title of the current page.
	 * class: class contains a string of a class name to be applied to the li in the navigation to use for styling when using the <ty-menu> directive
	 * otherwise: when this attribute is specified, only the otherwise attribute can be present. This tells the application what path to redirect to if the user navigates to a route that doesn't exist.
	 */
	routes : [
		{
			path : '/home',
			layout : 'layouts/main',
			template : 'home',
			controller : 'HomeCrtl',
			title : 'Home',
			class : 'home'
		},
		{
			path : '/data',
			layout : 'layouts/main',
			template : 'data',
			controller : 'GeoCrtl',
			title : 'Data',
			class : 'list'
		},	
		{
			path : '/map',
			layout : 'layouts/main',
			template : 'map',
			controller : 'MapCrtl',
			title : 'Map',
			class : 'globe'
		},
		{
			path : '/pages/about',
			layout : 'layouts/modal',
			template : 'about'
		},
		{
			otherwise : '/home'
		}
	]
}