let loadTimeline = new TimelineMax();

loadTimeline
.fromTo('.hero-text', {x:"-2vw", opacity: 0}, {x: "0vw", opacity: 1, duration: 2})
.fromTo('.qr', {opacity: 0}, {opacity: 1, duration: 2}, "-=2")
.fromTo('.tile p', {x: 10, opacity: 0}, {x: 0, opacity: 1, duration: 3}, "-=1.5")
.fromTo('.tile h2', {x: 10, opacity: 0}, {x: 0, opacity: 1, duration: 3}, "-=3")
.fromTo('.tile h3', {x: 10, opacity: 0}, {x: 0, opacity: 1, duration: 3}, "-=3");