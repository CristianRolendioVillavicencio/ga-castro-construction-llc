import{r as w,u as K,j as i,L as S}from"./index-qg3iai6c.js";import{F as M,a as L,b as se,c as ee,d as oe}from"./index.es-c8E5iioA.js";import{u as d}from"./styled-components.browser.esm-vO81nHkA.js";import{F as le}from"./FormConsult-kvkMbH9X.js";import{s as fe}from"./social-Q9tc5MZF.js";import"./mail-EsDZlD6k.js";function T(e){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},T(e)}var ce=/^\s+/,he=/\s+$/;function o(e,r){if(e=e||"",r=r||{},e instanceof o)return e;if(!(this instanceof o))return new o(e,r);var t=de(e);this._originalInput=e,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=r.format||t.format,this._gradientType=r.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}o.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var r=this.toRgb();return(r.r*299+r.g*587+r.b*114)/1e3},getLuminance:function(){var r=this.toRgb(),t,n,s,a,l,f;return t=r.r/255,n=r.g/255,s=r.b/255,t<=.03928?a=t/12.92:a=Math.pow((t+.055)/1.055,2.4),n<=.03928?l=n/12.92:l=Math.pow((n+.055)/1.055,2.4),s<=.03928?f=s/12.92:f=Math.pow((s+.055)/1.055,2.4),.2126*a+.7152*l+.0722*f},setAlpha:function(r){return this._a=te(r),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var r=B(this._r,this._g,this._b);return{h:r.h*360,s:r.s,v:r.v,a:this._a}},toHsvString:function(){var r=B(this._r,this._g,this._b),t=Math.round(r.h*360),n=Math.round(r.s*100),s=Math.round(r.v*100);return this._a==1?"hsv("+t+", "+n+"%, "+s+"%)":"hsva("+t+", "+n+"%, "+s+"%, "+this._roundA+")"},toHsl:function(){var r=$(this._r,this._g,this._b);return{h:r.h*360,s:r.s,l:r.l,a:this._a}},toHslString:function(){var r=$(this._r,this._g,this._b),t=Math.round(r.h*360),n=Math.round(r.s*100),s=Math.round(r.l*100);return this._a==1?"hsl("+t+", "+n+"%, "+s+"%)":"hsla("+t+", "+n+"%, "+s+"%, "+this._roundA+")"},toHex:function(r){return G(this._r,this._g,this._b,r)},toHexString:function(r){return"#"+this.toHex(r)},toHex8:function(r){return be(this._r,this._g,this._b,this._a,r)},toHex8String:function(r){return"#"+this.toHex8(r)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(h(this._r,255)*100)+"%",g:Math.round(h(this._g,255)*100)+"%",b:Math.round(h(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(h(this._r,255)*100)+"%, "+Math.round(h(this._g,255)*100)+"%, "+Math.round(h(this._b,255)*100)+"%)":"rgba("+Math.round(h(this._r,255)*100)+"%, "+Math.round(h(this._g,255)*100)+"%, "+Math.round(h(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:He[G(this._r,this._g,this._b,!0)]||!1},toFilter:function(r){var t="#"+O(this._r,this._g,this._b,this._a),n=t,s=this._gradientType?"GradientType = 1, ":"";if(r){var a=o(r);n="#"+O(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+s+"startColorstr="+t+",endColorstr="+n+")"},toString:function(r){var t=!!r;r=r||this._format;var n=!1,s=this._a<1&&this._a>=0,a=!t&&s&&(r==="hex"||r==="hex6"||r==="hex3"||r==="hex4"||r==="hex8"||r==="name");return a?r==="name"&&this._a===0?this.toName():this.toRgbString():(r==="rgb"&&(n=this.toRgbString()),r==="prgb"&&(n=this.toPercentageRgbString()),(r==="hex"||r==="hex6")&&(n=this.toHexString()),r==="hex3"&&(n=this.toHexString(!0)),r==="hex4"&&(n=this.toHex8String(!0)),r==="hex8"&&(n=this.toHex8String()),r==="name"&&(n=this.toName()),r==="hsl"&&(n=this.toHslString()),r==="hsv"&&(n=this.toHsvString()),n||this.toHexString())},clone:function(){return o(this.toString())},_applyModification:function(r,t){var n=r.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(ye,arguments)},brighten:function(){return this._applyModification(_e,arguments)},darken:function(){return this._applyModification(ke,arguments)},desaturate:function(){return this._applyModification(pe,arguments)},saturate:function(){return this._applyModification(xe,arguments)},greyscale:function(){return this._applyModification(ve,arguments)},spin:function(){return this._applyModification(we,arguments)},_applyCombination:function(r,t){return r.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(Se,arguments)},complement:function(){return this._applyCombination(je,arguments)},monochromatic:function(){return this._applyCombination(Ae,arguments)},splitcomplement:function(){return this._applyCombination(Me,arguments)},triad:function(){return this._applyCombination(U,[3])},tetrad:function(){return this._applyCombination(U,[4])}};o.fromRatio=function(e,r){if(T(e)=="object"){var t={};for(var n in e)e.hasOwnProperty(n)&&(n==="a"?t[n]=e[n]:t[n]=R(e[n]));e=t}return o(e,r)};function de(e){var r={r:0,g:0,b:0},t=1,n=null,s=null,a=null,l=!1,f=!1;return typeof e=="string"&&(e=Fe(e)),T(e)=="object"&&(y(e.r)&&y(e.g)&&y(e.b)?(r=ue(e.r,e.g,e.b),l=!0,f=String(e.r).substr(-1)==="%"?"prgb":"rgb"):y(e.h)&&y(e.s)&&y(e.v)?(n=R(e.s),s=R(e.v),r=me(e.h,n,s),l=!0,f="hsv"):y(e.h)&&y(e.s)&&y(e.l)&&(n=R(e.s),a=R(e.l),r=ge(e.h,n,a),l=!0,f="hsl"),e.hasOwnProperty("a")&&(t=e.a)),t=te(t),{ok:l,format:e.format||f,r:Math.min(255,Math.max(r.r,0)),g:Math.min(255,Math.max(r.g,0)),b:Math.min(255,Math.max(r.b,0)),a:t}}function ue(e,r,t){return{r:h(e,255)*255,g:h(r,255)*255,b:h(t,255)*255}}function $(e,r,t){e=h(e,255),r=h(r,255),t=h(t,255);var n=Math.max(e,r,t),s=Math.min(e,r,t),a,l,f=(n+s)/2;if(n==s)a=l=0;else{var c=n-s;switch(l=f>.5?c/(2-n-s):c/(n+s),n){case e:a=(r-t)/c+(r<t?6:0);break;case r:a=(t-e)/c+2;break;case t:a=(e-r)/c+4;break}a/=6}return{h:a,s:l,l:f}}function ge(e,r,t){var n,s,a;e=h(e,360),r=h(r,100),t=h(t,100);function l(u,j,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?u+(j-u)*6*g:g<1/2?j:g<2/3?u+(j-u)*(2/3-g)*6:u}if(r===0)n=s=a=t;else{var f=t<.5?t*(1+r):t+r-t*r,c=2*t-f;n=l(c,f,e+1/3),s=l(c,f,e),a=l(c,f,e-1/3)}return{r:n*255,g:s*255,b:a*255}}function B(e,r,t){e=h(e,255),r=h(r,255),t=h(t,255);var n=Math.max(e,r,t),s=Math.min(e,r,t),a,l,f=n,c=n-s;if(l=n===0?0:c/n,n==s)a=0;else{switch(n){case e:a=(r-t)/c+(r<t?6:0);break;case r:a=(t-e)/c+2;break;case t:a=(e-r)/c+4;break}a/=6}return{h:a,s:l,v:f}}function me(e,r,t){e=h(e,360)*6,r=h(r,100),t=h(t,100);var n=Math.floor(e),s=e-n,a=t*(1-r),l=t*(1-s*r),f=t*(1-(1-s)*r),c=n%6,u=[t,l,a,a,f,t][c],j=[f,t,t,l,a,a][c],g=[a,a,f,t,t,l][c];return{r:u*255,g:j*255,b:g*255}}function G(e,r,t,n){var s=[v(Math.round(e).toString(16)),v(Math.round(r).toString(16)),v(Math.round(t).toString(16))];return n&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function be(e,r,t,n,s){var a=[v(Math.round(e).toString(16)),v(Math.round(r).toString(16)),v(Math.round(t).toString(16)),v(re(n))];return s&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function O(e,r,t,n){var s=[v(re(n)),v(Math.round(e).toString(16)),v(Math.round(r).toString(16)),v(Math.round(t).toString(16))];return s.join("")}o.equals=function(e,r){return!e||!r?!1:o(e).toRgbString()==o(r).toRgbString()};o.random=function(){return o.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function pe(e,r){r=r===0?0:r||10;var t=o(e).toHsl();return t.s-=r/100,t.s=F(t.s),o(t)}function xe(e,r){r=r===0?0:r||10;var t=o(e).toHsl();return t.s+=r/100,t.s=F(t.s),o(t)}function ve(e){return o(e).desaturate(100)}function ye(e,r){r=r===0?0:r||10;var t=o(e).toHsl();return t.l+=r/100,t.l=F(t.l),o(t)}function _e(e,r){r=r===0?0:r||10;var t=o(e).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(r/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(r/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(r/100)))),o(t)}function ke(e,r){r=r===0?0:r||10;var t=o(e).toHsl();return t.l-=r/100,t.l=F(t.l),o(t)}function we(e,r){var t=o(e).toHsl(),n=(t.h+r)%360;return t.h=n<0?360+n:n,o(t)}function je(e){var r=o(e).toHsl();return r.h=(r.h+180)%360,o(r)}function U(e,r){if(isNaN(r)||r<=0)throw new Error("Argument to polyad must be a positive number");for(var t=o(e).toHsl(),n=[o(e)],s=360/r,a=1;a<r;a++)n.push(o({h:(t.h+a*s)%360,s:t.s,l:t.l}));return n}function Me(e){var r=o(e).toHsl(),t=r.h;return[o(e),o({h:(t+72)%360,s:r.s,l:r.l}),o({h:(t+216)%360,s:r.s,l:r.l})]}function Se(e,r,t){r=r||6,t=t||30;var n=o(e).toHsl(),s=360/t,a=[o(e)];for(n.h=(n.h-(s*r>>1)+720)%360;--r;)n.h=(n.h+s)%360,a.push(o(n));return a}function Ae(e,r){r=r||6;for(var t=o(e).toHsv(),n=t.h,s=t.s,a=t.v,l=[],f=1/r;r--;)l.push(o({h:n,s,v:a})),a=(a+f)%1;return l}o.mix=function(e,r,t){t=t===0?0:t||50;var n=o(e).toRgb(),s=o(r).toRgb(),a=t/100,l={r:(s.r-n.r)*a+n.r,g:(s.g-n.g)*a+n.g,b:(s.b-n.b)*a+n.b,a:(s.a-n.a)*a+n.a};return o(l)};o.readability=function(e,r){var t=o(e),n=o(r);return(Math.max(t.getLuminance(),n.getLuminance())+.05)/(Math.min(t.getLuminance(),n.getLuminance())+.05)};o.isReadable=function(e,r,t){var n=o.readability(e,r),s,a;switch(a=!1,s=Ne(t),s.level+s.size){case"AAsmall":case"AAAlarge":a=n>=4.5;break;case"AAlarge":a=n>=3;break;case"AAAsmall":a=n>=7;break}return a};o.mostReadable=function(e,r,t){var n=null,s=0,a,l,f,c;t=t||{},l=t.includeFallbackColors,f=t.level,c=t.size;for(var u=0;u<r.length;u++)a=o.readability(e,r[u]),a>s&&(s=a,n=o(r[u]));return o.isReadable(e,n,{level:f,size:c})||!l?n:(t.includeFallbackColors=!1,o.mostReadable(e,["#fff","#000"],t))};var I=o.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},He=o.hexNames=Ce(I);function Ce(e){var r={};for(var t in e)e.hasOwnProperty(t)&&(r[e[t]]=t);return r}function te(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function h(e,r){Re(e)&&(e="100%");var t=Te(e);return e=Math.min(r,Math.max(0,parseFloat(e))),t&&(e=parseInt(e*r,10)/100),Math.abs(e-r)<1e-6?1:e%r/parseFloat(r)}function F(e){return Math.min(1,Math.max(0,e))}function m(e){return parseInt(e,16)}function Re(e){return typeof e=="string"&&e.indexOf(".")!=-1&&parseFloat(e)===1}function Te(e){return typeof e=="string"&&e.indexOf("%")!=-1}function v(e){return e.length==1?"0"+e:""+e}function R(e){return e<=1&&(e=e*100+"%"),e}function re(e){return Math.round(parseFloat(e)*255).toString(16)}function V(e){return m(e)/255}var x=function(){var e="[-\\+]?\\d+%?",r="[-\\+]?\\d*\\.\\d+%?",t="(?:"+r+")|(?:"+e+")",n="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",s="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+n),rgba:new RegExp("rgba"+s),hsl:new RegExp("hsl"+n),hsla:new RegExp("hsla"+s),hsv:new RegExp("hsv"+n),hsva:new RegExp("hsva"+s),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function y(e){return!!x.CSS_UNIT.exec(e)}function Fe(e){e=e.replace(ce,"").replace(he,"").toLowerCase();var r=!1;if(I[e])e=I[e],r=!0;else if(e=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=x.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=x.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=x.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=x.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=x.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=x.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=x.hex8.exec(e))?{r:m(t[1]),g:m(t[2]),b:m(t[3]),a:V(t[4]),format:r?"name":"hex8"}:(t=x.hex6.exec(e))?{r:m(t[1]),g:m(t[2]),b:m(t[3]),format:r?"name":"hex"}:(t=x.hex4.exec(e))?{r:m(t[1]+""+t[1]),g:m(t[2]+""+t[2]),b:m(t[3]+""+t[3]),a:V(t[4]+""+t[4]),format:r?"name":"hex8"}:(t=x.hex3.exec(e))?{r:m(t[1]+""+t[1]),g:m(t[2]+""+t[2]),b:m(t[3]+""+t[3]),format:r?"name":"hex"}:!1}function Ne(e){var r,t;return e=e||{level:"AA",size:"small"},r=(e.level||"AA").toUpperCase(),t=(e.size||"small").toLowerCase(),r!=="AA"&&r!=="AAA"&&(r="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:r,size:t}}const Ee=d.div`
  background-color: #dc2626;
  color: #ffffff;
  text-align: center;
  padding: 0.5rem 0;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 50;
  transition: transform 0.3s ease-in-out;
  transform: ${e=>e.isVisible?"translateY(0)":"translateY(-100%)"};
  display: none;
`,Le=d.div`
  position: fixed;
  top: ${e=>e.isTopHeaderVisible?"1rem":"0.5rem"};
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  width: 90%;
  max-width: 1400px;
  padding: 2.25rem 1rem;
  height: 3rem;
  background: ${e=>e.isTop?"rgba(0, 0, 0, 0.5)":"#000000"};
  color: ${e=>e.isTop?e.textColor:"white"};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.3s, color 0.3s, top 0.3s, height 0.3s;
`,Ie=d(S)`
  display: flex;
  align-items: center;
`,q=d.img`
  width: auto;
  height: 100%;
  max-height: 5rem;
  object-fit: contain;

  @media (min-width: 768px) {
    max-height: 6rem;
  }
`,z=d(S)`
  padding: 0.4rem 0.8rem;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "Arial", sans-serif;
  transition: all 0.2s;
  color: ${e=>e.isTop?e.textColor:"white"};
  text-shadow: ${e=>e.isTop?"1px 1px 2px black":"none"};
  ${e=>e.active?`
        color: #f8a61f;
        background-color: #3a3a3a;
        border-radius: 1.5rem;
      `:`
        &:hover {
          color: #f8a61f;
        }
      `}
`,W=d.button`
  padding: 0.5rem 1rem;
  background-color: #dc2626;
  color: white;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-family: "Arial", sans-serif;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  &:hover {
    background-color: #dc8500;
    transform: scale(1.05);
  }
  @media (max-width: 767px) {
    margin: 0 auto;
  }
`,X=d.div`
  position: relative;
`,Y=d.div`
  display: flex;
  background-color: #1f2937;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 1rem;
  width: ${e=>e.isHelp?"250px":"500px"};
  z-index: 48;
  padding: 1rem;
  visibility: ${e=>e.isVisible?"visible":"hidden"};
  opacity: ${e=>e.isVisible?"1":"0"};
  transition: visibility 0.3s, opacity 0.3s;
  border-radius: 1rem;
`,N=d.div`
  flex: 1;
  padding: 0 1rem;
`,E=d.div`
  font-weight: 600;
  font-family: "Arial", sans-serif;
  padding: 0.5rem 0;
  text-transform: uppercase;
  font-size: 1rem;
  color: white;
  text-align: center;
  margin-bottom: 0.5rem;
`,b=d(S)`
  padding: 0.25rem 0;
  color: #f8f8f8;
  text-transform: capitalize;
  display: block;
  font-family: "Arial", sans-serif;
  font-weight: 300;
  padding-left: 1.5rem;
  &:hover {
    color: #f8a61f;
  }
`,ze=d.div`
  width: 1px;
  background-color: #ffffff;
  margin: 0 1rem;
`,Pe=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`,De=d.div`
  display: ${e=>e.isOpen?"flex":"none"};
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #1f2937;
  padding: 1rem;
  color: #ffffff;
  position: fixed;
  top: 4rem;
  left: 0;
  width: 100%;
  height: calc(100% - 4rem);
  z-index: 49;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  overflow-y: auto;
`,H=d(S)`
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "Arial", sans-serif;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background-color: #374151;
  }
`,J=d.div`
  padding: 0.5rem 1rem;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "Arial", sans-serif;
  width: 100%;
  padding-left: 2rem;
`,p=d(S)`
  padding: 0.5rem 1rem;
  color: #ffffff;
  text-transform: capitalize;
  display: block;
  font-family: "Arial", sans-serif;
  padding-left: 3rem;
  &:hover {
    background-color: #4b5563;
  }
`,Q=d.div`
  padding: 0.5rem 1rem;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "Arial", sans-serif;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #374151;
  }
`,Z=d.span`
  font-style: italic;
  color: gray;
  font-size: 0.8rem;
`,$e=d.div`
  text-align: center;
  padding: 100px;
  margin-top: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,Be=d.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  svg {
    width: 2rem;
    height: 2rem;
  }
`;function Qe({withSliderIn:e=[],isVisibleModalFormConsult:r,setIsVisibleModalFormConsult:t}){const n=w.useRef(null),{pathname:s}=K();e.find(k=>k.includes(s));const[a,l]=w.useState(!1),[f,c]=w.useState(!0),[u,j]=w.useState(null),[g,P]=w.useState(!0),[_,ne]=w.useState("white"),D=()=>{window.scrollY===0?(c(!0),P(!0)):(c(!1),P(!1))};w.useEffect(()=>((()=>{const ie=window.getComputedStyle(document.body).backgroundColor,ae=o(ie).getBrightness();ne(ae>125?"black":"white")})(),window.addEventListener("scroll",D),()=>{window.removeEventListener("scroll",D)}),[]);const A=k=>{j(u===k?null:k)};return n.current&&n.current.addEventListener("click",()=>l(!1)),i.jsxs(i.Fragment,{children:[i.jsx(Ee,{isVisible:f,children:i.jsxs("span",{children:["Sign up for 20% off your first order. ",i.jsx(S,{to:"/subscribe",children:"Subscribe."})]})}),i.jsx("div",{className:"hidden lg:block",children:i.jsxs(Le,{isTopHeaderVisible:f,isTop:g,textColor:_,children:[i.jsx(Ie,{to:"/",children:i.jsx(q,{src:"/img/logo.png",alt:"Logo"})}),i.jsxs("div",{className:"hidden lg:flex items-center space-x-4",children:[i.jsx(C,{name:"Home",to:"/",isTop:g,textColor:_}),i.jsxs(X,{onMouseEnter:()=>A("services"),onMouseLeave:()=>A(null),children:[i.jsxs(z,{to:"#",isTop:g,textColor:_,children:["Services ",i.jsx(M,{icon:L})]}),i.jsxs(Y,{isVisible:u==="services",isHelp:!1,children:[i.jsxs(N,{children:[i.jsx(E,{children:"Home Improvement"}),i.jsx(b,{to:"/services/roofing",children:"Roofing"}),i.jsx(b,{to:"/services/siding",children:"Siding"}),i.jsx(b,{to:"/services/gutter",children:"Gutter"}),i.jsx(b,{to:"/services/carpentry",children:"Carpentry"}),i.jsx(b,{to:"/services/paint",children:"Painting"})]}),i.jsx(ze,{}),i.jsxs(N,{children:[i.jsx(E,{children:"Restoration"}),i.jsx(b,{to:"/restoration/wind-damage",children:"Wind Damage"}),i.jsx(b,{to:"/restoration/water-damage",children:"Water Damage"}),i.jsx(b,{to:"/restoration/tree-damage",children:"Tree Damage"})]})]})]}),i.jsx(C,{name:"Financing",to:"/financing",isTop:g,textColor:_}),i.jsx(C,{name:"Gallery",to:"/gallery",isTop:g,textColor:_}),i.jsx(C,{name:"Areas",to:"/work-areas",isTop:g,textColor:_}),i.jsxs(X,{onMouseEnter:()=>A("help"),onMouseLeave:()=>A(null),children:[i.jsxs(z,{to:"#",isTop:g,textColor:_,children:["Help ",i.jsx(M,{icon:L})]}),i.jsx(Y,{isVisible:u==="help",isHelp:!0,children:i.jsxs(N,{children:[i.jsx(E,{children:"Help"}),i.jsx(b,{to:"/about-us",children:"About Us"}),i.jsx(b,{to:"/contact-us",children:"Contact Us"}),i.jsx(b,{to:"/work-with-us",children:"Work With Us"}),i.jsx(b,{to:"/faq",children:"Faq"})]})})]}),i.jsx(C,{name:"Roof Designer",to:"/roof-designer",isTop:g,textColor:_})]}),i.jsx(W,{onClick:()=>t(!0),children:"Free Estimates"})]})}),i.jsxs("div",{className:"lg:hidden",children:[i.jsxs(Pe,{children:[i.jsx(S,{to:"/",children:i.jsx(q,{src:"/img/logo.png",alt:"Logo",className:"h-10"})}),i.jsx(W,{onClick:()=>t(!0),children:"Free Estimates"}),i.jsx("button",{onClick:()=>l(!a),className:"text-white",children:i.jsx(M,{icon:se,className:"text-2xl"})})]}),i.jsxs(De,{isOpen:a,children:[i.jsx("button",{onClick:()=>l(!1),className:"self-end text-white text-3xl mb-4",children:i.jsx(M,{icon:ee})}),i.jsx(H,{to:"/",onClick:()=>l(!1),children:"Home"}),i.jsxs(Q,{onClick:()=>A("services"),children:["Services",i.jsx(Z,{children:u==="services"?"See Less":"See More"})]}),u==="services"&&i.jsxs(i.Fragment,{children:[i.jsx(J,{children:"Home Improvement"}),i.jsx(p,{to:"/services/roofing",onClick:()=>l(!1),children:"Roofing"}),i.jsx(p,{to:"/services/siding",onClick:()=>l(!1),children:"Siding"}),i.jsx(p,{to:"/services/gutter",onClick:()=>l(!1),children:"Gutter"}),i.jsx(p,{to:"/services/carpentry",onClick:()=>l(!1),children:"Carpentry"}),i.jsx(p,{to:"/services/paint",onClick:()=>l(!1),children:"Painting"}),i.jsx(J,{children:"Restoration"}),i.jsx(p,{to:"/restoration/wind-damage",onClick:()=>l(!1),children:"Wind Damage"}),i.jsx(p,{to:"/restoration/water-damage",onClick:()=>l(!1),children:"Water Damage"}),i.jsx(p,{to:"/restoration/tree-damage",onClick:()=>l(!1),children:"Tree Damage"})]}),i.jsx(H,{to:"/financing",onClick:()=>l(!1),children:"Financing"}),i.jsx(H,{to:"/gallery",onClick:()=>l(!1),children:"Gallery"}),i.jsx(H,{to:"/work-areas",onClick:()=>l(!1),children:"Service Areas"}),i.jsxs(Q,{onClick:()=>A("help"),children:["Help",i.jsx(Z,{children:u==="help"?"See Less":"See More"})]}),u==="help"&&i.jsxs(i.Fragment,{children:[i.jsx(p,{to:"/work-with-us",onClick:()=>l(!1),children:"Work With Us"}),i.jsx(p,{to:"/contact-us",onClick:()=>l(!1),children:"Contact Us"}),i.jsx(p,{to:"/about-us",onClick:()=>l(!1),children:"About Us"}),i.jsx(p,{to:"/faq",onClick:()=>l(!1),children:"FAQ's"})]}),i.jsx(H,{to:"/roof-designer",onClick:()=>l(!1),children:"Roof Designer"}),i.jsxs($e,{children:[i.jsx("span",{className:"opacity-70",children:"Join our community"}),i.jsx(Be,{children:fe.map(k=>i.jsx(Oe,{...k},k.id))})]})]})]}),i.jsx(Ge,{isVisible:r,onClose:()=>t(!1)})]})}function C({children:e,name:r,to:t,isTop:n,textColor:s,onClick:a,...l}){const{pathname:f}=K(),c=f===t;return i.jsxs("div",{className:"relative group flex items-center",children:[i.jsxs(z,{to:t,active:c,isTop:n,textColor:s,onClick:a,...l,children:[r,e&&i.jsxs(i.Fragment,{children:[i.jsx(M,{icon:L,className:"ml-1 group-hover:hidden"}),i.jsx(M,{icon:oe,className:"ml-1 hidden group-hover:block"})]})]}),e&&i.jsx("div",{className:"absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md hidden group-hover:block",children:e})]})}function Ge({isVisible:e=!1,onClose:r=null}){const t=w.useRef();return t.current&&(t.current.onclick=n=>{n.target===t.current&&r()}),window.onkeydown=n=>n.key==="Escape"?r():null,i.jsxs("div",{className:"fixed inset-0 z-50 "+(e?"flex":"hidden"),children:[i.jsx("div",{ref:t,className:"fixed inset-0 bg-black/20 backdrop-blur-md cursor-pointer"}),i.jsx("button",{className:"fixed top-3 right-3 z-20 w-10 aspect-square rounded-full bg-white/50",onClick:r,children:i.jsx(M,{icon:ee,className:"text-black"})}),i.jsxs("div",{className:"z-10 m-auto flex flex-col justify-center items-center",children:[i.jsx(le,{className:"h-screen max-h-[800px] overflow-y-auto"}),i.jsxs("p",{className:"text-center text-black text-lg font-bold",children:["Press ",i.jsx("b",{children:"ESC"})," or ",i.jsx("b",{children:"click outside"})," the image to close"]})]})]})}function Oe({url:e,icon:r}){return i.jsx("a",{href:e,target:"_blank",rel:"noreferrer",children:i.jsx("div",{dangerouslySetInnerHTML:{__html:r},className:"icon w-8 aspect-square fill-white"})})}export{Qe as default};
