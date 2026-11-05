(function(){
  if(!window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  if(window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;

  var dot=document.createElement('div'), ring=document.createElement('div');
  dot.className='cur-dot'; ring.className='cur-ring';
  document.body.appendChild(ring); document.body.appendChild(dot);
  document.documentElement.classList.add('custom-cursor');

  var x=-100,y=-100,rx=-100,ry=-100;
  document.addEventListener('mousemove',function(e){
    x=e.clientX; y=e.clientY;
    dot.style.transform='translate('+x+'px,'+y+'px)';
  });
  (function loop(){
    rx+=(x-rx)*.18; ry+=(y-ry)*.18;
    ring.style.transform='translate('+rx+'px,'+ry+'px)';
    requestAnimationFrame(loop);
  })();
  document.addEventListener('mouseover',function(e){
    ring.classList.toggle('hot',!!e.target.closest('a,button,.entry'));
  });
  document.addEventListener('mouseleave',function(){dot.style.opacity=0;ring.style.opacity=0;});
  document.addEventListener('mouseenter',function(){dot.style.opacity=1;ring.style.opacity=1;});
})();
