(function() {
    var activeTags = [];

    function init() {
        var jbutton = [document.querySelector('main#programa div.day button#labA')];
        var vbutton = [document.querySelector('main#programa div.day button#labB')];
        var xbutton = [document.querySelector('main#programa div.day button#labC')];
        var showfilters = [document.getElementById('show-tags')];
        var clickableTags = document.querySelectorAll('.tags .tag');

        setListeners("click", jbutton, labAButton);
        setListeners("click", vbutton, labBButton);
        setListeners("click", xbutton, labCButton);
        setListeners("click", showfilters, showFilters);
        setListeners("click", clickableTags, applyFilter);
    }

    function setListeners(evt, inputs, handler) {
        for (var i in inputs) {
            if (inputs.hasOwnProperty(i)) {

                var input = inputs[i];
                input.addEventListener(evt, handler);
            }
        }

    }

    function labAButton() {
        $('button#labB').removeClass('active');
        $('button#labC').removeClass('active');
        $('button#labA').addClass('active');

        $('div#labB').fadeOut();
        $('div#labC').fadeOut();
        $('div#labA').fadeIn();
        
    }

    function labBButton() {
        $('button#labA').removeClass('active');
        $('button#labC').removeClass('active');
        $('button#labB').addClass('active');

        $('div#labA').fadeOut();
        $('div#labC').fadeOut();
        $('div#labB').fadeIn();
    }

    function labCButton() {
        $('button#labA').removeClass('active');
        $('button#labB').removeClass('active');
        $('button#labC').addClass('active');

        $('div#labA').fadeOut();
        $('div#labB').fadeOut();
        $('div#labC').fadeIn();
    }

    function showFilters(event) {
        target = event.target;
        if (!(target.id === 'show-tags')) {
            target = target.parentNode;
        }

        $(target).next().slideToggle();
        $(target).toggleClass('active');
    }

    function applyFilter(event) {
        target = event.target;
        if (!target.classList.contains("tag")) {
            target = target.parentNode;
        }

        $(target).toggleClass('active');
        var tag = $(target).data('id');
        index = activeTags.indexOf(tag);
        if (index > -1) {
            activeTags.splice(index, 1);
        } else {
            activeTags.push(tag);
        }


        talks = $('.slot > a');
        $(talks).removeClass('blur');

        if (activeTags.length > 0) {
            talksToBlur = talks.filter(function (index) {
                item = talks[index];
                tags = $(item).data('tags');

                if (tags !== undefined) {
                    if (Number.isInteger(tags)) {
                        itemTags = [tags];
                    } else {
                        itemTags = tags.split(', ');
                    }

                    for (var i in itemTags) {
                        if (activeTags.indexOf(parseInt(itemTags[i])) > -1) {
                            return false;
                        }
                    }
                }
                return true;
            });
            console.log(talksToBlur);

            $(talksToBlur).addClass('blur');
        }
    }

    init();
})();

