// -----------------------------------------------------------
// Votre code ici
// -----------------------------------------------------------

$(function() {

    //const clickedColor = $('.app-tools .is-active');
    //const choiceColor = $('.app-tools .swatch');
    //console.log(clickedColor);
    const pixel = $('.pixel');
    let nbGrid = parseInt($('app-screen').css('width'))/32;
    console.log(nbGrid);

    /* function colorsChoice(color) {
        // Défini la case comme active
        color.addClass('is-active');
        color.siblings().removeClass('is-active');
        console.log(color);
        // Récupère la classe correspondant à la couleur de la case
        let selectedColor = color.css('background-color');
        console.log(selectedColor);
        // Renvoi la couleur sélectionnée
        return selectedColor;
        
    } */

    function emptyGrid(grid) {
        const fullGrid = $('.app-screen');
        $('pixel').remove();
        for ( x=0; x<grid; x++) {
            fullGrid.append('<div class="pixel"></div>');
        }
    }

    /* choiceColor.click(function() {
        colorsChoice(choiceColor);
    });

    pixel.mouseenter(function() {
        console.log(selectedColor);
        pixel.css({'border': colorsChoice()});
    });
 */

    // buttonsOver();
    emptyGrid(nbGrid);





















});