<?php get_header(); ?>
    Hellowoirdl
    <div class="rowsandcols">
        <?php 
        $taxonomy=get_taxonomies(array('name'=>'category')); 
        if  ($taxonomy) {
            $terms = get_terms($taxonomy);
            foreach ( $terms as $term) {
                $termName=$term->name;
                $GroupedProjects = new WP_Query(array(
                    'post_type' => 'projekty',
                    'posts_per_page'   => -1,
                    'category_name'    => $termName,
                    'orderby'          => 'date',
                    'order'            => 'DESC',
                    'post_status'      => 'publish',
                ));
                echo '<h1>'.$termName.'</h1>';
                while( $GroupedProjects->have_posts()){
                    $GroupedProjects->the_post();
                    echo '<p>'.the_title().'</p>';
                };
            };
        }; 
        wp_reset_postdata();
    ?>
    </div>

<div style="width: 100%;">
    <div style="display: inline;">
        <div style="border-top: solid 1px blue; display: inline-block; width:20vw;  padding: 1px;box-sizing: border-box; background: red; height: 70px"></div>
        <div style="border-top: solid 1px blue; display: inline-block; width:20vw; padding: 1px;box-sizing: border-box; background: red; height: 70px"></div>
        <div style="border-top: solid 1px blue; display: inline-block; width:20vw; padding: 1px;box-sizing: border-box; background: red; height: 70px"></div>
    </div>

    <div style="display: inline; ">
        <div style="border-top: solid 1px blue; display: inline-block; width:20vw;  padding: 1px;box-sizing: border-box; background:green; height: 70px"></div>
        <div style="border-top: solid 1px blue; display: inline-block; width:20vw;  padding: 1px;box-sizing: border-box; background: green; height: 70px"></div>
        <div style=" border-top: solid 1px blue; display: inline-block; width:20vw;  padding: 1px;box-sizing: border-box; background: green; height: 70px"></div>
    </div>

    <div style="display: inline;">
        <div style="border-top: solid 1px blue; display: inline-block; width:20vw;  padding: 1px;box-sizing: border-box; background: red; height: 70px"></div>
        <div style="border-top: solid 1px blue; display: inline-block; width:20vw; padding: 1px;box-sizing: border-box; background: red; height: 70px"></div>
        <div style="border-top: solid 1px blue; display: inline-block; width:20vw; padding: 1px;box-sizing: border-box; background: red; height: 70px"></div>
    </div>
</div>
        

<?php get_footer(); ?>