import{r as i,j as e,A as u,B as h,L as g}from"./index-qg3iai6c.js";import{F as c,E as d,y as m,w,v as b}from"./index.es-c8E5iioA.js";import{G as y}from"./GoogleItems-nOmWuRNA.js";import{B as v}from"./Brands-97246erX.js";import{O as j}from"./OurComponentSection-X4B1rwpg.js";import{u as k}from"./styled-components.browser.esm-vO81nHkA.js";import{i as N}from"./gallery-b7xpudEi.js";import"./autoplay-k2uW9WHy.js";/* empty css               *//* empty css                   */import"./OurServices-FU7Pmubx.js";function C({url:a}){i.useEffect(()=>{const l=document.querySelector("head"),s=document.createElement("script");return s.setAttribute("src",a),l.appendChild(s),()=>{l.removeChild(s)}},[a])}const L=[{id:1,ask:"I'd just like a quote, can you provide an estimate without an in-home or virtual consultation?",answer:"Every home and project is different. We can’t recommend the best design and construction solutions until we truly understand your goals, budget, and timetable. Besides, purchasing remodeling and replacement services aren’t like buying a commodity product.  We both want to make sure we are a good fit."},{id:2,ask:"Does Ga Castro Construction LLC offer financing for roof replacement?",answer:"Ga Castro Construction LLC works with a number of major finance companies to offer its clients the best rates available. Take advantage of current financing offers like up to 60 months with no interest and no payments. Ga Castro Construction LLC also allows homeowners to finance insurance claim projects, so you can keep the full amount of your claim and make monthly payments instead."},{id:3,ask:"If I have storm damage to my roof, siding, windows and gutters and deck, will it be readily apparent?",answer:"Ga Castro Construction LLC’s storm specialists are trained to identify surface damage from severe weather that may not be apparent initially but will continue to deteriorate over time. These telltale signs of storm damage may not be visible from the ground. Homeowners expose themselves to unnecessary risks when they climb onto their roofs and attempt to photograph storm damage."},{id:4,ask:"Will you fix my roof leak?",answer:"Roofs can leak from storm damage, faulty details or age. And you don’t need to see indoor water spots to have a problem. Hidden leaks can rot wood sheathing and framing, degrade insulation and fill wall and ceiling cavities with dangerous mold. Let the pros at Ga Castro Construction LLC find the source and fix it for good."},{id:5,ask:"What brands of roofing products does Ga Castro Construction LLC sell and install?",answer:"Ga Castro Construction LLC is a preferred installer for GAF, IKO, Certainteed, Malarky, Owens Corning, Tamko, Edco, Boral and DECRA brands of roofing.  These products range from architectural shingles, shakes, clay tile and slate and are available in many colors. We will help match you with the perfect product for your home with an unbiased and educational approach."},{id:6,ask:"How long should an asphalt shingle roof last on a Connecticut home?",answer:"Due to the harsh conditions of our weather, an average roof in Connecticut will last about 20 years. It's at the end of the roof's life when the problems begin. Moisture intrusion usually starts with the flashing on your roof."},{id:7,ask:"What could shorten the life of an asphalt shingle roof?",answer:"Inadequate attic ventilation or excess moisture can deteriorate roof sheathing and shingles from below. Overhanging trees that drop debris and slow drying can lead to moss and mold that can deteriorate roofing. Walking on a roof in extremely hot or cold weather can damage shingles."},{id:8,ask:"How does steel roofing compare to asphalt shingle, cedar shake and slate and tile roofing?",answer:"Steel roofing is more expensive than asphalt shingles but less expensive than slate or tile. Steel roofs last two to three times as long as other types of roofing. Transferable warranties can be 50 years to life and are not prorated."}];function S(){const a=i.useRef(null),l=i.useCallback((t,n)=>{const r=t.dataset.pos;r&&n.forEach(o=>{var f=o.dataset.pos;o.dataset.pos=x(f,r,n)})},[]),s=i.useCallback((t,n)=>{var r=t.target;l(r,n)},[l]),x=function(t,n,r){const o=t-n;return o>2?o-r.length+2:o<-2?r.length-2+o:o},p=i.useCallback(()=>{const t=Array.from(document.querySelectorAll(".carousel__item")),r=t.find(o=>o.dataset.pos==0).nextElementSibling||a.current.firstElementChild;l(r,t)},[l]);return i.useEffect(()=>{const t=Array.from(document.querySelectorAll(".carousel__item"));a.current.addEventListener("click",o=>s(o,t));const n=setInterval(p,5e3),r=a.current;return()=>{r.removeEventListener("click",s),clearInterval(n)}},[p,s]),e.jsx(A,{className:"flex items-center w-full aspect-[4/2]",children:e.jsx("ul",{ref:a,className:"carousel__list",children:N.map((t,n)=>e.jsx("li",{className:"carousel__item ","data-pos":n-2,children:e.jsx("img",{className:"w-full h-full object-cover rounded-lg select-none",src:t.src,alt:t.alt})},t.id))})})}const A=k.div`
    & .carousel__list {
        display: flex;
        list-style: none;
        position: relative;
        width: 100%;
        height: 100%;
        justify-content: center;
        perspective: 100%;
    }

    & .carousel__item {
        --gap: 100px;
        @media (max-width: 800px) {
            --gap: 50px;
        }
        @media (max-width: 400px) {
            --gap: 25px;
        }

        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(100% - var(--gap) * 4);
        color: #fff;
        font-size: 0px;
        height: 100%;
        border-radius: 12px;
        box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.5);
        position: absolute;
        transition: all 0.3s ease-in;
        opacity: 0;
        cursor: pointer;

        &:nth-child(1) {
            background: linear-gradient(45deg, #2d35eb 0%, #904ed4 100%);
        }
        &:nth-child(2) {
            background: linear-gradient(45deg, #2d35eb 0%, #fdbb2d 100%);
        }
        &:nth-child(3) {
            background: linear-gradient(45deg, #2d35eb 0%, #22c1c3 100%);
        }
        &:nth-child(4) {
            background: linear-gradient(45deg, #fdbb2d 0%, #904ed4 100%);
        }
        &:nth-child(5) {
            background: linear-gradient(45deg, #22c1c3 0%, #904ed4 100%);
        }

        &[data-pos="0"] {
            z-index: 5;
            opacity: 1;
            cursor: default;
        }

        &[data-pos="-1"],
        &[data-pos="1"] {
            opacity: 0.7;
            filter: blur(1px) grayscale(10%);
        }

        &[data-pos="-1"] {
            transform: translateX(calc(var(--gap) * -1)) scale(0.9);
            z-index: 4;
        }

        &[data-pos="1"] {
            transform: translateX(var(--gap)) scale(0.9);
            z-index: 4;
        }

        &[data-pos="-2"],
        &[data-pos="2"] {
            opacity: 0.4;
            filter: blur(3px) grayscale(20%);
        }

        &[data-pos="-2"] {
            transform: translateX(calc(var(--gap) * -2)) scale(0.8);
            z-index: 3;
        }

        &[data-pos="2"] {
            transform: translateX(calc(var(--gap) * 2)) scale(0.8);
            z-index: 3;
        }
    }
`;function T(){return C({url:"https://app.roofle.com/roof-quote-pro-embedded-widget.js?id=B5rx9uOVdIreP2QIxCFJp"}),e.jsxs(u,{children:[e.jsxs("section",{className:"relative overflow-hidden flex items-center px-[--padding] min-h-screen",children:[e.jsx("div",{className:"absolute inset-0 w-full h-full ",children:e.jsx("img",{src:"/img/22.png",className:"w-full h-full object-cover object-top"})}),e.jsx("div",{children:e.jsx(h,{})}),e.jsxs("div",{className:"relative container flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-5 pt-32 pb-16 w-full h-full",children:[e.jsxs("div",{className:"flex flex-col justify-center gap-5",children:[e.jsx("h3",{className:"font-title text-white text-3xl sm:text-5xl text-center sm:text-left text-balance max-w-[500px]",children:"Get a beautifull new roof that will last"}),e.jsx("p",{className:"max-w-[600px] font-content text-white text-pretty text-center sm:text-left text-lg",style:{textShadow:"1px 1px 1px black, -1px -1px 1px black"},children:"We are the roofing construction experts, providing expert workmanship and project management to ensure a quality roof and stress-free experience for you. We use only high-quality materials and provide a level of profesionalism that's a cut above our competitors."}),e.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-5",children:[e.jsx("a",{className:"flex justify-center items-center bg-[--color1-bg] font-bold font-title uppercase text-center text-[--color1-txt] max-w-96 px-5 py-3 rounded-full transition hover:scale-105",href:"#section-instant-quote",children:"Instant online roof quote"}),e.jsx(g,{className:"flex justify-center items-center border-2 border-[--color1-bg] font-bold font-title uppercase text-center text-white max-w-96 px-5 py-3 rounded-full transition hover:scale-105",style:{textShadow:"1px 1px 1px black, -1px -1px 1px black"},to:"/roof-designer",children:"Visualize your new roof"})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-2",children:[e.jsxs("div",{className:"flex text-lg",children:[e.jsx(c,{icon:d,className:"text-yellow-400"}),e.jsx(c,{icon:d,className:"text-yellow-400"}),e.jsx(c,{icon:d,className:"text-yellow-400"}),e.jsx(c,{icon:d,className:"text-yellow-400"}),e.jsx(c,{icon:d,className:"text-yellow-400"})]}),e.jsx("p",{className:"font-content text-white text-center sm:text-left text-sm sm:text-base",style:{textShadow:"1px 1px 1px black, -1px -1px 1px black"},children:"300+ 5-star reviews (Google, Home, Advisor, BBB, Houz)"})]})]}),e.jsx("p",{className:"max-w-80 font-content text-center text-white text-balance text-sm sm:text-lg opacity-8",style:{textShadow:"1px 0 1px black, -1px 0 1px black, 0 1px 1px black, 0 -1px 1px black"},children:"Start Your Roofing Project Today! 🚀 Get Your Instant Roof Quote"})]})]}),e.jsx("section",{className:"relative overflow-hidden",id:"section-instant-quote",children:e.jsx("div",{className:"w-full h-full",id:"roof-quote-pro-embedded"})}),e.jsx("section",{className:"p-[--padding] ",children:e.jsx("div",{className:"container",children:e.jsx(S,{})})}),e.jsx("section",{className:"px-[--padding] py-10",children:e.jsxs("div",{className:"container ",children:[e.jsxs("article",{className:"flex flex-col items-center gap-5",children:[e.jsx("h3",{className:"w-full font-title text-4xl text-center",children:"Customer Stories"}),e.jsx("p",{className:"font-title2 text-lg text-pretty text-center sm:px-20",children:"Ga Castro Construction is the local roofer that homeowners, homeowner associations, and busi- nesses trust. Weave already replaced thousands of roofs for homeowners in the Dallas area and across the United States, and we'd like the ooportunity to re-roof yours."})]}),e.jsx(y,{classNameWrapper:"mt-10"})]})}),e.jsx("section",{className:"px-[--padding]",children:e.jsx("div",{className:"container",children:e.jsx(v,{})})}),e.jsx("section",{className:"pt-14",children:e.jsx(j,{})}),e.jsx("section",{className:"px-[--padding] py-10 bg-[--color4-bg]",children:e.jsxs("div",{className:"container flex flex-col gap-10",children:[e.jsx("h3",{className:"font-title text-[--color4-txt2] text-center text-3xl sm:text-5xl",children:"FAQs"}),e.jsx("div",{className:"flex flex-col gap-5",children:L.map(a=>e.jsx(E,{title:a.ask,text:a.answer},a.id))})]})})]})}function E({title:a,text:l}){const[s,x]=i.useState(!1);return e.jsxs("div",{className:"border-2 border-[--color4-txt2] rounded-3xl",children:[e.jsxs("button",{onClick:()=>x(!s),className:m("flex justify-between items-center w-full px-5 py-3 opacity-90 border-b-2 border-[--color4-txt2] rounded-3xl transition-none",{"border-b-0 opacity-70":!s}),children:[e.jsx("span",{className:" font-title text-[--color4-txt] text-left text-lg sm:text-xl",children:a}),e.jsx(c,{icon:s?w:b,className:"text-[--color4-txt] text-xl"})]}),e.jsx("div",{className:m("w-full max-h-96 overflow-hidden transition-all",{"max-h-0":!s}),children:e.jsx("p",{className:"p-5 font-content text-[--color4-txt] sm:text-lg opacity-70",children:l})})]})}export{T as default};
