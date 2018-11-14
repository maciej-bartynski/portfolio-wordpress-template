    <?php get_header();?>
    
    <div class="home-page-upper-bg--wrapper">
        <img id="upper-bg" 
        style="opacity: 0.4; top: -27vw; width: 80vw" 
        src="<?php echo get_theme_file_uri('/media/bg1.svg');?>" 
        alt=""/>
    </div>

    <div id="bg0-1">
        <img id="bg1" src="<?php echo get_theme_file_uri('/media/bg1.svg');?>" alt=""/>
        <img id="bg2" src="<?php echo get_theme_file_uri('/media/bg2.svg');?>" alt=""/>
    </div>

    <header class="scrolling-stage" id="header02">

        <div class="header02--positioner">
            <div class="header02--container">
                <div class="header02--item header02_title">
                    <h1 class="title--big">
                        Trying to learn <br/>
                        how it works
                    </h1>
                </div>
                <div class="header02--item personal-panel-component--container">
                    <div class="personal-panel--component"> 
                        <div class="personal-panel--positioner">
                            <a 
                            href="https://github.com/maciej-bartynski"
                            target="_blank"
                            class="personal-panel--item">REPO</a>
                            <a 
                            href="./projects.html"
                            target="_self" 
                            class="personal-panel--item">APPS</a>
                        </div>
                        <img alt="" src="<?php echo get_theme_file_uri('/media/photo_square.png');?>"/>
                    </div>
                </div>
                <div class="header02--item">
                    <div class="description-panel">
                        <span>Maciej Bartyński</span>
                        <span>Front-End Developer</span>
                        <span>React - Wordpress</span>
                    </div>
                </div>
                <div class="header02--item">
                    <div class="animation-panel">

                            <div id="machina-wrapper">
                            </div>

                    </div>
                </div>
                <div class="header02--item">
                    <div class="contact-panel">
                        <span>784 482 159</span>
                        <a href="mailto:maciek.bartynski@gmail.com">maciek.bartynski@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>

    </header>

    <main style="width:100%; padding: 0; margin:0;">

        <section class="scrolling-stage" id="projekty03">

            <h2 class="section-title">Projects</h2>
        
            <div class="slider100vw--wrapper">

                <!--category-->
                <h3 class="slider100vw--slider-title">Wordpress</h3>
                <!--category-->
                
                <div class="slider100vw--slider">

                    <!--cell!-->
                    <div class="projekt--cell slider100vw--item" style="background-image: url('./bluish/media/tymczasowy.jpg');">
                        
                        <div class="projekt_top-belt">
                            <span>Wordpress</span>
                        </div>
        
                        <div class="projekt_bottom-belt">
                            <h3 class="projekt_title">Personal Blog</h3>
                            <div class="projekt_info">
                                <div class="projekt_info_categories">
                                    <span>#Wordpress</span>
                                    <span>#GSAP</span>
                                    <span>#jQuery</span>
                                    <span>#O-Oriented</span>
                                </div>
                                <div class="projekt_info_rats">
                                    <span>1</span>
                                    <i class="fas fa-heart heart"></i>
                                </div>
                            </div>
                        </div>

                        <a class="projekt--cell_link" href="./post.html"></a>
                    </div>
                    <!--cell!-->   

                    <!--cell!-->
                    <div class="projekt--cell slider100vw--item" style="background-image: url('./bluish/media/tymczasowy.jpg');">
                        <div class="projekt_top-belt">
                            <span>Wordpress</span>
                        </div>
                    
                        <div class="projekt_bottom-belt">
                            <h3 class="projekt_title">KKO (Association)</h3>
                            <div class="projekt_info">
                                <div class="projekt_info_categories">
                                    <span>#Wordpress</span>
                                    <span>#Vanilla JS</span>
                                    <span>#CSS Grid</span>
                                    <span>#Function-oriented</span>
                                </div>
                                <div class="projekt_info_rats">
                                    <span>1</span>
                                    <i class="fas fa-heart heart"></i>
                                </div>
                            </div>
                        </div>
                        <a class="projekt--cell_link" href="./post.html"></a>
                    </div>
                    <!--cell!-->

                    <!--cell!-->
                    <div class="projekt--cell slider100vw--item" style="background-image: url('./bluish/media/tymczasowy.jpg');">
                        <div class="projekt_top-belt">
                            <span>Wordpress</span>
                        </div>
                    
                        <div class="projekt_bottom-belt">
                            <h3 class="projekt_title">Fictional Institution</h3>
                            <div class="projekt_info">
                                <div class="projekt_info_categories">
                                    <span>Wordpress</span>
                                    <span>Front-end</span>
                                    <span>jQuery</span>
                                </div>
                                <div class="projekt_info_rats">
                                    <span>1</span>
                                    <i class="fas fa-heart heart"></i>
                                </div>
                            </div>
                        </div>
                        <a class="projekt--cell_link" href="./post.html"></a>
                    </div>
                    <!--cell!-->
        
                </div>

                <!--switcher-->
                <div class="slider100vw--switcher">
                
                    <div class="slideswitch-left">
                        <i class="fas fa-angle-double-left"></i>
                    </div>
                
                    <span class="left-into-left"></span>
                
                    <div class="slideswitch-timer">
                        <div id="slideswitch-timer">
                            <img id="slideswitch-clock" src="bluish/media/svg-animation/kompasXclock.svg" />
                            <img id="slideswitch-niddle" src="bluish/media/svg-animation/kompasXigla.svg" />
                        </div>
                    </div>
                
                    <span class="left-into-right"></span>
                
                    <div class="slideswitch-right">
                        <i class="fas fa-angle-double-right"></i>
                    </div>
                
                </div>
                <!--switcher-->

                <!--category-->
                <h3 class="slider100vw--slider-title">React</h3>
                <!--category-->
                <div class="slider100vw--slider">
                
                    <!--cell!-->
                    <div class="projekt--cell slider100vw--item" style="background-image: url('./bluish/media/tymczasowy.jpg');">
                        <div class="projekt_top-belt">
                            <span>React</span>
                        </div>
                    
                        <div class="projekt_bottom-belt">
                            <h3 class="projekt_title">SelfBoard</h3>
                            <div class="projekt_info">
                                <div class="projekt_info_categories">
                                    <span>#react</span>
                                    <span>#styled-components</span>
                                    <span>#local-storage</span>
                                </div>
                                <div class="projekt_info_rats">
                                    <span>1</span>
                                    <i class="fas fa-heart heart"></i>
                                </div>
                            </div>
                        </div>

                        <a class="projekt--cell_link" href="./post.html"></a>
                    </div>
                    <!--cell!-->
                
                   <!--cell!-->
                    <div class="projekt--cell slider100vw--item" style="background-image: url('./bluish/media/tymczasowy.jpg');">
                        <div class="projekt_top-belt">
                            <span>React</span>
                        </div>
                    
                        <div class="projekt_bottom-belt">
                            <h3 class="projekt_title">WhatsUpCity</h3>
                            <div class="projekt_info">
                                <div class="projekt_info_categories">
                                    <span>#redux</span>
                                    <span>#REST</span>
                                    <span>#styled-components</span>
                                    <span>#react-router</span>
                                    <span>#sparklines</span>
                                </div>
                                <div class="projekt_info_rats">
                                    <span>1</span>
                                    <i class="fas fa-heart heart"></i>
                                </div>
                            </div>
                        </div>

                        <a class="projekt--cell_link" href="./post.html"></a>
                    </div>
                    <!--cell!-->
                
                    <!--cell!-->
                    <div class="projekt--cell slider100vw--item" style="background-image: url('./bluish/media/tymczasowy.jpg');">
                        <div class="projekt_top-belt">
                            <span>React</span>
                        </div>
                    
                        <div class="projekt_bottom-belt">
                            <h3 class="projekt_title">YTClient</h3>
                            <div class="projekt_info">
                                <div class="projekt_info_categories">
                                    <span>#react</span>
                                    <span>#redux</span>
                                    <span>#REST</span>
                                    <span>#styled-components</span>
                                </div>
                                <div class="projekt_info_rats">
                                    <span>1</span>
                                    <i class="fas fa-heart heart"></i>
                                </div>
                            </div>
                        </div>

                        <a class="projekt--cell_link" href="./post.html"></a>
                    </div>
                    <!--cell!-->

                    <!--cell!-->
                    <div class="projekt--cell slider100vw--item" style="background-image: url('./bluish/media/tymczasowy.jpg');">
                        <div class="projekt_top-belt">
                            <span>React</span>
                        </div>
                    
                        <div class="projekt_bottom-belt">
                            <h3 class="projekt_title">theNewest</h3>
                            <div class="projekt_info">
                                <div class="projekt_info_categories">
                                    <span>#cooperation</span>
                                    <span>#react</span>
                                    <span>#redux</span>
                                    <span>#REST</span>
                                    
                                </div>
                                <div class="projekt_info_rats">
                                    <span>1</span>
                                    <i class="fas fa-heart heart"></i>
                                </div>
                            </div>
                        </div>

                        <a class="projekt--cell_link" href="./post.html"></a>
                    </div>
                    <!--cell!-->
                
                </div>
                <!--switcher-->
                <div class="slider100vw--switcher">
                
                    <div class="slideswitch-left">
                        <i class="fas fa-angle-double-left"></i>
                    </div>
                
                    <span class="left-into-left"></span>
                
                    <div class="slideswitch-timer">
                        <div id="slideswitch-timer">
                            <img id="slideswitch-clock" src="bluish/media/svg-animation/kompasXclock.svg" />
                            <img id="slideswitch-niddle" src="bluish/media/svg-animation/kompasXigla.svg" />
                        </div>
                    </div>
                
                    <span class="left-into-right"></span>
                
                    <div class="slideswitch-right">
                        <i class="fas fa-angle-double-right"></i>
                    </div>
                
                </div>
                <!--switcher-->

                <!--category-->
                <h3 class="slider100vw--slider-title">Static Pages</h3>
                <!--category-->
                <div class="slider100vw--slider">
                
                    <!--cell!-->
                    <div class="projekt--cell slider100vw--item" style="background-image: url('./bluish/media/tymczasowy.jpg');">
                        <div class="projekt_top-belt">
                            <span>Static Pages</span>
                        </div>
                
                        <div class="projekt_bottom-belt">
                            <h3 class="projekt_title">Beginner Personal Page</h3>
                            <div class="projekt_info">
                                <div class="projekt_info_categories">
                                    <span>#SCSS</span>
                                    <span>#rollup</span>
                                    <span>#html5</span>
                                    <span>#keyframes</span>
                                </div>
                                <div class="projekt_info_rats">
                                    <span>1</span>
                                    <i class="fas fa-heart heart"></i>
                                </div>
                            </div>
                        </div>

                        <a class="projekt--cell_link" href="./post.html"></a>
                    </div>
                    <!--cell!-->
                
                    <!--cell!-->
                    <div class="projekt--cell slider100vw--item" style="background-image: url('./bluish/media/tymczasowy.jpg');">
                        <div class="projekt_top-belt">
                            <span>Static Pages</span>
                        </div>
                
                        <div class="projekt_bottom-belt">
                            <h3 class="projekt_title">A Billion Dollar Man</h3>
                            <div class="projekt_info">
                                <div class="projekt_info_categories">
                                    <span>#cooperation</span>
                                    <span>#SCSS</span>
                                    <span>#jquery</span>
                                    <span>#rollup</span>
                                </div>
                                <div class="projekt_info_rats">
                                    <span>1</span>
                                    <i class="fas fa-heart heart"></i>
                                </div>
                            </div>
                        </div>

                        <a class="projekt--cell_link" href="./post.html"></a>
                    </div>
                    <!--cell!-->
                
                    <!--cell!-->
                    <div class="projekt--cell slider100vw--item" style="background-image: url('./bluish/media/tymczasowy.jpg');">
                        <div class="projekt_top-belt">
                            <span>Static Pages</span>
                        </div>
                
                        <div class="projekt_bottom-belt">
                            <h3 class="projekt_title">First Steps in Coding</h3>
                            <div class="projekt_info">
                                <div class="projekt_info_categories">
                                    <span>#SCSS</span>
                                    <span>#rollup</span>
                                    <span>#git</span>
                                </div>
                                <div class="projekt_info_rats">
                                    <span>1</span>
                                    <i class="fas fa-heart heart"></i>
                                </div>
                            </div>
                        </div>

                        <a class="projekt--cell_link" href="./post.html"></a>
                    </div>
                    <!--cell!-->
                
                    <!--cell!-->
                    <div class="projekt--cell slider100vw--item" style="background-image: url('./bluish/media/tymczasowy.jpg');">
                        <div class="projekt_top-belt">
                            <span>Static Pages</span>
                        </div>
                
                        <div class="projekt_bottom-belt">
                            <h3 class="projekt_title">Autopresentation</h3>
                            <div class="projekt_info">
                                <div class="projekt_info_categories">
                                    <span>#vanillaJS</span>
                                    <span>#keyframes</span>
                                    <span>#transitions</span>
                                    <span>#animations</span>
                                    <span>#fast-coding</span>
                                </div>
                                <div class="projekt_info_rats">
                                    <span>1</span>
                                    <i class="fas fa-heart heart"></i>
                                </div>
                            </div>
                        </div>

                        <a class="projekt--cell_link" href="./post.html"></a>
                    </div>
                    <!--cell!-->
                
                </div>
                <!--switcher-->
                <div class="slider100vw--switcher">
                
                    <div class="slideswitch-left">
                        <i class="fas fa-angle-double-left"></i>
                    </div>
                
                    <span class="left-into-left"></span>
                
                    <div class="slideswitch-timer">
                        <div id="slideswitch-timer">
                            <img id="slideswitch-clock" src="bluish/media/svg-animation/kompasXclock.svg" />
                            <img id="slideswitch-niddle" src="bluish/media/svg-animation/kompasXigla.svg" />
                        </div>
                    </div>
                
                    <span class="left-into-right"></span>
                
                    <div class="slideswitch-right">
                        <i class="fas fa-angle-double-right"></i>
                    </div>
                
                </div>
                <!--switcher-->


                <!--category-->
                <h3 class="slider100vw--slider-title">Cooperation</h3>
                <!--category-->
                <div class="slider100vw--slider">
                
                    <!--cell!-->
                    <div class="projekt--cell slider100vw--item" style="background-image: url('./bluish/media/tymczasowy.jpg');">
                        <div class="projekt_top-belt">
                            <span>Cooperation</span>
                        </div>
                
                        <div class="projekt_bottom-belt">
                            <h3 class="projekt_title">Hackathon2018</h3>
                            <div class="projekt_info">
                                <div class="projekt_info_categories">
                                    <span>#front-end</span>
                                    <span>#react</span>
                                    <span>#redux</span>
                                </div>
                                <div class="projekt_info_rats">
                                    <span>1</span>
                                    <i class="fas fa-heart heart"></i>
                                </div>
                            </div>
                        </div>

                        <a class="projekt--cell_link" href="./post.html"></a>
                    </div>
                    <!--cell!-->

                    <!--cell!-->
                    <div class="projekt--cell slider100vw--item" style="background-image: url('./bluish/media/tymczasowy.jpg');">
                        <div class="projekt_top-belt">
                            <span>Cooperation</span>
                        </div>
                
                        <div class="projekt_bottom-belt">
                            <h3 class="projekt_title">A Billion Dollar Man</h3>
                            <div class="projekt_info">
                                <div class="projekt_info_categories">
                                    <span>#cooperation</span>
                                    <span>#SCSS</span>
                                    <span>#jquery</span>
                                    <span>#rollup</span>
                                </div>
                                <div class="projekt_info_rats">
                                    <span>1</span>
                                    <i class="fas fa-heart heart"></i>
                                </div>
                            </div>
                        </div>

                        <a class="projekt--cell_link" href="./post.html"></a>
                    </div>
                    <!--cell!-->

                    <!--cell!-->
                    <div class="projekt--cell slider100vw--item" style="background-image: url('./bluish/media/tymczasowy.jpg');">
                        <div class="projekt_top-belt">
                            <span>Cooperation</span>
                        </div>
                    
                        <div class="projekt_bottom-belt">
                            <h3 class="projekt_title">theNewest</h3>
                            <div class="projekt_info">
                                <div class="projekt_info_categories">
                                    <span>#cooperation</span>
                                    <span>#react</span>
                                    <span>#redux</span>
                                    <span>#REST</span>
                                    
                                </div>
                                <div class="projekt_info_rats">
                                    <span>1</span>
                                    <i class="fas fa-heart heart"></i>
                                </div>
                            </div>
                        </div>

                        <a class="projekt--cell_link" href="./post.html"></a>
                    </div>
                    <!--cell!-->
                                
                </div>
                <!--switcher-->
                <div class="slider100vw--switcher">
                
                    <div class="slideswitch-left">
                        <i class="fas fa-angle-double-left"></i>
                    </div>
                
                    <span class="left-into-left"></span>
                
                    <div class="slideswitch-timer">
                        <div id="slideswitch-timer">
                            <img id="slideswitch-clock" src="bluish/media/svg-animation/kompasXclock.svg" />
                            <img id="slideswitch-niddle" src="bluish/media/svg-animation/kompasXigla.svg" />
                        </div>
                    </div>
                
                    <span class="left-into-right"></span>
                
                    <div class="slideswitch-right">
                        <i class="fas fa-angle-double-right"></i>
                    </div>
                
                </div>
                <!--switcher-->

                <!--category-->
                <h3 class="slider100vw--slider-title">Other</h3>
                <!--category-->
                <div class="slider100vw--slider">
                
                    <!--cell!-->
                    <div class="projekt--cell slider100vw--item" style="background-image: url('./bluish/media/tymczasowy.jpg');">
                        <div class="projekt_top-belt">
                            <span>Other</span>
                        </div>
                
                        <div class="projekt_bottom-belt">
                            <h3 class="projekt_title">Graphic&UX design</h3>
                            <div class="projekt_info">
                                <div class="projekt_info_categories">
                                    <span>#illustrator</span>
                                    <span>#photoshop</span>
                                    <span>#axure</span>
                                    <span>#adobdXD</span>
                                </div>
                                <div class="projekt_info_rats">
                                    <span>1</span>
                                    <i class="fas fa-heart heart"></i>
                                </div>
                            </div>
                        </div>

                        <a class="projekt--cell_link" href="./post.html"></a>
                    </div>
                    <!--cell!-->

                    <!--cell!-->
                    <div class="projekt--cell slider100vw--item" style="background-image: url('./bluish/media/tymczasowy.jpg');">
                        <div class="projekt_top-belt">
                            <span>Other</span>
                        </div>
                
                        <div class="projekt_bottom-belt">
                            <h3 class="projekt_title">Board games</h3>
                            <div class="projekt_info">
                                <div class="projekt_info_categories">
                                    <span>#almost-coding</span>
                                    <span>#graphic-design</span>
                                </div>
                                <div class="projekt_info_rats">
                                    <span>1</span>
                                    <i class="fas fa-heart heart"></i>
                                </div>
                            </div>
                        </div>

                        <a class="projekt--cell_link" href="./post.html"></a>
                    </div>
                    <!--cell!-->

                    <!--cell!-->
                    <div class="projekt--cell slider100vw--item" style="background-image: url('./bluish/media/tymczasowy.jpg');">
                        <div class="projekt_top-belt">
                            <span>Other</span>
                        </div>
                    
                        <div class="projekt_bottom-belt">
                            <h3 class="projekt_title">A Very First Thing in JS</h3>
                            <div class="projekt_info">
                                <div class="projekt_info_categories">
                        
                                    <span>#vanillaJS</span>
                                    <span>#rollup</span>
                                    <span>#ugly-but-working</span>
                                    
                                </div>
                                <div class="projekt_info_rats">
                                    <span>1</span>
                                    <i class="fas fa-heart heart"></i>
                                </div>
                            </div>
                        </div>

                        <a class="projekt--cell_link" href="./post.html"></a>
                    </div>
                    <!--cell!-->
                                
                </div>
                <!--switcher-->
                <div class="slider100vw--switcher">
                
                    <div class="slideswitch-left">
                        <i class="fas fa-angle-double-left"></i>
                    </div>
                
                    <span class="left-into-left"></span>
                
                    <div class="slideswitch-timer">
                        <div id="slideswitch-timer">
                            <img id="slideswitch-clock" src="bluish/media/svg-animation/kompasXclock.svg" />
                            <img id="slideswitch-niddle" src="bluish/media/svg-animation/kompasXigla.svg" />
                        </div>
                    </div>
                
                    <span class="left-into-right"></span>
                
                    <div class="slideswitch-right">
                        <i class="fas fa-angle-double-right"></i>
                    </div>
                
                </div>
                <!--switcher-->

            </div>
                
        </section>

        <section class="scrolling-stage" id="tools04">

            <h2 class="section-title tools04--title">I offer:</h2>

            <div class="slider25vw--wrapper">
                        <div class="slider25vw--slider">
                            <div class="slider25vw--item">
                                <!-- tool cell -->
                                <div class="tools--cell finished">
                                    <div class="tools_upper--positioner">
                                        <div class="tools_icons--positioner">
                                            <i class="fas fa-battery-full"></i>
                                            <img class="tools_icons-logo--container"/>
                                        </div>
                                        <span class="tools_name">React</span>
                                    </div>
                                    <div class="tools_lower--positioner">
                                        <span class="tools_button">check!</span>
                                    </div>
                                </div>
                                <!-- tool cell -->
                                <div class="tools--cell finished">
                                    <div class="tools_upper--positioner">
                                        <div class="tools_icons--positioner">
                                            <i class="fas fa-battery-full"></i>
                                            <img class="tools_icons-logo--container" />
                                        </div>
                                        <span class="tools_name">Redux</span>
                                    </div>
                                    <div class="tools_lower--positioner">
                                        <span class="tools_button">check!</span>
                                    </div>
                                </div>
                                <!-- tool cell -->
                                <div class="tools--cell un-finished">
                                    <div class="tools_upper--positioner">
                                        <div class="tools_icons--positioner">
                                            <i class="fas fa-battery-half"></i>
                                            <img class="tools_icons-logo--container" />
                                        </div>
                                        <span class="tools_name">nodeJS</span>
                                    </div>
                                    <div class="tools_lower--positioner">
                                        <span class="tools_button">check!</span>
                                    </div>
                                </div>
                                <!-- tool cell -->
                                <div class="tools--cell finished">
                                    <div class="tools_upper--positioner">
                                        <div class="tools_icons--positioner">
                                            <i class="fas fa-battery-full"></i>
                                            <img class="tools_icons-logo--container" />
                                        </div>
                                        <span class="tools_name">jQuery</span>
                                    </div>
                                    <div class="tools_lower--positioner">
                                        <span class="tools_button">check!</span>
                                    </div>
                                </div>
                            </div>

                            <div class="slider25vw--item">
                                <!-- tool cell -->
                                <div class="tools--cell finished">
                                    <div class="tools_upper--positioner">
                                        <div class="tools_icons--positioner">
                                            <i class="fas fa-battery-full"></i>
                                            <img class="tools_icons-logo--container" />
                                        </div>
                                        <span class="tools_name">Wordpress</span>
                                    </div>
                                    <div class="tools_lower--positioner">
                                        <span class="tools_button">check!</span>
                                    </div>
                                </div>
                                <!-- tool cell -->
                                <div class="tools--cell un-finished">
                                    <div class="tools_upper--positioner">
                                        <div class="tools_icons--positioner">
                                            <i class="fas fa-battery-half"></i>
                                            <img class="tools_icons-logo--container" />
                                        </div>
                                        <span class="tools_name">WP plugins</span>
                                    </div>
                                    <div class="tools_lower--positioner">
                                        <span class="tools_button">check!</span>
                                    </div>
                                </div>
                                <!-- tool cell -->
                                <div class="tools--cell un-finished">
                                    <div class="tools_upper--positioner">
                                        <div class="tools_icons--positioner">
                                            <i class="fas fa-battery-half"></i>
                                            <img class="tools_icons-logo--container" />
                                        </div>
                                        <span class="tools_name">12factor WP deployment</span>
                                    </div>
                                    <div class="tools_lower--positioner">
                                        <span class="tools_button">check!</span>
                                    </div>
                                </div>
                                <!-- tool cell -->
                                <div class="tools--cell finished">
                                    <div class="tools_upper--positioner">
                                        <div class="tools_icons--positioner">
                                            <i class="fas fa-battery-full"></i>
                                            <img class="tools_icons-logo--container" />
                                        </div>
                                        <span class="tools_name">XAMPP</span>
                                    </div>
                                    <div class="tools_lower--positioner">
                                        <span class="tools_button">check!</span>
                                    </div>
                                </div>
                            </div>

                            <div class="slider25vw--item">
                                <!-- tool cell -->
                                <div class="tools--cell finished">
                                    <div class="tools_upper--positioner">
                                        <div class="tools_icons--positioner">
                                            <i class="fas fa-battery-full"></i>
                                            <img class="tools_icons-logo--container" />
                                        </div>
                                        <span class="tools_name">GSAP animations</span>
                                    </div>
                                    <div class="tools_lower--positioner">
                                        <span class="tools_button">check!</span>
                                    </div>
                                </div>
                                <!-- tool cell -->
                                <div class="tools--cell finished">
                                    <div class="tools_upper--positioner">
                                        <div class="tools_icons--positioner">
                                            <i class="fas fa-battery-full"></i>
                                            <img class="tools_icons-logo--container" />
                                        </div>
                                        <span class="tools_name">SCSS</span>
                                    </div>
                                    <div class="tools_lower--positioner">
                                        <span class="tools_button">check!</span>
                                    </div>
                                </div>
                                <!-- tool cell -->
                                <div class="tools--cell finished">
                                    <div class="tools_upper--positioner">
                                        <div class="tools_icons--positioner">
                                            <i class="fas fa-battery-full"></i>
                                            <img class="tools_icons-logo--container" />
                                        </div>
                                        <span class="tools_name">CSS animations</span>
                                    </div>
                                    <div class="tools_lower--positioner">
                                        <span class="tools_button">check!</span>
                                    </div>
                                </div>
                                <!-- tool cell -->
                                <div class="tools--cell finished">
                                    <div class="tools_upper--positioner">
                                        <div class="tools_icons--positioner">
                                            <i class="fas fa-battery-full"></i>
                                            <img class="tools_icons-logo--container" />
                                        </div>
                                        <span class="tools_name">MaterialCSS</span>
                                    </div>
                                    <div class="tools_lower--positioner">
                                        <span class="tools_button">check!</span>
                                    </div>
                                </div>
                            </div>

                            <div class="slider25vw--item">
                                <!-- tool cell -->
                                <div class="tools--cell finished">
                                    <div class="tools_upper--positioner">
                                        <div class="tools_icons--positioner">
                                            <i class="fas fa-battery-full"></i>
                                            <img class="tools_icons-logo--container" />
                                        </div>
                                        <span class="tools_name">GIT</span>
                                    </div>
                                    <div class="tools_lower--positioner">
                                        <span class="tools_button">check!</span>
                                    </div>
                                </div>
                                <!-- tool cell -->
                                <div class="tools--cell finished">
                                    <div class="tools_upper--positioner">
                                        <div class="tools_icons--positioner">
                                            <i class="fas fa-battery-full"></i>
                                            <img class="tools_icons-logo--container" />
                                        </div>
                                        <span class="tools_name">Webpack</span>
                                    </div>
                                    <div class="tools_lower--positioner">
                                        <span class="tools_button">check!</span>
                                    </div>
                                </div>
                                <!-- tool cell -->
                                <div class="tools--cell finished">
                                    <div class="tools_upper--positioner">
                                        <div class="tools_icons--positioner">
                                            <i class="fas fa-battery-full"></i>
                                            <img class="tools_icons-logo--container" />
                                        </div>
                                        <span class="tools_name">Rollup</span>
                                    </div>
                                    <div class="tools_lower--positioner">
                                        <span class="tools_button">check!</span>
                                    </div>
                                </div>
                                <!-- tool cell -->
                                <div class="tools--cell finished">
                                    <div class="tools_upper--positioner">
                                        <div class="tools_icons--positioner">
                                            <i class="fas fa-battery-full"></i>
                                            <img class="tools_icons-logo--container" />
                                        </div>
                                        <span class="tools_name">NPM</span>
                                    </div>
                                    <div class="tools_lower--positioner">
                                        <span class="tools_button">check!</span>
                                    </div>
                                </div>
                            </div>

                            <div class="slider25vw--item">
                                <!-- tool cell -->
                                <div class="tools--cell finished">
                                    <div class="tools_upper--positioner">
                                        <div class="tools_icons--positioner">
                                            <i class="fas fa-battery-full"></i>
                                            <img class="tools_icons-logo--container" />
                                        </div>
                                        <span class="tools_name">Illustrator</span>
                                    </div>
                                    <div class="tools_lower--positioner">
                                        <span class="tools_button">check!</span>
                                    </div>
                                </div>
                                <!-- tool cell -->
                                <div class="tools--cell finished">
                                    <div class="tools_upper--positioner">
                                        <div class="tools_icons--positioner">
                                            <i class="fas fa-battery-full"></i>
                                            <img class="tools_icons-logo--container" />
                                        </div>
                                        <span class="tools_name">Photoshop</span>
                                    </div>
                                    <div class="tools_lower--positioner">
                                        <span class="tools_button">check!</span>
                                    </div>
                                </div>
                                <!-- tool cell -->
                                <div class="tools--cell finished">
                                    <div class="tools_upper--positioner">
                                        <div class="tools_icons--positioner">
                                            <i class="fas fa-battery-full"></i>
                                            <img class="tools_icons-logo--container" />
                                        </div>
                                        <span class="tools_name">Axure</span>
                                    </div>
                                    <div class="tools_lower--positioner">
                                        <span class="tools_button">check!</span>
                                    </div>
                                </div>
                                <!-- tool cell -->
                                <div class="tools--cell finished">
                                    <div class="tools_upper--positioner">
                                        <div class="tools_icons--positioner">
                                            <i class="fas fa-battery-full"></i>
                                            <img class="tools_icons-logo--container" />
                                        </div>
                                        <span class="tools_name">AdobeXD</span>
                                    </div>
                                    <div class="tools_lower--positioner">
                                        <span class="tools_button">check!</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!--switcher-->
                        <div class="slider25vw--switcher">
                        
                        </div>
                        <!--switcher-->

            </div>

            <section class="tools04_list--wrapper">
                <div class="tools04_list--button">
                    <i class="fas fa-angle-double-left"></i>
                    <span>back</span>
                </div>
                <h3 class="inner-title tools04_list--title">Tool: The Thing</h3>
                <ul class="tools04_list--container">

                    <a class="tools04-list--link" href="./post.html">
                        <li class="tools04_list--item">
                            <div class="tools04-project--positioner finished">
                                <i class="finished fas fa-battery-full"></i>
                                <h4 class="tools04-project_title">Related Project Name</h4>
                                <br/>
                                <span class="tools04-project_taglist">
                                    <span class="tools04-project_tagitem">#some-tag</span>
                                    <span class="tools04-project_tagitem">#other-tag</span>
                                </span>
                            </div>
                            <a class="tools04-list--link" href="./post.html">
                        </li>
                    </a>

                    <a class="tools04-list--link" href="./post.html">
                        <li class="tools04_list--item">
                            <div class="tools04-project--positioner finished">
                                <i class="finished fas fa-battery-full"></i>
                                <h4 class="tools04-project_title">Other project</h4>
                                <br />
                                <span class="tools04-project_taglist">
                                    <span class="tools04-project_tagitem">#some-tag</span>
                                    <span class="tools04-project_tagitem">#other-tag</span>
                                </span>
                            </div>
                        </li>
                    </a>

                    <a class="tools04-list--link" href="./post.html">
                        <li class="tools04_list--item">
                            <div class="tools04-project--positioner finished">
                                <i class="finished fas fa-battery-full"></i>
                                <h4 class="tools04-project_title">A Project of mine</h4>
                                <br />
                                <span class="tools04-project_taglist">
                                    <span class="tools04-project_tagitem">#other-tag</span>
                                    <span class="tools04-project_tagitem">#react</span>
                                    <span class="tools04-project_tagitem">#rollup</span>
                                </span>
                            </div>
                        </li>
                    </a>

                    <a class="tools04-list--link" href="./post.html">
                        <li class="tools04_list--item">
                            <div class="tools04-project--positioner">
                                <i class="fas fa-battery-half"></i>
                                <h4 class="tools04-project_title">InterestingThing</h4>
                                <br />
                                <span class="tools04-project_taglist">
                                    <span class="tools04-project_tagitem">#some-tag</span>
                                    <span class="tools04-project_tagitem">#react</span>
                                    <span class="tools04-project_tagitem">#webpack</span>
                                </span>
                            </div>
                        </li>
                    </a>

                    <a class="tools04-list--link" href="./post.html">
                        <li class="tools04_list--item">
                            <div class="tools04-project--positioner">
                                <i class="fas fa-battery-half"></i>
                                <h4 class="tools04-project_title">Unfinished Project</h4>
                                <br />
                                <span class="tools04-project_taglist">
                                    <span class="tools04-project_tagitem">#cooperation</span>
                                    <span class="tools04-project_tagitem">#react</span>
                                </span>
                            </div>
                        </li>
                    </a>

                    <a class="tools04-list--link" href="./post.html">
                        <li class="tools04_list--item">
                            <div class="tools04-project--positioner finished">
                                <i class="finished fas fa-battery-full"></i>
                                <h4 class="tools04-project_title">Name of This</h4>
                                <br />
                                <span class="tools04-project_taglist">
                                    <span class="tools04-project_tagitem">#react</span>
                                </span>
                            </div>
                        </li>
                    </a>
                </ul>
            </section>

        </section>

        <section class="scrolling-stage" id="searchfor05">

            <div class="searchfor05--animation-wrapper">
                <h2 class="section-title searchfor05--title">I am looking for</h2>
                <ul class="searchfor05_list--container">
                    <li class="searchfor05_list--item">
                        <article class="searchfor05_post--positioner">
                            <h3 class="inner-title searchfor05_article--title">Hirement</h3>
                            <ul class="searchfor05_article--innerlist">
                                <li class="inner-title searchfor05_article--inneritem">Employment</li>
                                <li class="inner-title searchfor05_article--inneritem">Other types of contract</li>
                                <li class="inner-title searchfor05_article--inneritem">Paid internship (+ posibility of long term cooperation)</li>
                                <li class="inner-title searchfor05_article--inneritem">I want to stary longer</li>
                            </ul>
                        </article>
                    </li>
                    <li class="searchfor05_list--item">
                        <article class="searchfor05_post--positioner">
                            <h3 class="inner-title searchfor05_article--title">Financial expectations</h3>
                            <ul class="searchfor05_article--innerlist">
                                <li class="inner-title searchfor05_article--inneritem">5000 netto</li>
                                <li class="inner-title searchfor05_article--inneritem">Salary grows with experience and utility</li>
                                <li class="inner-title searchfor05_article--inneritem">I want to stay longer</li>
                            </ul>
                        </article>
                    </li>
                    <li class="searchfor05_list--item">
                        <article class="searchfor05_post--positioner">
                            <h3 class="inner-title searchfor05_article--title">Office I fit the best</h3>
                            <ul class="searchfor05_article--innerlist">
                                <li class="inner-title searchfor05_article--inneritem">Junior Front-End Developer</li>
                            </ul>
                        </article>
                    </li>
                    <li class="searchfor05_list--item">
                        <article class="searchfor05_post--positioner">
                            <h3 class="inner-title searchfor05_article--title">I want to develop myself as</h3>
                            <ul class="searchfor05_article--innerlist">
                                <li class="inner-title searchfor05_article--inneritem">Junior Front-End Developer</li>
                                <li class="inner-title searchfor05_article--inneritem">Wordpress Developer</li>
                                <li class="inner-title searchfor05_article--inneritem">React Developer</li>
                                <li class="inner-title searchfor05_article--inneritem">Full Stack Developer with nodeJS</li>
                                <li class="inner-title searchfor05_article--inneritem">HTML/CSS Developer with UX knowledge</li>
                            </ul>
                        </article>
                    </li>
                    <li class="searchfor05_list--item">
                        <article class="searchfor05_post--positioner">
                            <h3 class="inner-title searchfor05_article--title">Where</h3>
                            <ul class="searchfor05_article--innerlist">
                                <li class="inner-title searchfor05_article--inneritem">Wroclaw, Poland</li>
                                <li class="inner-title searchfor05_article--inneritem">Remote (+ time-to-time contact with experenced colleagues)</li>
                                
                            </ul>
                        </article>
                    </li>
                </ul>
            </div>
        </section>

        <section class="scrolling-stage" id="questions06">

            <div class="questions--animation-wrapper">
                <h2 class="section-title questions06--title">Quick Interview</h2>
                <p class="excerpt questions06_excerpt">
                    Some technical questions usually are the same at most of interviews.
                    You can check the list below for questions You have planed to ask me,
                    and get Your knowledge about me even before interview.
                </p>
                <ul class="questions06_list">
                    <li class="questions06_list--item">

                        <article class="question--wrapper">
                            <header class="question--head">
                                <h3 class="inner-title question--title">Example question: difference between 'NULL' and 'UNDEFINED' vars</h3>
                                <i class="fas fa-home"></i>
                            </header>
                            <div class="question_answer--wrapper">
                                <p class="paragraph">
                                    UNDEFINED means that You have referred to variable that does not exist.
                                    NULL means that You referred to variable with value of NULL. In JavaScript,
                                    NULL is a special, falsy data type, used when you need to keep some
                                    defined variable without any "meaningfull" assignment. Important thing is 
                                    that You can define a variable without assigning any value, and this is not 
                                    the same as defining NULL. The last one is a valid, assigned value.
                                </p>
                                <p class="paragraph">
                                    <img src="./bluish/media/kompas.svg" alt=""/>
                                    Here is some fine picture without any meaning. All this article is just a placeholder.
                                </p>
                                <p class="paragraph">
                                    In practice NULL usually means that You operate on a valid, falsy value that You
                                    made earlier for some purpose, and UNDEFINED usually means that something went wrong 
                                    and You try to use something that does not exist.
                                </p>
                            </div>
                        </article>

                    </li>

                    <li class="questions06_list--item">
                    
                        <article class="question--wrapper">
                            <header class="question--head">
                                <h3 class="inner-title question--title">Example question: difference between 'NULL' and 'UNDEFINED' vars</h3>
                                <i class="fas fa-home"></i>
                            </header>
                            <div class="question_answer--wrapper">
                                <p class="paragraph">
                                    UNDEFINED means that You have referred to variable that does not exist.
                                    NULL means that You referred to variable with value of NULL. In JavaScript,
                                    NULL is a special, falsy data type, used when you need to keep some
                                    defined variable without any "meaningfull" assignment. Important thing is 
                                    that You can define a variable without assigning any value, and this is not 
                                    the same as defining NULL. The last one is a valid, assigned value.
                                </p>
                                <p class="paragraph">
                                    <img src="./bluish/media/kompas.svg" alt=""/>
                                    Here is some fine picture without any meaning. All this article is just a placeholder.
                                </p>
                                <p class="paragraph">
                                    In practice NULL usually means that You operate on a valid, falsy value that You
                                    made earlier for some purpose, and UNDEFINED usually means that something went wrong 
                                    and You try to use something that does not exist.
                                </p>
                            </div>
                        </article>
                    
                    </li>

                    <li class="questions06_list--item">
                    
                        <article class="question--wrapper">
                            <header class="question--head">
                                <h3 class="inner-title question--title">Example question: difference between 'NULL' and 'UNDEFINED' vars</h3>
                                <i class="fas fa-home"></i>
                            </header>
                            <div class="question_answer--wrapper">
                                <p class="paragraph">
                                    UNDEFINED means that You have referred to variable that does not exist.
                                    NULL means that You referred to variable with value of NULL. In JavaScript,
                                    NULL is a special, falsy data type, used when you need to keep some
                                    defined variable without any "meaningfull" assignment. Important thing is 
                                    that You can define a variable without assigning any value, and this is not 
                                    the same as defining NULL. The last one is a valid, assigned value.
                                </p>
                                <p class="paragraph">
                                    <img src="./bluish/media/kompas.svg" alt=""/>
                                    Here is some fine picture without any meaning. All this article is just a placeholder.
                                </p>
                                <p class="paragraph">
                                    In practice NULL usually means that You operate on a valid, falsy value that You
                                    made earlier for some purpose, and UNDEFINED usually means that something went wrong 
                                    and You try to use something that does not exist.
                                </p>
                            </div>
                        </article>
                    
                    </li>

                    <li class="questions06_list--item">
                    
                        <article class="question--wrapper">
                            <header class="question--head">
                                <h3 class="inner-title question--title">Example question: difference between 'NULL' and 'UNDEFINED' vars</h3>
                                <i class="fas fa-home"></i>
                            </header>
                            <div class="question_answer--wrapper">
                                <p class="paragraph">
                                    UNDEFINED means that You have referred to variable that does not exist.
                                    NULL means that You referred to variable with value of NULL. In JavaScript,
                                    NULL is a special, falsy data type, used when you need to keep some
                                    defined variable without any "meaningfull" assignment. Important thing is 
                                    that You can define a variable without assigning any value, and this is not 
                                    the same as defining NULL. The last one is a valid, assigned value.
                                </p>
                                <p class="paragraph">
                                    <img src="./bluish/media/kompas.svg" alt=""/>
                                    Here is some fine picture without any meaning. All this article is just a placeholder.
                                </p>
                                <p class="paragraph">
                                    In practice NULL usually means that You operate on a valid, falsy value that You
                                    made earlier for some purpose, and UNDEFINED usually means that something went wrong 
                                    and You try to use something that does not exist.
                                </p>
                            </div>
                        </article>
                    
                    </li>

                    <li class="questions06_list--item">
                    
                        <article class="question--wrapper">
                            <header class="question--head">
                                <h3 class="inner-title question--title">Example question: difference between 'NULL' and 'UNDEFINED' vars</h3>
                                <i class="fas fa-home"></i>
                            </header>
                            <div class="question_answer--wrapper">
                                <p class="paragraph">
                                    UNDEFINED means that You have referred to variable that does not exist.
                                    NULL means that You referred to variable with value of NULL. In JavaScript,
                                    NULL is a special, falsy data type, used when you need to keep some
                                    defined variable without any "meaningfull" assignment. Important thing is 
                                    that You can define a variable without assigning any value, and this is not 
                                    the same as defining NULL. The last one is a valid, assigned value.
                                </p>
                                <p class="paragraph">
                                    <img src="./bluish/media/kompas.svg" alt=""/>
                                    Here is some fine picture without any meaning. All this article is just a placeholder.
                                </p>
                                <p class="paragraph">
                                    In practice NULL usually means that You operate on a valid, falsy value that You
                                    made earlier for some purpose, and UNDEFINED usually means that something went wrong 
                                    and You try to use something that does not exist.
                                </p>
                            </div>
                        </article>
                    
                    </li>

                </ul>
            </div>
        </section>

        <section class="scrolling-stage" id="contact07">

            <h2 class="section-title contact07-title">Write to me</h2>
            <div id="contact07_contact--wrapper">
                <div class="contact07_contact--positioner">
                    <div class="contact07_contact--header">
                        <h3 class="inner-title contact07_contact--title">Write to me</h3>
                        <span class="contact07_contact--closer"><i class="fas fa-times"></i></span>
                    </div>
                    <div class="contact07_contact--container">
                        <div id="plugin-form">
                        <!-- here goes plugin form -->
                            <input placeholder="Your e-mail" />
                            <input placeholder="Your name or nick" />
                            <textarea>How can I help?</textarea>
                            <div class="button">Send</div>
                        </div>
                    </div>
                </div>
                <div style="color: white" class="contact07_contact--switcher">
                    <i class="far fa-comments"></i>
                </div>
            </div>
        </section>

        <section class="scrolling-stage" id="aboutme08">

            <h2 class="section-title aboutme08-title">More about me</h2>
            <p class="excerpt aboutme08_excerpt">
                How graphic designer became a front-end,
                what interests me about all that coding,
                what i try to reach and why this
                section is displayed with
                this annoying animations.
                A story.
            </p>

            <ul class="aboutme08-list--container">
                
                <li class="aboutme08-list--item">

                    <article class="aboutme08-list_article">

                        <header class="aboutme08-list_article_head">
                            <div class="aboutme08-list_article_head_icon"></div>
                            <h3 class="aboutme08-list_article_head_title">I was a student once...</h3>
                            <div
                            class="aboutme08-list_article_head_title-anim
                            sans-inner-title">
                                
                            
                            </div>
                        </header>
        
                        <main class="aboutme08-list_article_body">
                            <p class="paragraph aboutme08-list_article_body--item">
                                At University of Wroclaw, Communication Design faculty. With means,
                                I studied design. How to do: UX, website, graphics...
                            </p>
                            <p class="paragraph aboutme08-list_article_body--item">
                                I used my graphic designer stack to do board games.
                                But design is how things WORK, not how them LOOK, so 
                                where it came to Master's Thesis...
                            </p>
                        </main>
        
                        <div class="aboutme08-list_article_hline--container">
                            <div class="aboutme08-list_article_hline--item"></div>
                        </div>

                    </article>

                </li>

                <li class="aboutme08-list--item">

                    <article class="aboutme08-list_article">
    
                        <header class="aboutme08-list_article_head">
                            <div class="aboutme08-list_article_head_icon"></div>
                            <h3 class="aboutme08-list_article_head_title">...and I was good at it.</h3>
                            <div
                                class="aboutme08-list_article_head_title-anim
                                sans-inner-title">Title</div>
                        </header>
            
                        <main class="aboutme08-list_article_body">
                            <p class="paragraph aboutme08-list_article_body--item">
                                ...i realized that 'game' in ancient times
                                was 'working logic' more than 'painted stuff'. 
                                So I read intensively about Egyptians, Chinese,
                                Babylonionas and all that long-beard philosopers
                                we know from Hollywod...
                            </p>
                            <p class="paragraph aboutme08-list_article_body--item">
                                And I turned myself to 'pseudo-code of games' more 
                                than their 'visual apearance'. My Master's Thesis was 
                                nominated to 'Thesis of the Year' prize in 2017. I was
                                asked to publish it to the academic world.
                            </p>
                        </main>
            
                        <div class="aboutme08-list_article_hline--container">
                            <div class="aboutme08-list_article_hline--item"></div>
                        </div>
    
                    </article>
    
                </li>

                <li class="aboutme08-list--item">

                        <article class="aboutme08-list_article">
    
                            <header class="aboutme08-list_article_head">
                                <div class="aboutme08-list_article_head_icon"></div>
                                <h3 class="aboutme08-list_article_head_title">Design?</h3>
                                <div
                                class="aboutme08-list_article_head_title-anim
                                sans-inner-title">Title</div>
                            </header>
            
                            <main class="aboutme08-list_article_body">
                                <p class="paragraph aboutme08-list_article_body--item">
                                    After studies I was graphic designer.
                                    But you cannot forget about code when You 
                                    have saw it once. 
                                </p>
                                <p class="paragraph aboutme08-list_article_body--item">
                                    So i started to develop myself as UX designer.
                                    I thought: 'UX is the domain, where graphic meets
                                    coding'.
                                </p>
                            </main>
            
                            <div class="aboutme08-list_article_hline--container">
                                <div class="aboutme08-list_article_hline--item"></div>
                            </div>
    
                        </article>
    
                </li>
    
                <li class="aboutme08-list--item">
    
                        <article class="aboutme08-list_article">
        
                            <header class="aboutme08-list_article_head">
                                <div class="aboutme08-list_article_head_icon"></div>
                                <h3 class="aboutme08-list_article_head_title">UX stuff</h3>
                                <div
                                    class="aboutme08-list_article_head_title-anim
                                    sans-inner-title">Title</div>
                            </header>
                
                            <main class="aboutme08-list_article_body">
                                <p class="paragraph aboutme08-list_article_body--item">
                                    I learned Axure, Adobe XD. But that was to little. 
                                </p>
                                <p class="paragraph aboutme08-list_article_body--item">
                                    Making prototypes is not enough. 
                                </p>
                            </main>
                
                            <div class="aboutme08-list_article_hline--container">
                                <div class="aboutme08-list_article_hline--item"></div>
                            </div>
        
                        </article>
        
                </li>

                
                <li class="aboutme08-list--item">
    
                        <article class="aboutme08-list_article">
        
                            <header class="aboutme08-list_article_head">
                                <div class="aboutme08-list_article_head_icon"></div>
                                <h3 class="aboutme08-list_article_head_title">Now I have heavy goal.</h3>
                                <div
                                    class="aboutme08-list_article_head_title-anim
                                    sans-inner-title">Title</div>
                            </header>
                
                            <main class="aboutme08-list_article_body">
                                <p class="paragraph aboutme08-list_article_body--item">
                                    I want do UNDERSTAND MORE.
                                    I want to shape the things that works.
                                </p>
                                <p class="paragraph aboutme08-list_article_body--item">
                                    I am a self-taught Front-End Developer determined 
                                    to stay in the tech
                                    industry. While working with graphic and UX design
                                    I came across CSS and HTML.
                                    I found web technologies extremely
                                    fascinating because they shape the world. And I want 
                                    to understand the process or even more – participate in it. I am
                                    learning JavaScript and other different tools on my own. 
                                    I am looking for job or an internship to develop my skills under the
                                    guidance of a specialist.
                                </p>
                            </main>
                
                            <div class="aboutme08-list_article_hline--container">
                                <div class="aboutme08-list_article_hline--item"></div>
                            </div>
        
                        </article>
        
                </li>

            </ul>

        </section>

    </main>

    <?php get_footer();?>
