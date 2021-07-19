
function setupLargeScrollAnimations() {
    let controller = new ScrollMagic.Controller();
    let timeline1 = new TimelineMax();
    let timeline2 = new TimelineMax();
    let timeline3 = new TimelineMax();
    let timeline4 = new TimelineMax();
    let timeline5 = new TimelineMax();

    // Scroll animations
    // For hero and feature-section
    timeline1
    .to('.hero-fg', 5, {y: "-2.5vw"}, 0)
    .to('.hero-text', 5, {y: "-15vw"}, 0)
    .to('.hero-bg', 5, {y: "7vw"}, 0)
    .to('.hero-button', 5, {y: "-15vw"}, 0)

    .fromTo('.feature-section', {css:{marginTop: "0vw"}}, {css:{marginTop: "-16vw"}, duration: 2.5}, 1.5)
    //.fromTo('.feature-section', {y: "0vw"}, {y: "-16vw", duration: 2.5}, 1.5)
    .fromTo('.feature-section h1', {x: "-3vw", opacity: 0}, {x: "0vw", opacity: 1, duration: 1}, "-=3.5")
    .fromTo('.feature-section .feature', {opacity: 0}, {opacity: 1, duration: 1}, "-=3.5")
    .fromTo('.feature-section .feature-img', {opacity: 0.5}, {opacity: 1, duration: 1}, "-=3")
    .fromTo('.feature-section .explore', {x: "2vw", opacity: 0.3}, {x: "0vw", opacity: 0.8, duration: 1}, "-=3");

    let scene1 = new ScrollMagic.Scene({
        triggerElement: ".header",
        duration: "100%",
        triggerHook: 0,
    })
    .setTween(timeline1)
    .addTo(controller);

    // For Demo Section
    timeline2
    .fromTo('.demo-section', {css:{marginTop: "0vw"}}, {css:{marginTop: "-16vw"}, duration: 2.5}, 4) // 0, -27.5, d10, -=2
    .fromTo('.demo-section h1', {x: "-3vw", opacity: 0}, {x: "0vw", opacity: 1, duration: 1}, 6)
    .fromTo('.demo-section .subtitle', {opacity: 0}, {opacity: 1, duration: 1}, "-=1")
    .fromTo('.demo-section .demo', {opacity: 0}, {opacity: 1, duration: 1}, "-=1.5")
    .fromTo('.demo-section .demo-col', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");

    let scene2 = new ScrollMagic.Scene({
        triggerElement: ".feature-section",
        duration: "100%",
        triggerHook: 0.5,
    })
    .setTween(timeline2)
    .addTo(controller);

    // For buy section
    timeline3
    .fromTo('.buy-section', {css:{marginTop: "-16vw"}}, {css:{marginTop: "-25vw"}, duration: 2.5}, 4) // 30, -31
    .fromTo('.buy-section .buy-img', {x: "2vw", opacity: 0}, {x: "0vw", opacity: 1, duration: 2}, "+=2.5")
    .fromTo('.buy-section h1', {x: "-2vw", opacity: 0}, {x: "0vw", opacity: 1, duration: 1}, "-=1")
    .fromTo('.buy-section .subtitle1', {opacity: 0}, {opacity: 1, duration: 1}, "-=1")
    .fromTo('.buy-section .subtitle2', {opacity: 0}, {opacity: 1, duration: 1}, "-=1")
    .fromTo('.buy-section h3', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");

    let scene3 = new ScrollMagic.Scene({
        triggerElement: ".demo-section",
        duration: "100%",
        triggerHook: 0.35,
    })
    .setTween(timeline3)
    .addTo(controller);

    // For FAQ section
    timeline4
    .fromTo('.faq-section', {css:{marginTop: "0vw"}}, {css:{marginTop: "-16vw"}, duration: 2.5}, 4)
    .fromTo('.faq-section h1', {x: "-3vw", opacity: 0}, {x: "0vw", opacity: 1, duration: 2}, "-=2")
    .fromTo('.faq-section .subtitle', {opacity: 0}, {opacity: 1, duration: 2}, "-=0")
    .fromTo('.faq-section .tile-container', {opacity: 0}, {opacity: 1, duration: 2}, "-=2");

    let scene4 = new ScrollMagic.Scene({
        triggerElement: ".buy-section",
        duration: "100%",
        triggerHook: 0.35,
    })
    .setTween(timeline4)
    .addTo(controller);

    // For About section
    timeline5
    .fromTo('.about-section', {css:{marginTop: "0vw"}}, {css:{marginTop: "-16vw"}, duration: 2.5}, 4)
    .fromTo('.about-section h1', {x: "-3vw", opacity: 0}, {x: "0vw", opacity: 1, duration: 2}, "-=1")
    //.fromTo('.about-section .social', {x: "-2vw", opacity: 0}, {x: "0vw", opacity: 1, duration: 2}, "+=1")
    .fromTo('.about-section .subtitle', {opacity: 0}, {opacity: 0.8, duration: 2}, "-=0")
    .fromTo('.about-section .tile-container', {opacity: 0}, {opacity: 1, duration: 2}, "-=2")
    .fromTo('.about-section .dev-img', {x: "2vw", opacity: 0}, {x: "0vw", opacity: 1, duration: 3}, "-=2");

    let scene5 = new ScrollMagic.Scene({
        triggerElement: ".faq-section",
        duration: "100%",
        triggerHook: 0.3,
    })
    .setTween(timeline5)
    .addTo(controller);


}

function setupLargeLoadAnimations() {
    let loadTimeline = new TimelineMax();
    // Load animations, Large screen
    loadTimeline
    .fromTo('.hero-text', {opacity: 0}, {opacity: 1, duration: 2})
    .fromTo('.hero-button', {opacity: 0}, {opacity: 1, duration: 1.75}, "-=1.5")
    .fromTo('.hero-fg', {x: -10, opacity: 0.2}, {x: 0, opacity: 1, duration: 3}, "-=2.5");
}

function setupSmallLoadAnimations() {
    let loadTimeline = new TimelineMax();
    // Load animations
    loadTimeline
    .fromTo('.hero-text', {opacity: 0}, {opacity: 1, duration: 2})
    .fromTo('.hero-button', {opacity: 0}, {opacity: 1, duration: 1.75}, "-=1.5")
    .fromTo('.hero-fg', {x: "-12vw", opacity: 0.2}, {x: "-10vw", opacity: 1, duration: 3}, "-=2.5");
}


const mediaQ = window.matchMedia("(min-width: 800px)");
var mediaListener = function(e) {
    if(e.matches) // large screens
    {
        setupLargeScrollAnimations();
        setupLargeLoadAnimations();
    }
    else 
    {
        setupSmallLoadAnimations();
    }
}

mediaQ.addEventListener("change", mediaListener);
mediaListener(mediaQ);

var audio1 = document.getElementById("audioplayer1");
var audio2 = document.getElementById("audioplayer2");
var audio3 = document.getElementById("audioplayer3");
var audio4 = document.getElementById("audioplayer4");
var audio5 = document.getElementById("audioplayer5");
var audio6 = document.getElementById("audioplayer6");
audio1.volume = 0.70;
audio2.volume = 0.70;
audio3.volume = 0.70;
audio4.volume = 0.70;
audio5.volume = 0.70;
audio6.volume = 0.70;


// FAQ accordion 

function toggleAccordion (element) {
    if(element.tagName == "H2")
    {
        element.nextSibling.nextSibling.classList.toggle("open");
        element.previousSibling.previousSibling.classList.toggle("open");
    }
    else if(element.tagName == "IMG")
    {
        element.classList.toggle("open");
        element.nextSibling.nextSibling.nextSibling.nextSibling.classList.toggle("open");
    }
}

