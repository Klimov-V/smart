var header    = document.querySelector("header");
var headroom  = new Headroom(header, {
    tolerance: 10,
});
headroom.init();
