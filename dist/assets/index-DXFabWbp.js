(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Du="modulepreload",Iu=function(n){return"/"+n},Ol={},Bl=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let c=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};var o=c;document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=c(t.map(h=>{if(h=Iu(h),h in Ol)return;Ol[h]=!0;const u=h.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${f}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":Du,u||(p.as="script"),p.crossOrigin="",p.href=h,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((g,_)=>{p.addEventListener("load",g),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})};const Wa="180",Ti={ROTATE:0,DOLLY:1,PAN:2},Si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uu=0,zl=1,Nu=2,hh=1,uh=2,t0=3,M0=0,hn=1,i0=2,y0=0,G0=1,kl=2,Hl=3,Vl=4,Fu=5,z0=100,Ou=101,Bu=102,zu=103,ku=104,Hu=200,Vu=201,Gu=202,Wu=203,ko=204,Ho=205,Xu=206,qu=207,Yu=208,ju=209,$u=210,Zu=211,Ku=212,Ju=213,Qu=214,Vo=0,Go=1,Wo=2,Ci=3,Xo=4,qo=5,Yo=6,jo=7,Xa=0,ed=1,td=2,S0=0,nd=1,id=2,sd=3,dh=4,rd=5,od=6,ad=7,fh=300,Ri=301,Pi=302,$o=303,Zo=304,kr=306,fs=1e3,H0=1001,Ko=1002,Nn=1003,ld=1004,Ns=1005,Hn=1006,Jr=1007,V0=1008,Xn=1009,ph=1010,mh=1011,ps=1012,qa=1013,X0=1014,s0=1015,Cs=1016,Ya=1017,ja=1018,ms=1020,gh=35902,_h=35899,vh=1021,xh=1022,Un=1023,gs=1026,_s=1027,yh=1028,$a=1029,Sh=1030,Za=1031,Ka=1033,pr=33776,mr=33777,gr=33778,_r=33779,Jo=35840,Qo=35841,ea=35842,ta=35843,na=36196,ia=37492,sa=37496,ra=37808,oa=37809,aa=37810,la=37811,ca=37812,ha=37813,ua=37814,da=37815,fa=37816,pa=37817,ma=37818,ga=37819,_a=37820,va=37821,xa=36492,ya=36494,Sa=36495,Ma=36283,Ea=36284,ba=36285,Ta=36286,cd=3200,hd=3201,Ja=0,ud=1,v0="",Xt="srgb",Li="srgb-linear",wr="linear",vt="srgb",ti=7680,Gl=519,dd=512,fd=513,pd=514,Mh=515,md=516,gd=517,_d=518,vd=519,wa=35044,Wl="300 es",Vn=2e3,Ar=2001;class Z0{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xl=1234567;const ns=Math.PI/180,vs=180/Math.PI;function Gn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function Qa(n,e){return(n%e+e)%e}function xd(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function yd(n,e,t){return n!==e?(t-n)/(e-n):0}function is(n,e,t){return(1-t)*n+t*e}function Sd(n,e,t,i){return is(n,e,1-Math.exp(-t*i))}function Md(n,e=1){return e-Math.abs(Qa(n,e*2)-e)}function Ed(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function bd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Td(n,e){return n+Math.floor(Math.random()*(e-n+1))}function wd(n,e){return n+Math.random()*(e-n)}function Ad(n){return n*(.5-Math.random())}function Cd(n){n!==void 0&&(Xl=n);let e=Xl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rd(n){return n*ns}function Pd(n){return n*vs}function Ld(n){return(n&n-1)===0&&n!==0}function Dd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Id(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ud(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Hr={DEG2RAD:ns,RAD2DEG:vs,generateUUID:Gn,clamp:nt,euclideanModulo:Qa,mapLinear:xd,inverseLerp:yd,lerp:is,damp:Sd,pingpong:Md,smoothstep:Ed,smootherstep:bd,randInt:Td,randFloat:wd,randFloatSpread:Ad,seededRandom:Cd,degToRad:Rd,radToDeg:Pd,isPowerOfTwo:Ld,ceilPowerOfTwo:Dd,floorPowerOfTwo:Id,setQuaternionFromProperEuler:Ud,normalize:gt,denormalize:In};class ie{constructor(e=0,t=0){ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class q0{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==p||h!==g){let m=1-a;const d=l*f+c*p+h*g+u*_,T=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const R=Math.sqrt(y),M=Math.atan2(R,d*T);m=Math.sin(m*M)/R,a=Math.sin(a*M)/R}const v=a*T;if(l=l*m+f*v,c=c*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-a*p,e[t+2]=c*g+h*p+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ql.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qr.copy(this).projectOnVector(e),this.sub(Qr)}reflect(e){return this.sub(Qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qr=new P,ql=new q0;class Qe{constructor(e,t,i,s,r,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],T=s[1],y=s[4],v=s[7],R=s[2],M=s[5],A=s[8];return r[0]=o*_+a*T+l*R,r[3]=o*m+a*y+l*M,r[6]=o*d+a*v+l*A,r[1]=c*_+h*T+u*R,r[4]=c*m+h*y+u*M,r[7]=c*d+h*v+u*A,r[2]=f*_+p*T+g*R,r[5]=f*m+p*y+g*M,r[8]=f*d+p*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=t*u+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(eo.makeScale(e,t)),this}rotate(e){return this.premultiply(eo.makeRotation(-e)),this}translate(e,t){return this.premultiply(eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const eo=new Qe;function Eh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Nd(){const n=xs("canvas");return n.style.display="block",n}const Yl={};function ys(n){n in Yl||(Yl[n]=!0,console.warn(n))}function Fd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const jl=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$l=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Od(){const n={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=r0(s.r),s.g=r0(s.g),s.b=r0(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===v0?wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Li]:{primaries:e,whitePoint:i,transfer:wr,toXYZ:jl,fromXYZ:$l,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:jl,fromXYZ:$l,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),n}const ft=Od();function r0(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ni;class Bd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ni===void 0&&(ni=xs("canvas")),ni.width=e.width,ni.height=e.height;const s=ni.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ni}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=r0(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(r0(t[i]/255)*255):t[i]=r0(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zd=0;class el{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(to(s[o].image)):r.push(to(s[o]))}else r=to(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function to(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kd=0;const no=new P;class Jt extends Z0{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,i=H0,s=H0,r=Hn,o=V0,a=Un,l=Xn,c=Jt.DEFAULT_ANISOTROPY,h=v0){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Gn(),this.name="",this.source=new el(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(no).x}get height(){return this.source.getSize(no).y}get depth(){return this.source.getSize(no).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fs:e.x=e.x-Math.floor(e.x);break;case H0:e.x=e.x<0?0:1;break;case Ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fs:e.y=e.y-Math.floor(e.y);break;case H0:e.y=e.y<0?0:1;break;case Ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=fh;Jt.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,i=0,s=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(p+1)/2,R=(d+1)/2,M=(h+f)/4,A=(u+_)/4,L=(g+m)/4;return y>v&&y>R?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=M/i,r=A/i):v>R?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=M/s,r=L/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=A/r,s=L/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-_)/T,this.z=(f-h)/T,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hd extends Z0{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Jt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new el(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Y0 extends Hd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class bh extends Jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=H0,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vd extends Jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=H0,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fs.copy(i.boundingBox)),Fs.applyMatrix4(e.matrixWorld),this.union(Fs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ki),Os.subVectors(this.max,ki),ii.subVectors(e.a,ki),si.subVectors(e.b,ki),ri.subVectors(e.c,ki),c0.subVectors(si,ii),h0.subVectors(ri,si),A0.subVectors(ii,ri);let t=[0,-c0.z,c0.y,0,-h0.z,h0.y,0,-A0.z,A0.y,c0.z,0,-c0.x,h0.z,0,-h0.x,A0.z,0,-A0.x,-c0.y,c0.x,0,-h0.y,h0.x,0,-A0.y,A0.x,0];return!io(t,ii,si,ri,Os)||(t=[1,0,0,0,1,0,0,0,1],!io(t,ii,si,ri,Os))?!1:(Bs.crossVectors(c0,h0),t=[Bs.x,Bs.y,Bs.z],io(t,ii,si,ri,Os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $n=[new P,new P,new P,new P,new P,new P,new P,new P],Pn=new P,Fs=new Fi,ii=new P,si=new P,ri=new P,c0=new P,h0=new P,A0=new P,ki=new P,Os=new P,Bs=new P,C0=new P;function io(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){C0.fromArray(n,r);const a=s.x*Math.abs(C0.x)+s.y*Math.abs(C0.y)+s.z*Math.abs(C0.z),l=e.dot(C0),c=t.dot(C0),h=i.dot(C0);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Gd=new Fi,Hi=new P,so=new P;class Rs{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Gd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hi.subVectors(e,this.center);const t=Hi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Hi,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(so.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hi.copy(e.center).add(so)),this.expandByPoint(Hi.copy(e.center).sub(so))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zn=new P,ro=new P,zs=new P,u0=new P,oo=new P,ks=new P,ao=new P;class Ps{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ro.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),u0.copy(this.origin).sub(ro);const r=e.distanceTo(t)*.5,o=-this.direction.dot(zs),a=u0.dot(this.direction),l=-u0.dot(zs),c=u0.lengthSq(),h=Math.abs(1-o*o);let u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ro).addScaledVector(zs,f),p}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),s=Zn.dot(Zn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,i,s,r){oo.subVectors(t,e),ks.subVectors(i,e),ao.crossVectors(oo,ks);let o=this.direction.dot(ao),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;u0.subVectors(this.origin,e);const l=a*this.direction.dot(ks.crossVectors(u0,ks));if(l<0)return null;const c=a*this.direction.dot(oo.cross(u0));if(c<0||l+c>o)return null;const h=-a*u0.dot(ao);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,s,r,o,a,l,c,h,u,f,p,g,_,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,p,g,_,m)}set(e,t,i,s,r,o,a,l,c,h,u,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/oi.setFromMatrixColumn(e,0).length(),r=1/oi.setFromMatrixColumn(e,1).length(),o=1/oi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,g=c*h,_=c*u;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,g=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wd,e,Xd)}lookAt(e,t,i){const s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),d0.crossVectors(i,pn),d0.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),d0.crossVectors(i,pn)),d0.normalize(),Hs.crossVectors(pn,d0),s[0]=d0.x,s[4]=Hs.x,s[8]=pn.x,s[1]=d0.y,s[5]=Hs.y,s[9]=pn.y,s[2]=d0.z,s[6]=Hs.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],T=i[3],y=i[7],v=i[11],R=i[15],M=s[0],A=s[4],L=s[8],E=s[12],b=s[1],D=s[5],O=s[9],z=s[13],X=s[2],V=s[6],Y=s[10],Q=s[14],W=s[3],ue=s[7],ve=s[11],se=s[15];return r[0]=o*M+a*b+l*X+c*W,r[4]=o*A+a*D+l*V+c*ue,r[8]=o*L+a*O+l*Y+c*ve,r[12]=o*E+a*z+l*Q+c*se,r[1]=h*M+u*b+f*X+p*W,r[5]=h*A+u*D+f*V+p*ue,r[9]=h*L+u*O+f*Y+p*ve,r[13]=h*E+u*z+f*Q+p*se,r[2]=g*M+_*b+m*X+d*W,r[6]=g*A+_*D+m*V+d*ue,r[10]=g*L+_*O+m*Y+d*ve,r[14]=g*E+_*z+m*Q+d*se,r[3]=T*M+y*b+v*X+R*W,r[7]=T*A+y*D+v*V+R*ue,r[11]=T*L+y*O+v*Y+R*ve,r[15]=T*E+y*z+v*Q+R*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*p-i*l*p)+_*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+d*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],T=u*m*c-_*f*c+_*l*p-a*m*p-u*l*d+a*f*d,y=g*f*c-h*m*c-g*l*p+o*m*p+h*l*d-o*f*d,v=h*_*c-g*u*c+g*a*p-o*_*p-h*a*d+o*u*d,R=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,M=t*T+i*y+s*v+r*R;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=T*A,e[1]=(_*f*r-u*m*r-_*s*p+i*m*p+u*s*d-i*f*d)*A,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*d+i*l*d)*A,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*p-i*l*p)*A,e[4]=y*A,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*d+t*f*d)*A,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*A,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*p+t*l*p)*A,e[8]=v*A,e[9]=(g*u*r-h*_*r-g*i*p+t*_*p+h*i*d-t*u*d)*A,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*d+t*a*d)*A,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*p-t*a*p)*A,e[12]=R*A,e[13]=(h*_*s-g*u*s+g*i*f-t*_*f-h*i*m+t*u*m)*A,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*A,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,_=o*h,m=o*u,d=a*u,T=l*c,y=l*h,v=l*u,R=i.x,M=i.y,A=i.z;return s[0]=(1-(_+d))*R,s[1]=(p+v)*R,s[2]=(g-y)*R,s[3]=0,s[4]=(p-v)*M,s[5]=(1-(f+d))*M,s[6]=(m+T)*M,s[7]=0,s[8]=(g+y)*A,s[9]=(m-T)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=oi.set(s[0],s[1],s[2]).length();const o=oi.set(s[4],s[5],s[6]).length(),a=oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ln.copy(this);const c=1/r,h=1/o,u=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,t.setFromRotationMatrix(Ln),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Vn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Vn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ar)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Vn,l=!1){const c=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),p=-(i+s)/(i-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Vn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ar)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const oi=new P,Ln=new yt,Wd=new P(0,0,0),Xd=new P(1,1,1),d0=new P,Hs=new P,pn=new P,Zl=new yt,Kl=new q0;class un{constructor(e=0,t=0,i=0,s=un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class tl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qd=0;const Jl=new P,ai=new q0,Kn=new yt,Vs=new P,Vi=new P,Yd=new P,jd=new q0,Ql=new P(1,0,0),ec=new P(0,1,0),tc=new P(0,0,1),nc={type:"added"},$d={type:"removed"},li={type:"childadded",child:null},lo={type:"childremoved",child:null};class Ut extends Z0{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new P,t=new un,i=new q0,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new Qe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.multiply(ai),this}rotateOnWorldAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.premultiply(ai),this}rotateX(e){return this.rotateOnAxis(Ql,e)}rotateY(e){return this.rotateOnAxis(ec,e)}rotateZ(e){return this.rotateOnAxis(tc,e)}translateOnAxis(e,t){return Jl.copy(e).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ql,e)}translateY(e){return this.translateOnAxis(ec,e)}translateZ(e){return this.translateOnAxis(tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Vs.copy(e):Vs.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Vi,Vs,this.up):Kn.lookAt(Vs,Vi,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),ai.setFromRotationMatrix(Kn),this.quaternion.premultiply(ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nc),li.child=e,this.dispatchEvent(li),li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($d),lo.child=e,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nc),li.child=e,this.dispatchEvent(li),li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,e,Yd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,jd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ut.DEFAULT_UP=new P(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new P,Jn=new P,co=new P,Qn=new P,ci=new P,hi=new P,ic=new P,ho=new P,uo=new P,fo=new P,po=new Dt,mo=new Dt,go=new Dt;class Tn{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Dn.subVectors(e,t),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Dn.subVectors(s,t),Jn.subVectors(i,t),co.subVectors(e,t);const o=Dn.dot(Dn),a=Dn.dot(Jn),l=Dn.dot(co),c=Jn.dot(Jn),h=Jn.dot(co),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return po.setScalar(0),mo.setScalar(0),go.setScalar(0),po.fromBufferAttribute(e,t),mo.fromBufferAttribute(e,i),go.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(po,r.x),o.addScaledVector(mo,r.y),o.addScaledVector(go,r.z),o}static isFrontFacing(e,t,i,s){return Dn.subVectors(i,t),Jn.subVectors(e,t),Dn.cross(Jn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Dn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Tn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ci.subVectors(s,i),hi.subVectors(r,i),ho.subVectors(e,i);const l=ci.dot(ho),c=hi.dot(ho);if(l<=0&&c<=0)return t.copy(i);uo.subVectors(e,s);const h=ci.dot(uo),u=hi.dot(uo);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ci,o);fo.subVectors(e,r);const p=ci.dot(fo),g=hi.dot(fo);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(hi,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return ic.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(ic,a);const d=1/(m+_+f);return o=_*d,a=f*d,t.copy(i).addScaledVector(ci,o).addScaledVector(hi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},f0={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function _o(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ft.workingColorSpace){if(e=Qa(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=_o(o,r,e+1/3),this.g=_o(o,r,e),this.b=_o(o,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=Xt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const i=Th[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=r0(e.r),this.g=r0(e.g),this.b=r0(e.b),this}copyLinearToSRGB(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return ft.workingToColorSpace(Kt.copy(this),e),Math.round(nt(Kt.r*255,0,255))*65536+Math.round(nt(Kt.g*255,0,255))*256+Math.round(nt(Kt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(Kt.copy(this),t);const i=Kt.r,s=Kt.g,r=Kt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Xt){ft.workingToColorSpace(Kt.copy(this),e);const t=Kt.r,i=Kt.g,s=Kt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(f0),this.setHSL(f0.h+e,f0.s+t,f0.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(f0),e.getHSL(Gs);const i=is(f0.h,Gs.h,t),s=is(f0.s,Gs.s,t),r=is(f0.l,Gs.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new We;We.NAMES=Th;let Zd=0;class Rn extends Z0{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=G0,this.side=M0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ko,this.blendDst=Ho,this.blendEquation=z0,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==G0&&(i.blending=this.blending),this.side!==M0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ko&&(i.blendSrc=this.blendSrc),this.blendDst!==Ho&&(i.blendDst=this.blendDst),this.blendEquation!==z0&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class nl extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new P,Ws=new ie;let Kd=0;class Fn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wa,this.updateRanges=[],this.gpuType=s0,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=In(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wa&&(e.usage=this.usage),e}}class wh extends Fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ah extends Fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ut extends Fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Jd=0;const Sn=new yt,vo=new Ut,ui=new P,mn=new Fi,Gi=new Fi,Gt=new P;class kt extends Z0{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eh(e)?Ah:wh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return vo.lookAt(e),vo.updateMatrix(),this.applyMatrix4(vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Gi.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(mn.min,Gi.min),mn.expandByPoint(Gt),Gt.addVectors(mn.max,Gi.max),mn.expandByPoint(Gt)):(mn.expandByPoint(Gi.min),mn.expandByPoint(Gi.max))}mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Gt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Gt.fromBufferAttribute(a,c),l&&(ui.fromBufferAttribute(e,c),Gt.add(ui)),s=Math.max(s,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new P,l[L]=new P;const c=new P,h=new P,u=new P,f=new ie,p=new ie,g=new ie,_=new P,m=new P;function d(L,E,b){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,E),u.fromBufferAttribute(i,b),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(D),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),a[L].add(_),a[E].add(_),a[b].add(_),l[L].add(m),l[E].add(m),l[b].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,E=T.length;L<E;++L){const b=T[L],D=b.start,O=b.count;for(let z=D,X=D+O;z<X;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new P,v=new P,R=new P,M=new P;function A(L){R.fromBufferAttribute(s,L),M.copy(R);const E=a[L];y.copy(E),y.sub(R.multiplyScalar(R.dot(E))).normalize(),v.crossVectors(M,E);const D=v.dot(l[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,D)}for(let L=0,E=T.length;L<E;++L){const b=T[L],D=b.start,O=b.count;for(let z=D,X=D+O;z<X;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new Fn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sc=new yt,R0=new Ps,Xs=new Rs,rc=new P,qs=new P,Ys=new P,js=new P,xo=new P,$s=new P,oc=new P,Zs=new P;class qe extends Ut{constructor(e=new kt,t=new nl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){$s.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(xo.fromBufferAttribute(u,e),o?$s.addScaledVector(xo,h):$s.addScaledVector(xo.sub(t),h))}t.add($s)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere),Xs.applyMatrix4(r),R0.copy(e.ray).recast(e.near),!(Xs.containsPoint(R0.origin)===!1&&(R0.intersectSphere(Xs,rc)===null||R0.origin.distanceToSquared(rc)>(e.far-e.near)**2))&&(sc.copy(r).invert(),R0.copy(e.ray).applyMatrix4(sc),!(i.boundingBox!==null&&R0.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,R0)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,R=y;v<R;v+=3){const M=a.getX(v),A=a.getX(v+1),L=a.getX(v+2);s=Ks(this,d,e,i,c,h,u,M,A,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const T=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=Ks(this,o,e,i,c,h,u,T,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,R=y;v<R;v+=3){const M=v,A=v+1,L=v+2;s=Ks(this,d,e,i,c,h,u,M,A,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const T=m,y=m+1,v=m+2;s=Ks(this,o,e,i,c,h,u,T,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Qd(n,e,t,i,s,r,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===M0,a),l===null)return null;Zs.copy(a),Zs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Zs);return c<t.near||c>t.far?null:{distance:c,point:Zs.clone(),object:n}}function Ks(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,qs),n.getVertexPosition(l,Ys),n.getVertexPosition(c,js);const h=Qd(n,e,t,i,qs,Ys,js,oc);if(h){const u=new P;Tn.getBarycoord(oc,qs,Ys,js,u),s&&(h.uv=Tn.getInterpolatedAttribute(s,a,l,c,u,new ie)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,a,l,c,u,new ie)),o&&(h.normal=Tn.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new P,materialIndex:0};Tn.getNormal(qs,Ys,js,f.normal),h.face=f,h.barycoord=u}return h}class K0 extends kt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2));function g(_,m,d,T,y,v,R,M,A,L,E){const b=v/A,D=R/L,O=v/2,z=R/2,X=M/2,V=A+1,Y=L+1;let Q=0,W=0;const ue=new P;for(let ve=0;ve<Y;ve++){const se=ve*D-z;for(let De=0;De<V;De++){const Je=De*b-O;ue[_]=Je*T,ue[m]=se*y,ue[d]=X,c.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[d]=M>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(De/A),u.push(1-ve/L),Q+=1}}for(let ve=0;ve<L;ve++)for(let se=0;se<A;se++){const De=f+se+V*ve,Je=f+se+V*(ve+1),ot=f+(se+1)+V*(ve+1),je=f+(se+1)+V*ve;l.push(De,Je,je),l.push(Je,ot,je),W+=6}a.addGroup(p,W,E),p+=W,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new K0(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Di(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function nn(n){const e={};for(let t=0;t<n.length;t++){const i=Di(n[t]);for(const s in i)e[s]=i[s]}return e}function ef(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ch(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const tf={clone:Di,merge:nn};var nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class E0 extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nf,this.fragmentShader=sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=ef(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Rh extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const p0=new P,ac=new ie,lc=new ie;class bn extends Rh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){p0.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(p0.x,p0.y).multiplyScalar(-e/p0.z),p0.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(p0.x,p0.y).multiplyScalar(-e/p0.z)}getViewSize(e,t){return this.getViewBounds(e,ac,lc),t.subVectors(lc,ac)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ns*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const di=-90,fi=1;class rf extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new bn(di,fi,e,t);s.layers=this.layers,this.add(s);const r=new bn(di,fi,e,t);r.layers=this.layers,this.add(r);const o=new bn(di,fi,e,t);o.layers=this.layers,this.add(o);const a=new bn(di,fi,e,t);a.layers=this.layers,this.add(a);const l=new bn(di,fi,e,t);l.layers=this.layers,this.add(l);const c=new bn(di,fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ar)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ph extends Jt{constructor(e=[],t=Ri,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class of extends Y0{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ph(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new K0(5,5,5),r=new E0({name:"CubemapFromEquirect",uniforms:Di(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:y0});r.uniforms.tEquirect.value=t;const o=new qe(s,r),a=t.minFilter;return t.minFilter===V0&&(t.minFilter=Hn),new rf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Bt extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const af={type:"move"};class yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(af)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Bt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class lf extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wa,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new P;class Cr{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=In(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Fn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Lh extends Rn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let pi;const Wi=new P,mi=new P,gi=new P,_i=new ie,Xi=new ie,Dh=new yt,Js=new P,qi=new P,Qs=new P,cc=new ie,So=new ie,hc=new ie;class hf extends Ut{constructor(e=new Lh){if(super(),this.isSprite=!0,this.type="Sprite",pi===void 0){pi=new kt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new cf(t,5);pi.setIndex([0,1,2,0,2,3]),pi.setAttribute("position",new Cr(i,3,0,!1)),pi.setAttribute("uv",new Cr(i,2,3,!1))}this.geometry=pi,this.material=e,this.center=new ie(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mi.setFromMatrixScale(this.matrixWorld),Dh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mi.multiplyScalar(-gi.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;er(Js.set(-.5,-.5,0),gi,o,mi,s,r),er(qi.set(.5,-.5,0),gi,o,mi,s,r),er(Qs.set(.5,.5,0),gi,o,mi,s,r),cc.set(0,0),So.set(1,0),hc.set(1,1);let a=e.ray.intersectTriangle(Js,qi,Qs,!1,Wi);if(a===null&&(er(qi.set(-.5,.5,0),gi,o,mi,s,r),So.set(0,1),a=e.ray.intersectTriangle(Js,Qs,qi,!1,Wi),a===null))return;const l=e.ray.origin.distanceTo(Wi);l<e.near||l>e.far||t.push({distance:l,point:Wi.clone(),uv:Tn.getInterpolation(Wi,Js,qi,Qs,cc,So,hc,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function er(n,e,t,i,s,r){_i.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Xi.x=r*_i.x-s*_i.y,Xi.y=s*_i.x+r*_i.y):Xi.copy(_i),n.copy(e),n.x+=Xi.x,n.y+=Xi.y,n.applyMatrix4(Dh)}const Mo=new P,uf=new P,df=new Qe;class _0{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Mo.subVectors(i,t).cross(uf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Mo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||df.getNormalMatrix(e),s=this.coplanarPoint(Mo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const P0=new Rs,ff=new ie(.5,.5),tr=new P;class il{constructor(e=new _0,t=new _0,i=new _0,s=new _0,r=new _0,o=new _0){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],g=r[8],_=r[9],m=r[10],d=r[11],T=r[12],y=r[13],v=r[14],R=r[15];if(s[0].setComponents(c-o,p-h,d-g,R-T).normalize(),s[1].setComponents(c+o,p+h,d+g,R+T).normalize(),s[2].setComponents(c+a,p+u,d+_,R+y).normalize(),s[3].setComponents(c-a,p-u,d-_,R-y).normalize(),i)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,p-f,d-m,R-v).normalize();else if(s[4].setComponents(c-l,p-f,d-m,R-v).normalize(),t===Vn)s[5].setComponents(c+l,p+f,d+m,R+v).normalize();else if(t===Ar)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),P0.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),P0.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(P0)}intersectsSprite(e){P0.center.set(0,0,0);const t=ff.distanceTo(e.center);return P0.radius=.7071067811865476+t,P0.applyMatrix4(e.matrixWorld),this.intersectsSphere(P0)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(tr.x=s.normal.x>0?e.max.x:e.min.x,tr.y=s.normal.y>0?e.max.y:e.min.y,tr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(tr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ss extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rr=new P,Pr=new P,uc=new yt,Yi=new Ps,nr=new Rs,Eo=new P,dc=new P;class pf extends Ut{constructor(e=new kt,t=new ss){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Rr.fromBufferAttribute(t,s-1),Pr.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Rr.distanceTo(Pr);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nr.copy(i.boundingSphere),nr.applyMatrix4(s),nr.radius+=r,e.ray.intersectsSphere(nr)===!1)return;uc.copy(s).invert(),Yi.copy(e.ray).applyMatrix4(uc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=h.getX(_),T=h.getX(_+1),y=ir(this,e,Yi,l,d,T,_);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),d=ir(this,e,Yi,l,_,m,g-1);d&&t.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=ir(this,e,Yi,l,_,_+1,_);d&&t.push(d)}if(this.isLineLoop){const _=ir(this,e,Yi,l,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ir(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Rr.fromBufferAttribute(a,s),Pr.fromBufferAttribute(a,r),t.distanceSqToSegment(Rr,Pr,Eo,dc)>i)return;Eo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Eo);if(!(c<e.near||c>e.far))return{distance:c,point:dc.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const fc=new P,pc=new P;class Aa extends pf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)fc.fromBufferAttribute(t,s),pc.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+fc.distanceTo(pc);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ji extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mc=new yt,Ca=new Ps,sr=new Rs,rr=new P;class bo extends Ut{constructor(e=new kt,t=new ji){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere),sr.applyMatrix4(s),sr.radius+=r,e.ray.intersectsSphere(sr)===!1)return;mc.copy(s).invert(),Ca.copy(e.ray).applyMatrix4(mc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);rr.fromBufferAttribute(u,m),gc(rr,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++)rr.fromBufferAttribute(u,g),gc(rr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function gc(n,e,t,i,s,r,o){const a=Ca.distanceSqToPoint(n);if(a<t){const l=new P;Ca.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Vr extends Jt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ih extends Jt{constructor(e,t,i=X0,s,r,o,a=Nn,l=Nn,c,h=gs,u=1){if(h!==gs&&h!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new el(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Uh extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sl extends kt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new P,h=new ie;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const p=i+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(a,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Cn extends kt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const _=[],m=i/2;let d=0;T(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(f,3)),this.setAttribute("uv",new ut(p,2));function T(){const v=new P,R=new P;let M=0;const A=(t-e)/i;for(let L=0;L<=r;L++){const E=[],b=L/r,D=b*(t-e)+e;for(let O=0;O<=s;O++){const z=O/s,X=z*l+a,V=Math.sin(X),Y=Math.cos(X);R.x=D*V,R.y=-b*i+m,R.z=D*Y,u.push(R.x,R.y,R.z),v.set(V,A,Y).normalize(),f.push(v.x,v.y,v.z),p.push(z,1-b),E.push(g++)}_.push(E)}for(let L=0;L<s;L++)for(let E=0;E<r;E++){const b=_[E][L],D=_[E+1][L],O=_[E+1][L+1],z=_[E][L+1];(e>0||E!==0)&&(h.push(b,D,z),M+=3),(t>0||E!==r-1)&&(h.push(D,O,z),M+=3)}c.addGroup(d,M,0),d+=M}function y(v){const R=g,M=new ie,A=new P;let L=0;const E=v===!0?e:t,b=v===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*b,0),f.push(0,b,0),p.push(.5,.5),g++;const D=g;for(let O=0;O<=s;O++){const X=O/s*l+a,V=Math.cos(X),Y=Math.sin(X);A.x=E*Y,A.y=m*b,A.z=E*V,u.push(A.x,A.y,A.z),f.push(0,b,0),M.x=V*.5+.5,M.y=Y*.5*b+.5,p.push(M.x,M.y),g++}for(let O=0;O<s;O++){const z=R+O,X=D+O;v===!0?h.push(X,X+1,z):h.push(X+1,X,z),L+=3}c.addGroup(d,L,v===!0?1:2),d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],f=i[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ie:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new P,s=[],r=[],o=[],a=new P,l=new yt;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(nt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(nt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class rl extends Yn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ie){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class mf extends rl{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ol(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const or=new P,To=new ol,wo=new ol,Ao=new ol;class Nh extends Yn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(or.subVectors(s[0],s[1]).add(s[0]),c=or);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(or.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=or),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),To.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),wo.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),Ao.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(To.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),wo.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ao.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(To.calc(l),wo.calc(l),Ao.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _c(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function gf(n,e){const t=1-n;return t*t*e}function _f(n,e){return 2*(1-n)*n*e}function vf(n,e){return n*n*e}function rs(n,e,t,i){return gf(n,e)+_f(n,t)+vf(n,i)}function xf(n,e){const t=1-n;return t*t*t*e}function yf(n,e){const t=1-n;return 3*t*t*n*e}function Sf(n,e){return 3*(1-n)*n*n*e}function Mf(n,e){return n*n*n*e}function os(n,e,t,i,s){return xf(n,e)+yf(n,t)+Sf(n,i)+Mf(n,s)}class Fh extends Yn{constructor(e=new ie,t=new ie,i=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ie){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(os(e,s.x,r.x,o.x,a.x),os(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ef extends Yn{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(os(e,s.x,r.x,o.x,a.x),os(e,s.y,r.y,o.y,a.y),os(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Oh extends Yn{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bf extends Yn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bh extends Yn{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(rs(e,s.x,r.x,o.x),rs(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zh extends Yn{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(rs(e,s.x,r.x,o.x),rs(e,s.y,r.y,o.y),rs(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kh extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(_c(a,l.x,c.x,h.x,u.x),_c(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ie().fromArray(s))}return this}}var Lr=Object.freeze({__proto__:null,ArcCurve:mf,CatmullRomCurve3:Nh,CubicBezierCurve:Fh,CubicBezierCurve3:Ef,EllipseCurve:rl,LineCurve:Oh,LineCurve3:bf,QuadraticBezierCurve:Bh,QuadraticBezierCurve3:zh,SplineCurve:kh});class Tf extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lr[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Lr[s.type]().fromJSON(s))}return this}}class Ss extends Tf{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Oh(this.currentPoint.clone(),new ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Bh(this.currentPoint.clone(),new ie(e,t),new ie(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Fh(this.currentPoint.clone(),new ie(e,t),new ie(i,s),new ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new kh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new rl(e,t,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class b0 extends Ss{constructor(e){super(e),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Ss().fromJSON(s))}return this}}function wf(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Hh(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Lf(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){const p=n[f],g=n[f+1];p<a&&(a=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ms(r,o,t,a,l,c,0),o}function Hh(n,e,t,i,s){let r;if(s===Vf(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=vc(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=vc(o/i|0,n[o],n[o+1],r);return r&&Ii(r,r.next)&&(bs(r),r=r.next),r}function j0(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ii(t,t.next)||Ct(t.prev,t,t.next)===0)){if(bs(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ms(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Ff(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?Cf(n,i,s,r):Af(n)){e.push(l.i,n.i,c.i),bs(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Rf(j0(n),e),Ms(n,e,t,i,s,r,2)):o===2&&Pf(n,e,t,i,s,r):Ms(j0(n),e,t,i,s,r,1);break}}}function Af(n){const e=n.prev,t=n,i=n.next;if(Ct(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),p=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&$i(s,a,r,l,o,c,g.x,g.y)&&Ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Cf(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Ct(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,p=Math.min(a,l,c),g=Math.min(h,u,f),_=Math.max(a,l,c),m=Math.max(h,u,f),d=Ra(p,g,e,t,i),T=Ra(_,m,e,t,i);let y=n.prevZ,v=n.nextZ;for(;y&&y.z>=d&&v&&v.z<=T;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&$i(a,h,l,u,c,f,y.x,y.y)&&Ct(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&$i(a,h,l,u,c,f,v.x,v.y)&&Ct(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=d;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&$i(a,h,l,u,c,f,y.x,y.y)&&Ct(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=T;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&$i(a,h,l,u,c,f,v.x,v.y)&&Ct(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Rf(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Ii(i,s)&&Gh(i,t,t.next,s)&&Es(i,s)&&Es(s,i)&&(e.push(i.i,t.i,s.i),bs(t),bs(t.next),t=n=s),t=t.next}while(t!==n);return j0(t)}function Pf(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&zf(o,a)){let l=Wh(o,a);o=j0(o,o.next),l=j0(l,l.next),Ms(o,e,t,i,s,r,0),Ms(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Lf(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Hh(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Bf(c))}s.sort(Df);for(let r=0;r<s.length;r++)t=If(s[r],t);return t}function Df(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function If(n,e){const t=Uf(n,e);if(!t)return e;const i=Wh(t,n);return j0(i,i.next),j0(t,t.next)}function Uf(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Ii(n,t))return t;do{if(Ii(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Vh(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const u=Math.abs(s-t.y)/(i-t.x);Es(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Nf(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Nf(n,e){return Ct(n.prev,n,e.prev)<0&&Ct(e.next,n,n.next)<0}function Ff(n,e,t,i){let s=n;do s.z===0&&(s.z=Ra(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Of(s)}function Of(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Ra(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Bf(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Vh(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function $i(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Vh(n,e,t,i,s,r,o,a)}function zf(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!kf(n,e)&&(Es(n,e)&&Es(e,n)&&Hf(n,e)&&(Ct(n.prev,n,e.prev)||Ct(n,e.prev,e))||Ii(n,e)&&Ct(n.prev,n,n.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ii(n,e){return n.x===e.x&&n.y===e.y}function Gh(n,e,t,i){const s=lr(Ct(n,e,t)),r=lr(Ct(n,e,i)),o=lr(Ct(t,i,n)),a=lr(Ct(t,i,e));return!!(s!==r&&o!==a||s===0&&ar(n,t,e)||r===0&&ar(n,i,e)||o===0&&ar(t,n,i)||a===0&&ar(t,e,i))}function ar(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function lr(n){return n>0?1:n<0?-1:0}function kf(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Gh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Es(n,e){return Ct(n.prev,n,n.next)<0?Ct(n,e,n.next)>=0&&Ct(n,n.prev,e)>=0:Ct(n,e,n.prev)<0||Ct(n,n.next,e)<0}function Hf(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Wh(n,e){const t=Pa(n.i,n.x,n.y),i=Pa(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function vc(n,e,t,i){const s=Pa(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function bs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Pa(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Vf(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Gf{static triangulate(e,t,i=2){return wf(e,t,i)}}class Mi{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Mi.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];xc(e),yc(i,e);let o=e.length;t.forEach(xc);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,yc(i,t[l]);const a=Gf.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function xc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function yc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class vn extends kt{constructor(e=new b0([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ut(s,3)),this.setAttribute("uv",new ut(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:Wf;let y,v=!1,R,M,A,L;d&&(y=d.getSpacedPoints(h),v=!0,f=!1,R=d.computeFrenetFrames(h,!1),M=new P,A=new P,L=new P),f||(m=0,p=0,g=0,_=0);const E=a.extractPoints(c);let b=E.shape;const D=E.holes;if(!Mi.isClockWise(b)){b=b.reverse();for(let ee=0,J=D.length;ee<J;ee++){const $=D[ee];Mi.isClockWise($)&&(D[ee]=$.reverse())}}function z(ee){const $=10000000000000001e-36;let Z=ee[0];for(let fe=1;fe<=ee.length;fe++){const re=fe%ee.length,pe=ee[re],Ze=pe.x-Z.x,Ye=pe.y-Z.y,w=Ze*Ze+Ye*Ye,x=Math.max(Math.abs(pe.x),Math.abs(pe.y),Math.abs(Z.x),Math.abs(Z.y)),B=$*x*x;if(w<=B){ee.splice(re,1),fe--;continue}Z=pe}}z(b),D.forEach(z);const X=D.length,V=b;for(let ee=0;ee<X;ee++){const J=D[ee];b=b.concat(J)}function Y(ee,J,$){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(J,$)}const Q=b.length;function W(ee,J,$){let Z,fe,re;const pe=ee.x-J.x,Ze=ee.y-J.y,Ye=$.x-ee.x,w=$.y-ee.y,x=pe*pe+Ze*Ze,B=pe*w-Ze*Ye;if(Math.abs(B)>Number.EPSILON){const G=Math.sqrt(x),ne=Math.sqrt(Ye*Ye+w*w),q=J.x-Ze/G,Ie=J.y+pe/G,he=$.x-w/ne,Re=$.y+Ye/ne,Pe=((he-q)*w-(Re-Ie)*Ye)/(pe*w-Ze*Ye);Z=q+pe*Pe-ee.x,fe=Ie+Ze*Pe-ee.y;const oe=Z*Z+fe*fe;if(oe<=2)return new ie(Z,fe);re=Math.sqrt(oe/2)}else{let G=!1;pe>Number.EPSILON?Ye>Number.EPSILON&&(G=!0):pe<-Number.EPSILON?Ye<-Number.EPSILON&&(G=!0):Math.sign(Ze)===Math.sign(w)&&(G=!0),G?(Z=-Ze,fe=pe,re=Math.sqrt(x)):(Z=pe,fe=Ze,re=Math.sqrt(x/2))}return new ie(Z/re,fe/re)}const ue=[];for(let ee=0,J=V.length,$=J-1,Z=ee+1;ee<J;ee++,$++,Z++)$===J&&($=0),Z===J&&(Z=0),ue[ee]=W(V[ee],V[$],V[Z]);const ve=[];let se,De=ue.concat();for(let ee=0,J=X;ee<J;ee++){const $=D[ee];se=[];for(let Z=0,fe=$.length,re=fe-1,pe=Z+1;Z<fe;Z++,re++,pe++)re===fe&&(re=0),pe===fe&&(pe=0),se[Z]=W($[Z],$[re],$[pe]);ve.push(se),De=De.concat(se)}let Je;if(m===0)Je=Mi.triangulateShape(V,D);else{const ee=[],J=[];for(let $=0;$<m;$++){const Z=$/m,fe=p*Math.cos(Z*Math.PI/2),re=g*Math.sin(Z*Math.PI/2)+_;for(let pe=0,Ze=V.length;pe<Ze;pe++){const Ye=Y(V[pe],ue[pe],re);be(Ye.x,Ye.y,-fe),Z===0&&ee.push(Ye)}for(let pe=0,Ze=X;pe<Ze;pe++){const Ye=D[pe];se=ve[pe];const w=[];for(let x=0,B=Ye.length;x<B;x++){const G=Y(Ye[x],se[x],re);be(G.x,G.y,-fe),Z===0&&w.push(G)}Z===0&&J.push(w)}}Je=Mi.triangulateShape(ee,J)}const ot=Je.length,je=g+_;for(let ee=0;ee<Q;ee++){const J=f?Y(b[ee],De[ee],je):b[ee];v?(A.copy(R.normals[0]).multiplyScalar(J.x),M.copy(R.binormals[0]).multiplyScalar(J.y),L.copy(y[0]).add(A).add(M),be(L.x,L.y,L.z)):be(J.x,J.y,0)}for(let ee=1;ee<=h;ee++)for(let J=0;J<Q;J++){const $=f?Y(b[J],De[J],je):b[J];v?(A.copy(R.normals[ee]).multiplyScalar($.x),M.copy(R.binormals[ee]).multiplyScalar($.y),L.copy(y[ee]).add(A).add(M),be(L.x,L.y,L.z)):be($.x,$.y,u/h*ee)}for(let ee=m-1;ee>=0;ee--){const J=ee/m,$=p*Math.cos(J*Math.PI/2),Z=g*Math.sin(J*Math.PI/2)+_;for(let fe=0,re=V.length;fe<re;fe++){const pe=Y(V[fe],ue[fe],Z);be(pe.x,pe.y,u+$)}for(let fe=0,re=D.length;fe<re;fe++){const pe=D[fe];se=ve[fe];for(let Ze=0,Ye=pe.length;Ze<Ye;Ze++){const w=Y(pe[Ze],se[Ze],Z);v?be(w.x,w.y+y[h-1].y,y[h-1].x+$):be(w.x,w.y,u+$)}}}j(),K();function j(){const ee=s.length/3;if(f){let J=0,$=Q*J;for(let Z=0;Z<ot;Z++){const fe=Je[Z];Me(fe[2]+$,fe[1]+$,fe[0]+$)}J=h+m*2,$=Q*J;for(let Z=0;Z<ot;Z++){const fe=Je[Z];Me(fe[0]+$,fe[1]+$,fe[2]+$)}}else{for(let J=0;J<ot;J++){const $=Je[J];Me($[2],$[1],$[0])}for(let J=0;J<ot;J++){const $=Je[J];Me($[0]+Q*h,$[1]+Q*h,$[2]+Q*h)}}i.addGroup(ee,s.length/3-ee,0)}function K(){const ee=s.length/3;let J=0;ge(V,J),J+=V.length;for(let $=0,Z=D.length;$<Z;$++){const fe=D[$];ge(fe,J),J+=fe.length}i.addGroup(ee,s.length/3-ee,1)}function ge(ee,J){let $=ee.length;for(;--$>=0;){const Z=$;let fe=$-1;fe<0&&(fe=ee.length-1);for(let re=0,pe=h+m*2;re<pe;re++){const Ze=Q*re,Ye=Q*(re+1),w=J+Z+Ze,x=J+fe+Ze,B=J+fe+Ye,G=J+Z+Ye;Xe(w,x,B,G)}}}function be(ee,J,$){l.push(ee),l.push(J),l.push($)}function Me(ee,J,$){et(ee),et(J),et($);const Z=s.length/3,fe=T.generateTopUV(i,s,Z-3,Z-2,Z-1);C(fe[0]),C(fe[1]),C(fe[2])}function Xe(ee,J,$,Z){et(ee),et(J),et(Z),et(J),et($),et(Z);const fe=s.length/3,re=T.generateSideWallUV(i,s,fe-6,fe-3,fe-2,fe-1);C(re[0]),C(re[1]),C(re[3]),C(re[1]),C(re[2]),C(re[3])}function et(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function C(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Xf(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Lr[s.type]().fromJSON(s)),new vn(i,e.options)}}const Wf={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ie(r,o),new ie(a,l),new ie(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],p=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ie(o,1-l),new ie(c,1-u),new ie(f,1-g),new ie(_,1-d)]:[new ie(a,1-l),new ie(h,1-u),new ie(p,1-g),new ie(m,1-d)]}};function Xf(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class J0 extends kt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const T=d*f-o;for(let y=0;y<c;y++){const v=y*u-r;g.push(v,-T,0),_.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<a;T++){const y=T+c*d,v=T+c*(d+1),R=T+1+c*(d+1),M=T+1+c*d;p.push(y,v,M),p.push(v,R,M)}this.setIndex(p),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new J0(e.width,e.height,e.widthSegments,e.heightSegments)}}class al extends kt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,f=new P,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const T=[],y=d/i;let v=0;d===0&&o===0?v=.5/t:d===i&&l===Math.PI&&(v=-.5/t);for(let R=0;R<=t;R++){const M=R/t;u.x=-e*Math.cos(s+M*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+M*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(M+v,1-y),T.push(c++)}h.push(T)}for(let d=0;d<i;d++)for(let T=0;T<t;T++){const y=h[d][T+1],v=h[d][T],R=h[d+1][T],M=h[d+1][T+1];(d!==0||o>0)&&p.push(y,v,M),(d!==i-1||l<Math.PI)&&p.push(v,R,M)}this.setIndex(p),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ll extends kt{constructor(e=new zh(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,l=new P,c=new ie;let h=new P;const u=[],f=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(f,3)),this.setAttribute("uv",new ut(p,2));function _(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),T(),d()}function m(y){h=e.getPointAt(y/t,h);const v=o.normals[y],R=o.binormals[y];for(let M=0;M<=s;M++){const A=M/s*Math.PI*2,L=Math.sin(A),E=-Math.cos(A);l.x=E*v.x+L*R.x,l.y=E*v.y+L*R.y,l.z=E*v.z+L*R.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function d(){for(let y=1;y<=t;y++)for(let v=1;v<=s;v++){const R=(s+1)*(y-1)+(v-1),M=(s+1)*y+(v-1),A=(s+1)*y+v,L=(s+1)*(y-1)+v;g.push(R,M,L),g.push(M,A,L)}}function T(){for(let y=0;y<=t;y++)for(let v=0;v<=s;v++)c.x=y/t,c.y=v/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ll(new Lr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class qf extends Rn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new We(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Lt extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ja,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wn extends Lt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Yf extends Rn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new We(16777215),this.specular=new We(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ja,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jf extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $f extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const as={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Zf{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Kf=new Zf;class Ls{constructor(e){this.manager=e!==void 0?e:Kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ls.DEFAULT_MATERIAL_NAME="__DEFAULT";const e0={};class Jf extends Error{constructor(e,t){super(e),this.response=t}}class Qf extends Ls{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=as.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(e0[e]!==void 0){e0[e].push({onLoad:t,onProgress:i,onError:s});return}e0[e]=[],e0[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=e0[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let _=0;const m=new ReadableStream({start(d){T();function T(){u.read().then(({done:y,value:v})=>{if(y)d.close();else{_+=v.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let M=0,A=h.length;M<A;M++){const L=h[M];L.onProgress&&L.onProgress(R)}d.enqueue(v),T()}},y=>{d.error(y)})}}});return new Response(m)}else throw new Jf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{as.add(`file:${e}`,c);const h=e0[e];delete e0[e];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=e0[e];if(h===void 0)throw this.manager.itemError(e),c;delete e0[e];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const vi=new WeakMap;class ep extends Ls{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=as.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=vi.get(o);u===void 0&&(u=[],vi.set(o,u)),u.push({onLoad:t,onError:s})}return o}const a=xs("img");function l(){h(),t&&t(this);const u=vi.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onLoad&&p.onLoad(this)}vi.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),as.remove(`image:${e}`);const f=vi.get(this)||[];for(let p=0;p<f.length;p++){const g=f[p];g.onError&&g.onError(u)}vi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),as.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class tp extends Ls{constructor(e){super(e)}load(e,t,i,s){const r=new Jt,o=new ep(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Xh extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class np extends Xh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Co=new yt,Sc=new P,Mc=new P;class ip{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new il,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Sc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sc),Mc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mc),t.updateMatrixWorld(),Co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Co,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qh extends Rh{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sp extends ip{constructor(){super(new qh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yh extends Xh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new sp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rp extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ec=new yt;class op{constructor(e,t,i=0,s=1/0){this.ray=new Ps(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new tl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ec.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ec),this}intersectObject(e,t=!0,i=[]){return La(e,this,i,t),i.sort(bc),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)La(e[s],this,i,t);return i.sort(bc),i}}function bc(n,e){return n.distance-e.distance}function La(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)La(r[o],e,t,!0)}}class Tc{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ap extends Aa{constructor(e=10,t=10,i=4473924,s=8947848){i=new We(i),s=new We(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,p=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=f===r?i:s;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const h=new kt;h.setAttribute("position",new ut(l,3)),h.setAttribute("color",new ut(c,3));const u=new ss({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class lp extends Z0{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function wc(n,e,t,i){const s=cp(i);switch(t){case vh:return n*e;case yh:return n*e/s.components*s.byteLength;case $a:return n*e/s.components*s.byteLength;case Sh:return n*e*2/s.components*s.byteLength;case Za:return n*e*2/s.components*s.byteLength;case xh:return n*e*3/s.components*s.byteLength;case Un:return n*e*4/s.components*s.byteLength;case Ka:return n*e*4/s.components*s.byteLength;case pr:case mr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gr:case _r:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qo:case ta:return Math.max(n,16)*Math.max(e,8)/4;case Jo:case ea:return Math.max(n,8)*Math.max(e,8)/2;case na:case ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case aa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case la:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ca:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ha:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ua:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case da:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case fa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case pa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ma:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ga:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case _a:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case va:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case xa:case ya:case Sa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ma:case Ea:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ba:case Ta:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cp(n){switch(n){case Xn:case ph:return{byteLength:1,components:1};case ps:case mh:case Cs:return{byteLength:2,components:1};case Ya:case ja:return{byteLength:2,components:4};case X0:case qa:case s0:return{byteLength:4,components:1};case gh:case _h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wa);function jh(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function hp(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_p=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ep=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Up=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Np=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Op=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,i1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,s1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,c1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,h1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,u1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,d1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,y1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,A1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,R1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,P1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,U1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,k1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,j1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Z1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,J1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,im=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,um=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_m=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Om=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,km=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:up,alphahash_pars_fragment:dp,alphamap_fragment:fp,alphamap_pars_fragment:pp,alphatest_fragment:mp,alphatest_pars_fragment:gp,aomap_fragment:_p,aomap_pars_fragment:vp,batching_pars_vertex:xp,batching_vertex:yp,begin_vertex:Sp,beginnormal_vertex:Mp,bsdfs:Ep,iridescence_fragment:bp,bumpmap_pars_fragment:Tp,clipping_planes_fragment:wp,clipping_planes_pars_fragment:Ap,clipping_planes_pars_vertex:Cp,clipping_planes_vertex:Rp,color_fragment:Pp,color_pars_fragment:Lp,color_pars_vertex:Dp,color_vertex:Ip,common:Up,cube_uv_reflection_fragment:Np,defaultnormal_vertex:Fp,displacementmap_pars_vertex:Op,displacementmap_vertex:Bp,emissivemap_fragment:zp,emissivemap_pars_fragment:kp,colorspace_fragment:Hp,colorspace_pars_fragment:Vp,envmap_fragment:Gp,envmap_common_pars_fragment:Wp,envmap_pars_fragment:Xp,envmap_pars_vertex:qp,envmap_physical_pars_fragment:i1,envmap_vertex:Yp,fog_vertex:jp,fog_pars_vertex:$p,fog_fragment:Zp,fog_pars_fragment:Kp,gradientmap_pars_fragment:Jp,lightmap_pars_fragment:Qp,lights_lambert_fragment:e1,lights_lambert_pars_fragment:t1,lights_pars_begin:n1,lights_toon_fragment:s1,lights_toon_pars_fragment:r1,lights_phong_fragment:o1,lights_phong_pars_fragment:a1,lights_physical_fragment:l1,lights_physical_pars_fragment:c1,lights_fragment_begin:h1,lights_fragment_maps:u1,lights_fragment_end:d1,logdepthbuf_fragment:f1,logdepthbuf_pars_fragment:p1,logdepthbuf_pars_vertex:m1,logdepthbuf_vertex:g1,map_fragment:_1,map_pars_fragment:v1,map_particle_fragment:x1,map_particle_pars_fragment:y1,metalnessmap_fragment:S1,metalnessmap_pars_fragment:M1,morphinstance_vertex:E1,morphcolor_vertex:b1,morphnormal_vertex:T1,morphtarget_pars_vertex:w1,morphtarget_vertex:A1,normal_fragment_begin:C1,normal_fragment_maps:R1,normal_pars_fragment:P1,normal_pars_vertex:L1,normal_vertex:D1,normalmap_pars_fragment:I1,clearcoat_normal_fragment_begin:U1,clearcoat_normal_fragment_maps:N1,clearcoat_pars_fragment:F1,iridescence_pars_fragment:O1,opaque_fragment:B1,packing:z1,premultiplied_alpha_fragment:k1,project_vertex:H1,dithering_fragment:V1,dithering_pars_fragment:G1,roughnessmap_fragment:W1,roughnessmap_pars_fragment:X1,shadowmap_pars_fragment:q1,shadowmap_pars_vertex:Y1,shadowmap_vertex:j1,shadowmask_pars_fragment:$1,skinbase_vertex:Z1,skinning_pars_vertex:K1,skinning_vertex:J1,skinnormal_vertex:Q1,specularmap_fragment:em,specularmap_pars_fragment:tm,tonemapping_fragment:nm,tonemapping_pars_fragment:im,transmission_fragment:sm,transmission_pars_fragment:rm,uv_pars_fragment:om,uv_pars_vertex:am,uv_vertex:lm,worldpos_vertex:cm,background_vert:hm,background_frag:um,backgroundCube_vert:dm,backgroundCube_frag:fm,cube_vert:pm,cube_frag:mm,depth_vert:gm,depth_frag:_m,distanceRGBA_vert:vm,distanceRGBA_frag:xm,equirect_vert:ym,equirect_frag:Sm,linedashed_vert:Mm,linedashed_frag:Em,meshbasic_vert:bm,meshbasic_frag:Tm,meshlambert_vert:wm,meshlambert_frag:Am,meshmatcap_vert:Cm,meshmatcap_frag:Rm,meshnormal_vert:Pm,meshnormal_frag:Lm,meshphong_vert:Dm,meshphong_frag:Im,meshphysical_vert:Um,meshphysical_frag:Nm,meshtoon_vert:Fm,meshtoon_frag:Om,points_vert:Bm,points_frag:zm,shadow_vert:km,shadow_frag:Hm,sprite_vert:Vm,sprite_frag:Gm},_e={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},zn={basic:{uniforms:nn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:nn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new We(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:nn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:nn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:nn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new We(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:nn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:nn([_e.points,_e.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:nn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:nn([_e.common,_e.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:nn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:nn([_e.sprite,_e.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:nn([_e.common,_e.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:nn([_e.lights,_e.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};zn.physical={uniforms:nn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const cr={r:0,b:0,g:0},L0=new un,Wm=new yt;function Xm(n,e,t,i,s,r,o){const a=new We(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const R=g(y);R===null?d(a,l):R&&R.isColor&&(d(R,1),v=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,v){const R=g(v);R&&(R.isCubeTexture||R.mapping===kr)?(h===void 0&&(h=new qe(new K0(1,1,1),new E0({name:"BackgroundCubeMaterial",uniforms:Di(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),L0.copy(v.backgroundRotation),L0.x*=-1,L0.y*=-1,L0.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(L0.y*=-1,L0.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Wm.makeRotationFromEuler(L0)),h.material.toneMapped=ft.getTransfer(R.colorSpace)!==vt,(u!==R||f!==R.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=R,f=R.version,p=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new qe(new J0(2,2),new E0({name:"BackgroundMaterial",uniforms:Di(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:M0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ft.getTransfer(R.colorSpace)!==vt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||f!==R.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=R,f=R.version,p=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,v){y.getRGB(cr,Ch(n)),i.buffers.color.setClear(cr.r,cr.g,cr.b,v,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:_,addToRenderList:m,dispose:T}}function qm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(b,D,O,z,X){let V=!1;const Y=u(z,O,D);r!==Y&&(r=Y,c(r.object)),V=p(b,z,O,X),V&&g(b,z,O,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(b,D,O,z),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,D,O){const z=O.wireframe===!0;let X=i[b.id];X===void 0&&(X={},i[b.id]=X);let V=X[D.id];V===void 0&&(V={},X[D.id]=V);let Y=V[z];return Y===void 0&&(Y=f(l()),V[z]=Y),Y}function f(b){const D=[],O=[],z=[];for(let X=0;X<t;X++)D[X]=0,O[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:z,object:b,attributes:{},index:null}}function p(b,D,O,z){const X=r.attributes,V=D.attributes;let Y=0;const Q=O.getAttributes();for(const W in Q)if(Q[W].location>=0){const ve=X[W];let se=V[W];if(se===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),ve===void 0||ve.attribute!==se||se&&ve.data!==se.data)return!0;Y++}return r.attributesNum!==Y||r.index!==z}function g(b,D,O,z){const X={},V=D.attributes;let Y=0;const Q=O.getAttributes();for(const W in Q)if(Q[W].location>=0){let ve=V[W];ve===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(ve=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(ve=b.instanceColor));const se={};se.attribute=ve,ve&&ve.data&&(se.data=ve.data),X[W]=se,Y++}r.attributes=X,r.attributesNum=Y,r.index=z}function _(){const b=r.newAttributes;for(let D=0,O=b.length;D<O;D++)b[D]=0}function m(b){d(b,0)}function d(b,D){const O=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;O[b]=1,z[b]===0&&(n.enableVertexAttribArray(b),z[b]=1),X[b]!==D&&(n.vertexAttribDivisor(b,D),X[b]=D)}function T(){const b=r.newAttributes,D=r.enabledAttributes;for(let O=0,z=D.length;O<z;O++)D[O]!==b[O]&&(n.disableVertexAttribArray(O),D[O]=0)}function y(b,D,O,z,X,V,Y){Y===!0?n.vertexAttribIPointer(b,D,O,X,V):n.vertexAttribPointer(b,D,O,z,X,V)}function v(b,D,O,z){_();const X=z.attributes,V=O.getAttributes(),Y=D.defaultAttributeValues;for(const Q in V){const W=V[Q];if(W.location>=0){let ue=X[Q];if(ue===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor)),ue!==void 0){const ve=ue.normalized,se=ue.itemSize,De=e.get(ue);if(De===void 0)continue;const Je=De.buffer,ot=De.type,je=De.bytesPerElement,j=ot===n.INT||ot===n.UNSIGNED_INT||ue.gpuType===qa;if(ue.isInterleavedBufferAttribute){const K=ue.data,ge=K.stride,be=ue.offset;if(K.isInstancedInterleavedBuffer){for(let Me=0;Me<W.locationSize;Me++)d(W.location+Me,K.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Me=0;Me<W.locationSize;Me++)m(W.location+Me);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let Me=0;Me<W.locationSize;Me++)y(W.location+Me,se/W.locationSize,ot,ve,ge*je,(be+se/W.locationSize*Me)*je,j)}else{if(ue.isInstancedBufferAttribute){for(let K=0;K<W.locationSize;K++)d(W.location+K,ue.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let K=0;K<W.locationSize;K++)m(W.location+K);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let K=0;K<W.locationSize;K++)y(W.location+K,se/W.locationSize,ot,ve,se*je,se/W.locationSize*K*je,j)}}else if(Y!==void 0){const ve=Y[Q];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(W.location,ve);break;case 3:n.vertexAttrib3fv(W.location,ve);break;case 4:n.vertexAttrib4fv(W.location,ve);break;default:n.vertexAttrib1fv(W.location,ve)}}}}T()}function R(){L();for(const b in i){const D=i[b];for(const O in D){const z=D[O];for(const X in z)h(z[X].object),delete z[X];delete D[O]}delete i[b]}}function M(b){if(i[b.id]===void 0)return;const D=i[b.id];for(const O in D){const z=D[O];for(const X in z)h(z[X].object),delete z[X];delete D[O]}delete i[b.id]}function A(b){for(const D in i){const O=i[D];if(O[b.id]===void 0)continue;const z=O[b.id];for(const X in z)h(z[X].object),delete z[X];delete O[b.id]}}function L(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:M,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function Ym(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}function l(c,h,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jm(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Un&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const L=A===Cs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Xn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==s0&&!L)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,M=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:R,maxSamples:M}}function $m(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new _0,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const T=r?0:i,y=T*4;let v=d.clippingState||null;l.value=v,v=h(g,f,y,p);for(let R=0;R!==y;++R)v[R]=t[R];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,v=p;y!==_;++y,v+=4)o.copy(u[y]).applyMatrix4(T,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Zm(n){let e=new WeakMap;function t(o,a){return a===$o?o.mapping=Ri:a===Zo&&(o.mapping=Pi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===$o||a===Zo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new of(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ei=4,Ac=[.125,.215,.35,.446,.526,.582],k0=20,Ro=new qh,Cc=new We;let Po=null,Lo=0,Do=0,Io=!1;const U0=(1+Math.sqrt(5))/2,xi=1/U0,Rc=[new P(-U0,xi,0),new P(U0,xi,0),new P(-xi,0,U0),new P(xi,0,U0),new P(0,U0,-xi),new P(0,U0,xi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Km=new P;class Pc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=Km}=r;Po=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Po,Lo,Do),this._renderer.xr.enabled=Io,e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Po=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Cs,format:Un,colorSpace:Li,depthBuffer:!1},s=Lc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jm(r)),this._blurMaterial=Qm(r,e,t)}return s}_compileMaterial(e){const t=new qe(this._lodPlanes[0],e);this._renderer.compile(t,Ro)}_sceneToCubeUV(e,t,i,s,r){const l=new bn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Cc),u.toneMapping=S0,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new nl({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),m=new qe(new K0,_);let d=!1;const T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,d=!0):(_.color.copy(Cc),d=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));const R=this._cubeSize;hr(s,v*R,y>2?R:0,R,R),u.setRenderTarget(s),d&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ri||e.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new qe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;hr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ro)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Rc[(s-r-1)%Rc.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new qe(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*k0-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):k0;m>k0&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${k0}`);const d=[];let T=0;for(let A=0;A<k0;++A){const L=A/_,E=Math.exp(-L*L/2);d.push(E),A===0?T+=E:A<m&&(T+=2*E)}for(let A=0;A<d.length;A++)d[A]=d[A]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const v=this._sizeLods[s],R=3*v*(s>y-Ei?s-y+Ei:0),M=4*(this._cubeSize-v);hr(t,R,M,3*v,2*v),l.setRenderTarget(t),l.render(u,Ro)}}function Jm(n){const e=[],t=[],i=[];let s=n;const r=n-Ei+1+Ac.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ei?l=Ac[o-n+Ei-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,T=new Float32Array(_*g*p),y=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let M=0;M<p;M++){const A=M%3*2/3-1,L=M>2?0:-1,E=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];T.set(E,_*g*M),y.set(f,m*g*M);const b=[M,M,M,M,M,M];v.set(b,d*g*M)}const R=new kt;R.setAttribute("position",new Fn(T,_)),R.setAttribute("uv",new Fn(y,m)),R.setAttribute("faceIndex",new Fn(v,d)),e.push(R),s>Ei&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Lc(n,e,t){const i=new Y0(n,e,t);return i.texture.mapping=kr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Qm(n,e,t){const i=new Float32Array(k0),s=new P(0,1,0);return new E0({name:"SphericalGaussianBlur",defines:{n:k0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:y0,depthTest:!1,depthWrite:!1})}function Dc(){return new E0({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:y0,depthTest:!1,depthWrite:!1})}function Ic(){return new E0({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:y0,depthTest:!1,depthWrite:!1})}function cl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function e2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===$o||l===Zo,h=l===Ri||l===Pi;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Pc(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Pc(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function t2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ys("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function n2(n,e,t,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let y=0,v=T.length;y<v;y+=3){const R=T[y+0],M=T[y+1],A=T[y+2];f.push(R,M,M,A,A,R)}}else if(g!==void 0){const T=g.array;_=g.version;for(let y=0,v=T.length/3-1;y<v;y+=3){const R=y+0,M=y+1,A=y+2;f.push(R,M,M,A,A,R)}}else return;const m=new(Eh(f)?Ah:wh)(f,1);m.version=_;const d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function i2(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),t.update(p,i,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function u(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,_,0,g);let d=0;for(let T=0;T<g;T++)d+=p[T]*_[T];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function s2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function r2(n,e,t){const i=new WeakMap,s=new Dt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let b=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var p=b;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let R=a.attributes.position.count*v,M=1;R>e.maxTextureSize&&(M=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*M*4*u),L=new bh(A,R,M,u);L.type=s0,L.needsUpdate=!0;const E=v*4;for(let D=0;D<u;D++){const O=d[D],z=T[D],X=y[D],V=R*M*4*D;for(let Y=0;Y<O.count;Y++){const Q=Y*E;g===!0&&(s.fromBufferAttribute(O,Y),A[V+Q+0]=s.x,A[V+Q+1]=s.y,A[V+Q+2]=s.z,A[V+Q+3]=0),_===!0&&(s.fromBufferAttribute(z,Y),A[V+Q+4]=s.x,A[V+Q+5]=s.y,A[V+Q+6]=s.z,A[V+Q+7]=0),m===!0&&(s.fromBufferAttribute(X,Y),A[V+Q+8]=s.x,A[V+Q+9]=s.y,A[V+Q+10]=s.z,A[V+Q+11]=X.itemSize===4?s.w:1)}}f={count:u,texture:L,size:new ie(R,M)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function o2(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const $h=new Jt,Uc=new Ih(1,1),Zh=new bh,Kh=new Vd,Jh=new Ph,Nc=[],Fc=[],Oc=new Float32Array(16),Bc=new Float32Array(9),zc=new Float32Array(4);function Oi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Nc[s];if(r===void 0&&(r=new Float32Array(s),Nc[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Gr(n,e){let t=Fc[e];t===void 0&&(t=new Int32Array(e),Fc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function a2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function l2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function c2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function h2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function u2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;zc.set(i),n.uniformMatrix2fv(this.addr,!1,zc),Vt(t,i)}}function d2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;Bc.set(i),n.uniformMatrix3fv(this.addr,!1,Bc),Vt(t,i)}}function f2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;Oc.set(i),n.uniformMatrix4fv(this.addr,!1,Oc),Vt(t,i)}}function p2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function m2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function g2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function _2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function v2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function x2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function y2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function S2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function M2(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Uc.compareFunction=Mh,r=Uc):r=$h,t.setTexture2D(e||r,s)}function E2(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Kh,s)}function b2(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Jh,s)}function T2(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Zh,s)}function w2(n){switch(n){case 5126:return a2;case 35664:return l2;case 35665:return c2;case 35666:return h2;case 35674:return u2;case 35675:return d2;case 35676:return f2;case 5124:case 35670:return p2;case 35667:case 35671:return m2;case 35668:case 35672:return g2;case 35669:case 35673:return _2;case 5125:return v2;case 36294:return x2;case 36295:return y2;case 36296:return S2;case 35678:case 36198:case 36298:case 36306:case 35682:return M2;case 35679:case 36299:case 36307:return E2;case 35680:case 36300:case 36308:case 36293:return b2;case 36289:case 36303:case 36311:case 36292:return T2}}function A2(n,e){n.uniform1fv(this.addr,e)}function C2(n,e){const t=Oi(e,this.size,2);n.uniform2fv(this.addr,t)}function R2(n,e){const t=Oi(e,this.size,3);n.uniform3fv(this.addr,t)}function P2(n,e){const t=Oi(e,this.size,4);n.uniform4fv(this.addr,t)}function L2(n,e){const t=Oi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function D2(n,e){const t=Oi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function I2(n,e){const t=Oi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function U2(n,e){n.uniform1iv(this.addr,e)}function N2(n,e){n.uniform2iv(this.addr,e)}function F2(n,e){n.uniform3iv(this.addr,e)}function O2(n,e){n.uniform4iv(this.addr,e)}function B2(n,e){n.uniform1uiv(this.addr,e)}function z2(n,e){n.uniform2uiv(this.addr,e)}function k2(n,e){n.uniform3uiv(this.addr,e)}function H2(n,e){n.uniform4uiv(this.addr,e)}function V2(n,e,t){const i=this.cache,s=e.length,r=Gr(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||$h,r[o])}function G2(n,e,t){const i=this.cache,s=e.length,r=Gr(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Kh,r[o])}function W2(n,e,t){const i=this.cache,s=e.length,r=Gr(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Jh,r[o])}function X2(n,e,t){const i=this.cache,s=e.length,r=Gr(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Zh,r[o])}function q2(n){switch(n){case 5126:return A2;case 35664:return C2;case 35665:return R2;case 35666:return P2;case 35674:return L2;case 35675:return D2;case 35676:return I2;case 5124:case 35670:return U2;case 35667:case 35671:return N2;case 35668:case 35672:return F2;case 35669:case 35673:return O2;case 5125:return B2;case 36294:return z2;case 36295:return k2;case 36296:return H2;case 35678:case 36198:case 36298:case 36306:case 35682:return V2;case 35679:case 36299:case 36307:return G2;case 35680:case 36300:case 36308:case 36293:return W2;case 36289:case 36303:case 36311:case 36292:return X2}}class Y2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=w2(t.type)}}class j2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=q2(t.type)}}class $2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Uo=/(\w+)(\])?(\[|\.)?/g;function kc(n,e){n.seq.push(e),n.map[e.id]=e}function Z2(n,e,t){const i=n.name,s=i.length;for(Uo.lastIndex=0;;){const r=Uo.exec(i),o=Uo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){kc(t,c===void 0?new Y2(a,n,e):new j2(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new $2(a),kc(t,u)),t=u}}}class vr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Z2(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Hc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const K2=37297;let J2=0;function Q2(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Vc=new Qe;function eg(n){ft._getMatrix(Vc,ft.workingColorSpace,n);const e=`mat3( ${Vc.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(n)){case wr:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Gc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Q2(n.getShaderSource(e),a)}else return r}function tg(n,e){const t=eg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ng(n,e){let t;switch(e){case nd:t="Linear";break;case id:t="Reinhard";break;case sd:t="Cineon";break;case dh:t="ACESFilmic";break;case od:t="AgX";break;case ad:t="Neutral";break;case rd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ur=new P;function ig(){ft.getLuminanceCoefficients(ur);const n=ur.x.toFixed(4),e=ur.y.toFixed(4),t=ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zi).join(`
`)}function rg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function og(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Zi(n){return n!==""}function Wc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ag=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(n){return n.replace(ag,cg)}const lg=new Map;function cg(n,e){let t=it[e];if(t===void 0){const i=lg.get(e);if(i!==void 0)t=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Da(t)}const hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(n){return n.replace(hg,ug)}function ug(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===uh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===t0&&(e="SHADOWMAP_TYPE_VSM"),e}function fg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ri:case Pi:e="ENVMAP_TYPE_CUBE";break;case kr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pg(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Pi&&(e="ENVMAP_MODE_REFRACTION"),e}function mg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xa:e="ENVMAP_BLENDING_MULTIPLY";break;case ed:e="ENVMAP_BLENDING_MIX";break;case td:e="ENVMAP_BLENDING_ADD";break}return e}function gg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function _g(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=dg(t),c=fg(t),h=pg(t),u=mg(t),f=gg(t),p=sg(t),g=rg(r),_=s.createProgram();let m,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zi).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zi).join(`
`),d.length>0&&(d+=`
`)):(m=[Yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),d=[Yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==S0?"#define TONE_MAPPING":"",t.toneMapping!==S0?it.tonemapping_pars_fragment:"",t.toneMapping!==S0?ng("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,tg("linearToOutputTexel",t.outputColorSpace),ig(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),o=Da(o),o=Wc(o,t),o=Xc(o,t),a=Da(a),a=Wc(a,t),a=Xc(a,t),o=qc(o),a=qc(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=T+m+o,v=T+d+a,R=Hc(s,s.VERTEX_SHADER,y),M=Hc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,R),s.attachShader(_,M),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(D){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(_)||"",z=s.getShaderInfoLog(R)||"",X=s.getShaderInfoLog(M)||"",V=O.trim(),Y=z.trim(),Q=X.trim();let W=!0,ue=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,R,M);else{const ve=Gc(s,R,"vertex"),se=Gc(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+ve+`
`+se)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(Y===""||Q==="")&&(ue=!1);ue&&(D.diagnostics={runnable:W,programLog:V,vertexShader:{log:Y,prefix:m},fragmentShader:{log:Q,prefix:d}})}s.deleteShader(R),s.deleteShader(M),L=new vr(s,_),E=og(s,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,K2)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=J2++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=M,this}let vg=0;class xg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new yg(e),t.set(e,i)),i}}class yg{constructor(e){this.id=vg++,this.code=e,this.usedTimes=0}}function Sg(n,e,t,i,s,r,o){const a=new tl,l=new xg,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,b,D,O,z){const X=O.fog,V=z.geometry,Y=E.isMeshStandardMaterial?O.environment:null,Q=(E.isMeshStandardMaterial?t:e).get(E.envMap||Y),W=Q&&Q.mapping===kr?Q.image.height:null,ue=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ve=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,se=ve!==void 0?ve.length:0;let De=0;V.morphAttributes.position!==void 0&&(De=1),V.morphAttributes.normal!==void 0&&(De=2),V.morphAttributes.color!==void 0&&(De=3);let Je,ot,je,j;if(ue){const mt=zn[ue];Je=mt.vertexShader,ot=mt.fragmentShader}else Je=E.vertexShader,ot=E.fragmentShader,l.update(E),je=l.getVertexShaderID(E),j=l.getFragmentShaderID(E);const K=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),be=z.isInstancedMesh===!0,Me=z.isBatchedMesh===!0,Xe=!!E.map,et=!!E.matcap,C=!!Q,ee=!!E.aoMap,J=!!E.lightMap,$=!!E.bumpMap,Z=!!E.normalMap,fe=!!E.displacementMap,re=!!E.emissiveMap,pe=!!E.metalnessMap,Ze=!!E.roughnessMap,Ye=E.anisotropy>0,w=E.clearcoat>0,x=E.dispersion>0,B=E.iridescence>0,G=E.sheen>0,ne=E.transmission>0,q=Ye&&!!E.anisotropyMap,Ie=w&&!!E.clearcoatMap,he=w&&!!E.clearcoatNormalMap,Re=w&&!!E.clearcoatRoughnessMap,Pe=B&&!!E.iridescenceMap,oe=B&&!!E.iridescenceThicknessMap,Se=G&&!!E.sheenColorMap,He=G&&!!E.sheenRoughnessMap,Ue=!!E.specularMap,xe=!!E.specularColorMap,tt=!!E.specularIntensityMap,U=ne&&!!E.transmissionMap,ce=ne&&!!E.thicknessMap,me=!!E.gradientMap,we=!!E.alphaMap,ae=E.alphaTest>0,te=!!E.alphaHash,Le=!!E.extensions;let Ke=S0;E.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ke=n.toneMapping);const Mt={shaderID:ue,shaderType:E.type,shaderName:E.name,vertexShader:Je,fragmentShader:ot,defines:E.defines,customVertexShaderID:je,customFragmentShaderID:j,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Me,batchingColor:Me&&z._colorsTexture!==null,instancing:be,instancingColor:be&&z.instanceColor!==null,instancingMorph:be&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Li,alphaToCoverage:!!E.alphaToCoverage,map:Xe,matcap:et,envMap:C,envMapMode:C&&Q.mapping,envMapCubeUVHeight:W,aoMap:ee,lightMap:J,bumpMap:$,normalMap:Z,displacementMap:f&&fe,emissiveMap:re,normalMapObjectSpace:Z&&E.normalMapType===ud,normalMapTangentSpace:Z&&E.normalMapType===Ja,metalnessMap:pe,roughnessMap:Ze,anisotropy:Ye,anisotropyMap:q,clearcoat:w,clearcoatMap:Ie,clearcoatNormalMap:he,clearcoatRoughnessMap:Re,dispersion:x,iridescence:B,iridescenceMap:Pe,iridescenceThicknessMap:oe,sheen:G,sheenColorMap:Se,sheenRoughnessMap:He,specularMap:Ue,specularColorMap:xe,specularIntensityMap:tt,transmission:ne,transmissionMap:U,thicknessMap:ce,gradientMap:me,opaque:E.transparent===!1&&E.blending===G0&&E.alphaToCoverage===!1,alphaMap:we,alphaTest:ae,alphaHash:te,combine:E.combine,mapUv:Xe&&_(E.map.channel),aoMapUv:ee&&_(E.aoMap.channel),lightMapUv:J&&_(E.lightMap.channel),bumpMapUv:$&&_(E.bumpMap.channel),normalMapUv:Z&&_(E.normalMap.channel),displacementMapUv:fe&&_(E.displacementMap.channel),emissiveMapUv:re&&_(E.emissiveMap.channel),metalnessMapUv:pe&&_(E.metalnessMap.channel),roughnessMapUv:Ze&&_(E.roughnessMap.channel),anisotropyMapUv:q&&_(E.anisotropyMap.channel),clearcoatMapUv:Ie&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:He&&_(E.sheenRoughnessMap.channel),specularMapUv:Ue&&_(E.specularMap.channel),specularColorMapUv:xe&&_(E.specularColorMap.channel),specularIntensityMapUv:tt&&_(E.specularIntensityMap.channel),transmissionMapUv:U&&_(E.transmissionMap.channel),thicknessMapUv:ce&&_(E.thicknessMap.channel),alphaMapUv:we&&_(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Z||Ye),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!V.attributes.uv&&(Xe||we),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ge,skinning:z.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:De,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Xe&&E.map.isVideoTexture===!0&&ft.getTransfer(E.map.colorSpace)===vt,decodeVideoTextureEmissive:re&&E.emissiveMap.isVideoTexture===!0&&ft.getTransfer(E.emissiveMap.colorSpace)===vt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===i0,flipSided:E.side===hn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Le&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&E.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function d(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)b.push(D),b.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(T(b,E),y(b,E),b.push(n.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function T(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function y(E,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const b=g[E.type];let D;if(b){const O=zn[b];D=tf.clone(O.uniforms)}else D=E.uniforms;return D}function R(E,b){let D;for(let O=0,z=h.length;O<z;O++){const X=h[O];if(X.cacheKey===b){D=X,++D.usedTimes;break}}return D===void 0&&(D=new _g(n,b,E,r),h.push(D)),D}function M(E){if(--E.usedTimes===0){const b=h.indexOf(E);h[b]=h[h.length-1],h.pop(),E.destroy()}}function A(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:R,releaseProgram:M,releaseShaderCache:A,programs:h,dispose:L}}function Mg(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Eg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function $c(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,p,g,_,m){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),e++,d}function a(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||Eg),i.length>1&&i.sort(f||jc),s.length>1&&s.sort(f||jc)}function h(){for(let u=e,f=n.length;u<f;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function bg(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new $c,n.set(i,[o])):s>=r.length?(o=new $c,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Tg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new We};break;case"SpotLight":t={position:new P,direction:new P,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function wg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ag=0;function Cg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Rg(n){const e=new Tg,t=wg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const s=new P,r=new yt,o=new yt;function a(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,T=0,y=0,v=0,R=0,M=0,A=0;c.sort(Cg);for(let E=0,b=c.length;E<b;E++){const D=c[E],O=D.color,z=D.intensity,X=D.distance,V=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=O.r*z,u+=O.g*z,f+=O.b*z;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],z);A++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,W=t.get(D);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=D.shadow.matrix,T++}i.directional[p]=Y,p++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(O).multiplyScalar(z),Y.distance=X,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[_]=Y;const Q=D.shadow;if(D.map&&(i.spotLightMap[R]=D.map,R++,Q.updateMatrices(D),D.castShadow&&M++),i.spotLightMatrix[_]=Q.matrix,D.castShadow){const W=t.get(D);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=V,v++}_++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(O).multiplyScalar(z),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=Y,m++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const Q=D.shadow,W=t.get(D);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,W.shadowCameraNear=Q.camera.near,W.shadowCameraFar=Q.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=D.shadow.matrix,y++}i.point[g]=Y,g++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(z),Y.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[d]=Y,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==T||L.numPointShadows!==y||L.numSpotShadows!==v||L.numSpotMaps!==R||L.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+R-M,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=A,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=T,L.numPointShadows=y,L.numSpotShadows=v,L.numSpotMaps=R,L.numLightProbes=A,i.version=Ag++)}function l(c,h){let u=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){const y=c[d];if(y.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Zc(n){const e=new Rg(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Pg(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Zc(n),e.set(s,[a])):r>=o.length?(a=new Zc(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ig(n,e,t){let i=new il;const s=new ie,r=new ie,o=new Dt,a=new jf({depthPacking:hd}),l=new $f,c={},h=t.maxTextureSize,u={[M0]:hn,[hn]:M0,[i0]:i0},f=new E0({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:Lg,fragmentShader:Dg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new qe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hh;let d=this.type;this.render=function(M,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const E=n.getRenderTarget(),b=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),O=n.state;O.setBlending(y0),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=d!==t0&&this.type===t0,X=d===t0&&this.type!==t0;for(let V=0,Y=M.length;V<Y;V++){const Q=M[V],W=Q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ue=W.getFrameExtents();if(s.multiply(ue),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ue.x),s.x=r.x*ue.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ue.y),s.y=r.y*ue.y,W.mapSize.y=r.y)),W.map===null||z===!0||X===!0){const se=this.type!==t0?{minFilter:Nn,magFilter:Nn}:{};W.map!==null&&W.map.dispose(),W.map=new Y0(s.x,s.y,se),W.map.texture.name=Q.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const ve=W.getViewportCount();for(let se=0;se<ve;se++){const De=W.getViewport(se);o.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),O.viewport(o),W.updateMatrices(Q,se),i=W.getFrustum(),v(A,L,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===t0&&T(W,L),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(E,b,D)};function T(M,A){const L=e.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Y0(s.x,s.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(A,null,L,f,_,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(A,null,L,p,_,null)}function y(M,A,L,E){let b=null;const D=L.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)b=D;else if(b=L.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const O=b.uuid,z=A.uuid;let X=c[O];X===void 0&&(X={},c[O]=X);let V=X[z];V===void 0&&(V=b.clone(),X[z]=V,A.addEventListener("dispose",R)),b=V}if(b.visible=A.visible,b.wireframe=A.wireframe,E===t0?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const O=n.properties.get(b);O.light=L}return b}function v(M,A,L,E,b){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===t0)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,M.matrixWorld);const z=e.update(M),X=M.material;if(Array.isArray(X)){const V=z.groups;for(let Y=0,Q=V.length;Y<Q;Y++){const W=V[Y],ue=X[W.materialIndex];if(ue&&ue.visible){const ve=y(M,ue,E,b);M.onBeforeShadow(n,M,A,L,z,ve,W),n.renderBufferDirect(L,null,z,ve,M,W),M.onAfterShadow(n,M,A,L,z,ve,W)}}}else if(X.visible){const V=y(M,X,E,b);M.onBeforeShadow(n,M,A,L,z,V,null),n.renderBufferDirect(L,null,z,V,M,null),M.onAfterShadow(n,M,A,L,z,V,null)}}const O=M.children;for(let z=0,X=O.length;z<X;z++)v(O[z],A,L,E,b)}function R(M){M.target.removeEventListener("dispose",R);for(const L in c){const E=c[L],b=M.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}const Ug={[Vo]:Go,[Wo]:Yo,[Xo]:jo,[Ci]:qo,[Go]:Vo,[Yo]:Wo,[jo]:Xo,[qo]:Ci};function Ng(n,e){function t(){let U=!1;const ce=new Dt;let me=null;const we=new Dt(0,0,0,0);return{setMask:function(ae){me!==ae&&!U&&(n.colorMask(ae,ae,ae,ae),me=ae)},setLocked:function(ae){U=ae},setClear:function(ae,te,Le,Ke,Mt){Mt===!0&&(ae*=Ke,te*=Ke,Le*=Ke),ce.set(ae,te,Le,Ke),we.equals(ce)===!1&&(n.clearColor(ae,te,Le,Ke),we.copy(ce))},reset:function(){U=!1,me=null,we.set(-1,0,0,0)}}}function i(){let U=!1,ce=!1,me=null,we=null,ae=null;return{setReversed:function(te){if(ce!==te){const Le=e.get("EXT_clip_control");te?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ce=te;const Ke=ae;ae=null,this.setClear(Ke)}},getReversed:function(){return ce},setTest:function(te){te?K(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(te){me!==te&&!U&&(n.depthMask(te),me=te)},setFunc:function(te){if(ce&&(te=Ug[te]),we!==te){switch(te){case Vo:n.depthFunc(n.NEVER);break;case Go:n.depthFunc(n.ALWAYS);break;case Wo:n.depthFunc(n.LESS);break;case Ci:n.depthFunc(n.LEQUAL);break;case Xo:n.depthFunc(n.EQUAL);break;case qo:n.depthFunc(n.GEQUAL);break;case Yo:n.depthFunc(n.GREATER);break;case jo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}we=te}},setLocked:function(te){U=te},setClear:function(te){ae!==te&&(ce&&(te=1-te),n.clearDepth(te),ae=te)},reset:function(){U=!1,me=null,we=null,ae=null,ce=!1}}}function s(){let U=!1,ce=null,me=null,we=null,ae=null,te=null,Le=null,Ke=null,Mt=null;return{setTest:function(mt){U||(mt?K(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(mt){ce!==mt&&!U&&(n.stencilMask(mt),ce=mt)},setFunc:function(mt,jn,On){(me!==mt||we!==jn||ae!==On)&&(n.stencilFunc(mt,jn,On),me=mt,we=jn,ae=On)},setOp:function(mt,jn,On){(te!==mt||Le!==jn||Ke!==On)&&(n.stencilOp(mt,jn,On),te=mt,Le=jn,Ke=On)},setLocked:function(mt){U=mt},setClear:function(mt){Mt!==mt&&(n.clearStencil(mt),Mt=mt)},reset:function(){U=!1,ce=null,me=null,we=null,ae=null,te=null,Le=null,Ke=null,Mt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,T=null,y=null,v=null,R=null,M=null,A=new We(0,0,0),L=0,E=!1,b=null,D=null,O=null,z=null,X=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Q=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=Q>=2);let ue=null,ve={};const se=n.getParameter(n.SCISSOR_BOX),De=n.getParameter(n.VIEWPORT),Je=new Dt().fromArray(se),ot=new Dt().fromArray(De);function je(U,ce,me,we){const ae=new Uint8Array(4),te=n.createTexture();n.bindTexture(U,te),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Le=0;Le<me;Le++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,we,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(ce+Le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return te}const j={};j[n.TEXTURE_2D]=je(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(Ci),$(!1),Z(zl),K(n.CULL_FACE),ee(y0);function K(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function ge(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function be(U,ce){return u[U]!==ce?(n.bindFramebuffer(U,ce),u[U]=ce,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ce),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function Me(U,ce){let me=p,we=!1;if(U){me=f.get(ce),me===void 0&&(me=[],f.set(ce,me));const ae=U.textures;if(me.length!==ae.length||me[0]!==n.COLOR_ATTACHMENT0){for(let te=0,Le=ae.length;te<Le;te++)me[te]=n.COLOR_ATTACHMENT0+te;me.length=ae.length,we=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,we=!0);we&&n.drawBuffers(me)}function Xe(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const et={[z0]:n.FUNC_ADD,[Ou]:n.FUNC_SUBTRACT,[Bu]:n.FUNC_REVERSE_SUBTRACT};et[zu]=n.MIN,et[ku]=n.MAX;const C={[Hu]:n.ZERO,[Vu]:n.ONE,[Gu]:n.SRC_COLOR,[ko]:n.SRC_ALPHA,[$u]:n.SRC_ALPHA_SATURATE,[Yu]:n.DST_COLOR,[Xu]:n.DST_ALPHA,[Wu]:n.ONE_MINUS_SRC_COLOR,[Ho]:n.ONE_MINUS_SRC_ALPHA,[ju]:n.ONE_MINUS_DST_COLOR,[qu]:n.ONE_MINUS_DST_ALPHA,[Zu]:n.CONSTANT_COLOR,[Ku]:n.ONE_MINUS_CONSTANT_COLOR,[Ju]:n.CONSTANT_ALPHA,[Qu]:n.ONE_MINUS_CONSTANT_ALPHA};function ee(U,ce,me,we,ae,te,Le,Ke,Mt,mt){if(U===y0){_===!0&&(ge(n.BLEND),_=!1);return}if(_===!1&&(K(n.BLEND),_=!0),U!==Fu){if(U!==m||mt!==E){if((d!==z0||v!==z0)&&(n.blendEquation(n.FUNC_ADD),d=z0,v=z0),mt)switch(U){case G0:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kl:n.blendFunc(n.ONE,n.ONE);break;case Hl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case G0:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,y=null,R=null,M=null,A.set(0,0,0),L=0,m=U,E=mt}return}ae=ae||ce,te=te||me,Le=Le||we,(ce!==d||ae!==v)&&(n.blendEquationSeparate(et[ce],et[ae]),d=ce,v=ae),(me!==T||we!==y||te!==R||Le!==M)&&(n.blendFuncSeparate(C[me],C[we],C[te],C[Le]),T=me,y=we,R=te,M=Le),(Ke.equals(A)===!1||Mt!==L)&&(n.blendColor(Ke.r,Ke.g,Ke.b,Mt),A.copy(Ke),L=Mt),m=U,E=!1}function J(U,ce){U.side===i0?ge(n.CULL_FACE):K(n.CULL_FACE);let me=U.side===hn;ce&&(me=!me),$(me),U.blending===G0&&U.transparent===!1?ee(y0):ee(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const we=U.stencilWrite;a.setTest(we),we&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),re(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(U){b!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),b=U)}function Z(U){U!==Uu?(K(n.CULL_FACE),U!==D&&(U===zl?n.cullFace(n.BACK):U===Nu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),D=U}function fe(U){U!==O&&(Y&&n.lineWidth(U),O=U)}function re(U,ce,me){U?(K(n.POLYGON_OFFSET_FILL),(z!==ce||X!==me)&&(n.polygonOffset(ce,me),z=ce,X=me)):ge(n.POLYGON_OFFSET_FILL)}function pe(U){U?K(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function Ze(U){U===void 0&&(U=n.TEXTURE0+V-1),ue!==U&&(n.activeTexture(U),ue=U)}function Ye(U,ce,me){me===void 0&&(ue===null?me=n.TEXTURE0+V-1:me=ue);let we=ve[me];we===void 0&&(we={type:void 0,texture:void 0},ve[me]=we),(we.type!==U||we.texture!==ce)&&(ue!==me&&(n.activeTexture(me),ue=me),n.bindTexture(U,ce||j[U]),we.type=U,we.texture=ce)}function w(){const U=ve[ue];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(U){Je.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Je.copy(U))}function He(U){ot.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ot.copy(U))}function Ue(U,ce){let me=c.get(ce);me===void 0&&(me=new WeakMap,c.set(ce,me));let we=me.get(U);we===void 0&&(we=n.getUniformBlockIndex(ce,U.name),me.set(U,we))}function xe(U,ce){const we=c.get(ce).get(U);l.get(ce)!==we&&(n.uniformBlockBinding(ce,we,U.__bindingPointIndex),l.set(ce,we))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ue=null,ve={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,T=null,y=null,v=null,R=null,M=null,A=new We(0,0,0),L=0,E=!1,b=null,D=null,O=null,z=null,X=null,Je.set(0,0,n.canvas.width,n.canvas.height),ot.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:ge,bindFramebuffer:be,drawBuffers:Me,useProgram:Xe,setBlending:ee,setMaterial:J,setFlipSided:$,setCullFace:Z,setLineWidth:fe,setPolygonOffset:re,setScissorTest:pe,activeTexture:Ze,bindTexture:Ye,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:B,texImage2D:Pe,texImage3D:oe,updateUBOMapping:Ue,uniformBlockBinding:xe,texStorage2D:he,texStorage3D:Re,texSubImage2D:G,texSubImage3D:ne,compressedTexSubImage2D:q,compressedTexSubImage3D:Ie,scissor:Se,viewport:He,reset:tt}}function Fg(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return p?new OffscreenCanvas(w,x):xs("canvas")}function _(w,x,B){let G=1;const ne=Ye(w);if((ne.width>B||ne.height>B)&&(G=B/Math.max(ne.width,ne.height)),G<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor(G*ne.width),Ie=Math.floor(G*ne.height);u===void 0&&(u=g(q,Ie));const he=x?g(q,Ie):u;return he.width=q,he.height=Ie,he.getContext("2d").drawImage(w,0,0,q,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+q+"x"+Ie+")."),he}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){n.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(w,x,B,G,ne=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=x;if(x===n.RED&&(B===n.FLOAT&&(q=n.R32F),B===n.HALF_FLOAT&&(q=n.R16F),B===n.UNSIGNED_BYTE&&(q=n.R8)),x===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.R8UI),B===n.UNSIGNED_SHORT&&(q=n.R16UI),B===n.UNSIGNED_INT&&(q=n.R32UI),B===n.BYTE&&(q=n.R8I),B===n.SHORT&&(q=n.R16I),B===n.INT&&(q=n.R32I)),x===n.RG&&(B===n.FLOAT&&(q=n.RG32F),B===n.HALF_FLOAT&&(q=n.RG16F),B===n.UNSIGNED_BYTE&&(q=n.RG8)),x===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RG8UI),B===n.UNSIGNED_SHORT&&(q=n.RG16UI),B===n.UNSIGNED_INT&&(q=n.RG32UI),B===n.BYTE&&(q=n.RG8I),B===n.SHORT&&(q=n.RG16I),B===n.INT&&(q=n.RG32I)),x===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGB8UI),B===n.UNSIGNED_SHORT&&(q=n.RGB16UI),B===n.UNSIGNED_INT&&(q=n.RGB32UI),B===n.BYTE&&(q=n.RGB8I),B===n.SHORT&&(q=n.RGB16I),B===n.INT&&(q=n.RGB32I)),x===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),B===n.UNSIGNED_INT&&(q=n.RGBA32UI),B===n.BYTE&&(q=n.RGBA8I),B===n.SHORT&&(q=n.RGBA16I),B===n.INT&&(q=n.RGBA32I)),x===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),x===n.RGBA){const Ie=ne?wr:ft.getTransfer(G);B===n.FLOAT&&(q=n.RGBA32F),B===n.HALF_FLOAT&&(q=n.RGBA16F),B===n.UNSIGNED_BYTE&&(q=Ie===vt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(w,x){let B;return w?x===null||x===X0||x===ms?B=n.DEPTH24_STENCIL8:x===s0?B=n.DEPTH32F_STENCIL8:x===ps&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===X0||x===ms?B=n.DEPTH_COMPONENT24:x===s0?B=n.DEPTH_COMPONENT32F:x===ps&&(B=n.DEPTH_COMPONENT16),B}function R(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Nn&&w.minFilter!==Hn?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function M(w){const x=w.target;x.removeEventListener("dispose",M),L(x),x.isVideoTexture&&h.delete(x)}function A(w){const x=w.target;x.removeEventListener("dispose",A),b(x)}function L(w){const x=i.get(w);if(x.__webglInit===void 0)return;const B=w.source,G=f.get(B);if(G){const ne=G[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&E(w),Object.keys(G).length===0&&f.delete(B)}i.remove(w)}function E(w){const x=i.get(w);n.deleteTexture(x.__webglTexture);const B=w.source,G=f.get(B);delete G[x.__cacheKey],o.memory.textures--}function b(w){const x=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let ne=0;ne<x.__webglFramebuffer[G].length;ne++)n.deleteFramebuffer(x.__webglFramebuffer[G][ne]);else n.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)n.deleteFramebuffer(x.__webglFramebuffer[G]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=w.textures;for(let G=0,ne=B.length;G<ne;G++){const q=i.get(B[G]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(B[G])}i.remove(w)}let D=0;function O(){D=0}function z(){const w=D;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function X(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function V(w,x){const B=i.get(w);if(w.isVideoTexture&&pe(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){const G=w.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(B,w,x);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+x)}function Y(w,x){const B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){j(B,w,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+x)}function Q(w,x){const B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){j(B,w,x);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+x)}function W(w,x){const B=i.get(w);if(w.version>0&&B.__version!==w.version){K(B,w,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+x)}const ue={[fs]:n.REPEAT,[H0]:n.CLAMP_TO_EDGE,[Ko]:n.MIRRORED_REPEAT},ve={[Nn]:n.NEAREST,[ld]:n.NEAREST_MIPMAP_NEAREST,[Ns]:n.NEAREST_MIPMAP_LINEAR,[Hn]:n.LINEAR,[Jr]:n.LINEAR_MIPMAP_NEAREST,[V0]:n.LINEAR_MIPMAP_LINEAR},se={[dd]:n.NEVER,[vd]:n.ALWAYS,[fd]:n.LESS,[Mh]:n.LEQUAL,[pd]:n.EQUAL,[_d]:n.GEQUAL,[md]:n.GREATER,[gd]:n.NOTEQUAL};function De(w,x){if(x.type===s0&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Hn||x.magFilter===Jr||x.magFilter===Ns||x.magFilter===V0||x.minFilter===Hn||x.minFilter===Jr||x.minFilter===Ns||x.minFilter===V0)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ue[x.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ue[x.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ue[x.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,ve[x.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,ve[x.minFilter]),x.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,se[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Nn||x.minFilter!==Ns&&x.minFilter!==V0||x.type===s0&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Je(w,x){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",M));const G=x.source;let ne=f.get(G);ne===void 0&&(ne={},f.set(G,ne));const q=X(x);if(q!==w.__cacheKey){ne[q]===void 0&&(ne[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ne[q].usedTimes++;const Ie=ne[w.__cacheKey];Ie!==void 0&&(ne[w.__cacheKey].usedTimes--,Ie.usedTimes===0&&E(x)),w.__cacheKey=q,w.__webglTexture=ne[q].texture}return B}function ot(w,x,B){return Math.floor(Math.floor(w/B)/x)}function je(w,x,B,G){const q=w.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,B,G,x.data);else{q.sort((oe,Se)=>oe.start-Se.start);let Ie=0;for(let oe=1;oe<q.length;oe++){const Se=q[Ie],He=q[oe],Ue=Se.start+Se.count,xe=ot(He.start,x.width,4),tt=ot(Se.start,x.width,4);He.start<=Ue+1&&xe===tt&&ot(He.start+He.count-1,x.width,4)===xe?Se.count=Math.max(Se.count,He.start+He.count-Se.start):(++Ie,q[Ie]=He)}q.length=Ie+1;const he=n.getParameter(n.UNPACK_ROW_LENGTH),Re=n.getParameter(n.UNPACK_SKIP_PIXELS),Pe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let oe=0,Se=q.length;oe<Se;oe++){const He=q[oe],Ue=Math.floor(He.start/4),xe=Math.ceil(He.count/4),tt=Ue%x.width,U=Math.floor(Ue/x.width),ce=xe,me=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,tt),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,tt,U,ce,me,B,G,x.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),n.pixelStorei(n.UNPACK_SKIP_ROWS,Pe)}}function j(w,x,B){let G=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=n.TEXTURE_3D);const ne=Je(w,x),q=x.source;t.bindTexture(G,w.__webglTexture,n.TEXTURE0+B);const Ie=i.get(q);if(q.version!==Ie.__version||ne===!0){t.activeTexture(n.TEXTURE0+B);const he=ft.getPrimaries(ft.workingColorSpace),Re=x.colorSpace===v0?null:ft.getPrimaries(x.colorSpace),Pe=x.colorSpace===v0||he===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let oe=_(x.image,!1,s.maxTextureSize);oe=Ze(x,oe);const Se=r.convert(x.format,x.colorSpace),He=r.convert(x.type);let Ue=y(x.internalFormat,Se,He,x.colorSpace,x.isVideoTexture);De(G,x);let xe;const tt=x.mipmaps,U=x.isVideoTexture!==!0,ce=Ie.__version===void 0||ne===!0,me=q.dataReady,we=R(x,oe);if(x.isDepthTexture)Ue=v(x.format===_s,x.type),ce&&(U?t.texStorage2D(n.TEXTURE_2D,1,Ue,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Ue,oe.width,oe.height,0,Se,He,null));else if(x.isDataTexture)if(tt.length>0){U&&ce&&t.texStorage2D(n.TEXTURE_2D,we,Ue,tt[0].width,tt[0].height);for(let ae=0,te=tt.length;ae<te;ae++)xe=tt[ae],U?me&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,xe.width,xe.height,Se,He,xe.data):t.texImage2D(n.TEXTURE_2D,ae,Ue,xe.width,xe.height,0,Se,He,xe.data);x.generateMipmaps=!1}else U?(ce&&t.texStorage2D(n.TEXTURE_2D,we,Ue,oe.width,oe.height),me&&je(x,oe,Se,He)):t.texImage2D(n.TEXTURE_2D,0,Ue,oe.width,oe.height,0,Se,He,oe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Ue,tt[0].width,tt[0].height,oe.depth);for(let ae=0,te=tt.length;ae<te;ae++)if(xe=tt[ae],x.format!==Un)if(Se!==null)if(U){if(me)if(x.layerUpdates.size>0){const Le=wc(xe.width,xe.height,x.format,x.type);for(const Ke of x.layerUpdates){const Mt=xe.data.subarray(Ke*Le/xe.data.BYTES_PER_ELEMENT,(Ke+1)*Le/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,Ke,xe.width,xe.height,1,Se,Mt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,oe.depth,Se,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Ue,xe.width,xe.height,oe.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,oe.depth,Se,He,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Ue,xe.width,xe.height,oe.depth,0,Se,He,xe.data)}else{U&&ce&&t.texStorage2D(n.TEXTURE_2D,we,Ue,tt[0].width,tt[0].height);for(let ae=0,te=tt.length;ae<te;ae++)xe=tt[ae],x.format!==Un?Se!==null?U?me&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,xe.width,xe.height,Se,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Ue,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?me&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,xe.width,xe.height,Se,He,xe.data):t.texImage2D(n.TEXTURE_2D,ae,Ue,xe.width,xe.height,0,Se,He,xe.data)}else if(x.isDataArrayTexture)if(U){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Ue,oe.width,oe.height,oe.depth),me)if(x.layerUpdates.size>0){const ae=wc(oe.width,oe.height,x.format,x.type);for(const te of x.layerUpdates){const Le=oe.data.subarray(te*ae/oe.data.BYTES_PER_ELEMENT,(te+1)*ae/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,oe.width,oe.height,1,Se,He,Le)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Se,He,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,oe.width,oe.height,oe.depth,0,Se,He,oe.data);else if(x.isData3DTexture)U?(ce&&t.texStorage3D(n.TEXTURE_3D,we,Ue,oe.width,oe.height,oe.depth),me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Se,He,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,oe.width,oe.height,oe.depth,0,Se,He,oe.data);else if(x.isFramebufferTexture){if(ce)if(U)t.texStorage2D(n.TEXTURE_2D,we,Ue,oe.width,oe.height);else{let ae=oe.width,te=oe.height;for(let Le=0;Le<we;Le++)t.texImage2D(n.TEXTURE_2D,Le,Ue,ae,te,0,Se,He,null),ae>>=1,te>>=1}}else if(tt.length>0){if(U&&ce){const ae=Ye(tt[0]);t.texStorage2D(n.TEXTURE_2D,we,Ue,ae.width,ae.height)}for(let ae=0,te=tt.length;ae<te;ae++)xe=tt[ae],U?me&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Se,He,xe):t.texImage2D(n.TEXTURE_2D,ae,Ue,Se,He,xe);x.generateMipmaps=!1}else if(U){if(ce){const ae=Ye(oe);t.texStorage2D(n.TEXTURE_2D,we,Ue,ae.width,ae.height)}me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,He,oe)}else t.texImage2D(n.TEXTURE_2D,0,Ue,Se,He,oe);m(x)&&d(G),Ie.__version=q.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function K(w,x,B){if(x.image.length!==6)return;const G=Je(w,x),ne=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+B);const q=i.get(ne);if(ne.version!==q.__version||G===!0){t.activeTexture(n.TEXTURE0+B);const Ie=ft.getPrimaries(ft.workingColorSpace),he=x.colorSpace===v0?null:ft.getPrimaries(x.colorSpace),Re=x.colorSpace===v0||Ie===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Pe=x.isCompressedTexture||x.image[0].isCompressedTexture,oe=x.image[0]&&x.image[0].isDataTexture,Se=[];for(let te=0;te<6;te++)!Pe&&!oe?Se[te]=_(x.image[te],!0,s.maxCubemapSize):Se[te]=oe?x.image[te].image:x.image[te],Se[te]=Ze(x,Se[te]);const He=Se[0],Ue=r.convert(x.format,x.colorSpace),xe=r.convert(x.type),tt=y(x.internalFormat,Ue,xe,x.colorSpace),U=x.isVideoTexture!==!0,ce=q.__version===void 0||G===!0,me=ne.dataReady;let we=R(x,He);De(n.TEXTURE_CUBE_MAP,x);let ae;if(Pe){U&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,we,tt,He.width,He.height);for(let te=0;te<6;te++){ae=Se[te].mipmaps;for(let Le=0;Le<ae.length;Le++){const Ke=ae[Le];x.format!==Un?Ue!==null?U?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le,0,0,Ke.width,Ke.height,Ue,Ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le,tt,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le,0,0,Ke.width,Ke.height,Ue,xe,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le,tt,Ke.width,Ke.height,0,Ue,xe,Ke.data)}}}else{if(ae=x.mipmaps,U&&ce){ae.length>0&&we++;const te=Ye(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,we,tt,te.width,te.height)}for(let te=0;te<6;te++)if(oe){U?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Se[te].width,Se[te].height,Ue,xe,Se[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,tt,Se[te].width,Se[te].height,0,Ue,xe,Se[te].data);for(let Le=0;Le<ae.length;Le++){const Mt=ae[Le].image[te].image;U?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le+1,0,0,Mt.width,Mt.height,Ue,xe,Mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le+1,tt,Mt.width,Mt.height,0,Ue,xe,Mt.data)}}else{U?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ue,xe,Se[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,tt,Ue,xe,Se[te]);for(let Le=0;Le<ae.length;Le++){const Ke=ae[Le];U?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le+1,0,0,Ue,xe,Ke.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le+1,tt,Ue,xe,Ke.image[te])}}}m(x)&&d(n.TEXTURE_CUBE_MAP),q.__version=ne.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ge(w,x,B,G,ne,q){const Ie=r.convert(B.format,B.colorSpace),he=r.convert(B.type),Re=y(B.internalFormat,Ie,he,B.colorSpace),Pe=i.get(x),oe=i.get(B);if(oe.__renderTarget=x,!Pe.__hasExternalTextures){const Se=Math.max(1,x.width>>q),He=Math.max(1,x.height>>q);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,q,Re,Se,He,x.depth,0,Ie,he,null):t.texImage2D(ne,q,Re,Se,He,0,Ie,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),re(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,ne,oe.__webglTexture,0,fe(x)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,ne,oe.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(w,x,B){if(n.bindRenderbuffer(n.RENDERBUFFER,w),x.depthBuffer){const G=x.depthTexture,ne=G&&G.isDepthTexture?G.type:null,q=v(x.stencilBuffer,ne),Ie=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=fe(x);re(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,q,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,q,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,q,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,w)}else{const G=x.textures;for(let ne=0;ne<G.length;ne++){const q=G[ne],Ie=r.convert(q.format,q.colorSpace),he=r.convert(q.type),Re=y(q.internalFormat,Ie,he,q.colorSpace),Pe=fe(x);B&&re(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Re,x.width,x.height):re(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,Re,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Re,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Me(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(x.depthTexture);G.__renderTarget=x,(!G.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const ne=G.__webglTexture,q=fe(x);if(x.depthTexture.format===gs)re(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(x.depthTexture.format===_s)re(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Xe(w){const x=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const G=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){const ne=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",ne)};G.addEventListener("dispose",ne),x.__depthDisposeCallback=ne}x.__boundDepthTexture=G}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const G=w.texture.mipmaps;G&&G.length>0?Me(x.__webglFramebuffer[0],w):Me(x.__webglFramebuffer,w)}else if(B){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=n.createRenderbuffer(),be(x.__webglDepthbuffer[G],w,!1);else{const ne=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,q)}}else{const G=w.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),be(x.__webglDepthbuffer,w,!1);else{const ne=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function et(w,x,B){const G=i.get(w);x!==void 0&&ge(G.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Xe(w)}function C(w){const x=w.texture,B=i.get(w),G=i.get(x);w.addEventListener("dispose",A);const ne=w.textures,q=w.isWebGLCubeRenderTarget===!0,Ie=ne.length>1;if(Ie||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=x.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[he]=[];for(let Re=0;Re<x.mipmaps.length;Re++)B.__webglFramebuffer[he][Re]=n.createFramebuffer()}else B.__webglFramebuffer[he]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let he=0;he<x.mipmaps.length;he++)B.__webglFramebuffer[he]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let he=0,Re=ne.length;he<Re;he++){const Pe=i.get(ne[he]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&re(w)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let he=0;he<ne.length;he++){const Re=ne[he];B.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[he]);const Pe=r.convert(Re.format,Re.colorSpace),oe=r.convert(Re.type),Se=y(Re.internalFormat,Pe,oe,Re.colorSpace,w.isXRRenderTarget===!0),He=fe(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,Se,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,B.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),be(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),De(n.TEXTURE_CUBE_MAP,x);for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0)for(let Re=0;Re<x.mipmaps.length;Re++)ge(B.__webglFramebuffer[he][Re],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re);else ge(B.__webglFramebuffer[he],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(x)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let he=0,Re=ne.length;he<Re;he++){const Pe=ne[he],oe=i.get(Pe);let Se=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Se=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,oe.__webglTexture),De(Se,Pe),ge(B.__webglFramebuffer,w,Pe,n.COLOR_ATTACHMENT0+he,Se,0),m(Pe)&&d(Se)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(he=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,G.__webglTexture),De(he,x),x.mipmaps&&x.mipmaps.length>0)for(let Re=0;Re<x.mipmaps.length;Re++)ge(B.__webglFramebuffer[Re],w,x,n.COLOR_ATTACHMENT0,he,Re);else ge(B.__webglFramebuffer,w,x,n.COLOR_ATTACHMENT0,he,0);m(x)&&d(he),t.unbindTexture()}w.depthBuffer&&Xe(w)}function ee(w){const x=w.textures;for(let B=0,G=x.length;B<G;B++){const ne=x[B];if(m(ne)){const q=T(w),Ie=i.get(ne).__webglTexture;t.bindTexture(q,Ie),d(q),t.unbindTexture()}}}const J=[],$=[];function Z(w){if(w.samples>0){if(re(w)===!1){const x=w.textures,B=w.width,G=w.height;let ne=n.COLOR_BUFFER_BIT;const q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=i.get(w),he=x.length>1;if(he)for(let Pe=0;Pe<x.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const Re=w.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Pe=0;Pe<x.length;Pe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Pe]);const oe=i.get(x[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,B,G,0,0,B,G,ne,n.NEAREST),l===!0&&(J.length=0,$.length=0,J.push(n.COLOR_ATTACHMENT0+Pe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(J.push(q),$.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Pe=0;Pe<x.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Pe]);const oe=i.get(x[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function fe(w){return Math.min(s.maxSamples,w.samples)}function re(w){const x=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function pe(w){const x=o.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Ze(w,x){const B=w.colorSpace,G=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Li&&B!==v0&&(ft.getTransfer(B)===vt?(G!==Un||ne!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function Ye(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=W,this.rebindTextures=et,this.setupRenderTarget=C,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=re}function Og(n,e){function t(i,s=v0){let r;const o=ft.getTransfer(s);if(i===Xn)return n.UNSIGNED_BYTE;if(i===Ya)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ja)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_h)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ph)return n.BYTE;if(i===mh)return n.SHORT;if(i===ps)return n.UNSIGNED_SHORT;if(i===qa)return n.INT;if(i===X0)return n.UNSIGNED_INT;if(i===s0)return n.FLOAT;if(i===Cs)return n.HALF_FLOAT;if(i===vh)return n.ALPHA;if(i===xh)return n.RGB;if(i===Un)return n.RGBA;if(i===gs)return n.DEPTH_COMPONENT;if(i===_s)return n.DEPTH_STENCIL;if(i===yh)return n.RED;if(i===$a)return n.RED_INTEGER;if(i===Sh)return n.RG;if(i===Za)return n.RG_INTEGER;if(i===Ka)return n.RGBA_INTEGER;if(i===pr||i===mr||i===gr||i===_r)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jo||i===Qo||i===ea||i===ta)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===na||i===ia||i===sa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===na||i===ia)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===sa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ra||i===oa||i===aa||i===la||i===ca||i===ha||i===ua||i===da||i===fa||i===pa||i===ma||i===ga||i===_a||i===va)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ra)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===oa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===aa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===la)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ca)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ha)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ua)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===da)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ma)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ga)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_a)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===va)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xa||i===ya||i===Sa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===xa)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ma||i===Ea||i===ba||i===Ta)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ma)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ta)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ms?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Uh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new E0({vertexShader:Bg,fragmentShader:zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new J0(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hg extends Z0{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new kg,d={},T=t.getContextAttributes();let y=null,v=null;const R=[],M=[],A=new ie;let L=null;const E=new bn;E.viewport=new Dt;const b=new bn;b.viewport=new Dt;const D=[E,b],O=new rp;let z=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let K=R[j];return K===void 0&&(K=new yo,R[j]=K),K.getTargetRaySpace()},this.getControllerGrip=function(j){let K=R[j];return K===void 0&&(K=new yo,R[j]=K),K.getGripSpace()},this.getHand=function(j){let K=R[j];return K===void 0&&(K=new yo,R[j]=K),K.getHandSpace()};function V(j){const K=M.indexOf(j.inputSource);if(K===-1)return;const ge=R[K];ge!==void 0&&(ge.update(j.inputSource,j.frame,c||o),ge.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",Q);for(let j=0;j<R.length;j++){const K=M[j];K!==null&&(M[j]=null,R[j].disconnect(K))}z=null,X=null,m.reset();for(const j in d)delete d[j];e.setRenderTarget(y),p=null,f=null,u=null,s=null,v=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",Q),T.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,be=null,Me=null;T.depth&&(Me=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=T.stencil?_s:gs,be=T.stencil?ms:X0);const Xe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Xe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Y0(f.textureWidth,f.textureHeight,{format:Un,type:Xn,depthTexture:new Ih(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ge={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Y0(p.framebufferWidth,p.framebufferHeight,{format:Un,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(j){for(let K=0;K<j.removed.length;K++){const ge=j.removed[K],be=M.indexOf(ge);be>=0&&(M[be]=null,R[be].disconnect(ge))}for(let K=0;K<j.added.length;K++){const ge=j.added[K];let be=M.indexOf(ge);if(be===-1){for(let Xe=0;Xe<R.length;Xe++)if(Xe>=M.length){M.push(ge),be=Xe;break}else if(M[Xe]===null){M[Xe]=ge,be=Xe;break}if(be===-1)break}const Me=R[be];Me&&Me.connect(ge)}}const W=new P,ue=new P;function ve(j,K,ge){W.setFromMatrixPosition(K.matrixWorld),ue.setFromMatrixPosition(ge.matrixWorld);const be=W.distanceTo(ue),Me=K.projectionMatrix.elements,Xe=ge.projectionMatrix.elements,et=Me[14]/(Me[10]-1),C=Me[14]/(Me[10]+1),ee=(Me[9]+1)/Me[5],J=(Me[9]-1)/Me[5],$=(Me[8]-1)/Me[0],Z=(Xe[8]+1)/Xe[0],fe=et*$,re=et*Z,pe=be/(-$+Z),Ze=pe*-$;if(K.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ze),j.translateZ(pe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Me[10]===-1)j.projectionMatrix.copy(K.projectionMatrix),j.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Ye=et+pe,w=C+pe,x=fe-Ze,B=re+(be-Ze),G=ee*C/w*Ye,ne=J*C/w*Ye;j.projectionMatrix.makePerspective(x,B,G,ne,Ye,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function se(j,K){K===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(K.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let K=j.near,ge=j.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),O.near=b.near=E.near=K,O.far=b.far=E.far=ge,(z!==O.near||X!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),z=O.near,X=O.far),O.layers.mask=j.layers.mask|6,E.layers.mask=O.layers.mask&3,b.layers.mask=O.layers.mask&5;const be=j.parent,Me=O.cameras;se(O,be);for(let Xe=0;Xe<Me.length;Xe++)se(Me[Xe],be);Me.length===2?ve(O,E,b):O.projectionMatrix.copy(E.projectionMatrix),De(j,O,be)};function De(j,K,ge){ge===null?j.matrix.copy(K.matrixWorld):(j.matrix.copy(ge.matrixWorld),j.matrix.invert(),j.matrix.multiply(K.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(K.projectionMatrix),j.projectionMatrixInverse.copy(K.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=vs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(j){return d[j]};let Je=null;function ot(j,K){if(h=K.getViewerPose(c||o),g=K,h!==null){const ge=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let be=!1;ge.length!==O.cameras.length&&(O.cameras.length=0,be=!0);for(let C=0;C<ge.length;C++){const ee=ge[C];let J=null;if(p!==null)J=p.getViewport(ee);else{const Z=u.getViewSubImage(f,ee);J=Z.viewport,C===0&&(e.setRenderTargetTextures(v,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(v))}let $=D[C];$===void 0&&($=new bn,$.layers.enable(C),$.viewport=new Dt,D[C]=$),$.matrix.fromArray(ee.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(ee.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(J.x,J.y,J.width,J.height),C===0&&(O.matrix.copy($.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),be===!0&&O.cameras.push($)}const Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const C=u.getDepthInformation(ge[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(Me&&Me.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let C=0;C<ge.length;C++){const ee=ge[C].camera;if(ee){let J=d[ee];J||(J=new Uh,d[ee]=J);const $=u.getCameraImage(ee);J.sourceTexture=$}}}}for(let ge=0;ge<R.length;ge++){const be=M[ge],Me=R[ge];be!==null&&Me!==void 0&&Me.update(be,K,c||o)}Je&&Je(j,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const je=new jh;je.setAnimationLoop(ot),this.setAnimationLoop=function(j){Je=j},this.dispose=function(){}}}const D0=new un,Vg=new yt;function Gg(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Ch(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,T,y,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,T,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===hn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===hn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=e.get(d),y=T.envMap,v=T.envMapRotation;y&&(m.envMap.value=y,D0.copy(v),D0.x*=-1,D0.y*=-1,D0.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(D0.y*=-1,D0.z*=-1),m.envMapRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(D0)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===hn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Wg(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,y){const v=y.program;i.uniformBlockBinding(T,v)}function c(T,y){let v=s[T.id];v===void 0&&(g(T),v=h(T),s[T.id]=v,T.addEventListener("dispose",m));const R=y.program;i.updateUBOMapping(T,R);const M=e.render.frame;r[T.id]!==M&&(f(T),r[T.id]=M)}function h(T){const y=u();T.__bindingPointIndex=y;const v=n.createBuffer(),R=T.__size,M=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,R,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const y=s[T.id],v=T.uniforms,R=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let M=0,A=v.length;M<A;M++){const L=Array.isArray(v[M])?v[M]:[v[M]];for(let E=0,b=L.length;E<b;E++){const D=L[E];if(p(D,M,E,R)===!0){const O=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let V=0;V<z.length;V++){const Y=z[V],Q=_(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,O+X,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,X),X+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,y,v,R){const M=T.value,A=y+"_"+v;if(R[A]===void 0)return typeof M=="number"||typeof M=="boolean"?R[A]=M:R[A]=M.clone(),!0;{const L=R[A];if(typeof M=="number"||typeof M=="boolean"){if(L!==M)return R[A]=M,!0}else if(L.equals(M)===!1)return L.copy(M),!0}return!1}function g(T){const y=T.uniforms;let v=0;const R=16;for(let A=0,L=y.length;A<L;A++){const E=Array.isArray(y[A])?y[A]:[y[A]];for(let b=0,D=E.length;b<D;b++){const O=E[b],z=Array.isArray(O.value)?O.value:[O.value];for(let X=0,V=z.length;X<V;X++){const Y=z[X],Q=_(Y),W=v%R,ue=W%Q.boundary,ve=W+ue;v+=ue,ve!==0&&R-ve<Q.storage&&(v+=R-ve),O.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=Q.storage}}}const M=v%R;return M>0&&(v+=R-M),T.__size=v,T.__cache={},this}function _(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){const y=T.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Xg{constructor(e={}){const{canvas:t=Nd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const T=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=S0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let R=!1;this._outputColorSpace=Xt;let M=0,A=0,L=null,E=-1,b=null;const D=new Dt,O=new Dt;let z=null;const X=new We(0);let V=0,Y=t.width,Q=t.height,W=1,ue=null,ve=null;const se=new Dt(0,0,Y,Q),De=new Dt(0,0,Y,Q);let Je=!1;const ot=new il;let je=!1,j=!1;const K=new yt,ge=new P,be=new Dt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function et(){return L===null?W:1}let C=i;function ee(S,N){return t.getContext(S,N)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wa}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",ae,!1),C===null){const N="webgl2";if(C=ee(N,S),C===null)throw ee(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let J,$,Z,fe,re,pe,Ze,Ye,w,x,B,G,ne,q,Ie,he,Re,Pe,oe,Se,He,Ue,xe,tt;function U(){J=new t2(C),J.init(),Ue=new Og(C,J),$=new jm(C,J,e,Ue),Z=new Ng(C,J),$.reversedDepthBuffer&&f&&Z.buffers.depth.setReversed(!0),fe=new s2(C),re=new Mg,pe=new Fg(C,J,Z,re,$,Ue,fe),Ze=new Zm(v),Ye=new e2(v),w=new hp(C),xe=new qm(C,w),x=new n2(C,w,fe,xe),B=new o2(C,x,w,fe),oe=new r2(C,$,pe),he=new $m(re),G=new Sg(v,Ze,Ye,J,$,xe,he),ne=new Gg(v,re),q=new bg,Ie=new Pg(J),Pe=new Xm(v,Ze,Ye,Z,B,p,l),Re=new Ig(v,B,$),tt=new Wg(C,fe,$,Z),Se=new Ym(C,J,fe),He=new i2(C,J,fe),fe.programs=G.programs,v.capabilities=$,v.extensions=J,v.properties=re,v.renderLists=q,v.shadowMap=Re,v.state=Z,v.info=fe}U();const ce=new Hg(v,C);this.xr=ce,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=J.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=J.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(Y,Q,!1))},this.getSize=function(S){return S.set(Y,Q)},this.setSize=function(S,N,k=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=S,Q=N,t.width=Math.floor(S*W),t.height=Math.floor(N*W),k===!0&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(Y*W,Q*W).floor()},this.setDrawingBufferSize=function(S,N,k){Y=S,Q=N,W=k,t.width=Math.floor(S*k),t.height=Math.floor(N*k),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(D)},this.getViewport=function(S){return S.copy(se)},this.setViewport=function(S,N,k,H){S.isVector4?se.set(S.x,S.y,S.z,S.w):se.set(S,N,k,H),Z.viewport(D.copy(se).multiplyScalar(W).round())},this.getScissor=function(S){return S.copy(De)},this.setScissor=function(S,N,k,H){S.isVector4?De.set(S.x,S.y,S.z,S.w):De.set(S,N,k,H),Z.scissor(O.copy(De).multiplyScalar(W).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(S){Z.setScissorTest(Je=S)},this.setOpaqueSort=function(S){ue=S},this.setTransparentSort=function(S){ve=S},this.getClearColor=function(S){return S.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,k=!0){let H=0;if(S){let F=!1;if(L!==null){const le=L.texture.format;F=le===Ka||le===Za||le===$a}if(F){const le=L.texture.type,ye=le===Xn||le===X0||le===ps||le===ms||le===Ya||le===ja,Ce=Pe.getClearColor(),Te=Pe.getClearAlpha(),ze=Ce.r,Ge=Ce.g,Oe=Ce.b;ye?(g[0]=ze,g[1]=Ge,g[2]=Oe,g[3]=Te,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=ze,_[1]=Ge,_[2]=Oe,_[3]=Te,C.clearBufferiv(C.COLOR,0,_))}else H|=C.COLOR_BUFFER_BIT}N&&(H|=C.DEPTH_BUFFER_BIT),k&&(H|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Pe.dispose(),q.dispose(),Ie.dispose(),re.dispose(),Ze.dispose(),Ye.dispose(),B.dispose(),xe.dispose(),tt.dispose(),G.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",On),ce.removeEventListener("sessionend",Ll),T0.stop()};function me(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const S=fe.autoReset,N=Re.enabled,k=Re.autoUpdate,H=Re.needsUpdate,F=Re.type;U(),fe.autoReset=S,Re.enabled=N,Re.autoUpdate=k,Re.needsUpdate=H,Re.type=F}function ae(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function te(S){const N=S.target;N.removeEventListener("dispose",te),Le(N)}function Le(S){Ke(S),re.remove(S)}function Ke(S){const N=re.get(S).programs;N!==void 0&&(N.forEach(function(k){G.releaseProgram(k)}),S.isShaderMaterial&&G.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,k,H,F,le){N===null&&(N=Me);const ye=F.isMesh&&F.matrixWorld.determinant()<0,Ce=wu(S,N,k,H,F);Z.setMaterial(H,ye);let Te=k.index,ze=1;if(H.wireframe===!0){if(Te=x.getWireframeAttribute(k),Te===void 0)return;ze=2}const Ge=k.drawRange,Oe=k.attributes.position;let at=Ge.start*ze,_t=(Ge.start+Ge.count)*ze;le!==null&&(at=Math.max(at,le.start*ze),_t=Math.min(_t,(le.start+le.count)*ze)),Te!==null?(at=Math.max(at,0),_t=Math.min(_t,Te.count)):Oe!=null&&(at=Math.max(at,0),_t=Math.min(_t,Oe.count));const Pt=_t-at;if(Pt<0||Pt===1/0)return;xe.setup(F,H,Ce,k,Te);let Et,St=Se;if(Te!==null&&(Et=w.get(Te),St=He,St.setIndex(Et)),F.isMesh)H.wireframe===!0?(Z.setLineWidth(H.wireframeLinewidth*et()),St.setMode(C.LINES)):St.setMode(C.TRIANGLES);else if(F.isLine){let Be=H.linewidth;Be===void 0&&(Be=1),Z.setLineWidth(Be*et()),F.isLineSegments?St.setMode(C.LINES):F.isLineLoop?St.setMode(C.LINE_LOOP):St.setMode(C.LINE_STRIP)}else F.isPoints?St.setMode(C.POINTS):F.isSprite&&St.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))St.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Be=F._multiDrawStarts,wt=F._multiDrawCounts,dt=F._multiDrawCount,dn=Te?w.get(Te).bytesPerElement:1,ei=re.get(H).currentProgram.getUniforms();for(let fn=0;fn<dt;fn++)ei.setValue(C,"_gl_DrawID",fn),St.render(Be[fn]/dn,wt[fn])}else if(F.isInstancedMesh)St.renderInstances(at,Pt,F.count);else if(k.isInstancedBufferGeometry){const Be=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,wt=Math.min(k.instanceCount,Be);St.renderInstances(at,Pt,wt)}else St.render(at,Pt)};function Mt(S,N,k){S.transparent===!0&&S.side===i0&&S.forceSinglePass===!1?(S.side=hn,S.needsUpdate=!0,Us(S,N,k),S.side=M0,S.needsUpdate=!0,Us(S,N,k),S.side=i0):Us(S,N,k)}this.compile=function(S,N,k=null){k===null&&(k=S),d=Ie.get(k),d.init(N),y.push(d),k.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),S!==k&&S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const H=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const le=F.material;if(le)if(Array.isArray(le))for(let ye=0;ye<le.length;ye++){const Ce=le[ye];Mt(Ce,k,F),H.add(Ce)}else Mt(le,k,F),H.add(le)}),d=y.pop(),H},this.compileAsync=function(S,N,k=null){const H=this.compile(S,N,k);return new Promise(F=>{function le(){if(H.forEach(function(ye){re.get(ye).currentProgram.isReady()&&H.delete(ye)}),H.size===0){F(S);return}setTimeout(le,10)}J.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let mt=null;function jn(S){mt&&mt(S)}function On(){T0.stop()}function Ll(){T0.start()}const T0=new jh;T0.setAnimationLoop(jn),typeof self<"u"&&T0.setContext(self),this.setAnimationLoop=function(S){mt=S,ce.setAnimationLoop(S),S===null?T0.stop():T0.start()},ce.addEventListener("sessionstart",On),ce.addEventListener("sessionend",Ll),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(N),N=ce.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,N,L),d=Ie.get(S,y.length),d.init(N),y.push(d),K.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ot.setFromProjectionMatrix(K,Vn,N.reversedDepth),j=this.localClippingEnabled,je=he.init(this.clippingPlanes,j),m=q.get(S,T.length),m.init(),T.push(m),ce.enabled===!0&&ce.isPresenting===!0){const le=v.xr.getDepthSensingMesh();le!==null&&Zr(le,N,-1/0,v.sortObjects)}Zr(S,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ue,ve),Xe=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Xe&&Pe.addToRenderList(m,S),this.info.render.frame++,je===!0&&he.beginShadows();const k=d.state.shadowsArray;Re.render(k,S,N),je===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,F=m.transmissive;if(d.setupLights(),N.isArrayCamera){const le=N.cameras;if(F.length>0)for(let ye=0,Ce=le.length;ye<Ce;ye++){const Te=le[ye];Il(H,F,S,Te)}Xe&&Pe.render(S);for(let ye=0,Ce=le.length;ye<Ce;ye++){const Te=le[ye];Dl(m,S,Te,Te.viewport)}}else F.length>0&&Il(H,F,S,N),Xe&&Pe.render(S),Dl(m,S,N);L!==null&&A===0&&(pe.updateMultisampleRenderTarget(L),pe.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(v,S,N),xe.resetDefaultState(),E=-1,b=null,y.pop(),y.length>0?(d=y[y.length-1],je===!0&&he.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Zr(S,N,k,H){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ot.intersectsSprite(S)){H&&be.setFromMatrixPosition(S.matrixWorld).applyMatrix4(K);const ye=B.update(S),Ce=S.material;Ce.visible&&m.push(S,ye,Ce,k,be.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ot.intersectsObject(S))){const ye=B.update(S),Ce=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),be.copy(S.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),be.copy(ye.boundingSphere.center)),be.applyMatrix4(S.matrixWorld).applyMatrix4(K)),Array.isArray(Ce)){const Te=ye.groups;for(let ze=0,Ge=Te.length;ze<Ge;ze++){const Oe=Te[ze],at=Ce[Oe.materialIndex];at&&at.visible&&m.push(S,ye,at,k,be.z,Oe)}}else Ce.visible&&m.push(S,ye,Ce,k,be.z,null)}}const le=S.children;for(let ye=0,Ce=le.length;ye<Ce;ye++)Zr(le[ye],N,k,H)}function Dl(S,N,k,H){const F=S.opaque,le=S.transmissive,ye=S.transparent;d.setupLightsView(k),je===!0&&he.setGlobalState(v.clippingPlanes,k),H&&Z.viewport(D.copy(H)),F.length>0&&Is(F,N,k),le.length>0&&Is(le,N,k),ye.length>0&&Is(ye,N,k),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Il(S,N,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new Y0(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Cs:Xn,minFilter:V0,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const le=d.state.transmissionRenderTarget[H.id],ye=H.viewport||D;le.setSize(ye.z*v.transmissionResolutionScale,ye.w*v.transmissionResolutionScale);const Ce=v.getRenderTarget(),Te=v.getActiveCubeFace(),ze=v.getActiveMipmapLevel();v.setRenderTarget(le),v.getClearColor(X),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),Xe&&Pe.render(k);const Ge=v.toneMapping;v.toneMapping=S0;const Oe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),je===!0&&he.setGlobalState(v.clippingPlanes,H),Is(S,k,H),pe.updateMultisampleRenderTarget(le),pe.updateRenderTargetMipmap(le),J.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let _t=0,Pt=N.length;_t<Pt;_t++){const Et=N[_t],St=Et.object,Be=Et.geometry,wt=Et.material,dt=Et.group;if(wt.side===i0&&St.layers.test(H.layers)){const dn=wt.side;wt.side=hn,wt.needsUpdate=!0,Ul(St,k,H,Be,wt,dt),wt.side=dn,wt.needsUpdate=!0,at=!0}}at===!0&&(pe.updateMultisampleRenderTarget(le),pe.updateRenderTargetMipmap(le))}v.setRenderTarget(Ce,Te,ze),v.setClearColor(X,V),Oe!==void 0&&(H.viewport=Oe),v.toneMapping=Ge}function Is(S,N,k){const H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,le=S.length;F<le;F++){const ye=S[F],Ce=ye.object,Te=ye.geometry,ze=ye.group;let Ge=ye.material;Ge.allowOverride===!0&&H!==null&&(Ge=H),Ce.layers.test(k.layers)&&Ul(Ce,N,k,Te,Ge,ze)}}function Ul(S,N,k,H,F,le){S.onBeforeRender(v,N,k,H,F,le),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(v,N,k,H,S,le),F.transparent===!0&&F.side===i0&&F.forceSinglePass===!1?(F.side=hn,F.needsUpdate=!0,v.renderBufferDirect(k,N,H,F,S,le),F.side=M0,F.needsUpdate=!0,v.renderBufferDirect(k,N,H,F,S,le),F.side=i0):v.renderBufferDirect(k,N,H,F,S,le),S.onAfterRender(v,N,k,H,F,le)}function Us(S,N,k){N.isScene!==!0&&(N=Me);const H=re.get(S),F=d.state.lights,le=d.state.shadowsArray,ye=F.state.version,Ce=G.getParameters(S,F.state,le,N,k),Te=G.getProgramCacheKey(Ce);let ze=H.programs;H.environment=S.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(S.isMeshStandardMaterial?Ye:Ze).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,ze===void 0&&(S.addEventListener("dispose",te),ze=new Map,H.programs=ze);let Ge=ze.get(Te);if(Ge!==void 0){if(H.currentProgram===Ge&&H.lightsStateVersion===ye)return Fl(S,Ce),Ge}else Ce.uniforms=G.getUniforms(S),S.onBeforeCompile(Ce,v),Ge=G.acquireProgram(Ce,Te),ze.set(Te,Ge),H.uniforms=Ce.uniforms;const Oe=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Oe.clippingPlanes=he.uniform),Fl(S,Ce),H.needsLights=Cu(S),H.lightsStateVersion=ye,H.needsLights&&(Oe.ambientLightColor.value=F.state.ambient,Oe.lightProbe.value=F.state.probe,Oe.directionalLights.value=F.state.directional,Oe.directionalLightShadows.value=F.state.directionalShadow,Oe.spotLights.value=F.state.spot,Oe.spotLightShadows.value=F.state.spotShadow,Oe.rectAreaLights.value=F.state.rectArea,Oe.ltc_1.value=F.state.rectAreaLTC1,Oe.ltc_2.value=F.state.rectAreaLTC2,Oe.pointLights.value=F.state.point,Oe.pointLightShadows.value=F.state.pointShadow,Oe.hemisphereLights.value=F.state.hemi,Oe.directionalShadowMap.value=F.state.directionalShadowMap,Oe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Oe.spotShadowMap.value=F.state.spotShadowMap,Oe.spotLightMatrix.value=F.state.spotLightMatrix,Oe.spotLightMap.value=F.state.spotLightMap,Oe.pointShadowMap.value=F.state.pointShadowMap,Oe.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Ge,H.uniformsList=null,Ge}function Nl(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=vr.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Fl(S,N){const k=re.get(S);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function wu(S,N,k,H,F){N.isScene!==!0&&(N=Me),pe.resetTextureUnits();const le=N.fog,ye=H.isMeshStandardMaterial?N.environment:null,Ce=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Li,Te=(H.isMeshStandardMaterial?Ye:Ze).get(H.envMap||ye),ze=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ge=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Oe=!!k.morphAttributes.position,at=!!k.morphAttributes.normal,_t=!!k.morphAttributes.color;let Pt=S0;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Pt=v.toneMapping);const Et=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,St=Et!==void 0?Et.length:0,Be=re.get(H),wt=d.state.lights;if(je===!0&&(j===!0||S!==b)){const en=S===b&&H.id===E;he.setState(H,S,en)}let dt=!1;H.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==wt.state.version||Be.outputColorSpace!==Ce||F.isBatchedMesh&&Be.batching===!1||!F.isBatchedMesh&&Be.batching===!0||F.isBatchedMesh&&Be.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Be.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Be.instancing===!1||!F.isInstancedMesh&&Be.instancing===!0||F.isSkinnedMesh&&Be.skinning===!1||!F.isSkinnedMesh&&Be.skinning===!0||F.isInstancedMesh&&Be.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Be.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Be.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Be.instancingMorph===!1&&F.morphTexture!==null||Be.envMap!==Te||H.fog===!0&&Be.fog!==le||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==he.numPlanes||Be.numIntersection!==he.numIntersection)||Be.vertexAlphas!==ze||Be.vertexTangents!==Ge||Be.morphTargets!==Oe||Be.morphNormals!==at||Be.morphColors!==_t||Be.toneMapping!==Pt||Be.morphTargetsCount!==St)&&(dt=!0):(dt=!0,Be.__version=H.version);let dn=Be.currentProgram;dt===!0&&(dn=Us(H,N,F));let ei=!1,fn=!1,zi=!1;const At=dn.getUniforms(),xn=Be.uniforms;if(Z.useProgram(dn.program)&&(ei=!0,fn=!0,zi=!0),H.id!==E&&(E=H.id,fn=!0),ei||b!==S){Z.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),At.setValue(C,"projectionMatrix",S.projectionMatrix),At.setValue(C,"viewMatrix",S.matrixWorldInverse);const an=At.map.cameraPosition;an!==void 0&&an.setValue(C,ge.setFromMatrixPosition(S.matrixWorld)),$.logarithmicDepthBuffer&&At.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&At.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,fn=!0,zi=!0)}if(F.isSkinnedMesh){At.setOptional(C,F,"bindMatrix"),At.setOptional(C,F,"bindMatrixInverse");const en=F.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),At.setValue(C,"boneTexture",en.boneTexture,pe))}F.isBatchedMesh&&(At.setOptional(C,F,"batchingTexture"),At.setValue(C,"batchingTexture",F._matricesTexture,pe),At.setOptional(C,F,"batchingIdTexture"),At.setValue(C,"batchingIdTexture",F._indirectTexture,pe),At.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&At.setValue(C,"batchingColorTexture",F._colorsTexture,pe));const yn=k.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&oe.update(F,k,dn),(fn||Be.receiveShadow!==F.receiveShadow)&&(Be.receiveShadow=F.receiveShadow,At.setValue(C,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(xn.envMap.value=Te,xn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(xn.envMapIntensity.value=N.environmentIntensity),fn&&(At.setValue(C,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&Au(xn,zi),le&&H.fog===!0&&ne.refreshFogUniforms(xn,le),ne.refreshMaterialUniforms(xn,H,W,Q,d.state.transmissionRenderTarget[S.id]),vr.upload(C,Nl(Be),xn,pe)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(vr.upload(C,Nl(Be),xn,pe),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&At.setValue(C,"center",F.center),At.setValue(C,"modelViewMatrix",F.modelViewMatrix),At.setValue(C,"normalMatrix",F.normalMatrix),At.setValue(C,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const en=H.uniformsGroups;for(let an=0,Kr=en.length;an<Kr;an++){const w0=en[an];tt.update(w0,dn),tt.bind(w0,dn)}}return dn}function Au(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Cu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,N,k){const H=re.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),re.get(S.texture).__webglTexture=N,re.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:k,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const k=re.get(S);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0};const Ru=C.createFramebuffer();this.setRenderTarget=function(S,N=0,k=0){L=S,M=N,A=k;let H=!0,F=null,le=!1,ye=!1;if(S){const Te=re.get(S);if(Te.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(C.FRAMEBUFFER,null),H=!1;else if(Te.__webglFramebuffer===void 0)pe.setupRenderTarget(S);else if(Te.__hasExternalTextures)pe.rebindTextures(S,re.get(S.texture).__webglTexture,re.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Oe=S.depthTexture;if(Te.__boundDepthTexture!==Oe){if(Oe!==null&&re.has(Oe)&&(S.width!==Oe.image.width||S.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(S)}}const ze=S.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ye=!0);const Ge=re.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ge[N])?F=Ge[N][k]:F=Ge[N],le=!0):S.samples>0&&pe.useMultisampledRTT(S)===!1?F=re.get(S).__webglMultisampledFramebuffer:Array.isArray(Ge)?F=Ge[k]:F=Ge,D.copy(S.viewport),O.copy(S.scissor),z=S.scissorTest}else D.copy(se).multiplyScalar(W).floor(),O.copy(De).multiplyScalar(W).floor(),z=Je;if(k!==0&&(F=Ru),Z.bindFramebuffer(C.FRAMEBUFFER,F)&&H&&Z.drawBuffers(S,F),Z.viewport(D),Z.scissor(O),Z.setScissorTest(z),le){const Te=re.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,Te.__webglTexture,k)}else if(ye){const Te=N;for(let ze=0;ze<S.textures.length;ze++){const Ge=re.get(S.textures[ze]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+ze,Ge.__webglTexture,k,Te)}}else if(S!==null&&k!==0){const Te=re.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Te.__webglTexture,k)}E=-1},this.readRenderTargetPixels=function(S,N,k,H,F,le,ye,Ce=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=re.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){Z.bindFramebuffer(C.FRAMEBUFFER,Te);try{const ze=S.textures[Ce],Ge=ze.format,Oe=ze.type;if(!$.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-H&&k>=0&&k<=S.height-F&&(S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ce),C.readPixels(N,k,H,F,Ue.convert(Ge),Ue.convert(Oe),le))}finally{const ze=L!==null?re.get(L).__webglFramebuffer:null;Z.bindFramebuffer(C.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(S,N,k,H,F,le,ye,Ce=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=re.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te)if(N>=0&&N<=S.width-H&&k>=0&&k<=S.height-F){Z.bindFramebuffer(C.FRAMEBUFFER,Te);const ze=S.textures[Ce],Ge=ze.format,Oe=ze.type;if(!$.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,at),C.bufferData(C.PIXEL_PACK_BUFFER,le.byteLength,C.STREAM_READ),S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ce),C.readPixels(N,k,H,F,Ue.convert(Ge),Ue.convert(Oe),0);const _t=L!==null?re.get(L).__webglFramebuffer:null;Z.bindFramebuffer(C.FRAMEBUFFER,_t);const Pt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Fd(C,Pt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,at),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,le),C.deleteBuffer(at),C.deleteSync(Pt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,k=0){const H=Math.pow(2,-k),F=Math.floor(S.image.width*H),le=Math.floor(S.image.height*H),ye=N!==null?N.x:0,Ce=N!==null?N.y:0;pe.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,ye,Ce,F,le),Z.unbindTexture()};const Pu=C.createFramebuffer(),Lu=C.createFramebuffer();this.copyTextureToTexture=function(S,N,k=null,H=null,F=0,le=null){le===null&&(F!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=F,F=0):le=0);let ye,Ce,Te,ze,Ge,Oe,at,_t,Pt;const Et=S.isCompressedTexture?S.mipmaps[le]:S.image;if(k!==null)ye=k.max.x-k.min.x,Ce=k.max.y-k.min.y,Te=k.isBox3?k.max.z-k.min.z:1,ze=k.min.x,Ge=k.min.y,Oe=k.isBox3?k.min.z:0;else{const yn=Math.pow(2,-F);ye=Math.floor(Et.width*yn),Ce=Math.floor(Et.height*yn),S.isDataArrayTexture?Te=Et.depth:S.isData3DTexture?Te=Math.floor(Et.depth*yn):Te=1,ze=0,Ge=0,Oe=0}H!==null?(at=H.x,_t=H.y,Pt=H.z):(at=0,_t=0,Pt=0);const St=Ue.convert(N.format),Be=Ue.convert(N.type);let wt;N.isData3DTexture?(pe.setTexture3D(N,0),wt=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(pe.setTexture2DArray(N,0),wt=C.TEXTURE_2D_ARRAY):(pe.setTexture2D(N,0),wt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const dt=C.getParameter(C.UNPACK_ROW_LENGTH),dn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ei=C.getParameter(C.UNPACK_SKIP_PIXELS),fn=C.getParameter(C.UNPACK_SKIP_ROWS),zi=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Et.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Et.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ze),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ge),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Oe);const At=S.isDataArrayTexture||S.isData3DTexture,xn=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const yn=re.get(S),en=re.get(N),an=re.get(yn.__renderTarget),Kr=re.get(en.__renderTarget);Z.bindFramebuffer(C.READ_FRAMEBUFFER,an.__webglFramebuffer),Z.bindFramebuffer(C.DRAW_FRAMEBUFFER,Kr.__webglFramebuffer);for(let w0=0;w0<Te;w0++)At&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,re.get(S).__webglTexture,F,Oe+w0),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,re.get(N).__webglTexture,le,Pt+w0)),C.blitFramebuffer(ze,Ge,ye,Ce,at,_t,ye,Ce,C.DEPTH_BUFFER_BIT,C.NEAREST);Z.bindFramebuffer(C.READ_FRAMEBUFFER,null),Z.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(F!==0||S.isRenderTargetTexture||re.has(S)){const yn=re.get(S),en=re.get(N);Z.bindFramebuffer(C.READ_FRAMEBUFFER,Pu),Z.bindFramebuffer(C.DRAW_FRAMEBUFFER,Lu);for(let an=0;an<Te;an++)At?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,yn.__webglTexture,F,Oe+an):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,yn.__webglTexture,F),xn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,en.__webglTexture,le,Pt+an):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,en.__webglTexture,le),F!==0?C.blitFramebuffer(ze,Ge,ye,Ce,at,_t,ye,Ce,C.COLOR_BUFFER_BIT,C.NEAREST):xn?C.copyTexSubImage3D(wt,le,at,_t,Pt+an,ze,Ge,ye,Ce):C.copyTexSubImage2D(wt,le,at,_t,ze,Ge,ye,Ce);Z.bindFramebuffer(C.READ_FRAMEBUFFER,null),Z.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else xn?S.isDataTexture||S.isData3DTexture?C.texSubImage3D(wt,le,at,_t,Pt,ye,Ce,Te,St,Be,Et.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(wt,le,at,_t,Pt,ye,Ce,Te,St,Et.data):C.texSubImage3D(wt,le,at,_t,Pt,ye,Ce,Te,St,Be,Et):S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,le,at,_t,ye,Ce,St,Be,Et.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,le,at,_t,Et.width,Et.height,St,Et.data):C.texSubImage2D(C.TEXTURE_2D,le,at,_t,ye,Ce,St,Be,Et);C.pixelStorei(C.UNPACK_ROW_LENGTH,dt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,dn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ei),C.pixelStorei(C.UNPACK_SKIP_ROWS,fn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,zi),le===0&&N.generateMipmaps&&C.generateMipmap(wt),Z.unbindTexture()},this.initRenderTarget=function(S){re.get(S).__webglFramebuffer===void 0&&pe.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?pe.setTextureCube(S,0):S.isData3DTexture?pe.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?pe.setTexture2DArray(S,0):pe.setTexture2D(S,0),Z.unbindTexture()},this.resetState=function(){M=0,A=0,L=null,Z.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}const Kc={type:"change"},hl={type:"start"},Qh={type:"end"},dr=new Ps,Jc=new _0,qg=Math.cos(70*Hr.DEG2RAD),Ft=new P,ln=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},No=1e-6;class Yg extends lp{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:Si.ROTATE,TWO:Si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new q0,this._lastTargetPosition=new P,this._quat=new q0().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Tc,this._sphericalDelta=new Tc,this._scale=1,this._panOffset=new P,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new P,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$g.bind(this),this._onPointerDown=jg.bind(this),this._onPointerUp=Zg.bind(this),this._onContextMenu=i5.bind(this),this._onMouseWheel=Qg.bind(this),this._onKeyDown=e5.bind(this),this._onTouchStart=t5.bind(this),this._onTouchMove=n5.bind(this),this._onMouseDown=Kg.bind(this),this._onMouseMove=Jg.bind(this),this._interceptControlDown=s5.bind(this),this._interceptControlUp=r5.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Kc),this.update(),this.state=xt.NONE}update(e=null){const t=this.object.position;Ft.copy(t).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),s<-Math.PI?s+=ln:s>Math.PI&&(s-=ln),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ft.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(dr.origin.copy(this.object.position),dr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(dr.direction))<qg?this.object.lookAt(this.target):(Jc.setFromNormalAndCoplanarPoint(this.object.up,this.target),dr.intersectPlane(Jc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>No||8*(1-this._lastQuaternion.dot(this.object.quaternion))>No||this._lastTargetPosition.distanceToSquared(this.target)>No?(this.dispatchEvent(Kc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ln/60*this.autoRotateSpeed*e:ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ft.setFromMatrixColumn(t,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,t){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(t,1):(Ft.setFromMatrixColumn(t,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ft.copy(s).sub(this.target);let r=Ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function jg(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function $g(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Zg(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qh),this.state=xt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Kg(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ti.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=xt.DOLLY;break;case Ti.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}break;case Ti.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(hl)}function Jg(n){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Qg(n){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(n.preventDefault(),this.dispatchEvent(hl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Qh))}function e5(n){this.enabled!==!1&&this._handleKeyDown(n)}function t5(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Si.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=xt.TOUCH_ROTATE;break;case Si.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case Si.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=xt.TOUCH_DOLLY_PAN;break;case Si.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(hl)}function n5(n){switch(this._trackPointer(n),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=xt.NONE}}function i5(n){this.enabled!==!1&&n.preventDefault()}function s5(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function r5(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ul=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)},I=(n,e,t)=>(ul(n,e,"read from private field"),t?t.call(n):e.get(n)),rt=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},qt=(n,e,t,i)=>(ul(n,e,"write to private field"),e.set(n,t),t),o5=(n,e,t,i)=>({set _(s){qt(n,e,s)},get _(){return I(n,e,i)}}),lt=(n,e,t)=>(ul(n,e,"access private method"),t),ht=new Uint8Array(8),qn=new DataView(ht.buffer),Ot=n=>[(n%256+256)%256],pt=n=>(qn.setUint16(0,n,!1),[ht[0],ht[1]]),a5=n=>(qn.setInt16(0,n,!1),[ht[0],ht[1]]),eu=n=>(qn.setUint32(0,n,!1),[ht[1],ht[2],ht[3]]),Ee=n=>(qn.setUint32(0,n,!1),[ht[0],ht[1],ht[2],ht[3]]),l5=n=>(qn.setInt32(0,n,!1),[ht[0],ht[1],ht[2],ht[3]]),$0=n=>(qn.setUint32(0,Math.floor(n/2**32),!1),qn.setUint32(4,n,!1),[ht[0],ht[1],ht[2],ht[3],ht[4],ht[5],ht[6],ht[7]]),dl=n=>(qn.setInt16(0,2**8*n,!1),[ht[0],ht[1]]),kn=n=>(qn.setInt32(0,2**16*n,!1),[ht[0],ht[1],ht[2],ht[3]]),Fo=n=>(qn.setInt32(0,2**30*n,!1),[ht[0],ht[1],ht[2],ht[3]]),En=(n,e=!1)=>{let t=Array(n.length).fill(null).map((i,s)=>n.charCodeAt(s));return e&&t.push(0),t},Dr=n=>n&&n[n.length-1],fl=n=>{let e;for(let t of n)(!e||t.presentationTimestamp>e.presentationTimestamp)&&(e=t);return e},Wn=(n,e,t=!0)=>{let i=n*e;return t?Math.round(i):i},tu=n=>{let e=n*(Math.PI/180),t=Math.cos(e),i=Math.sin(e);return[t,i,0,-i,t,0,0,0,1]},nu=tu(0),iu=n=>[kn(n[0]),kn(n[1]),Fo(n[2]),kn(n[3]),kn(n[4]),Fo(n[5]),kn(n[6]),kn(n[7]),Fo(n[8])],ls=n=>!n||typeof n!="object"?n:Array.isArray(n)?n.map(ls):Object.fromEntries(Object.entries(n).map(([e,t])=>[e,ls(t)])),Ui=n=>n>=0&&n<2**32,Nt=(n,e,t)=>({type:n,contents:e&&new Uint8Array(e.flat(10)),children:t}),bt=(n,e,t,i,s)=>Nt(n,[Ot(e),eu(t),i??[]],s),c5=n=>{let e=512;return n.fragmented?Nt("ftyp",[En("iso5"),Ee(e),En("iso5"),En("iso6"),En("mp41")]):Nt("ftyp",[En("isom"),Ee(e),En("isom"),n.holdsAvc?En("avc1"):[],En("mp41")])},Ia=n=>({type:"mdat",largeSize:n}),h5=n=>({type:"free",size:n}),xr=(n,e,t=!1)=>Nt("moov",null,[u5(e,n),...n.map(i=>d5(i,e)),t?G5(n):null]),u5=(n,e)=>{let t=Wn(Math.max(0,...e.filter(o=>o.samples.length>0).map(o=>{const a=fl(o.samples);return a.presentationTimestamp+a.duration})),Fa),i=Math.max(...e.map(o=>o.id))+1,s=!Ui(n)||!Ui(t),r=s?$0:Ee;return bt("mvhd",+s,0,[r(n),r(n),Ee(Fa),r(t),kn(1),dl(1),Array(10).fill(0),iu(nu),Array(24).fill(0),Ee(i)])},d5=(n,e)=>Nt("trak",null,[f5(n,e),p5(n,e)]),f5=(n,e)=>{let t=fl(n.samples),i=Wn(t?t.presentationTimestamp+t.duration:0,Fa),s=!Ui(e)||!Ui(i),r=s?$0:Ee,o;return n.info.type==="video"?o=typeof n.info.rotation=="number"?tu(n.info.rotation):n.info.rotation:o=nu,bt("tkhd",+s,3,[r(e),r(e),Ee(n.id),Ee(0),r(i),Array(8).fill(0),pt(0),pt(0),dl(n.info.type==="audio"?1:0),pt(0),iu(o),kn(n.info.type==="video"?n.info.width:0),kn(n.info.type==="video"?n.info.height:0)])},p5=(n,e)=>Nt("mdia",null,[m5(n,e),g5(n.info.type==="video"?"vide":"soun"),_5(n)]),m5=(n,e)=>{let t=fl(n.samples),i=Wn(t?t.presentationTimestamp+t.duration:0,n.timescale),s=!Ui(e)||!Ui(i),r=s?$0:Ee;return bt("mdhd",+s,0,[r(e),r(e),Ee(n.timescale),r(i),pt(21956),pt(0)])},g5=n=>bt("hdlr",0,0,[En("mhlr"),En(n),Ee(0),Ee(0),Ee(0),En("mp4-muxer-hdlr",!0)]),_5=n=>Nt("minf",null,[n.info.type==="video"?v5():x5(),y5(),E5(n)]),v5=()=>bt("vmhd",0,1,[pt(0),pt(0),pt(0),pt(0)]),x5=()=>bt("smhd",0,0,[pt(0),pt(0)]),y5=()=>Nt("dinf",null,[S5()]),S5=()=>bt("dref",0,0,[Ee(1)],[M5()]),M5=()=>bt("url ",0,1),E5=n=>{const e=n.compositionTimeOffsetTable.length>1||n.compositionTimeOffsetTable.some(t=>t.sampleCompositionTimeOffset!==0);return Nt("stbl",null,[b5(n),O5(n),B5(n),z5(n),k5(n),H5(n),e?V5(n):null])},b5=n=>bt("stsd",0,0,[Ee(1)],[n.info.type==="video"?T5(Q5[n.info.codec],n):U5(t3[n.info.codec],n)]),T5=(n,e)=>Nt(n,[Array(6).fill(0),pt(1),pt(0),pt(0),Array(12).fill(0),pt(e.info.width),pt(e.info.height),Ee(4718592),Ee(4718592),Ee(0),pt(1),Array(32).fill(0),pt(24),a5(65535)],[e3[e.info.codec](e),e.info.decoderConfig.colorSpace?R5(e):null]),w5={bt709:1,bt470bg:5,smpte170m:6},A5={bt709:1,smpte170m:6,"iec61966-2-1":13},C5={rgb:0,bt709:1,bt470bg:5,smpte170m:6},R5=n=>Nt("colr",[En("nclx"),pt(w5[n.info.decoderConfig.colorSpace.primaries]),pt(A5[n.info.decoderConfig.colorSpace.transfer]),pt(C5[n.info.decoderConfig.colorSpace.matrix]),Ot((n.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),P5=n=>n.info.decoderConfig&&Nt("avcC",[...new Uint8Array(n.info.decoderConfig.description)]),L5=n=>n.info.decoderConfig&&Nt("hvcC",[...new Uint8Array(n.info.decoderConfig.description)]),D5=n=>{if(!n.info.decoderConfig)return null;let e=n.info.decoderConfig;if(!e.colorSpace)throw new Error("'colorSpace' is required in the decoder config for VP9.");let t=e.codec.split("."),i=Number(t[1]),s=Number(t[2]),a=(Number(t[3])<<4)+(0<<1)+Number(e.colorSpace.fullRange);return bt("vpcC",1,0,[Ot(i),Ot(s),Ot(a),Ot(2),Ot(2),Ot(2),pt(0)])},I5=()=>{let t=(1<<7)+1;return Nt("av1C",[t,0,0,0])},U5=(n,e)=>Nt(n,[Array(6).fill(0),pt(1),pt(0),pt(0),Ee(0),pt(e.info.numberOfChannels),pt(16),pt(0),pt(0),kn(e.info.sampleRate)],[n3[e.info.codec](e)]),N5=n=>{let e=new Uint8Array(n.info.decoderConfig.description);return bt("esds",0,0,[Ee(58753152),Ot(32+e.byteLength),pt(1),Ot(0),Ee(75530368),Ot(18+e.byteLength),Ot(64),Ot(21),eu(0),Ee(130071),Ee(130071),Ee(92307584),Ot(e.byteLength),...e,Ee(109084800),Ot(1),Ot(2)])},F5=n=>{let e=3840,t=0;const i=n.info.decoderConfig?.description;if(i){if(i.byteLength<18)throw new TypeError("Invalid decoder description provided for Opus; must be at least 18 bytes long.");const s=ArrayBuffer.isView(i)?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(i);e=s.getUint16(10,!0),t=s.getInt16(14,!0)}return Nt("dOps",[Ot(0),Ot(n.info.numberOfChannels),pt(e),Ee(n.info.sampleRate),dl(t),Ot(0)])},O5=n=>bt("stts",0,0,[Ee(n.timeToSampleTable.length),n.timeToSampleTable.map(e=>[Ee(e.sampleCount),Ee(e.sampleDelta)])]),B5=n=>{if(n.samples.every(t=>t.type==="key"))return null;let e=[...n.samples.entries()].filter(([,t])=>t.type==="key");return bt("stss",0,0,[Ee(e.length),e.map(([t])=>Ee(t+1))])},z5=n=>bt("stsc",0,0,[Ee(n.compactlyCodedChunkTable.length),n.compactlyCodedChunkTable.map(e=>[Ee(e.firstChunk),Ee(e.samplesPerChunk),Ee(1)])]),k5=n=>bt("stsz",0,0,[Ee(0),Ee(n.samples.length),n.samples.map(e=>Ee(e.size))]),H5=n=>n.finalizedChunks.length>0&&Dr(n.finalizedChunks).offset>=2**32?bt("co64",0,0,[Ee(n.finalizedChunks.length),n.finalizedChunks.map(e=>$0(e.offset))]):bt("stco",0,0,[Ee(n.finalizedChunks.length),n.finalizedChunks.map(e=>Ee(e.offset))]),V5=n=>bt("ctts",0,0,[Ee(n.compositionTimeOffsetTable.length),n.compositionTimeOffsetTable.map(e=>[Ee(e.sampleCount),Ee(e.sampleCompositionTimeOffset)])]),G5=n=>Nt("mvex",null,n.map(W5)),W5=n=>bt("trex",0,0,[Ee(n.id),Ee(1),Ee(0),Ee(0),Ee(0)]),Qc=(n,e)=>Nt("moof",null,[X5(n),...e.map(q5)]),X5=n=>bt("mfhd",0,0,[Ee(n)]),su=n=>{let e=0,t=0,i=0,s=0,r=n.type==="delta";return t|=+r,r?e|=1:e|=2,e<<24|t<<16|i<<8|s},q5=n=>Nt("traf",null,[Y5(n),j5(n),$5(n)]),Y5=n=>{let e=0;e|=8,e|=16,e|=32,e|=131072;let t=n.currentChunk.samples[1]??n.currentChunk.samples[0],i={duration:t.timescaleUnitsToNextSample,size:t.size,flags:su(t)};return bt("tfhd",0,e,[Ee(n.id),Ee(i.duration),Ee(i.size),Ee(i.flags)])},j5=n=>bt("tfdt",1,0,[$0(Wn(n.currentChunk.startTimestamp,n.timescale))]),$5=n=>{let e=n.currentChunk.samples.map(_=>_.timescaleUnitsToNextSample),t=n.currentChunk.samples.map(_=>_.size),i=n.currentChunk.samples.map(su),s=n.currentChunk.samples.map(_=>Wn(_.presentationTimestamp-_.decodeTimestamp,n.timescale)),r=new Set(e),o=new Set(t),a=new Set(i),l=new Set(s),c=a.size===2&&i[0]!==i[1],h=r.size>1,u=o.size>1,f=!c&&a.size>1,p=l.size>1||[...l].some(_=>_!==0),g=0;return g|=1,g|=4*+c,g|=256*+h,g|=512*+u,g|=1024*+f,g|=2048*+p,bt("trun",1,g,[Ee(n.currentChunk.samples.length),Ee(n.currentChunk.offset-n.currentChunk.moofOffset||0),c?Ee(i[0]):[],n.currentChunk.samples.map((_,m)=>[h?Ee(e[m]):[],u?Ee(t[m]):[],f?Ee(i[m]):[],p?l5(s[m]):[]])])},Z5=n=>Nt("mfra",null,[...n.map(K5),J5()]),K5=(n,e)=>bt("tfra",1,0,[Ee(n.id),Ee(63),Ee(n.finalizedChunks.length),n.finalizedChunks.map(i=>[$0(Wn(i.startTimestamp,n.timescale)),$0(i.moofOffset),Ee(e+1),Ee(1),Ee(1)])]),J5=()=>bt("mfro",0,0,[Ee(0)]),Q5={avc:"avc1",hevc:"hvc1",vp9:"vp09",av1:"av01"},e3={avc:P5,hevc:L5,vp9:D5,av1:I5},t3={aac:"mp4a",opus:"Opus"},n3={aac:N5,opus:F5},Wr=class{},ru=class extends Wr{constructor(){super(...arguments),this.buffer=null}},ou=class extends Wr{constructor(n){if(super(),this.options=n,typeof n!="object")throw new TypeError("StreamTarget requires an options object to be passed to its constructor.");if(n.onData){if(typeof n.onData!="function")throw new TypeError("options.onData, when provided, must be a function.");if(n.onData.length<2)throw new TypeError("options.onData, when provided, must be a function that takes in at least two arguments (data and position). Ignoring the position argument, which specifies the byte offset at which the data is to be written, can lead to broken outputs.")}if(n.chunked!==void 0&&typeof n.chunked!="boolean")throw new TypeError("options.chunked, when provided, must be a boolean.");if(n.chunkSize!==void 0&&(!Number.isInteger(n.chunkSize)||n.chunkSize<1024))throw new TypeError("options.chunkSize, when provided, must be an integer and not smaller than 1024.")}},i3=class extends Wr{constructor(n,e){if(super(),this.stream=n,this.options=e,!(n instanceof FileSystemWritableFileStream))throw new TypeError("FileSystemWritableFileStreamTarget requires a FileSystemWritableFileStream instance.");if(e!==void 0&&typeof e!="object")throw new TypeError("FileSystemWritableFileStreamTarget's options, when provided, must be an object.");if(e&&e.chunkSize!==void 0&&(!Number.isInteger(e.chunkSize)||e.chunkSize<=0))throw new TypeError("options.chunkSize, when provided, must be a positive integer")}},N0,yi,au=class{constructor(){this.pos=0,rt(this,N0,new Uint8Array(8)),rt(this,yi,new DataView(I(this,N0).buffer)),this.offsets=new WeakMap}seek(n){this.pos=n}writeU32(n){I(this,yi).setUint32(0,n,!1),this.write(I(this,N0).subarray(0,4))}writeU64(n){I(this,yi).setUint32(0,Math.floor(n/2**32),!1),I(this,yi).setUint32(4,n,!1),this.write(I(this,N0).subarray(0,8))}writeAscii(n){for(let e=0;e<n.length;e++)I(this,yi).setUint8(e%8,n.charCodeAt(e)),e%8===7&&this.write(I(this,N0));n.length%8!==0&&this.write(I(this,N0).subarray(0,n.length%8))}writeBox(n){if(this.offsets.set(n,this.pos),n.contents&&!n.children)this.writeBoxHeader(n,n.size??n.contents.byteLength+8),this.write(n.contents);else{let e=this.pos;if(this.writeBoxHeader(n,0),n.contents&&this.write(n.contents),n.children)for(let s of n.children)s&&this.writeBox(s);let t=this.pos,i=n.size??t-e;this.seek(e),this.writeBoxHeader(n,i),this.seek(t)}}writeBoxHeader(n,e){this.writeU32(n.largeSize?1:e),this.writeAscii(n.type),n.largeSize&&this.writeU64(e)}measureBoxHeader(n){return 8+(n.largeSize?8:0)}patchBox(n){let e=this.pos;this.seek(this.offsets.get(n)),this.writeBox(n),this.seek(e)}measureBox(n){if(n.contents&&!n.children)return this.measureBoxHeader(n)+n.contents.byteLength;{let e=this.measureBoxHeader(n);if(n.contents&&(e+=n.contents.byteLength),n.children)for(let t of n.children)t&&(e+=this.measureBox(t));return e}}};N0=new WeakMap;yi=new WeakMap;var yr,W0,Ts,Ki,Sr,Ua,s3=class extends au{constructor(n){super(),rt(this,Sr),rt(this,yr,void 0),rt(this,W0,new ArrayBuffer(2**16)),rt(this,Ts,new Uint8Array(I(this,W0))),rt(this,Ki,0),qt(this,yr,n)}write(n){lt(this,Sr,Ua).call(this,this.pos+n.byteLength),I(this,Ts).set(n,this.pos),this.pos+=n.byteLength,qt(this,Ki,Math.max(I(this,Ki),this.pos))}finalize(){lt(this,Sr,Ua).call(this,this.pos),I(this,yr).buffer=I(this,W0).slice(0,Math.max(I(this,Ki),this.pos))}};yr=new WeakMap;W0=new WeakMap;Ts=new WeakMap;Ki=new WeakMap;Sr=new WeakSet;Ua=function(n){let e=I(this,W0).byteLength;for(;e<n;)e*=2;if(e===I(this,W0).byteLength)return;let t=new ArrayBuffer(e),i=new Uint8Array(t);i.set(I(this,Ts),0),qt(this,W0,t),qt(this,Ts,i)};var r3=2**24,o3=2,cs,F0,Ji,o0,_n,Ir,Na,pl,lu,ml,cu,hs,Ur,gl=class extends au{constructor(n){super(),rt(this,Ir),rt(this,pl),rt(this,ml),rt(this,hs),rt(this,cs,void 0),rt(this,F0,[]),rt(this,Ji,void 0),rt(this,o0,void 0),rt(this,_n,[]),qt(this,cs,n),qt(this,Ji,n.options?.chunked??!1),qt(this,o0,n.options?.chunkSize??r3)}write(n){I(this,F0).push({data:n.slice(),start:this.pos}),this.pos+=n.byteLength}flush(){if(I(this,F0).length===0)return;let n=[],e=[...I(this,F0)].sort((t,i)=>t.start-i.start);n.push({start:e[0].start,size:e[0].data.byteLength});for(let t=1;t<e.length;t++){let i=n[n.length-1],s=e[t];s.start<=i.start+i.size?i.size=Math.max(i.size,s.start+s.data.byteLength-i.start):n.push({start:s.start,size:s.data.byteLength})}for(let t of n){t.data=new Uint8Array(t.size);for(let i of I(this,F0))t.start<=i.start&&i.start<t.start+t.size&&t.data.set(i.data,i.start-t.start);I(this,Ji)?(lt(this,Ir,Na).call(this,t.data,t.start),lt(this,hs,Ur).call(this)):I(this,cs).options.onData?.(t.data,t.start)}I(this,F0).length=0}finalize(){I(this,Ji)&&lt(this,hs,Ur).call(this,!0)}};cs=new WeakMap;F0=new WeakMap;Ji=new WeakMap;o0=new WeakMap;_n=new WeakMap;Ir=new WeakSet;Na=function(n,e){let t=I(this,_n).findIndex(a=>a.start<=e&&e<a.start+I(this,o0));t===-1&&(t=lt(this,ml,cu).call(this,e));let i=I(this,_n)[t],s=e-i.start,r=n.subarray(0,Math.min(I(this,o0)-s,n.byteLength));i.data.set(r,s);let o={start:s,end:s+r.byteLength};if(lt(this,pl,lu).call(this,i,o),i.written[0].start===0&&i.written[0].end===I(this,o0)&&(i.shouldFlush=!0),I(this,_n).length>o3){for(let a=0;a<I(this,_n).length-1;a++)I(this,_n)[a].shouldFlush=!0;lt(this,hs,Ur).call(this)}r.byteLength<n.byteLength&&lt(this,Ir,Na).call(this,n.subarray(r.byteLength),e+r.byteLength)};pl=new WeakSet;lu=function(n,e){let t=0,i=n.written.length-1,s=-1;for(;t<=i;){let r=Math.floor(t+(i-t+1)/2);n.written[r].start<=e.start?(t=r+1,s=r):i=r-1}for(n.written.splice(s+1,0,e),(s===-1||n.written[s].end<e.start)&&s++;s<n.written.length-1&&n.written[s].end>=n.written[s+1].start;)n.written[s].end=Math.max(n.written[s].end,n.written[s+1].end),n.written.splice(s+1,1)};ml=new WeakSet;cu=function(n){let t={start:Math.floor(n/I(this,o0))*I(this,o0),data:new Uint8Array(I(this,o0)),written:[],shouldFlush:!1};return I(this,_n).push(t),I(this,_n).sort((i,s)=>i.start-s.start),I(this,_n).indexOf(t)};hs=new WeakSet;Ur=function(n=!1){for(let e=0;e<I(this,_n).length;e++){let t=I(this,_n)[e];if(!(!t.shouldFlush&&!n)){for(let i of t.written)I(this,cs).options.onData?.(t.data.subarray(i.start,i.end),t.start+i.start);I(this,_n).splice(e--,1)}}};var a3=class extends gl{constructor(n){super(new ou({onData:(e,t)=>n.stream.write({type:"write",data:e,position:t}),chunked:!0,chunkSize:n.options?.chunkSize}))}},Fa=1e3,l3=["avc","hevc","vp9","av1"],c3=["aac","opus"],h3=2082844800,u3=["strict","offset","cross-track-offset"],Fe,Ve,Nr,gn,Yt,Wt,bi,Ai,_l,O0,B0,us,Oa,hu,Ba,uu,vl,du,za,fu,xl,pu,Mr,ka,Bn,n0,yl,mu,ds,Fr,Or,Sl,Ni,Ds,Er,Ha,d3=class{constructor(n){if(rt(this,Oa),rt(this,Ba),rt(this,vl),rt(this,za),rt(this,xl),rt(this,Mr),rt(this,Bn),rt(this,yl),rt(this,ds),rt(this,Or),rt(this,Ni),rt(this,Er),rt(this,Fe,void 0),rt(this,Ve,void 0),rt(this,Nr,void 0),rt(this,gn,void 0),rt(this,Yt,null),rt(this,Wt,null),rt(this,bi,Math.floor(Date.now()/1e3)+h3),rt(this,Ai,[]),rt(this,_l,1),rt(this,O0,[]),rt(this,B0,[]),rt(this,us,!1),lt(this,Oa,hu).call(this,n),n.video=ls(n.video),n.audio=ls(n.audio),n.fastStart=ls(n.fastStart),this.target=n.target,qt(this,Fe,{firstTimestampBehavior:"strict",...n}),n.target instanceof ru)qt(this,Ve,new s3(n.target));else if(n.target instanceof ou)qt(this,Ve,new gl(n.target));else if(n.target instanceof i3)qt(this,Ve,new a3(n.target));else throw new Error(`Invalid target: ${n.target}`);lt(this,za,fu).call(this),lt(this,Ba,uu).call(this)}addVideoChunk(n,e,t,i){if(!(n instanceof EncodedVideoChunk))throw new TypeError("addVideoChunk's first argument (sample) must be of type EncodedVideoChunk.");if(e&&typeof e!="object")throw new TypeError("addVideoChunk's second argument (meta), when provided, must be an object.");if(t!==void 0&&(!Number.isFinite(t)||t<0))throw new TypeError("addVideoChunk's third argument (timestamp), when provided, must be a non-negative real number.");if(i!==void 0&&!Number.isFinite(i))throw new TypeError("addVideoChunk's fourth argument (compositionTimeOffset), when provided, must be a real number.");let s=new Uint8Array(n.byteLength);n.copyTo(s),this.addVideoChunkRaw(s,n.type,t??n.timestamp,n.duration,e,i)}addVideoChunkRaw(n,e,t,i,s,r){if(!(n instanceof Uint8Array))throw new TypeError("addVideoChunkRaw's first argument (data) must be an instance of Uint8Array.");if(e!=="key"&&e!=="delta")throw new TypeError("addVideoChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(t)||t<0)throw new TypeError("addVideoChunkRaw's third argument (timestamp) must be a non-negative real number.");if(!Number.isFinite(i)||i<0)throw new TypeError("addVideoChunkRaw's fourth argument (duration) must be a non-negative real number.");if(s&&typeof s!="object")throw new TypeError("addVideoChunkRaw's fifth argument (meta), when provided, must be an object.");if(r!==void 0&&!Number.isFinite(r))throw new TypeError("addVideoChunkRaw's sixth argument (compositionTimeOffset), when provided, must be a real number.");if(lt(this,Er,Ha).call(this),!I(this,Fe).video)throw new Error("No video track declared.");if(typeof I(this,Fe).fastStart=="object"&&I(this,Yt).samples.length===I(this,Fe).fastStart.expectedVideoChunks)throw new Error(`Cannot add more video chunks than specified in 'fastStart' (${I(this,Fe).fastStart.expectedVideoChunks}).`);let o=lt(this,Mr,ka).call(this,I(this,Yt),n,e,t,i,s,r);if(I(this,Fe).fastStart==="fragmented"&&I(this,Wt)){for(;I(this,B0).length>0&&I(this,B0)[0].decodeTimestamp<=o.decodeTimestamp;){let a=I(this,B0).shift();lt(this,Bn,n0).call(this,I(this,Wt),a)}o.decodeTimestamp<=I(this,Wt).lastDecodeTimestamp?lt(this,Bn,n0).call(this,I(this,Yt),o):I(this,O0).push(o)}else lt(this,Bn,n0).call(this,I(this,Yt),o)}addAudioChunk(n,e,t){if(!(n instanceof EncodedAudioChunk))throw new TypeError("addAudioChunk's first argument (sample) must be of type EncodedAudioChunk.");if(e&&typeof e!="object")throw new TypeError("addAudioChunk's second argument (meta), when provided, must be an object.");if(t!==void 0&&(!Number.isFinite(t)||t<0))throw new TypeError("addAudioChunk's third argument (timestamp), when provided, must be a non-negative real number.");let i=new Uint8Array(n.byteLength);n.copyTo(i),this.addAudioChunkRaw(i,n.type,t??n.timestamp,n.duration,e)}addAudioChunkRaw(n,e,t,i,s){if(!(n instanceof Uint8Array))throw new TypeError("addAudioChunkRaw's first argument (data) must be an instance of Uint8Array.");if(e!=="key"&&e!=="delta")throw new TypeError("addAudioChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(t)||t<0)throw new TypeError("addAudioChunkRaw's third argument (timestamp) must be a non-negative real number.");if(!Number.isFinite(i)||i<0)throw new TypeError("addAudioChunkRaw's fourth argument (duration) must be a non-negative real number.");if(s&&typeof s!="object")throw new TypeError("addAudioChunkRaw's fifth argument (meta), when provided, must be an object.");if(lt(this,Er,Ha).call(this),!I(this,Fe).audio)throw new Error("No audio track declared.");if(typeof I(this,Fe).fastStart=="object"&&I(this,Wt).samples.length===I(this,Fe).fastStart.expectedAudioChunks)throw new Error(`Cannot add more audio chunks than specified in 'fastStart' (${I(this,Fe).fastStart.expectedAudioChunks}).`);let r=lt(this,Mr,ka).call(this,I(this,Wt),n,e,t,i,s);if(I(this,Fe).fastStart==="fragmented"&&I(this,Yt)){for(;I(this,O0).length>0&&I(this,O0)[0].decodeTimestamp<=r.decodeTimestamp;){let o=I(this,O0).shift();lt(this,Bn,n0).call(this,I(this,Yt),o)}r.decodeTimestamp<=I(this,Yt).lastDecodeTimestamp?lt(this,Bn,n0).call(this,I(this,Wt),r):I(this,B0).push(r)}else lt(this,Bn,n0).call(this,I(this,Wt),r)}finalize(){if(I(this,us))throw new Error("Cannot finalize a muxer more than once.");if(I(this,Fe).fastStart==="fragmented"){for(let e of I(this,O0))lt(this,Bn,n0).call(this,I(this,Yt),e);for(let e of I(this,B0))lt(this,Bn,n0).call(this,I(this,Wt),e);lt(this,Or,Sl).call(this,!1)}else I(this,Yt)&&lt(this,ds,Fr).call(this,I(this,Yt)),I(this,Wt)&&lt(this,ds,Fr).call(this,I(this,Wt));let n=[I(this,Yt),I(this,Wt)].filter(Boolean);if(I(this,Fe).fastStart==="in-memory"){let e;for(let i=0;i<2;i++){let s=xr(n,I(this,bi)),r=I(this,Ve).measureBox(s);e=I(this,Ve).measureBox(I(this,gn));let o=I(this,Ve).pos+r+e;for(let a of I(this,Ai)){a.offset=o;for(let{data:l}of a.samples)o+=l.byteLength,e+=l.byteLength}if(o<2**32)break;e>=2**32&&(I(this,gn).largeSize=!0)}let t=xr(n,I(this,bi));I(this,Ve).writeBox(t),I(this,gn).size=e,I(this,Ve).writeBox(I(this,gn));for(let i of I(this,Ai))for(let s of i.samples)I(this,Ve).write(s.data),s.data=null}else if(I(this,Fe).fastStart==="fragmented"){let e=I(this,Ve).pos,t=Z5(n);I(this,Ve).writeBox(t);let i=I(this,Ve).pos-e;I(this,Ve).seek(I(this,Ve).pos-4),I(this,Ve).writeU32(i)}else{let e=I(this,Ve).offsets.get(I(this,gn)),t=I(this,Ve).pos-e;I(this,gn).size=t,I(this,gn).largeSize=t>=2**32,I(this,Ve).patchBox(I(this,gn));let i=xr(n,I(this,bi));if(typeof I(this,Fe).fastStart=="object"){I(this,Ve).seek(I(this,Nr)),I(this,Ve).writeBox(i);let s=e-I(this,Ve).pos;I(this,Ve).writeBox(h5(s))}else I(this,Ve).writeBox(i)}lt(this,Ni,Ds).call(this),I(this,Ve).finalize(),qt(this,us,!0)}};Fe=new WeakMap;Ve=new WeakMap;Nr=new WeakMap;gn=new WeakMap;Yt=new WeakMap;Wt=new WeakMap;bi=new WeakMap;Ai=new WeakMap;_l=new WeakMap;O0=new WeakMap;B0=new WeakMap;us=new WeakMap;Oa=new WeakSet;hu=function(n){if(typeof n!="object")throw new TypeError("The muxer requires an options object to be passed to its constructor.");if(!(n.target instanceof Wr))throw new TypeError("The target must be provided and an instance of Target.");if(n.video){if(!l3.includes(n.video.codec))throw new TypeError(`Unsupported video codec: ${n.video.codec}`);if(!Number.isInteger(n.video.width)||n.video.width<=0)throw new TypeError(`Invalid video width: ${n.video.width}. Must be a positive integer.`);if(!Number.isInteger(n.video.height)||n.video.height<=0)throw new TypeError(`Invalid video height: ${n.video.height}. Must be a positive integer.`);const e=n.video.rotation;if(typeof e=="number"&&![0,90,180,270].includes(e))throw new TypeError(`Invalid video rotation: ${e}. Has to be 0, 90, 180 or 270.`);if(Array.isArray(e)&&(e.length!==9||e.some(t=>typeof t!="number")))throw new TypeError(`Invalid video transformation matrix: ${e.join()}`);if(n.video.frameRate!==void 0&&(!Number.isInteger(n.video.frameRate)||n.video.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${n.video.frameRate}. Must be a positive integer.`)}if(n.audio){if(!c3.includes(n.audio.codec))throw new TypeError(`Unsupported audio codec: ${n.audio.codec}`);if(!Number.isInteger(n.audio.numberOfChannels)||n.audio.numberOfChannels<=0)throw new TypeError(`Invalid number of audio channels: ${n.audio.numberOfChannels}. Must be a positive integer.`);if(!Number.isInteger(n.audio.sampleRate)||n.audio.sampleRate<=0)throw new TypeError(`Invalid audio sample rate: ${n.audio.sampleRate}. Must be a positive integer.`)}if(n.firstTimestampBehavior&&!u3.includes(n.firstTimestampBehavior))throw new TypeError(`Invalid first timestamp behavior: ${n.firstTimestampBehavior}`);if(typeof n.fastStart=="object"){if(n.video){if(n.fastStart.expectedVideoChunks===void 0)throw new TypeError("'fastStart' is an object but is missing property 'expectedVideoChunks'.");if(!Number.isInteger(n.fastStart.expectedVideoChunks)||n.fastStart.expectedVideoChunks<0)throw new TypeError("'expectedVideoChunks' must be a non-negative integer.")}if(n.audio){if(n.fastStart.expectedAudioChunks===void 0)throw new TypeError("'fastStart' is an object but is missing property 'expectedAudioChunks'.");if(!Number.isInteger(n.fastStart.expectedAudioChunks)||n.fastStart.expectedAudioChunks<0)throw new TypeError("'expectedAudioChunks' must be a non-negative integer.")}}else if(![!1,"in-memory","fragmented"].includes(n.fastStart))throw new TypeError("'fastStart' option must be false, 'in-memory', 'fragmented' or an object.");if(n.minFragmentDuration!==void 0&&(!Number.isFinite(n.minFragmentDuration)||n.minFragmentDuration<0))throw new TypeError("'minFragmentDuration' must be a non-negative number.")};Ba=new WeakSet;uu=function(){if(I(this,Ve).writeBox(c5({holdsAvc:I(this,Fe).video?.codec==="avc",fragmented:I(this,Fe).fastStart==="fragmented"})),qt(this,Nr,I(this,Ve).pos),I(this,Fe).fastStart==="in-memory")qt(this,gn,Ia(!1));else if(I(this,Fe).fastStart!=="fragmented"){if(typeof I(this,Fe).fastStart=="object"){let n=lt(this,vl,du).call(this);I(this,Ve).seek(I(this,Ve).pos+n)}qt(this,gn,Ia(!0)),I(this,Ve).writeBox(I(this,gn))}lt(this,Ni,Ds).call(this)};vl=new WeakSet;du=function(){if(typeof I(this,Fe).fastStart!="object")return;let n=0,e=[I(this,Fe).fastStart.expectedVideoChunks,I(this,Fe).fastStart.expectedAudioChunks];for(let t of e)t&&(n+=8*Math.ceil(2/3*t),n+=4*t,n+=12*Math.ceil(2/3*t),n+=4*t,n+=8*t);return n+=4096,n};za=new WeakSet;fu=function(){if(I(this,Fe).video&&qt(this,Yt,{id:1,info:{type:"video",codec:I(this,Fe).video.codec,width:I(this,Fe).video.width,height:I(this,Fe).video.height,rotation:I(this,Fe).video.rotation??0,decoderConfig:null},timescale:I(this,Fe).video.frameRate??57600,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),I(this,Fe).audio&&(qt(this,Wt,{id:I(this,Fe).video?2:1,info:{type:"audio",codec:I(this,Fe).audio.codec,numberOfChannels:I(this,Fe).audio.numberOfChannels,sampleRate:I(this,Fe).audio.sampleRate,decoderConfig:null},timescale:I(this,Fe).audio.sampleRate,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),I(this,Fe).audio.codec==="aac")){let n=lt(this,xl,pu).call(this,2,I(this,Fe).audio.sampleRate,I(this,Fe).audio.numberOfChannels);I(this,Wt).info.decoderConfig={codec:I(this,Fe).audio.codec,description:n,numberOfChannels:I(this,Fe).audio.numberOfChannels,sampleRate:I(this,Fe).audio.sampleRate}}};xl=new WeakSet;pu=function(n,e,t){let s=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350].indexOf(e),r=t,o="";o+=n.toString(2).padStart(5,"0"),o+=s.toString(2).padStart(4,"0"),s===15&&(o+=e.toString(2).padStart(24,"0")),o+=r.toString(2).padStart(4,"0");let a=Math.ceil(o.length/8)*8;o=o.padEnd(a,"0");let l=new Uint8Array(o.length/8);for(let c=0;c<o.length;c+=8)l[c/8]=parseInt(o.slice(c,c+8),2);return l};Mr=new WeakSet;ka=function(n,e,t,i,s,r,o){let a=i/1e6,l=(i-(o??0))/1e6,c=s/1e6,h=lt(this,yl,mu).call(this,a,l,n);return a=h.presentationTimestamp,l=h.decodeTimestamp,r?.decoderConfig&&(n.info.decoderConfig===null?n.info.decoderConfig=r.decoderConfig:Object.assign(n.info.decoderConfig,r.decoderConfig)),{presentationTimestamp:a,decodeTimestamp:l,duration:c,data:e,size:e.byteLength,type:t,timescaleUnitsToNextSample:Wn(c,n.timescale)}};Bn=new WeakSet;n0=function(n,e){I(this,Fe).fastStart!=="fragmented"&&n.samples.push(e);const t=Wn(e.presentationTimestamp-e.decodeTimestamp,n.timescale);if(n.lastTimescaleUnits!==null){let s=Wn(e.decodeTimestamp,n.timescale,!1),r=Math.round(s-n.lastTimescaleUnits);if(n.lastTimescaleUnits+=r,n.lastSample.timescaleUnitsToNextSample=r,I(this,Fe).fastStart!=="fragmented"){let o=Dr(n.timeToSampleTable);o.sampleCount===1?(o.sampleDelta=r,o.sampleCount++):o.sampleDelta===r?o.sampleCount++:(o.sampleCount--,n.timeToSampleTable.push({sampleCount:2,sampleDelta:r}));const a=Dr(n.compositionTimeOffsetTable);a.sampleCompositionTimeOffset===t?a.sampleCount++:n.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:t})}}else n.lastTimescaleUnits=0,I(this,Fe).fastStart!=="fragmented"&&(n.timeToSampleTable.push({sampleCount:1,sampleDelta:Wn(e.duration,n.timescale)}),n.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:t}));n.lastSample=e;let i=!1;if(!n.currentChunk)i=!0;else{let s=e.presentationTimestamp-n.currentChunk.startTimestamp;if(I(this,Fe).fastStart==="fragmented"){let r=I(this,Yt)??I(this,Wt);const o=I(this,Fe).minFragmentDuration??1;n===r&&e.type==="key"&&s>=o&&(i=!0,lt(this,Or,Sl).call(this))}else i=s>=.5}i&&(n.currentChunk&&lt(this,ds,Fr).call(this,n),n.currentChunk={startTimestamp:e.presentationTimestamp,samples:[]}),n.currentChunk.samples.push(e)};yl=new WeakSet;mu=function(n,e,t){const i=I(this,Fe).firstTimestampBehavior==="strict",s=t.lastDecodeTimestamp===-1;if(i&&s&&e!==0)throw new Error(`The first chunk for your media track must have a timestamp of 0 (received DTS=${e}).Non-zero first timestamps are often caused by directly piping frames or audio data from a MediaStreamTrack into the encoder. Their timestamps are typically relative to the age of thedocument, which is probably what you want.

If you want to offset all timestamps of a track such that the first one is zero, set firstTimestampBehavior: 'offset' in the options.
`);if(I(this,Fe).firstTimestampBehavior==="offset"||I(this,Fe).firstTimestampBehavior==="cross-track-offset"){t.firstDecodeTimestamp===void 0&&(t.firstDecodeTimestamp=e);let o;I(this,Fe).firstTimestampBehavior==="offset"?o=t.firstDecodeTimestamp:o=Math.min(I(this,Yt)?.firstDecodeTimestamp??1/0,I(this,Wt)?.firstDecodeTimestamp??1/0),e-=o,n-=o}if(e<t.lastDecodeTimestamp)throw new Error(`Timestamps must be monotonically increasing (DTS went from ${t.lastDecodeTimestamp*1e6} to ${e*1e6}).`);return t.lastDecodeTimestamp=e,{presentationTimestamp:n,decodeTimestamp:e}};ds=new WeakSet;Fr=function(n){if(I(this,Fe).fastStart==="fragmented")throw new Error("Can't finalize individual chunks if 'fastStart' is set to 'fragmented'.");if(n.currentChunk){if(n.finalizedChunks.push(n.currentChunk),I(this,Ai).push(n.currentChunk),(n.compactlyCodedChunkTable.length===0||Dr(n.compactlyCodedChunkTable).samplesPerChunk!==n.currentChunk.samples.length)&&n.compactlyCodedChunkTable.push({firstChunk:n.finalizedChunks.length,samplesPerChunk:n.currentChunk.samples.length}),I(this,Fe).fastStart==="in-memory"){n.currentChunk.offset=0;return}n.currentChunk.offset=I(this,Ve).pos;for(let e of n.currentChunk.samples)I(this,Ve).write(e.data),e.data=null;lt(this,Ni,Ds).call(this)}};Or=new WeakSet;Sl=function(n=!0){if(I(this,Fe).fastStart!=="fragmented")throw new Error("Can't finalize a fragment unless 'fastStart' is set to 'fragmented'.");let e=[I(this,Yt),I(this,Wt)].filter(a=>a&&a.currentChunk);if(e.length===0)return;let t=o5(this,_l)._++;if(t===1){let a=xr(e,I(this,bi),!0);I(this,Ve).writeBox(a)}let i=I(this,Ve).pos,s=Qc(t,e);I(this,Ve).writeBox(s);{let a=Ia(!1),l=0;for(let h of e)for(let u of h.currentChunk.samples)l+=u.size;let c=I(this,Ve).measureBox(a)+l;c>=2**32&&(a.largeSize=!0,c=I(this,Ve).measureBox(a)+l),a.size=c,I(this,Ve).writeBox(a)}for(let a of e){a.currentChunk.offset=I(this,Ve).pos,a.currentChunk.moofOffset=i;for(let l of a.currentChunk.samples)I(this,Ve).write(l.data),l.data=null}let r=I(this,Ve).pos;I(this,Ve).seek(I(this,Ve).offsets.get(s));let o=Qc(t,e);I(this,Ve).writeBox(o),I(this,Ve).seek(r);for(let a of e)a.finalizedChunks.push(a.currentChunk),I(this,Ai).push(a.currentChunk),a.currentChunk=null;n&&lt(this,Ni,Ds).call(this)};Ni=new WeakSet;Ds=function(){I(this,Ve)instanceof gl&&I(this,Ve).flush()};Er=new WeakSet;Ha=function(){if(I(this,us))throw new Error("Cannot add new video or audio chunks after the file has been finalized.")};const f3=(n,e,t)=>{const i=-n/2,s=-e/2,r=new b0;return r.moveTo(i+t,s),r.lineTo(i+n-t,s),r.quadraticCurveTo(i+n,s,i+n,s+t),r.lineTo(i+n,s+e-t),r.quadraticCurveTo(i+n,s+e,i+n-t,s+e),r.lineTo(i+t,s+e),r.quadraticCurveTo(i,s+e,i,s+e-t),r.lineTo(i,s+t),r.quadraticCurveTo(i,s,i+t,s),r},p3={id:"mouse-pad-240x200",name:"Tapis de souris",dimensions:[240,200,3],printable:[240,200],create(){const n=new Bt,e=f3(2.4,2,.13),t=new vn(e,{depth:.03,bevelEnabled:!0,bevelSegments:4,bevelSize:.018,bevelThickness:.012,curveSegments:16});t.rotateX(Math.PI/2),t.translate(0,-.045,0);const i=new Lt({color:1053464,roughness:.7,metalness:.02}),s=new qe(t,i);s.castShadow=!0,s.receiveShadow=!0,n.add(s);const r=new vn(e,{depth:.004,bevelEnabled:!1,curveSegments:16});r.rotateX(Math.PI/2),r.translate(0,.001,0);const o=r.attributes.position,a=r.attributes.uv;for(let h=0;h<o.count;h++)a.setXY(h,(o.getX(h)+1.2)/2.4,(1-o.getZ(h))/2);a.needsUpdate=!0;const l=new Lt({color:16250868,roughness:.72,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),c=new qe(r,l);return c.receiveShadow=!0,n.add(c),{group:n,top:c,topMaterial:l,baseMaterial:i,printAspect:1.2,type:"flat"}}},m3={id:"mug-11oz",name:"Mug blanc 11 oz",dimensions:"Ø 82 × 95 mm",create(){const n=new Bt,e=new wn({color:16777215,roughness:.18,clearcoat:.45,clearcoatRoughness:.16}),t=new wn({color:16777215,roughness:.16,clearcoat:.5,clearcoatRoughness:.14}),i=new wn({color:16777215,roughness:.16,clearcoat:.5,clearcoatRoughness:.14}),s=new wn({color:16777215,roughness:.2,clearcoat:.4,clearcoatRoughness:.18}),r=210/257.6*Math.PI*2,o=Math.PI*2-r,a=new Cn(.7,.7,1.76,96,1,!1,o/2,r),l=new qe(a,[e,t,t]);l.castShadow=!0,l.receiveShadow=!0,n.add(l);const c=new Cn(.7,.7,1.76,32,1,!1,-o/2,o),h=new qe(c,t);h.castShadow=!0,h.receiveShadow=!0,n.add(h);const u=new qe(new Cn(.62,.62,.1,96),s);u.position.y=.79,n.add(u);const f=new qe(new Cn(.595,.595,.025,96),new wn({color:3282957,roughness:.3,clearcoat:.35,clearcoatRoughness:.22,transparent:!1}));f.position.y=.855,f.receiveShadow=!0,n.add(f);const p=new Nh([new P(0,.58,.62),new P(0,.58,1.08),new P(0,.3,1.28),new P(0,-.3,1.28),new P(0,-.58,1.08),new P(0,-.58,.62)]),g=new qe(new ll(p,64,.105,20,!1),i);return g.castShadow=!0,n.add(g),n.position.y=.82,{group:n,topMaterial:e,baseMaterial:t,handleMaterial:i,innerMaterial:s,printMesh:l,printAspect:210/95,type:"wrap"}}},g3=(n,e,t,i,s)=>{const r=-n/2,o=-e/2,a=new b0;a.moveTo(r+t,o),a.lineTo(r+n-t,o),a.quadraticCurveTo(r+n,o,r+n,o+t),a.lineTo(r+n,o+e-t),a.quadraticCurveTo(r+n,o+e,r+n-t,o+e),a.lineTo(r+t,o+e),a.quadraticCurveTo(r,o+e,r,o+e-t),a.lineTo(r,o+t),a.quadraticCurveTo(r,o,r+t,o);const l=new Ss;return l.absarc(0,e/2-s,i,0,Math.PI*2,!1),a.holes.push(l),a},_3={id:"keychain-rect-unisub",name:"Porte-clés rectangle",dimensions:[40.6,57.15,1.14],printable:[40.6,57.15],icon:"🔑",create(){const n=new Bt,e=.406,t=.5715,i=g3(e,t,.03,.015,.04),s=.008,r=.0017,o=.0017,a=new vn(i,{depth:s,bevelEnabled:!0,bevelSegments:3,bevelSize:r,bevelThickness:o,curveSegments:24});a.translate(0,0,-s/2);const l=a.attributes.position,c=a.attributes.uv;for(let p=0;p<l.count;p++){const g=l.getX(p),_=l.getY(p),m=l.getZ(p),d=(_+t/2)/t;let T=(g+e/2)/e;m<0?(T=(-g+e/2)/e,T=T*.5+.5,T=Math.max(T,.501)):(T=T*.5,T=Math.min(T,.499)),c.setXY(p,T,d)}c.needsUpdate=!0,a.translate(0,t/2+o,0);const h=new wn({color:16777215,roughness:.15,metalness:0,clearcoat:.6,clearcoatRoughness:.2}),u=new wn({color:15790320,roughness:.3,metalness:0,clearcoat:.3}),f=new qe(a,[h,u]);return f.castShadow=!0,f.receiveShadow=!0,n.add(f),{group:n,topMaterial:h,baseMaterial:u,printMesh:f,printAspect:e/t,type:"flat",twoSided:!0,meshWidth:e,meshHeight:t}}},v3=(n,e,t)=>{const i=new b0;i.absarc(0,0,n,0,Math.PI*2,!1);const s=new Ss;return s.absarc(0,n-t,e,0,Math.PI*2,!0),i.holes.push(s),i},x3={id:"keychain-round-unisub",name:"Porte-clés rond Unisub",dimensions:[63.5,63.5,2.29],printable:[63.5,63.5],icon:"⚪",create(){const n=new Bt,e=.3175,t=v3(e,.015,.04),i=.018,s=.00245,r=.002,o=new vn(t,{depth:i,bevelEnabled:!0,bevelSegments:4,bevelSize:r,bevelThickness:s,curveSegments:32});o.translate(0,0,-i/2);const a=o.attributes.position,l=o.attributes.uv;for(let f=0;f<a.count;f++){const p=a.getX(f),g=a.getY(f),_=a.getZ(f),m=(g+e)/(2*e);let d=(p+e)/(2*e);_<0?(d=(-p+e)/(2*e),d=d*.5+.5,d=Math.max(d,.501)):(d=d*.5,d=Math.min(d,.499)),l.setXY(f,d,m)}l.needsUpdate=!0,o.translate(0,e+s,0);const c=new wn({color:16777215,roughness:.15,metalness:0,clearcoat:.6,clearcoatRoughness:.2}),h=new wn({color:15790320,roughness:.3,metalness:0,clearcoat:.3}),u=new qe(o,[c,h]);return u.castShadow=!0,u.receiveShadow=!0,n.add(u),{group:n,topMaterial:c,baseMaterial:h,printMesh:u,printAspect:1,type:"flat",twoSided:!0,meshWidth:.635,meshHeight:.635}}},y3={id:"keychain-heart",name:"Porte-clés Cœur Unisub",dimensions:[57.2,63.5,2.29],printable:[57.2,63.5],icon:"🤍",create(){const n=new Bt,e=new b0;e.moveTo(0,.2),e.bezierCurveTo(-.1,.4,-.5,.4,-.5,.1),e.bezierCurveTo(-.5,-.2,-.2,-.4,0,-.6),e.bezierCurveTo(.2,-.4,.5,-.2,.5,.1),e.bezierCurveTo(.5,.4,.1,.4,0,.2);const t=new Ss;t.absarc(.35,.22,.035,0,Math.PI*2,!1),e.holes.push(t);const i=.0229,s=new vn(e,{depth:i,bevelEnabled:!0,bevelSegments:3,bevelSize:.002,bevelThickness:.002,curveSegments:32});s.computeBoundingBox();const r=s.boundingBox,o=r.getCenter(new P),a=r.getSize(new P);s.translate(-o.x,-o.y,-i/2),s.translate(0,a.y/2+.1,0);const l=s.attributes.position,c=s.attributes.uv;for(let p=0;p<l.count;p++){const g=l.getX(p),_=l.getY(p),m=l.getZ(p);let d=(g+a.x/2)/a.x,T=(_-.1)/a.y;m<0?(d=(-g+a.x/2)/a.x,d=d*.5+.5,d=Math.max(d,.501)):(d=d*.5,d=Math.min(d,.499)),c.setXY(p,d,T)}c.needsUpdate=!0;const h=new wn({color:16777215,roughness:.15,clearcoat:.8,clearcoatRoughness:.1}),u=new wn({color:2236962,roughness:.4}),f=new qe(s,[h,u]);return f.castShadow=!0,f.receiveShadow=!0,n.add(f),{group:n,topMaterial:h,baseMaterial:u,printMesh:f,printAspect:57.2/63.5,type:"flat",twoSided:!0,meshWidth:1,meshHeight:1}}},S3=/^[og]\s*(.+)?/,M3=/^mtllib /,E3=/^usemtl /,b3=/^usemap /,eh=/\s+/,th=new P,Oo=new P,nh=new P,ih=new P,Mn=new P,fr=new We;function T3(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,r=this.object.geometry.normals;th.fromArray(s,e),Oo.fromArray(s,t),nh.fromArray(s,i),Mn.subVectors(nh,Oo),ih.subVectors(th,Oo),Mn.cross(ih),Mn.normalize(),r.push(Mn.x,Mn.y,Mn.z),r.push(Mn.x,Mn.y,Mn.z),r.push(Mn.x,Mn.y,Mn.z)},addColor:function(e,t,i){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&r.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,r,o,a,l,c){const h=this.vertices.length;let u=this.parseVertexIndex(e,h),f=this.parseVertexIndex(t,h),p=this.parseVertexIndex(i,h);if(this.addVertex(u,f,p),this.addColor(u,f,p),a!==void 0&&a!==""){const g=this.normals.length;u=this.parseNormalIndex(a,g),f=this.parseNormalIndex(l,g),p=this.parseNormalIndex(c,g),this.addNormal(u,f,p)}else this.addFaceNormal(u,f,p);if(s!==void 0&&s!==""){const g=this.uvs.length;u=this.parseUVIndex(s,g),f=this.parseUVIndex(r,g),p=this.parseUVIndex(o,g),this.addUV(u,f,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const r=this.parseVertexIndex(e[i],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],i));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return n.startObject("",!1),n}class w3 extends Ls{constructor(e){super(e),this.materials=null}load(e,t,i,s){const r=this,o=new Qf(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new T3;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let a=0,l=i.length;a<l;a++){const c=i[a].trimStart();if(c.length===0)continue;const h=c.charAt(0);if(h!=="#")if(h==="v"){const u=c.split(eh);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(fr.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),Xt),t.colors.push(fr.r,fr.g,fr.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){const f=c.slice(1).trim().split(eh),p=[];for(let _=0,m=f.length;_<m;_++){const d=f[_];if(d.length>0){const T=d.split("/");p.push(T)}}const g=p[0];for(let _=1,m=p.length-1;_<m;_++){const d=p[_],T=p[_+1];t.addFace(g[0],d[0],T[0],g[1],d[1],T[1],g[2],d[2],T[2])}}else if(h==="l"){const u=c.substring(1).trim().split(" ");let f=[];const p=[];if(c.indexOf("/")===-1)f=u;else for(let g=0,_=u.length;g<_;g++){const m=u[g].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&p.push(m[1])}t.addLineGeometry(f,p)}else if(h==="p"){const f=c.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((s=S3.exec(c))!==null){const u=(" "+s[0].slice(1).trim()).slice(1);t.startObject(u)}else if(E3.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(M3.test(c))t.materialLibraries.push(c.substring(7).trim());else if(b3.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(s=c.split(" "),s.length>1){const f=s[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new Bt;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],h=c.geometry,u=c.materials,f=h.type==="Line",p=h.type==="Points";let g=!1;if(h.vertices.length===0)continue;const _=new kt;_.setAttribute("position",new ut(h.vertices,3)),h.normals.length>0&&_.setAttribute("normal",new ut(h.normals,3)),h.colors.length>0&&(g=!0,_.setAttribute("color",new ut(h.colors,3))),h.hasUVIndices===!0&&_.setAttribute("uv",new ut(h.uvs,2));const m=[];for(let T=0,y=u.length;T<y;T++){const v=u[T],R=v.name+"_"+v.smooth+"_"+g;let M=t.materials[R];if(this.materials!==null){if(M=this.materials.create(v.name),f&&M&&!(M instanceof ss)){const A=new ss;Rn.prototype.copy.call(A,M),A.color.copy(M.color),M=A}else if(p&&M&&!(M instanceof ji)){const A=new ji({size:10,sizeAttenuation:!1});Rn.prototype.copy.call(A,M),A.color.copy(M.color),A.map=M.map,M=A}}M===void 0&&(f?M=new ss:p?M=new ji({size:1,sizeAttenuation:!1}):M=new Yf,M.name=v.name,M.flatShading=!v.smooth,M.vertexColors=g,t.materials[R]=M),m.push(M)}let d;if(m.length>1){for(let T=0,y=u.length;T<y;T++){const v=u[T];_.addGroup(v.groupStart,v.groupCount,T)}f?d=new Aa(_,m):p?d=new bo(_,m):d=new qe(_,m)}else f?d=new Aa(_,m[0]):p?d=new bo(_,m[0]):d=new qe(_,m[0]);d.name=c.name,r.add(d)}else if(t.vertices.length>0){const a=new ji({size:1,sizeAttenuation:!1}),l=new kt;l.setAttribute("position",new ut(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new ut(t.colors,3)),a.vertexColors=!0);const c=new bo(l,a);r.add(c)}return r}}class sh extends kt{constructor(e=new qe,t=new P,i=new un,s=new P(1,1,1)){super();const r=[],o=[],a=[],l=new P,c=new Qe().getNormalMatrix(e.matrixWorld),h=new yt;h.makeRotationFromEuler(i),h.setPosition(t);const u=new yt;u.copy(h).invert(),f(),this.setAttribute("position",new ut(r,3)),this.setAttribute("uv",new ut(a,2)),o.length>0&&this.setAttribute("normal",new ut(o,3));function f(){let m=[];const d=new P,T=new P,y=e.geometry,v=y.attributes.position,R=y.attributes.normal;if(y.index!==null){const M=y.index;for(let A=0;A<M.count;A++)d.fromBufferAttribute(v,M.getX(A)),R?(T.fromBufferAttribute(R,M.getX(A)),p(m,d,T)):p(m,d)}else{if(v===void 0)return;for(let M=0;M<v.count;M++)d.fromBufferAttribute(v,M),R?(T.fromBufferAttribute(R,M),p(m,d,T)):p(m,d)}m=g(m,l.set(1,0,0)),m=g(m,l.set(-1,0,0)),m=g(m,l.set(0,1,0)),m=g(m,l.set(0,-1,0)),m=g(m,l.set(0,0,1)),m=g(m,l.set(0,0,-1));for(let M=0;M<m.length;M++){const A=m[M];a.push(.5+A.position.x/s.x,.5+A.position.y/s.y),A.position.applyMatrix4(h),r.push(A.position.x,A.position.y,A.position.z),A.normal!==null&&o.push(A.normal.x,A.normal.y,A.normal.z)}}function p(m,d,T=null){d.applyMatrix4(e.matrixWorld),d.applyMatrix4(u),T?(T.applyNormalMatrix(c),m.push(new Bo(d.clone(),T.clone()))):m.push(new Bo(d.clone()))}function g(m,d){const T=[],y=.5*Math.abs(s.dot(d));for(let v=0;v<m.length;v+=3){let R=0,M,A,L,E;const b=m[v+0].position.dot(d)-y,D=m[v+1].position.dot(d)-y,O=m[v+2].position.dot(d)-y,z=b>0,X=D>0,V=O>0;switch(R=(z?1:0)+(X?1:0)+(V?1:0),R){case 0:{T.push(m[v]),T.push(m[v+1]),T.push(m[v+2]);break}case 1:{if(z&&(M=m[v+1],A=m[v+2],L=_(m[v],M,d,y),E=_(m[v],A,d,y)),X){M=m[v],A=m[v+2],L=_(m[v+1],M,d,y),E=_(m[v+1],A,d,y),T.push(L),T.push(A.clone()),T.push(M.clone()),T.push(A.clone()),T.push(L.clone()),T.push(E);break}V&&(M=m[v],A=m[v+1],L=_(m[v+2],M,d,y),E=_(m[v+2],A,d,y)),T.push(M.clone()),T.push(A.clone()),T.push(L),T.push(E),T.push(L.clone()),T.push(A.clone());break}case 2:{z||(M=m[v].clone(),A=_(M,m[v+1],d,y),L=_(M,m[v+2],d,y),T.push(M),T.push(A),T.push(L)),X||(M=m[v+1].clone(),A=_(M,m[v+2],d,y),L=_(M,m[v],d,y),T.push(M),T.push(A),T.push(L)),V||(M=m[v+2].clone(),A=_(M,m[v],d,y),L=_(M,m[v+1],d,y),T.push(M),T.push(A),T.push(L));break}}}return T}function _(m,d,T,y){const v=m.position.dot(T)-y,R=d.position.dot(T)-y,M=v/(v-R),A=new P(m.position.x+M*(d.position.x-m.position.x),m.position.y+M*(d.position.y-m.position.y),m.position.z+M*(d.position.z-m.position.z));let L=null;return m.normal!==null&&d.normal!==null&&(L=new P(m.normal.x+M*(d.normal.x-m.normal.x),m.normal.y+M*(d.normal.y-m.normal.y),m.normal.z+M*(d.normal.z-m.normal.z))),new Bo(A,L)}}}class Bo{constructor(e,t=null){this.position=e,this.normal=t}clone(){const e=this.position.clone(),t=this.normal!==null?this.normal.clone():null;return new this.constructor(e,t)}}const A3="/assets/male_crew_neck_worn_v1_no_tag_517_YEE-QksqSogE.obj",C3={id:"tshirt-3d",name:"T-shirt 3D (Dos, Cœur, Ventre)",dimensions:"S, M, L, XL",printable:[40,70],icon:"👕",printAspect:40/70,create(){const n=new Bt,e=new Bt;let t=!1,i=null;const s=new Lt({color:16777215,roughness:.9,metalness:.05}),r=new Lt({color:16777215,roughness:.8,metalness:.1,transparent:!0,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,alphaTest:.01,blending:G0});new w3().load(A3,l=>{l.traverse(c=>{c.isMesh&&(c.geometry.attributes.normal||c.geometry.computeVertexNormals(),c.geometry.scale(.01,.01,.01),c.geometry.translate(0,-.1,0),c.geometry.computeVertexNormals(),c.geometry.computeBoundingBox(),c.geometry.computeBoundingSphere(),c.material=s,c.castShadow=!0,c.receiveShadow=!0,n.userData.mainMesh=c)}),n.add(l),t=!0,i&&(a(i.texture,i.isTwoSided,i.canvas),i=null)},void 0,l=>{console.error("Erreur de chargement du modèle T-Shirt:",l)});function a(l,c,h){if(!t||!n.userData.mainMesh){i={texture:l,isTwoSided:c,canvas:h};return}for(;e.children.length>0;){const E=e.children[0];e.remove(E),E.geometry?.dispose()}const u=n.userData.mainMesh;e.parent||u.add(e);const f=r.clone();f.map=l,f.needsUpdate=!0;const p=r.clone();p.map=l,p.needsUpdate=!0,n.updateMatrixWorld(!0);const g=new Fi().setFromObject(u),_=g.getCenter(new P),m=g.getSize(new P),d=m.y*.85,T=d*(40/70),y=_.clone();y.z+=m.z*.5;const v=new un(0,0,0),R=new P(T,d,m.z*3),M=_.clone();M.z-=m.z*.5;const A=new un(0,Math.PI,0),L=new P(T,d,m.z*3);try{const E=new sh(u,y,v,R);if(c){const D=E.attributes.uv;for(let O=0;O<D.count;O++)D.setX(O,D.getX(O)*.5)}const b=new qe(E,f);if(e.add(b),c){const D=new sh(u,M,A,L),O=D.attributes.uv;for(let X=0;X<O.count;X++)O.setX(X,O.getX(X)*.5+.5);const z=new qe(D,p);e.add(z)}}catch(E){console.error("Erreur Decal:",E)}}return{group:n,topMaterial:s,applyDecals:a,type:"3d-decal",twoSided:!0}}},R3=(n,e,t)=>{const i=-n/2,s=-e/2,r=new b0;return r.moveTo(i+t,s),r.lineTo(i+n-t,s),r.quadraticCurveTo(i+n,s,i+n,s+t),r.lineTo(i+n,s+e-t),r.quadraticCurveTo(i+n,s+e,i+n-t,s+e),r.lineTo(i+t,s+e),r.quadraticCurveTo(i,s+e,i,s+e-t),r.lineTo(i,s+t),r.quadraticCurveTo(i,s,i+t,s),r},P3={id:"puzzle-120",name:"Puzzle 120 pièces",dimensions:[280,195,2],printable:[280,195],icon:"🧩",create(){const n=new Bt,e=2.8,t=1.95,i=R3(e,t,.02),s=new vn(i,{depth:.02,bevelEnabled:!0,bevelSegments:2,bevelSize:.005,bevelThickness:.005,curveSegments:8});s.rotateX(Math.PI/2),s.translate(0,-.015,0);const r=new Lt({color:14735048,roughness:.9,metalness:0}),o=new qe(s,r);o.castShadow=!0,o.receiveShadow=!0,n.add(o);const a=new vn(i,{depth:.002,bevelEnabled:!1,curveSegments:8});a.rotateX(Math.PI/2),a.translate(0,.001,0);const l=a.attributes.position,c=a.attributes.uv;for(let M=0;M<l.count;M++){const A=(l.getX(M)+e/2)/e,L=(t/2-l.getZ(M))/t;c.setXY(M,A,L)}c.needsUpdate=!0;const h=document.createElement("canvas");h.width=1500,h.height=800;const u=h.getContext("2d");u.clearRect(0,0,1500,800),u.lineCap="round",u.lineJoin="round";const f=15,p=8,g=1500/f,_=800/p,m=()=>{u.beginPath();for(let M=1;M<f;M++){u.moveTo(M*g,0);for(let A=0;A<p;A++){const L=A*_,E=L+_/2,b=(M+A)%2===0?1:-1;u.lineTo(M*g,E-15),u.bezierCurveTo(M*g+25*b,E-15,M*g+25*b,E+15,M*g,E+15),u.lineTo(M*g,L+_)}}for(let M=1;M<p;M++){u.moveTo(0,M*_);for(let A=0;A<f;A++){const L=A*g,E=L+g/2,b=(A+M)%2===0?1:-1;u.lineTo(E-15,M*_),u.bezierCurveTo(E-15,M*_+25*b,E+15,M*_+25*b,E+15,M*_),u.lineTo(L+g,M*_)}}};u.save(),u.translate(-2,-2),u.strokeStyle="rgba(0, 0, 0, 0.7)",u.lineWidth=4,m(),u.stroke(),u.restore(),u.save(),u.translate(2,2),u.strokeStyle="rgba(255, 255, 255, 0.8)",u.lineWidth=4,m(),u.stroke(),u.restore(),u.save(),u.strokeStyle="rgba(10, 10, 10, 0.9)",u.lineWidth=2,m(),u.stroke(),u.restore();const d=new Vr(h);d.anisotropy=4;const T=new Lt({color:16777215,roughness:.2,metalness:.1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),y=new qe(a,T);y.receiveShadow=!0,n.add(y);const v=new nl({map:d,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),R=new qe(a,v);return n.add(R),{group:n,top:y,topMaterial:T,baseMaterial:r,printAspect:e/t,type:"flat",printMesh:y,meshWidth:e,meshHeight:t}}},L3=(n,e,t)=>{const i=-n/2,s=-e/2,r=new b0;return r.moveTo(i+t,s),r.lineTo(i+n-t,s),r.quadraticCurveTo(i+n,s,i+n,s+t),r.lineTo(i+n,s+e-t),r.quadraticCurveTo(i+n,s+e,i+n-t,s+e),r.lineTo(i+t,s+e),r.quadraticCurveTo(i,s+e,i,s+e-t),r.lineTo(i,s+t),r.quadraticCurveTo(i,s,i+t,s),r},D3={id:"coaster-square",name:"Sous-verre carré",dimensions:[90,90,3],printable:[90,90],icon:"🔲",create(){const n=new Bt,e=.9,t=L3(e,e,.08),i=new vn(t,{depth:.03,bevelEnabled:!0,bevelSegments:2,bevelSize:.005,bevelThickness:.005,curveSegments:16});i.rotateX(Math.PI/2),i.translate(0,-.015,0);const s=new Lt({color:4008735,roughness:1,metalness:0}),r=new qe(i,s);r.castShadow=!0,r.receiveShadow=!0,n.add(r);const o=new vn(t,{depth:.004,bevelEnabled:!1,curveSegments:16});o.rotateX(Math.PI/2),o.translate(0,.002,0);const a=o.attributes.position,l=o.attributes.uv;for(let u=0;u<a.count;u++){const f=(a.getX(u)+e/2)/e,p=(e/2-a.getZ(u))/e;l.setXY(u,f,p)}l.needsUpdate=!0;const c=new wn({color:16777215,roughness:.15,metalness:0,clearcoat:.5,clearcoatRoughness:.2,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),h=new qe(o,c);return h.receiveShadow=!0,n.add(h),{group:n,top:h,topMaterial:c,baseMaterial:s,printAspect:1,type:"flat",printMesh:h,meshWidth:e,meshHeight:e}}},I3={id:"coaster-round",name:"Sous-verre rond (Caoutchouc)",dimensions:[100,100,3],printable:[100,100],icon:"⚪",create(){const n=new Bt,e=.5,t=new Cn(e,e,.03,64),i=new Lt({color:2236962,roughness:.9,metalness:0}),s=new qe(t,i);s.position.y=-.015,s.castShadow=!0,s.receiveShadow=!0,n.add(s);const r=new Cn(e,e,.002,64),o=new Lt({color:16777215,roughness:.8,metalness:.1}),a=new qe(r,o);a.position.y=.001,a.receiveShadow=!0,n.add(a);const l=r.attributes.position,c=r.attributes.uv;for(let h=0;h<l.count;h++)if(l.getY(h)>0){const f=(l.getX(h)/e+1)/2,p=(l.getZ(h)/e+1)/2;c.setXY(h,f,1-p)}return c.needsUpdate=!0,{group:n,top:a,topMaterial:o,baseMaterial:i,printAspect:1,type:"flat",printMesh:a,meshWidth:1,meshHeight:1}}},rh=(n,e,t,i)=>{const s=new J0(n,e,t,i),r=s.attributes.position;for(let o=0;o<r.count;o++){const a=r.getX(o),l=r.getY(o),c=a/(n/2),h=l/(e/2),f=Math.cos(c*Math.PI/2)*Math.cos(h*Math.PI/2)*.05;r.setZ(o,f)}return s.computeVertexNormals(),s},U3={id:"pencil-case",name:"Trousse de maquillage",dimensions:[210,130,10],printable:[210,130],icon:"👝",create(){const n=new Bt,e=2.1,t=1.3,i=rh(e,t,32,32);let s=i.attributes.uv;for(let _=0;_<s.count;_++){let m=s.getX(_);s.setX(_,m*.5)}i.rotateX(-Math.PI/2);const r=new Lt({color:16777215,roughness:.95,metalness:0}),o=new qe(i,r);o.castShadow=!0,o.receiveShadow=!0,n.add(o);const a=rh(e,t,32,32);s=a.attributes.uv;for(let _=0;_<s.count;_++){let m=1-s.getX(_);s.setX(_,m*.5+.5)}a.rotateX(Math.PI/2);const l=new Lt({color:15658734,roughness:.95,metalness:0}),c=new qe(a,r);c.castShadow=!0,c.receiveShadow=!0,n.add(c);const h=new Cn(.015,.015,e,8);h.rotateZ(Math.PI/2),h.translate(0,.005,-t/2);const u=new Lt({color:2236962,roughness:.5,metalness:.3}),f=new qe(h,u);n.add(f);const p=new K0(.04,.01,.08);p.translate(e/2-.1,.01,-t/2-.04);const g=new qe(p,u);return n.add(g),{group:n,top:o,topMaterial:r,baseMaterial:l,printAspect:e/t,type:"flat",printMesh:o,meshWidth:e,meshHeight:t,twoSided:!0}}},oh=(n,e)=>{const t=new J0(n,n,e,e),i=t.attributes.position;for(let s=0;s<i.count;s++){const r=i.getX(s),o=i.getY(s),a=Math.sqrt(r*r+o*o)/(n/Math.sqrt(2)),l=Math.cos(a*Math.PI/2)*.15;i.setZ(s,l)}return t.computeVertexNormals(),t},N3={id:"cushion",name:"Housse de Coussin (Sublimation)",dimensions:[400,400,150],printable:[400,400],icon:"🛋️",create(){const n=new Bt,e=2,t=oh(e,32);let i=t.attributes.uv;for(let c=0;c<i.count;c++)i.setX(c,i.getX(c)*.5);t.rotateX(-Math.PI/2);const s=new Lt({color:16777215,roughness:.9,metalness:0}),r=new qe(t,s);r.castShadow=!0,r.receiveShadow=!0,n.add(r);const o=oh(e,32);i=o.attributes.uv;for(let c=0;c<i.count;c++){let h=1-i.getX(c);i.setX(c,h*.5+.5)}o.rotateX(Math.PI/2);const a=new Lt({color:16777215,roughness:.9,metalness:0}),l=new qe(o,s);return l.castShadow=!0,l.receiveShadow=!0,n.add(l),{group:n,top:r,topMaterial:s,baseMaterial:a,printAspect:1,type:"flat",printMesh:r,meshWidth:e,meshHeight:e,twoSided:!0}}},I0=[[0,.0589],[0,.0589],[0,.0589],[0,.0597],[0,.0604],[0,.0611],[0,.0618],[0,.0625],[0,.0632],[0,.0639],[0,.0646],[0,.0653],[0,.066],[0,.0667],[0,.0674],[0,.0681],[0,.0688],[0,.0695],[0,.0702],[0,.0709],[0,.0717],[0,.0724],[0,.0731],[0,.0738],[0,.0745],[0,.0752],[0,.0759],[0,.0766],[0,.0773],[0,.078],[0,.0787],[0,.0794],[0,.0801],[0,.0808],[0,.0815],[0,.0822],[0,.0829],[0,.0837],[0,.0844],[0,.0851],[0,.0858],[0,.0865],[0,.0872],[0,.0879],[0,.0886],[0,.0893],[0,.09],[0,.0907],[0,.0914],[0,.0921],[0,.0928],[0,.0935],[0,.0942],[0,.0949],[0,.0956],[0,.0964],[0,.0971],[0,.0978],[0,.0985],[0,.0992],[0,.0999],[0,.1006],[0,.1013],[0,.102],[0,.1027],[0,.1034],[0,.1041],[0,.1048],[0,.1055],[0,.1062],[0,.1069],[0,.1076],[0,.1084],[0,.1091],[0,.1098],[0,.1105],[0,.1112],[0,.1119],[0,.1126],[0,.1133],[0,.114],[0,.1147],[0,.1154],[0,.1161],[0,.1168],[0,.1175],[0,.1182],[0,.1189],[0,.1196],[0,.1203],[0,.1211],[0,.1218],[0,.1225],[0,.1232],[0,.1239],[0,.1246],[0,.1253],[0,.126],[0,.1267],[0,.1274],[0,.1281],[0,.1288],[0,.1295],[0,.1302],[0,.1309],[0,.1316],[0,.1323],[0,.1331],[0,.1338],[0,.1345],[0,.1352],[0,.1359],[0,.1366],[0,.1373],[0,.138],[0,.1387],[0,.1394],[0,.1401],[0,.1408],[0,.1415],[0,.1422],[0,.1429],[0,.1436],[0,.1443],[0,.1451],[0,.1458],[0,.1465],[0,.1472],[0,.1479],[0,.1486],[0,.1493],[0,.15],[0,.1507],[0,.1514],[0,.1521],[0,.1528],[0,.1535],[0,.1542],[0,.1549],[0,.1556],[0,.1563],[0,.157],[0,.1578],[0,.1585],[0,.1592],[0,.1599],[0,.1606],[0,.1613],[0,.162],[0,.1627],[0,.1634],[0,.1641],[0,.1648],[0,.1655],[0,.1662],[0,.1669],[0,.1676],[0,.1683],[0,.169],[0,.1698],[0,.1705],[0,.1712],[0,.1719],[0,.1726],[0,.1733],[0,.174],[0,.1747],[0,.1754],[0,.1761],[0,.1768],[0,.1775],[0,.1782],[0,.1789],[0,.1796],[0,.1803],[0,.181],[0,.1818],[0,.1825],[0,.1832],[0,.1839],[0,.1846],[0,.1853],[0,.186],[0,.1867],[0,.1874],[0,.1881],[0,.1888],[0,.1895],[0,.1902],[0,.1909],[0,.1916],[0,.1923],[0,.193],[0,.1937],[0,.1945],[0,.1952],[0,.1959],[0,.1966],[0,.1973],[0,.198],[0,.1987],[0,.1994],[0,.2001],[0,.2008],[0,.2015],[0,.2022],[0,.2029],[0,.2036],[0,.2043],[0,.205],[0,.2057],[0,.2065],[0,.2072],[0,.2079],[0,.2086],[0,.2093],[0,.21],[0,.2107],[0,.2114],[0,.2121],[0,.2128],[0,.2135],[0,.2142],[0,.2149],[0,.2156],[0,.2163],[0,.217],[0,.2177],[0,.2185],[0,.2192],[0,.2199],[0,.2206],[0,.2213],[0,.222],[0,.2227],[0,.2234],[0,.2241],[0,.2248],[0,.2255],[0,.2262],[0,.2269],[0,.2276],[0,.2283],[0,.229],[0,.2297],[0,.2304],[0,.2312],[0,.2319],[0,.2326],[0,.2333],[0,.234],[0,.2347],[0,.2354],[0,.2361],[0,.2368],[0,.2375],[0,.2382],[0,.2389],[0,.2396],[0,.2403],[0,.241],[0,.2417],[0,.2424],[0,.2432],[0,.2439],[0,.2446],[0,.2453],[0,.246],[0,.2467],[0,.2474],[0,.2481],[0,.2488],[0,.2495],[0,.2502],[0,.2509],[0,.2516],[0,.2523],[0,.253],[0,.2537],[0,.2544],[0,.2551],[0,.2559],[0,.2566],[0,.2573],[0,.258],[0,.2587],[0,.2594],[0,.2601],[0,.2608],[0,.2615],[0,.2622],[0,.2629],[0,.2636],[0,.2643],[0,.265],[0,.2657],[0,.2664],[0,.2671],[0,.2679],[0,.2686],[0,.2693],[0,.27],[0,.2707],[0,.2714],[0,.2721],[0,.2728],[0,.2735],[0,.2742],[0,.2749],[0,.2756],[0,.2763],[0,.277],[0,.2777],[0,.2784],[0,.2791],[0,.2799],[0,.2806],[0,.2813],[0,.282],[0,.2827],[0,.2834],[0,.2841],[0,.2848],[0,.2855],[0,.2862],[0,.2869],[0,.2876],[0,.2883],[0,.289],[0,.2897],[0,.2904],[0,.2911],[0,.2918],[0,.2926],[0,.2933],[0,.294],[0,.2947],[0,.2954],[0,.2961],[0,.2968],[0,.2975],[0,.2982],[0,.2989],[0,.2996],[0,.3003],[0,.301],[0,.3017],[0,.3024],[0,.3031],[0,.3038],[0,.3046],[0,.3053],[0,.306],[0,.3067],[0,.3074],[0,.3081],[0,.3088],[0,.3095],[0,.3102],[0,.3109],[0,.3116],[0,.3123],[0,.313],[0,.3137],[0,.3144],[0,.3151],[0,.3158],[0,.3166],[0,.3173],[0,.318],[0,.3187],[0,.3194],[0,.3201],[0,.3208],[0,.3215],[0,.3222],[0,.3229],[0,.3236],[0,.3243],[0,.325],[0,.3257],[0,.3264],[0,.3271],[0,.3278],[0,.3285],[0,.3293],[0,.33],[0,.3307],[0,.3314],[0,.3321],[0,.3328],[0,.3335],[0,.3342],[0,.3349],[0,.3356],[0,.3363],[0,.337],[0,.3377],[0,.3384],[0,.3391],[0,.3398],[0,.3405],[0,.3413],[0,.342],[0,.3427],[0,.3434],[0,.3441],[0,.3448],[0,.3455],[0,.3462],[0,.3469],[0,.3476],[0,.3483],[0,.349],[0,.3497],[0,.3504],[0,.3511],[0,.3518],[0,.3525],[0,.3532],[0,.354],[0,.3547],[0,.3554],[0,.3561],[0,.3568],[0,.3575],[0,.3582],[0,.3589],[0,.3596],[0,.3603],[0,.361],[0,.3617],[0,.3624],[0,.3631],[0,.3638],[0,.3645],[0,.3652],[0,.366],[0,.3667],[0,.3674],[0,.3681],[0,.3688],[0,.3695],[0,.3702],[0,.3709],[0,.3716],[0,.3723],[0,.373],[0,.3737],[0,.3744],[0,.3751],[0,.3758],[0,.3765],[0,.3772],[0,.378],[0,.3787],[0,.3794],[0,.3801],[0,.3808],[0,.3815],[0,.3822],[0,.3829],[0,.3836],[0,.3843],[0,.385],[0,.3857],[0,.3864],[0,.3871],[0,.3878],[0,.3885],[0,.3892],[0,.3899],[0,.3907],[0,.3914],[0,.3921],[0,.3928],[0,.3935],[0,.3942],[0,.3949],[0,.3956],[0,.3963],[0,.397],[0,.3977],[0,.3984],[0,.3991],[0,.3998],[0,.4005],[0,.4012],[0,.4019],[0,.4027],[0,.4034],[0,.4041],[0,.4048],[0,.4055],[0,.4062],[0,.4069],[0,.4076],[0,.4083],[0,.409],[0,.4097],[0,.4104],[0,.4111],[0,.4118],[0,.4125],[0,.4132],[0,.4139],[0,.4147],[0,.4154],[0,.4161],[0,.4168],[0,.4175],[0,.4182],[0,.4189],[0,.4196],[0,.4203],[0,.421],[0,.4217],[0,.4224],[0,.4231],[0,.4238],[0,.4245],[0,.4252],[0,.4259],[0,.4266],[0,.4274],[0,.4281],[0,.4288],[0,.4295],[0,.4302],[0,.4309],[0,.4316],[0,.4323],[0,.433],[0,.4337],[0,.4344],[0,.4351],[0,.4358],[0,.4365],[0,.4372],[0,.4379],[0,.4386],[0,.4394],[0,.4401],[0,.4408],[0,.4415],[0,.4422],[0,.4429],[0,.4436],[0,.4443],[0,.445],[0,.4457],[0,.4464],[0,.4471],[0,.4478],[0,.4485],[0,.4492],[0,.4499],[0,.4506],[0,.4513],[0,.4521],[0,.4528],[0,.4535],[0,.4542],[0,.4549],[0,.4556],[0,.4563],[0,.457],[0,.4577],[0,.4584],[0,.4591],[0,.4598],[0,.4605],[0,.4612],[0,.4619],[0,.4626],[0,.4633],[0,.4641],[0,.4648],[0,.4655],[0,.4662],[0,.4669],[0,.4676],[0,.4683],[0,.469],[0,.4697],[0,.4704],[0,.4711],[0,.4718],[0,.4725],[0,.4732],[0,.4739],[0,.4746],[0,.4753],[0,.4761],[0,.4768],[0,.4775],[0,.4782],[0,.4789],[0,.4796],[0,.4803],[0,.481],[0,.4817],[0,.4824],[0,.4831],[0,.4838],[0,.4845],[0,.4852],[0,.4859],[0,.4866],[0,.4873],[0,.488],[0,.4888],[0,.4895],[0,.4902],[0,.4909],[0,.4916],[0,.4923],[0,.493],[0,.4937],[0,.4944],[0,.4951],[0,.4958],[0,.4965],[0,.4972],[0,.4979],[0,.4986],[0,.4993],[0,.5],[0,.5008],[0,.5015],[0,.5022],[0,.5029],[0,.5036],[0,.5043],[0,.505],[0,.5057],[0,.5064],[0,.5071],[0,.5078],[0,.5085],[0,.5092],[0,.5099],[0,.5106],[0,.5113],[0,.512],[0,.5128],[0,.5135],[0,.5142],[0,.5149],[0,.5156],[0,.5163],[0,.517],[0,.5177],[0,.5184],[0,.5191],[0,.5198],[0,.5205],[0,.5212],[0,.5219],[0,.5226],[0,.5233],[0,.524],[0,.5247],[0,.5255],[0,.5262],[0,.5269],[0,.5276],[0,.5283],[0,.529],[0,.5297],[0,.5304],[0,.5311],[0,.5318],[0,.5325],[0,.5332],[0,.5339],[0,.5346],[0,.5353],[0,.536],[0,.5367],[0,.5375],[0,.5382],[0,.5389],[0,.5396],[0,.5403],[0,.541],[0,.5417],[0,.5424],[0,.5431],[0,.5438],[0,.5445],[0,.5452],[0,.5459],[0,.5466],[0,.5473],[0,.548],[0,.5487],[0,.5494],[0,.5502],[0,.5509],[0,.5516],[0,.5523],[0,.553],[0,.5537],[0,.5544],[0,.5551],[0,.5558],[0,.5565],[0,.5572],[0,.5579],[0,.5586],[0,.5593],[0,.56],[0,.5607],[0,.5614],[0,.5622],[0,.5629],[0,.5636],[0,.5643],[0,.565],[0,.5657],[0,.5664],[0,.5671],[0,.5678],[0,.5685],[0,.5692],[0,.5699],[0,.5706],[0,.5713],[0,.572],[0,.5727],[0,.5734],[0,.5742],[0,.5749],[0,.5756],[0,.5763],[0,.577],[0,.5777],[0,.5784],[0,.5791],[0,.5798],[0,.5805],[0,.5812],[0,.5819],[0,.5826],[0,.5833],[0,.584],[0,.5847],[0,.5854],[0,.5861],[0,.5869],[0,.5876],[0,.5883],[0,.589],[0,.5897],[0,.5904],[0,.5911],[0,.5918],[0,.5925],[0,.5932],[0,.5939],[0,.5946],[0,.5953],[0,.596],[0,.5967],[0,.5974],[0,.5981],[0,.5989],[0,.5996],[0,.6003],[0,.601],[0,.6017],[0,.6024],[0,.6031],[0,.6038],[0,.6045],[0,.6052],[0,.6059],[0,.6066],[0,.6073],[0,.608],[0,.6087],[0,.6094],[0,.6101],[0,.6109],[0,.6116],[0,.6123],[0,.613],[0,.6137],[0,.6144],[0,.6151],[0,.6158],[0,.6165],[0,.6172],[0,.6179],[0,.6186],[0,.6193],[0,.62],[0,.6207],[0,.6214],[0,.6221],[0,.6228],[0,.6236],[0,.6243],[0,.625],[0,.6257],[0,.6264],[0,.6271],[0,.6278],[0,.6285],[0,.6292],[0,.6299],[0,.6306],[0,.6313],[0,.632],[0,.6327],[0,.6334],[0,.6341],[0,.6348],[0,.6356],[0,.6363],[0,.637],[0,.6377],[0,.6384],[0,.6391],[0,.6398],[0,.6405],[0,.6412],[0,.6419],[0,.6426],[0,.6433],[0,.644],[0,.6447],[0,.6454],[0,.6461],[0,.6468],[0,.6475],[0,.6483],[0,.649],[0,.6497],[0,.6504],[0,.6511],[0,.6518],[0,.6525],[0,.6532],[0,.6539],[0,.6546],[0,.6553],[0,.656],[0,.6567],[0,.6574],[0,.6581],[0,.6588],[0,.6595],[0,.6603],[0,.661],[0,.6617],[0,.6624],[0,.6631],[0,.6638],[0,.6645],[0,.6652],[0,.6659],[0,.6666],[0,.6673],[0,.668],[0,.6687],[0,.6694],[0,.6701],[0,.6708],[0,.6715],[0,.6723],[0,.673],[0,.6737],[0,.6744],[0,.6751],[0,.6758],[0,.6765],[0,.6772],[0,.6779],[0,.6786],[0,.6793],[0,.68],[0,.6807],[0,.6814],[0,.6821],[0,.6828],[0,.6835],[0,.6842],[0,.685],[0,.6857],[0,.6864],[0,.6871],[0,.6878],[0,.6885],[0,.6892],[0,.6899],[0,.6906],[0,.6913],[0,.692],[0,.6927],[0,.6934],[0,.6941],[0,.6948],[0,.6955],[0,.6962],[0,.697],[0,.6977],[0,.6984],[0,.6991],[0,.6998],[0,.7005],[0,.7012],[0,.7019],[0,.7026],[0,.7033],[0,.704],[0,.7047],[0,.7054],[0,.7061],[0,.7068],[0,.7075],[0,.7082],[0,.709],[0,.7097],[0,.7104],[0,.7111],[0,.7118],[0,.7125],[0,.7132],[0,.7139],[0,.7146],[0,.7153],[0,.716],[0,.7167],[0,.7174],[0,.7181],[0,.7188],[0,.7195],[0,.7202],[0,.7209],[0,.7217],[0,.7224],[0,.7231],[0,.7238],[0,.7245],[0,.7252],[0,.7259],[0,.7266],[0,.7273],[0,.728],[0,.7287],[0,.7294],[0,.7301],[0,.7308],[0,.7315],[0,.7322],[0,.7329],[0,.7337],[0,.7344],[0,.7351],[0,.7358],[0,.7365],[0,.7372],[0,.7379],[0,.7386],[0,.7393],[0,.74],[0,.7407],[0,.7414],[0,.7421],[0,.7428],[0,.7435],[0,.7442],[0,.7449],[0,.7457],[0,.7464],[0,.7471],[0,.7478],[0,.7485],[0,.7492],[0,.7499],[0,.7506],[0,.7513],[0,.752],[0,.7527],[0,.7534],[0,.7541],[0,.7548],[0,.7555],[0,.7562],[0,.7569],[0,.7576],[0,.7584],[0,.7591],[0,.7598],[0,.7605],[0,.7612],[0,.7619],[0,.7626],[0,.7633],[0,.764],[0,.7647],[0,.7654],[0,.7661],[0,.7668],[0,.7675],[0,.7682],[0,.7689],[0,.7696],[0,.7704],[0,.7711],[0,.7718],[0,.7725],[0,.7732],[0,.7739],[0,.7746],[0,.7753],[0,.776],[0,.7767],[0,.7774],[0,.7781],[0,.7788],[0,.7795],[0,.7802],[0,.7809],[0,.7816],[0,.7823],[0,.7831],[0,.7838],[0,.7845],[0,.7852],[0,.7859],[0,.7866],[0,.7873],[0,.788],[0,.7887],[0,.7894],[0,.7901],[0,.7908],[0,.7915],[0,.7922],[0,.7929],[0,.7936],[0,.7943],[0,.7951],[0,.7958],[0,.7965],[0,.7972],[0,.7979],[0,.7986],[0,.7993],[0,.8],[0,.8007],[0,.8014],[0,.8021],[0,.8028],[0,.8035],[0,.8042],[0,.8049],[0,.8056],[0,.8063],[0,.8071],[0,.8078],[0,.8085],[0,.8092],[0,.8099],[0,.8106],[0,.8113],[0,.812],[0,.8127],[0,.8134],[0,.8141],[0,.8148],[0,.8155],[0,.8162],[0,.8169],[0,.8176],[0,.8183],[0,.819],[0,.8198],[0,.8205],[0,.8212],[0,.8219],[0,.8226],[0,.8233],[0,.824],[0,.8247],[0,.8254],[0,.8261],[0,.8268],[0,.8275],[0,.8282],[0,.8289],[0,.8296],[0,.8303],[0,.831],[0,.8318],[0,.8325],[0,.8332],[0,.8339],[0,.8346],[0,.8353],[0,.836],[0,.8367],[0,.8374],[0,.8381],[0,.8388],[0,.8395],[0,.8402],[0,.8409],[0,.8416],[0,.8423],[0,.843],[0,.8438],[0,.8445],[0,.8452],[0,.8459],[0,.8466],[0,.8473],[0,.848],[0,.8487],[0,.8494],[0,.8501],[0,.8508],[0,.8515],[0,.8522],[0,.8529],[0,.8536],[0,.8543],[0,.855],[0,.8557],[0,.8565],[0,.8572],[0,.8579],[0,.8586],[0,.8593],[0,.86],[0,.8607],[0,.8614],[0,.8621],[0,.8628],[0,.8635],[0,.8642],[0,.8649],[0,.8656],[0,.8663],[0,.867],[0,.8677],[0,.8685],[0,.8692],[0,.8699],[0,.8706],[0,.8713],[0,.872],[0,.8727],[0,.8734],[0,.8741],[0,.8748],[0,.8755],[0,.8762],[0,.8769],[0,.8776],[0,.8783],[0,.879],[0,.8797],[0,.8804],[0,.8812],[0,.8819],[0,.8826],[0,.8833],[0,.884],[0,.8847],[0,.8854],[0,.8861],[0,.8868],[0,.8875],[0,.8882],[0,.8889],[0,.8896],[0,.8903],[0,.891],[0,.8917],[0,.8924],[0,.8932],[0,.8939],[0,.8946],[0,.8953],[0,.896],[0,.8967],[0,.8974],[0,.8981],[0,.8988],[0,.8995],[0,.9002],[0,.9009],[0,.9016],[0,.9023],[0,.903],[0,.9037],[0,.9044],[0,.9052],[0,.9059],[0,.9066],[0,.9073],[0,.908],[0,.9087],[0,.9094],[0,.9101],[0,.9108],[0,.9115],[0,.9122],[0,.9129],[0,.9136],[0,.9143],[0,.915],[0,.9157],[0,.9164],[0,.9171],[0,.9179],[0,.9186],[0,.9193],[0,.92],[0,.9207],[0,.9214],[0,.9221],[0,.9228],[0,.9235],[0,.9242],[0,.9249],[0,.9256],[0,.9263],[0,.927],[0,.9277],[0,.9284],[0,.9291],[0,.9299],[0,.9306],[0,.9313],[0,.932],[0,.9327],[0,.9334],[0,.9341],[0,.9348],[0,.9355],[0,.9362],[0,.9369],[0,.9376],[0,.9383],[0,.939],[0,.9397],[0,.9404],[0,.9411],[0,.9419],[0,.9426],[0,.9433],[0,.944],[0,.9447],[0,.9454],[0,.9461],[0,.9468],[0,.9475],[0,.9482],[0,.9489],[0,.9496],[0,.9503],[0,.951],[0,.9517],[0,.9524],[0,.9531],[0,.9538],[0,.9546],[0,.9553],[0,.956],[0,.9567],[0,.9574],[0,.9581],[0,.9588],[0,.9595],[0,.9602],[0,.9609],[0,.9616],[0,.9623],[0,.963],[0,.9637],[0,.9644],[0,.9651],[0,.9658],[0,.9666],[0,.9673],[0,.968],[0,.9687],[0,.9694],[0,.9701],[0,.9708],[0,.9715],[0,.9722],[0,.9729],[0,.9736],[0,.9743],[0,.975],[0,.9757],[0,.9764],[0,.9771],[0,.9778],[0,.9785],[0,.9793],[0,.98],[0,.9807],[0,.9814],[0,.9821],[0,.9828],[0,.9835],[0,.9842],[0,.9849],[0,.9856],[0,.9863],[0,.987],[0,.9877],[0,.9884],[0,.9891],[0,.9898],[0,.9905],[0,.9913],[0,.992],[0,.9927],[0,.9934],[0,.9941],[0,.9948],[0,.9955],[0,.9962],[0,.9969],[0,.9976],[0,.9983],[0,.999],[0,.9997],[0,1.0004],[0,1.0011],[0,1.0018],[0,1.0025],[0,1.0033],[0,1.004],[0,1.0047],[0,1.0054],[0,1.0061],[0,1.0068],[0,1.0075],[0,1.0082],[0,1.0089],[0,1.0096],[0,1.0103],[0,1.011],[0,1.0117],[0,1.0124],[0,1.0131],[0,1.0138],[0,1.0145],[0,1.0152],[0,1.016],[0,1.0167],[0,1.0174],[0,1.0181],[0,1.0188],[0,1.0195],[0,1.0202],[0,1.0209],[0,1.0216],[0,1.0223],[0,1.023],[0,1.0237],[0,1.0244],[0,1.0251],[0,1.0258],[0,1.0265],[0,1.0272],[0,1.028],[0,1.0287],[0,1.0294],[0,1.0301],[0,1.0308],[0,1.0315],[0,1.0322],[0,1.0329],[0,1.0336],[0,1.0343],[0,1.035],[0,1.0357],[0,1.0364],[0,1.0371],[0,1.0378],[0,1.0385],[0,1.0392],[0,1.04],[0,1.0407],[0,1.0414],[0,1.0421],[0,1.0428],[0,1.0435],[0,1.0442],[0,1.0449],[0,1.0456],[0,1.0463],[0,1.047],[0,1.0477],[0,1.0484],[0,1.0491],[0,1.0498],[0,1.0505],[0,1.0512],[0,1.0519],[0,1.0527],[0,1.0534],[0,1.0541],[0,1.0548],[0,1.0555],[0,1.0562],[0,1.0569],[0,1.0576],[0,1.0583],[0,1.059],[0,1.0597],[0,1.0604],[0,1.0611],[0,1.0618],[0,1.0625],[0,1.0632],[0,1.0639],[0,1.0647],[0,1.0654],[0,1.0661],[0,1.0668],[0,1.0675],[0,1.0682],[0,1.0689],[0,1.0696],[0,1.0703],[0,1.071],[0,1.0717],[0,1.0724],[0,1.0731],[0,1.0738],[0,1.0745],[0,1.0752],[0,1.0759],[0,1.0766],[0,1.0774],[0,1.0781],[0,1.0788],[0,1.0795],[0,1.0802],[0,1.0809],[0,1.0816],[0,1.0823],[0,1.083],[0,1.0837],[0,1.0844],[0,1.0851],[0,1.0858],[0,1.0865],[0,1.0872],[0,1.0879],[0,1.0886],[0,1.0894],[0,1.0901],[0,1.0908],[0,1.0915],[0,1.0922],[0,1.0929],[0,1.0936],[0,1.0943],[0,1.095],[0,1.0957],[0,1.0964],[0,1.0971],[0,1.0978],[0,1.0985],[0,1.0992],[0,1.0999],[0,1.1006],[0,1.1014],[0,1.1021],[0,1.1028],[0,1.1035],[0,1.1042],[0,1.1049],[0,1.1056],[0,1.1063],[0,1.107],[0,1.1077],[0,1.1084],[0,1.1091],[0,1.1098],[0,1.1105],[0,1.1112],[0,1.1119],[0,1.1126],[0,1.1133],[0,1.1141],[0,1.1148],[0,1.1155],[0,1.1162],[0,1.1169],[0,1.1176],[0,1.1183],[0,1.119],[0,1.1197],[0,1.1204],[0,1.1211],[0,1.1218],[0,1.1225],[0,1.1232],[0,1.1239],[0,1.1246],[0,1.1253],[0,1.1261],[0,1.1268],[0,1.1275],[0,1.1282],[0,1.1289],[0,1.1296],[0,1.1303],[0,1.131],[0,1.1317],[0,1.1324],[0,1.1331],[0,1.1338],[0,1.1345],[0,1.1352],[0,1.1359],[0,1.1366],[0,1.1373],[0,1.1381],[0,1.1388],[0,1.1395],[0,1.1402],[0,1.1409],[0,1.1416],[0,1.1423],[0,1.143],[0,1.1437],[0,1.1444],[0,1.1451],[0,1.1458],[0,1.1465],[0,1.1472],[0,1.1479],[0,1.1486],[0,1.1493],[0,1.15],[0,1.1508],[0,1.1515],[0,1.1522],[0,1.1529],[0,1.1536],[0,1.1543],[0,1.155],[0,1.1557],[0,1.1564],[0,1.1571],[0,1.1578],[0,1.1585],[0,1.1592],[0,1.1599],[0,1.1606],[0,1.1613],[0,1.162],[0,1.1628],[0,1.1635],[0,1.1642],[0,1.1649],[0,1.1656],[0,1.1663],[0,1.167],[0,1.1677],[0,1.1684],[0,1.1691],[0,1.1698],[0,1.1705],[0,1.1712],[0,1.1719],[0,1.1726],[0,1.1733],[0,1.174],[0,1.1747],[0,1.1755],[0,1.1762],[0,1.1769],[0,1.1776],[0,1.1783],[0,1.179],[0,1.1797],[0,1.1804],[0,1.1811],[0,1.1818],[0,1.1825],[0,1.1832],[0,1.1839],[0,1.1846],[0,1.1853],[0,1.186],[0,1.1867],[0,1.1875],[0,1.1882],[0,1.1889],[0,1.1896],[0,1.1903],[0,1.191],[0,1.1917],[0,1.1924],[0,1.1931],[0,1.1938],[0,1.1945],[0,1.1952],[0,1.1959],[0,1.1966],[0,1.1973],[0,1.198],[0,1.1987],[0,1.1995],[0,1.2002],[0,1.2009],[0,1.2016],[0,1.2023],[0,1.203],[0,1.2037],[0,1.2044],[0,1.2051],[0,1.2058],[0,1.2065],[0,1.2072],[0,1.2079],[0,1.2086],[0,1.2093],[0,1.21],[0,1.2107],[0,1.2114],[0,1.2122],[0,1.2129],[0,1.2136],[0,1.2143],[0,1.215],[0,1.2157],[0,1.2164],[0,1.2171],[0,1.2178],[0,1.2185],[0,1.2192],[0,1.2199],[0,1.2206],[0,1.2213],[0,1.222],[0,1.2227],[0,1.2234],[0,1.2242],[0,1.2249],[0,1.2256],[0,1.2263],[0,1.227],[0,1.2277],[0,1.2284],[0,1.2291],[0,1.2298],[0,1.2305],[0,1.2312],[0,1.2319],[0,1.2326],[0,1.2333],[0,1.234],[0,1.2347],[0,1.2354],[0,1.2362],[0,1.2369],[0,1.2376],[0,1.2383],[0,1.239],[0,1.2397],[0,1.2404],[0,1.2411],[0,1.2418],[0,1.2425],[0,1.2432],[0,1.2439],[0,1.2446],[0,1.2453],[0,1.246],[0,1.2467],[0,1.2474],[0,1.2481],[0,1.2489],[0,1.2496],[0,1.2503],[0,1.251],[0,1.2517],[0,1.2524],[0,1.2531],[0,1.2538],[0,1.2545],[0,1.2552],[0,1.2559],[0,1.2566],[0,1.2573],[0,1.258],[0,1.2587],[0,1.2594],[0,1.2601],[0,1.2609],[0,1.2616],[0,1.2623],[0,1.263],[0,1.2637],[0,1.2644],[0,1.2651],[0,1.2658],[0,1.2665],[0,1.2672],[0,1.2679],[0,1.2686],[0,1.2693],[0,1.27],[0,1.2707],[0,1.2714],[0,1.2721],[0,1.2729],[0,1.2736],[0,1.2743],[0,1.275],[0,1.2757],[0,1.2764],[0,1.2771],[0,1.2778],[0,1.2785],[0,1.2792],[0,1.2799],[0,1.2806],[0,1.2813],[0,1.282],[0,1.2827],[0,1.2834],[0,1.2841],[0,1.2848],[0,1.2856],[0,1.2863],[0,1.287],[0,1.2877],[0,1.2884],[0,1.2891],[0,1.2898],[0,1.2905],[0,1.2912],[0,1.2919],[0,1.2926],[0,1.2933],[0,1.294],[0,1.2947],[0,1.2954],[0,1.2961],[0,1.2968],[0,1.2976],[0,1.2983],[0,1.299],[0,1.2997],[0,1.3004],[0,1.3011],[0,1.3018],[0,1.3025],[0,1.3032],[0,1.3039],[0,1.3046],[0,1.3053],[0,1.306],[0,1.3067],[0,1.3074],[0,1.3081],[0,1.3088],[0,1.3095],[0,1.3103],[0,1.311],[0,1.3117],[0,1.3124],[0,1.3131],[0,1.3138],[0,1.3145],[0,1.3152],[0,1.3159],[0,1.3166],[0,1.3173],[0,1.318],[0,1.3187],[0,1.3194],[0,1.3201],[0,1.3208],[0,1.3215],[0,1.3223],[0,1.323],[0,1.3237],[0,1.3244],[0,1.3251],[0,1.3258],[0,1.3265],[0,1.3272],[0,1.3279],[0,1.3286],[0,1.3293],[0,1.33],[0,1.3307],[0,1.3314],[0,1.3321],[0,1.3328],[0,1.3335],[0,1.3343],[0,1.335],[0,1.3357],[0,1.3364],[0,1.3371],[0,1.3378],[0,1.3385],[0,1.3392],[0,1.3399],[0,1.3406],[0,1.3413],[0,1.342],[0,1.3427],[0,1.3434],[0,1.3441],[0,1.3448],[0,1.3455],[0,1.3462],[0,1.347],[0,1.3477],[0,1.3484],[0,1.3491],[0,1.3498],[0,1.3505],[0,1.3512],[0,1.3519],[0,1.3526],[0,1.3533],[0,1.354],[0,1.3547],[0,1.3554],[0,1.3561],[0,1.3568],[0,1.3575],[0,1.3582],[0,1.359],[0,1.3597],[0,1.3604],[0,1.3611],[0,1.3618],[0,1.3625],[0,1.3632],[0,1.3639],[0,1.3646],[0,1.3653],[0,1.366],[0,1.3667],[0,1.3674],[0,1.3681],[0,1.3688],[0,1.3695],[0,1.3702],[0,1.371],[0,1.3717],[0,1.3724],[0,1.3731],[0,1.3738],[0,1.3745],[0,1.3752],[0,1.3759],[0,1.3766],[0,1.3773],[0,1.378],[0,1.3787],[0,1.3794],[0,1.3801],[0,1.3808],[0,1.3815],[0,1.3822],[0,1.3829],[0,1.3837],[0,1.3844],[0,1.3851],[0,1.3858],[0,1.3865],[0,1.3872],[0,1.3879],[0,1.3886],[0,1.3893],[0,1.39],[0,1.3907],[0,1.3914],[0,1.3921],[0,1.3928],[0,1.3935],[0,1.3942],[0,1.3949],[0,1.3957],[0,1.3964],[0,1.3971],[0,1.3978],[0,1.3985],[0,1.3992],[0,1.3999],[0,1.4006],[0,1.4013],[0,1.402],[0,1.4027],[0,1.4034],[0,1.4041],[0,1.4048],[0,1.4055],[0,1.4062],[0,1.4069],[0,1.4076],[0,1.4084],[0,1.4091],[0,1.4098],[0,1.4105],[0,1.4112],[0,1.4119],[0,1.4126],[0,1.4133],[0,1.414],[0,1.4147],[0,1.4154],[0,1.4161],[0,1.4168],[0,1.4175],[0,1.4182],[0,1.4189],[0,1.4196],[0,1.4204],[0,1.4211],[0,1.4218],[0,1.4225],[0,1.4232],[0,1.4239],[0,1.4246],[0,1.4253],[0,1.426],[0,1.4267],[0,1.4274],[0,1.4281],[0,1.4288],[0,1.4295],[0,1.4302],[0,1.4309],[0,1.4316],[0,1.4324],[0,1.4331],[0,1.4338],[0,1.4345],[0,1.4352],[0,1.4359],[0,1.4366],[0,1.4373],[0,1.438],[0,1.4387],[0,1.4394],[0,1.4401],[0,1.4408],[0,1.4415],[0,1.4422],[0,1.4429],[0,1.4436],[0,1.4443],[0,1.4451],[0,1.4458],[0,1.4465],[0,1.4472],[0,1.4479],[0,1.4486],[0,1.4493],[0,1.45],[0,1.4507],[0,1.4514],[0,1.4521],[0,1.4528],[0,1.4535],[0,1.4542],[0,1.4549],[0,1.4556],[0,1.4563],[0,1.4571],[0,1.4578],[0,1.4585],[0,1.4592],[0,1.4599],[0,1.4606],[0,1.4613],[0,1.462],[0,1.4627],[0,1.4634],[0,1.4641],[0,1.4648],[0,1.4655],[0,1.4662],[0,1.4669],[0,1.4676],[0,1.4683],[0,1.4691],[0,1.4698],[0,1.4705],[0,1.4712],[0,1.4719],[0,1.4726],[0,1.4733],[0,1.474],[0,1.4747],[0,1.4754],[0,1.4761],[0,1.4768],[0,1.4775],[0,1.4782],[0,1.4789],[0,1.4796],[0,1.4803],[0,1.481],[0,1.4818],[0,1.4825],[0,1.4832],[0,1.4839],[0,1.4846],[0,1.4853],[0,1.486],[0,1.4867],[0,1.4874],[0,1.4881],[0,1.4888],[0,1.4895],[0,1.4902],[0,1.4909],[0,1.4916],[0,1.4923],[0,1.493],[0,1.4938],[0,1.4945],[0,1.4952],[0,1.4959],[0,1.4966],[0,1.4973],[0,1.498],[0,1.4987],[0,1.4994],[0,1.5001],[0,1.5008],[0,1.5015],[0,1.5022],[0,1.5029],[0,1.5036],[0,1.5043],[0,1.505],[0,1.5057],[0,1.5065],[0,1.5072],[0,1.5079],[0,1.5086],[0,1.5093],[0,1.51],[0,1.5107],[0,1.5114],[0,1.5121],[0,1.5128],[0,1.5135],[0,1.5142],[0,1.5149],[0,1.5156],[0,1.5163],[0,1.517],[0,1.5177],[0,1.5185],[0,1.5192],[0,1.5199],[0,1.5206],[0,1.5213],[0,1.522],[0,1.5227],[0,1.5234],[0,1.5241],[0,1.5248],[0,1.5255],[0,1.5262],[0,1.5269],[0,1.5276],[0,1.5283],[0,1.529],[0,1.5297],[0,1.5305],[0,1.5312],[0,1.5319],[0,1.5326],[0,1.5333],[0,1.534],[0,1.5347],[0,1.5354],[0,1.5361],[0,1.5368],[0,1.5375],[0,1.5382],[0,1.5389],[0,1.5396],[0,1.5403],[0,1.541],[0,1.5417],[0,1.5424],[0,1.5432],[0,1.5439],[0,1.5446],[0,1.5453],[0,1.546],[0,1.5467],[0,1.5474],[0,1.5481],[0,1.5488],[0,1.5495],[0,1.5502],[0,1.5509],[0,1.5516],[0,1.5523],[0,1.553],[0,1.5537],[0,1.5544],[0,1.5552],[0,1.5559],[0,1.5566],[0,1.5573],[0,1.558],[0,1.5587],[0,1.5594],[0,1.5601],[0,1.5608],[0,1.5615],[0,1.5622],[0,1.5629],[0,1.5636],[0,1.5643],[0,1.565],[0,1.5657],[0,1.5664],[0,1.5672],[0,1.5679],[0,1.5686],[0,1.5693],[0,1.57],[0,1.5707],[0,1.5714],[0,1.5721],[0,1.5728],[0,1.5735],[0,1.5742],[0,1.5749],[0,1.5756],[0,1.5763],[0,1.577],[0,1.5777],[0,1.5784],[0,1.5791],[0,1.5799],[0,1.5806],[0,1.5813],[0,1.582],[0,1.5827],[0,1.5834],[0,1.5841],[0,1.5848],[0,1.5855],[0,1.5862],[0,1.5869],[0,1.5876],[0,1.5883],[0,1.589],[0,1.5897],[0,1.5904],[0,1.5911],[0,1.5919],[0,1.5926],[0,1.5933],[0,1.594],[0,1.5947],[0,1.5954],[0,1.5961],[0,1.5968],[0,1.5975],[0,1.5982],[0,1.5989],[0,1.5996],[0,1.6003],[0,1.601],[0,1.6017],[0,1.6024],[0,1.6031],[0,1.6038],[0,1.6046],[0,1.6053],[0,1.606],[0,1.6067],[0,1.6074],[0,1.6081],[0,1.6088],[0,1.6095],[0,1.6102],[0,1.6109],[0,1.6116],[0,1.6123],[0,1.613],[0,1.6137],[0,1.6144],[0,1.6151],[0,1.6158],[0,1.6166],[0,1.6173],[0,1.618],[0,1.6187],[0,1.6194],[0,1.6201],[0,1.6208],[0,1.6215],[0,1.6222],[1e-4,1.623],[1e-4,1.6237],[2e-4,1.6244],[3e-4,1.6251],[5e-4,1.6259],[6e-4,1.6266],[8e-4,1.6272],[.0011,1.6279],[.0013,1.6286],[.0016,1.6292],[.0018,1.6299],[.0022,1.6305],[.0025,1.6312],[.0028,1.6318],[.0032,1.6324],[.0036,1.6329],[.004,1.6335],[.0044,1.6341],[.0049,1.6346],[.0054,1.6351],[.0058,1.6356],[.0064,1.6361],[.0069,1.6366],[.0074,1.637],[.008,1.6375],[.0085,1.6379],[.0091,1.6383],[.0097,1.6387],[.0103,1.639],[.011,1.6393],[.0116,1.6396],[.0123,1.6399],[.0129,1.6402],[.0136,1.6404],[.0143,1.6407],[.015,1.6409],[.0157,1.641],[.0164,1.6412],[.0172,1.6413],[.0176,1.6413],[.0181,1.6414],[.0188,1.6415],[.0196,1.6415],[.0203,1.6416],[.0211,1.6417],[.0218,1.6418],[.0225,1.6418],[.0233,1.6419],[.024,1.642],[.0248,1.6421],[.0255,1.6422],[.0263,1.6422],[.027,1.6423],[.0278,1.6424],[.0285,1.6425],[.0292,1.6425],[.03,1.6426],[.0307,1.6427],[.0315,1.6428],[.0323,1.6429],[.033,1.6429],[.0338,1.643],[.0345,1.6431],[.0353,1.6432],[.036,1.6432],[.0368,1.6433],[.0375,1.6434],[.0383,1.6435],[.039,1.6436],[.0397,1.6436],[.0404,1.6437],[.0411,1.6438],[.0418,1.6438],[.0426,1.6439],[.0433,1.644],[.044,1.6441],[.0447,1.6441],[.0454,1.6442],[.0461,1.6443],[.0468,1.6444],[.0475,1.6444],[.0482,1.6445],[.0489,1.6446],[.0496,1.6447],[.0503,1.6447],[.0511,1.6448],[.0518,1.6449],[.0525,1.645],[.0532,1.645],[.0539,1.6451],[.0546,1.6452],[.0553,1.6452],[.056,1.6453],[.0568,1.6454],[.0575,1.6455],[.0582,1.6455],[.0589,1.6456],[.0596,1.6457],[.0603,1.6458],[.061,1.6458],[.0617,1.6459],[.0624,1.646],[.0631,1.6461],[.0639,1.6461],[.0646,1.6462],[.0653,1.6463],[.066,1.6463],[.0667,1.6464],[.0674,1.6465],[.0681,1.6466],[.0688,1.6466],[.0695,1.6467],[.0702,1.6468],[.0709,1.6469],[.0716,1.6469],[.0723,1.647],[.073,1.6471],[.0737,1.6472],[.0744,1.6472],[.0751,1.6473],[.0758,1.6474],[.0765,1.6474],[.0772,1.6475],[.078,1.6476],[.0787,1.6477],[.0794,1.6477],[.0801,1.6478],[.0808,1.6479],[.0815,1.648],[.0822,1.648],[.0829,1.6481],[.0836,1.6482],[.0843,1.6482],[.085,1.6483],[.0857,1.6484],[.0864,1.6485],[.0871,1.6485],[.0878,1.6486],[.0885,1.6487],[.0892,1.6488],[.0899,1.6488],[.0906,1.6489],[.0914,1.649],[.0921,1.6491],[.0928,1.6491],[.0935,1.6492],[.0942,1.6493],[.0949,1.6493],[.0956,1.6494],[.0963,1.6495],[.097,1.6496],[.0977,1.6496],[.0984,1.6497],[.0991,1.6498],[.0998,1.6499],[.1005,1.6499],[.1012,1.65],[.1019,1.6501],[.1026,1.6501],[.1033,1.6502],[.1041,1.6503],[.1048,1.6504],[.1055,1.6504],[.1062,1.6505],[.1069,1.6506],[.1076,1.6507],[.1083,1.6507],[.109,1.6508],[.1098,1.6509],[.1105,1.651],[.1112,1.651],[.1119,1.6511],[.1126,1.6512],[.1133,1.6513],[.114,1.6513],[.1148,1.6514],[.1155,1.6515],[.1162,1.6515],[.1169,1.6516],[.1176,1.6517],[.1183,1.6518],[.119,1.6518],[.1197,1.6519],[.1204,1.652],[.1211,1.6521],[.1218,1.6521],[.1226,1.6522],[.1233,1.6523],[.124,1.6524],[.1247,1.6524],[.1254,1.6525],[.1261,1.6526],[.1268,1.6526],[.1275,1.6527],[.1282,1.6528],[.1289,1.6529],[.1296,1.6529],[.1303,1.653],[.131,1.6531],[.1317,1.6532],[.1324,1.6532],[.1331,1.6533],[.1338,1.6534],[.1345,1.6534],[.1352,1.6535],[.136,1.6536],[.1367,1.6537],[.1375,1.6538],[.1382,1.6538],[.139,1.6539],[.1397,1.654],[.1404,1.6541],[.1412,1.6541],[.1419,1.6542],[.1427,1.6543],[.1434,1.6544],[.1442,1.6544],[.1449,1.6545],[.1457,1.6546],[.1464,1.6547],[.1471,1.6548],[.1479,1.6548],[.1486,1.6549],[.1494,1.655],[.1501,1.6551],[.1508,1.6551],[.1516,1.6552],[.1523,1.6553],[.153,1.6554],[.1538,1.6554],[.1545,1.6555],[.1552,1.6556],[.156,1.6557],[.1567,1.6557],[.1574,1.6558],[.1581,1.6559],[.1589,1.656],[.1596,1.656],[.1603,1.6561],[.1611,1.6562],[.1618,1.6563],[.1625,1.6563],[.1632,1.6564],[.1639,1.6565],[.1647,1.6566],[.1654,1.6566],[.1661,1.6567],[.1668,1.6568],[.1675,1.6569],[.1682,1.6569],[.169,1.657],[.1697,1.6571],[.1704,1.6572],[.1711,1.6572],[.1718,1.6573],[.1725,1.6574],[.1732,1.6575],[.1739,1.6575],[.1746,1.6576],[.1753,1.6577],[.1761,1.6578],[.1769,1.6578],[.1777,1.6579],[.1785,1.658],[.1793,1.6581],[.1801,1.6582],[.181,1.6583],[.1818,1.6583],[.1826,1.6584],[.1834,1.6585],[.1842,1.6586],[.185,1.6587],[.1858,1.6588],[.1866,1.6588],[.1874,1.6589],[.1882,1.659],[.189,1.6591],[.1898,1.6592],[.1906,1.6593],[.1914,1.6593],[.1922,1.6594],[.193,1.6595],[.1938,1.6596],[.1946,1.6597],[.1953,1.6598],[.1961,1.6598],[.1969,1.6599],[.1977,1.66],[.1985,1.6601],[.1992,1.6602],[.2,1.6602],[.2008,1.6603],[.2015,1.6604],[.2023,1.6605],[.2031,1.6606],[.2038,1.6606],[.2046,1.6607],[.2054,1.6608],[.2061,1.6609],[.2069,1.6609],[.2076,1.661],[.2084,1.6611],[.2092,1.6612],[.2099,1.6613],[.2106,1.6613],[.2114,1.6614],[.2121,1.6615],[.2129,1.6616],[.2136,1.6616],[.2143,1.6617],[.2151,1.6618],[.2158,1.6619],[.2165,1.6619],[.2173,1.662],[.218,1.6621],[.2187,1.6622],[.2194,1.6622],[.2202,1.6623],[.2209,1.6624],[.2216,1.6625],[.2223,1.6625],[.223,1.6626],[.2237,1.6627],[.2244,1.6628],[.2251,1.6628],[.2259,1.6629],[.2266,1.663],[.2274,1.6631],[.2282,1.6632],[.229,1.6632],[.2299,1.6633],[.2307,1.6634],[.2315,1.6635],[.2323,1.6636],[.2331,1.6637],[.234,1.6638],[.2348,1.6638],[.2356,1.6639],[.2364,1.664],[.2372,1.6641],[.238,1.6642],[.2387,1.6642],[.2395,1.6643],[.2403,1.6644],[.2411,1.6645],[.2419,1.6646],[.2426,1.6646],[.2434,1.6647],[.2442,1.6648],[.2449,1.6649],[.2457,1.665],[.2464,1.665],[.2472,1.6651],[.2479,1.6652],[.2486,1.6653],[.2494,1.6653],[.2501,1.6654],[.2508,1.6655],[.2516,1.6656],[.2523,1.6656],[.253,1.6657],[.2537,1.6658],[.2546,1.6659],[.2555,1.666],[.2563,1.6661],[.2572,1.6662],[.258,1.6662],[.2589,1.6663],[.2597,1.6664],[.2606,1.6665],[.2614,1.6666],[.2622,1.6667],[.263,1.6668],[.2639,1.6668],[.2647,1.6669],[.2654,1.667],[.2662,1.6671],[.267,1.6672],[.2678,1.6673],[.2686,1.6673],[.2693,1.6674],[.2701,1.6675],[.2708,1.6676],[.2715,1.6676],[.2723,1.6677],[.273,1.6678],[.2737,1.6679],[.2744,1.6679],[.2751,1.668],[.2758,1.6681],[.2767,1.6682],[.2776,1.6683],[.2785,1.6684],[.2794,1.6685],[.2802,1.6685],[.2811,1.6686],[.2819,1.6687],[.2827,1.6688],[.2835,1.6689],[.2841,1.6689],[.2847,1.669],[.2852,1.6691],[.2858,1.6691],[.2864,1.6692],[.2869,1.6692],[.2874,1.6693],[.288,1.6693],[.2885,1.6694],[.289,1.6695],[.2895,1.6695],[.29,1.6696],[.2905,1.6696],[.291,1.6697],[.2914,1.6697],[.2919,1.6697],[.2923,1.6698],[.2928,1.6698],[.2932,1.6699],[.2936,1.6699],[.2941,1.67],[.2945,1.67],[.2949,1.6701],[.2952,1.6701],[.2956,1.6701],[.296,1.6702],[.2963,1.6702],[.2967,1.6702],[.297,1.6703],[.2974,1.6703],[.2977,1.6703],[.298,1.6704],[.2983,1.6704],[.2986,1.6704],[.2989,1.6705],[.2991,1.6705],[.2994,1.6705],[.2997,1.6706],[.2999,1.6706],[.3001,1.6706],[.3003,1.6706],[.3006,1.6706],[.3008,1.6707],[.301,1.6707],[.3011,1.6707],[.3013,1.6707],[.3015,1.6707],[.3016,1.6708],[.3018,1.6708],[.3019,1.6708],[.302,1.6708],[.3021,1.6708],[.3023,1.6708],[.3025,1.6708],[.3031,1.6709],[.3037,1.6709],[.3043,1.6709],[.3049,1.6709],[.3055,1.6709],[.306,1.6708],[.3066,1.6707],[.3071,1.6706],[.3076,1.6705],[.3082,1.6704],[.3086,1.6703],[.3091,1.6701],[.3096,1.6699],[.3101,1.6697],[.3105,1.6695],[.3109,1.6693],[.3113,1.6691],[.3117,1.6689],[.3121,1.6686],[.3125,1.6684],[.3129,1.6681],[.3132,1.6678],[.3136,1.6676],[.3139,1.6673],[.3142,1.667],[.3145,1.6667],[.3148,1.6664],[.3151,1.6661],[.3154,1.6658],[.3157,1.6655],[.3159,1.6652],[.3161,1.6649],[.3164,1.6646],[.3166,1.6643],[.3168,1.664],[.317,1.6637],[.3172,1.6634],[.3174,1.6631],[.3176,1.6628],[.3177,1.6625],[.3179,1.6622],[.318,1.662],[.3182,1.6617],[.3183,1.6614],[.3184,1.6612],[.3185,1.661],[.3186,1.6608],[.3187,1.6605],[.3188,1.6603],[.3189,1.6602],[.3189,1.66],[.319,1.6598],[.319,1.6597],[.3191,1.6596],[.3191,1.6595],[.3192,1.6594],[.3192,1.6593],[.3192,1.6593],[.3192,1.6592],[.3192,1.6592],[.3192,1.6592],[.3192,1.6592],[.3192,1.6591],[.3192,1.6591],[.3192,1.659],[.3192,1.6589],[.3193,1.6588],[.3193,1.6587],[.3193,1.6586],[.3193,1.6584],[.3193,1.6583],[.3193,1.6581],[.3194,1.6579],[.3194,1.6577],[.3194,1.6575],[.3194,1.6572],[.3195,1.657],[.3195,1.6567],[.3195,1.6564],[.3195,1.6561],[.3196,1.6558],[.3196,1.6555],[.3197,1.6552],[.3197,1.6549],[.3197,1.6545],[.3198,1.6541],[.3198,1.6537],[.3199,1.6533],[.3199,1.6529],[.3199,1.6525],[.32,1.6521],[.32,1.6516],[.3201,1.6512],[.3201,1.6507],[.3202,1.6502],[.3202,1.6497],[.3203,1.6492],[.3204,1.6487],[.3204,1.6482],[.3205,1.6477],[.3205,1.6471],[.3206,1.6466],[.3206,1.646],[.3207,1.6454],[.3208,1.6448],[.3208,1.6442],[.3209,1.6436],[.321,1.643],[.321,1.6424],[.3211,1.6417],[.3212,1.6411],[.3212,1.6404],[.3213,1.6398],[.3214,1.6391],[.3215,1.6384],[.3215,1.6377],[.3216,1.637],[.3217,1.6363],[.3218,1.6356],[.3218,1.6349],[.3219,1.6341],[.322,1.6334],[.3221,1.6326],[.3222,1.6319],[.3222,1.6311],[.3223,1.6303],[.3224,1.6295],[.3225,1.6288],[.3226,1.628],[.3227,1.6271],[.3228,1.6263],[.3228,1.6255],[.3229,1.6247],[.323,1.6239],[.3231,1.623],[.3232,1.6222],[.3233,1.6214],[.3234,1.6205],[.3235,1.6196],[.3236,1.6188],[.3236,1.6181],[.3237,1.6174],[.3238,1.6167],[.3239,1.616],[.3239,1.6153],[.324,1.6146],[.3241,1.6138],[.3242,1.6131],[.3243,1.6124],[.3243,1.6117],[.3244,1.611],[.3245,1.6102],[.3246,1.6095],[.3246,1.6088],[.3247,1.608],[.3248,1.6073],[.3249,1.6065],[.325,1.6058],[.325,1.6051],[.3251,1.6043],[.3252,1.6036],[.3253,1.6028],[.3254,1.602],[.3254,1.6013],[.3255,1.6005],[.3256,1.5998],[.3257,1.599],[.3258,1.5982],[.3259,1.5975],[.3259,1.5967],[.326,1.596],[.3261,1.5953],[.3262,1.5946],[.3262,1.5939],[.3263,1.5932],[.3264,1.5925],[.3265,1.5918],[.3265,1.5911],[.3266,1.5904],[.3267,1.5897],[.3268,1.589],[.3268,1.5883],[.3269,1.5876],[.327,1.5869],[.3271,1.5861],[.3272,1.5854],[.3272,1.5847],[.3273,1.584],[.3274,1.5833],[.3275,1.5826],[.3275,1.5819],[.3276,1.5812],[.3277,1.5805],[.3278,1.5798],[.3278,1.579],[.3279,1.5783],[.328,1.5776],[.3281,1.5769],[.3281,1.5762],[.3282,1.5755],[.3283,1.5748],[.3284,1.5741],[.3285,1.5734],[.3285,1.5727],[.3286,1.572],[.3287,1.5713],[.3288,1.5705],[.3288,1.5698],[.3289,1.5691],[.329,1.5684],[.3291,1.5677],[.3291,1.567],[.3292,1.5663],[.3293,1.5656],[.3294,1.5649],[.3294,1.5641],[.3295,1.5633],[.3296,1.5626],[.3297,1.5618],[.3298,1.561],[.3299,1.5603],[.3299,1.5595],[.33,1.5588],[.3301,1.558],[.3302,1.5573],[.3303,1.5565],[.3303,1.5558],[.3304,1.555],[.3305,1.5543],[.3306,1.5535],[.3307,1.5528],[.3307,1.5521],[.3308,1.5513],[.3309,1.5506],[.331,1.5499],[.3311,1.5492],[.3311,1.5484],[.3312,1.5477],[.3313,1.547],[.3314,1.5463],[.3314,1.5456],[.3315,1.5449],[.3316,1.5442],[.3317,1.5435],[.3318,1.5426],[.3319,1.5417],[.3319,1.5409],[.332,1.54],[.3321,1.5392],[.3322,1.5383],[.3323,1.5375],[.3324,1.5367],[.3325,1.5358],[.3326,1.535],[.3327,1.5342],[.3327,1.5334],[.3328,1.5326],[.3329,1.5318],[.333,1.5311],[.3331,1.5303],[.3332,1.5295],[.3332,1.5288],[.3333,1.528],[.3334,1.5273],[.3335,1.5265],[.3336,1.5258],[.3336,1.5251],[.3337,1.5244],[.3338,1.5237],[.3339,1.523],[.3339,1.5223],[.334,1.5216],[.3341,1.521],[.3342,1.5203],[.3342,1.5197],[.3343,1.519],[.3344,1.5184],[.3344,1.5178],[.3345,1.5172],[.3346,1.5166],[.3346,1.516],[.3347,1.5154],[.3347,1.5148],[.3348,1.5143],[.3349,1.5137],[.3349,1.5132],[.335,1.5127],[.335,1.5121],[.3351,1.5117],[.3351,1.5112],[.3352,1.5107],[.3352,1.5102],[.3353,1.5098],[.3353,1.5093],[.3354,1.5089],[.3354,1.5085],[.3355,1.5081],[.3355,1.5077],[.3356,1.5073],[.3356,1.5069],[.3356,1.5066],[.3357,1.5062],[.3357,1.5059],[.3357,1.5056],[.3358,1.5053],[.3358,1.505],[.3358,1.5047],[.3359,1.5044],[.3359,1.5042],[.3359,1.5039],[.3359,1.5037],[.336,1.5035],[.336,1.5033],[.336,1.5032],[.336,1.503],[.336,1.5028],[.336,1.5027],[.3361,1.5026],[.3361,1.5025],[.3361,1.5024],[.3361,1.5023],[.3361,1.5023],[.3361,1.5022],[.3361,1.5022],[.3361,1.5022],[.3361,1.5022],[.3361,1.5022],[.3361,1.5022],[.3361,1.5022],[.3361,1.5022],[.3361,1.5022],[.3361,1.5022],[.3361,1.5018],[.3361,1.5015],[.3361,1.5008],[.336,1.5001],[.336,1.4994],[.3359,1.4987],[.3358,1.4981],[.3357,1.4974],[.3356,1.4967],[.3355,1.4961],[.3353,1.4954],[.3352,1.4948],[.335,1.4941],[.3348,1.4935],[.3346,1.4928],[.3344,1.4922],[.3342,1.4916],[.3339,1.4909],[.3337,1.4903],[.3334,1.4897],[.3331,1.4891],[.3329,1.4885],[.3326,1.4879],[.3322,1.4872],[.3319,1.4866],[.3316,1.486],[.3312,1.4855],[.3309,1.4849],[.3305,1.4843],[.3301,1.4837],[.3297,1.4831],[.3293,1.4825],[.3289,1.4819],[.3285,1.4814],[.328,1.4808],[.3276,1.4802],[.3271,1.4796],[.3266,1.4791],[.3262,1.4785],[.3257,1.4779],[.3252,1.4774],[.3247,1.4768],[.3241,1.4762],[.3236,1.4757],[.3231,1.4751],[.3225,1.4746],[.322,1.474],[.3214,1.4735],[.3208,1.4729],[.3202,1.4724],[.3197,1.4718],[.3191,1.4712],[.3185,1.4707],[.3178,1.4701],[.3172,1.4696],[.3166,1.469],[.316,1.4685],[.3153,1.4679],[.3147,1.4674],[.314,1.4669],[.3134,1.4663],[.3127,1.4658],[.312,1.4652],[.3113,1.4647],[.3108,1.4642],[.3102,1.4638],[.3097,1.4633],[.3091,1.4629],[.3086,1.4624],[.308,1.462],[.3074,1.4616],[.3068,1.4611],[.3063,1.4607],[.3057,1.4602],[.3051,1.4598],[.3045,1.4593],[.3039,1.4589],[.3033,1.4584],[.3027,1.458],[.3021,1.4575],[.3015,1.4571],[.3009,1.4566],[.3003,1.4562],[.2997,1.4557],[.2991,1.4553],[.2985,1.4548],[.2979,1.4543],[.2973,1.4539],[.2967,1.4534],[.296,1.453],[.2954,1.4525],[.2948,1.452],[.2942,1.4516],[.2935,1.4511],[.2929,1.4506],[.2923,1.4501],[.2917,1.4497],[.291,1.4492],[.2904,1.4487],[.2898,1.4482],[.2891,1.4477],[.2885,1.4473],[.2878,1.4468],[.2872,1.4463],[.2866,1.4458],[.2859,1.4453],[.2853,1.4448],[.2847,1.4443],[.284,1.4438],[.2834,1.4433],[.2827,1.4428],[.2821,1.4423],[.2815,1.4418],[.2808,1.4413],[.2802,1.4407],[.2795,1.4402],[.2789,1.4397],[.2782,1.4392],[.2776,1.4387],[.277,1.4381],[.2763,1.4376],[.2757,1.437],[.2751,1.4365],[.2744,1.436],[.2738,1.4354],[.2732,1.4349],[.2725,1.4343],[.2719,1.4338],[.2713,1.4332],[.2706,1.4326],[.27,1.4321],[.2694,1.4315],[.2687,1.4309],[.2681,1.4304],[.2676,1.4299],[.2671,1.4294],[.2666,1.4289],[.266,1.4284],[.2655,1.4279],[.265,1.4274],[.2645,1.4269],[.264,1.4264],[.2635,1.4259],[.263,1.4254],[.2625,1.4249],[.262,1.4244],[.2615,1.4239],[.261,1.4234],[.2605,1.4228],[.26,1.4223],[.2595,1.4218],[.259,1.4213],[.2585,1.4207],[.258,1.4202],[.2575,1.4197],[.257,1.4191],[.2566,1.4186],[.2561,1.418],[.2556,1.4175],[.2551,1.4169],[.2547,1.4164],[.2542,1.4158],[.2537,1.4152],[.2532,1.4147],[.2528,1.4141],[.2523,1.4135],[.2519,1.413],[.2514,1.4124],[.251,1.4118],[.2505,1.4112],[.2501,1.4106],[.2496,1.41],[.2492,1.4094],[.2487,1.4088],[.2483,1.4082],[.2479,1.4076],[.2474,1.407],[.247,1.4064],[.2466,1.4058],[.2462,1.4051],[.2458,1.4045],[.2453,1.4039],[.2449,1.4032],[.2445,1.4026],[.2441,1.402],[.2437,1.4013],[.2433,1.4007],[.2429,1.4],[.2425,1.3993],[.2422,1.3987],[.2418,1.398],[.2414,1.3973],[.241,1.3967],[.2407,1.396],[.2403,1.3953],[.2399,1.3946],[.2396,1.3939],[.2392,1.3932],[.2389,1.3925],[.2385,1.3918],[.2382,1.3911],[.2378,1.3904],[.2375,1.3897],[.2372,1.389],[.2368,1.3882],[.2365,1.3875],[.2362,1.3868],[.2359,1.386],[.2356,1.3853],[.2353,1.3845],[.235,1.3838],[.2347,1.383],[.2344,1.3823],[.2341,1.3815],[.2338,1.3807],[.2336,1.38],[.2333,1.3792],[.233,1.3784],[.2328,1.3776],[.2325,1.3768],[.2323,1.376],[.232,1.3752],[.2318,1.3744],[.2315,1.3736],[.2313,1.3728],[.2311,1.3719],[.2309,1.3711],[.2307,1.3703],[.2305,1.3694],[.2303,1.3686],[.2301,1.3677],[.2299,1.3669],[.2297,1.366],[.2295,1.3652],[.2293,1.3643],[.2292,1.3634],[.229,1.3625],[.2288,1.3616],[.2287,1.3608],[.2285,1.3599],[.2284,1.3589],[.2283,1.358],[.2282,1.3571],[.228,1.3562],[.2279,1.3553],[.2278,1.3546],[.2278,1.3539],[.2277,1.3532],[.2276,1.3525],[.2275,1.3518],[.2275,1.3511],[.2274,1.3503],[.2274,1.3496],[.2273,1.3489],[.2273,1.3482],[.2272,1.3474],[.2272,1.3467],[.2271,1.346],[.2271,1.3452],[.2271,1.3445],[.227,1.3438],[.227,1.343],[.227,1.3422],[.227,1.3415],[.227,1.3407],[.227,1.34],[.227,1.3392],[.227,1.3384],[.227,1.3377],[.227,1.3369],[.227,1.3361],[.227,1.3353],[.227,1.3345],[.227,1.3338],[.2271,1.333],[.2271,1.3322],[.2271,1.3314],[.2272,1.3306],[.2272,1.3298],[.2273,1.3289],[.2273,1.3281],[.2274,1.3273],[.2274,1.3265],[.2275,1.3257],[.2276,1.3249],[.2277,1.324],[.2277,1.3232],[.2278,1.3223],[.2279,1.3215],[.228,1.3207],[.2281,1.3198],[.2282,1.319],[.2283,1.3181],[.2284,1.3172],[.2285,1.3164],[.2286,1.3155],[.2287,1.3146],[.2288,1.3139],[.229,1.3132],[.2291,1.3125],[.2292,1.3118],[.2293,1.3111],[.2294,1.3104],[.2295,1.3097],[.2296,1.309],[.2298,1.3083],[.2299,1.3075],[.23,1.3068],[.2302,1.3061],[.2303,1.3054],[.2304,1.3046],[.2306,1.3039],[.2307,1.3032],[.2309,1.3024],[.231,1.3017],[.2312,1.3009],[.2313,1.3002],[.2315,1.2994],[.2316,1.2987],[.2318,1.2979],[.232,1.2972],[.2321,1.2964],[.2323,1.2957],[.2325,1.2949],[.2327,1.2941],[.2329,1.2934],[.2331,1.2926],[.2333,1.2918],[.2335,1.291],[.2337,1.2903],[.2338,1.2895],[.234,1.2887],[.2343,1.2879],[.2345,1.2871],[.2347,1.2863],[.2349,1.2855],[.2351,1.2847],[.2353,1.2839],[.2356,1.2831],[.2358,1.2823],[.236,1.2815],[.2363,1.2807],[.2365,1.28],[.2367,1.2794],[.2369,1.2787],[.2371,1.278],[.2373,1.2773],[.2375,1.2766],[.2377,1.2759],[.2379,1.2753],[.2381,1.2746],[.2383,1.274],[.2385,1.2735],[.2386,1.2733],[.2387,1.273],[.2387,1.2729],[.2387,1.2727],[.2388,1.2726],[.2389,1.2724],[.2391,1.2717],[.2393,1.271],[.2395,1.2703],[.2398,1.2697],[.24,1.269],[.2402,1.2683],[.2404,1.2676],[.2406,1.267],[.2409,1.2663],[.2411,1.2655],[.2414,1.2648],[.2416,1.2641],[.2419,1.2633],[.2422,1.2626],[.2424,1.2618],[.2427,1.2611],[.2429,1.2603],[.2432,1.2596],[.2435,1.2588],[.2437,1.2581],[.244,1.2574],[.2443,1.2566],[.2445,1.2559],[.2448,1.2552],[.2451,1.2544],[.2453,1.2537],[.2456,1.253],[.2459,1.2523],[.2462,1.2515],[.2464,1.2508],[.2467,1.2501],[.247,1.2494],[.2472,1.2486],[.2475,1.2479],[.2478,1.2472],[.2481,1.2465],[.2484,1.2458],[.2486,1.2451],[.2489,1.2443],[.2492,1.2436],[.2495,1.2429],[.2498,1.2422],[.25,1.2415],[.2503,1.2408],[.2506,1.2401],[.2509,1.2394],[.2512,1.2387],[.2515,1.238],[.2518,1.2373],[.252,1.2366],[.2523,1.2359],[.2526,1.2352],[.2529,1.2345],[.2532,1.2338],[.2535,1.2331],[.2538,1.2324],[.2541,1.2318],[.2544,1.2311],[.2547,1.2304],[.255,1.2297],[.2553,1.229],[.2556,1.2283],[.2559,1.2277],[.2562,1.227],[.2565,1.2263],[.2568,1.2256],[.2571,1.225],[.2574,1.2243],[.2577,1.2236],[.258,1.223],[.2583,1.2223],[.2586,1.2216],[.2589,1.2209],[.2592,1.2203],[.2595,1.2196],[.2598,1.219],[.2601,1.2183],[.2604,1.2176],[.2608,1.217],[.2611,1.2163],[.2614,1.2157],[.2617,1.215],[.262,1.2144],[.2623,1.2137],[.2626,1.2131],[.263,1.2124],[.2633,1.2118],[.2636,1.2111],[.2639,1.2105],[.2642,1.2098],[.2645,1.2092],[.2649,1.2085],[.2652,1.2079],[.2655,1.2073],[.2658,1.2066],[.2661,1.206],[.2665,1.2053],[.2668,1.2047],[.2671,1.2041],[.2674,1.2035],[.2678,1.2028],[.2681,1.2022],[.2684,1.2016],[.2687,1.2009],[.2691,1.2003],[.2694,1.1996],[.2698,1.1989],[.2702,1.1982],[.2706,1.1975],[.271,1.1968],[.2713,1.1961],[.2717,1.1954],[.2721,1.1947],[.2725,1.194],[.2729,1.1933],[.2733,1.1926],[.2736,1.1919],[.274,1.1912],[.2744,1.1905],[.2748,1.1898],[.2752,1.1891],[.2756,1.1885],[.276,1.1878],[.2764,1.1871],[.2767,1.1864],[.2771,1.1857],[.2775,1.1851],[.2779,1.1844],[.2783,1.1837],[.2787,1.183],[.2791,1.1824],[.2795,1.1817],[.2799,1.181],[.2803,1.1804],[.2807,1.1797],[.2811,1.179],[.2815,1.1784],[.2819,1.1777],[.2823,1.1771],[.2827,1.1764],[.2831,1.1757],[.2835,1.1751],[.2839,1.1745],[.2843,1.1738],[.2847,1.1732],[.2851,1.1725],[.2855,1.1719],[.2859,1.1712],[.2864,1.1706],[.2868,1.1699],[.2872,1.1693],[.2876,1.1687],[.288,1.168],[.2884,1.1674],[.2888,1.1668],[.2892,1.1661],[.2897,1.1655],[.2901,1.1649],[.2905,1.1643],[.2909,1.1636],[.2913,1.163],[.2917,1.1624],[.2922,1.1618],[.2926,1.1612],[.293,1.1605],[.2934,1.1599],[.2938,1.1593],[.2942,1.1587],[.2947,1.1581],[.2951,1.1575],[.2955,1.1569],[.2959,1.1563],[.2964,1.1557],[.2968,1.1551],[.2972,1.1545],[.2976,1.1539],[.2981,1.1533],[.2985,1.1527],[.2989,1.1521],[.2994,1.1515],[.2998,1.1509],[.3002,1.1503],[.3006,1.1497],[.3011,1.1491],[.3015,1.1485],[.3019,1.148],[.3024,1.1474],[.3028,1.1468],[.3032,1.1462],[.3037,1.1456],[.3041,1.1451],[.3045,1.1445],[.305,1.1439],[.3054,1.1433],[.3058,1.1428],[.3063,1.1422],[.3067,1.1416],[.3072,1.1411],[.3076,1.1405],[.308,1.1399],[.3085,1.1394],[.3089,1.1388],[.3094,1.1383],[.3098,1.1377],[.3102,1.1372],[.3107,1.1366],[.3111,1.1361],[.3116,1.1355],[.312,1.1349],[.3125,1.1344],[.313,1.1338],[.3135,1.1331],[.314,1.1325],[.3145,1.1319],[.3151,1.1312],[.3156,1.1306],[.3161,1.13],[.3166,1.1294],[.3172,1.1287],[.3177,1.1281],[.3182,1.1275],[.3187,1.1269],[.3193,1.1263],[.3198,1.1257],[.3203,1.1251],[.3208,1.1244],[.3214,1.1238],[.3219,1.1232],[.3224,1.1226],[.323,1.122],[.3235,1.1214],[.324,1.1208],[.3246,1.1202],[.3251,1.1197],[.3256,1.1191],[.3261,1.1185],[.3267,1.1179],[.3272,1.1173],[.3278,1.1167],[.3283,1.1161],[.3288,1.1156],[.3294,1.115],[.3299,1.1144],[.3304,1.1138],[.331,1.1133],[.3315,1.1127],[.332,1.1121],[.3326,1.1116],[.3331,1.111],[.3337,1.1105],[.3342,1.1099],[.3347,1.1093],[.3353,1.1088],[.3358,1.1082],[.3364,1.1077],[.3369,1.1071],[.3374,1.1066],[.338,1.106],[.3385,1.1055],[.3391,1.1049],[.3396,1.1044],[.3402,1.1039],[.3407,1.1033],[.3413,1.1028],[.3418,1.1023],[.3423,1.1017],[.3429,1.1012],[.3434,1.1007],[.344,1.1001],[.3445,1.0996],[.3451,1.0991],[.3456,1.0986],[.3462,1.0981],[.3467,1.0975],[.3473,1.097],[.3478,1.0965],[.3484,1.096],[.3489,1.0955],[.3495,1.095],[.35,1.0945],[.3506,1.094],[.3511,1.0935],[.3517,1.093],[.3522,1.0925],[.3528,1.092],[.3533,1.0915],[.3539,1.091],[.3544,1.0905],[.355,1.09],[.3555,1.0895],[.3561,1.089],[.3566,1.0885],[.3572,1.0881],[.3577,1.0876],[.3583,1.0871],[.3588,1.0866],[.3594,1.0862],[.3599,1.0857],[.3605,1.0852],[.361,1.0847],[.3616,1.0843],[.3622,1.0838],[.3627,1.0833],[.3633,1.0829],[.3638,1.0824],[.3644,1.0819],[.3649,1.0815],[.3655,1.081],[.366,1.0806],[.3666,1.0801],[.3671,1.0797],[.3677,1.0792],[.3683,1.0788],[.3688,1.0783],[.3694,1.0779],[.3699,1.0774],[.3705,1.077],[.371,1.0766],[.3717,1.076],[.3724,1.0755],[.373,1.075],[.3737,1.0745],[.3744,1.0739],[.375,1.0734],[.3757,1.0729],[.3764,1.0724],[.377,1.0719],[.3777,1.0714],[.3783,1.0709],[.379,1.0704],[.3797,1.0699],[.3803,1.0694],[.381,1.0689],[.3817,1.0684],[.3823,1.0679],[.383,1.0675],[.3837,1.067],[.3843,1.0665],[.385,1.066],[.3857,1.0655],[.3863,1.0651],[.387,1.0646],[.3877,1.0641],[.3883,1.0637],[.389,1.0632],[.3896,1.0627],[.3903,1.0623],[.391,1.0618],[.3916,1.0614],[.3923,1.0609],[.393,1.0605],[.3936,1.06],[.3943,1.0595],[.3949,1.0591],[.3956,1.0587],[.3963,1.0582],[.3969,1.0578],[.3976,1.0573],[.3982,1.0569],[.3989,1.0565],[.3996,1.0561],[.4002,1.0556],[.4009,1.0552],[.4015,1.0548],[.4022,1.0544],[.4028,1.0539],[.4035,1.0535],[.4042,1.0531],[.4048,1.0527],[.4055,1.0523],[.4061,1.0519],[.4068,1.0515],[.4074,1.0511],[.4081,1.0507],[.4087,1.0503],[.4094,1.0499],[.41,1.0495],[.4107,1.0491],[.4113,1.0487],[.412,1.0483],[.4126,1.0479],[.4133,1.0475],[.4139,1.0472],[.4146,1.0468],[.4152,1.0464],[.4159,1.046],[.4165,1.0456],[.4172,1.0453],[.4178,1.0449],[.4184,1.0445],[.4191,1.0442],[.4197,1.0438],[.4204,1.0434],[.421,1.0431],[.4216,1.0427],[.4223,1.0424],[.4229,1.042],[.4236,1.0417],[.4242,1.0413],[.4248,1.041],[.4255,1.0406],[.4261,1.0403],[.4267,1.0399],[.4274,1.0396],[.428,1.0393],[.4286,1.0389],[.4293,1.0386],[.4299,1.0382],[.4305,1.0379],[.4312,1.0376],[.4318,1.0373],[.4324,1.0369],[.433,1.0366],[.4338,1.0362],[.4346,1.0358],[.4354,1.0354],[.4362,1.035],[.4369,1.0346],[.4377,1.0343],[.4385,1.0339],[.4392,1.0335],[.44,1.0331],[.4408,1.0327],[.4415,1.0324],[.4423,1.032],[.4431,1.0316],[.4438,1.0313],[.4446,1.0309],[.4453,1.0305],[.4461,1.0302],[.4469,1.0298],[.4476,1.0295],[.4484,1.0291],[.4491,1.0288],[.4499,1.0285],[.4506,1.0281],[.4513,1.0278],[.4521,1.0275],[.4528,1.0271],[.4536,1.0268],[.4543,1.0265],[.455,1.0261],[.4558,1.0258],[.4565,1.0255],[.4572,1.0252],[.4579,1.0249],[.4587,1.0246],[.4594,1.0243],[.4601,1.024],[.4608,1.0237],[.4615,1.0234],[.4623,1.0231],[.463,1.0228],[.4637,1.0225],[.4644,1.0222],[.4651,1.0219],[.4658,1.0216],[.4665,1.0213],[.4672,1.0211],[.4679,1.0208],[.4686,1.0205],[.4693,1.0203],[.4699,1.02],[.4706,1.0197],[.4713,1.0195],[.472,1.0192],[.4727,1.0189],[.4734,1.0187],[.474,1.0184],[.4747,1.0182],[.4754,1.0179],[.476,1.0177],[.4767,1.0174],[.4776,1.0171],[.4785,1.0168],[.4793,1.0165],[.4802,1.0162],[.4811,1.0159],[.4819,1.0156],[.4828,1.0153],[.4836,1.015],[.4845,1.0147],[.4853,1.0144],[.4861,1.0141],[.487,1.0138],[.4878,1.0136],[.4886,1.0133],[.4894,1.013],[.4902,1.0128],[.491,1.0125],[.4918,1.0123],[.4926,1.012],[.4934,1.0118],[.4942,1.0115],[.495,1.0113],[.4957,1.011],[.4965,1.0108],[.4973,1.0106],[.498,1.0104],[.4988,1.0101],[.4995,1.0099],[.5002,1.0097],[.501,1.0095],[.5017,1.0093],[.5024,1.0091],[.5031,1.0089],[.5038,1.0087],[.5045,1.0085],[.5052,1.0083],[.5059,1.0081],[.5066,1.0079],[.5073,1.0077],[.5083,1.0075],[.5093,1.0072],[.5102,1.007],[.5112,1.0067],[.5121,1.0065],[.5131,1.0062],[.514,1.006],[.5149,1.0058],[.5158,1.0056],[.5166,1.0054],[.5175,1.0052],[.5183,1.005],[.5191,1.0048],[.5199,1.0046],[.5207,1.0044],[.5215,1.0043],[.5222,1.0041],[.523,1.004],[.5237,1.0038],[.5244,1.0037],[.5251,1.0035],[.5258,1.0034],[.5264,1.0033],[.527,1.0031],[.5276,1.003],[.5283,1.0029],[.5288,1.0028],[.5294,1.0027],[.5299,1.0026],[.5305,1.0025],[.531,1.0024],[.5314,1.0023],[.5319,1.0022],[.5324,1.0022],[.5328,1.0021],[.5332,1.002],[.5336,1.002],[.534,1.0019],[.5343,1.0019],[.5346,1.0018],[.5349,1.0018],[.5352,1.0017],[.5355,1.0017],[.5357,1.0016],[.536,1.0016],[.5362,1.0016],[.5363,1.0016],[.5365,1.0015],[.5366,1.0015],[.5368,1.0015],[.5369,1.0015],[.5369,1.0015],[.537,1.0015],[.537,1.0015],[.537,1.0015],[.537,1.0015],[.537,1.0015],[.537,1.0015],[.537,1.0015],[.5371,1.0015],[.5371,1.0015],[.5371,1.0014],[.5373,1.0014],[.5374,1.0013],[.5381,1.0011],[.5387,1.0009],[.5393,1.0006],[.5399,1.0004],[.5405,1.0002],[.5411,.9999],[.5417,.9997],[.5422,.9994],[.5428,.9992],[.5433,.9989],[.5439,.9986],[.5444,.9984],[.5449,.9981],[.5454,.9978],[.5459,.9975],[.5464,.9972],[.5468,.9969],[.5473,.9967],[.5478,.9964],[.5482,.9961],[.5486,.9958],[.5491,.9955],[.5495,.9952],[.5499,.9949],[.5503,.9946],[.5507,.9942],[.5511,.9939],[.5514,.9936],[.5518,.9933],[.5521,.993],[.5528,.9923],[.5535,.9917],[.5541,.9911],[.5547,.9904],[.5552,.9898],[.5558,.9891],[.5563,.9885],[.5567,.9878],[.5572,.9871],[.5576,.9865],[.558,.9859],[.5584,.9852],[.5587,.9846],[.559,.9839],[.5593,.9833],[.5596,.9827],[.5598,.9821],[.5601,.9815],[.5603,.9809],[.5605,.9803],[.5607,.9797],[.5608,.9792],[.561,.9787],[.5611,.9781],[.5612,.9776],[.5613,.9771],[.5614,.9766],[.5615,.9762],[.5616,.9757],[.5616,.9753],[.5617,.9749],[.5617,.9745],[.5618,.9742],[.5618,.9738],[.5618,.9736],[.5618,.9733],[.5618,.973],[.5618,.9728],[.5618,.9726],[.5618,.9724],[.5618,.9723],[.5618,.9721],[.5618,.9721],[.5618,.972],[.5618,.972],[.5618,.972],[.5618,.972],[.5618,.9719],[.5618,.9719],[.5618,.9718],[.5618,.9717],[.5618,.9716],[.5618,.9715],[.5618,.9714],[.5618,.9712],[.5618,.9711],[.5618,.9709],[.5618,.9707],[.5618,.9704],[.5618,.9702],[.5618,.97],[.5618,.9697],[.5617,.9694],[.5617,.9691],[.5617,.9688],[.5617,.9685],[.5617,.9681],[.5617,.9678],[.5617,.9674],[.5617,.967],[.5617,.9666],[.5617,.9661],[.5616,.9657],[.5616,.9652],[.5616,.9648],[.5616,.9643],[.5616,.9638],[.5616,.9633],[.5616,.9627],[.5615,.9622],[.5615,.9616],[.5615,.961],[.5615,.9604],[.5615,.9598],[.5615,.9592],[.5614,.9586],[.5614,.9579],[.5614,.9573],[.5614,.9566],[.5614,.9559],[.5613,.9552],[.5613,.9544],[.5613,.9537],[.5613,.953],[.5613,.9522],[.5612,.9514],[.5612,.9506],[.5612,.9498],[.5612,.949],[.5611,.9482],[.5611,.9473],[.5611,.9465],[.5611,.9456],[.561,.9447],[.561,.9438],[.561,.9429],[.561,.942],[.5609,.941],[.5609,.9401],[.5609,.9391],[.5609,.9381],[.5608,.9372],[.5608,.9361],[.5608,.9351],[.5608,.9341],[.5607,.9331],[.5607,.9324],[.5607,.9317],[.5607,.931],[.5606,.9302],[.5606,.9295],[.5606,.9288],[.5606,.9281],[.5606,.9273],[.5605,.9266],[.5605,.9258],[.5605,.9251],[.5605,.9243],[.5605,.9236],[.5604,.9228],[.5604,.922],[.5604,.9212],[.5604,.9204],[.5603,.9197],[.5603,.9189],[.5603,.9181],[.5603,.9173],[.5603,.9164],[.5602,.9156],[.5602,.9148],[.5602,.914],[.5602,.9132],[.5601,.9123],[.5601,.9115],[.5601,.9106],[.5601,.9098],[.56,.9089],[.56,.9081],[.56,.9072],[.56,.9064],[.56,.9055],[.5599,.9046],[.5599,.9037],[.5599,.9028],[.5599,.9019],[.5598,.901],[.5598,.9001],[.5598,.8992],[.5598,.8983],[.5597,.8974],[.5597,.8965],[.5597,.8956],[.5596,.8946],[.5596,.8937],[.5596,.893],[.5596,.8923],[.5596,.8916],[.5595,.8909],[.5595,.8902],[.5595,.8895],[.5595,.8888],[.5595,.888],[.5594,.8873],[.5594,.8866],[.5594,.8859],[.5594,.8851],[.5594,.8844],[.5593,.8837],[.5593,.8829],[.5593,.8822],[.5593,.8815],[.5593,.8807],[.5592,.88],[.5592,.8792],[.5592,.8785],[.5592,.8777],[.5592,.877],[.5591,.8762],[.5591,.8754],[.5591,.8747],[.5591,.8739],[.559,.8732],[.559,.8724],[.559,.8716],[.559,.8708],[.559,.8701],[.5589,.8693],[.5589,.8685],[.5589,.8677],[.5589,.8669],[.5589,.8662],[.5588,.8654],[.5588,.8646],[.5588,.8638],[.5588,.863],[.5587,.8622],[.5587,.8614],[.5587,.8606],[.5587,.8599],[.5587,.8592],[.5586,.8584],[.5586,.8577],[.5586,.857],[.5586,.8563],[.5586,.8556],[.5585,.8548],[.5585,.8541],[.5585,.8534],[.5585,.8527],[.5585,.8519],[.5584,.8512],[.5584,.8504],[.5584,.8497],[.5584,.849],[.5584,.8482],[.5583,.8475],[.5583,.8468],[.5583,.846],[.5583,.8453],[.5583,.8445],[.5582,.8438],[.5582,.843],[.5582,.8423],[.5582,.8415],[.5581,.8408],[.5581,.84],[.5581,.8392],[.5581,.8385],[.5581,.8377],[.558,.837],[.558,.8362],[.558,.8354],[.558,.8347],[.558,.8339],[.5579,.8331],[.5579,.8324],[.5579,.8316],[.5579,.8308],[.5578,.83],[.5578,.8293],[.5578,.8285],[.5578,.8277],[.5578,.8269],[.5577,.8262],[.5577,.8255],[.5577,.8248],[.5577,.8241],[.5577,.8234],[.5576,.8227],[.5576,.822],[.5576,.8213],[.5576,.8206],[.5576,.8199],[.5575,.8191],[.5575,.8184],[.5575,.8177],[.5575,.817],[.5575,.8163],[.5574,.8155],[.5574,.8148],[.5574,.8141],[.5574,.8134],[.5574,.8127],[.5573,.8119],[.5573,.8112],[.5573,.8105],[.5573,.8097],[.5573,.809],[.5572,.8083],[.5572,.8076],[.5572,.8068],[.5572,.8061],[.5572,.8054],[.5571,.8046],[.5571,.8039],[.5571,.8032],[.5571,.8024],[.5571,.8017],[.557,.8009],[.557,.8002],[.557,.7995],[.557,.7987],[.557,.798],[.5569,.7972],[.5569,.7965],[.5569,.7957],[.5569,.795],[.5568,.7942],[.5568,.7935],[.5568,.7927],[.5568,.792],[.5568,.7912],[.5567,.7905],[.5567,.7897],[.5567,.789],[.5567,.7882],[.5567,.7875],[.5566,.7867],[.5566,.786],[.5566,.7852],[.5566,.7844],[.5566,.7837],[.5565,.7829],[.5565,.7822],[.5565,.7814],[.5565,.7806],[.5564,.7799],[.5564,.7791],[.5564,.7783],[.5564,.7776],[.5564,.7768],[.5563,.776],[.5563,.7753],[.5563,.7745],[.5563,.7737],[.5563,.773],[.5562,.7722],[.5562,.7714],[.5562,.7706],[.5562,.7699],[.5561,.7691],[.5561,.7683],[.5561,.7675],[.5561,.7668],[.5561,.7661],[.556,.7654],[.556,.7647],[.556,.764],[.556,.7633],[.556,.7626],[.5559,.7619],[.5559,.7612],[.5559,.7604],[.5559,.7597],[.5559,.759],[.5558,.7583],[.5558,.7576],[.5558,.7569],[.5558,.7562],[.5558,.7554],[.5557,.7547],[.5557,.754],[.5557,.7533],[.5557,.7526],[.5557,.7519],[.5556,.7511],[.5556,.7504],[.5556,.7497],[.5556,.749],[.5556,.7482],[.5555,.7475],[.5555,.7468],[.5555,.7461],[.5555,.7454],[.5555,.7446],[.5554,.7439],[.5554,.7432],[.5554,.7425],[.5554,.7417],[.5554,.741],[.5553,.7403],[.5553,.7395],[.5553,.7388],[.5553,.7381],[.5553,.7374],[.5552,.7366],[.5552,.7359],[.5552,.7352],[.5552,.7344],[.5552,.7337],[.5551,.733],[.5551,.7322],[.5551,.7315],[.5551,.7308],[.5551,.73],[.555,.7293],[.555,.7286],[.555,.7278],[.555,.7271],[.555,.7264],[.5549,.7256],[.5549,.7249],[.5549,.7242],[.5549,.7234],[.5548,.7227],[.5548,.7219],[.5548,.7212],[.5548,.7205],[.5548,.7197],[.5547,.719],[.5547,.7183],[.5547,.7175],[.5547,.7168],[.5547,.716],[.5546,.7153],[.5546,.7145],[.5546,.7138],[.5546,.7131],[.5546,.7123],[.5545,.7116],[.5545,.7108],[.5545,.7101],[.5545,.7093],[.5545,.7086],[.5544,.7079],[.5544,.7071],[.5544,.7064],[.5544,.7056],[.5544,.7049],[.5543,.7041],[.5543,.7034],[.5543,.7027],[.5543,.7019],[.5542,.7012],[.5542,.7005],[.5542,.6998],[.5542,.6991],[.5542,.6984],[.5541,.6976],[.5541,.6969],[.5541,.6962],[.5541,.6955],[.5541,.6948],[.554,.694],[.554,.6933],[.554,.6926],[.554,.6919],[.554,.6912],[.5539,.6905],[.5539,.6897],[.5539,.689],[.5539,.6883],[.5539,.6876],[.5538,.6869],[.5538,.6861],[.5538,.6854],[.5538,.6847],[.5538,.684],[.5537,.6833],[.5537,.6825],[.5537,.6818],[.5537,.6811],[.5537,.6804],[.5536,.6796],[.5536,.6789],[.5536,.6782],[.5536,.6775],[.5536,.6768],[.5535,.676],[.5535,.6753],[.5535,.6746],[.5535,.6739],[.5535,.6731],[.5534,.6724],[.5534,.6717],[.5534,.671],[.5534,.6703],[.5534,.6695],[.5533,.6688],[.5533,.6681],[.5533,.6673],[.5533,.6666],[.5533,.6659],[.5532,.6652],[.5532,.6644],[.5532,.6637],[.5532,.663],[.5532,.6623],[.5531,.6615],[.5531,.6608],[.5531,.6601],[.5531,.6594],[.5531,.6586],[.553,.6579],[.553,.6572],[.553,.6565],[.553,.6557],[.553,.655],[.5529,.6543],[.5529,.6536],[.5529,.6528],[.5529,.6521],[.5529,.6514],[.5528,.6507],[.5528,.65],[.5528,.6493],[.5528,.6486],[.5528,.6479],[.5527,.6471],[.5527,.6464],[.5527,.6457],[.5527,.645],[.5527,.6443],[.5526,.6436],[.5526,.6429],[.5526,.6422],[.5526,.6414],[.5526,.6407],[.5525,.64],[.5525,.6393],[.5525,.6386],[.5525,.6379],[.5525,.6372],[.5524,.6365],[.5524,.6358],[.5524,.635],[.5524,.6343],[.5524,.6336],[.5523,.6329],[.5523,.6322],[.5523,.6315],[.5523,.6308],[.5523,.6301],[.5522,.6293],[.5522,.6286],[.5522,.6279],[.5522,.6272],[.5522,.6265],[.5521,.6258],[.5521,.6251],[.5521,.6244],[.5521,.6236],[.5521,.6229],[.552,.6222],[.552,.6215],[.552,.6208],[.552,.6201],[.552,.6194],[.5519,.6186],[.5519,.6179],[.5519,.6172],[.5519,.6164],[.5519,.6157],[.5518,.615],[.5518,.6143],[.5518,.6135],[.5518,.6128],[.5518,.6121],[.5517,.6114],[.5517,.6106],[.5517,.6099],[.5517,.6092],[.5517,.6085],[.5516,.6077],[.5516,.607],[.5516,.6063],[.5516,.6056],[.5516,.6048],[.5515,.6041],[.5515,.6034],[.5515,.6027],[.5515,.6019],[.5515,.6012],[.5514,.6005],[.5514,.5998],[.5514,.599],[.5514,.5983],[.5514,.5976],[.5513,.5969],[.5513,.5961],[.5513,.5954],[.5513,.5947],[.5513,.594],[.5512,.5933],[.5512,.5925],[.5512,.5918],[.5512,.5911],[.5512,.5904],[.5511,.5896],[.5511,.5889],[.5511,.5882],[.5511,.5875],[.551,.5867],[.551,.586],[.551,.5853],[.551,.5846],[.551,.5839],[.5509,.5832],[.5509,.5824],[.5509,.5817],[.5509,.581],[.5509,.5803],[.5508,.5796],[.5508,.5788],[.5508,.5781],[.5508,.5774],[.5508,.5767],[.5507,.576],[.5507,.5752],[.5507,.5745],[.5507,.5738],[.5507,.5731],[.5506,.5724],[.5506,.5717],[.5506,.5709],[.5506,.5702],[.5506,.5695],[.5505,.5687],[.5505,.568],[.5505,.5672],[.5505,.5665],[.5505,.5657],[.5504,.565],[.5504,.5642],[.5504,.5635],[.5504,.5628],[.5504,.562],[.5503,.5613],[.5503,.5605],[.5503,.5598],[.5503,.559],[.5503,.5583],[.5502,.5576],[.5502,.5568],[.5502,.5561],[.5502,.5553],[.5501,.5546],[.5501,.5538],[.5501,.5531],[.5501,.5524],[.5501,.5516],[.55,.5509],[.55,.5502],[.55,.5494],[.55,.5487],[.55,.5479],[.5499,.5472],[.5499,.5465],[.5499,.5457],[.5499,.545],[.5499,.5443],[.5498,.5435],[.5498,.5428],[.5498,.5421],[.5498,.5413],[.5498,.5406],[.5497,.5398],[.5497,.5391],[.5497,.5384],[.5497,.5376],[.5497,.5369],[.5496,.5362],[.5496,.5355],[.5496,.5347],[.5496,.534],[.5496,.5333],[.5495,.5325],[.5495,.5318],[.5495,.5311],[.5495,.5304],[.5495,.5296],[.5494,.5289],[.5494,.5282],[.5494,.5275],[.5494,.5267],[.5494,.526],[.5493,.5253],[.5493,.5246],[.5493,.5238],[.5493,.5231],[.5492,.5224],[.5492,.5217],[.5492,.521],[.5492,.5202],[.5492,.5195],[.5491,.5188],[.5491,.5181],[.5491,.5174],[.5491,.5166],[.5491,.5159],[.549,.5152],[.549,.5145],[.549,.5138],[.549,.5131],[.549,.5124],[.5489,.5116],[.5489,.5109],[.5489,.5102],[.5489,.5095],[.5489,.5088],[.5488,.5081],[.5488,.5074],[.5488,.5067],[.5488,.506],[.5488,.5052],[.5487,.5044],[.5487,.5036],[.5487,.5029],[.5487,.5021],[.5487,.5013],[.5486,.5005],[.5486,.4997],[.5486,.499],[.5486,.4982],[.5486,.4974],[.5485,.4967],[.5485,.4959],[.5485,.4951],[.5485,.4944],[.5484,.4936],[.5484,.4928],[.5484,.4921],[.5484,.4913],[.5484,.4905],[.5483,.4898],[.5483,.489],[.5483,.4882],[.5483,.4875],[.5483,.4867],[.5482,.486],[.5482,.4852],[.5482,.4845],[.5482,.4837],[.5481,.4829],[.5481,.4822],[.5481,.4814],[.5481,.4807],[.5481,.4799],[.548,.4792],[.548,.4784],[.548,.4777],[.548,.4769],[.548,.4762],[.5479,.4754],[.5479,.4747],[.5479,.4739],[.5479,.4732],[.5479,.4725],[.5478,.4717],[.5478,.471],[.5478,.4702],[.5478,.4695],[.5477,.4688],[.5477,.468],[.5477,.4673],[.5477,.4666],[.5477,.4658],[.5476,.4651],[.5476,.4644],[.5476,.4636],[.5476,.4629],[.5476,.4622],[.5475,.4614],[.5475,.4607],[.5475,.46],[.5475,.4593],[.5475,.4585],[.5474,.4578],[.5474,.4571],[.5474,.4564],[.5474,.4557],[.5474,.4549],[.5473,.4542],[.5473,.4535],[.5473,.4528],[.5473,.4521],[.5473,.4514],[.5472,.4506],[.5472,.4499],[.5472,.4492],[.5472,.4485],[.5472,.4478],[.5471,.4471],[.5471,.4464],[.5471,.4456],[.5471,.4448],[.5471,.444],[.547,.4433],[.547,.4425],[.547,.4417],[.547,.4409],[.5469,.4402],[.5469,.4394],[.5469,.4386],[.5469,.4379],[.5469,.4371],[.5468,.4363],[.5468,.4356],[.5468,.4348],[.5468,.434],[.5468,.4333],[.5467,.4325],[.5467,.4317],[.5467,.431],[.5467,.4302],[.5466,.4295],[.5466,.4287],[.5466,.428],[.5466,.4272],[.5466,.4265],[.5465,.4257],[.5465,.425],[.5465,.4243],[.5465,.4235],[.5465,.4228],[.5464,.422],[.5464,.4213],[.5464,.4206],[.5464,.4198],[.5464,.4191],[.5463,.4184],[.5463,.4176],[.5463,.4169],[.5463,.4162],[.5463,.4155],[.5462,.4147],[.5462,.414],[.5462,.4133],[.5462,.4126],[.5461,.4118],[.5461,.411],[.5461,.4102],[.5461,.4094],[.5461,.4086],[.546,.4078],[.546,.407],[.546,.4062],[.546,.4054],[.546,.4046],[.5459,.4038],[.5459,.4031],[.5459,.4023],[.5459,.4015],[.5458,.4007],[.5458,.4],[.5458,.3992],[.5458,.3984],[.5458,.3976],[.5457,.3969],[.5457,.3961],[.5457,.3954],[.5457,.3946],[.5456,.3939],[.5456,.3931],[.5456,.3924],[.5456,.3916],[.5456,.3909],[.5455,.3901],[.5455,.3894],[.5455,.3886],[.5455,.3879],[.5455,.3872],[.5454,.3864],[.5454,.3857],[.5454,.385],[.5454,.3843],[.5454,.3835],[.5453,.3828],[.5453,.3821],[.5453,.3814],[.5453,.3807],[.5453,.38],[.5452,.3793],[.5452,.3783],[.5452,.3774],[.5452,.3765],[.5451,.3755],[.5451,.3746],[.5451,.3737],[.5451,.3728],[.545,.3719],[.545,.371],[.545,.3701],[.545,.3692],[.5449,.3683],[.5449,.3674],[.5449,.3665],[.5449,.3657],[.5448,.3648],[.5448,.3639],[.5448,.3631],[.5448,.3622],[.5447,.3614],[.5447,.3605],[.5447,.3597],[.5447,.3588],[.5446,.358],[.5446,.3572],[.5446,.3564],[.5446,.3555],[.5446,.3547],[.5445,.3539],[.5445,.3531],[.5445,.3523],[.5445,.3515],[.5444,.3507],[.5444,.35],[.5444,.3492],[.5444,.3484],[.5444,.3476],[.5443,.3469],[.5443,.3461],[.5443,.3454],[.5443,.3446],[.5442,.3439],[.5442,.3432],[.5442,.3424],[.5442,.3417],[.5442,.341],[.5441,.3403],[.5441,.3396],[.5441,.3385],[.5441,.3375],[.544,.3365],[.544,.3354],[.544,.3344],[.544,.3335],[.5439,.3325],[.5439,.3315],[.5439,.3306],[.5438,.3296],[.5438,.3287],[.5438,.3278],[.5438,.3269],[.5437,.326],[.5437,.3251],[.5437,.3243],[.5437,.3234],[.5437,.3226],[.5436,.3218],[.5436,.321],[.5436,.3202],[.5436,.3194],[.5435,.3186],[.5435,.3179],[.5435,.3172],[.5435,.3164],[.5435,.3157],[.5434,.315],[.5434,.3144],[.5434,.3137],[.5434,.313],[.5434,.3124],[.5433,.3118],[.5433,.3112],[.5433,.3106],[.5433,.31],[.5433,.3094],[.5433,.3089],[.5433,.3084],[.5432,.3078],[.5432,.3073],[.5432,.3068],[.5432,.3064],[.5432,.3059],[.5432,.3055],[.5432,.3051],[.5432,.3047],[.5431,.3042],[.5431,.3039],[.5431,.3035],[.5431,.3032],[.5431,.3028],[.5431,.3025],[.5431,.3022],[.5431,.3019],[.5431,.3017],[.5431,.3014],[.5431,.3012],[.5431,.301],[.543,.3008],[.543,.3006],[.543,.3004],[.543,.3003],[.543,.3001],[.543,.3],[.543,.2999],[.543,.2998],[.543,.2997],[.543,.2997],[.543,.2997],[.543,.2997],[.543,.2996],[.543,.2996],[.543,.2996],[.543,.2996],[.543,.2996],[.543,.2994],[.543,.2993],[.543,.299],[.543,.2988],[.5429,.2983],[.5429,.2978],[.5429,.2973],[.5428,.2968],[.5428,.2963],[.5427,.2958],[.5426,.2953],[.5426,.2949],[.5424,.294],[.5422,.2931],[.542,.2922],[.5418,.2913],[.5415,.2905],[.5413,.2897],[.541,.2889],[.5407,.2882],[.5404,.2875],[.5401,.2867],[.5397,.286],[.5394,.2854],[.539,.2847],[.5386,.2841],[.5382,.2835],[.5378,.2829],[.5374,.2823],[.537,.2818],[.5366,.2812],[.5361,.2807],[.5357,.2802],[.5353,.2797],[.5348,.2793],[.5344,.2788],[.5339,.2784],[.5335,.278],[.5331,.2776],[.5326,.2773],[.5322,.2769],[.5317,.2766],[.5313,.2762],[.5309,.2759],[.5305,.2756],[.5301,.2754],[.5297,.2751],[.5293,.2749],[.5289,.2746],[.5285,.2744],[.5282,.2742],[.5279,.274],[.5275,.2739],[.5272,.2737],[.5269,.2736],[.5266,.2734],[.5264,.2733],[.5262,.2732],[.5259,.2731],[.5257,.273],[.5256,.2729],[.5254,.2729],[.5253,.2728],[.5252,.2728],[.5251,.2728],[.525,.2727],[.525,.2727],[.525,.2727],[.525,.2727],[.525,.2727],[.525,.2727],[.525,.2727],[.525,.2727],[.525,.2727],[.5248,.2726],[.5247,.2725],[.5241,.2722],[.5236,.2719],[.5231,.2715],[.5226,.2712],[.5221,.2708],[.5216,.2704],[.5212,.2699],[.5207,.2695],[.5203,.269],[.5199,.2686],[.5195,.2681],[.5191,.2676],[.5187,.2671],[.5184,.2666],[.518,.2661],[.5177,.2656],[.5173,.265],[.517,.2645],[.5167,.264],[.5164,.2634],[.5161,.2629],[.5159,.2623],[.5156,.2618],[.5153,.2612],[.5151,.2607],[.5149,.2601],[.5146,.2595],[.5144,.259],[.5142,.2585],[.514,.2579],[.5139,.2574],[.5137,.2568],[.5135,.2563],[.5133,.2558],[.5132,.2553],[.5131,.2548],[.5129,.2543],[.5128,.2538],[.5127,.2534],[.5126,.2529],[.5125,.2525],[.5124,.2521],[.5123,.2517],[.5122,.2513],[.5121,.2509],[.512,.2506],[.512,.2502],[.5119,.2499],[.5119,.2496],[.5118,.2494],[.5118,.2491],[.5118,.2489],[.5117,.2487],[.5117,.2485],[.5117,.2484],[.5117,.2482],[.5116,.2482],[.5116,.2481],[.5116,.2481],[.5116,.248],[.5116,.248],[.5116,.2479],[.5116,.2478],[.5116,.2478],[.5116,.2476],[.5116,.2475],[.5115,.2474],[.5115,.2472],[.5115,.247],[.5115,.2468],[.5114,.2466],[.5114,.2463],[.5114,.2461],[.5113,.2458],[.5113,.2455],[.5113,.2452],[.5112,.2449],[.5112,.2445],[.5111,.2441],[.5111,.2438],[.511,.2434],[.511,.243],[.5109,.2425],[.5108,.2421],[.5108,.2416],[.5107,.2412],[.5106,.2407],[.5106,.2402],[.5105,.2396],[.5104,.2391],[.5104,.2385],[.5103,.238],[.5102,.2374],[.5101,.2368],[.51,.2362],[.51,.2356],[.5099,.2349],[.5098,.2343],[.5097,.2336],[.5096,.2329],[.5095,.2322],[.5094,.2315],[.5093,.2308],[.5092,.2301],[.5091,.2293],[.509,.2286],[.5089,.2278],[.5088,.227],[.5087,.2262],[.5086,.2254],[.5085,.2246],[.5084,.2238],[.5083,.2229],[.5082,.2221],[.508,.2212],[.5079,.2203],[.5078,.2194],[.5077,.2186],[.5076,.2176],[.5074,.2167],[.5073,.2158],[.5072,.2149],[.5071,.2139],[.5069,.2129],[.5068,.212],[.5067,.211],[.5065,.21],[.5064,.209],[.5063,.208],[.5061,.207],[.506,.206],[.5059,.2049],[.5058,.2042],[.5057,.2035],[.5056,.2028],[.5055,.2021],[.5054,.2014],[.5053,.2007],[.5052,.2],[.5051,.1993],[.505,.1985],[.5049,.1978],[.5048,.1971],[.5047,.1964],[.5046,.1956],[.5045,.1949],[.5044,.1941],[.5043,.1934],[.5042,.1926],[.5041,.1919],[.504,.1911],[.5039,.1904],[.5038,.1896],[.5037,.1889],[.5036,.1881],[.5035,.1873],[.5034,.1866],[.5033,.1858],[.5032,.185],[.5031,.1842],[.503,.1834],[.5029,.1827],[.5028,.1819],[.5027,.1811],[.5026,.1803],[.5025,.1795],[.5024,.1787],[.5023,.1779],[.5022,.1771],[.502,.1763],[.5019,.1755],[.5018,.1747],[.5017,.1739],[.5016,.1731],[.5015,.1724],[.5014,.1717],[.5013,.171],[.5012,.1703],[.5011,.1696],[.5011,.1689],[.501,.1682],[.5009,.1674],[.5008,.1667],[.5007,.166],[.5006,.1653],[.5005,.1646],[.5004,.1639],[.5003,.1632],[.5002,.1625],[.5001,.1618],[.5,.161],[.4999,.1603],[.4998,.1596],[.4997,.1589],[.4996,.1582],[.4995,.1574],[.4994,.1567],[.4993,.156],[.4992,.1553],[.4991,.1546],[.499,.1538],[.4989,.1531],[.4989,.1524],[.4988,.1517],[.4987,.1509],[.4986,.1502],[.4985,.1495],[.4984,.1488],[.4983,.148],[.4982,.1473],[.4981,.1466],[.498,.1459],[.4979,.1452],[.4978,.1445],[.4977,.1438],[.4976,.1431],[.4975,.1424],[.4974,.1417],[.4973,.141],[.4972,.1403],[.4971,.1396],[.497,.1389],[.497,.1382],[.4969,.1375],[.4968,.1368],[.4967,.136],[.4966,.1353],[.4965,.1346],[.4964,.1339],[.4963,.1332],[.4962,.1325],[.4961,.1318],[.496,.1311],[.4959,.1304],[.4958,.1297],[.4957,.129],[.4956,.1283],[.4955,.1276],[.4954,.1269],[.4953,.1261],[.4953,.1254],[.4952,.1247],[.4951,.124],[.495,.1232],[.4949,.1225],[.4948,.1218],[.4947,.1211],[.4946,.1203],[.4945,.1196],[.4944,.1189],[.4943,.1182],[.4942,.1174],[.4941,.1167],[.494,.116],[.4939,.1153],[.4938,.1146],[.4937,.1138],[.4936,.1131],[.4935,.1124],[.4934,.1117],[.4933,.111],[.4932,.1103],[.4931,.1096],[.493,.1089],[.4929,.1081],[.4929,.1074],[.4928,.1067],[.4927,.106],[.4926,.1053],[.4925,.1046],[.4924,.1039],[.4923,.1032],[.4922,.1025],[.4921,.1017],[.492,.1009],[.4919,.1001],[.4918,.0993],[.4917,.0985],[.4916,.0977],[.4914,.0969],[.4913,.0961],[.4912,.0953],[.4911,.0945],[.491,.0937],[.4909,.0929],[.4908,.0921],[.4907,.0913],[.4906,.0906],[.4905,.0898],[.4904,.089],[.4903,.0882],[.4902,.0874],[.4901,.0867],[.49,.0859],[.4899,.0851],[.4898,.0844],[.4897,.0836],[.4896,.0829],[.4895,.0821],[.4894,.0814],[.4893,.0806],[.4892,.0799],[.4891,.0791],[.489,.0784],[.4889,.0777],[.4888,.0769],[.4887,.0762],[.4886,.0755],[.4885,.0748],[.4884,.0741],[.4883,.0733],[.4882,.0726],[.4881,.0719],[.488,.0712],[.4879,.0705],[.4878,.0695],[.4877,.0684],[.4875,.0674],[.4874,.0664],[.4873,.0654],[.4871,.0644],[.487,.0634],[.4869,.0624],[.4867,.0615],[.4866,.0605],[.4865,.0596],[.4864,.0586],[.4862,.0577],[.4861,.0568],[.486,.0559],[.4859,.055],[.4858,.0541],[.4856,.0532],[.4855,.0524],[.4854,.0515],[.4853,.0507],[.4852,.0498],[.4851,.049],[.485,.0482],[.4849,.0474],[.4848,.0467],[.4847,.0459],[.4846,.0451],[.4845,.0444],[.4844,.0437],[.4843,.043],[.4842,.0422],[.4841,.0416],[.484,.0409],[.4839,.0402],[.4838,.0396],[.4837,.0389],[.4837,.0383],[.4836,.0377],[.4835,.0371],[.4834,.0365],[.4834,.036],[.4833,.0354],[.4832,.0349],[.4831,.0344],[.4831,.0339],[.483,.0334],[.4829,.0329],[.4829,.0325],[.4828,.032],[.4828,.0316],[.4827,.0312],[.4827,.0308],[.4826,.0304],[.4826,.0302],[.4826,.0301],[.4826,.03],[.4825,.0299],[.4825,.0299],[.4825,.0299],[.4825,.0298],[.4825,.0298],[.4825,.0298],[.4825,.0297],[.4825,.0296],[.4825,.0296],[.4825,.0294],[.4825,.0292],[.4824,.029],[.4824,.0289],[.4824,.0288],[.4824,.0287],[.4824,.0286],[.4824,.0286],[.4824,.0286],[.4824,.0286],[.4824,.0286],[.4824,.0286],[.4823,.0285],[.4823,.0284],[.4823,.0282],[.4823,.0281],[.4822,.0277],[.4822,.0274],[.482,.0268],[.4819,.0262],[.4818,.0256],[.4817,.025],[.4815,.0244],[.4814,.0238],[.4812,.0232],[.481,.0227],[.4809,.0221],[.4807,.0216],[.4805,.021],[.4803,.0205],[.4802,.02],[.48,.0195],[.4798,.019],[.4796,.0185],[.4794,.018],[.4792,.0175],[.4789,.017],[.4787,.0166],[.4785,.0161],[.4783,.0157],[.478,.0153],[.4778,.0148],[.4776,.0144],[.4773,.014],[.4768,.0132],[.4763,.0124],[.4758,.0117],[.4753,.011],[.4747,.0103],[.4742,.0097],[.4736,.009],[.4731,.0084],[.4725,.0079],[.472,.0073],[.4714,.0068],[.4708,.0063],[.4702,.0058],[.4697,.0054],[.4691,.005],[.4685,.0046],[.468,.0042],[.4674,.0038],[.4668,.0035],[.4663,.0032],[.4658,.0029],[.4652,.0026],[.4647,.0023],[.4642,.0021],[.4637,.0019],[.4632,.0016],[.4627,.0015],[.4622,.0013],[.4618,.0011],[.4614,.001],[.461,8e-4],[.4605,7e-4],[.4602,6e-4],[.4598,5e-4],[.4595,4e-4],[.4592,3e-4],[.4589,3e-4],[.4586,2e-4],[.4584,1e-4],[.4582,1e-4],[.458,1e-4],[.4578,0],[.4577,0],[.4576,0],[.4576,0],[.4575,0],[.4575,0],[.4575,0],[.4575,0],[.4574,0],[.4567,0],[.456,0],[.4553,0],[.4546,0],[.4539,0],[.4532,0],[.4525,0],[.4518,0],[.4511,0],[.4504,0],[.4497,0],[.449,0],[.4483,0],[.4476,0],[.4469,0],[.4461,0],[.4454,0],[.4447,0],[.444,0],[.4433,0],[.4426,0],[.4419,0],[.4412,0],[.4405,0],[.4398,0],[.4391,0],[.4384,0],[.4377,0],[.437,0],[.4363,0],[.4356,0],[.4348,0],[.4341,0],[.4334,0],[.4327,0],[.432,0],[.4313,0],[.4306,0],[.4299,0],[.4292,0],[.4285,0],[.4278,0],[.4271,0],[.4264,0],[.4257,0],[.425,0],[.4243,0],[.4235,0],[.4228,0],[.4221,0],[.4214,0],[.4207,0],[.42,0],[.4193,0],[.4186,0],[.4179,0],[.4172,0],[.4165,0],[.4158,0],[.4151,0],[.4144,0],[.4137,0],[.413,0],[.4122,0],[.4115,0],[.4108,0],[.4101,0],[.4094,0],[.4087,0],[.408,0],[.4073,0],[.4066,0],[.4059,0],[.4052,0],[.4045,0],[.4038,0],[.4031,0],[.4024,0],[.4017,0],[.4009,0],[.4002,0],[.3995,0],[.3988,0],[.3981,0],[.3974,0],[.3967,0],[.396,0],[.3953,0],[.3946,0],[.3939,0],[.3932,0],[.3925,0],[.3918,0],[.3911,0],[.3904,0],[.3896,0],[.3889,0],[.3882,0],[.3875,0],[.3868,0],[.3861,0],[.3854,0],[.3847,0],[.384,0],[.3833,0],[.3826,0],[.3819,0],[.3812,0],[.3805,0],[.3798,0],[.3791,0],[.3783,0],[.3776,0],[.3769,0],[.3762,0],[.3755,0],[.3748,0],[.3741,0],[.3734,0],[.3727,0],[.372,0],[.3713,0],[.3706,0],[.3699,0],[.3692,0],[.3685,0],[.3678,0],[.367,0],[.3663,0],[.3656,0],[.3649,0],[.3642,0],[.3635,0],[.3628,0],[.3621,0],[.3614,0],[.3607,0],[.36,0],[.3593,0],[.3586,0],[.3579,0],[.3572,0],[.3565,0],[.3557,0],[.355,0],[.3543,0],[.3536,0],[.3529,0],[.3522,0],[.3515,0],[.3508,0],[.3501,0],[.3494,0],[.3487,0],[.348,0],[.3473,0],[.3466,0],[.3459,0],[.3452,0],[.3445,0],[.3437,0],[.343,0],[.3423,0],[.3416,0],[.3409,0],[.3402,0],[.3395,0],[.3388,0],[.3381,0],[.3374,0],[.3367,0],[.336,0],[.3353,0],[.3346,0],[.3339,0],[.3332,0],[.3324,0],[.3317,0],[.331,0],[.3303,0],[.3296,0],[.3289,0],[.3282,0],[.3275,0],[.3268,0],[.3261,0],[.3254,0],[.3247,0],[.324,0],[.3233,0],[.3226,0],[.3219,0],[.3211,0],[.3204,0],[.3197,0],[.319,0],[.3183,0],[.3176,0],[.3169,0],[.3162,0],[.3155,0],[.3148,0],[.3141,0],[.3134,0],[.3127,0],[.312,0],[.3113,0],[.3106,0],[.3098,0],[.3091,0],[.3084,0],[.3077,0],[.307,0],[.3063,0],[.3056,0],[.3049,0],[.3042,0],[.3035,0],[.3028,0],[.3021,0],[.3014,0],[.3007,0],[.3,0],[.2993,0],[.2985,0],[.2978,0],[.2971,0],[.2964,0],[.2957,0],[.295,0],[.2943,0],[.2936,0],[.2929,0],[.2922,0],[.2915,0],[.2908,0],[.2901,0],[.2894,0],[.2887,0],[.288,0],[.2872,0],[.2865,0],[.2858,0],[.2851,0],[.2844,0],[.2837,0],[.283,0],[.2823,0],[.2816,0],[.2809,0],[.2802,0],[.2795,0],[.2788,0],[.2781,0],[.2774,0],[.2767,0],[.2759,0],[.2752,0],[.2745,0],[.2738,0],[.2731,0],[.2724,0],[.2717,0],[.271,0],[.2703,0],[.2696,0],[.2689,0],[.2682,0],[.2675,0],[.2668,0],[.2661,0],[.2654,0],[.2646,0],[.2639,0],[.2632,0],[.2625,0],[.2618,0],[.2611,0],[.2604,0],[.2597,0],[.259,0],[.2583,0],[.2576,0],[.2569,0],[.2562,0],[.2555,0],[.2548,0],[.2541,0],[.2533,0],[.2526,0],[.2519,0],[.2512,0],[.2505,0],[.2498,0],[.2491,0],[.2484,0],[.2477,0],[.247,0],[.2463,0],[.2456,0],[.2449,0],[.2442,0],[.2435,0],[.2428,0],[.2421,0],[.2413,0],[.2406,0],[.2399,0],[.2392,0],[.2385,0],[.2378,0],[.2371,0],[.2364,0],[.2357,0],[.235,0],[.2343,0],[.2336,0],[.2329,0],[.2322,0],[.2315,0],[.2308,0],[.23,0],[.2293,0],[.2286,0],[.2279,0],[.2272,0],[.2265,0],[.2258,0],[.2251,0],[.2244,0],[.2237,0],[.223,0],[.2223,0],[.2216,0],[.2209,0],[.2202,0],[.2195,0],[.2187,0],[.218,0],[.2173,0],[.2166,0],[.2159,0],[.2152,0],[.2145,0],[.2138,0],[.2131,0],[.2124,0],[.2117,0],[.211,0],[.2103,0],[.2096,0],[.2089,0],[.2082,0],[.2074,0],[.2067,0],[.206,0],[.2053,0],[.2046,0],[.2039,0],[.2032,0],[.2025,0],[.2018,0],[.2011,0],[.2004,0],[.1997,0],[.199,0],[.1983,0],[.1976,0],[.1969,0],[.1961,0],[.1954,0],[.1947,0],[.194,0],[.1933,0],[.1926,0],[.1919,0],[.1912,0],[.1905,0],[.1898,0],[.1891,0],[.1884,0],[.1877,0],[.187,0],[.1863,0],[.1856,0],[.1848,0],[.1841,0],[.1834,0],[.1827,0],[.182,0],[.1813,0],[.1806,0],[.1799,0],[.1792,0],[.1785,0],[.1778,0],[.1771,0],[.1764,0],[.1757,0],[.175,0],[.1743,0],[.1735,0],[.1728,0],[.1721,0],[.1714,0],[.1707,0],[.17,0],[.1693,0],[.1686,0],[.1679,0],[.1672,0],[.1665,0],[.1658,0],[.1651,0],[.1644,0],[.1637,0],[.163,0],[.1622,0],[.1615,0],[.1608,0],[.1601,0],[.1594,0],[.1587,0],[.158,0],[.1573,0],[.1566,0],[.1559,0],[.1552,0],[.1545,0],[.1538,0],[.1531,0],[.1524,0],[.1517,0],[.1509,0],[.1502,0],[.1495,0],[.1488,0],[.1481,0],[.1474,0],[.1467,0],[.146,0],[.1453,0],[.1446,0],[.1439,0],[.1432,0],[.1425,0],[.1418,0],[.1411,0],[.1404,0],[.1397,0],[.1389,0],[.1382,0],[.1375,0],[.1368,0],[.1361,0],[.1354,0],[.1347,0],[.134,0],[.1333,0],[.1326,0],[.1319,0],[.1312,0],[.1305,0],[.1298,0],[.1291,0],[.1284,0],[.1276,0],[.1269,0],[.1262,0],[.1255,0],[.1248,0],[.1241,0],[.1234,0],[.1227,0],[.122,0],[.1213,0],[.1206,0],[.1199,0],[.1192,0],[.1185,0],[.1178,0],[.1171,0],[.1163,0],[.1156,0],[.1149,0],[.1142,0],[.1135,0],[.1128,0],[.1121,0],[.1114,0],[.1107,0],[.11,0],[.1093,0],[.1086,0],[.1079,0],[.1072,0],[.1065,0],[.1058,0],[.105,0],[.1043,0],[.1036,0],[.1029,0],[.1022,0],[.1015,0],[.1008,0],[.1001,0],[.0994,0],[.0987,0],[.098,0],[.0973,0],[.0966,0],[.0959,0],[.0952,0],[.0945,0],[.0937,0],[.093,0],[.0923,0],[.0916,0],[.0909,0],[.0902,0],[.0895,0],[.0888,0],[.0881,0],[.0874,0],[.0867,0],[.086,0],[.0853,0],[.0846,0],[.0839,0],[.0832,0],[.0824,0],[.0817,0],[.081,0],[.0803,0],[.0796,0],[.0789,0],[.0782,0],[.0775,0],[.0768,0],[.0761,0],[.0754,0],[.0747,0],[.074,0],[.0733,0],[.0726,0],[.0719,0],[.0711,0],[.0704,0],[.0697,0],[.069,0],[.0683,0],[.0676,0],[.0669,0],[.0662,0],[.0655,0],[.0648,0],[.0641,0],[.0634,0],[.0627,0],[.062,0],[.0613,0],[.0606,0],[.0598,0],[.0591,0],[.0584,0],[.0577,0],[.057,0],[.0563,0],[.0556,0],[.0549,0],[.0542,0],[.0535,0],[.0528,0],[.0521,0],[.0514,0],[.0507,0],[.05,0],[.0493,0],[.0485,0]],F3={id:"arcade-cabinet",name:"Borne d'Arcade",dimensions:"600 × 1700 × 700 mm",printable:[600,1700],icon:"🕹️",printAspect:1,twoSided:!1,zones:[{id:"left",label:"Côté Gauche",col:0,row:1,aspect:561.8/1670.9},{id:"right",label:"Côté Droit",col:1,row:1,aspect:561.8/1670.9},{id:"marquee",label:"Fronton (Haut)",col:2,row:1,aspect:600/200},{id:"front",label:"Porte Avant",col:2,row:0,aspect:600/800}],create(){const n=new Bt,e=new Lt({color:1118481,roughness:.9}),t=new Lt({color:16777215,roughness:.6,metalness:.1}),i=document.createElement("canvas");i.width=1024,i.height=1024;const s=i.getContext("2d");s.fillStyle="#050505",s.fillRect(0,0,1024,1024),s.fillStyle="#4ea1d3",s.fillRect(100,200,824,624),s.fillStyle="#6e7e60",s.fillRect(100,500,824,324),s.fillStyle="#e52b2b",s.fillRect(140,240,320,20),s.fillRect(564,240,320,20),s.fillStyle="#f7d825",s.fillRect(140,240,280,20),s.fillRect(604,240,280,20),s.fillStyle="#e52b2b",s.font="bold 50px sans-serif",s.fillText("K.O.",460,280),s.fillStyle="#eeeeee",s.fillRect(250,350,90,180),s.fillStyle="#ffcc99",s.fillRect(270,300,50,50),s.fillStyle="#d11141",s.fillRect(650,350,90,180),s.fillStyle="#ffcc99",s.fillRect(670,300,50,50),s.fillStyle="rgba(0, 0, 0, 0.2)";for(let se=200;se<824;se+=4)s.fillRect(100,se,824,2);const r=new Vr(i);r.colorSpace=Xt;const o=new Lt({map:r,roughness:.2,metalness:.8});function a(se,De,Je,ot,je,j,K,ge=!1){const be=se.attributes.uv,Me=se.attributes.position,Xe=j*(1/3),et=(1-K)*.5;for(let C=0;C<be.count;C++){const ee=Me.getX(C),J=Me.getY(C);let $=(ee-De)/(Je-De);ge&&($=1-$);const Z=(J-ot)/(je-ot);be.setXY(C,Xe+$*(1/3),et+Z*.5)}be.needsUpdate=!0}function l(se,De,Je,ot,je=null){const j=new J0(se,De),K=je||t,ge=j.attributes.uv;if(!je){const Me=Je*.3333333333333333,Xe=(1-ot)*.5;for(let et=0;et<ge.count;et++){let C=ge.getX(et),ee=ge.getY(et);ge.setXY(et,Me+C*(1/3),Xe+ee*.5)}}const be=new qe(j,K);return be.rotation.y=Math.PI/2,be}function c(se,De,Je,ot,je=null){const j=De.x-se.x,K=De.y-se.y,ge=Math.hypot(j,K),be=Math.atan2(K,j),Me=l(.58,ge,Je,ot,je),Xe=new Bt;Xe.add(Me);const et=se.x+j/2,C=se.y+K/2;return Xe.position.set(et,C,0),Xe.rotation.z=be-Math.PI/2,Xe}const h=new b0;if(I0.length>0){h.moveTo(I0[0][0],I0[0][1]);for(let se=1;se<I0.length;se++)h.lineTo(I0[se][0],I0[se][1])}else h.moveTo(0,0),h.lineTo(0,1),h.lineTo(1,1),h.lineTo(1,0),h.lineTo(0,0);const u={depth:.018,bevelEnabled:!0,bevelSegments:2,bevelSize:.002,bevelThickness:.002};let f=1/0,p=-1/0,g=1/0,_=-1/0;I0.forEach(se=>{se[0]<f&&(f=se[0]),se[0]>p&&(p=se[0]),se[1]<g&&(g=se[1]),se[1]>_&&(_=se[1])});const m=new vn(h,u);m.translate(0,0,.285),a(m,f,p,g,_,0,1,!1);const d=new qe(m,[t,e]),T=new vn(h,u);T.translate(0,0,-.303),a(T,f,p,g,_,1,1,!0);const y=new qe(T,[t,e]),v={x:.5128,y:0},R={x:.5618,y:.9731},M={x:.5618,y:.9731},A={x:.3406,y:1.1034},L=A,E={x:.3355,y:1.4964},b=E,D={x:.3147,y:1.6665},O=c(v,R,2,0),z=c(M,A,null,null,e),X=new Lt({color:16711680,roughness:.3,metalness:.1}),V=new Lt({color:22015,roughness:.3,metalness:.1});function Y(se,De){const Je=new Lt({color:13421772,roughness:.4,metalness:.8}),ot=new Cn(.005,.005,.05,16),je=new qe(ot,Je);je.rotation.z=-Math.PI/2,je.position.set(.025,-.03,De+.12);const j=new al(.015,32,32),K=new qe(j,X);K.position.set(.05,-.03,De+.12),se.add(je,K);const ge=new Cn(.012,.012,.005,32),be=new Cn(.015,.015,.002,32),Me=new Lt({color:2236962,roughness:.8});[{y:-.02,z:De+.04},{y:-.01,z:De-0},{y:-.02,z:De-.04},{y:-.06,z:De+.03},{y:-.05,z:De-.01},{y:-.06,z:De-.05}].forEach(et=>{const C=new qe(ge,V);C.rotation.z=-Math.PI/2,C.position.set(.0025,et.y,et.z);const ee=new qe(be,Me);ee.rotation.z=-Math.PI/2,ee.position.set(.001,et.y,et.z),se.add(C,ee)})}Y(z,.05),Y(z,-.19);const Q=c(L,E,null,null,o),W=c(b,D,2,1),ue=new K0(.3,1.6,.56),ve=new qe(ue,e);return ve.position.set(.15,.8,0),n.add(d,y,O,z,Q,W,ve),n.position.set(-.3,-.8,0),n.rotation.y=Math.PI/6,{group:n,topMaterial:t,baseMaterial:e,joystickMaterial:X,buttonMaterial:V,type:"arcade",zones:this.zones,twoSided:!1}}};if(window.location.hostname!=="localhost"&&window.location.hostname!=="127.0.0.1"){const n=document.querySelector("#localBadge");n&&(n.style.display="none");const e=document.querySelector("#productSelect");e&&Array.from(e.options).forEach(t=>{t.value==="tshirt3D"&&t.remove()})}const l0=document.querySelector("#viewer"),ke=new Xg({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});ke.setPixelRatio(Math.min(devicePixelRatio,2));ke.shadowMap.enabled=!0;ke.shadowMap.type=uh;ke.outputColorSpace=Xt;ke.toneMapping=dh;ke.toneMappingExposure=1.05;l0.append(ke.domElement);const Rt=new lf;Rt.background=new We(15330800);const Ne=new bn(34,1,.1,100);Ne.position.set(3.4,2.8,3.8);Rt.add(Ne);let m0=null,x0=null;function Xr(){if(x0){Rt.background=x0;return}const n=document.querySelector("#showWatermark")?.checked??!0,e=document.querySelector("#sceneColor")?.value||"#e9edf0";if(!n||!Ml||cn.width===0){m0?.dispose(),m0=null,Rt.background=new We(e);return}const t=document.createElement("canvas");t.width=1024,t.height=1024;const i=t.getContext("2d");i.fillStyle=e,i.fillRect(0,0,t.width,t.height),i.save();const s=document.createElement("canvas");s.width=cn.width,s.height=cn.height;const r=s.getContext("2d");r.drawImage(cn,0,0),r.globalCompositeOperation="source-in",r.fillStyle="#425260",r.fillRect(0,0,s.width,s.height),i.globalAlpha=.08,i.translate(t.width/2,t.height/2),i.rotate(-25*Math.PI/180),i.translate(-t.width/2,-t.height/2);const o=340,a=220,l=220,c=Math.round(l*(cn.height/cn.width));for(let h=-t.height*.6;h<t.height*1.6;h+=a){const u=Math.floor(h/a)%2*(o/2);for(let f=-t.width*.6;f<t.width*1.6;f+=o)i.drawImage(s,f+u,h,l,c)}i.restore(),m0?.dispose(),m0=new Vr(t),m0.colorSpace=Xt,m0.wrapS=fs,m0.wrapT=fs,Rt.background=m0}const cn=new Image;cn.src="/logo-graph2print.png";let Ml=!1;cn.onload=()=>{Ml=!0,Xr(),(on.length>0||$e.text.trim())&&Tt()};const An=new hf(new Lh({transparent:!0,depthTest:!1,depthWrite:!1}));An.position.set(0,-1.28,-5);An.visible=!1;An.renderOrder=20;const Ae=new Yg(Ne,ke.domElement);Ae.enableDamping=!1;Ae.autoRotate=!1;Ae.minDistance=2.2;Ae.maxDistance=8;Ae.target.set(0,-.04,0);Rt.add(new np(16777215,6320256,2.2));const qr=new Yh(16777215,3.4);qr.position.set(-3,5,4);qr.castShadow=!0;qr.shadow.mapSize.set(2048,2048);Rt.add(qr);const gu=new Yh(12113919,1.4);gu.position.set(4,2,-3);Rt.add(gu);const Yr=new qe(new sl(5,64),new qf({color:5595499,opacity:.15}));Yr.rotation.x=-Math.PI/2;Yr.position.y=-.09;Yr.receiveShadow=!0;Rt.add(Yr);const _u={mousePad:p3,mug11oz:m3,keychainRect:_3,keychainRound:x3,keychainHeart:y3,tshirt3D:C3,puzzle:P3,coaster:D3,coasterRound:I3,pencilCase:U3,cushion:N3,arcadeCabinet:F3},vu=document.querySelector("#productSelect")?.value||"mug11oz";let ct=vu,de=_u[vu].create();Rt.add(de.group);const zt=new ap(8,24,6385784,10135212);zt.position.y=-.085;zt.visible=!1;Rt.add(zt);let on=[],a0=-1,sn=null;const $e={text:"",color:"#111820",font:"Inter, sans-serif",size:60,bold:!1,italic:!1,align:"center",x:0,y:0,rotation:0},rn=document.querySelector("#transformOverlay"),Va=document.querySelector("#transformBox"),Qi=document.querySelector("#rotateHandle"),g0=document.querySelector("#rotateStem"),Ga=[...document.querySelectorAll(".resize-handle")],br=[...document.querySelectorAll(".edge-handle")];function Qt(){if(a0>=0&&a0<on.length){const n=on[a0];return n.scaleX===void 0&&(n.scaleX=n.scale??1),n.scaleY===void 0&&(n.scaleY=n.scale??1),n}return null}function Q0(){const n=Qt(),e=document.querySelector("#adjustments"),t=document.querySelector("#activeImageLabel");if(!n){e?.classList.add("disabled"),t&&(t.textContent="Aucune image active");return}e?.classList.remove("disabled"),t&&(t.textContent=`Image active : ${n.name}`);const i=Math.round((n.scaleX+n.scaleY)/2*100);document.querySelector("#scale").value=i,document.querySelector("#scaleValue").value=`${i} %`,document.querySelector("#posX").value=Math.round(n.x*100),document.querySelector("#posXValue").value=`${Math.round(n.x*100)} %`,document.querySelector("#posY").value=Math.round(n.y*100),document.querySelector("#posYValue").value=`${Math.round(n.y*100)} %`,document.querySelector("#rotation").value=Math.round(n.rotation),document.querySelector("#rotationValue").value=`${Math.round(n.rotation)}°`,document.querySelectorAll("[data-fit]").forEach(s=>s.classList.toggle("active",s.dataset.fit===n.fitMode))}function O3(n){n>=0&&n<on.length?a0=n:a0=on.length-1,El(),Q0(),$t(document.querySelector("#showTransformFrame").checked),Rl()}function B3(n,e){e&&e.stopPropagation(),on.splice(n,1),a0>=on.length&&(a0=on.length-1),El(),Q0(),Tt(),$t(document.querySelector("#showTransformFrame").checked)}function El(){const n=document.querySelector("#imagesList");n&&(n.innerHTML="",on.forEach((e,t)=>{const i=document.createElement("div");i.className=`image-item${t===a0?" active":""}`,i.onclick=()=>O3(t);const s=document.createElement("img");s.className="image-item-thumb",s.src=e.img.src,s.alt=e.name;const r=document.createElement("div");r.className="image-item-info",r.innerHTML=`<span class="image-item-name">${e.name}</span><small class="image-item-meta">Calque #${t+1} • ${Math.round(e.scale*100)}%</small>`;const o=document.createElement("select");o.className="layer-side-select",de.zones?o.innerHTML='<option value="both">Toutes zones</option>'+de.zones.map(l=>`<option value="${l.id}">${l.label}</option>`).join(""):o.innerHTML='<option value="both">Deux faces</option><option value="A">Face A</option><option value="B">Face B</option>',o.value=e.side||"both",o.onclick=l=>l.stopPropagation(),o.onchange=l=>{e.side=l.target.value,Tt()},(de.twoSided||de.zones)&&r.append(o);const a=document.createElement("button");a.className="image-item-remove",a.title="Supprimer cette image",a.innerHTML="×",a.onclick=l=>B3(t,l),i.append(s,r,a),n.append(i)}))}function Bi(){return!rn.hasAttribute("hidden")&&!rn.classList.contains("hidden")&&rn.style.display!=="none"}function $t(n){const e=de.type==="flat",t=document.querySelector("#showTransformFrame").checked,i=Qt();!!n&&t&&!!i&&e?(rn.removeAttribute("hidden"),rn.classList.remove("hidden"),rn.style.display="block"):(rn.setAttribute("hidden",""),rn.classList.add("hidden"),rn.style.display="none")}function Br(n){const e=document.querySelector("#wrapPreviewWidget"),t=document.querySelector("#wrapPreviewImg");if(!e||!t)return;if(on.length>0||$e.text.trim().length>0){e.hidden=!1;const s=n||sn?.image;s&&s.toDataURL&&(t.src=s.toDataURL("image/png"))}else e.hidden=!0}document.querySelector("#toggleWrapPreview")?.addEventListener("click",()=>{document.querySelector("#wrapPreviewWidget")?.classList.toggle("collapsed")});document.querySelector("#downloadWrapBtn")?.addEventListener("click",()=>{const n=sn?.image;if(!n||!n.toDataURL){jt("Aucun visuel wrap à exporter");return}const e=document.createElement("a");e.href=n.toDataURL("image/png"),e.download=`wrap-${ct}-210x95mm-${Date.now()}.png`,document.body.append(e),e.click(),e.remove(),jt("Fichier d’impression Wrap PNG téléchargé")});function Tt(){const n=$e.text.trim().length>0;if(!(on.length>0)&&!n){sn?.dispose(),sn=null,de.topMaterial.map=null,de.topMaterial.needsUpdate=!0,An.material.map=null,An.material.needsUpdate=!0,document.querySelector("#emptyHint").hidden=!1,Br(null);return}document.querySelector("#emptyHint").hidden=!0;const t=document.querySelector("#topColor")?.value||"#ffffff",i=!!de.twoSided,s=!!de.zones,r=document.createElement("canvas");r.width=s?3072:i?3200:1600,r.height=s?2048:Math.round(1600/de.printAspect);const o=r.getContext("2d");if(o.clearRect(0,0,r.width,r.height),de.type!=="3d-decal"&&(o.fillStyle=t,o.fillRect(0,0,r.width,r.height)),(document.querySelector("#showWatermark")?.checked??!0)&&Ml&&cn.width>0&&de.type!=="3d-decal"){o.save();const l=document.createElement("canvas");l.width=cn.width,l.height=cn.height;const c=l.getContext("2d");c.drawImage(cn,0,0),c.globalCompositeOperation="source-in",c.fillStyle="#111820",c.fillRect(0,0,l.width,l.height),o.globalAlpha=.12,o.translate(r.width/2,r.height/2),o.rotate(-25*Math.PI/180),o.translate(-r.width/2,-r.height/2);const h=320,u=200,f=190,p=Math.round(f*(cn.height/cn.width));for(let g=-r.height*.6;g<r.height*1.6;g+=u){const _=Math.floor(g/u)%2*(h/2);for(let m=-r.width*.6;m<r.width*1.6;m+=h)o.drawImage(l,m+_,g,f,p)}o.restore()}if(on.forEach(l=>{if(!l.img)return;const c=l.scaleX??l.scale??1,h=l.scaleY??l.scale??1,u=l.img.width/l.img.height;let f=[];de.zones?f=l.side==="both"||!l.side?de.zones:de.zones.filter(p=>p.id===l.side):f=(i?l.side==="A"?[0]:l.side==="B"?[1]:[0,1]:[0]).map(g=>({col:g,row:0,width:1600,height:r.height})),f.forEach(p=>{const g=s?1024:1600,_=s?1024:r.height,m=p.col*g,d=(p.row||0)*_,T=s?p.aspect||1:g/_;let y,v;l.fitMode==="fill"?(y=g,v=_):l.fitMode==="contain"==u>T?(y=g,v=s?g*T/u:y/u):(v=_,y=s?_*u/T:v*u),y*=c,v*=h;const R=m+g/2+l.x*g*.5,M=d+_/2-l.y*_*.5;o.save(),o.beginPath(),o.rect(m,d,g,_),o.clip(),o.translate(R,M),o.rotate(-l.rotation*Math.PI/180),o.drawImage(l.img,-y/2,-v/2,y,v),o.restore()})}),n){let l=[];de.zones?l=$e.side==="both"||!$e.side?de.zones:de.zones.filter(c=>c.id===$e.side):l=(i?$e.side==="A"?[0]:$e.side==="B"?[1]:[0,1]:[0]).map(h=>({col:h,row:0,width:1600,height:r.height})),l.forEach(c=>{o.save();const h=s?1024:1600,u=s?1024:r.height,f=c.col*h,p=(c.row||0)*u;o.beginPath(),o.rect(f,p,h,u),o.clip();const g=f+h/2+$e.x*h*.5,_=p+u/2-$e.y*u*.5;o.translate(g,_),o.rotate(-$e.rotation*Math.PI/180);const m=`${$e.italic?"italic ":""}${$e.bold?"bold ":"normal "}${$e.size}px ${$e.font}`;o.font=m,o.fillStyle=$e.color,o.textAlign=$e.align||"center",o.textBaseline="middle";const d=$e.text.split(`
`),T=$e.size*1.25,v=-((d.length-1)*T)/2;d.forEach((R,M)=>{o.fillText(R,0,v+M*T)}),o.restore()})}sn?.dispose(),sn=new Vr(r),sn.colorSpace=Xt,sn.anisotropy=ke.capabilities.getMaxAnisotropy(),de.type==="3d-decal"?(sn.premultiplyAlpha=!1,sn.needsUpdate=!0,de.applyDecals&&de.applyDecals(sn,i,r)):(de.topMaterial.map=sn,de.topMaterial.color.set(16777215),de.topMaterial.needsUpdate=!0),An.material.map=sn,An.material.needsUpdate=!0,An.scale.set(3.1,3.1/de.printAspect,1),Br(r)}document.querySelector("#imageInput").addEventListener("change",async n=>{const e=Array.from(n.target.files||[]);if(e.length){for(const t of e){const i=URL.createObjectURL(t);await new Promise(s=>{const r=new Image;r.onload=()=>{on.push({id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,name:t.name,img:r,scale:1,scaleX:1,scaleY:1,x:0,y:0,rotation:0,fitMode:"cover",side:de.zones?de.zones[0].id:"both"}),URL.revokeObjectURL(i),s()},r.onerror=()=>{URL.revokeObjectURL(i),s()},r.src=i})}n.target.value="",a0=on.length-1,El(),Q0(),Tt(),$t(document.querySelector("#showTransformFrame").checked),jt(`${e.length} image(s) ajoutée(s)`)}});document.querySelector("#productSelect").onchange=n=>{ct=n.target.value,Rt.remove(de.group),de.group.traverse(g=>g.geometry?.dispose());const e=_u[ct];de=e.create(),Rt.add(de.group),document.querySelector("#productDimensions").textContent=Array.isArray(e.dimensions)?`${e.dimensions.join(" × ")} mm`:e.dimensions,document.querySelector("#productIcon").textContent=e.icon||(ct==="mousePad"?"▰":ct==="mug11oz"?"☕":"👕");const t={mug11oz:"13,00 €",mousePad:"10,00 €",keychainRect:"6,00 €",keychainRound:"6,00 €",keychainHeart:"6,00 €",tshirt3D:"17,00 € - 21,00 €",puzzle:"15,00 €",coaster:"8,00 €",coasterRound:"8,00 €",pencilCase:"11,00 €",cushion:"17,00 €"},i=document.querySelector("#productPrice");i&&(i.textContent=t[ct]||"-- €");const s=ct==="mug11oz",r=ct==="arcadeCabinet";document.querySelector("#handleColorWrap").hidden=!s,document.querySelector("#innerColorWrap").hidden=!s,document.querySelector("#quickPalette").hidden=!s;const o=document.querySelector("#joystickColorWrap");o&&(o.hidden=!r);const a=document.querySelector("#buttonColorWrap");a&&(a.hidden=!r);const l=document.querySelector("#arcadeGlowWrap");l&&(l.hidden=!r),document.querySelector("#baseColor").value="#ffffff",document.querySelector("#topColor").value="#ffffff",s&&(document.querySelector("#handleColor").value="#ffffff",document.querySelector("#innerColor").value="#ffffff"),r&&(document.querySelector("#joystickColor")&&(document.querySelector("#joystickColor").value="#ff0000"),document.querySelector("#buttonColor")&&(document.querySelector("#buttonColor").value="#0055ff"),document.querySelector("#arcadeGlow")&&(document.querySelector("#arcadeGlow").checked=!1));const c=!!de.twoSided,h=!!de.zones,u=document.querySelector("#viewFaceA"),f=document.querySelector("#viewFaceB");u&&(u.style.display=c||h?"inline-block":"none"),f&&(f.style.display=c||h?"inline-block":"none"),u&&(u.innerHTML=h?'<span style="font-weight:900;margin-right:4px;">A</span> Face Avant':'<span style="font-weight:900;margin-right:4px;">A</span> Face A'),f&&(f.innerHTML=h?'<span style="font-weight:900;margin-right:4px;">B</span> Côtés':'<span style="font-weight:900;margin-right:4px;">B</span> Face B');const p=document.querySelector("#textSideSelect");p&&(p.style.display=c||h?"inline-block":"none",h?p.innerHTML='<option value="both">Toutes zones</option>'+de.zones.map(g=>`<option value="${g.id}">${g.label}</option>`).join(""):p.innerHTML='<option value="both">2 faces</option><option value="A">Face A</option><option value="B">Face B</option>'),updateLayersList(),(on.length>0||$e.text.trim())&&Tt(),jr(),$t(document.querySelector("#showTransformFrame").checked),Br(sn?.image)};document.querySelector("#showTransformFrame").addEventListener("change",n=>{$t(n.target.checked),n.target.checked&&Rl(),jt(n.target.checked?"Cadre de sélection activé":"Cadre de sélection masqué")});document.querySelectorAll("[data-fit]").forEach(n=>n.onclick=()=>{const e=Qt();e&&(e.fitMode=n.dataset.fit,document.querySelectorAll("[data-fit]").forEach(t=>t.classList.toggle("active",t===n)),xu(!0))});const z3={scale:["scaleValue",n=>`${n} %`,n=>n/100],posX:["posXValue",n=>`${n} %`,n=>n/100],posY:["posYValue",n=>`${n} %`,n=>n/100],rotation:["rotationValue",n=>`${n}°`,Number]};Object.entries(z3).forEach(([n,[e,t,i]])=>document.querySelector(`#${n}`).addEventListener("input",s=>{const r=Qt();if(r){if(n==="scale"){const o=i(s.target.value);r.scale=o,r.scaleX=o,r.scaleY=o}else r[n==="posX"?"x":n==="posY"?"y":n]=i(s.target.value);document.querySelector(`#${e}`).value=t(s.target.value),Tt()}}));function xu(n=!0){const e=Qt();e&&(e.scale=1,e.scaleX=1,e.scaleY=1,e.x=0,e.y=0,e.rotation=0,Q0(),n&&Tt())}document.querySelector("#resetImage").onclick=()=>xu(!0);document.querySelector("#customText").addEventListener("input",n=>{$e.text=n.target.value,Tt()});document.querySelector("#textSideSelect")?.addEventListener("change",n=>{$e.side=n.target.value,Tt()});document.querySelector("#textColor").addEventListener("input",n=>{$e.color=n.target.value,Tt()});document.querySelector("#textFont").addEventListener("change",async n=>{if($e.font=n.target.value,document.fonts)try{await document.fonts.load(`${$e.bold?"bold ":"normal "}${$e.size}px ${$e.font}`)}catch{}Tt()});document.querySelector("#textSize").addEventListener("input",n=>{$e.size=Number(n.target.value),document.querySelector("#textSizeValue").value=`${n.target.value} px`,Tt()});document.querySelector("#textBold").addEventListener("change",n=>{$e.bold=n.target.checked,Tt()});document.querySelector("#textItalic").addEventListener("change",n=>{$e.italic=n.target.checked,Tt()});document.querySelectorAll(".align-btn").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".align-btn").forEach(e=>e.classList.toggle("active",e===n)),$e.align=n.dataset.align,Tt()})});document.querySelector("#textPosX").addEventListener("input",n=>{$e.x=Number(n.target.value)/100,document.querySelector("#textPosXValue").value=`${n.target.value} %`,Tt()});document.querySelector("#textPosY").addEventListener("input",n=>{$e.y=Number(n.target.value)/100,document.querySelector("#textPosYValue").value=`${n.target.value} %`,Tt()});document.querySelector("#textRotation").addEventListener("input",n=>{$e.rotation=Number(n.target.value),document.querySelector("#textRotationValue").value=`${n.target.value}°`,Tt()});document.querySelector("#resetText").addEventListener("click",()=>{$e.text="",$e.color="#111820",$e.font="Inter, sans-serif",$e.size=60,$e.bold=!1,$e.italic=!1,$e.align="center",$e.x=0,$e.y=0,$e.rotation=0,document.querySelector("#customText").value="",document.querySelector("#textColor").value="#111820",document.querySelector("#textFont").value="Inter, sans-serif",document.querySelector("#textSize").value=60,document.querySelector("#textSizeValue").value="60 px",document.querySelector("#textBold").checked=!1,document.querySelector("#textItalic").checked=!1,document.querySelectorAll(".align-btn").forEach(n=>n.classList.toggle("active",n.dataset.align==="center")),document.querySelector("#textPosX").value=0,document.querySelector("#textPosXValue").value="0 %",document.querySelector("#textPosY").value=0,document.querySelector("#textPosYValue").value="0 %",document.querySelector("#textRotation").value=0,document.querySelector("#textRotationValue").value="0°",Tt(),Br(sn?.image)});document.querySelectorAll(".collapsible-section .section-title-btn").forEach(n=>{n.addEventListener("click",()=>{const e=n.closest(".collapsible-section");if(!e)return;const t=e.classList.toggle("collapsed");n.setAttribute("aria-expanded",String(!t))})});const jr=()=>{ct==="mug11oz"?(Ne.position.set(.8,2.5,6.5),Ae.target.set(0,.78,0)):ct==="mousePad"||ct==="puzzle"||ct==="coaster"?(Ne.position.set(0,4.5,.001),Ae.target.set(0,0,0)):ct==="keychainHeart"?(Ne.position.set(0,.45,1.15),Ae.target.set(0,.45,0)):ct==="keychainRound"?(Ne.position.set(0,.32,.9),Ae.target.set(0,.32,0)):ct==="keychainRect"?(Ne.position.set(0,.29,.7),Ae.target.set(0,.29,0)):ct.startsWith("tshirt")?(Ne.position.set(0,.35,1.6),Ae.target.set(0,.35,0)):ct==="arcadeCabinet"?(Ne.position.set(2.8,.5,2.8),Ae.target.set(0,0,0)):(Ne.position.set(3.4,2.8,3.8),Ae.target.set(0,-.04,0)),Ae.update()};document.querySelector("#resetView")?.addEventListener("click",jr);document.querySelector("#viewFaceA")?.addEventListener("click",()=>{jr(),ct==="arcadeCabinet"&&(Ne.position.set(2.6,.5,1.5),Ae.update())});document.querySelector("#viewFaceB")?.addEventListener("click",()=>{jr(),ct==="mug11oz"?Ne.position.set(-.8,2.5,-6.5):ct==="arcadeCabinet"?Ne.position.set(1.5,.5,-2.6):Ne.position.z=-Math.abs(Ne.position.z),Ae.update()});document.querySelector("#zoomIn").onclick=()=>{Ne.position.multiplyScalar(.84),Ae.update()};document.querySelector("#zoomOut").onclick=()=>{Ne.position.multiplyScalar(1.16),Ae.update()};document.querySelector("#autoRotate").onchange=()=>{Ae.autoRotate=!1,es=0,Tr=1};Ae.autoRotateSpeed=1.25;document.querySelector("#topColor").oninput=n=>{de.topMaterial.color.set(n.target.value),de.topMaterial.needsUpdate=!0,Tt()};document.querySelector("#baseColor").oninput=n=>{de.baseMaterial.color.set(n.target.value),de.baseMaterial.needsUpdate=!0};document.querySelector("#handleColor").oninput=n=>{de.handleMaterial&&(de.handleMaterial.color.set(n.target.value),de.handleMaterial.needsUpdate=!0)};document.querySelector("#innerColor").oninput=n=>{de.innerMaterial&&(de.innerMaterial.color.set(n.target.value),de.innerMaterial.needsUpdate=!0)};document.querySelector("#joystickColor")&&(document.querySelector("#joystickColor").oninput=n=>{de.joystickMaterial&&(de.joystickMaterial.color.set(n.target.value),document.querySelector("#arcadeGlow").checked&&de.joystickMaterial.emissive.set(n.target.value),de.joystickMaterial.needsUpdate=!0)});document.querySelector("#buttonColor")&&(document.querySelector("#buttonColor").oninput=n=>{de.buttonMaterial&&(de.buttonMaterial.color.set(n.target.value),document.querySelector("#arcadeGlow").checked&&de.buttonMaterial.emissive.set(n.target.value),de.buttonMaterial.needsUpdate=!0)});document.querySelector("#arcadeGlow")&&(document.querySelector("#arcadeGlow").onchange=n=>{const e=n.target.checked;de.joystickMaterial&&(e?(de.joystickMaterial.emissive.copy(de.joystickMaterial.color),de.joystickMaterial.emissiveIntensity=.8):de.joystickMaterial.emissive.setHex(0),de.joystickMaterial.needsUpdate=!0),de.buttonMaterial&&(e?(de.buttonMaterial.emissive.copy(de.buttonMaterial.color),de.buttonMaterial.emissiveIntensity=.8):de.buttonMaterial.emissive.setHex(0),de.buttonMaterial.needsUpdate=!0)});document.querySelectorAll(".quick-palette .swatch").forEach(n=>{n.addEventListener("click",()=>{const e=n.dataset.color;document.querySelector("#handleColor").value=e,document.querySelector("#innerColor").value=e,de.handleMaterial&&(de.handleMaterial.color.set(e),de.handleMaterial.needsUpdate=!0),de.innerMaterial&&(de.innerMaterial.color.set(e),de.innerMaterial.needsUpdate=!0)})});document.querySelector("#sceneColor").oninput=()=>Xr();document.querySelector("#showGrid").onchange=n=>zt.visible=n.target.checked;document.querySelector("#showWatermark")?.addEventListener("change",()=>{Xr(),Tt(),jt(document.querySelector("#showWatermark").checked?"Filigrane activé":"Filigrane retiré")});document.querySelector("#speed").oninput=n=>{Ae.autoRotateSpeed=Number(n.target.value)/9.6*(document.querySelector("#reverse").checked?-1:1),document.querySelector("#speedValue").value=`${(Number(n.target.value)/12).toFixed(1)}×`};document.querySelector("#reverse").onchange=n=>Ae.autoRotateSpeed=Math.abs(Ae.autoRotateSpeed)*(n.target.checked?-1:1);const yu={horizontal:new P(0,1,0),vertical:new P(1,0,0),diagonal:new P(1,1,0).normalize(),swing:new P(0,1,0)};let es=0,Tr=1,ah=performance.now();function Su(n,e){const t=document.querySelector("#rotationMode").value,i=document.querySelector("#reverse").checked?-1:1,s=e.clone().sub(Ae.target),r=t==="swing"?Math.sin(n*Math.PI*2)*.8*i:n*Math.PI*2*i;s.applyAxisAngle(yu[t],r),Ne.position.copy(Ae.target).add(s),Ne.lookAt(Ae.target)}function $r(n){const e=Math.hypot(Ne.position.x-Ae.target.x,Ne.position.z-Ae.target.z),t=Hr.degToRad(n);Ne.position.x=Ae.target.x+Math.cos(t)*e,Ne.position.z=Ae.target.z+Math.sin(t)*e,Ne.lookAt(Ae.target),Ae.update(),document.querySelector("#viewAngle").value=n,document.querySelector("#angleValue").value=`${n}°`}document.querySelectorAll("[data-angle]").forEach(n=>n.onclick=()=>$r(Number(n.dataset.angle)));document.querySelector("#viewAngle").oninput=n=>$r(Number(n.target.value));document.querySelector("#bgInput").onchange=n=>{const e=n.target.files[0];if(!e)return;const t=URL.createObjectURL(e);new tp().load(t,i=>{x0?.dispose(),x0=i,x0.colorSpace=Xt,Rt.background=x0,URL.revokeObjectURL(t),jt("Image de fond appliquée")})};document.querySelector("#clearBg").onclick=()=>{x0?.dispose(),x0=null,Xr(),document.querySelector("#bgInput").value=""};const ws=document.querySelector("#exportResolution"),As=document.querySelector("#exportResolutionSide");ws?.addEventListener("change",()=>{As&&(As.value=ws.value)});As?.addEventListener("change",()=>{ws&&(ws.value=As.value)});function bl(){return Number(ws?.value||As?.value||2)}function zr(n){const e=document.querySelector("#exportStatus"),t=document.querySelector("#exportStatusSide");e&&(e.textContent=n),t&&(t.textContent=n)}function Tl(){const n=Bi(),e=zt.visible,t=bl();$t(!1),zt.visible=!1,ke.getPixelRatio();const i=new ie;ke.getSize(i),ke.setPixelRatio(Math.min(devicePixelRatio,2)*t),ke.render(Rt,Ne);const s=document.createElement("a"),r=t===1?"standard":t===2?"hd-2x":"ultrahd-3x";s.download=`mockup-${ct}-${r}-${Date.now()}.png`,s.href=ke.domElement.toDataURL("image/png"),document.body.append(s),s.click(),s.remove(),ke.setPixelRatio(Math.min(devicePixelRatio,2)),ke.setSize(i.x,i.y,!1),ke.render(Rt,Ne),$t(n),zt.visible=e,jt(`Aperçu PNG ${r.toUpperCase()} téléchargé`)}document.querySelector("#exportPng")?.addEventListener("click",Tl);document.querySelector("#exportPngSide")?.addEventListener("click",Tl);async function wl(){ct!=="mug11oz"&&(document.querySelector("#productSelect").value="mug11oz",document.querySelector("#productSelect").dispatchEvent(new Event("change")),await new Promise(l=>setTimeout(l,120)));const n=Bi(),e=zt.visible,t=bl(),i=t===1?"standard":t===2?"hd-2x":"ultrahd-3x";$t(!1),zt.visible=!1,ke.getPixelRatio();const s=new ie;ke.getSize(s);const r=Ne.position.clone(),o=Ae.target.clone(),a=[{name:"vue1-90deg-anse-droite",degrees:90,label:"90°"},{name:"vue2-225deg-face",degrees:225,label:"225°"},{name:"vue3-270deg-anse-gauche",degrees:270,label:"270°"}];ke.setPixelRatio(Math.min(devicePixelRatio,2)*t);for(let l=0;l<a.length;l++){const c=a[l];zr(`Export vue ${l+1}/3 (${c.label})…`),$r(c.degrees),Ne.lookAt(Ae.target),ke.render(Rt,Ne);const h=document.createElement("a");h.download=`mockup-mug-vue-${l+1}-${c.name}-${i}-${Date.now()}.png`,h.href=ke.domElement.toDataURL("image/png"),document.body.append(h),h.click(),h.remove(),await new Promise(u=>setTimeout(u,350))}zr("Prêt"),Ne.position.copy(r),Ae.target.copy(o),Ae.update(),ke.setPixelRatio(Math.min(devicePixelRatio,2)),ke.setSize(s.x,s.y,!1),ke.render(Rt,Ne),$t(n),zt.visible=e,jt(`3 vues Mug exportées (90°, 225°, 270°) - ${i.toUpperCase()}`)}document.querySelector("#exportMugViews")?.addEventListener("click",wl);document.querySelector("#exportMugViewsSide")?.addEventListener("click",wl);document.querySelector("#exportMp4Side")?.addEventListener("click",()=>{document.querySelector("#exportMp4")?.click()});document.querySelector("#exportMp4").onclick=Mu;async function k3(){const n=Bi(),e=zt.visible,t=bl(),i=t===1?"standard":t===2?"hd-2x":"ultrahd-3x";$t(!1),zt.visible=!1;const s=new ie;ke.getSize(s);const r=Ne.position.clone(),o=Ae.target.clone();ke.setPixelRatio(Math.min(devicePixelRatio,2)*t);const a=[{name:"face-a",degrees:90,label:"Face A"},{name:"face-b",degrees:270,label:"Face B"}];for(let l=0;l<a.length;l++){const c=a[l];zr(`Export vue ${l+1}/2 (${c.label})…`),$r(c.degrees),Ne.lookAt(Ae.target),ke.render(Rt,Ne);const h=document.createElement("a");h.download=`mockup-${ct}-${c.name}-${i}-${Date.now()}.png`,h.href=ke.domElement.toDataURL("image/png"),document.body.append(h),h.click(),h.remove(),await new Promise(u=>setTimeout(u,350))}zr("Prêt"),Ne.position.copy(r),Ae.target.copy(o),Ae.update(),ke.setPixelRatio(Math.min(devicePixelRatio,2)),ke.setSize(s.x,s.y,!1),ke.render(Rt,Ne),$t(n),zt.visible=e,jt(`2 vues Porte-clés exportées (Face A, Face B) - ${i.toUpperCase()}`)}async function H3(){const n=document.querySelector("#exportAll");n&&(n.disabled=!0),document.querySelector("#exportStatus").textContent="Export complet...";try{ct==="mug11oz"?await wl():ct.startsWith("keychain")?await k3():Tl(),await Mu(),jt("Tous les exports sont terminés !")}catch(e){console.error(e)}finally{n&&(n.disabled=!1),document.querySelector("#exportStatus").textContent="Prêt"}}document.querySelector("#exportAll")?.addEventListener("click",H3);async function Mu(){const n=document.querySelector("#exportMp4"),e=document.querySelector("#exportStatus");if(!window.VideoEncoder||!window.VideoFrame){await lh(n,e);return}const t=ke.domElement.width-ke.domElement.width%2,i=ke.domElement.height-ke.domElement.height%2,s={codec:"avc1.42001f",width:t,height:i,bitrate:5e6,framerate:30,avc:{format:"avc"}};if(!(await VideoEncoder.isConfigSupported(s).catch(()=>null))?.supported){await lh(n,e);return}const o=n.textContent,a=Ne.position.clone(),l=a.clone().sub(Ae.target);Math.hypot(l.x,l.z),Math.atan2(l.z,l.x);const c=new ru,h=new d3({target:c,video:{codec:"avc",width:t,height:i},fastStart:"in-memory",firstTimestampBehavior:"offset"});let u=null;const f=new VideoEncoder({output:(_,m)=>h.addVideoChunk(_,m),error:_=>{u=_}}),p=Bi(),g=zt.visible;$t(!1),zt.visible=!1,An.visible=!1,n.disabled=!0,Ae.enabled=!1,Ae.autoRotate=!1,document.querySelector("#autoRotate").checked=!1,f.configure(s);try{for(let d=0;d<180;d++){Su(d/180,a),ke.render(Rt,Ne);const T=new VideoFrame(ke.domElement,{timestamp:Math.round(d*1e6/30),duration:Math.round(1e6/30)});f.encode(T,{keyFrame:d%60===0}),T.close(),n.textContent=`Création du MP4… ${Math.round((d+1)/1.8)} %`,e.textContent="Gardez cette fenêtre ouverte",await new Promise(y=>requestAnimationFrame(y))}if(await f.flush(),u)throw u;h.finalize();const _=URL.createObjectURL(new Blob([c.buffer],{type:"video/mp4"})),m=document.createElement("a");m.href=_,m.download=`animation-${ct}-${Date.now()}.mp4`,document.body.append(m),m.click(),m.remove(),setTimeout(()=>URL.revokeObjectURL(_),1e4),jt("Animation MP4 enregistrée")}catch(_){console.error(_),jt("Impossible de créer le MP4")}finally{f.close(),Ne.position.copy(a),Ne.lookAt(Ae.target),Ae.enabled=!0,$t(p),zt.visible=g,An.visible=wrapWasVisible,n.disabled=!1,n.textContent=o,e.textContent="PNG haute qualité ou MP4 de 6 secondes"}}async function lh(n,e){if(!window.MediaRecorder||!ke.domElement.captureStream){jt("Export vidéo indisponible dans ce navigateur");return}const t=n.textContent,i=Ne.position.clone(),s=i.clone().sub(Ae.target);Math.hypot(s.x,s.z),Math.atan2(s.z,s.x);const r=[],o=ke.domElement.captureStream(30),a=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(u=>MediaRecorder.isTypeSupported(u));if(!a){jt("Enregistrement vidéo indisponible");return}const l=new MediaRecorder(o,{mimeType:a,videoBitsPerSecond:5e6});l.ondataavailable=u=>{u.data.size&&r.push(u.data)};const c=Bi(),h=zt.visible;$t(!1),zt.visible=!1,An.visible=!1,n.disabled=!0,Ae.enabled=!1,Ae.autoRotate=!1,document.querySelector("#autoRotate").checked=!1;try{l.start(250);const u=performance.now(),f=6e3;await new Promise(R=>{const M=A=>{const L=Math.min(1,(A-u)/f);Su(L,i),ke.render(Rt,Ne),n.textContent=`Enregistrement… ${Math.round(L*100)} %`,e.textContent="Création locale de la vidéo",L<1?requestAnimationFrame(M):R()};requestAnimationFrame(M)});const p=new Promise(R=>l.addEventListener("stop",R,{once:!0}));l.stop(),await p,o.getTracks().forEach(R=>R.stop()),n.textContent="Conversion en MP4…",e.textContent="Première conversion : quelques secondes";const[{FFmpeg:g},{fetchFile:_}]=await Promise.all([Bl(()=>import("./index-CUxsIblL.js"),[]),Bl(()=>import("./index-607UPNXL.js"),[])]),m=new g;await m.load({coreURL:"/ffmpeg-core.js",wasmURL:"/ffmpeg-core.wasm"}),await m.writeFile("rotation.webm",await _(new Blob(r,{type:a})));const d=await m.exec(["-i","rotation.webm","-vf","scale=1280:-2","-r","30","-an","-c:v","libx264","-profile:v","baseline","-level","3.1","-pix_fmt","yuv420p","-movflags","+faststart","rotation.mp4"]);if(d!==0)throw new Error(`FFmpeg a retourné le code ${d}`);const T=await m.readFile("rotation.mp4");if(!T?.length)throw new Error("Le fichier MP4 est vide");const y=URL.createObjectURL(new Blob([T],{type:"video/mp4"})),v=document.createElement("a");v.href=y,v.download=`animation-${ct}-${Date.now()}.mp4`,document.body.append(v),v.click(),v.remove(),setTimeout(()=>URL.revokeObjectURL(y),1e4),m.terminate(),jt("Animation MP4 enregistrée")}catch(u){console.error(u),jt("La conversion MP4 a échoué")}finally{l.state!=="inactive"&&l.stop(),o.getTracks().forEach(u=>u.stop()),Ne.position.copy(i),Ne.lookAt(Ae.target),Ae.enabled=!0,$t(c),zt.visible=h,An.visible=wrapWasVisible,n.disabled=!1,n.textContent=t,e.textContent="PNG haute qualité ou MP4 de 6 secondes"}}function jt(n){const e=document.querySelector("#toast");e.textContent=n,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),2400)}function Al(){const n=Qt();if(!n||!n.img)return[];const e=n.img.width/n.img.height,t=ct.startsWith("tshirt"),i=ct.startsWith("keychain"),s=de.printAspect||1.2,r=de.meshWidth||(t?1.45:i?1.2:2.4),o=de.meshHeight||(t?1.85:i?1.2/s:2);let a,l;n.fitMode==="contain"==e>s?(a=r,l=a/e):(l=o,a=l*e);const c=n.scaleX??n.scale??1,h=n.scaleY??n.scale??1;a*=c,l*=h;const u=n.x*(r/2),f=n.y*(o/2),p=Hr.degToRad(n.rotation),g=Math.cos(p),_=Math.sin(p);return[[-a/2,-l/2],[a/2,-l/2],[a/2,l/2],[-a/2,l/2]].map(([m,d])=>[u+m*g-d*_,f+m*_+d*g])}function Cl([n,e]){let t;const s=Qt()?.side||"A";if(ct.startsWith("keychain")){const o={keychainHeart:.45,keychainRound:.32,keychainRect:.29}[ct]||.32,a=s==="B"?-.015:.015,l=s==="B"?-n:n;t=new P(l,e+o,a).project(Ne)}else if(ct.startsWith("tshirt")){const r=s==="B"?-.015:.015,o=s==="B"?-n:n;t=new P(o,e+.35,r).project(Ne)}else t=new P(n,-.002,e).project(Ne);return[(t.x*.5+.5)*l0.clientWidth,(-t.y*.5+.5)*l0.clientHeight]}function Rl(){const n=Qt();if(!n||!Bi()||de.type!=="flat")return;const e=n.side||"A";if(e==="A"&&Ne.position.z<-.1||e==="B"&&Ne.position.z>.1){Va.setAttribute("points",""),Ga.forEach(c=>{c.setAttribute("cx",-9999),c.setAttribute("cy",-9999)}),br.forEach(c=>{c.setAttribute("cx",-9999),c.setAttribute("cy",-9999)}),g0.setAttribute("x1",-9999),g0.setAttribute("y1",-9999),g0.setAttribute("x2",-9999),g0.setAttribute("y2",-9999),Qi.setAttribute("cx",-9999),Qi.setAttribute("cy",-9999);return}const t=Al().map(Cl);if(!t.length)return;if(Va.setAttribute("points",t.map(c=>c.join(",")).join(" ")),Ga.forEach((c,h)=>{c.setAttribute("cx",t[h][0]),c.setAttribute("cy",t[h][1])}),br.length>=4){const c=[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2],h=[(t[1][0]+t[2][0])/2,(t[1][1]+t[2][1])/2],u=[(t[2][0]+t[3][0])/2,(t[2][1]+t[3][1])/2],f=[(t[3][0]+t[0][0])/2,(t[3][1]+t[0][1])/2],p=[c,h,u,f];br.forEach((g,_)=>{g.setAttribute("cx",p[_][0]),g.setAttribute("cy",p[_][1])})}const i=[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2],s=t.reduce((c,h)=>[c[0]+h[0]/4,c[1]+h[1]/4],[0,0]),r=i[0]-s[0],o=i[1]-s[1],a=Math.hypot(r,o)||1,l=[i[0]+r/a*28,i[1]+o/a*28];g0.setAttribute("x1",i[0]),g0.setAttribute("y1",i[1]),g0.setAttribute("x2",l[0]),g0.setAttribute("y2",l[1]),Qi.setAttribute("cx",l[0]),Qi.setAttribute("cy",l[1])}let st=null,ts=null;function Pl(){return Al().map(Cl).reduce((e,t)=>[e[0]+t[0]/4,e[1]+t[1]/4],[0,0])}function V3(n,e){const t=Al().map(Cl);if(!t.length)return!1;let i=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){const[o,a]=t[s],[l,c]=t[r];a>e!=c>e&&n<(l-o)*(e-a)/(c-a)+o&&(i=!i)}return i}const ch=new op,zo=new ie;function Eu(n){const e=ke.domElement.getBoundingClientRect();zo.x=(n.clientX-e.left)/e.width*2-1,zo.y=-((n.clientY-e.top)/e.height)*2+1,ch.setFromCamera(zo,Ne);const t=[];de.printMesh&&t.push(de.printMesh),de.group.traverse(s=>{s.isMesh&&s.material===de.topMaterial&&t.push(s)});const i=ch.intersectObjects(t.length?t:de.group.children,!0);return i.length>0?i[0]:null}ke.domElement.addEventListener("pointerdown",n=>{ts={x:n.offsetX,y:n.offsetY};const e=Qt();e&&ct==="mug11oz"&&Eu(n)&&(Ae.enabled=!1,st={type:"mug-drag",startX:n.clientX,startY:n.clientY,initialPosX:e.x,initialPosY:e.y},ke.domElement.setPointerCapture(n.pointerId))});ke.domElement.addEventListener("pointermove",n=>{const e=Qt();if(st&&st.type==="mug-drag"&&e){const t=(n.clientX-st.startX)/l0.clientWidth,i=(n.clientY-st.startY)/l0.clientHeight;e.x=Math.max(-1,Math.min(1,st.initialPosX+t*2.2)),e.y=Math.max(-1,Math.min(1,st.initialPosY-i*2.2)),Q0(),Tt()}});ke.domElement.addEventListener("pointerup",n=>{if(st&&st.type==="mug-drag"){try{ke.domElement.releasePointerCapture(n.pointerId)}catch{}st=null,Ae.enabled=!0;return}const e=Qt();if(!e||!ts)return;if(!(Math.hypot(n.offsetX-ts.x,n.offsetY-ts.y)>5)){if(de.type==="flat")document.querySelector("#showTransformFrame").checked&&$t(V3(n.offsetX,n.offsetY));else if(ct==="mug11oz"){const i=Eu(n);i&&i.uv&&(e.x=Math.max(-1,Math.min(1,(i.uv.x-.5)*2)),e.y=Math.max(-1,Math.min(1,(i.uv.y-.5)*2)),Q0(),Tt(),jt("Image positionnée"))}}ts=null});document.addEventListener("keydown",n=>{n.key==="Escape"&&(document.querySelector("#showTransformFrame").checked=!1,$t(!1))});Va.addEventListener("pointerdown",n=>{const e=Qt();e&&(n.preventDefault(),st={type:"move",x:n.clientX,y:n.clientY,startX:e.x,startY:e.y},rn.setPointerCapture(n.pointerId),Ae.enabled=!1)});Ga.forEach(n=>n.addEventListener("pointerdown",e=>{const t=Qt();if(!t)return;e.preventDefault();const i=Pl();st={type:"corner-scale",corner:Number(n.dataset.corner),center:i,startDistance:Math.hypot(e.offsetX-i[0],e.offsetY-i[1])||1,startScaleX:t.scaleX??1,startScaleY:t.scaleY??1},rn.setPointerCapture(e.pointerId),Ae.enabled=!1}));br.forEach(n=>n.addEventListener("pointerdown",e=>{const t=Qt();if(!t)return;e.preventDefault();const i=Pl();st={type:"edge-scale",edge:Number(n.dataset.edge),center:i,startDistance:Math.hypot(e.offsetX-i[0],e.offsetY-i[1])||1,startScaleX:t.scaleX??1,startScaleY:t.scaleY??1},rn.setPointerCapture(e.pointerId),Ae.enabled=!1}));Qi.addEventListener("pointerdown",n=>{const e=Qt();if(!e)return;n.preventDefault();const t=Pl();st={type:"rotate",center:t,startAngle:Math.atan2(n.offsetY-t[1],n.offsetX-t[0]),startRotation:e.rotation},rn.setPointerCapture(n.pointerId),Ae.enabled=!1});rn.addEventListener("pointermove",n=>{const e=Qt();if(!st||!e)return;const t=e.side||"A";if(st.type==="move"){const i=(n.clientX-st.x)/l0.clientWidth*2.2,s=t==="B"?-i:i;e.x=Math.max(-1,Math.min(1,st.startX+s)),e.y=Math.max(-1,Math.min(1,st.startY-(n.clientY-st.y)/l0.clientHeight*2.2))}else if(st.type==="corner-scale"){const s=Math.hypot(n.offsetX-st.center[0],n.offsetY-st.center[1])/st.startDistance;e.scaleX=Math.max(.15,Math.min(3.5,st.startScaleX*s)),e.scaleY=Math.max(.15,Math.min(3.5,st.startScaleY*s)),e.scale=(e.scaleX+e.scaleY)/2}else if(st.type==="edge-scale"){const s=Math.hypot(n.offsetX-st.center[0],n.offsetY-st.center[1])/st.startDistance;st.edge===0||st.edge===2?e.scaleY=Math.max(.15,Math.min(3.5,st.startScaleY*s)):e.scaleX=Math.max(.15,Math.min(3.5,st.startScaleX*s)),e.scale=(e.scaleX+e.scaleY)/2}else if(st.type==="rotate"){const i=Math.atan2(n.offsetY-st.center[1],n.offsetX-st.center[0]),s=Hr.radToDeg(i-st.startAngle);e.rotation=st.startRotation+(t==="B"?-s:s)}Q0(),Tt()});rn.addEventListener("pointerup",()=>{st=null,Ae.enabled=!0});function bu(){const{clientWidth:n,clientHeight:e}=l0;ke.setSize(n,e,!1),Ne.aspect=n/e,Ne.updateProjectionMatrix()}new ResizeObserver(bu).observe(l0);bu();function Tu(n=performance.now()){requestAnimationFrame(Tu);const e=Math.min(.05,(n-ah)/1e3);if(ah=n,document.querySelector("#autoRotate").checked&&Ae.enabled){const t=document.querySelector("#rotationMode").value,i=document.querySelector("#reverse").checked?-1:1,s=Number(document.querySelector("#speed").value)/12*.55;let r=i;t==="swing"&&(es+=s*e*Tr,Math.abs(es)>.75&&(es=Math.sign(es)*.75,Tr*=-1),r*=Tr);const o=Ne.position.clone().sub(Ae.target).applyAxisAngle(yu[t],s*e*r);Ne.position.copy(Ae.target).add(o),Ne.lookAt(Ae.target)}Ae.update(),ke.render(Rt,Ne),Rl()}Tu();setTimeout(()=>document.querySelector("#productSelect").dispatchEvent(new Event("change")),100);
