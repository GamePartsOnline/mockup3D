(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const $u="modulepreload",Zu=function(n){return"/"+n},Ql={},ec=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let c=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};var o=c;document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=c(t.map(h=>{if(h=Zu(h),h in Ql)return;Ql[h]=!0;const u=h.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${f}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":$u,u||(p.as="script"),p.crossOrigin="",p.href=h,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((g,_)=>{p.addEventListener("load",g),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})};const rl="180",L0={ROTATE:0,DOLLY:1,PAN:2},A0={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ku=0,tc=1,Ju=2,Ch=1,Rh=2,oi=3,di=0,dn=1,Gn=2,wi=0,Ki=1,nc=2,ic=3,sc=4,Qu=5,Yi=100,ed=101,td=102,nd=103,id=104,sd=200,rd=201,od=202,ad=203,Qo=204,ea=205,ld=206,cd=207,hd=208,ud=209,dd=210,fd=211,pd=212,md=213,gd=214,ta=0,na=1,ia=2,U0=3,sa=4,ra=5,oa=6,aa=7,ol=0,_d=1,vd=2,Ti=0,Ph=1,xd=2,yd=3,Sd=4,Md=5,Ed=6,bd=7,Lh=300,N0=301,F0=302,la=303,ca=304,eo=306,ha=1e3,$i=1001,ua=1002,Fn=1003,wd=1004,js=1005,Wn=1006,co=1007,Zi=1008,Zn=1009,Dh=1010,Ih=1011,Ss=1012,al=1013,Qi=1014,ci=1015,Bs=1016,ll=1017,cl=1018,Ms=1020,Uh=35902,Nh=35899,Fh=1021,Oh=1022,Nn=1023,Es=1026,bs=1027,Bh=1028,hl=1029,zh=1030,ul=1031,dl=1033,Ar=33776,Cr=33777,Rr=33778,Pr=33779,da=35840,fa=35841,pa=35842,ma=35843,ga=36196,_a=37492,va=37496,xa=37808,ya=37809,Sa=37810,Ma=37811,Ea=37812,ba=37813,wa=37814,Ta=37815,Aa=37816,Ca=37817,Ra=37818,Pa=37819,La=37820,Da=37821,Ia=36492,Ua=36494,Na=36495,Fa=36283,Oa=36284,Ba=36285,za=36286,Td=3200,Ad=3201,fl=0,Cd=1,bi="",Wt="srgb",O0="srgb-linear",zr="linear",vt="srgb",o0=7680,rc=519,Rd=512,Pd=513,Ld=514,kh=515,Dd=516,Id=517,Ud=518,Nd=519,ka=35044,oc="300 es",Xn=2e3,kr=2001;class s0{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ac=1234567;const hs=Math.PI/180,ws=180/Math.PI;function Yn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function pl(n,e){return(n%e+e)%e}function Fd(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Od(n,e,t){return n!==e?(t-n)/(e-n):0}function us(n,e,t){return(1-t)*n+t*e}function Bd(n,e,t,i){return us(n,e,1-Math.exp(-t*i))}function zd(n,e=1){return e-Math.abs(pl(n,e*2)-e)}function kd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Hd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Vd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Gd(n,e){return n+Math.random()*(e-n)}function Wd(n){return n*(.5-Math.random())}function Xd(n){n!==void 0&&(ac=n);let e=ac+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qd(n){return n*hs}function Yd(n){return n*ws}function jd(n){return(n&n-1)===0&&n!==0}function $d(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Zd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Kd(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const to={DEG2RAD:hs,RAD2DEG:ws,generateUUID:Yn,clamp:et,euclideanModulo:pl,mapLinear:Fd,inverseLerp:Od,lerp:us,damp:Bd,pingpong:zd,smoothstep:kd,smootherstep:Hd,randInt:Vd,randFloat:Gd,randFloatSpread:Wd,seededRandom:Xd,degToRad:qd,radToDeg:Yd,isPowerOfTwo:jd,ceilPowerOfTwo:$d,floorPowerOfTwo:Zd,setQuaternionFromProperEuler:Kd,normalize:gt,denormalize:Un};class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class e0{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==p||h!==g){let m=1-a;const d=l*f+c*p+h*g+u*_,M=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const C=Math.sqrt(y),S=Math.atan2(C,d*M);m=Math.sin(m*S)/C,a=Math.sin(a*S)/C}const v=a*M;if(l=l*m+f*v,c=c*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-a*p,e[t+2]=c*g+h*p+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ho.copy(this).projectOnVector(e),this.sub(ho)}reflect(e){return this.sub(ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ho=new R,lc=new e0;class Je{constructor(e,t,i,s,r,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],M=s[1],y=s[4],v=s[7],C=s[2],S=s[5],A=s[8];return r[0]=o*_+a*M+l*C,r[3]=o*m+a*y+l*S,r[6]=o*d+a*v+l*A,r[1]=c*_+h*M+u*C,r[4]=c*m+h*y+u*S,r[7]=c*d+h*v+u*A,r[2]=f*_+p*M+g*C,r[5]=f*m+p*y+g*S,r[8]=f*d+p*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=t*u+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(uo.makeScale(e,t)),this}rotate(e){return this.premultiply(uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uo=new Je;function Hh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ts(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jd(){const n=Ts("canvas");return n.style.display="block",n}const cc={};function As(n){n in cc||(cc[n]=!0,console.warn(n))}function Qd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const hc=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uc=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ef(){const n={enabled:!0,workingColorSpace:O0,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=D0(s.r),s.g=D0(s.g),s.b=D0(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return As("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return As("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[O0]:{primaries:e,whitePoint:i,transfer:zr,toXYZ:hc,fromXYZ:uc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:hc,fromXYZ:uc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),n}const ft=ef();function hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function D0(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let a0;class tf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{a0===void 0&&(a0=Ts("canvas")),a0.width=e.width,a0.height=e.height;const s=a0.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=a0}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ts("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hi(t[i]/255)*255):t[i]=hi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nf=0;class ml{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fo(s[o].image)):r.push(fo(s[o]))}else r=fo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function fo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sf=0;const po=new R;class sn extends s0{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,i=$i,s=$i,r=Wn,o=Zi,a=Nn,l=Zn,c=sn.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Yn(),this.name="",this.source=new ml(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(po).x}get height(){return this.source.getSize(po).y}get depth(){return this.source.getSize(po).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ha:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ha:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Lh;sn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,i=0,s=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(p+1)/2,C=(d+1)/2,S=(h+f)/4,A=(u+_)/4,L=(g+m)/4;return y>v&&y>C?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=S/i,r=A/i):v>C?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=S/s,r=L/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=A/r,s=L/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rf extends s0{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new sn(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ml(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class t0 extends rf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Vh extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class of extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class G0{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$s.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$s.copy(i.boundingBox)),$s.applyMatrix4(e.matrixWorld),this.union($s)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(j0),Zs.subVectors(this.max,j0),l0.subVectors(e.a,j0),c0.subVectors(e.b,j0),h0.subVectors(e.c,j0),mi.subVectors(c0,l0),gi.subVectors(h0,c0),Ui.subVectors(l0,h0);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Ui.z,Ui.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Ui.z,0,-Ui.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Ui.y,Ui.x,0];return!mo(t,l0,c0,h0,Zs)||(t=[1,0,0,0,1,0,0,0,1],!mo(t,l0,c0,h0,Zs))?!1:(Ks.crossVectors(mi,gi),t=[Ks.x,Ks.y,Ks.z],mo(t,l0,c0,h0,Zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ei=[new R,new R,new R,new R,new R,new R,new R,new R],Ln=new R,$s=new G0,l0=new R,c0=new R,h0=new R,mi=new R,gi=new R,Ui=new R,j0=new R,Zs=new R,Ks=new R,Ni=new R;function mo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ni.fromArray(n,r);const a=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=e.dot(Ni),c=t.dot(Ni),h=i.dot(Ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const af=new G0,$0=new R,go=new R;class zs{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):af.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$0.subVectors(e,this.center);const t=$0.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector($0,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(go.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($0.copy(e.center).add(go)),this.expandByPoint($0.copy(e.center).sub(go))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ti=new R,_o=new R,Js=new R,_i=new R,vo=new R,Qs=new R,xo=new R;class ks{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){_o.copy(e).add(t).multiplyScalar(.5),Js.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(_o);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Js),a=_i.dot(this.direction),l=-_i.dot(Js),c=_i.lengthSq(),h=Math.abs(1-o*o);let u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_o).addScaledVector(Js,f),p}intersectSphere(e,t){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),s=ti.dot(ti)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,i,s,r){vo.subVectors(t,e),Qs.subVectors(i,e),xo.crossVectors(vo,Qs);let o=this.direction.dot(xo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,e);const l=a*this.direction.dot(Qs.crossVectors(_i,Qs));if(l<0)return null;const c=a*this.direction.dot(vo.cross(_i));if(c<0||l+c>o)return null;const h=-a*_i.dot(xo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,i,s,r,o,a,l,c,h,u,f,p,g,_,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,p,g,_,m)}set(e,t,i,s,r,o,a,l,c,h,u,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/u0.setFromMatrixColumn(e,0).length(),r=1/u0.setFromMatrixColumn(e,1).length(),o=1/u0.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,g=c*h,_=c*u;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,g=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lf,e,cf)}lookAt(e,t,i){const s=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),vi.crossVectors(i,_n),vi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),vi.crossVectors(i,_n)),vi.normalize(),er.crossVectors(_n,vi),s[0]=vi.x,s[4]=er.x,s[8]=_n.x,s[1]=vi.y,s[5]=er.y,s[9]=_n.y,s[2]=vi.z,s[6]=er.z,s[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],M=i[3],y=i[7],v=i[11],C=i[15],S=s[0],A=s[4],L=s[8],w=s[12],E=s[1],D=s[5],B=s[9],z=s[13],W=s[2],V=s[6],X=s[10],Z=s[14],G=s[3],ue=s[7],ve=s[11],Te=s[15];return r[0]=o*S+a*E+l*W+c*G,r[4]=o*A+a*D+l*V+c*ue,r[8]=o*L+a*B+l*X+c*ve,r[12]=o*w+a*z+l*Z+c*Te,r[1]=h*S+u*E+f*W+p*G,r[5]=h*A+u*D+f*V+p*ue,r[9]=h*L+u*B+f*X+p*ve,r[13]=h*w+u*z+f*Z+p*Te,r[2]=g*S+_*E+m*W+d*G,r[6]=g*A+_*D+m*V+d*ue,r[10]=g*L+_*B+m*X+d*ve,r[14]=g*w+_*z+m*Z+d*Te,r[3]=M*S+y*E+v*W+C*G,r[7]=M*A+y*D+v*V+C*ue,r[11]=M*L+y*B+v*X+C*ve,r[15]=M*w+y*z+v*Z+C*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*p-i*l*p)+_*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+d*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],M=u*m*c-_*f*c+_*l*p-a*m*p-u*l*d+a*f*d,y=g*f*c-h*m*c-g*l*p+o*m*p+h*l*d-o*f*d,v=h*_*c-g*u*c+g*a*p-o*_*p-h*a*d+o*u*d,C=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,S=t*M+i*y+s*v+r*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/S;return e[0]=M*A,e[1]=(_*f*r-u*m*r-_*s*p+i*m*p+u*s*d-i*f*d)*A,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*d+i*l*d)*A,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*p-i*l*p)*A,e[4]=y*A,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*d+t*f*d)*A,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*A,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*p+t*l*p)*A,e[8]=v*A,e[9]=(g*u*r-h*_*r-g*i*p+t*_*p+h*i*d-t*u*d)*A,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*d+t*a*d)*A,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*p-t*a*p)*A,e[12]=C*A,e[13]=(h*_*s-g*u*s+g*i*f-t*_*f-h*i*m+t*u*m)*A,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*A,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,_=o*h,m=o*u,d=a*u,M=l*c,y=l*h,v=l*u,C=i.x,S=i.y,A=i.z;return s[0]=(1-(_+d))*C,s[1]=(p+v)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(p-v)*S,s[5]=(1-(f+d))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(g+y)*A,s[9]=(m-M)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=u0.set(s[0],s[1],s[2]).length();const o=u0.set(s[4],s[5],s[6]).length(),a=u0.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Dn.copy(this);const c=1/r,h=1/o,u=1/a;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,t.setFromRotationMatrix(Dn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Xn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Xn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===kr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Xn,l=!1){const c=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),p=-(i+s)/(i-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Xn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===kr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const u0=new R,Dn=new Mt,lf=new R(0,0,0),cf=new R(1,1,1),vi=new R,er=new R,_n=new R,dc=new Mt,fc=new e0;class fn{constructor(e=0,t=0,i=0,s=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return dc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fc.setFromEuler(this),this.setFromQuaternion(fc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class gl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hf=0;const pc=new R,d0=new e0,ni=new Mt,tr=new R,Z0=new R,uf=new R,df=new e0,mc=new R(1,0,0),gc=new R(0,1,0),_c=new R(0,0,1),vc={type:"added"},ff={type:"removed"},f0={type:"childadded",child:null},yo={type:"childremoved",child:null};class zt extends s0{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new R,t=new fn,i=new e0,s=new R(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Je}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return d0.setFromAxisAngle(e,t),this.quaternion.multiply(d0),this}rotateOnWorldAxis(e,t){return d0.setFromAxisAngle(e,t),this.quaternion.premultiply(d0),this}rotateX(e){return this.rotateOnAxis(mc,e)}rotateY(e){return this.rotateOnAxis(gc,e)}rotateZ(e){return this.rotateOnAxis(_c,e)}translateOnAxis(e,t){return pc.copy(e).applyQuaternion(this.quaternion),this.position.add(pc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mc,e)}translateY(e){return this.translateOnAxis(gc,e)}translateZ(e){return this.translateOnAxis(_c,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?tr.copy(e):tr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Z0.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Z0,tr,this.up):ni.lookAt(tr,Z0,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),d0.setFromRotationMatrix(ni),this.quaternion.premultiply(d0.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vc),f0.child=e,this.dispatchEvent(f0),f0.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ff),yo.child=e,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vc),f0.child=e,this.dispatchEvent(f0),f0.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Z0,e,uf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Z0,df,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}zt.DEFAULT_UP=new R(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new R,ii=new R,So=new R,si=new R,p0=new R,m0=new R,xc=new R,Mo=new R,Eo=new R,bo=new R,wo=new Nt,To=new Nt,Ao=new Nt;class Cn{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),In.subVectors(e,t),s.cross(In);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){In.subVectors(s,t),ii.subVectors(i,t),So.subVectors(e,t);const o=In.dot(In),a=In.dot(ii),l=In.dot(So),c=ii.dot(ii),h=ii.dot(So),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return wo.setScalar(0),To.setScalar(0),Ao.setScalar(0),wo.fromBufferAttribute(e,t),To.fromBufferAttribute(e,i),Ao.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(wo,r.x),o.addScaledVector(To,r.y),o.addScaledVector(Ao,r.z),o}static isFrontFacing(e,t,i,s){return In.subVectors(i,t),ii.subVectors(e,t),In.cross(ii).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),In.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Cn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;p0.subVectors(s,i),m0.subVectors(r,i),Mo.subVectors(e,i);const l=p0.dot(Mo),c=m0.dot(Mo);if(l<=0&&c<=0)return t.copy(i);Eo.subVectors(e,s);const h=p0.dot(Eo),u=m0.dot(Eo);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(p0,o);bo.subVectors(e,r);const p=p0.dot(bo),g=m0.dot(bo);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(m0,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return xc.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(xc,a);const d=1/(m+_+f);return o=_*d,a=f*d,t.copy(i).addScaledVector(p0,o).addScaledVector(m0,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},nr={h:0,s:0,l:0};function Co(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ft.workingColorSpace){if(e=pl(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Co(o,r,e+1/3),this.g=Co(o,r,e),this.b=Co(o,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=Wt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const i=Gh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=D0(e.r),this.g=D0(e.g),this.b=D0(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return ft.workingToColorSpace(tn.copy(this),e),Math.round(et(tn.r*255,0,255))*65536+Math.round(et(tn.g*255,0,255))*256+Math.round(et(tn.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(tn.copy(this),t);const i=tn.r,s=tn.g,r=tn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Wt){ft.workingToColorSpace(tn.copy(this),e);const t=tn.r,i=tn.g,s=tn.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(nr);const i=us(xi.h,nr.h,t),s=us(xi.s,nr.s,t),r=us(xi.l,nr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new je;je.NAMES=Gh;let pf=0;class Pn extends s0{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=Ki,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=ea,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=U0,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=o0,this.stencilZFail=o0,this.stencilZPass=o0,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qo&&(i.blendSrc=this.blendSrc),this.blendDst!==ea&&(i.blendDst=this.blendDst),this.blendEquation!==Yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==U0&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==o0&&(i.stencilFail=this.stencilFail),this.stencilZFail!==o0&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==o0&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _l extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new R,ir=new se;let mf=0;class On{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ka,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ir.fromBufferAttribute(this,t),ir.applyMatrix3(e),this.setXY(t,ir.x,ir.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ka&&(e.usage=this.usage),e}}class Wh extends On{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Xh extends On{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class rt extends On{constructor(e,t,i){super(new Float32Array(e),t,i)}}let gf=0;const bn=new Mt,Ro=new zt,g0=new R,vn=new G0,K0=new G0,jt=new R;class kt extends s0{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hh(e)?Xh:Wh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,i){return bn.makeTranslation(e,t,i),this.applyMatrix4(bn),this}scale(e,t,i){return bn.makeScale(e,t,i),this.applyMatrix4(bn),this}lookAt(e){return Ro.lookAt(e),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(g0).negate(),this.translate(g0.x,g0.y,g0.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new G0);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];K0.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(vn.min,K0.min),vn.expandByPoint(jt),jt.addVectors(vn.max,K0.max),vn.expandByPoint(jt)):(vn.expandByPoint(K0.min),vn.expandByPoint(K0.max))}vn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)jt.fromBufferAttribute(a,c),l&&(g0.fromBufferAttribute(e,c),jt.add(g0)),s=Math.max(s,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new R,l[L]=new R;const c=new R,h=new R,u=new R,f=new se,p=new se,g=new se,_=new R,m=new R;function d(L,w,E){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,E),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,E),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(D),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),a[L].add(_),a[w].add(_),a[E].add(_),l[L].add(m),l[w].add(m),l[E].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let L=0,w=M.length;L<w;++L){const E=M[L],D=E.start,B=E.count;for(let z=D,W=D+B;z<W;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new R,v=new R,C=new R,S=new R;function A(L){C.fromBufferAttribute(s,L),S.copy(C);const w=a[L];y.copy(w),y.sub(C.multiplyScalar(C.dot(w))).normalize(),v.crossVectors(S,w);const D=v.dot(l[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,D)}for(let L=0,w=M.length;L<w;++L){const E=M[L],D=E.start,B=E.count;for(let z=D,W=D+B;z<W;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new On(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yc=new Mt,Fi=new ks,sr=new zs,Sc=new R,rr=new R,or=new R,ar=new R,Po=new R,lr=new R,Mc=new R,cr=new R;class He extends zt{constructor(e=new kt,t=new _l){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Po.fromBufferAttribute(u,e),o?lr.addScaledVector(Po,h):lr.addScaledVector(Po.sub(t),h))}t.add(lr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere),sr.applyMatrix4(r),Fi.copy(e.ray).recast(e.near),!(sr.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(sr,Sc)===null||Fi.origin.distanceToSquared(Sc)>(e.far-e.near)**2))&&(yc.copy(r).invert(),Fi.copy(e.ray).applyMatrix4(yc),!(i.boundingBox!==null&&Fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,C=y;v<C;v+=3){const S=a.getX(v),A=a.getX(v+1),L=a.getX(v+2);s=hr(this,d,e,i,c,h,u,S,A,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=hr(this,o,e,i,c,h,u,M,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,C=y;v<C;v+=3){const S=v,A=v+1,L=v+2;s=hr(this,d,e,i,c,h,u,S,A,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=m,y=m+1,v=m+2;s=hr(this,o,e,i,c,h,u,M,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function _f(n,e,t,i,s,r,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===di,a),l===null)return null;cr.copy(a),cr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(cr);return c<t.near||c>t.far?null:{distance:c,point:cr.clone(),object:n}}function hr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,rr),n.getVertexPosition(l,or),n.getVertexPosition(c,ar);const h=_f(n,e,t,i,rr,or,ar,Mc);if(h){const u=new R;Cn.getBarycoord(Mc,rr,or,ar,u),s&&(h.uv=Cn.getInterpolatedAttribute(s,a,l,c,u,new se)),r&&(h.uv1=Cn.getInterpolatedAttribute(r,a,l,c,u,new se)),o&&(h.normal=Cn.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new R,materialIndex:0};Cn.getNormal(rr,or,ar,f.normal),h.face=f,h.barycoord=u}return h}class qn extends kt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2));function g(_,m,d,M,y,v,C,S,A,L,w){const E=v/A,D=C/L,B=v/2,z=C/2,W=S/2,V=A+1,X=L+1;let Z=0,G=0;const ue=new R;for(let ve=0;ve<X;ve++){const Te=ve*D-z;for(let $e=0;$e<V;$e++){const st=$e*E-B;ue[_]=st*M,ue[m]=Te*y,ue[d]=W,c.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[d]=S>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push($e/A),u.push(1-ve/L),Z+=1}}for(let ve=0;ve<L;ve++)for(let Te=0;Te<A;Te++){const $e=f+Te+V*ve,st=f+Te+V*(ve+1),ut=f+(Te+1)+V*(ve+1),lt=f+(Te+1)+V*ve;l.push($e,st,lt),l.push(st,ut,lt),G+=6}a.addGroup(p,G,w),p+=G,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function B0(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=B0(n[t]);for(const s in i)e[s]=i[s]}return e}function vf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function qh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const xf={clone:B0,merge:ln};var yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yf,this.fragmentShader=Sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=B0(e.uniforms),this.uniformsGroups=vf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Yh extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new R,Ec=new se,bc=new se;class An extends Yh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,Ec,bc),t.subVectors(bc,Ec)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _0=-90,v0=1;class Mf extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new An(_0,v0,e,t);s.layers=this.layers,this.add(s);const r=new An(_0,v0,e,t);r.layers=this.layers,this.add(r);const o=new An(_0,v0,e,t);o.layers=this.layers,this.add(o);const a=new An(_0,v0,e,t);a.layers=this.layers,this.add(a);const l=new An(_0,v0,e,t);l.layers=this.layers,this.add(l);const c=new An(_0,v0,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class jh extends sn{constructor(e=[],t=N0,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ef extends t0{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new jh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qn(5,5,5),r=new Ai({name:"CubemapFromEquirect",uniforms:B0(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:wi});r.uniforms.tEquirect.value=t;const o=new He(s,r),a=t.minFilter;return t.minFilter===Zi&&(t.minFilter=Wn),new Mf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Ft extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bf={type:"move"};class Lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ft;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class wf extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Tf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ka,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new R;class Hr{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new On(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class $h extends Pn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let x0;const J0=new R,y0=new R,S0=new R,M0=new se,Q0=new se,Zh=new Mt,ur=new R,es=new R,dr=new R,wc=new se,Do=new se,Tc=new se;class Af extends zt{constructor(e=new $h){if(super(),this.isSprite=!0,this.type="Sprite",x0===void 0){x0=new kt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Tf(t,5);x0.setIndex([0,1,2,0,2,3]),x0.setAttribute("position",new Hr(i,3,0,!1)),x0.setAttribute("uv",new Hr(i,2,3,!1))}this.geometry=x0,this.material=e,this.center=new se(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),y0.setFromMatrixScale(this.matrixWorld),Zh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),S0.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&y0.multiplyScalar(-S0.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;fr(ur.set(-.5,-.5,0),S0,o,y0,s,r),fr(es.set(.5,-.5,0),S0,o,y0,s,r),fr(dr.set(.5,.5,0),S0,o,y0,s,r),wc.set(0,0),Do.set(1,0),Tc.set(1,1);let a=e.ray.intersectTriangle(ur,es,dr,!1,J0);if(a===null&&(fr(es.set(-.5,.5,0),S0,o,y0,s,r),Do.set(0,1),a=e.ray.intersectTriangle(ur,dr,es,!1,J0),a===null))return;const l=e.ray.origin.distanceTo(J0);l<e.near||l>e.far||t.push({distance:l,point:J0.clone(),uv:Cn.getInterpolation(J0,ur,es,dr,wc,Do,Tc,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function fr(n,e,t,i,s,r){M0.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Q0.x=r*M0.x-s*M0.y,Q0.y=s*M0.x+r*M0.y):Q0.copy(M0),n.copy(e),n.x+=Q0.x,n.y+=Q0.y,n.applyMatrix4(Zh)}const Io=new R,Cf=new R,Rf=new Je;class Ei{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Io.subVectors(i,t).cross(Cf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Io),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Rf.getNormalMatrix(e),s=this.coplanarPoint(Io).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new zs,Pf=new se(.5,.5),pr=new R;class vl{constructor(e=new Ei,t=new Ei,i=new Ei,s=new Ei,r=new Ei,o=new Ei){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],g=r[8],_=r[9],m=r[10],d=r[11],M=r[12],y=r[13],v=r[14],C=r[15];if(s[0].setComponents(c-o,p-h,d-g,C-M).normalize(),s[1].setComponents(c+o,p+h,d+g,C+M).normalize(),s[2].setComponents(c+a,p+u,d+_,C+y).normalize(),s[3].setComponents(c-a,p-u,d-_,C-y).normalize(),i)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,p-f,d-m,C-v).normalize();else if(s[4].setComponents(c-l,p-f,d-m,C-v).normalize(),t===Xn)s[5].setComponents(c+l,p+f,d+m,C+v).normalize();else if(t===kr)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){Oi.center.set(0,0,0);const t=Pf.distanceTo(e.center);return Oi.radius=.7071067811865476+t,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(pr.x=s.normal.x>0?e.max.x:e.min.x,pr.y=s.normal.y>0?e.max.y:e.min.y,pr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ds extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vr=new R,Gr=new R,Ac=new Mt,ts=new ks,mr=new zs,Uo=new R,Cc=new R;class Lf extends zt{constructor(e=new kt,t=new ds){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Vr.fromBufferAttribute(t,s-1),Gr.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Vr.distanceTo(Gr);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere),mr.applyMatrix4(s),mr.radius+=r,e.ray.intersectsSphere(mr)===!1)return;Ac.copy(s).invert(),ts.copy(e.ray).applyMatrix4(Ac);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=h.getX(_),M=h.getX(_+1),y=gr(this,e,ts,l,d,M,_);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),d=gr(this,e,ts,l,_,m,g-1);d&&t.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=gr(this,e,ts,l,_,_+1,_);d&&t.push(d)}if(this.isLineLoop){const _=gr(this,e,ts,l,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function gr(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Vr.fromBufferAttribute(a,s),Gr.fromBufferAttribute(a,r),t.distanceSqToSegment(Vr,Gr,Uo,Cc)>i)return;Uo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Uo);if(!(c<e.near||c>e.far))return{distance:c,point:Cc.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Rc=new R,Pc=new R;class Ha extends Lf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Rc.fromBufferAttribute(t,s),Pc.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Rc.distanceTo(Pc);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ns extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lc=new Mt,Va=new ks,_r=new zs,vr=new R;class No extends zt{constructor(e=new kt,t=new ns){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere),_r.applyMatrix4(s),_r.radius+=r,e.ray.intersectsSphere(_r)===!1)return;Lc.copy(s).invert(),Va.copy(e.ray).applyMatrix4(Lc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);vr.fromBufferAttribute(u,m),Dc(vr,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++)vr.fromBufferAttribute(u,g),Dc(vr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Dc(n,e,t,i,s,r,o){const a=Va.distanceSqToPoint(n);if(a<t){const l=new R;Va.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Hs extends sn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Kh extends sn{constructor(e,t,i=Qi,s,r,o,a=Fn,l=Fn,c,h=Es,u=1){if(h!==Es&&h!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ml(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Jh extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Cs extends kt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new R,h=new se;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const p=i+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(a,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Bn extends kt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const _=[],m=i/2;let d=0;M(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(p,2));function M(){const v=new R,C=new R;let S=0;const A=(t-e)/i;for(let L=0;L<=r;L++){const w=[],E=L/r,D=E*(t-e)+e;for(let B=0;B<=s;B++){const z=B/s,W=z*l+a,V=Math.sin(W),X=Math.cos(W);C.x=D*V,C.y=-E*i+m,C.z=D*X,u.push(C.x,C.y,C.z),v.set(V,A,X).normalize(),f.push(v.x,v.y,v.z),p.push(z,1-E),w.push(g++)}_.push(w)}for(let L=0;L<s;L++)for(let w=0;w<r;w++){const E=_[w][L],D=_[w+1][L],B=_[w+1][L+1],z=_[w][L+1];(e>0||w!==0)&&(h.push(E,D,z),S+=3),(t>0||w!==r-1)&&(h.push(D,B,z),S+=3)}c.addGroup(d,S,0),d+=S}function y(v){const C=g,S=new se,A=new R;let L=0;const w=v===!0?e:t,E=v===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*E,0),f.push(0,E,0),p.push(.5,.5),g++;const D=g;for(let B=0;B<=s;B++){const W=B/s*l+a,V=Math.cos(W),X=Math.sin(W);A.x=w*X,A.y=m*E,A.z=w*V,u.push(A.x,A.y,A.z),f.push(0,E,0),S.x=V*.5+.5,S.y=X*.5*E+.5,p.push(S.x,S.y),g++}for(let B=0;B<s;B++){const z=C+B,W=D+B;v===!0?h.push(W,W+1,z):h.push(W+1,W,z),L+=3}c.addGroup(d,L,v===!0?1:2),d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],f=i[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new se:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new R,s=[],r=[],o=[],a=new R,l=new Mt;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(et(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(et(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xl extends Jn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new se){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Df extends xl{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function yl(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const xr=new R,Fo=new yl,Oo=new yl,Bo=new yl;class Qh extends Jn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new R){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(xr.subVectors(s[0],s[1]).add(s[0]),c=xr);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(xr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=xr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Fo.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),Oo.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),Bo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Fo.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Oo.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Bo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Fo.calc(l),Oo.calc(l),Bo.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ic(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function If(n,e){const t=1-n;return t*t*e}function Uf(n,e){return 2*(1-n)*n*e}function Nf(n,e){return n*n*e}function fs(n,e,t,i){return If(n,e)+Uf(n,t)+Nf(n,i)}function Ff(n,e){const t=1-n;return t*t*t*e}function Of(n,e){const t=1-n;return 3*t*t*n*e}function Bf(n,e){return 3*(1-n)*n*n*e}function zf(n,e){return n*n*n*e}function ps(n,e,t,i,s){return Ff(n,e)+Of(n,t)+Bf(n,i)+zf(n,s)}class eu extends Jn{constructor(e=new se,t=new se,i=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new se){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ps(e,s.x,r.x,o.x,a.x),ps(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class kf extends Jn{constructor(e=new R,t=new R,i=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new R){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ps(e,s.x,r.x,o.x,a.x),ps(e,s.y,r.y,o.y,a.y),ps(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class tu extends Jn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hf extends Jn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nu extends Jn{constructor(e=new se,t=new se,i=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new se){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(fs(e,s.x,r.x,o.x),fs(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iu extends Jn{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(fs(e,s.x,r.x,o.x),fs(e,s.y,r.y,o.y),fs(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class su extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Ic(a,l.x,c.x,h.x,u.x),Ic(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new se().fromArray(s))}return this}}var Wr=Object.freeze({__proto__:null,ArcCurve:Df,CatmullRomCurve3:Qh,CubicBezierCurve:eu,CubicBezierCurve3:kf,EllipseCurve:xl,LineCurve:tu,LineCurve3:Hf,QuadraticBezierCurve:nu,QuadraticBezierCurve3:iu,SplineCurve:su});class Vf extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wr[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Wr[s.type]().fromJSON(s))}return this}}class Rs extends Vf{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new tu(this.currentPoint.clone(),new se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new nu(this.currentPoint.clone(),new se(e,t),new se(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new eu(this.currentPoint.clone(),new se(e,t),new se(i,s),new se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new su(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new xl(e,t,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ri extends Rs{constructor(e){super(e),this.uuid=Yn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Rs().fromJSON(s))}return this}}function Gf(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=ru(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=jf(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){const p=n[f],g=n[f+1];p<a&&(a=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ps(r,o,t,a,l,c,0),o}function ru(n,e,t,i,s){let r;if(s===rp(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Uc(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Uc(o/i|0,n[o],n[o+1],r);return r&&z0(r,r.next)&&(Ds(r),r=r.next),r}function n0(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(z0(t,t.next)||Dt(t.prev,t,t.next)===0)){if(Ds(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ps(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Qf(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?Xf(n,i,s,r):Wf(n)){e.push(l.i,n.i,c.i),Ds(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=qf(n0(n),e),Ps(n,e,t,i,s,r,2)):o===2&&Yf(n,e,t,i,s,r):Ps(n0(n),e,t,i,s,r,1);break}}}function Wf(n){const e=n.prev,t=n,i=n.next;if(Dt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),p=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&is(s,a,r,l,o,c,g.x,g.y)&&Dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Xf(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Dt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,p=Math.min(a,l,c),g=Math.min(h,u,f),_=Math.max(a,l,c),m=Math.max(h,u,f),d=Ga(p,g,e,t,i),M=Ga(_,m,e,t,i);let y=n.prevZ,v=n.nextZ;for(;y&&y.z>=d&&v&&v.z<=M;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&is(a,h,l,u,c,f,y.x,y.y)&&Dt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&is(a,h,l,u,c,f,v.x,v.y)&&Dt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=d;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&is(a,h,l,u,c,f,y.x,y.y)&&Dt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=M;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&is(a,h,l,u,c,f,v.x,v.y)&&Dt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function qf(n,e){let t=n;do{const i=t.prev,s=t.next.next;!z0(i,s)&&au(i,t,t.next,s)&&Ls(i,s)&&Ls(s,i)&&(e.push(i.i,t.i,s.i),Ds(t),Ds(t.next),t=n=s),t=t.next}while(t!==n);return n0(t)}function Yf(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&np(o,a)){let l=lu(o,a);o=n0(o,o.next),l=n0(l,l.next),Ps(o,e,t,i,s,r,0),Ps(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function jf(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=ru(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(tp(c))}s.sort($f);for(let r=0;r<s.length;r++)t=Zf(s[r],t);return t}function $f(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Zf(n,e){const t=Kf(n,e);if(!t)return e;const i=lu(t,n);return n0(i,i.next),n0(t,t.next)}function Kf(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(z0(n,t))return t;do{if(z0(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&ou(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const u=Math.abs(s-t.y)/(i-t.x);Ls(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Jf(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Jf(n,e){return Dt(n.prev,n,e.prev)<0&&Dt(e.next,n,n.next)<0}function Qf(n,e,t,i){let s=n;do s.z===0&&(s.z=Ga(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ep(s)}function ep(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Ga(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function tp(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ou(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function is(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&ou(n,e,t,i,s,r,o,a)}function np(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!ip(n,e)&&(Ls(n,e)&&Ls(e,n)&&sp(n,e)&&(Dt(n.prev,n,e.prev)||Dt(n,e.prev,e))||z0(n,e)&&Dt(n.prev,n,n.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function z0(n,e){return n.x===e.x&&n.y===e.y}function au(n,e,t,i){const s=Sr(Dt(n,e,t)),r=Sr(Dt(n,e,i)),o=Sr(Dt(t,i,n)),a=Sr(Dt(t,i,e));return!!(s!==r&&o!==a||s===0&&yr(n,t,e)||r===0&&yr(n,i,e)||o===0&&yr(t,n,i)||a===0&&yr(t,e,i))}function yr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Sr(n){return n>0?1:n<0?-1:0}function ip(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&au(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ls(n,e){return Dt(n.prev,n,n.next)<0?Dt(n,e,n.next)>=0&&Dt(n,n.prev,e)>=0:Dt(n,e,n.prev)<0||Dt(n,n.next,e)<0}function sp(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function lu(n,e){const t=Wa(n.i,n.x,n.y),i=Wa(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Uc(n,e,t,i){const s=Wa(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ds(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Wa(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function rp(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class op{static triangulate(e,t,i=2){return Gf(e,t,i)}}class C0{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return C0.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Nc(e),Fc(i,e);let o=e.length;t.forEach(Nc);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Fc(i,t[l]);const a=op.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Nc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Fc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Sn extends kt{constructor(e=new Ri([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new rt(s,3)),this.setAttribute("uv",new rt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:ap;let y,v=!1,C,S,A,L;d&&(y=d.getSpacedPoints(h),v=!0,f=!1,C=d.computeFrenetFrames(h,!1),S=new R,A=new R,L=new R),f||(m=0,p=0,g=0,_=0);const w=a.extractPoints(c);let E=w.shape;const D=w.holes;if(!C0.isClockWise(E)){E=E.reverse();for(let Q=0,K=D.length;Q<K;Q++){const $=D[Q];C0.isClockWise($)&&(D[Q]=$.reverse())}}function z(Q){const $=10000000000000001e-36;let j=Q[0];for(let ce=1;ce<=Q.length;ce++){const ne=ce%Q.length,re=Q[ne],Be=re.x-j.x,ze=re.y-j.y,T=Be*Be+ze*ze,x=Math.max(Math.abs(re.x),Math.abs(re.y),Math.abs(j.x),Math.abs(j.y)),O=$*x*x;if(T<=O){Q.splice(ne,1),ce--;continue}j=re}}z(E),D.forEach(z);const W=D.length,V=E;for(let Q=0;Q<W;Q++){const K=D[Q];E=E.concat(K)}function X(Q,K,$){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(K,$)}const Z=E.length;function G(Q,K,$){let j,ce,ne;const re=Q.x-K.x,Be=Q.y-K.y,ze=$.x-Q.x,T=$.y-Q.y,x=re*re+Be*Be,O=re*T-Be*ze;if(Math.abs(O)>Number.EPSILON){const q=Math.sqrt(x),ie=Math.sqrt(ze*ze+T*T),Y=K.x-Be/q,Ne=K.y+re/q,fe=$.x-T/ie,Le=$.y+ze/ie,De=((fe-Y)*T-(Le-Ne)*ze)/(re*T-Be*ze);j=Y+re*De-Q.x,ce=Ne+Be*De-Q.y;const oe=j*j+ce*ce;if(oe<=2)return new se(j,ce);ne=Math.sqrt(oe/2)}else{let q=!1;re>Number.EPSILON?ze>Number.EPSILON&&(q=!0):re<-Number.EPSILON?ze<-Number.EPSILON&&(q=!0):Math.sign(Be)===Math.sign(T)&&(q=!0),q?(j=-Be,ce=re,ne=Math.sqrt(x)):(j=re,ce=Be,ne=Math.sqrt(x/2))}return new se(j/ne,ce/ne)}const ue=[];for(let Q=0,K=V.length,$=K-1,j=Q+1;Q<K;Q++,$++,j++)$===K&&($=0),j===K&&(j=0),ue[Q]=G(V[Q],V[$],V[j]);const ve=[];let Te,$e=ue.concat();for(let Q=0,K=W;Q<K;Q++){const $=D[Q];Te=[];for(let j=0,ce=$.length,ne=ce-1,re=j+1;j<ce;j++,ne++,re++)ne===ce&&(ne=0),re===ce&&(re=0),Te[j]=G($[j],$[ne],$[re]);ve.push(Te),$e=$e.concat(Te)}let st;if(m===0)st=C0.triangulateShape(V,D);else{const Q=[],K=[];for(let $=0;$<m;$++){const j=$/m,ce=p*Math.cos(j*Math.PI/2),ne=g*Math.sin(j*Math.PI/2)+_;for(let re=0,Be=V.length;re<Be;re++){const ze=X(V[re],ue[re],ne);de(ze.x,ze.y,-ce),j===0&&Q.push(ze)}for(let re=0,Be=W;re<Be;re++){const ze=D[re];Te=ve[re];const T=[];for(let x=0,O=ze.length;x<O;x++){const q=X(ze[x],Te[x],ne);de(q.x,q.y,-ce),j===0&&T.push(q)}j===0&&K.push(T)}}st=C0.triangulateShape(Q,K)}const ut=st.length,lt=g+_;for(let Q=0;Q<Z;Q++){const K=f?X(E[Q],$e[Q],lt):E[Q];v?(A.copy(C.normals[0]).multiplyScalar(K.x),S.copy(C.binormals[0]).multiplyScalar(K.y),L.copy(y[0]).add(A).add(S),de(L.x,L.y,L.z)):de(K.x,K.y,0)}for(let Q=1;Q<=h;Q++)for(let K=0;K<Z;K++){const $=f?X(E[K],$e[K],lt):E[K];v?(A.copy(C.normals[Q]).multiplyScalar($.x),S.copy(C.binormals[Q]).multiplyScalar($.y),L.copy(y[Q]).add(A).add(S),de(L.x,L.y,L.z)):de($.x,$.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){const K=Q/m,$=p*Math.cos(K*Math.PI/2),j=g*Math.sin(K*Math.PI/2)+_;for(let ce=0,ne=V.length;ce<ne;ce++){const re=X(V[ce],ue[ce],j);de(re.x,re.y,u+$)}for(let ce=0,ne=D.length;ce<ne;ce++){const re=D[ce];Te=ve[ce];for(let Be=0,ze=re.length;Be<ze;Be++){const T=X(re[Be],Te[Be],j);v?de(T.x,T.y+y[h-1].y,y[h-1].x+$):de(T.x,T.y,u+$)}}}J(),te();function J(){const Q=s.length/3;if(f){let K=0,$=Z*K;for(let j=0;j<ut;j++){const ce=st[j];me(ce[2]+$,ce[1]+$,ce[0]+$)}K=h+m*2,$=Z*K;for(let j=0;j<ut;j++){const ce=st[j];me(ce[0]+$,ce[1]+$,ce[2]+$)}}else{for(let K=0;K<ut;K++){const $=st[K];me($[2],$[1],$[0])}for(let K=0;K<ut;K++){const $=st[K];me($[0]+Z*h,$[1]+Z*h,$[2]+Z*h)}}i.addGroup(Q,s.length/3-Q,0)}function te(){const Q=s.length/3;let K=0;Ee(V,K),K+=V.length;for(let $=0,j=D.length;$<j;$++){const ce=D[$];Ee(ce,K),K+=ce.length}i.addGroup(Q,s.length/3-Q,1)}function Ee(Q,K){let $=Q.length;for(;--$>=0;){const j=$;let ce=$-1;ce<0&&(ce=Q.length-1);for(let ne=0,re=h+m*2;ne<re;ne++){const Be=Z*ne,ze=Z*(ne+1),T=K+j+Be,x=K+ce+Be,O=K+ce+ze,q=K+j+ze;Ze(T,x,O,q)}}}function de(Q,K,$){l.push(Q),l.push(K),l.push($)}function me(Q,K,$){ct(Q),ct(K),ct($);const j=s.length/3,ce=M.generateTopUV(i,s,j-3,j-2,j-1);P(ce[0]),P(ce[1]),P(ce[2])}function Ze(Q,K,$,j){ct(Q),ct(K),ct(j),ct(K),ct($),ct(j);const ce=s.length/3,ne=M.generateSideWallUV(i,s,ce-6,ce-3,ce-2,ce-1);P(ne[0]),P(ne[1]),P(ne[3]),P(ne[1]),P(ne[2]),P(ne[3])}function ct(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function P(Q){r.push(Q.x),r.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return lp(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Wr[s.type]().fromJSON(s)),new Sn(i,e.options)}}const ap={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new se(r,o),new se(a,l),new se(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],p=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new se(o,1-l),new se(c,1-u),new se(f,1-g),new se(_,1-d)]:[new se(a,1-l),new se(h,1-u),new se(p,1-g),new se(m,1-d)]}};function lp(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Pi extends kt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const M=d*f-o;for(let y=0;y<c;y++){const v=y*u-r;g.push(v,-M,0),_.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const y=M+c*d,v=M+c*(d+1),C=M+1+c*(d+1),S=M+1+c*d;p.push(y,v,S),p.push(v,C,S)}this.setIndex(p),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sl extends kt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=e;const f=(t-e)/s,p=new R,g=new se;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const d=r+m/i*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){const m=_*(i+1);for(let d=0;d<i;d++){const M=d+m,y=M,v=M+i+1,C=M+i+2,S=M+1;a.push(y,v,S),a.push(v,C,S)}}this.setIndex(a),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ml extends kt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new R,f=new R,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const M=[],y=d/i;let v=0;d===0&&o===0?v=.5/t:d===i&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){const S=C/t;u.x=-e*Math.cos(s+S*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+S*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(S+v,1-y),M.push(c++)}h.push(M)}for(let d=0;d<i;d++)for(let M=0;M<t;M++){const y=h[d][M+1],v=h[d][M],C=h[d+1][M],S=h[d+1][M+1];(d!==0||o>0)&&p.push(y,v,S),(d!==i-1||l<Math.PI)&&p.push(v,C,S)}this.setIndex(p),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class El extends kt{constructor(e=new iu(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,l=new R,c=new se;let h=new R;const u=[],f=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(p,2));function _(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),M(),d()}function m(y){h=e.getPointAt(y/t,h);const v=o.normals[y],C=o.binormals[y];for(let S=0;S<=s;S++){const A=S/s*Math.PI*2,L=Math.sin(A),w=-Math.cos(A);l.x=w*v.x+L*C.x,l.y=w*v.y+L*C.y,l.z=w*v.z+L*C.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function d(){for(let y=1;y<=t;y++)for(let v=1;v<=s;v++){const C=(s+1)*(y-1)+(v-1),S=(s+1)*y+(v-1),A=(s+1)*y+v,L=(s+1)*(y-1)+v;g.push(C,S,L),g.push(S,A,L)}}function M(){for(let y=0;y<=t;y++)for(let v=0;v<=s;v++)c.x=y/t,c.y=v/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new El(new Wr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class cp extends Pn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new je(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class xt extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fl,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rn extends xt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class hp extends Pn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new je(16777215),this.specular=new je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fl,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class up extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dp extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ms={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class fp{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const pp=new fp;class Vs{constructor(e){this.manager=e!==void 0?e:pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Vs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ri={};class mp extends Error{constructor(e,t){super(e),this.response=t}}class gp extends Vs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ms.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ri[e]!==void 0){ri[e].push({onLoad:t,onProgress:i,onError:s});return}ri[e]=[],ri[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ri[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let _=0;const m=new ReadableStream({start(d){M();function M(){u.read().then(({done:y,value:v})=>{if(y)d.close();else{_+=v.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let S=0,A=h.length;S<A;S++){const L=h[S];L.onProgress&&L.onProgress(C)}d.enqueue(v),M()}},y=>{d.error(y)})}}});return new Response(m)}else throw new mp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{ms.add(`file:${e}`,c);const h=ri[e];delete ri[e];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=ri[e];if(h===void 0)throw this.manager.itemError(e),c;delete ri[e];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const E0=new WeakMap;class _p extends Vs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ms.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=E0.get(o);u===void 0&&(u=[],E0.set(o,u)),u.push({onLoad:t,onError:s})}return o}const a=Ts("img");function l(){h(),t&&t(this);const u=E0.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onLoad&&p.onLoad(this)}E0.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),ms.remove(`image:${e}`);const f=E0.get(this)||[];for(let p=0;p<f.length;p++){const g=f[p];g.onError&&g.onError(u)}E0.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ms.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class vp extends Vs{constructor(e){super(e)}load(e,t,i,s){const r=new sn,o=new _p(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class cu extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class xp extends cu{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const zo=new Mt,Oc=new R,Bc=new R;class yp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vl,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Oc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oc),Bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bc),t.updateMatrixWorld(),zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hu extends Yh{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Sp extends yp{constructor(){super(new hu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bl extends cu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new Sp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Mp extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zc=new Mt;class Ep{constructor(e,t,i=0,s=1/0){this.ray=new ks(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new gl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zc),this}intersectObject(e,t=!0,i=[]){return Xa(e,this,i,t),i.sort(kc),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Xa(e[s],this,i,t);return i.sort(kc),i}}function kc(n,e){return n.distance-e.distance}function Xa(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Xa(r[o],e,t,!0)}}class Hc{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bp extends Ha{constructor(e=10,t=10,i=4473924,s=8947848){i=new je(i),s=new je(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,p=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=f===r?i:s;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const h=new kt;h.setAttribute("position",new rt(l,3)),h.setAttribute("color",new rt(c,3));const u=new ds({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class wp extends s0{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Vc(n,e,t,i){const s=Tp(i);switch(t){case Fh:return n*e;case Bh:return n*e/s.components*s.byteLength;case hl:return n*e/s.components*s.byteLength;case zh:return n*e*2/s.components*s.byteLength;case ul:return n*e*2/s.components*s.byteLength;case Oh:return n*e*3/s.components*s.byteLength;case Nn:return n*e*4/s.components*s.byteLength;case dl:return n*e*4/s.components*s.byteLength;case Ar:case Cr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Rr:case Pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fa:case ma:return Math.max(n,16)*Math.max(e,8)/4;case da:case pa:return Math.max(n,8)*Math.max(e,8)/2;case ga:case _a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ya:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ba:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case wa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Aa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case La:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Da:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ia:case Ua:case Na:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fa:case Oa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ba:case za:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tp(n){switch(n){case Zn:case Dh:return{byteLength:1,components:1};case Ss:case Ih:case Bs:return{byteLength:2,components:1};case ll:case cl:return{byteLength:2,components:4};case Qi:case al:case ci:return{byteLength:4,components:1};case Uh:case Nh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rl);function uu(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ap(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rp=`#ifdef USE_ALPHAHASH
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
#endif`,Pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Up=`#ifdef USE_AOMAP
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
#endif`,Np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fp=`#ifdef USE_BATCHING
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
#endif`,Op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hp=`#ifdef USE_IRIDESCENCE
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
#endif`,Vp=`#ifdef USE_BUMPMAP
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kp=`#define PI 3.141592653589793
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
} // validated`,Jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qp=`vec3 transformedNormal = objectNormal;
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
#endif`,e1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s1="gl_FragColor = linearToOutputTexel( gl_FragColor );",r1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o1=`#ifdef USE_ENVMAP
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
#endif`,a1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l1=`#ifdef USE_ENVMAP
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
#endif`,c1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
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
#endif`,u1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,d1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m1=`#ifdef USE_GRADIENTMAP
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
}`,g1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x1=`uniform bool receiveShadow;
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
#endif`,y1=`#ifdef USE_ENVMAP
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
#endif`,S1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w1=`PhysicalMaterial material;
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
#endif`,T1=`struct PhysicalMaterial {
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
}`,A1=`
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
#endif`,C1=`#if defined( RE_IndirectDiffuse )
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
#endif`,R1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O1=`#if defined( USE_POINTS_UV )
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
#endif`,B1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G1=`#ifdef USE_MORPHTARGETS
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
#endif`,W1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,q1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Z1=`#ifdef USE_NORMALMAP
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
#endif`,K1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dm=`float getShadowMask() {
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
}`,fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pm=`#ifdef USE_SKINNING
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
#endif`,mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gm=`#ifdef USE_SKINNING
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
#endif`,_m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ym=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sm=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cm=`uniform sampler2D t2D;
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`#include <common>
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
}`,Um=`#if DEPTH_PACKING == 3200
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
}`,Nm=`#define DISTANCE
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
}`,Fm=`#define DISTANCE
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`uniform float scale;
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
}`,km=`uniform vec3 diffuse;
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
}`,Hm=`#include <common>
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Gm=`#define LAMBERT
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
}`,Wm=`#define LAMBERT
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
}`,Xm=`#define MATCAP
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
}`,qm=`#define MATCAP
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
}`,Ym=`#define NORMAL
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
}`,jm=`#define NORMAL
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
}`,$m=`#define PHONG
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
}`,Zm=`#define PHONG
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
}`,Km=`#define STANDARD
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
}`,Jm=`#define STANDARD
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
}`,Qm=`#define TOON
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
}`,e2=`#define TOON
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
}`,t2=`uniform float size;
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
}`,n2=`uniform vec3 diffuse;
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
}`,i2=`#include <common>
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
}`,s2=`uniform vec3 color;
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
}`,r2=`uniform float rotation;
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
}`,o2=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:Cp,alphahash_pars_fragment:Rp,alphamap_fragment:Pp,alphamap_pars_fragment:Lp,alphatest_fragment:Dp,alphatest_pars_fragment:Ip,aomap_fragment:Up,aomap_pars_fragment:Np,batching_pars_vertex:Fp,batching_vertex:Op,begin_vertex:Bp,beginnormal_vertex:zp,bsdfs:kp,iridescence_fragment:Hp,bumpmap_pars_fragment:Vp,clipping_planes_fragment:Gp,clipping_planes_pars_fragment:Wp,clipping_planes_pars_vertex:Xp,clipping_planes_vertex:qp,color_fragment:Yp,color_pars_fragment:jp,color_pars_vertex:$p,color_vertex:Zp,common:Kp,cube_uv_reflection_fragment:Jp,defaultnormal_vertex:Qp,displacementmap_pars_vertex:e1,displacementmap_vertex:t1,emissivemap_fragment:n1,emissivemap_pars_fragment:i1,colorspace_fragment:s1,colorspace_pars_fragment:r1,envmap_fragment:o1,envmap_common_pars_fragment:a1,envmap_pars_fragment:l1,envmap_pars_vertex:c1,envmap_physical_pars_fragment:y1,envmap_vertex:h1,fog_vertex:u1,fog_pars_vertex:d1,fog_fragment:f1,fog_pars_fragment:p1,gradientmap_pars_fragment:m1,lightmap_pars_fragment:g1,lights_lambert_fragment:_1,lights_lambert_pars_fragment:v1,lights_pars_begin:x1,lights_toon_fragment:S1,lights_toon_pars_fragment:M1,lights_phong_fragment:E1,lights_phong_pars_fragment:b1,lights_physical_fragment:w1,lights_physical_pars_fragment:T1,lights_fragment_begin:A1,lights_fragment_maps:C1,lights_fragment_end:R1,logdepthbuf_fragment:P1,logdepthbuf_pars_fragment:L1,logdepthbuf_pars_vertex:D1,logdepthbuf_vertex:I1,map_fragment:U1,map_pars_fragment:N1,map_particle_fragment:F1,map_particle_pars_fragment:O1,metalnessmap_fragment:B1,metalnessmap_pars_fragment:z1,morphinstance_vertex:k1,morphcolor_vertex:H1,morphnormal_vertex:V1,morphtarget_pars_vertex:G1,morphtarget_vertex:W1,normal_fragment_begin:X1,normal_fragment_maps:q1,normal_pars_fragment:Y1,normal_pars_vertex:j1,normal_vertex:$1,normalmap_pars_fragment:Z1,clearcoat_normal_fragment_begin:K1,clearcoat_normal_fragment_maps:J1,clearcoat_pars_fragment:Q1,iridescence_pars_fragment:em,opaque_fragment:tm,packing:nm,premultiplied_alpha_fragment:im,project_vertex:sm,dithering_fragment:rm,dithering_pars_fragment:om,roughnessmap_fragment:am,roughnessmap_pars_fragment:lm,shadowmap_pars_fragment:cm,shadowmap_pars_vertex:hm,shadowmap_vertex:um,shadowmask_pars_fragment:dm,skinbase_vertex:fm,skinning_pars_vertex:pm,skinning_vertex:mm,skinnormal_vertex:gm,specularmap_fragment:_m,specularmap_pars_fragment:vm,tonemapping_fragment:xm,tonemapping_pars_fragment:ym,transmission_fragment:Sm,transmission_pars_fragment:Mm,uv_pars_fragment:Em,uv_pars_vertex:bm,uv_vertex:wm,worldpos_vertex:Tm,background_vert:Am,background_frag:Cm,backgroundCube_vert:Rm,backgroundCube_frag:Pm,cube_vert:Lm,cube_frag:Dm,depth_vert:Im,depth_frag:Um,distanceRGBA_vert:Nm,distanceRGBA_frag:Fm,equirect_vert:Om,equirect_frag:Bm,linedashed_vert:zm,linedashed_frag:km,meshbasic_vert:Hm,meshbasic_frag:Vm,meshlambert_vert:Gm,meshlambert_frag:Wm,meshmatcap_vert:Xm,meshmatcap_frag:qm,meshnormal_vert:Ym,meshnormal_frag:jm,meshphong_vert:$m,meshphong_frag:Zm,meshphysical_vert:Km,meshphysical_frag:Jm,meshtoon_vert:Qm,meshtoon_frag:e2,points_vert:t2,points_frag:n2,shadow_vert:i2,shadow_frag:s2,sprite_vert:r2,sprite_frag:o2},ge={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Hn={basic:{uniforms:ln([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:ln([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new je(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:ln([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:ln([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:ln([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new je(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:ln([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:ln([ge.points,ge.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:ln([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:ln([ge.common,ge.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:ln([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:ln([ge.sprite,ge.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:ln([ge.common,ge.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:ln([ge.lights,ge.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Hn.physical={uniforms:ln([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Mr={r:0,b:0,g:0},Bi=new fn,a2=new Mt;function l2(n,e,t,i,s,r,o){const a=new je(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const C=g(y);C===null?d(a,l):C&&C.isColor&&(d(C,1),v=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,v){const C=g(v);C&&(C.isCubeTexture||C.mapping===eo)?(h===void 0&&(h=new He(new qn(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:B0(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Bi.copy(v.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(a2.makeRotationFromEuler(Bi)),h.material.toneMapped=ft.getTransfer(C.colorSpace)!==vt,(u!==C||f!==C.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=C,f=C.version,p=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new He(new Pi(2,2),new Ai({name:"BackgroundMaterial",uniforms:B0(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ft.getTransfer(C.colorSpace)!==vt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||f!==C.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=C,f=C.version,p=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,v){y.getRGB(Mr,qh(n)),i.buffers.color.setClear(Mr.r,Mr.g,Mr.b,v,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:_,addToRenderList:m,dispose:M}}function c2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(E,D,B,z,W){let V=!1;const X=u(z,B,D);r!==X&&(r=X,c(r.object)),V=p(E,z,B,W),V&&g(E,z,B,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(E,D,B,z),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function h(E){return n.deleteVertexArray(E)}function u(E,D,B){const z=B.wireframe===!0;let W=i[E.id];W===void 0&&(W={},i[E.id]=W);let V=W[D.id];V===void 0&&(V={},W[D.id]=V);let X=V[z];return X===void 0&&(X=f(l()),V[z]=X),X}function f(E){const D=[],B=[],z=[];for(let W=0;W<t;W++)D[W]=0,B[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:z,object:E,attributes:{},index:null}}function p(E,D,B,z){const W=r.attributes,V=D.attributes;let X=0;const Z=B.getAttributes();for(const G in Z)if(Z[G].location>=0){const ve=W[G];let Te=V[G];if(Te===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(Te=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(Te=E.instanceColor)),ve===void 0||ve.attribute!==Te||Te&&ve.data!==Te.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function g(E,D,B,z){const W={},V=D.attributes;let X=0;const Z=B.getAttributes();for(const G in Z)if(Z[G].location>=0){let ve=V[G];ve===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(ve=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(ve=E.instanceColor));const Te={};Te.attribute=ve,ve&&ve.data&&(Te.data=ve.data),W[G]=Te,X++}r.attributes=W,r.attributesNum=X,r.index=z}function _(){const E=r.newAttributes;for(let D=0,B=E.length;D<B;D++)E[D]=0}function m(E){d(E,0)}function d(E,D){const B=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;B[E]=1,z[E]===0&&(n.enableVertexAttribArray(E),z[E]=1),W[E]!==D&&(n.vertexAttribDivisor(E,D),W[E]=D)}function M(){const E=r.newAttributes,D=r.enabledAttributes;for(let B=0,z=D.length;B<z;B++)D[B]!==E[B]&&(n.disableVertexAttribArray(B),D[B]=0)}function y(E,D,B,z,W,V,X){X===!0?n.vertexAttribIPointer(E,D,B,W,V):n.vertexAttribPointer(E,D,B,z,W,V)}function v(E,D,B,z){_();const W=z.attributes,V=B.getAttributes(),X=D.defaultAttributeValues;for(const Z in V){const G=V[Z];if(G.location>=0){let ue=W[Z];if(ue===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(ue=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(ue=E.instanceColor)),ue!==void 0){const ve=ue.normalized,Te=ue.itemSize,$e=e.get(ue);if($e===void 0)continue;const st=$e.buffer,ut=$e.type,lt=$e.bytesPerElement,J=ut===n.INT||ut===n.UNSIGNED_INT||ue.gpuType===al;if(ue.isInterleavedBufferAttribute){const te=ue.data,Ee=te.stride,de=ue.offset;if(te.isInstancedInterleavedBuffer){for(let me=0;me<G.locationSize;me++)d(G.location+me,te.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let me=0;me<G.locationSize;me++)m(G.location+me);n.bindBuffer(n.ARRAY_BUFFER,st);for(let me=0;me<G.locationSize;me++)y(G.location+me,Te/G.locationSize,ut,ve,Ee*lt,(de+Te/G.locationSize*me)*lt,J)}else{if(ue.isInstancedBufferAttribute){for(let te=0;te<G.locationSize;te++)d(G.location+te,ue.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let te=0;te<G.locationSize;te++)m(G.location+te);n.bindBuffer(n.ARRAY_BUFFER,st);for(let te=0;te<G.locationSize;te++)y(G.location+te,Te/G.locationSize,ut,ve,Te*lt,Te/G.locationSize*te*lt,J)}}else if(X!==void 0){const ve=X[Z];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(G.location,ve);break;case 3:n.vertexAttrib3fv(G.location,ve);break;case 4:n.vertexAttrib4fv(G.location,ve);break;default:n.vertexAttrib1fv(G.location,ve)}}}}M()}function C(){L();for(const E in i){const D=i[E];for(const B in D){const z=D[B];for(const W in z)h(z[W].object),delete z[W];delete D[B]}delete i[E]}}function S(E){if(i[E.id]===void 0)return;const D=i[E.id];for(const B in D){const z=D[B];for(const W in z)h(z[W].object),delete z[W];delete D[B]}delete i[E.id]}function A(E){for(const D in i){const B=i[D];if(B[E.id]===void 0)continue;const z=B[E.id];for(const W in z)h(z[W].object),delete z[W];delete B[E.id]}}function L(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function h2(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}function l(c,h,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function u2(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Nn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const L=A===Bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Zn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ci&&!L)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:C,maxSamples:S}}function d2(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ei,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:i,y=M*4;let v=d.clippingState||null;l.value=v,v=h(g,f,y,p);for(let C=0;C!==y;++C)v[C]=t[C];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,v=p;y!==_;++y,v+=4)o.copy(u[y]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function f2(n){let e=new WeakMap;function t(o,a){return a===la?o.mapping=N0:a===ca&&(o.mapping=F0),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===la||a===ca)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ef(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const R0=4,Gc=[.125,.215,.35,.446,.526,.582],ji=20,ko=new hu,Wc=new je;let Ho=null,Vo=0,Go=0,Wo=!1;const Vi=(1+Math.sqrt(5))/2,b0=1/Vi,Xc=[new R(-Vi,b0,0),new R(Vi,b0,0),new R(-b0,0,Vi),new R(b0,0,Vi),new R(0,Vi,-b0),new R(0,Vi,b0),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],p2=new R;class qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=p2}=r;Ho=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ho,Vo,Go),this._renderer.xr.enabled=Wo,e.scissorTest=!1,Er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===N0||e.mapping===F0?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ho=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Bs,format:Nn,colorSpace:O0,depthBuffer:!1},s=Yc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m2(r)),this._blurMaterial=g2(r,e,t)}return s}_compileMaterial(e){const t=new He(this._lodPlanes[0],e);this._renderer.compile(t,ko)}_sceneToCubeUV(e,t,i,s,r){const l=new An(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Wc),u.toneMapping=Ti,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new _l({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),m=new He(new qn,_);let d=!1;const M=e.background;M?M.isColor&&(_.color.copy(M),e.background=null,d=!0):(_.color.copy(Wc),d=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));const C=this._cubeSize;Er(s,v*C,y>2?C:0,C,C),u.setRenderTarget(s),d&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===N0||e.mapping===F0;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$c()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new He(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Er(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ko)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xc[(s-r-1)%Xc.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new He(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ji-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ji;m>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);const d=[];let M=0;for(let A=0;A<ji;++A){const L=A/_,w=Math.exp(-L*L/2);d.push(w),A===0?M+=w:A<m&&(M+=2*w)}for(let A=0;A<d.length;A++)d[A]=d[A]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const v=this._sizeLods[s],C=3*v*(s>y-R0?s-y+R0:0),S=4*(this._cubeSize-v);Er(t,C,S,3*v,2*v),l.setRenderTarget(t),l.render(u,ko)}}function m2(n){const e=[],t=[],i=[];let s=n;const r=n-R0+1+Gc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-R0?l=Gc[o-n+R0-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,M=new Float32Array(_*g*p),y=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let S=0;S<p;S++){const A=S%3*2/3-1,L=S>2?0:-1,w=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];M.set(w,_*g*S),y.set(f,m*g*S);const E=[S,S,S,S,S,S];v.set(E,d*g*S)}const C=new kt;C.setAttribute("position",new On(M,_)),C.setAttribute("uv",new On(y,m)),C.setAttribute("faceIndex",new On(v,d)),e.push(C),s>R0&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Yc(n,e,t){const i=new t0(n,e,t);return i.texture.mapping=eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Er(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function g2(n,e,t){const i=new Float32Array(ji),s=new R(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wl(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function jc(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function $c(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function wl(){return`

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
	`}function _2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===la||l===ca,h=l===N0||l===F0;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new qc(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new qc(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function v2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&As("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function x2(n,e,t,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let y=0,v=M.length;y<v;y+=3){const C=M[y+0],S=M[y+1],A=M[y+2];f.push(C,S,S,A,A,C)}}else if(g!==void 0){const M=g.array;_=g.version;for(let y=0,v=M.length/3-1;y<v;y+=3){const C=y+0,S=y+1,A=y+2;f.push(C,S,S,A,A,C)}}else return;const m=new(Hh(f)?Xh:Wh)(f,1);m.version=_;const d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function y2(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),t.update(p,i,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function u(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,_,0,g);let d=0;for(let M=0;M<g;M++)d+=p[M]*_[M];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function S2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function M2(n,e,t){const i=new WeakMap,s=new Nt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let E=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let C=a.attributes.position.count*v,S=1;C>e.maxTextureSize&&(S=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*S*4*u),L=new Vh(A,C,S,u);L.type=ci,L.needsUpdate=!0;const w=v*4;for(let D=0;D<u;D++){const B=d[D],z=M[D],W=y[D],V=C*S*4*D;for(let X=0;X<B.count;X++){const Z=X*w;g===!0&&(s.fromBufferAttribute(B,X),A[V+Z+0]=s.x,A[V+Z+1]=s.y,A[V+Z+2]=s.z,A[V+Z+3]=0),_===!0&&(s.fromBufferAttribute(z,X),A[V+Z+4]=s.x,A[V+Z+5]=s.y,A[V+Z+6]=s.z,A[V+Z+7]=0),m===!0&&(s.fromBufferAttribute(W,X),A[V+Z+8]=s.x,A[V+Z+9]=s.y,A[V+Z+10]=s.z,A[V+Z+11]=W.itemSize===4?s.w:1)}}f={count:u,texture:L,size:new se(C,S)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function E2(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const du=new sn,Zc=new Kh(1,1),fu=new Vh,pu=new of,mu=new jh,Kc=[],Jc=[],Qc=new Float32Array(16),eh=new Float32Array(9),th=new Float32Array(4);function W0(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Kc[s];if(r===void 0&&(r=new Float32Array(s),Kc[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function no(n,e){let t=Jc[e];t===void 0&&(t=new Int32Array(e),Jc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function b2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function w2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function T2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function A2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function C2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;th.set(i),n.uniformMatrix2fv(this.addr,!1,th),qt(t,i)}}function R2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;eh.set(i),n.uniformMatrix3fv(this.addr,!1,eh),qt(t,i)}}function P2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;Qc.set(i),n.uniformMatrix4fv(this.addr,!1,Qc),qt(t,i)}}function L2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function D2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function I2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function U2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function N2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function F2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function O2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function B2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function z2(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Zc.compareFunction=kh,r=Zc):r=du,t.setTexture2D(e||r,s)}function k2(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||pu,s)}function H2(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||mu,s)}function V2(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||fu,s)}function G2(n){switch(n){case 5126:return b2;case 35664:return w2;case 35665:return T2;case 35666:return A2;case 35674:return C2;case 35675:return R2;case 35676:return P2;case 5124:case 35670:return L2;case 35667:case 35671:return D2;case 35668:case 35672:return I2;case 35669:case 35673:return U2;case 5125:return N2;case 36294:return F2;case 36295:return O2;case 36296:return B2;case 35678:case 36198:case 36298:case 36306:case 35682:return z2;case 35679:case 36299:case 36307:return k2;case 35680:case 36300:case 36308:case 36293:return H2;case 36289:case 36303:case 36311:case 36292:return V2}}function W2(n,e){n.uniform1fv(this.addr,e)}function X2(n,e){const t=W0(e,this.size,2);n.uniform2fv(this.addr,t)}function q2(n,e){const t=W0(e,this.size,3);n.uniform3fv(this.addr,t)}function Y2(n,e){const t=W0(e,this.size,4);n.uniform4fv(this.addr,t)}function j2(n,e){const t=W0(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $2(n,e){const t=W0(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Z2(n,e){const t=W0(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function K2(n,e){n.uniform1iv(this.addr,e)}function J2(n,e){n.uniform2iv(this.addr,e)}function Q2(n,e){n.uniform3iv(this.addr,e)}function eg(n,e){n.uniform4iv(this.addr,e)}function tg(n,e){n.uniform1uiv(this.addr,e)}function ng(n,e){n.uniform2uiv(this.addr,e)}function ig(n,e){n.uniform3uiv(this.addr,e)}function sg(n,e){n.uniform4uiv(this.addr,e)}function rg(n,e,t){const i=this.cache,s=e.length,r=no(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||du,r[o])}function og(n,e,t){const i=this.cache,s=e.length,r=no(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||pu,r[o])}function ag(n,e,t){const i=this.cache,s=e.length,r=no(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||mu,r[o])}function lg(n,e,t){const i=this.cache,s=e.length,r=no(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||fu,r[o])}function cg(n){switch(n){case 5126:return W2;case 35664:return X2;case 35665:return q2;case 35666:return Y2;case 35674:return j2;case 35675:return $2;case 35676:return Z2;case 5124:case 35670:return K2;case 35667:case 35671:return J2;case 35668:case 35672:return Q2;case 35669:case 35673:return eg;case 5125:return tg;case 36294:return ng;case 36295:return ig;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return lg}}class hg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=G2(t.type)}}class ug{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cg(t.type)}}class dg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Xo=/(\w+)(\])?(\[|\.)?/g;function nh(n,e){n.seq.push(e),n.map[e.id]=e}function fg(n,e,t){const i=n.name,s=i.length;for(Xo.lastIndex=0;;){const r=Xo.exec(i),o=Xo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){nh(t,c===void 0?new hg(a,n,e):new ug(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new dg(a),nh(t,u)),t=u}}}class Lr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);fg(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function ih(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const pg=37297;let mg=0;function gg(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const sh=new Je;function _g(n){ft._getMatrix(sh,ft.workingColorSpace,n);const e=`mat3( ${sh.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(n)){case zr:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function rh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+gg(n.getShaderSource(e),a)}else return r}function vg(n,e){const t=_g(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function xg(n,e){let t;switch(e){case Ph:t="Linear";break;case xd:t="Reinhard";break;case yd:t="Cineon";break;case Sd:t="ACESFilmic";break;case Ed:t="AgX";break;case bd:t="Neutral";break;case Md:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const br=new R;function yg(){ft.getLuminanceCoefficients(br);const n=br.x.toFixed(4),e=br.y.toFixed(4),t=br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function Mg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Eg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ss(n){return n!==""}function oh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ah(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function qa(n){return n.replace(bg,Tg)}const wg=new Map;function Tg(n,e){let t=tt[e];if(t===void 0){const i=wg.get(e);if(i!==void 0)t=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qa(t)}const Ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lh(n){return n.replace(Ag,Cg)}function Cg(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ch(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Rg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ch?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Rh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function Pg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case N0:case F0:e="ENVMAP_TYPE_CUBE";break;case eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lg(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===F0&&(e="ENVMAP_MODE_REFRACTION"),e}function Dg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ol:e="ENVMAP_BLENDING_MULTIPLY";break;case _d:e="ENVMAP_BLENDING_MIX";break;case vd:e="ENVMAP_BLENDING_ADD";break}return e}function Ig(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ug(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Rg(t),c=Pg(t),h=Lg(t),u=Dg(t),f=Ig(t),p=Sg(t),g=Mg(r),_=s.createProgram();let m,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ss).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ss).join(`
`),d.length>0&&(d+=`
`)):(m=[ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),d=[ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?tt.tonemapping_pars_fragment:"",t.toneMapping!==Ti?xg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,vg("linearToOutputTexel",t.outputColorSpace),yg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),o=qa(o),o=oh(o,t),o=ah(o,t),a=qa(a),a=oh(a,t),a=ah(a,t),o=lh(o),a=lh(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=M+m+o,v=M+d+a,C=ih(s,s.VERTEX_SHADER,y),S=ih(s,s.FRAGMENT_SHADER,v);s.attachShader(_,C),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(D){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(_)||"",z=s.getShaderInfoLog(C)||"",W=s.getShaderInfoLog(S)||"",V=B.trim(),X=z.trim(),Z=W.trim();let G=!0,ue=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,C,S);else{const ve=rh(s,C,"vertex"),Te=rh(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+ve+`
`+Te)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(X===""||Z==="")&&(ue=!1);ue&&(D.diagnostics={runnable:G,programLog:V,vertexShader:{log:X,prefix:m},fragmentShader:{log:Z,prefix:d}})}s.deleteShader(C),s.deleteShader(S),L=new Lr(s,_),w=Eg(s,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,pg)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=S,this}let Ng=0;class Fg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Og(e),t.set(e,i)),i}}class Og{constructor(e){this.id=Ng++,this.code=e,this.usedTimes=0}}function Bg(n,e,t,i,s,r,o){const a=new gl,l=new Fg,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,E,D,B,z){const W=B.fog,V=z.geometry,X=w.isMeshStandardMaterial?B.environment:null,Z=(w.isMeshStandardMaterial?t:e).get(w.envMap||X),G=Z&&Z.mapping===eo?Z.image.height:null,ue=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const ve=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Te=ve!==void 0?ve.length:0;let $e=0;V.morphAttributes.position!==void 0&&($e=1),V.morphAttributes.normal!==void 0&&($e=2),V.morphAttributes.color!==void 0&&($e=3);let st,ut,lt,J;if(ue){const mt=Hn[ue];st=mt.vertexShader,ut=mt.fragmentShader}else st=w.vertexShader,ut=w.fragmentShader,l.update(w),lt=l.getVertexShaderID(w),J=l.getFragmentShaderID(w);const te=n.getRenderTarget(),Ee=n.state.buffers.depth.getReversed(),de=z.isInstancedMesh===!0,me=z.isBatchedMesh===!0,Ze=!!w.map,ct=!!w.matcap,P=!!Z,Q=!!w.aoMap,K=!!w.lightMap,$=!!w.bumpMap,j=!!w.normalMap,ce=!!w.displacementMap,ne=!!w.emissiveMap,re=!!w.metalnessMap,Be=!!w.roughnessMap,ze=w.anisotropy>0,T=w.clearcoat>0,x=w.dispersion>0,O=w.iridescence>0,q=w.sheen>0,ie=w.transmission>0,Y=ze&&!!w.anisotropyMap,Ne=T&&!!w.clearcoatMap,fe=T&&!!w.clearcoatNormalMap,Le=T&&!!w.clearcoatRoughnessMap,De=O&&!!w.iridescenceMap,oe=O&&!!w.iridescenceThicknessMap,Se=q&&!!w.sheenColorMap,Xe=q&&!!w.sheenRoughnessMap,Fe=!!w.specularMap,xe=!!w.specularColorMap,Qe=!!w.specularIntensityMap,U=ie&&!!w.transmissionMap,he=ie&&!!w.thicknessMap,pe=!!w.gradientMap,Ce=!!w.alphaMap,ae=w.alphaTest>0,ee=!!w.alphaHash,Ie=!!w.extensions;let Ke=Ti;w.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ke=n.toneMapping);const Tt={shaderID:ue,shaderType:w.type,shaderName:w.name,vertexShader:st,fragmentShader:ut,defines:w.defines,customVertexShaderID:lt,customFragmentShaderID:J,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:me,batchingColor:me&&z._colorsTexture!==null,instancing:de,instancingColor:de&&z.instanceColor!==null,instancingMorph:de&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:O0,alphaToCoverage:!!w.alphaToCoverage,map:Ze,matcap:ct,envMap:P,envMapMode:P&&Z.mapping,envMapCubeUVHeight:G,aoMap:Q,lightMap:K,bumpMap:$,normalMap:j,displacementMap:f&&ce,emissiveMap:ne,normalMapObjectSpace:j&&w.normalMapType===Cd,normalMapTangentSpace:j&&w.normalMapType===fl,metalnessMap:re,roughnessMap:Be,anisotropy:ze,anisotropyMap:Y,clearcoat:T,clearcoatMap:Ne,clearcoatNormalMap:fe,clearcoatRoughnessMap:Le,dispersion:x,iridescence:O,iridescenceMap:De,iridescenceThicknessMap:oe,sheen:q,sheenColorMap:Se,sheenRoughnessMap:Xe,specularMap:Fe,specularColorMap:xe,specularIntensityMap:Qe,transmission:ie,transmissionMap:U,thicknessMap:he,gradientMap:pe,opaque:w.transparent===!1&&w.blending===Ki&&w.alphaToCoverage===!1,alphaMap:Ce,alphaTest:ae,alphaHash:ee,combine:w.combine,mapUv:Ze&&_(w.map.channel),aoMapUv:Q&&_(w.aoMap.channel),lightMapUv:K&&_(w.lightMap.channel),bumpMapUv:$&&_(w.bumpMap.channel),normalMapUv:j&&_(w.normalMap.channel),displacementMapUv:ce&&_(w.displacementMap.channel),emissiveMapUv:ne&&_(w.emissiveMap.channel),metalnessMapUv:re&&_(w.metalnessMap.channel),roughnessMapUv:Be&&_(w.roughnessMap.channel),anisotropyMapUv:Y&&_(w.anisotropyMap.channel),clearcoatMapUv:Ne&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&_(w.sheenRoughnessMap.channel),specularMapUv:Fe&&_(w.specularMap.channel),specularColorMapUv:xe&&_(w.specularColorMap.channel),specularIntensityMapUv:Qe&&_(w.specularIntensityMap.channel),transmissionMapUv:U&&_(w.transmissionMap.channel),thicknessMapUv:he&&_(w.thicknessMap.channel),alphaMapUv:Ce&&_(w.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(j||ze),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!V.attributes.uv&&(Ze||Ce),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ee,skinning:z.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:$e,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Ze&&w.map.isVideoTexture===!0&&ft.getTransfer(w.map.colorSpace)===vt,decodeVideoTextureEmissive:ne&&w.emissiveMap.isVideoTexture===!0&&ft.getTransfer(w.emissiveMap.colorSpace)===vt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Gn,flipSided:w.side===dn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ie&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&w.extensions.multiDraw===!0||me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function d(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)E.push(D),E.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(M(E,w),y(E,w),E.push(n.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function M(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function y(w,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const E=g[w.type];let D;if(E){const B=Hn[E];D=xf.clone(B.uniforms)}else D=w.uniforms;return D}function C(w,E){let D;for(let B=0,z=h.length;B<z;B++){const W=h[B];if(W.cacheKey===E){D=W,++D.usedTimes;break}}return D===void 0&&(D=new Ug(n,E,w,r),h.push(D)),D}function S(w){if(--w.usedTimes===0){const E=h.indexOf(w);h[E]=h[h.length-1],h.pop(),w.destroy()}}function A(w){l.remove(w)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:C,releaseProgram:S,releaseShaderCache:A,programs:h,dispose:L}}function zg(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function kg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function hh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function uh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,p,g,_,m){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),e++,d}function a(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||kg),i.length>1&&i.sort(f||hh),s.length>1&&s.sort(f||hh)}function h(){for(let u=e,f=n.length;u<f;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Hg(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new uh,n.set(i,[o])):s>=r.length?(o=new uh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Vg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new je};break;case"SpotLight":t={position:new R,direction:new R,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function Gg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Wg=0;function Xg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function qg(n){const e=new Vg,t=Gg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);const s=new R,r=new Mt,o=new Mt;function a(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,M=0,y=0,v=0,C=0,S=0,A=0;c.sort(Xg);for(let w=0,E=c.length;w<E;w++){const D=c[w],B=D.color,z=D.intensity,W=D.distance,V=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=B.r*z,u+=B.g*z,f+=B.b*z;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],z);A++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,G=t.get(D);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=D.shadow.matrix,M++}i.directional[p]=X,p++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(B).multiplyScalar(z),X.distance=W,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[_]=X;const Z=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,Z.updateMatrices(D),D.castShadow&&S++),i.spotLightMatrix[_]=Z.matrix,D.castShadow){const G=t.get(D);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=V,v++}_++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(B).multiplyScalar(z),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=X,m++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const Z=D.shadow,G=t.get(D);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=D.shadow.matrix,y++}i.point[g]=X,g++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(z),X.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[d]=X,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==M||L.numPointShadows!==y||L.numSpotShadows!==v||L.numSpotMaps!==C||L.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+C-S,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=A,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=M,L.numPointShadows=y,L.numSpotShadows=v,L.numSpotMaps=C,L.numLightProbes=A,i.version=Wg++)}function l(c,h){let u=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const y=c[d];if(y.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function dh(n){const e=new qg(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Yg(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new dh(n),e.set(s,[a])):r>=o.length?(a=new dh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$g=`uniform sampler2D shadow_pass;
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
}`;function Zg(n,e,t){let i=new vl;const s=new se,r=new se,o=new Nt,a=new up({depthPacking:Ad}),l=new dp,c={},h=t.maxTextureSize,u={[di]:dn,[dn]:di,[Gn]:Gn},f=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:jg,fragmentShader:$g}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new He(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ch;let d=this.type;this.render=function(S,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const w=n.getRenderTarget(),E=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),B=n.state;B.setBlending(wi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const z=d!==oi&&this.type===oi,W=d===oi&&this.type!==oi;for(let V=0,X=S.length;V<X;V++){const Z=S[V],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ue=G.getFrameExtents();if(s.multiply(ue),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ue.x),s.x=r.x*ue.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ue.y),s.y=r.y*ue.y,G.mapSize.y=r.y)),G.map===null||z===!0||W===!0){const Te=this.type!==oi?{minFilter:Fn,magFilter:Fn}:{};G.map!==null&&G.map.dispose(),G.map=new t0(s.x,s.y,Te),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const ve=G.getViewportCount();for(let Te=0;Te<ve;Te++){const $e=G.getViewport(Te);o.set(r.x*$e.x,r.y*$e.y,r.x*$e.z,r.y*$e.w),B.viewport(o),G.updateMatrices(Z,Te),i=G.getFrustum(),v(A,L,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===oi&&M(G,L),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(w,E,D)};function M(S,A){const L=e.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new t0(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(A,null,L,f,_,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(A,null,L,p,_,null)}function y(S,A,L,w){let E=null;const D=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)E=D;else if(E=L.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const B=E.uuid,z=A.uuid;let W=c[B];W===void 0&&(W={},c[B]=W);let V=W[z];V===void 0&&(V=E.clone(),W[z]=V,A.addEventListener("dispose",C)),E=V}if(E.visible=A.visible,E.wireframe=A.wireframe,w===oi?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:u[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const B=n.properties.get(E);B.light=L}return E}function v(S,A,L,w,E){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===oi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);const z=e.update(S),W=S.material;if(Array.isArray(W)){const V=z.groups;for(let X=0,Z=V.length;X<Z;X++){const G=V[X],ue=W[G.materialIndex];if(ue&&ue.visible){const ve=y(S,ue,w,E);S.onBeforeShadow(n,S,A,L,z,ve,G),n.renderBufferDirect(L,null,z,ve,S,G),S.onAfterShadow(n,S,A,L,z,ve,G)}}}else if(W.visible){const V=y(S,W,w,E);S.onBeforeShadow(n,S,A,L,z,V,null),n.renderBufferDirect(L,null,z,V,S,null),S.onAfterShadow(n,S,A,L,z,V,null)}}const B=S.children;for(let z=0,W=B.length;z<W;z++)v(B[z],A,L,w,E)}function C(S){S.target.removeEventListener("dispose",C);for(const L in c){const w=c[L],E=S.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}const Kg={[ta]:na,[ia]:oa,[sa]:aa,[U0]:ra,[na]:ta,[oa]:ia,[aa]:sa,[ra]:U0};function Jg(n,e){function t(){let U=!1;const he=new Nt;let pe=null;const Ce=new Nt(0,0,0,0);return{setMask:function(ae){pe!==ae&&!U&&(n.colorMask(ae,ae,ae,ae),pe=ae)},setLocked:function(ae){U=ae},setClear:function(ae,ee,Ie,Ke,Tt){Tt===!0&&(ae*=Ke,ee*=Ke,Ie*=Ke),he.set(ae,ee,Ie,Ke),Ce.equals(he)===!1&&(n.clearColor(ae,ee,Ie,Ke),Ce.copy(he))},reset:function(){U=!1,pe=null,Ce.set(-1,0,0,0)}}}function i(){let U=!1,he=!1,pe=null,Ce=null,ae=null;return{setReversed:function(ee){if(he!==ee){const Ie=e.get("EXT_clip_control");ee?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),he=ee;const Ke=ae;ae=null,this.setClear(Ke)}},getReversed:function(){return he},setTest:function(ee){ee?te(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(ee){pe!==ee&&!U&&(n.depthMask(ee),pe=ee)},setFunc:function(ee){if(he&&(ee=Kg[ee]),Ce!==ee){switch(ee){case ta:n.depthFunc(n.NEVER);break;case na:n.depthFunc(n.ALWAYS);break;case ia:n.depthFunc(n.LESS);break;case U0:n.depthFunc(n.LEQUAL);break;case sa:n.depthFunc(n.EQUAL);break;case ra:n.depthFunc(n.GEQUAL);break;case oa:n.depthFunc(n.GREATER);break;case aa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ce=ee}},setLocked:function(ee){U=ee},setClear:function(ee){ae!==ee&&(he&&(ee=1-ee),n.clearDepth(ee),ae=ee)},reset:function(){U=!1,pe=null,Ce=null,ae=null,he=!1}}}function s(){let U=!1,he=null,pe=null,Ce=null,ae=null,ee=null,Ie=null,Ke=null,Tt=null;return{setTest:function(mt){U||(mt?te(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(mt){he!==mt&&!U&&(n.stencilMask(mt),he=mt)},setFunc:function(mt,Qn,zn){(pe!==mt||Ce!==Qn||ae!==zn)&&(n.stencilFunc(mt,Qn,zn),pe=mt,Ce=Qn,ae=zn)},setOp:function(mt,Qn,zn){(ee!==mt||Ie!==Qn||Ke!==zn)&&(n.stencilOp(mt,Qn,zn),ee=mt,Ie=Qn,Ke=zn)},setLocked:function(mt){U=mt},setClear:function(mt){Tt!==mt&&(n.clearStencil(mt),Tt=mt)},reset:function(){U=!1,he=null,pe=null,Ce=null,ae=null,ee=null,Ie=null,Ke=null,Tt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,M=null,y=null,v=null,C=null,S=null,A=new je(0,0,0),L=0,w=!1,E=null,D=null,B=null,z=null,W=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=Z>=2);let ue=null,ve={};const Te=n.getParameter(n.SCISSOR_BOX),$e=n.getParameter(n.VIEWPORT),st=new Nt().fromArray(Te),ut=new Nt().fromArray($e);function lt(U,he,pe,Ce){const ae=new Uint8Array(4),ee=n.createTexture();n.bindTexture(U,ee),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ie=0;Ie<pe;Ie++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,Ce,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(he+Ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return ee}const J={};J[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(n.DEPTH_TEST),o.setFunc(U0),$(!1),j(tc),te(n.CULL_FACE),Q(wi);function te(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function Ee(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function de(U,he){return u[U]!==he?(n.bindFramebuffer(U,he),u[U]=he,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=he),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=he),!0):!1}function me(U,he){let pe=p,Ce=!1;if(U){pe=f.get(he),pe===void 0&&(pe=[],f.set(he,pe));const ae=U.textures;if(pe.length!==ae.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,Ie=ae.length;ee<Ie;ee++)pe[ee]=n.COLOR_ATTACHMENT0+ee;pe.length=ae.length,Ce=!0}}else pe[0]!==n.BACK&&(pe[0]=n.BACK,Ce=!0);Ce&&n.drawBuffers(pe)}function Ze(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const ct={[Yi]:n.FUNC_ADD,[ed]:n.FUNC_SUBTRACT,[td]:n.FUNC_REVERSE_SUBTRACT};ct[nd]=n.MIN,ct[id]=n.MAX;const P={[sd]:n.ZERO,[rd]:n.ONE,[od]:n.SRC_COLOR,[Qo]:n.SRC_ALPHA,[dd]:n.SRC_ALPHA_SATURATE,[hd]:n.DST_COLOR,[ld]:n.DST_ALPHA,[ad]:n.ONE_MINUS_SRC_COLOR,[ea]:n.ONE_MINUS_SRC_ALPHA,[ud]:n.ONE_MINUS_DST_COLOR,[cd]:n.ONE_MINUS_DST_ALPHA,[fd]:n.CONSTANT_COLOR,[pd]:n.ONE_MINUS_CONSTANT_COLOR,[md]:n.CONSTANT_ALPHA,[gd]:n.ONE_MINUS_CONSTANT_ALPHA};function Q(U,he,pe,Ce,ae,ee,Ie,Ke,Tt,mt){if(U===wi){_===!0&&(Ee(n.BLEND),_=!1);return}if(_===!1&&(te(n.BLEND),_=!0),U!==Qu){if(U!==m||mt!==w){if((d!==Yi||v!==Yi)&&(n.blendEquation(n.FUNC_ADD),d=Yi,v=Yi),mt)switch(U){case Ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nc:n.blendFunc(n.ONE,n.ONE);break;case ic:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ic:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,y=null,C=null,S=null,A.set(0,0,0),L=0,m=U,w=mt}return}ae=ae||he,ee=ee||pe,Ie=Ie||Ce,(he!==d||ae!==v)&&(n.blendEquationSeparate(ct[he],ct[ae]),d=he,v=ae),(pe!==M||Ce!==y||ee!==C||Ie!==S)&&(n.blendFuncSeparate(P[pe],P[Ce],P[ee],P[Ie]),M=pe,y=Ce,C=ee,S=Ie),(Ke.equals(A)===!1||Tt!==L)&&(n.blendColor(Ke.r,Ke.g,Ke.b,Tt),A.copy(Ke),L=Tt),m=U,w=!1}function K(U,he){U.side===Gn?Ee(n.CULL_FACE):te(n.CULL_FACE);let pe=U.side===dn;he&&(pe=!pe),$(pe),U.blending===Ki&&U.transparent===!1?Q(wi):Q(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const Ce=U.stencilWrite;a.setTest(Ce),Ce&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ne(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(U){E!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),E=U)}function j(U){U!==Ku?(te(n.CULL_FACE),U!==D&&(U===tc?n.cullFace(n.BACK):U===Ju?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),D=U}function ce(U){U!==B&&(X&&n.lineWidth(U),B=U)}function ne(U,he,pe){U?(te(n.POLYGON_OFFSET_FILL),(z!==he||W!==pe)&&(n.polygonOffset(he,pe),z=he,W=pe)):Ee(n.POLYGON_OFFSET_FILL)}function re(U){U?te(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function Be(U){U===void 0&&(U=n.TEXTURE0+V-1),ue!==U&&(n.activeTexture(U),ue=U)}function ze(U,he,pe){pe===void 0&&(ue===null?pe=n.TEXTURE0+V-1:pe=ue);let Ce=ve[pe];Ce===void 0&&(Ce={type:void 0,texture:void 0},ve[pe]=Ce),(Ce.type!==U||Ce.texture!==he)&&(ue!==pe&&(n.activeTexture(pe),ue=pe),n.bindTexture(U,he||J[U]),Ce.type=U,Ce.texture=he)}function T(){const U=ve[ue];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(U){st.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),st.copy(U))}function Xe(U){ut.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ut.copy(U))}function Fe(U,he){let pe=c.get(he);pe===void 0&&(pe=new WeakMap,c.set(he,pe));let Ce=pe.get(U);Ce===void 0&&(Ce=n.getUniformBlockIndex(he,U.name),pe.set(U,Ce))}function xe(U,he){const Ce=c.get(he).get(U);l.get(he)!==Ce&&(n.uniformBlockBinding(he,Ce,U.__bindingPointIndex),l.set(he,Ce))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ue=null,ve={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,M=null,y=null,v=null,C=null,S=null,A=new je(0,0,0),L=0,w=!1,E=null,D=null,B=null,z=null,W=null,st.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:Ee,bindFramebuffer:de,drawBuffers:me,useProgram:Ze,setBlending:Q,setMaterial:K,setFlipSided:$,setCullFace:j,setLineWidth:ce,setPolygonOffset:ne,setScissorTest:re,activeTexture:Be,bindTexture:ze,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:De,texImage3D:oe,updateUBOMapping:Fe,uniformBlockBinding:xe,texStorage2D:fe,texStorage3D:Le,texSubImage2D:q,texSubImage3D:ie,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ne,scissor:Se,viewport:Xe,reset:Qe}}function Qg(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):Ts("canvas")}function _(T,x,O){let q=1;const ie=ze(T);if((ie.width>O||ie.height>O)&&(q=O/Math.max(ie.width,ie.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(q*ie.width),Ne=Math.floor(q*ie.height);u===void 0&&(u=g(Y,Ne));const fe=x?g(Y,Ne):u;return fe.width=Y,fe.height=Ne,fe.getContext("2d").drawImage(T,0,0,Y,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Y+"x"+Ne+")."),fe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){n.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(T,x,O,q,ie=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=x;if(x===n.RED&&(O===n.FLOAT&&(Y=n.R32F),O===n.HALF_FLOAT&&(Y=n.R16F),O===n.UNSIGNED_BYTE&&(Y=n.R8)),x===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.R8UI),O===n.UNSIGNED_SHORT&&(Y=n.R16UI),O===n.UNSIGNED_INT&&(Y=n.R32UI),O===n.BYTE&&(Y=n.R8I),O===n.SHORT&&(Y=n.R16I),O===n.INT&&(Y=n.R32I)),x===n.RG&&(O===n.FLOAT&&(Y=n.RG32F),O===n.HALF_FLOAT&&(Y=n.RG16F),O===n.UNSIGNED_BYTE&&(Y=n.RG8)),x===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RG8UI),O===n.UNSIGNED_SHORT&&(Y=n.RG16UI),O===n.UNSIGNED_INT&&(Y=n.RG32UI),O===n.BYTE&&(Y=n.RG8I),O===n.SHORT&&(Y=n.RG16I),O===n.INT&&(Y=n.RG32I)),x===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),O===n.UNSIGNED_INT&&(Y=n.RGB32UI),O===n.BYTE&&(Y=n.RGB8I),O===n.SHORT&&(Y=n.RGB16I),O===n.INT&&(Y=n.RGB32I)),x===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),O===n.UNSIGNED_INT&&(Y=n.RGBA32UI),O===n.BYTE&&(Y=n.RGBA8I),O===n.SHORT&&(Y=n.RGBA16I),O===n.INT&&(Y=n.RGBA32I)),x===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),x===n.RGBA){const Ne=ie?zr:ft.getTransfer(q);O===n.FLOAT&&(Y=n.RGBA32F),O===n.HALF_FLOAT&&(Y=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Y=Ne===vt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(T,x){let O;return T?x===null||x===Qi||x===Ms?O=n.DEPTH24_STENCIL8:x===ci?O=n.DEPTH32F_STENCIL8:x===Ss&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Qi||x===Ms?O=n.DEPTH_COMPONENT24:x===ci?O=n.DEPTH_COMPONENT32F:x===Ss&&(O=n.DEPTH_COMPONENT16),O}function C(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Fn&&T.minFilter!==Wn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function S(T){const x=T.target;x.removeEventListener("dispose",S),L(x),x.isVideoTexture&&h.delete(x)}function A(T){const x=T.target;x.removeEventListener("dispose",A),E(x)}function L(T){const x=i.get(T);if(x.__webglInit===void 0)return;const O=T.source,q=f.get(O);if(q){const ie=q[x.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&w(T),Object.keys(q).length===0&&f.delete(O)}i.remove(T)}function w(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const O=T.source,q=f.get(O);delete q[x.__cacheKey],o.memory.textures--}function E(T){const x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let ie=0;ie<x.__webglFramebuffer[q].length;ie++)n.deleteFramebuffer(x.__webglFramebuffer[q][ie]);else n.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)n.deleteFramebuffer(x.__webglFramebuffer[q]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=T.textures;for(let q=0,ie=O.length;q<ie;q++){const Y=i.get(O[q]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(O[q])}i.remove(T)}let D=0;function B(){D=0}function z(){const T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function W(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function V(T,x){const O=i.get(T);if(T.isVideoTexture&&re(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(O,T,x);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+x)}function X(T,x){const O=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){J(O,T,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+x)}function Z(T,x){const O=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){J(O,T,x);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+x)}function G(T,x){const O=i.get(T);if(T.version>0&&O.__version!==T.version){te(O,T,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+x)}const ue={[ha]:n.REPEAT,[$i]:n.CLAMP_TO_EDGE,[ua]:n.MIRRORED_REPEAT},ve={[Fn]:n.NEAREST,[wd]:n.NEAREST_MIPMAP_NEAREST,[js]:n.NEAREST_MIPMAP_LINEAR,[Wn]:n.LINEAR,[co]:n.LINEAR_MIPMAP_NEAREST,[Zi]:n.LINEAR_MIPMAP_LINEAR},Te={[Rd]:n.NEVER,[Nd]:n.ALWAYS,[Pd]:n.LESS,[kh]:n.LEQUAL,[Ld]:n.EQUAL,[Ud]:n.GEQUAL,[Dd]:n.GREATER,[Id]:n.NOTEQUAL};function $e(T,x){if(x.type===ci&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Wn||x.magFilter===co||x.magFilter===js||x.magFilter===Zi||x.minFilter===Wn||x.minFilter===co||x.minFilter===js||x.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ue[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ue[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ue[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ve[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ve[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Te[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Fn||x.minFilter!==js&&x.minFilter!==Zi||x.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function st(T,x){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",S));const q=x.source;let ie=f.get(q);ie===void 0&&(ie={},f.set(q,ie));const Y=W(x);if(Y!==T.__cacheKey){ie[Y]===void 0&&(ie[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ie[Y].usedTimes++;const Ne=ie[T.__cacheKey];Ne!==void 0&&(ie[T.__cacheKey].usedTimes--,Ne.usedTimes===0&&w(x)),T.__cacheKey=Y,T.__webglTexture=ie[Y].texture}return O}function ut(T,x,O){return Math.floor(Math.floor(T/O)/x)}function lt(T,x,O,q){const Y=T.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,O,q,x.data);else{Y.sort((oe,Se)=>oe.start-Se.start);let Ne=0;for(let oe=1;oe<Y.length;oe++){const Se=Y[Ne],Xe=Y[oe],Fe=Se.start+Se.count,xe=ut(Xe.start,x.width,4),Qe=ut(Se.start,x.width,4);Xe.start<=Fe+1&&xe===Qe&&ut(Xe.start+Xe.count-1,x.width,4)===xe?Se.count=Math.max(Se.count,Xe.start+Xe.count-Se.start):(++Ne,Y[Ne]=Xe)}Y.length=Ne+1;const fe=n.getParameter(n.UNPACK_ROW_LENGTH),Le=n.getParameter(n.UNPACK_SKIP_PIXELS),De=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let oe=0,Se=Y.length;oe<Se;oe++){const Xe=Y[oe],Fe=Math.floor(Xe.start/4),xe=Math.ceil(Xe.count/4),Qe=Fe%x.width,U=Math.floor(Fe/x.width),he=xe,pe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Qe,U,he,pe,O,q,x.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,fe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function J(T,x,O){let q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=n.TEXTURE_3D);const ie=st(T,x),Y=x.source;t.bindTexture(q,T.__webglTexture,n.TEXTURE0+O);const Ne=i.get(Y);if(Y.version!==Ne.__version||ie===!0){t.activeTexture(n.TEXTURE0+O);const fe=ft.getPrimaries(ft.workingColorSpace),Le=x.colorSpace===bi?null:ft.getPrimaries(x.colorSpace),De=x.colorSpace===bi||fe===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let oe=_(x.image,!1,s.maxTextureSize);oe=Be(x,oe);const Se=r.convert(x.format,x.colorSpace),Xe=r.convert(x.type);let Fe=y(x.internalFormat,Se,Xe,x.colorSpace,x.isVideoTexture);$e(q,x);let xe;const Qe=x.mipmaps,U=x.isVideoTexture!==!0,he=Ne.__version===void 0||ie===!0,pe=Y.dataReady,Ce=C(x,oe);if(x.isDepthTexture)Fe=v(x.format===bs,x.type),he&&(U?t.texStorage2D(n.TEXTURE_2D,1,Fe,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Fe,oe.width,oe.height,0,Se,Xe,null));else if(x.isDataTexture)if(Qe.length>0){U&&he&&t.texStorage2D(n.TEXTURE_2D,Ce,Fe,Qe[0].width,Qe[0].height);for(let ae=0,ee=Qe.length;ae<ee;ae++)xe=Qe[ae],U?pe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,xe.width,xe.height,Se,Xe,xe.data):t.texImage2D(n.TEXTURE_2D,ae,Fe,xe.width,xe.height,0,Se,Xe,xe.data);x.generateMipmaps=!1}else U?(he&&t.texStorage2D(n.TEXTURE_2D,Ce,Fe,oe.width,oe.height),pe&&lt(x,oe,Se,Xe)):t.texImage2D(n.TEXTURE_2D,0,Fe,oe.width,oe.height,0,Se,Xe,oe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Fe,Qe[0].width,Qe[0].height,oe.depth);for(let ae=0,ee=Qe.length;ae<ee;ae++)if(xe=Qe[ae],x.format!==Nn)if(Se!==null)if(U){if(pe)if(x.layerUpdates.size>0){const Ie=Vc(xe.width,xe.height,x.format,x.type);for(const Ke of x.layerUpdates){const Tt=xe.data.subarray(Ke*Ie/xe.data.BYTES_PER_ELEMENT,(Ke+1)*Ie/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,Ke,xe.width,xe.height,1,Se,Tt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,oe.depth,Se,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Fe,xe.width,xe.height,oe.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?pe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,oe.depth,Se,Xe,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Fe,xe.width,xe.height,oe.depth,0,Se,Xe,xe.data)}else{U&&he&&t.texStorage2D(n.TEXTURE_2D,Ce,Fe,Qe[0].width,Qe[0].height);for(let ae=0,ee=Qe.length;ae<ee;ae++)xe=Qe[ae],x.format!==Nn?Se!==null?U?pe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,xe.width,xe.height,Se,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Fe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?pe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,xe.width,xe.height,Se,Xe,xe.data):t.texImage2D(n.TEXTURE_2D,ae,Fe,xe.width,xe.height,0,Se,Xe,xe.data)}else if(x.isDataArrayTexture)if(U){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Fe,oe.width,oe.height,oe.depth),pe)if(x.layerUpdates.size>0){const ae=Vc(oe.width,oe.height,x.format,x.type);for(const ee of x.layerUpdates){const Ie=oe.data.subarray(ee*ae/oe.data.BYTES_PER_ELEMENT,(ee+1)*ae/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,Se,Xe,Ie)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Se,Xe,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,oe.width,oe.height,oe.depth,0,Se,Xe,oe.data);else if(x.isData3DTexture)U?(he&&t.texStorage3D(n.TEXTURE_3D,Ce,Fe,oe.width,oe.height,oe.depth),pe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Se,Xe,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,oe.width,oe.height,oe.depth,0,Se,Xe,oe.data);else if(x.isFramebufferTexture){if(he)if(U)t.texStorage2D(n.TEXTURE_2D,Ce,Fe,oe.width,oe.height);else{let ae=oe.width,ee=oe.height;for(let Ie=0;Ie<Ce;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,Fe,ae,ee,0,Se,Xe,null),ae>>=1,ee>>=1}}else if(Qe.length>0){if(U&&he){const ae=ze(Qe[0]);t.texStorage2D(n.TEXTURE_2D,Ce,Fe,ae.width,ae.height)}for(let ae=0,ee=Qe.length;ae<ee;ae++)xe=Qe[ae],U?pe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Se,Xe,xe):t.texImage2D(n.TEXTURE_2D,ae,Fe,Se,Xe,xe);x.generateMipmaps=!1}else if(U){if(he){const ae=ze(oe);t.texStorage2D(n.TEXTURE_2D,Ce,Fe,ae.width,ae.height)}pe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Xe,oe)}else t.texImage2D(n.TEXTURE_2D,0,Fe,Se,Xe,oe);m(x)&&d(q),Ne.__version=Y.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function te(T,x,O){if(x.image.length!==6)return;const q=st(T,x),ie=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+O);const Y=i.get(ie);if(ie.version!==Y.__version||q===!0){t.activeTexture(n.TEXTURE0+O);const Ne=ft.getPrimaries(ft.workingColorSpace),fe=x.colorSpace===bi?null:ft.getPrimaries(x.colorSpace),Le=x.colorSpace===bi||Ne===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const De=x.isCompressedTexture||x.image[0].isCompressedTexture,oe=x.image[0]&&x.image[0].isDataTexture,Se=[];for(let ee=0;ee<6;ee++)!De&&!oe?Se[ee]=_(x.image[ee],!0,s.maxCubemapSize):Se[ee]=oe?x.image[ee].image:x.image[ee],Se[ee]=Be(x,Se[ee]);const Xe=Se[0],Fe=r.convert(x.format,x.colorSpace),xe=r.convert(x.type),Qe=y(x.internalFormat,Fe,xe,x.colorSpace),U=x.isVideoTexture!==!0,he=Y.__version===void 0||q===!0,pe=ie.dataReady;let Ce=C(x,Xe);$e(n.TEXTURE_CUBE_MAP,x);let ae;if(De){U&&he&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Qe,Xe.width,Xe.height);for(let ee=0;ee<6;ee++){ae=Se[ee].mipmaps;for(let Ie=0;Ie<ae.length;Ie++){const Ke=ae[Ie];x.format!==Nn?Fe!==null?U?pe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,0,0,Ke.width,Ke.height,Fe,Ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,Qe,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,0,0,Ke.width,Ke.height,Fe,xe,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,Qe,Ke.width,Ke.height,0,Fe,xe,Ke.data)}}}else{if(ae=x.mipmaps,U&&he){ae.length>0&&Ce++;const ee=ze(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Qe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){U?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Se[ee].width,Se[ee].height,Fe,xe,Se[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Qe,Se[ee].width,Se[ee].height,0,Fe,xe,Se[ee].data);for(let Ie=0;Ie<ae.length;Ie++){const Tt=ae[Ie].image[ee].image;U?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,0,0,Tt.width,Tt.height,Fe,xe,Tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,Qe,Tt.width,Tt.height,0,Fe,xe,Tt.data)}}else{U?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Fe,xe,Se[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Qe,Fe,xe,Se[ee]);for(let Ie=0;Ie<ae.length;Ie++){const Ke=ae[Ie];U?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,0,0,Fe,xe,Ke.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,Qe,Fe,xe,Ke.image[ee])}}}m(x)&&d(n.TEXTURE_CUBE_MAP),Y.__version=ie.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Ee(T,x,O,q,ie,Y){const Ne=r.convert(O.format,O.colorSpace),fe=r.convert(O.type),Le=y(O.internalFormat,Ne,fe,O.colorSpace),De=i.get(x),oe=i.get(O);if(oe.__renderTarget=x,!De.__hasExternalTextures){const Se=Math.max(1,x.width>>Y),Xe=Math.max(1,x.height>>Y);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,Y,Le,Se,Xe,x.depth,0,Ne,fe,null):t.texImage2D(ie,Y,Le,Se,Xe,0,Ne,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ne(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,ie,oe.__webglTexture,0,ce(x)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,ie,oe.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(T,x,O){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){const q=x.depthTexture,ie=q&&q.isDepthTexture?q.type:null,Y=v(x.stencilBuffer,ie),Ne=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=ce(x);ne(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,Y,x.width,x.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,Y,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Y,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ne,n.RENDERBUFFER,T)}else{const q=x.textures;for(let ie=0;ie<q.length;ie++){const Y=q[ie],Ne=r.convert(Y.format,Y.colorSpace),fe=r.convert(Y.type),Le=y(Y.internalFormat,Ne,fe,Y.colorSpace),De=ce(x);O&&ne(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Le,x.width,x.height):ne(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,Le,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Le,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function me(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const ie=q.__webglTexture,Y=ce(x);if(x.depthTexture.format===Es)ne(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(x.depthTexture.format===bs)ne(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ze(T){const x=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const ie=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",ie)};q.addEventListener("dispose",ie),x.__depthDisposeCallback=ie}x.__boundDepthTexture=q}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const q=T.texture.mipmaps;q&&q.length>0?me(x.__webglFramebuffer[0],T):me(x.__webglFramebuffer,T)}else if(O){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=n.createRenderbuffer(),de(x.__webglDepthbuffer[q],T,!1);else{const ie=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,Y)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),de(x.__webglDepthbuffer,T,!1);else{const ie=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(T,x,O){const q=i.get(T);x!==void 0&&Ee(q.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ze(T)}function P(T){const x=T.texture,O=i.get(T),q=i.get(x);T.addEventListener("dispose",A);const ie=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Ne=ie.length>1;if(Ne||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=x.version,o.memory.textures++),Y){O.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[fe]=[];for(let Le=0;Le<x.mipmaps.length;Le++)O.__webglFramebuffer[fe][Le]=n.createFramebuffer()}else O.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)O.__webglFramebuffer[fe]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Ne)for(let fe=0,Le=ie.length;fe<Le;fe++){const De=i.get(ie[fe]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&ne(T)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const Le=ie[fe];O.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[fe]);const De=r.convert(Le.format,Le.colorSpace),oe=r.convert(Le.type),Se=y(Le.internalFormat,De,oe,Le.colorSpace,T.isXRRenderTarget===!0),Xe=ce(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,Se,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,O.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),de(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),$e(n.TEXTURE_CUBE_MAP,x);for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Le=0;Le<x.mipmaps.length;Le++)Ee(O.__webglFramebuffer[fe][Le],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le);else Ee(O.__webglFramebuffer[fe],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(x)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let fe=0,Le=ie.length;fe<Le;fe++){const De=ie[fe],oe=i.get(De);let Se=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Se=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,oe.__webglTexture),$e(Se,De),Ee(O.__webglFramebuffer,T,De,n.COLOR_ATTACHMENT0+fe,Se,0),m(De)&&d(Se)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(fe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,q.__webglTexture),$e(fe,x),x.mipmaps&&x.mipmaps.length>0)for(let Le=0;Le<x.mipmaps.length;Le++)Ee(O.__webglFramebuffer[Le],T,x,n.COLOR_ATTACHMENT0,fe,Le);else Ee(O.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,fe,0);m(x)&&d(fe),t.unbindTexture()}T.depthBuffer&&Ze(T)}function Q(T){const x=T.textures;for(let O=0,q=x.length;O<q;O++){const ie=x[O];if(m(ie)){const Y=M(T),Ne=i.get(ie).__webglTexture;t.bindTexture(Y,Ne),d(Y),t.unbindTexture()}}}const K=[],$=[];function j(T){if(T.samples>0){if(ne(T)===!1){const x=T.textures,O=T.width,q=T.height;let ie=n.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ne=i.get(T),fe=x.length>1;if(fe)for(let De=0;De<x.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const Le=T.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let De=0;De<x.length;De++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ne.__webglColorRenderbuffer[De]);const oe=i.get(x[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,O,q,0,0,O,q,ie,n.NEAREST),l===!0&&(K.length=0,$.length=0,K.push(n.COLOR_ATTACHMENT0+De),T.depthBuffer&&T.resolveDepthBuffer===!1&&(K.push(Y),$.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let De=0;De<x.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,Ne.__webglColorRenderbuffer[De]);const oe=i.get(x[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ce(T){return Math.min(s.maxSamples,T.samples)}function ne(T){const x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function re(T){const x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Be(T,x){const O=T.colorSpace,q=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==O0&&O!==bi&&(ft.getTransfer(O)===vt?(q!==Nn||ie!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function ze(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=ct,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ne}function e5(n,e){function t(i,s=bi){let r;const o=ft.getTransfer(s);if(i===Zn)return n.UNSIGNED_BYTE;if(i===ll)return n.UNSIGNED_SHORT_4_4_4_4;if(i===cl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Uh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Nh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Dh)return n.BYTE;if(i===Ih)return n.SHORT;if(i===Ss)return n.UNSIGNED_SHORT;if(i===al)return n.INT;if(i===Qi)return n.UNSIGNED_INT;if(i===ci)return n.FLOAT;if(i===Bs)return n.HALF_FLOAT;if(i===Fh)return n.ALPHA;if(i===Oh)return n.RGB;if(i===Nn)return n.RGBA;if(i===Es)return n.DEPTH_COMPONENT;if(i===bs)return n.DEPTH_STENCIL;if(i===Bh)return n.RED;if(i===hl)return n.RED_INTEGER;if(i===zh)return n.RG;if(i===ul)return n.RG_INTEGER;if(i===dl)return n.RGBA_INTEGER;if(i===Ar||i===Cr||i===Rr||i===Pr)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===da||i===fa||i===pa||i===ma)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ga||i===_a||i===va)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ga||i===_a)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===va)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xa||i===ya||i===Sa||i===Ma||i===Ea||i===ba||i===wa||i===Ta||i===Aa||i===Ca||i===Ra||i===Pa||i===La||i===Da)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ya)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ma)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ea)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ba)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ta)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Aa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ca)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ra)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===La)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Da)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ia||i===Ua||i===Na)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ia)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ua)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Na)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fa||i===Oa||i===Ba||i===za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Oa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ms?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const t5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n5=`
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

}`;class i5{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Jh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ai({vertexShader:t5,fragmentShader:n5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new Pi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s5 extends s0{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new i5,d={},M=t.getContextAttributes();let y=null,v=null;const C=[],S=[],A=new se;let L=null;const w=new An;w.viewport=new Nt;const E=new An;E.viewport=new Nt;const D=[w,E],B=new Mp;let z=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let te=C[J];return te===void 0&&(te=new Lo,C[J]=te),te.getTargetRaySpace()},this.getControllerGrip=function(J){let te=C[J];return te===void 0&&(te=new Lo,C[J]=te),te.getGripSpace()},this.getHand=function(J){let te=C[J];return te===void 0&&(te=new Lo,C[J]=te),te.getHandSpace()};function V(J){const te=S.indexOf(J.inputSource);if(te===-1)return;const Ee=C[te];Ee!==void 0&&(Ee.update(J.inputSource,J.frame,c||o),Ee.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Z);for(let J=0;J<C.length;J++){const te=S[J];te!==null&&(S[J]=null,C[J].disconnect(te))}z=null,W=null,m.reset();for(const J in d)delete d[J];e.setRenderTarget(y),p=null,f=null,u=null,s=null,v=null,lt.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Z),M.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,de=null,me=null;M.depth&&(me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=M.stencil?bs:Es,de=M.stencil?Ms:Qi);const Ze={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ze),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new t0(f.textureWidth,f.textureHeight,{format:Nn,type:Zn,depthTexture:new Kh(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Ee={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new t0(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(J){for(let te=0;te<J.removed.length;te++){const Ee=J.removed[te],de=S.indexOf(Ee);de>=0&&(S[de]=null,C[de].disconnect(Ee))}for(let te=0;te<J.added.length;te++){const Ee=J.added[te];let de=S.indexOf(Ee);if(de===-1){for(let Ze=0;Ze<C.length;Ze++)if(Ze>=S.length){S.push(Ee),de=Ze;break}else if(S[Ze]===null){S[Ze]=Ee,de=Ze;break}if(de===-1)break}const me=C[de];me&&me.connect(Ee)}}const G=new R,ue=new R;function ve(J,te,Ee){G.setFromMatrixPosition(te.matrixWorld),ue.setFromMatrixPosition(Ee.matrixWorld);const de=G.distanceTo(ue),me=te.projectionMatrix.elements,Ze=Ee.projectionMatrix.elements,ct=me[14]/(me[10]-1),P=me[14]/(me[10]+1),Q=(me[9]+1)/me[5],K=(me[9]-1)/me[5],$=(me[8]-1)/me[0],j=(Ze[8]+1)/Ze[0],ce=ct*$,ne=ct*j,re=de/(-$+j),Be=re*-$;if(te.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Be),J.translateZ(re),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),me[10]===-1)J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const ze=ct+re,T=P+re,x=ce-Be,O=ne+(de-Be),q=Q*P/T*ze,ie=K*P/T*ze;J.projectionMatrix.makePerspective(x,O,q,ie,ze,T),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Te(J,te){te===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(te.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let te=J.near,Ee=J.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),B.near=E.near=w.near=te,B.far=E.far=w.far=Ee,(z!==B.near||W!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),z=B.near,W=B.far),B.layers.mask=J.layers.mask|6,w.layers.mask=B.layers.mask&3,E.layers.mask=B.layers.mask&5;const de=J.parent,me=B.cameras;Te(B,de);for(let Ze=0;Ze<me.length;Ze++)Te(me[Ze],de);me.length===2?ve(B,w,E):B.projectionMatrix.copy(w.projectionMatrix),$e(J,B,de)};function $e(J,te,Ee){Ee===null?J.matrix.copy(te.matrixWorld):(J.matrix.copy(Ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(te.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ws*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(J){return d[J]};let st=null;function ut(J,te){if(h=te.getViewerPose(c||o),g=te,h!==null){const Ee=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let de=!1;Ee.length!==B.cameras.length&&(B.cameras.length=0,de=!0);for(let P=0;P<Ee.length;P++){const Q=Ee[P];let K=null;if(p!==null)K=p.getViewport(Q);else{const j=u.getViewSubImage(f,Q);K=j.viewport,P===0&&(e.setRenderTargetTextures(v,j.colorTexture,j.depthStencilTexture),e.setRenderTarget(v))}let $=D[P];$===void 0&&($=new An,$.layers.enable(P),$.viewport=new Nt,D[P]=$),$.matrix.fromArray(Q.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(Q.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(K.x,K.y,K.width,K.height),P===0&&(B.matrix.copy($.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),de===!0&&B.cameras.push($)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const P=u.getDepthInformation(Ee[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(me&&me.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let P=0;P<Ee.length;P++){const Q=Ee[P].camera;if(Q){let K=d[Q];K||(K=new Jh,d[Q]=K);const $=u.getCameraImage(Q);K.sourceTexture=$}}}}for(let Ee=0;Ee<C.length;Ee++){const de=S[Ee],me=C[Ee];de!==null&&me!==void 0&&me.update(de,te,c||o)}st&&st(J,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const lt=new uu;lt.setAnimationLoop(ut),this.setAnimationLoop=function(J){st=J},this.dispose=function(){}}}const zi=new fn,r5=new Mt;function o5(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,qh(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,y,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,M,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===dn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===dn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=e.get(d),y=M.envMap,v=M.envMapRotation;y&&(m.envMap.value=y,zi.copy(v),zi.x*=-1,zi.y*=-1,zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),m.envMapRotation.value.setFromMatrix4(r5.makeRotationFromEuler(zi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===dn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function a5(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const v=y.program;i.uniformBlockBinding(M,v)}function c(M,y){let v=s[M.id];v===void 0&&(g(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",m));const C=y.program;i.updateUBOMapping(M,C);const S=e.render.frame;r[M.id]!==S&&(f(M),r[M.id]=S)}function h(M){const y=u();M.__bindingPointIndex=y;const v=n.createBuffer(),C=M.__size,S=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,C,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=s[M.id],v=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let S=0,A=v.length;S<A;S++){const L=Array.isArray(v[S])?v[S]:[v[S]];for(let w=0,E=L.length;w<E;w++){const D=L[w];if(p(D,S,w,C)===!0){const B=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let V=0;V<z.length;V++){const X=z[V],Z=_(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,B+W,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,y,v,C){const S=M.value,A=y+"_"+v;if(C[A]===void 0)return typeof S=="number"||typeof S=="boolean"?C[A]=S:C[A]=S.clone(),!0;{const L=C[A];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return C[A]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function g(M){const y=M.uniforms;let v=0;const C=16;for(let A=0,L=y.length;A<L;A++){const w=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,D=w.length;E<D;E++){const B=w[E],z=Array.isArray(B.value)?B.value:[B.value];for(let W=0,V=z.length;W<V;W++){const X=z[W],Z=_(X),G=v%C,ue=G%Z.boundary,ve=G+ue;v+=ue,ve!==0&&C-ve<Z.storage&&(v+=C-ve),B.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=Z.storage}}}const S=v%C;return S>0&&(v+=C-S),M.__size=v,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class l5{constructor(e={}){const{canvas:t=Jd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let C=!1;this._outputColorSpace=Wt;let S=0,A=0,L=null,w=-1,E=null;const D=new Nt,B=new Nt;let z=null;const W=new je(0);let V=0,X=t.width,Z=t.height,G=1,ue=null,ve=null;const Te=new Nt(0,0,X,Z),$e=new Nt(0,0,X,Z);let st=!1;const ut=new vl;let lt=!1,J=!1;const te=new Mt,Ee=new R,de=new Nt,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function ct(){return L===null?G:1}let P=i;function Q(b,N){return t.getContext(b,N)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rl}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",ae,!1),P===null){const N="webgl2";if(P=Q(N,b),P===null)throw Q(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let K,$,j,ce,ne,re,Be,ze,T,x,O,q,ie,Y,Ne,fe,Le,De,oe,Se,Xe,Fe,xe,Qe;function U(){K=new v2(P),K.init(),Fe=new e5(P,K),$=new u2(P,K,e,Fe),j=new Jg(P,K),$.reversedDepthBuffer&&f&&j.buffers.depth.setReversed(!0),ce=new S2(P),ne=new zg,re=new Qg(P,K,j,ne,$,Fe,ce),Be=new f2(v),ze=new _2(v),T=new Ap(P),xe=new c2(P,T),x=new x2(P,T,ce,xe),O=new E2(P,x,T,ce),oe=new M2(P,$,re),fe=new d2(ne),q=new Bg(v,Be,ze,K,$,xe,fe),ie=new o5(v,ne),Y=new Hg,Ne=new Yg(K),De=new l2(v,Be,ze,j,O,p,l),Le=new Zg(v,O,$),Qe=new a5(P,ce,$,j),Se=new h2(P,K,ce),Xe=new y2(P,K,ce),ce.programs=q.programs,v.capabilities=$,v.extensions=K,v.properties=ne,v.renderLists=Y,v.shadowMap=Le,v.state=j,v.info=ce}U();const he=new s5(v,P);this.xr=he,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=K.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=K.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(X,Z,!1))},this.getSize=function(b){return b.set(X,Z)},this.setSize=function(b,N,k=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,Z=N,t.width=Math.floor(b*G),t.height=Math.floor(N*G),k===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(X*G,Z*G).floor()},this.setDrawingBufferSize=function(b,N,k){X=b,Z=N,G=k,t.width=Math.floor(b*k),t.height=Math.floor(N*k),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(Te)},this.setViewport=function(b,N,k,H){b.isVector4?Te.set(b.x,b.y,b.z,b.w):Te.set(b,N,k,H),j.viewport(D.copy(Te).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy($e)},this.setScissor=function(b,N,k,H){b.isVector4?$e.set(b.x,b.y,b.z,b.w):$e.set(b,N,k,H),j.scissor(B.copy($e).multiplyScalar(G).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(b){j.setScissorTest(st=b)},this.setOpaqueSort=function(b){ue=b},this.setTransparentSort=function(b){ve=b},this.getClearColor=function(b){return b.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,k=!0){let H=0;if(b){let F=!1;if(L!==null){const le=L.texture.format;F=le===dl||le===ul||le===hl}if(F){const le=L.texture.type,ye=le===Zn||le===Qi||le===Ss||le===Ms||le===ll||le===cl,Re=De.getClearColor(),Ae=De.getClearAlpha(),We=Re.r,Ye=Re.g,ke=Re.b;ye?(g[0]=We,g[1]=Ye,g[2]=ke,g[3]=Ae,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=We,_[1]=Ye,_[2]=ke,_[3]=Ae,P.clearBufferiv(P.COLOR,0,_))}else H|=P.COLOR_BUFFER_BIT}N&&(H|=P.DEPTH_BUFFER_BIT),k&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),De.dispose(),Y.dispose(),Ne.dispose(),ne.dispose(),Be.dispose(),ze.dispose(),O.dispose(),xe.dispose(),Qe.dispose(),q.dispose(),he.dispose(),he.removeEventListener("sessionstart",zn),he.removeEventListener("sessionend",Yl),Di.stop()};function pe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const b=ce.autoReset,N=Le.enabled,k=Le.autoUpdate,H=Le.needsUpdate,F=Le.type;U(),ce.autoReset=b,Le.enabled=N,Le.autoUpdate=k,Le.needsUpdate=H,Le.type=F}function ae(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ee(b){const N=b.target;N.removeEventListener("dispose",ee),Ie(N)}function Ie(b){Ke(b),ne.remove(b)}function Ke(b){const N=ne.get(b).programs;N!==void 0&&(N.forEach(function(k){q.releaseProgram(k)}),b.isShaderMaterial&&q.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,k,H,F,le){N===null&&(N=me);const ye=F.isMesh&&F.matrixWorld.determinant()<0,Re=Gu(b,N,k,H,F);j.setMaterial(H,ye);let Ae=k.index,We=1;if(H.wireframe===!0){if(Ae=x.getWireframeAttribute(k),Ae===void 0)return;We=2}const Ye=k.drawRange,ke=k.attributes.position;let ot=Ye.start*We,_t=(Ye.start+Ye.count)*We;le!==null&&(ot=Math.max(ot,le.start*We),_t=Math.min(_t,(le.start+le.count)*We)),Ae!==null?(ot=Math.max(ot,0),_t=Math.min(_t,Ae.count)):ke!=null&&(ot=Math.max(ot,0),_t=Math.min(_t,ke.count));const Ut=_t-ot;if(Ut<0||Ut===1/0)return;xe.setup(F,H,Re,k,Ae);let At,bt=Se;if(Ae!==null&&(At=T.get(Ae),bt=Xe,bt.setIndex(At)),F.isMesh)H.wireframe===!0?(j.setLineWidth(H.wireframeLinewidth*ct()),bt.setMode(P.LINES)):bt.setMode(P.TRIANGLES);else if(F.isLine){let Ve=H.linewidth;Ve===void 0&&(Ve=1),j.setLineWidth(Ve*ct()),F.isLineSegments?bt.setMode(P.LINES):F.isLineLoop?bt.setMode(P.LINE_LOOP):bt.setMode(P.LINE_STRIP)}else F.isPoints?bt.setMode(P.POINTS):F.isSprite&&bt.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)As("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))bt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ve=F._multiDrawStarts,Rt=F._multiDrawCounts,dt=F._multiDrawCount,mn=Ae?T.get(Ae).bytesPerElement:1,r0=ne.get(H).currentProgram.getUniforms();for(let gn=0;gn<dt;gn++)r0.setValue(P,"_gl_DrawID",gn),bt.render(Ve[gn]/mn,Rt[gn])}else if(F.isInstancedMesh)bt.renderInstances(ot,Ut,F.count);else if(k.isInstancedBufferGeometry){const Ve=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Rt=Math.min(k.instanceCount,Ve);bt.renderInstances(ot,Ut,Rt)}else bt.render(ot,Ut)};function Tt(b,N,k){b.transparent===!0&&b.side===Gn&&b.forceSinglePass===!1?(b.side=dn,b.needsUpdate=!0,Ys(b,N,k),b.side=di,b.needsUpdate=!0,Ys(b,N,k),b.side=Gn):Ys(b,N,k)}this.compile=function(b,N,k=null){k===null&&(k=b),d=Ne.get(k),d.init(N),y.push(d),k.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),b!==k&&b.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const H=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const le=F.material;if(le)if(Array.isArray(le))for(let ye=0;ye<le.length;ye++){const Re=le[ye];Tt(Re,k,F),H.add(Re)}else Tt(le,k,F),H.add(le)}),d=y.pop(),H},this.compileAsync=function(b,N,k=null){const H=this.compile(b,N,k);return new Promise(F=>{function le(){if(H.forEach(function(ye){ne.get(ye).currentProgram.isReady()&&H.delete(ye)}),H.size===0){F(b);return}setTimeout(le,10)}K.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let mt=null;function Qn(b){mt&&mt(b)}function zn(){Di.stop()}function Yl(){Di.start()}const Di=new uu;Di.setAnimationLoop(Qn),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(b){mt=b,he.setAnimationLoop(b),b===null?Di.stop():Di.start()},he.addEventListener("sessionstart",zn),he.addEventListener("sessionend",Yl),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(N),N=he.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,N,L),d=Ne.get(b,y.length),d.init(N),y.push(d),te.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ut.setFromProjectionMatrix(te,Xn,N.reversedDepth),J=this.localClippingEnabled,lt=fe.init(this.clippingPlanes,J),m=Y.get(b,M.length),m.init(),M.push(m),he.enabled===!0&&he.isPresenting===!0){const le=v.xr.getDepthSensingMesh();le!==null&&ao(le,N,-1/0,v.sortObjects)}ao(b,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ue,ve),Ze=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Ze&&De.addToRenderList(m,b),this.info.render.frame++,lt===!0&&fe.beginShadows();const k=d.state.shadowsArray;Le.render(k,b,N),lt===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,F=m.transmissive;if(d.setupLights(),N.isArrayCamera){const le=N.cameras;if(F.length>0)for(let ye=0,Re=le.length;ye<Re;ye++){const Ae=le[ye];$l(H,F,b,Ae)}Ze&&De.render(b);for(let ye=0,Re=le.length;ye<Re;ye++){const Ae=le[ye];jl(m,b,Ae,Ae.viewport)}}else F.length>0&&$l(H,F,b,N),Ze&&De.render(b),jl(m,b,N);L!==null&&A===0&&(re.updateMultisampleRenderTarget(L),re.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(v,b,N),xe.resetDefaultState(),w=-1,E=null,y.pop(),y.length>0?(d=y[y.length-1],lt===!0&&fe.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function ao(b,N,k,H){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ut.intersectsSprite(b)){H&&de.setFromMatrixPosition(b.matrixWorld).applyMatrix4(te);const ye=O.update(b),Re=b.material;Re.visible&&m.push(b,ye,Re,k,de.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ut.intersectsObject(b))){const ye=O.update(b),Re=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),de.copy(b.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),de.copy(ye.boundingSphere.center)),de.applyMatrix4(b.matrixWorld).applyMatrix4(te)),Array.isArray(Re)){const Ae=ye.groups;for(let We=0,Ye=Ae.length;We<Ye;We++){const ke=Ae[We],ot=Re[ke.materialIndex];ot&&ot.visible&&m.push(b,ye,ot,k,de.z,ke)}}else Re.visible&&m.push(b,ye,Re,k,de.z,null)}}const le=b.children;for(let ye=0,Re=le.length;ye<Re;ye++)ao(le[ye],N,k,H)}function jl(b,N,k,H){const F=b.opaque,le=b.transmissive,ye=b.transparent;d.setupLightsView(k),lt===!0&&fe.setGlobalState(v.clippingPlanes,k),H&&j.viewport(D.copy(H)),F.length>0&&qs(F,N,k),le.length>0&&qs(le,N,k),ye.length>0&&qs(ye,N,k),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function $l(b,N,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new t0(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?Bs:Zn,minFilter:Zi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const le=d.state.transmissionRenderTarget[H.id],ye=H.viewport||D;le.setSize(ye.z*v.transmissionResolutionScale,ye.w*v.transmissionResolutionScale);const Re=v.getRenderTarget(),Ae=v.getActiveCubeFace(),We=v.getActiveMipmapLevel();v.setRenderTarget(le),v.getClearColor(W),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),Ze&&De.render(k);const Ye=v.toneMapping;v.toneMapping=Ti;const ke=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),lt===!0&&fe.setGlobalState(v.clippingPlanes,H),qs(b,k,H),re.updateMultisampleRenderTarget(le),re.updateRenderTargetMipmap(le),K.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let _t=0,Ut=N.length;_t<Ut;_t++){const At=N[_t],bt=At.object,Ve=At.geometry,Rt=At.material,dt=At.group;if(Rt.side===Gn&&bt.layers.test(H.layers)){const mn=Rt.side;Rt.side=dn,Rt.needsUpdate=!0,Zl(bt,k,H,Ve,Rt,dt),Rt.side=mn,Rt.needsUpdate=!0,ot=!0}}ot===!0&&(re.updateMultisampleRenderTarget(le),re.updateRenderTargetMipmap(le))}v.setRenderTarget(Re,Ae,We),v.setClearColor(W,V),ke!==void 0&&(H.viewport=ke),v.toneMapping=Ye}function qs(b,N,k){const H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,le=b.length;F<le;F++){const ye=b[F],Re=ye.object,Ae=ye.geometry,We=ye.group;let Ye=ye.material;Ye.allowOverride===!0&&H!==null&&(Ye=H),Re.layers.test(k.layers)&&Zl(Re,N,k,Ae,Ye,We)}}function Zl(b,N,k,H,F,le){b.onBeforeRender(v,N,k,H,F,le),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(v,N,k,H,b,le),F.transparent===!0&&F.side===Gn&&F.forceSinglePass===!1?(F.side=dn,F.needsUpdate=!0,v.renderBufferDirect(k,N,H,F,b,le),F.side=di,F.needsUpdate=!0,v.renderBufferDirect(k,N,H,F,b,le),F.side=Gn):v.renderBufferDirect(k,N,H,F,b,le),b.onAfterRender(v,N,k,H,F,le)}function Ys(b,N,k){N.isScene!==!0&&(N=me);const H=ne.get(b),F=d.state.lights,le=d.state.shadowsArray,ye=F.state.version,Re=q.getParameters(b,F.state,le,N,k),Ae=q.getProgramCacheKey(Re);let We=H.programs;H.environment=b.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(b.isMeshStandardMaterial?ze:Be).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,We===void 0&&(b.addEventListener("dispose",ee),We=new Map,H.programs=We);let Ye=We.get(Ae);if(Ye!==void 0){if(H.currentProgram===Ye&&H.lightsStateVersion===ye)return Jl(b,Re),Ye}else Re.uniforms=q.getUniforms(b),b.onBeforeCompile(Re,v),Ye=q.acquireProgram(Re,Ae),We.set(Ae,Ye),H.uniforms=Re.uniforms;const ke=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ke.clippingPlanes=fe.uniform),Jl(b,Re),H.needsLights=Xu(b),H.lightsStateVersion=ye,H.needsLights&&(ke.ambientLightColor.value=F.state.ambient,ke.lightProbe.value=F.state.probe,ke.directionalLights.value=F.state.directional,ke.directionalLightShadows.value=F.state.directionalShadow,ke.spotLights.value=F.state.spot,ke.spotLightShadows.value=F.state.spotShadow,ke.rectAreaLights.value=F.state.rectArea,ke.ltc_1.value=F.state.rectAreaLTC1,ke.ltc_2.value=F.state.rectAreaLTC2,ke.pointLights.value=F.state.point,ke.pointLightShadows.value=F.state.pointShadow,ke.hemisphereLights.value=F.state.hemi,ke.directionalShadowMap.value=F.state.directionalShadowMap,ke.directionalShadowMatrix.value=F.state.directionalShadowMatrix,ke.spotShadowMap.value=F.state.spotShadowMap,ke.spotLightMatrix.value=F.state.spotLightMatrix,ke.spotLightMap.value=F.state.spotLightMap,ke.pointShadowMap.value=F.state.pointShadowMap,ke.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Ye,H.uniformsList=null,Ye}function Kl(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Lr.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Jl(b,N){const k=ne.get(b);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function Gu(b,N,k,H,F){N.isScene!==!0&&(N=me),re.resetTextureUnits();const le=N.fog,ye=H.isMeshStandardMaterial?N.environment:null,Re=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:O0,Ae=(H.isMeshStandardMaterial?ze:Be).get(H.envMap||ye),We=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ye=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ke=!!k.morphAttributes.position,ot=!!k.morphAttributes.normal,_t=!!k.morphAttributes.color;let Ut=Ti;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ut=v.toneMapping);const At=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,bt=At!==void 0?At.length:0,Ve=ne.get(H),Rt=d.state.lights;if(lt===!0&&(J===!0||b!==E)){const on=b===E&&H.id===w;fe.setState(H,b,on)}let dt=!1;H.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Rt.state.version||Ve.outputColorSpace!==Re||F.isBatchedMesh&&Ve.batching===!1||!F.isBatchedMesh&&Ve.batching===!0||F.isBatchedMesh&&Ve.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ve.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ve.instancing===!1||!F.isInstancedMesh&&Ve.instancing===!0||F.isSkinnedMesh&&Ve.skinning===!1||!F.isSkinnedMesh&&Ve.skinning===!0||F.isInstancedMesh&&Ve.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ve.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ve.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ve.instancingMorph===!1&&F.morphTexture!==null||Ve.envMap!==Ae||H.fog===!0&&Ve.fog!==le||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==fe.numPlanes||Ve.numIntersection!==fe.numIntersection)||Ve.vertexAlphas!==We||Ve.vertexTangents!==Ye||Ve.morphTargets!==ke||Ve.morphNormals!==ot||Ve.morphColors!==_t||Ve.toneMapping!==Ut||Ve.morphTargetsCount!==bt)&&(dt=!0):(dt=!0,Ve.__version=H.version);let mn=Ve.currentProgram;dt===!0&&(mn=Ys(H,N,F));let r0=!1,gn=!1,Y0=!1;const Pt=mn.getUniforms(),Mn=Ve.uniforms;if(j.useProgram(mn.program)&&(r0=!0,gn=!0,Y0=!0),H.id!==w&&(w=H.id,gn=!0),r0||E!==b){j.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Pt.setValue(P,"projectionMatrix",b.projectionMatrix),Pt.setValue(P,"viewMatrix",b.matrixWorldInverse);const hn=Pt.map.cameraPosition;hn!==void 0&&hn.setValue(P,Ee.setFromMatrixPosition(b.matrixWorld)),$.logarithmicDepthBuffer&&Pt.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Pt.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,gn=!0,Y0=!0)}if(F.isSkinnedMesh){Pt.setOptional(P,F,"bindMatrix"),Pt.setOptional(P,F,"bindMatrixInverse");const on=F.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Pt.setValue(P,"boneTexture",on.boneTexture,re))}F.isBatchedMesh&&(Pt.setOptional(P,F,"batchingTexture"),Pt.setValue(P,"batchingTexture",F._matricesTexture,re),Pt.setOptional(P,F,"batchingIdTexture"),Pt.setValue(P,"batchingIdTexture",F._indirectTexture,re),Pt.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&Pt.setValue(P,"batchingColorTexture",F._colorsTexture,re));const En=k.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&oe.update(F,k,mn),(gn||Ve.receiveShadow!==F.receiveShadow)&&(Ve.receiveShadow=F.receiveShadow,Pt.setValue(P,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Mn.envMap.value=Ae,Mn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Mn.envMapIntensity.value=N.environmentIntensity),gn&&(Pt.setValue(P,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&Wu(Mn,Y0),le&&H.fog===!0&&ie.refreshFogUniforms(Mn,le),ie.refreshMaterialUniforms(Mn,H,G,Z,d.state.transmissionRenderTarget[b.id]),Lr.upload(P,Kl(Ve),Mn,re)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Lr.upload(P,Kl(Ve),Mn,re),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Pt.setValue(P,"center",F.center),Pt.setValue(P,"modelViewMatrix",F.modelViewMatrix),Pt.setValue(P,"normalMatrix",F.normalMatrix),Pt.setValue(P,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const on=H.uniformsGroups;for(let hn=0,lo=on.length;hn<lo;hn++){const Ii=on[hn];Qe.update(Ii,mn),Qe.bind(Ii,mn)}}return mn}function Wu(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Xu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,N,k){const H=ne.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ne.get(b.texture).__webglTexture=N,ne.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:k,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){const k=ne.get(b);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0};const qu=P.createFramebuffer();this.setRenderTarget=function(b,N=0,k=0){L=b,S=N,A=k;let H=!0,F=null,le=!1,ye=!1;if(b){const Ae=ne.get(b);if(Ae.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(Ae.__webglFramebuffer===void 0)re.setupRenderTarget(b);else if(Ae.__hasExternalTextures)re.rebindTextures(b,ne.get(b.texture).__webglTexture,ne.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ke=b.depthTexture;if(Ae.__boundDepthTexture!==ke){if(ke!==null&&ne.has(ke)&&(b.width!==ke.image.width||b.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(b)}}const We=b.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(ye=!0);const Ye=ne.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ye[N])?F=Ye[N][k]:F=Ye[N],le=!0):b.samples>0&&re.useMultisampledRTT(b)===!1?F=ne.get(b).__webglMultisampledFramebuffer:Array.isArray(Ye)?F=Ye[k]:F=Ye,D.copy(b.viewport),B.copy(b.scissor),z=b.scissorTest}else D.copy(Te).multiplyScalar(G).floor(),B.copy($e).multiplyScalar(G).floor(),z=st;if(k!==0&&(F=qu),j.bindFramebuffer(P.FRAMEBUFFER,F)&&H&&j.drawBuffers(b,F),j.viewport(D),j.scissor(B),j.setScissorTest(z),le){const Ae=ne.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ae.__webglTexture,k)}else if(ye){const Ae=N;for(let We=0;We<b.textures.length;We++){const Ye=ne.get(b.textures[We]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+We,Ye.__webglTexture,k,Ae)}}else if(b!==null&&k!==0){const Ae=ne.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ae.__webglTexture,k)}w=-1},this.readRenderTargetPixels=function(b,N,k,H,F,le,ye,Re=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){j.bindFramebuffer(P.FRAMEBUFFER,Ae);try{const We=b.textures[Re],Ye=We.format,ke=We.type;if(!$.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-H&&k>=0&&k<=b.height-F&&(b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Re),P.readPixels(N,k,H,F,Fe.convert(Ye),Fe.convert(ke),le))}finally{const We=L!==null?ne.get(L).__webglFramebuffer:null;j.bindFramebuffer(P.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(b,N,k,H,F,le,ye,Re=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae)if(N>=0&&N<=b.width-H&&k>=0&&k<=b.height-F){j.bindFramebuffer(P.FRAMEBUFFER,Ae);const We=b.textures[Re],Ye=We.format,ke=We.type;if(!$.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ot),P.bufferData(P.PIXEL_PACK_BUFFER,le.byteLength,P.STREAM_READ),b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Re),P.readPixels(N,k,H,F,Fe.convert(Ye),Fe.convert(ke),0);const _t=L!==null?ne.get(L).__webglFramebuffer:null;j.bindFramebuffer(P.FRAMEBUFFER,_t);const Ut=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Qd(P,Ut,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ot),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,le),P.deleteBuffer(ot),P.deleteSync(Ut),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,k=0){const H=Math.pow(2,-k),F=Math.floor(b.image.width*H),le=Math.floor(b.image.height*H),ye=N!==null?N.x:0,Re=N!==null?N.y:0;re.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,ye,Re,F,le),j.unbindTexture()};const Yu=P.createFramebuffer(),ju=P.createFramebuffer();this.copyTextureToTexture=function(b,N,k=null,H=null,F=0,le=null){le===null&&(F!==0?(As("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=F,F=0):le=0);let ye,Re,Ae,We,Ye,ke,ot,_t,Ut;const At=b.isCompressedTexture?b.mipmaps[le]:b.image;if(k!==null)ye=k.max.x-k.min.x,Re=k.max.y-k.min.y,Ae=k.isBox3?k.max.z-k.min.z:1,We=k.min.x,Ye=k.min.y,ke=k.isBox3?k.min.z:0;else{const En=Math.pow(2,-F);ye=Math.floor(At.width*En),Re=Math.floor(At.height*En),b.isDataArrayTexture?Ae=At.depth:b.isData3DTexture?Ae=Math.floor(At.depth*En):Ae=1,We=0,Ye=0,ke=0}H!==null?(ot=H.x,_t=H.y,Ut=H.z):(ot=0,_t=0,Ut=0);const bt=Fe.convert(N.format),Ve=Fe.convert(N.type);let Rt;N.isData3DTexture?(re.setTexture3D(N,0),Rt=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(re.setTexture2DArray(N,0),Rt=P.TEXTURE_2D_ARRAY):(re.setTexture2D(N,0),Rt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const dt=P.getParameter(P.UNPACK_ROW_LENGTH),mn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),r0=P.getParameter(P.UNPACK_SKIP_PIXELS),gn=P.getParameter(P.UNPACK_SKIP_ROWS),Y0=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,At.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,At.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,We),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ye),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ke);const Pt=b.isDataArrayTexture||b.isData3DTexture,Mn=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){const En=ne.get(b),on=ne.get(N),hn=ne.get(En.__renderTarget),lo=ne.get(on.__renderTarget);j.bindFramebuffer(P.READ_FRAMEBUFFER,hn.__webglFramebuffer),j.bindFramebuffer(P.DRAW_FRAMEBUFFER,lo.__webglFramebuffer);for(let Ii=0;Ii<Ae;Ii++)Pt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ne.get(b).__webglTexture,F,ke+Ii),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ne.get(N).__webglTexture,le,Ut+Ii)),P.blitFramebuffer(We,Ye,ye,Re,ot,_t,ye,Re,P.DEPTH_BUFFER_BIT,P.NEAREST);j.bindFramebuffer(P.READ_FRAMEBUFFER,null),j.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(F!==0||b.isRenderTargetTexture||ne.has(b)){const En=ne.get(b),on=ne.get(N);j.bindFramebuffer(P.READ_FRAMEBUFFER,Yu),j.bindFramebuffer(P.DRAW_FRAMEBUFFER,ju);for(let hn=0;hn<Ae;hn++)Pt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,En.__webglTexture,F,ke+hn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,En.__webglTexture,F),Mn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,on.__webglTexture,le,Ut+hn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,on.__webglTexture,le),F!==0?P.blitFramebuffer(We,Ye,ye,Re,ot,_t,ye,Re,P.COLOR_BUFFER_BIT,P.NEAREST):Mn?P.copyTexSubImage3D(Rt,le,ot,_t,Ut+hn,We,Ye,ye,Re):P.copyTexSubImage2D(Rt,le,ot,_t,We,Ye,ye,Re);j.bindFramebuffer(P.READ_FRAMEBUFFER,null),j.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Mn?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Rt,le,ot,_t,Ut,ye,Re,Ae,bt,Ve,At.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(Rt,le,ot,_t,Ut,ye,Re,Ae,bt,At.data):P.texSubImage3D(Rt,le,ot,_t,Ut,ye,Re,Ae,bt,Ve,At):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,le,ot,_t,ye,Re,bt,Ve,At.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,le,ot,_t,At.width,At.height,bt,At.data):P.texSubImage2D(P.TEXTURE_2D,le,ot,_t,ye,Re,bt,Ve,At);P.pixelStorei(P.UNPACK_ROW_LENGTH,dt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,r0),P.pixelStorei(P.UNPACK_SKIP_ROWS,gn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Y0),le===0&&N.generateMipmaps&&P.generateMipmap(Rt),j.unbindTexture()},this.initRenderTarget=function(b){ne.get(b).__webglFramebuffer===void 0&&re.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?re.setTextureCube(b,0):b.isData3DTexture?re.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?re.setTexture2DArray(b,0):re.setTexture2D(b,0),j.unbindTexture()},this.resetState=function(){S=0,A=0,L=null,j.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}const fh={type:"change"},Tl={type:"start"},gu={type:"end"},wr=new ks,ph=new Ei,c5=Math.cos(70*to.DEG2RAD),Vt=new R,un=2*Math.PI,yt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qo=1e-6;class h5 extends wp{constructor(e,t=null){super(e,t),this.state=yt.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:L0.ROTATE,MIDDLE:L0.DOLLY,RIGHT:L0.PAN},this.touches={ONE:A0.ROTATE,TWO:A0.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new e0,this._lastTargetPosition=new R,this._quat=new e0().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hc,this._sphericalDelta=new Hc,this._scale=1,this._panOffset=new R,this._rotateStart=new se,this._rotateEnd=new se,this._rotateDelta=new se,this._panStart=new se,this._panEnd=new se,this._panDelta=new se,this._dollyStart=new se,this._dollyEnd=new se,this._dollyDelta=new se,this._dollyDirection=new R,this._mouse=new se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=d5.bind(this),this._onPointerDown=u5.bind(this),this._onPointerUp=f5.bind(this),this._onContextMenu=y5.bind(this),this._onMouseWheel=g5.bind(this),this._onKeyDown=_5.bind(this),this._onTouchStart=v5.bind(this),this._onTouchMove=x5.bind(this),this._onMouseDown=p5.bind(this),this._onMouseMove=m5.bind(this),this._interceptControlDown=S5.bind(this),this._interceptControlUp=M5.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fh),this.update(),this.state=yt.NONE}update(e=null){const t=this.object.position;Vt.copy(t).sub(this.target),Vt.applyQuaternion(this._quat),this._spherical.setFromVector3(Vt),this.autoRotate&&this.state===yt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=un:i>Math.PI&&(i-=un),s<-Math.PI?s+=un:s>Math.PI&&(s-=un),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Vt.setFromSpherical(this._spherical),Vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Vt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(wr.origin.copy(this.object.position),wr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wr.direction))<c5?this.object.lookAt(this.target):(ph.setFromNormalAndCoplanarPoint(this.object.up,this.target),wr.intersectPlane(ph,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>qo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qo||this._lastTargetPosition.distanceToSquared(this.target)>qo?(this.dispatchEvent(fh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?un/60*this.autoRotateSpeed*e:un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Vt.setFromMatrixColumn(t,0),Vt.multiplyScalar(-e),this._panOffset.add(Vt)}_panUp(e,t){this.screenSpacePanning===!0?Vt.setFromMatrixColumn(t,1):(Vt.setFromMatrixColumn(t,0),Vt.crossVectors(this.object.up,Vt)),Vt.multiplyScalar(e),this._panOffset.add(Vt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Vt.copy(s).sub(this.target);let r=Vt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new se,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function u5(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function d5(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function f5(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gu),this.state=yt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function p5(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case L0.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=yt.DOLLY;break;case L0.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=yt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=yt.ROTATE}break;case L0.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=yt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=yt.PAN}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(Tl)}function m5(n){switch(this.state){case yt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case yt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function g5(n){this.enabled===!1||this.enableZoom===!1||this.state!==yt.NONE||(n.preventDefault(),this.dispatchEvent(Tl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(gu))}function _5(n){this.enabled!==!1&&this._handleKeyDown(n)}function v5(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case A0.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=yt.TOUCH_ROTATE;break;case A0.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=yt.TOUCH_PAN;break;default:this.state=yt.NONE}break;case 2:switch(this.touches.TWO){case A0.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=yt.TOUCH_DOLLY_PAN;break;case A0.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=yt.TOUCH_DOLLY_ROTATE;break;default:this.state=yt.NONE}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(Tl)}function x5(n){switch(this._trackPointer(n),this.state){case yt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case yt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case yt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case yt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=yt.NONE}}function y5(n){this.enabled!==!1&&n.preventDefault()}function S5(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function M5(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Al=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)},I=(n,e,t)=>(Al(n,e,"read from private field"),t?t.call(n):e.get(n)),it=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},Zt=(n,e,t,i)=>(Al(n,e,"write to private field"),e.set(n,t),t),E5=(n,e,t,i)=>({set _(s){Zt(n,e,s)},get _(){return I(n,e,i)}}),at=(n,e,t)=>(Al(n,e,"access private method"),t),ht=new Uint8Array(8),Kn=new DataView(ht.buffer),Gt=n=>[(n%256+256)%256],pt=n=>(Kn.setUint16(0,n,!1),[ht[0],ht[1]]),b5=n=>(Kn.setInt16(0,n,!1),[ht[0],ht[1]]),_u=n=>(Kn.setUint32(0,n,!1),[ht[1],ht[2],ht[3]]),we=n=>(Kn.setUint32(0,n,!1),[ht[0],ht[1],ht[2],ht[3]]),w5=n=>(Kn.setInt32(0,n,!1),[ht[0],ht[1],ht[2],ht[3]]),i0=n=>(Kn.setUint32(0,Math.floor(n/2**32),!1),Kn.setUint32(4,n,!1),[ht[0],ht[1],ht[2],ht[3],ht[4],ht[5],ht[6],ht[7]]),Cl=n=>(Kn.setInt16(0,2**8*n,!1),[ht[0],ht[1]]),Vn=n=>(Kn.setInt32(0,2**16*n,!1),[ht[0],ht[1],ht[2],ht[3]]),Yo=n=>(Kn.setInt32(0,2**30*n,!1),[ht[0],ht[1],ht[2],ht[3]]),Tn=(n,e=!1)=>{let t=Array(n.length).fill(null).map((i,s)=>n.charCodeAt(s));return e&&t.push(0),t},Xr=n=>n&&n[n.length-1],Rl=n=>{let e;for(let t of n)(!e||t.presentationTimestamp>e.presentationTimestamp)&&(e=t);return e},jn=(n,e,t=!0)=>{let i=n*e;return t?Math.round(i):i},vu=n=>{let e=n*(Math.PI/180),t=Math.cos(e),i=Math.sin(e);return[t,i,0,-i,t,0,0,0,1]},xu=vu(0),yu=n=>[Vn(n[0]),Vn(n[1]),Yo(n[2]),Vn(n[3]),Vn(n[4]),Yo(n[5]),Vn(n[6]),Vn(n[7]),Yo(n[8])],gs=n=>!n||typeof n!="object"?n:Array.isArray(n)?n.map(gs):Object.fromEntries(Object.entries(n).map(([e,t])=>[e,gs(t)])),k0=n=>n>=0&&n<2**32,Ht=(n,e,t)=>({type:n,contents:e&&new Uint8Array(e.flat(10)),children:t}),Ct=(n,e,t,i,s)=>Ht(n,[Gt(e),_u(t),i??[]],s),T5=n=>{let e=512;return n.fragmented?Ht("ftyp",[Tn("iso5"),we(e),Tn("iso5"),Tn("iso6"),Tn("mp41")]):Ht("ftyp",[Tn("isom"),we(e),Tn("isom"),n.holdsAvc?Tn("avc1"):[],Tn("mp41")])},Ya=n=>({type:"mdat",largeSize:n}),A5=n=>({type:"free",size:n}),Dr=(n,e,t=!1)=>Ht("moov",null,[C5(e,n),...n.map(i=>R5(i,e)),t?o3(n):null]),C5=(n,e)=>{let t=jn(Math.max(0,...e.filter(o=>o.samples.length>0).map(o=>{const a=Rl(o.samples);return a.presentationTimestamp+a.duration})),Za),i=Math.max(...e.map(o=>o.id))+1,s=!k0(n)||!k0(t),r=s?i0:we;return Ct("mvhd",+s,0,[r(n),r(n),we(Za),r(t),Vn(1),Cl(1),Array(10).fill(0),yu(xu),Array(24).fill(0),we(i)])},R5=(n,e)=>Ht("trak",null,[P5(n,e),L5(n,e)]),P5=(n,e)=>{let t=Rl(n.samples),i=jn(t?t.presentationTimestamp+t.duration:0,Za),s=!k0(e)||!k0(i),r=s?i0:we,o;return n.info.type==="video"?o=typeof n.info.rotation=="number"?vu(n.info.rotation):n.info.rotation:o=xu,Ct("tkhd",+s,3,[r(e),r(e),we(n.id),we(0),r(i),Array(8).fill(0),pt(0),pt(0),Cl(n.info.type==="audio"?1:0),pt(0),yu(o),Vn(n.info.type==="video"?n.info.width:0),Vn(n.info.type==="video"?n.info.height:0)])},L5=(n,e)=>Ht("mdia",null,[D5(n,e),I5(n.info.type==="video"?"vide":"soun"),U5(n)]),D5=(n,e)=>{let t=Rl(n.samples),i=jn(t?t.presentationTimestamp+t.duration:0,n.timescale),s=!k0(e)||!k0(i),r=s?i0:we;return Ct("mdhd",+s,0,[r(e),r(e),we(n.timescale),r(i),pt(21956),pt(0)])},I5=n=>Ct("hdlr",0,0,[Tn("mhlr"),Tn(n),we(0),we(0),we(0),Tn("mp4-muxer-hdlr",!0)]),U5=n=>Ht("minf",null,[n.info.type==="video"?N5():F5(),O5(),k5(n)]),N5=()=>Ct("vmhd",0,1,[pt(0),pt(0),pt(0),pt(0)]),F5=()=>Ct("smhd",0,0,[pt(0),pt(0)]),O5=()=>Ht("dinf",null,[B5()]),B5=()=>Ct("dref",0,0,[we(1)],[z5()]),z5=()=>Ct("url ",0,1),k5=n=>{const e=n.compositionTimeOffsetTable.length>1||n.compositionTimeOffsetTable.some(t=>t.sampleCompositionTimeOffset!==0);return Ht("stbl",null,[H5(n),e3(n),t3(n),n3(n),i3(n),s3(n),e?r3(n):null])},H5=n=>Ct("stsd",0,0,[we(1)],[n.info.type==="video"?V5(g3[n.info.codec],n):K5(v3[n.info.codec],n)]),V5=(n,e)=>Ht(n,[Array(6).fill(0),pt(1),pt(0),pt(0),Array(12).fill(0),pt(e.info.width),pt(e.info.height),we(4718592),we(4718592),we(0),pt(1),Array(32).fill(0),pt(24),b5(65535)],[_3[e.info.codec](e),e.info.decoderConfig.colorSpace?q5(e):null]),G5={bt709:1,bt470bg:5,smpte170m:6},W5={bt709:1,smpte170m:6,"iec61966-2-1":13},X5={rgb:0,bt709:1,bt470bg:5,smpte170m:6},q5=n=>Ht("colr",[Tn("nclx"),pt(G5[n.info.decoderConfig.colorSpace.primaries]),pt(W5[n.info.decoderConfig.colorSpace.transfer]),pt(X5[n.info.decoderConfig.colorSpace.matrix]),Gt((n.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),Y5=n=>n.info.decoderConfig&&Ht("avcC",[...new Uint8Array(n.info.decoderConfig.description)]),j5=n=>n.info.decoderConfig&&Ht("hvcC",[...new Uint8Array(n.info.decoderConfig.description)]),$5=n=>{if(!n.info.decoderConfig)return null;let e=n.info.decoderConfig;if(!e.colorSpace)throw new Error("'colorSpace' is required in the decoder config for VP9.");let t=e.codec.split("."),i=Number(t[1]),s=Number(t[2]),a=(Number(t[3])<<4)+(0<<1)+Number(e.colorSpace.fullRange);return Ct("vpcC",1,0,[Gt(i),Gt(s),Gt(a),Gt(2),Gt(2),Gt(2),pt(0)])},Z5=()=>{let t=(1<<7)+1;return Ht("av1C",[t,0,0,0])},K5=(n,e)=>Ht(n,[Array(6).fill(0),pt(1),pt(0),pt(0),we(0),pt(e.info.numberOfChannels),pt(16),pt(0),pt(0),Vn(e.info.sampleRate)],[x3[e.info.codec](e)]),J5=n=>{let e=new Uint8Array(n.info.decoderConfig.description);return Ct("esds",0,0,[we(58753152),Gt(32+e.byteLength),pt(1),Gt(0),we(75530368),Gt(18+e.byteLength),Gt(64),Gt(21),_u(0),we(130071),we(130071),we(92307584),Gt(e.byteLength),...e,we(109084800),Gt(1),Gt(2)])},Q5=n=>{let e=3840,t=0;const i=n.info.decoderConfig?.description;if(i){if(i.byteLength<18)throw new TypeError("Invalid decoder description provided for Opus; must be at least 18 bytes long.");const s=ArrayBuffer.isView(i)?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(i);e=s.getUint16(10,!0),t=s.getInt16(14,!0)}return Ht("dOps",[Gt(0),Gt(n.info.numberOfChannels),pt(e),we(n.info.sampleRate),Cl(t),Gt(0)])},e3=n=>Ct("stts",0,0,[we(n.timeToSampleTable.length),n.timeToSampleTable.map(e=>[we(e.sampleCount),we(e.sampleDelta)])]),t3=n=>{if(n.samples.every(t=>t.type==="key"))return null;let e=[...n.samples.entries()].filter(([,t])=>t.type==="key");return Ct("stss",0,0,[we(e.length),e.map(([t])=>we(t+1))])},n3=n=>Ct("stsc",0,0,[we(n.compactlyCodedChunkTable.length),n.compactlyCodedChunkTable.map(e=>[we(e.firstChunk),we(e.samplesPerChunk),we(1)])]),i3=n=>Ct("stsz",0,0,[we(0),we(n.samples.length),n.samples.map(e=>we(e.size))]),s3=n=>n.finalizedChunks.length>0&&Xr(n.finalizedChunks).offset>=2**32?Ct("co64",0,0,[we(n.finalizedChunks.length),n.finalizedChunks.map(e=>i0(e.offset))]):Ct("stco",0,0,[we(n.finalizedChunks.length),n.finalizedChunks.map(e=>we(e.offset))]),r3=n=>Ct("ctts",0,0,[we(n.compositionTimeOffsetTable.length),n.compositionTimeOffsetTable.map(e=>[we(e.sampleCount),we(e.sampleCompositionTimeOffset)])]),o3=n=>Ht("mvex",null,n.map(a3)),a3=n=>Ct("trex",0,0,[we(n.id),we(1),we(0),we(0),we(0)]),mh=(n,e)=>Ht("moof",null,[l3(n),...e.map(c3)]),l3=n=>Ct("mfhd",0,0,[we(n)]),Su=n=>{let e=0,t=0,i=0,s=0,r=n.type==="delta";return t|=+r,r?e|=1:e|=2,e<<24|t<<16|i<<8|s},c3=n=>Ht("traf",null,[h3(n),u3(n),d3(n)]),h3=n=>{let e=0;e|=8,e|=16,e|=32,e|=131072;let t=n.currentChunk.samples[1]??n.currentChunk.samples[0],i={duration:t.timescaleUnitsToNextSample,size:t.size,flags:Su(t)};return Ct("tfhd",0,e,[we(n.id),we(i.duration),we(i.size),we(i.flags)])},u3=n=>Ct("tfdt",1,0,[i0(jn(n.currentChunk.startTimestamp,n.timescale))]),d3=n=>{let e=n.currentChunk.samples.map(_=>_.timescaleUnitsToNextSample),t=n.currentChunk.samples.map(_=>_.size),i=n.currentChunk.samples.map(Su),s=n.currentChunk.samples.map(_=>jn(_.presentationTimestamp-_.decodeTimestamp,n.timescale)),r=new Set(e),o=new Set(t),a=new Set(i),l=new Set(s),c=a.size===2&&i[0]!==i[1],h=r.size>1,u=o.size>1,f=!c&&a.size>1,p=l.size>1||[...l].some(_=>_!==0),g=0;return g|=1,g|=4*+c,g|=256*+h,g|=512*+u,g|=1024*+f,g|=2048*+p,Ct("trun",1,g,[we(n.currentChunk.samples.length),we(n.currentChunk.offset-n.currentChunk.moofOffset||0),c?we(i[0]):[],n.currentChunk.samples.map((_,m)=>[h?we(e[m]):[],u?we(t[m]):[],f?we(i[m]):[],p?w5(s[m]):[]])])},f3=n=>Ht("mfra",null,[...n.map(p3),m3()]),p3=(n,e)=>Ct("tfra",1,0,[we(n.id),we(63),we(n.finalizedChunks.length),n.finalizedChunks.map(i=>[i0(jn(i.startTimestamp,n.timescale)),i0(i.moofOffset),we(e+1),we(1),we(1)])]),m3=()=>Ct("mfro",0,0,[we(0)]),g3={avc:"avc1",hevc:"hvc1",vp9:"vp09",av1:"av01"},_3={avc:Y5,hevc:j5,vp9:$5,av1:Z5},v3={aac:"mp4a",opus:"Opus"},x3={aac:J5,opus:Q5},io=class{},Mu=class extends io{constructor(){super(...arguments),this.buffer=null}},Eu=class extends io{constructor(n){if(super(),this.options=n,typeof n!="object")throw new TypeError("StreamTarget requires an options object to be passed to its constructor.");if(n.onData){if(typeof n.onData!="function")throw new TypeError("options.onData, when provided, must be a function.");if(n.onData.length<2)throw new TypeError("options.onData, when provided, must be a function that takes in at least two arguments (data and position). Ignoring the position argument, which specifies the byte offset at which the data is to be written, can lead to broken outputs.")}if(n.chunked!==void 0&&typeof n.chunked!="boolean")throw new TypeError("options.chunked, when provided, must be a boolean.");if(n.chunkSize!==void 0&&(!Number.isInteger(n.chunkSize)||n.chunkSize<1024))throw new TypeError("options.chunkSize, when provided, must be an integer and not smaller than 1024.")}},y3=class extends io{constructor(n,e){if(super(),this.stream=n,this.options=e,!(n instanceof FileSystemWritableFileStream))throw new TypeError("FileSystemWritableFileStreamTarget requires a FileSystemWritableFileStream instance.");if(e!==void 0&&typeof e!="object")throw new TypeError("FileSystemWritableFileStreamTarget's options, when provided, must be an object.");if(e&&e.chunkSize!==void 0&&(!Number.isInteger(e.chunkSize)||e.chunkSize<=0))throw new TypeError("options.chunkSize, when provided, must be a positive integer")}},Gi,T0,bu=class{constructor(){this.pos=0,it(this,Gi,new Uint8Array(8)),it(this,T0,new DataView(I(this,Gi).buffer)),this.offsets=new WeakMap}seek(n){this.pos=n}writeU32(n){I(this,T0).setUint32(0,n,!1),this.write(I(this,Gi).subarray(0,4))}writeU64(n){I(this,T0).setUint32(0,Math.floor(n/2**32),!1),I(this,T0).setUint32(4,n,!1),this.write(I(this,Gi).subarray(0,8))}writeAscii(n){for(let e=0;e<n.length;e++)I(this,T0).setUint8(e%8,n.charCodeAt(e)),e%8===7&&this.write(I(this,Gi));n.length%8!==0&&this.write(I(this,Gi).subarray(0,n.length%8))}writeBox(n){if(this.offsets.set(n,this.pos),n.contents&&!n.children)this.writeBoxHeader(n,n.size??n.contents.byteLength+8),this.write(n.contents);else{let e=this.pos;if(this.writeBoxHeader(n,0),n.contents&&this.write(n.contents),n.children)for(let s of n.children)s&&this.writeBox(s);let t=this.pos,i=n.size??t-e;this.seek(e),this.writeBoxHeader(n,i),this.seek(t)}}writeBoxHeader(n,e){this.writeU32(n.largeSize?1:e),this.writeAscii(n.type),n.largeSize&&this.writeU64(e)}measureBoxHeader(n){return 8+(n.largeSize?8:0)}patchBox(n){let e=this.pos;this.seek(this.offsets.get(n)),this.writeBox(n),this.seek(e)}measureBox(n){if(n.contents&&!n.children)return this.measureBoxHeader(n)+n.contents.byteLength;{let e=this.measureBoxHeader(n);if(n.contents&&(e+=n.contents.byteLength),n.children)for(let t of n.children)t&&(e+=this.measureBox(t));return e}}};Gi=new WeakMap;T0=new WeakMap;var Ir,Ji,Is,rs,Ur,ja,S3=class extends bu{constructor(n){super(),it(this,Ur),it(this,Ir,void 0),it(this,Ji,new ArrayBuffer(2**16)),it(this,Is,new Uint8Array(I(this,Ji))),it(this,rs,0),Zt(this,Ir,n)}write(n){at(this,Ur,ja).call(this,this.pos+n.byteLength),I(this,Is).set(n,this.pos),this.pos+=n.byteLength,Zt(this,rs,Math.max(I(this,rs),this.pos))}finalize(){at(this,Ur,ja).call(this,this.pos),I(this,Ir).buffer=I(this,Ji).slice(0,Math.max(I(this,rs),this.pos))}};Ir=new WeakMap;Ji=new WeakMap;Is=new WeakMap;rs=new WeakMap;Ur=new WeakSet;ja=function(n){let e=I(this,Ji).byteLength;for(;e<n;)e*=2;if(e===I(this,Ji).byteLength)return;let t=new ArrayBuffer(e),i=new Uint8Array(t);i.set(I(this,Is),0),Zt(this,Ji,t),Zt(this,Is,i)};var M3=2**24,E3=2,_s,Wi,os,ui,yn,qr,$a,Pl,wu,Ll,Tu,vs,Yr,Dl=class extends bu{constructor(n){super(),it(this,qr),it(this,Pl),it(this,Ll),it(this,vs),it(this,_s,void 0),it(this,Wi,[]),it(this,os,void 0),it(this,ui,void 0),it(this,yn,[]),Zt(this,_s,n),Zt(this,os,n.options?.chunked??!1),Zt(this,ui,n.options?.chunkSize??M3)}write(n){I(this,Wi).push({data:n.slice(),start:this.pos}),this.pos+=n.byteLength}flush(){if(I(this,Wi).length===0)return;let n=[],e=[...I(this,Wi)].sort((t,i)=>t.start-i.start);n.push({start:e[0].start,size:e[0].data.byteLength});for(let t=1;t<e.length;t++){let i=n[n.length-1],s=e[t];s.start<=i.start+i.size?i.size=Math.max(i.size,s.start+s.data.byteLength-i.start):n.push({start:s.start,size:s.data.byteLength})}for(let t of n){t.data=new Uint8Array(t.size);for(let i of I(this,Wi))t.start<=i.start&&i.start<t.start+t.size&&t.data.set(i.data,i.start-t.start);I(this,os)?(at(this,qr,$a).call(this,t.data,t.start),at(this,vs,Yr).call(this)):I(this,_s).options.onData?.(t.data,t.start)}I(this,Wi).length=0}finalize(){I(this,os)&&at(this,vs,Yr).call(this,!0)}};_s=new WeakMap;Wi=new WeakMap;os=new WeakMap;ui=new WeakMap;yn=new WeakMap;qr=new WeakSet;$a=function(n,e){let t=I(this,yn).findIndex(a=>a.start<=e&&e<a.start+I(this,ui));t===-1&&(t=at(this,Ll,Tu).call(this,e));let i=I(this,yn)[t],s=e-i.start,r=n.subarray(0,Math.min(I(this,ui)-s,n.byteLength));i.data.set(r,s);let o={start:s,end:s+r.byteLength};if(at(this,Pl,wu).call(this,i,o),i.written[0].start===0&&i.written[0].end===I(this,ui)&&(i.shouldFlush=!0),I(this,yn).length>E3){for(let a=0;a<I(this,yn).length-1;a++)I(this,yn)[a].shouldFlush=!0;at(this,vs,Yr).call(this)}r.byteLength<n.byteLength&&at(this,qr,$a).call(this,n.subarray(r.byteLength),e+r.byteLength)};Pl=new WeakSet;wu=function(n,e){let t=0,i=n.written.length-1,s=-1;for(;t<=i;){let r=Math.floor(t+(i-t+1)/2);n.written[r].start<=e.start?(t=r+1,s=r):i=r-1}for(n.written.splice(s+1,0,e),(s===-1||n.written[s].end<e.start)&&s++;s<n.written.length-1&&n.written[s].end>=n.written[s+1].start;)n.written[s].end=Math.max(n.written[s].end,n.written[s+1].end),n.written.splice(s+1,1)};Ll=new WeakSet;Tu=function(n){let t={start:Math.floor(n/I(this,ui))*I(this,ui),data:new Uint8Array(I(this,ui)),written:[],shouldFlush:!1};return I(this,yn).push(t),I(this,yn).sort((i,s)=>i.start-s.start),I(this,yn).indexOf(t)};vs=new WeakSet;Yr=function(n=!1){for(let e=0;e<I(this,yn).length;e++){let t=I(this,yn)[e];if(!(!t.shouldFlush&&!n)){for(let i of t.written)I(this,_s).options.onData?.(t.data.subarray(i.start,i.end),t.start+i.start);I(this,yn).splice(e--,1)}}};var b3=class extends Dl{constructor(n){super(new Eu({onData:(e,t)=>n.stream.write({type:"write",data:e,position:t}),chunked:!0,chunkSize:n.options?.chunkSize}))}},Za=1e3,w3=["avc","hevc","vp9","av1"],T3=["aac","opus"],A3=2082844800,C3=["strict","offset","cross-track-offset"],Oe,qe,jr,xn,Kt,$t,P0,I0,Il,Xi,qi,xs,Ka,Au,Ja,Cu,Ul,Ru,Qa,Pu,Nl,Lu,Nr,el,kn,ai,Fl,Du,ys,$r,Zr,Ol,H0,Gs,Fr,tl,R3=class{constructor(n){if(it(this,Ka),it(this,Ja),it(this,Ul),it(this,Qa),it(this,Nl),it(this,Nr),it(this,kn),it(this,Fl),it(this,ys),it(this,Zr),it(this,H0),it(this,Fr),it(this,Oe,void 0),it(this,qe,void 0),it(this,jr,void 0),it(this,xn,void 0),it(this,Kt,null),it(this,$t,null),it(this,P0,Math.floor(Date.now()/1e3)+A3),it(this,I0,[]),it(this,Il,1),it(this,Xi,[]),it(this,qi,[]),it(this,xs,!1),at(this,Ka,Au).call(this,n),n.video=gs(n.video),n.audio=gs(n.audio),n.fastStart=gs(n.fastStart),this.target=n.target,Zt(this,Oe,{firstTimestampBehavior:"strict",...n}),n.target instanceof Mu)Zt(this,qe,new S3(n.target));else if(n.target instanceof Eu)Zt(this,qe,new Dl(n.target));else if(n.target instanceof y3)Zt(this,qe,new b3(n.target));else throw new Error(`Invalid target: ${n.target}`);at(this,Qa,Pu).call(this),at(this,Ja,Cu).call(this)}addVideoChunk(n,e,t,i){if(!(n instanceof EncodedVideoChunk))throw new TypeError("addVideoChunk's first argument (sample) must be of type EncodedVideoChunk.");if(e&&typeof e!="object")throw new TypeError("addVideoChunk's second argument (meta), when provided, must be an object.");if(t!==void 0&&(!Number.isFinite(t)||t<0))throw new TypeError("addVideoChunk's third argument (timestamp), when provided, must be a non-negative real number.");if(i!==void 0&&!Number.isFinite(i))throw new TypeError("addVideoChunk's fourth argument (compositionTimeOffset), when provided, must be a real number.");let s=new Uint8Array(n.byteLength);n.copyTo(s),this.addVideoChunkRaw(s,n.type,t??n.timestamp,n.duration,e,i)}addVideoChunkRaw(n,e,t,i,s,r){if(!(n instanceof Uint8Array))throw new TypeError("addVideoChunkRaw's first argument (data) must be an instance of Uint8Array.");if(e!=="key"&&e!=="delta")throw new TypeError("addVideoChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(t)||t<0)throw new TypeError("addVideoChunkRaw's third argument (timestamp) must be a non-negative real number.");if(!Number.isFinite(i)||i<0)throw new TypeError("addVideoChunkRaw's fourth argument (duration) must be a non-negative real number.");if(s&&typeof s!="object")throw new TypeError("addVideoChunkRaw's fifth argument (meta), when provided, must be an object.");if(r!==void 0&&!Number.isFinite(r))throw new TypeError("addVideoChunkRaw's sixth argument (compositionTimeOffset), when provided, must be a real number.");if(at(this,Fr,tl).call(this),!I(this,Oe).video)throw new Error("No video track declared.");if(typeof I(this,Oe).fastStart=="object"&&I(this,Kt).samples.length===I(this,Oe).fastStart.expectedVideoChunks)throw new Error(`Cannot add more video chunks than specified in 'fastStart' (${I(this,Oe).fastStart.expectedVideoChunks}).`);let o=at(this,Nr,el).call(this,I(this,Kt),n,e,t,i,s,r);if(I(this,Oe).fastStart==="fragmented"&&I(this,$t)){for(;I(this,qi).length>0&&I(this,qi)[0].decodeTimestamp<=o.decodeTimestamp;){let a=I(this,qi).shift();at(this,kn,ai).call(this,I(this,$t),a)}o.decodeTimestamp<=I(this,$t).lastDecodeTimestamp?at(this,kn,ai).call(this,I(this,Kt),o):I(this,Xi).push(o)}else at(this,kn,ai).call(this,I(this,Kt),o)}addAudioChunk(n,e,t){if(!(n instanceof EncodedAudioChunk))throw new TypeError("addAudioChunk's first argument (sample) must be of type EncodedAudioChunk.");if(e&&typeof e!="object")throw new TypeError("addAudioChunk's second argument (meta), when provided, must be an object.");if(t!==void 0&&(!Number.isFinite(t)||t<0))throw new TypeError("addAudioChunk's third argument (timestamp), when provided, must be a non-negative real number.");let i=new Uint8Array(n.byteLength);n.copyTo(i),this.addAudioChunkRaw(i,n.type,t??n.timestamp,n.duration,e)}addAudioChunkRaw(n,e,t,i,s){if(!(n instanceof Uint8Array))throw new TypeError("addAudioChunkRaw's first argument (data) must be an instance of Uint8Array.");if(e!=="key"&&e!=="delta")throw new TypeError("addAudioChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(t)||t<0)throw new TypeError("addAudioChunkRaw's third argument (timestamp) must be a non-negative real number.");if(!Number.isFinite(i)||i<0)throw new TypeError("addAudioChunkRaw's fourth argument (duration) must be a non-negative real number.");if(s&&typeof s!="object")throw new TypeError("addAudioChunkRaw's fifth argument (meta), when provided, must be an object.");if(at(this,Fr,tl).call(this),!I(this,Oe).audio)throw new Error("No audio track declared.");if(typeof I(this,Oe).fastStart=="object"&&I(this,$t).samples.length===I(this,Oe).fastStart.expectedAudioChunks)throw new Error(`Cannot add more audio chunks than specified in 'fastStart' (${I(this,Oe).fastStart.expectedAudioChunks}).`);let r=at(this,Nr,el).call(this,I(this,$t),n,e,t,i,s);if(I(this,Oe).fastStart==="fragmented"&&I(this,Kt)){for(;I(this,Xi).length>0&&I(this,Xi)[0].decodeTimestamp<=r.decodeTimestamp;){let o=I(this,Xi).shift();at(this,kn,ai).call(this,I(this,Kt),o)}r.decodeTimestamp<=I(this,Kt).lastDecodeTimestamp?at(this,kn,ai).call(this,I(this,$t),r):I(this,qi).push(r)}else at(this,kn,ai).call(this,I(this,$t),r)}finalize(){if(I(this,xs))throw new Error("Cannot finalize a muxer more than once.");if(I(this,Oe).fastStart==="fragmented"){for(let e of I(this,Xi))at(this,kn,ai).call(this,I(this,Kt),e);for(let e of I(this,qi))at(this,kn,ai).call(this,I(this,$t),e);at(this,Zr,Ol).call(this,!1)}else I(this,Kt)&&at(this,ys,$r).call(this,I(this,Kt)),I(this,$t)&&at(this,ys,$r).call(this,I(this,$t));let n=[I(this,Kt),I(this,$t)].filter(Boolean);if(I(this,Oe).fastStart==="in-memory"){let e;for(let i=0;i<2;i++){let s=Dr(n,I(this,P0)),r=I(this,qe).measureBox(s);e=I(this,qe).measureBox(I(this,xn));let o=I(this,qe).pos+r+e;for(let a of I(this,I0)){a.offset=o;for(let{data:l}of a.samples)o+=l.byteLength,e+=l.byteLength}if(o<2**32)break;e>=2**32&&(I(this,xn).largeSize=!0)}let t=Dr(n,I(this,P0));I(this,qe).writeBox(t),I(this,xn).size=e,I(this,qe).writeBox(I(this,xn));for(let i of I(this,I0))for(let s of i.samples)I(this,qe).write(s.data),s.data=null}else if(I(this,Oe).fastStart==="fragmented"){let e=I(this,qe).pos,t=f3(n);I(this,qe).writeBox(t);let i=I(this,qe).pos-e;I(this,qe).seek(I(this,qe).pos-4),I(this,qe).writeU32(i)}else{let e=I(this,qe).offsets.get(I(this,xn)),t=I(this,qe).pos-e;I(this,xn).size=t,I(this,xn).largeSize=t>=2**32,I(this,qe).patchBox(I(this,xn));let i=Dr(n,I(this,P0));if(typeof I(this,Oe).fastStart=="object"){I(this,qe).seek(I(this,jr)),I(this,qe).writeBox(i);let s=e-I(this,qe).pos;I(this,qe).writeBox(A5(s))}else I(this,qe).writeBox(i)}at(this,H0,Gs).call(this),I(this,qe).finalize(),Zt(this,xs,!0)}};Oe=new WeakMap;qe=new WeakMap;jr=new WeakMap;xn=new WeakMap;Kt=new WeakMap;$t=new WeakMap;P0=new WeakMap;I0=new WeakMap;Il=new WeakMap;Xi=new WeakMap;qi=new WeakMap;xs=new WeakMap;Ka=new WeakSet;Au=function(n){if(typeof n!="object")throw new TypeError("The muxer requires an options object to be passed to its constructor.");if(!(n.target instanceof io))throw new TypeError("The target must be provided and an instance of Target.");if(n.video){if(!w3.includes(n.video.codec))throw new TypeError(`Unsupported video codec: ${n.video.codec}`);if(!Number.isInteger(n.video.width)||n.video.width<=0)throw new TypeError(`Invalid video width: ${n.video.width}. Must be a positive integer.`);if(!Number.isInteger(n.video.height)||n.video.height<=0)throw new TypeError(`Invalid video height: ${n.video.height}. Must be a positive integer.`);const e=n.video.rotation;if(typeof e=="number"&&![0,90,180,270].includes(e))throw new TypeError(`Invalid video rotation: ${e}. Has to be 0, 90, 180 or 270.`);if(Array.isArray(e)&&(e.length!==9||e.some(t=>typeof t!="number")))throw new TypeError(`Invalid video transformation matrix: ${e.join()}`);if(n.video.frameRate!==void 0&&(!Number.isInteger(n.video.frameRate)||n.video.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${n.video.frameRate}. Must be a positive integer.`)}if(n.audio){if(!T3.includes(n.audio.codec))throw new TypeError(`Unsupported audio codec: ${n.audio.codec}`);if(!Number.isInteger(n.audio.numberOfChannels)||n.audio.numberOfChannels<=0)throw new TypeError(`Invalid number of audio channels: ${n.audio.numberOfChannels}. Must be a positive integer.`);if(!Number.isInteger(n.audio.sampleRate)||n.audio.sampleRate<=0)throw new TypeError(`Invalid audio sample rate: ${n.audio.sampleRate}. Must be a positive integer.`)}if(n.firstTimestampBehavior&&!C3.includes(n.firstTimestampBehavior))throw new TypeError(`Invalid first timestamp behavior: ${n.firstTimestampBehavior}`);if(typeof n.fastStart=="object"){if(n.video){if(n.fastStart.expectedVideoChunks===void 0)throw new TypeError("'fastStart' is an object but is missing property 'expectedVideoChunks'.");if(!Number.isInteger(n.fastStart.expectedVideoChunks)||n.fastStart.expectedVideoChunks<0)throw new TypeError("'expectedVideoChunks' must be a non-negative integer.")}if(n.audio){if(n.fastStart.expectedAudioChunks===void 0)throw new TypeError("'fastStart' is an object but is missing property 'expectedAudioChunks'.");if(!Number.isInteger(n.fastStart.expectedAudioChunks)||n.fastStart.expectedAudioChunks<0)throw new TypeError("'expectedAudioChunks' must be a non-negative integer.")}}else if(![!1,"in-memory","fragmented"].includes(n.fastStart))throw new TypeError("'fastStart' option must be false, 'in-memory', 'fragmented' or an object.");if(n.minFragmentDuration!==void 0&&(!Number.isFinite(n.minFragmentDuration)||n.minFragmentDuration<0))throw new TypeError("'minFragmentDuration' must be a non-negative number.")};Ja=new WeakSet;Cu=function(){if(I(this,qe).writeBox(T5({holdsAvc:I(this,Oe).video?.codec==="avc",fragmented:I(this,Oe).fastStart==="fragmented"})),Zt(this,jr,I(this,qe).pos),I(this,Oe).fastStart==="in-memory")Zt(this,xn,Ya(!1));else if(I(this,Oe).fastStart!=="fragmented"){if(typeof I(this,Oe).fastStart=="object"){let n=at(this,Ul,Ru).call(this);I(this,qe).seek(I(this,qe).pos+n)}Zt(this,xn,Ya(!0)),I(this,qe).writeBox(I(this,xn))}at(this,H0,Gs).call(this)};Ul=new WeakSet;Ru=function(){if(typeof I(this,Oe).fastStart!="object")return;let n=0,e=[I(this,Oe).fastStart.expectedVideoChunks,I(this,Oe).fastStart.expectedAudioChunks];for(let t of e)t&&(n+=8*Math.ceil(2/3*t),n+=4*t,n+=12*Math.ceil(2/3*t),n+=4*t,n+=8*t);return n+=4096,n};Qa=new WeakSet;Pu=function(){if(I(this,Oe).video&&Zt(this,Kt,{id:1,info:{type:"video",codec:I(this,Oe).video.codec,width:I(this,Oe).video.width,height:I(this,Oe).video.height,rotation:I(this,Oe).video.rotation??0,decoderConfig:null},timescale:I(this,Oe).video.frameRate??57600,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),I(this,Oe).audio&&(Zt(this,$t,{id:I(this,Oe).video?2:1,info:{type:"audio",codec:I(this,Oe).audio.codec,numberOfChannels:I(this,Oe).audio.numberOfChannels,sampleRate:I(this,Oe).audio.sampleRate,decoderConfig:null},timescale:I(this,Oe).audio.sampleRate,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),I(this,Oe).audio.codec==="aac")){let n=at(this,Nl,Lu).call(this,2,I(this,Oe).audio.sampleRate,I(this,Oe).audio.numberOfChannels);I(this,$t).info.decoderConfig={codec:I(this,Oe).audio.codec,description:n,numberOfChannels:I(this,Oe).audio.numberOfChannels,sampleRate:I(this,Oe).audio.sampleRate}}};Nl=new WeakSet;Lu=function(n,e,t){let s=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350].indexOf(e),r=t,o="";o+=n.toString(2).padStart(5,"0"),o+=s.toString(2).padStart(4,"0"),s===15&&(o+=e.toString(2).padStart(24,"0")),o+=r.toString(2).padStart(4,"0");let a=Math.ceil(o.length/8)*8;o=o.padEnd(a,"0");let l=new Uint8Array(o.length/8);for(let c=0;c<o.length;c+=8)l[c/8]=parseInt(o.slice(c,c+8),2);return l};Nr=new WeakSet;el=function(n,e,t,i,s,r,o){let a=i/1e6,l=(i-(o??0))/1e6,c=s/1e6,h=at(this,Fl,Du).call(this,a,l,n);return a=h.presentationTimestamp,l=h.decodeTimestamp,r?.decoderConfig&&(n.info.decoderConfig===null?n.info.decoderConfig=r.decoderConfig:Object.assign(n.info.decoderConfig,r.decoderConfig)),{presentationTimestamp:a,decodeTimestamp:l,duration:c,data:e,size:e.byteLength,type:t,timescaleUnitsToNextSample:jn(c,n.timescale)}};kn=new WeakSet;ai=function(n,e){I(this,Oe).fastStart!=="fragmented"&&n.samples.push(e);const t=jn(e.presentationTimestamp-e.decodeTimestamp,n.timescale);if(n.lastTimescaleUnits!==null){let s=jn(e.decodeTimestamp,n.timescale,!1),r=Math.round(s-n.lastTimescaleUnits);if(n.lastTimescaleUnits+=r,n.lastSample.timescaleUnitsToNextSample=r,I(this,Oe).fastStart!=="fragmented"){let o=Xr(n.timeToSampleTable);o.sampleCount===1?(o.sampleDelta=r,o.sampleCount++):o.sampleDelta===r?o.sampleCount++:(o.sampleCount--,n.timeToSampleTable.push({sampleCount:2,sampleDelta:r}));const a=Xr(n.compositionTimeOffsetTable);a.sampleCompositionTimeOffset===t?a.sampleCount++:n.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:t})}}else n.lastTimescaleUnits=0,I(this,Oe).fastStart!=="fragmented"&&(n.timeToSampleTable.push({sampleCount:1,sampleDelta:jn(e.duration,n.timescale)}),n.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:t}));n.lastSample=e;let i=!1;if(!n.currentChunk)i=!0;else{let s=e.presentationTimestamp-n.currentChunk.startTimestamp;if(I(this,Oe).fastStart==="fragmented"){let r=I(this,Kt)??I(this,$t);const o=I(this,Oe).minFragmentDuration??1;n===r&&e.type==="key"&&s>=o&&(i=!0,at(this,Zr,Ol).call(this))}else i=s>=.5}i&&(n.currentChunk&&at(this,ys,$r).call(this,n),n.currentChunk={startTimestamp:e.presentationTimestamp,samples:[]}),n.currentChunk.samples.push(e)};Fl=new WeakSet;Du=function(n,e,t){const i=I(this,Oe).firstTimestampBehavior==="strict",s=t.lastDecodeTimestamp===-1;if(i&&s&&e!==0)throw new Error(`The first chunk for your media track must have a timestamp of 0 (received DTS=${e}).Non-zero first timestamps are often caused by directly piping frames or audio data from a MediaStreamTrack into the encoder. Their timestamps are typically relative to the age of thedocument, which is probably what you want.

If you want to offset all timestamps of a track such that the first one is zero, set firstTimestampBehavior: 'offset' in the options.
`);if(I(this,Oe).firstTimestampBehavior==="offset"||I(this,Oe).firstTimestampBehavior==="cross-track-offset"){t.firstDecodeTimestamp===void 0&&(t.firstDecodeTimestamp=e);let o;I(this,Oe).firstTimestampBehavior==="offset"?o=t.firstDecodeTimestamp:o=Math.min(I(this,Kt)?.firstDecodeTimestamp??1/0,I(this,$t)?.firstDecodeTimestamp??1/0),e-=o,n-=o}if(e<t.lastDecodeTimestamp)throw new Error(`Timestamps must be monotonically increasing (DTS went from ${t.lastDecodeTimestamp*1e6} to ${e*1e6}).`);return t.lastDecodeTimestamp=e,{presentationTimestamp:n,decodeTimestamp:e}};ys=new WeakSet;$r=function(n){if(I(this,Oe).fastStart==="fragmented")throw new Error("Can't finalize individual chunks if 'fastStart' is set to 'fragmented'.");if(n.currentChunk){if(n.finalizedChunks.push(n.currentChunk),I(this,I0).push(n.currentChunk),(n.compactlyCodedChunkTable.length===0||Xr(n.compactlyCodedChunkTable).samplesPerChunk!==n.currentChunk.samples.length)&&n.compactlyCodedChunkTable.push({firstChunk:n.finalizedChunks.length,samplesPerChunk:n.currentChunk.samples.length}),I(this,Oe).fastStart==="in-memory"){n.currentChunk.offset=0;return}n.currentChunk.offset=I(this,qe).pos;for(let e of n.currentChunk.samples)I(this,qe).write(e.data),e.data=null;at(this,H0,Gs).call(this)}};Zr=new WeakSet;Ol=function(n=!0){if(I(this,Oe).fastStart!=="fragmented")throw new Error("Can't finalize a fragment unless 'fastStart' is set to 'fragmented'.");let e=[I(this,Kt),I(this,$t)].filter(a=>a&&a.currentChunk);if(e.length===0)return;let t=E5(this,Il)._++;if(t===1){let a=Dr(e,I(this,P0),!0);I(this,qe).writeBox(a)}let i=I(this,qe).pos,s=mh(t,e);I(this,qe).writeBox(s);{let a=Ya(!1),l=0;for(let h of e)for(let u of h.currentChunk.samples)l+=u.size;let c=I(this,qe).measureBox(a)+l;c>=2**32&&(a.largeSize=!0,c=I(this,qe).measureBox(a)+l),a.size=c,I(this,qe).writeBox(a)}for(let a of e){a.currentChunk.offset=I(this,qe).pos,a.currentChunk.moofOffset=i;for(let l of a.currentChunk.samples)I(this,qe).write(l.data),l.data=null}let r=I(this,qe).pos;I(this,qe).seek(I(this,qe).offsets.get(s));let o=mh(t,e);I(this,qe).writeBox(o),I(this,qe).seek(r);for(let a of e)a.finalizedChunks.push(a.currentChunk),I(this,I0).push(a.currentChunk),a.currentChunk=null;n&&at(this,H0,Gs).call(this)};H0=new WeakSet;Gs=function(){I(this,qe)instanceof Dl&&I(this,qe).flush()};Fr=new WeakSet;tl=function(){if(I(this,xs))throw new Error("Cannot add new video or audio chunks after the file has been finalized.")};const P3=(n,e,t)=>{const i=-n/2,s=-e/2,r=new Ri;return r.moveTo(i+t,s),r.lineTo(i+n-t,s),r.quadraticCurveTo(i+n,s,i+n,s+t),r.lineTo(i+n,s+e-t),r.quadraticCurveTo(i+n,s+e,i+n-t,s+e),r.lineTo(i+t,s+e),r.quadraticCurveTo(i,s+e,i,s+e-t),r.lineTo(i,s+t),r.quadraticCurveTo(i,s,i+t,s),r},L3={id:"mouse-pad-240x200",name:"Tapis de souris",dimensions:[240,200,3],printable:[240,200],create(){const n=new Ft,e=P3(2.4,2,.13),t=new Sn(e,{depth:.03,bevelEnabled:!0,bevelSegments:4,bevelSize:.018,bevelThickness:.012,curveSegments:16});t.rotateX(Math.PI/2),t.translate(0,-.045,0);const i=new xt({color:1053464,roughness:.7,metalness:.02}),s=new He(t,i);s.castShadow=!0,s.receiveShadow=!0,n.add(s);const r=new Sn(e,{depth:.004,bevelEnabled:!1,curveSegments:16});r.rotateX(Math.PI/2),r.translate(0,.001,0);const o=r.attributes.position,a=r.attributes.uv;for(let h=0;h<o.count;h++)a.setXY(h,(o.getX(h)+1.2)/2.4,(1-o.getZ(h))/2);a.needsUpdate=!0;const l=new xt({color:16250868,roughness:.72,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),c=new He(r,l);return c.receiveShadow=!0,n.add(c),{group:n,top:c,topMaterial:l,baseMaterial:i,printAspect:1.2,type:"flat"}}};function D3(){const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d"),t=256,i=256,s=256,r=e.createRadialGradient(t,i,20,t,i,s);r.addColorStop(0,"#22120a"),r.addColorStop(.5,"#2e180d"),r.addColorStop(.85,"#3a1f11"),r.addColorStop(1,"#1f0d06"),e.fillStyle=r,e.fillRect(0,0,512,512);for(let l=0;l<35;l++){const c=Math.random()*Math.PI*2,h=(.2+Math.random()*.7)*s,u=t+Math.cos(c)*h,f=i+Math.sin(c)*h,p=25+Math.random()*55,g=e.createRadialGradient(u,f,2,u,f,p),_=.35+Math.random()*.35;g.addColorStop(0,`rgba(212, 163, 107, ${_})`),g.addColorStop(.5,`rgba(184, 126, 68, ${_*.6})`),g.addColorStop(1,"rgba(46, 24, 13, 0)"),e.fillStyle=g,e.beginPath(),e.arc(u,f,p,0,Math.PI*2),e.fill()}const o=e.createRadialGradient(t,i,s*.82,t,i,s);o.addColorStop(0,"rgba(196, 138, 72, 0)"),o.addColorStop(.5,"rgba(217, 160, 91, 0.65)"),o.addColorStop(.9,"rgba(180, 115, 50, 0.45)"),o.addColorStop(1,"rgba(46, 24, 13, 0.2)"),e.fillStyle=o,e.beginPath(),e.arc(t,i,s,0,Math.PI*2),e.fill();for(let l=0;l<120;l++){const c=Math.random()*Math.PI*2,h=(.3+Math.random()*.65)*s,u=t+Math.cos(c)*h,f=i+Math.sin(c)*h,p=1+Math.random()*2.5;e.fillStyle="rgba(240, 200, 150, 0.55)",e.beginPath(),e.arc(u,f,p,0,Math.PI*2),e.fill()}const a=new Hs(n);return a.colorSpace=Wt,a}const I3={id:"mug-11oz",name:"Mug blanc 11 oz",dimensions:"Ø 82 × 95 mm",create(){const n=new Ft,e=new Rn({color:16777215,roughness:.18,clearcoat:.45,clearcoatRoughness:.16}),t=new Rn({color:16777215,roughness:.16,clearcoat:.5,clearcoatRoughness:.14}),i=new Rn({color:16777215,roughness:.16,clearcoat:.5,clearcoatRoughness:.14}),s=new Rn({color:16777215,roughness:.2,clearcoat:.4,clearcoatRoughness:.18,side:Gn}),r=210/257.6*Math.PI*2,o=Math.PI*2-r,a=new Bn(.7,.7,1.76,96,1,!0,o/2,r),l=new He(a,e);l.castShadow=!0,l.receiveShadow=!0,n.add(l);const c=new Bn(.7,.7,1.76,32,1,!0,-o/2,o),h=new He(c,t);h.castShadow=!0,h.receiveShadow=!0,n.add(h);const u=new Sl(.62,.7,96);u.rotateX(-Math.PI/2);const f=new He(u,t);f.position.y=.88,n.add(f);const p=new Cs(.7,64);p.rotateX(Math.PI/2);const g=new He(p,t);g.position.y=-.88,n.add(g);const _=new Bn(.62,.62,.4,96,1,!0),m=new He(_,s);m.position.y=.68,n.add(m);const d=new Rn({map:D3(),roughness:.12,metalness:.05,clearcoat:.95,clearcoatRoughness:.08}),M=new Cs(.618,96);M.rotateX(-Math.PI/2);const y=new He(M,d);y.position.y=.76,y.receiveShadow=!0,n.add(y);const v=new Qh([new R(0,.58,.62),new R(0,.58,1.08),new R(0,.3,1.28),new R(0,-.3,1.28),new R(0,-.58,1.08),new R(0,-.58,.62)]),C=new He(new El(v,64,.105,20,!1),i);return C.castShadow=!0,n.add(C),n.position.y=.82,{group:n,topMaterial:e,baseMaterial:t,handleMaterial:i,innerMaterial:s,printMesh:l,printAspect:210/95,type:"wrap"}}},U3=(n,e,t,i,s)=>{const r=-n/2,o=-e/2,a=new Ri;a.moveTo(r+t,o),a.lineTo(r+n-t,o),a.quadraticCurveTo(r+n,o,r+n,o+t),a.lineTo(r+n,o+e-t),a.quadraticCurveTo(r+n,o+e,r+n-t,o+e),a.lineTo(r+t,o+e),a.quadraticCurveTo(r,o+e,r,o+e-t),a.lineTo(r,o+t),a.quadraticCurveTo(r,o,r+t,o);const l=new Rs;return l.absarc(0,e/2-s,i,0,Math.PI*2,!1),a.holes.push(l),a},N3={id:"keychain-rect-unisub",name:"Porte-clés rectangle",dimensions:[40.6,57.15,1.14],printable:[40.6,57.15],icon:"🔑",create(){const n=new Ft,e=.406,t=.5715,i=U3(e,t,.03,.015,.04),s=.008,r=.0017,o=.0017,a=new Sn(i,{depth:s,bevelEnabled:!0,bevelSegments:3,bevelSize:r,bevelThickness:o,curveSegments:24});a.translate(0,0,-s/2);const l=a.attributes.position,c=a.attributes.uv;for(let p=0;p<l.count;p++){const g=l.getX(p),_=l.getY(p),m=l.getZ(p),d=(_+t/2)/t;let M=(g+e/2)/e;m<0?(M=(-g+e/2)/e,M=M*.5+.5,M=Math.max(M,.501)):(M=M*.5,M=Math.min(M,.499)),c.setXY(p,M,d)}c.needsUpdate=!0,a.translate(0,t/2+o,0);const h=new Rn({color:16777215,roughness:.15,metalness:0,clearcoat:.6,clearcoatRoughness:.2}),u=new Rn({color:15790320,roughness:.3,metalness:0,clearcoat:.3}),f=new He(a,[h,u]);return f.castShadow=!0,f.receiveShadow=!0,n.add(f),{group:n,topMaterial:h,baseMaterial:u,printMesh:f,printAspect:e/t,type:"flat",twoSided:!0,meshWidth:e,meshHeight:t}}},F3=(n,e,t)=>{const i=new Ri;i.absarc(0,0,n,0,Math.PI*2,!1);const s=new Rs;return s.absarc(0,n-t,e,0,Math.PI*2,!0),i.holes.push(s),i},O3={id:"keychain-round-unisub",name:"Porte-clés rond Unisub",dimensions:[63.5,63.5,2.29],printable:[63.5,63.5],icon:"⚪",create(){const n=new Ft,e=.3175,t=F3(e,.015,.04),i=.018,s=.00245,r=.002,o=new Sn(t,{depth:i,bevelEnabled:!0,bevelSegments:4,bevelSize:r,bevelThickness:s,curveSegments:32});o.translate(0,0,-i/2);const a=o.attributes.position,l=o.attributes.uv;for(let f=0;f<a.count;f++){const p=a.getX(f),g=a.getY(f),_=a.getZ(f),m=(g+e)/(2*e);let d=(p+e)/(2*e);_<0?(d=(-p+e)/(2*e),d=d*.5+.5,d=Math.max(d,.501)):(d=d*.5,d=Math.min(d,.499)),l.setXY(f,d,m)}l.needsUpdate=!0,o.translate(0,e+s,0);const c=new Rn({color:16777215,roughness:.15,metalness:0,clearcoat:.6,clearcoatRoughness:.2}),h=new Rn({color:15790320,roughness:.3,metalness:0,clearcoat:.3}),u=new He(o,[c,h]);return u.castShadow=!0,u.receiveShadow=!0,n.add(u),{group:n,topMaterial:c,baseMaterial:h,printMesh:u,printAspect:1,type:"flat",twoSided:!0,meshWidth:.635,meshHeight:.635}}},B3={id:"keychain-heart",name:"Porte-clés Cœur Unisub",dimensions:[57.2,63.5,2.29],printable:[57.2,63.5],icon:"🤍",create(){const n=new Ft,e=new Ri;e.moveTo(0,.2),e.bezierCurveTo(-.1,.4,-.5,.4,-.5,.1),e.bezierCurveTo(-.5,-.2,-.2,-.4,0,-.6),e.bezierCurveTo(.2,-.4,.5,-.2,.5,.1),e.bezierCurveTo(.5,.4,.1,.4,0,.2);const t=new Rs;t.absarc(.35,.22,.035,0,Math.PI*2,!1),e.holes.push(t);const i=.0229,s=new Sn(e,{depth:i,bevelEnabled:!0,bevelSegments:3,bevelSize:.002,bevelThickness:.002,curveSegments:32});s.computeBoundingBox();const r=s.boundingBox,o=r.getCenter(new R),a=r.getSize(new R);s.translate(-o.x,-o.y,-i/2),s.translate(0,a.y/2+.1,0);const l=s.attributes.position,c=s.attributes.uv;for(let p=0;p<l.count;p++){const g=l.getX(p),_=l.getY(p),m=l.getZ(p);let d=(g+a.x/2)/a.x,M=(_-.1)/a.y;m<0?(d=(-g+a.x/2)/a.x,d=d*.5+.5,d=Math.max(d,.501)):(d=d*.5,d=Math.min(d,.499)),c.setXY(p,d,M)}c.needsUpdate=!0;const h=new Rn({color:16777215,roughness:.15,clearcoat:.8,clearcoatRoughness:.1}),u=new Rn({color:2236962,roughness:.4}),f=new He(s,[h,u]);return f.castShadow=!0,f.receiveShadow=!0,n.add(f),{group:n,topMaterial:h,baseMaterial:u,printMesh:f,printAspect:57.2/63.5,type:"flat",twoSided:!0,meshWidth:1,meshHeight:1}}},z3=/^[og]\s*(.+)?/,k3=/^mtllib /,H3=/^usemtl /,V3=/^usemap /,gh=/\s+/,_h=new R,jo=new R,vh=new R,xh=new R,wn=new R,Tr=new je;function G3(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,r=this.object.geometry.normals;_h.fromArray(s,e),jo.fromArray(s,t),vh.fromArray(s,i),wn.subVectors(vh,jo),xh.subVectors(_h,jo),wn.cross(xh),wn.normalize(),r.push(wn.x,wn.y,wn.z),r.push(wn.x,wn.y,wn.z),r.push(wn.x,wn.y,wn.z)},addColor:function(e,t,i){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&r.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,r,o,a,l,c){const h=this.vertices.length;let u=this.parseVertexIndex(e,h),f=this.parseVertexIndex(t,h),p=this.parseVertexIndex(i,h);if(this.addVertex(u,f,p),this.addColor(u,f,p),a!==void 0&&a!==""){const g=this.normals.length;u=this.parseNormalIndex(a,g),f=this.parseNormalIndex(l,g),p=this.parseNormalIndex(c,g),this.addNormal(u,f,p)}else this.addFaceNormal(u,f,p);if(s!==void 0&&s!==""){const g=this.uvs.length;u=this.parseUVIndex(s,g),f=this.parseUVIndex(r,g),p=this.parseUVIndex(o,g),this.addUV(u,f,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const r=this.parseVertexIndex(e[i],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],i));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return n.startObject("",!1),n}class W3 extends Vs{constructor(e){super(e),this.materials=null}load(e,t,i,s){const r=this,o=new gp(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new G3;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let a=0,l=i.length;a<l;a++){const c=i[a].trimStart();if(c.length===0)continue;const h=c.charAt(0);if(h!=="#")if(h==="v"){const u=c.split(gh);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(Tr.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),Wt),t.colors.push(Tr.r,Tr.g,Tr.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){const f=c.slice(1).trim().split(gh),p=[];for(let _=0,m=f.length;_<m;_++){const d=f[_];if(d.length>0){const M=d.split("/");p.push(M)}}const g=p[0];for(let _=1,m=p.length-1;_<m;_++){const d=p[_],M=p[_+1];t.addFace(g[0],d[0],M[0],g[1],d[1],M[1],g[2],d[2],M[2])}}else if(h==="l"){const u=c.substring(1).trim().split(" ");let f=[];const p=[];if(c.indexOf("/")===-1)f=u;else for(let g=0,_=u.length;g<_;g++){const m=u[g].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&p.push(m[1])}t.addLineGeometry(f,p)}else if(h==="p"){const f=c.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((s=z3.exec(c))!==null){const u=(" "+s[0].slice(1).trim()).slice(1);t.startObject(u)}else if(H3.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(k3.test(c))t.materialLibraries.push(c.substring(7).trim());else if(V3.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(s=c.split(" "),s.length>1){const f=s[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new Ft;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],h=c.geometry,u=c.materials,f=h.type==="Line",p=h.type==="Points";let g=!1;if(h.vertices.length===0)continue;const _=new kt;_.setAttribute("position",new rt(h.vertices,3)),h.normals.length>0&&_.setAttribute("normal",new rt(h.normals,3)),h.colors.length>0&&(g=!0,_.setAttribute("color",new rt(h.colors,3))),h.hasUVIndices===!0&&_.setAttribute("uv",new rt(h.uvs,2));const m=[];for(let M=0,y=u.length;M<y;M++){const v=u[M],C=v.name+"_"+v.smooth+"_"+g;let S=t.materials[C];if(this.materials!==null){if(S=this.materials.create(v.name),f&&S&&!(S instanceof ds)){const A=new ds;Pn.prototype.copy.call(A,S),A.color.copy(S.color),S=A}else if(p&&S&&!(S instanceof ns)){const A=new ns({size:10,sizeAttenuation:!1});Pn.prototype.copy.call(A,S),A.color.copy(S.color),A.map=S.map,S=A}}S===void 0&&(f?S=new ds:p?S=new ns({size:1,sizeAttenuation:!1}):S=new hp,S.name=v.name,S.flatShading=!v.smooth,S.vertexColors=g,t.materials[C]=S),m.push(S)}let d;if(m.length>1){for(let M=0,y=u.length;M<y;M++){const v=u[M];_.addGroup(v.groupStart,v.groupCount,M)}f?d=new Ha(_,m):p?d=new No(_,m):d=new He(_,m)}else f?d=new Ha(_,m[0]):p?d=new No(_,m[0]):d=new He(_,m[0]);d.name=c.name,r.add(d)}else if(t.vertices.length>0){const a=new ns({size:1,sizeAttenuation:!1}),l=new kt;l.setAttribute("position",new rt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new rt(t.colors,3)),a.vertexColors=!0);const c=new No(l,a);r.add(c)}return r}}class $o extends kt{constructor(e=new He,t=new R,i=new fn,s=new R(1,1,1)){super();const r=[],o=[],a=[],l=new R,c=new Je().getNormalMatrix(e.matrixWorld),h=new Mt;h.makeRotationFromEuler(i),h.setPosition(t);const u=new Mt;u.copy(h).invert(),f(),this.setAttribute("position",new rt(r,3)),this.setAttribute("uv",new rt(a,2)),o.length>0&&this.setAttribute("normal",new rt(o,3));function f(){let m=[];const d=new R,M=new R,y=e.geometry,v=y.attributes.position,C=y.attributes.normal;if(y.index!==null){const S=y.index;for(let A=0;A<S.count;A++)d.fromBufferAttribute(v,S.getX(A)),C?(M.fromBufferAttribute(C,S.getX(A)),p(m,d,M)):p(m,d)}else{if(v===void 0)return;for(let S=0;S<v.count;S++)d.fromBufferAttribute(v,S),C?(M.fromBufferAttribute(C,S),p(m,d,M)):p(m,d)}m=g(m,l.set(1,0,0)),m=g(m,l.set(-1,0,0)),m=g(m,l.set(0,1,0)),m=g(m,l.set(0,-1,0)),m=g(m,l.set(0,0,1)),m=g(m,l.set(0,0,-1));for(let S=0;S<m.length;S++){const A=m[S];a.push(.5+A.position.x/s.x,.5+A.position.y/s.y),A.position.applyMatrix4(h),r.push(A.position.x,A.position.y,A.position.z),A.normal!==null&&o.push(A.normal.x,A.normal.y,A.normal.z)}}function p(m,d,M=null){d.applyMatrix4(e.matrixWorld),d.applyMatrix4(u),M?(M.applyNormalMatrix(c),m.push(new Zo(d.clone(),M.clone()))):m.push(new Zo(d.clone()))}function g(m,d){const M=[],y=.5*Math.abs(s.dot(d));for(let v=0;v<m.length;v+=3){let C=0,S,A,L,w;const E=m[v+0].position.dot(d)-y,D=m[v+1].position.dot(d)-y,B=m[v+2].position.dot(d)-y,z=E>0,W=D>0,V=B>0;switch(C=(z?1:0)+(W?1:0)+(V?1:0),C){case 0:{M.push(m[v]),M.push(m[v+1]),M.push(m[v+2]);break}case 1:{if(z&&(S=m[v+1],A=m[v+2],L=_(m[v],S,d,y),w=_(m[v],A,d,y)),W){S=m[v],A=m[v+2],L=_(m[v+1],S,d,y),w=_(m[v+1],A,d,y),M.push(L),M.push(A.clone()),M.push(S.clone()),M.push(A.clone()),M.push(L.clone()),M.push(w);break}V&&(S=m[v],A=m[v+1],L=_(m[v+2],S,d,y),w=_(m[v+2],A,d,y)),M.push(S.clone()),M.push(A.clone()),M.push(L),M.push(w),M.push(L.clone()),M.push(A.clone());break}case 2:{z||(S=m[v].clone(),A=_(S,m[v+1],d,y),L=_(S,m[v+2],d,y),M.push(S),M.push(A),M.push(L)),W||(S=m[v+1].clone(),A=_(S,m[v+2],d,y),L=_(S,m[v],d,y),M.push(S),M.push(A),M.push(L)),V||(S=m[v+2].clone(),A=_(S,m[v],d,y),L=_(S,m[v+1],d,y),M.push(S),M.push(A),M.push(L));break}}}return M}function _(m,d,M,y){const v=m.position.dot(M)-y,C=d.position.dot(M)-y,S=v/(v-C),A=new R(m.position.x+S*(d.position.x-m.position.x),m.position.y+S*(d.position.y-m.position.y),m.position.z+S*(d.position.z-m.position.z));let L=null;return m.normal!==null&&d.normal!==null&&(L=new R(m.normal.x+S*(d.normal.x-m.normal.x),m.normal.y+S*(d.normal.y-m.normal.y),m.normal.z+S*(d.normal.z-m.normal.z))),new Zo(A,L)}}}class Zo{constructor(e,t=null){this.position=e,this.normal=t}clone(){const e=this.position.clone(),t=this.normal!==null?this.normal.clone():null;return new this.constructor(e,t)}}const X3="/assets/male_crew_neck_worn_v1_no_tag_517_YEE-QksqSogE.obj",yh=210/297,q3={id:"tshirt-3d",name:"T-shirt 3D (Dos, Cœur, Ventre)",dimensions:"S, M, L, XL",printable:[210,297],icon:"👕",printAspect:yh,create(){const n=new Ft,e=new Ft;let t=!1,i=null,s="portrait";const r=new xt({color:16777215,roughness:.9,metalness:.05}),o=new xt({color:16777215,roughness:.8,metalness:.1,transparent:!0,premultipliedAlpha:!1,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,alphaTest:.01,blending:Ki});new W3().load(X3,h=>{h.traverse(u=>{u.isMesh&&(u.geometry.attributes.normal||u.geometry.computeVertexNormals(),u.geometry.scale(.01,.01,.01),u.geometry.translate(0,-.1,0),u.geometry.computeVertexNormals(),u.geometry.computeBoundingBox(),u.geometry.computeBoundingSphere(),u.material=r,u.castShadow=!0,u.receiveShadow=!0,n.userData.mainMesh=u)}),n.add(h),t=!0,i&&(l(i.texture,i.isTwoSided,i.canvas,i.heartTexture),i=null)},void 0,h=>{console.error("Erreur de chargement du modèle T-Shirt:",h)});function l(h,u,f,p){if(!t||!n.userData.mainMesh){i={texture:h,isTwoSided:u,canvas:f,heartTexture:p};return}for(;e.children.length>0;){const W=e.children[0];e.remove(W),W.geometry?.dispose(),W.material?.dispose()}const g=n.userData.mainMesh;e.parent||g.add(e);const _=o.clone();_.map=h,_.needsUpdate=!0;const m=o.clone();m.map=h,m.needsUpdate=!0,n.updateMatrixWorld(!0);const d=new G0().setFromObject(g),M=d.getCenter(new R),y=d.getSize(new R),v=Math.min(s==="landscape"?.21:.297,y.y*.45),C=Math.min(s==="landscape"?.297:.21,y.x*.8),S=d.min.y+y.y*.55,A=y.z*.7,L=new R(M.x,S,d.max.z+.005),w=new fn(0,0,0),E=new R(C,v,A),D=new R(M.x,S,d.min.z-.005),B=new fn(0,Math.PI,0),z=new R(C,v,A);try{const W=new $o(g,L,w,E);if(u){const X=W.attributes.uv;for(let Z=0;Z<X.count;Z++)X.setX(Z,X.getX(Z)*.5)}const V=new He(W,_);if(e.add(V),u){const X=new $o(g,D,B,z),Z=X.attributes.uv;for(let ue=0;ue<Z.count;ue++)Z.setX(ue,Z.getX(ue)*.5+.5);const G=new He(X,m);e.add(G)}if(p){const X=new R(M.x+y.x*.23,d.min.y+y.y*.75,d.max.z+.005),Z=new $o(g,X,w,new R(.09,.09,A)),G=o.clone();G.map=p,G.needsUpdate=!0,e.add(new He(Z,G))}}catch(W){console.error("Erreur Decal:",W)}}const c={group:n,topMaterial:r,applyDecals:l,type:"3d-decal",printAspect:yh,printable:[210,297],twoSided:!0,clearDecals(){for(i=null;e.children.length;){const h=e.children[0];e.remove(h),h.geometry?.dispose(),h.material?.dispose()}},setPrintOrientation(h){s=h==="landscape"?"landscape":"portrait",c.printable=s==="landscape"?[297,210]:[210,297],c.printAspect=c.printable[0]/c.printable[1]}};return c}},Y3=(n,e,t)=>{const i=-n/2,s=-e/2,r=new Ri;return r.moveTo(i+t,s),r.lineTo(i+n-t,s),r.quadraticCurveTo(i+n,s,i+n,s+t),r.lineTo(i+n,s+e-t),r.quadraticCurveTo(i+n,s+e,i+n-t,s+e),r.lineTo(i+t,s+e),r.quadraticCurveTo(i,s+e,i,s+e-t),r.lineTo(i,s+t),r.quadraticCurveTo(i,s,i+t,s),r},j3={id:"puzzle-120",name:"Puzzle 120 pièces",dimensions:[280,195,2],printable:[280,195],icon:"🧩",create(){const n=new Ft,e=2.8,t=1.95,i=Y3(e,t,.02),s=new Sn(i,{depth:.02,bevelEnabled:!0,bevelSegments:2,bevelSize:.005,bevelThickness:.005,curveSegments:8});s.rotateX(Math.PI/2),s.translate(0,-.015,0);const r=new xt({color:14735048,roughness:.9,metalness:0}),o=new He(s,r);o.castShadow=!0,o.receiveShadow=!0,n.add(o);const a=new Sn(i,{depth:.002,bevelEnabled:!1,curveSegments:8});a.rotateX(Math.PI/2),a.translate(0,.001,0);const l=a.attributes.position,c=a.attributes.uv;for(let S=0;S<l.count;S++){const A=(l.getX(S)+e/2)/e,L=(t/2-l.getZ(S))/t;c.setXY(S,A,L)}c.needsUpdate=!0;const h=document.createElement("canvas");h.width=1500,h.height=800;const u=h.getContext("2d");u.clearRect(0,0,1500,800),u.lineCap="round",u.lineJoin="round";const f=15,p=8,g=1500/f,_=800/p,m=()=>{u.beginPath();for(let S=1;S<f;S++){u.moveTo(S*g,0);for(let A=0;A<p;A++){const L=A*_,w=L+_/2,E=(S+A)%2===0?1:-1;u.lineTo(S*g,w-15),u.bezierCurveTo(S*g+25*E,w-15,S*g+25*E,w+15,S*g,w+15),u.lineTo(S*g,L+_)}}for(let S=1;S<p;S++){u.moveTo(0,S*_);for(let A=0;A<f;A++){const L=A*g,w=L+g/2,E=(A+S)%2===0?1:-1;u.lineTo(w-15,S*_),u.bezierCurveTo(w-15,S*_+25*E,w+15,S*_+25*E,w+15,S*_),u.lineTo(L+g,S*_)}}};u.save(),u.translate(-2,-2),u.strokeStyle="rgba(0, 0, 0, 0.7)",u.lineWidth=4,m(),u.stroke(),u.restore(),u.save(),u.translate(2,2),u.strokeStyle="rgba(255, 255, 255, 0.8)",u.lineWidth=4,m(),u.stroke(),u.restore(),u.save(),u.strokeStyle="rgba(10, 10, 10, 0.9)",u.lineWidth=2,m(),u.stroke(),u.restore();const d=new Hs(h);d.anisotropy=4;const M=new xt({color:16777215,roughness:.2,metalness:.1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),y=new He(a,M);y.receiveShadow=!0,n.add(y);const v=new _l({map:d,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),C=new He(a,v);return n.add(C),{group:n,top:y,topMaterial:M,baseMaterial:r,printAspect:e/t,type:"flat",printMesh:y,meshWidth:e,meshHeight:t}}},$3=(n,e,t)=>{const i=-n/2,s=-e/2,r=new Ri;return r.moveTo(i+t,s),r.lineTo(i+n-t,s),r.quadraticCurveTo(i+n,s,i+n,s+t),r.lineTo(i+n,s+e-t),r.quadraticCurveTo(i+n,s+e,i+n-t,s+e),r.lineTo(i+t,s+e),r.quadraticCurveTo(i,s+e,i,s+e-t),r.lineTo(i,s+t),r.quadraticCurveTo(i,s,i+t,s),r},Z3={id:"coaster-square",name:"Sous-verre carré",dimensions:[90,90,3],printable:[90,90],icon:"🔲",create(){const n=new Ft,e=.9,t=$3(e,e,.08),i=new Sn(t,{depth:.03,bevelEnabled:!0,bevelSegments:2,bevelSize:.005,bevelThickness:.005,curveSegments:16});i.rotateX(Math.PI/2),i.translate(0,-.015,0);const s=new xt({color:4008735,roughness:1,metalness:0}),r=new He(i,s);r.castShadow=!0,r.receiveShadow=!0,n.add(r);const o=new Sn(t,{depth:.004,bevelEnabled:!1,curveSegments:16});o.rotateX(Math.PI/2),o.translate(0,.002,0);const a=o.attributes.position,l=o.attributes.uv;for(let u=0;u<a.count;u++){const f=(a.getX(u)+e/2)/e,p=(e/2-a.getZ(u))/e;l.setXY(u,f,p)}l.needsUpdate=!0;const c=new Rn({color:16777215,roughness:.15,metalness:0,clearcoat:.5,clearcoatRoughness:.2,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),h=new He(o,c);return h.receiveShadow=!0,n.add(h),{group:n,top:h,topMaterial:c,baseMaterial:s,printAspect:1,type:"flat",printMesh:h,meshWidth:e,meshHeight:e}}},K3={id:"coaster-round",name:"Sous-verre rond (Caoutchouc)",dimensions:[100,100,3],printable:[100,100],icon:"⚪",create(){const n=new Ft,e=.5,t=new Bn(e,e,.03,64),i=new xt({color:2236962,roughness:.9,metalness:0}),s=new He(t,i);s.position.y=-.015,s.castShadow=!0,s.receiveShadow=!0,n.add(s);const r=new Bn(e,e,.002,64),o=new xt({color:16777215,roughness:.8,metalness:.1}),a=new He(r,o);a.position.y=.001,a.receiveShadow=!0,n.add(a);const l=r.attributes.position,c=r.attributes.uv;for(let h=0;h<l.count;h++)if(l.getY(h)>0){const f=(l.getX(h)/e+1)/2,p=(l.getZ(h)/e+1)/2;c.setXY(h,f,1-p)}return c.needsUpdate=!0,{group:n,top:a,topMaterial:o,baseMaterial:i,printAspect:1,type:"flat",printMesh:a,meshWidth:1,meshHeight:1}}},Sh=(n,e,t,i)=>{const s=new Pi(n,e,t,i),r=s.attributes.position;for(let o=0;o<r.count;o++){const a=r.getX(o),l=r.getY(o),c=a/(n/2),h=l/(e/2),f=Math.cos(c*Math.PI/2)*Math.cos(h*Math.PI/2)*.05;r.setZ(o,f)}return s.computeVertexNormals(),s},J3={id:"pencil-case",name:"Trousse de maquillage",dimensions:[210,130,10],printable:[210,130],icon:"👝",create(){const n=new Ft,e=2.1,t=1.3,i=Sh(e,t,32,32);let s=i.attributes.uv;for(let _=0;_<s.count;_++){let m=s.getX(_);s.setX(_,m*.5)}i.rotateX(-Math.PI/2);const r=new xt({color:16777215,roughness:.95,metalness:0}),o=new He(i,r);o.castShadow=!0,o.receiveShadow=!0,n.add(o);const a=Sh(e,t,32,32);s=a.attributes.uv;for(let _=0;_<s.count;_++){let m=1-s.getX(_);s.setX(_,m*.5+.5)}a.rotateX(Math.PI/2);const l=new xt({color:15658734,roughness:.95,metalness:0}),c=new He(a,r);c.castShadow=!0,c.receiveShadow=!0,n.add(c);const h=new Bn(.015,.015,e,8);h.rotateZ(Math.PI/2),h.translate(0,.005,-t/2);const u=new xt({color:2236962,roughness:.5,metalness:.3}),f=new He(h,u);n.add(f);const p=new qn(.04,.01,.08);p.translate(e/2-.1,.01,-t/2-.04);const g=new He(p,u);return n.add(g),{group:n,top:o,topMaterial:r,baseMaterial:l,printAspect:e/t,type:"flat",printMesh:o,meshWidth:e,meshHeight:t,twoSided:!0}}},Mh=(n,e)=>{const t=new Pi(n,n,e,e),i=t.attributes.position;for(let s=0;s<i.count;s++){const r=i.getX(s),o=i.getY(s),a=Math.sqrt(r*r+o*o)/(n/Math.sqrt(2)),l=Math.cos(a*Math.PI/2)*.15;i.setZ(s,l)}return t.computeVertexNormals(),t},Q3={id:"cushion",name:"Housse de Coussin (Sublimation)",dimensions:[400,400,150],printable:[400,400],icon:"🛋️",create(){const n=new Ft,e=2,t=Mh(e,32);let i=t.attributes.uv;for(let c=0;c<i.count;c++)i.setX(c,i.getX(c)*.5);t.rotateX(-Math.PI/2);const s=new xt({color:16777215,roughness:.9,metalness:0}),r=new He(t,s);r.castShadow=!0,r.receiveShadow=!0,n.add(r);const o=Mh(e,32);i=o.attributes.uv;for(let c=0;c<i.count;c++){let h=1-i.getX(c);i.setX(c,h*.5+.5)}o.rotateX(Math.PI/2);const a=new xt({color:16777215,roughness:.9,metalness:0}),l=new He(o,s);return l.castShadow=!0,l.receiveShadow=!0,n.add(l),{group:n,top:r,topMaterial:s,baseMaterial:a,printAspect:1,type:"flat",printMesh:r,meshWidth:e,meshHeight:e,twoSided:!0}}},ki=[[0,.0589],[0,.0589],[0,.0589],[0,.0597],[0,.0604],[0,.0611],[0,.0618],[0,.0625],[0,.0632],[0,.0639],[0,.0646],[0,.0653],[0,.066],[0,.0667],[0,.0674],[0,.0681],[0,.0688],[0,.0695],[0,.0702],[0,.0709],[0,.0717],[0,.0724],[0,.0731],[0,.0738],[0,.0745],[0,.0752],[0,.0759],[0,.0766],[0,.0773],[0,.078],[0,.0787],[0,.0794],[0,.0801],[0,.0808],[0,.0815],[0,.0822],[0,.0829],[0,.0837],[0,.0844],[0,.0851],[0,.0858],[0,.0865],[0,.0872],[0,.0879],[0,.0886],[0,.0893],[0,.09],[0,.0907],[0,.0914],[0,.0921],[0,.0928],[0,.0935],[0,.0942],[0,.0949],[0,.0956],[0,.0964],[0,.0971],[0,.0978],[0,.0985],[0,.0992],[0,.0999],[0,.1006],[0,.1013],[0,.102],[0,.1027],[0,.1034],[0,.1041],[0,.1048],[0,.1055],[0,.1062],[0,.1069],[0,.1076],[0,.1084],[0,.1091],[0,.1098],[0,.1105],[0,.1112],[0,.1119],[0,.1126],[0,.1133],[0,.114],[0,.1147],[0,.1154],[0,.1161],[0,.1168],[0,.1175],[0,.1182],[0,.1189],[0,.1196],[0,.1203],[0,.1211],[0,.1218],[0,.1225],[0,.1232],[0,.1239],[0,.1246],[0,.1253],[0,.126],[0,.1267],[0,.1274],[0,.1281],[0,.1288],[0,.1295],[0,.1302],[0,.1309],[0,.1316],[0,.1323],[0,.1331],[0,.1338],[0,.1345],[0,.1352],[0,.1359],[0,.1366],[0,.1373],[0,.138],[0,.1387],[0,.1394],[0,.1401],[0,.1408],[0,.1415],[0,.1422],[0,.1429],[0,.1436],[0,.1443],[0,.1451],[0,.1458],[0,.1465],[0,.1472],[0,.1479],[0,.1486],[0,.1493],[0,.15],[0,.1507],[0,.1514],[0,.1521],[0,.1528],[0,.1535],[0,.1542],[0,.1549],[0,.1556],[0,.1563],[0,.157],[0,.1578],[0,.1585],[0,.1592],[0,.1599],[0,.1606],[0,.1613],[0,.162],[0,.1627],[0,.1634],[0,.1641],[0,.1648],[0,.1655],[0,.1662],[0,.1669],[0,.1676],[0,.1683],[0,.169],[0,.1698],[0,.1705],[0,.1712],[0,.1719],[0,.1726],[0,.1733],[0,.174],[0,.1747],[0,.1754],[0,.1761],[0,.1768],[0,.1775],[0,.1782],[0,.1789],[0,.1796],[0,.1803],[0,.181],[0,.1818],[0,.1825],[0,.1832],[0,.1839],[0,.1846],[0,.1853],[0,.186],[0,.1867],[0,.1874],[0,.1881],[0,.1888],[0,.1895],[0,.1902],[0,.1909],[0,.1916],[0,.1923],[0,.193],[0,.1937],[0,.1945],[0,.1952],[0,.1959],[0,.1966],[0,.1973],[0,.198],[0,.1987],[0,.1994],[0,.2001],[0,.2008],[0,.2015],[0,.2022],[0,.2029],[0,.2036],[0,.2043],[0,.205],[0,.2057],[0,.2065],[0,.2072],[0,.2079],[0,.2086],[0,.2093],[0,.21],[0,.2107],[0,.2114],[0,.2121],[0,.2128],[0,.2135],[0,.2142],[0,.2149],[0,.2156],[0,.2163],[0,.217],[0,.2177],[0,.2185],[0,.2192],[0,.2199],[0,.2206],[0,.2213],[0,.222],[0,.2227],[0,.2234],[0,.2241],[0,.2248],[0,.2255],[0,.2262],[0,.2269],[0,.2276],[0,.2283],[0,.229],[0,.2297],[0,.2304],[0,.2312],[0,.2319],[0,.2326],[0,.2333],[0,.234],[0,.2347],[0,.2354],[0,.2361],[0,.2368],[0,.2375],[0,.2382],[0,.2389],[0,.2396],[0,.2403],[0,.241],[0,.2417],[0,.2424],[0,.2432],[0,.2439],[0,.2446],[0,.2453],[0,.246],[0,.2467],[0,.2474],[0,.2481],[0,.2488],[0,.2495],[0,.2502],[0,.2509],[0,.2516],[0,.2523],[0,.253],[0,.2537],[0,.2544],[0,.2551],[0,.2559],[0,.2566],[0,.2573],[0,.258],[0,.2587],[0,.2594],[0,.2601],[0,.2608],[0,.2615],[0,.2622],[0,.2629],[0,.2636],[0,.2643],[0,.265],[0,.2657],[0,.2664],[0,.2671],[0,.2679],[0,.2686],[0,.2693],[0,.27],[0,.2707],[0,.2714],[0,.2721],[0,.2728],[0,.2735],[0,.2742],[0,.2749],[0,.2756],[0,.2763],[0,.277],[0,.2777],[0,.2784],[0,.2791],[0,.2799],[0,.2806],[0,.2813],[0,.282],[0,.2827],[0,.2834],[0,.2841],[0,.2848],[0,.2855],[0,.2862],[0,.2869],[0,.2876],[0,.2883],[0,.289],[0,.2897],[0,.2904],[0,.2911],[0,.2918],[0,.2926],[0,.2933],[0,.294],[0,.2947],[0,.2954],[0,.2961],[0,.2968],[0,.2975],[0,.2982],[0,.2989],[0,.2996],[0,.3003],[0,.301],[0,.3017],[0,.3024],[0,.3031],[0,.3038],[0,.3046],[0,.3053],[0,.306],[0,.3067],[0,.3074],[0,.3081],[0,.3088],[0,.3095],[0,.3102],[0,.3109],[0,.3116],[0,.3123],[0,.313],[0,.3137],[0,.3144],[0,.3151],[0,.3158],[0,.3166],[0,.3173],[0,.318],[0,.3187],[0,.3194],[0,.3201],[0,.3208],[0,.3215],[0,.3222],[0,.3229],[0,.3236],[0,.3243],[0,.325],[0,.3257],[0,.3264],[0,.3271],[0,.3278],[0,.3285],[0,.3293],[0,.33],[0,.3307],[0,.3314],[0,.3321],[0,.3328],[0,.3335],[0,.3342],[0,.3349],[0,.3356],[0,.3363],[0,.337],[0,.3377],[0,.3384],[0,.3391],[0,.3398],[0,.3405],[0,.3413],[0,.342],[0,.3427],[0,.3434],[0,.3441],[0,.3448],[0,.3455],[0,.3462],[0,.3469],[0,.3476],[0,.3483],[0,.349],[0,.3497],[0,.3504],[0,.3511],[0,.3518],[0,.3525],[0,.3532],[0,.354],[0,.3547],[0,.3554],[0,.3561],[0,.3568],[0,.3575],[0,.3582],[0,.3589],[0,.3596],[0,.3603],[0,.361],[0,.3617],[0,.3624],[0,.3631],[0,.3638],[0,.3645],[0,.3652],[0,.366],[0,.3667],[0,.3674],[0,.3681],[0,.3688],[0,.3695],[0,.3702],[0,.3709],[0,.3716],[0,.3723],[0,.373],[0,.3737],[0,.3744],[0,.3751],[0,.3758],[0,.3765],[0,.3772],[0,.378],[0,.3787],[0,.3794],[0,.3801],[0,.3808],[0,.3815],[0,.3822],[0,.3829],[0,.3836],[0,.3843],[0,.385],[0,.3857],[0,.3864],[0,.3871],[0,.3878],[0,.3885],[0,.3892],[0,.3899],[0,.3907],[0,.3914],[0,.3921],[0,.3928],[0,.3935],[0,.3942],[0,.3949],[0,.3956],[0,.3963],[0,.397],[0,.3977],[0,.3984],[0,.3991],[0,.3998],[0,.4005],[0,.4012],[0,.4019],[0,.4027],[0,.4034],[0,.4041],[0,.4048],[0,.4055],[0,.4062],[0,.4069],[0,.4076],[0,.4083],[0,.409],[0,.4097],[0,.4104],[0,.4111],[0,.4118],[0,.4125],[0,.4132],[0,.4139],[0,.4147],[0,.4154],[0,.4161],[0,.4168],[0,.4175],[0,.4182],[0,.4189],[0,.4196],[0,.4203],[0,.421],[0,.4217],[0,.4224],[0,.4231],[0,.4238],[0,.4245],[0,.4252],[0,.4259],[0,.4266],[0,.4274],[0,.4281],[0,.4288],[0,.4295],[0,.4302],[0,.4309],[0,.4316],[0,.4323],[0,.433],[0,.4337],[0,.4344],[0,.4351],[0,.4358],[0,.4365],[0,.4372],[0,.4379],[0,.4386],[0,.4394],[0,.4401],[0,.4408],[0,.4415],[0,.4422],[0,.4429],[0,.4436],[0,.4443],[0,.445],[0,.4457],[0,.4464],[0,.4471],[0,.4478],[0,.4485],[0,.4492],[0,.4499],[0,.4506],[0,.4513],[0,.4521],[0,.4528],[0,.4535],[0,.4542],[0,.4549],[0,.4556],[0,.4563],[0,.457],[0,.4577],[0,.4584],[0,.4591],[0,.4598],[0,.4605],[0,.4612],[0,.4619],[0,.4626],[0,.4633],[0,.4641],[0,.4648],[0,.4655],[0,.4662],[0,.4669],[0,.4676],[0,.4683],[0,.469],[0,.4697],[0,.4704],[0,.4711],[0,.4718],[0,.4725],[0,.4732],[0,.4739],[0,.4746],[0,.4753],[0,.4761],[0,.4768],[0,.4775],[0,.4782],[0,.4789],[0,.4796],[0,.4803],[0,.481],[0,.4817],[0,.4824],[0,.4831],[0,.4838],[0,.4845],[0,.4852],[0,.4859],[0,.4866],[0,.4873],[0,.488],[0,.4888],[0,.4895],[0,.4902],[0,.4909],[0,.4916],[0,.4923],[0,.493],[0,.4937],[0,.4944],[0,.4951],[0,.4958],[0,.4965],[0,.4972],[0,.4979],[0,.4986],[0,.4993],[0,.5],[0,.5008],[0,.5015],[0,.5022],[0,.5029],[0,.5036],[0,.5043],[0,.505],[0,.5057],[0,.5064],[0,.5071],[0,.5078],[0,.5085],[0,.5092],[0,.5099],[0,.5106],[0,.5113],[0,.512],[0,.5128],[0,.5135],[0,.5142],[0,.5149],[0,.5156],[0,.5163],[0,.517],[0,.5177],[0,.5184],[0,.5191],[0,.5198],[0,.5205],[0,.5212],[0,.5219],[0,.5226],[0,.5233],[0,.524],[0,.5247],[0,.5255],[0,.5262],[0,.5269],[0,.5276],[0,.5283],[0,.529],[0,.5297],[0,.5304],[0,.5311],[0,.5318],[0,.5325],[0,.5332],[0,.5339],[0,.5346],[0,.5353],[0,.536],[0,.5367],[0,.5375],[0,.5382],[0,.5389],[0,.5396],[0,.5403],[0,.541],[0,.5417],[0,.5424],[0,.5431],[0,.5438],[0,.5445],[0,.5452],[0,.5459],[0,.5466],[0,.5473],[0,.548],[0,.5487],[0,.5494],[0,.5502],[0,.5509],[0,.5516],[0,.5523],[0,.553],[0,.5537],[0,.5544],[0,.5551],[0,.5558],[0,.5565],[0,.5572],[0,.5579],[0,.5586],[0,.5593],[0,.56],[0,.5607],[0,.5614],[0,.5622],[0,.5629],[0,.5636],[0,.5643],[0,.565],[0,.5657],[0,.5664],[0,.5671],[0,.5678],[0,.5685],[0,.5692],[0,.5699],[0,.5706],[0,.5713],[0,.572],[0,.5727],[0,.5734],[0,.5742],[0,.5749],[0,.5756],[0,.5763],[0,.577],[0,.5777],[0,.5784],[0,.5791],[0,.5798],[0,.5805],[0,.5812],[0,.5819],[0,.5826],[0,.5833],[0,.584],[0,.5847],[0,.5854],[0,.5861],[0,.5869],[0,.5876],[0,.5883],[0,.589],[0,.5897],[0,.5904],[0,.5911],[0,.5918],[0,.5925],[0,.5932],[0,.5939],[0,.5946],[0,.5953],[0,.596],[0,.5967],[0,.5974],[0,.5981],[0,.5989],[0,.5996],[0,.6003],[0,.601],[0,.6017],[0,.6024],[0,.6031],[0,.6038],[0,.6045],[0,.6052],[0,.6059],[0,.6066],[0,.6073],[0,.608],[0,.6087],[0,.6094],[0,.6101],[0,.6109],[0,.6116],[0,.6123],[0,.613],[0,.6137],[0,.6144],[0,.6151],[0,.6158],[0,.6165],[0,.6172],[0,.6179],[0,.6186],[0,.6193],[0,.62],[0,.6207],[0,.6214],[0,.6221],[0,.6228],[0,.6236],[0,.6243],[0,.625],[0,.6257],[0,.6264],[0,.6271],[0,.6278],[0,.6285],[0,.6292],[0,.6299],[0,.6306],[0,.6313],[0,.632],[0,.6327],[0,.6334],[0,.6341],[0,.6348],[0,.6356],[0,.6363],[0,.637],[0,.6377],[0,.6384],[0,.6391],[0,.6398],[0,.6405],[0,.6412],[0,.6419],[0,.6426],[0,.6433],[0,.644],[0,.6447],[0,.6454],[0,.6461],[0,.6468],[0,.6475],[0,.6483],[0,.649],[0,.6497],[0,.6504],[0,.6511],[0,.6518],[0,.6525],[0,.6532],[0,.6539],[0,.6546],[0,.6553],[0,.656],[0,.6567],[0,.6574],[0,.6581],[0,.6588],[0,.6595],[0,.6603],[0,.661],[0,.6617],[0,.6624],[0,.6631],[0,.6638],[0,.6645],[0,.6652],[0,.6659],[0,.6666],[0,.6673],[0,.668],[0,.6687],[0,.6694],[0,.6701],[0,.6708],[0,.6715],[0,.6723],[0,.673],[0,.6737],[0,.6744],[0,.6751],[0,.6758],[0,.6765],[0,.6772],[0,.6779],[0,.6786],[0,.6793],[0,.68],[0,.6807],[0,.6814],[0,.6821],[0,.6828],[0,.6835],[0,.6842],[0,.685],[0,.6857],[0,.6864],[0,.6871],[0,.6878],[0,.6885],[0,.6892],[0,.6899],[0,.6906],[0,.6913],[0,.692],[0,.6927],[0,.6934],[0,.6941],[0,.6948],[0,.6955],[0,.6962],[0,.697],[0,.6977],[0,.6984],[0,.6991],[0,.6998],[0,.7005],[0,.7012],[0,.7019],[0,.7026],[0,.7033],[0,.704],[0,.7047],[0,.7054],[0,.7061],[0,.7068],[0,.7075],[0,.7082],[0,.709],[0,.7097],[0,.7104],[0,.7111],[0,.7118],[0,.7125],[0,.7132],[0,.7139],[0,.7146],[0,.7153],[0,.716],[0,.7167],[0,.7174],[0,.7181],[0,.7188],[0,.7195],[0,.7202],[0,.7209],[0,.7217],[0,.7224],[0,.7231],[0,.7238],[0,.7245],[0,.7252],[0,.7259],[0,.7266],[0,.7273],[0,.728],[0,.7287],[0,.7294],[0,.7301],[0,.7308],[0,.7315],[0,.7322],[0,.7329],[0,.7337],[0,.7344],[0,.7351],[0,.7358],[0,.7365],[0,.7372],[0,.7379],[0,.7386],[0,.7393],[0,.74],[0,.7407],[0,.7414],[0,.7421],[0,.7428],[0,.7435],[0,.7442],[0,.7449],[0,.7457],[0,.7464],[0,.7471],[0,.7478],[0,.7485],[0,.7492],[0,.7499],[0,.7506],[0,.7513],[0,.752],[0,.7527],[0,.7534],[0,.7541],[0,.7548],[0,.7555],[0,.7562],[0,.7569],[0,.7576],[0,.7584],[0,.7591],[0,.7598],[0,.7605],[0,.7612],[0,.7619],[0,.7626],[0,.7633],[0,.764],[0,.7647],[0,.7654],[0,.7661],[0,.7668],[0,.7675],[0,.7682],[0,.7689],[0,.7696],[0,.7704],[0,.7711],[0,.7718],[0,.7725],[0,.7732],[0,.7739],[0,.7746],[0,.7753],[0,.776],[0,.7767],[0,.7774],[0,.7781],[0,.7788],[0,.7795],[0,.7802],[0,.7809],[0,.7816],[0,.7823],[0,.7831],[0,.7838],[0,.7845],[0,.7852],[0,.7859],[0,.7866],[0,.7873],[0,.788],[0,.7887],[0,.7894],[0,.7901],[0,.7908],[0,.7915],[0,.7922],[0,.7929],[0,.7936],[0,.7943],[0,.7951],[0,.7958],[0,.7965],[0,.7972],[0,.7979],[0,.7986],[0,.7993],[0,.8],[0,.8007],[0,.8014],[0,.8021],[0,.8028],[0,.8035],[0,.8042],[0,.8049],[0,.8056],[0,.8063],[0,.8071],[0,.8078],[0,.8085],[0,.8092],[0,.8099],[0,.8106],[0,.8113],[0,.812],[0,.8127],[0,.8134],[0,.8141],[0,.8148],[0,.8155],[0,.8162],[0,.8169],[0,.8176],[0,.8183],[0,.819],[0,.8198],[0,.8205],[0,.8212],[0,.8219],[0,.8226],[0,.8233],[0,.824],[0,.8247],[0,.8254],[0,.8261],[0,.8268],[0,.8275],[0,.8282],[0,.8289],[0,.8296],[0,.8303],[0,.831],[0,.8318],[0,.8325],[0,.8332],[0,.8339],[0,.8346],[0,.8353],[0,.836],[0,.8367],[0,.8374],[0,.8381],[0,.8388],[0,.8395],[0,.8402],[0,.8409],[0,.8416],[0,.8423],[0,.843],[0,.8438],[0,.8445],[0,.8452],[0,.8459],[0,.8466],[0,.8473],[0,.848],[0,.8487],[0,.8494],[0,.8501],[0,.8508],[0,.8515],[0,.8522],[0,.8529],[0,.8536],[0,.8543],[0,.855],[0,.8557],[0,.8565],[0,.8572],[0,.8579],[0,.8586],[0,.8593],[0,.86],[0,.8607],[0,.8614],[0,.8621],[0,.8628],[0,.8635],[0,.8642],[0,.8649],[0,.8656],[0,.8663],[0,.867],[0,.8677],[0,.8685],[0,.8692],[0,.8699],[0,.8706],[0,.8713],[0,.872],[0,.8727],[0,.8734],[0,.8741],[0,.8748],[0,.8755],[0,.8762],[0,.8769],[0,.8776],[0,.8783],[0,.879],[0,.8797],[0,.8804],[0,.8812],[0,.8819],[0,.8826],[0,.8833],[0,.884],[0,.8847],[0,.8854],[0,.8861],[0,.8868],[0,.8875],[0,.8882],[0,.8889],[0,.8896],[0,.8903],[0,.891],[0,.8917],[0,.8924],[0,.8932],[0,.8939],[0,.8946],[0,.8953],[0,.896],[0,.8967],[0,.8974],[0,.8981],[0,.8988],[0,.8995],[0,.9002],[0,.9009],[0,.9016],[0,.9023],[0,.903],[0,.9037],[0,.9044],[0,.9052],[0,.9059],[0,.9066],[0,.9073],[0,.908],[0,.9087],[0,.9094],[0,.9101],[0,.9108],[0,.9115],[0,.9122],[0,.9129],[0,.9136],[0,.9143],[0,.915],[0,.9157],[0,.9164],[0,.9171],[0,.9179],[0,.9186],[0,.9193],[0,.92],[0,.9207],[0,.9214],[0,.9221],[0,.9228],[0,.9235],[0,.9242],[0,.9249],[0,.9256],[0,.9263],[0,.927],[0,.9277],[0,.9284],[0,.9291],[0,.9299],[0,.9306],[0,.9313],[0,.932],[0,.9327],[0,.9334],[0,.9341],[0,.9348],[0,.9355],[0,.9362],[0,.9369],[0,.9376],[0,.9383],[0,.939],[0,.9397],[0,.9404],[0,.9411],[0,.9419],[0,.9426],[0,.9433],[0,.944],[0,.9447],[0,.9454],[0,.9461],[0,.9468],[0,.9475],[0,.9482],[0,.9489],[0,.9496],[0,.9503],[0,.951],[0,.9517],[0,.9524],[0,.9531],[0,.9538],[0,.9546],[0,.9553],[0,.956],[0,.9567],[0,.9574],[0,.9581],[0,.9588],[0,.9595],[0,.9602],[0,.9609],[0,.9616],[0,.9623],[0,.963],[0,.9637],[0,.9644],[0,.9651],[0,.9658],[0,.9666],[0,.9673],[0,.968],[0,.9687],[0,.9694],[0,.9701],[0,.9708],[0,.9715],[0,.9722],[0,.9729],[0,.9736],[0,.9743],[0,.975],[0,.9757],[0,.9764],[0,.9771],[0,.9778],[0,.9785],[0,.9793],[0,.98],[0,.9807],[0,.9814],[0,.9821],[0,.9828],[0,.9835],[0,.9842],[0,.9849],[0,.9856],[0,.9863],[0,.987],[0,.9877],[0,.9884],[0,.9891],[0,.9898],[0,.9905],[0,.9913],[0,.992],[0,.9927],[0,.9934],[0,.9941],[0,.9948],[0,.9955],[0,.9962],[0,.9969],[0,.9976],[0,.9983],[0,.999],[0,.9997],[0,1.0004],[0,1.0011],[0,1.0018],[0,1.0025],[0,1.0033],[0,1.004],[0,1.0047],[0,1.0054],[0,1.0061],[0,1.0068],[0,1.0075],[0,1.0082],[0,1.0089],[0,1.0096],[0,1.0103],[0,1.011],[0,1.0117],[0,1.0124],[0,1.0131],[0,1.0138],[0,1.0145],[0,1.0152],[0,1.016],[0,1.0167],[0,1.0174],[0,1.0181],[0,1.0188],[0,1.0195],[0,1.0202],[0,1.0209],[0,1.0216],[0,1.0223],[0,1.023],[0,1.0237],[0,1.0244],[0,1.0251],[0,1.0258],[0,1.0265],[0,1.0272],[0,1.028],[0,1.0287],[0,1.0294],[0,1.0301],[0,1.0308],[0,1.0315],[0,1.0322],[0,1.0329],[0,1.0336],[0,1.0343],[0,1.035],[0,1.0357],[0,1.0364],[0,1.0371],[0,1.0378],[0,1.0385],[0,1.0392],[0,1.04],[0,1.0407],[0,1.0414],[0,1.0421],[0,1.0428],[0,1.0435],[0,1.0442],[0,1.0449],[0,1.0456],[0,1.0463],[0,1.047],[0,1.0477],[0,1.0484],[0,1.0491],[0,1.0498],[0,1.0505],[0,1.0512],[0,1.0519],[0,1.0527],[0,1.0534],[0,1.0541],[0,1.0548],[0,1.0555],[0,1.0562],[0,1.0569],[0,1.0576],[0,1.0583],[0,1.059],[0,1.0597],[0,1.0604],[0,1.0611],[0,1.0618],[0,1.0625],[0,1.0632],[0,1.0639],[0,1.0647],[0,1.0654],[0,1.0661],[0,1.0668],[0,1.0675],[0,1.0682],[0,1.0689],[0,1.0696],[0,1.0703],[0,1.071],[0,1.0717],[0,1.0724],[0,1.0731],[0,1.0738],[0,1.0745],[0,1.0752],[0,1.0759],[0,1.0766],[0,1.0774],[0,1.0781],[0,1.0788],[0,1.0795],[0,1.0802],[0,1.0809],[0,1.0816],[0,1.0823],[0,1.083],[0,1.0837],[0,1.0844],[0,1.0851],[0,1.0858],[0,1.0865],[0,1.0872],[0,1.0879],[0,1.0886],[0,1.0894],[0,1.0901],[0,1.0908],[0,1.0915],[0,1.0922],[0,1.0929],[0,1.0936],[0,1.0943],[0,1.095],[0,1.0957],[0,1.0964],[0,1.0971],[0,1.0978],[0,1.0985],[0,1.0992],[0,1.0999],[0,1.1006],[0,1.1014],[0,1.1021],[0,1.1028],[0,1.1035],[0,1.1042],[0,1.1049],[0,1.1056],[0,1.1063],[0,1.107],[0,1.1077],[0,1.1084],[0,1.1091],[0,1.1098],[0,1.1105],[0,1.1112],[0,1.1119],[0,1.1126],[0,1.1133],[0,1.1141],[0,1.1148],[0,1.1155],[0,1.1162],[0,1.1169],[0,1.1176],[0,1.1183],[0,1.119],[0,1.1197],[0,1.1204],[0,1.1211],[0,1.1218],[0,1.1225],[0,1.1232],[0,1.1239],[0,1.1246],[0,1.1253],[0,1.1261],[0,1.1268],[0,1.1275],[0,1.1282],[0,1.1289],[0,1.1296],[0,1.1303],[0,1.131],[0,1.1317],[0,1.1324],[0,1.1331],[0,1.1338],[0,1.1345],[0,1.1352],[0,1.1359],[0,1.1366],[0,1.1373],[0,1.1381],[0,1.1388],[0,1.1395],[0,1.1402],[0,1.1409],[0,1.1416],[0,1.1423],[0,1.143],[0,1.1437],[0,1.1444],[0,1.1451],[0,1.1458],[0,1.1465],[0,1.1472],[0,1.1479],[0,1.1486],[0,1.1493],[0,1.15],[0,1.1508],[0,1.1515],[0,1.1522],[0,1.1529],[0,1.1536],[0,1.1543],[0,1.155],[0,1.1557],[0,1.1564],[0,1.1571],[0,1.1578],[0,1.1585],[0,1.1592],[0,1.1599],[0,1.1606],[0,1.1613],[0,1.162],[0,1.1628],[0,1.1635],[0,1.1642],[0,1.1649],[0,1.1656],[0,1.1663],[0,1.167],[0,1.1677],[0,1.1684],[0,1.1691],[0,1.1698],[0,1.1705],[0,1.1712],[0,1.1719],[0,1.1726],[0,1.1733],[0,1.174],[0,1.1747],[0,1.1755],[0,1.1762],[0,1.1769],[0,1.1776],[0,1.1783],[0,1.179],[0,1.1797],[0,1.1804],[0,1.1811],[0,1.1818],[0,1.1825],[0,1.1832],[0,1.1839],[0,1.1846],[0,1.1853],[0,1.186],[0,1.1867],[0,1.1875],[0,1.1882],[0,1.1889],[0,1.1896],[0,1.1903],[0,1.191],[0,1.1917],[0,1.1924],[0,1.1931],[0,1.1938],[0,1.1945],[0,1.1952],[0,1.1959],[0,1.1966],[0,1.1973],[0,1.198],[0,1.1987],[0,1.1995],[0,1.2002],[0,1.2009],[0,1.2016],[0,1.2023],[0,1.203],[0,1.2037],[0,1.2044],[0,1.2051],[0,1.2058],[0,1.2065],[0,1.2072],[0,1.2079],[0,1.2086],[0,1.2093],[0,1.21],[0,1.2107],[0,1.2114],[0,1.2122],[0,1.2129],[0,1.2136],[0,1.2143],[0,1.215],[0,1.2157],[0,1.2164],[0,1.2171],[0,1.2178],[0,1.2185],[0,1.2192],[0,1.2199],[0,1.2206],[0,1.2213],[0,1.222],[0,1.2227],[0,1.2234],[0,1.2242],[0,1.2249],[0,1.2256],[0,1.2263],[0,1.227],[0,1.2277],[0,1.2284],[0,1.2291],[0,1.2298],[0,1.2305],[0,1.2312],[0,1.2319],[0,1.2326],[0,1.2333],[0,1.234],[0,1.2347],[0,1.2354],[0,1.2362],[0,1.2369],[0,1.2376],[0,1.2383],[0,1.239],[0,1.2397],[0,1.2404],[0,1.2411],[0,1.2418],[0,1.2425],[0,1.2432],[0,1.2439],[0,1.2446],[0,1.2453],[0,1.246],[0,1.2467],[0,1.2474],[0,1.2481],[0,1.2489],[0,1.2496],[0,1.2503],[0,1.251],[0,1.2517],[0,1.2524],[0,1.2531],[0,1.2538],[0,1.2545],[0,1.2552],[0,1.2559],[0,1.2566],[0,1.2573],[0,1.258],[0,1.2587],[0,1.2594],[0,1.2601],[0,1.2609],[0,1.2616],[0,1.2623],[0,1.263],[0,1.2637],[0,1.2644],[0,1.2651],[0,1.2658],[0,1.2665],[0,1.2672],[0,1.2679],[0,1.2686],[0,1.2693],[0,1.27],[0,1.2707],[0,1.2714],[0,1.2721],[0,1.2729],[0,1.2736],[0,1.2743],[0,1.275],[0,1.2757],[0,1.2764],[0,1.2771],[0,1.2778],[0,1.2785],[0,1.2792],[0,1.2799],[0,1.2806],[0,1.2813],[0,1.282],[0,1.2827],[0,1.2834],[0,1.2841],[0,1.2848],[0,1.2856],[0,1.2863],[0,1.287],[0,1.2877],[0,1.2884],[0,1.2891],[0,1.2898],[0,1.2905],[0,1.2912],[0,1.2919],[0,1.2926],[0,1.2933],[0,1.294],[0,1.2947],[0,1.2954],[0,1.2961],[0,1.2968],[0,1.2976],[0,1.2983],[0,1.299],[0,1.2997],[0,1.3004],[0,1.3011],[0,1.3018],[0,1.3025],[0,1.3032],[0,1.3039],[0,1.3046],[0,1.3053],[0,1.306],[0,1.3067],[0,1.3074],[0,1.3081],[0,1.3088],[0,1.3095],[0,1.3103],[0,1.311],[0,1.3117],[0,1.3124],[0,1.3131],[0,1.3138],[0,1.3145],[0,1.3152],[0,1.3159],[0,1.3166],[0,1.3173],[0,1.318],[0,1.3187],[0,1.3194],[0,1.3201],[0,1.3208],[0,1.3215],[0,1.3223],[0,1.323],[0,1.3237],[0,1.3244],[0,1.3251],[0,1.3258],[0,1.3265],[0,1.3272],[0,1.3279],[0,1.3286],[0,1.3293],[0,1.33],[0,1.3307],[0,1.3314],[0,1.3321],[0,1.3328],[0,1.3335],[0,1.3343],[0,1.335],[0,1.3357],[0,1.3364],[0,1.3371],[0,1.3378],[0,1.3385],[0,1.3392],[0,1.3399],[0,1.3406],[0,1.3413],[0,1.342],[0,1.3427],[0,1.3434],[0,1.3441],[0,1.3448],[0,1.3455],[0,1.3462],[0,1.347],[0,1.3477],[0,1.3484],[0,1.3491],[0,1.3498],[0,1.3505],[0,1.3512],[0,1.3519],[0,1.3526],[0,1.3533],[0,1.354],[0,1.3547],[0,1.3554],[0,1.3561],[0,1.3568],[0,1.3575],[0,1.3582],[0,1.359],[0,1.3597],[0,1.3604],[0,1.3611],[0,1.3618],[0,1.3625],[0,1.3632],[0,1.3639],[0,1.3646],[0,1.3653],[0,1.366],[0,1.3667],[0,1.3674],[0,1.3681],[0,1.3688],[0,1.3695],[0,1.3702],[0,1.371],[0,1.3717],[0,1.3724],[0,1.3731],[0,1.3738],[0,1.3745],[0,1.3752],[0,1.3759],[0,1.3766],[0,1.3773],[0,1.378],[0,1.3787],[0,1.3794],[0,1.3801],[0,1.3808],[0,1.3815],[0,1.3822],[0,1.3829],[0,1.3837],[0,1.3844],[0,1.3851],[0,1.3858],[0,1.3865],[0,1.3872],[0,1.3879],[0,1.3886],[0,1.3893],[0,1.39],[0,1.3907],[0,1.3914],[0,1.3921],[0,1.3928],[0,1.3935],[0,1.3942],[0,1.3949],[0,1.3957],[0,1.3964],[0,1.3971],[0,1.3978],[0,1.3985],[0,1.3992],[0,1.3999],[0,1.4006],[0,1.4013],[0,1.402],[0,1.4027],[0,1.4034],[0,1.4041],[0,1.4048],[0,1.4055],[0,1.4062],[0,1.4069],[0,1.4076],[0,1.4084],[0,1.4091],[0,1.4098],[0,1.4105],[0,1.4112],[0,1.4119],[0,1.4126],[0,1.4133],[0,1.414],[0,1.4147],[0,1.4154],[0,1.4161],[0,1.4168],[0,1.4175],[0,1.4182],[0,1.4189],[0,1.4196],[0,1.4204],[0,1.4211],[0,1.4218],[0,1.4225],[0,1.4232],[0,1.4239],[0,1.4246],[0,1.4253],[0,1.426],[0,1.4267],[0,1.4274],[0,1.4281],[0,1.4288],[0,1.4295],[0,1.4302],[0,1.4309],[0,1.4316],[0,1.4324],[0,1.4331],[0,1.4338],[0,1.4345],[0,1.4352],[0,1.4359],[0,1.4366],[0,1.4373],[0,1.438],[0,1.4387],[0,1.4394],[0,1.4401],[0,1.4408],[0,1.4415],[0,1.4422],[0,1.4429],[0,1.4436],[0,1.4443],[0,1.4451],[0,1.4458],[0,1.4465],[0,1.4472],[0,1.4479],[0,1.4486],[0,1.4493],[0,1.45],[0,1.4507],[0,1.4514],[0,1.4521],[0,1.4528],[0,1.4535],[0,1.4542],[0,1.4549],[0,1.4556],[0,1.4563],[0,1.4571],[0,1.4578],[0,1.4585],[0,1.4592],[0,1.4599],[0,1.4606],[0,1.4613],[0,1.462],[0,1.4627],[0,1.4634],[0,1.4641],[0,1.4648],[0,1.4655],[0,1.4662],[0,1.4669],[0,1.4676],[0,1.4683],[0,1.4691],[0,1.4698],[0,1.4705],[0,1.4712],[0,1.4719],[0,1.4726],[0,1.4733],[0,1.474],[0,1.4747],[0,1.4754],[0,1.4761],[0,1.4768],[0,1.4775],[0,1.4782],[0,1.4789],[0,1.4796],[0,1.4803],[0,1.481],[0,1.4818],[0,1.4825],[0,1.4832],[0,1.4839],[0,1.4846],[0,1.4853],[0,1.486],[0,1.4867],[0,1.4874],[0,1.4881],[0,1.4888],[0,1.4895],[0,1.4902],[0,1.4909],[0,1.4916],[0,1.4923],[0,1.493],[0,1.4938],[0,1.4945],[0,1.4952],[0,1.4959],[0,1.4966],[0,1.4973],[0,1.498],[0,1.4987],[0,1.4994],[0,1.5001],[0,1.5008],[0,1.5015],[0,1.5022],[0,1.5029],[0,1.5036],[0,1.5043],[0,1.505],[0,1.5057],[0,1.5065],[0,1.5072],[0,1.5079],[0,1.5086],[0,1.5093],[0,1.51],[0,1.5107],[0,1.5114],[0,1.5121],[0,1.5128],[0,1.5135],[0,1.5142],[0,1.5149],[0,1.5156],[0,1.5163],[0,1.517],[0,1.5177],[0,1.5185],[0,1.5192],[0,1.5199],[0,1.5206],[0,1.5213],[0,1.522],[0,1.5227],[0,1.5234],[0,1.5241],[0,1.5248],[0,1.5255],[0,1.5262],[0,1.5269],[0,1.5276],[0,1.5283],[0,1.529],[0,1.5297],[0,1.5305],[0,1.5312],[0,1.5319],[0,1.5326],[0,1.5333],[0,1.534],[0,1.5347],[0,1.5354],[0,1.5361],[0,1.5368],[0,1.5375],[0,1.5382],[0,1.5389],[0,1.5396],[0,1.5403],[0,1.541],[0,1.5417],[0,1.5424],[0,1.5432],[0,1.5439],[0,1.5446],[0,1.5453],[0,1.546],[0,1.5467],[0,1.5474],[0,1.5481],[0,1.5488],[0,1.5495],[0,1.5502],[0,1.5509],[0,1.5516],[0,1.5523],[0,1.553],[0,1.5537],[0,1.5544],[0,1.5552],[0,1.5559],[0,1.5566],[0,1.5573],[0,1.558],[0,1.5587],[0,1.5594],[0,1.5601],[0,1.5608],[0,1.5615],[0,1.5622],[0,1.5629],[0,1.5636],[0,1.5643],[0,1.565],[0,1.5657],[0,1.5664],[0,1.5672],[0,1.5679],[0,1.5686],[0,1.5693],[0,1.57],[0,1.5707],[0,1.5714],[0,1.5721],[0,1.5728],[0,1.5735],[0,1.5742],[0,1.5749],[0,1.5756],[0,1.5763],[0,1.577],[0,1.5777],[0,1.5784],[0,1.5791],[0,1.5799],[0,1.5806],[0,1.5813],[0,1.582],[0,1.5827],[0,1.5834],[0,1.5841],[0,1.5848],[0,1.5855],[0,1.5862],[0,1.5869],[0,1.5876],[0,1.5883],[0,1.589],[0,1.5897],[0,1.5904],[0,1.5911],[0,1.5919],[0,1.5926],[0,1.5933],[0,1.594],[0,1.5947],[0,1.5954],[0,1.5961],[0,1.5968],[0,1.5975],[0,1.5982],[0,1.5989],[0,1.5996],[0,1.6003],[0,1.601],[0,1.6017],[0,1.6024],[0,1.6031],[0,1.6038],[0,1.6046],[0,1.6053],[0,1.606],[0,1.6067],[0,1.6074],[0,1.6081],[0,1.6088],[0,1.6095],[0,1.6102],[0,1.6109],[0,1.6116],[0,1.6123],[0,1.613],[0,1.6137],[0,1.6144],[0,1.6151],[0,1.6158],[0,1.6166],[0,1.6173],[0,1.618],[0,1.6187],[0,1.6194],[0,1.6201],[0,1.6208],[0,1.6215],[0,1.6222],[1e-4,1.623],[1e-4,1.6237],[2e-4,1.6244],[3e-4,1.6251],[5e-4,1.6259],[6e-4,1.6266],[8e-4,1.6272],[.0011,1.6279],[.0013,1.6286],[.0016,1.6292],[.0018,1.6299],[.0022,1.6305],[.0025,1.6312],[.0028,1.6318],[.0032,1.6324],[.0036,1.6329],[.004,1.6335],[.0044,1.6341],[.0049,1.6346],[.0054,1.6351],[.0058,1.6356],[.0064,1.6361],[.0069,1.6366],[.0074,1.637],[.008,1.6375],[.0085,1.6379],[.0091,1.6383],[.0097,1.6387],[.0103,1.639],[.011,1.6393],[.0116,1.6396],[.0123,1.6399],[.0129,1.6402],[.0136,1.6404],[.0143,1.6407],[.015,1.6409],[.0157,1.641],[.0164,1.6412],[.0172,1.6413],[.0176,1.6413],[.0181,1.6414],[.0188,1.6415],[.0196,1.6415],[.0203,1.6416],[.0211,1.6417],[.0218,1.6418],[.0225,1.6418],[.0233,1.6419],[.024,1.642],[.0248,1.6421],[.0255,1.6422],[.0263,1.6422],[.027,1.6423],[.0278,1.6424],[.0285,1.6425],[.0292,1.6425],[.03,1.6426],[.0307,1.6427],[.0315,1.6428],[.0323,1.6429],[.033,1.6429],[.0338,1.643],[.0345,1.6431],[.0353,1.6432],[.036,1.6432],[.0368,1.6433],[.0375,1.6434],[.0383,1.6435],[.039,1.6436],[.0397,1.6436],[.0404,1.6437],[.0411,1.6438],[.0418,1.6438],[.0426,1.6439],[.0433,1.644],[.044,1.6441],[.0447,1.6441],[.0454,1.6442],[.0461,1.6443],[.0468,1.6444],[.0475,1.6444],[.0482,1.6445],[.0489,1.6446],[.0496,1.6447],[.0503,1.6447],[.0511,1.6448],[.0518,1.6449],[.0525,1.645],[.0532,1.645],[.0539,1.6451],[.0546,1.6452],[.0553,1.6452],[.056,1.6453],[.0568,1.6454],[.0575,1.6455],[.0582,1.6455],[.0589,1.6456],[.0596,1.6457],[.0603,1.6458],[.061,1.6458],[.0617,1.6459],[.0624,1.646],[.0631,1.6461],[.0639,1.6461],[.0646,1.6462],[.0653,1.6463],[.066,1.6463],[.0667,1.6464],[.0674,1.6465],[.0681,1.6466],[.0688,1.6466],[.0695,1.6467],[.0702,1.6468],[.0709,1.6469],[.0716,1.6469],[.0723,1.647],[.073,1.6471],[.0737,1.6472],[.0744,1.6472],[.0751,1.6473],[.0758,1.6474],[.0765,1.6474],[.0772,1.6475],[.078,1.6476],[.0787,1.6477],[.0794,1.6477],[.0801,1.6478],[.0808,1.6479],[.0815,1.648],[.0822,1.648],[.0829,1.6481],[.0836,1.6482],[.0843,1.6482],[.085,1.6483],[.0857,1.6484],[.0864,1.6485],[.0871,1.6485],[.0878,1.6486],[.0885,1.6487],[.0892,1.6488],[.0899,1.6488],[.0906,1.6489],[.0914,1.649],[.0921,1.6491],[.0928,1.6491],[.0935,1.6492],[.0942,1.6493],[.0949,1.6493],[.0956,1.6494],[.0963,1.6495],[.097,1.6496],[.0977,1.6496],[.0984,1.6497],[.0991,1.6498],[.0998,1.6499],[.1005,1.6499],[.1012,1.65],[.1019,1.6501],[.1026,1.6501],[.1033,1.6502],[.1041,1.6503],[.1048,1.6504],[.1055,1.6504],[.1062,1.6505],[.1069,1.6506],[.1076,1.6507],[.1083,1.6507],[.109,1.6508],[.1098,1.6509],[.1105,1.651],[.1112,1.651],[.1119,1.6511],[.1126,1.6512],[.1133,1.6513],[.114,1.6513],[.1148,1.6514],[.1155,1.6515],[.1162,1.6515],[.1169,1.6516],[.1176,1.6517],[.1183,1.6518],[.119,1.6518],[.1197,1.6519],[.1204,1.652],[.1211,1.6521],[.1218,1.6521],[.1226,1.6522],[.1233,1.6523],[.124,1.6524],[.1247,1.6524],[.1254,1.6525],[.1261,1.6526],[.1268,1.6526],[.1275,1.6527],[.1282,1.6528],[.1289,1.6529],[.1296,1.6529],[.1303,1.653],[.131,1.6531],[.1317,1.6532],[.1324,1.6532],[.1331,1.6533],[.1338,1.6534],[.1345,1.6534],[.1352,1.6535],[.136,1.6536],[.1367,1.6537],[.1375,1.6538],[.1382,1.6538],[.139,1.6539],[.1397,1.654],[.1404,1.6541],[.1412,1.6541],[.1419,1.6542],[.1427,1.6543],[.1434,1.6544],[.1442,1.6544],[.1449,1.6545],[.1457,1.6546],[.1464,1.6547],[.1471,1.6548],[.1479,1.6548],[.1486,1.6549],[.1494,1.655],[.1501,1.6551],[.1508,1.6551],[.1516,1.6552],[.1523,1.6553],[.153,1.6554],[.1538,1.6554],[.1545,1.6555],[.1552,1.6556],[.156,1.6557],[.1567,1.6557],[.1574,1.6558],[.1581,1.6559],[.1589,1.656],[.1596,1.656],[.1603,1.6561],[.1611,1.6562],[.1618,1.6563],[.1625,1.6563],[.1632,1.6564],[.1639,1.6565],[.1647,1.6566],[.1654,1.6566],[.1661,1.6567],[.1668,1.6568],[.1675,1.6569],[.1682,1.6569],[.169,1.657],[.1697,1.6571],[.1704,1.6572],[.1711,1.6572],[.1718,1.6573],[.1725,1.6574],[.1732,1.6575],[.1739,1.6575],[.1746,1.6576],[.1753,1.6577],[.1761,1.6578],[.1769,1.6578],[.1777,1.6579],[.1785,1.658],[.1793,1.6581],[.1801,1.6582],[.181,1.6583],[.1818,1.6583],[.1826,1.6584],[.1834,1.6585],[.1842,1.6586],[.185,1.6587],[.1858,1.6588],[.1866,1.6588],[.1874,1.6589],[.1882,1.659],[.189,1.6591],[.1898,1.6592],[.1906,1.6593],[.1914,1.6593],[.1922,1.6594],[.193,1.6595],[.1938,1.6596],[.1946,1.6597],[.1953,1.6598],[.1961,1.6598],[.1969,1.6599],[.1977,1.66],[.1985,1.6601],[.1992,1.6602],[.2,1.6602],[.2008,1.6603],[.2015,1.6604],[.2023,1.6605],[.2031,1.6606],[.2038,1.6606],[.2046,1.6607],[.2054,1.6608],[.2061,1.6609],[.2069,1.6609],[.2076,1.661],[.2084,1.6611],[.2092,1.6612],[.2099,1.6613],[.2106,1.6613],[.2114,1.6614],[.2121,1.6615],[.2129,1.6616],[.2136,1.6616],[.2143,1.6617],[.2151,1.6618],[.2158,1.6619],[.2165,1.6619],[.2173,1.662],[.218,1.6621],[.2187,1.6622],[.2194,1.6622],[.2202,1.6623],[.2209,1.6624],[.2216,1.6625],[.2223,1.6625],[.223,1.6626],[.2237,1.6627],[.2244,1.6628],[.2251,1.6628],[.2259,1.6629],[.2266,1.663],[.2274,1.6631],[.2282,1.6632],[.229,1.6632],[.2299,1.6633],[.2307,1.6634],[.2315,1.6635],[.2323,1.6636],[.2331,1.6637],[.234,1.6638],[.2348,1.6638],[.2356,1.6639],[.2364,1.664],[.2372,1.6641],[.238,1.6642],[.2387,1.6642],[.2395,1.6643],[.2403,1.6644],[.2411,1.6645],[.2419,1.6646],[.2426,1.6646],[.2434,1.6647],[.2442,1.6648],[.2449,1.6649],[.2457,1.665],[.2464,1.665],[.2472,1.6651],[.2479,1.6652],[.2486,1.6653],[.2494,1.6653],[.2501,1.6654],[.2508,1.6655],[.2516,1.6656],[.2523,1.6656],[.253,1.6657],[.2537,1.6658],[.2546,1.6659],[.2555,1.666],[.2563,1.6661],[.2572,1.6662],[.258,1.6662],[.2589,1.6663],[.2597,1.6664],[.2606,1.6665],[.2614,1.6666],[.2622,1.6667],[.263,1.6668],[.2639,1.6668],[.2647,1.6669],[.2654,1.667],[.2662,1.6671],[.267,1.6672],[.2678,1.6673],[.2686,1.6673],[.2693,1.6674],[.2701,1.6675],[.2708,1.6676],[.2715,1.6676],[.2723,1.6677],[.273,1.6678],[.2737,1.6679],[.2744,1.6679],[.2751,1.668],[.2758,1.6681],[.2767,1.6682],[.2776,1.6683],[.2785,1.6684],[.2794,1.6685],[.2802,1.6685],[.2811,1.6686],[.2819,1.6687],[.2827,1.6688],[.2835,1.6689],[.2841,1.6689],[.2847,1.669],[.2852,1.6691],[.2858,1.6691],[.2864,1.6692],[.2869,1.6692],[.2874,1.6693],[.288,1.6693],[.2885,1.6694],[.289,1.6695],[.2895,1.6695],[.29,1.6696],[.2905,1.6696],[.291,1.6697],[.2914,1.6697],[.2919,1.6697],[.2923,1.6698],[.2928,1.6698],[.2932,1.6699],[.2936,1.6699],[.2941,1.67],[.2945,1.67],[.2949,1.6701],[.2952,1.6701],[.2956,1.6701],[.296,1.6702],[.2963,1.6702],[.2967,1.6702],[.297,1.6703],[.2974,1.6703],[.2977,1.6703],[.298,1.6704],[.2983,1.6704],[.2986,1.6704],[.2989,1.6705],[.2991,1.6705],[.2994,1.6705],[.2997,1.6706],[.2999,1.6706],[.3001,1.6706],[.3003,1.6706],[.3006,1.6706],[.3008,1.6707],[.301,1.6707],[.3011,1.6707],[.3013,1.6707],[.3015,1.6707],[.3016,1.6708],[.3018,1.6708],[.3019,1.6708],[.302,1.6708],[.3021,1.6708],[.3023,1.6708],[.3025,1.6708],[.3031,1.6709],[.3037,1.6709],[.3043,1.6709],[.3049,1.6709],[.3055,1.6709],[.306,1.6708],[.3066,1.6707],[.3071,1.6706],[.3076,1.6705],[.3082,1.6704],[.3086,1.6703],[.3091,1.6701],[.3096,1.6699],[.3101,1.6697],[.3105,1.6695],[.3109,1.6693],[.3113,1.6691],[.3117,1.6689],[.3121,1.6686],[.3125,1.6684],[.3129,1.6681],[.3132,1.6678],[.3136,1.6676],[.3139,1.6673],[.3142,1.667],[.3145,1.6667],[.3148,1.6664],[.3151,1.6661],[.3154,1.6658],[.3157,1.6655],[.3159,1.6652],[.3161,1.6649],[.3164,1.6646],[.3166,1.6643],[.3168,1.664],[.317,1.6637],[.3172,1.6634],[.3174,1.6631],[.3176,1.6628],[.3177,1.6625],[.3179,1.6622],[.318,1.662],[.3182,1.6617],[.3183,1.6614],[.3184,1.6612],[.3185,1.661],[.3186,1.6608],[.3187,1.6605],[.3188,1.6603],[.3189,1.6602],[.3189,1.66],[.319,1.6598],[.319,1.6597],[.3191,1.6596],[.3191,1.6595],[.3192,1.6594],[.3192,1.6593],[.3192,1.6593],[.3192,1.6592],[.3192,1.6592],[.3192,1.6592],[.3192,1.6592],[.3192,1.6591],[.3192,1.6591],[.3192,1.659],[.3192,1.6589],[.3193,1.6588],[.3193,1.6587],[.3193,1.6586],[.3193,1.6584],[.3193,1.6583],[.3193,1.6581],[.3194,1.6579],[.3194,1.6577],[.3194,1.6575],[.3194,1.6572],[.3195,1.657],[.3195,1.6567],[.3195,1.6564],[.3195,1.6561],[.3196,1.6558],[.3196,1.6555],[.3197,1.6552],[.3197,1.6549],[.3197,1.6545],[.3198,1.6541],[.3198,1.6537],[.3199,1.6533],[.3199,1.6529],[.3199,1.6525],[.32,1.6521],[.32,1.6516],[.3201,1.6512],[.3201,1.6507],[.3202,1.6502],[.3202,1.6497],[.3203,1.6492],[.3204,1.6487],[.3204,1.6482],[.3205,1.6477],[.3205,1.6471],[.3206,1.6466],[.3206,1.646],[.3207,1.6454],[.3208,1.6448],[.3208,1.6442],[.3209,1.6436],[.321,1.643],[.321,1.6424],[.3211,1.6417],[.3212,1.6411],[.3212,1.6404],[.3213,1.6398],[.3214,1.6391],[.3215,1.6384],[.3215,1.6377],[.3216,1.637],[.3217,1.6363],[.3218,1.6356],[.3218,1.6349],[.3219,1.6341],[.322,1.6334],[.3221,1.6326],[.3222,1.6319],[.3222,1.6311],[.3223,1.6303],[.3224,1.6295],[.3225,1.6288],[.3226,1.628],[.3227,1.6271],[.3228,1.6263],[.3228,1.6255],[.3229,1.6247],[.323,1.6239],[.3231,1.623],[.3232,1.6222],[.3233,1.6214],[.3234,1.6205],[.3235,1.6196],[.3236,1.6188],[.3236,1.6181],[.3237,1.6174],[.3238,1.6167],[.3239,1.616],[.3239,1.6153],[.324,1.6146],[.3241,1.6138],[.3242,1.6131],[.3243,1.6124],[.3243,1.6117],[.3244,1.611],[.3245,1.6102],[.3246,1.6095],[.3246,1.6088],[.3247,1.608],[.3248,1.6073],[.3249,1.6065],[.325,1.6058],[.325,1.6051],[.3251,1.6043],[.3252,1.6036],[.3253,1.6028],[.3254,1.602],[.3254,1.6013],[.3255,1.6005],[.3256,1.5998],[.3257,1.599],[.3258,1.5982],[.3259,1.5975],[.3259,1.5967],[.326,1.596],[.3261,1.5953],[.3262,1.5946],[.3262,1.5939],[.3263,1.5932],[.3264,1.5925],[.3265,1.5918],[.3265,1.5911],[.3266,1.5904],[.3267,1.5897],[.3268,1.589],[.3268,1.5883],[.3269,1.5876],[.327,1.5869],[.3271,1.5861],[.3272,1.5854],[.3272,1.5847],[.3273,1.584],[.3274,1.5833],[.3275,1.5826],[.3275,1.5819],[.3276,1.5812],[.3277,1.5805],[.3278,1.5798],[.3278,1.579],[.3279,1.5783],[.328,1.5776],[.3281,1.5769],[.3281,1.5762],[.3282,1.5755],[.3283,1.5748],[.3284,1.5741],[.3285,1.5734],[.3285,1.5727],[.3286,1.572],[.3287,1.5713],[.3288,1.5705],[.3288,1.5698],[.3289,1.5691],[.329,1.5684],[.3291,1.5677],[.3291,1.567],[.3292,1.5663],[.3293,1.5656],[.3294,1.5649],[.3294,1.5641],[.3295,1.5633],[.3296,1.5626],[.3297,1.5618],[.3298,1.561],[.3299,1.5603],[.3299,1.5595],[.33,1.5588],[.3301,1.558],[.3302,1.5573],[.3303,1.5565],[.3303,1.5558],[.3304,1.555],[.3305,1.5543],[.3306,1.5535],[.3307,1.5528],[.3307,1.5521],[.3308,1.5513],[.3309,1.5506],[.331,1.5499],[.3311,1.5492],[.3311,1.5484],[.3312,1.5477],[.3313,1.547],[.3314,1.5463],[.3314,1.5456],[.3315,1.5449],[.3316,1.5442],[.3317,1.5435],[.3318,1.5426],[.3319,1.5417],[.3319,1.5409],[.332,1.54],[.3321,1.5392],[.3322,1.5383],[.3323,1.5375],[.3324,1.5367],[.3325,1.5358],[.3326,1.535],[.3327,1.5342],[.3327,1.5334],[.3328,1.5326],[.3329,1.5318],[.333,1.5311],[.3331,1.5303],[.3332,1.5295],[.3332,1.5288],[.3333,1.528],[.3334,1.5273],[.3335,1.5265],[.3336,1.5258],[.3336,1.5251],[.3337,1.5244],[.3338,1.5237],[.3339,1.523],[.3339,1.5223],[.334,1.5216],[.3341,1.521],[.3342,1.5203],[.3342,1.5197],[.3343,1.519],[.3344,1.5184],[.3344,1.5178],[.3345,1.5172],[.3346,1.5166],[.3346,1.516],[.3347,1.5154],[.3347,1.5148],[.3348,1.5143],[.3349,1.5137],[.3349,1.5132],[.335,1.5127],[.335,1.5121],[.3351,1.5117],[.3351,1.5112],[.3352,1.5107],[.3352,1.5102],[.3353,1.5098],[.3353,1.5093],[.3354,1.5089],[.3354,1.5085],[.3355,1.5081],[.3355,1.5077],[.3356,1.5073],[.3356,1.5069],[.3356,1.5066],[.3357,1.5062],[.3357,1.5059],[.3357,1.5056],[.3358,1.5053],[.3358,1.505],[.3358,1.5047],[.3359,1.5044],[.3359,1.5042],[.3359,1.5039],[.3359,1.5037],[.336,1.5035],[.336,1.5033],[.336,1.5032],[.336,1.503],[.336,1.5028],[.336,1.5027],[.3361,1.5026],[.3361,1.5025],[.3361,1.5024],[.3361,1.5023],[.3361,1.5023],[.3361,1.5022],[.3361,1.5022],[.3361,1.5022],[.3361,1.5022],[.3361,1.5022],[.3361,1.5022],[.3361,1.5022],[.3361,1.5022],[.3361,1.5022],[.3361,1.5022],[.3361,1.5018],[.3361,1.5015],[.3361,1.5008],[.336,1.5001],[.336,1.4994],[.3359,1.4987],[.3358,1.4981],[.3357,1.4974],[.3356,1.4967],[.3355,1.4961],[.3353,1.4954],[.3352,1.4948],[.335,1.4941],[.3348,1.4935],[.3346,1.4928],[.3344,1.4922],[.3342,1.4916],[.3339,1.4909],[.3337,1.4903],[.3334,1.4897],[.3331,1.4891],[.3329,1.4885],[.3326,1.4879],[.3322,1.4872],[.3319,1.4866],[.3316,1.486],[.3312,1.4855],[.3309,1.4849],[.3305,1.4843],[.3301,1.4837],[.3297,1.4831],[.3293,1.4825],[.3289,1.4819],[.3285,1.4814],[.328,1.4808],[.3276,1.4802],[.3271,1.4796],[.3266,1.4791],[.3262,1.4785],[.3257,1.4779],[.3252,1.4774],[.3247,1.4768],[.3241,1.4762],[.3236,1.4757],[.3231,1.4751],[.3225,1.4746],[.322,1.474],[.3214,1.4735],[.3208,1.4729],[.3202,1.4724],[.3197,1.4718],[.3191,1.4712],[.3185,1.4707],[.3178,1.4701],[.3172,1.4696],[.3166,1.469],[.316,1.4685],[.3153,1.4679],[.3147,1.4674],[.314,1.4669],[.3134,1.4663],[.3127,1.4658],[.312,1.4652],[.3113,1.4647],[.3108,1.4642],[.3102,1.4638],[.3097,1.4633],[.3091,1.4629],[.3086,1.4624],[.308,1.462],[.3074,1.4616],[.3068,1.4611],[.3063,1.4607],[.3057,1.4602],[.3051,1.4598],[.3045,1.4593],[.3039,1.4589],[.3033,1.4584],[.3027,1.458],[.3021,1.4575],[.3015,1.4571],[.3009,1.4566],[.3003,1.4562],[.2997,1.4557],[.2991,1.4553],[.2985,1.4548],[.2979,1.4543],[.2973,1.4539],[.2967,1.4534],[.296,1.453],[.2954,1.4525],[.2948,1.452],[.2942,1.4516],[.2935,1.4511],[.2929,1.4506],[.2923,1.4501],[.2917,1.4497],[.291,1.4492],[.2904,1.4487],[.2898,1.4482],[.2891,1.4477],[.2885,1.4473],[.2878,1.4468],[.2872,1.4463],[.2866,1.4458],[.2859,1.4453],[.2853,1.4448],[.2847,1.4443],[.284,1.4438],[.2834,1.4433],[.2827,1.4428],[.2821,1.4423],[.2815,1.4418],[.2808,1.4413],[.2802,1.4407],[.2795,1.4402],[.2789,1.4397],[.2782,1.4392],[.2776,1.4387],[.277,1.4381],[.2763,1.4376],[.2757,1.437],[.2751,1.4365],[.2744,1.436],[.2738,1.4354],[.2732,1.4349],[.2725,1.4343],[.2719,1.4338],[.2713,1.4332],[.2706,1.4326],[.27,1.4321],[.2694,1.4315],[.2687,1.4309],[.2681,1.4304],[.2676,1.4299],[.2671,1.4294],[.2666,1.4289],[.266,1.4284],[.2655,1.4279],[.265,1.4274],[.2645,1.4269],[.264,1.4264],[.2635,1.4259],[.263,1.4254],[.2625,1.4249],[.262,1.4244],[.2615,1.4239],[.261,1.4234],[.2605,1.4228],[.26,1.4223],[.2595,1.4218],[.259,1.4213],[.2585,1.4207],[.258,1.4202],[.2575,1.4197],[.257,1.4191],[.2566,1.4186],[.2561,1.418],[.2556,1.4175],[.2551,1.4169],[.2547,1.4164],[.2542,1.4158],[.2537,1.4152],[.2532,1.4147],[.2528,1.4141],[.2523,1.4135],[.2519,1.413],[.2514,1.4124],[.251,1.4118],[.2505,1.4112],[.2501,1.4106],[.2496,1.41],[.2492,1.4094],[.2487,1.4088],[.2483,1.4082],[.2479,1.4076],[.2474,1.407],[.247,1.4064],[.2466,1.4058],[.2462,1.4051],[.2458,1.4045],[.2453,1.4039],[.2449,1.4032],[.2445,1.4026],[.2441,1.402],[.2437,1.4013],[.2433,1.4007],[.2429,1.4],[.2425,1.3993],[.2422,1.3987],[.2418,1.398],[.2414,1.3973],[.241,1.3967],[.2407,1.396],[.2403,1.3953],[.2399,1.3946],[.2396,1.3939],[.2392,1.3932],[.2389,1.3925],[.2385,1.3918],[.2382,1.3911],[.2378,1.3904],[.2375,1.3897],[.2372,1.389],[.2368,1.3882],[.2365,1.3875],[.2362,1.3868],[.2359,1.386],[.2356,1.3853],[.2353,1.3845],[.235,1.3838],[.2347,1.383],[.2344,1.3823],[.2341,1.3815],[.2338,1.3807],[.2336,1.38],[.2333,1.3792],[.233,1.3784],[.2328,1.3776],[.2325,1.3768],[.2323,1.376],[.232,1.3752],[.2318,1.3744],[.2315,1.3736],[.2313,1.3728],[.2311,1.3719],[.2309,1.3711],[.2307,1.3703],[.2305,1.3694],[.2303,1.3686],[.2301,1.3677],[.2299,1.3669],[.2297,1.366],[.2295,1.3652],[.2293,1.3643],[.2292,1.3634],[.229,1.3625],[.2288,1.3616],[.2287,1.3608],[.2285,1.3599],[.2284,1.3589],[.2283,1.358],[.2282,1.3571],[.228,1.3562],[.2279,1.3553],[.2278,1.3546],[.2278,1.3539],[.2277,1.3532],[.2276,1.3525],[.2275,1.3518],[.2275,1.3511],[.2274,1.3503],[.2274,1.3496],[.2273,1.3489],[.2273,1.3482],[.2272,1.3474],[.2272,1.3467],[.2271,1.346],[.2271,1.3452],[.2271,1.3445],[.227,1.3438],[.227,1.343],[.227,1.3422],[.227,1.3415],[.227,1.3407],[.227,1.34],[.227,1.3392],[.227,1.3384],[.227,1.3377],[.227,1.3369],[.227,1.3361],[.227,1.3353],[.227,1.3345],[.227,1.3338],[.2271,1.333],[.2271,1.3322],[.2271,1.3314],[.2272,1.3306],[.2272,1.3298],[.2273,1.3289],[.2273,1.3281],[.2274,1.3273],[.2274,1.3265],[.2275,1.3257],[.2276,1.3249],[.2277,1.324],[.2277,1.3232],[.2278,1.3223],[.2279,1.3215],[.228,1.3207],[.2281,1.3198],[.2282,1.319],[.2283,1.3181],[.2284,1.3172],[.2285,1.3164],[.2286,1.3155],[.2287,1.3146],[.2288,1.3139],[.229,1.3132],[.2291,1.3125],[.2292,1.3118],[.2293,1.3111],[.2294,1.3104],[.2295,1.3097],[.2296,1.309],[.2298,1.3083],[.2299,1.3075],[.23,1.3068],[.2302,1.3061],[.2303,1.3054],[.2304,1.3046],[.2306,1.3039],[.2307,1.3032],[.2309,1.3024],[.231,1.3017],[.2312,1.3009],[.2313,1.3002],[.2315,1.2994],[.2316,1.2987],[.2318,1.2979],[.232,1.2972],[.2321,1.2964],[.2323,1.2957],[.2325,1.2949],[.2327,1.2941],[.2329,1.2934],[.2331,1.2926],[.2333,1.2918],[.2335,1.291],[.2337,1.2903],[.2338,1.2895],[.234,1.2887],[.2343,1.2879],[.2345,1.2871],[.2347,1.2863],[.2349,1.2855],[.2351,1.2847],[.2353,1.2839],[.2356,1.2831],[.2358,1.2823],[.236,1.2815],[.2363,1.2807],[.2365,1.28],[.2367,1.2794],[.2369,1.2787],[.2371,1.278],[.2373,1.2773],[.2375,1.2766],[.2377,1.2759],[.2379,1.2753],[.2381,1.2746],[.2383,1.274],[.2385,1.2735],[.2386,1.2733],[.2387,1.273],[.2387,1.2729],[.2387,1.2727],[.2388,1.2726],[.2389,1.2724],[.2391,1.2717],[.2393,1.271],[.2395,1.2703],[.2398,1.2697],[.24,1.269],[.2402,1.2683],[.2404,1.2676],[.2406,1.267],[.2409,1.2663],[.2411,1.2655],[.2414,1.2648],[.2416,1.2641],[.2419,1.2633],[.2422,1.2626],[.2424,1.2618],[.2427,1.2611],[.2429,1.2603],[.2432,1.2596],[.2435,1.2588],[.2437,1.2581],[.244,1.2574],[.2443,1.2566],[.2445,1.2559],[.2448,1.2552],[.2451,1.2544],[.2453,1.2537],[.2456,1.253],[.2459,1.2523],[.2462,1.2515],[.2464,1.2508],[.2467,1.2501],[.247,1.2494],[.2472,1.2486],[.2475,1.2479],[.2478,1.2472],[.2481,1.2465],[.2484,1.2458],[.2486,1.2451],[.2489,1.2443],[.2492,1.2436],[.2495,1.2429],[.2498,1.2422],[.25,1.2415],[.2503,1.2408],[.2506,1.2401],[.2509,1.2394],[.2512,1.2387],[.2515,1.238],[.2518,1.2373],[.252,1.2366],[.2523,1.2359],[.2526,1.2352],[.2529,1.2345],[.2532,1.2338],[.2535,1.2331],[.2538,1.2324],[.2541,1.2318],[.2544,1.2311],[.2547,1.2304],[.255,1.2297],[.2553,1.229],[.2556,1.2283],[.2559,1.2277],[.2562,1.227],[.2565,1.2263],[.2568,1.2256],[.2571,1.225],[.2574,1.2243],[.2577,1.2236],[.258,1.223],[.2583,1.2223],[.2586,1.2216],[.2589,1.2209],[.2592,1.2203],[.2595,1.2196],[.2598,1.219],[.2601,1.2183],[.2604,1.2176],[.2608,1.217],[.2611,1.2163],[.2614,1.2157],[.2617,1.215],[.262,1.2144],[.2623,1.2137],[.2626,1.2131],[.263,1.2124],[.2633,1.2118],[.2636,1.2111],[.2639,1.2105],[.2642,1.2098],[.2645,1.2092],[.2649,1.2085],[.2652,1.2079],[.2655,1.2073],[.2658,1.2066],[.2661,1.206],[.2665,1.2053],[.2668,1.2047],[.2671,1.2041],[.2674,1.2035],[.2678,1.2028],[.2681,1.2022],[.2684,1.2016],[.2687,1.2009],[.2691,1.2003],[.2694,1.1996],[.2698,1.1989],[.2702,1.1982],[.2706,1.1975],[.271,1.1968],[.2713,1.1961],[.2717,1.1954],[.2721,1.1947],[.2725,1.194],[.2729,1.1933],[.2733,1.1926],[.2736,1.1919],[.274,1.1912],[.2744,1.1905],[.2748,1.1898],[.2752,1.1891],[.2756,1.1885],[.276,1.1878],[.2764,1.1871],[.2767,1.1864],[.2771,1.1857],[.2775,1.1851],[.2779,1.1844],[.2783,1.1837],[.2787,1.183],[.2791,1.1824],[.2795,1.1817],[.2799,1.181],[.2803,1.1804],[.2807,1.1797],[.2811,1.179],[.2815,1.1784],[.2819,1.1777],[.2823,1.1771],[.2827,1.1764],[.2831,1.1757],[.2835,1.1751],[.2839,1.1745],[.2843,1.1738],[.2847,1.1732],[.2851,1.1725],[.2855,1.1719],[.2859,1.1712],[.2864,1.1706],[.2868,1.1699],[.2872,1.1693],[.2876,1.1687],[.288,1.168],[.2884,1.1674],[.2888,1.1668],[.2892,1.1661],[.2897,1.1655],[.2901,1.1649],[.2905,1.1643],[.2909,1.1636],[.2913,1.163],[.2917,1.1624],[.2922,1.1618],[.2926,1.1612],[.293,1.1605],[.2934,1.1599],[.2938,1.1593],[.2942,1.1587],[.2947,1.1581],[.2951,1.1575],[.2955,1.1569],[.2959,1.1563],[.2964,1.1557],[.2968,1.1551],[.2972,1.1545],[.2976,1.1539],[.2981,1.1533],[.2985,1.1527],[.2989,1.1521],[.2994,1.1515],[.2998,1.1509],[.3002,1.1503],[.3006,1.1497],[.3011,1.1491],[.3015,1.1485],[.3019,1.148],[.3024,1.1474],[.3028,1.1468],[.3032,1.1462],[.3037,1.1456],[.3041,1.1451],[.3045,1.1445],[.305,1.1439],[.3054,1.1433],[.3058,1.1428],[.3063,1.1422],[.3067,1.1416],[.3072,1.1411],[.3076,1.1405],[.308,1.1399],[.3085,1.1394],[.3089,1.1388],[.3094,1.1383],[.3098,1.1377],[.3102,1.1372],[.3107,1.1366],[.3111,1.1361],[.3116,1.1355],[.312,1.1349],[.3125,1.1344],[.313,1.1338],[.3135,1.1331],[.314,1.1325],[.3145,1.1319],[.3151,1.1312],[.3156,1.1306],[.3161,1.13],[.3166,1.1294],[.3172,1.1287],[.3177,1.1281],[.3182,1.1275],[.3187,1.1269],[.3193,1.1263],[.3198,1.1257],[.3203,1.1251],[.3208,1.1244],[.3214,1.1238],[.3219,1.1232],[.3224,1.1226],[.323,1.122],[.3235,1.1214],[.324,1.1208],[.3246,1.1202],[.3251,1.1197],[.3256,1.1191],[.3261,1.1185],[.3267,1.1179],[.3272,1.1173],[.3278,1.1167],[.3283,1.1161],[.3288,1.1156],[.3294,1.115],[.3299,1.1144],[.3304,1.1138],[.331,1.1133],[.3315,1.1127],[.332,1.1121],[.3326,1.1116],[.3331,1.111],[.3337,1.1105],[.3342,1.1099],[.3347,1.1093],[.3353,1.1088],[.3358,1.1082],[.3364,1.1077],[.3369,1.1071],[.3374,1.1066],[.338,1.106],[.3385,1.1055],[.3391,1.1049],[.3396,1.1044],[.3402,1.1039],[.3407,1.1033],[.3413,1.1028],[.3418,1.1023],[.3423,1.1017],[.3429,1.1012],[.3434,1.1007],[.344,1.1001],[.3445,1.0996],[.3451,1.0991],[.3456,1.0986],[.3462,1.0981],[.3467,1.0975],[.3473,1.097],[.3478,1.0965],[.3484,1.096],[.3489,1.0955],[.3495,1.095],[.35,1.0945],[.3506,1.094],[.3511,1.0935],[.3517,1.093],[.3522,1.0925],[.3528,1.092],[.3533,1.0915],[.3539,1.091],[.3544,1.0905],[.355,1.09],[.3555,1.0895],[.3561,1.089],[.3566,1.0885],[.3572,1.0881],[.3577,1.0876],[.3583,1.0871],[.3588,1.0866],[.3594,1.0862],[.3599,1.0857],[.3605,1.0852],[.361,1.0847],[.3616,1.0843],[.3622,1.0838],[.3627,1.0833],[.3633,1.0829],[.3638,1.0824],[.3644,1.0819],[.3649,1.0815],[.3655,1.081],[.366,1.0806],[.3666,1.0801],[.3671,1.0797],[.3677,1.0792],[.3683,1.0788],[.3688,1.0783],[.3694,1.0779],[.3699,1.0774],[.3705,1.077],[.371,1.0766],[.3717,1.076],[.3724,1.0755],[.373,1.075],[.3737,1.0745],[.3744,1.0739],[.375,1.0734],[.3757,1.0729],[.3764,1.0724],[.377,1.0719],[.3777,1.0714],[.3783,1.0709],[.379,1.0704],[.3797,1.0699],[.3803,1.0694],[.381,1.0689],[.3817,1.0684],[.3823,1.0679],[.383,1.0675],[.3837,1.067],[.3843,1.0665],[.385,1.066],[.3857,1.0655],[.3863,1.0651],[.387,1.0646],[.3877,1.0641],[.3883,1.0637],[.389,1.0632],[.3896,1.0627],[.3903,1.0623],[.391,1.0618],[.3916,1.0614],[.3923,1.0609],[.393,1.0605],[.3936,1.06],[.3943,1.0595],[.3949,1.0591],[.3956,1.0587],[.3963,1.0582],[.3969,1.0578],[.3976,1.0573],[.3982,1.0569],[.3989,1.0565],[.3996,1.0561],[.4002,1.0556],[.4009,1.0552],[.4015,1.0548],[.4022,1.0544],[.4028,1.0539],[.4035,1.0535],[.4042,1.0531],[.4048,1.0527],[.4055,1.0523],[.4061,1.0519],[.4068,1.0515],[.4074,1.0511],[.4081,1.0507],[.4087,1.0503],[.4094,1.0499],[.41,1.0495],[.4107,1.0491],[.4113,1.0487],[.412,1.0483],[.4126,1.0479],[.4133,1.0475],[.4139,1.0472],[.4146,1.0468],[.4152,1.0464],[.4159,1.046],[.4165,1.0456],[.4172,1.0453],[.4178,1.0449],[.4184,1.0445],[.4191,1.0442],[.4197,1.0438],[.4204,1.0434],[.421,1.0431],[.4216,1.0427],[.4223,1.0424],[.4229,1.042],[.4236,1.0417],[.4242,1.0413],[.4248,1.041],[.4255,1.0406],[.4261,1.0403],[.4267,1.0399],[.4274,1.0396],[.428,1.0393],[.4286,1.0389],[.4293,1.0386],[.4299,1.0382],[.4305,1.0379],[.4312,1.0376],[.4318,1.0373],[.4324,1.0369],[.433,1.0366],[.4338,1.0362],[.4346,1.0358],[.4354,1.0354],[.4362,1.035],[.4369,1.0346],[.4377,1.0343],[.4385,1.0339],[.4392,1.0335],[.44,1.0331],[.4408,1.0327],[.4415,1.0324],[.4423,1.032],[.4431,1.0316],[.4438,1.0313],[.4446,1.0309],[.4453,1.0305],[.4461,1.0302],[.4469,1.0298],[.4476,1.0295],[.4484,1.0291],[.4491,1.0288],[.4499,1.0285],[.4506,1.0281],[.4513,1.0278],[.4521,1.0275],[.4528,1.0271],[.4536,1.0268],[.4543,1.0265],[.455,1.0261],[.4558,1.0258],[.4565,1.0255],[.4572,1.0252],[.4579,1.0249],[.4587,1.0246],[.4594,1.0243],[.4601,1.024],[.4608,1.0237],[.4615,1.0234],[.4623,1.0231],[.463,1.0228],[.4637,1.0225],[.4644,1.0222],[.4651,1.0219],[.4658,1.0216],[.4665,1.0213],[.4672,1.0211],[.4679,1.0208],[.4686,1.0205],[.4693,1.0203],[.4699,1.02],[.4706,1.0197],[.4713,1.0195],[.472,1.0192],[.4727,1.0189],[.4734,1.0187],[.474,1.0184],[.4747,1.0182],[.4754,1.0179],[.476,1.0177],[.4767,1.0174],[.4776,1.0171],[.4785,1.0168],[.4793,1.0165],[.4802,1.0162],[.4811,1.0159],[.4819,1.0156],[.4828,1.0153],[.4836,1.015],[.4845,1.0147],[.4853,1.0144],[.4861,1.0141],[.487,1.0138],[.4878,1.0136],[.4886,1.0133],[.4894,1.013],[.4902,1.0128],[.491,1.0125],[.4918,1.0123],[.4926,1.012],[.4934,1.0118],[.4942,1.0115],[.495,1.0113],[.4957,1.011],[.4965,1.0108],[.4973,1.0106],[.498,1.0104],[.4988,1.0101],[.4995,1.0099],[.5002,1.0097],[.501,1.0095],[.5017,1.0093],[.5024,1.0091],[.5031,1.0089],[.5038,1.0087],[.5045,1.0085],[.5052,1.0083],[.5059,1.0081],[.5066,1.0079],[.5073,1.0077],[.5083,1.0075],[.5093,1.0072],[.5102,1.007],[.5112,1.0067],[.5121,1.0065],[.5131,1.0062],[.514,1.006],[.5149,1.0058],[.5158,1.0056],[.5166,1.0054],[.5175,1.0052],[.5183,1.005],[.5191,1.0048],[.5199,1.0046],[.5207,1.0044],[.5215,1.0043],[.5222,1.0041],[.523,1.004],[.5237,1.0038],[.5244,1.0037],[.5251,1.0035],[.5258,1.0034],[.5264,1.0033],[.527,1.0031],[.5276,1.003],[.5283,1.0029],[.5288,1.0028],[.5294,1.0027],[.5299,1.0026],[.5305,1.0025],[.531,1.0024],[.5314,1.0023],[.5319,1.0022],[.5324,1.0022],[.5328,1.0021],[.5332,1.002],[.5336,1.002],[.534,1.0019],[.5343,1.0019],[.5346,1.0018],[.5349,1.0018],[.5352,1.0017],[.5355,1.0017],[.5357,1.0016],[.536,1.0016],[.5362,1.0016],[.5363,1.0016],[.5365,1.0015],[.5366,1.0015],[.5368,1.0015],[.5369,1.0015],[.5369,1.0015],[.537,1.0015],[.537,1.0015],[.537,1.0015],[.537,1.0015],[.537,1.0015],[.537,1.0015],[.537,1.0015],[.5371,1.0015],[.5371,1.0015],[.5371,1.0014],[.5373,1.0014],[.5374,1.0013],[.5381,1.0011],[.5387,1.0009],[.5393,1.0006],[.5399,1.0004],[.5405,1.0002],[.5411,.9999],[.5417,.9997],[.5422,.9994],[.5428,.9992],[.5433,.9989],[.5439,.9986],[.5444,.9984],[.5449,.9981],[.5454,.9978],[.5459,.9975],[.5464,.9972],[.5468,.9969],[.5473,.9967],[.5478,.9964],[.5482,.9961],[.5486,.9958],[.5491,.9955],[.5495,.9952],[.5499,.9949],[.5503,.9946],[.5507,.9942],[.5511,.9939],[.5514,.9936],[.5518,.9933],[.5521,.993],[.5528,.9923],[.5535,.9917],[.5541,.9911],[.5547,.9904],[.5552,.9898],[.5558,.9891],[.5563,.9885],[.5567,.9878],[.5572,.9871],[.5576,.9865],[.558,.9859],[.5584,.9852],[.5587,.9846],[.559,.9839],[.5593,.9833],[.5596,.9827],[.5598,.9821],[.5601,.9815],[.5603,.9809],[.5605,.9803],[.5607,.9797],[.5608,.9792],[.561,.9787],[.5611,.9781],[.5612,.9776],[.5613,.9771],[.5614,.9766],[.5615,.9762],[.5616,.9757],[.5616,.9753],[.5617,.9749],[.5617,.9745],[.5618,.9742],[.5618,.9738],[.5618,.9736],[.5618,.9733],[.5618,.973],[.5618,.9728],[.5618,.9726],[.5618,.9724],[.5618,.9723],[.5618,.9721],[.5618,.9721],[.5618,.972],[.5618,.972],[.5618,.972],[.5618,.972],[.5618,.9719],[.5618,.9719],[.5618,.9718],[.5618,.9717],[.5618,.9716],[.5618,.9715],[.5618,.9714],[.5618,.9712],[.5618,.9711],[.5618,.9709],[.5618,.9707],[.5618,.9704],[.5618,.9702],[.5618,.97],[.5618,.9697],[.5617,.9694],[.5617,.9691],[.5617,.9688],[.5617,.9685],[.5617,.9681],[.5617,.9678],[.5617,.9674],[.5617,.967],[.5617,.9666],[.5617,.9661],[.5616,.9657],[.5616,.9652],[.5616,.9648],[.5616,.9643],[.5616,.9638],[.5616,.9633],[.5616,.9627],[.5615,.9622],[.5615,.9616],[.5615,.961],[.5615,.9604],[.5615,.9598],[.5615,.9592],[.5614,.9586],[.5614,.9579],[.5614,.9573],[.5614,.9566],[.5614,.9559],[.5613,.9552],[.5613,.9544],[.5613,.9537],[.5613,.953],[.5613,.9522],[.5612,.9514],[.5612,.9506],[.5612,.9498],[.5612,.949],[.5611,.9482],[.5611,.9473],[.5611,.9465],[.5611,.9456],[.561,.9447],[.561,.9438],[.561,.9429],[.561,.942],[.5609,.941],[.5609,.9401],[.5609,.9391],[.5609,.9381],[.5608,.9372],[.5608,.9361],[.5608,.9351],[.5608,.9341],[.5607,.9331],[.5607,.9324],[.5607,.9317],[.5607,.931],[.5606,.9302],[.5606,.9295],[.5606,.9288],[.5606,.9281],[.5606,.9273],[.5605,.9266],[.5605,.9258],[.5605,.9251],[.5605,.9243],[.5605,.9236],[.5604,.9228],[.5604,.922],[.5604,.9212],[.5604,.9204],[.5603,.9197],[.5603,.9189],[.5603,.9181],[.5603,.9173],[.5603,.9164],[.5602,.9156],[.5602,.9148],[.5602,.914],[.5602,.9132],[.5601,.9123],[.5601,.9115],[.5601,.9106],[.5601,.9098],[.56,.9089],[.56,.9081],[.56,.9072],[.56,.9064],[.56,.9055],[.5599,.9046],[.5599,.9037],[.5599,.9028],[.5599,.9019],[.5598,.901],[.5598,.9001],[.5598,.8992],[.5598,.8983],[.5597,.8974],[.5597,.8965],[.5597,.8956],[.5596,.8946],[.5596,.8937],[.5596,.893],[.5596,.8923],[.5596,.8916],[.5595,.8909],[.5595,.8902],[.5595,.8895],[.5595,.8888],[.5595,.888],[.5594,.8873],[.5594,.8866],[.5594,.8859],[.5594,.8851],[.5594,.8844],[.5593,.8837],[.5593,.8829],[.5593,.8822],[.5593,.8815],[.5593,.8807],[.5592,.88],[.5592,.8792],[.5592,.8785],[.5592,.8777],[.5592,.877],[.5591,.8762],[.5591,.8754],[.5591,.8747],[.5591,.8739],[.559,.8732],[.559,.8724],[.559,.8716],[.559,.8708],[.559,.8701],[.5589,.8693],[.5589,.8685],[.5589,.8677],[.5589,.8669],[.5589,.8662],[.5588,.8654],[.5588,.8646],[.5588,.8638],[.5588,.863],[.5587,.8622],[.5587,.8614],[.5587,.8606],[.5587,.8599],[.5587,.8592],[.5586,.8584],[.5586,.8577],[.5586,.857],[.5586,.8563],[.5586,.8556],[.5585,.8548],[.5585,.8541],[.5585,.8534],[.5585,.8527],[.5585,.8519],[.5584,.8512],[.5584,.8504],[.5584,.8497],[.5584,.849],[.5584,.8482],[.5583,.8475],[.5583,.8468],[.5583,.846],[.5583,.8453],[.5583,.8445],[.5582,.8438],[.5582,.843],[.5582,.8423],[.5582,.8415],[.5581,.8408],[.5581,.84],[.5581,.8392],[.5581,.8385],[.5581,.8377],[.558,.837],[.558,.8362],[.558,.8354],[.558,.8347],[.558,.8339],[.5579,.8331],[.5579,.8324],[.5579,.8316],[.5579,.8308],[.5578,.83],[.5578,.8293],[.5578,.8285],[.5578,.8277],[.5578,.8269],[.5577,.8262],[.5577,.8255],[.5577,.8248],[.5577,.8241],[.5577,.8234],[.5576,.8227],[.5576,.822],[.5576,.8213],[.5576,.8206],[.5576,.8199],[.5575,.8191],[.5575,.8184],[.5575,.8177],[.5575,.817],[.5575,.8163],[.5574,.8155],[.5574,.8148],[.5574,.8141],[.5574,.8134],[.5574,.8127],[.5573,.8119],[.5573,.8112],[.5573,.8105],[.5573,.8097],[.5573,.809],[.5572,.8083],[.5572,.8076],[.5572,.8068],[.5572,.8061],[.5572,.8054],[.5571,.8046],[.5571,.8039],[.5571,.8032],[.5571,.8024],[.5571,.8017],[.557,.8009],[.557,.8002],[.557,.7995],[.557,.7987],[.557,.798],[.5569,.7972],[.5569,.7965],[.5569,.7957],[.5569,.795],[.5568,.7942],[.5568,.7935],[.5568,.7927],[.5568,.792],[.5568,.7912],[.5567,.7905],[.5567,.7897],[.5567,.789],[.5567,.7882],[.5567,.7875],[.5566,.7867],[.5566,.786],[.5566,.7852],[.5566,.7844],[.5566,.7837],[.5565,.7829],[.5565,.7822],[.5565,.7814],[.5565,.7806],[.5564,.7799],[.5564,.7791],[.5564,.7783],[.5564,.7776],[.5564,.7768],[.5563,.776],[.5563,.7753],[.5563,.7745],[.5563,.7737],[.5563,.773],[.5562,.7722],[.5562,.7714],[.5562,.7706],[.5562,.7699],[.5561,.7691],[.5561,.7683],[.5561,.7675],[.5561,.7668],[.5561,.7661],[.556,.7654],[.556,.7647],[.556,.764],[.556,.7633],[.556,.7626],[.5559,.7619],[.5559,.7612],[.5559,.7604],[.5559,.7597],[.5559,.759],[.5558,.7583],[.5558,.7576],[.5558,.7569],[.5558,.7562],[.5558,.7554],[.5557,.7547],[.5557,.754],[.5557,.7533],[.5557,.7526],[.5557,.7519],[.5556,.7511],[.5556,.7504],[.5556,.7497],[.5556,.749],[.5556,.7482],[.5555,.7475],[.5555,.7468],[.5555,.7461],[.5555,.7454],[.5555,.7446],[.5554,.7439],[.5554,.7432],[.5554,.7425],[.5554,.7417],[.5554,.741],[.5553,.7403],[.5553,.7395],[.5553,.7388],[.5553,.7381],[.5553,.7374],[.5552,.7366],[.5552,.7359],[.5552,.7352],[.5552,.7344],[.5552,.7337],[.5551,.733],[.5551,.7322],[.5551,.7315],[.5551,.7308],[.5551,.73],[.555,.7293],[.555,.7286],[.555,.7278],[.555,.7271],[.555,.7264],[.5549,.7256],[.5549,.7249],[.5549,.7242],[.5549,.7234],[.5548,.7227],[.5548,.7219],[.5548,.7212],[.5548,.7205],[.5548,.7197],[.5547,.719],[.5547,.7183],[.5547,.7175],[.5547,.7168],[.5547,.716],[.5546,.7153],[.5546,.7145],[.5546,.7138],[.5546,.7131],[.5546,.7123],[.5545,.7116],[.5545,.7108],[.5545,.7101],[.5545,.7093],[.5545,.7086],[.5544,.7079],[.5544,.7071],[.5544,.7064],[.5544,.7056],[.5544,.7049],[.5543,.7041],[.5543,.7034],[.5543,.7027],[.5543,.7019],[.5542,.7012],[.5542,.7005],[.5542,.6998],[.5542,.6991],[.5542,.6984],[.5541,.6976],[.5541,.6969],[.5541,.6962],[.5541,.6955],[.5541,.6948],[.554,.694],[.554,.6933],[.554,.6926],[.554,.6919],[.554,.6912],[.5539,.6905],[.5539,.6897],[.5539,.689],[.5539,.6883],[.5539,.6876],[.5538,.6869],[.5538,.6861],[.5538,.6854],[.5538,.6847],[.5538,.684],[.5537,.6833],[.5537,.6825],[.5537,.6818],[.5537,.6811],[.5537,.6804],[.5536,.6796],[.5536,.6789],[.5536,.6782],[.5536,.6775],[.5536,.6768],[.5535,.676],[.5535,.6753],[.5535,.6746],[.5535,.6739],[.5535,.6731],[.5534,.6724],[.5534,.6717],[.5534,.671],[.5534,.6703],[.5534,.6695],[.5533,.6688],[.5533,.6681],[.5533,.6673],[.5533,.6666],[.5533,.6659],[.5532,.6652],[.5532,.6644],[.5532,.6637],[.5532,.663],[.5532,.6623],[.5531,.6615],[.5531,.6608],[.5531,.6601],[.5531,.6594],[.5531,.6586],[.553,.6579],[.553,.6572],[.553,.6565],[.553,.6557],[.553,.655],[.5529,.6543],[.5529,.6536],[.5529,.6528],[.5529,.6521],[.5529,.6514],[.5528,.6507],[.5528,.65],[.5528,.6493],[.5528,.6486],[.5528,.6479],[.5527,.6471],[.5527,.6464],[.5527,.6457],[.5527,.645],[.5527,.6443],[.5526,.6436],[.5526,.6429],[.5526,.6422],[.5526,.6414],[.5526,.6407],[.5525,.64],[.5525,.6393],[.5525,.6386],[.5525,.6379],[.5525,.6372],[.5524,.6365],[.5524,.6358],[.5524,.635],[.5524,.6343],[.5524,.6336],[.5523,.6329],[.5523,.6322],[.5523,.6315],[.5523,.6308],[.5523,.6301],[.5522,.6293],[.5522,.6286],[.5522,.6279],[.5522,.6272],[.5522,.6265],[.5521,.6258],[.5521,.6251],[.5521,.6244],[.5521,.6236],[.5521,.6229],[.552,.6222],[.552,.6215],[.552,.6208],[.552,.6201],[.552,.6194],[.5519,.6186],[.5519,.6179],[.5519,.6172],[.5519,.6164],[.5519,.6157],[.5518,.615],[.5518,.6143],[.5518,.6135],[.5518,.6128],[.5518,.6121],[.5517,.6114],[.5517,.6106],[.5517,.6099],[.5517,.6092],[.5517,.6085],[.5516,.6077],[.5516,.607],[.5516,.6063],[.5516,.6056],[.5516,.6048],[.5515,.6041],[.5515,.6034],[.5515,.6027],[.5515,.6019],[.5515,.6012],[.5514,.6005],[.5514,.5998],[.5514,.599],[.5514,.5983],[.5514,.5976],[.5513,.5969],[.5513,.5961],[.5513,.5954],[.5513,.5947],[.5513,.594],[.5512,.5933],[.5512,.5925],[.5512,.5918],[.5512,.5911],[.5512,.5904],[.5511,.5896],[.5511,.5889],[.5511,.5882],[.5511,.5875],[.551,.5867],[.551,.586],[.551,.5853],[.551,.5846],[.551,.5839],[.5509,.5832],[.5509,.5824],[.5509,.5817],[.5509,.581],[.5509,.5803],[.5508,.5796],[.5508,.5788],[.5508,.5781],[.5508,.5774],[.5508,.5767],[.5507,.576],[.5507,.5752],[.5507,.5745],[.5507,.5738],[.5507,.5731],[.5506,.5724],[.5506,.5717],[.5506,.5709],[.5506,.5702],[.5506,.5695],[.5505,.5687],[.5505,.568],[.5505,.5672],[.5505,.5665],[.5505,.5657],[.5504,.565],[.5504,.5642],[.5504,.5635],[.5504,.5628],[.5504,.562],[.5503,.5613],[.5503,.5605],[.5503,.5598],[.5503,.559],[.5503,.5583],[.5502,.5576],[.5502,.5568],[.5502,.5561],[.5502,.5553],[.5501,.5546],[.5501,.5538],[.5501,.5531],[.5501,.5524],[.5501,.5516],[.55,.5509],[.55,.5502],[.55,.5494],[.55,.5487],[.55,.5479],[.5499,.5472],[.5499,.5465],[.5499,.5457],[.5499,.545],[.5499,.5443],[.5498,.5435],[.5498,.5428],[.5498,.5421],[.5498,.5413],[.5498,.5406],[.5497,.5398],[.5497,.5391],[.5497,.5384],[.5497,.5376],[.5497,.5369],[.5496,.5362],[.5496,.5355],[.5496,.5347],[.5496,.534],[.5496,.5333],[.5495,.5325],[.5495,.5318],[.5495,.5311],[.5495,.5304],[.5495,.5296],[.5494,.5289],[.5494,.5282],[.5494,.5275],[.5494,.5267],[.5494,.526],[.5493,.5253],[.5493,.5246],[.5493,.5238],[.5493,.5231],[.5492,.5224],[.5492,.5217],[.5492,.521],[.5492,.5202],[.5492,.5195],[.5491,.5188],[.5491,.5181],[.5491,.5174],[.5491,.5166],[.5491,.5159],[.549,.5152],[.549,.5145],[.549,.5138],[.549,.5131],[.549,.5124],[.5489,.5116],[.5489,.5109],[.5489,.5102],[.5489,.5095],[.5489,.5088],[.5488,.5081],[.5488,.5074],[.5488,.5067],[.5488,.506],[.5488,.5052],[.5487,.5044],[.5487,.5036],[.5487,.5029],[.5487,.5021],[.5487,.5013],[.5486,.5005],[.5486,.4997],[.5486,.499],[.5486,.4982],[.5486,.4974],[.5485,.4967],[.5485,.4959],[.5485,.4951],[.5485,.4944],[.5484,.4936],[.5484,.4928],[.5484,.4921],[.5484,.4913],[.5484,.4905],[.5483,.4898],[.5483,.489],[.5483,.4882],[.5483,.4875],[.5483,.4867],[.5482,.486],[.5482,.4852],[.5482,.4845],[.5482,.4837],[.5481,.4829],[.5481,.4822],[.5481,.4814],[.5481,.4807],[.5481,.4799],[.548,.4792],[.548,.4784],[.548,.4777],[.548,.4769],[.548,.4762],[.5479,.4754],[.5479,.4747],[.5479,.4739],[.5479,.4732],[.5479,.4725],[.5478,.4717],[.5478,.471],[.5478,.4702],[.5478,.4695],[.5477,.4688],[.5477,.468],[.5477,.4673],[.5477,.4666],[.5477,.4658],[.5476,.4651],[.5476,.4644],[.5476,.4636],[.5476,.4629],[.5476,.4622],[.5475,.4614],[.5475,.4607],[.5475,.46],[.5475,.4593],[.5475,.4585],[.5474,.4578],[.5474,.4571],[.5474,.4564],[.5474,.4557],[.5474,.4549],[.5473,.4542],[.5473,.4535],[.5473,.4528],[.5473,.4521],[.5473,.4514],[.5472,.4506],[.5472,.4499],[.5472,.4492],[.5472,.4485],[.5472,.4478],[.5471,.4471],[.5471,.4464],[.5471,.4456],[.5471,.4448],[.5471,.444],[.547,.4433],[.547,.4425],[.547,.4417],[.547,.4409],[.5469,.4402],[.5469,.4394],[.5469,.4386],[.5469,.4379],[.5469,.4371],[.5468,.4363],[.5468,.4356],[.5468,.4348],[.5468,.434],[.5468,.4333],[.5467,.4325],[.5467,.4317],[.5467,.431],[.5467,.4302],[.5466,.4295],[.5466,.4287],[.5466,.428],[.5466,.4272],[.5466,.4265],[.5465,.4257],[.5465,.425],[.5465,.4243],[.5465,.4235],[.5465,.4228],[.5464,.422],[.5464,.4213],[.5464,.4206],[.5464,.4198],[.5464,.4191],[.5463,.4184],[.5463,.4176],[.5463,.4169],[.5463,.4162],[.5463,.4155],[.5462,.4147],[.5462,.414],[.5462,.4133],[.5462,.4126],[.5461,.4118],[.5461,.411],[.5461,.4102],[.5461,.4094],[.5461,.4086],[.546,.4078],[.546,.407],[.546,.4062],[.546,.4054],[.546,.4046],[.5459,.4038],[.5459,.4031],[.5459,.4023],[.5459,.4015],[.5458,.4007],[.5458,.4],[.5458,.3992],[.5458,.3984],[.5458,.3976],[.5457,.3969],[.5457,.3961],[.5457,.3954],[.5457,.3946],[.5456,.3939],[.5456,.3931],[.5456,.3924],[.5456,.3916],[.5456,.3909],[.5455,.3901],[.5455,.3894],[.5455,.3886],[.5455,.3879],[.5455,.3872],[.5454,.3864],[.5454,.3857],[.5454,.385],[.5454,.3843],[.5454,.3835],[.5453,.3828],[.5453,.3821],[.5453,.3814],[.5453,.3807],[.5453,.38],[.5452,.3793],[.5452,.3783],[.5452,.3774],[.5452,.3765],[.5451,.3755],[.5451,.3746],[.5451,.3737],[.5451,.3728],[.545,.3719],[.545,.371],[.545,.3701],[.545,.3692],[.5449,.3683],[.5449,.3674],[.5449,.3665],[.5449,.3657],[.5448,.3648],[.5448,.3639],[.5448,.3631],[.5448,.3622],[.5447,.3614],[.5447,.3605],[.5447,.3597],[.5447,.3588],[.5446,.358],[.5446,.3572],[.5446,.3564],[.5446,.3555],[.5446,.3547],[.5445,.3539],[.5445,.3531],[.5445,.3523],[.5445,.3515],[.5444,.3507],[.5444,.35],[.5444,.3492],[.5444,.3484],[.5444,.3476],[.5443,.3469],[.5443,.3461],[.5443,.3454],[.5443,.3446],[.5442,.3439],[.5442,.3432],[.5442,.3424],[.5442,.3417],[.5442,.341],[.5441,.3403],[.5441,.3396],[.5441,.3385],[.5441,.3375],[.544,.3365],[.544,.3354],[.544,.3344],[.544,.3335],[.5439,.3325],[.5439,.3315],[.5439,.3306],[.5438,.3296],[.5438,.3287],[.5438,.3278],[.5438,.3269],[.5437,.326],[.5437,.3251],[.5437,.3243],[.5437,.3234],[.5437,.3226],[.5436,.3218],[.5436,.321],[.5436,.3202],[.5436,.3194],[.5435,.3186],[.5435,.3179],[.5435,.3172],[.5435,.3164],[.5435,.3157],[.5434,.315],[.5434,.3144],[.5434,.3137],[.5434,.313],[.5434,.3124],[.5433,.3118],[.5433,.3112],[.5433,.3106],[.5433,.31],[.5433,.3094],[.5433,.3089],[.5433,.3084],[.5432,.3078],[.5432,.3073],[.5432,.3068],[.5432,.3064],[.5432,.3059],[.5432,.3055],[.5432,.3051],[.5432,.3047],[.5431,.3042],[.5431,.3039],[.5431,.3035],[.5431,.3032],[.5431,.3028],[.5431,.3025],[.5431,.3022],[.5431,.3019],[.5431,.3017],[.5431,.3014],[.5431,.3012],[.5431,.301],[.543,.3008],[.543,.3006],[.543,.3004],[.543,.3003],[.543,.3001],[.543,.3],[.543,.2999],[.543,.2998],[.543,.2997],[.543,.2997],[.543,.2997],[.543,.2997],[.543,.2996],[.543,.2996],[.543,.2996],[.543,.2996],[.543,.2996],[.543,.2994],[.543,.2993],[.543,.299],[.543,.2988],[.5429,.2983],[.5429,.2978],[.5429,.2973],[.5428,.2968],[.5428,.2963],[.5427,.2958],[.5426,.2953],[.5426,.2949],[.5424,.294],[.5422,.2931],[.542,.2922],[.5418,.2913],[.5415,.2905],[.5413,.2897],[.541,.2889],[.5407,.2882],[.5404,.2875],[.5401,.2867],[.5397,.286],[.5394,.2854],[.539,.2847],[.5386,.2841],[.5382,.2835],[.5378,.2829],[.5374,.2823],[.537,.2818],[.5366,.2812],[.5361,.2807],[.5357,.2802],[.5353,.2797],[.5348,.2793],[.5344,.2788],[.5339,.2784],[.5335,.278],[.5331,.2776],[.5326,.2773],[.5322,.2769],[.5317,.2766],[.5313,.2762],[.5309,.2759],[.5305,.2756],[.5301,.2754],[.5297,.2751],[.5293,.2749],[.5289,.2746],[.5285,.2744],[.5282,.2742],[.5279,.274],[.5275,.2739],[.5272,.2737],[.5269,.2736],[.5266,.2734],[.5264,.2733],[.5262,.2732],[.5259,.2731],[.5257,.273],[.5256,.2729],[.5254,.2729],[.5253,.2728],[.5252,.2728],[.5251,.2728],[.525,.2727],[.525,.2727],[.525,.2727],[.525,.2727],[.525,.2727],[.525,.2727],[.525,.2727],[.525,.2727],[.525,.2727],[.5248,.2726],[.5247,.2725],[.5241,.2722],[.5236,.2719],[.5231,.2715],[.5226,.2712],[.5221,.2708],[.5216,.2704],[.5212,.2699],[.5207,.2695],[.5203,.269],[.5199,.2686],[.5195,.2681],[.5191,.2676],[.5187,.2671],[.5184,.2666],[.518,.2661],[.5177,.2656],[.5173,.265],[.517,.2645],[.5167,.264],[.5164,.2634],[.5161,.2629],[.5159,.2623],[.5156,.2618],[.5153,.2612],[.5151,.2607],[.5149,.2601],[.5146,.2595],[.5144,.259],[.5142,.2585],[.514,.2579],[.5139,.2574],[.5137,.2568],[.5135,.2563],[.5133,.2558],[.5132,.2553],[.5131,.2548],[.5129,.2543],[.5128,.2538],[.5127,.2534],[.5126,.2529],[.5125,.2525],[.5124,.2521],[.5123,.2517],[.5122,.2513],[.5121,.2509],[.512,.2506],[.512,.2502],[.5119,.2499],[.5119,.2496],[.5118,.2494],[.5118,.2491],[.5118,.2489],[.5117,.2487],[.5117,.2485],[.5117,.2484],[.5117,.2482],[.5116,.2482],[.5116,.2481],[.5116,.2481],[.5116,.248],[.5116,.248],[.5116,.2479],[.5116,.2478],[.5116,.2478],[.5116,.2476],[.5116,.2475],[.5115,.2474],[.5115,.2472],[.5115,.247],[.5115,.2468],[.5114,.2466],[.5114,.2463],[.5114,.2461],[.5113,.2458],[.5113,.2455],[.5113,.2452],[.5112,.2449],[.5112,.2445],[.5111,.2441],[.5111,.2438],[.511,.2434],[.511,.243],[.5109,.2425],[.5108,.2421],[.5108,.2416],[.5107,.2412],[.5106,.2407],[.5106,.2402],[.5105,.2396],[.5104,.2391],[.5104,.2385],[.5103,.238],[.5102,.2374],[.5101,.2368],[.51,.2362],[.51,.2356],[.5099,.2349],[.5098,.2343],[.5097,.2336],[.5096,.2329],[.5095,.2322],[.5094,.2315],[.5093,.2308],[.5092,.2301],[.5091,.2293],[.509,.2286],[.5089,.2278],[.5088,.227],[.5087,.2262],[.5086,.2254],[.5085,.2246],[.5084,.2238],[.5083,.2229],[.5082,.2221],[.508,.2212],[.5079,.2203],[.5078,.2194],[.5077,.2186],[.5076,.2176],[.5074,.2167],[.5073,.2158],[.5072,.2149],[.5071,.2139],[.5069,.2129],[.5068,.212],[.5067,.211],[.5065,.21],[.5064,.209],[.5063,.208],[.5061,.207],[.506,.206],[.5059,.2049],[.5058,.2042],[.5057,.2035],[.5056,.2028],[.5055,.2021],[.5054,.2014],[.5053,.2007],[.5052,.2],[.5051,.1993],[.505,.1985],[.5049,.1978],[.5048,.1971],[.5047,.1964],[.5046,.1956],[.5045,.1949],[.5044,.1941],[.5043,.1934],[.5042,.1926],[.5041,.1919],[.504,.1911],[.5039,.1904],[.5038,.1896],[.5037,.1889],[.5036,.1881],[.5035,.1873],[.5034,.1866],[.5033,.1858],[.5032,.185],[.5031,.1842],[.503,.1834],[.5029,.1827],[.5028,.1819],[.5027,.1811],[.5026,.1803],[.5025,.1795],[.5024,.1787],[.5023,.1779],[.5022,.1771],[.502,.1763],[.5019,.1755],[.5018,.1747],[.5017,.1739],[.5016,.1731],[.5015,.1724],[.5014,.1717],[.5013,.171],[.5012,.1703],[.5011,.1696],[.5011,.1689],[.501,.1682],[.5009,.1674],[.5008,.1667],[.5007,.166],[.5006,.1653],[.5005,.1646],[.5004,.1639],[.5003,.1632],[.5002,.1625],[.5001,.1618],[.5,.161],[.4999,.1603],[.4998,.1596],[.4997,.1589],[.4996,.1582],[.4995,.1574],[.4994,.1567],[.4993,.156],[.4992,.1553],[.4991,.1546],[.499,.1538],[.4989,.1531],[.4989,.1524],[.4988,.1517],[.4987,.1509],[.4986,.1502],[.4985,.1495],[.4984,.1488],[.4983,.148],[.4982,.1473],[.4981,.1466],[.498,.1459],[.4979,.1452],[.4978,.1445],[.4977,.1438],[.4976,.1431],[.4975,.1424],[.4974,.1417],[.4973,.141],[.4972,.1403],[.4971,.1396],[.497,.1389],[.497,.1382],[.4969,.1375],[.4968,.1368],[.4967,.136],[.4966,.1353],[.4965,.1346],[.4964,.1339],[.4963,.1332],[.4962,.1325],[.4961,.1318],[.496,.1311],[.4959,.1304],[.4958,.1297],[.4957,.129],[.4956,.1283],[.4955,.1276],[.4954,.1269],[.4953,.1261],[.4953,.1254],[.4952,.1247],[.4951,.124],[.495,.1232],[.4949,.1225],[.4948,.1218],[.4947,.1211],[.4946,.1203],[.4945,.1196],[.4944,.1189],[.4943,.1182],[.4942,.1174],[.4941,.1167],[.494,.116],[.4939,.1153],[.4938,.1146],[.4937,.1138],[.4936,.1131],[.4935,.1124],[.4934,.1117],[.4933,.111],[.4932,.1103],[.4931,.1096],[.493,.1089],[.4929,.1081],[.4929,.1074],[.4928,.1067],[.4927,.106],[.4926,.1053],[.4925,.1046],[.4924,.1039],[.4923,.1032],[.4922,.1025],[.4921,.1017],[.492,.1009],[.4919,.1001],[.4918,.0993],[.4917,.0985],[.4916,.0977],[.4914,.0969],[.4913,.0961],[.4912,.0953],[.4911,.0945],[.491,.0937],[.4909,.0929],[.4908,.0921],[.4907,.0913],[.4906,.0906],[.4905,.0898],[.4904,.089],[.4903,.0882],[.4902,.0874],[.4901,.0867],[.49,.0859],[.4899,.0851],[.4898,.0844],[.4897,.0836],[.4896,.0829],[.4895,.0821],[.4894,.0814],[.4893,.0806],[.4892,.0799],[.4891,.0791],[.489,.0784],[.4889,.0777],[.4888,.0769],[.4887,.0762],[.4886,.0755],[.4885,.0748],[.4884,.0741],[.4883,.0733],[.4882,.0726],[.4881,.0719],[.488,.0712],[.4879,.0705],[.4878,.0695],[.4877,.0684],[.4875,.0674],[.4874,.0664],[.4873,.0654],[.4871,.0644],[.487,.0634],[.4869,.0624],[.4867,.0615],[.4866,.0605],[.4865,.0596],[.4864,.0586],[.4862,.0577],[.4861,.0568],[.486,.0559],[.4859,.055],[.4858,.0541],[.4856,.0532],[.4855,.0524],[.4854,.0515],[.4853,.0507],[.4852,.0498],[.4851,.049],[.485,.0482],[.4849,.0474],[.4848,.0467],[.4847,.0459],[.4846,.0451],[.4845,.0444],[.4844,.0437],[.4843,.043],[.4842,.0422],[.4841,.0416],[.484,.0409],[.4839,.0402],[.4838,.0396],[.4837,.0389],[.4837,.0383],[.4836,.0377],[.4835,.0371],[.4834,.0365],[.4834,.036],[.4833,.0354],[.4832,.0349],[.4831,.0344],[.4831,.0339],[.483,.0334],[.4829,.0329],[.4829,.0325],[.4828,.032],[.4828,.0316],[.4827,.0312],[.4827,.0308],[.4826,.0304],[.4826,.0302],[.4826,.0301],[.4826,.03],[.4825,.0299],[.4825,.0299],[.4825,.0299],[.4825,.0298],[.4825,.0298],[.4825,.0298],[.4825,.0297],[.4825,.0296],[.4825,.0296],[.4825,.0294],[.4825,.0292],[.4824,.029],[.4824,.0289],[.4824,.0288],[.4824,.0287],[.4824,.0286],[.4824,.0286],[.4824,.0286],[.4824,.0286],[.4824,.0286],[.4824,.0286],[.4823,.0285],[.4823,.0284],[.4823,.0282],[.4823,.0281],[.4822,.0277],[.4822,.0274],[.482,.0268],[.4819,.0262],[.4818,.0256],[.4817,.025],[.4815,.0244],[.4814,.0238],[.4812,.0232],[.481,.0227],[.4809,.0221],[.4807,.0216],[.4805,.021],[.4803,.0205],[.4802,.02],[.48,.0195],[.4798,.019],[.4796,.0185],[.4794,.018],[.4792,.0175],[.4789,.017],[.4787,.0166],[.4785,.0161],[.4783,.0157],[.478,.0153],[.4778,.0148],[.4776,.0144],[.4773,.014],[.4768,.0132],[.4763,.0124],[.4758,.0117],[.4753,.011],[.4747,.0103],[.4742,.0097],[.4736,.009],[.4731,.0084],[.4725,.0079],[.472,.0073],[.4714,.0068],[.4708,.0063],[.4702,.0058],[.4697,.0054],[.4691,.005],[.4685,.0046],[.468,.0042],[.4674,.0038],[.4668,.0035],[.4663,.0032],[.4658,.0029],[.4652,.0026],[.4647,.0023],[.4642,.0021],[.4637,.0019],[.4632,.0016],[.4627,.0015],[.4622,.0013],[.4618,.0011],[.4614,.001],[.461,8e-4],[.4605,7e-4],[.4602,6e-4],[.4598,5e-4],[.4595,4e-4],[.4592,3e-4],[.4589,3e-4],[.4586,2e-4],[.4584,1e-4],[.4582,1e-4],[.458,1e-4],[.4578,0],[.4577,0],[.4576,0],[.4576,0],[.4575,0],[.4575,0],[.4575,0],[.4575,0],[.4574,0],[.4567,0],[.456,0],[.4553,0],[.4546,0],[.4539,0],[.4532,0],[.4525,0],[.4518,0],[.4511,0],[.4504,0],[.4497,0],[.449,0],[.4483,0],[.4476,0],[.4469,0],[.4461,0],[.4454,0],[.4447,0],[.444,0],[.4433,0],[.4426,0],[.4419,0],[.4412,0],[.4405,0],[.4398,0],[.4391,0],[.4384,0],[.4377,0],[.437,0],[.4363,0],[.4356,0],[.4348,0],[.4341,0],[.4334,0],[.4327,0],[.432,0],[.4313,0],[.4306,0],[.4299,0],[.4292,0],[.4285,0],[.4278,0],[.4271,0],[.4264,0],[.4257,0],[.425,0],[.4243,0],[.4235,0],[.4228,0],[.4221,0],[.4214,0],[.4207,0],[.42,0],[.4193,0],[.4186,0],[.4179,0],[.4172,0],[.4165,0],[.4158,0],[.4151,0],[.4144,0],[.4137,0],[.413,0],[.4122,0],[.4115,0],[.4108,0],[.4101,0],[.4094,0],[.4087,0],[.408,0],[.4073,0],[.4066,0],[.4059,0],[.4052,0],[.4045,0],[.4038,0],[.4031,0],[.4024,0],[.4017,0],[.4009,0],[.4002,0],[.3995,0],[.3988,0],[.3981,0],[.3974,0],[.3967,0],[.396,0],[.3953,0],[.3946,0],[.3939,0],[.3932,0],[.3925,0],[.3918,0],[.3911,0],[.3904,0],[.3896,0],[.3889,0],[.3882,0],[.3875,0],[.3868,0],[.3861,0],[.3854,0],[.3847,0],[.384,0],[.3833,0],[.3826,0],[.3819,0],[.3812,0],[.3805,0],[.3798,0],[.3791,0],[.3783,0],[.3776,0],[.3769,0],[.3762,0],[.3755,0],[.3748,0],[.3741,0],[.3734,0],[.3727,0],[.372,0],[.3713,0],[.3706,0],[.3699,0],[.3692,0],[.3685,0],[.3678,0],[.367,0],[.3663,0],[.3656,0],[.3649,0],[.3642,0],[.3635,0],[.3628,0],[.3621,0],[.3614,0],[.3607,0],[.36,0],[.3593,0],[.3586,0],[.3579,0],[.3572,0],[.3565,0],[.3557,0],[.355,0],[.3543,0],[.3536,0],[.3529,0],[.3522,0],[.3515,0],[.3508,0],[.3501,0],[.3494,0],[.3487,0],[.348,0],[.3473,0],[.3466,0],[.3459,0],[.3452,0],[.3445,0],[.3437,0],[.343,0],[.3423,0],[.3416,0],[.3409,0],[.3402,0],[.3395,0],[.3388,0],[.3381,0],[.3374,0],[.3367,0],[.336,0],[.3353,0],[.3346,0],[.3339,0],[.3332,0],[.3324,0],[.3317,0],[.331,0],[.3303,0],[.3296,0],[.3289,0],[.3282,0],[.3275,0],[.3268,0],[.3261,0],[.3254,0],[.3247,0],[.324,0],[.3233,0],[.3226,0],[.3219,0],[.3211,0],[.3204,0],[.3197,0],[.319,0],[.3183,0],[.3176,0],[.3169,0],[.3162,0],[.3155,0],[.3148,0],[.3141,0],[.3134,0],[.3127,0],[.312,0],[.3113,0],[.3106,0],[.3098,0],[.3091,0],[.3084,0],[.3077,0],[.307,0],[.3063,0],[.3056,0],[.3049,0],[.3042,0],[.3035,0],[.3028,0],[.3021,0],[.3014,0],[.3007,0],[.3,0],[.2993,0],[.2985,0],[.2978,0],[.2971,0],[.2964,0],[.2957,0],[.295,0],[.2943,0],[.2936,0],[.2929,0],[.2922,0],[.2915,0],[.2908,0],[.2901,0],[.2894,0],[.2887,0],[.288,0],[.2872,0],[.2865,0],[.2858,0],[.2851,0],[.2844,0],[.2837,0],[.283,0],[.2823,0],[.2816,0],[.2809,0],[.2802,0],[.2795,0],[.2788,0],[.2781,0],[.2774,0],[.2767,0],[.2759,0],[.2752,0],[.2745,0],[.2738,0],[.2731,0],[.2724,0],[.2717,0],[.271,0],[.2703,0],[.2696,0],[.2689,0],[.2682,0],[.2675,0],[.2668,0],[.2661,0],[.2654,0],[.2646,0],[.2639,0],[.2632,0],[.2625,0],[.2618,0],[.2611,0],[.2604,0],[.2597,0],[.259,0],[.2583,0],[.2576,0],[.2569,0],[.2562,0],[.2555,0],[.2548,0],[.2541,0],[.2533,0],[.2526,0],[.2519,0],[.2512,0],[.2505,0],[.2498,0],[.2491,0],[.2484,0],[.2477,0],[.247,0],[.2463,0],[.2456,0],[.2449,0],[.2442,0],[.2435,0],[.2428,0],[.2421,0],[.2413,0],[.2406,0],[.2399,0],[.2392,0],[.2385,0],[.2378,0],[.2371,0],[.2364,0],[.2357,0],[.235,0],[.2343,0],[.2336,0],[.2329,0],[.2322,0],[.2315,0],[.2308,0],[.23,0],[.2293,0],[.2286,0],[.2279,0],[.2272,0],[.2265,0],[.2258,0],[.2251,0],[.2244,0],[.2237,0],[.223,0],[.2223,0],[.2216,0],[.2209,0],[.2202,0],[.2195,0],[.2187,0],[.218,0],[.2173,0],[.2166,0],[.2159,0],[.2152,0],[.2145,0],[.2138,0],[.2131,0],[.2124,0],[.2117,0],[.211,0],[.2103,0],[.2096,0],[.2089,0],[.2082,0],[.2074,0],[.2067,0],[.206,0],[.2053,0],[.2046,0],[.2039,0],[.2032,0],[.2025,0],[.2018,0],[.2011,0],[.2004,0],[.1997,0],[.199,0],[.1983,0],[.1976,0],[.1969,0],[.1961,0],[.1954,0],[.1947,0],[.194,0],[.1933,0],[.1926,0],[.1919,0],[.1912,0],[.1905,0],[.1898,0],[.1891,0],[.1884,0],[.1877,0],[.187,0],[.1863,0],[.1856,0],[.1848,0],[.1841,0],[.1834,0],[.1827,0],[.182,0],[.1813,0],[.1806,0],[.1799,0],[.1792,0],[.1785,0],[.1778,0],[.1771,0],[.1764,0],[.1757,0],[.175,0],[.1743,0],[.1735,0],[.1728,0],[.1721,0],[.1714,0],[.1707,0],[.17,0],[.1693,0],[.1686,0],[.1679,0],[.1672,0],[.1665,0],[.1658,0],[.1651,0],[.1644,0],[.1637,0],[.163,0],[.1622,0],[.1615,0],[.1608,0],[.1601,0],[.1594,0],[.1587,0],[.158,0],[.1573,0],[.1566,0],[.1559,0],[.1552,0],[.1545,0],[.1538,0],[.1531,0],[.1524,0],[.1517,0],[.1509,0],[.1502,0],[.1495,0],[.1488,0],[.1481,0],[.1474,0],[.1467,0],[.146,0],[.1453,0],[.1446,0],[.1439,0],[.1432,0],[.1425,0],[.1418,0],[.1411,0],[.1404,0],[.1397,0],[.1389,0],[.1382,0],[.1375,0],[.1368,0],[.1361,0],[.1354,0],[.1347,0],[.134,0],[.1333,0],[.1326,0],[.1319,0],[.1312,0],[.1305,0],[.1298,0],[.1291,0],[.1284,0],[.1276,0],[.1269,0],[.1262,0],[.1255,0],[.1248,0],[.1241,0],[.1234,0],[.1227,0],[.122,0],[.1213,0],[.1206,0],[.1199,0],[.1192,0],[.1185,0],[.1178,0],[.1171,0],[.1163,0],[.1156,0],[.1149,0],[.1142,0],[.1135,0],[.1128,0],[.1121,0],[.1114,0],[.1107,0],[.11,0],[.1093,0],[.1086,0],[.1079,0],[.1072,0],[.1065,0],[.1058,0],[.105,0],[.1043,0],[.1036,0],[.1029,0],[.1022,0],[.1015,0],[.1008,0],[.1001,0],[.0994,0],[.0987,0],[.098,0],[.0973,0],[.0966,0],[.0959,0],[.0952,0],[.0945,0],[.0937,0],[.093,0],[.0923,0],[.0916,0],[.0909,0],[.0902,0],[.0895,0],[.0888,0],[.0881,0],[.0874,0],[.0867,0],[.086,0],[.0853,0],[.0846,0],[.0839,0],[.0832,0],[.0824,0],[.0817,0],[.081,0],[.0803,0],[.0796,0],[.0789,0],[.0782,0],[.0775,0],[.0768,0],[.0761,0],[.0754,0],[.0747,0],[.074,0],[.0733,0],[.0726,0],[.0719,0],[.0711,0],[.0704,0],[.0697,0],[.069,0],[.0683,0],[.0676,0],[.0669,0],[.0662,0],[.0655,0],[.0648,0],[.0641,0],[.0634,0],[.0627,0],[.062,0],[.0613,0],[.0606,0],[.0598,0],[.0591,0],[.0584,0],[.0577,0],[.057,0],[.0563,0],[.0556,0],[.0549,0],[.0542,0],[.0535,0],[.0528,0],[.0521,0],[.0514,0],[.0507,0],[.05,0],[.0493,0],[.0485,0]],e_={id:"arcade-cabinet",name:"Borne d'Arcade",dimensions:"600 × 1700 × 700 mm",printable:[600,1700],icon:"🕹️",printAspect:1,twoSided:!1,zones:[{id:"left",label:"Côté Gauche",col:0,row:1,aspect:561.8/1670.9},{id:"right",label:"Côté Droit",col:1,row:1,aspect:561.8/1670.9},{id:"marquee",label:"Fronton (Haut)",col:2,row:1,aspect:600/200},{id:"front",label:"Porte Avant",col:2,row:0,aspect:600/800}],create(){const n=new Ft,e=new xt({color:1118481,roughness:.9}),t=new xt({color:16777215,roughness:.6,metalness:.1}),i=new xt({color:328965,roughness:.2,metalness:.8});new vp().load("/ryu-vs-ryu.avif",de=>{de.colorSpace=Wt,i.map=de,i.color.set(16777215),i.needsUpdate=!0});function r(de,me,Ze,ct,P,Q,K,$=!1){const j=de.attributes.uv,ce=de.attributes.position,ne=Q*(1/3),re=(1-K)*.5;for(let Be=0;Be<j.count;Be++){const ze=ce.getX(Be),T=ce.getY(Be);let x=(ze-me)/(Ze-me);$&&(x=1-x);const O=(T-ct)/(P-ct);j.setXY(Be,ne+x*(1/3),re+O*.5)}j.needsUpdate=!0}function o(de,me,Ze,ct,P=null){const Q=new Pi(de,me),K=P||t,$=Q.attributes.uv;if(!P){const ce=Ze*.3333333333333333,ne=(1-ct)*.5;for(let re=0;re<$.count;re++){let Be=$.getX(re),ze=$.getY(re);$.setXY(re,ce+Be*(1/3),ne+ze*.5)}}const j=new He(Q,K);return j.rotation.y=Math.PI/2,j}function a(de,me,Ze,ct,P=null){const Q=me.x-de.x,K=me.y-de.y,$=Math.hypot(Q,K),j=Math.atan2(K,Q),ce=o(.58,$,Ze,ct,P),ne=new Ft;ne.add(ce);const re=de.x+Q/2,Be=de.y+K/2;return ne.position.set(re,Be,0),ne.rotation.z=j-Math.PI/2,ne}const l=new Ri;if(ki.length>0){l.moveTo(ki[0][0],ki[0][1]);for(let de=1;de<ki.length;de++)l.lineTo(ki[de][0],ki[de][1])}else l.moveTo(0,0),l.lineTo(0,1),l.lineTo(1,1),l.lineTo(1,0),l.lineTo(0,0);const c={depth:.018,bevelEnabled:!0,bevelSegments:2,bevelSize:.002,bevelThickness:.002};let h=1/0,u=-1/0,f=1/0,p=-1/0;ki.forEach(de=>{de[0]<h&&(h=de[0]),de[0]>u&&(u=de[0]),de[1]<f&&(f=de[1]),de[1]>p&&(p=de[1])});const g=new Sn(l,c);g.translate(0,0,.285),r(g,h,u,f,p,0,1,!1);const _=new He(g,[t,e]),m=new Sn(l,c);m.translate(0,0,-.303),r(m,h,u,f,p,1,1,!0);const d=new He(m,[t,e]),M={x:.5128-.03,y:0},y={x:.5618-.03,y:.9731},v={x:.5618,y:.9731},C={x:.48,y:.985},S={x:.35,y:1.05},A={x:.15,y:1.35},L={x:.336,y:1.5},w={x:.3147,y:1.6665},E={x:0,y:1.6222},D={x:0,y:0},B=a(M,y,2,0),z=a(y,v,null,null,e),W=a(v,C,null,null,e),V=a(C,S,null,null,e),X=a(A,L,null,null,e),Z=a(w,E,null,null,e),G=a(D,M,null,null,e),ue=a(E,D,null,null,e),ve=new xt({color:16711680,roughness:.3,metalness:.1}),Te=new xt({color:22015,roughness:.3,metalness:.1}),$e=new xt({color:22015,roughness:.3,metalness:.1}),st=new xt({color:16711680,roughness:.3,metalness:.1});function ut(de,me,Ze,ct){const P=new xt({color:13421772,roughness:.4,metalness:.8}),Q=new Bn(.005,.005,.05,16),K=new He(Q,P);K.rotation.z=-Math.PI/2,K.position.set(.025,.01,me+.12);const $=new Ml(.015,32,32),j=new He($,Ze);j.position.set(.05,.01,me+.12),de.add(K,j);const ce=new Bn(.012,.012,.005,32),ne=new Bn(.015,.015,.002,32),re=new xt({color:2236962,roughness:.8});[{y:.02,z:me+.04},{y:.03,z:me-0},{y:.02,z:me-.04},{y:-.02,z:me+.03},{y:-.01,z:me-.01},{y:-.02,z:me-.05}].forEach(ze=>{const T=new He(ce,ct);T.rotation.z=-Math.PI/2,T.position.set(.0025,ze.y,ze.z);const x=new He(ne,re);x.rotation.z=-Math.PI/2,x.position.set(.001,ze.y,ze.z),de.add(T,x)})}ut(W,.05,ve,Te),ut(W,-.19,$e,st);const lt=a(S,A,null,null,i),J=a(L,w,2,1),te=new Ft;te.add(_,d,B,z,W,V,lt,X,J,Z,G,ue),te.position.set(-.2809,-.83325,0);const Ee=new Ft;return Ee.rotation.y=-Math.PI/2,Ee.add(te),n.add(Ee),n.position.set(0,0,0),{group:n,topMaterial:t,baseMaterial:e,joystick1Material:ve,button1Material:Te,joystick2Material:$e,button2Material:st,type:"arcade",zones:this.zones,twoSided:!1}}},Hi=2.5,Si=.2,t_={id:"event-wristband-fabric",name:"Bracelet événementiel en tissu",dimensions:[250,20,1],printable:[250,20],icon:"🎟️",create(){const n=new Ft,e=new xt({color:15067115,roughness:.95,metalness:0}),t=new xt({color:16777215,roughness:.88,metalness:0,side:di}),i=new xt({color:13358561,roughness:1}),s=new xt({color:16316661,roughness:.62,metalness:0}),r=new He(new qn(Hi,.012,Si),e);r.castShadow=!0,r.receiveShadow=!0,n.add(r);const o=new Pi(Hi,Si);o.rotateX(-Math.PI/2);const a=new He(o,t);a.position.y=.0065,a.receiveShadow=!0,n.add(a);for(const h of[-Si/2+.008,Si/2-.008]){const u=new He(new qn(Hi-.035,.001,.002),i);u.position.set(0,.0075,h),n.add(u)}const l=new He(new qn(.072,.023,Si+.012),s);l.position.set(Hi/2-.18,.01,0),l.castShadow=!0,n.add(l);const c=new He(new qn(.016,.004,Si*.45),s);return c.position.set(Hi/2-.18,.023,0),n.add(c),{group:n,top:a,topMaterial:t,baseMaterial:e,printMesh:a,printAspect:Hi/Si,meshWidth:Hi,meshHeight:Si,type:"flat"}}},pn=document.documentElement.dataset.mode!=="admin";let Bl=!1,Iu=!1,Us=!1;document.body.classList.toggle("client-mode",pn);document.querySelector("#submitCreation").hidden=!pn;document.querySelector("#clientGuide").hidden=!pn;document.querySelector("#clientModeLink").href="/";document.querySelector("#modeLabel").textContent=pn?"ESPACE CLIENT":"ATELIER PROPRIÉTAIRE";const nl=document.querySelector("#showWatermark");pn&&(nl.checked=!0,nl.disabled=!0);window.matchMedia("(max-width: 900px)").matches&&(document.querySelector(".workspace").classList.add("right-collapsed"),pn||document.querySelector(".workspace").classList.add("left-collapsed"));if(window.location.hostname!=="localhost"&&window.location.hostname!=="127.0.0.1"){const n=document.querySelector("#localBadge");n&&(n.style.display="none")}const fi=document.querySelector("#viewer"),Pe=new l5({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});Pe.setPixelRatio(Math.min(devicePixelRatio,2));Pe.shadowMap.enabled=!0;Pe.shadowMap.type=Rh;Pe.outputColorSpace=Wt;Pe.toneMapping=Ph;Pe.toneMappingExposure=1;fi.append(Pe.domElement);const wt=new wf;wt.background=new je(15330800);const be=new An(34,1,.1,100);be.position.set(3.4,2.8,3.8);wt.add(be);let w0=null,li=null,Eh=null;function Ci(){const n=!Us&&(pn||(document.querySelector("#showWatermark")?.checked??!0)),e=document.querySelector("#sceneColor")?.value||"#e9edf0",t=document.querySelector("#bgOpacity"),i=t?Number(t.value)/100:1;if(!n&&!li){w0?.dispose(),w0=null,wt.background=new je(e);return}const s=document.createElement("canvas");s.width=window.innerWidth>0?window.innerWidth*2:2048,s.height=window.innerHeight>0?window.innerHeight*2:2048;const r=s.getContext("2d");if(r.fillStyle=e,r.fillRect(0,0,s.width,s.height),li){r.save(),r.globalAlpha=i;const o=Math.max(s.width/li.width,s.height/li.height),a=li.width*o,l=li.height*o;r.drawImage(li,(s.width-a)/2,(s.height-l)/2,a,l),r.restore()}if(n&&so&&Qt.width>0){r.save();const o=document.createElement("canvas");o.width=Qt.width,o.height=Qt.height;const a=o.getContext("2d");a.drawImage(Qt,0,0),a.globalCompositeOperation="source-in",a.fillStyle="#425260",a.fillRect(0,0,o.width,o.height),r.globalAlpha=.08,r.translate(s.width/2,s.height/2),r.rotate(-25*Math.PI/180),r.translate(-s.width/2,-s.height/2);const l=340,c=220,h=220,u=Math.round(h*(Qt.height/Qt.width));for(let f=-s.height*.6;f<s.height*1.6;f+=c){const p=Math.floor(f/c)%2*(l/2);for(let g=-s.width*.6;g<s.width*1.6;g+=l)r.drawImage(o,g+p,f,h,u)}r.restore()}w0?.dispose(),w0=new Hs(s),w0.colorSpace=Wt,wt.background=w0}const Qt=new Image;Qt.src="/logo-graph2print.png";let so=!1;Qt.onload=()=>{so=!0,Ci(),(Ot.length>0||Ue.text.trim())&&Et()};const Lt=new Af(new $h({transparent:!0,depthTest:!1,depthWrite:!1}));Lt.position.set(0,-1.28,-5);Lt.visible=!1;Lt.renderOrder=20;const Me=new h5(be,Pe.domElement);Me.enableDamping=!1;Me.autoRotate=!1;Me.minDistance=2.2;Me.maxDistance=8;Me.target.set(0,-.04,0);wt.add(new xp(16777215,14870768,2));const ro=new bl(16777215,2.8);ro.position.set(-3,5,4);ro.castShadow=!0;ro.shadow.mapSize.set(2048,2048);wt.add(ro);const Uu=new bl(16777215,1.6);Uu.position.set(4,2,-3);wt.add(Uu);const Nu=new bl(16777215,.8);Nu.position.set(0,0,5);wt.add(Nu);const X0=new He(new Cs(5,64),new cp({color:5595499,opacity:.15}));X0.rotation.x=-Math.PI/2;X0.position.y=-.09;X0.receiveShadow=!0;wt.add(X0);const V0={mousePad:L3,mug11oz:I3,keychainRect:N3,keychainRound:O3,keychainHeart:B3,tshirt3D:q3,puzzle:j3,coaster:Z3,coasterRound:K3,pencilCase:J3,cushion:Q3,arcadeCabinet:e_,eventWristband:t_},Fu=document.querySelector("#productSelect")?.value||"mug11oz";let Ge=Fu,_e=V0[Fu].create();wt.add(_e.group);const St=new bp(8,24,6385784,10135212);St.position.y=-.085;St.visible=!1;wt.add(St);let Ot=[],$n=-1,nn=null,Jt=null;const Ue={text:"",color:"#111820",font:"Inter, sans-serif",size:60,bold:!1,italic:!1,align:"center",x:0,y:0,rotation:0},cn=document.querySelector("#transformOverlay"),il=document.querySelector("#transformBox"),as=document.querySelector("#rotateHandle"),Mi=document.querySelector("#rotateStem"),sl=[...document.querySelectorAll(".resize-handle")],Or=[...document.querySelectorAll(".edge-handle")];function rn(){if($n>=0&&$n<Ot.length){const n=Ot[$n];return n.scaleX===void 0&&(n.scaleX=n.scale??1),n.scaleY===void 0&&(n.scaleY=n.scale??1),n}return null}function Li(){const n=rn(),e=document.querySelector("#adjustments"),t=document.querySelector("#activeImageLabel");if(!n){e?.classList.add("disabled"),t&&(t.textContent="Aucune image active");return}e?.classList.remove("disabled"),t&&(t.textContent=`Image active : ${n.name}`);const i=Math.round((n.scaleX+n.scaleY)/2*100);document.querySelector("#scale").value=i,document.querySelector("#scaleValue").value=`${i} %`,document.querySelector("#posX").value=Math.round(n.x*100),document.querySelector("#posXValue").value=`${Math.round(n.x*100)} %`,document.querySelector("#posY").value=Math.round(n.y*100),document.querySelector("#posYValue").value=`${Math.round(n.y*100)} %`,document.querySelector("#rotation").value=Math.round(n.rotation),document.querySelector("#rotationValue").value=`${Math.round(n.rotation)}°`,document.querySelectorAll("[data-fit]").forEach(s=>s.classList.toggle("active",s.dataset.fit===n.fitMode))}function n_(n){n>=0&&n<Ot.length?$n=n:$n=Ot.length-1,Ws(),Li(),Yt(document.querySelector("#showTransformFrame").checked),Xl()}function i_(n,e){e&&e.stopPropagation();const t=Ot[n];t?.img.src.startsWith("blob:")&&URL.revokeObjectURL(t.img.src),Ot.splice(n,1),$n>=Ot.length&&($n=Ot.length-1),Ws(),Li(),Et(),Yt(document.querySelector("#showTransformFrame").checked)}function Ws(){const n=document.querySelector("#imagesList");n&&(n.innerHTML="",Ot.forEach((e,t)=>{const i=document.createElement("div");i.className=`image-item${t===$n?" active":""}`,i.onclick=()=>n_(t);const s=document.createElement("img");s.className="image-item-thumb",s.src=e.img.src,s.alt=e.name;const r=document.createElement("div");r.className="image-item-info",r.innerHTML=`<span class="image-item-name">${e.name}</span><small class="image-item-meta">Calque #${t+1} • ${Math.round(e.scale*100)}%</small>`;const o=document.createElement("select");o.className="layer-side-select",_e.zones?o.innerHTML='<option value="both">Toutes zones</option>'+_e.zones.map(l=>`<option value="${l.id}">${l.label}</option>`).join(""):o.innerHTML='<option value="both">Deux faces</option><option value="A">Face A</option><option value="B">Face B</option>'+(Ge==="tshirt3D"?'<option value="heart">Cœur (petit)</option>':""),o.value=e.side||"both",o.onclick=l=>l.stopPropagation(),o.onchange=l=>{e.side=l.target.value,Et()},(_e.twoSided||_e.zones)&&r.append(o);const a=document.createElement("button");a.className="image-item-remove",a.title="Supprimer cette image",a.innerHTML="×",a.onclick=l=>i_(t,l),i.append(s,r,a),n.append(i)}))}function pi(){return!cn.hasAttribute("hidden")&&!cn.classList.contains("hidden")&&cn.style.display!=="none"}function Yt(n){const e=_e.type==="flat",t=document.querySelector("#showTransformFrame").checked,i=rn();!!n&&t&&!!i&&e?(cn.removeAttribute("hidden"),cn.classList.remove("hidden"),cn.style.display="block"):(cn.setAttribute("hidden",""),cn.classList.add("hidden"),cn.style.display="none")}function Kr(n){const e=document.querySelector("#wrapPreviewWidget"),t=document.querySelector("#wrapPreviewImg");if(!e||!t)return;const i=document.querySelector("#heartPreviewPanel"),s=document.querySelector("#downloadHeartBtn");if(i&&(i.hidden=!nn),s&&(s.hidden=!nn||pn),nn&&(document.querySelector("#heartPreviewImg").src=nn.image.toDataURL("image/png")),Ot.length>0||Ue.text.trim().length>0){e.hidden=!1;const o=n||Jt?.image;o&&o.toDataURL&&(t.src=o.toDataURL("image/png"))}else e.hidden=!0}document.querySelector("#toggleWrapPreview")?.addEventListener("click",()=>{document.querySelector("#wrapPreviewWidget")?.classList.toggle("collapsed")});document.querySelector("#downloadHeartBtn")?.addEventListener("click",()=>{if(!nn?.image)return;const n=document.createElement("a");n.href=nn.image.toDataURL("image/png"),n.download="coeur-tshirt-"+Date.now()+".png",document.body.append(n),n.click(),n.remove()});document.querySelector("#downloadWrapBtn")?.addEventListener("click",()=>{const n=Jt?.image;if(!n||!n.toDataURL){It("Aucun visuel wrap à exporter");return}const e=document.createElement("a");e.href=n.toDataURL("image/png");const t=_e.printable||V0[Ge].printable,i=Array.isArray(t)?t.join("x")+"mm":"210x95mm";e.download="wrap-"+Ge+"-"+i+"-"+Date.now()+".png",document.body.append(e),e.click(),e.remove(),It("Fichier d’impression Wrap PNG téléchargé")});function s_(){if(nn?.dispose(),nn=null,Ge!=="tshirt3D")return;const n=Ot.filter(s=>s.side==="heart"&&s.img),e=Ue.side==="heart"&&Ue.text.trim();if(!n.length&&!e)return;const t=document.createElement("canvas");t.width=t.height=1024;const i=t.getContext("2d");for(const s of n){const r=s.img.width/s.img.height;let o,a;s.fitMode==="fill"?o=a=1024:s.fitMode==="contain"==r>1?(o=1024,a=o/r):(a=1024,o=a*r),o*=s.scaleX??s.scale??1,a*=s.scaleY??s.scale??1,i.save(),i.translate(512+s.x*512,512-s.y*512),i.rotate(-s.rotation*Math.PI/180),i.drawImage(s.img,-o/2,-a/2,o,a),i.restore()}if(e){i.save(),i.translate(512+Ue.x*512,512-Ue.y*512),i.rotate(-Ue.rotation*Math.PI/180),i.font=(Ue.italic?"italic ":"")+(Ue.bold?"bold ":"normal ")+Ue.size+"px "+Ue.font,i.fillStyle=Ue.color,i.textAlign=Ue.align||"center",i.textBaseline="middle";const s=Ue.text.split(`
`);s.forEach((r,o)=>i.fillText(r,0,(o-(s.length-1)/2)*Ue.size*1.25)),i.restore()}pn&&!Us&&so&&(i.save(),i.globalAlpha=.16,i.drawImage(Qt,320,320,384,384*Qt.height/Qt.width),i.restore()),nn=new Hs(t),nn.colorSpace=Wt,nn.anisotropy=Pe.capabilities.getMaxAnisotropy()}function Et(){const n=Ue.text.trim().length>0;if(!(Ot.length>0)&&!n){_e.clearDecals?.(),Jt?.dispose(),Jt=null,nn?.dispose(),nn=null,_e.topMaterial.map=null,_e.topMaterial.needsUpdate=!0,Lt.material.map=null,Lt.material.needsUpdate=!0,Kr(null),Os();return}const t=document.querySelector("#topColor")?.value||"#ffffff",i=!!_e.twoSided,s=!!_e.zones,r=document.createElement("canvas");r.width=s?3072:i?3200:1600,r.height=s?2048:Math.round(1600/_e.printAspect);const o=r.getContext("2d");if(o.clearRect(0,0,r.width,r.height),_e.type!=="3d-decal"&&(o.fillStyle=t,o.fillRect(0,0,r.width,r.height)),!Us&&(pn||(document.querySelector("#showWatermark")?.checked??!0))&&so&&Qt.width>0&&_e.type!=="3d-decal"){o.save();const l=document.createElement("canvas");l.width=Qt.width,l.height=Qt.height;const c=l.getContext("2d");c.drawImage(Qt,0,0),c.globalCompositeOperation="source-in",c.fillStyle="#111820",c.fillRect(0,0,l.width,l.height),o.globalAlpha=.12,o.translate(r.width/2,r.height/2),o.rotate(-25*Math.PI/180),o.translate(-r.width/2,-r.height/2);const h=320,u=200,f=190,p=Math.round(f*(Qt.height/Qt.width));for(let g=-r.height*.6;g<r.height*1.6;g+=u){const _=Math.floor(g/u)%2*(h/2);for(let m=-r.width*.6;m<r.width*1.6;m+=h)o.drawImage(l,m+_,g,f,p)}o.restore()}if(Ot.forEach(l=>{if(!l.img||Ge==="tshirt3D"&&l.side==="heart")return;const c=l.scaleX??l.scale??1,h=l.scaleY??l.scale??1,u=l.img.width/l.img.height;let f=[];_e.zones?f=l.side==="both"||!l.side?_e.zones:_e.zones.filter(p=>p.id===l.side):f=(i?l.side==="A"?[0]:l.side==="B"?[1]:[0,1]:[0]).map(g=>({col:g,row:0,width:1600,height:r.height})),f.forEach(p=>{const g=s?1024:1600,_=s?1024:r.height,m=p.col*g,d=(p.row||0)*_,M=s?p.aspect||1:g/_;let y,v;l.fitMode==="fill"?(y=g,v=_):l.fitMode==="contain"==u>M?(y=g,v=s?g*M/u:y/u):(v=_,y=s?_*u/M:v*u),y*=c,v*=h;const C=m+g/2+l.x*g*.5,S=d+_/2-l.y*_*.5;o.save(),o.beginPath(),o.rect(m,d,g,_),o.clip(),o.translate(C,S),o.rotate(-l.rotation*Math.PI/180),o.drawImage(l.img,-y/2,-v/2,y,v),o.restore()})}),n&&!(Ge==="tshirt3D"&&Ue.side==="heart")){let l=[];_e.zones?l=Ue.side==="both"||!Ue.side?_e.zones:_e.zones.filter(c=>c.id===Ue.side):l=(i?Ue.side==="A"?[0]:Ue.side==="B"?[1]:[0,1]:[0]).map(h=>({col:h,row:0,width:1600,height:r.height})),l.forEach(c=>{o.save();const h=s?1024:1600,u=s?1024:r.height,f=c.col*h,p=(c.row||0)*u;o.beginPath(),o.rect(f,p,h,u),o.clip();const g=f+h/2+Ue.x*h*.5,_=p+u/2-Ue.y*u*.5;o.translate(g,_),o.rotate(-Ue.rotation*Math.PI/180);const m=`${Ue.italic?"italic ":""}${Ue.bold?"bold ":"normal "}${Ue.size}px ${Ue.font}`;o.font=m,o.fillStyle=Ue.color,o.textAlign=Ue.align||"center",o.textBaseline="middle";const d=Ue.text.split(`
`),M=Ue.size*1.25,v=-((d.length-1)*M)/2;d.forEach((C,S)=>{o.fillText(C,0,v+S*M)}),o.restore()})}s_(),Jt?.dispose(),Jt=new Hs(r),Jt.colorSpace=Wt,Jt.anisotropy=Pe.capabilities.getMaxAnisotropy(),_e.type==="3d-decal"?(Jt.needsUpdate=!0,_e.applyDecals&&_e.applyDecals(Jt,i,r,nn)):(_e.topMaterial.map=Jt,_e.topMaterial.color.set(16777215),_e.topMaterial.needsUpdate=!0),Lt.material.map=Jt,Lt.material.needsUpdate=!0,Lt.scale.set(3.1,3.1/_e.printAspect,1),Kr(r),Os()}document.querySelector("#imageInput").addEventListener("change",async n=>{const e=Array.from(n.target.files||[]);if(e.length){for(const t of e){const i=URL.createObjectURL(t);await new Promise(s=>{const r=new Image;r.onload=()=>{Ot.push({id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,name:t.name,img:r,scale:1,scaleX:1,scaleY:1,x:0,y:0,rotation:0,fitMode:"cover",side:_e.zones?_e.zones[0].id:"both"}),s()},r.onerror=()=>{URL.revokeObjectURL(i),s()},r.src=i})}n.target.value="",$n=Ot.length-1,Ws(),Li(),Et(),Yt(document.querySelector("#showTransformFrame").checked),It(`${e.length} image(s) ajoutée(s)`)}});document.querySelector("#productSelect").onchange=n=>{pn&&!n.detail?.initial&&(Bl=!0),Ge=n.target.value,wt.remove(_e.group),_e.group.traverse(p=>p.geometry?.dispose());const e=V0[Ge];_e=e.create(),wt.add(_e.group),document.querySelector("#productDimensions").textContent=Array.isArray(e.dimensions)?`${e.dimensions.join(" × ")} mm`:e.dimensions,document.querySelector("#productIcon").textContent=e.icon||(Ge==="mousePad"?"▰":Ge==="mug11oz"?"☕":"👕"),document.querySelector("#tshirtOrientationWrap").hidden=Ge!=="tshirt3D",document.querySelector("#loadTshirtExample").hidden=Ge!=="tshirt3D",Ge==="tshirt3D"&&(document.querySelector("#tshirtOrientation").value="portrait"),Ou();const t={mug11oz:"13,00 €",mousePad:"10,00 €",keychainRect:"6,00 €",keychainRound:"6,00 €",keychainHeart:"6,00 €",tshirt3D:"17,00 € - 21,00 €",puzzle:"15,00 €",coaster:"8,00 €",coasterRound:"8,00 €",pencilCase:"11,00 €",cushion:"17,00 €",arcadeCabinet:"2090,00 €",eventWristband:"À définir"},i=document.querySelector("#productPrice");i&&(i.textContent=t[Ge]||"-- €");const s=Ge==="mug11oz",r=Ge==="arcadeCabinet";document.querySelector("#handleColorWrap").hidden=!s,document.querySelector("#innerColorWrap").hidden=!s,document.querySelector("#quickPalette").hidden=!s;const o=document.querySelector("#arcadeControlsWrap");o&&(o.hidden=!r);const a=document.querySelector("#arcadeGlowWrap");a&&(a.hidden=!r),document.querySelector("#baseColor").value="#ffffff",document.querySelector("#topColor").value="#ffffff",s&&(document.querySelector("#handleColor").value="#ffffff",document.querySelector("#innerColor").value="#ffffff"),r&&(document.querySelector("#j1Color")&&(document.querySelector("#j1Color").value="#ff0000"),document.querySelector("#j2Color")&&(document.querySelector("#j2Color").value="#0055ff"),document.querySelector("#b1Color")&&(document.querySelector("#b1Color").value="#0055ff"),document.querySelector("#b2Color")&&(document.querySelector("#b2Color").value="#ff0000"),document.querySelector("#arcadeGlow")&&(document.querySelector("#arcadeGlow").checked=!1));const l=!!_e.twoSided,c=!!_e.zones,h=document.querySelector("#viewFaceA"),u=document.querySelector("#viewFaceB");h&&(h.style.display=l||c?"inline-block":"none"),u&&(u.style.display=l||c?"inline-block":"none"),h&&(h.innerHTML=c?'<span style="font-weight:900;margin-right:4px;">A</span> Face Avant':'<span style="font-weight:900;margin-right:4px;">A</span> Face A'),u&&(u.innerHTML=c?'<span style="font-weight:900;margin-right:4px;">B</span> Côtés':'<span style="font-weight:900;margin-right:4px;">B</span> Face B');const f=document.querySelector("#textSideSelect");f&&(f.style.display=l||c?"inline-block":"none",c?f.innerHTML='<option value="both">Toutes zones</option>'+_e.zones.map(p=>`<option value="${p.id}">${p.label}</option>`).join(""):f.innerHTML='<option value="both">2 faces</option><option value="A">Face A</option><option value="B">Face B</option>'+(Ge==="tshirt3D"?'<option value="heart">Cœur (petit)</option>':"")),X0.position.y=r?-.835:-.09,Ws(),(Ot.length>0||Ue.text.trim())&&Et(),q0(),Yt(document.querySelector("#showTransformFrame").checked),Kr(Jt?.image),Os()};function Ou(){const n=_e.printable||V0[Ge].printable;if(Ge==="tshirt3D"){const e=document.querySelector("#tshirtOrientation").value==="landscape"?"paysage":"portrait";document.querySelector("#productDimensions").textContent="Zone devant et dos : A4 "+e+" ("+n.join(" × ")+" mm)"}Array.isArray(n)&&(document.querySelector("#wrapDimensions").textContent="Visuel déroulé ("+n.join(" × ")+" mm)")}document.querySelector("#tshirtOrientation").addEventListener("change",n=>{Ge==="tshirt3D"&&(_e.setPrintOrientation(n.target.value),Ou(),(Ot.length||Ue.text.trim())&&Et(),It("Zone A4 "+(n.target.value==="landscape"?"paysage":"portrait")+" appliquée aux deux faces"))});document.querySelector("#showTransformFrame").addEventListener("change",n=>{Yt(n.target.checked),n.target.checked&&Xl(),It(n.target.checked?"Cadre de sélection activé":"Cadre de sélection masqué")});document.querySelectorAll("[data-fit]").forEach(n=>n.onclick=()=>{const e=rn();e&&(e.fitMode=n.dataset.fit,document.querySelectorAll("[data-fit]").forEach(t=>t.classList.toggle("active",t===n)),Bu(!0))});const r_={scale:["scaleValue",n=>`${n} %`,n=>n/100],posX:["posXValue",n=>`${n} %`,n=>n/100],posY:["posYValue",n=>`${n} %`,n=>n/100],rotation:["rotationValue",n=>`${n}°`,Number]};Object.entries(r_).forEach(([n,[e,t,i]])=>document.querySelector(`#${n}`).addEventListener("input",s=>{const r=rn();if(r){if(n==="scale"){const o=i(s.target.value);r.scale=o,r.scaleX=o,r.scaleY=o}else r[n==="posX"?"x":n==="posY"?"y":n]=i(s.target.value);document.querySelector(`#${e}`).value=t(s.target.value),Et()}}));function Bu(n=!0){const e=rn();e&&(e.scale=1,e.scaleX=1,e.scaleY=1,e.x=0,e.y=0,e.rotation=0,Li(),n&&Et())}document.querySelector("#resetImage").onclick=()=>Bu(!0);document.querySelector("#customText").addEventListener("input",n=>{Ue.text=n.target.value,Et()});document.querySelector("#textSideSelect")?.addEventListener("change",n=>{Ue.side=n.target.value,Et()});document.querySelector("#textColor").addEventListener("input",n=>{Ue.color=n.target.value,Et()});document.querySelector("#textFont").addEventListener("change",async n=>{if(Ue.font=n.target.value,document.fonts)try{await document.fonts.load(`${Ue.bold?"bold ":"normal "}${Ue.size}px ${Ue.font}`)}catch{}Et()});document.querySelector("#textSize").addEventListener("input",n=>{Ue.size=Number(n.target.value),document.querySelector("#textSizeValue").value=`${n.target.value} px`,Et()});document.querySelector("#textBold").addEventListener("change",n=>{Ue.bold=n.target.checked,Et()});document.querySelector("#textItalic").addEventListener("change",n=>{Ue.italic=n.target.checked,Et()});document.querySelectorAll(".align-btn").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".align-btn").forEach(e=>e.classList.toggle("active",e===n)),Ue.align=n.dataset.align,Et()})});document.querySelector("#textPosX").addEventListener("input",n=>{Ue.x=Number(n.target.value)/100,document.querySelector("#textPosXValue").value=`${n.target.value} %`,Et()});document.querySelector("#textPosY").addEventListener("input",n=>{Ue.y=Number(n.target.value)/100,document.querySelector("#textPosYValue").value=`${n.target.value} %`,Et()});document.querySelector("#textRotation").addEventListener("input",n=>{Ue.rotation=Number(n.target.value),document.querySelector("#textRotationValue").value=`${n.target.value}°`,Et()});document.querySelector("#resetText").addEventListener("click",()=>{Ue.text="",Ue.color="#111820",Ue.font="Inter, sans-serif",Ue.size=60,Ue.bold=!1,Ue.italic=!1,Ue.align="center",Ue.x=0,Ue.y=0,Ue.rotation=0,document.querySelector("#customText").value="",document.querySelector("#textColor").value="#111820",document.querySelector("#textFont").value="Inter, sans-serif",document.querySelector("#textSize").value=60,document.querySelector("#textSizeValue").value="60 px",document.querySelector("#textBold").checked=!1,document.querySelector("#textItalic").checked=!1,document.querySelectorAll(".align-btn").forEach(n=>n.classList.toggle("active",n.dataset.align==="center")),document.querySelector("#textPosX").value=0,document.querySelector("#textPosXValue").value="0 %",document.querySelector("#textPosY").value=0,document.querySelector("#textPosYValue").value="0 %",document.querySelector("#textRotation").value=0,document.querySelector("#textRotationValue").value="0°",Et(),Kr(Jt?.image)});document.querySelectorAll(".collapsible-section .section-title-btn").forEach(n=>{n.addEventListener("click",()=>{const e=n.closest(".collapsible-section");if(!e)return;const t=e.classList.toggle("collapsed");n.setAttribute("aria-expanded",String(!t))})});const q0=()=>{Ge==="mug11oz"?(be.position.set(.6,2.7,6.2),Me.target.set(0,.68,0)):Ge==="mousePad"||Ge==="puzzle"||Ge==="coaster"?(be.position.set(0,4.5,.001),Me.target.set(0,0,0)):Ge==="eventWristband"?(be.position.set(0,2.5,.001),Me.target.set(0,0,0)):Ge==="keychainHeart"?(be.position.set(0,.45,1.15),Me.target.set(0,.45,0)):Ge==="keychainRound"?(be.position.set(0,.32,.9),Me.target.set(0,.32,0)):Ge==="keychainRect"?(be.position.set(0,.29,.7),Me.target.set(0,.29,0)):Ge.startsWith("tshirt")?(be.position.set(0,.35,1.6),Me.target.set(0,.35,0)):Ge==="arcadeCabinet"?(be.position.set(.7,-.05,3.4),Me.target.set(0,-.05,0)):(be.position.set(3.4,2.8,3.8),Me.target.set(0,-.04,0)),Me.update()};document.querySelector("#resetView")?.addEventListener("click",q0);document.querySelector("#resetViewSide")?.addEventListener("click",q0);document.querySelector("#viewFaceA")?.addEventListener("click",()=>{q0(),Ge==="arcadeCabinet"&&(be.position.set(0,-.05,3.4),Me.update())});document.querySelector("#viewFaceB")?.addEventListener("click",()=>{q0(),Ge==="mug11oz"?be.position.set(-.8,2.5,-6.5):Ge==="arcadeCabinet"?be.position.set(3.4,-.05,0):be.position.z=-Math.abs(be.position.z),Me.update()});document.querySelector("#zoomIn").onclick=()=>{be.position.multiplyScalar(.84),Me.update()};document.querySelector("#zoomOut").onclick=()=>{be.position.multiplyScalar(1.16),Me.update()};document.querySelector("#autoRotate").onchange=()=>{Me.autoRotate=!1,ls=0,Br=1};Me.autoRotateSpeed=1.25;document.querySelector("#topColor").oninput=n=>{_e.topMaterial.color.set(n.target.value),_e.topMaterial.needsUpdate=!0,Et()};document.querySelector("#baseColor").oninput=n=>{_e.baseMaterial.color.set(n.target.value),_e.baseMaterial.needsUpdate=!0};document.querySelector("#handleColor").oninput=n=>{_e.handleMaterial&&(_e.handleMaterial.color.set(n.target.value),_e.handleMaterial.needsUpdate=!0)};document.querySelector("#innerColor").oninput=n=>{_e.innerMaterial&&(_e.innerMaterial.color.set(n.target.value),_e.innerMaterial.needsUpdate=!0)};["j1Color","j2Color","b1Color","b2Color"].forEach(n=>{const e=document.querySelector("#"+n);e&&e.addEventListener("change",t=>{let i=null;n==="j1Color"&&(i=_e.joystick1Material),n==="j2Color"&&(i=_e.joystick2Material),n==="b1Color"&&(i=_e.button1Material),n==="b2Color"&&(i=_e.button2Material),i&&(i.color.set(t.target.value),document.querySelector("#arcadeGlow").checked&&(i.emissive.set(t.target.value),i.emissiveIntensity=5),i.needsUpdate=!0)})});document.querySelector("#arcadeGlow")&&(document.querySelector("#arcadeGlow").onchange=n=>{const e=n.target.checked;[_e.joystick1Material,_e.joystick2Material,_e.button1Material,_e.button2Material].forEach(i=>{i&&(e?(i.emissive.copy(i.color),i.emissiveIntensity=5):i.emissive.setHex(0),i.needsUpdate=!0)})});document.querySelectorAll(".quick-palette .swatch").forEach(n=>{n.addEventListener("click",()=>{const e=n.dataset.color;document.querySelector("#handleColor").value=e,document.querySelector("#innerColor").value=e,_e.handleMaterial&&(_e.handleMaterial.color.set(e),_e.handleMaterial.needsUpdate=!0),_e.innerMaterial&&(_e.innerMaterial.color.set(e),_e.innerMaterial.needsUpdate=!0)})});document.querySelector("#sceneColor").oninput=()=>Ci();document.querySelector("#showGrid").onchange=n=>St.visible=n.target.checked;document.querySelector("#showShadow")?.addEventListener("change",n=>{X0.visible=n.target.checked,It(n.target.checked?"Ombre au sol activée":"Ombre au sol masquée")});document.querySelector("#showWatermark")?.addEventListener("change",()=>{if(pn){nl.checked=!0;return}Ci(),Et(),It(document.querySelector("#showWatermark").checked?"Filigrane activé":"Filigrane retiré")});document.querySelector("#speed").oninput=n=>{Me.autoRotateSpeed=Number(n.target.value)/9.6*(document.querySelector("#reverse").checked?-1:1),document.querySelector("#speedValue").value=`${(Number(n.target.value)/12).toFixed(1)}×`};document.querySelector("#reverse").onchange=n=>Me.autoRotateSpeed=Math.abs(Me.autoRotateSpeed)*(n.target.checked?-1:1);const zu={horizontal:new R(0,1,0),vertical:new R(1,0,0),diagonal:new R(1,1,0).normalize(),swing:new R(0,1,0)};let ls=0,Br=1,bh=performance.now();function ku(n,e){const t=document.querySelector("#rotationMode").value,i=document.querySelector("#reverse").checked?-1:1,s=e.clone().sub(Me.target),r=t==="swing"?Math.sin(n*Math.PI*2)*.8*i:n*Math.PI*2*i;s.applyAxisAngle(zu[t],r),be.position.copy(Me.target).add(s),be.lookAt(Me.target)}function oo(n){const e=Math.hypot(be.position.x-Me.target.x,be.position.z-Me.target.z),t=to.degToRad(n);be.position.x=Me.target.x+Math.cos(t)*e,be.position.z=Me.target.z+Math.sin(t)*e,be.lookAt(Me.target),Me.update(),document.querySelector("#viewAngle").value=n,document.querySelector("#angleValue").value=`${n}°`}document.querySelectorAll("[data-angle]").forEach(n=>n.onclick=()=>oo(Number(n.dataset.angle)));function Xs(n,e){const t=new Image;t.onload=()=>{li=t;const i=document.getElementById("bgOpacityControl");i&&(i.hidden=!1),Ci(),It(e||"Image de fond appliquée")},t.src=n}document.querySelector("#bgPresetPodium")?.addEventListener("click",()=>{Xs("/background-podium.jpg","Studio podium coloré appliqué"),Ge==="mug11oz"&&(be.position.set(0,1.85,4.8),Me.target.set(0,.05,0),Me.update())});document.querySelector("#bgPresetMug")?.addEventListener("click",()=>{Xs("/background-mug.jpg","Mise en scène cuisine moderne appliquée")});document.querySelector("#bgPresetBureau")?.addEventListener("click",()=>{Xs("/background-bureau.jpg","Mise en scène bureau avec ordi appliquée"),Ge==="mousePad"&&(be.position.set(0,3.1,3.4),Me.target.set(0,-.05,.15),Me.update())});document.querySelector("#bgPresetSalon")?.addEventListener("click",()=>{Xs("/background-salon.jpg","Simulation salon moderne appliquée")});document.querySelector("#bgInput").onchange=n=>{const e=n.target.files[0];if(!e)return;const t=URL.createObjectURL(e);Xs(t,"Image de fond appliquée")};document.querySelector("#bgOpacity")&&(document.querySelector("#bgOpacity").oninput=n=>{document.querySelector("#bgOpacityValue").value=`${n.target.value} %`,Ci()});document.querySelector("#clearBg").onclick=()=>{li=null,Eh?.dispose(),Eh=null;const n=document.getElementById("bgOpacityControl");n&&(n.hidden=!0),Ci(),document.querySelector("#bgInput").value=""};const Ns=document.querySelector("#exportResolution"),Fs=document.querySelector("#exportResolutionSide");Ns?.addEventListener("change",()=>{Fs&&(Fs.value=Ns.value)});Fs?.addEventListener("change",()=>{Ns&&(Ns.value=Fs.value)});function zl(){return Number(Ns?.value||Fs?.value||2)}function Jr(n){const e=document.querySelector("#exportStatus"),t=document.querySelector("#exportStatusSide");e&&(e.textContent=n),t&&(t.textContent=n)}function kl(){const n=pi(),e=St.visible,t=zl();Yt(!1),St.visible=!1,Pe.getPixelRatio();const i=new se;Pe.getSize(i),Pe.setPixelRatio(Math.min(devicePixelRatio,2)*t),Pe.render(wt,be);const s=document.createElement("a"),r=t===1?"standard":t===2?"hd-2x":"ultrahd-3x";s.download=`mockup-${Ge}-${r}-${Date.now()}.png`,s.href=Pe.domElement.toDataURL("image/png"),document.body.append(s),s.click(),s.remove(),Pe.setPixelRatio(Math.min(devicePixelRatio,2)),Pe.setSize(i.x,i.y,!1),Pe.render(wt,be),Yt(n),St.visible=e,It(`Aperçu PNG ${r.toUpperCase()} téléchargé`)}document.querySelector("#exportPng")?.addEventListener("click",kl);document.querySelector("#exportPngSide")?.addEventListener("click",kl);async function Hl(){Ge!=="mug11oz"&&(document.querySelector("#productSelect").value="mug11oz",document.querySelector("#productSelect").dispatchEvent(new Event("change")),await new Promise(l=>setTimeout(l,120)));const n=pi(),e=St.visible,t=zl(),i=t===1?"standard":t===2?"hd-2x":"ultrahd-3x";Yt(!1),St.visible=!1,Pe.getPixelRatio();const s=new se;Pe.getSize(s);const r=be.position.clone(),o=Me.target.clone(),a=[{name:"vue1-90deg-anse-droite",degrees:90,label:"90°"},{name:"vue2-225deg-face",degrees:225,label:"225°"},{name:"vue3-270deg-anse-gauche",degrees:270,label:"270°"}];Pe.setPixelRatio(Math.min(devicePixelRatio,2)*t);for(let l=0;l<a.length;l++){const c=a[l];Jr(`Export vue ${l+1}/3 (${c.label})…`),oo(c.degrees),be.lookAt(Me.target),Pe.render(wt,be);const h=document.createElement("a");h.download=`mockup-mug-vue-${l+1}-${c.name}-${i}-${Date.now()}.png`,h.href=Pe.domElement.toDataURL("image/png"),document.body.append(h),h.click(),h.remove(),await new Promise(u=>setTimeout(u,350))}Jr("Prêt"),be.position.copy(r),Me.target.copy(o),Me.update(),Pe.setPixelRatio(Math.min(devicePixelRatio,2)),Pe.setSize(s.x,s.y,!1),Pe.render(wt,be),Yt(n),St.visible=e,It(`3 vues Mug exportées (90°, 225°, 270°) - ${i.toUpperCase()}`)}document.querySelector("#exportMugViews")?.addEventListener("click",Hl);document.querySelector("#exportMugViewsSide")?.addEventListener("click",Hl);document.querySelector("#exportMp4Side")?.addEventListener("click",()=>{document.querySelector("#exportMp4")?.click()});document.querySelector("#exportMp4").onclick=Vl;async function o_(){const n=pi(),e=St.visible,t=zl(),i=t===1?"standard":t===2?"hd-2x":"ultrahd-3x";Yt(!1),St.visible=!1;const s=new se;Pe.getSize(s);const r=be.position.clone(),o=Me.target.clone();Pe.setPixelRatio(Math.min(devicePixelRatio,2)*t);const a=[{name:"face-a",degrees:90,label:"Face A"},{name:"face-b",degrees:270,label:"Face B"}];for(let l=0;l<a.length;l++){const c=a[l];Jr(`Export vue ${l+1}/2 (${c.label})…`),oo(c.degrees),be.lookAt(Me.target),Pe.render(wt,be);const h=document.createElement("a");h.download=`mockup-${Ge}-${c.name}-${i}-${Date.now()}.png`,h.href=Pe.domElement.toDataURL("image/png"),document.body.append(h),h.click(),h.remove(),await new Promise(u=>setTimeout(u,350))}Jr("Prêt"),be.position.copy(r),Me.target.copy(o),Me.update(),Pe.setPixelRatio(Math.min(devicePixelRatio,2)),Pe.setSize(s.x,s.y,!1),Pe.render(wt,be),Yt(n),St.visible=e,It(`2 vues Porte-clés exportées (Face A, Face B) - ${i.toUpperCase()}`)}async function a_(){const n=document.querySelector("#exportAll");n&&(n.disabled=!0),document.querySelector("#exportStatus").textContent="Export complet...";try{Ge==="mug11oz"?await Hl():Ge.startsWith("keychain")?await o_():kl(),await Vl(),It("Tous les exports sont terminés !")}catch(e){console.error(e)}finally{n&&(n.disabled=!1),document.querySelector("#exportStatus").textContent="Prêt"}}document.querySelector("#exportAll")?.addEventListener("click",a_);async function Vl({download:n=!0}={}){const e=document.querySelector("#exportMp4"),t=document.querySelector("#exportMp4Side"),i=document.querySelector("#exportStatus"),s=e?.textContent||"Export MP4 (Rotation)",r=v=>{e&&(e.disabled=v),t&&(t.disabled=v)},o=v=>{e&&(e.textContent=v),t&&(t.textContent=v)};if(!window.VideoEncoder||!window.VideoFrame)return await Ko(e,t,i,s,n);let a=Pe.domElement.width-Pe.domElement.width%2,l=Pe.domElement.height-Pe.domElement.height%2;(a<=0||l<=0)&&(a=1280,l=720);const c=[{codec:"avc1.4d002a",width:a,height:l,bitrate:6e6,framerate:30,avc:{format:"avc"}},{codec:"avc1.42001f",width:a,height:l,bitrate:5e6,framerate:30,avc:{format:"avc"}}];let h=null;for(const v of c)try{if((await VideoEncoder.isConfigSupported(v))?.supported){h=v;break}}catch{}if(!h)return await Ko(e,t,i,s,n);const u=be.position.clone(),f=new Mu,p=new R3({target:f,video:{codec:"avc",width:a,height:l},fastStart:"in-memory",firstTimestampBehavior:"offset"});let g=null,_=null;try{_=new VideoEncoder({output:(v,C)=>p.addVideoChunk(v,C),error:v=>{g=v}}),_.configure(h)}catch(v){return console.warn("Initialisation VideoEncoder echouee, passage au mode compatibilite :",v),await Ko(e,t,i,s,n)}const m=typeof pi=="function"?pi():!1,d=St?St.visible:!1,M=Lt?Lt.visible:!1;Yt(!1),St&&(St.visible=!1),Lt&&(Lt.visible=!1),r(!0),Me.enabled=!1,Me.autoRotate=!1;const y=document.querySelector("#autoRotate");y&&(y.checked=!1);try{for(let C=0;C<180;C++){ku(C/180,u),Pe.render(wt,be);const S=new VideoFrame(Pe.domElement,{timestamp:Math.round(C*1e6/30),duration:Math.round(1e6/30)});_.encode(S,{keyFrame:C%60===0}),S.close();const A=Math.round((C+1)/1.8);o(`Creation MP4… ${A} %`),i&&(i.textContent="Gardez cette fenetre ouverte"),await new Promise(L=>requestAnimationFrame(L))}if(await _.flush(),g)throw g;p.finalize();const v=new Blob([f.buffer],{type:"video/mp4"});if(n){const C=URL.createObjectURL(v),S=document.createElement("a");S.href=C,S.download=`animation-${Ge}-${Date.now()}.mp4`,document.body.append(S),S.click(),S.remove(),setTimeout(()=>URL.revokeObjectURL(C),1e4),It("Animation MP4 enregistree")}return v}catch(v){if(console.error(v),It("Impossible de creer le MP4"),!n)throw v}finally{if(_)try{_.state!=="closed"&&_.close()}catch(v){console.warn("Erreur fermeture encoder :",v)}try{be.position.copy(u),be.lookAt(Me.target),Me.enabled=!0,Me.update(),Yt(m),St&&(St.visible=d),Lt&&(Lt.visible=M),Pe.render(wt,be)}catch(v){console.warn("Erreur restauration camera/scene :",v)}r(!1),o(s),i&&(i.textContent="PNG haute qualite ou MP4 de 6 secondes")}}async function Ko(n,e,t,i,s=!0){const r=m=>{n&&(n.disabled=m),e&&(e.disabled=m)},o=m=>{n&&(n.textContent=m),e&&(e.textContent=m)};if(!window.MediaRecorder||!Pe.domElement.captureStream){It("Export video indisponible dans ce navigateur"),r(!1);return}const a=be.position.clone(),l=[],c=Pe.domElement.captureStream(30),h=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(m=>MediaRecorder.isTypeSupported(m));if(!h){It("Enregistrement video indisponible"),r(!1);return}let u=null;try{u=new MediaRecorder(c,{mimeType:h,videoBitsPerSecond:5e6})}catch{It("Erreur initialisation enregistreur"),r(!1);return}u.ondataavailable=m=>{m.data&&m.data.size&&l.push(m.data)};const f=typeof pi=="function"?pi():!1,p=St?St.visible:!1,g=Lt?Lt.visible:!1;Yt(!1),St&&(St.visible=!1),Lt&&(Lt.visible=!1),r(!0),Me.enabled=!1,Me.autoRotate=!1;const _=document.querySelector("#autoRotate");_&&(_.checked=!1);try{u.start(250);const m=performance.now(),d=6e3;await new Promise(w=>{const E=D=>{const B=Math.min(1,(D-m)/d);ku(B,a),Pe.render(wt,be),o(`Enregistrement… ${Math.round(B*100)} %`),t&&(t.textContent="Creation locale de la video"),B<1?requestAnimationFrame(E):w()};requestAnimationFrame(E)});const M=new Promise(w=>u.addEventListener("stop",w,{once:!0}));u.stop(),await M,c.getTracks().forEach(w=>w.stop()),o("Conversion en MP4…"),t&&(t.textContent="Premiere conversion : quelques secondes");const[{FFmpeg:y},{fetchFile:v}]=await Promise.all([ec(()=>import("./index-CUxsIblL.js"),[]),ec(()=>import("./index-607UPNXL.js"),[])]),C=new y;await C.load({coreURL:"/ffmpeg-core.js",wasmURL:"/ffmpeg-core.wasm"}),await C.writeFile("rotation.webm",await v(new Blob(l,{type:h})));const S=await C.exec(["-i","rotation.webm","-vf","scale=1280:-2","-r","30","-an","-c:v","libx264","-profile:v","baseline","-level","3.1","-pix_fmt","yuv420p","-movflags","+faststart","rotation.mp4"]);if(S!==0)throw new Error(`FFmpeg a retourne le code ${S}`);const A=await C.readFile("rotation.mp4");if(!A?.length)throw new Error("Le fichier MP4 est vide");const L=new Blob([A],{type:"video/mp4"});if(s){const w=URL.createObjectURL(L),E=document.createElement("a");E.href=w,E.download=`animation-${Ge}-${Date.now()}.mp4`,document.body.append(E),E.click(),E.remove(),setTimeout(()=>URL.revokeObjectURL(w),1e4),It("Animation MP4 enregistree")}return C.terminate(),L}catch(m){if(console.error(m),It("La conversion MP4 a echoue"),!s)throw m}finally{try{u&&u.state!=="inactive"&&u.stop()}catch{}try{c.getTracks().forEach(m=>m.stop())}catch{}try{be.position.copy(a),be.lookAt(Me.target),Me.enabled=!0,Me.update(),Yt(f),St&&(St.visible=p),Lt&&(Lt.visible=g),Pe.render(wt,be)}catch{}r(!1),o(i),t&&(t.textContent="PNG haute qualite ou MP4 de 6 secondes")}}function It(n){const e=document.querySelector("#toast");e.textContent=n,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),2400)}function Gl(){const n=rn();if(!n||!n.img)return[];const e=n.img.width/n.img.height,t=Ge.startsWith("tshirt"),i=Ge.startsWith("keychain"),s=_e.printAspect||1.2,r=_e.meshWidth||(t?1.45:i?1.2:2.4),o=_e.meshHeight||(t?1.85:i?1.2/s:2);let a,l;n.fitMode==="contain"==e>s?(a=r,l=a/e):(l=o,a=l*e);const c=n.scaleX??n.scale??1,h=n.scaleY??n.scale??1;a*=c,l*=h;const u=n.x*(r/2),f=n.y*(o/2),p=to.degToRad(n.rotation),g=Math.cos(p),_=Math.sin(p);return[[-a/2,-l/2],[a/2,-l/2],[a/2,l/2],[-a/2,l/2]].map(([m,d])=>[u+m*g-d*_,f+m*_+d*g])}function Wl([n,e]){let t;const s=rn()?.side||"A";if(Ge.startsWith("keychain")){const o={keychainHeart:.45,keychainRound:.32,keychainRect:.29}[Ge]||.32,a=s==="B"?-.015:.015,l=s==="B"?-n:n;t=new R(l,e+o,a).project(be)}else if(Ge.startsWith("tshirt")){const r=s==="B"?-.015:.015,o=s==="B"?-n:n;t=new R(o,e+.35,r).project(be)}else t=new R(n,-.002,e).project(be);return[(t.x*.5+.5)*fi.clientWidth,(-t.y*.5+.5)*fi.clientHeight]}function Xl(){const n=rn();if(!n||!pi()||_e.type!=="flat")return;const e=n.side||"A";if(e==="A"&&be.position.z<-.1||e==="B"&&be.position.z>.1){il.setAttribute("points",""),sl.forEach(c=>{c.setAttribute("cx",-9999),c.setAttribute("cy",-9999)}),Or.forEach(c=>{c.setAttribute("cx",-9999),c.setAttribute("cy",-9999)}),Mi.setAttribute("x1",-9999),Mi.setAttribute("y1",-9999),Mi.setAttribute("x2",-9999),Mi.setAttribute("y2",-9999),as.setAttribute("cx",-9999),as.setAttribute("cy",-9999);return}const t=Gl().map(Wl);if(!t.length)return;if(il.setAttribute("points",t.map(c=>c.join(",")).join(" ")),sl.forEach((c,h)=>{c.setAttribute("cx",t[h][0]),c.setAttribute("cy",t[h][1])}),Or.length>=4){const c=[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2],h=[(t[1][0]+t[2][0])/2,(t[1][1]+t[2][1])/2],u=[(t[2][0]+t[3][0])/2,(t[2][1]+t[3][1])/2],f=[(t[3][0]+t[0][0])/2,(t[3][1]+t[0][1])/2],p=[c,h,u,f];Or.forEach((g,_)=>{g.setAttribute("cx",p[_][0]),g.setAttribute("cy",p[_][1])})}const i=[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2],s=t.reduce((c,h)=>[c[0]+h[0]/4,c[1]+h[1]/4],[0,0]),r=i[0]-s[0],o=i[1]-s[1],a=Math.hypot(r,o)||1,l=[i[0]+r/a*28,i[1]+o/a*28];Mi.setAttribute("x1",i[0]),Mi.setAttribute("y1",i[1]),Mi.setAttribute("x2",l[0]),Mi.setAttribute("y2",l[1]),as.setAttribute("cx",l[0]),as.setAttribute("cy",l[1])}let nt=null,cs=null;function ql(){return Gl().map(Wl).reduce((e,t)=>[e[0]+t[0]/4,e[1]+t[1]/4],[0,0])}function l_(n,e){const t=Gl().map(Wl);if(!t.length)return!1;let i=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){const[o,a]=t[s],[l,c]=t[r];a>e!=c>e&&n<(l-o)*(e-a)/(c-a)+o&&(i=!i)}return i}const wh=new Ep,Jo=new se;function Hu(n){const e=Pe.domElement.getBoundingClientRect();Jo.x=(n.clientX-e.left)/e.width*2-1,Jo.y=-((n.clientY-e.top)/e.height)*2+1,wh.setFromCamera(Jo,be);const t=[];_e.printMesh&&t.push(_e.printMesh),_e.group.traverse(s=>{s.isMesh&&s.material===_e.topMaterial&&t.push(s)});const i=wh.intersectObjects(t.length?t:_e.group.children,!0);return i.length>0?i[0]:null}Pe.domElement.addEventListener("pointerdown",n=>{cs={x:n.offsetX,y:n.offsetY};const e=rn();e&&Ge==="mug11oz"&&Hu(n)&&(Me.enabled=!1,nt={type:"mug-drag",startX:n.clientX,startY:n.clientY,initialPosX:e.x,initialPosY:e.y},Pe.domElement.setPointerCapture(n.pointerId))});Pe.domElement.addEventListener("pointermove",n=>{const e=rn();if(nt&&nt.type==="mug-drag"&&e){const t=(n.clientX-nt.startX)/fi.clientWidth,i=(n.clientY-nt.startY)/fi.clientHeight;e.x=Math.max(-1,Math.min(1,nt.initialPosX+t*2.2)),e.y=Math.max(-1,Math.min(1,nt.initialPosY-i*2.2)),Li(),Et()}});Pe.domElement.addEventListener("pointerup",n=>{if(nt&&nt.type==="mug-drag"){try{Pe.domElement.releasePointerCapture(n.pointerId)}catch{}nt=null,Me.enabled=!0;return}const e=rn();if(!e||!cs)return;if(!(Math.hypot(n.offsetX-cs.x,n.offsetY-cs.y)>5)){if(_e.type==="flat")document.querySelector("#showTransformFrame").checked&&Yt(l_(n.offsetX,n.offsetY));else if(Ge==="mug11oz"){const i=Hu(n);i&&i.uv&&(e.x=Math.max(-1,Math.min(1,(i.uv.x-.5)*2)),e.y=Math.max(-1,Math.min(1,(i.uv.y-.5)*2)),Li(),Et(),It("Image positionnée"))}}cs=null});document.addEventListener("keydown",n=>{n.key==="Escape"&&(document.querySelector("#showTransformFrame").checked=!1,Yt(!1))});il.addEventListener("pointerdown",n=>{const e=rn();e&&(n.preventDefault(),nt={type:"move",x:n.clientX,y:n.clientY,startX:e.x,startY:e.y},cn.setPointerCapture(n.pointerId),Me.enabled=!1)});sl.forEach(n=>n.addEventListener("pointerdown",e=>{const t=rn();if(!t)return;e.preventDefault();const i=ql();nt={type:"corner-scale",corner:Number(n.dataset.corner),center:i,startDistance:Math.hypot(e.offsetX-i[0],e.offsetY-i[1])||1,startScaleX:t.scaleX??1,startScaleY:t.scaleY??1},cn.setPointerCapture(e.pointerId),Me.enabled=!1}));Or.forEach(n=>n.addEventListener("pointerdown",e=>{const t=rn();if(!t)return;e.preventDefault();const i=ql();nt={type:"edge-scale",edge:Number(n.dataset.edge),center:i,startDistance:Math.hypot(e.offsetX-i[0],e.offsetY-i[1])||1,startScaleX:t.scaleX??1,startScaleY:t.scaleY??1},cn.setPointerCapture(e.pointerId),Me.enabled=!1}));as.addEventListener("pointerdown",n=>{const e=rn();if(!e)return;n.preventDefault();const t=ql();nt={type:"rotate",center:t,startAngle:Math.atan2(n.offsetY-t[1],n.offsetX-t[0]),startRotation:e.rotation},cn.setPointerCapture(n.pointerId),Me.enabled=!1});cn.addEventListener("pointermove",n=>{const e=rn();if(!nt||!e)return;const t=e.side||"A";if(nt.type==="move"){const i=(n.clientX-nt.x)/fi.clientWidth*2.2,s=t==="B"?-i:i;e.x=Math.max(-1,Math.min(1,nt.startX+s)),e.y=Math.max(-1,Math.min(1,nt.startY-(n.clientY-nt.y)/fi.clientHeight*2.2))}else if(nt.type==="corner-scale"){const s=Math.hypot(n.offsetX-nt.center[0],n.offsetY-nt.center[1])/nt.startDistance;e.scaleX=Math.max(.15,Math.min(3.5,nt.startScaleX*s)),e.scaleY=Math.max(.15,Math.min(3.5,nt.startScaleY*s)),e.scale=(e.scaleX+e.scaleY)/2}else if(nt.type==="edge-scale"){const s=Math.hypot(n.offsetX-nt.center[0],n.offsetY-nt.center[1])/nt.startDistance;nt.edge===0||nt.edge===2?e.scaleY=Math.max(.15,Math.min(3.5,nt.startScaleY*s)):e.scaleX=Math.max(.15,Math.min(3.5,nt.startScaleX*s)),e.scale=(e.scaleX+e.scaleY)/2}else if(nt.type==="rotate"){const i=Math.atan2(n.offsetY-nt.center[1],n.offsetX-nt.center[0]),s=to.radToDeg(i-nt.startAngle);e.rotation=nt.startRotation+(t==="B"?-s:s)}Li(),Et()});cn.addEventListener("pointerup",()=>{nt=null,Me.enabled=!0});function Qr(){const{clientWidth:n,clientHeight:e}=fi;!n||!e||(Pe.setSize(n,e,!0),be.aspect=n/e,be.updateProjectionMatrix())}new ResizeObserver(Qr).observe(fi);Qr();q0();function Vu(n=performance.now()){requestAnimationFrame(Vu);const e=Math.min(.05,(n-bh)/1e3);if(bh=n,document.querySelector("#autoRotate").checked&&Me.enabled){const t=document.querySelector("#rotationMode").value,i=document.querySelector("#reverse").checked?-1:1,s=Number(document.querySelector("#speed").value)/12*.55;let r=i;t==="swing"&&(ls+=s*e*Br,Math.abs(ls)>.75&&(ls=Math.sign(ls)*.75,Br*=-1),r*=Br);const o=be.position.clone().sub(Me.target).applyAxisAngle(zu[t],s*e*r);be.position.copy(Me.target).add(o),be.lookAt(Me.target)}Me.update(),Pe.render(wt,be),Xl()}Vu();setTimeout(()=>document.querySelector("#productSelect").dispatchEvent(new CustomEvent("change",{detail:{initial:!0}})),100);const Th=document.querySelector(".workspace");for(const[n,e,t]of[["toggleLeftSidebar","left-collapsed","gauche"],["toggleRightSidebar","right-collapsed","droite"]]){const i=document.getElementById(n),s=()=>{const r=!Th.classList.contains(e);i.setAttribute("aria-expanded",String(r)),i.setAttribute("aria-label",(r?"Masquer":"Afficher")+" le menu de "+t),i.title=i.getAttribute("aria-label")};i.addEventListener("click",()=>{Th.classList.toggle(e),s(),requestAnimationFrame(Qr),setTimeout(Qr,320)}),s()}async function Ah(){const n=new se;Pe.getSize(n);const e=Pe.getPixelRatio(),t=pi(),i=St.visible,s=Lt.visible;try{return Yt(!1),St.visible=!1,Lt.visible=!1,Pe.setPixelRatio(Math.min(devicePixelRatio,2)*2),Pe.render(wt,be),Pe.domElement.toDataURL("image/png")}finally{Pe.setPixelRatio(e),Pe.setSize(n.x,n.y,!1),St.visible=i,Lt.visible=s,Yt(t),Pe.render(wt,be)}}function c_(n){return new Promise((e,t)=>{const i=new FileReader;i.onload=()=>e(i.result),i.onerror=()=>t(i.error),i.readAsDataURL(n)})}function h_(){const n=Jt?.image;if(!n?.toDataURL)throw new Error("Ajoutez une image ou un texte avant l’envoi.");return n.toDataURL("image/png")}document.querySelector("#submitCreation")?.addEventListener("click",async()=>{if(!pn)return;const n=document.querySelector("#submitCreation"),e=n.textContent;n.disabled=!0;let t=!1;try{if(!Jt)throw new Error("Ajoutez une image ou un texte avant l’envoi.");if(!(await(await fetch("/api/submissions/status")).json()).configured)throw new Error("Envoi mail non configuré. Contactez Graph2Print.");t=!0,document.querySelector("#submissionMask").hidden=!1,Us=!0,Et(),Ci(),n.textContent="Préparation des fichiers…";const r=Ge,o=[],a=(_,m)=>o.push({name:_,type:"image/png",data:m}),l=_e.printable||V0[r].printable||[210,95];if(a("wrap-"+r+"-"+l.join("x")+"mm.png",h_()),nn?.image&&a("coeur-tshirt.png",nn.image.toDataURL("image/png")),r==="tshirt3D"){const _=Jt.image;for(const[m,d]of["a","b"].entries()){const M=document.createElement("canvas");M.width=_.width/2,M.height=_.height,M.getContext("2d").drawImage(_,m*M.width,0,M.width,M.height,0,0,M.width,M.height),a("wrap-tshirt-face-"+d+"-"+l.join("x")+"mm.png",M.toDataURL("image/png"))}}const c=be.position.clone(),h=Me.target.clone(),u=document.querySelector("#viewAngle").value;try{a("mockup-"+r+"-apercu.png",await Ah());const _=r==="mug11oz"?[{name:"90deg",angle:90},{name:"225deg",angle:225},{name:"270deg",angle:270}]:r.startsWith("keychain")||r==="tshirt3D"?[{name:"face-a",angle:90},{name:"face-b",angle:270}]:[];for(const m of _)oo(m.angle),a("mockup-"+r+"-"+m.name+".png",await Ah())}finally{be.position.copy(c),Me.target.copy(h),Me.update(),document.querySelector("#viewAngle").value=u,Pe.render(wt,be)}n.textContent="Création de la vidéo…";let f=!1;try{const _=await Vl({download:!1});_?.size?o.push({name:"animation-"+r+".mp4",type:"video/mp4",data:await c_(_)}):f=!0}catch(_){console.warn("MP4 unavailable:",_),f=!0}n.textContent="Envoi en cours…";const p=await fetch("/api/submissions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({product:V0[r].name,files:o})}),g=await p.json();if(!p.ok||!g.ok)throw new Error(g.error||"L'envoi a échoué.");It(f?"Création envoyée, vidéo indisponible":"Création et exports envoyés")}catch(i){console.error(i),It(i.message||"L'envoi a échoué.")}finally{t&&(Us=!1,Et(),Ci(),document.querySelector("#submissionMask").hidden=!0),n.disabled=!1,n.textContent=e}});function Os(){if(!pn)return;const n=Ot.length>0||!!Ue.text.trim(),e=Bl?n?Iu?4:3:2:1;document.body.dataset.clientStep=String(e);const t=["","Étape 1 · Choisir un produit","Étape 2 · Ajouter un visuel","Étape 3 · Ajuster le rendu","Étape 4 · Envoyer la création"],i=["","Choisissez un produit dans la liste, puis confirmez votre choix.","Importez une image PNG ou JPG, ou ajoutez du texte.","Vérifiez les faces, la position et les couleurs. Confirmez quand le rendu vous convient.","Les fichiers PNG et la vidéo seront préparés puis envoyés à Graph2Print."];document.querySelector("#clientGuideTitle").textContent=t[e],document.querySelector("#clientGuideText").textContent=i[e],document.querySelectorAll("[data-guide-step]").forEach(r=>{const o=Number(r.dataset.guideStep);r.classList.toggle("active",o===e),r.classList.toggle("done",o<e)});const s=document.querySelector("#clientGuideAction");s.hidden=e===2,s.textContent=e===1?"Choisir ce produit":e===3?"Mon visuel est prêt":"Envoyer ma création",document.querySelector("#submitCreation").disabled=e!==4}document.querySelector("#clientGuideAction").addEventListener("click",()=>{const n=Number(document.body.dataset.clientStep);n===1&&(Bl=!0),n===3&&(Iu=!0),n===4&&document.querySelector("#submitCreation").click(),Os()});Os();document.querySelector("#loadTshirtExample").addEventListener("click",async()=>{if(Ge!=="tshirt3D")return;const n=new Image;n.src="/logo-graph2print.png",await n.decode();for(const e of["A","B","heart"])Ot.push({id:"example-"+e+"-"+Date.now(),name:"Exemple Graph2Print · "+e,img:n,scale:1,scaleX:1,scaleY:1,x:0,y:0,rotation:0,fitMode:"contain",side:e});$n=Ot.length-1,Ws(),Li(),Et(),It("Exemples ajoutés : devant, dos et cœur")});
