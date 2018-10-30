<?php 

    add_action('wp_enqueue_scripts', function () {   
        wp_enqueue_script('myscript', get_theme_file_uri('/docs/index.js'), array('jquery'), microtime()+1, true);
        wp_enqueue_style('mystyle', get_theme_file_uri().'/docs/style.css', NULL, microtime(), false);
	});
	


 
