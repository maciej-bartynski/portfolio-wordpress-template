<?php 

    add_action('wp_enqueue_scripts', function () {   
        wp_enqueue_script('home_script', get_theme_file_uri('/docs/home.js'), NULL, microtime(), true);
        wp_enqueue_style('font_awesome', 'https://use.fontawesome.com/releases/v5.4.1/css/all.css', NULL, microtime(), false);
        wp_enqueue_style('main_stylesheet', get_theme_file_uri().'/docs/style.css', NULL, microtime(), false);
	});
	


 
