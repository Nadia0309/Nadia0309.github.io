var tl = new TimelineLite();
tl
  .to(".celetter",0,{autoAlpha:0})
  .to("#ICT",0,{autoAlpha:0})
  .to(".button",0,{autoAlpha:0})
  .to("#arrow1",0,{autoAlpha:0})
  .to("#arrow2",0,{autoAlpha:0})
  .to("#arrow3",0,{autoAlpha:0})
  .to(".servers",0,{autoAlpha:0, scale:0})
  .to("h1",0,{autoAlpha:0})
  .to("h2",0,{autoAlpha:0})
  .to("#screeng",0,{autoAlpha:0})


  // LOGO ANIMATION

  .to(".cls-6",0,{autoAlpha:0, onComplete:LazyPaintingCE})
  .to(".banner",0.1,{autoAlpha:1})
  .to(".celetter",0.2,{autoAlpha:1})
  .fromTo(".celetterfill",0.4,{autoAlpha:0},{autoAlpha:1},1)
  .staggerFrom(".letter", 0.6,{cycle:{
    y:[0,0],
    x:[-100,100],
    autoAlpha: [0],
  ease:[Power3.easeOut],
  }},0.18) 

.to(".cls-4",0.2,{onComplete:LazyPainting},"-=0.30")
.to("#ICT",0.2,{autoAlpha:1,onComplete:bannerAnim},2.9)
.fromTo(".cls-5",0.3,{autoAlpha:0},{autoAlpha:1},3.1)
.fromTo(".cls-4",0.01,{autoAlpha:1},{autoAlpha:0},3.1)

//HEADERS ANIMATION

.to("h1",1,{autoAlpha:1,ease:Sine.easeIn,},3)
.to("h2",2,{autoAlpha:1,ease:Sine.easeIn},7)

//FUNCTIONS FOR LOGO ANIMATION

function LazyPainting(){ 
  console.log("ICT letters");
  let el = document.querySelector('#ICT');
  let myAnimation = new LazyLinePainter(el, {"ease":"easeInOutCirc","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#000000","strokeCap":"round"}); 
  myAnimation.paint(); 
};

function LazyPaintingCE(){ 
  console.log(" CE running letters");     
  let el = document.querySelector('#CE');
  let myAnimation = new LazyLinePainter(el, {"ease":"easeInOutCirc","strokeWidth":3,"strokeOpacity":1,"strokeCap":"round","duration":1000}); 
  myAnimation.paint(); 
};

// ILLUSTRATION ANIMATION

function bannerAnim(){

var tl2 = new TimelineLite();
var counter = 0;
tl2

.to(".cls-6",0,{autoAlpha:1},1.5)
.fromTo(".servers",0.7,{autoAlpha:0, scale:0}, {autoAlpha:1, scale:1, onComplete:PaintScreeng},0.9)
.to("#screeng",0.1, {autoAlpha:1},1.7)

.to("#arrow1",0,{
    autoAlpha : 1,
    onComplete : PaintArrow1
},"-=0.4")
.to("#arrow2",0,{
    autoAlpha:1,
    onComplete: PaintArrow2
},"-=0.4")
.to("#arrow3",0,{
    autoAlpha:1,
    onComplete: PaintArrow3
},"-=0.4")

//BUTTON ANIMATION

.to(".button",1,{autoAlpha:1, scale:1.2, ease: Bounce.easeOut},5.1)

//FUNCTIONS FOR ANIMATION OF MONITORS

function PaintArrow1(){ 
  let el = document.querySelector('#arrow1');
  let myAnimation = new LazyLinePainter(el, {"ease":"easeOutSine","strokeWidth":1.8,"strokeOpacity":1,"strokeColor":"#ee4027","delay":0,"reverse":true}); 
  myAnimation.paint();
  counter ++;
  if(counter < 8 ){
    myAnimation.on('complete', (event) => {PaintArrow1()});
  }
};

function PaintArrow2(){ 
  let el = document.querySelector('#arrow2');
  let myAnimation = new LazyLinePainter(el, {"ease":"easeOutSine","strokeWidth":1.8,"strokeOpacity":1,"strokeColor":"#ee4027","delay":0,"reverse":true}); 
  myAnimation.paint();
  counter ++;
  if(counter < 10 ){
    myAnimation.on('complete', (event) => {PaintArrow2()});
  }
};

function PaintArrow3(){ 
  let el = document.querySelector('#arrow3');
  let myAnimation = new LazyLinePainter(el, {"ease":"easeInOutSine","strokeWidth":1.8,"strokeOpacity":1,"strokeColor":"#ee4027","delay":0,"reverse":true}); 
  myAnimation.paint();
  counter ++;
  if(counter < 10 ){
    myAnimation.on('complete', (event) => {PaintArrow3()});
  }    
};

function PaintScreeng(){ 
  console.log("grafik is being painted");
  let el = document.querySelector('#screeng');
  let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":10,"strokeOpacity":1,"delay":0}); 
  myAnimation.paint();	
  }; 
};
















		
		
		
		



