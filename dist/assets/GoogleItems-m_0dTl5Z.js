import{j as c,c as N}from"./index-DMbd4Tkz.js";import{B as A,F as I,E as F,D as T}from"./index.es-rsBrHkrN.js";import{e as O,c as L,S as q,A as J,a as _}from"./autoplay-e4lmKYUb.js";/* empty css               *//* empty css                   */function X(t,e,a,o){return t.params.createElements&&Object.keys(o).forEach(n=>{if(!a[n]&&a.auto===!0){let i=O(t.el,`.${o[n]}`)[0];i||(i=L("div",o[n]),i.className=o[n],t.el.append(i)),a[n]=i,e[n]=i}}),a}function H(t){let{swiper:e,extendParams:a,on:o,emit:n}=t;a({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const i=r=>(Array.isArray(r)?r:[r]).filter(l=>!!l);function d(r){let l;return r&&typeof r=="string"&&e.isElement&&(l=e.el.querySelector(r),l)?l:(r&&(typeof r=="string"&&(l=[...document.querySelectorAll(r)]),e.params.uniqueNavElements&&typeof r=="string"&&l.length>1&&e.el.querySelectorAll(r).length===1&&(l=e.el.querySelector(r))),r&&!l?r:l)}function s(r,l){const u=e.params.navigation;r=i(r),r.forEach(h=>{h&&(h.classList[l?"add":"remove"](...u.disabledClass.split(" ")),h.tagName==="BUTTON"&&(h.disabled=l),e.params.watchOverflow&&e.enabled&&h.classList[e.isLocked?"add":"remove"](u.lockClass))})}function g(){const{nextEl:r,prevEl:l}=e.navigation;if(e.params.loop){s(l,!1),s(r,!1);return}s(l,e.isBeginning&&!e.params.rewind),s(r,e.isEnd&&!e.params.rewind)}function w(r){r.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),n("navigationPrev"))}function y(r){r.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),n("navigationNext"))}function b(){const r=e.params.navigation;if(e.params.navigation=X(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(r.nextEl||r.prevEl))return;let l=d(r.nextEl),u=d(r.prevEl);Object.assign(e.navigation,{nextEl:l,prevEl:u}),l=i(l),u=i(u);const h=(p,k)=>{p&&p.addEventListener("click",k==="next"?y:w),!e.enabled&&p&&p.classList.add(...r.lockClass.split(" "))};l.forEach(p=>h(p,"next")),u.forEach(p=>h(p,"prev"))}function m(){let{nextEl:r,prevEl:l}=e.navigation;r=i(r),l=i(l);const u=(h,p)=>{h.removeEventListener("click",p==="next"?y:w),h.classList.remove(...e.params.navigation.disabledClass.split(" "))};r.forEach(h=>u(h,"next")),l.forEach(h=>u(h,"prev"))}o("init",()=>{e.params.navigation.enabled===!1?v():(b(),g())}),o("toEdge fromEdge lock unlock",()=>{g()}),o("destroy",()=>{m()}),o("enable disable",()=>{let{nextEl:r,prevEl:l}=e.navigation;if(r=i(r),l=i(l),e.enabled){g();return}[...r,...l].filter(u=>!!u).forEach(u=>u.classList.add(e.params.navigation.lockClass))}),o("click",(r,l)=>{let{nextEl:u,prevEl:h}=e.navigation;u=i(u),h=i(h);const p=l.target;if(e.params.navigation.hideOnClick&&!h.includes(p)&&!u.includes(p)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===p||e.pagination.el.contains(p)))return;let k;u.length?k=u[0].classList.contains(e.params.navigation.hiddenClass):h.length&&(k=h[0].classList.contains(e.params.navigation.hiddenClass)),n(k===!0?"navigationShow":"navigationHide"),[...u,...h].filter(E=>!!E).forEach(E=>E.classList.toggle(e.params.navigation.hiddenClass))}});const x=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),b(),g()},v=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),m()};Object.assign(e.navigation,{enable:x,disable:v,update:g,init:b,destroy:m})}const R=[{id:1,name:"Meghan Witte",photo:"/profile/1.png",date:"2024-01-26",stars:5,description:"I had a roof leak for a while. After dealing with multiple roof companies it was a challenge to get them to do the job. I contacted Jeison and he was able to squeeze me in to get the roof replaced. His guys were extremely thorough replacing the wood roof along with the copper flashing. They took their time and did it the right way. I then hired them to install an interior French door and again squeezed me in the get it done. I would definitely recommend GA Castro for home improvements. Thank you Jeison.",url:"https://www.google.com/maps/contrib/101543468750429652870/reviews"},{id:2,name:"Mickey Alper",photo:"/profile/2.png",date:"2024-01-19",stars:5,description:"Johnathon and Castro team did a excellent roof replacement job. Work was done quickly and without almost no interference with people in the house. Cleanup was outstanding and the house with new roof looked great !! I certainly would use Castro for other projects and recommend them to anyone needs roofing or related construction work",url:"https://www.google.com/maps/contrib/113498465089639152488/reviews"},{id:3,name:"Drew LoPiano",photo:"/profile/3.png",date:"2023-12-15",stars:5,description:"I cant recommend Castro Construction enough! They gave accurate estimates and outlined each aspect and cost of the job. They fabricated and repaired the aluminum around my home and covered the gaps in my siding and took additional care to ensure it all matched. They were easy to get in touch with and reviewed all the work in person afterword. I'd gladly call them again for any roofing needs!",url:"https://www.google.com/maps/contrib/105306982566723591068/reviews"},{id:4,name:"Fatima Sacko",photo:"/profile/4.png",date:"2023-11-17",stars:5,description:"Jeison and the G.A Castro Construction team are efficient, communicate well and provide excellent quality of service! They replaced my roof, and remodeled the interior portion of the back of my house. It looked liked a new house at the completion of the project.",url:"https://www.google.com/maps/contrib/109970818462879636881/reviews"},{id:5,name:"Mohammad Ali",photo:"/profile/5.png",date:"2023-11-03",stars:5,description:"Excellent job done by the company",url:"https://www.google.com/maps/contrib/113126691487829312300/reviews"},{id:6,name:"Amparo Albujar",photo:"/profile/6.png",date:"2023-09-01",stars:5,description:"I recommend GA Castro to everyone without a doubt. I had so many issues with my roof and it was so difficult to get the proper repairs due to how expensive it would be. Thankfully I got recommended to the experts at G.A Castro and they were able to completely replace my roof with warranty as well as fixing all the underlying issues from my leaking roof for the price of my deductible. Thanks to them I was able to get these issues resolved and thanks to their dedication to professionalism and transparency with the customer I had the peace of mind knowing that the work was going to get done by knowledgeable professionals.",url:"https://www.google.com/maps/contrib/100526943835205025604/reviews"},{id:7,name:"Luisa Ospina",photo:"/profile/7.png",date:"2023-06-30",stars:5,description:"G.A. Castro Construction is by far, is one of the best vendors I dealt with in many years. They did an excellent job in the installation of our new roof. We were provided with a clear and detailed estimate right from the beginning. What impressed us the most was how the workers left the property perfectly cleaned each day and how the project was completed within the expected time frame. I highly recommend them.",url:"https://www.google.com/maps/contrib/103454010066480035818/reviews"},{id:8,name:"Allyson McFadden",photo:"/profile/8.png",date:"2023-06-30",stars:5,description:"Jeison and his team were very professional. We had a lot of wind damage to our roof. Jeison helped us with the insurance claim and to our surprise, not only did our insurance adjuster approve the claim, it was determined that our roof wasn't up to code. Jeison communicated with us throughout the entire process. He was always available to answer any questions or concern I had via text or phone. We are scheduled to have solar panels installed, but the new roof looks so nice I decided to cancel the solar so I can enjoy my beautiful roof, which compliments the color of my house very nicely. G A Castro Construction is great! I highly recommend them.",url:"https://www.google.com/maps/contrib/105873842105343772449/reviews"},{id:9,name:"Juan Aristizabal",photo:"/profile/9.png",date:"2023-06-23",stars:5,description:"Excellent work, and was best they took care of everything including dealing with insurance i will recommend them to any one that needs the roof replaced",url:"https://www.google.com/maps/contrib/100707924317045576284/reviews"},{id:10,name:"Jose Diaz",photo:"/profile/10.png",date:"2023-03-24",stars:5,description:"Excellent work!!! They fixed my leaking roof and repaired my some siding, and didn’t charge me an arm and a leg. If I could leave 6 stars I would.",url:"https://www.google.com/maps/contrib/116030947942675116125/reviews"},{id:11,name:"Manuel Suasnavas",photo:"/profile/11.png",date:"2023-03-24",stars:5,description:"Excelente trabajo Muy recomendable Me representaron con todo proceso del seguro de mi casa El cual pago por mi techo en su totalidad por daños de viento (Translated by Google) Excellent work Highly recommended They represented me with the entire home insurance process, which paid for my roof in full due to wind damage.",url:"https://www.google.com/maps/contrib/109172885017310404598/reviews"},{id:12,name:"Erin Hayes",photo:"/profile/12.png",date:"2023-02-17",stars:5,description:"I have used G.A Castro for years. They are great if you need a new roof, roof repairs, cleaning/treating, exterior/interior carpentry/repairs, and more! I bought a house with a roof that requires regular repair. It wasn’t installed properly and not easy to fix. They magically fix sections as they become problematic, which most roofers would upsell you. But they do it because they want to do what is best for the client. Not create huge projects when things can be repaired. I have used Jason, German, and company twice a year to come inspect and repair sections of my roof (to prolong its longevity). I have also used them to treat/clean my roof. I’m shocked at how brand new it looks and they do it gently/with care. Their work is excellent/detailed and their pricing is very good. They also replaced/painted all of the trim and fascia on the exterior of my house, as well as many interior projects (repairing walls where I had a leak, painting (to perfection!!!), carpentry, chimney repair, cabinet updates, and power washing. They are really good/kind people. They are honest and I rely on them to do the hard stuff that comes with maintaining a home! Thankful for them!!",url:"https://www.google.com/maps/contrib/115232189605918971075/reviews"},{id:13,name:"Edwuar",photo:"/profile/13.png",date:"2023-06-10",stars:5,description:"They were great with my roof replacement, affordable prices wonderful people",url:"https://www.google.com/maps/contrib/114298219725314954779/reviews"},{id:14,name:"Linda Kuzlik",photo:"/profile/14.png",date:"2023-06-10",stars:5,description:"I hired Jason and his workers to fix my garage, which was falling apart due to termite damage. He replaced all the Rottenwood and then put up vinyl siding to make my garage look new. I was so happy with the work that he and his men did they were at my house Early every morning and stayed well into the night till they got their days work done all his men were respectable and took care of my property as if it was their own when the work was done, they swept up and cleaned my yard as if they were never there . I would highly recommend Jeison and his workers to anyone that needs any kind of construction work. His prices are reasonable and fair and he understood my situation as a single senior citizen. He is truly a good guy."},{id:15,name:"Jacqueline R Bhavaraju",photo:"/profile/15.jpeg",date:"2023-11-09",stars:5,description:"Jeison and his team at GA Castro Construction are honest, reliable, and deliver quality efficient construction work. They have done my roof, interior damage repairs, skylights. Wonderful company and very trustworthy and fair in cost. Highly recommend them!",url:"https://www.google.com/maps/contrib/110305611170325627345/reviews"},{id:16,name:"Michael Cassella",photo:"/profile/16.jpg",date:"2023-12-09",stars:5,description:"I have dealt with Jeison and his father for last fifteen years; mostly repairing my slate roof. Most recently, had Jeison and the crew paint my 5,000 square foor, french provencial, stucco house. They did a phenomenal job from meticulous prep to final paint job. They were dillegent, reliable, dependable, pleasent and cooperative at every step of the five week project. Can't recommend them more highly. Hire them. You won't regret it and they will become your go to contractor for may things.",url:"https://www.google.com/maps/contrib/110305611170325627345/reviews"},{id:17,name:"Lissi Alveno",photo:"/profile/17.png",date:"2024-05-09",stars:5,description:"Recomendable 💯 very professional and hard working. They would do anything to help you out. We just got out roof redone and we are so happy with the results.",url:"https://www.google.com/maps/contrib/110305611170325627345/reviews"},{id:18,name:"Sarah",photo:"/profile/18.png",date:"2024-04-09",stars:5,description:"I had the pleasure of working with the Ga Castro construction team for a roof and siding job, and I couldn't be happier with the outcome. From start to finish, they were incredibly professional and attentive to every detail. One of the things that really stood out to me was their expertise in handling insurance claims. They took the time to thoroughly explain the process and worked diligently to ensure that everything was taken care of smoothly. When it came to the actual work, their team demonstrated exceptional skill and efficiency. They completed the project in a timely manner without sacrificing quality, and the results were truly impressive. The attention to detail was evident in every aspect of their work, from the precision of the installation to the finishing touches. Overall, I couldn't have asked for a better experience. Ga Castro construction exceeded my expectations in every way, and I wouldn't hesitate to recommend them to anyone in need of their services. I'm grateful for their professionalism, expertise, and commitment to delivering top-notch results. They've earned my trust and I will definitely be reaching out to them for any future projects.",url:"https://www.google.com/maps/contrib/110305611170325627345/reviews"}];function f(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}const D=43200,S=1440;let V={};function z(){return V}function W(t){const e=f(t),a=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return a.setUTCFullYear(e.getFullYear()),+t-+a}function C(t,e){const a=f(t),o=f(e),n=a.getTime()-o.getTime();return n<0?-1:n>0?1:n}function Y(t,e){const a=f(t),o=f(e),n=a.getFullYear()-o.getFullYear(),i=a.getMonth()-o.getMonth();return n*12+i}function G(t){return e=>{const o=(t?Math[t]:Math.trunc)(e);return o===0?0:o}}function B(t,e){return+f(t)-+f(e)}function Q(t){const e=f(t);return e.setHours(23,59,59,999),e}function U(t){const e=f(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(23,59,59,999),e}function K(t){const e=f(t);return+Q(e)==+U(e)}function $(t,e){const a=f(t),o=f(e),n=C(a,o),i=Math.abs(Y(a,o));let d;if(i<1)d=0;else{a.getMonth()===1&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-n*i);let s=C(a,o)===-n;K(f(t))&&i===1&&C(t,o)===1&&(s=!1),d=n*(i-Number(s))}return d===0?0:d}function Z(t,e,a){const o=B(t,e)/1e3;return G(a==null?void 0:a.roundingMethod)(o)}const ee={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},te=(t,e,a)=>{let o;const n=ee[t];return typeof n=="string"?o=n:e===1?o=n.one:o=n.other.replace("{{count}}",e.toString()),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+o:o+" ago":o};function P(t){return(e={})=>{const a=e.width?String(e.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}}const ae={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ne={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},oe={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},re={date:P({formats:ae,defaultWidth:"full"}),time:P({formats:ne,defaultWidth:"full"}),dateTime:P({formats:oe,defaultWidth:"full"})},ie={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},se=(t,e,a,o)=>ie[t];function M(t){return(e,a)=>{const o=a!=null&&a.context?String(a.context):"standalone";let n;if(o==="formatting"&&t.formattingValues){const d=t.defaultFormattingWidth||t.defaultWidth,s=a!=null&&a.width?String(a.width):d;n=t.formattingValues[s]||t.formattingValues[d]}else{const d=t.defaultWidth,s=a!=null&&a.width?String(a.width):t.defaultWidth;n=t.values[s]||t.values[d]}const i=t.argumentCallback?t.argumentCallback(e):e;return n[i]}}const le={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},de={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ce={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},he={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ue={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},me={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},fe=(t,e)=>{const a=Number(t),o=a%100;if(o>20||o<10)switch(o%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},pe={ordinalNumber:fe,era:M({values:le,defaultWidth:"wide"}),quarter:M({values:de,defaultWidth:"wide",argumentCallback:t=>t-1}),month:M({values:ce,defaultWidth:"wide"}),day:M({values:he,defaultWidth:"wide"}),dayPeriod:M({values:ue,defaultWidth:"wide",formattingValues:me,defaultFormattingWidth:"wide"})};function j(t){return(e,a={})=>{const o=a.width,n=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],i=e.match(n);if(!i)return null;const d=i[0],s=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth],g=Array.isArray(s)?we(s,b=>b.test(d)):ge(s,b=>b.test(d));let w;w=t.valueCallback?t.valueCallback(g):g,w=a.valueCallback?a.valueCallback(w):w;const y=e.slice(d.length);return{value:w,rest:y}}}function ge(t,e){for(const a in t)if(Object.prototype.hasOwnProperty.call(t,a)&&e(t[a]))return a}function we(t,e){for(let a=0;a<t.length;a++)if(e(t[a]))return a}function ye(t){return(e,a={})=>{const o=e.match(t.matchPattern);if(!o)return null;const n=o[0],i=e.match(t.parsePattern);if(!i)return null;let d=t.valueCallback?t.valueCallback(i[0]):i[0];d=a.valueCallback?a.valueCallback(d):d;const s=e.slice(n.length);return{value:d,rest:s}}}const ve=/^(\d+)(th|st|nd|rd)?/i,be=/\d+/i,xe={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ke={any:[/^b/i,/^(a|c)/i]},Me={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},je={any:[/1/i,/2/i,/3/i,/4/i]},De={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ce={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ee={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Pe={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ie={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Te={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Se={ordinalNumber:ye({matchPattern:ve,parsePattern:be,valueCallback:t=>parseInt(t,10)}),era:j({matchPatterns:xe,defaultMatchWidth:"wide",parsePatterns:ke,defaultParseWidth:"any"}),quarter:j({matchPatterns:Me,defaultMatchWidth:"wide",parsePatterns:je,defaultParseWidth:"any",valueCallback:t=>t+1}),month:j({matchPatterns:De,defaultMatchWidth:"wide",parsePatterns:Ce,defaultParseWidth:"any"}),day:j({matchPatterns:Ee,defaultMatchWidth:"wide",parsePatterns:Pe,defaultParseWidth:"any"}),dayPeriod:j({matchPatterns:Ie,defaultMatchWidth:"any",parsePatterns:Te,defaultParseWidth:"any"})},We={code:"en-US",formatDistance:te,formatLong:re,formatRelative:se,localize:pe,match:Se,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Ne(t,e,a){const o=z(),n=(a==null?void 0:a.locale)??o.locale??We,i=2520,d=C(t,e);if(isNaN(d))throw new RangeError("Invalid time value");const s=Object.assign({},a,{addSuffix:a==null?void 0:a.addSuffix,comparison:d});let g,w;d>0?(g=f(e),w=f(t)):(g=f(t),w=f(e));const y=Z(w,g),b=(W(w)-W(g))/1e3,m=Math.round((y-b)/60);let x;if(m<2)return a!=null&&a.includeSeconds?y<5?n.formatDistance("lessThanXSeconds",5,s):y<10?n.formatDistance("lessThanXSeconds",10,s):y<20?n.formatDistance("lessThanXSeconds",20,s):y<40?n.formatDistance("halfAMinute",0,s):y<60?n.formatDistance("lessThanXMinutes",1,s):n.formatDistance("xMinutes",1,s):m===0?n.formatDistance("lessThanXMinutes",1,s):n.formatDistance("xMinutes",m,s);if(m<45)return n.formatDistance("xMinutes",m,s);if(m<90)return n.formatDistance("aboutXHours",1,s);if(m<S){const v=Math.round(m/60);return n.formatDistance("aboutXHours",v,s)}else{if(m<i)return n.formatDistance("xDays",1,s);if(m<D){const v=Math.round(m/S);return n.formatDistance("xDays",v,s)}else if(m<D*2)return x=Math.round(m/D),n.formatDistance("aboutXMonths",x,s)}if(x=$(w,g),x<12){const v=Math.round(m/D);return n.formatDistance("xMonths",v,s)}else{const v=x%12,r=Math.trunc(x/12);return v<3?n.formatDistance("aboutXYears",r,s):v<9?n.formatDistance("overXYears",r,s):n.formatDistance("almostXYears",r+1,s)}}function Ae(t,e){return Ne(t,Date.now(),e)}function Xe({classNameWrapper:t}){return c.jsx("div",{className:N("flex flex-col",t),children:c.jsxs("div",{className:"container flex flex-col",children:[c.jsx("div",{className:"swipper-google-reviews-component-container",children:c.jsx(q,{modules:[J,H],navigation:!0,autoplay:{delay:5e3},speed:1500,slidesPerView:3,breakpoints:{0:{slidesPerView:1},300:{slidesPerView:1},700:{slidesPerView:2},1024:{slidesPerView:3}},spaceBetween:20,loop:!0,grabCursor:!0,children:R.map(e=>c.jsx(_,{children:c.jsx(Fe,{...e})},e.id))})}),c.jsxs(A,{href:"https://www.google.com/maps/place//data=!4m3!3m2!1s0xac10d21f00928c31:0x74003c50fb12aae1!12e1?source=g.page.m.kd._&laa=lu-desktop-review-solicitation",target:"_blank",rel:"noreferrer",style:"3",type:"3",className:"bg-[var(--color3-bg)] text-[var(--color3-txt)] py-4 mt-10 mb-5 mx-auto items-center gap-2 border border-red-500",children:[c.jsx("span",{children:"Write a review"})," ",c.jsx(I,{icon:F,className:"text-red-500 text-lg"})]})]})})}function Fe({...t}){const e=Ae(new Date(t.date)),a=Array.from({length:t.stars},(n,i)=>i),o=Array.from({length:5-t.stars},(n,i)=>i);return c.jsxs("div",{className:"flex flex-col gap-2 bg-white p-5 rounded-xl h-full",children:[c.jsxs("div",{className:"flex items-center gap-5",children:[c.jsx("img",{className:"h-10 aspect-square rounded-full object-cover bg-transparent",src:t.photo,alt:"Foto of user "+t.name}),c.jsxs("div",{className:"flex flex-col gap-1",children:[c.jsxs("div",{className:"flex items-center gap-[2px]",children:[c.jsx("h5",{className:"font-content font-bold text-base leading-4",children:t.name}),c.jsx("img",{className:"w-3 aspect-square object-contain",src:"/icon/verificate.png",alt:"Verification icon"})]}),c.jsx("span",{className:"font-content text-xs leading-3 opacity-80",children:e})]})]}),c.jsxs("div",{className:"flex gap-[2px]",children:[a.map(n=>c.jsx(I,{icon:T,className:"text-sm text-[#fcbf02]"},n)),o.map(n=>c.jsx(I,{icon:T,className:"text-gray-300/70 text-sm"},n))]}),c.jsxs("div",{children:[c.jsx("p",{className:"font-content overflow-hidden max-h-24 opacity-90",children:t.description}),c.jsx("a",{className:"font-content text-[0.8rem] opacity-80 hover:opacity-100 hover:underline",href:t.url,target:"_blank",rel:"noreferrer",children:"Read more"})]}),c.jsx("img",{className:"h-7 object-contain mr-auto mt-auto",src:"/icon/google.png",alt:"Logo de Google"})]})}export{Xe as G,H as N};