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
    var span = document.createElement("span")
    span.classList.add("img-toggle")
    span.innerText = "Toggle Image"
    span.onclick = function(e) {
        e.preventDefault()
        lazy_load_img(img)
        img.classList.toggle("img-toggle-block")
    }
    img.parentNode.insertBefore(span, img)
}

function lazy_load_img(img) {
    //check lazy load once
    var lazy_load_attribute = "lazy_load"
    if (img.hasAttribute(lazy_load_attribute)) {
        return
    }
    img.setAttribute(lazy_load_attribute, true)
    var alt = img.getAttribute("alt")
    if (!alt) {
        return
    }
    var lazy_imgs = document.getElementsByTagName("lazy-hover-img");
    var lazy_img = null
    for (var i = 0; i < lazy_imgs.length; i++) {
        var _lazy_img = lazy_imgs[i]
        if (_lazy_img.getAttribute("alt") === alt) {
            lazy_img = _lazy_img
            break
        }
    }
    if (!lazy_img) {
        return
    }
    var orig_src = img.getAttribute("src")
    if (orig_src !== "data:,") {
        return
    }
    var src = lazy_img.getAttribute("src")
    img.setAttribute("src", src)
}

function lazy_load_img_when_hover() {
    var hover_screen_query = "screen and (hover: hover)"
    var is_hover_screen = window.matchMedia(hover_screen_query)
    if (!is_hover_screen.matches) {
        return
    }
    var imgs = document.querySelectorAll(".hover-img a > img")
    for (var i = 0; i < imgs.length; i++) {
        var img = imgs[i]
        var anchor = img.parentElement
        anchor.onmouseenter = function(e) {
            lazy_load_img(img)
            anchor.onmouseenter = null
        }
    }
}

lazy_load_img_when_hover()
non_hover_toggle()
