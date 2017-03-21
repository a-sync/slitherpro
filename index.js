(function() {
    ii.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    render_mode = 1;
    document.getElementById('nbg').addEventListener('mousewheel', function(e) {
        var e = window.event || e;
        if (Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))) > 0) {
            if (window.gsc < 2) window.gsc += 0.05;
        } else {
            if (window.gsc > 0.1) window.gsc -= 0.05;
        }
        window.sgsc = window.gsc;
    }, false);
    window.zef = window.oef;
    window.oef = function() {
        window.zef();
        if (snake) window.gsc = window.sgsc;
    };
})();
