import{r as d,u as T,j as e,L as u}from"./index-DMbd4Tkz.js";import{F as j,a as H,b as C,c as M}from"./index.es-rsBrHkrN.js";import{u as i}from"./styled-components.browser.esm-wQGkGTTP.js";import{F as L}from"./FormConsult-ToN9IS75.js";import"./mail-YBm_ny5o.js";const W=i.div`
    background-color: #dc2626; // Background color for the top header
    color: #ffffff; // Text color for the top header
    text-align: center; // Center text alignment
    padding: 0.5rem 0; // Padding for the top header
    width: 100%; // Full width for the top header
    position: fixed; // Fixed position at the top
    top: 0; // Positioned at the top of the page
    z-index: 50; // Z-index for layering
    transition: transform 0.3s ease-in-out; // Transition for smooth slide effect
    transform: ${o=>o.isVisible?"translateY(0)":"translateY(-100%)"}; // Slide up and down based on visibility
    display: none; // Hidden but not removed
`,P=i.div`
    position: fixed; // Fixed position
    top: ${o=>o.isTopHeaderVisible?"1rem":"0.5rem"}; // Adjust top position based on the top header visibility
    left: 50%; // Center horizontally
    transform: translateX(-50%); // Center horizontally
    z-index: 49; // Z-index for layering
    width: 90%; // Adjusted width to be more extended
    max-width: 1400px; // Increased maximum width for the main header
    padding: 0.25rem 1rem; // Padding to make the header thinner
    background: ${o=>o.isTop?"transparent":"#000000"}; // Transparent when at the top, black when scrolled
    color: ${o=>(o.isTop,"white")}; // White text when at the top, white text when scrolled
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Box shadow for subtle shadow effect
    border-radius: 1rem; // Adding rounded corners to all sides
    display: flex; // Flexbox for layout
    align-items: center; // Align items center vertically
    justify-content: space-between; // Space between logo and button
    transition: background 0.3s, color 0.3s, top 0.3s; // Smooth transition for background, text color, and top position
`,E=i(u)`
    display: flex; // Flexbox for layout
    align-items: center; // Align items center vertically
`,N=i.img`
    width: 5rem; // Width for the logo
    height: 5rem; // Height for the logo
    object-fit: contain; // Contain the logo within the dimensions

    @media (min-width: 768px) {
        width: 6rem; // Width for larger screens
        height: 6rem; // Height for larger screens
    }
`,w=i(u)`
    padding: 0.5rem 1rem; // Padding for the navigation link
    text-transform: uppercase; // Uppercase text
    font-weight: 600; // Font weight for the main menu
    font-family: "Arial", sans-serif; // Font family
    transition: all 0.2s; // Transition for smooth hover effect
    color: ${o=>(o.isTop,"white")}; // White text when at the top, white text when scrolled
    ${o=>o.active?`
        color: #f8a61f; // Active link color
        background-color: #3a3a3a; // Active link background color
        border-radius: 1.5rem; // Border radius for active link
      `:`
        &:hover {
          color: #f8a61f; // Hover link color
        }
      `}
`,B=i.div`
    display: ${o=>o.isOpen?"flex":"none"}; // Flexbox for layout, display based on state
    flex-direction: column; // Column layout for mobile menu
    background-color: #1f2937; // Background color for mobile menu
    padding: 1rem; // Padding for mobile menu
    color: #faa819; // Text color for mobile menu
`,R=i.button`
    padding: 0.75rem 1.5rem; // Adjusted padding for a medium-sized button
    background-color: #dc2626; // Background color for the button
    color: white; // Text color for the button
    border-radius: 0.75rem; // Border radius for rounded corners
    font-size: 1rem; // Adjusted font size
    font-family: "Arial", sans-serif; // Font family
    font-weight: 700; // Bold font weight
    cursor: pointer; // Pointer cursor on hover
    transition: background-color 0.3s, transform 0.3s; // Transition for background color and transform
    &:hover {
        background-color: #dc8500; // Hover background color
        transform: scale(1.05); // Slight zoom effect on hover
    }
`,S=i.div`
    position: relative; // Relative position for submenu container
`,A=i.div`
    display: flex; // Flexbox for layout
    background-color: #3a3a3a; // Background color for submenu
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Box shadow for subtle shadow effect
    position: absolute; // Absolute position for submenu
    top: 100%; // Positioned below the main header
    left: 50%; // Centered horizontally
    transform: translateX(-50%); // Centered horizontally
    margin-top: 1rem; // Margin top for spacing
    width: 400px; // Width for submenu
    z-index: 48; // Z-index for layering
    padding: 1rem; // Padding for submenu
    visibility: ${o=>o.isVisible?"visible":"hidden"}; // Visibility based on state
    opacity: ${o=>o.isVisible?"1":"0"}; // Opacity based on state
    transition: visibility 0.3s, opacity 0.3s; // Transition for visibility and opacity
    border-radius: 1rem; // Adding rounded corners to all sides
`,p=i.div`
    flex: 1; // Flex 1 for equal width columns
    padding: 0 1rem; // Padding for submenu columns
`,b=i.div`
    font-weight: 600; // Bold font weight
    font-family: "Arial", sans-serif; // Font family
    padding: 0.5rem 0; // Padding for submenu title
    text-transform: uppercase; // Uppercase text
    font-size: 1.2rem; // Increased font size for titles
    color: white; // White color for submenu title
`,n=i(u)`
    padding: 0.25rem 0; // Padding for submenu link
    color: #f8f8f8; // Text color for submenu link
    text-transform: capitalize; // Capitalize text
    display: block; // Block display for links
    font-family: "Arial", sans-serif; // Font family
    font-weight: 300; // Light font weight for submenu
    &:hover {
        color: #f8a61f; // Hover text color
    }
`;function O({withSliderIn:o=[],isVisibleModalFormConsult:l,setIsVisibleModalFormConsult:r}){const s=d.useRef(null),{pathname:m}=T();o.find(f=>f.includes(m));const[h,x]=d.useState(!1),[v,y]=d.useState(!0),[g,z]=d.useState(null),[a,k]=d.useState(!0),F=()=>{window.scrollY===0?(y(!0),k(!0)):(y(!1),k(!1))};d.useEffect(()=>(window.addEventListener("scroll",F),()=>{window.removeEventListener("scroll",F)}),[]);const c=f=>{z(g===f?null:f)};return s.current&&s.current.addEventListener("click",()=>x(!1)),e.jsxs(e.Fragment,{children:[e.jsx(W,{isVisible:v,children:e.jsxs("span",{children:["Sign up for 20% off your first order. ",e.jsx(u,{to:"/subscribe",children:"Subscribe."})]})}),e.jsxs(P,{isTopHeaderVisible:v,isTop:a,children:[e.jsx(E,{to:"/",children:e.jsx(N,{src:"/img/logo.png",alt:"Logo"})}),e.jsxs("div",{className:"hidden lg:flex items-center space-x-4",children:[e.jsx(t,{name:"Home",to:"/",isTop:a}),e.jsxs(S,{onMouseEnter:()=>c("services"),onMouseLeave:()=>c(null),children:[e.jsx(w,{to:"#",isTop:a,children:"Services"}),e.jsxs(A,{isVisible:g==="services",children:[e.jsxs(p,{children:[e.jsx(b,{children:"Home Improvement"}),e.jsx(n,{to:"/services/roofing",children:"Roofing"}),e.jsx(n,{to:"/services/siding",children:"Siding"}),e.jsx(n,{to:"/services/gutter",children:"Gutter"}),e.jsx(n,{to:"/services/carpentry",children:"Carpentry"}),e.jsx(n,{to:"/services/paint",children:"Painting"})]}),e.jsxs(p,{children:[e.jsx(b,{children:"Restoration"}),e.jsx(n,{to:"/restoration/wind-damage",children:"Wind Damage"}),e.jsx(n,{to:"/restoration/water-damage",children:"Water Damage"}),e.jsx(n,{to:"/restoration/tree-damage",children:"Tree Damage"})]})]})]}),e.jsx(t,{name:"Financing",to:"/financing",isTop:a}),e.jsx(t,{name:"Gallery",to:"/gallery",isTop:a}),e.jsx(t,{name:"Areas",to:"/work-areas",isTop:a}),e.jsxs(S,{onMouseEnter:()=>c("help"),onMouseLeave:()=>c(null),children:[e.jsx(w,{to:"#",isTop:a,children:"Help"}),e.jsx(A,{isVisible:g==="help",children:e.jsxs(p,{children:[e.jsx(b,{children:"Help"}),e.jsx(n,{to:"/about-us",children:"About Us"}),e.jsx(n,{to:"/contact-us",children:"Contact Us"}),e.jsx(n,{to:"/work-with-us",children:"Work With Us"}),e.jsx(n,{to:"/faq",children:"Faq"})]})})]}),e.jsx(t,{name:"Roof Designer",to:"/roof-designer",isTop:a})]}),e.jsx(R,{onClick:()=>r(!0),children:"Free Estimates"})]}),e.jsxs(B,{isOpen:h,children:[e.jsx(t,{name:"Home",to:"/"}),e.jsxs(t,{name:"Services",to:"/services",children:[e.jsx(t,{name:"Roofing",to:"/services/roofing"}),e.jsx(t,{name:"Siding",to:"/services/siding"}),e.jsx(t,{name:"Gutter",to:"/services/gutter"}),e.jsx(t,{name:"Carpentry",to:"/services/carpentry"}),e.jsx(t,{name:"Painting",to:"/services/paint"})]}),e.jsxs(t,{name:"Restoration",to:"/restoration",children:[e.jsx(t,{name:"Wind Damage",to:"/restoration/wind-damage"}),e.jsx(t,{name:"Water Damage",to:"/restoration/water-damage"}),e.jsx(t,{name:"Tree Damage",to:"/restoration/tree-damage"})]}),e.jsx(t,{name:"Financing",to:"/financing"}),e.jsx(t,{name:"Gallery",to:"/gallery"}),e.jsx(t,{name:"Areas",to:"/work-areas"}),e.jsxs(t,{name:"Help",to:"#",children:[e.jsx(t,{name:"About Us",to:"/about-us"}),e.jsx(t,{name:"Contact Us",to:"/contact-us"}),e.jsx(t,{name:"Work With Us",to:"/work-with-us"}),e.jsx(t,{name:"Faq",to:"/faq"})]}),e.jsx(t,{name:"Roof Designer",to:"/roof-designer"})]}),e.jsx(V,{isVisible:l,onClose:()=>r(!1)})]})}function t({children:o,name:l,to:r,isTop:s,...m}){const{pathname:h}=T(),x=h===r;return e.jsxs("div",{className:"relative group flex items-center",children:[e.jsxs(w,{to:r,active:x,isTop:s,...m,children:[l,o&&e.jsx(j,{icon:H,className:"ml-1 group-hover:hidden"}),o&&e.jsx(j,{icon:C,className:"ml-1 hidden group-hover:block"})]}),o&&e.jsx("div",{className:"absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md hidden group-hover:block",children:o})]})}function V({isVisible:o=!1,onClose:l=null}){const r=d.useRef();return r.current&&(r.current.onclick=s=>{s.target===r.current&&l()}),window.onkeydown=s=>s.key==="Escape"?l():null,e.jsxs("div",{className:"fixed inset-0 z-50 "+(o?"flex":"hidden"),children:[e.jsx("div",{ref:r,className:"fixed inset-0 bg-black/20 backdrop-blur-md cursor-pointer"}),e.jsx("button",{className:"fixed top-3 right-3 z-20 w-10 aspect-square rounded-full bg-white/50",onClick:l,children:e.jsx(j,{icon:M,className:"text-black"})}),e.jsxs("div",{className:"z-10 m-auto flex flex-col justify-center items-center",children:[e.jsx(L,{className:"h-screen max-h-[800px] overflow-y-auto"}),e.jsxs("p",{className:"text-center text-black text-lg font-bold",children:["Press ",e.jsx("b",{children:"ESC"})," or ",e.jsx("b",{children:"click outside"})," the image to close"]})]})]})}export{O as default};
