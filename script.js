const PASSWORD = "ان فقدتك لن اعيش";
const ADMIN_PASS = "الهووس";

const BG_IMAGES = ["b1.jpg","b2.jpg","b3.jpg","b4.jpg","b5.jpg"];
const STAR_IMAGES = ["g1.jpg","g2.jpg","g3.jpg","g4.jpg","g5.jpg","g6.jpg","g7.jpg","g8.jpg","g9.jpg","g10.jpg","g11.jpg"];
const GALLERY_IMAGES = ["gb1.jpg","gb2.jpg","gb3.jpg","gb4.jpg","gb5.jpg","gb6.jpg","gb7.jpg","gb8.jpg"];

const STAR_POSITIONS = [
  {top:"3%",left:"42%"},
  {top:"13%",left:"24%"},
  {top:"13%",left:"60%"},
  {top:"28%",left:"11%"},
  {top:"28%",left:"42%"},
  {top:"28%",left:"72%"},
  {top:"46%",left:"22%"},
  {top:"46%",left:"60%"},
  {top:"62%",left:"30%"},
  {top:"62%",left:"52%"},
  {top:"78%",left:"42%"}
];

const STAR_POEMS = [
  "في عينيكِ أرى وطني، وفي ابتسامتكِ أجد سلامي.",
  "أنتِ النجمة الوحيدة التي تضيء سمائي المظلمة.",
  "لو كان للحب صوت، لكان اسمكِ هو ألحانه.",
  "بين نبضي ونبضي، تختبئين أنتِ.",
  "لستِ مجرد صدفة، أنتِ أجمل أقداري.",
  "كأنكِ خُلقتِ من نور، لتضيئي عتمة أيامي.",
  "أكتفي بكِ عن العالمين، فأنتِ كل ما أملك.",
  "في حضوركِ يغيب كل شيء، ولا يبقى سواكِ.",
  "أنتِ الأمان الذي بحثت عنه في فوضى هذا العالم.",
  "لا مسافة تبعدكِ عني، فأنتِ تسكنين الروح.",
  "كل قصائد الدنيا لا تكفي لوصف سحر عينيكِ."
];

const SECRETS = [
  "أراقب صوركِ دائمًا كل ساعة، لأنني أخاف أن أنسى ملامحكِ، ولأنني ببساطة أعشق النظر إليكِ.",
  "أحبكِ كثيرًا لدرجة أنني حقًا لا أستطيع تخيل حياتي بدونكِ.",
  "رغم أنني لا أهتم كثيرًا بنفسي، إلا أنني عندما أراكِ مهتمة بي، يغمر قلبي الفرح.",
  "تعلَمين أن لديّ جانبًا مظلمًا، لكنني لا أُخرجه أبدًا إلا عندما أكون معكِ.",
  "حياتي تغيّرت كثيرًا منذ أن تعرّفت عليكِ، ولم أتخيل يومًا أن أحظى بشخص مثلكِ في حياتي."
];

const PROMISES = [
  "أعدكِ أنني لن أتخلى عنكِ أبدًا.",
  "أعدكِ أنني لن أنساكِ أبدًا.",
  "أعدكِ أنني عندما أكون جاهزًا، سآتي لرؤيتكِ.",
  "أعدكِ أنني لن أقارنكِ بأحد.",
  "أعدكِ أنني لن أحب أحدًا كما أحببتكِ أنتِ.",
  "أعدكِ أنني عندما أنجح، سأساندكِ لتنجحي معي.",
  "أعدكِ أنني، بإذن الله، سأفي بوعودي."
];

const QUALITIES = [
  "لطيفة 🌸","أخلاقكِ رائعة 👑","شخصيتكِ مسؤولة 💼",
  "جميلة جدًا 🌹","ظريفة 🎀","قوية 💪",
  "سخية 💛","ليس لكِ شبيه ✨","تعتنين بي 🤍",
  "تساندينني في قراراتي 🖤"
];

const LOVE_WORDS = [
  {word:"أحبكِ",lang:"عربي"},
  {word:"كانبغيك",lang:"مغربي"},
  {word:"أركم تيريغ",lang:"أمازيغي"},
  {word:"I love you",lang:"إنجليزي"},
  {word:"Je t'aime",lang:"فرنسي"},
  {word:"Ti amo",lang:"إيطالي"},
  {word:"Te amo",lang:"إسباني"},
  {word:"Ich liebe dich",lang:"ألماني"},
  {word:"我爱你",lang:"صيني"},
  {word:"사랑해",lang:"كوري"},
  {word:"愛してる",lang:"ياباني"},
  {word:"Seni seviyorum",lang:"تركي"},
  {word:"Я тебя люблю",lang:"روسي"},
  {word:"Σ' αγαπώ",lang:"يوناني"},
  {word:"من تو را دوست دارم",lang:"فارسي"},
  {word:"Kocham cię",lang:"بولندي"},
  {word:"אני אוהב אותך",lang:"عبري"},
  {word:"मैं तुमसे प्यार करता हूँ",lang:"هندي"},
  {word:"Eu te amo",lang:"برتغالي"}
];

const TIMELINE = [
  {year:"2020",text:"أول تعارف، ولم يكن بيننا يومها مشاعر أو اهتمام خاص."},
  {year:"2021",text:"لم تكن الذكريات واضحة تمامًا، لكنكِ بدأتِ تتركين أثرًا خفيفًا في قلبي."},
  {year:"2022",text:"بداية تكوّن المشاعر بيننا."},
  {year:"2023",text:"غياب قصير، لكن بعده بدأت علاقتنا الدائمة."},
  {year:"2024",text:"ازددنا قربًا واهتمامًا ببعضنا."},
  {year:"2025",text:"قمة الحب والمشاعر والاهتمام."},
  {year:"2026",text:"هنا أحببتكِ حبًا لم أعرفه لكِ من قبل."}
];

let pwAttempts=0, bgIndex=0, siteReady=false;
let candleIndex=0, micActive=false, audioCtx=null, analyser=null, lastBlow=0;
let gameRunning=false, gameCaught=0, gameTime=15, gameInterval=null;
let wishClicks=0, wishTimer=null;

const $ = id => document.getElementById(id);

const bgLayer=$("bgLayer"), preloader=$("preloader");
const passwordScreen=$("passwordScreen"), voiceScreen=$("voiceScreen"), app=$("app");
const pwInput=$("pwInput"), pwBtn=$("pwBtn"), pwErr=$("pwErr");
const horrorOverlay=$("horrorOverlay");
const playVoiceBtn=$("playVoiceBtn"), enterBtn=$("enterBtn");
const voiceAudio=$("voiceAudio"), bgMusic=$("bgMusic");
const musicToggle=$("musicToggle"), soundWave=$("soundWave");
const loveCounter=$("loveCounter");
const starsField=$("starsField"), starModal=$("starModal");
const starModalImg=$("starModalImg"), starModalPoem=$("starModalPoem");
const closeStarModal=$("closeStarModal");
const pageRight=$("pageRight"), pageLeft=$("pageLeft");
const ringList=$("ringList"), qualitiesGrid=$("qualitiesGrid");
const gallery3d=$("gallery3d");
const enableMicBtn=$("enableMicBtn"), manualBtn=$("manualBtn");
const micStatus=$("micStatus");
const candlesRow=$("candlesRow"), candlesCount=$("candlesCount");
const loveWord=$("loveWord");
const finalScreen=$("finalScreen"), closeFinal=$("closeFinal");
const giftBox=$("giftBox"), giftMsg=$("giftMsg");
const startGame=$("startGame"), gameArea=$("gameArea");
const gTimer=$("gTimer"), gScore=$("gScore"), gameMsg=$("gameMsg");
const wishTitle=$("wishTitle"), wishForm=$("wishForm");
const wishInput=$("wishInput"), saveWish=$("saveWish");
const wishDone=$("wishDone"), goldDust=$("goldDust");
const adminModal=$("adminModal"), adminWishText=$("adminWishText");
const closeAdmin=$("closeAdmin"), timelineEl=$("timelineEl");

// التحميل
setTimeout(()=>{
  preloader.classList.add("hidden");
  passwordScreen.classList.remove("hidden");
},1900);

// كلمة المرور
function norm(s){return s.replace(/\s+/g," ").trim()}

function checkPW(){
  if(norm(pwInput.value)===norm(PASSWORD)){
    pwErr.textContent="";
    passwordScreen.classList.add("hidden");
    voiceScreen.classList.remove("hidden");
  } else {
    pwAttempts++;
    pwErr.textContent="كلمة المرور غير صحيحة، حاولي مجددًا";
    pwInput.value="";
    if(pwAttempts>=3){showHorror();pwAttempts=0;}
  }
}

function showHorror(){
  horrorOverlay.classList.remove("hidden");
  setTimeout(()=>horrorOverlay.classList.add("hidden"),2600);
}

pwBtn.addEventListener("click",checkPW);
pwInput.addEventListener("keydown",e=>{if(e.key==="Enter")checkPW()});

// الصوت
playVoiceBtn.addEventListener("click",async()=>{
  try{await voiceAudio.play()}catch(e){}
  soundWave.classList.add("playing");
  setTimeout(()=>enterBtn.classList.remove("hidden"),800);
});

voiceAudio.addEventListener("ended",()=>{
  soundWave.classList.remove("playing");
  enterBtn.classList.remove("hidden");
});

enterBtn.addEventListener("click",async()=>{
  voiceScreen.classList.add("hidden");
  app.classList.remove("hidden");
  if(!siteReady){initSite();siteReady=true}
  try{await bgMusic.play();musicToggle.textContent="⏸ إيقاف"}
  catch(e){musicToggle.textContent="▶ تشغيل"}
});

musicToggle.addEventListener("click",async()=>{
  if(bgMusic.paused){
    try{await bgMusic.play();musicToggle.textContent="⏸ إيقاف"}catch(e){}
  } else {bgMusic.pause();musicToggle.textContent="▶ تشغيل"}
});

// تهيئة الموقع
function initSite(){
  rotateBg();setInterval(rotateBg,4500);
  updateCounter();setInterval(updateCounter,1000);
  buildStars();buildSecrets();buildPromises();
  buildQualities();buildGallery();buildCandles();buildTimeline();
  if(localStorage.getItem("imanWish")){
    wishForm.classList.add("hidden");
    wishDone.classList.remove("hidden");
  }
}

function rotateBg(){
  bgIndex=(bgIndex+1)%BG_IMAGES.length;
  bgLayer.style.backgroundImage=`url("${BG_IMAGES[bgIndex]}")`;
}

function updateCounter(){
  const start=new Date("2020-06-17"),now=new Date();
  let y=now.getFullYear()-start.getFullYear();
  let m=now.getMonth()-start.getMonth();
  let d=now.getDate()-start.getDate();
  if(d<0){m--;d+=new Date(now.getFullYear(),now.getMonth(),0).getDate()}
  if(m<0){y--;m+=12}
  const total=Math.floor((now-start)/86400000);
  loveCounter.textContent=`${y} سنة • ${m} شهرًا • ${d} يومًا • ${total} يوم معًا`;
}

// النجوم
function buildStars(){
  starsField.innerHTML="";
  STAR_POEMS.forEach((poem,i)=>{
    const btn=document.createElement("button");
    btn.className="star-btn";btn.innerHTML="★";
    btn.style.top=STAR_POSITIONS[i].top;
    btn.style.left=STAR_POSITIONS[i].left;
    btn.style.animationDelay=`${i*.28}s`;
    btn.addEventListener("click",()=>{
      starModalImg.src=STAR_IMAGES[i];
      starModalPoem.textContent=poem;
      starModal.classList.remove("hidden");
    });
    starsField.appendChild(btn);
  });
}

closeStarModal.addEventListener("click",()=>starModal.classList.add("hidden"));
starModal.addEventListener("click",e=>{if(e.target===starModal)starModal.classList.add("hidden")});

// الأسرار
function buildSecrets(){
  pageRight.innerHTML=SECRETS.slice(0,3).map(s=>`<p>${s}</p>`).join("");
  pageLeft.innerHTML=SECRETS.slice(3).map(s=>`<p>${s}</p>`).join("");
}

// الوعود
function buildPromises(){
  ringList.innerHTML=PROMISES.map(p=>`<li>${p}</li>`).join("");
}

// الصفات
function buildQualities(){
  qualitiesGrid.innerHTML="";
  QUALITIES.forEach((q,i)=>{
    const card=document.createElement("div");
    card.className="q-card";
    card.innerHTML=`
      <img src="${STAR_IMAGES[i%STAR_IMAGES.length]}" alt="">
      <div class="q-hint">اضغطي لتظهر الصفة</div>
      <div class="q-name">${q}</div>`;
    card.addEventListener("click",()=>card.classList.toggle("show"));
    qualitiesGrid.appendChild(card);
  });
}

// المعرض
function buildGallery(){
  gallery3d.innerHTML="";
  const r=280;
  GALLERY_IMAGES.forEach((img,i)=>{
    const fig=document.createElement("figure");
    const a=(360/GALLERY_IMAGES.length)*i;
    fig.style.transform=`rotateY(${a}deg) translateZ(${r}px)`;
    fig.innerHTML=`<img src="${img}" alt="">`;
    gallery3d.appendChild(fig);
  });
}

// الشموع
function buildCandles(){
  candlesRow.innerHTML="";
  for(let i=0;i<19;i++){
    const c=document.createElement("div");
    c.className="candle";
    c.innerHTML=`<span class="c-flame"></span><span class="c-spark"></span><span class="c-body"></span>`;
    candlesRow.appendChild(c);
  }
}

function updateCandlesCount(){
  const r=19-candleIndex;
  candlesCount.textContent=r>0?`تبقت ${r} شمعة`:"أُطفئت كل الشموع ✨";
}

enableMicBtn.addEventListener("click",startMic);
manualBtn.addEventListener("click",blowNext);

async function startMic(){
  try{
    const stream=await navigator.mediaDevices.getUserMedia({audio:true});
    audioCtx=new(window.AudioContext||window.webkitAudioContext)();
    const src=audioCtx.createMediaStreamSource(stream);
    analyser=audioCtx.createAnalyser();analyser.fftSize=512;
    src.connect(analyser);micActive=true;
    micStatus.textContent="✅ الميكروفون مفعل... انفخي لإطفاء الشموع";
    manualBtn.classList.remove("hidden");listenBlow();
  }catch(e){
    micStatus.textContent="⚠️ تعذر تفعيل الميكروفون، استخدمي الزر اليدوي";
    manualBtn.classList.remove("hidden");
  }
}

function listenBlow(){
  const data=new Uint8Array(analyser.frequencyBinCount);
  function chk(){
    if(!micActive)return;
    analyser.getByteFrequencyData(data);
    const avg=data.reduce((a,b)=>a+b,0)/data.length;
    const now=Date.now();
    if(avg>40&&now-lastBlow>1500){lastBlow=now;blowNext()}
    requestAnimationFrame(chk);
  }
  chk();
}

function blowNext(){
  if(candleIndex>=19)return;
  const candles=candlesRow.querySelectorAll(".candle");
  candles[candleIndex].classList.add("out");
  const lw=LOVE_WORDS[candleIndex];
  loveWord.innerHTML=`<strong style="font-size:1.6rem">${lw.word}</strong><br/><small style="color:var(--muted)">${lw.lang}</small>`;
  candleIndex++;updateCandlesCount();
  if(candleIndex>=19){
    micActive=false;
    setTimeout(()=>finalScreen.classList.remove("hidden"),1000);
  }
}

closeFinal.addEventListener("click",()=>finalScreen.classList.add("hidden"));

// الهدية
giftBox.addEventListener("click",()=>{
  giftBox.classList.toggle("open");
  giftMsg.classList.toggle("hidden");
});

// اللعبة
startGame.addEventListener("click",()=>{
  if(gameRunning)return;
  gameRunning=true;gameCaught=0;gameTime=15;
  gameArea.innerHTML="";gameMsg.textContent="";
  gScore.textContent="💛 0 / 10";gTimer.textContent="⏱ 15";
  spawnHearts();
  gameInterval=setInterval(()=>{
    gameTime--;gTimer.textContent=`⏱ ${gameTime}`;
    if(gameTime<=0)endGame(false);
  },1000);
});

function spawnHearts(){
  for(let i=0;i<10;i++){
    const h=document.createElement("span");
    h.className="fall-heart";h.textContent="💛";
    h.style.left=`${Math.random()*86}%`;
    h.style.animationDuration=`${3+Math.random()*4}s`;
    h.style.animationDelay=`${Math.random()*9}s`;
    h.addEventListener("click",()=>{
      if(!gameRunning||h.dataset.done)return;
      h.dataset.done="1";h.remove();gameCaught++;
      gScore.textContent=`💛 ${gameCaught} / 10`;
      if(gameCaught>=10)endGame(true);
    });
    gameArea.appendChild(h);
  }
}

function endGame(win){
  if(!gameRunning)return;
  clearInterval(gameInterval);gameRunning=false;
  gameMsg.textContent=win
    ?"👑 أصبحتِ الملكة، ولكِ الحق في إصدار حكم على محمد أمين!"
    :"انتهى الوقت... أعيدي المحاولة يا أميرتي 💛";
}

// الأمنية
saveWish.addEventListener("click",()=>{
  const txt=wishInput.value.trim();
  if(!txt)return;
  localStorage.setItem("imanWish",txt);
  spawnDust();wishInput.value="";
  setTimeout(()=>{
    wishForm.classList.add("hidden");
    wishDone.classList.remove("hidden");
  },500);
});

function spawnDust(){
  goldDust.innerHTML="";
  for(let i=0;i<45;i++){
    const p=document.createElement("span");
    p.className="dust";
    p.style.right=`${40+Math.random()*18}%`;
    p.style.top=`${38+Math.random()*20}%`;
    p.style.setProperty("--dx",`${(Math.random()-.5)*280}px`);
    p.style.setProperty("--dy",`${(Math.random()-.7)*230}px`);
    p.style.animationDelay=`${Math.random()*.3}s`;
    goldDust.appendChild(p);
  }
}

// الصفحة السرية
wishTitle.addEventListener("click",()=>{
  wishClicks++;
  clearTimeout(wishTimer);
  wishTimer=setTimeout(()=>{wishClicks=0},700);
  if(wishClicks>=3){
    wishClicks=0;
    const entered=prompt("🔐 أدخل كلمة المرور السرية:");
    if(!entered)return;
    if(entered.trim()===ADMIN_PASS){
      const saved=localStorage.getItem("imanWish")||"لا توجد أمنية محفوظة بعد";
      adminWishText.textContent=saved;
      adminModal.classList.remove("hidden");
    } else {alert("كلمة المرور غير صحيحة")}
  }
});

closeAdmin.addEventListener("click",()=>adminModal.classList.add("hidden"));
adminModal.addEventListener("click",e=>{if(e.target===adminModal)adminModal.classList.add("hidden")});

// الخط الزمني
function buildTimeline(){
  timelineEl.innerHTML=TIMELINE.map(t=>`
    <div class="tl-item">
      <h3>${t.year}</h3>
      <p>${t.text}</p>
    </div>`).join("");
                     }
