const $=id=>document.getElementById(id),esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const root=document.documentElement,page=document.body.dataset.page,yr=new Date().getFullYear();
$("navName").innerHTML='<svg viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M10 7v18M10 16l12 8"/><g class="a2"><path d="M10 16l12-8"/><circle cx="22" cy="8" r="2.6" fill="currentColor"/></g><circle cx="10" cy="16" r="3" fill="currentColor"/><circle cx="22" cy="24" r="2.6" fill="currentColor"/></svg>'+esc(DATA.name);
$("foot").innerHTML=esc(DATA.location+" · © "+yr+" "+DATA.name)+' · <a href="https://kanishkpatel0206.github.io/kanishk-desktop/" target="_blank" rel="noopener">Playground ↗</a>';
try{const t=localStorage.getItem("theme");if(t)root.dataset.theme=t}catch(e){}
$("theme").onclick=()=>{const d=root.dataset.theme?root.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;
 root.dataset.theme=d?"light":"dark";try{localStorage.setItem("theme",root.dataset.theme)}catch(e){}};
if(page==="home"){
 const gh=DATA.links.find(l=>l[0]==="GitHub");
 $("hi").textContent="Hi, I’m "+DATA.name+". I build robots and learning systems.";
 $("gh").href=gh?gh[2]:"#";
 const IC={"arm": "<svg class=\"ic arm\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><g class=\"a1\"><path d=\"M5 19L11 11\"/><circle cx=\"11\" cy=\"11\" r=\"1.6\"/><g class=\"a2\"><path d=\"M11 11L19 8\"/><circle cx=\"19\" cy=\"8\" r=\"1.6\"/></g></g><path d=\"M2 21h6\"/><circle cx=\"5\" cy=\"19\" r=\"1.6\"/></svg>", "gear": "<svg class=\"ic gear\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><g class=\"gr\"><circle cx=\"12\" cy=\"12\" r=\"7.5\" stroke-width=\"3\" stroke-dasharray=\"2.35 2.35\"/><circle cx=\"12\" cy=\"12\" r=\"5.2\"/></g><circle cx=\"12\" cy=\"12\" r=\"1.8\"/></svg>", "net": "<svg class=\"ic net\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M5 6l7 6M5 18l7-6M12 12h8\"/><circle class=\"nd\" cx=\"5\" cy=\"6\" r=\"2\"/><circle class=\"nd\" cx=\"5\" cy=\"18\" r=\"2\"/><circle class=\"nd\" cx=\"12\" cy=\"12\" r=\"2\"/><circle class=\"nd\" cx=\"20\" cy=\"12\" r=\"2\"/></svg>"},K=["arm","gear","net"];
 $("headline").innerHTML=DATA.roleLines.map((l,i)=>'<div class="ln"><span>'+esc(l)+"</span>"+IC[K[i%3]]+"</div>").join("");
 const clk=()=>{$("loc").innerHTML='<i class="dot"></i>TIRUPATI, IN — '+new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit",timeZone:"Asia/Kolkata"}).toUpperCase()+" IST"};clk();setInterval(clk,30000);
 const hero=document.querySelector(".hero");if(!matchMedia("(prefers-reduced-motion:reduce)").matches)for(let i=0;i<9;i++){const m=document.createElement("i");m.className="met";m.style.cssText="top:"+(Math.random()*40-10)+"%;left:"+(30+Math.random()*70)+"%;animation-delay:"+(2.8+Math.random()*6)+"s;animation-duration:"+(4+Math.random()*4)+"s";hero.appendChild(m)}
 $("bio").innerHTML=DATA.bio.map(p=>"<p>"+esc(p)+"</p>").join("");
 $("now").innerHTML=DATA.now.map(n=>"<li>"+esc(n)+"</li>").join("");
 $("projects").innerHTML=DATA.folders.map(f=>'<div class="group"><h3 class="gt">'+esc(f.title)+'</h3>'+f.projects.map(p=>{
  const t=p.url?"a":"div",h=p.url?' href="'+esc(p.url)+'" target="_blank" rel="noopener"':"";
  return"<"+t+' class="proj"'+h+"><div><h3>"+esc(p.name)+'</h3><span class="mono">'+esc(p.role)+"</span></div><div><p>"+esc(p.desc)+'</p><div class="tags">'+p.tags.map(x=>"<span>"+esc(x)+"</span>").join("")+'</div></div><span class="mono">'+(p.url?esc(p.linkLabel).replace("view on GitHub","GitHub ↗"):"in progress")+"</span></"+t+">"}).join("")+"</div>").join("");
 $("skillGrid").innerHTML=DATA.skills.map(s=>"<span>"+esc(s)+"</span>").join("");
 $("timeline").innerHTML=DATA.education.map(e=>'<article><span class="mono">'+esc(e.when)+"</span><h3>"+esc(e.role)+"</h3><p>"+esc(e.desc)+"</p></article>").join("");
 const intro=$("intro"),skip=matchMedia("(prefers-reduced-motion:reduce)").matches;
 setTimeout(()=>intro.classList.add("done"),skip?200:2600);
}else{
 $("lead").textContent=DATA.available;
 const chips=[...DATA.links.map(l=>'<a href="'+esc(l[2])+'" target="_blank" rel="noopener">'+esc(l[0])+' <span class="mono">'+esc(l[1])+"</span></a>"),
  ...DATA.location.split("·").map(s=>"<span>"+esc(s.trim())+"</span>")].join("");
 $("m1").innerHTML=chips.repeat(8);$("m2").innerHTML=chips.repeat(8);
 $("links").innerHTML=DATA.links.map(l=>'<a href="'+esc(l[2])+'" target="_blank" rel="noopener"><span>'+esc(l[0])+'</span><span class="mono">'+esc(l[1])+"</span></a>").join("");
 $("faq").innerHTML=DATA.faq.map(f=>"<details><summary>"+esc(f[0])+"</summary><p>"+esc(f[1])+"</p></details>").join("");
 $("form").addEventListener("submit",e=>{e.preventDefault();const f=new FormData(e.target);
  location.href="mailto:"+DATA.email+"?subject="+encodeURIComponent(f.get("subject")||"Portfolio enquiry")+"&body="+encodeURIComponent(f.get("msg")+"\n\n"+f.get("name")+" ("+f.get("email")+")")});
}

/* scroll reveals */
if(!matchMedia("(prefers-reduced-motion:reduce)").matches&&"IntersectionObserver"in window){
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
 document.querySelectorAll("h2,.group>.gt,.proj,.tl article,.chips span,#bio p,.now li,details,.talk,.lead,.contact>*").forEach((el,k)=>{
  if(el.matches(".chips span"))el.style.setProperty("--i",[...el.parentNode.children].indexOf(el)%14);
  el.classList.add("rv");io.observe(el)})}
/* click sparks */
(()=>{if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
 const cv=document.createElement("canvas");cv.id="spark";document.body.appendChild(cv);const x=cv.getContext("2d");let S=[],raf;
 const fit=()=>{cv.width=innerWidth;cv.height=innerHeight};fit();addEventListener("resize",fit);
 const draw=t=>{x.clearRect(0,0,cv.width,cv.height);S=S.filter(s=>{const p=(t-s.t)/450;if(p>=1)return false;const e=p*(2-p),d=e*26,l=10*(1-e);
  x.strokeStyle=getComputedStyle(root).getPropertyValue("--c1");x.lineWidth=2;x.beginPath();x.moveTo(s.x+d*Math.cos(s.a),s.y+d*Math.sin(s.a));x.lineTo(s.x+(d+l)*Math.cos(s.a),s.y+(d+l)*Math.sin(s.a));x.stroke();return true});
  S.length?raf=requestAnimationFrame(draw):x.clearRect(0,0,cv.width,cv.height)};
 addEventListener("click",e=>{const t=performance.now();for(let i=0;i<8;i++)S.push({x:e.clientX,y:e.clientY,a:Math.PI*2*i/8,t});cancelAnimationFrame(raf);raf=requestAnimationFrame(draw)})})();

/* orbs behind hero */
(()=>{const h=document.querySelector(".hero");if(!h)return;["o1","o2","o3"].forEach(c=>{const o=document.createElement("div");o.className="orb "+c;o.setAttribute("aria-hidden","true");h.insertBefore(o,h.firstChild)})})();
/* dot + lagging ring cursor */
(()=>{if(!matchMedia("(hover:hover) and (pointer:fine)").matches||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
 const dot=document.createElement("div"),ring=document.createElement("div");dot.className="cur";ring.className="cur-ring";
 dot.setAttribute("aria-hidden","true");ring.setAttribute("aria-hidden","true");document.body.append(dot,ring);
 const H="a,button,summary,.proj,.chips span,.pill,.tab,label",T="input,textarea";
 let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my,ds=1,dt=1,rs=1,rt=1,seen=false;
 addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY;if(!seen){seen=true;rx=mx;ry=my;root.classList.add("cur-on")}
  const t=e.target.closest?e.target:null,hov=t&&t.closest(H),txt=t&&t.closest(T);
  dt=txt?.5:hov?2.5:1;rt=hov?1.6:txt?.6:1;root.classList.toggle("cur-hover",!!hov)},{passive:true});
 addEventListener("mousedown",()=>{rt=.75});addEventListener("mouseup",()=>{rt=root.classList.contains("cur-hover")?1.6:1});
 document.addEventListener("mouseleave",()=>root.classList.remove("cur-on"));document.addEventListener("mouseenter",()=>{if(seen)root.classList.add("cur-on")});
 (function loop(){rx+=(mx-rx)*.15;ry+=(my-ry)*.15;ds+=(dt-ds)*.25;rs+=(rt-rs)*.2;
  dot.style.transform="translate3d("+mx+"px,"+my+"px,0) scale("+ds+")";
  ring.style.transform="translate3d("+rx+"px,"+ry+"px,0) scale("+rs+")";requestAnimationFrame(loop)})();
})();
