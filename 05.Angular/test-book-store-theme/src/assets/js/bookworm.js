/**
 * BookWorm JS
 *
 * @author MadrasThemes
 * @version 1.0
 * @requires
 *
 */
;
(function ( $ ) {
    $( document ).on( 'ready', function() {

        if ( $.HSCore.components.HSUnfold !== undefined ) {
            // Initialization of unfold component
            $.HSCore.components.HSUnfold.init( $('[data-unfold-target]') );
        }

        if ( $.HSCore.components.HSSlickCarousel !== undefined ) {
            // initialization of slick carousel
            $.HSCore.components.HSSlickCarousel.init( '.js-slick-carousel' );
        }

        if ( $.HSCore.components.HSCubeportfolios !== undefined ) {
            // initialization of cubeportfolio
            $.HSCore.components.HSCubeportfolio.init('.cbp');
        }


        if ( $.HSCore.components.HSSelectPicker !== undefined ) {
            // initialization of select picker
            $.HSCore.components.HSSelectPicker.init('.js-select');
        }
    });
})( jQuery );
