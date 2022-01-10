// -----------------------------------------------------------
// Votre code ici
// -----------------------------------------------------------

$(function() {

    // -----------------------------------------------------------
    // Selecteurs
    // -----------------------------------------------------------

    // Désigne les cases de selection des couleurs
    const colorBoxes = $('.app-tools .swatch');
    // Désigne la case active
    const activeColorBox = $('.app-tools .is-active');
    // Désigne la couleur de la case active
    var activeColor = activeColorBox.css('background-color');

    // Défini le nombre de pixel par ligne de l'écran
    let widthPx = 32;
    // Défini lla taille de chaque pixel
    let sizePx = parseInt($('.app-screen').css('height'))/widthPx;
    // Défini la définition de l'écran
    let definition = widthPx*widthPx;

    const reset = $('.app-tools .reset');
    const exports = $('.app-tools .export');


    // ------------------------------------------
    // Créé une grille de pixels vide
    // ------------------------------------------

    function emptyGrid(sizePx) {
        // créé la grille case par case
        for ( x=0; x<definition; x++) {
            // créé un nouveau pixel
            $('.app-screen').append('<div class="pixel"></div>');
            // détermine la taille du pixel
            $('.app-screen div:last-child').css({'height':sizePx,'width':sizePx});
        }
    }


    // ------------------------------------------
    // Sélectionne une couleur
    // ------------------------------------------

    function selectColor(selected) {
        // Défini la case comme active
        selected.addClass('is-active');
        // Défini les autres comme inactives
        selected.siblings().removeClass('is-active');
        // Défini le background de la case comme la couleur sélectionnée
        activeColor = selected.css('background-color');  
    }


    $(function() {

        // créé une grille vide
        emptyGrid(sizePx);

        // Défini le background de la case comme la couleur sélectionnée
        colorBoxes.click(function() {
            selectColor($(this));
        });

        // Change de couleur le pixel
        $('.pixel').mousedown(function() {
            $(this).css({'background':activeColor});
        });

        // Efface la couleur du pixel (background:white)
        $('.pixel').dblclick(function() {
            $(this).css({'background':'white'});
        });

        // Efface la couleur de tous les pixels (background:white)
        reset.click(function() {
            $('.pixel').css({'background':'white'});
        });

        // Récupère le block content et le converti en image jpeg
        exports.click(function() {
            domtoimage.toJpeg(document.getElementById('content'), { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'imageNG.jpeg';
                link.href = dataUrl;
                link.click();
            });
        });

    });

});