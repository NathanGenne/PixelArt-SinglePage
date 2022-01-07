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

    let reset = $('.app-tools .reset');

    $('colorset-name').text(`SET : <select id="selector">
        <option value="valeur1">Game Boy colors</option>
        <option value="valeur2" selected>Game Boy colors</option>
        <option value="valeur3">Game Boy colors</option>
        </select>`);


    // ------------------------------------------
    // Créé une grille de pixels vide
    // ------------------------------------------

    function emptyGrid(sizePx) {
        // Réinitialise la grille
        $('.pixel').remove();
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
            console.log(activeColor);
        });

        // Change de couleur le pixel
        $('.pixel').click(function() {
            $(this).css({'background':activeColor});
        });

        // Efface la couleur du pixel
        $('.pixel').dblclick(function() {
            $(this).css({'background':'white'});
            console.log('fff');
        });

        // Reset le click
        reset.click(function() {
            console.log('reset');
            emptyGrid(sizePx);
        });



        /* $('.pixel').mouseenter(function() {
            $(this).css({'background': activeColor});
        });

        $('.pixel').mouseleave(function() {
            $(this).css({'background': 'none'});
        }); */
    });

});