(function ($) {
    "use strict";

    console.clear();
    gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, CSSRulePlugin, ScrollToPlugin, MorphSVGPlugin, CustomEase, InertiaPlugin);
    gsap.config({ nullTargetWarn: false });
    
    
    var pageSet,
        pageCursor,
        siteLoader,
        headerStick,
        smoothScroll,
        siteHeader,
        locoScroll,
        pageLayout,
        headerLayout,
        footerLayout,
        menuLayout,
        menuStyle;

    /** Page Settings **/
    function pageSettings() {

        pageSet = $('body');
        pageCursor = pageSet.data('cursor');
        siteLoader = pageSet.data('page-loader');
        headerStick = pageSet.data('header-sticky');
        smoothScroll = pageSet.data('smoothScroll');
        menuStyle = pageSet.data('menu-style');
        pageLayout = pageSet.data('page-layout');
        headerLayout = pageSet.data('header-layout');
        menuLayout = pageSet.data('menu-layout');
        footerLayout = pageSet.data('footer-layout');

        pageSet.addClass(pageLayout)

        $('.site-footer').addClass(footerLayout);

    }
    pageSettings()
    /** Page Settings **/

    var keys = {
        37: 1,
        38: 1,
        39: 1,
        40: 1
    };

    function preventDefault(e) {
        e.preventDefault();
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    // modern Chrome requires { passive: false } when adding event
    var supportsPassive = false;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function () {
                supportsPassive = true;
            }
        }));
    } catch (e) {}

    var wheelOpt = supportsPassive ? {
        passive: false
    } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    // call this to Disable
    function disableScroll() {
        window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
        window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    // call this to Enable
    function enableScroll() {
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
        window.removeEventListener('touchmove', preventDefault, wheelOpt);
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }


    /** Alioth Scroll **/
    //    function aliothScroll() {
    //
    //        if (smoothScroll == true) {
    //
    //            pageSet.wrapInner('<div class="smooth-scroll"></div>')
    //
    //            $('#mouseCursor').insertBefore('.smooth-scroll');
    //
    //
    //            ScrollTrigger.defaults({
    //                scroller: '.smooth-scroll'
    //            });
    //
    //            locoScroll = new LocomotiveScroll({
    //                el: document.querySelector(".smooth-scroll"),
    //                smooth: true,
    //
    //                // for tablet smooth
    //                tablet: {
    //                    smooth: true
    //                },
    //
    //                // for mobile
    //                smartphone: {
    //                    smooth: true
    //                }
    //            });
    //
    //            locoScroll.on("scroll", ScrollTrigger.update);
    //
    //            ScrollTrigger.scrollerProxy(".smooth-scroll", {
    //                scrollTop(value) {
    //                    return arguments.length ?
    //                        locoScroll.scrollTo(value, 0, 0) :
    //                        locoScroll.scroll.instance.scroll.y;
    //                },
    //                getBoundingClientRect() {
    //                    return {
    //                        top: 0,
    //                        left: 0,
    //                        width: window.innerWidth,
    //                        height: window.innerHeight
    //                    };
    //                },
    //                pinType: document.querySelector(".smooth-scroll").style.transform ?
    //                    "transform" :
    //                    "fixed"
    //
    //
    //            });
    //
    //
    //
    //            ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    //
    //            ScrollTrigger.refresh();
    //
    //
    //
    //
    //        }
    //
    //
    //
    //    }

    /** Alioth Scroll **/

    var loader,
        loaderOv,
        loadAn;


    function pageLoader() {

        loader = $('.alioth-page-loader');

        if (siteLoader == true) {


            $('.apl-count').wrap('<div class="apl-wrapper"></div>');

            var loaderLayout = loader.data('layout');

            loader.addClass(loaderLayout)


            const nums1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1],
                nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

            let num1Text = '';
            let num2Text = '';

            for (let i = 0; i < nums1.length; i++) {
                num1Text += '<span>' + nums1[i] + '</span>';
            }

            for (let i = 0; i < nums2.length; i++) {
                num2Text += '<span>' + nums2[i] + '</span>';
            }

            $('.apl-count').append('<div class="apl-num apl-num-1"></div><div class="apl-num apl-num-2"></div><div class="apl-num apl-num-3"></div>')

            $('.apl-num-1').html(num1Text);
            $('.apl-num-2').html(num2Text);
            $('.apl-num-3').html('<span>%</span><span>0</span>');

            $('.apl-num').wrapInner('<div class="apl-num-wrapper"></div>')


            var aplCount = loader.find('.apl-count'),
                num1wrap = aplCount.find('.apl-num-1 .apl-num-wrapper'),
                num2wrap = aplCount.find('.apl-num-2 .apl-num-wrapper'),
                num3wrap = aplCount.find('.apl-num-3 .apl-num-wrapper'),

                duration = loader.data('duration');


            loadAn = gsap.timeline({
                yoyo: true,
                id: 'pageLoader',
                once: true,
                onStart: function () {
                    $('body').addClass('loading');

                },

            });

            loadAn.to(num1wrap, duration, {
                y: '-91%',
                ease: 'power2.inOut',
            }, .25)

            loadAn.to(num2wrap, duration, {
                y: '-95.3%',
                ease: 'power2.inOut',
            }, .25)

            loadAn.to(num3wrap, 1.5, {
                y: '0%',
                ease: 'power2.Out',
            }, .5)

            loadAn.to('.site-logo', 1, {
                y: '0%',
                ease: 'power2.out',
            }, 2)


            if (siteHeader.hasClass('classic_menu')) {

                gsap.set('.main-menu > li', {
                    overflow: 'hidden'
                })

                loadAn.fromTo('.main-menu > li > a', 1, {
                    y: '100%'
                }, {
                    y: '0%',
                    stagger: .1,
                    ease: 'power2.out',
                    onComplete: function () {
                        gsap.set('.main-menu > li', {
                            clearProps: 'all'
                        })

                    }
                }, 3)

            } else {
                loadAn.to('.toggle-line', 1, {
                    width: 50,
                    ease: 'power2.out',
                    stagger: .3
                }, 3)

            }

            loadAn.to('.header-widget', 1.5, {
                x: 0,
                opacity: 1,
                ease: 'power2.out',
            }, 4)

            loadAn.to(num3wrap, 1, {
                y: '-50%',
                ease: 'power2.Out',
            }, duration - .6)

            //  Loader Out

            loadAn.to('.apl-num-wrapper', .6, {
                y: '-100%',
                ease: 'power2.in',
                stagger: .1,
            }, duration + .6)



        } else {

            gsap.set('.site-logo', {
                y: '0%',
            })

            gsap.set('.toggle-line', {
                width: 50,
            })

            gsap.set('.header-widget', {
                x: 0,
                opacity: 1,
            })

            loader.hide();


        }


    }



    /** Mouse Cursor **/
    function mouseCursor() {

        if (pageCursor == true) {

            let mouseCursor = $('#mouseCursor'),
                circle = $('#cursor'),
                dot = $('#dot'),
                cursorActive;

            gsap.set(mouseCursor, {
                xPercent: -50,
                yPercent: -50
            });

            let ball = mouseCursor
            let pos = {
                x: window.innerWidth / 2,
                y: window.innerHeight / 2
            };
            let mouse = {
                x: pos.x,
                y: pos.y
            };
            let speed = 0.1;

            cursorActive = true;

            let xSet = gsap.quickSetter(ball, "x", "px", "force3d");
            let ySet = gsap.quickSetter(ball, "y", "px", "force3d");

            window.addEventListener("mousemove", e => {
                mouse.x = e.x;
                mouse.y = e.y;
            });


            gsap.ticker.add(() => {

                if (cursorActive) {
                    let dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

                    pos.x += (mouse.x - pos.x) * dt;
                    pos.y += (mouse.y - pos.y) * dt;
                    xSet(pos.x);
                    ySet(pos.y);
                }

            });

            function cursorHovers() {

                var darkCircle = mouseCursor.data('dark-circle'),
                    darkDot = mouseCursor.data('dark-dot'),
                    lightCircle = mouseCursor.data('light-circle'),
                    lightDot = mouseCursor.data('light-dot'),
                    curBg,
                    iconColor;

                if ($('body').hasClass('dark')) {

                    gsap.set(cursor, {
                        borderColor: lightCircle
                    })

                    gsap.set(dot, {
                        background: lightDot
                    })

                    curBg = lightCircle;
                    iconColor = lightDot;

                } else {
                    try {
                        gsap.set(cursor, {
                            borderColor: darkCircle
                        })
    
                        gsap.set(dot, {
                            background: darkDot
                        })
    
                        curBg = darkCircle;
                        iconColor = darkDot;
                    } catch (error) {
                        
                    }
                    

                }


                $('.section').on('mouseenter', function () {

                    let $this = $(this),
                        color = $this.css('background-color'),
                        hsl = gsap.utils.splitColor(color, true),
                        lightness = hsl[hsl.length - 1];

                    if ((lightness < 50) && (lightness != 0)) {

                        gsap.to(cursor, {
                            borderColor: lightCircle
                        })

                        gsap.to(dot, {
                            background: lightDot
                        })



                    } else if ((lightness > 50) && (lightness != 0)) {

                        gsap.to(cursor, {
                            borderColor: darkCircle
                        })

                        gsap.to(dot, {
                            background: darkDot
                        })



                    }
                })

                $('.section').on('mouseleave', function () {

                    if ($('body').hasClass('dark')) {

                        gsap.to(cursor, {
                            borderColor: lightCircle
                        })

                        gsap.to(dot, {
                            background: lightDot
                        })

                    } else {

                        gsap.to(cursor, {
                            borderColor: darkCircle
                        })

                        gsap.to(dot, {
                            background: darkDot
                        })

                    }

                })



                var defaultHovers = $('a, .service, button')

                defaultHovers.on('mouseenter', function (e) {

                    gsap.to(mouseCursor, {
                        width: 100,
                        height: 100
                    })

                    gsap.to(cursor, {
                        backgroundColor: curBg,
                        borderWidth: 0
                    })

                })

                defaultHovers.on('mouseleave', function (e) {

                    gsap.to(mouseCursor, {
                        width: 50,
                        height: 50
                    })

                    gsap.to(cursor, {
                        backgroundColor: 'transparent',
                        borderWidth: 2
                    })

                })


                var projectHovers = $('.ar-work, .fw-project, .cs-title, .sl-project, .wall-project, .alioth-single-project, .aw-project');

                projectHovers.on('mouseenter', function (e) {

                    gsap.to(mouseCursor, {
                        width: 120,
                        height: 120
                    })

                    gsap.to(cursor, {
                        backgroundColor: curBg,
                        borderWidth: 0
                    })

                })

                projectHovers.on('mouseleave', function (e) {



                    gsap.to(mouseCursor, {
                        width: 50,
                        height: 50
                    })

                    gsap.to(cursor, {
                        backgroundColor: 'transparent',
                        borderWidth: 2
                    })

                })

                var borderHovers = $('.menu-toggle, .fs-prev, .fs-next, .ss1-dots, .ss2-dot, .ss2-prev, .ss2-next, .ss1-prev, .ss1-next, .a-plus-button, .scroll-notice, .a-test-next, .a-test-prev, .cart-button, .cpq-reduce, .cpq-increase, .swiper-pagination-bullet');

                borderHovers.on('mouseenter', function (e) {

                    gsap.to(mouseCursor, {
                        width: 100,
                        height: 100
                    })

                    gsap.to(dot, {
                        opacity: 0
                    })

                })

                borderHovers.on('mouseleave', function (e) {

                    gsap.to(mouseCursor, {
                        width: 50,
                        height: 50
                    })
                    gsap.to(dot, {
                        opacity: 1
                    })

                })

                var dotHovers = $('ul.main-menu a, .a-button, .a-client, .fs-button, .alioth-latest-posts .post, .field-wrap');

                dotHovers.on('mouseenter', function (e) {

                    gsap.to(mouseCursor, {
                        width: 100,
                        height: 100
                    })

                    gsap.to(cursor, {
                        backgroundColor: curBg,
                        borderWidth: 0
                    })

                    gsap.to(dot, {
                        opacity: 0
                    })
                })

                dotHovers.on('mouseleave', function (e) {
                    gsap.to(mouseCursor, {
                        width: 50,
                        height: 50
                    })

                    gsap.to(cursor, {
                        backgroundColor: 'transparent',
                        borderWidth: 2
                    })

                    gsap.to(dot, {
                        opacity: 1
                    })
                })


                var imageHovers = $('.single-image.lightbox');

                imageHovers.on('mouseenter', function (e) {

                    mouseCursor.append('<i id="cursorIcon" class="icofont-search"></i>')

                    gsap.set('#cursorIcon', {
                        color: iconColor,
                        fontSize: 25
                    })

                    gsap.to('#cursorIcon', {
                        scale: 1
                    })

                    gsap.to(mouseCursor, {
                        width: 100,
                        height: 100
                    })

                    gsap.to(dot, {
                        opacity: 0
                    })

                })

                imageHovers.on('mouseleave', function (e) {

                    gsap.to('#cursorIcon', {
                        scale: 0,
                        onComplete: function () {
                            $('#cursorIcon').remove();
                        }
                    })

                    gsap.to(mouseCursor, {
                        width: 50,
                        height: 50
                    })

                    gsap.to(dot, {
                        opacity: 1
                    })

                })



            }

            cursorHovers();

            let cursorLoading;

            barba.hooks.before((data) => {

                cursorLoading = gsap.timeline({
                    overwrite: true
                });

                cursorLoading.to(mouseCursor, .3, {
                    width: 50,
                    height: 50,
                }, 0)

                cursorLoading.to(cursor, .3, {
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                }, 0)

                cursorLoading.to(dot, .3, {
                    opacity: 1,
                    x: '0%',
                    y: '0%',
                    top: '0%',
                    left: '0%'
                }, 0)

                cursorLoading.to(dot, .3, {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    top: 0,
                    left: 0
                }, 0)

                cursorLoading.to(mouseCursor, 1, {
                    rotate: 360,
                    repeat: -1,
                    ease: 'power2.inOut'
                }, 0)


            });

            barba.hooks.after((data) => {

                let cursorLoaded = gsap.timeline({
                    onStart: function () {


                    },
                    onComplete: function () {
                        gsap.set(mouseCursor, {
                            rotate: 0,
                        })

                        cursorHovers();



                    }
                });

                cursorLoading.pause();

                cursorLoaded.to(dot, .8, {
                    top: '50%',
                    left: '50%',
                    ease: 'power2.inOut'
                }, .4)

            });




        } else {

            $('#mouseCursor').hide();
        }


    }

    /** Mouse Cursor **/


    /** Site Header **/

    function siteHeaderSet() {

        siteHeader = $('.site-header');

        gsap.set(siteHeader, {
            clearProps: 'all'
        })

        var siteNav = $('.site-navigation'),
            headerHeight = siteHeader.outerHeight(),
            siteContent = $('#page'),
            headerWrapper = $('.header-wrapper');

        let mobileQuery = window.matchMedia('(max-width: 900px)');
        // Check if the media query is true
        if (mobileQuery.matches) {

            siteHeader.addClass('fullscreen_menu');
            siteNav.addClass('fullscreen')

        } else {

            if ((menuStyle === 'classic') || (menuStyle == null)) {

                siteHeader.addClass('classic_menu')
                siteNav.addClass('classic')

            } else if (menuStyle === 'overlay') {

                siteHeader.addClass('fullscreen_menu');
                siteNav.addClass('fullscreen')
            }

        }

        siteHeader.addClass(headerLayout)


        if ((headerStick == true) || (headerStick == null)) {

            siteHeader.addClass('sticky_header')

        } else if (headerStick === "always") {

            siteHeader.addClass('sticky_header always_stick')
        }


        if (siteHeader.hasClass('sticky_header')) {

            var showcaseScroll = ScrollTrigger.getById('showcaseScroll'),
                stickyStart = 500,
                stickyBg = '#fff';

            if (siteHeader.hasClass('light')) {
                var stickyBg = "rgba(19,19,19,1)"
            }

            if (showcaseScroll) {

                var stickyStart = showcaseScroll.end;

                gsap.set(siteHeader, {
                    position: 'fixed'
                })

                var sitkcyHdr = ScrollTrigger.create({
                    trigger: siteHeader,
                    start: stickyStart + 'bottom',
                    id: 'stickyHeader',
                    markers: false,
                    onLeaveBack: function () {

                        gsap.to(siteHeader, {
                            position: 'fixed',
                            y: '0%',
                            height: 150,
                            duration: .75,
                            backgroundColor: 'transparent',
                            delay: .5,
                            ease: 'power2.out'
                        })

                        gsap.to(headerWrapper, {
                            top: '60%',
                            delay: .5,
                            duration: .75,
                            ease: 'power2.out'
                        })


                    },
                    onEnter: function () {

                        gsap.set(siteHeader, {
                            position: 'absolute',
                            top: stickyStart
                        })

                        ScrollTrigger.create({
                            trigger: 'body',
                            markers: false,
                            start: stickyStart + 500 + 'top',
                            end: 'bottom bottom',
                            onEnter: function () {

                                gsap.set(siteHeader, {
                                    position: 'fixed',
                                    top: 0,
                                    y: '-100%',
                                    height: 100,
                                    backgroundColor: stickyBg,
                                })

                                gsap.set(headerWrapper, {
                                    top: '45%'
                                })



                            },
                            onUpdate: function (self, direction, progress) {

                                if (self.direction == -1) {

                                    gsap.to(siteHeader, {
                                        y: '0%',
                                    })
                                } else {
                                    gsap.to(siteHeader, {
                                        y: '-100%',
                                    })
                                }

                            },
                            onLeaveBack: function (self) {

                                self.kill();
                            }
                        })

                    },
                    onEnterBack: function () {

                        gsap.set(siteHeader, {
                            position: 'fixed',
                            top: 0
                        })

                    }

                })


            } else {

                gsap.set(siteHeader, {
                    position: 'absolute'
                })


                ScrollTrigger.create({
                    trigger: 'body',
                    start: 'top+=500 top',
                    end: 'bottom bottom',
                    id: 'stickyHeader',
                    markers: false,
                    onEnter: function () {

                        if (pageSet.hasClass('dark')) {
                            var curBg = 'rgba(19,19,19,1)'
                        } else {
                            var curBg = '#ebebeb'
                        }

                        gsap.set(siteHeader, {
                            position: 'fixed',
                            top: 0,
                            y: '-100%',
                            height: 100,
                            backgroundColor: curBg,
                        })

                        gsap.set(headerWrapper, {
                            top: '45%'
                        })

                        ScrollTrigger.create({
                            trigger: 'body',
                            markers: false,
                            start: 'top top',
                            end: 'bottom bottom',
                            onUpdate: function (self, direction, progress) {

                                if (self.direction == -1) {

                                    gsap.to(siteHeader, {
                                        y: '0%',
                                    })
                                } else {
                                    gsap.to(siteHeader, {
                                        y: '-100%',
                                    })
                                }

                            },
                            onLeaveBack: function (self) {

                                self.kill();
                                gsap.to(siteHeader, {
                                    position: 'absolute',
                                    y: '0%',
                                    height: 150,
                                    duration: .75,
                                    backgroundColor: 'transparent',
                                    delay: .5,
                                    clearProps: 'all',
                                    ease: 'power2.out'
                                })

                                gsap.to(headerWrapper, {
                                    top: '60%',
                                    delay: .5,
                                    duration: .75,
                                    clearProps: 'all',
                                    ease: 'power2.out'
                                })


                            }
                        })

                    },

                })




            };


        }


    }
    /** Site Header **/


    /** Classic Navigation **/

    var resizeTimer;

    function classicNavigation() {


        var siteNav = $('.site-navigation'),
            menu = siteNav.children('.menu'),
            menuItem = menu.children('li');


        if (siteNav.hasClass('classic')) {

            menuItem.each(function () {

                let $this = $(this),
                    menuItemA = $this.children('a');

                var classicSplit = new SplitText(menuItemA, {
                        tyoe: 'chars',
                        charsClass: 'menu-tit-char'
                    }),
                    mobileQuery = window.matchMedia('(max-width: 900px)')

                $(window).on('resize', function (e) {


                    if (mobileQuery.matches) {

                        classicSplit.revert();
                    }


                });

                let chars = menuItemA.find('.menu-tit-char'),
                    sHeadr = $('.site-header');

                if (sHeadr.hasClass('light')) {

                    var firstColor = 'hsla(0,0%,100%,.2)',
                        secondColor = '#fff'

                } else {

                    var firstColor = 'rgba(25, 27, 29, .6)',
                        secondColor = '#191b1d'

                }

                $this.on('mouseenter', function () {



                    gsap.fromTo(chars, {
                        opacity: 0,
                        y: 10
                    }, {
                        opacity: 1,
                        y: 0,
                        color: secondColor,
                        stagger: 0.025,

                    })
                })

                $this.on('mouseleave', function () {

                    gsap.to(chars, {
                        color: firstColor,
                        stagger: 0.025
                    })


                })

            })

        }

    }


    /** Classic Navigation **/




    function mobileMenu() {

        var mobileQuery = window.matchMedia('(max-width: 900px)'),
            desktopQuery = window.matchMedia('(min-width: 900px)');

        $(window).on('resize', function (e) {

            var siteNav = $('.site-navigation');

            if (siteNav.hasClass('classic')) {

                if (mobileQuery.matches) {

                    clearTimeout(resizeTimer);
                    resizeTimer = setTimeout(function () {

                        siteHeader.removeClass('classic_menu');
                        siteNav.removeClass('classic');
                        siteHeader.addClass('fullscreen_menu');
                        siteNav.addClass('fullscreen');

                        siteNav.addClass('desktop-classic');

                        fullscreenNavigation();

                    }, 250);


                }

            }

            if ((siteNav.hasClass('desktop-classic')) && (desktopQuery.matches)) {

                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function () {

                    $(".site-navigation > .fs-menu-wrapper").contents().unwrap();
                    siteHeader.addClass('classic_menu');
                    siteNav.addClass('classic');
                    siteHeader.removeClass('fullscreen_menu');
                    siteNav.removeClass('fullscreen');

                    siteNav.removeClass('desktop-classic');

                    gsap.set('.menu-item a', {
                        clearProps: 'all'
                    })

                    classicNavigation();


                }, 250);

            }


        });

    }

    mobileMenu();

    /** Fullscreen Navigation **/


    function fullscreenNavigation() {

        if ($('.site-navigation').hasClass('fullscreen')) {

            var siteNav = $('.site-navigation'),
                menuItemHasSub = $('.menu-item.has-children > a'),
                subMenu = $('.site-navigation .menu li .sub-menu'),
                headerWrapper = $('.header-wrapper'),
                mainMenu = $('.main-menu');

            siteHeader.addClass('menu_' + menuLayout)

            //
            //            $('.main-menu').attr('data-barba-namespace', 'fs-menu')


            siteNav.wrapInner("<div class='fs-menu-wrapper'></div>")

            var menuWrapper = $('.fs-menu-wrapper');

            menuItemHasSub.each(function () {
                let $this = $(this);
                $this.append('<span class="sub-toggle"><span class="sub-togg-line"></span><span class="sub-togg-line"></span></span>');

            });


            menuItemHasSub.on('click', function () {

                $('.sub-back').addClass('is-active');

                var $this = $(this);

                let parentLi = $this.parent('li'),
                    currentMenu = parentLi.parent('ul'),
                    menuItemLi = currentMenu.children('li'),
                    menuItemA = menuItemLi.children('a');

                var menuOut = gsap.fromTo(menuItemA, {
                    translateY: '0%',
                }, {
                    translateY: '-100%',
                    stagger: 0.03,
                    duration: .4,
                    ease: "power2.in",
                    overwrite: true,
                    onComplete: function () {
                        currentMenu.addClass('hidden');
                        currentMenu.removeClass('opened');
                        $('.sub-back').addClass('is-active')
                    }

                });


                let subMenu = parentLi.children('ul');
                let subMenuLi = subMenu.children('li');
                let subMenuLiA = subMenuLi.children('a')


                var subAnim = gsap.fromTo(subMenuLiA, {
                    translateY: "100%",
                }, {
                    translateY: "0%",
                    delay: .4,
                    stagger: .05,
                    overwrite: true,
                    ease: "power2.out",
                    onStart: function () {
                        subMenu.addClass('opened')
                    },

                });

            });

            $('.sub-back').on('click', function () {

                let currentMenu = $('.sub-menu.opened'),
                    currentMenuLi = currentMenu.children('li'),
                    currentMenuA = currentMenuLi.children('a');

                gsap.fromTo(currentMenuA, {
                    translateY: "0%",
                }, {
                    translateY: "100%",
                    stagger: -0.05,
                    overwrite: true,
                    ease: "power2.in",
                    onComplete: function () {
                        currentMenu.removeClass('opened')
                        currentMenu.addClass('hidden')
                    }


                })


                let parentMenu = currentMenu.parent('li').parent('ul')
                let parentMenuA = parentMenu.children('li').children('a');

                gsap.fromTo(parentMenuA, {
                    translateY: "-100%",
                }, {
                    translateY: "0%",
                    delay: .4,
                    stagger: -0.05,
                    overwrite: true,
                    ease: "power2.out",
                    onStart: function () {
                        parentMenu.removeClass('hidden');
                        parentMenu.addClass('opened');

                        if ($('.main-menu').hasClass('opened')) {
                            $('.sub-back').removeClass('is-active');

                        }
                    }
                })


            });


            var menuItemA = $('.menu.main-menu li a');

            menuItemA.each(function () {

                let $this = $(this),
                    text = $this.text();


                $this.attr('data-hover', text);

                let datHov = $this.data('hover');

                datHov.replace(/\s/g, "&nbsp;");
            })


            menuItemA.on('mouseenter', function (e) {

                let $this = $(this),
                    parentLi = $this.parent('li'),
                    miPosTop = parentLi.position().top;

                mainMenu.addClass('hovered')

                $this.addClass('hovered');

                gsap.to($this, .75, {
                    x: 15,
                    ease: 'CustomEase.create("cubic", "0.63,0.03,0.21,1")',

                })


            })

            menuItemA.on('mouseleave', function (e) {

                let $this = $(this);

                menuItemA.removeClass('hovered')
                mainMenu.removeClass('hovered');

                gsap.to($this, .75, {
                    x: 0,
                    ease: 'CustomEase.create("cubic", "0.63,0.03,0.21,1")',

                })

            })

            mainMenu.on('mouseleave', function () {




                if ($('.menu-item-active').css("visibility") === "visible") {


                }

            })

            var menuToggle = $('.menu-toggle'),
                toggleLine = $('.toggle-line');

            var menuAin = gsap.to('.main-menu > li > a', {
                translateY: 0,
                overwrite: true,
                stagger: .05,
                delay: .4,
                paused: true,
                onReverseComplete: function () {
                    siteNav.removeClass('menu-opened');
                    headerWrapper.removeClass('menu-opened');
                    menuToggle.removeClass('is-active');
                    $('.site-header').removeClass('menu-has-open');
                    enableScroll();
                    menuItemHasSub.removeClass('has-sub-in')

                },
                onComplete: function () {

                    menuItemHasSub.addClass('has-sub-in')
                }
            })

            var socialListAnim = gsap.fromTo('.social-list li a', {
                translateY: "100%",
                skewY: 10
            }, {
                translateY: "0%",
                skewY: 0,
                opacity: 1,
                overwrite: true,
                stagger: .05,
                paused: true,
                delay: 1
            })

            var gitButtonAnim = gsap.fromTo('.git-button', {
                translateY: "50%",

            }, {
                translateY: "0%",
                opacity: 1,
                paused: true,
                delay: 1.3

            })




            menuToggle.on('click', function () {


                siteNav.removeClass('open');
                var clicks = $(this).data('clicks');

                var $this = $(this);

                if (clicks) {

                    if ($('.sub-menu').hasClass('opened')) {

                        $('ul.opened > li > a').addClass('cakomako')

                        gsap.fromTo('ul.opened > li > a', {
                            translateY: "0%"
                        }, {
                            translateY: "100%",
                            overwrite: true,
                            stagger: -0.05,
                            ease: "power2.in",
                            onStart: function () {
                                $('.sub-back').removeClass('is-active')
                            },
                            onComplete: function () {
                                siteNav.removeClass('menu-opened');
                                headerWrapper.removeClass('menu-opened');
                                menuToggle.removeClass('is-active');
                                enableScroll();
                                $('.site-header').removeClass('menu-has-open');
                                $('.site-navigation ul').removeClass('hidden')
                                $('.site-navigation ul').removeClass('opened');
                            }


                        })

                    } else {
                        menuAin.reverse();
                    }


                    socialListAnim.reverse();
                    gitButtonAnim.reverse();

                } else {

                    if (pageLayout !== menuLayout) {

                        if (menuLayout === 'light') {
                            $('.site-header').removeClass('light')
                            $('.site-header').addClass('dark')
                        } else if (menuLayout === 'dark') {
                            $('.site-header').removeClass('dark')
                            $('.site-header').addClass('light')
                        }

                    }

                    disableScroll();

                    $this.addClass('is-active');

                    siteNav.addClass('menu-opened');
                    headerWrapper.addClass('menu-opened');
                    $('.site-header').addClass('menu-has-open');

                    var menuHeight = $('.main-menu').outerHeight(),
                        siteHeader = $('.site-header'),
                        winHeight = $(window).outerHeight(),
                        winWidth = $(window).outerWidth(),
                        plusHeight = winHeight / 100 * 25,
                        menuTop = $('.main-menu').position().top,
                        wWidth = $(window).outerWidth() / 100 * 17 / 2;


                    let mobileQuery = window.matchMedia('(max-width: 1024px)')

                    if (!mobileQuery.matches) {
                        gsap.set('.sub-back', {
                            top: menuTop
                        })


                    }




                    var rule = CSSRulePlugin.getRule(".site-header.fullscreen_menu.menu-has-open::before"); //get the rule

                    // Create a media condition that targets viewports at least 768px wide

                    // Check if the media query is true
                    if (mobileQuery.matches) {

                        gsap.set(rule, {
                            cssRule: {
                                height: '100vh'
                            }

                        });
                    } else {

                        gsap.set(menuWrapper, {
                            height: menuHeight + plusHeight
                        })

                        gsap.set(rule, {
                            cssRule: {
                                height: menuHeight + plusHeight + 50
                            }

                        });
                    }


                    let menuUls = $('.site-navigation').find('ul');

                    menuUls.each(function () {

                        let $this = $(this),
                            selfHeight = $this.outerHeight();

                        if (selfHeight > menuHeight) {

                            $this.addClass('ulcol')

                        }

                    })


                    menuAin.restart(true);
                    socialListAnim.restart(true);
                    gitButtonAnim.restart(true);




                }
                $(this).data("clicks", !clicks);




            });


        }



    }


    /** Fullscreen Navigation **/

    /**** Pages ****/

    /** Page Header **/

    function aliothPageHeader() {

        if ($('.page-header').length) {

            let pageHeader = $('.page-header'),
                title = pageHeader.find('.page-title'),
                willAnim = pageHeader.data('anim');

            if (willAnim == true) {


                var cako = new SplitText(title, {
                    type: 'chars, words',
                    charsClass: 'pt-char',
                    wordsClass: 'pt-word'

                });

                let chars = title.find('.pt-char');

                gsap.to(chars, {
                    y: '0%',
                    stagger: 0.035,
                    ease: 'power2.out',
                    duration: 1.2

                })


            }


        }



    }

    /** Page Header **/



    /** Blog **/

    function aliothBlog() {

        var blog = $('.alioth-blog'),
            post = blog.find('.post'),
            imagesWrap = blog.children('.post-images'),
            imagesImg,
            findImg;

        if (blog.hasClass('blog-list')) {


            post.each(function (i) {

                i++

                let $this = $(this),
                    image = $this.children('.post-image');

                $this.attr('data-post', 'post_' + i)

                imagesWrap.append(image);

                $this.on('mouseenter', function () {

                    let imageCheck = $this.data('post');

                    findImg = '.' + imageCheck;

                    gsap.fromTo(findImg, {
                        width: '0%'
                    }, {
                        width: "100%",

                    })


                })


                $this.on('mouseleave', function () {

                    let imageCheck = $this.data('post');

                    findImg = '.' + imageCheck;

                    gsap.fromTo(findImg, {
                        width: '100%'
                    }, {
                        width: "0%",

                    })


                })

            });

            imagesImg = imagesWrap.find('.post-image');

            blog.on('mousemove', function (e) {

                gsap.to(imagesWrap, {
                    left: e.pageX,
                    top: e.pageY - $(window).scrollTop(),
                    duration: .6
                })

            })


            imagesImg.each(function (i) {

                i++

                let $this = $(this),
                    img = $this.children('img'),
                    width = $this.outerWidth(),
                    height = $this.outerHeight();

                gsap.set(img, {
                    width: width,
                    height: height
                })

                gsap.set($this, {
                    width: 0
                })

                $this.addClass('post_' + i)


            })

        }


    }


    /** Blog **/

    /** Project Page **/
    function aliothProjectPage() {

        let projectHeader = $('.project-page-header'),
            projectImage = $('.project-featured-image'),
            projectImg = projectImage.children('img'),
            animate = projectHeader.data('animate'),
            title = projectHeader.find('.project-title'),
            cat = projectHeader.find('.project-cat'),
            other = projectHeader.find('.project-other h5'),
            summary = projectHeader.find('.meta-summary h5'),
            video = projectHeader.find('.project-featured-video'),
            nextVideo = $('.next-project-video');

        if (video.length) {

            let pphEmbed = video.children('.pph-video')

            const pphVid = new Plyr(pphEmbed, {
                controls: false,
                autoplay: true,
                clickToPlay: false,
                muted: true,
                autopause: false,
                volume: 0,
                loop: {
                    active: true
                },
                quality: {
                    default: 1080
                }

            });

        }

        if (nextVideo.length) {

            const npVid = new Plyr(nextVideo, {
                controls: false,
                autoplay: true,
                clickToPlay: false,
                muted: true,
                autopause: false,
                volume: 0,
                loop: {
                    active: true
                },
                quality: {
                    default: 1080
                }

            });

        }

        if (animate == true) {

            let titleText = $('.project-title h1');

            new SplitText(titleText, {
                type: 'chars, lines',
                charsClass: 'tt-char',
                linesClass: 'tt-line'
            })

            new SplitText(cat, {
                type: 'chars',
                charsClass: 'cat-char'
            })

            new SplitText(summary, {
                type: 'lines',
                linesClass: 'summ_line'
            })


            $('.tit_word, .project-other h5, .summ_line, .project-cat').wrapInner("<span></span>");

            if (projectHeader.hasClass('style_1')) {

                let pphAnim = gsap.timeline();

                pphAnim.to('.tt-char', 1.5, {
                    y: '0%',
                    stagger: 0.02,
                    ease: 'power3.out'
                }, 0)

                pphAnim.to('.cat-char', 1, {
                    y: '0%',
                    stagger: 0.02,
                    ease: 'power3.out'
                }, .5)

                pphAnim.to('.summ_line span', 1.5, {
                    y: '0%',
                    stagger: 0.1,
                    ease: 'power2.out'
                }, .5)

                pphAnim.to('.project-other span', 1.5, {
                    y: '0%',
                    stagger: 0.1,
                    ease: 'power2.out'
                }, .7)




            } else if (projectHeader.hasClass('style_3')) {

                let pphAnim = gsap.timeline();

                pphAnim.to('.tt-char', 1.5, {
                    y: '0%',
                    stagger: 0.02,
                    ease: 'power3.out'
                }, 0)

                pphAnim.to('.cat-char', .75, {
                    y: '0%',
                    stagger: 0.02,
                    ease: 'power3.out'
                }, .5)

                pphAnim.to('.summ_line span', 1.5, {
                    y: '0%',
                    stagger: 0.1,
                    ease: 'power2.out'
                }, .7)

                pphAnim.to('.project-other span', 1.5, {
                    y: '0%',
                    stagger: 0.1,
                    ease: 'power2.out'
                }, .5)

            } else if (projectHeader.hasClass('style_2')) {

                let pphAnim = gsap.timeline();

                pphAnim.to('.tt-char', 1.5, {
                    y: '0%',
                    stagger: 0.02,
                    ease: 'power3.out'
                }, 0)

                pphAnim.to('.cat-char', 1, {
                    y: '0%',
                    stagger: 0.02,
                    ease: 'power3.out'
                }, .5)

                gsap.to('.summ_line span', 1.5, {
                    y: '0%',
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.meta-summary'
                    }
                })

                gsap.to('.project-other span', 1.5, {
                    y: '0%',
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.project-other'
                    }
                })




            }
        }

    }
    /** Project Page **/

    /** Works **/


    function aliothWorks() {

        var works = $('.alioth-works'),
            willAnimate = works.data('animate'),
            categories = works.find('.aw-categories'),
            catFilter = categories.find('li'),
            worksWrap = works.children('.aw-works-wrapper'),
            project = worksWrap.find('.aw-project'),
            worksScroll;

        catFilter.first().addClass('active')

        project.each(function (i) {

            i++

            let $this = $(this),
                category = $this.data('category');
            $this.addClass('cat_' + category)
            $this.wrapInner('<div class="aw-project-wrap"></div>')

        });

        // init Masonry
        var $grid = $('.aw-works-wrapper').masonry({
            itemSelector: '.aw-project',
            percentPosition: false,
            columnWidth: '.aw-works-sizer',
            initLayout: false,
            gutter: ".aw-works-gutter",
            stamp: ".aw-works-stamp",
            transitionDuration: 0
        });
        // layout Masonry after each image loads
        $grid.imagesLoaded().progress(function () {
            $grid.masonry();


        });

        $grid.masonry('once', 'layoutComplete', function () {

            project.each(function () {

                let $this = $(this),
                    width = $this.outerWidth(),
                    awpWrap = $this.find('.aw-project-wrap'),
                    awpA = $this.children('a'),
                    awpImage = awpWrap.find('.aw-project-image');

                gsap.set(awpWrap, {
                    width: width
                })

                gsap.set(awpA, {
                    width: width
                })


                gsap.set(awpImage, {
                    width: width
                })


                if (willAnimate == true) {

                    var worksScroll = ScrollTrigger.create({
                        trigger: $this,
                        start: 'top 75%',
                        onEnter: function () {
                            $this.addClass('is_inview')
                        },

                    })

                };




            })

        })


        catFilter.on('click', function () {

            let $this = $(this),
                cat = $this.data('cat'),
                projectsFind = '.cat_' + cat,
                appPro = $(projectsFind);



            if (!$this.hasClass('active')) {

                catFilter.removeClass('active')
                $this.addClass('active')

                if (cat !== 'all') {

                    let filterAnim = gsap.timeline();
                    project.removeClass('is_inview');

                    filterAnim.to('.aw-project-wrap', {
                        width: '0%',
                        delay: .4,
                        onComplete: function () {

                            project.hide();
                            appPro.show();

                            $grid.masonry('destroy');

                            $grid.masonry({
                                columnWidth: '.aw-works-sizer',
                                gutter: ".aw-works-gutter",
                                stamp: ".aw-works-stamp",
                            });
                        }
                    });

                    filterAnim.to('.aw-project-wrap', {
                        width: '100%',
                        delay: .2,
                        onComplete: function () {

                            $('.aw-project').addClass('is_inview')
                        }
                    })


                } else if (cat === 'all') {


                    let filterAnim = gsap.timeline();
                    project.removeClass('is_inview');

                    filterAnim.to('.aw-project-wrap', {
                        width: '0%',
                        delay: .4,
                        onComplete: function () {

                            project.show();

                            $grid.masonry('destroy');

                            $grid.masonry({
                                columnWidth: '.aw-works-sizer',
                                gutter: ".aw-works-gutter",
                                stamp: ".aw-works-stamp",
                            });
                        }
                    });

                    filterAnim.to('.aw-project-wrap', {
                        width: '100%',
                        delay: .2,
                        onComplete: function () {

                            $('.aw-project').addClass('is_inview')
                        }
                    })


                }

            }





        })







    }


    /** Works **/

    /** Shopping Cart **/

    function aliothShoppingCart() {

        if ($('.cart-page').length) {

            let productQuant = $('.cpq-number'),
                decrase = productQuant.children('.cpq-reduce'),
                increase = productQuant.children('.cpq-increase'),
                totQuant = productQuant.children('.cpq-num');

            var clicks = 0;



            increase.on('click', function () {

                clicks++

                totQuant.text(clicks)

            })

            decrase.on('click', function () {

                clicks--

                totQuant.text(clicks)

            })


        }


    }

    /** Shopping Cart **/


    /** Shop **/

    function aliothShop() {

        // external js: masonry.pkgd.js, imagesloaded.pkgd.js

        // init Masonry
        var $grid = $('.alioth-products-wrapper').masonry({
            itemSelector: '.product',
            percentPosition: true,
            columnWidth: '.grid-sizer',
            gutter: '.gutter',
            transitionDuration: '0.8s',
            stagger: 30
        });
        // layout Masonry after each image loads
        $grid.imagesLoaded().progress(function () {
            $grid.masonry();
        });

        var product = $('.product'),
            productCats = $('.product-cats a');

        product.each(function (i) {

            let $this = $(this),
                cat = $this.data('category');

            $this.addClass('cat_' + cat);

            $this.append('<div class="product-acts"><a href="#addtocart">Add To Cart</a></div>');

            ScrollTrigger.create({
                trigger: $this,
                start: 'top 75%',
                onEnter: function () {
                    $this.addClass('is_inview')
                }
            })

        });

    }


    /** Shop **/

    /** Products Carousel **/

    function aliothProductsCarousel() {

        var apCarousel = $('.alioth-products-carousel');

        apCarousel.each(function () {

            let $this = $(this),
                apWrapper = $this.find('.apc-product-wrapper'),
                cats = $this.find('.apc-cats ul'),
                cat = cats.find('li'),
                products = $this.find('.apc-product'),
                willAnim = $this.data('anim'),
                pressedTop;

            products.append('<span class="product-ov"></span>')


            InertiaPlugin.track(apWrapper, "x");

            var apcDrag = Draggable.create(apWrapper, {
                type: "x",
                bounds: $this,
                autoScroll: true,
                inertia: true,
                edgeResistance: 0.75,
                dragResistance: 0.4,
                throwProps: true,


            });

            if (willAnim == true) {

                gsap.fromTo(apWrapper, {
                    x: -5100
                }, {
                    x: '0%',
                    duration: 2,
                    ease: 'power2.inOut',
                    scrollTrigger: {
                        trigger: $this,
                    }
                })

                gsap.fromTo(cat, {
                    y: '100%'
                }, {
                    y: '0%',
                    stagger: 0.2,
                    delay: 1.5,
                    duration: .8,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: $this,
                    }
                })
            }

            cat.on('click', function () {

                let $this = $(this),
                    dataCat = '.cat_' + $this.data('category'),
                    filterAn = gsap.timeline();

                cat.removeClass('active');
                $this.addClass('active');

                filterAn.fromTo('.product-ov', {
                    width: '0%'
                }, {
                    width: '100%',
                    ease: 'power2.inOut',
                    onProgress: function () {

                        cats.addClass('locked')


                    },
                    onStart: function () {
                        gsap.set('.product-ov', {
                            right: 0,
                            left: 'unset'
                        })
                    },
                    onComplete: function () {

                        products.addClass('hide');
                        $(dataCat).removeClass('hide');

                        let draggable = Draggable.get(apWrapper); //or use the element itself instead of a s
                        draggable.update(true);

                    }
                })

                filterAn.fromTo('.product-ov', {
                    width: '100%'
                }, {
                    width: '0%',
                    delay: 0,
                    ease: 'power2.inOut',
                    onStart: function () {
                        gsap.set('.product-ov', {
                            left: 0,
                            right: 'unset'
                        })
                    },
                    onComplete: function () {
                        cats.removeClass('locked')

                    }

                })

            })


        })




    }

    /** Products Carousel **/

    /** Awards **/

    function aliothAwards() {

        var awards = $('.alioth-awards')
        awards.each(function () {

            let $this = $(this),
                award = $this.find('.a-award'),
                willAnim = $this.data('anim');

            if (willAnim == true) {

                award.each(function () {


                    let $this = $(this),
                        title = $this.find('.award-title'),
                        loc = $this.find('.award-loc'),
                        date = $this.find('.award-date');

                    title.wrapInner('<span></span>')
                    loc.wrapInner('<span></span>')
                    date.wrapInner('<span></span>')

                    let spans = $this.find('span');

                    gsap.fromTo(spans, {
                        y: '100%'
                    }, {
                        y: '0%',
                        duration: .75,
                        stagger: 0.1,
                        ease: 'power2.Out',
                        scrollTrigger: {
                            trigger: $this,
                            onEnter: function () {
                                $this.addClass('is_inview')
                            },

                        }
                    })

                })
            }

        });

    };

    /** Awards **/


    /** Single Product Page **/


    function aliothSingleProduct() {

        if ($('.product-page').length) {


            let firstImage = $('.sp-image:first-child > img'),
                firstHeight = firstImage.outerHeight(),
                slider = $('.sp-slider');

            gsap.set(slider, {
                height: firstHeight
            })



            var productSlider = new Swiper('.sp-slider', {
                slidesPerView: 1,
                navigation: {
                    prevEl: '.sp-next',
                    nextEl: '.sp-prev',
                },
                pagination: {
                    el: '.sp-dots',
                    type: 'bullets',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (index + 1) + '</span>';
                    }
                },
                direction: 'vertical'

            });

            let shareToggle = $('.share-toggle'),
                metas = $('.single-product-meta'),
                metaButtons = metas.find('a');

            shareToggle.on('click', function () {


                let shareLi = $('.share-buttons li');

                gsap.to(shareLi, {
                    x: 0,
                    opacity: 1,
                    visibility: 'visible',
                    stagger: .1,
                    duration: .4
                })

            })

            metaButtons.on('click', function () {

                let $this = $(this),
                    parent = $this.parent('li'),
                    desc = parent.children('.desc'),
                    close = parent.children('.desc-close')

                $('.single-product-mets a').removeClass('active')
                $this.addClass('active')

                gsap.set('.desc', {
                    display: 'none'
                })
                gsap.set(desc, {
                    display: 'block'
                })


            })

            $('.desc-close').on('click', function () {
                $('.single-product-mets a').removeClass('active');
                gsap.set('.desc', {
                    display: 'none'
                })

            })

        }


    }
    /** Single Product Page **/

    /**** Pages ****/

    /** Showcase Layouts **/



    /* Showcase Videos */

    function showCaseVideos() {

        var showCaseVideo = $('.showcase-video');

        showCaseVideo.each(function () {

            let $this = $(this);

            const showCaseplayer = new Plyr($this, {
                controls: false,
                autoplay: true,
                clickToPlay: false,
                muted: true,
                autopause: false,
                volume: 0,
                loop: {
                    active: true
                }
            });

            //            showCaseplayer.restart();


        })

    }


    /* Showcase Videos */


    /* Scroll Notice */

    function aliothScrollNotice() {

        var scrollNot = $('.scroll-notice');

        if (scrollNot.length) {

            var scLine = scrollNot.find('.sn_bef'),
                scTim = gsap.timeline({
                    repeat: -1
                });

            scTim.fromTo(scLine, {
                height: 40,

            }, {
                height: 0,
                duration: 1,
                onStart: function () {

                    gsap.set(scLine, {
                        top: 'unset',
                        bottom: '140%'
                    })
                }
            })

            scTim.fromTo(scLine, {
                height: 0,

            }, {
                height: 40,
                duration: 1,
                onStart: function () {

                    gsap.set(scLine, {
                        bottom: 'unset',
                        top: '-125%'
                    })

                }
            })

        }

    }


    /* Scroll Notice */


    /** Showcase Layouts **/



    /** Showcase Fullscreen Carousel **/


    function showcaseFullscreenCarousel() {


        var aServSlider1 = new Swiper('.fullscreen-carousel-showcase', {
            slidesPerView: 3,
            navigation: {
                nextEl: '.slide-next',
                prevEl: '.slide-prev',
            },
            mousewheel: {
                invert: false
            }

        });



        let projects = $('.cs-project');

        projects.each(function (i) {
            i++

            let $this = $(this),
                image = $this.children('.cs-project-image').html();

            $this.attr('data-image', i)

            $('.cs-images').append('<div class="cs-project-image image_' + i + '">' + image + '</div>')
            $('.cs-project-image').hide();

            let imgCheck = $this.data('image'),
                findImg = '.image_' + imgCheck;

            $this.on('mouseenter', function () {


                $this.addClass('hovered');

                gsap.fromTo(findImg, {
                    scale: 1.1,
                    opacity: 0
                }, {
                    scale: 1,
                    opacity: 1,
                    onStart: function () {

                        $(findImg).show();

                        gsap.set('.cs-project-image', {
                            zIndex: -1
                        })


                        gsap.set(findImg, {
                            zIndex: 1
                        })
                    },

                })

            });

            $this.on('mouseleave', function () {

                $this.removeClass('hovered');

                gsap.to(findImg, {
                    opacity: 0,
                    delay: .3,
                    onComplete: function () {

                        $(findImg).hide();

                    }
                })

            })

        })

    }


    /** Showcase Fullscreen Carousel **/

    /** Showcase Fullscreen Wall **/

    function showcaseFullscreenWall() {

        var projects = $('.fw-projects'),
            project = projects.find('.fw-project');

        project.each(function (i) {

            i++
            let $this = $(this),
                imageURL = $this.data('image-url'),
                videoID = $this.data('plyr-embed-id');



            if (imageURL != null) {

                $('.fw-images').append('<div class="fw-project-image image_' + i + '"><div class="fw-project-image-wrap"><img src="' + imageURL + '"></div></div>')

                $this.attr('data-image', '.image_' + i);

            } else {

                $('.fw-images').append('<div class="fw-project-image image_' + i + '"><div class="fw-project-image-wrap"> <div class="showcase-video" data-plyr-provider="vimeo" data-plyr-embed-id="' + videoID + '"></div></div></div>')

                $this.attr('data-image', '.image_' + i);

            }


        })

        new SplitText('.fw-projects', {
            type: 'lines',
            linesClass: 'fwt-line'
        })

        projects.on('mouseenter', function () {

            project.addClass('opdown');


        })

        projects.on('mouseleave', function () {

            project.removeClass('opdown')


        })


        project.on('mouseenter', function () {

            let $this = $(this),
                findImage = $this.data('image'),
                imgWrap = $(findImage).find('.fw-project-image-wrap'),
                img = imgWrap.find('img'),
                cat = $this.find('.fw-project-category').text();

            $('.fw-cat').html('<span>' + cat + '</span>');

            new SplitText('.fw-cat', {
                type: 'chars',
                charsClass: 'fw-cat-char'
            })

            gsap.fromTo('.fw-cat-char', {

                y: '100%'
            }, {

                y: '0%',
                stagger: 0.02
            })

            $this.addClass('active')

            gsap.to(imgWrap, {
                duration: 1,
                overwrite: true,
                ease: 'expo.out',
                width: '100%',
                onStart: function () {

                    gsap.set(imgWrap, {
                        left: 'unset',
                        right: 0
                    })

                }
            })

            gsap.fromTo(img, {
                duration: .7,
                x: '30%',
                scale: 1.1
            }, {
                x: '0%',
                scale: 1
            })
        })

        project.on('mouseleave', function () {

            let $this = $(this),
                findImage = $this.data('image'),
                imgWrap = $(findImage).children('.fw-project-image-wrap'),
                img = imgWrap.children('img');

            $this.removeClass('active')

            gsap.to(imgWrap, {
                duration: 1,
                ease: 'expo.out',
                width: '0%',
                overwrite: true,
                onStart: function () {

                    gsap.set(imgWrap, {
                        right: 'unset',
                        left: 0
                    })

                }
            })

            gsap.fromTo(img, {
                duration: .7,
                x: '0%',
                scale: 1
            }, {
                x: '-30%',
                scale: 1.1
            })

            gsap.to('.fw-cat-char', {
                y: '-100%',
                stagger: 0.02
            })


        })




    }

    /** Showcase Fullscreen Wall **/

    /** Showcase Wall **/

    function showcaseWall() {

        var wallProject = $('.wall-project'),
            wallParent = $('.wall-projects'),
            parentSec = wallParent.parents('.section'),
            wallProjectsTop = document.getElementsByClassName('wall-projects-top')[0],
            wallProjectsBottom = document.getElementsByClassName('wall-projects-bottom')[0],
            topWidth = wallProjectsTop.offsetWidth,
            bottomWidth = wallProjectsBottom.offsetWidth,
            winWidth = window.outerWidth,
            topTrans = topWidth - winWidth,
            bottomTrans = bottomWidth - winWidth;


        wallProject.each(function (i) {

            i++

            let $this = $(this);

            $this.attr('data-image', '.image-' + i)
            $this.find('.project-title').attr('data-index', '0' + i)

            let wallImage = $this.children('.project-image').find('img').attr('src'),
                wallVideo = $this.find('.showcase-video'),
                wallImages = $('.wall-images');



            if (wallImage != null) {

                wallImages.append('<div class="wall-image-fix image-' + i + '"><img src="' + wallImage + '"></div>');

            } else {

                wallVideo.appendTo(wallImages).wrap('<div class="wall-image-fix image-' + i + '"></div>')
            }

        });

        var wallImages = $('.wall-image-fix'),
            wallImagesWidth = wallImages.outerWidth(),
            wallImg = wallImages.find('img, .plyr');

        gsap.set(wallImg, {
            width: wallImagesWidth
        })


        wallProject.on('mouseenter', function () {

            let $this = $(this);

            wallParent.addClass('on-hover');

            wallProject.removeClass('hovered');
            $this.addClass('hovered');

            let findImage = $this.data('image'),
                findImg = $(findImage).children('img, .plyr');


            gsap.fromTo(findImg, {
                scale: 1.5,
                rotate: 15
            }, {
                scale: 1,
                rotate: 0,
                overwrite: true,
                duration: .7,
                ease: 'power2.Out',

            })

            gsap.fromTo(findImage, {
                opacity: 0
            }, {
                opacity: 1,
                overwrite: true,
                duration: .7,
                ease: 'power2.Out',
                onStart: function () {

                    gsap.set(findImage, {
                        visibility: 'visible',

                    })

                }
            })


        })

        wallProject.on('mouseleave', function () {

            var $this = $(this),
                findImage = $this.data('image'),
                findImg = $(findImage).children('img');



            gsap.fromTo(findImage, {
                opacity: 1
            }, {
                opacity: 0,
                duration: .7,
                overwrite: true,
                ease: 'power2.In',
                onComplete: function () {

                    gsap.set(findImage, {
                        visibility: 'hidden'
                    })
                }
            })


        })

        wallProject.on('click', function () {
            let $this = $(this),
                findImage = $this.data('image'),
                findImg = $(findImage).children('img, .plyr');

            $(findImage).addClass('trans_image')


        })


        wallParent.on('mouseleave', function () {

            wallParent.removeClass('on-hover');

        });



        let wpTop = gsap.to('.wall-projects-top', {
            x: -topTrans - 400,

        })
        let wpBottom = gsap.to('.wall-projects-bottom', {
            x: bottomTrans + 400,

        })

        var stickyHeader = ScrollTrigger.getById("stickyHeader")



        ScrollTrigger.create({
            animation: wpTop,
            trigger: ".showcase-wall",
            start: "top top",
            scrub: 1,
            end: 'bottom+=2000 top',
            pin: true,
            id: 'showcaseScroll',
            onUpdate: function (self, progress) {

                let prog = self.progress * 100 + '%',
                    clamp = gsap.utils.clamp(-50, 50),
                    skew = clamp(self.getVelocity() / -100);

                gsap.to('.wall-prog', {
                    width: prog
                })

            }

        });

        ScrollTrigger.create({
            animation: wpBottom,
            trigger: ".showcase-wall",
            start: "top top",
            end: 'bottom+=2000 top',
            scrub: 1,
            pin: true,
            onUpdate: function (self) {

            }
        });



    }


    /** Showcase Wall **/

    /** Services Style 1 **/

    function alitohServicesS1() {

        var services = $('.alioth-services.style_1'),
            service = services.find('.service'),
            parentSec = services.parents('.section'),
            serLength = service.length;

        if (services.length) {



            service.each(function () {

                let $this = $(this),
                    title = $this.find('.service-title'),
                    content = $this.find('.service-content');

                new SplitText(title, {
                    type: 'lines, chars',
                    linesClass: 'tit-line',
                    charsClass: 'tit-char'
                })

                new SplitText(content, {
                    type: 'lines',
                    linesClass: 'cont-line'
                })


            });



            var ssss = new Swiper('.service-images', {
                slidesPerView: 1,
                direction: 'vertical',
                freeMode: true,
                freeModeMinimumVelocity: 0.99,
                mousewheel: {
                    invert: false,
                    eventsTarget: '.alioth-services',
                    freeModeSticky: true,
                    sensitivity: 0.3
                },
            });

            let findSer;

            findSer = $('.s-imgo.swiper-slide-active').data('service');

            $(findSer).addClass('active');







            ssss.on('activeIndexChange', function () {

                let titleChars
                serAnim = gsap.timeline({

                });

                serAnim.fromTo(titleChars, {
                    y: '0%'
                }, {
                    y: '-100%',
                    onComplete: function () {
                        $('.service').removeClass('active');

                        findSer = $('.s-imgo.swiper-slide-active').data('service');

                        $(findSer).addClass('active')


                    }
                })

                serAnim.fromTo(titleChars, {
                    y: '100%'
                }, {
                    y: '0%',
                    onStart: function () {



                    }
                })



            })

            ScrollTrigger.create({
                trigger: '.alioth-services',
                pin: true,
                pinSpacing: true,
                start: 'top top',
                end: 'bottom top',
                onEnter: function () {




                }

            })






        }



    }



    /** Services Style 1 **/

    /** Services Style 2 **/

    function aliothServicesS2() {

        if ($('.alioth-services').length) {

            let aliothSer2 = $('.alioth-services.style_2'),
                service = aliothSer2.find('.service'),
                willanim = aliothSer2.data('anim');


            service.each(function (i) {
                i++

                let $this = $(this),
                    content = $this.children('.service-wrap'),
                    contHeight = content.outerHeight(),
                    title = $this.children('.service-title');


                $this.attr('data-height', contHeight)

                gsap.set(content, {
                    height: 0,
                })

                if (willanim == true) {

                    new SplitText(title, {
                        type: 'lines, chars',
                        charsClass: 'ser_tit_char',
                        linesClass: 'ser_tit_line'
                    })

                    let chars = $this.find('.ser_tit_char')

                    gsap.fromTo(chars, {
                        y: '100%'


                    }, {
                        y: '0%',
                        stagger: 0.02,
                        duration: 1,
                        ease: 'power2.Out',
                        scrollTrigger: {
                            trigger: $this,
                        }
                    })

                }

            })

            service.on('click', function () {

                let $this = $(this),
                    content = $this.children('.service-wrap'),
                    contentInner = content.children('.service-cont'),
                    contHeight = $this.data('height');



                if ($this.hasClass('active')) {

                    $this.removeClass('active');

                    gsap.to(content, .3, {
                        height: 0,
                        ease: 'power2.Out',
                        delay: .3
                    })

                    gsap.to(contentInner, .3, {
                        opacity: 0
                    })


                } else {

                    service.removeClass('active')
                    $this.addClass('active');


                    let other = service.not('.active'),
                        otherContent = other.children('.service-wrap'),
                        otherInner = other.children('.service-cont');


                    gsap.to(content, .3, {
                        height: contHeight,
                        ease: 'power2.In',
                        onComplete: function () {
                            let scTop = $this.offset().top;

                            gsap.to(window, .8, {
                                scrollTo: scTop - 100,
                                ease: 'power3.In'
                            })
                        }

                    })

                    gsap.to(contentInner, .3, {
                        opacity: 1,
                        delay: .2
                    })



                    gsap.to(otherContent, .3, {
                        height: 0,
                        ease: 'power2.Out',
                    }, .15)

                    gsap.to(otherInner, .3, {
                        opacity: 0
                    })


                }

            })

        }

    }

    /** Services Style 2 **/

    /** Personal Head **/

    function aliothPersonalHead() {

        let aph = $('.alioth-personal-head');

        aph.each(function () {

            let $this = $(this),
                name = $this.children('.aph-name'),
                image = $this.children('.aph-image'),
                willAnim = $this.data('animate');


            name.clone().addClass('back').insertAfter(name);


            if (willAnim == true) {

                let mobileQuery = window.matchMedia('(max-width: 1024px)')

                if (mobileQuery.matches) {

                    var nameFront = $('.name-front, .name-back'),
                        nameBack = $('.aph-name.back .name-back');

                } else {

                    var nameFront = $('.name-front'),
                        nameBack = $('.aph-name.back .name-back');
                }


                new SplitText(nameFront, {
                    type: 'chars',
                    charsClass: 'name_char'
                })

                new SplitText(nameBack, {
                    type: 'chars',
                    charsClass: 'name_char'
                })

                new SplitText('.aph-welc', {
                    type: 'chars',
                    charsClass: 'welc_char'
                })

                new SplitText('.aph-sub-text', {
                    type: 'lines',
                    linesClass: 'aph_sub_line'
                })

                $('.aph_sub_line').wrapInner('<span></span>')

                // Welcome Animation

                let aphWelcome = gsap.timeline({
                    once: true
                })

                aphWelcome.fromTo('.name_char', 1.5, {
                    y: '100%'
                }, {
                    y: '0%',
                    stagger: 0.03,
                    ease: 'power2.out',
                    onComplete: function () {

                        const mobileQuery = window.matchMedia('(max-width: 450px)')
                        if (!mobileQuery.matches) {


                            $this.on('mousemove', function (e) {

                                let mouseLeft = e.pageX,
                                    mouseTop = e.pageY,
                                    names = $this.find('.aph-name')

                                gsap.to(names, {
                                    x: -mouseLeft / 10,
                                    duration: .6,

                                });

                                gsap.to('.aph-image', {
                                    x: -mouseLeft / 20,
                                    duration: .6,

                                });

                            })

                        }

                    }
                }, .5)

                aphWelcome.fromTo('.welc_char', 1, {
                    y: '100%'
                }, {
                    y: '0%',
                    stagger: 0.02,
                    ease: 'power2.out'
                }, 0)

                aphWelcome.fromTo('.aph_sub_line span', 1, {
                    y: '100%'
                }, {
                    y: '0%',
                    stagger: 0.1,
                    ease: 'power2.out'
                }, 1.5)

                aphWelcome.fromTo('.aph-image', 2.5, {
                    scale: .9,
                    opacity: 0
                }, {
                    scale: 1,
                    opacity: 1,
                    ease: 'power2.inOut'
                }, 0)

                aphWelcome.fromTo('.circular-button', 1, {
                    width: 0,
                    height: 0
                }, {
                    width: 150,
                    height: 150,
                    ease: 'power2.inOut',
                    onComplete: function () {

                        gsap.to('.circular-button span', {
                            opacity: 1
                        })
                    }
                }, 1.5)





                // Welcome Animation


            } else {

                $this.on('mousemove', function (e) {

                    let mouseLeft = e.pageX,
                        mouseTop = e.pageY,
                        names = $this.find('.aph-name')

                    gsap.to(names, {
                        x: -mouseLeft / 10,
                    });

                })


            }





        })



    }




    /** Personal Head **/

    /** Forms **/

    function aliothForms() {


        let form = $('form');

        form.each(function () {

            let $this = $(this),
                input = $this.find(":input");


            input.on('focus', function () {

                let $this = $(this),
                    fieldWrap = $this.parent('div');

                fieldWrap.addClass('focus')


            })

            input.on('focusout', function () {

                let $this = $(this),
                    fieldWrap = $this.parent('div');

                if (!$(this).val()) {
                    fieldWrap.removeClass('focus')

                }






            })

        })


    }


    /** Forms **/


    /** Number Counter **/

    function alitohNumberCt() {

        var aCount = $('.a-number-counter');

        aCount.each(function () {

            let $this = $(this),
                acNumber = $this.children('.ac-number'),
                sign = $this.children('.ac-sign'),
                acTitle = $this.children('.ac-title');

            acTitle.wrapInner('<span></span>')
            sign.wrapInner('<span></span>');

            let signSpan = sign.children('span');

            gsap.set(signSpan, {
                y: '100%',
                display: 'block'
            })



            acNumber.each(function () {
                let $this = $(this),
                    countParent = $this.parent(aCount);


                let numVal = $this.text(),
                    num1 = "<span class='num_val_anim'>" + (numVal - 3) + "</span>",
                    num2 = "<span class='num_val_anim'>" + (numVal - 2) + "</span>",
                    num3 = "<span class='num_val_anim'>" + (numVal - 1) + "</span>";

                $this.prepend(num1, num2, num3);

                $this.wrapInner("<div class='numbers-wrapper'></div>");

                var numWrapper = $this.children('.numbers-wrapper'),
                    parent = $this.parents(aCount),
                    delay = parent.data('delay'),
                    nums = $this.find('.num_val_anim');



                gsap.to(numWrapper, 1.5, {
                    y: "-75%",

                    delay: delay,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: parent,
                        position: "bottom bottom"
                    },
                    onStart: function () {
                        countParent.addClass('count_inview')
                    },
                    onComplete: function () {

                        gsap.to(signSpan, {
                            y: '0%'
                        })


                        countParent.addClass('count_anim_end')

                    }
                })

            });

        })

    }

    /** Number Counter **/

    /** Single Image **/

    function aliothSingleImage() {

        var singleImage = $('.single-image');

        singleImage.each(function () {

            let $this = $(this),
                img = $this.children('img'),
                imgSrc = $this.find('img').attr('src'),
                imgParallax = $this.attr('data-parallax'),
                parallaxType = $this.attr('data-parallax-type'),
                lightBox = $this.attr('data-lightbox');

            var mobileQuery = window.matchMedia('(max-width: 900px)')
            if (!mobileQuery.matches) {

                if (imgParallax === 'true') {

                    if (parallaxType === 'zoom') {

                        let finalHeight = img.outerHeight() - 200;
                        $this.addClass('parallax_wrapper');

                        gsap.set($this, {
                            height: finalHeight
                        });

                        gsap.set(img, {
                            y: -100
                        })

                        gsap.to(img, {
                            scale: 1.25,
                            scrollTrigger: {
                                trigger: $this,
                                start: "top bottom",
                                scrub: 1.25,
                                end: "bottom top"
                            }
                        })


                    } else if (parallaxType === 'directional') {

                        let finalHeight = img.outerHeight() - 200;

                        img.hide();
                        $this.addClass('parallax_wrapper')

                        gsap.set($this, {
                            backgroundImage: 'url(' + imgSrc + ')',
                            height: finalHeight
                        })


                        gsap.to($this, {
                            backgroundPositionY: "100%",
                            scrollTrigger: {
                                trigger: $this,
                                start: "top bottom",
                                scrub: 1.25,
                                end: "bottom top"
                            }
                        })

                    }



                }

            }



            if (lightBox != null) {

                ////////// Image Lightbox Start //////////
                $this.addClass('lightbox')

                var dataMfpSrc = lightBox;

                img.attr('data-mfp-src', dataMfpSrc);

                $this.magnificPopup({
                    delegate: 'img', // child items selector, by clicking on it popup will open
                    type: 'image',
                    closeOnContentClick: true,
                    closeBtnInside: false,
                    mainClass: 'image-lightbox', // class to remove default margin from left and right side
                    image: {
                        verticalFit: true
                    },
                    zoom: {
                        enabled: true,
                        duration: 300 // don't foget to change the duration also in CSS
                    },
                    // other options
                });

                ////////// Image Lightbox End //////////

            }

        })

    }


    /** Single Image **/

    /** Image Carousel **/

    function aliothImageCarousel() {

        var aiCarousel = $('.alioth-image-carousel');

        aiCarousel.each(function () {

            let $this = $(this),
                navigate = $this.data('navigate'),
                wrapper = $this.children('.ai-wrapper'),
                xVal = wrapper.outerWidth() - $(window).outerWidth();

            if (navigate === 'scroll') {

                gsap.to(wrapper, {
                    x: -xVal,
                    scrollTrigger: {
                        trigger: $this,
                        scrub: 1.2,
                        start: 'center center',
                        end: 'bottom+=2000 top',
                        markers: false,
                        pin: true
                    }
                })

            } else if (navigate === 'drag') {

                var velocityX;

                Draggable.create(wrapper, {
                    type: "x",
                    duration: 1,
                    bounds: $this,
                    edgeResistance: 0.75,
                    dragResustance: 0.55,
                    throwProps: true,
                    intertia: true,
                    onPress: function () {
                        // track the x and y properties:
                        InertiaPlugin.track(wrapper, "x,y");


                        velocityX = InertiaPlugin.getVelocity(wrapper, "x");


                    },
                    onDrag: function () {


                        gsap.to(wrapper, {
                            x: this.x - velocityX / 100,
                            ease: "power2",
                            overwrite: "auto",
                            // skewX:"+=1", //meaningless - we tweak the values in the modifier below. We needed to make the skewX tween to something just so that it's included in the tweening values.

                        });
                    },

                });


            }



        })

    }


    /** Image Carousel **/

    /** Single Project **/

    function aliothSingleProject() {

        var swProject = $('.alioth-single-project');


        swProject.each(function () {

            let $this = $(this),
                swDetails = $this.children('.sw-detail'),
                swImageWrap = $this.children('.sw-image'),
                swImg = $this.find('img');
        })

    }


    /** Single Project **/



    /** Image Carousel **/

    function alitohImageCarousel() {

        var imageCarousel = $('.a-image-carousel');

        imageCarousel.each(function (i) {

            i++

            let $this = $(this);
            var carouselContainer = $this.children('.swiper-container'),
                aImageCr = aImageCr + i;

            var aImageCr = new Swiper(carouselContainer, {
                slidesPerView: 2,

            });
        })

    }

    /** Image Carousel **/

    /* Page Nav */

    function aliothPageNav() {

        $('.alioth-page-nav').each(function () {

            let $this = $(this),
                title = $this.find('.page-title'),
                text = title.text();

            title.append('&nbsp;' + text + '&nbsp;')
            title.append('&nbsp;' + text + '&nbsp;')

            title.marquee({
                duplicated: true,
                duration: 8000,
                delayBeforeStart: 0,
                direction: 'left',
            });




        })

    }



    /* Page Nav */

    function aliothClients() {

        var clients = $('.alioth-clients');

        clients.each(function () {

            let $this = $(this),
                client = $this.find('.a-client'),
                willAnim = $this.data('anim');

            if (willAnim == true) {

                gsap.fromTo(client, 1, {
                    x: '10%',
                    opacity: 0,
                }, {
                    x: '0%',
                    opacity: 1,
                    stagger: 0.1,
                    ease: 'power2.Out',
                    scrollTrigger: {
                        trigger: $this,
                        start: 'top bottom',
                        markers: false
                    }
                })
            }
        })

    }



    /* Testimonials */

    function aliothTestimonials() {

        var testimonials = $('.a-testimonials'),
            activeTest,
            activeIndex,
            nextTest,
            prevTest,
            lastTest,
            firstTest,
            testSpans;


        testimonials.each(function () {

            let $this = $(this),
                testimonial = $this.find('.a-testimonial'),
                controls = $this.children('.a-testimonials-control'),
                wrapper = $this.children('.a-testimonials-wrapper'),
                prev = $this.find('.a-test-prev'),
                next = $this.find('.a-test-next'),
                total = testimonial.length;

            testimonial.first().addClass('active');

            $('.a-test-total').html('0' + total)

            testimonial.each(function (i) {

                i++

                let $this = $(this),
                    text = $this.children('.testimonial-text');


                $this.attr('data-testimonial', i);
                $this.addClass('testm_' + i);

                new SplitText(text, {
                    type: 'lines'
                });

                let lines = text.find('div'),
                    metas = $this.children('.testimonial-meta').find('div');

                lines.wrapInner('<span></span>');
                metas.wrapInner('<span></span>');


            })

            function checkTestimonals() {

                activeTest = $('.a-testimonial.active');
                activeIndex = activeTest.data('testimonial');
                nextTest = activeTest.next('.a-testimonial');
                prevTest = activeTest.prev('.a-testimonial');
                lastTest = $('.a-testimonial').last();
                firstTest = $('.a-testimonial').first();
                testSpans = activeTest.find('span');

                if (!prevTest.length) {

                    prevTest = lastTest;

                }

                if (!nextTest.length) {

                    nextTest = firstTest;

                }

                $('.a-test-current').html('0' + activeIndex)


            }

            activeTest = $('.a-testimonial.active');
            gsap.set(wrapper, {
                height: activeTest.outerHeight()
            })

            next.on('click', function (i) {

                checkTestimonals();

                gsap.to(wrapper, {
                    height: nextTest.outerHeight()
                })

                gsap.fromTo(testSpans, 0.75, {
                    y: '0%'
                }, {
                    y: '-110%',
                    stagger: 0.1,
                    ease: 'power2.Out',
                    onComplete: function () {

                        activeTest.removeClass('active')
                        nextTest.addClass('active');


                        checkTestimonals();

                        gsap.fromTo(testSpans, .6, {
                            y: '110%'
                        }, {
                            y: '0%',
                            stagger: 0.05,
                            ease: 'power2.Out',
                        })

                    }
                })


            });

            prev.on('click', function (i) {

                checkTestimonals();

                gsap.to(wrapper, {
                    height: prevTest.outerHeight()
                })

                gsap.fromTo(testSpans, 0.75, {
                    y: '0%'
                }, {
                    y: '-110%',
                    ease: 'power2.In',
                    stagger: 0.1,
                    onComplete: function () {

                        activeTest.removeClass('active')
                        prevTest.addClass('active');

                        checkTestimonals();

                        gsap.fromTo(testSpans, .6, {
                            y: '110%'
                        }, {
                            y: '0%',
                            stagger: 0.05,
                            ease: 'power2.Out',
                        })

                    }
                })


            });

            if ($this.hasClass('autoplay')) {

                let testCounter = testimonials.find('.a-testimonials-count'),
                    testProgress = testCounter.children('span');

                let testAutPlay = gsap.fromTo(testProgress, {
                    width: '0%'
                }, {
                    width: '100%',
                    duration: 5,
                    repeat: -1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: testimonials,
                        start: 'top bottom',
                    },
                    onRepeat: function () {
                        next.trigger('click')
                    }
                })

                $this.on('mouseenter', function () {

                    testAutPlay.pause();

                })

                $this.on('mouseleave', function () {

                    testAutPlay.play();

                })

            }

        })


    }

    /* Testimonials */

    /* Seperator */

    function aliothSeperator() {

        let seperator = $('.alioth-seperator');

        seperator.each(function () {

            let $this = $(this),
                bgColor = $this.data('color'),
                willAnim = $this.data('anim');

            gsap.set($this, {
                backgroundColor: bgColor
            })


            if (willAnim == true) {

                gsap.to($this, 1.5, {
                    width: '100%',
                    scrollTrigger: {
                        trigger: $this
                    },
                    ease: 'power1.inOut'
                })
            }

        });

    }


    /* Seperator */

    /* Buttons */

    function aliothButtons() {

        var aButton = $('.a-button');

        aButton.each(function () {

            var $this = $(this),
                overlay = '<span class="button-overlay"></span>';

            if ($this.hasClass('style_1')) {

                $this.prepend(overlay);

                let parentOffset = $this.offset(),
                    overlayIn = $this.children('.button-overlay')

                $this.on('mouseenter', function (e) {

                    gsap.set(overlayIn, {
                        left: e.pageX - parentOffset.left,
                        top: e.pageY - parentOffset.top

                    })

                    gsap.to(overlayIn, {
                        width: '100%',
                        height: '100%'
                    })

                });

                $this.on('mouseleave', function (e) {
                    gsap.to(overlayIn, {
                        width: '0%',
                        height: '0%'
                    })
                })
            }

        });


        var circularButton = $('.circular-button');

        circularButton.each(function () {


            let $this = $(this),
                target = $this.attr('href');

            if ($this.hasClass('scroller')) {

                $this.on('click', function (e) {

                    e.preventDefault();

                    gsap.to(window, {
                        duration: 1,
                        scrollTo: target,
                        ease: 'power2.out'
                    });


                })


            }


        })

        var scrollNot = $('.scroll-notice');

        scrollNot.on('click', function () {

            let $this = $(this),
                target = $this.data('target');

            gsap.to(window, {
                duration: 3,
                scrollTo: target,
                ease: 'power2.out'
            });

        })


    }

    /* Buttons */


    /* Embed Video*/

    function aliothEmbedVideo() {


        if ($('.alioth-embed-video').length > 0) {

            var aEmbedVideo = $('.alioth-embed-video');

            aEmbedVideo.each(function (i) {
                i++

                var $this = $(this),
                    playButon = $this.find('.play-button'),
                    embedVideo = $this.children('.embed-video'),
                    overlay = $this.children('.video-overlay'),
                    autoplayCheck = $this.data('autoplay'),
                    interactions = $this.data('interaction');

                if ((autoplayCheck == true) && (interactions == true)) {

                    $this.addClass('no-interaction');

                    let cVideo = new Plyr(embedVideo, {
                        controls: false,
                        autoplay: true,
                        autopause: false,
                        clickToPlay: false,
                        muted: true,
                        volume: 0,
                        quality: {
                            default: 1080
                        },
                        loop: {
                            active: true
                        },

                    });


                }

                if (autoplayCheck == true) {

                    let cVideo = new Plyr(embedVideo, {
                        controls: ["play-large",
                            "play",
                            "progress",
                            "duration",
                            "mute",
                            "volume",
                            "fullscreen"
                        ],
                        autoplay: true,
                        autopause: false,
                        clickToPlay: false,
                        muted: true,
                        volume: 0,
                        quality: {
                            default: 1080
                        },
                        loop: {
                            active: true
                        },

                    });


                    overlay.on('click', function () {

                        $this.addClass('video-play');
                        cVideo.restart();
                        cVideo.increaseVolume(1);

                    })


                } else {

                    let cVideo = new Plyr(embedVideo, {
                        controls: ["play-large",
                            "play",
                            "progress",
                            "duration",
                            "mute",
                            "volume",
                            "fullscreen"
                        ],
                        autoplay: false,
                        autopause: false,
                        clickToPlay: false,
                        muted: false,
                        quality: {
                            default: 1080
                        },

                    });

                    overlay.on('click', function () {

                        $this.addClass('video-play');
                        cVideo.play();

                    })

                };
            })

        };


    }

    /* Embed Video */



    /* Heading */

    function aliothHeading() {

        var heading = $('.alioth-heading');

        heading.each(function () {

            let $this = $(this),
                parallax = $this.data('parallax'),
                image = $this.data('image'),
                bgText = $this.data('background-text'),
                img = $this.children('.ah-image'),
                title = $this.children('.ah-title');

            if (parallax == true) {

                $this.addClass('will_anim')

                if (image == true) {

                    $this.addClass('with_image');

                    gsap.to(img, {
                        y: -100,
                        scrollTrigger: {
                            trigger: $this,
                            start: 'top bottom',
                            scrub: true
                        }
                    })


                    gsap.to(title, {
                        y: 100,
                        scrollTrigger: {
                            trigger: $this,
                            start: 'top bottom',
                            scrub: true
                        }
                    })




                } else {

                    $this.addClass('no-image');

                    if (bgText != null) {

                        $this.prepend('<div class="heading-bg-text">' + bgText + '</div>')

                        gsap.to($this.find('.heading-bg-text'), {
                            x: '-20%',
                            scrollTrigger: {
                                trigger: $this,
                                start: 'top bottom',
                                end: 'bottom top',
                                scrub: true,
                                markers: false

                            }

                        })


                    }


                }



            }

        })

    }

    /* Heading */

    /* Recent Works Carousel */

    function aliothRecentWorks() {

        var recentWorkCarousel = $('.a-recent-works');


        recentWorkCarousel.each(function () {

            let $this = $(this),
                wrapper = $this.children('.recent-works-wrapper'),
                wrapperWidth = wrapper.outerWidth(),
                wrapTransVal = wrapperWidth - window.outerWidth + window.outerWidth / 2,
                bgText = $this.find('.recent-works-bg-text'),
                parentSec = $this.parents('.wrapper'),
                navType = $this.data('navigate');

            if (navType === 'scroll') {

                $this.addClass('navby-scroll')

                var scrollAn = gsap.to(wrapper, {
                    x: "-" + wrapTransVal,

                });

                var cumba = gsap.to(bgText, {
                    x: "0%",
                    scrollTrigger: {
                        trigger: $this,
                        start: "top top",
                        end: "bottom top",
                        scrub: 2,
                        pin: true,
                        snap: false,
                        pinType: 'fixed',
                        pinSpacing: 'margin'
                    }
                })

                ScrollTrigger.create({
                    animation: scrollAn,
                    trigger: $this,
                    start: "top top",
                    end: "bottom top",
                    scrub: 2,
                    pin: true,
                    snap: false,
                    pinSpacing: 'false',
                    anticipatePin: false,
                    pinType: 'fixed'

                });

                gsap.fromTo($this, {
                    x: '100%'
                }, {
                    x: '0%',
                    scrollTrigger: {
                        trigger: parentSec,
                        pin: false,
                        start: 'top bottom',
                        end: 'top top',
                        scrub: 2
                    }
                })

                gsap.fromTo($this, {
                    x: '0%'
                }, {
                    x: '-25%',
                    scrollTrigger: {
                        trigger: parentSec,
                        pin: false,
                        scrub: 2,
                        start: 'bottom bottom',
                        end: 'bottom top',
                    }

                })



            } else if (navType === 'arrows') {

                $this.addClass('navby-arrows');

                let slides = $this.find('.ar-work'),
                    totSlides = slides.length,
                    slideWidth = $('.ar-work').outerWidth(),
                    nextButton = $('.arw-next'),
                    prevButton = $('.arw-prev');

                slides.each(function (i) {

                    i++
                    let $this = $(this);

                    $this.attr('data-index', i);
                    $this.addClass('slide_' + i)

                })

                $('.ar-work:first-child').addClass('active')

                var arrowClicks = 0;

                nextButton.on('click', function () {

                    $('.ar-work').removeClass('active');

                    gsap.to('.ar-work', {
                        x: "-100%"
                    })

                })

                Draggable.create(wrapper, {
                    type: "x",
                    bounds: $this,
                    autoScroll: true,
                    inertia: true,
                    edgeResistance: 0.4,
                    dragResistance: 0.4,
                    throwProps: true,
                    onDrag: function (message, num) {
                        console.log("message: " + message + ", num: " + num);
                    }
                });

            }

        })


    }


    /* Recent Works Carousel */

    /* Linked Text */

    function aliothLinkedText() {

        var linkedText = $('.linked-text');

        linkedText.each(function () {

            let $this = $(this),
                text = $this.find(">:first-child"),
                links = $this.find('a'),
                height = text.css('font-size'),
                finalHeight = parseInt(height, 10) + 24;

            new SplitText(text, {
                type: 'lines, words',
                linesClass: 'linked-line',
                wordsClass: 'linked-word'
            })



            gsap.set($this.find('.linked-line'), {
                height: finalHeight
            })

            gsap.set($this.children(), {
                lineHeight: finalHeight + 'px'
            })


            links.each(function () {

                let $this = $(this),
                    targetTitle = $this.data('target'),
                    bgDiv = $this.children('div');

                $this.append('<span class="link-target"><span>' + targetTitle + '</span></span>')


            });


            links.on('mouseenter', function () {

                let $this = $(this),
                    linkWords = $this.find('div'),
                    linkSpan = $this.find('.link-target');

                gsap.to(linkWords, {
                    y: '-110%',
                    ease: 'power2.inOut',

                });

                gsap.to(linkSpan, {
                    y: '-100%',
                    ease: 'power2.inOut',

                })

            })

            links.on('mouseleave', function () {

                let $this = $(this),
                    linkWords = $this.find('div'),
                    linkSpan = $this.find('.link-target');

                gsap.to(linkWords, {
                    y: '0%'
                });

                gsap.to(linkSpan, {
                    y: '0%'
                })

            })

            let lines = $this.find('.linked-lin'),
                words = $this.find('.linked-word');




            gsap.fromTo(words, {
                y: '100%'
            }, {
                y: '0%',
                ease: 'power2.Out',
                duration: 1,
                delay: .7,
                onComplete: function () {

                    $this.addClass('loaded')

                }

            })


            $(window).on('resize', function () {


                let text = $this.find(">:first-child"),
                    links = $this.find('a'),
                    height = text.css('font-size'),
                    finalHeight = parseInt(height, 10) + 24;


                gsap.set($this.find('.linked-line'), {
                    height: finalHeight
                })

                gsap.set($this.children(), {
                    lineHeight: finalHeight + 'px'
                })



            })



        });

    }

    /* Linked Text */


    /* Team Carousel */

    function aliothTeamCarousel() {

        var aliothTeam = $('.alioth-team');

        aliothTeam.each(function () {

            let $this = $(this),
                container = $this.children('.team-container'),
                member = $this.find('.swiper-slide');

            container.addClass('cakomako')

            var teamCarousel = new Swiper('.team-container', {
                slidesPerView: "auto",
                navigation: {
                    nextEl: '.prev'
                },
                //                freeMode: true,
                spaceBetween: 15,
                pagination: {
                    el: '.team-progress',
                    type: 'progressbar',
                },
                grabCursor: true,
                //                freeModeSticky: true,
                //                freeModeMinimumVelocity: 0.1,
                //                freeModeMomentumRatio: 2


            });

            member.on('mouseenter', function () {

                let $this = $(this),
                    socials = $this.children('.tm-socials'),
                    icons = socials.find('li');

                var socialsAnim = gsap.to(icons, .4, {
                    x: 0,
                    opacity: 1,
                    stagger: 0.1,
                    overwrite: true
                })

                window.socialsAnim = socialsAnim;

            });

            member.on('mouseleave', function () {

                let $this = $(this),
                    socials = $this.children('.tm-socials'),
                    icons = socials.find('li');

                var socialsAnim = gsap.to(icons, .4, {
                    x: '100%',
                    opacity: 0,
                    stagger: -0.1,
                    overwrite: true
                })


            })


        })


    }



    /* Team Carousel */

    /* Scrollable Text */

    function aliothScrollableText() {

        var scText = $('.scrollable-text');

        scText.each(function () {

            let $this = $(this);

            gsap.fromTo($this, {
                x: '60%'
            }, {
                x: '-60%',
                scrollTrigger: {
                    trigger: $this,
                    scrub: 2,
                    start: 'top bottom',
                    end: 'bottom top',
                }
            })


        })


    }


    /* Scrollable Text */



    /* Showcase List */

    function aliothShowcaseList() {

        var showcaseList = $('.showcase-list'),
            wrapper = $('.showcase-list-wrapper'),
            listProject = showcaseList.find('.sl-project'),
            slImages = $('.sl-images'),
            activeImage;

        listProject.each(function (i) {

            i++

            let $this = $(this),
                image = $this.find('.sl-project-image'),
                title = $this.find('.sl-project-title'),
                video = $this.find('.showcase-video');


            image.wrapInner('<div class="sl-hover-wrap"></div>');
            image.addClass('image_' + i);
            slImages.append(image)

            $this.attr('data-image', '.image_' + i)


            if (i < 10) {
                $this.attr('data-index', '0' + i)
            } else {
                $this.attr('data-index', i)
            }


            $this.on('mouseenter', function () {

                let findImg = $this.data('image')

                gsap.set(findImg, {
                    visibility: 'visible'
                });

                listProject.addClass('opdown')
                $this.removeClass('opdown');
                $(findImg).addClass('active');

            })

            $this.on('mouseleave', function () {

                gsap.set('.sl-project-image', {
                    visibility: 'hidden'
                })

                listProject.removeClass('opdown')

                $('.sl-project-image').removeClass('active')

            })

        })


        let wrapperHeight = wrapper.outerHeight(),
            scrollTot = wrapperHeight - $(window).outerHeight();


        let listScroll = gsap.to(wrapper, {
            y: '-100%'
        })

        ScrollTrigger.create({
            trigger: wrapper,
            start: "top top",
            end: 'bottom+=1000 top',
            id: 'showcaseScroll',
            animation: listScroll,
            scrub: true,
            pin: true,
            pinType: 'fixed',
            pinSpacing: false,

        });

        ScrollTrigger.create({

            trigger: showcaseList,
            start: 'top top',
            end: 'bottom top',
            onLeave: function () {

                gsap.to('.showcase-footer', {
                    opacity: 0

                })
            },

        })

        window.addEventListener("mousemove", function (event) {
            let x = event.clientX,
                y = event.clientY;

            gsap.to('.sl-images', {
                top: y,
                left: x
            })



        });




    }


    /* Showcase List */

    /* Showcase Fullscreen Slider */
    function aliothShowcaseFullscrenSlider() {

        var project = $('.fs-project'),
            fsImages = $('.fs-images'),
            fract = $('.fs-fraction'),
            currentSlide,
            nextSlide,
            prevSlide,
            titLines,
            mets,
            but,
            fsTit,
            actIndex,
            actImg,
            nextImg,
            prevImg,
            activeProj;

        project.each(function (i) {

            i++

            let $this = $(this),
                image = $this.find('.fs-project-image'),
                title = $this.find('.fs-title'),
                meta = $this.find('.fs-meta'),
                button = $this.find('.fs-button');

            $this.attr('data-title', title.text())

            const titleSplit = new SplitText(title, {
                type: 'lines, chars',
                linesClass: 'fs-tit-line',
                charsClass: 'fs-tit-char'
            })

            meta.wrapInner('<span></span>')
            button.wrapInner('<span></span>')


            image.attr('data-project', '.project_' + i);
            image.attr('data-index', i);
            $this.addClass('project_' + i)

            $('.fs-images').append(image.addClass('swiper-slide'));

        });


        $('.fs-images .swiper-slide').wrapInner('<div class="fs-img-wrap"></div>')
        $('.fs-tit-char').wrapInner('<span></span>')
        $('.fs-images').wrapInner('<div class="swiper-wrapper"></div>')

        var interleaveOffset = 0.5;

        var fsSlider = new Swiper('.fs-images', {
            mousewheel: {
                invert: false,
                eventsTarget: '.fullscreen-slider-showcase'
            },
            allowTouchMove: true,
            touchEventsTarget: '.fullscreen-slider-showcase',
            loop: false,
            breakpoints: {
                // when window width is >= 320px
                450: {
                    allowTouchMove: false,
                },

            },
            pagination: {
                el: '.fs-prog',
                type: 'progressbar',

            },

            slidesPerView: 1,
            navigation: {
                nextEl: '.fs-next',
                prevEl: '.fs-prev',
            },
            speed: 1200,
            parallax: true,
            watchSlidesProgress: true,
            on: {

                progress: function () {
                    let swiper = this;
                    for (let i = 0; i < swiper.slides.length; i++) {
                        let slideProgress = swiper.slides[i].progress,
                            innerOffset = swiper.width * interleaveOffset,
                            innerTranslate = slideProgress * innerOffset;

                        swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                            "translateX(" + innerTranslate + "px)";
                    }
                },
                setTransition: function (speed) {
                    let swiper = this;
                    for (let i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = speed + "ms";
                        swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                            1200 + "ms";
                    }
                },

            }


        });

        function slideCheck() {

            currentSlide = $('.swiper-slide-active');
            nextSlide = $('.swiper-slide-next');
            prevSlide = $('.swiper-slide-prev');

            actImg = $(currentSlide).find('img');
            nextImg = $(nextSlide).find('img');
            prevImg = $(prevSlide).find('img');

            activeProj = $(currentSlide).data('project');
            actIndex = $(currentSlide).data('index');

            titLines = $(activeProj).find('.fs-tit-char > span');
            fsTit = $(activeProj).find('.fs-title');
            mets = $(activeProj).find('.fs-meta > span');
            but = $(activeProj).find('.fs-button > span');


        }

        slideCheck();


        $('.fs-project').removeClass('active')
        $(activeProj).addClass('active');

        fsSlider.on('slideChange', function () {

            slideCheck();



        })

        var mobileQuery = window.matchMedia('(max-width: 450px)')

        fsSlider.on('slideNextTransitionStart', function () {

            // Check if the media query is true
            if (!mobileQuery.matches) {
                gsap.fromTo(actImg, 2, {
                    scale: 1,
                    rotate: 0
                }, {
                    scale: 1.1,
                    rotate: -5
                }, 0)

                gsap.fromTo(nextImg, 2, {
                    scale: 1.2,
                    rotate: 5
                }, {
                    scale: 1,
                    rotate: 0
                }, 0)


            }


            let slideNextOut = gsap.timeline();

            slideNextOut.fromTo(titLines, .6, {
                x: 0,

            }, {
                x: -100,
                stagger: 0.01,
                ease: 'power1.in',

            }, 0)


            slideNextOut.fromTo('.fs-fraction span', .6, {
                x: 0,
                opacity: 1
            }, {
                x: -30,
                opacity: 0,
                ease: 'power2.in',
            }, .6)

            slideNextOut.fromTo(mets, .6, {
                x: 0,
                opacity: 1
            }, {
                x: -30,
                opacity: 0,
                ease: 'power2.in',
            }, .3)



        })

        fsSlider.on('slideNextTransitionEnd', function () {

            slideCheck();

            $('.fs-project').removeClass('active')
            $(activeProj).addClass('active');

            let slideNextIn = gsap.timeline();

            slideNextIn.fromTo(titLines, .5, {
                x: 100,

            }, {
                x: 0,

                stagger: 0.01,
                ease: 'power1.out',

            }, 0)


            slideNextIn.fromTo('.fs-fraction span', .6, {
                x: 30,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'power1.out',
                onStart: function () {

                    $('.fs-fraction span').html('0' + actIndex)
                }
            }, .3)

            slideNextIn.fromTo(mets, .6, {
                x: 30,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'power1.out',
            }, .3)


        })

        fsSlider.on('slidePrevTransitionStart', function () {

            // Check if the media query is true
            if (!mobileQuery.matches) {

                gsap.fromTo(actImg, 2, {
                    scale: 1,
                    rotate: 0
                }, {
                    scale: 1.1,
                    rotate: 5
                }, 0)

                gsap.fromTo(prevImg, 2, {
                    scale: 1.2,
                    rotate: -5
                }, {
                    scale: 1,
                    rotate: 0
                }, 0)

            }


            let slidePrevOut = gsap.timeline();

            slidePrevOut.fromTo(titLines, .5, {
                x: 0,

            }, {
                x: 100,

                stagger: -0.01,
                ease: 'power1.in',

            }, 0)


            slidePrevOut.fromTo('.fs-fraction span', .6, {
                x: 0,
                opacity: 1
            }, {
                x: 30,
                opacity: 0,
                ease: 'power1.in',
            }, .6)

            slidePrevOut.fromTo(mets, .6, {
                x: 0,
                opacity: 1
            }, {
                x: 30,
                opacity: 0,
                ease: 'power1.in',
            }, .3)

        })

        fsSlider.on('slidePrevTransitionEnd', function () {

            slideCheck();

            $('.fs-project').removeClass('active')
            $(activeProj).addClass('active');

            let slidePrevIn = gsap.timeline();

            slidePrevIn.fromTo(titLines, .5, {
                x: -100,

            }, {
                x: 0,

                stagger: -0.01,
                ease: 'power1.out',

            }, 0)


            slidePrevIn.fromTo('.fs-fraction span', .6, {
                x: -30,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'power1.out',
                onStart: function () {

                    $('.fs-fraction span').html('0' + actIndex)
                }
            }, .3)

            slidePrevIn.fromTo(mets, .6, {
                x: -30,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'power1.out',
            }, .3)



        })


    }

    /* Showcase Fullscreen Slider */

    /* Showcase Carousel  */

    function aliothShowcaseCarousel() {

        var project = $('.cas-project'),
            wrapper = $('.cas-project-wrapper'),
            projectTitles = $('.cas-titles'),
            headline = $('.cas-headline'),
            bgText = $('.cas-bg-text'),
            wrapFirstTrans = $(window).outerWidth() / 100 * 90,
            activeProject;

        new SplitText(headline, {
            type: 'lines',
            linesClass: 'cas-line',
        })

        project.each(function (i) {

            i++
            let $this = $(this),
                title = $this.find('.cs-title'),
                img = $this.find('img').attr('src');

            $this.addClass('cas_project_' + i)

            $this.attr('data-title', '.title_' + i)

            projectTitles.append(title.addClass('title_' + i));

            title.attr('data-project', '.cas_project_' + i)

        });

        projectTitles.wrapInner('<div class="cas-titles-wrap"></div>')


        $('.cas-line').wrapInner('<span></span>')

        gsap.to('.cas-line span', {
            y: '-100%',
            stagger: 0.01,
            ease: 'none',
            scrollTrigger: {
                trigger: '.carousel-showcase',
                start: 'top top',
                end: '10% top',
                scrub: 1,
                markers: false
            }
        })

        gsap.fromTo(bgText, {
            x: '100%'
        }, {
            x: '-30%',
            scrollTrigger: {
                trigger: '.carousel-showcase',
                scrub: 1,
                start: 'top top',
                end: 'bottom+=3000 top',
                markers: false

            }
        });

        var totProj = $('.cas-project').length,

            transVal = totProj * 250 - 250

        var mobileQuery = window.matchMedia('(max-width: 450px)'),
            tabletQuery = window.matchMedia('(min-width: 450px) and (max-width: 900px)');


        // Check if the media query is true
        if (mobileQuery.matches) {

            transVal = totProj * 80 - 80
        }

        if (tabletQuery.matches) {

            transVal = totProj * 200 - 200
        }


        gsap.to('.cas-titles-wrap', {
            y: -transVal,
            scrollTrigger: {
                trigger: '.carousel-showcase',
                scrub: 1,
                start: 'top top',
                end: 'bottom+=3000 top',
                markers: false

            }

        })


        gsap.set('.showcase-footer', {
            position: 'fixed'
        })


        let csw = gsap.fromTo(wrapper, {
                x: wrapFirstTrans
            }, {
                x: '-' + (wrapper.outerWidth() - $(window).outerWidth() + 350)

            }),
            windowWidth = $(window).outerWidth(),
            css = new ScrollTrigger({
                trigger: '.carousel-showcase',
                animation: csw,
                pin: true,
                scrub: 1,
                id: 'showcaseScroll',
                start: 'top top',
                end: 'bottom+=3000 top',
                markers: false,
                onUpdate: function (self, progress) {

                    let prog = $('.cas-progress span');

                    gsap.to(prog, {
                        width: self.progress * 100 + '%'
                    })

                    project.each(function () {

                        let $this = $(this)



                    })

                },

                onLeave: function () {


                    gsap.to('.showcase-footer', {


                        opacity: 0

                    })

                },
                onEnterBack: function () {

                    gsap.to('.showcase-footer', {


                        opacity: 1

                    })



                },

            });

        $('.cs-title').on('mouseenter', function () {

            let $this = $(this);

            $this.addClass('active')
        })

        $('.cs-title').on('mouseleave', function () {

            let $this = $(this);

            $this.removeClass('active')
        })



    }

    /* Showcase Carousel  */

    /* Showcase Slideshow  */
    function aliothShowcaseSlide() {

        var showcaseSlideshow = $('.showcase-slideshow'),
            wrapper = showcaseSlideshow.children('.showcase-slideshow-wrapper'),
            projects = wrapper.find('.ss-project'),
            imagesWrapper = showcaseSlideshow.children('.ss1-images'),
            images = $('.ss1-images .ss1-image-wrap'),
            currentSlide,
            activeDets,
            date,
            lines,
            chars,
            projectURL,
            catChars,
            sumLines,
            slideOut,
            nextSlide,
            nextImage,
            prevSlide,
            prevImage,
            ssImage,
            ssImg;



        function slideCheck() {

            currentSlide = $('.swiper-slide-active');
            nextSlide = $('.swiper-slide-next')
            prevSlide = $('.swiper-slide-prev')

            activeDets = '.' + $(currentSlide).data('project');


            $('.ss-project').removeClass('active')
            $(activeDets).addClass('active');

            lines = $(activeDets).find('.st-line');
            chars = lines.find('.st-char');
            sumLines = $(activeDets).find('.suml-wrap');
            date = $(activeDets).find('.ss1-date');
            catChars = $(activeDets).find('.cat_char');

            projectURL = $(activeDets).find('.ss1-url').attr('href');

            $('.ss1-button a').attr('href', projectURL)

            ssImage = $(currentSlide).find('.ss1-sl-image');
            ssImg = $(currentSlide).find('img');

            nextImage = $(nextSlide).find('img')
            prevImage = $(prevSlide).find('img')

        }



        projects.each(function (i) {

            i++

            let $this = $(this),
                title = $this.find('.ss1-title'),
                image = $this.children('.ss1-image'),
                video = $this.find('.showcase-video'),
                img = image.children('img'),
                src = img.attr('src'),
                cat = $this.find('.ss1-cat'),
                date = $this.find('.ss1-date'),
                summary = $this.find('.ss1-summary'),
                width = imagesWrapper.outerWidth();

            $this.attr('data-title', title.text());

            if (video.length) {

                imagesWrapper.append('<div class="ss1-image-wrap swiper-slide ss_slid_' + i + '" data-project="slide_' + i + '"><div class="ss1-sl-image"></div></div>');

                let targetSlid = $('.ss_slid_' + i).find('.ss1-sl-image');

                video.appendTo(targetSlid)

            } else {

                imagesWrapper.append('<div class="ss1-image-wrap swiper-slide ss_slid_' + i + '" data-project="slide_' + i + '"><div class="ss1-sl-image"><img src="' + src + '"/></div></div>');

            }


            new SplitText(summary, {
                type: 'lines',
                linesClass: 'ssum-line'
            });

            new SplitText(cat, {
                type: 'chars',
                charsClass: 'cat_char'
            });

            new SplitText(title, {
                type: 'lines , chars',
                linesClass: 'st-line',
                charsClass: 'st-char'
            });

            title.find('.st-line').wrapInner('<div class="tl-wrap"></div>');
            summary.find('.ssum-line').wrapInner('<div class="suml-wrap"></div>');


            new SplitText(date, {
                type: 'chars',
                charsClass: 'sd-char'
            });

            $this.attr('data-slide', i);
            $this.addClass('slide_' + i)



        })


        $('.ss1-images').wrapInner('<div class="swiper-wrapper"></div>')



        var prjectsSlider = new Swiper('.ss1-images', {
            slidesPerView: 1,
            speed: 1000,
            navigation: {
                nextEl: '.ss1-next',
                prevEl: '.ss1-prev',
            },
            pagination: {
                el: '.ss1-dots',
                type: 'bullets',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">0' + (index + 1) + '</span>';
                }
            },
            mousewheel: {
                invert: false,
                eventsTarget: '.showcase-slideshow'
            },
            loop: true,
            direction: 'vertical',
            on: {
                progress: function (swiper, progress) {


                },
                slideChange: function () {

                    slideCheck();

                },
                slidePrevTransitionStart: function () {

                    let slidePrevOut = gsap.timeline({
                        yoyo: true
                    });

                    slidePrevOut.fromTo(prevImage, 1.5, {
                        rotate: -5,
                        scale: 1.2
                    }, {
                        rotate: 0,
                        scale: 1,
                        ease: 'power2.out'
                    }, 0)


                    slidePrevOut.fromTo(catChars, .5, {
                        y: '0%',
                    }, {
                        y: '100%',
                        ease: 'power2.in',
                        stagger: -0.01
                    }, 0)

                    slidePrevOut.fromTo(sumLines, .6, {
                        y: "0%"
                    }, {
                        y: "100%",
                        stagger: -.02,
                        ease: 'power2.in'
                    }, .3)

                    lines.each(function () {

                        slidePrevOut.fromTo(chars, .6, {
                            y: '0%'
                        }, {
                            y: '110%',
                            ease: 'power2.in',
                            stagger: -.01
                        }, 0)

                    })
                },
                slidePrevTransitionEnd: function () {

                    slideCheck();

                    let slidePrevIn = gsap.timeline({
                        yoyo: true
                    });

                    slidePrevIn.fromTo(catChars, .5, {
                        y: '-100%',
                    }, {
                        y: '0%',
                        ease: 'power2.out',
                        stagger: 0.01
                    }, 0)

                    slidePrevIn.fromTo(sumLines, .6, {
                        y: "-100%"
                    }, {
                        y: "0%",
                        stagger: -.02,
                        ease: 'power2.out'
                    }, .3)

                    lines.each(function () {

                        slidePrevIn.fromTo(chars, .6, {
                            y: '-110%'
                        }, {
                            y: '0%',
                            ease: 'power2.out',
                            stagger: -.01
                        }, 0)

                    })

                },
                slideNextTransitionStart: function () {


                    let slideNextOut = gsap.timeline({
                        yoyo: true
                    });

                    slideNextOut.fromTo(nextImage, 1.5, {
                        rotate: 5,
                        scale: 1.2
                    }, {
                        rotate: 0,
                        scale: 1,
                        ease: 'power2.out'
                    }, 0)


                    slideNextOut.fromTo(catChars, .5, {
                        y: '0%',
                    }, {
                        y: '-100%',
                        ease: 'power2.in',
                        stagger: 0.01
                    }, 0)

                    slideNextOut.fromTo(sumLines, .6, {
                        y: "0%"
                    }, {
                        y: "-100%",
                        stagger: .02,
                        ease: 'power2.in'
                    }, .3)

                    lines.each(function () {

                        slideNextOut.fromTo(chars, .6, {
                            y: '0%',

                        }, {
                            y: '-110%',

                            ease: 'power2.in',
                            stagger: .01
                        }, 0)

                    })

                },
                slideNextTransitionEnd: function () {

                    slideCheck();

                    let slideNextIn = gsap.timeline({
                        yoyo: true
                    });

                    slideNextIn.fromTo(catChars, .5, {
                        y: '100%',
                    }, {
                        y: '0%',
                        ease: 'power2.out',
                        stagger: -0.01
                    }, 0)

                    slideNextIn.fromTo(sumLines, .6, {
                        y: "100%"
                    }, {
                        y: "0%",
                        stagger: .02,
                        ease: 'power2.out'
                    }, .3)

                    lines.each(function () {

                        slideNextIn.fromTo(chars, .6, {
                            y: '110%'
                        }, {
                            y: '0%',
                            opacity: 1,
                            ease: 'power2.out',
                            stagger: .01
                        }, 0)

                    })

                }
            }

        });


        slideCheck();



    }
    /* Showcase Slideshow */



    /* Showcase Slideshow V2 */

    function aliothShowcaseSlideV2() {

        var showcaseSlideV2 = $('.showcase-slideshow-v2'),
            ss2Project = showcaseSlideV2.find('.ss2-project'),
            totSlides = ss2Project.length,
            dots = $('.ss2-dot'),
            backText = $('.ss2-back-text'),
            totSlides = ss2Project.length,
            activeURL,
            currentSlide,
            titleChar,
            excerptLine,
            catSpan,
            backChars,
            activeIndex,
            activeDets;

        $('.ss2-tot').text('0' + totSlides)


        new SplitText(backText, {
            type: 'chars',
            charsClass: 'bt-char'
        });

        $('.bt-char').wrapInner('<span></span>')


        ss2Project.each(function (i) {

            i++

            let $this = $(this),
                meta = $this.find('.ss2-project-meta'),
                cat = meta.children('.ss2-project-cat'),
                title = meta.children('.ss2-project-title'),
                excerpt = meta.find('.ss2-project-excerpt'),
                image = $this.children('.ss2-project-image'),
                img = image.children('img'),
                index = $this.data('index');

            $this.attr('data-title', title.text());


            $('.ss2-back-texts').append('<div class="ss2-back-text back_' + i + '">' + title.text() + '</div>')

            $('.ss2-images').append(image);

            $this.attr('data-index', i);
            $this.addClass('slide_' + i);

            new SplitText(excerpt, {
                type: 'lines',
                linesClass: 'excerpt-line'
            });

            let lines = excerpt.find('.excerpt-line')

            lines.wrapInner('<span></span>');

            cat.wrapInner('<span></span>');

            new SplitText(title, {
                type: 'chars, lines',
                linesClass: 'title-line',
                charsClass: 'title-char'
            });

        });

        new SplitText('.ss2-back-text', {
            type: 'chars',
            charsClass: 'bt-char'
        })

        $('.bt-char').wrapInner('<span></span>')

        let ss2Images = $('.ss2-images'),
            ss2Image = ss2Images.find('.ss2-project-image')

        ss2Images.wrapInner('<div class="swiper-wrapper"></div>');


        ss2Image.each(function (i) {

            i++

            let $this = $(this);

            $this.wrapInner('<div class="slide-bgimg"></div>')
            $this.wrap('<div class="swiper-slide"></div>')

            $this.parent('.swiper-slide').attr('data-slide', '.slide_' + i)

        })




        var interleaveOffset = 0.5;

        var ss2ImagesSlider = new Swiper('.ss2-images', {
            mousewheel: {
                invert: false,
                eventsTarget: '.showcase-slideshow-v2'
            },
            allowTouchMove: false,
            pagination: {
                el: '.ss2-dots',
                type: 'bullets',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="ss2-dot ' + className + '">0' + (index + 1) + '</span>';
                }
            },
            slidesPerView: 1,
            navigation: {
                nextEl: '.ss2-next',
                prevEl: '.ss2-prev',
            },
            speed: 1000,
            parallax: true,
            watchSlidesProgress: true,
            on: {

                progress: function () {
                    let swiper = this;
                    for (let i = 0; i < swiper.slides.length; i++) {
                        let slideProgress = swiper.slides[i].progress,
                            innerOffset = swiper.width * interleaveOffset,
                            innerTranslate = slideProgress * innerOffset;

                        swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                            "translateX(" + innerTranslate + "px)";
                    }
                },
                setTransition: function (speed) {
                    let swiper = this;
                    for (let i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = speed + "ms";
                        swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                            1000 + "ms";
                    }
                },

            }


        });

        var rule = CSSRulePlugin.getRule(".portfolio-showcaseCheck.showcase-slideshow-v2::before"); //get the rule


        var ss2ScrollAnim = gsap.timeline({
            yoyo: true
        })

        ss2ScrollAnim.to('.ss2-images', {
            y: -150
        }, 0)

        ss2ScrollAnim.to('.ss2-button', {
            y: -50
        }, 0)

        ss2ScrollAnim.to('.ss2-back-texts', {
            y: -100
        }, 0)

        ss2ScrollAnim.to('.showcase-slideshow-2-wrapper', {
            y: -200
        }, 0)

        ss2ScrollAnim.to('.ss2-dots', {
            y: -100
        }, 0)


        let scrolla = new ScrollTrigger({
            trigger: showcaseSlideV2,
            animation: ss2ScrollAnim,
            id: 'showcaseScroll',
            pin: true,
            pinType: 'fixed',
            pinSpacing: false,
            start: 'top+=220 top',
            scrub: 0.5,
            end: 'bottom top',
            markers: false,
            onUpdate: function (self, progress) {

                var boxSet = gsap.quickSetter(rule, "css");
                boxSet({
                    cssRule: {
                        opacity: self.progress
                    }
                });

            },
            onLeaveBack: function () {



            }
        })







        function slideChecko() {

            currentSlide = $('.swiper-slide-active');

            activeDets = currentSlide.data('slide');

            titleChar = $(activeDets).find('.title-char');
            excerptLine = $(activeDets).find('.excerpt-line span');
            catSpan = $(activeDets).find('.ss2-project-cat span');


            backText = '.back_' + $(activeDets).data('index');

            backChars = $(backText).find('.bt-char span')

            activeURL = $(activeDets).find('a').attr('href');

            activeIndex = $(activeDets).data('index');


        }

        slideChecko();

        $('.ss2-button a').attr('href', activeURL);
        $('.ss2-curr').text('0' + activeIndex);

        $(activeDets).addClass('active');
        $(backText).addClass('active');

        ss2ImagesSlider.on('slideChange', function () {

            slideChecko();

            let slideOut = gsap.timeline({
                yoyo: true,
                onComplete: function () {
                    $(activeDets).removeClass('active')
                    $(backText).removeClass('active');

                }
            })

            slideOut.fromTo(catSpan, {
                y: '0%'
            }, {
                y: '-100%',
                ease: 'power2.in',
            }, 0)

            slideOut.fromTo(titleChar, {
                y: '0%'
            }, {
                y: '-100%',
                stagger: 0.01,
                ease: 'power2.in',
            }, .1)

            slideOut.fromTo(excerptLine, {
                y: '0%'
            }, {
                y: '-100%',
                stagger: 0.02,
                ease: 'power2.in',
            }, .3)


            slideOut.fromTo(backChars, {
                x: 0
            }, {
                x: -150,
                stagger: 0.02,
                ease: 'power2.in',
            }, 0)



        })

        ss2ImagesSlider.on('slideChangeTransitionEnd', function () {

            slideChecko();

            $('.ss2-button a').attr('href', activeURL);
            $('.ss2-curr').text('0' + activeIndex);


            let slideIn = gsap.timeline({
                yoyo: true,
                onStart: function () {

                    $(activeDets).addClass('active');
                    $(backText).addClass('active');
                }
            })

            slideIn.fromTo(titleChar, {
                y: '100%'
            }, {
                y: '0%',
                ease: 'power2.out',
                stagger: 0.01
            }, 0)

            slideIn.fromTo(excerptLine, {
                y: '100%'
            }, {
                y: '0%',
                stagger: 0.01,
                ease: 'power2.out',
            }, 0)

            slideIn.fromTo(catSpan, {
                y: '100%'
            }, {
                y: '0%',
                ease: 'power2.out',
            }, 0)


            slideIn.fromTo(backChars, {
                x: 150
            }, {
                x: 0,
                stagger: 0.02,
                ease: 'power2.out',
            }, 0)

        })



        ss2ImagesSlider.on('transitionEnd', function () {

            let activeSlid = $('.swiper-slide-active'),
                activeIn = activeSlid.data('slide'),
                totSlid = $('.ss2-images .swiper-slide').length,
                lastSlid = '.slide_' + totSlid;

            if (activeIn === lastSlid) {

                this.mousewheel.disable();

            }


        })

        ScrollTrigger.create({
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            onLeaveBack: function () {
                ss2ImagesSlider.mousewheel.enable();
            }
        })






    }
    /* Showcase Slideshow V2 */



    /** Scroll Animations **/

    /* Parallax Scroll Animations */

    function aliothParallaxScroll() {



        let hasParallax = $('.has-parallax'),
            parallaxBg = $('.parallax-bg');


        hasParallax.each(function () {

            let $this = $(this),
                strength = $this.data('parallax-strength'),
                direction = $this.data('parallax-direction'),
                pStrength = strength * 100 + '%',
                pVal;


            if (direction === 'up') {

                pVal = '-' + pStrength;

            } else if (direction === 'down') {

                pVal = pStrength;
            }



            gsap.to($this, {
                y: pVal,
                scrollTrigger: {
                    trigger: $this,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            })

        })

        parallaxBg.each(function () {

            let $this = $(this);

            gsap.to($this, {
                backgroundPositionY: "100%",
                scrollTrigger: {
                    trigger: $this,
                    start: "top top",
                    scrub: 1.25,
                    end: "bottom top",
                }
            })

        })




    }


    /* Parallax Scroll Animations */

    function aliothScrollAnimations() {

        var hasAnim = $('.has-anim');

        //GSDevTools.create();

        hasAnim.each(function () {

            var $this = $(this),
                anim = $this.data('animation'),
                delay = $this.data('delay'),
                stagger = $this.data('stagger'),
                duration = $this.data('duration'),
                parent = $this.parent('div');


            if ((anim === 'linesUp') || (anim === 'linesDown') || (anim === 'linesFadeUp') || (anim === 'linesFadeDown') || (anim === 'linesFadeLeft') || (anim === 'linesFadeRight')) {

                var splitType = 'lines'



            } else if ((anim === 'wordsFadeUp') || (anim === 'wordsFadeDown') || (anim === 'wordsFadeLeft') || (anim === 'wordsFadeRight') || (anim === 'wordsUp') || (anim === 'wordsDown') || (anim === 'wordsLeft') || (anim === 'wordsRight')) {

                var splitType = 'words'



            } else if ((anim === 'charsFadeUp') || (anim === 'charsFadeDown') || (anim === 'charsFadeRight') || (anim === 'charsFadeLeft') || (anim === 'charsUp') || (anim === 'charsDown') || (anim === 'charsLeft') || (anim === 'charsRight')) {

                var splitType = 'lines, chars'

            }



            var splitto = new SplitText($this, {
                type: splitType,
                linesClass: 'anim_line',
                charsClass: 'anim_char',
                wordsClass: 'anim_word',
            });

            var lines = $this.find('.anim_line'),
                words = $this.find('.anim_word'),
                chars = $this.find('.anim_char');

            if (anim === 'linesFadeUp') {
                //                
                //                if (stagger == null) { var stagger = 0.1 }
                //                if (duration == null) { var duration = 1 }

                gsap.fromTo(lines, {
                    y: "100%",
                    opacity: 0
                }, {
                    y: "0%",
                    opacity: 1,
                    duration: duration,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        position: 'top top'
                    },
                    delay: delay,
                    ease: 'expo.out',
                    onComplete: function () {

                        splitto.revert();

                    }
                })

            } else if (anim === 'linesFadeDown') {
                gsap.fromTo(lines, {
                    y: "-100%",
                    opacity: 0
                }, {
                    y: "0%",
                    opacity: 1,
                    duration: duration,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        position: 'top top'
                    },
                    delay: delay,
                    onComplete: function () {

                        splitto.revert();

                    }
                })


            } else if (anim === 'linesFadeLeft') {
                gsap.fromTo(lines, {
                    x: "-100px",
                    opacity: 0
                }, {
                    x: "0",
                    opacity: 1,
                    duration: duration,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        position: 'top top'
                    },
                    delay: delay,
                    onComplete: function () {

                        splitto.revert();

                    }
                })


            } else if (anim === 'linesFadeRight') {
                gsap.fromTo(lines, {
                    x: "100px",
                    opacity: 0
                }, {
                    x: "0",
                    opacity: 1,
                    duration: duration,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        position: 'top top'
                    },
                    delay: delay,
                    onComplete: function () {

                        splitto.revert();

                    }
                })


            } else if (anim === 'linesUp') {

                lines.wrap('<span class="line-holder"></span>');

                gsap.fromTo(lines, {
                    y: "100%",

                }, {
                    y: "0%",
                    duration: duration,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        start: 'top bottom',
                    },
                    delay: delay,
                    ease: "power4.out",
                    onComplete: function () {

                        splitto.revert();

                    }
                })



            } else if (anim === 'linesDown') {

                lines.wrap('<span class="line-holder"></span>');

                gsap.fromTo(lines, {
                    y: "-100%",

                }, {
                    y: "0%",
                    duration: duration,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        position: 'top top'
                    },
                    delay: delay,
                    onComplete: function () {

                        splitto.revert();

                    }
                })



            } else if (anim === 'wordsFadeUp') {

                gsap.fromTo(words, {
                    y: "100%",
                    opacity: 0

                }, {
                    y: "0%",
                    duration: duration,
                    opacity: 1,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        position: 'top top'
                    },
                    delay: delay,
                    onComplete: function () {

                        splitto.revert();

                    }
                })

            } else if (anim === 'wordsFadeDown') {

                gsap.fromTo(words, {
                    y: "-100%",
                    opacity: 0

                }, {
                    y: "0%",
                    duration: duration,
                    opacity: 1,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        position: 'top top'
                    },
                    delay: delay,
                    onComplete: function () {

                        splitto.revert();

                    }
                })

            } else if (anim === 'wordsFadeLeft') {

                gsap.fromTo(words, {
                    x: "-100px",
                    opacity: 0

                }, {
                    x: "0",
                    duration: duration,
                    opacity: 1,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        position: 'top top'
                    },
                    delay: delay,
                    onComplete: function () {

                        splitto.revert();

                    }
                })

            } else if (anim === 'wordsFadeRight') {

                gsap.fromTo(words, {
                    x: "100px",
                    opacity: 0

                }, {
                    x: "0",
                    duration: duration,
                    opacity: 1,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        position: 'top top'
                    },
                    delay: delay,
                    onComplete: function () {

                        splitto.revert();

                    }
                })

            } else if (anim === 'wordsUp') {

                words.wrap('<span class="word-holder"></span>');

                gsap.fromTo(words, {
                    y: "100%",

                }, {
                    y: "0%",
                    duration: duration,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        position: 'top top'
                    },
                    delay: delay,
                    ease: "power2.out",
                    onComplete: function () {

                        splitto.revert();

                    }
                })

            } else if (anim === 'wordsDown') {

                words.wrap('<span class="word-holder"></span>');

                gsap.fromTo(words, {
                    y: "-100%",

                }, {
                    y: "0%",
                    duration: duration,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        position: 'top top'
                    },
                    delay: delay,
                    onComplete: function () {

                        splitto.revert();

                    }
                })

            } else if (anim === 'wordsLeft') {

                words.wrap('<span class="word-holder"></span>');

                gsap.fromTo(words, {
                    x: "-100%",

                }, {
                    x: "0%",
                    duration: duration,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        position: 'top top'
                    },
                    delay: delay,
                    onComplete: function () {

                        splitto.revert();

                    }
                })

            } else if (anim === 'wordsRight') {

                words.wrap('<span class="word-holder"></span>');

                gsap.fromTo(words, {
                    x: "100%",

                }, {
                    x: "0%",
                    duration: duration,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        position: 'top top'
                    },
                    delay: delay,
                    onComplete: function () {

                        splitto.revert();

                    }
                })

            } else if (anim === 'charsFadeUp') {

                gsap.fromTo(chars, {
                    y: "100%",
                    opacity: 0

                }, {
                    y: "0%",
                    opacity: 1,
                    duration: duration,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        position: 'top top'
                    },
                    delay: delay,
                    onComplete: function () {
                        splitto.revert();
                    }
                })


            } else if (anim === 'charsUp') {



                gsap.fromTo(chars, {
                    y: "100%",


                }, {
                    y: "0%",

                    duration: duration,
                    stagger: stagger,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: parent,
                        position: 'top top'
                    },
                    delay: delay,
                })


            } else if (anim === 'charsDown') {



                gsap.fromTo(chars, {
                    y: "-100%",


                }, {
                    y: "0%",

                    duration: duration,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        position: 'top top'
                    },
                    delay: delay,
                    onComplete: function () {

                        splitto.revert();

                    }
                })


            } else if (anim === 'charsLeft') {



                gsap.fromTo(chars, {
                    x: "-100%",


                }, {
                    x: "0%",

                    duration: duration,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        position: 'top top'
                    },
                    delay: delay,
                    onComplete: function () {

                        splitto.revert();

                    }
                })


            } else if (anim === 'charsRight') {



                gsap.fromTo(chars, {
                    x: "100%",


                }, {
                    x: "0%",

                    duration: duration,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        position: 'top top'
                    },
                    delay: delay,
                    onComplete: function () {

                        splitto.revert();

                    }
                })


            } else if (anim === 'charsFadeDown') {

                gsap.fromTo(chars, {
                    y: "-100%",
                    opacity: 0

                }, {
                    y: "0%",
                    opacity: 1,
                    duration: duration,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        position: 'top top'
                    },
                    delay: delay,
                    onComplete: function () {

                        splitto.revert();

                    }
                })


            } else if (anim === 'charsFadeLeft') {

                gsap.fromTo(chars, {
                    x: "-35px",
                    opacity: 0

                }, {
                    x: "0px",
                    opacity: 1,
                    duration: duration,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        position: 'top top'
                    },
                    delay: delay,
                    onComplete: function () {

                        splitto.revert();

                    }
                })


            } else if (anim === 'charsFadeRight') {

                gsap.fromTo(chars, {
                    x: "35px",
                    opacity: 0

                }, {
                    x: "0px",
                    opacity: 1,
                    duration: duration,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        position: 'top top'
                    },
                    delay: delay,
                    onComplete: function () {

                        splitto.revert();

                    }
                })

            } else if (anim === 'fadeUp') {

                gsap.fromTo($this, {
                    y: 50,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: duration,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        start: 'top center'
                    },
                    delay: delay,
                    onComplete: function () {

                        splitto.revert();

                    }
                })

            } else if (anim === 'fadeDown') {

                gsap.fromTo($this, {
                    y: -50,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: duration,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        start: 'top center'
                    },
                    delay: delay,
                    onComplete: function () {

                        splitto.revert();

                    }
                })

            } else if (anim === 'fadeLeft') {

                gsap.fromTo($this, {
                    x: -50,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    duration: duration,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        start: 'top center'
                    },
                    delay: delay,
                    onComplete: function () {

                        splitto.revert();

                    }
                })

            } else if (anim === 'fadeRight') {

                gsap.fromTo($this, {
                    x: 50,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    duration: duration,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: parent,
                        start: 'top center'
                    },
                    delay: delay,
                    onComplete: function () {

                        splitto.revert();

                    }
                })

            }

        });




        var imAnim = $('img.has-anim');
        CustomEase.create("blockEase", ".25,.74,.22,.99");

        imAnim.each(function (i) {
            i++

            let $this = $(this),
                anim = $this.data('animation'),
                delay = $this.data('delay'),
                duration = $this.data('duration'),
                ovColor = $this.data('color');

            if ((anim === 'blockUp') || (anim === 'blockLeft') || (anim === 'blockRight')) {

                $this.wrap('<div class="img-anim-wrapper"></div>');

                let parWrap = $this.parent('.img-anim-wrapper');

                parWrap.prepend('<span class="img-anim-ov"></span>');

                let animOv = parWrap.children('.img-anim-ov');

                gsap.to($this, {
                    scale: 1,
                    duration: duration * 2,
                    delay: delay,
                    scrollTrigger: {
                        trigger: parWrap,
                        start: 'top center'
                    },
                    ease: "power3.out",
                })



                if (anim === 'blockUp') {

                    gsap.set(animOv, {
                        background: ovColor
                    })

                    gsap.to(animOv, {
                        height: "0%",
                        delay: delay,
                        scrollTrigger: {
                            trigger: parWrap,
                            start: 'top center'
                        },
                        duration: duration,
                        ease: 'blockEase'
                    })


                }

                if (anim === 'blockLeft') {

                    gsap.set(animOv, {
                        background: ovColor
                    })

                    gsap.to(animOv, {
                        width: "0%",
                        delay: delay,
                        scrollTrigger: {
                            trigger: parWrap,
                            start: 'top center'
                        },
                        duration: duration,
                        ease: 'blockEase'
                    })


                }

                if (anim === 'blockRight') {

                    gsap.set(animOv, {
                        left: 'unset',
                        background: ovColor
                    })

                    gsap.to(animOv, {
                        width: "0%",
                        delay: delay,
                        scrollTrigger: {
                            trigger: parWrap,
                            start: 'top center'
                        },
                        duration: duration,
                        ease: 'blockEase'
                    })


                }


            } else if ((anim === 'slideUp') || (anim === 'slideLeft') || (anim === 'slideRight')) {

                let imgHeight = $this.outerHeight(),
                    imgWidth = $this.outerWidth();

                $this.wrap('<div class="img-anim-wrapper"></div>');

                let parWrap = $this.parent('.img-anim-wrapper'),
                    sImage = parWrap.parent('.single-image');

                gsap.set(parWrap, {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                })

                gsap.set(sImage, {
                    width: imgWidth,
                    height: imgHeight
                })

                gsap.set($this, {
                    position: 'absolute',
                    width: imgWidth,
                    height: imgHeight,
                })



                gsap.to($this, {
                    scale: 1,
                    duration: duration * 2,
                    delay: delay,
                    scrollTrigger: {
                        trigger: parWrap,
                        start: 'top 85%'
                    },
                    ease: "power3.out",
                })


                if ((anim === 'slideUp')) {

                    gsap.set($this, {
                        left: 0,
                        top: 0
                    })

                    gsap.set(parWrap, {
                        width: imgWidth,
                        height: 0,

                    })

                    gsap.to(parWrap, {
                        height: imgHeight,
                        duration: duration,
                        scrollTrigger: {
                            trigger: parWrap,
                            start: 'top 85%',

                        },
                        delay: delay,
                        ease: "blockEase"
                    })


                } else if ((anim === 'slideLeft')) {

                    gsap.set($this, {
                        left: 0

                    })

                    gsap.set(parWrap, {
                        width: 0,
                        height: imgHeight,

                    })

                    gsap.to(parWrap, {
                        width: imgWidth,
                        duration: duration,
                        scrollTrigger: {
                            trigger: parWrap,
                            start: 'top 85%'

                        },
                        delay: delay,
                        ease: "blockEase"
                    })

                } else if ((anim === 'slideRight')) {

                    gsap.set($this, {
                        left: "unset",
                        right: 0

                    })

                    gsap.set(parWrap, {
                        width: 0,
                        height: imgHeight,
                        left: 'unset'

                    })

                    gsap.to(parWrap, {
                        width: imgWidth,
                        duration: duration,
                        scrollTrigger: {
                            trigger: parWrap,
                            start: 'top 85%'
                        },
                        delay: delay,
                        ease: "blockEase"
                    })

                }


            };



        })

    }

    /**** Responsive ****/

    function mobileOpt() {

        // Create a media condition that targets viewports at least 768px wide
        var siteHeader = $('.site-header'),
            siteNav = $('.site-navigation'),
            mobileQuery = window.matchMedia('(max-width: 450px)');


        $(window).on('resize', function () {


            // Check if the media query is true
            if (mobileQuery.matches) {


                siteHeader.removeClass('classic_menu');
                siteHeader.addClass('fullscreen_menu');
                siteNav.removeClass('classic');
                siteNav.addClass('fullscreen');

                fullscreenNavigation();

            }

        })

    }

    /**** Responsive ****/

    function initShowcases() {

        var showcaseCheck = $('.portfolio-showcase');

        if (showcaseCheck.length > 0) {

            if (showcaseCheck.hasClass('showcase-list')) {

                aliothShowcaseList();

            } else if (showcaseCheck.hasClass('showcase-wall')) {
                showcaseWall();

            } else if (showcaseCheck.hasClass('showcase-slideshow-v2')) {

                aliothShowcaseSlideV2();

            } else if (showcaseCheck.hasClass('showcase-slideshow')) {

                aliothShowcaseSlide();

            } else if (showcaseCheck.hasClass('carousel-showcase')) {

                aliothShowcaseCarousel();

            } else if (showcaseCheck.hasClass('fullscreen-slider-showcase')) {

                aliothShowcaseFullscrenSlider()

            } else if (showcaseCheck.hasClass('fullscreen-wall-showcase')) {

                showcaseFullscreenWall()

            }

        }

    }


    function showcaseOpenings() {

        var showcaseCheck = $('.portfolio-showcase');

        if (showcaseCheck.length > 0) {

            if (showcaseCheck.hasClass('showcase-list')) {
                //Welcome Animation

                var scWelcome = gsap.timeline();

                scWelcome.fromTo('.sl-project-title', 2, {
                    y: '110%'
                }, {
                    y: '0%',
                    ease: 'power2.out',
                    stagger: 0.1,
                }, 0)

                scWelcome.fromTo('.sl-project-meta', 1, {
                    y: '100%'
                }, {
                    y: '0%',
                    ease: 'power2.out',
                    stagger: 0.05,
                }, 1)

                var slBef = CSSRulePlugin.getRule('.sl-project::before');

                scWelcome.to(slBef, .4, {
                    cssRule: {
                        opacity: 1,
                    },
                }, 1.3)

                scWelcome.fromTo('.showcase-footer', .6, {
                    opacity: 0
                }, {
                    opacity: 1,

                }, 2)


                //Welcome Animation



            } else if (showcaseCheck.hasClass('showcase-wall')) {

                var wallOpen = gsap.timeline({
                    once: true,
                    delay: 0,
                    onStart: function () {

                        $('body').addClass('loading')
                    },
                    onComplete: function () {

                        $('body').removeClass('loading')
                    }
                })

                wallOpen.fromTo('.wall-projects-top', 4, {
                    x: '-110%'
                }, {
                    x: '10%',
                    ease: 'power4.out'
                }, 0)

                wallOpen.fromTo('.wall-projects-bottom', 4, {
                    x: '110%'
                }, {
                    x: '-10%',
                    ease: 'power4.out'

                }, 0)

                wallOpen.fromTo('.wall-drag', 2, {
                    width: '0%'
                }, {
                    width: '50%',
                    ease: 'power2.out'

                }, 2)

                wallOpen.fromTo('.showcase-footer', 1, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: 'power2.out'

                }, 3)


            } else if (showcaseCheck.hasClass('showcase-slideshow-v2')) {


                // Welcome Animation

                var ss2Welcome = gsap.timeline({
                    once: true
                });

                ss2Welcome.fromTo('.title-char', 1, {
                    y: '100%'
                }, {
                    y: '0%',
                    stagger: 0.02,
                    ease: 'power2.out',
                }, 0)

                ss2Welcome.fromTo('.ss2-project-cat span', .75, {
                    y: '100%'
                }, {
                    y: '0%',
                    ease: 'power2.out',
                }, 1)

                ss2Welcome.fromTo('.excerpt-line span', 1, {
                    y: '100%'
                }, {
                    y: '0%',
                    stagger: 0.05,
                    ease: 'power2.out',
                }, 1)

                ss2Welcome.fromTo('.ss2-dot', .5, {
                    x: -30,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    stagger: 0.05,
                    ease: 'power2.out',
                }, 1)

                ss2Welcome.fromTo('.ss2-nav', .5, {
                    opacity: 0
                }, {
                    opacity: 1,
                }, 1)

                ss2Welcome.fromTo('.showcase-footer', .5, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: 'power1.out',

                }, 1)

                // Welcome Animation


            } else if (showcaseCheck.hasClass('showcase-slideshow')) {

                //Welcome Animation

                let ssWelcome = gsap.timeline({
                    once: true,
                    onStart: function () {
                        disableScroll();

                        gsap.set('.ss-project.active .ss1-cat', {
                            visibility: 'hidden'
                        })

                        gsap.set('.ss-project.active .ss1-summary', {
                            visibility: 'hidden'
                        })


                    }
                });

                let butWidth = $('.ss1-button').outerWidth();



                ssWelcome.fromTo('.st-char', 1.5, {
                    y: '110%',

                }, {
                    y: '0%',
                    stagger: 0.02,
                    ease: 'power2.out',

                }, 0)

                ssWelcome.fromTo('.cat_char', 1, {
                    y: '110%',

                }, {
                    y: '0%',
                    stagger: 0.02,
                    ease: 'power2.out',
                    onStart: function () {

                        gsap.set('.ss-project.active .ss1-cat', {
                            visibility: 'visible',
                            delay: .2
                        })

                    }

                }, 1)

                ssWelcome.fromTo('.ss1-button', .7, {
                    width: 0,

                }, {
                    width: butWidth,
                    ease: 'power2.inOut',
                }, 1.3)

                ssWelcome.fromTo('.ssum-line', 1.5, {
                    y: '110%',

                }, {
                    y: '0%',
                    stagger: 0.02,
                    ease: 'power2.out',
                    onStart: function () {


                        gsap.set('.ss-project.active .ss1-summary', {
                            visibility: 'visible',
                            delay: .1
                        })

                    }

                }, 1)

                ssWelcome.fromTo('.ss1-nav', 1, {
                    opacity: 0,

                }, {
                    opacity: 1,
                    ease: 'power2.out',

                }, 2)

                ssWelcome.fromTo('.ss1-fraction', 1, {
                    opacity: 0,

                }, {
                    opacity: 1,
                    ease: 'power2.out',

                }, 2.5)

                ssWelcome.fromTo('.ss1-dots .swiper-pagination-bullet', 1.5, {
                    opacity: 0,
                    x: 50,

                }, {
                    x: 0,
                    opacity: 1,
                    stagger: 0.05,
                    ease: 'power2.out',
                    onComplete: function () {

                        gsap.to('.ss1-dots .swiper-pagination-bullet', {
                            clearProps: 'opacity'
                        })

                    }


                }, 1.55)


                //Welcome Animation

            } else if (showcaseCheck.hasClass('carousel-showcase')) {

                //Welcome Animation

                let sCarouselWelcome = gsap.timeline({
                        onStart: function () {
                            disableScroll();
                        },
                        onComplete: function () {

                            enableScroll();
                        }

                    }),
                    wrapper = $('.cas-project-wrapper'),
                    wrapFirstTrans = $(window).outerWidth() / 100 * 90,
                    wrapWidth = -wrapper.outerWidth();

                sCarouselWelcome.fromTo('.cas-line span', 1, {
                    y: '100%'
                }, {
                    y: '0%',
                    stagger: 0.1,
                    ease: 'power3.out'
                }, 2)


                sCarouselWelcome.fromTo(wrapper, 2.5, {
                    x: wrapWidth
                }, {
                    x: wrapFirstTrans,
                    ease: 'circ.inOut',
                }, .2)

                sCarouselWelcome.fromTo('.cas-bg-text', 1.5, {
                    x: '-100%'
                }, {
                    x: '100%',
                    ease: 'power2.out',


                }, .7)

                sCarouselWelcome.fromTo('.cas-progress', 1.5, {
                    width: '0%'
                }, {
                    width: '50%',
                    ease: 'power2.out',


                }, 2.2)

                sCarouselWelcome.fromTo('.showcase-footer', 1, {
                    opacity: 0,
                }, {
                    opacity: 1
                }, 2.7)





                //Welcome Animation

            } else if (showcaseCheck.hasClass('fullscreen-slider-showcase')) {
                // Welcome Animation


                let welcomeAnim = gsap.timeline({
                        once: true
                    }),
                    currentSlide = $('.swiper-slide-active'),
                    nextSlide = $('.swiper-slide-next'),
                    prevSlide = $('.swiper-slide-prev'),

                    actImg = $(currentSlide).find('img'),
                    nextImg = $(nextSlide).find('img'),
                    prevImg = $(prevSlide).find('img'),

                    activeProj = $(currentSlide).data('project'),
                    actIndex = $(currentSlide).data('index'),

                    titLines = $(activeProj).find('.fs-tit-char > span');


                welcomeAnim.fromTo(titLines, 1.5, {
                    x: -100,

                }, {
                    x: -0,
                    stagger: 0.01,
                    ease: 'power2.out',

                }, .3)

                welcomeAnim.fromTo('.fs-fraction span', .6, {
                    x: -30,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    ease: 'power2.out',
                }, 1)

                welcomeAnim.fromTo('.fs-meta > span', 1, {
                    x: -30,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    ease: 'power2.out',
                }, 1);

                welcomeAnim.fromTo('.fs-button a', 1.5, {
                    x: '-100%',
                    opacity: 0
                }, {
                    x: '0%',
                    opacity: 1,
                    ease: 'power2.out',
                }, 1.5)

                welcomeAnim.fromTo('.showcase-footer', 1, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: 'power2.out',

                }, 1.7)



                // Welcome Animation


            } else if (showcaseCheck.hasClass('fullscreen-wall-showcase')) {

                //Welcome Animation

                let fsWallWelcome = gsap.timeline({
                        once: true
                    }),
                    dashs = CSSRulePlugin.getRule('.fw-project::after');



                fsWallWelcome.fromTo('.fw-project a', 1.5, {
                    y: '150%',

                }, {
                    y: '0%',
                    stagger: 0.1,
                    ease: 'power2.out',

                }, 0)


                fsWallWelcome.fromTo(dashs, 1.5, {
                    cssRule: {
                        y: '150%',
                    }

                }, {
                    cssRule: {
                        y: '0%',
                    },
                    stagger: 0.1,
                    ease: 'power2.out',

                }, 1)

                fsWallWelcome.fromTo('.showcase-footer', .75, {
                    opacity: 0

                }, {
                    opacity: 1,
                    ease: 'power2.out',

                }, 2)

                //Welcome Animation

            }

        }

    }

    function initPages() {

        aliothPageHeader()

        if ($('.project-page').length) {

            aliothProjectPage();

        };

        if ($('.alioth-blog').length) {

            aliothBlog();

        }

        if ($('.alioth-works').length) {

            aliothWorks();

        }

        if ($('.cart-page').length) {

            aliothShoppingCart()

        }

        if ($('.alioth-products').length) {

            aliothShop();

        }


    }

    function initShortcodes() {

        showCaseVideos();
        aliothSingleImage();
        aliothSingleProject();
        alitohImageCarousel();
        aliothPageNav();
        aliothSeperator();
        aliothButtons();
        aliothEmbedVideo();
        aliothLinkedText();
        aliothTeamCarousel();
        aliothScrollableText()
        aliothServicesS2();
        aliothTestimonials();
        aliothImageCarousel();
        aliothHeading();
        aliothClients();
        aliothAwards();
        alitohServicesS1();
        aliothPersonalHead();
        aliothForms();
        alitohNumberCt();
        aliothScrollNotice();
        aliothProductsCarousel();
        aliothSingleProduct();
        aliothRecentWorks();

    }

    let mobileQuery = window.matchMedia('(max-width: 450px)');
    // Check if the media query is true
    if (!mobileQuery.matches) {
        mouseCursor();

    }



    $(window).on('load', function () {
        initShowcases();
        siteHeaderSet();
        fullscreenNavigation();
        classicNavigation();


        if ($('.section.fullscreen').length) {

            $('#footer').hide()

        } else {
            $('#footer').show()
        }

        pageLoader();

        if (siteLoader == true) {


            loadAn.eventCallback('onComplete', function () {

                $('body').removeClass('loading');
                gsap.set('#page', {
                    visibility: 'visible'
                })

                gsap.to('.apl-background', .7, {
                    height: '0%',
                    ease: 'power2.inOut',
                    onComplete: function () {
                        loader.hide();
                    }
                })


                showcaseOpenings();
                initShortcodes();
                initPages();

                let mobileQuery = window.matchMedia('(max-width: 900px)');
                // Check if the media query is true
                if (!mobileQuery.matches) {

                    aliothParallaxScroll();
                }


                enableScroll()
                aliothScrollAnimations();


                ScrollTrigger.refresh(true)


            })




        } else {

            loader.hide();

            if ($('.section.fullscreen').length) {

                $('#footer').hide()


            } else {
                $('#footer').show()

            }
            showcaseOpenings();
            initShortcodes();
            initPages();

            let mobileQuery = window.matchMedia('(max-width: 900px)');
            // Check if the media query is true
            if (!mobileQuery.matches) {

                aliothParallaxScroll();
            }


            enableScroll()
            aliothScrollAnimations();


            ScrollTrigger.refresh(true)

        }


    })


    /** Scroll Animations **/


    var trans = $('.alioth-page-transitions'),
        transLayout = trans.data('layout'),
        text = $('.trans-text'),
        defTransText = text.html(),
        bg = $('.apt-bg'),
        menuOv = CSSRulePlugin.getRule('.site-header.fullscreen_menu.menu-has-open::before'),
        menuBackOv = CSSRulePlugin.getRule('.site-header.fullscreen_menu.menu-has-open::after');

    trans.addClass(transLayout)

    new SplitText(text, {
        type: 'chars',
        charsClass: 'trans_char'
    })


    barba.hooks.after((data) => {

        let Alltrigger = ScrollTrigger.getAll()
        for (let i = 0; i < Alltrigger.length; i++) {
            Alltrigger[i].kill(true)
        }


        window.scrollTo(0, 0);

        initShowcases();
        siteHeaderSet();

        if ($('.section.fullscreen').length) {

            $('#footer').hide()

        } else {
            $('#footer').show()

        }

        initShortcodes();
        initPages();

        let mobileQuery = window.matchMedia('(max-width: 900px)');

        if (!mobileQuery.matches) {

            aliothParallaxScroll();
        }

        showcaseOpenings();

        enableScroll()
        aliothScrollAnimations();

        ScrollTrigger.refresh(true);


    })


    barba.init({
        debug: false,
        cacheIgnore: true,
        transitions: [
            {
                name: 'default-transition',
                leave() {

                    return new Promise(function (resolve, reject) {

                        var trans = $('.alioth-page-transitions'),
                            bg = $('.apt-bg'),
                            siteHeader = $('.site-header');


                        if (siteHeader.hasClass('menu-has-open')) {

                            var fsMenuTrans = gsap.timeline({
                                onComplete: function () {
                                    resolve();
                                },
                            });

                            let subMenu = $('.sub-menu');

                            if (subMenu.hasClass('opened')) {
                                var menuItems = $('.sub-menu.opened > li > a');

                                $('.sub-back').removeClass('is-active')


                            } else {
                                var menuItems = $('.main-menu > li > a');
                            }



                            gsap.set(trans, {
                                visibility: 'visible'
                            })


                            fsMenuTrans.to(menuItems, 1, {
                                y: '-100%',
                                stagger: 0.05,
                                ease: 'power2.in',
                            }, 0)

                            fsMenuTrans.to('.menu-widget .social-list li a', 1, {
                                y: '-100%',
                                opacity: 0,
                                stagger: 0.05,
                                ease: 'power2.in'
                            }, 0)

                            fsMenuTrans.fromTo('.trans_char', .75, {
                                y: "100%"
                            }, {
                                ease: 'power2.out',
                                y: '0%',
                                stagger: 0.01,
                                onStart: function () {

                                    if ($('.alioth-page-transitions').hasClass('dark')) {
                                        var firstColor = 'hsla(0, 0%, 100%, .2)',
                                            secondColor = '#fff';
                                    } else {
                                        var firstColor = 'rgba(25,27,29,.6)',
                                            secondColor = '#000';
                                    }

                                    let tl = gsap.timeline({
                                        once: true,
                                        delay: .5
                                    });


                                    tl.to('.trans_char', {
                                        color: secondColor,
                                        duration: .3,
                                        stagger: .02,
                                        ease: 'none'
                                    })

                                    tl.to('.trans_char', {
                                        color: firstColor,
                                        duration: .3,
                                        stagger: .02,

                                        ease: 'none'
                                    })

                                },
                                onComplete: function () {

                                    gsap.to(siteHeader, 1, {
                                        height: 150,
                                        ease: 'power2.inOut'
                                    })

                                    gsap.to('.header-wrapper', 1, {
                                        top: '60%',
                                        ease: 'power2.inOut'
                                    })

                                }
                            }, 1)

                            fsMenuTrans.to('.git-button', 1, {
                                y: '-100%',
                                opacity: 0,
                                stagger: 0.05,
                                ease: 'power2.in'
                            }, 0)


                            fsMenuTrans.to(menuOv, .5, {
                                cssRule: {
                                    height: '100vh'
                                },
                                ease: 'none'
                            }, .1)


                        } else {

                            var defaultTransOut = gsap.timeline({
                                once: 'true',
                                onStart: function () {
                                    gsap.set(trans, {
                                        visibility: 'visible'
                                    })

                                },
                                onComplete: function () {

                                    resolve();
                                }
                            })


                            defaultTransOut.fromTo(bg, .6, {
                                height: '0%'
                            }, {
                                height: '100%',
                                duration: .7,
                                ease: 'power2.inOut',
                                onStart: function () {

                                    gsap.set(bg, {
                                        top: 'unset',
                                        bottom: 0
                                    })
                                },
                            }, 0)

                            defaultTransOut.fromTo('.trans_char', .75, {
                                y: "100%"
                            }, {
                                ease: 'power2.out',
                                y: '0%',
                                stagger: 0.01,
                                onStart: function () {

                                    if ($('.alioth-page-transitions').hasClass('dark')) {
                                        var firstColor = 'hsla(0, 0%, 100%, .2)',
                                            secondColor = '#fff';
                                    } else {
                                        var firstColor = 'rgba(25,27,29,.6)',
                                            secondColor = '#000';
                                    }

                                    let tl = gsap.timeline({
                                        once: true,
                                        delay: .5
                                    });

                                    tl.to('.trans_char', {
                                        color: secondColor,
                                        duration: .3,
                                        stagger: .02,
                                        ease: 'none'
                                    })

                                    tl.to('.trans_char', {
                                        color: firstColor,
                                        duration: .3,
                                        stagger: .02,

                                        ease: 'none'
                                    })

                                }
                            }, .3)

                        }

                    })

                },
                enter() {

                    return new Promise(function (resolve, reject) {

                        var trans = $('.alioth-page-transitions'),
                            bg = $('.apt-bg'),
                            text = $('.trans-text');

                        if (siteHeader.hasClass('menu-has-open')) {

                            gsap.fromTo('.trans_char', .75, {
                                y: "0%"
                            }, {
                                ease: 'power2.in',
                                y: '-100%',
                                stagger: 0.01,
                                delay: .35
                            })

                            gsap.set(menuBackOv, {
                                display: 'none'
                            })


                            gsap.to(menuOv, .75, {
                                delay: 1,
                                cssRule: {
                                    height: 0
                                },
                                ease: 'power2.inOut',
                                onStart: function () {


                                    resolve();

                                },
                                onComplete: function () {

                                    gsap.set(trans, {
                                        visibility: 'hidden'
                                    })



                                    siteHeader.removeClass('menu-has-open');
                                    $('.menu-toggle').removeClass('is-active');
                                    $('.site-navigation, .header-wrapper').removeClass('menu-opened')



                                    $('.site-navigation ul').removeClass('hidden')
                                    $('.site-navigation ul').removeClass('opened');
                                    $('.sub-back').removeClass('is-active');

                                    enableScroll();

                                    gsap.set(menuBackOv, {
                                        display: 'block'
                                    })



                                    $('.menu-toggle').data('clicks', false);

                                }
                            })


                        } else {

                            var transOut = gsap.timeline({
                                delay: 1,
                                onStart: function () {
                                    resolve()

                                },
                                onComplete: function () {

                                    gsap.set(trans, {
                                        visibility: 'hidden'
                                    })
                                }
                            });

                            transOut.fromTo(bg, .7, {
                                height: '100%'
                            }, {
                                height: '0%',
                                onStart: function () {
                                    gsap.set(bg, {
                                        top: 0,
                                        bottom: 'unset'
                                    })


                                },
                                ease: 'power2.inOut',
                            }, .5)

                            transOut.fromTo('.trans_char', .75, {
                                y: "0%"
                            }, {
                                ease: 'power2.in',
                                y: '-100%',
                                stagger: 0.01
                            }, 0)

                        }
                    })



                }
                    }, {
                name: 'fs-image-trans',
                from: {
                    namespace: [
                                    'fs-slider'
                                ]
                },
                to: {
                    namespace: [
                                    'pph2'
                                ]
                },
                leave() {

                    return new Promise(function (resolve, reject) {

                        var project = $('.fs-project.active'),
                            titChars = project.find('.fs-tit-char span'),
                            mets = project.find('.fs-meta > span'),
                            fsImageTrans = gsap.timeline({
                                onComplete: function () {
                                    resolve()

                                }
                            });

                        fsImageTrans.fromTo(titChars, .6, {
                            x: 0,

                        }, {
                            x: -100,
                            stagger: 0.01,
                            ease: 'power1.in',

                        }, 0)


                        fsImageTrans.fromTo('.fs-fraction span', .6, {
                            x: 0,
                            opacity: 1
                        }, {
                            x: -30,
                            opacity: 0,
                            ease: 'power2.in',
                        }, .6)

                        fsImageTrans.fromTo(mets, .6, {
                            x: 0,
                            opacity: 1
                        }, {
                            x: -30,
                            opacity: 0,
                            ease: 'power2.in',
                        }, .3);

                        fsImageTrans.fromTo('.fs-button a', 1, {
                            x: '0%',
                        }, {
                            x: '-100%',
                            opacity: 0,
                            ease: 'power2.in',
                        }, 0)

                        fsImageTrans.fromTo('.showcase-footer', 1, {
                            opacity: 1
                        }, {
                            opacity: 0,
                            ease: 'power2.in',
                            onComplete: function () {


                                // get the image

                                var project = $('.fs-project-image.swiper-slide-active'),
                                    imageURL = project.find('img').attr('src');


                                $('body').append('<div class="trans-image"><div class="trans-image-wrap"><img src="' + imageURL + '"></div></div>');

                                gsap.set('.trans-image', {
                                    width: '100%',
                                    height: '100%'
                                })
                                // get the image

                            }
                        }, .3)


                    })

                },
                enter() {


                    return new Promise(function (resolve, reject) {

                        gsap.to('.trans-image', {
                            height: '100vh',
                            duration: 1,
                            ease: 'power2.out',
                            onComplete: function () {

                                resolve();
                                $('.trans-image').remove();

                            }
                        })

                    })





                }

                    }, {
                name: 'fs-image-trans-half',
                from: {
                    namespace: [
                                    'fs-slider'
                                ]
                },
                to: {
                    namespace: [
                                    'pph1'
                                ]
                },
                leave() {

                    return new Promise(function (resolve, reject) {


                        var project = $('.fs-project.active'),
                            titChars = project.find('.fs-tit-char span'),
                            mets = project.find('.fs-meta > span'),
                            fsImageTrans = gsap.timeline({
                                once: true,
                                onComplete: function () {
                                    resolve();
                                }
                            });

                        fsImageTrans.fromTo(titChars, .6, {
                            x: 0,

                        }, {
                            x: -100,
                            stagger: 0.01,
                            ease: 'power1.in',

                        }, 0)


                        fsImageTrans.fromTo('.fs-fraction span', .6, {
                            x: 0,
                            opacity: 1
                        }, {
                            x: -30,
                            opacity: 0,
                            ease: 'power2.in',
                        }, .6)

                        fsImageTrans.fromTo(mets, .6, {
                            x: 0,
                            opacity: 1
                        }, {
                            x: -30,
                            opacity: 0,
                            ease: 'power2.in',
                        }, .3);

                        fsImageTrans.fromTo('.fs-button a', 1, {
                            x: '0%',
                        }, {
                            x: '-100%',
                            opacity: 0,
                            ease: 'power2.in',
                        }, 0)

                        fsImageTrans.fromTo('.showcase-footer', 1, {
                            opacity: 1
                        }, {
                            opacity: 0,
                            ease: 'power2.in',
                            onComplete: function () {


                                // get the image

                                var project = $('.fs-project-image.swiper-slide-active'),
                                    imageURL = project.find('img').attr('src');


                                $('body').append('<div class="trans-image"><div class="trans-image-wrap"><img src="' + imageURL + '"></div></div>');

                                gsap.set('.trans-image', {
                                    width: '100%',
                                    height: '100%'
                                })
                                // get the image

                            }
                        }, .3)
                    })


                },
                enter() {

                    return new Promise(function (resolve, reject) {

                        gsap.set('#page', {
                            visibility: 'hidden'
                        })

                        const mobileQuery = window.matchMedia('(max-width: 450px)')
                        if (mobileQuery.matches) {
                            var projHeg = '65vh'

                        } else {
                            var projHeg = '55vh'
                        }

                        gsap.to('.trans-image', {
                            height: projHeg,
                            duration: 1.5,
                            delay: 1,
                            ease: 'power2.inOut',
                            onStart: function () {

                                gsap.set('#page', {
                                    visibility: 'hidden'
                                })
                            },
                            onComplete: function () {

                                $('.trans-image').remove();
                                resolve();
                                gsap.set('#page', {
                                    visibility: 'visible'
                                })

                            }
                        })

                    })

                }

                    }, {
                name: 'sc-image-trans',
                from: {
                    namespace: [
                                    'sc-carousel'
                                ]
                },
                to: {
                    namespace: [
                                    'pph2'
                                ]
                },
                leave() {

                    return new Promise(function (resolve, reject) {

                        disableScroll();

                        var project = $('.cs-title.active').data('project'),
                            img = $(project).find('img'),
                            imgURL = img.attr('src'),
                            ofLeft = $(project).offset().left;




                        new SplitText('.cs-title a', {
                            type: 'chars',
                            charsClass: 'cst_char'
                        })


                        var scImageTrans = gsap.timeline({

                        });

                        scImageTrans.fromTo('.cst_char', 1, {
                            y: '0%',

                        }, {
                            y: '-110%',
                            stagger: 0.01,
                            ease: 'power1.in',

                        }, 0)

                        scImageTrans.fromTo('.cas-progress', 1, {
                            width: '50%',

                        }, {
                            width: '0%',
                            ease: 'power1.in',

                        }, 0)


                        scImageTrans.fromTo('.showcase-footer', 1, {
                            opacity: 1
                        }, {
                            opacity: 0,
                            ease: 'power2.in',
                            onComplete: function () {


                                // get the image



                                $('body').append('<div class="trans-image"><div class="trans-image-wrap"><img src="' + imgURL + '"></div></div>');


                                const mobileQuery = window.matchMedia('(max-width: 450px)')
                                if (mobileQuery.matches) {

                                    gsap.set('.trans-image', {
                                        width: '80vw',
                                        height: '60vh',
                                        top: '50%',
                                        y: '-50%',
                                        left: ofLeft
                                    })
                                    // get the image


                                } else {

                                    gsap.set('.trans-image', {
                                        width: '50vw',
                                        height: '50vh',
                                        top: '50%',
                                        y: '-50%',
                                        left: ofLeft
                                    })
                                    // get the image

                                }


                                let imageHalf = gsap.timeline();

                                imageHalf.to('.trans-image', 1, {
                                    width: '100%',
                                    left: 0,
                                    ease: 'power2.inOut',

                                    height: '100vh',
                                    onComplete: function () {
                                        resolve()

                                    }
                                })



                            }
                        }, .3)



                    })

                },
                enter() {

                    $('.trans-image').remove();
                    enableScroll();

                }

                    }, {
                name: 'sc-image-trans-half',
                from: {
                    namespace: [
                                    'sc-carousel'
                                ]
                },
                to: {
                    namespace: [
                                    'pph1'
                                ]
                },
                leave() {

                    return new Promise(function (resolve, reject) {

                        disableScroll();

                        var project = $('.cs-title.active').data('project'),
                            img = $(project).find('img'),
                            imgURL = img.attr('src'),
                            ofLeft = $(project).offset().left;


                        new SplitText('.cs-title a', {
                            type: 'chars',
                            charsClass: 'cst_char'
                        })

                        var scImageTrans = gsap.timeline();

                        scImageTrans.fromTo('.cst_char', 1, {
                            y: '0%',

                        }, {
                            y: '-110%',
                            stagger: 0.01,
                            ease: 'power1.in',

                        }, 0)

                        scImageTrans.fromTo('.cas-progress', 1, {
                            width: '50%',

                        }, {
                            width: '0%',
                            ease: 'power1.in',

                        }, 0)


                        scImageTrans.fromTo('.showcase-footer', 1, {
                            opacity: 1
                        }, {
                            opacity: 0,
                            ease: 'power2.in',
                            onComplete: function () {


                                // get the image

                                $('body').append('<div class="trans-image"><div class="trans-image-wrap"><img src="' + imgURL + '"></div></div>');


                                const mobileQuery = window.matchMedia('(max-width: 450px)')
                                if (mobileQuery.matches) {

                                    gsap.set('.trans-image', {
                                        width: '80vw',
                                        height: '60vh',
                                        top: '50%',
                                        y: '-50%',
                                        left: ofLeft
                                    })
                                    // get the image


                                } else {

                                    gsap.set('.trans-image', {
                                        width: '50vw',
                                        height: '50vh',
                                        top: '50%',
                                        y: '-50%',
                                        left: ofLeft
                                    })
                                    // get the image

                                }

                                let imageHalf = gsap.timeline();

                                imageHalf.to('.trans-image', 1, {
                                    width: '100%',
                                    left: 0,
                                    ease: 'power2.inOut',
                                    height: '100%',
                                    onComplete: function () {

                                        gsap.set('.trans-image', {
                                            y: '0%',
                                            top: '0%'
                                        })
                                        resolve()

                                    }
                                })



                            }
                        }, .3)



                    })

                },
                enter() {

                    return new Promise(function (resolve, reject) {

                        gsap.set('#page', {
                            visibility: 'hidden'
                        })

                        const mobileQuery = window.matchMedia('(max-width: 450px)')
                        if (mobileQuery.matches) {
                            var projHeg = '65vh'

                        } else {
                            var projHeg = '55vh'
                        }


                        gsap.to('.trans-image', {
                            height: projHeg,
                            duration: 1.5,
                            delay: 1,
                            ease: 'power2.inOut',
                            onComplete: function () {

                                $('.trans-image').remove();

                                resolve();

                                gsap.set('#page', {
                                    visibility: 'visible'
                                })



                                enableScroll();
                            }
                        })

                    })



                }

                    }, {
                name: 'fss-image-trans',
                from: {
                    namespace: [
                                    'fs-slideshow'
                                ]
                },
                to: {
                    namespace: [
                                    'pph2'
                                ]
                },
                leave() {


                    return new Promise(function (resolve, reject) {

                        disableScroll();

                        var project = $('.ss1-image-wrap.swiper-slide-active'),
                            activeProj = $('.ss-project.active'),
                            activeChars = activeProj.find('.st-char'),
                            catChars = activeProj.find('.cat_char'),
                            sumLines = activeProj.find('.suml-wrap'),
                            img = project.find('img'),
                            imgURL = img.attr('src');


                        var scImageTrans = gsap.timeline();

                        scImageTrans.fromTo(activeChars, 1, {
                            y: '0%',

                        }, {
                            y: '-110%',
                            stagger: 0.01,
                            ease: 'power1.in',

                        }, 0)

                        scImageTrans.fromTo(catChars, 1, {
                            y: '0%',

                        }, {
                            y: '-110%',
                            stagger: 0.01,
                            ease: 'power1.in',

                        }, 0)

                        scImageTrans.fromTo(sumLines, 1, {
                            y: '0%',

                        }, {
                            y: '-110%',
                            stagger: 0.01,
                            ease: 'power1.in',

                        }, 0)

                        scImageTrans.fromTo('.ss1-nav', 1, {
                            opacity: 1,

                        }, {
                            opacity: 0,
                            ease: 'power1.in',

                        }, 0)

                        scImageTrans.fromTo('.ss1-fraction', 1, {
                            opacity: 1,

                        }, {
                            opacity: 0,
                            ease: 'power1.in',

                        }, 0)

                        scImageTrans.fromTo('.ss1-dots .swiper-pagination-bullet', 1, {
                            opacity: 1,
                            x: 0,

                        }, {
                            x: -50,
                            opacity: 0,
                            stagger: 0.02,
                            ease: 'power1.in',
                            onComplete: function () {

                                // get the image

                                $('body').append('<div class="trans-image"><div class="trans-image-wrap"><img src="' + imgURL + '"></div></div>');

                                const mobileQuery = window.matchMedia('(max-width: 450px)')
                                if (mobileQuery.matches) {

                                    gsap.set('.trans-image', {
                                        width: '100%',
                                        height: '100%',
                                        top: '0%',
                                        left: '0%',
                                        y: '0%',

                                    })


                                } else {

                                    gsap.set('.trans-image', {
                                        width: '50%',
                                        height: '62%',
                                        top: '50%',
                                        left: '15%',
                                        y: '-50%',

                                    })

                                }


                                // get the image

                                let imageHalf = gsap.timeline();

                                imageHalf.to('.trans-image', 1, {
                                    height: '100%',
                                    width: '100%',
                                    left: 0,
                                    ease: 'power2.inOut',
                                    onComplete: function () {
                                        gsap.set('.trans-image', {
                                            y: '0%',
                                            top: '0%'
                                        })
                                        resolve()

                                    }
                                })

                            }

                        }, 0)



                    })

                },
                enter() {

                    return new Promise(function (resolve, reject) {

                        gsap.to('.trans-image', {
                            height: '100vh',
                            duration: 1,
                            ease: 'power2.out',
                            onComplete: function () {

                                resolve();
                                $('.trans-image').remove();

                            }
                        })

                    })

                }

                    }, {
                name: 'fss-image-trans-half',
                from: {
                    namespace: [
                                    'fs-slideshow'
                                ]
                },
                to: {
                    namespace: [
                                    'pph1'
                                ]
                },
                leave() {

                    return new Promise(function (resolve, reject) {

                        disableScroll();

                        var project = $('.ss1-image-wrap.swiper-slide-active'),
                            activeProj = $('.ss-project.active'),
                            activeChars = activeProj.find('.st-char'),
                            catChars = activeProj.find('.cat_char'),
                            sumLines = activeProj.find('.suml-wrap'),
                            img = project.find('img'),
                            imgURL = img.attr('src');


                        var scImageTrans = gsap.timeline();

                        scImageTrans.fromTo(activeChars, 1, {
                            y: '0%',

                        }, {
                            y: '-110%',
                            stagger: 0.01,
                            ease: 'power1.in',

                        }, 0)

                        scImageTrans.fromTo(catChars, 1, {
                            y: '0%',

                        }, {
                            y: '-110%',
                            stagger: 0.01,
                            ease: 'power1.in',

                        }, 0)

                        scImageTrans.fromTo(sumLines, 1, {
                            y: '0%',

                        }, {
                            y: '-110%',
                            stagger: 0.01,
                            ease: 'power1.in',

                        }, 0)

                        scImageTrans.fromTo('.ss1-nav', 1, {
                            opacity: 1,

                        }, {
                            opacity: 0,
                            ease: 'power1.in',

                        }, 0)

                        scImageTrans.fromTo('.ss1-fraction', 1, {
                            opacity: 1,

                        }, {
                            opacity: 0,
                            ease: 'power1.in',

                        }, 0)

                        scImageTrans.fromTo('.ss1-dots .swiper-pagination-bullet', 1, {
                            opacity: 1,
                            x: 0,

                        }, {
                            x: -50,
                            opacity: 0,
                            stagger: 0.02,
                            ease: 'power1.in',
                            onComplete: function () {

                                // get the image

                                $('body').append('<div class="trans-image"><div class="trans-image-wrap"><img src="' + imgURL + '"></div></div>');

                                const mobileQuery = window.matchMedia('(max-width: 450px)')
                                if (mobileQuery.matches) {

                                    gsap.set('.trans-image', {
                                        width: '100%',
                                        height: '100%',
                                        top: '0%',
                                        left: '0%',
                                        y: '0%',

                                    })


                                } else {

                                    gsap.set('.trans-image', {
                                        width: '50%',
                                        height: '62%',
                                        top: '50%',
                                        left: '15%',
                                        y: '-50%',

                                    })

                                }

                                // get the image

                                let imageHalf = gsap.timeline();

                                imageHalf.to('.trans-image', 1, {
                                    height: '100%',
                                    width: '100%',
                                    left: 0,
                                    ease: 'power2.inOut',
                                    onComplete: function () {
                                        gsap.set('.trans-image', {
                                            y: '0%',
                                            top: '0%'
                                        })
                                        resolve()

                                    }
                                })

                            }

                        }, 0)



                    })

                },
                enter() {

                    return new Promise(function (resolve, reject) {

                        gsap.set('#page', {
                            visibility: 'hidden'
                        })

                        const mobileQuery = window.matchMedia('(max-width: 450px)')
                        if (mobileQuery.matches) {
                            var projHeg = '65vh'

                        } else {
                            var projHeg = '55vh'
                        }

                        gsap.to('.trans-image', {
                            height: projHeg,
                            duration: 1.5,
                            delay: .5,
                            ease: 'power2.inOut',
                            onComplete: function () {

                                $('.trans-image').remove();

                                resolve();
                                gsap.set('#page', {
                                    visibility: 'visible'
                                })

                                enableScroll();
                            }
                        })

                    })



                }

                    }, {
                name: 'fswall-image-trans-half',
                from: {
                    namespace: [
                                    'fs-wall'
                                ]
                },
                to: {
                    namespace: [
                                    'pph1'
                                ]
                },
                leave() {

                    return new Promise(function (resolve, reject) {

                        disableScroll();

                        var project = $('.fw-project.active').data('image'),
                            img = $(project).find('img'),
                            imgURL = img.attr('src'),
                            dashs = CSSRulePlugin.getRule('.fw-project::after');



                        var scImageTrans = gsap.timeline();

                        scImageTrans.fromTo('.fw-project a', 1, {
                            y: '0%',

                        }, {
                            y: '-150%',
                            stagger: 0.05,
                            ease: 'power1.in',
                            onStart: function () {
                                // get the image

                                $('body').append('<div class="trans-image"><div class="trans-image-wrap"><img src="' + imgURL + '"></div></div>');

                                $('.fw-images').hide();

                                const mobileQuery = window.matchMedia('(max-width: 450px)')
                                if (mobileQuery.matches) {
                                    gsap.set('.trans-image', {
                                        width: '100%',
                                        height: '100%',
                                        top: '0',
                                        right: '0',
                                        left: 'unset',
                                        zIndex: -1

                                    })
                                    // get the image

                                } else {
                                    gsap.set('.trans-image', {
                                        width: '50%',
                                        height: '100%',
                                        top: '0',
                                        right: '0',
                                        left: 'unset',
                                        zIndex: -1

                                    })
                                    // get the image
                                }




                            }

                        }, 0)

                        scImageTrans.fromTo(dashs, 1, {
                            cssRule: {
                                y: '0%',
                            }

                        }, {
                            cssRule: {
                                y: '-150%',
                            },
                            stagger: 0.05,
                            ease: 'power1.in',

                        }, .2)


                        scImageTrans.fromTo('.showcase-footer', .5, {
                            opacity: 1
                        }, {
                            opacity: 0,
                            ease: 'power1.in',
                            onComplete: function () {

                                let imageHalf = gsap.timeline();

                                imageHalf.to('.trans-image', 1, {
                                    width: '100%',
                                    ease: 'power2.inOut',
                                    onComplete: function () {

                                        gsap.set('.trans-image', {
                                            y: '0%',
                                            top: '0%'
                                        })
                                        resolve()

                                    }
                                })


                            }

                        }, 0)



                    })

                },
                enter() {

                    return new Promise(function (resolve, reject) {

                        gsap.set('#page', {
                            visibility: 'hidden'
                        })

                        const mobileQuery = window.matchMedia('(max-width: 450px)')
                        if (mobileQuery.matches) {
                            var projHeg = '65vh'

                        } else {
                            var projHeg = '55vh'
                        }


                        gsap.to('.trans-image', {
                            height: projHeg,
                            duration: 1.5,
                            delay: .5,
                            ease: 'power2.inOut',
                            onComplete: function () {

                                $('.trans-image').remove();

                                resolve();

                                gsap.set('#page', {
                                    visibility: 'visible'
                                })

                                enableScroll();
                            }
                        })

                    })



                }

                    }, {
                name: 'fswall-image-trans',
                from: {
                    namespace: [
                                    'fs-wall'
                                ]
                },
                to: {
                    namespace: [
                                    'pph2'
                                ]
                },
                leave() {

                    return new Promise(function (resolve, reject) {

                        disableScroll();

                        var project = $('.fw-project.active').data('image'),
                            img = $(project).find('img'),
                            imgURL = img.attr('src'),
                            dashs = CSSRulePlugin.getRule('.fw-project::after');



                        var scImageTrans = gsap.timeline();

                        scImageTrans.fromTo('.fw-project a', 1, {
                            y: '0%',

                        }, {
                            y: '-150%',
                            stagger: 0.05,
                            ease: 'power1.in',
                            onStart: function () {
                                // get the image

                                $('body').append('<div class="trans-image"><div class="trans-image-wrap"><img src="' + imgURL + '"></div></div>');

                                $('.fw-images').hide();

                                const mobileQuery = window.matchMedia('(max-width: 450px)')
                                if (mobileQuery.matches) {
                                    gsap.set('.trans-image', {
                                        width: '100%',
                                        height: '100%',
                                        top: '0',
                                        right: '0',
                                        left: 'unset',
                                        zIndex: -1

                                    })

                                } else {
                                    gsap.set('.trans-image', {
                                        width: '50%',
                                        height: '100%',
                                        top: '0',
                                        right: '0',
                                        left: 'unset',
                                        zIndex: -1

                                    })
                                    // get the image
                                }

                            }

                        }, 0)

                        scImageTrans.fromTo(dashs, 1, {
                            cssRule: {
                                y: '0%',
                            }

                        }, {
                            cssRule: {
                                y: '-150%',
                            },
                            stagger: 0.05,
                            ease: 'power1.in',

                        }, .2)


                        scImageTrans.fromTo('.showcase-footer', .5, {
                            opacity: 1
                        }, {
                            opacity: 0,
                            ease: 'power1.in',
                            onComplete: function () {

                                let imageHalf = gsap.timeline();

                                imageHalf.to('.trans-image', 1, {
                                    width: '100%',
                                    ease: 'power2.inOut',
                                    onComplete: function () {

                                        gsap.set('.trans-image', {
                                            y: '0%',
                                            top: '0%'
                                        })
                                        resolve()

                                    }
                                })


                            }

                        }, 0)
                    })

                },
                enter() {

                    return new Promise(function (resolve, reject) {

                        gsap.to('.trans-image', {
                            height: '100vh',
                            duration: 1,
                            ease: 'power2.out',
                            onComplete: function () {

                                resolve();
                                $('.trans-image').remove();

                            }
                        })

                    })
                }

                    }, {
                name: 'scwall-image-trans',
                from: {
                    namespace: [
                                    'sc-wall'
                                ]
                },
                to: {
                    namespace: [
                                    'pph2'
                                ]
                },
                leave() {

                    return new Promise(function (resolve, reject) {

                        disableScroll();

                        var project = $('.wall-project.hovered').data('image'),
                            img = $(project).find('img'),
                            imgURL = img.attr('src');



                        var scImageTrans = gsap.timeline();

                        scImageTrans.to('.wall-projects-top', 2, {
                            x: '100%',
                            stagger: 0.05,
                            ease: 'power2.inOut',
                            onStart: function () {
                                // get the image

                                $('body').addClass('loading');

                                $('body').append('<div class="trans-image"><div class="trans-image-wrap"><img src="' + imgURL + '"></div></div>');

                                const mobileQuery = window.matchMedia('(max-width: 450px)')

                                if (mobileQuery.matches) {

                                    gsap.set('.trans-image', {
                                        width: '84%',
                                        height: '70%',
                                        top: '50%',
                                        left: '50%',
                                        y: '-50%',
                                        x: '-50%',
                                        zIndex: -1
                                    })

                                    $('.wall-images').remove();


                                } else {


                                    gsap.set('.trans-image', {
                                        width: '30%',
                                        height: '70%',
                                        top: '50%',
                                        left: '50%',
                                        y: '-50%',
                                        x: '-50%',
                                        zIndex: -1
                                    })

                                    $('.wall-images').remove();



                                }

                                // get the image


                            }

                        }, 0)

                        scImageTrans.to('.wall-projects-bottom', 2, {
                            x: '-100%',
                            stagger: 0.05,
                            ease: 'power2.inOut',

                        }, 0)

                        scImageTrans.to('.wall-drag', 1, {
                            width: '0%',
                            ease: 'power2.inOut',

                        }, 0)

                        scImageTrans.fromTo('.showcase-footer', .5, {
                            opacity: 1
                        }, {
                            opacity: 0,
                            ease: 'power1.in',
                            onComplete: function () {


                                let imageHalf = gsap.timeline();

                                imageHalf.to('.trans-image', 1, {
                                    width: '100%',
                                    height: '100%',
                                    ease: 'power2.inOut',
                                    onComplete: function () {

                                        gsap.set('.trans-image', {
                                            y: '0%',
                                            top: '0%',
                                            zIndex: 'unset'
                                        })
                                        resolve()

                                    }
                                })


                            }

                        }, 0)
                    })

                },
                enter() {

                    return new Promise(function (resolve, reject) {

                        gsap.to('.trans-image', {
                            height: '100vh',
                            duration: 1,
                            ease: 'power2.out',
                            onComplete: function () {

                                resolve();
                                $('.trans-image').remove();
                                $('body').removeClass('loading');

                            }
                        })

                    })

                }

                    }, {
                name: 'scwall-image-trans-half',
                from: {
                    namespace: [
                                    'sc-wall'
                                ]
                },
                to: {
                    namespace: [
                                    'pph1'
                                ]
                },
                leave() {

                    return new Promise(function (resolve, reject) {

                        disableScroll();

                        var project = $('.wall-project.hovered').data('image'),
                            img = $(project).find('img'),
                            imgURL = img.attr('src');



                        var scImageTrans = gsap.timeline();

                        scImageTrans.to('.wall-projects-top', 2, {
                            x: '100%',
                            stagger: 0.05,
                            ease: 'power2.inOut',
                            onStart: function () {
                                // get the image

                                $('body').addClass('loading');

                                $('body').append('<div class="trans-image"><div class="trans-image-wrap"><img src="' + imgURL + '"></div></div>');

                                const mobileQuery = window.matchMedia('(max-width: 450px)')

                                if (mobileQuery.matches) {

                                    gsap.set('.trans-image', {
                                        width: '84%',
                                        height: '70%',
                                        top: '50%',
                                        left: '50%',
                                        y: '-50%',
                                        x: '-50%',
                                        zIndex: -1
                                    })

                                    $('.wall-images').remove();


                                } else {


                                    gsap.set('.trans-image', {
                                        width: '30%',
                                        height: '70%',
                                        top: '50%',
                                        left: '50%',
                                        y: '-50%',
                                        x: '-50%',
                                        zIndex: -1
                                    })

                                    $('.wall-images').remove();



                                }

                                // get the image


                            }

                        }, 0)

                        scImageTrans.to('.wall-projects-bottom', 2, {
                            x: '-100%',
                            stagger: 0.05,
                            ease: 'power2.inOut',

                        }, 0)

                        scImageTrans.to('.wall-drag', 1, {
                            width: '0%',
                            ease: 'power2.inOut',

                        }, 0)


                        scImageTrans.fromTo('.showcase-footer', .5, {
                            opacity: 1
                        }, {
                            opacity: 0,
                            ease: 'power1.in',
                            onComplete: function () {

                                $('body').removeClass('loading');

                                let imageHalf = gsap.timeline();


                                imageHalf.to('.trans-image', 1, {
                                    width: '100%',
                                    height: '100%',
                                    ease: 'power2.inOut',
                                    onComplete: function () {

                                        gsap.set('.trans-image', {
                                            y: '0%',
                                            top: '0%',
                                            zIndex: 'unset'
                                        })
                                        resolve()

                                    }
                                })


                            }

                        }, 0)
                    })

                },
                enter() {
                    return new Promise(function (resolve, reject) {

                        gsap.set('#page', {
                            visibility: 'hidden'
                        })

                        const mobileQuery = window.matchMedia('(max-width: 450px)')
                        if (mobileQuery.matches) {
                            var projHeg = '65vh'

                        } else {
                            var projHeg = '55vh'
                        }


                        gsap.to('.trans-image', {
                            height: projHeg,
                            duration: 1.5,
                            delay: 1,
                            ease: 'power2.inOut',
                            onComplete: function () {

                                $('.trans-image').remove();

                                resolve();

                                gsap.set('#page', {
                                    visibility: 'visible'
                                })



                                enableScroll();
                            }
                        })

                    })

                }

                    }, {
                name: 'scslideshow-image-trans',
                from: {
                    namespace: [
                                    'sc-slideshow'
                                ]
                },
                to: {
                    namespace: [
                                    'pph2'
                                ]
                },
                leave() {

                    return new Promise(function (resolve, reject) {

                        disableScroll();

                        var project = $('.swiper-slide.swiper-slide-active'),
                            img = project.find('img'),
                            activeProj = $('.ss2-project.active'),
                            titChars = activeProj.find('.title-char'),
                            cat = activeProj.find('.ss2-project-cat span'),
                            summLines = activeProj.find('.excerpt-line span'),
                            imgURL = img.attr('src');

                        var scImageTrans = gsap.timeline();

                        scImageTrans.to(titChars, 1, {
                            y: '-100%',
                            stagger: 0.02,
                            ease: 'power2.in',
                            onStart: function () {
                                // get the image

                                $('body').append('<div class="trans-image"><div class="trans-image-wrap"><img src="' + imgURL + '"></div></div>');

                                const mobileQuery = window.matchMedia('(max-width: 450px)')
                                if (mobileQuery.matches) {

                                    gsap.set('.trans-image', {
                                        width: '100%',
                                        height: '100%',
                                        top: '0',
                                        right: '0',
                                        y: '0',
                                        zIndex: -1

                                    })


                                } else {


                                    gsap.set('.trans-image', {
                                        width: '35%',
                                        height: '70%',
                                        top: '50%',
                                        left: 'unset',
                                        right: '8.5%',
                                        y: '-50%'

                                    })

                                }
                                // get the image


                            }
                        }, 0)

                        scImageTrans.to(cat, .4, {
                            y: '-100%',
                            ease: 'power2.in',
                        }, 0)

                        scImageTrans.to(summLines, .75, {
                            y: '-100%',
                            stagger: 0.05,
                            ease: 'power2.in',
                        }, 0)

                        scImageTrans.to('.ss2-dot', .5, {
                            x: '-30',
                            opacity: 0,
                            stagger: 0.05,
                            ease: 'power2.in',
                        }, 0)

                        scImageTrans.to('.ss2-nav', .5, {
                            opacity: 0,
                            ease: 'power2.in',
                        }, 0)

                        scImageTrans.fromTo('.showcase-footer', .5, {
                            opacity: 1
                        }, {
                            opacity: 0,
                            ease: 'power1.in',
                            onComplete: function () {

                                let imageHalf = gsap.timeline();

                                imageHalf.to('.trans-image', 1, {
                                    width: '100%',
                                    height: '100%',
                                    right: '0%',
                                    ease: 'power2.inOut',
                                    onComplete: function () {

                                        gsap.set('.trans-image', {
                                            y: '0%',
                                            top: '0%'
                                        })
                                        resolve()

                                    }
                                })


                            }

                        }, 0)
                    })

                },
                enter() {

                    $('.trans-image').remove();

                    enableScroll();

                }

                    }, {
                name: 'scslideshow-image-trans-half',
                from: {
                    namespace: [
                                    'sc-slideshow'
                                ]
                },
                to: {
                    namespace: [
                                    'pph1'
                                ]
                },
                leave() {

                    return new Promise(function (resolve, reject) {

                        disableScroll();

                        var project = $('.swiper-slide.swiper-slide-active'),
                            img = project.find('img'),
                            activeProj = $('.ss2-project.active'),
                            titChars = activeProj.find('.title-char'),
                            cat = activeProj.find('.ss2-project-cat span'),
                            summLines = activeProj.find('.excerpt-line span'),
                            imgURL = img.attr('src');

                        var scImageTrans = gsap.timeline();

                        scImageTrans.to(titChars, 1, {
                            y: '-100%',
                            stagger: 0.02,
                            ease: 'power2.in',
                            onStart: function () {
                                // get the image

                                $('body').append('<div class="trans-image"><div class="trans-image-wrap"><img src="' + imgURL + '"></div></div>');

                                const mobileQuery = window.matchMedia('(max-width: 450px)')
                                if (mobileQuery.matches) {

                                    gsap.set('.trans-image', {
                                        width: '100%',
                                        height: '100%',
                                        top: '0',
                                        right: '0',
                                        y: '0',
                                        zIndex: -1

                                    })

                                } else {


                                    gsap.set('.trans-image', {
                                        width: '35%',
                                        height: '70%',
                                        top: '50%',
                                        left: 'unset',
                                        right: '8.5%',
                                        y: '-50%'

                                    })

                                }

                                // get the image


                            }
                        }, 0)

                        scImageTrans.to(cat, .4, {
                            y: '-100%',
                            ease: 'power2.in',
                        }, 0)

                        scImageTrans.to(summLines, .75, {
                            y: '-100%',
                            stagger: 0.05,
                            ease: 'power2.in',
                        }, 0)

                        scImageTrans.to('.ss2-dot', .5, {
                            x: '-30',
                            opacity: 0,
                            stagger: 0.05,
                            ease: 'power2.in',
                        }, 0)

                        scImageTrans.to('.ss2-nav', .5, {
                            opacity: 0,
                            ease: 'power2.in',
                        }, 0)

                        scImageTrans.fromTo('.showcase-footer', .5, {
                            opacity: 1
                        }, {
                            opacity: 0,
                            ease: 'power1.in',
                            onComplete: function () {

                                let imageHalf = gsap.timeline();

                                imageHalf.to('.trans-image', 1, {
                                    width: '100%',
                                    height: '100%',
                                    right: '0%',
                                    ease: 'power2.inOut',
                                    onComplete: function () {

                                        gsap.set('.trans-image', {
                                            y: '0%',
                                            top: '0%'
                                        })
                                        resolve()

                                    }
                                })


                            }

                        }, 0)
                    })

                },
                enter() {

                    return new Promise(function (resolve, reject) {

                        gsap.set('#page', {
                            visibility: 'hidden'
                        })

                        const mobileQuery = window.matchMedia('(max-width: 450px)')
                        if (mobileQuery.matches) {
                            var projHeg = '65vh'

                        } else {
                            var projHeg = '55vh'
                        }


                        gsap.to('.trans-image', {
                            height: projHeg,
                            duration: 1.5,
                            delay: 1,
                            ease: 'power2.inOut',
                            onComplete: function () {

                                $('.trans-image').remove();

                                resolve();

                                gsap.set('#page', {
                                    visibility: 'visible'
                                })



                                enableScroll();
                            }
                        })

                    })

                }

                    }, {
                name: 'sclist-image-trans',
                from: {
                    namespace: [
                                    'sc-list'
                                ]
                },
                to: {
                    namespace: [
                                    'pph2'
                                ]
                },
                leave() {

                    return new Promise(function (resolve, reject) {

                        disableScroll();

                        var project = $('.sl-project-image.active'),
                            ofLeft = $('.sl-images').position().left,
                            ofTop = $('.sl-images').position().top,
                            img = project.find('img'),
                            imgURL = img.attr('src');

                        var scImageTrans = gsap.timeline();

                        scImageTrans.to('.sl-project-title', 1, {
                            y: '-110%',
                            ease: 'power2.in',
                            stagger: 0.05,
                            onStart: function () {


                                // get the image
                                $('body').append('<div class="trans-image"><div class="trans-image-wrap"><img src="' + imgURL + '"></div></div>');

                                const mobileQuery = window.matchMedia('(max-width: 450px)')
                                if (mobileQuery.matches) {

                                    gsap.set('.trans-image', {
                                        position: 'fixed',
                                        width: '90vw',
                                        top: ofTop,
                                        left: ofLeft,
                                        y: '-50%',
                                        x: '-50%',
                                        zIndex: -1

                                    })


                                } else {

                                    gsap.set('.trans-image', {
                                        position: 'fixed',
                                        width: '50vw',
                                        top: ofTop,
                                        left: ofLeft,
                                        y: '-50%',
                                        x: '-50%',
                                        zIndex: -1
                                    })

                                }
                                // get the image

                                $('.sl-images').hide();
                            }

                        }, 0)

                        scImageTrans.to('.sl-project-meta', .6, {
                            y: '100%',
                            ease: 'power2.in',
                            stagger: 0.05,
                        }, 0)

                        var slBef = CSSRulePlugin.getRule('.sl-project::before');

                        scImageTrans.to(slBef, .4, {
                            cssRule: {
                                opacity: 0,
                            },
                        }, 0)

                        scImageTrans.to('.showcase-footer', .4, {
                            opacity: 0,
                            onComplete: function () {

                                let imageHalf = gsap.timeline();

                                imageHalf.to('.trans-image', 1, {
                                    right: '0%',
                                    left: 'unset',
                                    x: '0%',
                                    top: '0%',
                                    y: '0%',
                                    left: '0%',
                                    width: '100%',
                                    height: '100%',
                                    ease: 'power2.inOut',
                                    onComplete: function () {
                                        resolve()

                                    }
                                })




                            }
                        }, 0)

                    })

                },
                enter() {

                    $('.trans-image').remove();

                    enableScroll();

                }

                    }, {
                name: 'sclist-image-trans-half',
                from: {
                    namespace: [
                                    'sc-list'
                                ]
                },
                to: {
                    namespace: [
                                    'pph1'
                                ]
                },
                leave() {

                    return new Promise(function (resolve, reject) {

                        disableScroll();

                        var project = $('.sl-project-image.active'),
                            ofLeft = $('.sl-images').position().left,
                            ofTop = $('.sl-images').position().top,
                            img = project.find('img'),
                            imgURL = img.attr('src');

                        var scImageTrans = gsap.timeline();

                        scImageTrans.to('.sl-project-title', 1, {
                            y: '-110%',
                            ease: 'power2.in',
                            stagger: 0.05,
                            onStart: function () {


                                // get the image
                                $('body').append('<div class="trans-image"><div class="trans-image-wrap"><img src="' + imgURL + '"></div></div>');

                                const mobileQuery = window.matchMedia('(max-width: 450px)')
                                if (mobileQuery.matches) {

                                    gsap.set('.trans-image', {
                                        position: 'fixed',
                                        width: '90vw',
                                        top: ofTop,
                                        left: ofLeft,
                                        y: '-50%',
                                        x: '-50%',
                                        zIndex: -1

                                    })


                                } else {

                                    gsap.set('.trans-image', {
                                        position: 'fixed',
                                        width: '50vw',
                                        top: ofTop,
                                        left: ofLeft,
                                        y: '-50%',
                                        x: '-50%',
                                        zIndex: -1

                                    })

                                }
                                // get the image

                                $('.sl-images').hide();
                            }

                        }, 0)

                        scImageTrans.to('.sl-project-meta', .6, {
                            y: '100%',
                            ease: 'power2.in',
                            stagger: 0.05,
                        }, 0)

                        var slBef = CSSRulePlugin.getRule('.sl-project::before');

                        scImageTrans.to(slBef, .4, {
                            cssRule: {
                                opacity: 0,
                            },
                        }, 0)

                        scImageTrans.to('.showcase-footer', .4, {
                            opacity: 0,
                            onComplete: function () {

                                let imageHalf = gsap.timeline();

                                imageHalf.to('.trans-image', 1, {
                                    right: '0%',
                                    left: 'unset',
                                    x: '0%',
                                    top: '0%',
                                    y: '0%',
                                    left: '0%',
                                    width: '100%',
                                    height: '100%',
                                    ease: 'power2.inOut',
                                    onComplete: function () {
                                        resolve()

                                    }
                                })




                            }
                        }, 0)

                    })

                },
                enter() {

                    return new Promise(function (resolve, reject) {
                        gsap.to('.trans-image', {
                            height: '55vh',
                            duration: 1.5,
                            delay: .5,
                            ease: 'power2.inOut',
                            onComplete: function () {

                                $('.trans-image').remove();

                                resolve();
                                enableScroll();
                            }
                        })

                    })

                }

                    }, {
                name: 'title-trans',
                from: {
                    namespace: [
                        'fs-slider',
                        'fs-slideshow',
                        'fs-wall',
                        'sc-wall',
                        'sc-carousel',
                        'sc-slideshow',
                        'sc-list'
                    ]
                },
                to: {
                    namespace: [
                        'pph3',
                        'pph-video'
                    ]
                },
                leave() {

                    return new Promise(function (resolve, reject) {

                        if ($('.fs-project.active').length) {
                            var activeProject = $('.fs-project.active'),
                                title = activeProject.attr('data-title');

                        } else if ($('.cs-title').length) {

                            var activeProject = $('.cs-title.active'),
                                title = activeProject.find('a').text();

                        } else if ($('.ss-project').length) {

                            var activeProject = $('.ss-project.active'),
                                title = activeProject.data('title');

                        } else if ($('.fw-project').length) {

                            var activeProject = $('.fw-project.active'),
                                title = activeProject.find('.fw-project-title').text();

                        } else if ($('.wall-project').length) {

                            var activeProject = $('.wall-project.hovered'),
                                title = activeProject.find('.project-title').text();

                        } else if ($('.ss2-project').length) {

                            var activeProject = $('.ss2-project.active'),
                                title = activeProject.attr('data-title');

                        } else if ($('.sl-project').length) {

                            var activeProject = $('.sl-project').not('.opdown'),
                                title = activeProject.find('.sl-project-title').text();

                        } else if ($('.next-project-section').length) {

                            var title = $('.next-project-title').text();

                        }

                        var trans = $('.alioth-page-transitions'),
                            bg = $('.apt-bg'),
                            image = $('.apt-image'),
                            transText = $('.trans-text');

                        transText.html(title)


                        new SplitText('.trans-text', {
                            tyoe: 'chars',
                            charsClass: 'trans-text-char'
                        })
                        // Get the title

                        var ppTitleOut = gsap.timeline({
                            onComplete: function () {
                                resolve();



                            }
                        });

                        ppTitleOut.fromTo(bg, .7, {
                            height: '0%'
                        }, {
                            height: '100%',
                            duration: .7,
                            ease: 'power2.inOut',
                            onStart: function () {

                                gsap.set(trans, {
                                    visibility: 'visible'
                                })

                                gsap.set(bg, {
                                    top: 'unset',
                                    bottom: 0
                                })
                            },
                        }, 0)

                        ppTitleOut.fromTo('.trans-text-char', .75, {
                            y: '100%'
                        }, {
                            y: '0%',
                            ease: 'power2.out',
                            y: '0%',
                            stagger: 0.01,

                        }, .45)

                    })

                },
                enter() {

                    return new Promise(function (resolve, reject) {

                        var ppTitleEnd = gsap.timeline({

                        });

                        ppTitleEnd.fromTo(bg, .7, {
                            height: '100%'
                        }, {
                            height: '0%',
                            ease: 'power2.inOut',

                            onStart: function () {

                                resolve();

                                gsap.set(bg, {
                                    top: 0,
                                    bottom: 'unset'
                                })



                            },
                        }, 0)

                        ppTitleEnd.fromTo('.trans-text-char', .75, {
                            y: '0%'
                        }, {
                            y: '-100%',
                            stagger: 0.01,
                            ease: 'power2.in',
                            onComplete: function () {

                                $('.trans-text').html(defTransText);

                                gsap.set(trans, {
                                    visibility: 'hidden'
                                })

                                new SplitText('.trans-text', {
                                    type: 'chars',
                                    charsClass: 'trans_char'
                                })



                            }
                        }, 0)



                    })

                }

                    }, {
                name: 'title-next-trans',
                from: {
                    namespace: [
                        'pph1',
                        'pph2',
                        'pph3',
                        'pph-video'
                    ]
                },
                to: {
                    namespace: [
                        'pph1',
                        'pph2',
                        'pph3',
                        'pph-video'
                    ]
                },
                leave() {

                    return new Promise(function (resolve, reject) {

                        var title = $('.next-project-title').text();


                        // Get the title
                        var trans = $('.alioth-page-transitions'),
                            bg = $('.apt-bg'),
                            image = $('.apt-image'),
                            transText = $('.trans-text');

                        transText.html(title)

                        new SplitText('.trans-text', {
                            tyoe: 'chars',
                            charsClass: 'trans-text-char'
                        })
                        // Get the title

                        var ppTitleOut = gsap.timeline({
                            onComplete: function () {
                                resolve();

                            }
                        });

                        ppTitleOut.fromTo(bg, .7, {
                            height: '0%'
                        }, {
                            height: '100%',
                            duration: .7,
                            ease: 'power2.inOut',
                            onStart: function () {

                                gsap.set(trans, {
                                    visibility: 'visible'
                                })

                                gsap.set(bg, {
                                    top: 'unset',
                                    bottom: 0
                                })
                            },
                        }, 0)

                        ppTitleOut.fromTo('.trans-text-char', 1, {
                            y: '100%'
                        }, {
                            y: '0%',
                            stagger: 0.025,
                            ease: 'power2.out'
                        }, .45)

                    })

                },
                enter() {

                    var ppTitleEnd = gsap.timeline({

                    });

                    ppTitleEnd.fromTo(bg, .7, {
                        height: '100%'
                    }, {
                        height: '0%',
                        ease: 'power2.inOut',
                        onStart: function () {

                            gsap.set(bg, {
                                top: 0,
                                bottom: 'unset'
                            })
                        },
                    }, 0)

                    ppTitleEnd.fromTo('.trans-text-char', .4, {
                        y: '00%'
                    }, {
                        y: '-100%',
                        stagger: 0.02,
                        ease: 'power2.in',
                        onComplete: function () {

                            $('.trans-text').html(defTransText);

                            new SplitText('.trans-text', {
                                type: 'chars',
                                charsClass: 'trans_char'
                            })


                            gsap.set(trans, {
                                visibility: 'hidden'
                            })
                        }
                    }, 0)

                }

                    }]
    });


    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    };

}(jQuery));
