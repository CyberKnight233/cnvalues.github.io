$(document).ready(() => {

    initialize();

    $('.fixed-action-btn').floatingActionButton();
    $('.tooltipped').tooltip();
    $('.modal').modal();

    function get_value(value_name) {
        let query;
        if (window.location.search) {
            query = window.location.search.substring(1);
        } else {
            query = window.location.hash.substring(1);
        }
        return (new URLSearchParams(query)).get(value_name);
    }

    function set_bar_and_percent(value) {
        $("#bar-fem").css({"width": value + "%"})
    }

    function initialize() {
        debugger;
        let fem = get_value("fem");
        set_bar_and_percent(fem)

        $("#label-econ").html(fem + "%");
        
        $("#ideology-label").html(fem + "%")
        $("#ideology-label2").html(ideologies[0].name)
        $("#ideology-desc").html(ideologies[0].desc)
        $("#ideology-link").attr("href", ideologies[0].link).html(ideologies[0].link)
    }

})
