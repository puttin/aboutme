function non_hover_toggle() {
    var non_hover_screen_query = "screen and (hover: none)"
    var is_non_hover_screen = window.matchMedia(non_hover_screen_query)
    if (!is_non_hover_screen.matches) {
        return
    }
    var imgs = document.querySelectorAll(".hover-img a > img")
    for (var i = 0; i < imgs.length; i++) {
        var img = imgs[i];
        add_toggle_for_img(img)
    }
}

function add_toggle_for_img(img) {
    var span = document.createElement('span')
    span.classList.add("img-toggle")
    span.innerText = "Toggle Image"
    span.onclick = function(e) {
        e.preventDefault()
        img.classList.toggle("img-toggle-block")
    }
    img.parentNode.insertBefore(span, img)
}

non_hover_toggle()
