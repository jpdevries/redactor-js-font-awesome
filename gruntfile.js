module.exports = function(grunt) {
	grunt.initConfig({
		'fontawesome-list':{
			list:{
				options:{
					src:'./bower_components/font-awesome/scss/_icons.scss'
				}
			}
		}
	});
	
	grunt.loadNpmTasks('fontawesome-list');
};