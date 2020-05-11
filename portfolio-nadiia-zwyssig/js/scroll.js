console.log("hallo");
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
        triggerHook: 'onLeave'
        }
    })
    var slides = document.querySelectorAll("section");
   
    for (var i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
            triggerHook: 'onEnter',
            triggerElement: slides[i]
            })

            .setPin(slides[i])
            .addTo(controller);
    };

// new ScrollMagic.Scene({
//     duration: 100,    // the scene should last for a scroll distance of 100px
//     offset: 50    // start this scene after scrolling for 50px
// })