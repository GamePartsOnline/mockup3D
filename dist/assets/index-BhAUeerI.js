(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const r0="180",ir={ROTATE:0,DOLLY:1,PAN:2},Qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Au=0,G0=1,Cu=2,fc=1,mc=2,zn=3,Wn=0,qt=1,bn=2,ei=0,Ei=1,W0=2,X0=3,q0=4,Ru=5,yi=100,Pu=101,Lu=102,Du=103,Iu=104,Uu=200,Nu=201,Ou=202,Fu=203,ta=204,na=205,Bu=206,zu=207,ku=208,Hu=209,Vu=210,Gu=211,Wu=212,Xu=213,qu=214,ia=0,ra=1,sa=2,or=3,oa=4,aa=5,la=6,ca=7,s0=0,Yu=1,ju=2,ti=0,pc=1,$u=2,Ku=3,Zu=4,Ju=5,Qu=6,eh=7,gc=300,ar=301,lr=302,ua=303,ha=304,lo=306,da=1e3,Mi=1001,fa=1002,gn=1003,th=1004,as=1005,En=1006,mo=1007,bi=1008,Rn=1009,_c=1010,vc=1011,Hr=1012,o0=1013,Ti=1014,Hn=1015,es=1016,a0=1017,l0=1018,Vr=1020,xc=35902,yc=35899,Sc=1021,Mc=1022,pn=1023,Gr=1026,Wr=1027,bc=1028,c0=1029,Ec=1030,u0=1031,h0=1033,ks=33776,Hs=33777,Vs=33778,Gs=33779,ma=35840,pa=35841,ga=35842,_a=35843,va=36196,xa=37492,ya=37496,Sa=37808,Ma=37809,ba=37810,Ea=37811,wa=37812,Ta=37813,Aa=37814,Ca=37815,Ra=37816,Pa=37817,La=37818,Da=37819,Ia=37820,Ua=37821,Na=36492,Oa=36494,Fa=36495,Ba=36283,za=36284,ka=36285,Ha=36286,nh=3200,ih=3201,d0=0,rh=1,Qn="",zt="srgb",cr="srgb-linear",Ks="linear",ht="srgb",Ii=7680,Y0=519,sh=512,oh=513,ah=514,wc=515,lh=516,ch=517,uh=518,hh=519,Va=35044,j0="300 es",wn=2e3,Zs=2001;class Li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $0=1234567;const Pr=Math.PI/180,Xr=180/Math.PI;function An(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function f0(n,e){return(n%e+e)%e}function dh(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function fh(n,e,t){return n!==e?(t-n)/(e-n):0}function Lr(n,e,t){return(1-t)*n+t*e}function mh(n,e,t,i){return Lr(n,e,1-Math.exp(-t*i))}function ph(n,e=1){return e-Math.abs(f0(n,e*2)-e)}function gh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function _h(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function vh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function xh(n,e){return n+Math.random()*(e-n)}function yh(n){return n*(.5-Math.random())}function Sh(n){n!==void 0&&($0=n);let e=$0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Mh(n){return n*Pr}function bh(n){return n*Xr}function Eh(n){return(n&n-1)===0&&n!==0}function wh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Th(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ah(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),m=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Tc={DEG2RAD:Pr,RAD2DEG:Xr,generateUUID:An,clamp:je,euclideanModulo:f0,mapLinear:dh,inverseLerp:fh,lerp:Lr,damp:mh,pingpong:ph,smoothstep:gh,smootherstep:_h,randInt:vh,randFloat:xh,randFloatSpread:yh,seededRandom:Sh,degToRad:Mh,radToDeg:bh,isPowerOfTwo:Eh,ceilPowerOfTwo:wh,floorPowerOfTwo:Th,setQuaternionFromProperEuler:Ah,normalize:ct,denormalize:mn};class re{constructor(e=0,t=0){re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ai{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==m||u!==g){let p=1-a;const d=l*f+c*m+u*g+h*_,M=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const C=Math.sqrt(y),S=Math.atan2(C,d*M);p=Math.sin(p*S)/C,a=Math.sin(a*S)/C}const v=a*M;if(l=l*p+f*v,c=c*p+m*v,u=u*p+g*v,h=h*p+_*v,p===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-a*m,e[t+2]=c*g+u*m+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(K0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(K0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return po.copy(this).projectOnVector(e),this.sub(po)}reflect(e){return this.sub(po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const po=new P,K0=new Ai;class qe{constructor(e,t,i,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],g=i[8],_=r[0],p=r[3],d=r[6],M=r[1],y=r[4],v=r[7],C=r[2],S=r[5],T=r[8];return s[0]=o*_+a*M+l*C,s[3]=o*p+a*y+l*S,s[6]=o*d+a*v+l*T,s[1]=c*_+u*M+h*C,s[4]=c*p+u*y+h*S,s[7]=c*d+u*v+h*T,s[2]=f*_+m*M+g*C,s[5]=f*p+m*y+g*S,s[8]=f*d+m*v+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,m=c*s-o*l,g=t*h+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(go.makeScale(e,t)),this}rotate(e){return this.premultiply(go.makeRotation(-e)),this}translate(e,t){return this.premultiply(go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const go=new qe;function Ac(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ch(){const n=qr("canvas");return n.style.display="block",n}const Z0={};function Yr(n){n in Z0||(Z0[n]=!0,console.warn(n))}function Rh(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const J0=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Q0=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ph(){const n={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ht&&(r.r=Vn(r.r),r.g=Vn(r.g),r.b=Vn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(r.r=rr(r.r),r.g=rr(r.g),r.b=rr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qn?Ks:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Yr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Yr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[cr]:{primaries:e,whitePoint:i,transfer:Ks,toXYZ:J0,fromXYZ:Q0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:J0,fromXYZ:Q0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),n}const ot=Ph();function Vn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ui;class Lh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ui===void 0&&(Ui=qr("canvas")),Ui.width=e.width,Ui.height=e.height;const r=Ui.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ui}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vn(t[i]/255)*255):t[i]=Vn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dh=0;class m0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=An(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(_o(r[o].image)):s.push(_o(r[o]))}else s=_o(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function _o(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Lh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ih=0;const vo=new P;class kt extends Li{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=Mi,r=Mi,s=En,o=bi,a=pn,l=Rn,c=kt.DEFAULT_ANISOTROPY,u=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=An(),this.name="",this.source=new m0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vo).x}get height(){return this.source.getSize(vo).y}get depth(){return this.source.getSize(vo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case da:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case da:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=gc;kt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(m+1)/2,C=(d+1)/2,S=(u+f)/4,T=(h+_)/4,L=(g+p)/4;return y>v&&y>C?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=S/i,s=T/i):v>C?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=S/r,s=L/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=L/s),this.set(i,r,s,t),this}let M=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uh extends Li{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new kt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new m0(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends Uh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Cc extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nh extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mr{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hn):hn.fromBufferAttribute(s,o),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ls.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ls.copy(i.boundingBox)),ls.applyMatrix4(e.matrixWorld),this.union(ls)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),cs.subVectors(this.max,_r),Ni.subVectors(e.a,_r),Oi.subVectors(e.b,_r),Fi.subVectors(e.c,_r),Xn.subVectors(Oi,Ni),qn.subVectors(Fi,Oi),ai.subVectors(Ni,Fi);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-ai.z,ai.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,ai.z,0,-ai.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-ai.y,ai.x,0];return!xo(t,Ni,Oi,Fi,cs)||(t=[1,0,0,0,1,0,0,0,1],!xo(t,Ni,Oi,Fi,cs))?!1:(us.crossVectors(Xn,qn),t=[us.x,us.y,us.z],xo(t,Ni,Oi,Fi,cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const In=[new P,new P,new P,new P,new P,new P,new P,new P],hn=new P,ls=new mr,Ni=new P,Oi=new P,Fi=new P,Xn=new P,qn=new P,ai=new P,_r=new P,cs=new P,us=new P,li=new P;function xo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){li.fromArray(n,s);const a=r.x*Math.abs(li.x)+r.y*Math.abs(li.y)+r.z*Math.abs(li.z),l=e.dot(li),c=t.dot(li),u=i.dot(li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Oh=new mr,vr=new P,yo=new P;class ts{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Oh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);const t=vr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(vr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(yo)),this.expandByPoint(vr.copy(e.center).sub(yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Un=new P,So=new P,hs=new P,Yn=new P,Mo=new P,ds=new P,bo=new P;class ns{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){So.copy(e).add(t).multiplyScalar(.5),hs.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(So);const s=e.distanceTo(t)*.5,o=-this.direction.dot(hs),a=Yn.dot(this.direction),l=-Yn.dot(hs),c=Yn.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(So).addScaledVector(hs,f),m}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const i=Un.dot(this.direction),r=Un.dot(Un)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,i,r,s){Mo.subVectors(t,e),ds.subVectors(i,e),bo.crossVectors(Mo,ds);let o=this.direction.dot(bo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,e);const l=a*this.direction.dot(ds.crossVectors(Yn,ds));if(l<0)return null;const c=a*this.direction.dot(Mo.cross(Yn));if(c<0||l+c>o)return null;const u=-a*Yn.dot(bo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,r,s,o,a,l,c,u,h,f,m,g,_,p){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,m,g,_,p)}set(e,t,i,r,s,o,a,l,c,u,h,f,m,g,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Bi.setFromMatrixColumn(e,0).length(),s=1/Bi.setFromMatrixColumn(e,1).length(),o=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fh,e,Bh)}lookAt(e,t,i){const r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),jn.crossVectors(i,Kt),jn.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),jn.crossVectors(i,Kt)),jn.normalize(),fs.crossVectors(Kt,jn),r[0]=jn.x,r[4]=fs.x,r[8]=Kt.x,r[1]=jn.y,r[5]=fs.y,r[9]=Kt.y,r[2]=jn.z,r[6]=fs.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],d=i[14],M=i[3],y=i[7],v=i[11],C=i[15],S=r[0],T=r[4],L=r[8],w=r[12],E=r[1],D=r[5],F=r[9],z=r[13],V=r[2],G=r[6],X=r[10],K=r[14],W=r[3],he=r[7],_e=r[11],be=r[15];return s[0]=o*S+a*E+l*V+c*W,s[4]=o*T+a*D+l*G+c*he,s[8]=o*L+a*F+l*X+c*_e,s[12]=o*w+a*z+l*K+c*be,s[1]=u*S+h*E+f*V+m*W,s[5]=u*T+h*D+f*G+m*he,s[9]=u*L+h*F+f*X+m*_e,s[13]=u*w+h*z+f*K+m*be,s[2]=g*S+_*E+p*V+d*W,s[6]=g*T+_*D+p*G+d*he,s[10]=g*L+_*F+p*X+d*_e,s[14]=g*w+_*z+p*K+d*be,s[3]=M*S+y*E+v*V+C*W,s[7]=M*T+y*D+v*G+C*he,s[11]=M*L+y*F+v*X+C*_e,s[15]=M*w+y*z+v*K+C*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],d=e[15];return g*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*m-i*l*m)+_*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+p*(+t*c*h-t*a*m-s*o*h+i*o*m+s*a*u-i*c*u)+d*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],d=e[15],M=h*p*c-_*f*c+_*l*m-a*p*m-h*l*d+a*f*d,y=g*f*c-u*p*c-g*l*m+o*p*m+u*l*d-o*f*d,v=u*_*c-g*h*c+g*a*m-o*_*m-u*a*d+o*h*d,C=g*h*l-u*_*l-g*a*f+o*_*f+u*a*p-o*h*p,S=t*M+i*y+r*v+s*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=M*T,e[1]=(_*f*s-h*p*s-_*r*m+i*p*m+h*r*d-i*f*d)*T,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*d+i*l*d)*T,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*m-i*l*m)*T,e[4]=y*T,e[5]=(u*p*s-g*f*s+g*r*m-t*p*m-u*r*d+t*f*d)*T,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*d-t*l*d)*T,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*m+t*l*m)*T,e[8]=v*T,e[9]=(g*h*s-u*_*s-g*i*m+t*_*m+u*i*d-t*h*d)*T,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*d+t*a*d)*T,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*m-t*a*m)*T,e[12]=C*T,e[13]=(u*_*r-g*h*r+g*i*f-t*_*f-u*i*p+t*h*p)*T,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*p-t*a*p)*T,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,m=s*u,g=s*h,_=o*u,p=o*h,d=a*h,M=l*c,y=l*u,v=l*h,C=i.x,S=i.y,T=i.z;return r[0]=(1-(_+d))*C,r[1]=(m+v)*C,r[2]=(g-y)*C,r[3]=0,r[4]=(m-v)*S,r[5]=(1-(f+d))*S,r[6]=(p+M)*S,r[7]=0,r[8]=(g+y)*T,r[9]=(p-M)*T,r[10]=(1-(f+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Bi.set(r[0],r[1],r[2]).length();const o=Bi.set(r[4],r[5],r[6]).length(),a=Bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],dn.copy(this);const c=1/s,u=1/o,h=1/a;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=h,dn.elements[9]*=h,dn.elements[10]*=h,t.setFromRotationMatrix(dn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=wn,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),m=(i+r)/(i-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===wn)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Zs)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=wn,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-r),f=-(t+e)/(t-e),m=-(i+r)/(i-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===wn)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Zs)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Bi=new P,dn=new mt,Fh=new P(0,0,0),Bh=new P(1,1,1),jn=new P,fs=new P,Kt=new P,el=new mt,tl=new Ai;class Yt{constructor(e=0,t=0,i=0,r=Yt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return el.makeRotationFromQuaternion(e),this.setFromRotationMatrix(el,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tl.setFromEuler(this),this.setFromQuaternion(tl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yt.DEFAULT_ORDER="XYZ";class p0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zh=0;const nl=new P,zi=new Ai,Nn=new mt,ms=new P,xr=new P,kh=new P,Hh=new Ai,il=new P(1,0,0),rl=new P(0,1,0),sl=new P(0,0,1),ol={type:"added"},Vh={type:"removed"},ki={type:"childadded",child:null},Eo={type:"childremoved",child:null};class Tt extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new P,t=new Yt,i=new Ai,r=new P(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new qe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new p0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(il,e)}rotateY(e){return this.rotateOnAxis(rl,e)}rotateZ(e){return this.rotateOnAxis(sl,e)}translateOnAxis(e,t){return nl.copy(e).applyQuaternion(this.quaternion),this.position.add(nl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(il,e)}translateY(e){return this.translateOnAxis(rl,e)}translateZ(e){return this.translateOnAxis(sl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ms.copy(e):ms.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(xr,ms,this.up):Nn.lookAt(ms,xr,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),zi.setFromRotationMatrix(Nn),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ol),ki.child=e,this.dispatchEvent(ki),ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vh),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ol),ki.child=e,this.dispatchEvent(ki),ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,kh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Hh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new P(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new P,On=new P,wo=new P,Fn=new P,Hi=new P,Vi=new P,al=new P,To=new P,Ao=new P,Co=new P,Ro=new bt,Po=new bt,Lo=new bt;class ln{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),fn.subVectors(e,t),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){fn.subVectors(r,t),On.subVectors(i,t),wo.subVectors(e,t);const o=fn.dot(fn),a=fn.dot(On),l=fn.dot(wo),c=On.dot(On),u=On.dot(wo),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ro.setScalar(0),Po.setScalar(0),Lo.setScalar(0),Ro.fromBufferAttribute(e,t),Po.fromBufferAttribute(e,i),Lo.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ro,s.x),o.addScaledVector(Po,s.y),o.addScaledVector(Lo,s.z),o}static isFrontFacing(e,t,i,r){return fn.subVectors(i,t),On.subVectors(e,t),fn.cross(On).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),fn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ln.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Hi.subVectors(r,i),Vi.subVectors(s,i),To.subVectors(e,i);const l=Hi.dot(To),c=Vi.dot(To);if(l<=0&&c<=0)return t.copy(i);Ao.subVectors(e,r);const u=Hi.dot(Ao),h=Vi.dot(Ao);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Hi,o);Co.subVectors(e,s);const m=Hi.dot(Co),g=Vi.dot(Co);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Vi,a);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return al.subVectors(s,r),a=(h-u)/(h-u+(m-g)),t.copy(r).addScaledVector(al,a);const d=1/(p+_+f);return o=_*d,a=f*d,t.copy(i).addScaledVector(Hi,o).addScaledVector(Vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},ps={h:0,s:0,l:0};function Do(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ot.workingColorSpace){if(e=f0(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Do(o,s,e+1/3),this.g=Do(o,s,e),this.b=Do(o,s,e-1/3)}return ot.colorSpaceToWorking(this,r),this}setStyle(e,t=zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const i=Rc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return ot.workingToColorSpace(Bt.copy(this),e),Math.round(je(Bt.r*255,0,255))*65536+Math.round(je(Bt.g*255,0,255))*256+Math.round(je(Bt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(Bt.copy(this),t);const i=Bt.r,r=Bt.g,s=Bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=zt){ot.workingToColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,r=Bt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(ps);const i=Lr($n.h,ps.h,t),r=Lr($n.s,ps.s,t),s=Lr($n.l,ps.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Ve;Ve.NAMES=Rc;let Gh=0;class un extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=An(),this.name="",this.type="Material",this.blending=Ei,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=na,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Y0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(i.blending=this.blending),this.side!==Wn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ta&&(i.blendSrc=this.blendSrc),this.blendDst!==na&&(i.blendDst=this.blendDst),this.blendEquation!==yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Y0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class g0 extends un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=s0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new P,gs=new re;let Wh=0;class _n{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Va,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)gs.fromBufferAttribute(this,t),gs.applyMatrix3(e),this.setXY(t,gs.x,gs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),r=ct(r,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Va&&(e.usage=this.usage),e}}class Pc extends _n{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Lc extends _n{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Je extends _n{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Xh=0;const rn=new mt,Io=new Tt,Gi=new P,Zt=new mr,yr=new mr,It=new P;class At extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ac(e)?Lc:Pc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,i){return rn.makeTranslation(e,t,i),this.applyMatrix4(rn),this}scale(e,t,i){return rn.makeScale(e,t,i),this.applyMatrix4(rn),this}lookAt(e){return Io.lookAt(e),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(Zt.min,yr.min),Zt.expandByPoint(It),It.addVectors(Zt.max,yr.max),Zt.expandByPoint(It)):(Zt.expandByPoint(yr.min),Zt.expandByPoint(yr.max))}Zt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(Gi.fromBufferAttribute(e,c),It.add(Gi)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new P,l[L]=new P;const c=new P,u=new P,h=new P,f=new re,m=new re,g=new re,_=new P,p=new P;function d(L,w,E){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,E),f.fromBufferAttribute(s,L),m.fromBufferAttribute(s,w),g.fromBufferAttribute(s,E),u.sub(c),h.sub(c),m.sub(f),g.sub(f);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(D),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(D),a[L].add(_),a[w].add(_),a[E].add(_),l[L].add(p),l[w].add(p),l[E].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let L=0,w=M.length;L<w;++L){const E=M[L],D=E.start,F=E.count;for(let z=D,V=D+F;z<V;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new P,v=new P,C=new P,S=new P;function T(L){C.fromBufferAttribute(r,L),S.copy(C);const w=a[L];y.copy(w),y.sub(C.multiplyScalar(C.dot(w))).normalize(),v.crossVectors(S,w);const D=v.dot(l[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,D)}for(let L=0,w=M.length;L<w;++L){const E=M[L],D=E.start,F=E.count;for(let z=D,V=D+F;z<V;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[m++]}return new _n(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ll=new mt,ci=new ns,_s=new ts,cl=new P,vs=new P,xs=new P,ys=new P,Uo=new P,Ss=new P,ul=new P,Ms=new P;class Oe extends Tt{constructor(e=new At,t=new g0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ss.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Uo.fromBufferAttribute(h,e),o?Ss.addScaledVector(Uo,u):Ss.addScaledVector(Uo.sub(t),u))}t.add(Ss)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_s.copy(i.boundingSphere),_s.applyMatrix4(s),ci.copy(e.ray).recast(e.near),!(_s.containsPoint(ci.origin)===!1&&(ci.intersectSphere(_s,cl)===null||ci.origin.distanceToSquared(cl)>(e.far-e.near)**2))&&(ll.copy(s).invert(),ci.copy(e.ray).applyMatrix4(ll),!(i.boundingBox!==null&&ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],M=Math.max(p.start,m.start),y=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let v=M,C=y;v<C;v+=3){const S=a.getX(v),T=a.getX(v+1),L=a.getX(v+2);r=bs(this,d,e,i,c,u,h,S,T,L),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const M=a.getX(p),y=a.getX(p+1),v=a.getX(p+2);r=bs(this,o,e,i,c,u,h,M,y,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],M=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let v=M,C=y;v<C;v+=3){const S=v,T=v+1,L=v+2;r=bs(this,d,e,i,c,u,h,S,T,L),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const M=p,y=p+1,v=p+2;r=bs(this,o,e,i,c,u,h,M,y,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function qh(n,e,t,i,r,s,o,a){let l;if(e.side===qt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Wn,a),l===null)return null;Ms.copy(a),Ms.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ms);return c<t.near||c>t.far?null:{distance:c,point:Ms.clone(),object:n}}function bs(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,vs),n.getVertexPosition(l,xs),n.getVertexPosition(c,ys);const u=qh(n,e,t,i,vs,xs,ys,ul);if(u){const h=new P;ln.getBarycoord(ul,vs,xs,ys,h),r&&(u.uv=ln.getInterpolatedAttribute(r,a,l,c,h,new re)),s&&(u.uv1=ln.getInterpolatedAttribute(s,a,l,c,h,new re)),o&&(u.normal=ln.getInterpolatedAttribute(o,a,l,c,h,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new P,materialIndex:0};ln.getNormal(vs,xs,ys,f.normal),u.face=f,u.barycoord=h}return u}class Tn extends At{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(h,2));function g(_,p,d,M,y,v,C,S,T,L,w){const E=v/T,D=C/L,F=v/2,z=C/2,V=S/2,G=T+1,X=L+1;let K=0,W=0;const he=new P;for(let _e=0;_e<X;_e++){const be=_e*D-z;for(let Ge=0;Ge<G;Ge++){const Ze=Ge*E-F;he[_]=Ze*M,he[p]=be*y,he[d]=V,c.push(he.x,he.y,he.z),he[_]=0,he[p]=0,he[d]=S>0?1:-1,u.push(he.x,he.y,he.z),h.push(Ge/T),h.push(1-_e/L),K+=1}}for(let _e=0;_e<L;_e++)for(let be=0;be<T;be++){const Ge=f+be+G*_e,Ze=f+be+G*(_e+1),rt=f+(be+1)+G*(_e+1),tt=f+(be+1)+G*_e;l.push(Ge,Ze,tt),l.push(Ze,rt,tt),W+=6}a.addGroup(m,W,w),m+=W,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ur(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const i=ur(n[t]);for(const r in i)e[r]=i[r]}return e}function Yh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const jh={clone:ur,merge:Gt};var $h=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$h,this.fragmentShader=Kh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.uniformsGroups=Yh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ic extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new P,hl=new re,dl=new re;class an extends Ic{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,hl,dl),t.subVectors(dl,hl)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wi=-90,Xi=1;class Zh extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(Wi,Xi,e,t);r.layers=this.layers,this.add(r);const s=new an(Wi,Xi,e,t);s.layers=this.layers,this.add(s);const o=new an(Wi,Xi,e,t);o.layers=this.layers,this.add(o);const a=new an(Wi,Xi,e,t);a.layers=this.layers,this.add(a);const l=new an(Wi,Xi,e,t);l.layers=this.layers,this.add(l);const c=new an(Wi,Xi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===wn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Uc extends kt{constructor(e=[],t=ar,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jh extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Uc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Tn(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:ei});s.uniforms.tEquirect.value=t;const o=new Oe(r,s),a=t.minFilter;return t.minFilter===bi&&(t.minFilter=En),new Zh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Et extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qh={type:"move"};class No{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qh)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Et;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ed extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yt,this.environmentIntensity=1,this.environmentRotation=new Yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class td{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Va,this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new P;class Js{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),r=ct(r,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new _n(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Js(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Nc extends un{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let qi;const Sr=new P,Yi=new P,ji=new P,$i=new re,Mr=new re,Oc=new mt,Es=new P,br=new P,ws=new P,fl=new re,Oo=new re,ml=new re;class nd extends Tt{constructor(e=new Nc){if(super(),this.isSprite=!0,this.type="Sprite",qi===void 0){qi=new At;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new td(t,5);qi.setIndex([0,1,2,0,2,3]),qi.setAttribute("position",new Js(i,3,0,!1)),qi.setAttribute("uv",new Js(i,2,3,!1))}this.geometry=qi,this.material=e,this.center=new re(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yi.setFromMatrixScale(this.matrixWorld),Oc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ji.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yi.multiplyScalar(-ji.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Ts(Es.set(-.5,-.5,0),ji,o,Yi,r,s),Ts(br.set(.5,-.5,0),ji,o,Yi,r,s),Ts(ws.set(.5,.5,0),ji,o,Yi,r,s),fl.set(0,0),Oo.set(1,0),ml.set(1,1);let a=e.ray.intersectTriangle(Es,br,ws,!1,Sr);if(a===null&&(Ts(br.set(-.5,.5,0),ji,o,Yi,r,s),Oo.set(0,1),a=e.ray.intersectTriangle(Es,ws,br,!1,Sr),a===null))return;const l=e.ray.origin.distanceTo(Sr);l<e.near||l>e.far||t.push({distance:l,point:Sr.clone(),uv:ln.getInterpolation(Sr,Es,br,ws,fl,Oo,ml,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ts(n,e,t,i,r,s){$i.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Mr.x=s*$i.x-r*$i.y,Mr.y=r*$i.x+s*$i.y):Mr.copy($i),n.copy(e),n.x+=Mr.x,n.y+=Mr.y,n.applyMatrix4(Oc)}const Fo=new P,id=new P,rd=new qe;class Jn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Fo.subVectors(i,t).cross(id.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||rd.getNormalMatrix(e),r=this.coplanarPoint(Fo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new ts,sd=new re(.5,.5),As=new P;class _0{constructor(e=new Jn,t=new Jn,i=new Jn,r=new Jn,s=new Jn,o=new Jn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],m=s[7],g=s[8],_=s[9],p=s[10],d=s[11],M=s[12],y=s[13],v=s[14],C=s[15];if(r[0].setComponents(c-o,m-u,d-g,C-M).normalize(),r[1].setComponents(c+o,m+u,d+g,C+M).normalize(),r[2].setComponents(c+a,m+h,d+_,C+y).normalize(),r[3].setComponents(c-a,m-h,d-_,C-y).normalize(),i)r[4].setComponents(l,f,p,v).normalize(),r[5].setComponents(c-l,m-f,d-p,C-v).normalize();else if(r[4].setComponents(c-l,m-f,d-p,C-v).normalize(),t===wn)r[5].setComponents(c+l,m+f,d+p,C+v).normalize();else if(t===Zs)r[5].setComponents(l,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){ui.center.set(0,0,0);const t=sd.distanceTo(e.center);return ui.radius=.7071067811865476+t,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(As.x=r.normal.x>0?e.max.x:e.min.x,As.y=r.normal.y>0?e.max.y:e.min.y,As.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(As)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dr extends un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qs=new P,eo=new P,pl=new mt,Er=new ns,Cs=new ts,Bo=new P,gl=new P;class od extends Tt{constructor(e=new At,t=new Dr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Qs.fromBufferAttribute(t,r-1),eo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Qs.distanceTo(eo);e.setAttribute("lineDistance",new Je(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere),Cs.applyMatrix4(r),Cs.radius+=s,e.ray.intersectsSphere(Cs)===!1)return;pl.copy(r).invert(),Er.copy(e.ray).applyMatrix4(pl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=c){const d=u.getX(_),M=u.getX(_+1),y=Rs(this,e,Er,l,d,M,_);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(m),d=Rs(this,e,Er,l,_,p,g-1);d&&t.push(d)}}else{const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=c){const d=Rs(this,e,Er,l,_,_+1,_);d&&t.push(d)}if(this.isLineLoop){const _=Rs(this,e,Er,l,g-1,m,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Rs(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Qs.fromBufferAttribute(a,r),eo.fromBufferAttribute(a,s),t.distanceSqToSegment(Qs,eo,Bo,gl)>i)return;Bo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Bo);if(!(c<e.near||c>e.far))return{distance:c,point:gl.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const _l=new P,vl=new P;class Ga extends od{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)_l.fromBufferAttribute(t,r),vl.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+_l.distanceTo(vl);e.setAttribute("lineDistance",new Je(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wr extends un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xl=new mt,Wa=new ns,Ps=new ts,Ls=new P;class zo extends Tt{constructor(e=new At,t=new wr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere),Ps.applyMatrix4(r),Ps.radius+=s,e.ray.intersectsSphere(Ps)===!1)return;xl.copy(r).invert(),Wa.copy(e.ray).applyMatrix4(xl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,_=m;g<_;g++){const p=c.getX(g);Ls.fromBufferAttribute(h,p),yl(Ls,p,l,r,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=f,_=m;g<_;g++)Ls.fromBufferAttribute(h,g),yl(Ls,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function yl(n,e,t,i,r,s,o){const a=Wa.distanceSqToPoint(n);if(a<t){const l=new P;Wa.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class v0 extends kt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fc extends kt{constructor(e,t,i=Ti,r,s,o,a=gn,l=gn,c,u=Gr,h=1){if(u!==Gr&&u!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new m0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bc extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jr extends At{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new P,u=new re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const m=i+h/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(a,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class vn extends At{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],m=[];let g=0;const _=[],p=i/2;let d=0;M(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Je(h,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(m,2));function M(){const v=new P,C=new P;let S=0;const T=(t-e)/i;for(let L=0;L<=s;L++){const w=[],E=L/s,D=E*(t-e)+e;for(let F=0;F<=r;F++){const z=F/r,V=z*l+a,G=Math.sin(V),X=Math.cos(V);C.x=D*G,C.y=-E*i+p,C.z=D*X,h.push(C.x,C.y,C.z),v.set(G,T,X).normalize(),f.push(v.x,v.y,v.z),m.push(z,1-E),w.push(g++)}_.push(w)}for(let L=0;L<r;L++)for(let w=0;w<s;w++){const E=_[w][L],D=_[w+1][L],F=_[w+1][L+1],z=_[w][L+1];(e>0||w!==0)&&(u.push(E,D,z),S+=3),(t>0||w!==s-1)&&(u.push(D,F,z),S+=3)}c.addGroup(d,S,0),d+=S}function y(v){const C=g,S=new re,T=new P;let L=0;const w=v===!0?e:t,E=v===!0?1:-1;for(let F=1;F<=r;F++)h.push(0,p*E,0),f.push(0,E,0),m.push(.5,.5),g++;const D=g;for(let F=0;F<=r;F++){const V=F/r*l+a,G=Math.cos(V),X=Math.sin(V);T.x=w*X,T.y=p*E,T.z=w*G,h.push(T.x,T.y,T.z),f.push(0,E,0),S.x=G*.5+.5,S.y=X*.5*E+.5,m.push(S.x,S.y),g++}for(let F=0;F<r;F++){const z=C+F,V=D+F;v===!0?u.push(V,V+1,z):u.push(V+1,V,z),L+=3}c.addGroup(d,L,v===!0?1:2),d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ln{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,m=(o-u)/f;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new re:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new P,r=[],s=[],o=[],a=new P,l=new mt;for(let m=0;m<=e;m++){const g=m/e;r[m]=this.getTangentAt(g,new P)}s[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(je(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(je(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class x0 extends Ln{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new re){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*u-m*h+this.aX,c=f*h+m*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ad extends x0{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function y0(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,m*=u,r(o,a,f,m)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Ds=new P,ko=new y0,Ho=new y0,Vo=new y0;class zc extends Ln{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new P){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Ds.subVectors(r[0],r[1]).add(r[0]),c=Ds);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ds.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ds),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),m),_=Math.pow(h.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(u),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),ko.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,p),Ho.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,p),Vo.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(ko.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ho.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Vo.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(ko.calc(l),Ho.calc(l),Vo.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Sl(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function ld(n,e){const t=1-n;return t*t*e}function cd(n,e){return 2*(1-n)*n*e}function ud(n,e){return n*n*e}function Ir(n,e,t,i){return ld(n,e)+cd(n,t)+ud(n,i)}function hd(n,e){const t=1-n;return t*t*t*e}function dd(n,e){const t=1-n;return 3*t*t*n*e}function fd(n,e){return 3*(1-n)*n*n*e}function md(n,e){return n*n*n*e}function Ur(n,e,t,i,r){return hd(n,e)+dd(n,t)+fd(n,i)+md(n,r)}class kc extends Ln{constructor(e=new re,t=new re,i=new re,r=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new re){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ur(e,r.x,s.x,o.x,a.x),Ur(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pd extends Ln{constructor(e=new P,t=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new P){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ur(e,r.x,s.x,o.x,a.x),Ur(e,r.y,s.y,o.y,a.y),Ur(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hc extends Ln{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gd extends Ln{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vc extends Ln{constructor(e=new re,t=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new re){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ir(e,r.x,s.x,o.x),Ir(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gc extends Ln{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ir(e,r.x,s.x,o.x),Ir(e,r.y,s.y,o.y),Ir(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wc extends Ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Sl(a,l.x,c.x,u.x,h.x),Sl(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new re().fromArray(r))}return this}}var to=Object.freeze({__proto__:null,ArcCurve:ad,CatmullRomCurve3:zc,CubicBezierCurve:kc,CubicBezierCurve3:pd,EllipseCurve:x0,LineCurve:Hc,LineCurve3:gd,QuadraticBezierCurve:Vc,QuadraticBezierCurve3:Gc,SplineCurve:Wc});class _d extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new to[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new to[r.type]().fromJSON(r))}return this}}class $r extends _d{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Hc(this.currentPoint.clone(),new re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Vc(this.currentPoint.clone(),new re(e,t),new re(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new kc(this.currentPoint.clone(),new re(e,t),new re(i,r),new re(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Wc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new x0(e,t,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ii extends $r{constructor(e){super(e),this.uuid=An(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new $r().fromJSON(r))}return this}}function vd(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Xc(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=bd(n,e,s,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let f=t;f<r;f+=t){const m=n[f],g=n[f+1];m<a&&(a=m),g<l&&(l=g),m>u&&(u=m),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Kr(s,o,t,a,l,c,0),o}function Xc(n,e,t,i,r){let s;if(r===Ud(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Ml(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Ml(o/i|0,n[o],n[o+1],s);return s&&hr(s,s.next)&&(Jr(s),s=s.next),s}function Ri(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(hr(t,t.next)||St(t.prev,t,t.next)===0)){if(Jr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Kr(n,e,t,i,r,s,o){if(!n)return;!o&&s&&Cd(n,i,r,s);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?yd(n,i,r,s):xd(n)){e.push(l.i,n.i,c.i),Jr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Sd(Ri(n),e),Kr(n,e,t,i,r,s,2)):o===2&&Md(n,e,t,i,r,s):Kr(Ri(n),e,t,i,r,s,1);break}}}function xd(n){const e=n.prev,t=n,i=n.next;if(St(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(r,s,o),h=Math.min(a,l,c),f=Math.max(r,s,o),m=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=m&&Tr(r,a,s,l,o,c,g.x,g.y)&&St(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function yd(n,e,t,i){const r=n.prev,s=n,o=n.next;if(St(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,m=Math.min(a,l,c),g=Math.min(u,h,f),_=Math.max(a,l,c),p=Math.max(u,h,f),d=Xa(m,g,e,t,i),M=Xa(_,p,e,t,i);let y=n.prevZ,v=n.nextZ;for(;y&&y.z>=d&&v&&v.z<=M;){if(y.x>=m&&y.x<=_&&y.y>=g&&y.y<=p&&y!==r&&y!==o&&Tr(a,u,l,h,c,f,y.x,y.y)&&St(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==r&&v!==o&&Tr(a,u,l,h,c,f,v.x,v.y)&&St(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=d;){if(y.x>=m&&y.x<=_&&y.y>=g&&y.y<=p&&y!==r&&y!==o&&Tr(a,u,l,h,c,f,y.x,y.y)&&St(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=M;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==r&&v!==o&&Tr(a,u,l,h,c,f,v.x,v.y)&&St(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Sd(n,e){let t=n;do{const i=t.prev,r=t.next.next;!hr(i,r)&&Yc(i,t,t.next,r)&&Zr(i,r)&&Zr(r,i)&&(e.push(i.i,t.i,r.i),Jr(t),Jr(t.next),t=n=r),t=t.next}while(t!==n);return Ri(t)}function Md(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ld(o,a)){let l=jc(o,a);o=Ri(o,o.next),l=Ri(l,l.next),Kr(o,e,t,i,r,s,0),Kr(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function bd(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=Xc(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(Pd(c))}r.sort(Ed);for(let s=0;s<r.length;s++)t=wd(r[s],t);return t}function Ed(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function wd(n,e){const t=Td(n,e);if(!t)return e;const i=jc(t,n);return Ri(i,i.next),Ri(t,t.next)}function Td(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(hr(n,t))return t;do{if(hr(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&qc(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){const h=Math.abs(r-t.y)/(i-t.x);Zr(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Ad(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Ad(n,e){return St(n.prev,n,e.prev)<0&&St(e.next,n,n.next)<0}function Cd(n,e,t,i){let r=n;do r.z===0&&(r.z=Xa(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Rd(r)}function Rd(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Xa(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Pd(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function qc(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Tr(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&qc(n,e,t,i,r,s,o,a)}function Ld(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Dd(n,e)&&(Zr(n,e)&&Zr(e,n)&&Id(n,e)&&(St(n.prev,n,e.prev)||St(n,e.prev,e))||hr(n,e)&&St(n.prev,n,n.next)>0&&St(e.prev,e,e.next)>0)}function St(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function hr(n,e){return n.x===e.x&&n.y===e.y}function Yc(n,e,t,i){const r=Us(St(n,e,t)),s=Us(St(n,e,i)),o=Us(St(t,i,n)),a=Us(St(t,i,e));return!!(r!==s&&o!==a||r===0&&Is(n,t,e)||s===0&&Is(n,i,e)||o===0&&Is(t,n,i)||a===0&&Is(t,e,i))}function Is(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Us(n){return n>0?1:n<0?-1:0}function Dd(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Yc(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Zr(n,e){return St(n.prev,n,n.next)<0?St(n,e,n.next)>=0&&St(n,n.prev,e)>=0:St(n,e,n.prev)<0||St(n,n.next,e)<0}function Id(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function jc(n,e){const t=qa(n.i,n.x,n.y),i=qa(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Ml(n,e,t,i){const r=qa(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Jr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function qa(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ud(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Nd{static triangulate(e,t,i=2){return vd(e,t,i)}}class er{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return er.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];bl(e),El(i,e);let o=e.length;t.forEach(bl);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,El(i,t[l]);const a=Nd.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function bl(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function El(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class en extends At{constructor(e=new ii([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Je(r,3)),this.setAttribute("uv",new Je(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Od;let y,v=!1,C,S,T,L;d&&(y=d.getSpacedPoints(u),v=!0,f=!1,C=d.computeFrenetFrames(u,!1),S=new P,T=new P,L=new P),f||(p=0,m=0,g=0,_=0);const w=a.extractPoints(c);let E=w.shape;const D=w.holes;if(!er.isClockWise(E)){E=E.reverse();for(let Q=0,Z=D.length;Q<Z;Q++){const $=D[Q];er.isClockWise($)&&(D[Q]=$.reverse())}}function z(Q){const $=10000000000000001e-36;let j=Q[0];for(let ce=1;ce<=Q.length;ce++){const ne=ce%Q.length,se=Q[ne],Ie=se.x-j.x,Ue=se.y-j.y,A=Ie*Ie+Ue*Ue,x=Math.max(Math.abs(se.x),Math.abs(se.y),Math.abs(j.x),Math.abs(j.y)),B=$*x*x;if(A<=B){Q.splice(ne,1),ce--;continue}j=se}}z(E),D.forEach(z);const V=D.length,G=E;for(let Q=0;Q<V;Q++){const Z=D[Q];E=E.concat(Z)}function X(Q,Z,$){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(Z,$)}const K=E.length;function W(Q,Z,$){let j,ce,ne;const se=Q.x-Z.x,Ie=Q.y-Z.y,Ue=$.x-Q.x,A=$.y-Q.y,x=se*se+Ie*Ie,B=se*A-Ie*Ue;if(Math.abs(B)>Number.EPSILON){const q=Math.sqrt(x),ie=Math.sqrt(Ue*Ue+A*A),Y=Z.x-Ie/q,Pe=Z.y+se/q,fe=$.x-A/ie,Ae=$.y+Ue/ie,Ce=((fe-Y)*A-(Ae-Pe)*Ue)/(se*A-Ie*Ue);j=Y+se*Ce-Q.x,ce=Pe+Ie*Ce-Q.y;const oe=j*j+ce*ce;if(oe<=2)return new re(j,ce);ne=Math.sqrt(oe/2)}else{let q=!1;se>Number.EPSILON?Ue>Number.EPSILON&&(q=!0):se<-Number.EPSILON?Ue<-Number.EPSILON&&(q=!0):Math.sign(Ie)===Math.sign(A)&&(q=!0),q?(j=-Ie,ce=se,ne=Math.sqrt(x)):(j=se,ce=Ie,ne=Math.sqrt(x/2))}return new re(j/ne,ce/ne)}const he=[];for(let Q=0,Z=G.length,$=Z-1,j=Q+1;Q<Z;Q++,$++,j++)$===Z&&($=0),j===Z&&(j=0),he[Q]=W(G[Q],G[$],G[j]);const _e=[];let be,Ge=he.concat();for(let Q=0,Z=V;Q<Z;Q++){const $=D[Q];be=[];for(let j=0,ce=$.length,ne=ce-1,se=j+1;j<ce;j++,ne++,se++)ne===ce&&(ne=0),se===ce&&(se=0),be[j]=W($[j],$[ne],$[se]);_e.push(be),Ge=Ge.concat(be)}let Ze;if(p===0)Ze=er.triangulateShape(G,D);else{const Q=[],Z=[];for(let $=0;$<p;$++){const j=$/p,ce=m*Math.cos(j*Math.PI/2),ne=g*Math.sin(j*Math.PI/2)+_;for(let se=0,Ie=G.length;se<Ie;se++){const Ue=X(G[se],he[se],ne);de(Ue.x,Ue.y,-ce),j===0&&Q.push(Ue)}for(let se=0,Ie=V;se<Ie;se++){const Ue=D[se];be=_e[se];const A=[];for(let x=0,B=Ue.length;x<B;x++){const q=X(Ue[x],be[x],ne);de(q.x,q.y,-ce),j===0&&A.push(q)}j===0&&Z.push(A)}}Ze=er.triangulateShape(Q,Z)}const rt=Ze.length,tt=g+_;for(let Q=0;Q<K;Q++){const Z=f?X(E[Q],Ge[Q],tt):E[Q];v?(T.copy(C.normals[0]).multiplyScalar(Z.x),S.copy(C.binormals[0]).multiplyScalar(Z.y),L.copy(y[0]).add(T).add(S),de(L.x,L.y,L.z)):de(Z.x,Z.y,0)}for(let Q=1;Q<=u;Q++)for(let Z=0;Z<K;Z++){const $=f?X(E[Z],Ge[Z],tt):E[Z];v?(T.copy(C.normals[Q]).multiplyScalar($.x),S.copy(C.binormals[Q]).multiplyScalar($.y),L.copy(y[Q]).add(T).add(S),de(L.x,L.y,L.z)):de($.x,$.y,h/u*Q)}for(let Q=p-1;Q>=0;Q--){const Z=Q/p,$=m*Math.cos(Z*Math.PI/2),j=g*Math.sin(Z*Math.PI/2)+_;for(let ce=0,ne=G.length;ce<ne;ce++){const se=X(G[ce],he[ce],j);de(se.x,se.y,h+$)}for(let ce=0,ne=D.length;ce<ne;ce++){const se=D[ce];be=_e[ce];for(let Ie=0,Ue=se.length;Ie<Ue;Ie++){const A=X(se[Ie],be[Ie],j);v?de(A.x,A.y+y[u-1].y,y[u-1].x+$):de(A.x,A.y,h+$)}}}J(),te();function J(){const Q=r.length/3;if(f){let Z=0,$=K*Z;for(let j=0;j<rt;j++){const ce=Ze[j];pe(ce[2]+$,ce[1]+$,ce[0]+$)}Z=u+p*2,$=K*Z;for(let j=0;j<rt;j++){const ce=Ze[j];pe(ce[0]+$,ce[1]+$,ce[2]+$)}}else{for(let Z=0;Z<rt;Z++){const $=Ze[Z];pe($[2],$[1],$[0])}for(let Z=0;Z<rt;Z++){const $=Ze[Z];pe($[0]+K*u,$[1]+K*u,$[2]+K*u)}}i.addGroup(Q,r.length/3-Q,0)}function te(){const Q=r.length/3;let Z=0;Se(G,Z),Z+=G.length;for(let $=0,j=D.length;$<j;$++){const ce=D[$];Se(ce,Z),Z+=ce.length}i.addGroup(Q,r.length/3-Q,1)}function Se(Q,Z){let $=Q.length;for(;--$>=0;){const j=$;let ce=$-1;ce<0&&(ce=Q.length-1);for(let ne=0,se=u+p*2;ne<se;ne++){const Ie=K*ne,Ue=K*(ne+1),A=Z+j+Ie,x=Z+ce+Ie,B=Z+ce+Ue,q=Z+j+Ue;We(A,x,B,q)}}}function de(Q,Z,$){l.push(Q),l.push(Z),l.push($)}function pe(Q,Z,$){nt(Q),nt(Z),nt($);const j=r.length/3,ce=M.generateTopUV(i,r,j-3,j-2,j-1);R(ce[0]),R(ce[1]),R(ce[2])}function We(Q,Z,$,j){nt(Q),nt(Z),nt(j),nt(Z),nt($),nt(j);const ce=r.length/3,ne=M.generateSideWallUV(i,r,ce-6,ce-3,ce-2,ce-1);R(ne[0]),R(ne[1]),R(ne[3]),R(ne[1]),R(ne[2]),R(ne[3])}function nt(Q){r.push(l[Q*3+0]),r.push(l[Q*3+1]),r.push(l[Q*3+2])}function R(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Fd(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new to[r.type]().fromJSON(r)),new en(i,e.options)}}const Od={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new re(s,o),new re(a,l),new re(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],m=e[r*3+1],g=e[r*3+2],_=e[s*3],p=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-h),new re(f,1-g),new re(_,1-d)]:[new re(a,1-l),new re(u,1-h),new re(m,1-g),new re(p,1-d)]}};function Fd(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ri extends At{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,m=[],g=[],_=[],p=[];for(let d=0;d<u;d++){const M=d*f-o;for(let y=0;y<c;y++){const v=y*h-s;g.push(v,-M,0),_.push(0,0,1),p.push(y/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const y=M+c*d,v=M+c*(d+1),C=M+1+c*(d+1),S=M+1+c*d;m.push(y,v,S),m.push(v,C,S)}this.setIndex(m),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(_,3)),this.setAttribute("uv",new Je(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.width,e.height,e.widthSegments,e.heightSegments)}}class S0 extends At{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let h=e;const f=(t-e)/r,m=new P,g=new re;for(let _=0;_<=r;_++){for(let p=0;p<=i;p++){const d=s+p/i*o;m.x=h*Math.cos(d),m.y=h*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<r;_++){const p=_*(i+1);for(let d=0;d<i;d++){const M=d+p,y=M,v=M+i+1,C=M+i+2,S=M+1;a.push(y,v,S),a.push(v,C,S)}}this.setIndex(a),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new S0(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class M0 extends At{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new P,f=new P,m=[],g=[],_=[],p=[];for(let d=0;d<=i;d++){const M=[],y=d/i;let v=0;d===0&&o===0?v=.5/t:d===i&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){const S=C/t;h.x=-e*Math.cos(r+S*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(r+S*s)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(S+v,1-y),M.push(c++)}u.push(M)}for(let d=0;d<i;d++)for(let M=0;M<t;M++){const y=u[d][M+1],v=u[d][M],C=u[d+1][M],S=u[d+1][M+1];(d!==0||o>0)&&m.push(y,v,S),(d!==i-1||l<Math.PI)&&m.push(v,C,S)}this.setIndex(m),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(_,3)),this.setAttribute("uv",new Je(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new M0(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class b0 extends At{constructor(e=new Gc(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,l=new P,c=new re;let u=new P;const h=[],f=[],m=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Je(h,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(m,2));function _(){for(let y=0;y<t;y++)p(y);p(s===!1?t:0),M(),d()}function p(y){u=e.getPointAt(y/t,u);const v=o.normals[y],C=o.binormals[y];for(let S=0;S<=r;S++){const T=S/r*Math.PI*2,L=Math.sin(T),w=-Math.cos(T);l.x=w*v.x+L*C.x,l.y=w*v.y+L*C.y,l.z=w*v.z+L*C.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function d(){for(let y=1;y<=t;y++)for(let v=1;v<=r;v++){const C=(r+1)*(y-1)+(v-1),S=(r+1)*y+(v-1),T=(r+1)*y+v,L=(r+1)*(y-1)+v;g.push(C,S,L),g.push(S,T,L)}}function M(){for(let y=0;y<=t;y++)for(let v=0;v<=r;v++)c.x=y/t,c.y=v/r,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new b0(new to[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Bd extends un{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ve(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class dt extends un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=d0,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cn extends dt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class zd extends un{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ve(16777215),this.specular=new Ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=d0,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=s0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kd extends un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hd extends un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Nr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Vd{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Gd=new Vd;class is{constructor(e){this.manager=e!==void 0?e:Gd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}is.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bn={};class Wd extends Error{constructor(e,t){super(e),this.response=t}}class Xd extends is{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Nr.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Bn[e]!==void 0){Bn[e].push({onLoad:t,onProgress:i,onError:r});return}Bn[e]=[],Bn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Bn[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,g=m!==0;let _=0;const p=new ReadableStream({start(d){M();function M(){h.read().then(({done:y,value:v})=>{if(y)d.close();else{_+=v.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let S=0,T=u.length;S<T;S++){const L=u[S];L.onProgress&&L.onProgress(C)}d.enqueue(v),M()}},y=>{d.error(y)})}}});return new Response(p)}else throw new Wd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{Nr.add(`file:${e}`,c);const u=Bn[e];delete Bn[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Bn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Bn[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ki=new WeakMap;class qd extends is{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Nr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=Ki.get(o);h===void 0&&(h=[],Ki.set(o,h)),h.push({onLoad:t,onError:r})}return o}const a=qr("img");function l(){u(),t&&t(this);const h=Ki.get(this)||[];for(let f=0;f<h.length;f++){const m=h[f];m.onLoad&&m.onLoad(this)}Ki.delete(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),Nr.remove(`image:${e}`);const f=Ki.get(this)||[];for(let m=0;m<f.length;m++){const g=f[m];g.onError&&g.onError(h)}Ki.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Nr.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class Yd extends is{constructor(e){super(e)}load(e,t,i,r){const s=new kt,o=new qd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class $c extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class jd extends $c{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Go=new mt,wl=new P,Tl=new P;class $d{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _0,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(wl),Tl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tl),t.updateMatrixWorld(),Go.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Go)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Kc extends Ic{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Kd extends $d{constructor(){super(new Kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zd extends $c{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Kd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jd extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Al=new mt;class Qd{constructor(e,t,i=0,r=1/0){this.ray=new ns(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new p0,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Al.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Al),this}intersectObject(e,t=!0,i=[]){return Ya(e,this,i,t),i.sort(Cl),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ya(e[r],this,i,t);return i.sort(Cl),i}}function Cl(n,e){return n.distance-e.distance}function Ya(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Ya(s[o],e,t,!0)}}class Rl{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ef extends Ga{constructor(e=10,t=10,i=4473924,r=8947848){i=new Ve(i),r=new Ve(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,m=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=f===s?i:r;_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3}const u=new At;u.setAttribute("position",new Je(l,3)),u.setAttribute("color",new Je(c,3));const h=new Dr({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class tf extends Li{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Pl(n,e,t,i){const r=nf(i);switch(t){case Sc:return n*e;case bc:return n*e/r.components*r.byteLength;case c0:return n*e/r.components*r.byteLength;case Ec:return n*e*2/r.components*r.byteLength;case u0:return n*e*2/r.components*r.byteLength;case Mc:return n*e*3/r.components*r.byteLength;case pn:return n*e*4/r.components*r.byteLength;case h0:return n*e*4/r.components*r.byteLength;case ks:case Hs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vs:case Gs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pa:case _a:return Math.max(n,16)*Math.max(e,8)/4;case ma:case ga:return Math.max(n,8)*Math.max(e,8)/2;case va:case xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ba:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case wa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ra:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case La:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Da:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ia:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Na:case Oa:case Fa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ba:case za:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ka:case Ha:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nf(n){switch(n){case Rn:case _c:return{byteLength:1,components:1};case Hr:case vc:case es:return{byteLength:2,components:1};case a0:case l0:return{byteLength:2,components:4};case Ti:case o0:case Hn:return{byteLength:4,components:1};case xc:case yc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:r0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=r0);function Zc(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function rf(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<h.length;m++){const g=h[f],_=h[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let m=0,g=h.length;m<g;m++){const _=h[m];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,of=`#ifdef USE_ALPHAHASH
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
#endif`,af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hf=`#ifdef USE_AOMAP
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
#endif`,df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ff=`#ifdef USE_BATCHING
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
#endif`,mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_f=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vf=`#ifdef USE_IRIDESCENCE
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
#endif`,xf=`#ifdef USE_BUMPMAP
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
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cf=`#define PI 3.141592653589793
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
} // validated`,Rf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pf=`vec3 transformedNormal = objectNormal;
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
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,If=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Of=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zf=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qf=`#ifdef USE_GRADIENTMAP
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
}`,Yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kf=`uniform bool receiveShadow;
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
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n1=`PhysicalMaterial material;
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
#endif`,i1=`struct PhysicalMaterial {
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
}`,r1=`
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
#endif`,s1=`#if defined( RE_IndirectDiffuse )
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
#endif`,o1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m1=`#if defined( USE_POINTS_UV )
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
#endif`,p1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y1=`#ifdef USE_MORPHTARGETS
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
#endif`,S1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,b1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,E1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,A1=`#ifdef USE_NORMALMAP
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
#endif`,C1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,G1=`float getShadowMask() {
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
}`,W1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X1=`#ifdef USE_SKINNING
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
#endif`,q1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y1=`#ifdef USE_SKINNING
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
#endif`,j1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,J1=`#ifdef USE_TRANSMISSION
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
#endif`,Q1=`#ifdef USE_TRANSMISSION
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sm=`uniform sampler2D t2D;
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`#include <common>
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
}`,hm=`#if DEPTH_PACKING == 3200
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
}`,dm=`#define DISTANCE
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
}`,fm=`#define DISTANCE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`uniform float scale;
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
}`,_m=`uniform vec3 diffuse;
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
}`,vm=`#include <common>
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
}`,xm=`uniform vec3 diffuse;
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
}`,ym=`#define LAMBERT
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
}`,Sm=`#define LAMBERT
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
}`,Mm=`#define MATCAP
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
}`,bm=`#define MATCAP
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
}`,Em=`#define NORMAL
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
}`,wm=`#define NORMAL
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
}`,Tm=`#define PHONG
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
}`,Am=`#define PHONG
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
}`,Cm=`#define STANDARD
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
}`,Rm=`#define STANDARD
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
}`,Pm=`#define TOON
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
}`,Lm=`#define TOON
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
}`,Dm=`uniform float size;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Um=`#include <common>
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
}`,Nm=`uniform vec3 color;
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
}`,Om=`uniform float rotation;
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
}`,Fm=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:sf,alphahash_pars_fragment:of,alphamap_fragment:af,alphamap_pars_fragment:lf,alphatest_fragment:cf,alphatest_pars_fragment:uf,aomap_fragment:hf,aomap_pars_fragment:df,batching_pars_vertex:ff,batching_vertex:mf,begin_vertex:pf,beginnormal_vertex:gf,bsdfs:_f,iridescence_fragment:vf,bumpmap_pars_fragment:xf,clipping_planes_fragment:yf,clipping_planes_pars_fragment:Sf,clipping_planes_pars_vertex:Mf,clipping_planes_vertex:bf,color_fragment:Ef,color_pars_fragment:wf,color_pars_vertex:Tf,color_vertex:Af,common:Cf,cube_uv_reflection_fragment:Rf,defaultnormal_vertex:Pf,displacementmap_pars_vertex:Lf,displacementmap_vertex:Df,emissivemap_fragment:If,emissivemap_pars_fragment:Uf,colorspace_fragment:Nf,colorspace_pars_fragment:Of,envmap_fragment:Ff,envmap_common_pars_fragment:Bf,envmap_pars_fragment:zf,envmap_pars_vertex:kf,envmap_physical_pars_fragment:Zf,envmap_vertex:Hf,fog_vertex:Vf,fog_pars_vertex:Gf,fog_fragment:Wf,fog_pars_fragment:Xf,gradientmap_pars_fragment:qf,lightmap_pars_fragment:Yf,lights_lambert_fragment:jf,lights_lambert_pars_fragment:$f,lights_pars_begin:Kf,lights_toon_fragment:Jf,lights_toon_pars_fragment:Qf,lights_phong_fragment:e1,lights_phong_pars_fragment:t1,lights_physical_fragment:n1,lights_physical_pars_fragment:i1,lights_fragment_begin:r1,lights_fragment_maps:s1,lights_fragment_end:o1,logdepthbuf_fragment:a1,logdepthbuf_pars_fragment:l1,logdepthbuf_pars_vertex:c1,logdepthbuf_vertex:u1,map_fragment:h1,map_pars_fragment:d1,map_particle_fragment:f1,map_particle_pars_fragment:m1,metalnessmap_fragment:p1,metalnessmap_pars_fragment:g1,morphinstance_vertex:_1,morphcolor_vertex:v1,morphnormal_vertex:x1,morphtarget_pars_vertex:y1,morphtarget_vertex:S1,normal_fragment_begin:M1,normal_fragment_maps:b1,normal_pars_fragment:E1,normal_pars_vertex:w1,normal_vertex:T1,normalmap_pars_fragment:A1,clearcoat_normal_fragment_begin:C1,clearcoat_normal_fragment_maps:R1,clearcoat_pars_fragment:P1,iridescence_pars_fragment:L1,opaque_fragment:D1,packing:I1,premultiplied_alpha_fragment:U1,project_vertex:N1,dithering_fragment:O1,dithering_pars_fragment:F1,roughnessmap_fragment:B1,roughnessmap_pars_fragment:z1,shadowmap_pars_fragment:k1,shadowmap_pars_vertex:H1,shadowmap_vertex:V1,shadowmask_pars_fragment:G1,skinbase_vertex:W1,skinning_pars_vertex:X1,skinning_vertex:q1,skinnormal_vertex:Y1,specularmap_fragment:j1,specularmap_pars_fragment:$1,tonemapping_fragment:K1,tonemapping_pars_fragment:Z1,transmission_fragment:J1,transmission_pars_fragment:Q1,uv_pars_fragment:em,uv_pars_vertex:tm,uv_vertex:nm,worldpos_vertex:im,background_vert:rm,background_frag:sm,backgroundCube_vert:om,backgroundCube_frag:am,cube_vert:lm,cube_frag:cm,depth_vert:um,depth_frag:hm,distanceRGBA_vert:dm,distanceRGBA_frag:fm,equirect_vert:mm,equirect_frag:pm,linedashed_vert:gm,linedashed_frag:_m,meshbasic_vert:vm,meshbasic_frag:xm,meshlambert_vert:ym,meshlambert_frag:Sm,meshmatcap_vert:Mm,meshmatcap_frag:bm,meshnormal_vert:Em,meshnormal_frag:wm,meshphong_vert:Tm,meshphong_frag:Am,meshphysical_vert:Cm,meshphysical_frag:Rm,meshtoon_vert:Pm,meshtoon_frag:Lm,points_vert:Dm,points_frag:Im,shadow_vert:Um,shadow_frag:Nm,sprite_vert:Om,sprite_frag:Fm},ge={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Sn={basic:{uniforms:Gt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Gt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Gt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Gt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Gt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Gt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Gt([ge.points,ge.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Gt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Gt([ge.common,ge.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Gt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Gt([ge.sprite,ge.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Gt([ge.common,ge.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Gt([ge.lights,ge.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Sn.physical={uniforms:Gt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Ns={r:0,b:0,g:0},hi=new Yt,Bm=new mt;function zm(n,e,t,i,r,s,o){const a=new Ve(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const C=g(y);C===null?d(a,l):C&&C.isColor&&(d(C,1),v=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(y,v){const C=g(v);C&&(C.isCubeTexture||C.mapping===lo)?(u===void 0&&(u=new Oe(new Tn(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:ur(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),hi.copy(v.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(hi)),u.material.toneMapped=ot.getTransfer(C.colorSpace)!==ht,(h!==C||f!==C.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=C,f=C.version,m=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Oe(new ri(2,2),new ni({name:"BackgroundMaterial",uniforms:ur(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ot.getTransfer(C.colorSpace)!==ht,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||f!==C.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=C,f=C.version,m=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,v){y.getRGB(Ns,Dc(n)),i.buffers.color.setClear(Ns.r,Ns.g,Ns.b,v,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:_,addToRenderList:p,dispose:M}}function km(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(E,D,F,z,V){let G=!1;const X=h(z,F,D);s!==X&&(s=X,c(s.object)),G=m(E,z,F,V),G&&g(E,z,F,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(E,D,F,z),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function h(E,D,F){const z=F.wireframe===!0;let V=i[E.id];V===void 0&&(V={},i[E.id]=V);let G=V[D.id];G===void 0&&(G={},V[D.id]=G);let X=G[z];return X===void 0&&(X=f(l()),G[z]=X),X}function f(E){const D=[],F=[],z=[];for(let V=0;V<t;V++)D[V]=0,F[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:z,object:E,attributes:{},index:null}}function m(E,D,F,z){const V=s.attributes,G=D.attributes;let X=0;const K=F.getAttributes();for(const W in K)if(K[W].location>=0){const _e=V[W];let be=G[W];if(be===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(be=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(be=E.instanceColor)),_e===void 0||_e.attribute!==be||be&&_e.data!==be.data)return!0;X++}return s.attributesNum!==X||s.index!==z}function g(E,D,F,z){const V={},G=D.attributes;let X=0;const K=F.getAttributes();for(const W in K)if(K[W].location>=0){let _e=G[W];_e===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(_e=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(_e=E.instanceColor));const be={};be.attribute=_e,_e&&_e.data&&(be.data=_e.data),V[W]=be,X++}s.attributes=V,s.attributesNum=X,s.index=z}function _(){const E=s.newAttributes;for(let D=0,F=E.length;D<F;D++)E[D]=0}function p(E){d(E,0)}function d(E,D){const F=s.newAttributes,z=s.enabledAttributes,V=s.attributeDivisors;F[E]=1,z[E]===0&&(n.enableVertexAttribArray(E),z[E]=1),V[E]!==D&&(n.vertexAttribDivisor(E,D),V[E]=D)}function M(){const E=s.newAttributes,D=s.enabledAttributes;for(let F=0,z=D.length;F<z;F++)D[F]!==E[F]&&(n.disableVertexAttribArray(F),D[F]=0)}function y(E,D,F,z,V,G,X){X===!0?n.vertexAttribIPointer(E,D,F,V,G):n.vertexAttribPointer(E,D,F,z,V,G)}function v(E,D,F,z){_();const V=z.attributes,G=F.getAttributes(),X=D.defaultAttributeValues;for(const K in G){const W=G[K];if(W.location>=0){let he=V[K];if(he===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(he=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(he=E.instanceColor)),he!==void 0){const _e=he.normalized,be=he.itemSize,Ge=e.get(he);if(Ge===void 0)continue;const Ze=Ge.buffer,rt=Ge.type,tt=Ge.bytesPerElement,J=rt===n.INT||rt===n.UNSIGNED_INT||he.gpuType===o0;if(he.isInterleavedBufferAttribute){const te=he.data,Se=te.stride,de=he.offset;if(te.isInstancedInterleavedBuffer){for(let pe=0;pe<W.locationSize;pe++)d(W.location+pe,te.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let pe=0;pe<W.locationSize;pe++)p(W.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let pe=0;pe<W.locationSize;pe++)y(W.location+pe,be/W.locationSize,rt,_e,Se*tt,(de+be/W.locationSize*pe)*tt,J)}else{if(he.isInstancedBufferAttribute){for(let te=0;te<W.locationSize;te++)d(W.location+te,he.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let te=0;te<W.locationSize;te++)p(W.location+te);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let te=0;te<W.locationSize;te++)y(W.location+te,be/W.locationSize,rt,_e,be*tt,be/W.locationSize*te*tt,J)}}else if(X!==void 0){const _e=X[K];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(W.location,_e);break;case 3:n.vertexAttrib3fv(W.location,_e);break;case 4:n.vertexAttrib4fv(W.location,_e);break;default:n.vertexAttrib1fv(W.location,_e)}}}}M()}function C(){L();for(const E in i){const D=i[E];for(const F in D){const z=D[F];for(const V in z)u(z[V].object),delete z[V];delete D[F]}delete i[E]}}function S(E){if(i[E.id]===void 0)return;const D=i[E.id];for(const F in D){const z=D[F];for(const V in z)u(z[V].object),delete z[V];delete D[F]}delete i[E.id]}function T(E){for(const D in i){const F=i[D];if(F[E.id]===void 0)continue;const z=F[E.id];for(const V in z)u(z[V].object),delete z[V];delete F[E.id]}}function L(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function Hm(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];t.update(m,i,1)}function l(c,u,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Vm(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==pn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const L=T===es&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Rn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Hn&&!L)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:C,maxSamples:S}}function Gm(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Jn,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const M=s?0:i,y=M*4;let v=d.clippingState||null;l.value=v,v=u(g,f,y,m);for(let C=0;C!==y;++C)v[C]=t[C];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,v=m;y!==_;++y,v+=4)o.copy(h[y]).applyMatrix4(M,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Wm(n){let e=new WeakMap;function t(o,a){return a===ua?o.mapping=ar:a===ha&&(o.mapping=lr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ua||a===ha)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Jh(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const tr=4,Ll=[.125,.215,.35,.446,.526,.582],Si=20,Wo=new Kc,Dl=new Ve;let Xo=null,qo=0,Yo=0,jo=!1;const pi=(1+Math.sqrt(5))/2,Zi=1/pi,Il=[new P(-pi,Zi,0),new P(pi,Zi,0),new P(-Zi,0,pi),new P(Zi,0,pi),new P(0,pi,-Zi),new P(0,pi,Zi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Xm=new P;class Ul{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Xm}=s;Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xo,qo,Yo),this._renderer.xr.enabled=jo,e.scissorTest=!1,Os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:es,format:pn,colorSpace:cr,depthBuffer:!1},r=Nl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qm(s)),this._blurMaterial=Ym(s,e,t)}return r}_compileMaterial(e){const t=new Oe(this._lodPlanes[0],e);this._renderer.compile(t,Wo)}_sceneToCubeUV(e,t,i,r,s){const l=new an(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(Dl),h.toneMapping=ti,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const _=new g0({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),p=new Oe(new Tn,_);let d=!1;const M=e.background;M?M.isColor&&(_.color.copy(M),e.background=null,d=!0):(_.color.copy(Dl),d=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const C=this._cubeSize;Os(r,v*C,y>2?C:0,C,C),h.setRenderTarget(r),d&&h.render(p,l),h.render(e,l)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=m,h.autoClear=f,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ar||e.mapping===lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ol());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Oe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Os(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Wo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Il[(r-s-1)%Il.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Oe(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Si-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Si;p>Si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Si}`);const d=[];let M=0;for(let T=0;T<Si;++T){const L=T/_,w=Math.exp(-L*L/2);d.push(w),T===0?M+=w:T<p&&(M+=2*w)}for(let T=0;T<d.length;T++)d[T]=d[T]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const v=this._sizeLods[r],C=3*v*(r>y-tr?r-y+tr:0),S=4*(this._cubeSize-v);Os(t,C,S,3*v,2*v),l.setRenderTarget(t),l.render(h,Wo)}}function qm(n){const e=[],t=[],i=[];let r=n;const s=n-tr+1+Ll.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-tr?l=Ll[o-n+tr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,p=2,d=1,M=new Float32Array(_*g*m),y=new Float32Array(p*g*m),v=new Float32Array(d*g*m);for(let S=0;S<m;S++){const T=S%3*2/3-1,L=S>2?0:-1,w=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];M.set(w,_*g*S),y.set(f,p*g*S);const E=[S,S,S,S,S,S];v.set(E,d*g*S)}const C=new At;C.setAttribute("position",new _n(M,_)),C.setAttribute("uv",new _n(y,p)),C.setAttribute("faceIndex",new _n(v,d)),e.push(C),r>tr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Nl(n,e,t){const i=new Ci(n,e,t);return i.texture.mapping=lo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Os(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ym(n,e,t){const i=new Float32Array(Si),r=new P(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:E0(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Ol(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:E0(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Fl(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:E0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function E0(){return`

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
	`}function jm(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ua||l===ha,u=l===ar||l===lr;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ul(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Ul(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function $m(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Yr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Km(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],n.ARRAY_BUFFER)}function c(h){const f=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let y=0,v=M.length;y<v;y+=3){const C=M[y+0],S=M[y+1],T=M[y+2];f.push(C,S,S,T,T,C)}}else if(g!==void 0){const M=g.array;_=g.version;for(let y=0,v=M.length/3-1;y<v;y+=3){const C=y+0,S=y+1,T=y+2;f.push(C,S,S,T,T,C)}}else return;const p=new(Ac(f)?Lc:Pc)(f,1);p.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,p)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Zm(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,m){n.drawElements(i,m,s,f*o),t.update(m,i,1)}function c(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,f*o,g),t.update(m,i,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];t.update(p,i,1)}function h(f,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/o,m[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,_,0,g);let d=0;for(let M=0;M<g;M++)d+=m[M]*_[M];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Jm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Qm(n,e,t){const i=new WeakMap,r=new bt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let E=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var m=E;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let C=a.attributes.position.count*v,S=1;C>e.maxTextureSize&&(S=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*S*4*h),L=new Cc(T,C,S,h);L.type=Hn,L.needsUpdate=!0;const w=v*4;for(let D=0;D<h;D++){const F=d[D],z=M[D],V=y[D],G=C*S*4*D;for(let X=0;X<F.count;X++){const K=X*w;g===!0&&(r.fromBufferAttribute(F,X),T[G+K+0]=r.x,T[G+K+1]=r.y,T[G+K+2]=r.z,T[G+K+3]=0),_===!0&&(r.fromBufferAttribute(z,X),T[G+K+4]=r.x,T[G+K+5]=r.y,T[G+K+6]=r.z,T[G+K+7]=0),p===!0&&(r.fromBufferAttribute(V,X),T[G+K+8]=r.x,T[G+K+9]=r.y,T[G+K+10]=r.z,T[G+K+11]=V.itemSize===4?r.w:1)}}f={count:h,texture:L,size:new re(C,S)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function ep(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Jc=new kt,Bl=new Fc(1,1),Qc=new Cc,eu=new Nh,tu=new Uc,zl=[],kl=[],Hl=new Float32Array(16),Vl=new Float32Array(9),Gl=new Float32Array(4);function pr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=zl[r];if(s===void 0&&(s=new Float32Array(r),zl[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function co(n,e){let t=kl[e];t===void 0&&(t=new Int32Array(e),kl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function tp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function np(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function ip(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function rp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function sp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;Gl.set(i),n.uniformMatrix2fv(this.addr,!1,Gl),Dt(t,i)}}function op(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;Vl.set(i),n.uniformMatrix3fv(this.addr,!1,Vl),Dt(t,i)}}function ap(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;Hl.set(i),n.uniformMatrix4fv(this.addr,!1,Hl),Dt(t,i)}}function lp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function cp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function up(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function hp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function dp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function fp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function mp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function pp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function gp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Bl.compareFunction=wc,s=Bl):s=Jc,t.setTexture2D(e||s,r)}function _p(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||eu,r)}function vp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||tu,r)}function xp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Qc,r)}function yp(n){switch(n){case 5126:return tp;case 35664:return np;case 35665:return ip;case 35666:return rp;case 35674:return sp;case 35675:return op;case 35676:return ap;case 5124:case 35670:return lp;case 35667:case 35671:return cp;case 35668:case 35672:return up;case 35669:case 35673:return hp;case 5125:return dp;case 36294:return fp;case 36295:return mp;case 36296:return pp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35679:case 36299:case 36307:return _p;case 35680:case 36300:case 36308:case 36293:return vp;case 36289:case 36303:case 36311:case 36292:return xp}}function Sp(n,e){n.uniform1fv(this.addr,e)}function Mp(n,e){const t=pr(e,this.size,2);n.uniform2fv(this.addr,t)}function bp(n,e){const t=pr(e,this.size,3);n.uniform3fv(this.addr,t)}function Ep(n,e){const t=pr(e,this.size,4);n.uniform4fv(this.addr,t)}function wp(n,e){const t=pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Tp(n,e){const t=pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ap(n,e){const t=pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Cp(n,e){n.uniform1iv(this.addr,e)}function Rp(n,e){n.uniform2iv(this.addr,e)}function Pp(n,e){n.uniform3iv(this.addr,e)}function Lp(n,e){n.uniform4iv(this.addr,e)}function Dp(n,e){n.uniform1uiv(this.addr,e)}function Ip(n,e){n.uniform2uiv(this.addr,e)}function Up(n,e){n.uniform3uiv(this.addr,e)}function Np(n,e){n.uniform4uiv(this.addr,e)}function Op(n,e,t){const i=this.cache,r=e.length,s=co(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Jc,s[o])}function Fp(n,e,t){const i=this.cache,r=e.length,s=co(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||eu,s[o])}function Bp(n,e,t){const i=this.cache,r=e.length,s=co(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||tu,s[o])}function zp(n,e,t){const i=this.cache,r=e.length,s=co(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Qc,s[o])}function kp(n){switch(n){case 5126:return Sp;case 35664:return Mp;case 35665:return bp;case 35666:return Ep;case 35674:return wp;case 35675:return Tp;case 35676:return Ap;case 5124:case 35670:return Cp;case 35667:case 35671:return Rp;case 35668:case 35672:return Pp;case 35669:case 35673:return Lp;case 5125:return Dp;case 36294:return Ip;case 36295:return Up;case 36296:return Np;case 35678:case 36198:case 36298:case 36306:case 35682:return Op;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Bp;case 36289:case 36303:case 36311:case 36292:return zp}}class Hp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=yp(t.type)}}class Vp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kp(t.type)}}class Gp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const $o=/(\w+)(\])?(\[|\.)?/g;function Wl(n,e){n.seq.push(e),n.map[e.id]=e}function Wp(n,e,t){const i=n.name,r=i.length;for($o.lastIndex=0;;){const s=$o.exec(i),o=$o.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Wl(t,c===void 0?new Hp(a,n,e):new Vp(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Gp(a),Wl(t,h)),t=h}}}class Ws{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Wp(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Xl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Xp=37297;let qp=0;function Yp(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const ql=new qe;function jp(n){ot._getMatrix(ql,ot.workingColorSpace,n);const e=`mat3( ${ql.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case Ks:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Yl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Yp(n.getShaderSource(e),a)}else return s}function $p(n,e){const t=jp(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Kp(n,e){let t;switch(e){case pc:t="Linear";break;case $u:t="Reinhard";break;case Ku:t="Cineon";break;case Zu:t="ACESFilmic";break;case Qu:t="AgX";break;case eh:t="Neutral";break;case Ju:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fs=new P;function Zp(){ot.getLuminanceCoefficients(Fs);const n=Fs.x.toFixed(4),e=Fs.y.toFixed(4),t=Fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jp(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function Qp(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function eg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ar(n){return n!==""}function jl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $l(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ja(n){return n.replace(tg,ig)}const ng=new Map;function ig(n,e){let t=$e[e];if(t===void 0){const i=ng.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ja(t)}const rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kl(n){return n.replace(rg,sg)}function sg(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zl(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function og(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===mc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function ag(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ar:case lr:e="ENVMAP_TYPE_CUBE";break;case lo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lg(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===lr&&(e="ENVMAP_MODE_REFRACTION"),e}function cg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case s0:e="ENVMAP_BLENDING_MULTIPLY";break;case Yu:e="ENVMAP_BLENDING_MIX";break;case ju:e="ENVMAP_BLENDING_ADD";break}return e}function ug(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function hg(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=og(t),c=ag(t),u=lg(t),h=cg(t),f=ug(t),m=Jp(t),g=Qp(s),_=r.createProgram();let p,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ar).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ar).join(`
`),d.length>0&&(d+=`
`)):(p=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),d=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?$e.tonemapping_pars_fragment:"",t.toneMapping!==ti?Kp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,$p("linearToOutputTexel",t.outputColorSpace),Zp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ar).join(`
`)),o=ja(o),o=jl(o,t),o=$l(o,t),a=ja(a),a=jl(a,t),a=$l(a,t),o=Kl(o),a=Kl(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===j0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===j0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=M+p+o,v=M+d+a,C=Xl(r,r.VERTEX_SHADER,y),S=Xl(r,r.FRAGMENT_SHADER,v);r.attachShader(_,C),r.attachShader(_,S),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(D){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(_)||"",z=r.getShaderInfoLog(C)||"",V=r.getShaderInfoLog(S)||"",G=F.trim(),X=z.trim(),K=V.trim();let W=!0,he=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,S);else{const _e=Yl(r,C,"vertex"),be=Yl(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+_e+`
`+be)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(X===""||K==="")&&(he=!1);he&&(D.diagnostics={runnable:W,programLog:G,vertexShader:{log:X,prefix:p},fragmentShader:{log:K,prefix:d}})}r.deleteShader(C),r.deleteShader(S),L=new Ws(r,_),w=eg(r,_)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,Xp)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=S,this}let dg=0;class fg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new mg(e),t.set(e,i)),i}}class mg{constructor(e){this.id=dg++,this.code=e,this.usedTimes=0}}function pg(n,e,t,i,r,s,o){const a=new p0,l=new fg,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,E,D,F,z){const V=F.fog,G=z.geometry,X=w.isMeshStandardMaterial?F.environment:null,K=(w.isMeshStandardMaterial?t:e).get(w.envMap||X),W=K&&K.mapping===lo?K.image.height:null,he=g[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const _e=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,be=_e!==void 0?_e.length:0;let Ge=0;G.morphAttributes.position!==void 0&&(Ge=1),G.morphAttributes.normal!==void 0&&(Ge=2),G.morphAttributes.color!==void 0&&(Ge=3);let Ze,rt,tt,J;if(he){const lt=Sn[he];Ze=lt.vertexShader,rt=lt.fragmentShader}else Ze=w.vertexShader,rt=w.fragmentShader,l.update(w),tt=l.getVertexShaderID(w),J=l.getFragmentShaderID(w);const te=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),de=z.isInstancedMesh===!0,pe=z.isBatchedMesh===!0,We=!!w.map,nt=!!w.matcap,R=!!K,Q=!!w.aoMap,Z=!!w.lightMap,$=!!w.bumpMap,j=!!w.normalMap,ce=!!w.displacementMap,ne=!!w.emissiveMap,se=!!w.metalnessMap,Ie=!!w.roughnessMap,Ue=w.anisotropy>0,A=w.clearcoat>0,x=w.dispersion>0,B=w.iridescence>0,q=w.sheen>0,ie=w.transmission>0,Y=Ue&&!!w.anisotropyMap,Pe=A&&!!w.clearcoatMap,fe=A&&!!w.clearcoatNormalMap,Ae=A&&!!w.clearcoatRoughnessMap,Ce=B&&!!w.iridescenceMap,oe=B&&!!w.iridescenceThicknessMap,ye=q&&!!w.sheenColorMap,ze=q&&!!w.sheenRoughnessMap,Le=!!w.specularMap,ve=!!w.specularColorMap,Ye=!!w.specularIntensityMap,U=ie&&!!w.transmissionMap,ue=ie&&!!w.thicknessMap,me=!!w.gradientMap,we=!!w.alphaMap,ae=w.alphaTest>0,ee=!!w.alphaHash,Re=!!w.extensions;let Xe=ti;w.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Xe=n.toneMapping);const gt={shaderID:he,shaderType:w.type,shaderName:w.name,vertexShader:Ze,fragmentShader:rt,defines:w.defines,customVertexShaderID:tt,customFragmentShaderID:J,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:pe,batchingColor:pe&&z._colorsTexture!==null,instancing:de,instancingColor:de&&z.instanceColor!==null,instancingMorph:de&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:cr,alphaToCoverage:!!w.alphaToCoverage,map:We,matcap:nt,envMap:R,envMapMode:R&&K.mapping,envMapCubeUVHeight:W,aoMap:Q,lightMap:Z,bumpMap:$,normalMap:j,displacementMap:f&&ce,emissiveMap:ne,normalMapObjectSpace:j&&w.normalMapType===rh,normalMapTangentSpace:j&&w.normalMapType===d0,metalnessMap:se,roughnessMap:Ie,anisotropy:Ue,anisotropyMap:Y,clearcoat:A,clearcoatMap:Pe,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ae,dispersion:x,iridescence:B,iridescenceMap:Ce,iridescenceThicknessMap:oe,sheen:q,sheenColorMap:ye,sheenRoughnessMap:ze,specularMap:Le,specularColorMap:ve,specularIntensityMap:Ye,transmission:ie,transmissionMap:U,thicknessMap:ue,gradientMap:me,opaque:w.transparent===!1&&w.blending===Ei&&w.alphaToCoverage===!1,alphaMap:we,alphaTest:ae,alphaHash:ee,combine:w.combine,mapUv:We&&_(w.map.channel),aoMapUv:Q&&_(w.aoMap.channel),lightMapUv:Z&&_(w.lightMap.channel),bumpMapUv:$&&_(w.bumpMap.channel),normalMapUv:j&&_(w.normalMap.channel),displacementMapUv:ce&&_(w.displacementMap.channel),emissiveMapUv:ne&&_(w.emissiveMap.channel),metalnessMapUv:se&&_(w.metalnessMap.channel),roughnessMapUv:Ie&&_(w.roughnessMap.channel),anisotropyMapUv:Y&&_(w.anisotropyMap.channel),clearcoatMapUv:Pe&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:ze&&_(w.sheenRoughnessMap.channel),specularMapUv:Le&&_(w.specularMap.channel),specularColorMapUv:ve&&_(w.specularColorMap.channel),specularIntensityMapUv:Ye&&_(w.specularIntensityMap.channel),transmissionMapUv:U&&_(w.transmissionMap.channel),thicknessMapUv:ue&&_(w.thicknessMap.channel),alphaMapUv:we&&_(w.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(j||Ue),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(We||we),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Se,skinning:z.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Ge,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,decodeVideoTexture:We&&w.map.isVideoTexture===!0&&ot.getTransfer(w.map.colorSpace)===ht,decodeVideoTextureEmissive:ne&&w.emissiveMap.isVideoTexture===!0&&ot.getTransfer(w.emissiveMap.colorSpace)===ht,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===bn,flipSided:w.side===qt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Re&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&w.extensions.multiDraw===!0||pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function d(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)E.push(D),E.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(M(E,w),y(E,w),E.push(n.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function M(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function y(w,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const E=g[w.type];let D;if(E){const F=Sn[E];D=jh.clone(F.uniforms)}else D=w.uniforms;return D}function C(w,E){let D;for(let F=0,z=u.length;F<z;F++){const V=u[F];if(V.cacheKey===E){D=V,++D.usedTimes;break}}return D===void 0&&(D=new hg(n,E,w,s),u.push(D)),D}function S(w){if(--w.usedTimes===0){const E=u.indexOf(w);u[E]=u[u.length-1],u.pop(),w.destroy()}}function T(w){l.remove(w)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:v,acquireProgram:C,releaseProgram:S,releaseShaderCache:T,programs:u,dispose:L}}function gg(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function _g(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Jl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ql(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,m,g,_,p){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=p),e++,d}function a(h,f,m,g,_,p){const d=o(h,f,m,g,_,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(h,f,m,g,_,p){const d=o(h,f,m,g,_,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||_g),i.length>1&&i.sort(f||Jl),r.length>1&&r.sort(f||Jl)}function u(){for(let h=e,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function vg(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ql,n.set(i,[o])):r>=s.length?(o=new Ql,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function xg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ve};break;case"SpotLight":t={position:new P,direction:new P,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function yg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Sg=0;function Mg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function bg(n){const e=new xg,t=yg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const r=new P,s=new mt,o=new mt;function a(c){let u=0,h=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,g=0,_=0,p=0,d=0,M=0,y=0,v=0,C=0,S=0,T=0;c.sort(Mg);for(let w=0,E=c.length;w<E;w++){const D=c[w],F=D.color,z=D.intensity,V=D.distance,G=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=F.r*z,h+=F.g*z,f+=F.b*z;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],z);T++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,W=t.get(D);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=G,i.directionalShadowMatrix[m]=D.shadow.matrix,M++}i.directional[m]=X,m++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(F).multiplyScalar(z),X.distance=V,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[_]=X;const K=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,K.updateMatrices(D),D.castShadow&&S++),i.spotLightMatrix[_]=K.matrix,D.castShadow){const W=t.get(D);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=G,v++}_++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(F).multiplyScalar(z),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=X,p++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const K=D.shadow,W=t.get(D);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=D.shadow.matrix,y++}i.point[g]=X,g++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(z),X.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[d]=X,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==m||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==p||L.hemiLength!==d||L.numDirectionalShadows!==M||L.numPointShadows!==y||L.numSpotShadows!==v||L.numSpotMaps!==C||L.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+C-S,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=T,L.directionalLength=m,L.pointLength=g,L.spotLength=_,L.rectAreaLength=p,L.hemiLength=d,L.numDirectionalShadows=M,L.numPointShadows=y,L.numSpotShadows=v,L.numSpotMaps=C,L.numLightProbes=T,i.version=Sg++)}function l(c,u){let h=0,f=0,m=0,g=0,_=0;const p=u.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const y=c[d];if(y.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),h++}else if(y.isSpotLight){const v=i.spot[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),o.identity(),s.copy(y.matrixWorld),s.premultiply(p),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function ec(n){const e=new bg(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Eg(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ec(n),e.set(r,[a])):s>=o.length?(a=new ec(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tg=`uniform sampler2D shadow_pass;
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
}`;function Ag(n,e,t){let i=new _0;const r=new re,s=new re,o=new bt,a=new kd({depthPacking:ih}),l=new Hd,c={},u=t.maxTextureSize,h={[Wn]:qt,[qt]:Wn,[bn]:bn},f=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:wg,fragmentShader:Tg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new At;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Oe(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let d=this.type;this.render=function(S,T,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const w=n.getRenderTarget(),E=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ei),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=d!==zn&&this.type===zn,V=d===zn&&this.type!==zn;for(let G=0,X=S.length;G<X;G++){const K=S[G],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const he=W.getFrameExtents();if(r.multiply(he),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,W.mapSize.y=s.y)),W.map===null||z===!0||V===!0){const be=this.type!==zn?{minFilter:gn,magFilter:gn}:{};W.map!==null&&W.map.dispose(),W.map=new Ci(r.x,r.y,be),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const _e=W.getViewportCount();for(let be=0;be<_e;be++){const Ge=W.getViewport(be);o.set(s.x*Ge.x,s.y*Ge.y,s.x*Ge.z,s.y*Ge.w),F.viewport(o),W.updateMatrices(K,be),i=W.getFrustum(),v(T,L,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===zn&&M(W,L),W.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(w,E,D)};function M(S,T){const L=e.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ci(r.x,r.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(T,null,L,f,_,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(T,null,L,m,_,null)}function y(S,T,L,w){let E=null;const D=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)E=D;else if(E=L.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const F=E.uuid,z=T.uuid;let V=c[F];V===void 0&&(V={},c[F]=V);let G=V[z];G===void 0&&(G=E.clone(),V[z]=G,T.addEventListener("dispose",C)),E=G}if(E.visible=T.visible,E.wireframe=T.wireframe,w===zn?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:h[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const F=n.properties.get(E);F.light=L}return E}function v(S,T,L,w,E){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===zn)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);const z=e.update(S),V=S.material;if(Array.isArray(V)){const G=z.groups;for(let X=0,K=G.length;X<K;X++){const W=G[X],he=V[W.materialIndex];if(he&&he.visible){const _e=y(S,he,w,E);S.onBeforeShadow(n,S,T,L,z,_e,W),n.renderBufferDirect(L,null,z,_e,S,W),S.onAfterShadow(n,S,T,L,z,_e,W)}}}else if(V.visible){const G=y(S,V,w,E);S.onBeforeShadow(n,S,T,L,z,G,null),n.renderBufferDirect(L,null,z,G,S,null),S.onAfterShadow(n,S,T,L,z,G,null)}}const F=S.children;for(let z=0,V=F.length;z<V;z++)v(F[z],T,L,w,E)}function C(S){S.target.removeEventListener("dispose",C);for(const L in c){const w=c[L],E=S.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}const Cg={[ia]:ra,[sa]:la,[oa]:ca,[or]:aa,[ra]:ia,[la]:sa,[ca]:oa,[aa]:or};function Rg(n,e){function t(){let U=!1;const ue=new bt;let me=null;const we=new bt(0,0,0,0);return{setMask:function(ae){me!==ae&&!U&&(n.colorMask(ae,ae,ae,ae),me=ae)},setLocked:function(ae){U=ae},setClear:function(ae,ee,Re,Xe,gt){gt===!0&&(ae*=Xe,ee*=Xe,Re*=Xe),ue.set(ae,ee,Re,Xe),we.equals(ue)===!1&&(n.clearColor(ae,ee,Re,Xe),we.copy(ue))},reset:function(){U=!1,me=null,we.set(-1,0,0,0)}}}function i(){let U=!1,ue=!1,me=null,we=null,ae=null;return{setReversed:function(ee){if(ue!==ee){const Re=e.get("EXT_clip_control");ee?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ue=ee;const Xe=ae;ae=null,this.setClear(Xe)}},getReversed:function(){return ue},setTest:function(ee){ee?te(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(ee){me!==ee&&!U&&(n.depthMask(ee),me=ee)},setFunc:function(ee){if(ue&&(ee=Cg[ee]),we!==ee){switch(ee){case ia:n.depthFunc(n.NEVER);break;case ra:n.depthFunc(n.ALWAYS);break;case sa:n.depthFunc(n.LESS);break;case or:n.depthFunc(n.LEQUAL);break;case oa:n.depthFunc(n.EQUAL);break;case aa:n.depthFunc(n.GEQUAL);break;case la:n.depthFunc(n.GREATER);break;case ca:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}we=ee}},setLocked:function(ee){U=ee},setClear:function(ee){ae!==ee&&(ue&&(ee=1-ee),n.clearDepth(ee),ae=ee)},reset:function(){U=!1,me=null,we=null,ae=null,ue=!1}}}function r(){let U=!1,ue=null,me=null,we=null,ae=null,ee=null,Re=null,Xe=null,gt=null;return{setTest:function(lt){U||(lt?te(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(lt){ue!==lt&&!U&&(n.stencilMask(lt),ue=lt)},setFunc:function(lt,Dn,xn){(me!==lt||we!==Dn||ae!==xn)&&(n.stencilFunc(lt,Dn,xn),me=lt,we=Dn,ae=xn)},setOp:function(lt,Dn,xn){(ee!==lt||Re!==Dn||Xe!==xn)&&(n.stencilOp(lt,Dn,xn),ee=lt,Re=Dn,Xe=xn)},setLocked:function(lt){U=lt},setClear:function(lt){gt!==lt&&(n.clearStencil(lt),gt=lt)},reset:function(){U=!1,ue=null,me=null,we=null,ae=null,ee=null,Re=null,Xe=null,gt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,m=[],g=null,_=!1,p=null,d=null,M=null,y=null,v=null,C=null,S=null,T=new Ve(0,0,0),L=0,w=!1,E=null,D=null,F=null,z=null,V=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=K>=2);let he=null,_e={};const be=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),Ze=new bt().fromArray(be),rt=new bt().fromArray(Ge);function tt(U,ue,me,we){const ae=new Uint8Array(4),ee=n.createTexture();n.bindTexture(U,ee),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<me;Re++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,we,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(ue+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return ee}const J={};J[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(n.DEPTH_TEST),o.setFunc(or),$(!1),j(G0),te(n.CULL_FACE),Q(ei);function te(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Se(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function de(U,ue){return h[U]!==ue?(n.bindFramebuffer(U,ue),h[U]=ue,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ue),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function pe(U,ue){let me=m,we=!1;if(U){me=f.get(ue),me===void 0&&(me=[],f.set(ue,me));const ae=U.textures;if(me.length!==ae.length||me[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,Re=ae.length;ee<Re;ee++)me[ee]=n.COLOR_ATTACHMENT0+ee;me.length=ae.length,we=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,we=!0);we&&n.drawBuffers(me)}function We(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const nt={[yi]:n.FUNC_ADD,[Pu]:n.FUNC_SUBTRACT,[Lu]:n.FUNC_REVERSE_SUBTRACT};nt[Du]=n.MIN,nt[Iu]=n.MAX;const R={[Uu]:n.ZERO,[Nu]:n.ONE,[Ou]:n.SRC_COLOR,[ta]:n.SRC_ALPHA,[Vu]:n.SRC_ALPHA_SATURATE,[ku]:n.DST_COLOR,[Bu]:n.DST_ALPHA,[Fu]:n.ONE_MINUS_SRC_COLOR,[na]:n.ONE_MINUS_SRC_ALPHA,[Hu]:n.ONE_MINUS_DST_COLOR,[zu]:n.ONE_MINUS_DST_ALPHA,[Gu]:n.CONSTANT_COLOR,[Wu]:n.ONE_MINUS_CONSTANT_COLOR,[Xu]:n.CONSTANT_ALPHA,[qu]:n.ONE_MINUS_CONSTANT_ALPHA};function Q(U,ue,me,we,ae,ee,Re,Xe,gt,lt){if(U===ei){_===!0&&(Se(n.BLEND),_=!1);return}if(_===!1&&(te(n.BLEND),_=!0),U!==Ru){if(U!==p||lt!==w){if((d!==yi||v!==yi)&&(n.blendEquation(n.FUNC_ADD),d=yi,v=yi),lt)switch(U){case Ei:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case W0:n.blendFunc(n.ONE,n.ONE);break;case X0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case q0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ei:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case W0:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case X0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case q0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,y=null,C=null,S=null,T.set(0,0,0),L=0,p=U,w=lt}return}ae=ae||ue,ee=ee||me,Re=Re||we,(ue!==d||ae!==v)&&(n.blendEquationSeparate(nt[ue],nt[ae]),d=ue,v=ae),(me!==M||we!==y||ee!==C||Re!==S)&&(n.blendFuncSeparate(R[me],R[we],R[ee],R[Re]),M=me,y=we,C=ee,S=Re),(Xe.equals(T)===!1||gt!==L)&&(n.blendColor(Xe.r,Xe.g,Xe.b,gt),T.copy(Xe),L=gt),p=U,w=!1}function Z(U,ue){U.side===bn?Se(n.CULL_FACE):te(n.CULL_FACE);let me=U.side===qt;ue&&(me=!me),$(me),U.blending===Ei&&U.transparent===!1?Q(ei):Q(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const we=U.stencilWrite;a.setTest(we),we&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ne(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(U){E!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),E=U)}function j(U){U!==Au?(te(n.CULL_FACE),U!==D&&(U===G0?n.cullFace(n.BACK):U===Cu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),D=U}function ce(U){U!==F&&(X&&n.lineWidth(U),F=U)}function ne(U,ue,me){U?(te(n.POLYGON_OFFSET_FILL),(z!==ue||V!==me)&&(n.polygonOffset(ue,me),z=ue,V=me)):Se(n.POLYGON_OFFSET_FILL)}function se(U){U?te(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function Ie(U){U===void 0&&(U=n.TEXTURE0+G-1),he!==U&&(n.activeTexture(U),he=U)}function Ue(U,ue,me){me===void 0&&(he===null?me=n.TEXTURE0+G-1:me=he);let we=_e[me];we===void 0&&(we={type:void 0,texture:void 0},_e[me]=we),(we.type!==U||we.texture!==ue)&&(he!==me&&(n.activeTexture(me),he=me),n.bindTexture(U,ue||J[U]),we.type=U,we.texture=ue)}function A(){const U=_e[he];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(U){Ze.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Ze.copy(U))}function ze(U){rt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),rt.copy(U))}function Le(U,ue){let me=c.get(ue);me===void 0&&(me=new WeakMap,c.set(ue,me));let we=me.get(U);we===void 0&&(we=n.getUniformBlockIndex(ue,U.name),me.set(U,we))}function ve(U,ue){const we=c.get(ue).get(U);l.get(ue)!==we&&(n.uniformBlockBinding(ue,we,U.__bindingPointIndex),l.set(ue,we))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},he=null,_e={},h={},f=new WeakMap,m=[],g=null,_=!1,p=null,d=null,M=null,y=null,v=null,C=null,S=null,T=new Ve(0,0,0),L=0,w=!1,E=null,D=null,F=null,z=null,V=null,Ze.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:Se,bindFramebuffer:de,drawBuffers:pe,useProgram:We,setBlending:Q,setMaterial:Z,setFlipSided:$,setCullFace:j,setLineWidth:ce,setPolygonOffset:ne,setScissorTest:se,activeTexture:Ie,bindTexture:Ue,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:B,texImage2D:Ce,texImage3D:oe,updateUBOMapping:Le,uniformBlockBinding:ve,texStorage2D:fe,texStorage3D:Ae,texSubImage2D:q,texSubImage3D:ie,compressedTexSubImage2D:Y,compressedTexSubImage3D:Pe,scissor:ye,viewport:ze,reset:Ye}}function Pg(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return m?new OffscreenCanvas(A,x):qr("canvas")}function _(A,x,B){let q=1;const ie=Ue(A);if((ie.width>B||ie.height>B)&&(q=B/Math.max(ie.width,ie.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(q*ie.width),Pe=Math.floor(q*ie.height);h===void 0&&(h=g(Y,Pe));const fe=x?g(Y,Pe):h;return fe.width=Y,fe.height=Pe,fe.getContext("2d").drawImage(A,0,0,Y,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Y+"x"+Pe+")."),fe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),A;return A}function p(A){return A.generateMipmaps}function d(A){n.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(A,x,B,q,ie=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=x;if(x===n.RED&&(B===n.FLOAT&&(Y=n.R32F),B===n.HALF_FLOAT&&(Y=n.R16F),B===n.UNSIGNED_BYTE&&(Y=n.R8)),x===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.R8UI),B===n.UNSIGNED_SHORT&&(Y=n.R16UI),B===n.UNSIGNED_INT&&(Y=n.R32UI),B===n.BYTE&&(Y=n.R8I),B===n.SHORT&&(Y=n.R16I),B===n.INT&&(Y=n.R32I)),x===n.RG&&(B===n.FLOAT&&(Y=n.RG32F),B===n.HALF_FLOAT&&(Y=n.RG16F),B===n.UNSIGNED_BYTE&&(Y=n.RG8)),x===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RG8UI),B===n.UNSIGNED_SHORT&&(Y=n.RG16UI),B===n.UNSIGNED_INT&&(Y=n.RG32UI),B===n.BYTE&&(Y=n.RG8I),B===n.SHORT&&(Y=n.RG16I),B===n.INT&&(Y=n.RG32I)),x===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),B===n.UNSIGNED_INT&&(Y=n.RGB32UI),B===n.BYTE&&(Y=n.RGB8I),B===n.SHORT&&(Y=n.RGB16I),B===n.INT&&(Y=n.RGB32I)),x===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),B===n.UNSIGNED_INT&&(Y=n.RGBA32UI),B===n.BYTE&&(Y=n.RGBA8I),B===n.SHORT&&(Y=n.RGBA16I),B===n.INT&&(Y=n.RGBA32I)),x===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),x===n.RGBA){const Pe=ie?Ks:ot.getTransfer(q);B===n.FLOAT&&(Y=n.RGBA32F),B===n.HALF_FLOAT&&(Y=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Y=Pe===ht?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(A,x){let B;return A?x===null||x===Ti||x===Vr?B=n.DEPTH24_STENCIL8:x===Hn?B=n.DEPTH32F_STENCIL8:x===Hr&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ti||x===Vr?B=n.DEPTH_COMPONENT24:x===Hn?B=n.DEPTH_COMPONENT32F:x===Hr&&(B=n.DEPTH_COMPONENT16),B}function C(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==gn&&A.minFilter!==En?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function S(A){const x=A.target;x.removeEventListener("dispose",S),L(x),x.isVideoTexture&&u.delete(x)}function T(A){const x=A.target;x.removeEventListener("dispose",T),E(x)}function L(A){const x=i.get(A);if(x.__webglInit===void 0)return;const B=A.source,q=f.get(B);if(q){const ie=q[x.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&w(A),Object.keys(q).length===0&&f.delete(B)}i.remove(A)}function w(A){const x=i.get(A);n.deleteTexture(x.__webglTexture);const B=A.source,q=f.get(B);delete q[x.__cacheKey],o.memory.textures--}function E(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let ie=0;ie<x.__webglFramebuffer[q].length;ie++)n.deleteFramebuffer(x.__webglFramebuffer[q][ie]);else n.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)n.deleteFramebuffer(x.__webglFramebuffer[q]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=A.textures;for(let q=0,ie=B.length;q<ie;q++){const Y=i.get(B[q]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(B[q])}i.remove(A)}let D=0;function F(){D=0}function z(){const A=D;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),D+=1,A}function V(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function G(A,x){const B=i.get(A);if(A.isVideoTexture&&se(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(B,A,x);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+x)}function X(A,x){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){J(B,A,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+x)}function K(A,x){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){J(B,A,x);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+x)}function W(A,x){const B=i.get(A);if(A.version>0&&B.__version!==A.version){te(B,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+x)}const he={[da]:n.REPEAT,[Mi]:n.CLAMP_TO_EDGE,[fa]:n.MIRRORED_REPEAT},_e={[gn]:n.NEAREST,[th]:n.NEAREST_MIPMAP_NEAREST,[as]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[mo]:n.LINEAR_MIPMAP_NEAREST,[bi]:n.LINEAR_MIPMAP_LINEAR},be={[sh]:n.NEVER,[hh]:n.ALWAYS,[oh]:n.LESS,[wc]:n.LEQUAL,[ah]:n.EQUAL,[uh]:n.GEQUAL,[lh]:n.GREATER,[ch]:n.NOTEQUAL};function Ge(A,x){if(x.type===Hn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===En||x.magFilter===mo||x.magFilter===as||x.magFilter===bi||x.minFilter===En||x.minFilter===mo||x.minFilter===as||x.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,he[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,he[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,he[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,_e[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,_e[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,be[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===gn||x.minFilter!==as&&x.minFilter!==bi||x.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ze(A,x){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",S));const q=x.source;let ie=f.get(q);ie===void 0&&(ie={},f.set(q,ie));const Y=V(x);if(Y!==A.__cacheKey){ie[Y]===void 0&&(ie[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ie[Y].usedTimes++;const Pe=ie[A.__cacheKey];Pe!==void 0&&(ie[A.__cacheKey].usedTimes--,Pe.usedTimes===0&&w(x)),A.__cacheKey=Y,A.__webglTexture=ie[Y].texture}return B}function rt(A,x,B){return Math.floor(Math.floor(A/B)/x)}function tt(A,x,B,q){const Y=A.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,B,q,x.data);else{Y.sort((oe,ye)=>oe.start-ye.start);let Pe=0;for(let oe=1;oe<Y.length;oe++){const ye=Y[Pe],ze=Y[oe],Le=ye.start+ye.count,ve=rt(ze.start,x.width,4),Ye=rt(ye.start,x.width,4);ze.start<=Le+1&&ve===Ye&&rt(ze.start+ze.count-1,x.width,4)===ve?ye.count=Math.max(ye.count,ze.start+ze.count-ye.start):(++Pe,Y[Pe]=ze)}Y.length=Pe+1;const fe=n.getParameter(n.UNPACK_ROW_LENGTH),Ae=n.getParameter(n.UNPACK_SKIP_PIXELS),Ce=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let oe=0,ye=Y.length;oe<ye;oe++){const ze=Y[oe],Le=Math.floor(ze.start/4),ve=Math.ceil(ze.count/4),Ye=Le%x.width,U=Math.floor(Le/x.width),ue=ve,me=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Ye,U,ue,me,B,q,x.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,fe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function J(A,x,B){let q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=n.TEXTURE_3D);const ie=Ze(A,x),Y=x.source;t.bindTexture(q,A.__webglTexture,n.TEXTURE0+B);const Pe=i.get(Y);if(Y.version!==Pe.__version||ie===!0){t.activeTexture(n.TEXTURE0+B);const fe=ot.getPrimaries(ot.workingColorSpace),Ae=x.colorSpace===Qn?null:ot.getPrimaries(x.colorSpace),Ce=x.colorSpace===Qn||fe===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let oe=_(x.image,!1,r.maxTextureSize);oe=Ie(x,oe);const ye=s.convert(x.format,x.colorSpace),ze=s.convert(x.type);let Le=y(x.internalFormat,ye,ze,x.colorSpace,x.isVideoTexture);Ge(q,x);let ve;const Ye=x.mipmaps,U=x.isVideoTexture!==!0,ue=Pe.__version===void 0||ie===!0,me=Y.dataReady,we=C(x,oe);if(x.isDepthTexture)Le=v(x.format===Wr,x.type),ue&&(U?t.texStorage2D(n.TEXTURE_2D,1,Le,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Le,oe.width,oe.height,0,ye,ze,null));else if(x.isDataTexture)if(Ye.length>0){U&&ue&&t.texStorage2D(n.TEXTURE_2D,we,Le,Ye[0].width,Ye[0].height);for(let ae=0,ee=Ye.length;ae<ee;ae++)ve=Ye[ae],U?me&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ve.width,ve.height,ye,ze,ve.data):t.texImage2D(n.TEXTURE_2D,ae,Le,ve.width,ve.height,0,ye,ze,ve.data);x.generateMipmaps=!1}else U?(ue&&t.texStorage2D(n.TEXTURE_2D,we,Le,oe.width,oe.height),me&&tt(x,oe,ye,ze)):t.texImage2D(n.TEXTURE_2D,0,Le,oe.width,oe.height,0,ye,ze,oe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Le,Ye[0].width,Ye[0].height,oe.depth);for(let ae=0,ee=Ye.length;ae<ee;ae++)if(ve=Ye[ae],x.format!==pn)if(ye!==null)if(U){if(me)if(x.layerUpdates.size>0){const Re=Pl(ve.width,ve.height,x.format,x.type);for(const Xe of x.layerUpdates){const gt=ve.data.subarray(Xe*Re/ve.data.BYTES_PER_ELEMENT,(Xe+1)*Re/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,Xe,ve.width,ve.height,1,ye,gt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ve.width,ve.height,oe.depth,ye,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Le,ve.width,ve.height,oe.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ve.width,ve.height,oe.depth,ye,ze,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Le,ve.width,ve.height,oe.depth,0,ye,ze,ve.data)}else{U&&ue&&t.texStorage2D(n.TEXTURE_2D,we,Le,Ye[0].width,Ye[0].height);for(let ae=0,ee=Ye.length;ae<ee;ae++)ve=Ye[ae],x.format!==pn?ye!==null?U?me&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,ve.width,ve.height,ye,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Le,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?me&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ve.width,ve.height,ye,ze,ve.data):t.texImage2D(n.TEXTURE_2D,ae,Le,ve.width,ve.height,0,ye,ze,ve.data)}else if(x.isDataArrayTexture)if(U){if(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Le,oe.width,oe.height,oe.depth),me)if(x.layerUpdates.size>0){const ae=Pl(oe.width,oe.height,x.format,x.type);for(const ee of x.layerUpdates){const Re=oe.data.subarray(ee*ae/oe.data.BYTES_PER_ELEMENT,(ee+1)*ae/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,ye,ze,Re)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ye,ze,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,oe.width,oe.height,oe.depth,0,ye,ze,oe.data);else if(x.isData3DTexture)U?(ue&&t.texStorage3D(n.TEXTURE_3D,we,Le,oe.width,oe.height,oe.depth),me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ye,ze,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Le,oe.width,oe.height,oe.depth,0,ye,ze,oe.data);else if(x.isFramebufferTexture){if(ue)if(U)t.texStorage2D(n.TEXTURE_2D,we,Le,oe.width,oe.height);else{let ae=oe.width,ee=oe.height;for(let Re=0;Re<we;Re++)t.texImage2D(n.TEXTURE_2D,Re,Le,ae,ee,0,ye,ze,null),ae>>=1,ee>>=1}}else if(Ye.length>0){if(U&&ue){const ae=Ue(Ye[0]);t.texStorage2D(n.TEXTURE_2D,we,Le,ae.width,ae.height)}for(let ae=0,ee=Ye.length;ae<ee;ae++)ve=Ye[ae],U?me&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ye,ze,ve):t.texImage2D(n.TEXTURE_2D,ae,Le,ye,ze,ve);x.generateMipmaps=!1}else if(U){if(ue){const ae=Ue(oe);t.texStorage2D(n.TEXTURE_2D,we,Le,ae.width,ae.height)}me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,ze,oe)}else t.texImage2D(n.TEXTURE_2D,0,Le,ye,ze,oe);p(x)&&d(q),Pe.__version=Y.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function te(A,x,B){if(x.image.length!==6)return;const q=Ze(A,x),ie=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+B);const Y=i.get(ie);if(ie.version!==Y.__version||q===!0){t.activeTexture(n.TEXTURE0+B);const Pe=ot.getPrimaries(ot.workingColorSpace),fe=x.colorSpace===Qn?null:ot.getPrimaries(x.colorSpace),Ae=x.colorSpace===Qn||Pe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ce=x.isCompressedTexture||x.image[0].isCompressedTexture,oe=x.image[0]&&x.image[0].isDataTexture,ye=[];for(let ee=0;ee<6;ee++)!Ce&&!oe?ye[ee]=_(x.image[ee],!0,r.maxCubemapSize):ye[ee]=oe?x.image[ee].image:x.image[ee],ye[ee]=Ie(x,ye[ee]);const ze=ye[0],Le=s.convert(x.format,x.colorSpace),ve=s.convert(x.type),Ye=y(x.internalFormat,Le,ve,x.colorSpace),U=x.isVideoTexture!==!0,ue=Y.__version===void 0||q===!0,me=ie.dataReady;let we=C(x,ze);Ge(n.TEXTURE_CUBE_MAP,x);let ae;if(Ce){U&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,we,Ye,ze.width,ze.height);for(let ee=0;ee<6;ee++){ae=ye[ee].mipmaps;for(let Re=0;Re<ae.length;Re++){const Xe=ae[Re];x.format!==pn?Le!==null?U?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,0,0,Xe.width,Xe.height,Le,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,Ye,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,0,0,Xe.width,Xe.height,Le,ve,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,Ye,Xe.width,Xe.height,0,Le,ve,Xe.data)}}}else{if(ae=x.mipmaps,U&&ue){ae.length>0&&we++;const ee=Ue(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,we,Ye,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){U?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ye[ee].width,ye[ee].height,Le,ve,ye[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,ye[ee].width,ye[ee].height,0,Le,ve,ye[ee].data);for(let Re=0;Re<ae.length;Re++){const gt=ae[Re].image[ee].image;U?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,0,0,gt.width,gt.height,Le,ve,gt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,Ye,gt.width,gt.height,0,Le,ve,gt.data)}}else{U?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Le,ve,ye[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,Le,ve,ye[ee]);for(let Re=0;Re<ae.length;Re++){const Xe=ae[Re];U?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,0,0,Le,ve,Xe.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,Ye,Le,ve,Xe.image[ee])}}}p(x)&&d(n.TEXTURE_CUBE_MAP),Y.__version=ie.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Se(A,x,B,q,ie,Y){const Pe=s.convert(B.format,B.colorSpace),fe=s.convert(B.type),Ae=y(B.internalFormat,Pe,fe,B.colorSpace),Ce=i.get(x),oe=i.get(B);if(oe.__renderTarget=x,!Ce.__hasExternalTextures){const ye=Math.max(1,x.width>>Y),ze=Math.max(1,x.height>>Y);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,Y,Ae,ye,ze,x.depth,0,Pe,fe,null):t.texImage2D(ie,Y,Ae,ye,ze,0,Pe,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ne(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,ie,oe.__webglTexture,0,ce(x)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,ie,oe.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(A,x,B){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){const q=x.depthTexture,ie=q&&q.isDepthTexture?q.type:null,Y=v(x.stencilBuffer,ie),Pe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=ce(x);ne(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,Y,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,Y,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Y,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,A)}else{const q=x.textures;for(let ie=0;ie<q.length;ie++){const Y=q[ie],Pe=s.convert(Y.format,Y.colorSpace),fe=s.convert(Y.type),Ae=y(Y.internalFormat,Pe,fe,Y.colorSpace),Ce=ce(x);B&&ne(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Ae,x.width,x.height):ne(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,Ae,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G(x.depthTexture,0);const ie=q.__webglTexture,Y=ce(x);if(x.depthTexture.format===Gr)ne(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(x.depthTexture.format===Wr)ne(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function We(A){const x=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const ie=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",ie)};q.addEventListener("dispose",ie),x.__depthDisposeCallback=ie}x.__boundDepthTexture=q}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const q=A.texture.mipmaps;q&&q.length>0?pe(x.__webglFramebuffer[0],A):pe(x.__webglFramebuffer,A)}else if(B){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=n.createRenderbuffer(),de(x.__webglDepthbuffer[q],A,!1);else{const ie=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,Y)}}else{const q=A.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),de(x.__webglDepthbuffer,A,!1);else{const ie=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(A,x,B){const q=i.get(A);x!==void 0&&Se(q.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&We(A)}function R(A){const x=A.texture,B=i.get(A),q=i.get(x);A.addEventListener("dispose",T);const ie=A.textures,Y=A.isWebGLCubeRenderTarget===!0,Pe=ie.length>1;if(Pe||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=x.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[fe]=[];for(let Ae=0;Ae<x.mipmaps.length;Ae++)B.__webglFramebuffer[fe][Ae]=n.createFramebuffer()}else B.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)B.__webglFramebuffer[fe]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let fe=0,Ae=ie.length;fe<Ae;fe++){const Ce=i.get(ie[fe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&ne(A)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const Ae=ie[fe];B.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[fe]);const Ce=s.convert(Ae.format,Ae.colorSpace),oe=s.convert(Ae.type),ye=y(Ae.internalFormat,Ce,oe,Ae.colorSpace,A.isXRRenderTarget===!0),ze=ce(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,ye,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,B.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),de(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,x);for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)Se(B.__webglFramebuffer[fe][Ae],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae);else Se(B.__webglFramebuffer[fe],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);p(x)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let fe=0,Ae=ie.length;fe<Ae;fe++){const Ce=ie[fe],oe=i.get(Ce);let ye=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ye=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,oe.__webglTexture),Ge(ye,Ce),Se(B.__webglFramebuffer,A,Ce,n.COLOR_ATTACHMENT0+fe,ye,0),p(Ce)&&d(ye)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,q.__webglTexture),Ge(fe,x),x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)Se(B.__webglFramebuffer[Ae],A,x,n.COLOR_ATTACHMENT0,fe,Ae);else Se(B.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,fe,0);p(x)&&d(fe),t.unbindTexture()}A.depthBuffer&&We(A)}function Q(A){const x=A.textures;for(let B=0,q=x.length;B<q;B++){const ie=x[B];if(p(ie)){const Y=M(A),Pe=i.get(ie).__webglTexture;t.bindTexture(Y,Pe),d(Y),t.unbindTexture()}}}const Z=[],$=[];function j(A){if(A.samples>0){if(ne(A)===!1){const x=A.textures,B=A.width,q=A.height;let ie=n.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(A),fe=x.length>1;if(fe)for(let Ce=0;Ce<x.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Ae=A.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ce=0;Ce<x.length;Ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ce]);const oe=i.get(x[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,B,q,0,0,B,q,ie,n.NEAREST),l===!0&&(Z.length=0,$.length=0,Z.push(n.COLOR_ATTACHMENT0+Ce),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Z.push(Y),$.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Z))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Ce=0;Ce<x.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ce]);const oe=i.get(x[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ce(A){return Math.min(r.maxSamples,A.samples)}function ne(A){const x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function se(A){const x=o.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function Ie(A,x){const B=A.colorSpace,q=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==cr&&B!==Qn&&(ot.getTransfer(B)===ht?(q!==pn||ie!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function Ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=nt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ne}function Lg(n,e){function t(i,r=Qn){let s;const o=ot.getTransfer(r);if(i===Rn)return n.UNSIGNED_BYTE;if(i===a0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===l0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===_c)return n.BYTE;if(i===vc)return n.SHORT;if(i===Hr)return n.UNSIGNED_SHORT;if(i===o0)return n.INT;if(i===Ti)return n.UNSIGNED_INT;if(i===Hn)return n.FLOAT;if(i===es)return n.HALF_FLOAT;if(i===Sc)return n.ALPHA;if(i===Mc)return n.RGB;if(i===pn)return n.RGBA;if(i===Gr)return n.DEPTH_COMPONENT;if(i===Wr)return n.DEPTH_STENCIL;if(i===bc)return n.RED;if(i===c0)return n.RED_INTEGER;if(i===Ec)return n.RG;if(i===u0)return n.RG_INTEGER;if(i===h0)return n.RGBA_INTEGER;if(i===ks||i===Hs||i===Vs||i===Gs)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ks)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ks)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ma||i===pa||i===ga||i===_a)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ma)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ga)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_a)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===va||i===xa||i===ya)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===va||i===xa)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ya)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sa||i===Ma||i===ba||i===Ea||i===wa||i===Ta||i===Aa||i===Ca||i===Ra||i===Pa||i===La||i===Da||i===Ia||i===Ua)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ma)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ba)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ea)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ta)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Aa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ca)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ra)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===La)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Da)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ia)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ua)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Na||i===Oa||i===Fa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Na)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Oa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ba||i===za||i===ka||i===Ha)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ba)return s.COMPRESSED_RED_RGTC1_EXT;if(i===za)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ka)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ha)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ig=`
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

}`;class Ug{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Bc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ni({vertexShader:Dg,fragmentShader:Ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new ri(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ng extends Li{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,g=null;const _=typeof XRWebGLBinding<"u",p=new Ug,d={},M=t.getContextAttributes();let y=null,v=null;const C=[],S=[],T=new re;let L=null;const w=new an;w.viewport=new bt;const E=new an;E.viewport=new bt;const D=[w,E],F=new Jd;let z=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let te=C[J];return te===void 0&&(te=new No,C[J]=te),te.getTargetRaySpace()},this.getControllerGrip=function(J){let te=C[J];return te===void 0&&(te=new No,C[J]=te),te.getGripSpace()},this.getHand=function(J){let te=C[J];return te===void 0&&(te=new No,C[J]=te),te.getHandSpace()};function G(J){const te=S.indexOf(J.inputSource);if(te===-1)return;const Se=C[te];Se!==void 0&&(Se.update(J.inputSource,J.frame,c||o),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",K);for(let J=0;J<C.length;J++){const te=S[J];te!==null&&(S[J]=null,C[J].disconnect(te))}z=null,V=null,p.reset();for(const J in d)delete d[J];e.setRenderTarget(y),m=null,f=null,h=null,r=null,v=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",X),r.addEventListener("inputsourceschange",K),M.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,de=null,pe=null;M.depth&&(pe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=M.stencil?Wr:Gr,de=M.stencil?Vr:Ti);const We={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(We),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Ci(f.textureWidth,f.textureHeight,{format:pn,type:Rn,depthTexture:new Fc(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Se={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Ci(m.framebufferWidth,m.framebufferHeight,{format:pn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),tt.setContext(r),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(J){for(let te=0;te<J.removed.length;te++){const Se=J.removed[te],de=S.indexOf(Se);de>=0&&(S[de]=null,C[de].disconnect(Se))}for(let te=0;te<J.added.length;te++){const Se=J.added[te];let de=S.indexOf(Se);if(de===-1){for(let We=0;We<C.length;We++)if(We>=S.length){S.push(Se),de=We;break}else if(S[We]===null){S[We]=Se,de=We;break}if(de===-1)break}const pe=C[de];pe&&pe.connect(Se)}}const W=new P,he=new P;function _e(J,te,Se){W.setFromMatrixPosition(te.matrixWorld),he.setFromMatrixPosition(Se.matrixWorld);const de=W.distanceTo(he),pe=te.projectionMatrix.elements,We=Se.projectionMatrix.elements,nt=pe[14]/(pe[10]-1),R=pe[14]/(pe[10]+1),Q=(pe[9]+1)/pe[5],Z=(pe[9]-1)/pe[5],$=(pe[8]-1)/pe[0],j=(We[8]+1)/We[0],ce=nt*$,ne=nt*j,se=de/(-$+j),Ie=se*-$;if(te.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ie),J.translateZ(se),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),pe[10]===-1)J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Ue=nt+se,A=R+se,x=ce-Ie,B=ne+(de-Ie),q=Q*R/A*Ue,ie=Z*R/A*Ue;J.projectionMatrix.makePerspective(x,B,q,ie,Ue,A),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function be(J,te){te===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(te.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let te=J.near,Se=J.far;p.texture!==null&&(p.depthNear>0&&(te=p.depthNear),p.depthFar>0&&(Se=p.depthFar)),F.near=E.near=w.near=te,F.far=E.far=w.far=Se,(z!==F.near||V!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,V=F.far),F.layers.mask=J.layers.mask|6,w.layers.mask=F.layers.mask&3,E.layers.mask=F.layers.mask&5;const de=J.parent,pe=F.cameras;be(F,de);for(let We=0;We<pe.length;We++)be(pe[We],de);pe.length===2?_e(F,w,E):F.projectionMatrix.copy(w.projectionMatrix),Ge(J,F,de)};function Ge(J,te,Se){Se===null?J.matrix.copy(te.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(te.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Xr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(J){return d[J]};let Ze=null;function rt(J,te){if(u=te.getViewerPose(c||o),g=te,u!==null){const Se=u.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let de=!1;Se.length!==F.cameras.length&&(F.cameras.length=0,de=!0);for(let R=0;R<Se.length;R++){const Q=Se[R];let Z=null;if(m!==null)Z=m.getViewport(Q);else{const j=h.getViewSubImage(f,Q);Z=j.viewport,R===0&&(e.setRenderTargetTextures(v,j.colorTexture,j.depthStencilTexture),e.setRenderTarget(v))}let $=D[R];$===void 0&&($=new an,$.layers.enable(R),$.viewport=new bt,D[R]=$),$.matrix.fromArray(Q.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(Q.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Z.x,Z.y,Z.width,Z.height),R===0&&(F.matrix.copy($.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),de===!0&&F.cameras.push($)}const pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const R=h.getDepthInformation(Se[0]);R&&R.isValid&&R.texture&&p.init(R,r.renderState)}if(pe&&pe.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let R=0;R<Se.length;R++){const Q=Se[R].camera;if(Q){let Z=d[Q];Z||(Z=new Bc,d[Q]=Z);const $=h.getCameraImage(Q);Z.sourceTexture=$}}}}for(let Se=0;Se<C.length;Se++){const de=S[Se],pe=C[Se];de!==null&&pe!==void 0&&pe.update(de,te,c||o)}Ze&&Ze(J,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const tt=new Zc;tt.setAnimationLoop(rt),this.setAnimationLoop=function(J){Ze=J},this.dispose=function(){}}}const di=new Yt,Og=new mt;function Fg(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Dc(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,M,y,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,v)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,M,y):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===qt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===qt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const M=e.get(d),y=M.envMap,v=M.envMapRotation;y&&(p.envMap.value=y,di.copy(v),di.x*=-1,di.y*=-1,di.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),p.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(di)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,M,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=y*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===qt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const M=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Bg(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const v=y.program;i.uniformBlockBinding(M,v)}function c(M,y){let v=r[M.id];v===void 0&&(g(M),v=u(M),r[M.id]=v,M.addEventListener("dispose",p));const C=y.program;i.updateUBOMapping(M,C);const S=e.render.frame;s[M.id]!==S&&(f(M),s[M.id]=S)}function u(M){const y=h();M.__bindingPointIndex=y;const v=n.createBuffer(),C=M.__size,S=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,C,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=r[M.id],v=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let S=0,T=v.length;S<T;S++){const L=Array.isArray(v[S])?v[S]:[v[S]];for(let w=0,E=L.length;w<E;w++){const D=L[w];if(m(D,S,w,C)===!0){const F=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let G=0;G<z.length;G++){const X=z[G],K=_(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,F+V,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,V),V+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,y,v,C){const S=M.value,T=y+"_"+v;if(C[T]===void 0)return typeof S=="number"||typeof S=="boolean"?C[T]=S:C[T]=S.clone(),!0;{const L=C[T];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return C[T]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function g(M){const y=M.uniforms;let v=0;const C=16;for(let T=0,L=y.length;T<L;T++){const w=Array.isArray(y[T])?y[T]:[y[T]];for(let E=0,D=w.length;E<D;E++){const F=w[E],z=Array.isArray(F.value)?F.value:[F.value];for(let V=0,G=z.length;V<G;V++){const X=z[V],K=_(X),W=v%C,he=W%K.boundary,_e=W+he;v+=he,_e!==0&&C-_e<K.storage&&(v+=C-_e),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=K.storage}}}const S=v%C;return S>0&&(v+=C-S),M.__size=v,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function p(M){const y=M.target;y.removeEventListener("dispose",p);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class zg{constructor(e={}){const{canvas:t=Ch(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,d=null;const M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let C=!1;this._outputColorSpace=zt;let S=0,T=0,L=null,w=-1,E=null;const D=new bt,F=new bt;let z=null;const V=new Ve(0);let G=0,X=t.width,K=t.height,W=1,he=null,_e=null;const be=new bt(0,0,X,K),Ge=new bt(0,0,X,K);let Ze=!1;const rt=new _0;let tt=!1,J=!1;const te=new mt,Se=new P,de=new bt,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function nt(){return L===null?W:1}let R=i;function Q(b,N){return t.getContext(b,N)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${r0}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",ae,!1),R===null){const N="webgl2";if(R=Q(N,b),R===null)throw Q(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Z,$,j,ce,ne,se,Ie,Ue,A,x,B,q,ie,Y,Pe,fe,Ae,Ce,oe,ye,ze,Le,ve,Ye;function U(){Z=new $m(R),Z.init(),Le=new Lg(R,Z),$=new Vm(R,Z,e,Le),j=new Rg(R,Z),$.reversedDepthBuffer&&f&&j.buffers.depth.setReversed(!0),ce=new Jm(R),ne=new gg,se=new Pg(R,Z,j,ne,$,Le,ce),Ie=new Wm(v),Ue=new jm(v),A=new rf(R),ve=new km(R,A),x=new Km(R,A,ce,ve),B=new ep(R,x,A,ce),oe=new Qm(R,$,se),fe=new Gm(ne),q=new pg(v,Ie,Ue,Z,$,ve,fe),ie=new Fg(v,ne),Y=new vg,Pe=new Eg(Z),Ce=new zm(v,Ie,Ue,j,B,m,l),Ae=new Ag(v,B,$),Ye=new Bg(R,ce,$,j),ye=new Hm(R,Z,ce),ze=new Zm(R,Z,ce),ce.programs=q.programs,v.capabilities=$,v.extensions=Z,v.properties=ne,v.renderLists=Y,v.shadowMap=Ae,v.state=j,v.info=ce}U();const ue=new Ng(v,R);this.xr=ue,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=Z.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Z.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(X,K,!1))},this.getSize=function(b){return b.set(X,K)},this.setSize=function(b,N,k=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,K=N,t.width=Math.floor(b*W),t.height=Math.floor(N*W),k===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(X*W,K*W).floor()},this.setDrawingBufferSize=function(b,N,k){X=b,K=N,W=k,t.width=Math.floor(b*k),t.height=Math.floor(N*k),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(be)},this.setViewport=function(b,N,k,H){b.isVector4?be.set(b.x,b.y,b.z,b.w):be.set(b,N,k,H),j.viewport(D.copy(be).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(Ge)},this.setScissor=function(b,N,k,H){b.isVector4?Ge.set(b.x,b.y,b.z,b.w):Ge.set(b,N,k,H),j.scissor(F.copy(Ge).multiplyScalar(W).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(b){j.setScissorTest(Ze=b)},this.setOpaqueSort=function(b){he=b},this.setTransparentSort=function(b){_e=b},this.getClearColor=function(b){return b.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,k=!0){let H=0;if(b){let O=!1;if(L!==null){const le=L.texture.format;O=le===h0||le===u0||le===c0}if(O){const le=L.texture.type,xe=le===Rn||le===Ti||le===Hr||le===Vr||le===a0||le===l0,Te=Ce.getClearColor(),Ee=Ce.getClearAlpha(),Be=Te.r,He=Te.g,Ne=Te.b;xe?(g[0]=Be,g[1]=He,g[2]=Ne,g[3]=Ee,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Be,_[1]=He,_[2]=Ne,_[3]=Ee,R.clearBufferiv(R.COLOR,0,_))}else H|=R.COLOR_BUFFER_BIT}N&&(H|=R.DEPTH_BUFFER_BIT),k&&(H|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Ce.dispose(),Y.dispose(),Pe.dispose(),ne.dispose(),Ie.dispose(),Ue.dispose(),B.dispose(),ve.dispose(),Ye.dispose(),q.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",xn),ue.removeEventListener("sessionend",F0),si.stop()};function me(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const b=ce.autoReset,N=Ae.enabled,k=Ae.autoUpdate,H=Ae.needsUpdate,O=Ae.type;U(),ce.autoReset=b,Ae.enabled=N,Ae.autoUpdate=k,Ae.needsUpdate=H,Ae.type=O}function ae(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ee(b){const N=b.target;N.removeEventListener("dispose",ee),Re(N)}function Re(b){Xe(b),ne.remove(b)}function Xe(b){const N=ne.get(b).programs;N!==void 0&&(N.forEach(function(k){q.releaseProgram(k)}),b.isShaderMaterial&&q.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,k,H,O,le){N===null&&(N=pe);const xe=O.isMesh&&O.matrixWorld.determinant()<0,Te=Su(b,N,k,H,O);j.setMaterial(H,xe);let Ee=k.index,Be=1;if(H.wireframe===!0){if(Ee=x.getWireframeAttribute(k),Ee===void 0)return;Be=2}const He=k.drawRange,Ne=k.attributes.position;let Qe=He.start*Be,ut=(He.start+He.count)*Be;le!==null&&(Qe=Math.max(Qe,le.start*Be),ut=Math.min(ut,(le.start+le.count)*Be)),Ee!==null?(Qe=Math.max(Qe,0),ut=Math.min(ut,Ee.count)):Ne!=null&&(Qe=Math.max(Qe,0),ut=Math.min(ut,Ne.count));const Mt=ut-Qe;if(Mt<0||Mt===1/0)return;ve.setup(O,H,Te,k,Ee);let _t,pt=ye;if(Ee!==null&&(_t=A.get(Ee),pt=ze,pt.setIndex(_t)),O.isMesh)H.wireframe===!0?(j.setLineWidth(H.wireframeLinewidth*nt()),pt.setMode(R.LINES)):pt.setMode(R.TRIANGLES);else if(O.isLine){let Fe=H.linewidth;Fe===void 0&&(Fe=1),j.setLineWidth(Fe*nt()),O.isLineSegments?pt.setMode(R.LINES):O.isLineLoop?pt.setMode(R.LINE_LOOP):pt.setMode(R.LINE_STRIP)}else O.isPoints?pt.setMode(R.POINTS):O.isSprite&&pt.setMode(R.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Yr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))pt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Fe=O._multiDrawStarts,xt=O._multiDrawCounts,st=O._multiDrawCount,jt=Ee?A.get(Ee).bytesPerElement:1,Di=ne.get(H).currentProgram.getUniforms();for(let $t=0;$t<st;$t++)Di.setValue(R,"_gl_DrawID",$t),pt.render(Fe[$t]/jt,xt[$t])}else if(O.isInstancedMesh)pt.renderInstances(Qe,Mt,O.count);else if(k.isInstancedBufferGeometry){const Fe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,xt=Math.min(k.instanceCount,Fe);pt.renderInstances(Qe,Mt,xt)}else pt.render(Qe,Mt)};function gt(b,N,k){b.transparent===!0&&b.side===bn&&b.forceSinglePass===!1?(b.side=qt,b.needsUpdate=!0,os(b,N,k),b.side=Wn,b.needsUpdate=!0,os(b,N,k),b.side=bn):os(b,N,k)}this.compile=function(b,N,k=null){k===null&&(k=b),d=Pe.get(k),d.init(N),y.push(d),k.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),b!==k&&b.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();const H=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const le=O.material;if(le)if(Array.isArray(le))for(let xe=0;xe<le.length;xe++){const Te=le[xe];gt(Te,k,O),H.add(Te)}else gt(le,k,O),H.add(le)}),d=y.pop(),H},this.compileAsync=function(b,N,k=null){const H=this.compile(b,N,k);return new Promise(O=>{function le(){if(H.forEach(function(xe){ne.get(xe).currentProgram.isReady()&&H.delete(xe)}),H.size===0){O(b);return}setTimeout(le,10)}Z.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let lt=null;function Dn(b){lt&&lt(b)}function xn(){si.stop()}function F0(){si.start()}const si=new Zc;si.setAnimationLoop(Dn),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(b){lt=b,ue.setAnimationLoop(b),b===null?si.stop():si.start()},ue.addEventListener("sessionstart",xn),ue.addEventListener("sessionend",F0),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(N),N=ue.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,N,L),d=Pe.get(b,y.length),d.init(N),y.push(d),te.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),rt.setFromProjectionMatrix(te,wn,N.reversedDepth),J=this.localClippingEnabled,tt=fe.init(this.clippingPlanes,J),p=Y.get(b,M.length),p.init(),M.push(p),ue.enabled===!0&&ue.isPresenting===!0){const le=v.xr.getDepthSensingMesh();le!==null&&ho(le,N,-1/0,v.sortObjects)}ho(b,N,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(he,_e),We=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,We&&Ce.addToRenderList(p,b),this.info.render.frame++,tt===!0&&fe.beginShadows();const k=d.state.shadowsArray;Ae.render(k,b,N),tt===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=p.opaque,O=p.transmissive;if(d.setupLights(),N.isArrayCamera){const le=N.cameras;if(O.length>0)for(let xe=0,Te=le.length;xe<Te;xe++){const Ee=le[xe];z0(H,O,b,Ee)}We&&Ce.render(b);for(let xe=0,Te=le.length;xe<Te;xe++){const Ee=le[xe];B0(p,b,Ee,Ee.viewport)}}else O.length>0&&z0(H,O,b,N),We&&Ce.render(b),B0(p,b,N);L!==null&&T===0&&(se.updateMultisampleRenderTarget(L),se.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(v,b,N),ve.resetDefaultState(),w=-1,E=null,y.pop(),y.length>0?(d=y[y.length-1],tt===!0&&fe.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function ho(b,N,k,H){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||rt.intersectsSprite(b)){H&&de.setFromMatrixPosition(b.matrixWorld).applyMatrix4(te);const xe=B.update(b),Te=b.material;Te.visible&&p.push(b,xe,Te,k,de.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||rt.intersectsObject(b))){const xe=B.update(b),Te=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),de.copy(b.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),de.copy(xe.boundingSphere.center)),de.applyMatrix4(b.matrixWorld).applyMatrix4(te)),Array.isArray(Te)){const Ee=xe.groups;for(let Be=0,He=Ee.length;Be<He;Be++){const Ne=Ee[Be],Qe=Te[Ne.materialIndex];Qe&&Qe.visible&&p.push(b,xe,Qe,k,de.z,Ne)}}else Te.visible&&p.push(b,xe,Te,k,de.z,null)}}const le=b.children;for(let xe=0,Te=le.length;xe<Te;xe++)ho(le[xe],N,k,H)}function B0(b,N,k,H){const O=b.opaque,le=b.transmissive,xe=b.transparent;d.setupLightsView(k),tt===!0&&fe.setGlobalState(v.clippingPlanes,k),H&&j.viewport(D.copy(H)),O.length>0&&ss(O,N,k),le.length>0&&ss(le,N,k),xe.length>0&&ss(xe,N,k),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function z0(b,N,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new Ci(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?es:Rn,minFilter:bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const le=d.state.transmissionRenderTarget[H.id],xe=H.viewport||D;le.setSize(xe.z*v.transmissionResolutionScale,xe.w*v.transmissionResolutionScale);const Te=v.getRenderTarget(),Ee=v.getActiveCubeFace(),Be=v.getActiveMipmapLevel();v.setRenderTarget(le),v.getClearColor(V),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),We&&Ce.render(k);const He=v.toneMapping;v.toneMapping=ti;const Ne=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),tt===!0&&fe.setGlobalState(v.clippingPlanes,H),ss(b,k,H),se.updateMultisampleRenderTarget(le),se.updateRenderTargetMipmap(le),Z.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ut=0,Mt=N.length;ut<Mt;ut++){const _t=N[ut],pt=_t.object,Fe=_t.geometry,xt=_t.material,st=_t.group;if(xt.side===bn&&pt.layers.test(H.layers)){const jt=xt.side;xt.side=qt,xt.needsUpdate=!0,k0(pt,k,H,Fe,xt,st),xt.side=jt,xt.needsUpdate=!0,Qe=!0}}Qe===!0&&(se.updateMultisampleRenderTarget(le),se.updateRenderTargetMipmap(le))}v.setRenderTarget(Te,Ee,Be),v.setClearColor(V,G),Ne!==void 0&&(H.viewport=Ne),v.toneMapping=He}function ss(b,N,k){const H=N.isScene===!0?N.overrideMaterial:null;for(let O=0,le=b.length;O<le;O++){const xe=b[O],Te=xe.object,Ee=xe.geometry,Be=xe.group;let He=xe.material;He.allowOverride===!0&&H!==null&&(He=H),Te.layers.test(k.layers)&&k0(Te,N,k,Ee,He,Be)}}function k0(b,N,k,H,O,le){b.onBeforeRender(v,N,k,H,O,le),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(v,N,k,H,b,le),O.transparent===!0&&O.side===bn&&O.forceSinglePass===!1?(O.side=qt,O.needsUpdate=!0,v.renderBufferDirect(k,N,H,O,b,le),O.side=Wn,O.needsUpdate=!0,v.renderBufferDirect(k,N,H,O,b,le),O.side=bn):v.renderBufferDirect(k,N,H,O,b,le),b.onAfterRender(v,N,k,H,O,le)}function os(b,N,k){N.isScene!==!0&&(N=pe);const H=ne.get(b),O=d.state.lights,le=d.state.shadowsArray,xe=O.state.version,Te=q.getParameters(b,O.state,le,N,k),Ee=q.getProgramCacheKey(Te);let Be=H.programs;H.environment=b.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(b.isMeshStandardMaterial?Ue:Ie).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Be===void 0&&(b.addEventListener("dispose",ee),Be=new Map,H.programs=Be);let He=Be.get(Ee);if(He!==void 0){if(H.currentProgram===He&&H.lightsStateVersion===xe)return V0(b,Te),He}else Te.uniforms=q.getUniforms(b),b.onBeforeCompile(Te,v),He=q.acquireProgram(Te,Ee),Be.set(Ee,He),H.uniforms=Te.uniforms;const Ne=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ne.clippingPlanes=fe.uniform),V0(b,Te),H.needsLights=bu(b),H.lightsStateVersion=xe,H.needsLights&&(Ne.ambientLightColor.value=O.state.ambient,Ne.lightProbe.value=O.state.probe,Ne.directionalLights.value=O.state.directional,Ne.directionalLightShadows.value=O.state.directionalShadow,Ne.spotLights.value=O.state.spot,Ne.spotLightShadows.value=O.state.spotShadow,Ne.rectAreaLights.value=O.state.rectArea,Ne.ltc_1.value=O.state.rectAreaLTC1,Ne.ltc_2.value=O.state.rectAreaLTC2,Ne.pointLights.value=O.state.point,Ne.pointLightShadows.value=O.state.pointShadow,Ne.hemisphereLights.value=O.state.hemi,Ne.directionalShadowMap.value=O.state.directionalShadowMap,Ne.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ne.spotShadowMap.value=O.state.spotShadowMap,Ne.spotLightMatrix.value=O.state.spotLightMatrix,Ne.spotLightMap.value=O.state.spotLightMap,Ne.pointShadowMap.value=O.state.pointShadowMap,Ne.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=He,H.uniformsList=null,He}function H0(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Ws.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function V0(b,N){const k=ne.get(b);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function Su(b,N,k,H,O){N.isScene!==!0&&(N=pe),se.resetTextureUnits();const le=N.fog,xe=H.isMeshStandardMaterial?N.environment:null,Te=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:cr,Ee=(H.isMeshStandardMaterial?Ue:Ie).get(H.envMap||xe),Be=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,He=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ne=!!k.morphAttributes.position,Qe=!!k.morphAttributes.normal,ut=!!k.morphAttributes.color;let Mt=ti;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Mt=v.toneMapping);const _t=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,pt=_t!==void 0?_t.length:0,Fe=ne.get(H),xt=d.state.lights;if(tt===!0&&(J===!0||b!==E)){const Ht=b===E&&H.id===w;fe.setState(H,b,Ht)}let st=!1;H.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==xt.state.version||Fe.outputColorSpace!==Te||O.isBatchedMesh&&Fe.batching===!1||!O.isBatchedMesh&&Fe.batching===!0||O.isBatchedMesh&&Fe.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Fe.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Fe.instancing===!1||!O.isInstancedMesh&&Fe.instancing===!0||O.isSkinnedMesh&&Fe.skinning===!1||!O.isSkinnedMesh&&Fe.skinning===!0||O.isInstancedMesh&&Fe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Fe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Fe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Fe.instancingMorph===!1&&O.morphTexture!==null||Fe.envMap!==Ee||H.fog===!0&&Fe.fog!==le||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==fe.numPlanes||Fe.numIntersection!==fe.numIntersection)||Fe.vertexAlphas!==Be||Fe.vertexTangents!==He||Fe.morphTargets!==Ne||Fe.morphNormals!==Qe||Fe.morphColors!==ut||Fe.toneMapping!==Mt||Fe.morphTargetsCount!==pt)&&(st=!0):(st=!0,Fe.__version=H.version);let jt=Fe.currentProgram;st===!0&&(jt=os(H,N,O));let Di=!1,$t=!1,gr=!1;const yt=jt.getUniforms(),tn=Fe.uniforms;if(j.useProgram(jt.program)&&(Di=!0,$t=!0,gr=!0),H.id!==w&&(w=H.id,$t=!0),Di||E!==b){j.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),yt.setValue(R,"projectionMatrix",b.projectionMatrix),yt.setValue(R,"viewMatrix",b.matrixWorldInverse);const Wt=yt.map.cameraPosition;Wt!==void 0&&Wt.setValue(R,Se.setFromMatrixPosition(b.matrixWorld)),$.logarithmicDepthBuffer&&yt.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&yt.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,$t=!0,gr=!0)}if(O.isSkinnedMesh){yt.setOptional(R,O,"bindMatrix"),yt.setOptional(R,O,"bindMatrixInverse");const Ht=O.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),yt.setValue(R,"boneTexture",Ht.boneTexture,se))}O.isBatchedMesh&&(yt.setOptional(R,O,"batchingTexture"),yt.setValue(R,"batchingTexture",O._matricesTexture,se),yt.setOptional(R,O,"batchingIdTexture"),yt.setValue(R,"batchingIdTexture",O._indirectTexture,se),yt.setOptional(R,O,"batchingColorTexture"),O._colorsTexture!==null&&yt.setValue(R,"batchingColorTexture",O._colorsTexture,se));const nn=k.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&oe.update(O,k,jt),($t||Fe.receiveShadow!==O.receiveShadow)&&(Fe.receiveShadow=O.receiveShadow,yt.setValue(R,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(tn.envMap.value=Ee,tn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(tn.envMapIntensity.value=N.environmentIntensity),$t&&(yt.setValue(R,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&Mu(tn,gr),le&&H.fog===!0&&ie.refreshFogUniforms(tn,le),ie.refreshMaterialUniforms(tn,H,W,K,d.state.transmissionRenderTarget[b.id]),Ws.upload(R,H0(Fe),tn,se)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ws.upload(R,H0(Fe),tn,se),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&yt.setValue(R,"center",O.center),yt.setValue(R,"modelViewMatrix",O.modelViewMatrix),yt.setValue(R,"normalMatrix",O.normalMatrix),yt.setValue(R,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ht=H.uniformsGroups;for(let Wt=0,fo=Ht.length;Wt<fo;Wt++){const oi=Ht[Wt];Ye.update(oi,jt),Ye.bind(oi,jt)}}return jt}function Mu(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function bu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,N,k){const H=ne.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ne.get(b.texture).__webglTexture=N,ne.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:k,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){const k=ne.get(b);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0};const Eu=R.createFramebuffer();this.setRenderTarget=function(b,N=0,k=0){L=b,S=N,T=k;let H=!0,O=null,le=!1,xe=!1;if(b){const Ee=ne.get(b);if(Ee.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(R.FRAMEBUFFER,null),H=!1;else if(Ee.__webglFramebuffer===void 0)se.setupRenderTarget(b);else if(Ee.__hasExternalTextures)se.rebindTextures(b,ne.get(b.texture).__webglTexture,ne.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ne=b.depthTexture;if(Ee.__boundDepthTexture!==Ne){if(Ne!==null&&ne.has(Ne)&&(b.width!==Ne.image.width||b.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(b)}}const Be=b.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(xe=!0);const He=ne.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(He[N])?O=He[N][k]:O=He[N],le=!0):b.samples>0&&se.useMultisampledRTT(b)===!1?O=ne.get(b).__webglMultisampledFramebuffer:Array.isArray(He)?O=He[k]:O=He,D.copy(b.viewport),F.copy(b.scissor),z=b.scissorTest}else D.copy(be).multiplyScalar(W).floor(),F.copy(Ge).multiplyScalar(W).floor(),z=Ze;if(k!==0&&(O=Eu),j.bindFramebuffer(R.FRAMEBUFFER,O)&&H&&j.drawBuffers(b,O),j.viewport(D),j.scissor(F),j.setScissorTest(z),le){const Ee=ne.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ee.__webglTexture,k)}else if(xe){const Ee=N;for(let Be=0;Be<b.textures.length;Be++){const He=ne.get(b.textures[Be]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Be,He.__webglTexture,k,Ee)}}else if(b!==null&&k!==0){const Ee=ne.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ee.__webglTexture,k)}w=-1},this.readRenderTargetPixels=function(b,N,k,H,O,le,xe,Te=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee){j.bindFramebuffer(R.FRAMEBUFFER,Ee);try{const Be=b.textures[Te],He=Be.format,Ne=Be.type;if(!$.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-H&&k>=0&&k<=b.height-O&&(b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Te),R.readPixels(N,k,H,O,Le.convert(He),Le.convert(Ne),le))}finally{const Be=L!==null?ne.get(L).__webglFramebuffer:null;j.bindFramebuffer(R.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(b,N,k,H,O,le,xe,Te=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee)if(N>=0&&N<=b.width-H&&k>=0&&k<=b.height-O){j.bindFramebuffer(R.FRAMEBUFFER,Ee);const Be=b.textures[Te],He=Be.format,Ne=Be.type;if(!$.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Qe),R.bufferData(R.PIXEL_PACK_BUFFER,le.byteLength,R.STREAM_READ),b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Te),R.readPixels(N,k,H,O,Le.convert(He),Le.convert(Ne),0);const ut=L!==null?ne.get(L).__webglFramebuffer:null;j.bindFramebuffer(R.FRAMEBUFFER,ut);const Mt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Rh(R,Mt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Qe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,le),R.deleteBuffer(Qe),R.deleteSync(Mt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,k=0){const H=Math.pow(2,-k),O=Math.floor(b.image.width*H),le=Math.floor(b.image.height*H),xe=N!==null?N.x:0,Te=N!==null?N.y:0;se.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,k,0,0,xe,Te,O,le),j.unbindTexture()};const wu=R.createFramebuffer(),Tu=R.createFramebuffer();this.copyTextureToTexture=function(b,N,k=null,H=null,O=0,le=null){le===null&&(O!==0?(Yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=O,O=0):le=0);let xe,Te,Ee,Be,He,Ne,Qe,ut,Mt;const _t=b.isCompressedTexture?b.mipmaps[le]:b.image;if(k!==null)xe=k.max.x-k.min.x,Te=k.max.y-k.min.y,Ee=k.isBox3?k.max.z-k.min.z:1,Be=k.min.x,He=k.min.y,Ne=k.isBox3?k.min.z:0;else{const nn=Math.pow(2,-O);xe=Math.floor(_t.width*nn),Te=Math.floor(_t.height*nn),b.isDataArrayTexture?Ee=_t.depth:b.isData3DTexture?Ee=Math.floor(_t.depth*nn):Ee=1,Be=0,He=0,Ne=0}H!==null?(Qe=H.x,ut=H.y,Mt=H.z):(Qe=0,ut=0,Mt=0);const pt=Le.convert(N.format),Fe=Le.convert(N.type);let xt;N.isData3DTexture?(se.setTexture3D(N,0),xt=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(se.setTexture2DArray(N,0),xt=R.TEXTURE_2D_ARRAY):(se.setTexture2D(N,0),xt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const st=R.getParameter(R.UNPACK_ROW_LENGTH),jt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Di=R.getParameter(R.UNPACK_SKIP_PIXELS),$t=R.getParameter(R.UNPACK_SKIP_ROWS),gr=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,_t.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,_t.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Be),R.pixelStorei(R.UNPACK_SKIP_ROWS,He),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ne);const yt=b.isDataArrayTexture||b.isData3DTexture,tn=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){const nn=ne.get(b),Ht=ne.get(N),Wt=ne.get(nn.__renderTarget),fo=ne.get(Ht.__renderTarget);j.bindFramebuffer(R.READ_FRAMEBUFFER,Wt.__webglFramebuffer),j.bindFramebuffer(R.DRAW_FRAMEBUFFER,fo.__webglFramebuffer);for(let oi=0;oi<Ee;oi++)yt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ne.get(b).__webglTexture,O,Ne+oi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ne.get(N).__webglTexture,le,Mt+oi)),R.blitFramebuffer(Be,He,xe,Te,Qe,ut,xe,Te,R.DEPTH_BUFFER_BIT,R.NEAREST);j.bindFramebuffer(R.READ_FRAMEBUFFER,null),j.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(O!==0||b.isRenderTargetTexture||ne.has(b)){const nn=ne.get(b),Ht=ne.get(N);j.bindFramebuffer(R.READ_FRAMEBUFFER,wu),j.bindFramebuffer(R.DRAW_FRAMEBUFFER,Tu);for(let Wt=0;Wt<Ee;Wt++)yt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,nn.__webglTexture,O,Ne+Wt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,nn.__webglTexture,O),tn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ht.__webglTexture,le,Mt+Wt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ht.__webglTexture,le),O!==0?R.blitFramebuffer(Be,He,xe,Te,Qe,ut,xe,Te,R.COLOR_BUFFER_BIT,R.NEAREST):tn?R.copyTexSubImage3D(xt,le,Qe,ut,Mt+Wt,Be,He,xe,Te):R.copyTexSubImage2D(xt,le,Qe,ut,Be,He,xe,Te);j.bindFramebuffer(R.READ_FRAMEBUFFER,null),j.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else tn?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(xt,le,Qe,ut,Mt,xe,Te,Ee,pt,Fe,_t.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(xt,le,Qe,ut,Mt,xe,Te,Ee,pt,_t.data):R.texSubImage3D(xt,le,Qe,ut,Mt,xe,Te,Ee,pt,Fe,_t):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,le,Qe,ut,xe,Te,pt,Fe,_t.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,le,Qe,ut,_t.width,_t.height,pt,_t.data):R.texSubImage2D(R.TEXTURE_2D,le,Qe,ut,xe,Te,pt,Fe,_t);R.pixelStorei(R.UNPACK_ROW_LENGTH,st),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,jt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Di),R.pixelStorei(R.UNPACK_SKIP_ROWS,$t),R.pixelStorei(R.UNPACK_SKIP_IMAGES,gr),le===0&&N.generateMipmaps&&R.generateMipmap(xt),j.unbindTexture()},this.initRenderTarget=function(b){ne.get(b).__webglFramebuffer===void 0&&se.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?se.setTextureCube(b,0):b.isData3DTexture?se.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?se.setTexture2DArray(b,0):se.setTexture2D(b,0),j.unbindTexture()},this.resetState=function(){S=0,T=0,L=null,j.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}const tc={type:"change"},w0={type:"start"},nu={type:"end"},Bs=new ns,nc=new Jn,kg=Math.cos(70*Tc.DEG2RAD),Rt=new P,Xt=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ko=1e-6;class Hg extends tf{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ir.ROTATE,MIDDLE:ir.DOLLY,RIGHT:ir.PAN},this.touches={ONE:Qi.ROTATE,TWO:Qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Ai,this._lastTargetPosition=new P,this._quat=new Ai().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rl,this._sphericalDelta=new Rl,this._scale=1,this._panOffset=new P,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new P,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Gg.bind(this),this._onPointerDown=Vg.bind(this),this._onPointerUp=Wg.bind(this),this._onContextMenu=Zg.bind(this),this._onMouseWheel=Yg.bind(this),this._onKeyDown=jg.bind(this),this._onTouchStart=$g.bind(this),this._onTouchMove=Kg.bind(this),this._onMouseDown=Xg.bind(this),this._onMouseMove=qg.bind(this),this._interceptControlDown=Jg.bind(this),this._interceptControlUp=Qg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tc),this.update(),this.state=ft.NONE}update(e=null){const t=this.object.position;Rt.copy(t).sub(this.target),Rt.applyQuaternion(this._quat),this._spherical.setFromVector3(Rt),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Xt:i>Math.PI&&(i-=Xt),r<-Math.PI?r+=Xt:r>Math.PI&&(r-=Xt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Rt.setFromSpherical(this._spherical),Rt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Rt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Rt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Rt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Bs.origin.copy(this.object.position),Bs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bs.direction))<kg?this.object.lookAt(this.target):(nc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bs.intersectPlane(nc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ko||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ko||this._lastTargetPosition.distanceToSquared(this.target)>Ko?(this.dispatchEvent(tc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xt/60*this.autoRotateSpeed*e:Xt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Rt.setFromMatrixColumn(t,0),Rt.multiplyScalar(-e),this._panOffset.add(Rt)}_panUp(e,t){this.screenSpacePanning===!0?Rt.setFromMatrixColumn(t,1):(Rt.setFromMatrixColumn(t,0),Rt.crossVectors(this.object.up,Rt)),Rt.multiplyScalar(e),this._panOffset.add(Rt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Rt.copy(r).sub(this.target);let s=Rt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Vg(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Gg(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Wg(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nu),this.state=ft.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Xg(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ir.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ft.DOLLY;break;case ir.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ft.ROTATE}break;case ir.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(w0)}function qg(n){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Yg(n){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(n.preventDefault(),this.dispatchEvent(w0),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(nu))}function jg(n){this.enabled!==!1&&this._handleKeyDown(n)}function $g(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ft.TOUCH_ROTATE;break;case Qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case Qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ft.TOUCH_DOLLY_PAN;break;case Qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(w0)}function Kg(n){switch(this._trackPointer(n),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ft.NONE}}function Zg(n){this.enabled!==!1&&n.preventDefault()}function Jg(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qg(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var T0=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)},I=(n,e,t)=>(T0(n,e,"read from private field"),t?t.call(n):e.get(n)),Ke=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},Nt=(n,e,t,i)=>(T0(n,e,"write to private field"),e.set(n,t),t),e2=(n,e,t,i)=>({set _(r){Nt(n,e,r)},get _(){return I(n,e,i)}}),et=(n,e,t)=>(T0(n,e,"access private method"),t),it=new Uint8Array(8),Pn=new DataView(it.buffer),Pt=n=>[(n%256+256)%256],at=n=>(Pn.setUint16(0,n,!1),[it[0],it[1]]),t2=n=>(Pn.setInt16(0,n,!1),[it[0],it[1]]),iu=n=>(Pn.setUint32(0,n,!1),[it[1],it[2],it[3]]),Me=n=>(Pn.setUint32(0,n,!1),[it[0],it[1],it[2],it[3]]),n2=n=>(Pn.setInt32(0,n,!1),[it[0],it[1],it[2],it[3]]),Pi=n=>(Pn.setUint32(0,Math.floor(n/2**32),!1),Pn.setUint32(4,n,!1),[it[0],it[1],it[2],it[3],it[4],it[5],it[6],it[7]]),A0=n=>(Pn.setInt16(0,2**8*n,!1),[it[0],it[1]]),Mn=n=>(Pn.setInt32(0,2**16*n,!1),[it[0],it[1],it[2],it[3]]),Zo=n=>(Pn.setInt32(0,2**30*n,!1),[it[0],it[1],it[2],it[3]]),on=(n,e=!1)=>{let t=Array(n.length).fill(null).map((i,r)=>n.charCodeAt(r));return e&&t.push(0),t},no=n=>n&&n[n.length-1],C0=n=>{let e;for(let t of n)(!e||t.presentationTimestamp>e.presentationTimestamp)&&(e=t);return e},Cn=(n,e,t=!0)=>{let i=n*e;return t?Math.round(i):i},ru=n=>{let e=n*(Math.PI/180),t=Math.cos(e),i=Math.sin(e);return[t,i,0,-i,t,0,0,0,1]},su=ru(0),ou=n=>[Mn(n[0]),Mn(n[1]),Zo(n[2]),Mn(n[3]),Mn(n[4]),Zo(n[5]),Mn(n[6]),Mn(n[7]),Zo(n[8])],Or=n=>!n||typeof n!="object"?n:Array.isArray(n)?n.map(Or):Object.fromEntries(Object.entries(n).map(([e,t])=>[e,Or(t)])),dr=n=>n>=0&&n<2**32,Ct=(n,e,t)=>({type:n,contents:e&&new Uint8Array(e.flat(10)),children:t}),vt=(n,e,t,i,r)=>Ct(n,[Pt(e),iu(t),i??[]],r),i2=n=>{let e=512;return n.fragmented?Ct("ftyp",[on("iso5"),Me(e),on("iso5"),on("iso6"),on("mp41")]):Ct("ftyp",[on("isom"),Me(e),on("isom"),n.holdsAvc?on("avc1"):[],on("mp41")])},$a=n=>({type:"mdat",largeSize:n}),r2=n=>({type:"free",size:n}),Xs=(n,e,t=!1)=>Ct("moov",null,[s2(e,n),...n.map(i=>o2(i,e)),t?F2(n):null]),s2=(n,e)=>{let t=Cn(Math.max(0,...e.filter(o=>o.samples.length>0).map(o=>{const a=C0(o.samples);return a.presentationTimestamp+a.duration})),Ja),i=Math.max(...e.map(o=>o.id))+1,r=!dr(n)||!dr(t),s=r?Pi:Me;return vt("mvhd",+r,0,[s(n),s(n),Me(Ja),s(t),Mn(1),A0(1),Array(10).fill(0),ou(su),Array(24).fill(0),Me(i)])},o2=(n,e)=>Ct("trak",null,[a2(n,e),l2(n,e)]),a2=(n,e)=>{let t=C0(n.samples),i=Cn(t?t.presentationTimestamp+t.duration:0,Ja),r=!dr(e)||!dr(i),s=r?Pi:Me,o;return n.info.type==="video"?o=typeof n.info.rotation=="number"?ru(n.info.rotation):n.info.rotation:o=su,vt("tkhd",+r,3,[s(e),s(e),Me(n.id),Me(0),s(i),Array(8).fill(0),at(0),at(0),A0(n.info.type==="audio"?1:0),at(0),ou(o),Mn(n.info.type==="video"?n.info.width:0),Mn(n.info.type==="video"?n.info.height:0)])},l2=(n,e)=>Ct("mdia",null,[c2(n,e),u2(n.info.type==="video"?"vide":"soun"),h2(n)]),c2=(n,e)=>{let t=C0(n.samples),i=Cn(t?t.presentationTimestamp+t.duration:0,n.timescale),r=!dr(e)||!dr(i),s=r?Pi:Me;return vt("mdhd",+r,0,[s(e),s(e),Me(n.timescale),s(i),at(21956),at(0)])},u2=n=>vt("hdlr",0,0,[on("mhlr"),on(n),Me(0),Me(0),Me(0),on("mp4-muxer-hdlr",!0)]),h2=n=>Ct("minf",null,[n.info.type==="video"?d2():f2(),m2(),_2(n)]),d2=()=>vt("vmhd",0,1,[at(0),at(0),at(0),at(0)]),f2=()=>vt("smhd",0,0,[at(0),at(0)]),m2=()=>Ct("dinf",null,[p2()]),p2=()=>vt("dref",0,0,[Me(1)],[g2()]),g2=()=>vt("url ",0,1),_2=n=>{const e=n.compositionTimeOffsetTable.length>1||n.compositionTimeOffsetTable.some(t=>t.sampleCompositionTimeOffset!==0);return Ct("stbl",null,[v2(n),L2(n),D2(n),I2(n),U2(n),N2(n),e?O2(n):null])},v2=n=>vt("stsd",0,0,[Me(1)],[n.info.type==="video"?x2(Y2[n.info.codec],n):C2($2[n.info.codec],n)]),x2=(n,e)=>Ct(n,[Array(6).fill(0),at(1),at(0),at(0),Array(12).fill(0),at(e.info.width),at(e.info.height),Me(4718592),Me(4718592),Me(0),at(1),Array(32).fill(0),at(24),t2(65535)],[j2[e.info.codec](e),e.info.decoderConfig.colorSpace?b2(e):null]),y2={bt709:1,bt470bg:5,smpte170m:6},S2={bt709:1,smpte170m:6,"iec61966-2-1":13},M2={rgb:0,bt709:1,bt470bg:5,smpte170m:6},b2=n=>Ct("colr",[on("nclx"),at(y2[n.info.decoderConfig.colorSpace.primaries]),at(S2[n.info.decoderConfig.colorSpace.transfer]),at(M2[n.info.decoderConfig.colorSpace.matrix]),Pt((n.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),E2=n=>n.info.decoderConfig&&Ct("avcC",[...new Uint8Array(n.info.decoderConfig.description)]),w2=n=>n.info.decoderConfig&&Ct("hvcC",[...new Uint8Array(n.info.decoderConfig.description)]),T2=n=>{if(!n.info.decoderConfig)return null;let e=n.info.decoderConfig;if(!e.colorSpace)throw new Error("'colorSpace' is required in the decoder config for VP9.");let t=e.codec.split("."),i=Number(t[1]),r=Number(t[2]),a=(Number(t[3])<<4)+(0<<1)+Number(e.colorSpace.fullRange);return vt("vpcC",1,0,[Pt(i),Pt(r),Pt(a),Pt(2),Pt(2),Pt(2),at(0)])},A2=()=>{let t=(1<<7)+1;return Ct("av1C",[t,0,0,0])},C2=(n,e)=>Ct(n,[Array(6).fill(0),at(1),at(0),at(0),Me(0),at(e.info.numberOfChannels),at(16),at(0),at(0),Mn(e.info.sampleRate)],[K2[e.info.codec](e)]),R2=n=>{let e=new Uint8Array(n.info.decoderConfig.description);return vt("esds",0,0,[Me(58753152),Pt(32+e.byteLength),at(1),Pt(0),Me(75530368),Pt(18+e.byteLength),Pt(64),Pt(21),iu(0),Me(130071),Me(130071),Me(92307584),Pt(e.byteLength),...e,Me(109084800),Pt(1),Pt(2)])},P2=n=>{let e=3840,t=0;const i=n.info.decoderConfig?.description;if(i){if(i.byteLength<18)throw new TypeError("Invalid decoder description provided for Opus; must be at least 18 bytes long.");const r=ArrayBuffer.isView(i)?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(i);e=r.getUint16(10,!0),t=r.getInt16(14,!0)}return Ct("dOps",[Pt(0),Pt(n.info.numberOfChannels),at(e),Me(n.info.sampleRate),A0(t),Pt(0)])},L2=n=>vt("stts",0,0,[Me(n.timeToSampleTable.length),n.timeToSampleTable.map(e=>[Me(e.sampleCount),Me(e.sampleDelta)])]),D2=n=>{if(n.samples.every(t=>t.type==="key"))return null;let e=[...n.samples.entries()].filter(([,t])=>t.type==="key");return vt("stss",0,0,[Me(e.length),e.map(([t])=>Me(t+1))])},I2=n=>vt("stsc",0,0,[Me(n.compactlyCodedChunkTable.length),n.compactlyCodedChunkTable.map(e=>[Me(e.firstChunk),Me(e.samplesPerChunk),Me(1)])]),U2=n=>vt("stsz",0,0,[Me(0),Me(n.samples.length),n.samples.map(e=>Me(e.size))]),N2=n=>n.finalizedChunks.length>0&&no(n.finalizedChunks).offset>=2**32?vt("co64",0,0,[Me(n.finalizedChunks.length),n.finalizedChunks.map(e=>Pi(e.offset))]):vt("stco",0,0,[Me(n.finalizedChunks.length),n.finalizedChunks.map(e=>Me(e.offset))]),O2=n=>vt("ctts",0,0,[Me(n.compositionTimeOffsetTable.length),n.compositionTimeOffsetTable.map(e=>[Me(e.sampleCount),Me(e.sampleCompositionTimeOffset)])]),F2=n=>Ct("mvex",null,n.map(B2)),B2=n=>vt("trex",0,0,[Me(n.id),Me(1),Me(0),Me(0),Me(0)]),ic=(n,e)=>Ct("moof",null,[z2(n),...e.map(k2)]),z2=n=>vt("mfhd",0,0,[Me(n)]),au=n=>{let e=0,t=0,i=0,r=0,s=n.type==="delta";return t|=+s,s?e|=1:e|=2,e<<24|t<<16|i<<8|r},k2=n=>Ct("traf",null,[H2(n),V2(n),G2(n)]),H2=n=>{let e=0;e|=8,e|=16,e|=32,e|=131072;let t=n.currentChunk.samples[1]??n.currentChunk.samples[0],i={duration:t.timescaleUnitsToNextSample,size:t.size,flags:au(t)};return vt("tfhd",0,e,[Me(n.id),Me(i.duration),Me(i.size),Me(i.flags)])},V2=n=>vt("tfdt",1,0,[Pi(Cn(n.currentChunk.startTimestamp,n.timescale))]),G2=n=>{let e=n.currentChunk.samples.map(_=>_.timescaleUnitsToNextSample),t=n.currentChunk.samples.map(_=>_.size),i=n.currentChunk.samples.map(au),r=n.currentChunk.samples.map(_=>Cn(_.presentationTimestamp-_.decodeTimestamp,n.timescale)),s=new Set(e),o=new Set(t),a=new Set(i),l=new Set(r),c=a.size===2&&i[0]!==i[1],u=s.size>1,h=o.size>1,f=!c&&a.size>1,m=l.size>1||[...l].some(_=>_!==0),g=0;return g|=1,g|=4*+c,g|=256*+u,g|=512*+h,g|=1024*+f,g|=2048*+m,vt("trun",1,g,[Me(n.currentChunk.samples.length),Me(n.currentChunk.offset-n.currentChunk.moofOffset||0),c?Me(i[0]):[],n.currentChunk.samples.map((_,p)=>[u?Me(e[p]):[],h?Me(t[p]):[],f?Me(i[p]):[],m?n2(r[p]):[]])])},W2=n=>Ct("mfra",null,[...n.map(X2),q2()]),X2=(n,e)=>vt("tfra",1,0,[Me(n.id),Me(63),Me(n.finalizedChunks.length),n.finalizedChunks.map(i=>[Pi(Cn(i.startTimestamp,n.timescale)),Pi(i.moofOffset),Me(e+1),Me(1),Me(1)])]),q2=()=>vt("mfro",0,0,[Me(0)]),Y2={avc:"avc1",hevc:"hvc1",vp9:"vp09",av1:"av01"},j2={avc:E2,hevc:w2,vp9:T2,av1:A2},$2={aac:"mp4a",opus:"Opus"},K2={aac:R2,opus:P2},uo=class{},lu=class extends uo{constructor(){super(...arguments),this.buffer=null}},cu=class extends uo{constructor(n){if(super(),this.options=n,typeof n!="object")throw new TypeError("StreamTarget requires an options object to be passed to its constructor.");if(n.onData){if(typeof n.onData!="function")throw new TypeError("options.onData, when provided, must be a function.");if(n.onData.length<2)throw new TypeError("options.onData, when provided, must be a function that takes in at least two arguments (data and position). Ignoring the position argument, which specifies the byte offset at which the data is to be written, can lead to broken outputs.")}if(n.chunked!==void 0&&typeof n.chunked!="boolean")throw new TypeError("options.chunked, when provided, must be a boolean.");if(n.chunkSize!==void 0&&(!Number.isInteger(n.chunkSize)||n.chunkSize<1024))throw new TypeError("options.chunkSize, when provided, must be an integer and not smaller than 1024.")}},Z2=class extends uo{constructor(n,e){if(super(),this.stream=n,this.options=e,!(n instanceof FileSystemWritableFileStream))throw new TypeError("FileSystemWritableFileStreamTarget requires a FileSystemWritableFileStream instance.");if(e!==void 0&&typeof e!="object")throw new TypeError("FileSystemWritableFileStreamTarget's options, when provided, must be an object.");if(e&&e.chunkSize!==void 0&&(!Number.isInteger(e.chunkSize)||e.chunkSize<=0))throw new TypeError("options.chunkSize, when provided, must be a positive integer")}},gi,Ji,uu=class{constructor(){this.pos=0,Ke(this,gi,new Uint8Array(8)),Ke(this,Ji,new DataView(I(this,gi).buffer)),this.offsets=new WeakMap}seek(n){this.pos=n}writeU32(n){I(this,Ji).setUint32(0,n,!1),this.write(I(this,gi).subarray(0,4))}writeU64(n){I(this,Ji).setUint32(0,Math.floor(n/2**32),!1),I(this,Ji).setUint32(4,n,!1),this.write(I(this,gi).subarray(0,8))}writeAscii(n){for(let e=0;e<n.length;e++)I(this,Ji).setUint8(e%8,n.charCodeAt(e)),e%8===7&&this.write(I(this,gi));n.length%8!==0&&this.write(I(this,gi).subarray(0,n.length%8))}writeBox(n){if(this.offsets.set(n,this.pos),n.contents&&!n.children)this.writeBoxHeader(n,n.size??n.contents.byteLength+8),this.write(n.contents);else{let e=this.pos;if(this.writeBoxHeader(n,0),n.contents&&this.write(n.contents),n.children)for(let r of n.children)r&&this.writeBox(r);let t=this.pos,i=n.size??t-e;this.seek(e),this.writeBoxHeader(n,i),this.seek(t)}}writeBoxHeader(n,e){this.writeU32(n.largeSize?1:e),this.writeAscii(n.type),n.largeSize&&this.writeU64(e)}measureBoxHeader(n){return 8+(n.largeSize?8:0)}patchBox(n){let e=this.pos;this.seek(this.offsets.get(n)),this.writeBox(n),this.seek(e)}measureBox(n){if(n.contents&&!n.children)return this.measureBoxHeader(n)+n.contents.byteLength;{let e=this.measureBoxHeader(n);if(n.contents&&(e+=n.contents.byteLength),n.children)for(let t of n.children)t&&(e+=this.measureBox(t));return e}}};gi=new WeakMap;Ji=new WeakMap;var qs,wi,Qr,Cr,Ys,Ka,J2=class extends uu{constructor(n){super(),Ke(this,Ys),Ke(this,qs,void 0),Ke(this,wi,new ArrayBuffer(2**16)),Ke(this,Qr,new Uint8Array(I(this,wi))),Ke(this,Cr,0),Nt(this,qs,n)}write(n){et(this,Ys,Ka).call(this,this.pos+n.byteLength),I(this,Qr).set(n,this.pos),this.pos+=n.byteLength,Nt(this,Cr,Math.max(I(this,Cr),this.pos))}finalize(){et(this,Ys,Ka).call(this,this.pos),I(this,qs).buffer=I(this,wi).slice(0,Math.max(I(this,Cr),this.pos))}};qs=new WeakMap;wi=new WeakMap;Qr=new WeakMap;Cr=new WeakMap;Ys=new WeakSet;Ka=function(n){let e=I(this,wi).byteLength;for(;e<n;)e*=2;if(e===I(this,wi).byteLength)return;let t=new ArrayBuffer(e),i=new Uint8Array(t);i.set(I(this,Qr),0),Nt(this,wi,t),Nt(this,Qr,i)};var Q2=2**24,e5=2,Fr,_i,Rr,Gn,Qt,io,Za,R0,hu,P0,du,Br,ro,L0=class extends uu{constructor(n){super(),Ke(this,io),Ke(this,R0),Ke(this,P0),Ke(this,Br),Ke(this,Fr,void 0),Ke(this,_i,[]),Ke(this,Rr,void 0),Ke(this,Gn,void 0),Ke(this,Qt,[]),Nt(this,Fr,n),Nt(this,Rr,n.options?.chunked??!1),Nt(this,Gn,n.options?.chunkSize??Q2)}write(n){I(this,_i).push({data:n.slice(),start:this.pos}),this.pos+=n.byteLength}flush(){if(I(this,_i).length===0)return;let n=[],e=[...I(this,_i)].sort((t,i)=>t.start-i.start);n.push({start:e[0].start,size:e[0].data.byteLength});for(let t=1;t<e.length;t++){let i=n[n.length-1],r=e[t];r.start<=i.start+i.size?i.size=Math.max(i.size,r.start+r.data.byteLength-i.start):n.push({start:r.start,size:r.data.byteLength})}for(let t of n){t.data=new Uint8Array(t.size);for(let i of I(this,_i))t.start<=i.start&&i.start<t.start+t.size&&t.data.set(i.data,i.start-t.start);I(this,Rr)?(et(this,io,Za).call(this,t.data,t.start),et(this,Br,ro).call(this)):I(this,Fr).options.onData?.(t.data,t.start)}I(this,_i).length=0}finalize(){I(this,Rr)&&et(this,Br,ro).call(this,!0)}};Fr=new WeakMap;_i=new WeakMap;Rr=new WeakMap;Gn=new WeakMap;Qt=new WeakMap;io=new WeakSet;Za=function(n,e){let t=I(this,Qt).findIndex(a=>a.start<=e&&e<a.start+I(this,Gn));t===-1&&(t=et(this,P0,du).call(this,e));let i=I(this,Qt)[t],r=e-i.start,s=n.subarray(0,Math.min(I(this,Gn)-r,n.byteLength));i.data.set(s,r);let o={start:r,end:r+s.byteLength};if(et(this,R0,hu).call(this,i,o),i.written[0].start===0&&i.written[0].end===I(this,Gn)&&(i.shouldFlush=!0),I(this,Qt).length>e5){for(let a=0;a<I(this,Qt).length-1;a++)I(this,Qt)[a].shouldFlush=!0;et(this,Br,ro).call(this)}s.byteLength<n.byteLength&&et(this,io,Za).call(this,n.subarray(s.byteLength),e+s.byteLength)};R0=new WeakSet;hu=function(n,e){let t=0,i=n.written.length-1,r=-1;for(;t<=i;){let s=Math.floor(t+(i-t+1)/2);n.written[s].start<=e.start?(t=s+1,r=s):i=s-1}for(n.written.splice(r+1,0,e),(r===-1||n.written[r].end<e.start)&&r++;r<n.written.length-1&&n.written[r].end>=n.written[r+1].start;)n.written[r].end=Math.max(n.written[r].end,n.written[r+1].end),n.written.splice(r+1,1)};P0=new WeakSet;du=function(n){let t={start:Math.floor(n/I(this,Gn))*I(this,Gn),data:new Uint8Array(I(this,Gn)),written:[],shouldFlush:!1};return I(this,Qt).push(t),I(this,Qt).sort((i,r)=>i.start-r.start),I(this,Qt).indexOf(t)};Br=new WeakSet;ro=function(n=!1){for(let e=0;e<I(this,Qt).length;e++){let t=I(this,Qt)[e];if(!(!t.shouldFlush&&!n)){for(let i of t.written)I(this,Fr).options.onData?.(t.data.subarray(i.start,i.end),t.start+i.start);I(this,Qt).splice(e--,1)}}};var t5=class extends L0{constructor(n){super(new cu({onData:(e,t)=>n.stream.write({type:"write",data:e,position:t}),chunked:!0,chunkSize:n.options?.chunkSize}))}},Ja=1e3,n5=["avc","hevc","vp9","av1"],i5=["aac","opus"],r5=2082844800,s5=["strict","offset","cross-track-offset"],De,ke,so,Jt,Ot,Ut,nr,sr,D0,vi,xi,zr,Qa,fu,e0,mu,I0,pu,t0,gu,U0,_u,js,n0,yn,kn,N0,vu,kr,oo,ao,O0,fr,rs,$s,i0,o5=class{constructor(n){if(Ke(this,Qa),Ke(this,e0),Ke(this,I0),Ke(this,t0),Ke(this,U0),Ke(this,js),Ke(this,yn),Ke(this,N0),Ke(this,kr),Ke(this,ao),Ke(this,fr),Ke(this,$s),Ke(this,De,void 0),Ke(this,ke,void 0),Ke(this,so,void 0),Ke(this,Jt,void 0),Ke(this,Ot,null),Ke(this,Ut,null),Ke(this,nr,Math.floor(Date.now()/1e3)+r5),Ke(this,sr,[]),Ke(this,D0,1),Ke(this,vi,[]),Ke(this,xi,[]),Ke(this,zr,!1),et(this,Qa,fu).call(this,n),n.video=Or(n.video),n.audio=Or(n.audio),n.fastStart=Or(n.fastStart),this.target=n.target,Nt(this,De,{firstTimestampBehavior:"strict",...n}),n.target instanceof lu)Nt(this,ke,new J2(n.target));else if(n.target instanceof cu)Nt(this,ke,new L0(n.target));else if(n.target instanceof Z2)Nt(this,ke,new t5(n.target));else throw new Error(`Invalid target: ${n.target}`);et(this,t0,gu).call(this),et(this,e0,mu).call(this)}addVideoChunk(n,e,t,i){if(!(n instanceof EncodedVideoChunk))throw new TypeError("addVideoChunk's first argument (sample) must be of type EncodedVideoChunk.");if(e&&typeof e!="object")throw new TypeError("addVideoChunk's second argument (meta), when provided, must be an object.");if(t!==void 0&&(!Number.isFinite(t)||t<0))throw new TypeError("addVideoChunk's third argument (timestamp), when provided, must be a non-negative real number.");if(i!==void 0&&!Number.isFinite(i))throw new TypeError("addVideoChunk's fourth argument (compositionTimeOffset), when provided, must be a real number.");let r=new Uint8Array(n.byteLength);n.copyTo(r),this.addVideoChunkRaw(r,n.type,t??n.timestamp,n.duration,e,i)}addVideoChunkRaw(n,e,t,i,r,s){if(!(n instanceof Uint8Array))throw new TypeError("addVideoChunkRaw's first argument (data) must be an instance of Uint8Array.");if(e!=="key"&&e!=="delta")throw new TypeError("addVideoChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(t)||t<0)throw new TypeError("addVideoChunkRaw's third argument (timestamp) must be a non-negative real number.");if(!Number.isFinite(i)||i<0)throw new TypeError("addVideoChunkRaw's fourth argument (duration) must be a non-negative real number.");if(r&&typeof r!="object")throw new TypeError("addVideoChunkRaw's fifth argument (meta), when provided, must be an object.");if(s!==void 0&&!Number.isFinite(s))throw new TypeError("addVideoChunkRaw's sixth argument (compositionTimeOffset), when provided, must be a real number.");if(et(this,$s,i0).call(this),!I(this,De).video)throw new Error("No video track declared.");if(typeof I(this,De).fastStart=="object"&&I(this,Ot).samples.length===I(this,De).fastStart.expectedVideoChunks)throw new Error(`Cannot add more video chunks than specified in 'fastStart' (${I(this,De).fastStart.expectedVideoChunks}).`);let o=et(this,js,n0).call(this,I(this,Ot),n,e,t,i,r,s);if(I(this,De).fastStart==="fragmented"&&I(this,Ut)){for(;I(this,xi).length>0&&I(this,xi)[0].decodeTimestamp<=o.decodeTimestamp;){let a=I(this,xi).shift();et(this,yn,kn).call(this,I(this,Ut),a)}o.decodeTimestamp<=I(this,Ut).lastDecodeTimestamp?et(this,yn,kn).call(this,I(this,Ot),o):I(this,vi).push(o)}else et(this,yn,kn).call(this,I(this,Ot),o)}addAudioChunk(n,e,t){if(!(n instanceof EncodedAudioChunk))throw new TypeError("addAudioChunk's first argument (sample) must be of type EncodedAudioChunk.");if(e&&typeof e!="object")throw new TypeError("addAudioChunk's second argument (meta), when provided, must be an object.");if(t!==void 0&&(!Number.isFinite(t)||t<0))throw new TypeError("addAudioChunk's third argument (timestamp), when provided, must be a non-negative real number.");let i=new Uint8Array(n.byteLength);n.copyTo(i),this.addAudioChunkRaw(i,n.type,t??n.timestamp,n.duration,e)}addAudioChunkRaw(n,e,t,i,r){if(!(n instanceof Uint8Array))throw new TypeError("addAudioChunkRaw's first argument (data) must be an instance of Uint8Array.");if(e!=="key"&&e!=="delta")throw new TypeError("addAudioChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(t)||t<0)throw new TypeError("addAudioChunkRaw's third argument (timestamp) must be a non-negative real number.");if(!Number.isFinite(i)||i<0)throw new TypeError("addAudioChunkRaw's fourth argument (duration) must be a non-negative real number.");if(r&&typeof r!="object")throw new TypeError("addAudioChunkRaw's fifth argument (meta), when provided, must be an object.");if(et(this,$s,i0).call(this),!I(this,De).audio)throw new Error("No audio track declared.");if(typeof I(this,De).fastStart=="object"&&I(this,Ut).samples.length===I(this,De).fastStart.expectedAudioChunks)throw new Error(`Cannot add more audio chunks than specified in 'fastStart' (${I(this,De).fastStart.expectedAudioChunks}).`);let s=et(this,js,n0).call(this,I(this,Ut),n,e,t,i,r);if(I(this,De).fastStart==="fragmented"&&I(this,Ot)){for(;I(this,vi).length>0&&I(this,vi)[0].decodeTimestamp<=s.decodeTimestamp;){let o=I(this,vi).shift();et(this,yn,kn).call(this,I(this,Ot),o)}s.decodeTimestamp<=I(this,Ot).lastDecodeTimestamp?et(this,yn,kn).call(this,I(this,Ut),s):I(this,xi).push(s)}else et(this,yn,kn).call(this,I(this,Ut),s)}finalize(){if(I(this,zr))throw new Error("Cannot finalize a muxer more than once.");if(I(this,De).fastStart==="fragmented"){for(let e of I(this,vi))et(this,yn,kn).call(this,I(this,Ot),e);for(let e of I(this,xi))et(this,yn,kn).call(this,I(this,Ut),e);et(this,ao,O0).call(this,!1)}else I(this,Ot)&&et(this,kr,oo).call(this,I(this,Ot)),I(this,Ut)&&et(this,kr,oo).call(this,I(this,Ut));let n=[I(this,Ot),I(this,Ut)].filter(Boolean);if(I(this,De).fastStart==="in-memory"){let e;for(let i=0;i<2;i++){let r=Xs(n,I(this,nr)),s=I(this,ke).measureBox(r);e=I(this,ke).measureBox(I(this,Jt));let o=I(this,ke).pos+s+e;for(let a of I(this,sr)){a.offset=o;for(let{data:l}of a.samples)o+=l.byteLength,e+=l.byteLength}if(o<2**32)break;e>=2**32&&(I(this,Jt).largeSize=!0)}let t=Xs(n,I(this,nr));I(this,ke).writeBox(t),I(this,Jt).size=e,I(this,ke).writeBox(I(this,Jt));for(let i of I(this,sr))for(let r of i.samples)I(this,ke).write(r.data),r.data=null}else if(I(this,De).fastStart==="fragmented"){let e=I(this,ke).pos,t=W2(n);I(this,ke).writeBox(t);let i=I(this,ke).pos-e;I(this,ke).seek(I(this,ke).pos-4),I(this,ke).writeU32(i)}else{let e=I(this,ke).offsets.get(I(this,Jt)),t=I(this,ke).pos-e;I(this,Jt).size=t,I(this,Jt).largeSize=t>=2**32,I(this,ke).patchBox(I(this,Jt));let i=Xs(n,I(this,nr));if(typeof I(this,De).fastStart=="object"){I(this,ke).seek(I(this,so)),I(this,ke).writeBox(i);let r=e-I(this,ke).pos;I(this,ke).writeBox(r2(r))}else I(this,ke).writeBox(i)}et(this,fr,rs).call(this),I(this,ke).finalize(),Nt(this,zr,!0)}};De=new WeakMap;ke=new WeakMap;so=new WeakMap;Jt=new WeakMap;Ot=new WeakMap;Ut=new WeakMap;nr=new WeakMap;sr=new WeakMap;D0=new WeakMap;vi=new WeakMap;xi=new WeakMap;zr=new WeakMap;Qa=new WeakSet;fu=function(n){if(typeof n!="object")throw new TypeError("The muxer requires an options object to be passed to its constructor.");if(!(n.target instanceof uo))throw new TypeError("The target must be provided and an instance of Target.");if(n.video){if(!n5.includes(n.video.codec))throw new TypeError(`Unsupported video codec: ${n.video.codec}`);if(!Number.isInteger(n.video.width)||n.video.width<=0)throw new TypeError(`Invalid video width: ${n.video.width}. Must be a positive integer.`);if(!Number.isInteger(n.video.height)||n.video.height<=0)throw new TypeError(`Invalid video height: ${n.video.height}. Must be a positive integer.`);const e=n.video.rotation;if(typeof e=="number"&&![0,90,180,270].includes(e))throw new TypeError(`Invalid video rotation: ${e}. Has to be 0, 90, 180 or 270.`);if(Array.isArray(e)&&(e.length!==9||e.some(t=>typeof t!="number")))throw new TypeError(`Invalid video transformation matrix: ${e.join()}`);if(n.video.frameRate!==void 0&&(!Number.isInteger(n.video.frameRate)||n.video.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${n.video.frameRate}. Must be a positive integer.`)}if(n.audio){if(!i5.includes(n.audio.codec))throw new TypeError(`Unsupported audio codec: ${n.audio.codec}`);if(!Number.isInteger(n.audio.numberOfChannels)||n.audio.numberOfChannels<=0)throw new TypeError(`Invalid number of audio channels: ${n.audio.numberOfChannels}. Must be a positive integer.`);if(!Number.isInteger(n.audio.sampleRate)||n.audio.sampleRate<=0)throw new TypeError(`Invalid audio sample rate: ${n.audio.sampleRate}. Must be a positive integer.`)}if(n.firstTimestampBehavior&&!s5.includes(n.firstTimestampBehavior))throw new TypeError(`Invalid first timestamp behavior: ${n.firstTimestampBehavior}`);if(typeof n.fastStart=="object"){if(n.video){if(n.fastStart.expectedVideoChunks===void 0)throw new TypeError("'fastStart' is an object but is missing property 'expectedVideoChunks'.");if(!Number.isInteger(n.fastStart.expectedVideoChunks)||n.fastStart.expectedVideoChunks<0)throw new TypeError("'expectedVideoChunks' must be a non-negative integer.")}if(n.audio){if(n.fastStart.expectedAudioChunks===void 0)throw new TypeError("'fastStart' is an object but is missing property 'expectedAudioChunks'.");if(!Number.isInteger(n.fastStart.expectedAudioChunks)||n.fastStart.expectedAudioChunks<0)throw new TypeError("'expectedAudioChunks' must be a non-negative integer.")}}else if(![!1,"in-memory","fragmented"].includes(n.fastStart))throw new TypeError("'fastStart' option must be false, 'in-memory', 'fragmented' or an object.");if(n.minFragmentDuration!==void 0&&(!Number.isFinite(n.minFragmentDuration)||n.minFragmentDuration<0))throw new TypeError("'minFragmentDuration' must be a non-negative number.")};e0=new WeakSet;mu=function(){if(I(this,ke).writeBox(i2({holdsAvc:I(this,De).video?.codec==="avc",fragmented:I(this,De).fastStart==="fragmented"})),Nt(this,so,I(this,ke).pos),I(this,De).fastStart==="in-memory")Nt(this,Jt,$a(!1));else if(I(this,De).fastStart!=="fragmented"){if(typeof I(this,De).fastStart=="object"){let n=et(this,I0,pu).call(this);I(this,ke).seek(I(this,ke).pos+n)}Nt(this,Jt,$a(!0)),I(this,ke).writeBox(I(this,Jt))}et(this,fr,rs).call(this)};I0=new WeakSet;pu=function(){if(typeof I(this,De).fastStart!="object")return;let n=0,e=[I(this,De).fastStart.expectedVideoChunks,I(this,De).fastStart.expectedAudioChunks];for(let t of e)t&&(n+=8*Math.ceil(2/3*t),n+=4*t,n+=12*Math.ceil(2/3*t),n+=4*t,n+=8*t);return n+=4096,n};t0=new WeakSet;gu=function(){if(I(this,De).video&&Nt(this,Ot,{id:1,info:{type:"video",codec:I(this,De).video.codec,width:I(this,De).video.width,height:I(this,De).video.height,rotation:I(this,De).video.rotation??0,decoderConfig:null},timescale:I(this,De).video.frameRate??57600,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),I(this,De).audio&&(Nt(this,Ut,{id:I(this,De).video?2:1,info:{type:"audio",codec:I(this,De).audio.codec,numberOfChannels:I(this,De).audio.numberOfChannels,sampleRate:I(this,De).audio.sampleRate,decoderConfig:null},timescale:I(this,De).audio.sampleRate,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),I(this,De).audio.codec==="aac")){let n=et(this,U0,_u).call(this,2,I(this,De).audio.sampleRate,I(this,De).audio.numberOfChannels);I(this,Ut).info.decoderConfig={codec:I(this,De).audio.codec,description:n,numberOfChannels:I(this,De).audio.numberOfChannels,sampleRate:I(this,De).audio.sampleRate}}};U0=new WeakSet;_u=function(n,e,t){let r=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350].indexOf(e),s=t,o="";o+=n.toString(2).padStart(5,"0"),o+=r.toString(2).padStart(4,"0"),r===15&&(o+=e.toString(2).padStart(24,"0")),o+=s.toString(2).padStart(4,"0");let a=Math.ceil(o.length/8)*8;o=o.padEnd(a,"0");let l=new Uint8Array(o.length/8);for(let c=0;c<o.length;c+=8)l[c/8]=parseInt(o.slice(c,c+8),2);return l};js=new WeakSet;n0=function(n,e,t,i,r,s,o){let a=i/1e6,l=(i-(o??0))/1e6,c=r/1e6,u=et(this,N0,vu).call(this,a,l,n);return a=u.presentationTimestamp,l=u.decodeTimestamp,s?.decoderConfig&&(n.info.decoderConfig===null?n.info.decoderConfig=s.decoderConfig:Object.assign(n.info.decoderConfig,s.decoderConfig)),{presentationTimestamp:a,decodeTimestamp:l,duration:c,data:e,size:e.byteLength,type:t,timescaleUnitsToNextSample:Cn(c,n.timescale)}};yn=new WeakSet;kn=function(n,e){I(this,De).fastStart!=="fragmented"&&n.samples.push(e);const t=Cn(e.presentationTimestamp-e.decodeTimestamp,n.timescale);if(n.lastTimescaleUnits!==null){let r=Cn(e.decodeTimestamp,n.timescale,!1),s=Math.round(r-n.lastTimescaleUnits);if(n.lastTimescaleUnits+=s,n.lastSample.timescaleUnitsToNextSample=s,I(this,De).fastStart!=="fragmented"){let o=no(n.timeToSampleTable);o.sampleCount===1?(o.sampleDelta=s,o.sampleCount++):o.sampleDelta===s?o.sampleCount++:(o.sampleCount--,n.timeToSampleTable.push({sampleCount:2,sampleDelta:s}));const a=no(n.compositionTimeOffsetTable);a.sampleCompositionTimeOffset===t?a.sampleCount++:n.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:t})}}else n.lastTimescaleUnits=0,I(this,De).fastStart!=="fragmented"&&(n.timeToSampleTable.push({sampleCount:1,sampleDelta:Cn(e.duration,n.timescale)}),n.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:t}));n.lastSample=e;let i=!1;if(!n.currentChunk)i=!0;else{let r=e.presentationTimestamp-n.currentChunk.startTimestamp;if(I(this,De).fastStart==="fragmented"){let s=I(this,Ot)??I(this,Ut);const o=I(this,De).minFragmentDuration??1;n===s&&e.type==="key"&&r>=o&&(i=!0,et(this,ao,O0).call(this))}else i=r>=.5}i&&(n.currentChunk&&et(this,kr,oo).call(this,n),n.currentChunk={startTimestamp:e.presentationTimestamp,samples:[]}),n.currentChunk.samples.push(e)};N0=new WeakSet;vu=function(n,e,t){const i=I(this,De).firstTimestampBehavior==="strict",r=t.lastDecodeTimestamp===-1;if(i&&r&&e!==0)throw new Error(`The first chunk for your media track must have a timestamp of 0 (received DTS=${e}).Non-zero first timestamps are often caused by directly piping frames or audio data from a MediaStreamTrack into the encoder. Their timestamps are typically relative to the age of thedocument, which is probably what you want.

If you want to offset all timestamps of a track such that the first one is zero, set firstTimestampBehavior: 'offset' in the options.
`);if(I(this,De).firstTimestampBehavior==="offset"||I(this,De).firstTimestampBehavior==="cross-track-offset"){t.firstDecodeTimestamp===void 0&&(t.firstDecodeTimestamp=e);let o;I(this,De).firstTimestampBehavior==="offset"?o=t.firstDecodeTimestamp:o=Math.min(I(this,Ot)?.firstDecodeTimestamp??1/0,I(this,Ut)?.firstDecodeTimestamp??1/0),e-=o,n-=o}if(e<t.lastDecodeTimestamp)throw new Error(`Timestamps must be monotonically increasing (DTS went from ${t.lastDecodeTimestamp*1e6} to ${e*1e6}).`);return t.lastDecodeTimestamp=e,{presentationTimestamp:n,decodeTimestamp:e}};kr=new WeakSet;oo=function(n){if(I(this,De).fastStart==="fragmented")throw new Error("Can't finalize individual chunks if 'fastStart' is set to 'fragmented'.");if(n.currentChunk){if(n.finalizedChunks.push(n.currentChunk),I(this,sr).push(n.currentChunk),(n.compactlyCodedChunkTable.length===0||no(n.compactlyCodedChunkTable).samplesPerChunk!==n.currentChunk.samples.length)&&n.compactlyCodedChunkTable.push({firstChunk:n.finalizedChunks.length,samplesPerChunk:n.currentChunk.samples.length}),I(this,De).fastStart==="in-memory"){n.currentChunk.offset=0;return}n.currentChunk.offset=I(this,ke).pos;for(let e of n.currentChunk.samples)I(this,ke).write(e.data),e.data=null;et(this,fr,rs).call(this)}};ao=new WeakSet;O0=function(n=!0){if(I(this,De).fastStart!=="fragmented")throw new Error("Can't finalize a fragment unless 'fastStart' is set to 'fragmented'.");let e=[I(this,Ot),I(this,Ut)].filter(a=>a&&a.currentChunk);if(e.length===0)return;let t=e2(this,D0)._++;if(t===1){let a=Xs(e,I(this,nr),!0);I(this,ke).writeBox(a)}let i=I(this,ke).pos,r=ic(t,e);I(this,ke).writeBox(r);{let a=$a(!1),l=0;for(let u of e)for(let h of u.currentChunk.samples)l+=h.size;let c=I(this,ke).measureBox(a)+l;c>=2**32&&(a.largeSize=!0,c=I(this,ke).measureBox(a)+l),a.size=c,I(this,ke).writeBox(a)}for(let a of e){a.currentChunk.offset=I(this,ke).pos,a.currentChunk.moofOffset=i;for(let l of a.currentChunk.samples)I(this,ke).write(l.data),l.data=null}let s=I(this,ke).pos;I(this,ke).seek(I(this,ke).offsets.get(r));let o=ic(t,e);I(this,ke).writeBox(o),I(this,ke).seek(s);for(let a of e)a.finalizedChunks.push(a.currentChunk),I(this,sr).push(a.currentChunk),a.currentChunk=null;n&&et(this,fr,rs).call(this)};fr=new WeakSet;rs=function(){I(this,ke)instanceof L0&&I(this,ke).flush()};$s=new WeakSet;i0=function(){if(I(this,zr))throw new Error("Cannot add new video or audio chunks after the file has been finalized.")};const a5=(n,e,t)=>{const i=-n/2,r=-e/2,s=new ii;return s.moveTo(i+t,r),s.lineTo(i+n-t,r),s.quadraticCurveTo(i+n,r,i+n,r+t),s.lineTo(i+n,r+e-t),s.quadraticCurveTo(i+n,r+e,i+n-t,r+e),s.lineTo(i+t,r+e),s.quadraticCurveTo(i,r+e,i,r+e-t),s.lineTo(i,r+t),s.quadraticCurveTo(i,r,i+t,r),s},l5={id:"mouse-pad-240x200",name:"Tapis de souris",dimensions:[240,200,3],printable:[240,200],create(){const n=new Et,e=a5(2.4,2,.13),t=new en(e,{depth:.03,bevelEnabled:!0,bevelSegments:4,bevelSize:.018,bevelThickness:.012,curveSegments:16});t.rotateX(Math.PI/2),t.translate(0,-.045,0);const i=new dt({color:1053464,roughness:.7,metalness:.02}),r=new Oe(t,i);r.castShadow=!0,r.receiveShadow=!0,n.add(r);const s=new en(e,{depth:.004,bevelEnabled:!1,curveSegments:16});s.rotateX(Math.PI/2),s.translate(0,.001,0);const o=s.attributes.position,a=s.attributes.uv;for(let u=0;u<o.count;u++)a.setXY(u,(o.getX(u)+1.2)/2.4,(1-o.getZ(u))/2);a.needsUpdate=!0;const l=new dt({color:16250868,roughness:.72,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),c=new Oe(s,l);return c.receiveShadow=!0,n.add(c),{group:n,top:c,topMaterial:l,baseMaterial:i,printAspect:1.2,type:"flat"}}};function c5(){const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d"),t=256,i=256,r=256,s=e.createRadialGradient(t,i,20,t,i,r);s.addColorStop(0,"#22120a"),s.addColorStop(.5,"#2e180d"),s.addColorStop(.85,"#3a1f11"),s.addColorStop(1,"#1f0d06"),e.fillStyle=s,e.fillRect(0,0,512,512);for(let l=0;l<35;l++){const c=Math.random()*Math.PI*2,u=(.2+Math.random()*.7)*r,h=t+Math.cos(c)*u,f=i+Math.sin(c)*u,m=25+Math.random()*55,g=e.createRadialGradient(h,f,2,h,f,m),_=.35+Math.random()*.35;g.addColorStop(0,`rgba(212, 163, 107, ${_})`),g.addColorStop(.5,`rgba(184, 126, 68, ${_*.6})`),g.addColorStop(1,"rgba(46, 24, 13, 0)"),e.fillStyle=g,e.beginPath(),e.arc(h,f,m,0,Math.PI*2),e.fill()}const o=e.createRadialGradient(t,i,r*.82,t,i,r);o.addColorStop(0,"rgba(196, 138, 72, 0)"),o.addColorStop(.5,"rgba(217, 160, 91, 0.65)"),o.addColorStop(.9,"rgba(180, 115, 50, 0.45)"),o.addColorStop(1,"rgba(46, 24, 13, 0.2)"),e.fillStyle=o,e.beginPath(),e.arc(t,i,r,0,Math.PI*2),e.fill();for(let l=0;l<120;l++){const c=Math.random()*Math.PI*2,u=(.3+Math.random()*.65)*r,h=t+Math.cos(c)*u,f=i+Math.sin(c)*u,m=1+Math.random()*2.5;e.fillStyle="rgba(240, 200, 150, 0.55)",e.beginPath(),e.arc(h,f,m,0,Math.PI*2),e.fill()}const a=new v0(n);return a.colorSpace=zt,a}const u5={id:"mug-11oz",name:"Mug blanc 11 oz",dimensions:"Ø 82 × 95 mm",create(){const n=new Et,e=new cn({color:16777215,roughness:.18,clearcoat:.45,clearcoatRoughness:.16}),t=new cn({color:16777215,roughness:.16,clearcoat:.5,clearcoatRoughness:.14}),i=new cn({color:16777215,roughness:.16,clearcoat:.5,clearcoatRoughness:.14}),r=new cn({color:16777215,roughness:.2,clearcoat:.4,clearcoatRoughness:.18,side:bn}),s=210/257.6*Math.PI*2,o=Math.PI*2-s,a=new vn(.7,.7,1.76,96,1,!0,o/2,s),l=new Oe(a,e);l.castShadow=!0,l.receiveShadow=!0,n.add(l);const c=new vn(.7,.7,1.76,32,1,!0,-o/2,o),u=new Oe(c,t);u.castShadow=!0,u.receiveShadow=!0,n.add(u);const h=new S0(.62,.7,96);h.rotateX(-Math.PI/2);const f=new Oe(h,t);f.position.y=.88,n.add(f);const m=new jr(.7,64);m.rotateX(Math.PI/2);const g=new Oe(m,t);g.position.y=-.88,n.add(g);const _=new vn(.62,.62,.4,96,1,!0),p=new Oe(_,r);p.position.y=.68,n.add(p);const d=new cn({map:c5(),roughness:.12,metalness:.05,clearcoat:.95,clearcoatRoughness:.08}),M=new jr(.618,96);M.rotateX(-Math.PI/2);const y=new Oe(M,d);y.position.y=.76,y.receiveShadow=!0,n.add(y);const v=new zc([new P(0,.58,.62),new P(0,.58,1.08),new P(0,.3,1.28),new P(0,-.3,1.28),new P(0,-.58,1.08),new P(0,-.58,.62)]),C=new Oe(new b0(v,64,.105,20,!1),i);return C.castShadow=!0,n.add(C),n.position.y=.82,{group:n,topMaterial:e,baseMaterial:t,handleMaterial:i,innerMaterial:r,printMesh:l,printAspect:210/95,type:"wrap"}}},h5=(n,e,t,i,r)=>{const s=-n/2,o=-e/2,a=new ii;a.moveTo(s+t,o),a.lineTo(s+n-t,o),a.quadraticCurveTo(s+n,o,s+n,o+t),a.lineTo(s+n,o+e-t),a.quadraticCurveTo(s+n,o+e,s+n-t,o+e),a.lineTo(s+t,o+e),a.quadraticCurveTo(s,o+e,s,o+e-t),a.lineTo(s,o+t),a.quadraticCurveTo(s,o,s+t,o);const l=new $r;return l.absarc(0,e/2-r,i,0,Math.PI*2,!1),a.holes.push(l),a},d5={id:"keychain-rect-unisub",name:"Porte-clés rectangle",dimensions:[40.6,57.15,1.14],printable:[40.6,57.15],icon:"🔑",create(){const n=new Et,e=.406,t=.5715,i=h5(e,t,.03,.015,.04),r=.008,s=.0017,o=.0017,a=new en(i,{depth:r,bevelEnabled:!0,bevelSegments:3,bevelSize:s,bevelThickness:o,curveSegments:24});a.translate(0,0,-r/2);const l=a.attributes.position,c=a.attributes.uv;for(let m=0;m<l.count;m++){const g=l.getX(m),_=l.getY(m),p=l.getZ(m),d=(_+t/2)/t;let M=(g+e/2)/e;p<0?(M=(-g+e/2)/e,M=M*.5+.5,M=Math.max(M,.501)):(M=M*.5,M=Math.min(M,.499)),c.setXY(m,M,d)}c.needsUpdate=!0,a.translate(0,t/2+o,0);const u=new cn({color:16777215,roughness:.15,metalness:0,clearcoat:.6,clearcoatRoughness:.2}),h=new cn({color:15790320,roughness:.3,metalness:0,clearcoat:.3}),f=new Oe(a,[u,h]);return f.castShadow=!0,f.receiveShadow=!0,n.add(f),{group:n,topMaterial:u,baseMaterial:h,printMesh:f,printAspect:e/t,type:"flat",twoSided:!0,meshWidth:e,meshHeight:t}}},f5=(n,e,t)=>{const i=new ii;i.absarc(0,0,n,0,Math.PI*2,!1);const r=new $r;return r.absarc(0,n-t,e,0,Math.PI*2,!0),i.holes.push(r),i},m5={id:"keychain-round-unisub",name:"Porte-clés rond Unisub",dimensions:[63.5,63.5,2.29],printable:[63.5,63.5],icon:"⚪",create(){const n=new Et,e=.3175,t=f5(e,.015,.04),i=.018,r=.00245,s=.002,o=new en(t,{depth:i,bevelEnabled:!0,bevelSegments:4,bevelSize:s,bevelThickness:r,curveSegments:32});o.translate(0,0,-i/2);const a=o.attributes.position,l=o.attributes.uv;for(let f=0;f<a.count;f++){const m=a.getX(f),g=a.getY(f),_=a.getZ(f),p=(g+e)/(2*e);let d=(m+e)/(2*e);_<0?(d=(-m+e)/(2*e),d=d*.5+.5,d=Math.max(d,.501)):(d=d*.5,d=Math.min(d,.499)),l.setXY(f,d,p)}l.needsUpdate=!0,o.translate(0,e+r,0);const c=new cn({color:16777215,roughness:.15,metalness:0,clearcoat:.6,clearcoatRoughness:.2}),u=new cn({color:15790320,roughness:.3,metalness:0,clearcoat:.3}),h=new Oe(o,[c,u]);return h.castShadow=!0,h.receiveShadow=!0,n.add(h),{group:n,topMaterial:c,baseMaterial:u,printMesh:h,printAspect:1,type:"flat",twoSided:!0,meshWidth:.635,meshHeight:.635}}},p5={id:"keychain-heart",name:"Porte-clés Cœur Unisub",dimensions:[57.2,63.5,2.29],printable:[57.2,63.5],icon:"🤍",create(){const n=new Et,e=new ii;e.moveTo(0,.2),e.bezierCurveTo(-.1,.4,-.5,.4,-.5,.1),e.bezierCurveTo(-.5,-.2,-.2,-.4,0,-.6),e.bezierCurveTo(.2,-.4,.5,-.2,.5,.1),e.bezierCurveTo(.5,.4,.1,.4,0,.2);const t=new $r;t.absarc(.35,.22,.035,0,Math.PI*2,!1),e.holes.push(t);const i=.0229,r=new en(e,{depth:i,bevelEnabled:!0,bevelSegments:3,bevelSize:.002,bevelThickness:.002,curveSegments:32});r.computeBoundingBox();const s=r.boundingBox,o=s.getCenter(new P),a=s.getSize(new P);r.translate(-o.x,-o.y,-i/2),r.translate(0,a.y/2+.1,0);const l=r.attributes.position,c=r.attributes.uv;for(let m=0;m<l.count;m++){const g=l.getX(m),_=l.getY(m),p=l.getZ(m);let d=(g+a.x/2)/a.x,M=(_-.1)/a.y;p<0?(d=(-g+a.x/2)/a.x,d=d*.5+.5,d=Math.max(d,.501)):(d=d*.5,d=Math.min(d,.499)),c.setXY(m,d,M)}c.needsUpdate=!0;const u=new cn({color:16777215,roughness:.15,clearcoat:.8,clearcoatRoughness:.1}),h=new cn({color:2236962,roughness:.4}),f=new Oe(r,[u,h]);return f.castShadow=!0,f.receiveShadow=!0,n.add(f),{group:n,topMaterial:u,baseMaterial:h,printMesh:f,printAspect:57.2/63.5,type:"flat",twoSided:!0,meshWidth:1,meshHeight:1}}},g5=/^[og]\s*(.+)?/,_5=/^mtllib /,v5=/^usemtl /,x5=/^usemap /,rc=/\s+/,sc=new P,Jo=new P,oc=new P,ac=new P,sn=new P,zs=new Ve;function y5(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){const r=i.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addFaceNormal:function(e,t,i){const r=this.vertices,s=this.object.geometry.normals;sc.fromArray(r,e),Jo.fromArray(r,t),oc.fromArray(r,i),sn.subVectors(oc,Jo),ac.subVectors(sc,Jo),sn.cross(ac),sn.normalize(),s.push(sn.x,sn.y,sn.z),s.push(sn.x,sn.y,sn.z),s.push(sn.x,sn.y,sn.z)},addColor:function(e,t,i){const r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[i]!==void 0&&s.push(r[i+0],r[i+1],r[i+2])},addUV:function(e,t,i){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[t+0],r[t+1]),s.push(r[i+0],r[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,r,s,o,a,l,c){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),f=this.parseVertexIndex(t,u),m=this.parseVertexIndex(i,u);if(this.addVertex(h,f,m),this.addColor(h,f,m),a!==void 0&&a!==""){const g=this.normals.length;h=this.parseNormalIndex(a,g),f=this.parseNormalIndex(l,g),m=this.parseNormalIndex(c,g),this.addNormal(h,f,m)}else this.addFaceNormal(h,f,m);if(r!==void 0&&r!==""){const g=this.uvs.length;h=this.parseUVIndex(r,g),f=this.parseUVIndex(s,g),m=this.parseUVIndex(o,g),this.addUV(h,f,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,r=e.length;i<r;i++){const s=this.parseVertexIndex(e[i],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,r=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],i));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],r))}};return n.startObject("",!1),n}class S5 extends is{constructor(e){super(e),this.materials=null}load(e,t,i,r){const s=this,o=new Xd(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new y5;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let r=[];for(let a=0,l=i.length;a<l;a++){const c=i[a].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const h=c.split(rc);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(zs.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6]),zt),t.colors.push(zs.r,zs.g,zs.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const f=c.slice(1).trim().split(rc),m=[];for(let _=0,p=f.length;_<p;_++){const d=f[_];if(d.length>0){const M=d.split("/");m.push(M)}}const g=m[0];for(let _=1,p=m.length-1;_<p;_++){const d=m[_],M=m[_+1];t.addFace(g[0],d[0],M[0],g[1],d[1],M[1],g[2],d[2],M[2])}}else if(u==="l"){const h=c.substring(1).trim().split(" ");let f=[];const m=[];if(c.indexOf("/")===-1)f=h;else for(let g=0,_=h.length;g<_;g++){const p=h[g].split("/");p[0]!==""&&f.push(p[0]),p[1]!==""&&m.push(p[1])}t.addLineGeometry(f,m)}else if(u==="p"){const f=c.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((r=g5.exec(c))!==null){const h=(" "+r[0].slice(1).trim()).slice(1);t.startObject(h)}else if(v5.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(_5.test(c))t.materialLibraries.push(c.substring(7).trim());else if(x5.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(r=c.split(" "),r.length>1){const f=r[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const s=new Et;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],u=c.geometry,h=c.materials,f=u.type==="Line",m=u.type==="Points";let g=!1;if(u.vertices.length===0)continue;const _=new At;_.setAttribute("position",new Je(u.vertices,3)),u.normals.length>0&&_.setAttribute("normal",new Je(u.normals,3)),u.colors.length>0&&(g=!0,_.setAttribute("color",new Je(u.colors,3))),u.hasUVIndices===!0&&_.setAttribute("uv",new Je(u.uvs,2));const p=[];for(let M=0,y=h.length;M<y;M++){const v=h[M],C=v.name+"_"+v.smooth+"_"+g;let S=t.materials[C];if(this.materials!==null){if(S=this.materials.create(v.name),f&&S&&!(S instanceof Dr)){const T=new Dr;un.prototype.copy.call(T,S),T.color.copy(S.color),S=T}else if(m&&S&&!(S instanceof wr)){const T=new wr({size:10,sizeAttenuation:!1});un.prototype.copy.call(T,S),T.color.copy(S.color),T.map=S.map,S=T}}S===void 0&&(f?S=new Dr:m?S=new wr({size:1,sizeAttenuation:!1}):S=new zd,S.name=v.name,S.flatShading=!v.smooth,S.vertexColors=g,t.materials[C]=S),p.push(S)}let d;if(p.length>1){for(let M=0,y=h.length;M<y;M++){const v=h[M];_.addGroup(v.groupStart,v.groupCount,M)}f?d=new Ga(_,p):m?d=new zo(_,p):d=new Oe(_,p)}else f?d=new Ga(_,p[0]):m?d=new zo(_,p[0]):d=new Oe(_,p[0]);d.name=c.name,s.add(d)}else if(t.vertices.length>0){const a=new wr({size:1,sizeAttenuation:!1}),l=new At;l.setAttribute("position",new Je(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new Je(t.colors,3)),a.vertexColors=!0);const c=new zo(l,a);s.add(c)}return s}}class Qo extends At{constructor(e=new Oe,t=new P,i=new Yt,r=new P(1,1,1)){super();const s=[],o=[],a=[],l=new P,c=new qe().getNormalMatrix(e.matrixWorld),u=new mt;u.makeRotationFromEuler(i),u.setPosition(t);const h=new mt;h.copy(u).invert(),f(),this.setAttribute("position",new Je(s,3)),this.setAttribute("uv",new Je(a,2)),o.length>0&&this.setAttribute("normal",new Je(o,3));function f(){let p=[];const d=new P,M=new P,y=e.geometry,v=y.attributes.position,C=y.attributes.normal;if(y.index!==null){const S=y.index;for(let T=0;T<S.count;T++)d.fromBufferAttribute(v,S.getX(T)),C?(M.fromBufferAttribute(C,S.getX(T)),m(p,d,M)):m(p,d)}else{if(v===void 0)return;for(let S=0;S<v.count;S++)d.fromBufferAttribute(v,S),C?(M.fromBufferAttribute(C,S),m(p,d,M)):m(p,d)}p=g(p,l.set(1,0,0)),p=g(p,l.set(-1,0,0)),p=g(p,l.set(0,1,0)),p=g(p,l.set(0,-1,0)),p=g(p,l.set(0,0,1)),p=g(p,l.set(0,0,-1));for(let S=0;S<p.length;S++){const T=p[S];a.push(.5+T.position.x/r.x,.5+T.position.y/r.y),T.position.applyMatrix4(u),s.push(T.position.x,T.position.y,T.position.z),T.normal!==null&&o.push(T.normal.x,T.normal.y,T.normal.z)}}function m(p,d,M=null){d.applyMatrix4(e.matrixWorld),d.applyMatrix4(h),M?(M.applyNormalMatrix(c),p.push(new ea(d.clone(),M.clone()))):p.push(new ea(d.clone()))}function g(p,d){const M=[],y=.5*Math.abs(r.dot(d));for(let v=0;v<p.length;v+=3){let C=0,S,T,L,w;const E=p[v+0].position.dot(d)-y,D=p[v+1].position.dot(d)-y,F=p[v+2].position.dot(d)-y,z=E>0,V=D>0,G=F>0;switch(C=(z?1:0)+(V?1:0)+(G?1:0),C){case 0:{M.push(p[v]),M.push(p[v+1]),M.push(p[v+2]);break}case 1:{if(z&&(S=p[v+1],T=p[v+2],L=_(p[v],S,d,y),w=_(p[v],T,d,y)),V){S=p[v],T=p[v+2],L=_(p[v+1],S,d,y),w=_(p[v+1],T,d,y),M.push(L),M.push(T.clone()),M.push(S.clone()),M.push(T.clone()),M.push(L.clone()),M.push(w);break}G&&(S=p[v],T=p[v+1],L=_(p[v+2],S,d,y),w=_(p[v+2],T,d,y)),M.push(S.clone()),M.push(T.clone()),M.push(L),M.push(w),M.push(L.clone()),M.push(T.clone());break}case 2:{z||(S=p[v].clone(),T=_(S,p[v+1],d,y),L=_(S,p[v+2],d,y),M.push(S),M.push(T),M.push(L)),V||(S=p[v+1].clone(),T=_(S,p[v+2],d,y),L=_(S,p[v],d,y),M.push(S),M.push(T),M.push(L)),G||(S=p[v+2].clone(),T=_(S,p[v],d,y),L=_(S,p[v+1],d,y),M.push(S),M.push(T),M.push(L));break}}}return M}function _(p,d,M,y){const v=p.position.dot(M)-y,C=d.position.dot(M)-y,S=v/(v-C),T=new P(p.position.x+S*(d.position.x-p.position.x),p.position.y+S*(d.position.y-p.position.y),p.position.z+S*(d.position.z-p.position.z));let L=null;return p.normal!==null&&d.normal!==null&&(L=new P(p.normal.x+S*(d.normal.x-p.normal.x),p.normal.y+S*(d.normal.y-p.normal.y),p.normal.z+S*(d.normal.z-p.normal.z))),new ea(T,L)}}}class ea{constructor(e,t=null){this.position=e,this.normal=t}clone(){const e=this.position.clone(),t=this.normal!==null?this.normal.clone():null;return new this.constructor(e,t)}}const M5="/assets/male_crew_neck_worn_v1_no_tag_517_YEE-QksqSogE.obj",lc=210/297,b5={id:"tshirt-3d",name:"T-shirt 3D (Dos, Cœur, Ventre)",dimensions:"S, M, L, XL",printable:[210,297],icon:"👕",printAspect:lc,create(){const n=new Et,e=new Et;let t=!1,i=null,r="portrait";const s=new dt({color:16777215,roughness:.9,metalness:.05}),o=new dt({color:16777215,roughness:.8,metalness:.1,transparent:!0,premultipliedAlpha:!1,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,alphaTest:.01,blending:Ei});new S5().load(M5,u=>{u.traverse(h=>{h.isMesh&&(h.geometry.attributes.normal||h.geometry.computeVertexNormals(),h.geometry.scale(.01,.01,.01),h.geometry.translate(0,-.1,0),h.geometry.computeVertexNormals(),h.geometry.computeBoundingBox(),h.geometry.computeBoundingSphere(),h.material=s,h.castShadow=!0,h.receiveShadow=!0,n.userData.mainMesh=h)}),n.add(u),t=!0,i&&(l(i.texture,i.isTwoSided,i.canvas,i.heartTexture),i=null)},void 0,u=>{console.error("Erreur de chargement du modèle T-Shirt:",u)});function l(u,h,f,m){if(!t||!n.userData.mainMesh){i={texture:u,isTwoSided:h,canvas:f,heartTexture:m};return}for(;e.children.length>0;){const V=e.children[0];e.remove(V),V.geometry?.dispose(),V.material?.dispose()}const g=n.userData.mainMesh;e.parent||g.add(e);const _=o.clone();_.map=u,_.needsUpdate=!0;const p=o.clone();p.map=u,p.needsUpdate=!0,n.updateMatrixWorld(!0);const d=new mr().setFromObject(g),M=d.getCenter(new P),y=d.getSize(new P),v=Math.min(r==="landscape"?.21:.297,y.y*.45),C=Math.min(r==="landscape"?.297:.21,y.x*.8),S=d.min.y+y.y*.55,T=y.z*.7,L=new P(M.x,S,d.max.z+.005),w=new Yt(0,0,0),E=new P(C,v,T),D=new P(M.x,S,d.min.z-.005),F=new Yt(0,Math.PI,0),z=new P(C,v,T);try{const V=new Qo(g,L,w,E);if(h){const X=V.attributes.uv;for(let K=0;K<X.count;K++)X.setX(K,X.getX(K)*.5)}const G=new Oe(V,_);if(e.add(G),h){const X=new Qo(g,D,F,z),K=X.attributes.uv;for(let he=0;he<K.count;he++)K.setX(he,K.getX(he)*.5+.5);const W=new Oe(X,p);e.add(W)}if(m){const X=new P(M.x+y.x*.23,d.min.y+y.y*.75,d.max.z+.005),K=new Qo(g,X,w,new P(.09,.09,T)),W=o.clone();W.map=m,W.needsUpdate=!0,e.add(new Oe(K,W))}}catch(V){console.error("Erreur Decal:",V)}}const c={group:n,topMaterial:s,applyDecals:l,type:"3d-decal",printAspect:lc,printable:[210,297],twoSided:!0,clearDecals(){for(i=null;e.children.length;){const u=e.children[0];e.remove(u),u.geometry?.dispose(),u.material?.dispose()}},setPrintOrientation(u){r=u==="landscape"?"landscape":"portrait",c.printable=r==="landscape"?[297,210]:[210,297],c.printAspect=c.printable[0]/c.printable[1]}};return c}},E5=(n,e,t)=>{const i=-n/2,r=-e/2,s=new ii;return s.moveTo(i+t,r),s.lineTo(i+n-t,r),s.quadraticCurveTo(i+n,r,i+n,r+t),s.lineTo(i+n,r+e-t),s.quadraticCurveTo(i+n,r+e,i+n-t,r+e),s.lineTo(i+t,r+e),s.quadraticCurveTo(i,r+e,i,r+e-t),s.lineTo(i,r+t),s.quadraticCurveTo(i,r,i+t,r),s},w5={id:"puzzle-120",name:"Puzzle 120 pièces",dimensions:[280,195,2],printable:[280,195],icon:"🧩",create(){const n=new Et,e=2.8,t=1.95,i=E5(e,t,.02),r=new en(i,{depth:.02,bevelEnabled:!0,bevelSegments:2,bevelSize:.005,bevelThickness:.005,curveSegments:8});r.rotateX(Math.PI/2),r.translate(0,-.015,0);const s=new dt({color:14735048,roughness:.9,metalness:0}),o=new Oe(r,s);o.castShadow=!0,o.receiveShadow=!0,n.add(o);const a=new en(i,{depth:.002,bevelEnabled:!1,curveSegments:8});a.rotateX(Math.PI/2),a.translate(0,.001,0);const l=a.attributes.position,c=a.attributes.uv;for(let S=0;S<l.count;S++){const T=(l.getX(S)+e/2)/e,L=(t/2-l.getZ(S))/t;c.setXY(S,T,L)}c.needsUpdate=!0;const u=document.createElement("canvas");u.width=1500,u.height=800;const h=u.getContext("2d");h.clearRect(0,0,1500,800),h.lineCap="round",h.lineJoin="round";const f=15,m=8,g=1500/f,_=800/m,p=()=>{h.beginPath();for(let S=1;S<f;S++){h.moveTo(S*g,0);for(let T=0;T<m;T++){const L=T*_,w=L+_/2,E=(S+T)%2===0?1:-1;h.lineTo(S*g,w-15),h.bezierCurveTo(S*g+25*E,w-15,S*g+25*E,w+15,S*g,w+15),h.lineTo(S*g,L+_)}}for(let S=1;S<m;S++){h.moveTo(0,S*_);for(let T=0;T<f;T++){const L=T*g,w=L+g/2,E=(T+S)%2===0?1:-1;h.lineTo(w-15,S*_),h.bezierCurveTo(w-15,S*_+25*E,w+15,S*_+25*E,w+15,S*_),h.lineTo(L+g,S*_)}}};h.save(),h.translate(-2,-2),h.strokeStyle="rgba(0, 0, 0, 0.7)",h.lineWidth=4,p(),h.stroke(),h.restore(),h.save(),h.translate(2,2),h.strokeStyle="rgba(255, 255, 255, 0.8)",h.lineWidth=4,p(),h.stroke(),h.restore(),h.save(),h.strokeStyle="rgba(10, 10, 10, 0.9)",h.lineWidth=2,p(),h.stroke(),h.restore();const d=new v0(u);d.anisotropy=4;const M=new dt({color:16777215,roughness:.2,metalness:.1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),y=new Oe(a,M);y.receiveShadow=!0,n.add(y);const v=new g0({map:d,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),C=new Oe(a,v);return n.add(C),{group:n,top:y,topMaterial:M,baseMaterial:s,printAspect:e/t,type:"flat",printMesh:y,meshWidth:e,meshHeight:t}}},T5=(n,e,t)=>{const i=-n/2,r=-e/2,s=new ii;return s.moveTo(i+t,r),s.lineTo(i+n-t,r),s.quadraticCurveTo(i+n,r,i+n,r+t),s.lineTo(i+n,r+e-t),s.quadraticCurveTo(i+n,r+e,i+n-t,r+e),s.lineTo(i+t,r+e),s.quadraticCurveTo(i,r+e,i,r+e-t),s.lineTo(i,r+t),s.quadraticCurveTo(i,r,i+t,r),s},A5={id:"coaster-square",name:"Sous-verre carré",dimensions:[90,90,3],printable:[90,90],icon:"🔲",create(){const n=new Et,e=.9,t=T5(e,e,.08),i=new en(t,{depth:.03,bevelEnabled:!0,bevelSegments:2,bevelSize:.005,bevelThickness:.005,curveSegments:16});i.rotateX(Math.PI/2),i.translate(0,-.015,0);const r=new dt({color:4008735,roughness:1,metalness:0}),s=new Oe(i,r);s.castShadow=!0,s.receiveShadow=!0,n.add(s);const o=new en(t,{depth:.004,bevelEnabled:!1,curveSegments:16});o.rotateX(Math.PI/2),o.translate(0,.002,0);const a=o.attributes.position,l=o.attributes.uv;for(let h=0;h<a.count;h++){const f=(a.getX(h)+e/2)/e,m=(e/2-a.getZ(h))/e;l.setXY(h,f,m)}l.needsUpdate=!0;const c=new cn({color:16777215,roughness:.15,metalness:0,clearcoat:.5,clearcoatRoughness:.2,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),u=new Oe(o,c);return u.receiveShadow=!0,n.add(u),{group:n,top:u,topMaterial:c,baseMaterial:r,printAspect:1,type:"flat",printMesh:u,meshWidth:e,meshHeight:e}}},C5={id:"coaster-round",name:"Sous-verre rond (Caoutchouc)",dimensions:[100,100,3],printable:[100,100],icon:"⚪",create(){const n=new Et,e=.5,t=new vn(e,e,.03,64),i=new dt({color:2236962,roughness:.9,metalness:0}),r=new Oe(t,i);r.position.y=-.015,r.castShadow=!0,r.receiveShadow=!0,n.add(r);const s=new vn(e,e,.002,64),o=new dt({color:16777215,roughness:.8,metalness:.1}),a=new Oe(s,o);a.position.y=.001,a.receiveShadow=!0,n.add(a);const l=s.attributes.position,c=s.attributes.uv;for(let u=0;u<l.count;u++)if(l.getY(u)>0){const f=(l.getX(u)/e+1)/2,m=(l.getZ(u)/e+1)/2;c.setXY(u,f,1-m)}return c.needsUpdate=!0,{group:n,top:a,topMaterial:o,baseMaterial:i,printAspect:1,type:"flat",printMesh:a,meshWidth:1,meshHeight:1}}},cc=(n,e,t,i)=>{const r=new ri(n,e,t,i),s=r.attributes.position;for(let o=0;o<s.count;o++){const a=s.getX(o),l=s.getY(o),c=a/(n/2),u=l/(e/2),f=Math.cos(c*Math.PI/2)*Math.cos(u*Math.PI/2)*.05;s.setZ(o,f)}return r.computeVertexNormals(),r},R5={id:"pencil-case",name:"Trousse de maquillage",dimensions:[210,130,10],printable:[210,130],icon:"👝",create(){const n=new Et,e=2.1,t=1.3,i=cc(e,t,32,32);let r=i.attributes.uv;for(let _=0;_<r.count;_++){let p=r.getX(_);r.setX(_,p*.5)}i.rotateX(-Math.PI/2);const s=new dt({color:16777215,roughness:.95,metalness:0}),o=new Oe(i,s);o.castShadow=!0,o.receiveShadow=!0,n.add(o);const a=cc(e,t,32,32);r=a.attributes.uv;for(let _=0;_<r.count;_++){let p=1-r.getX(_);r.setX(_,p*.5+.5)}a.rotateX(Math.PI/2);const l=new dt({color:15658734,roughness:.95,metalness:0}),c=new Oe(a,s);c.castShadow=!0,c.receiveShadow=!0,n.add(c);const u=new vn(.015,.015,e,8);u.rotateZ(Math.PI/2),u.translate(0,.005,-t/2);const h=new dt({color:2236962,roughness:.5,metalness:.3}),f=new Oe(u,h);n.add(f);const m=new Tn(.04,.01,.08);m.translate(e/2-.1,.01,-t/2-.04);const g=new Oe(m,h);return n.add(g),{group:n,top:o,topMaterial:s,baseMaterial:l,printAspect:e/t,type:"flat",printMesh:o,meshWidth:e,meshHeight:t,twoSided:!0}}},uc=(n,e)=>{const t=new ri(n,n,e,e),i=t.attributes.position;for(let r=0;r<i.count;r++){const s=i.getX(r),o=i.getY(r),a=Math.sqrt(s*s+o*o)/(n/Math.sqrt(2)),l=Math.cos(a*Math.PI/2)*.15;i.setZ(r,l)}return t.computeVertexNormals(),t},P5={id:"cushion",name:"Housse de Coussin (Sublimation)",dimensions:[400,400,150],printable:[400,400],icon:"🛋️",create(){const n=new Et,e=2,t=uc(e,32);let i=t.attributes.uv;for(let c=0;c<i.count;c++)i.setX(c,i.getX(c)*.5);t.rotateX(-Math.PI/2);const r=new dt({color:16777215,roughness:.9,metalness:0}),s=new Oe(t,r);s.castShadow=!0,s.receiveShadow=!0,n.add(s);const o=uc(e,32);i=o.attributes.uv;for(let c=0;c<i.count;c++){let u=1-i.getX(c);i.setX(c,u*.5+.5)}o.rotateX(Math.PI/2);const a=new dt({color:16777215,roughness:.9,metalness:0}),l=new Oe(o,r);return l.castShadow=!0,l.receiveShadow=!0,n.add(l),{group:n,top:s,topMaterial:r,baseMaterial:a,printAspect:1,type:"flat",printMesh:s,meshWidth:e,meshHeight:e,twoSided:!0}}},fi=JSON.parse("[[0,0.0589],[0,0.0589],[0,0.0589],[0,0.0597],[0,0.0604],[0,0.0611],[0,0.0618],[0,0.0625],[0,0.0632],[0,0.0639],[0,0.0646],[0,0.0653],[0,0.066],[0,0.0667],[0,0.0674],[0,0.0681],[0,0.0688],[0,0.0695],[0,0.0702],[0,0.0709],[0,0.0717],[0,0.0724],[0,0.0731],[0,0.0738],[0,0.0745],[0,0.0752],[0,0.0759],[0,0.0766],[0,0.0773],[0,0.078],[0,0.0787],[0,0.0794],[0,0.0801],[0,0.0808],[0,0.0815],[0,0.0822],[0,0.0829],[0,0.0837],[0,0.0844],[0,0.0851],[0,0.0858],[0,0.0865],[0,0.0872],[0,0.0879],[0,0.0886],[0,0.0893],[0,0.09],[0,0.0907],[0,0.0914],[0,0.0921],[0,0.0928],[0,0.0935],[0,0.0942],[0,0.0949],[0,0.0956],[0,0.0964],[0,0.0971],[0,0.0978],[0,0.0985],[0,0.0992],[0,0.0999],[0,0.1006],[0,0.1013],[0,0.102],[0,0.1027],[0,0.1034],[0,0.1041],[0,0.1048],[0,0.1055],[0,0.1062],[0,0.1069],[0,0.1076],[0,0.1084],[0,0.1091],[0,0.1098],[0,0.1105],[0,0.1112],[0,0.1119],[0,0.1126],[0,0.1133],[0,0.114],[0,0.1147],[0,0.1154],[0,0.1161],[0,0.1168],[0,0.1175],[0,0.1182],[0,0.1189],[0,0.1196],[0,0.1203],[0,0.1211],[0,0.1218],[0,0.1225],[0,0.1232],[0,0.1239],[0,0.1246],[0,0.1253],[0,0.126],[0,0.1267],[0,0.1274],[0,0.1281],[0,0.1288],[0,0.1295],[0,0.1302],[0,0.1309],[0,0.1316],[0,0.1323],[0,0.1331],[0,0.1338],[0,0.1345],[0,0.1352],[0,0.1359],[0,0.1366],[0,0.1373],[0,0.138],[0,0.1387],[0,0.1394],[0,0.1401],[0,0.1408],[0,0.1415],[0,0.1422],[0,0.1429],[0,0.1436],[0,0.1443],[0,0.1451],[0,0.1458],[0,0.1465],[0,0.1472],[0,0.1479],[0,0.1486],[0,0.1493],[0,0.15],[0,0.1507],[0,0.1514],[0,0.1521],[0,0.1528],[0,0.1535],[0,0.1542],[0,0.1549],[0,0.1556],[0,0.1563],[0,0.157],[0,0.1578],[0,0.1585],[0,0.1592],[0,0.1599],[0,0.1606],[0,0.1613],[0,0.162],[0,0.1627],[0,0.1634],[0,0.1641],[0,0.1648],[0,0.1655],[0,0.1662],[0,0.1669],[0,0.1676],[0,0.1683],[0,0.169],[0,0.1698],[0,0.1705],[0,0.1712],[0,0.1719],[0,0.1726],[0,0.1733],[0,0.174],[0,0.1747],[0,0.1754],[0,0.1761],[0,0.1768],[0,0.1775],[0,0.1782],[0,0.1789],[0,0.1796],[0,0.1803],[0,0.181],[0,0.1818],[0,0.1825],[0,0.1832],[0,0.1839],[0,0.1846],[0,0.1853],[0,0.186],[0,0.1867],[0,0.1874],[0,0.1881],[0,0.1888],[0,0.1895],[0,0.1902],[0,0.1909],[0,0.1916],[0,0.1923],[0,0.193],[0,0.1937],[0,0.1945],[0,0.1952],[0,0.1959],[0,0.1966],[0,0.1973],[0,0.198],[0,0.1987],[0,0.1994],[0,0.2001],[0,0.2008],[0,0.2015],[0,0.2022],[0,0.2029],[0,0.2036],[0,0.2043],[0,0.205],[0,0.2057],[0,0.2065],[0,0.2072],[0,0.2079],[0,0.2086],[0,0.2093],[0,0.21],[0,0.2107],[0,0.2114],[0,0.2121],[0,0.2128],[0,0.2135],[0,0.2142],[0,0.2149],[0,0.2156],[0,0.2163],[0,0.217],[0,0.2177],[0,0.2185],[0,0.2192],[0,0.2199],[0,0.2206],[0,0.2213],[0,0.222],[0,0.2227],[0,0.2234],[0,0.2241],[0,0.2248],[0,0.2255],[0,0.2262],[0,0.2269],[0,0.2276],[0,0.2283],[0,0.229],[0,0.2297],[0,0.2304],[0,0.2312],[0,0.2319],[0,0.2326],[0,0.2333],[0,0.234],[0,0.2347],[0,0.2354],[0,0.2361],[0,0.2368],[0,0.2375],[0,0.2382],[0,0.2389],[0,0.2396],[0,0.2403],[0,0.241],[0,0.2417],[0,0.2424],[0,0.2432],[0,0.2439],[0,0.2446],[0,0.2453],[0,0.246],[0,0.2467],[0,0.2474],[0,0.2481],[0,0.2488],[0,0.2495],[0,0.2502],[0,0.2509],[0,0.2516],[0,0.2523],[0,0.253],[0,0.2537],[0,0.2544],[0,0.2551],[0,0.2559],[0,0.2566],[0,0.2573],[0,0.258],[0,0.2587],[0,0.2594],[0,0.2601],[0,0.2608],[0,0.2615],[0,0.2622],[0,0.2629],[0,0.2636],[0,0.2643],[0,0.265],[0,0.2657],[0,0.2664],[0,0.2671],[0,0.2679],[0,0.2686],[0,0.2693],[0,0.27],[0,0.2707],[0,0.2714],[0,0.2721],[0,0.2728],[0,0.2735],[0,0.2742],[0,0.2749],[0,0.2756],[0,0.2763],[0,0.277],[0,0.2777],[0,0.2784],[0,0.2791],[0,0.2799],[0,0.2806],[0,0.2813],[0,0.282],[0,0.2827],[0,0.2834],[0,0.2841],[0,0.2848],[0,0.2855],[0,0.2862],[0,0.2869],[0,0.2876],[0,0.2883],[0,0.289],[0,0.2897],[0,0.2904],[0,0.2911],[0,0.2918],[0,0.2926],[0,0.2933],[0,0.294],[0,0.2947],[0,0.2954],[0,0.2961],[0,0.2968],[0,0.2975],[0,0.2982],[0,0.2989],[0,0.2996],[0,0.3003],[0,0.301],[0,0.3017],[0,0.3024],[0,0.3031],[0,0.3038],[0,0.3046],[0,0.3053],[0,0.306],[0,0.3067],[0,0.3074],[0,0.3081],[0,0.3088],[0,0.3095],[0,0.3102],[0,0.3109],[0,0.3116],[0,0.3123],[0,0.313],[0,0.3137],[0,0.3144],[0,0.3151],[0,0.3158],[0,0.3166],[0,0.3173],[0,0.318],[0,0.3187],[0,0.3194],[0,0.3201],[0,0.3208],[0,0.3215],[0,0.3222],[0,0.3229],[0,0.3236],[0,0.3243],[0,0.325],[0,0.3257],[0,0.3264],[0,0.3271],[0,0.3278],[0,0.3285],[0,0.3293],[0,0.33],[0,0.3307],[0,0.3314],[0,0.3321],[0,0.3328],[0,0.3335],[0,0.3342],[0,0.3349],[0,0.3356],[0,0.3363],[0,0.337],[0,0.3377],[0,0.3384],[0,0.3391],[0,0.3398],[0,0.3405],[0,0.3413],[0,0.342],[0,0.3427],[0,0.3434],[0,0.3441],[0,0.3448],[0,0.3455],[0,0.3462],[0,0.3469],[0,0.3476],[0,0.3483],[0,0.349],[0,0.3497],[0,0.3504],[0,0.3511],[0,0.3518],[0,0.3525],[0,0.3532],[0,0.354],[0,0.3547],[0,0.3554],[0,0.3561],[0,0.3568],[0,0.3575],[0,0.3582],[0,0.3589],[0,0.3596],[0,0.3603],[0,0.361],[0,0.3617],[0,0.3624],[0,0.3631],[0,0.3638],[0,0.3645],[0,0.3652],[0,0.366],[0,0.3667],[0,0.3674],[0,0.3681],[0,0.3688],[0,0.3695],[0,0.3702],[0,0.3709],[0,0.3716],[0,0.3723],[0,0.373],[0,0.3737],[0,0.3744],[0,0.3751],[0,0.3758],[0,0.3765],[0,0.3772],[0,0.378],[0,0.3787],[0,0.3794],[0,0.3801],[0,0.3808],[0,0.3815],[0,0.3822],[0,0.3829],[0,0.3836],[0,0.3843],[0,0.385],[0,0.3857],[0,0.3864],[0,0.3871],[0,0.3878],[0,0.3885],[0,0.3892],[0,0.3899],[0,0.3907],[0,0.3914],[0,0.3921],[0,0.3928],[0,0.3935],[0,0.3942],[0,0.3949],[0,0.3956],[0,0.3963],[0,0.397],[0,0.3977],[0,0.3984],[0,0.3991],[0,0.3998],[0,0.4005],[0,0.4012],[0,0.4019],[0,0.4027],[0,0.4034],[0,0.4041],[0,0.4048],[0,0.4055],[0,0.4062],[0,0.4069],[0,0.4076],[0,0.4083],[0,0.409],[0,0.4097],[0,0.4104],[0,0.4111],[0,0.4118],[0,0.4125],[0,0.4132],[0,0.4139],[0,0.4147],[0,0.4154],[0,0.4161],[0,0.4168],[0,0.4175],[0,0.4182],[0,0.4189],[0,0.4196],[0,0.4203],[0,0.421],[0,0.4217],[0,0.4224],[0,0.4231],[0,0.4238],[0,0.4245],[0,0.4252],[0,0.4259],[0,0.4266],[0,0.4274],[0,0.4281],[0,0.4288],[0,0.4295],[0,0.4302],[0,0.4309],[0,0.4316],[0,0.4323],[0,0.433],[0,0.4337],[0,0.4344],[0,0.4351],[0,0.4358],[0,0.4365],[0,0.4372],[0,0.4379],[0,0.4386],[0,0.4394],[0,0.4401],[0,0.4408],[0,0.4415],[0,0.4422],[0,0.4429],[0,0.4436],[0,0.4443],[0,0.445],[0,0.4457],[0,0.4464],[0,0.4471],[0,0.4478],[0,0.4485],[0,0.4492],[0,0.4499],[0,0.4506],[0,0.4513],[0,0.4521],[0,0.4528],[0,0.4535],[0,0.4542],[0,0.4549],[0,0.4556],[0,0.4563],[0,0.457],[0,0.4577],[0,0.4584],[0,0.4591],[0,0.4598],[0,0.4605],[0,0.4612],[0,0.4619],[0,0.4626],[0,0.4633],[0,0.4641],[0,0.4648],[0,0.4655],[0,0.4662],[0,0.4669],[0,0.4676],[0,0.4683],[0,0.469],[0,0.4697],[0,0.4704],[0,0.4711],[0,0.4718],[0,0.4725],[0,0.4732],[0,0.4739],[0,0.4746],[0,0.4753],[0,0.4761],[0,0.4768],[0,0.4775],[0,0.4782],[0,0.4789],[0,0.4796],[0,0.4803],[0,0.481],[0,0.4817],[0,0.4824],[0,0.4831],[0,0.4838],[0,0.4845],[0,0.4852],[0,0.4859],[0,0.4866],[0,0.4873],[0,0.488],[0,0.4888],[0,0.4895],[0,0.4902],[0,0.4909],[0,0.4916],[0,0.4923],[0,0.493],[0,0.4937],[0,0.4944],[0,0.4951],[0,0.4958],[0,0.4965],[0,0.4972],[0,0.4979],[0,0.4986],[0,0.4993],[0,0.5],[0,0.5008],[0,0.5015],[0,0.5022],[0,0.5029],[0,0.5036],[0,0.5043],[0,0.505],[0,0.5057],[0,0.5064],[0,0.5071],[0,0.5078],[0,0.5085],[0,0.5092],[0,0.5099],[0,0.5106],[0,0.5113],[0,0.512],[0,0.5128],[0,0.5135],[0,0.5142],[0,0.5149],[0,0.5156],[0,0.5163],[0,0.517],[0,0.5177],[0,0.5184],[0,0.5191],[0,0.5198],[0,0.5205],[0,0.5212],[0,0.5219],[0,0.5226],[0,0.5233],[0,0.524],[0,0.5247],[0,0.5255],[0,0.5262],[0,0.5269],[0,0.5276],[0,0.5283],[0,0.529],[0,0.5297],[0,0.5304],[0,0.5311],[0,0.5318],[0,0.5325],[0,0.5332],[0,0.5339],[0,0.5346],[0,0.5353],[0,0.536],[0,0.5367],[0,0.5375],[0,0.5382],[0,0.5389],[0,0.5396],[0,0.5403],[0,0.541],[0,0.5417],[0,0.5424],[0,0.5431],[0,0.5438],[0,0.5445],[0,0.5452],[0,0.5459],[0,0.5466],[0,0.5473],[0,0.548],[0,0.5487],[0,0.5494],[0,0.5502],[0,0.5509],[0,0.5516],[0,0.5523],[0,0.553],[0,0.5537],[0,0.5544],[0,0.5551],[0,0.5558],[0,0.5565],[0,0.5572],[0,0.5579],[0,0.5586],[0,0.5593],[0,0.56],[0,0.5607],[0,0.5614],[0,0.5622],[0,0.5629],[0,0.5636],[0,0.5643],[0,0.565],[0,0.5657],[0,0.5664],[0,0.5671],[0,0.5678],[0,0.5685],[0,0.5692],[0,0.5699],[0,0.5706],[0,0.5713],[0,0.572],[0,0.5727],[0,0.5734],[0,0.5742],[0,0.5749],[0,0.5756],[0,0.5763],[0,0.577],[0,0.5777],[0,0.5784],[0,0.5791],[0,0.5798],[0,0.5805],[0,0.5812],[0,0.5819],[0,0.5826],[0,0.5833],[0,0.584],[0,0.5847],[0,0.5854],[0,0.5861],[0,0.5869],[0,0.5876],[0,0.5883],[0,0.589],[0,0.5897],[0,0.5904],[0,0.5911],[0,0.5918],[0,0.5925],[0,0.5932],[0,0.5939],[0,0.5946],[0,0.5953],[0,0.596],[0,0.5967],[0,0.5974],[0,0.5981],[0,0.5989],[0,0.5996],[0,0.6003],[0,0.601],[0,0.6017],[0,0.6024],[0,0.6031],[0,0.6038],[0,0.6045],[0,0.6052],[0,0.6059],[0,0.6066],[0,0.6073],[0,0.608],[0,0.6087],[0,0.6094],[0,0.6101],[0,0.6109],[0,0.6116],[0,0.6123],[0,0.613],[0,0.6137],[0,0.6144],[0,0.6151],[0,0.6158],[0,0.6165],[0,0.6172],[0,0.6179],[0,0.6186],[0,0.6193],[0,0.62],[0,0.6207],[0,0.6214],[0,0.6221],[0,0.6228],[0,0.6236],[0,0.6243],[0,0.625],[0,0.6257],[0,0.6264],[0,0.6271],[0,0.6278],[0,0.6285],[0,0.6292],[0,0.6299],[0,0.6306],[0,0.6313],[0,0.632],[0,0.6327],[0,0.6334],[0,0.6341],[0,0.6348],[0,0.6356],[0,0.6363],[0,0.637],[0,0.6377],[0,0.6384],[0,0.6391],[0,0.6398],[0,0.6405],[0,0.6412],[0,0.6419],[0,0.6426],[0,0.6433],[0,0.644],[0,0.6447],[0,0.6454],[0,0.6461],[0,0.6468],[0,0.6475],[0,0.6483],[0,0.649],[0,0.6497],[0,0.6504],[0,0.6511],[0,0.6518],[0,0.6525],[0,0.6532],[0,0.6539],[0,0.6546],[0,0.6553],[0,0.656],[0,0.6567],[0,0.6574],[0,0.6581],[0,0.6588],[0,0.6595],[0,0.6603],[0,0.661],[0,0.6617],[0,0.6624],[0,0.6631],[0,0.6638],[0,0.6645],[0,0.6652],[0,0.6659],[0,0.6666],[0,0.6673],[0,0.668],[0,0.6687],[0,0.6694],[0,0.6701],[0,0.6708],[0,0.6715],[0,0.6723],[0,0.673],[0,0.6737],[0,0.6744],[0,0.6751],[0,0.6758],[0,0.6765],[0,0.6772],[0,0.6779],[0,0.6786],[0,0.6793],[0,0.68],[0,0.6807],[0,0.6814],[0,0.6821],[0,0.6828],[0,0.6835],[0,0.6842],[0,0.685],[0,0.6857],[0,0.6864],[0,0.6871],[0,0.6878],[0,0.6885],[0,0.6892],[0,0.6899],[0,0.6906],[0,0.6913],[0,0.692],[0,0.6927],[0,0.6934],[0,0.6941],[0,0.6948],[0,0.6955],[0,0.6962],[0,0.697],[0,0.6977],[0,0.6984],[0,0.6991],[0,0.6998],[0,0.7005],[0,0.7012],[0,0.7019],[0,0.7026],[0,0.7033],[0,0.704],[0,0.7047],[0,0.7054],[0,0.7061],[0,0.7068],[0,0.7075],[0,0.7082],[0,0.709],[0,0.7097],[0,0.7104],[0,0.7111],[0,0.7118],[0,0.7125],[0,0.7132],[0,0.7139],[0,0.7146],[0,0.7153],[0,0.716],[0,0.7167],[0,0.7174],[0,0.7181],[0,0.7188],[0,0.7195],[0,0.7202],[0,0.7209],[0,0.7217],[0,0.7224],[0,0.7231],[0,0.7238],[0,0.7245],[0,0.7252],[0,0.7259],[0,0.7266],[0,0.7273],[0,0.728],[0,0.7287],[0,0.7294],[0,0.7301],[0,0.7308],[0,0.7315],[0,0.7322],[0,0.7329],[0,0.7337],[0,0.7344],[0,0.7351],[0,0.7358],[0,0.7365],[0,0.7372],[0,0.7379],[0,0.7386],[0,0.7393],[0,0.74],[0,0.7407],[0,0.7414],[0,0.7421],[0,0.7428],[0,0.7435],[0,0.7442],[0,0.7449],[0,0.7457],[0,0.7464],[0,0.7471],[0,0.7478],[0,0.7485],[0,0.7492],[0,0.7499],[0,0.7506],[0,0.7513],[0,0.752],[0,0.7527],[0,0.7534],[0,0.7541],[0,0.7548],[0,0.7555],[0,0.7562],[0,0.7569],[0,0.7576],[0,0.7584],[0,0.7591],[0,0.7598],[0,0.7605],[0,0.7612],[0,0.7619],[0,0.7626],[0,0.7633],[0,0.764],[0,0.7647],[0,0.7654],[0,0.7661],[0,0.7668],[0,0.7675],[0,0.7682],[0,0.7689],[0,0.7696],[0,0.7704],[0,0.7711],[0,0.7718],[0,0.7725],[0,0.7732],[0,0.7739],[0,0.7746],[0,0.7753],[0,0.776],[0,0.7767],[0,0.7774],[0,0.7781],[0,0.7788],[0,0.7795],[0,0.7802],[0,0.7809],[0,0.7816],[0,0.7823],[0,0.7831],[0,0.7838],[0,0.7845],[0,0.7852],[0,0.7859],[0,0.7866],[0,0.7873],[0,0.788],[0,0.7887],[0,0.7894],[0,0.7901],[0,0.7908],[0,0.7915],[0,0.7922],[0,0.7929],[0,0.7936],[0,0.7943],[0,0.7951],[0,0.7958],[0,0.7965],[0,0.7972],[0,0.7979],[0,0.7986],[0,0.7993],[0,0.8],[0,0.8007],[0,0.8014],[0,0.8021],[0,0.8028],[0,0.8035],[0,0.8042],[0,0.8049],[0,0.8056],[0,0.8063],[0,0.8071],[0,0.8078],[0,0.8085],[0,0.8092],[0,0.8099],[0,0.8106],[0,0.8113],[0,0.812],[0,0.8127],[0,0.8134],[0,0.8141],[0,0.8148],[0,0.8155],[0,0.8162],[0,0.8169],[0,0.8176],[0,0.8183],[0,0.819],[0,0.8198],[0,0.8205],[0,0.8212],[0,0.8219],[0,0.8226],[0,0.8233],[0,0.824],[0,0.8247],[0,0.8254],[0,0.8261],[0,0.8268],[0,0.8275],[0,0.8282],[0,0.8289],[0,0.8296],[0,0.8303],[0,0.831],[0,0.8318],[0,0.8325],[0,0.8332],[0,0.8339],[0,0.8346],[0,0.8353],[0,0.836],[0,0.8367],[0,0.8374],[0,0.8381],[0,0.8388],[0,0.8395],[0,0.8402],[0,0.8409],[0,0.8416],[0,0.8423],[0,0.843],[0,0.8438],[0,0.8445],[0,0.8452],[0,0.8459],[0,0.8466],[0,0.8473],[0,0.848],[0,0.8487],[0,0.8494],[0,0.8501],[0,0.8508],[0,0.8515],[0,0.8522],[0,0.8529],[0,0.8536],[0,0.8543],[0,0.855],[0,0.8557],[0,0.8565],[0,0.8572],[0,0.8579],[0,0.8586],[0,0.8593],[0,0.86],[0,0.8607],[0,0.8614],[0,0.8621],[0,0.8628],[0,0.8635],[0,0.8642],[0,0.8649],[0,0.8656],[0,0.8663],[0,0.867],[0,0.8677],[0,0.8685],[0,0.8692],[0,0.8699],[0,0.8706],[0,0.8713],[0,0.872],[0,0.8727],[0,0.8734],[0,0.8741],[0,0.8748],[0,0.8755],[0,0.8762],[0,0.8769],[0,0.8776],[0,0.8783],[0,0.879],[0,0.8797],[0,0.8804],[0,0.8812],[0,0.8819],[0,0.8826],[0,0.8833],[0,0.884],[0,0.8847],[0,0.8854],[0,0.8861],[0,0.8868],[0,0.8875],[0,0.8882],[0,0.8889],[0,0.8896],[0,0.8903],[0,0.891],[0,0.8917],[0,0.8924],[0,0.8932],[0,0.8939],[0,0.8946],[0,0.8953],[0,0.896],[0,0.8967],[0,0.8974],[0,0.8981],[0,0.8988],[0,0.8995],[0,0.9002],[0,0.9009],[0,0.9016],[0,0.9023],[0,0.903],[0,0.9037],[0,0.9044],[0,0.9052],[0,0.9059],[0,0.9066],[0,0.9073],[0,0.908],[0,0.9087],[0,0.9094],[0,0.9101],[0,0.9108],[0,0.9115],[0,0.9122],[0,0.9129],[0,0.9136],[0,0.9143],[0,0.915],[0,0.9157],[0,0.9164],[0,0.9171],[0,0.9179],[0,0.9186],[0,0.9193],[0,0.92],[0,0.9207],[0,0.9214],[0,0.9221],[0,0.9228],[0,0.9235],[0,0.9242],[0,0.9249],[0,0.9256],[0,0.9263],[0,0.927],[0,0.9277],[0,0.9284],[0,0.9291],[0,0.9299],[0,0.9306],[0,0.9313],[0,0.932],[0,0.9327],[0,0.9334],[0,0.9341],[0,0.9348],[0,0.9355],[0,0.9362],[0,0.9369],[0,0.9376],[0,0.9383],[0,0.939],[0,0.9397],[0,0.9404],[0,0.9411],[0,0.9419],[0,0.9426],[0,0.9433],[0,0.944],[0,0.9447],[0,0.9454],[0,0.9461],[0,0.9468],[0,0.9475],[0,0.9482],[0,0.9489],[0,0.9496],[0,0.9503],[0,0.951],[0,0.9517],[0,0.9524],[0,0.9531],[0,0.9538],[0,0.9546],[0,0.9553],[0,0.956],[0,0.9567],[0,0.9574],[0,0.9581],[0,0.9588],[0,0.9595],[0,0.9602],[0,0.9609],[0,0.9616],[0,0.9623],[0,0.963],[0,0.9637],[0,0.9644],[0,0.9651],[0,0.9658],[0,0.9666],[0,0.9673],[0,0.968],[0,0.9687],[0,0.9694],[0,0.9701],[0,0.9708],[0,0.9715],[0,0.9722],[0,0.9729],[0,0.9736],[0,0.9743],[0,0.975],[0,0.9757],[0,0.9764],[0,0.9771],[0,0.9778],[0,0.9785],[0,0.9793],[0,0.98],[0,0.9807],[0,0.9814],[0,0.9821],[0,0.9828],[0,0.9835],[0,0.9842],[0,0.9849],[0,0.9856],[0,0.9863],[0,0.987],[0,0.9877],[0,0.9884],[0,0.9891],[0,0.9898],[0,0.9905],[0,0.9913],[0,0.992],[0,0.9927],[0,0.9934],[0,0.9941],[0,0.9948],[0,0.9955],[0,0.9962],[0,0.9969],[0,0.9976],[0,0.9983],[0,0.999],[0,0.9997],[0,1.0004],[0,1.0011],[0,1.0018],[0,1.0025],[0,1.0033],[0,1.004],[0,1.0047],[0,1.0054],[0,1.0061],[0,1.0068],[0,1.0075],[0,1.0082],[0,1.0089],[0,1.0096],[0,1.0103],[0,1.011],[0,1.0117],[0,1.0124],[0,1.0131],[0,1.0138],[0,1.0145],[0,1.0152],[0,1.016],[0,1.0167],[0,1.0174],[0,1.0181],[0,1.0188],[0,1.0195],[0,1.0202],[0,1.0209],[0,1.0216],[0,1.0223],[0,1.023],[0,1.0237],[0,1.0244],[0,1.0251],[0,1.0258],[0,1.0265],[0,1.0272],[0,1.028],[0,1.0287],[0,1.0294],[0,1.0301],[0,1.0308],[0,1.0315],[0,1.0322],[0,1.0329],[0,1.0336],[0,1.0343],[0,1.035],[0,1.0357],[0,1.0364],[0,1.0371],[0,1.0378],[0,1.0385],[0,1.0392],[0,1.04],[0,1.0407],[0,1.0414],[0,1.0421],[0,1.0428],[0,1.0435],[0,1.0442],[0,1.0449],[0,1.0456],[0,1.0463],[0,1.047],[0,1.0477],[0,1.0484],[0,1.0491],[0,1.0498],[0,1.0505],[0,1.0512],[0,1.0519],[0,1.0527],[0,1.0534],[0,1.0541],[0,1.0548],[0,1.0555],[0,1.0562],[0,1.0569],[0,1.0576],[0,1.0583],[0,1.059],[0,1.0597],[0,1.0604],[0,1.0611],[0,1.0618],[0,1.0625],[0,1.0632],[0,1.0639],[0,1.0647],[0,1.0654],[0,1.0661],[0,1.0668],[0,1.0675],[0,1.0682],[0,1.0689],[0,1.0696],[0,1.0703],[0,1.071],[0,1.0717],[0,1.0724],[0,1.0731],[0,1.0738],[0,1.0745],[0,1.0752],[0,1.0759],[0,1.0766],[0,1.0774],[0,1.0781],[0,1.0788],[0,1.0795],[0,1.0802],[0,1.0809],[0,1.0816],[0,1.0823],[0,1.083],[0,1.0837],[0,1.0844],[0,1.0851],[0,1.0858],[0,1.0865],[0,1.0872],[0,1.0879],[0,1.0886],[0,1.0894],[0,1.0901],[0,1.0908],[0,1.0915],[0,1.0922],[0,1.0929],[0,1.0936],[0,1.0943],[0,1.095],[0,1.0957],[0,1.0964],[0,1.0971],[0,1.0978],[0,1.0985],[0,1.0992],[0,1.0999],[0,1.1006],[0,1.1014],[0,1.1021],[0,1.1028],[0,1.1035],[0,1.1042],[0,1.1049],[0,1.1056],[0,1.1063],[0,1.107],[0,1.1077],[0,1.1084],[0,1.1091],[0,1.1098],[0,1.1105],[0,1.1112],[0,1.1119],[0,1.1126],[0,1.1133],[0,1.1141],[0,1.1148],[0,1.1155],[0,1.1162],[0,1.1169],[0,1.1176],[0,1.1183],[0,1.119],[0,1.1197],[0,1.1204],[0,1.1211],[0,1.1218],[0,1.1225],[0,1.1232],[0,1.1239],[0,1.1246],[0,1.1253],[0,1.1261],[0,1.1268],[0,1.1275],[0,1.1282],[0,1.1289],[0,1.1296],[0,1.1303],[0,1.131],[0,1.1317],[0,1.1324],[0,1.1331],[0,1.1338],[0,1.1345],[0,1.1352],[0,1.1359],[0,1.1366],[0,1.1373],[0,1.1381],[0,1.1388],[0,1.1395],[0,1.1402],[0,1.1409],[0,1.1416],[0,1.1423],[0,1.143],[0,1.1437],[0,1.1444],[0,1.1451],[0,1.1458],[0,1.1465],[0,1.1472],[0,1.1479],[0,1.1486],[0,1.1493],[0,1.15],[0,1.1508],[0,1.1515],[0,1.1522],[0,1.1529],[0,1.1536],[0,1.1543],[0,1.155],[0,1.1557],[0,1.1564],[0,1.1571],[0,1.1578],[0,1.1585],[0,1.1592],[0,1.1599],[0,1.1606],[0,1.1613],[0,1.162],[0,1.1628],[0,1.1635],[0,1.1642],[0,1.1649],[0,1.1656],[0,1.1663],[0,1.167],[0,1.1677],[0,1.1684],[0,1.1691],[0,1.1698],[0,1.1705],[0,1.1712],[0,1.1719],[0,1.1726],[0,1.1733],[0,1.174],[0,1.1747],[0,1.1755],[0,1.1762],[0,1.1769],[0,1.1776],[0,1.1783],[0,1.179],[0,1.1797],[0,1.1804],[0,1.1811],[0,1.1818],[0,1.1825],[0,1.1832],[0,1.1839],[0,1.1846],[0,1.1853],[0,1.186],[0,1.1867],[0,1.1875],[0,1.1882],[0,1.1889],[0,1.1896],[0,1.1903],[0,1.191],[0,1.1917],[0,1.1924],[0,1.1931],[0,1.1938],[0,1.1945],[0,1.1952],[0,1.1959],[0,1.1966],[0,1.1973],[0,1.198],[0,1.1987],[0,1.1995],[0,1.2002],[0,1.2009],[0,1.2016],[0,1.2023],[0,1.203],[0,1.2037],[0,1.2044],[0,1.2051],[0,1.2058],[0,1.2065],[0,1.2072],[0,1.2079],[0,1.2086],[0,1.2093],[0,1.21],[0,1.2107],[0,1.2114],[0,1.2122],[0,1.2129],[0,1.2136],[0,1.2143],[0,1.215],[0,1.2157],[0,1.2164],[0,1.2171],[0,1.2178],[0,1.2185],[0,1.2192],[0,1.2199],[0,1.2206],[0,1.2213],[0,1.222],[0,1.2227],[0,1.2234],[0,1.2242],[0,1.2249],[0,1.2256],[0,1.2263],[0,1.227],[0,1.2277],[0,1.2284],[0,1.2291],[0,1.2298],[0,1.2305],[0,1.2312],[0,1.2319],[0,1.2326],[0,1.2333],[0,1.234],[0,1.2347],[0,1.2354],[0,1.2362],[0,1.2369],[0,1.2376],[0,1.2383],[0,1.239],[0,1.2397],[0,1.2404],[0,1.2411],[0,1.2418],[0,1.2425],[0,1.2432],[0,1.2439],[0,1.2446],[0,1.2453],[0,1.246],[0,1.2467],[0,1.2474],[0,1.2481],[0,1.2489],[0,1.2496],[0,1.2503],[0,1.251],[0,1.2517],[0,1.2524],[0,1.2531],[0,1.2538],[0,1.2545],[0,1.2552],[0,1.2559],[0,1.2566],[0,1.2573],[0,1.258],[0,1.2587],[0,1.2594],[0,1.2601],[0,1.2609],[0,1.2616],[0,1.2623],[0,1.263],[0,1.2637],[0,1.2644],[0,1.2651],[0,1.2658],[0,1.2665],[0,1.2672],[0,1.2679],[0,1.2686],[0,1.2693],[0,1.27],[0,1.2707],[0,1.2714],[0,1.2721],[0,1.2729],[0,1.2736],[0,1.2743],[0,1.275],[0,1.2757],[0,1.2764],[0,1.2771],[0,1.2778],[0,1.2785],[0,1.2792],[0,1.2799],[0,1.2806],[0,1.2813],[0,1.282],[0,1.2827],[0,1.2834],[0,1.2841],[0,1.2848],[0,1.2856],[0,1.2863],[0,1.287],[0,1.2877],[0,1.2884],[0,1.2891],[0,1.2898],[0,1.2905],[0,1.2912],[0,1.2919],[0,1.2926],[0,1.2933],[0,1.294],[0,1.2947],[0,1.2954],[0,1.2961],[0,1.2968],[0,1.2976],[0,1.2983],[0,1.299],[0,1.2997],[0,1.3004],[0,1.3011],[0,1.3018],[0,1.3025],[0,1.3032],[0,1.3039],[0,1.3046],[0,1.3053],[0,1.306],[0,1.3067],[0,1.3074],[0,1.3081],[0,1.3088],[0,1.3095],[0,1.3103],[0,1.311],[0,1.3117],[0,1.3124],[0,1.3131],[0,1.3138],[0,1.3145],[0,1.3152],[0,1.3159],[0,1.3166],[0,1.3173],[0,1.318],[0,1.3187],[0,1.3194],[0,1.3201],[0,1.3208],[0,1.3215],[0,1.3223],[0,1.323],[0,1.3237],[0,1.3244],[0,1.3251],[0,1.3258],[0,1.3265],[0,1.3272],[0,1.3279],[0,1.3286],[0,1.3293],[0,1.33],[0,1.3307],[0,1.3314],[0,1.3321],[0,1.3328],[0,1.3335],[0,1.3343],[0,1.335],[0,1.3357],[0,1.3364],[0,1.3371],[0,1.3378],[0,1.3385],[0,1.3392],[0,1.3399],[0,1.3406],[0,1.3413],[0,1.342],[0,1.3427],[0,1.3434],[0,1.3441],[0,1.3448],[0,1.3455],[0,1.3462],[0,1.347],[0,1.3477],[0,1.3484],[0,1.3491],[0,1.3498],[0,1.3505],[0,1.3512],[0,1.3519],[0,1.3526],[0,1.3533],[0,1.354],[0,1.3547],[0,1.3554],[0,1.3561],[0,1.3568],[0,1.3575],[0,1.3582],[0,1.359],[0,1.3597],[0,1.3604],[0,1.3611],[0,1.3618],[0,1.3625],[0,1.3632],[0,1.3639],[0,1.3646],[0,1.3653],[0,1.366],[0,1.3667],[0,1.3674],[0,1.3681],[0,1.3688],[0,1.3695],[0,1.3702],[0,1.371],[0,1.3717],[0,1.3724],[0,1.3731],[0,1.3738],[0,1.3745],[0,1.3752],[0,1.3759],[0,1.3766],[0,1.3773],[0,1.378],[0,1.3787],[0,1.3794],[0,1.3801],[0,1.3808],[0,1.3815],[0,1.3822],[0,1.3829],[0,1.3837],[0,1.3844],[0,1.3851],[0,1.3858],[0,1.3865],[0,1.3872],[0,1.3879],[0,1.3886],[0,1.3893],[0,1.39],[0,1.3907],[0,1.3914],[0,1.3921],[0,1.3928],[0,1.3935],[0,1.3942],[0,1.3949],[0,1.3957],[0,1.3964],[0,1.3971],[0,1.3978],[0,1.3985],[0,1.3992],[0,1.3999],[0,1.4006],[0,1.4013],[0,1.402],[0,1.4027],[0,1.4034],[0,1.4041],[0,1.4048],[0,1.4055],[0,1.4062],[0,1.4069],[0,1.4076],[0,1.4084],[0,1.4091],[0,1.4098],[0,1.4105],[0,1.4112],[0,1.4119],[0,1.4126],[0,1.4133],[0,1.414],[0,1.4147],[0,1.4154],[0,1.4161],[0,1.4168],[0,1.4175],[0,1.4182],[0,1.4189],[0,1.4196],[0,1.4204],[0,1.4211],[0,1.4218],[0,1.4225],[0,1.4232],[0,1.4239],[0,1.4246],[0,1.4253],[0,1.426],[0,1.4267],[0,1.4274],[0,1.4281],[0,1.4288],[0,1.4295],[0,1.4302],[0,1.4309],[0,1.4316],[0,1.4324],[0,1.4331],[0,1.4338],[0,1.4345],[0,1.4352],[0,1.4359],[0,1.4366],[0,1.4373],[0,1.438],[0,1.4387],[0,1.4394],[0,1.4401],[0,1.4408],[0,1.4415],[0,1.4422],[0,1.4429],[0,1.4436],[0,1.4443],[0,1.4451],[0,1.4458],[0,1.4465],[0,1.4472],[0,1.4479],[0,1.4486],[0,1.4493],[0,1.45],[0,1.4507],[0,1.4514],[0,1.4521],[0,1.4528],[0,1.4535],[0,1.4542],[0,1.4549],[0,1.4556],[0,1.4563],[0,1.4571],[0,1.4578],[0,1.4585],[0,1.4592],[0,1.4599],[0,1.4606],[0,1.4613],[0,1.462],[0,1.4627],[0,1.4634],[0,1.4641],[0,1.4648],[0,1.4655],[0,1.4662],[0,1.4669],[0,1.4676],[0,1.4683],[0,1.4691],[0,1.4698],[0,1.4705],[0,1.4712],[0,1.4719],[0,1.4726],[0,1.4733],[0,1.474],[0,1.4747],[0,1.4754],[0,1.4761],[0,1.4768],[0,1.4775],[0,1.4782],[0,1.4789],[0,1.4796],[0,1.4803],[0,1.481],[0,1.4818],[0,1.4825],[0,1.4832],[0,1.4839],[0,1.4846],[0,1.4853],[0,1.486],[0,1.4867],[0,1.4874],[0,1.4881],[0,1.4888],[0,1.4895],[0,1.4902],[0,1.4909],[0,1.4916],[0,1.4923],[0,1.493],[0,1.4938],[0,1.4945],[0,1.4952],[0,1.4959],[0,1.4966],[0,1.4973],[0,1.498],[0,1.4987],[0,1.4994],[0,1.5001],[0,1.5008],[0,1.5015],[0,1.5022],[0,1.5029],[0,1.5036],[0,1.5043],[0,1.505],[0,1.5057],[0,1.5065],[0,1.5072],[0,1.5079],[0,1.5086],[0,1.5093],[0,1.51],[0,1.5107],[0,1.5114],[0,1.5121],[0,1.5128],[0,1.5135],[0,1.5142],[0,1.5149],[0,1.5156],[0,1.5163],[0,1.517],[0,1.5177],[0,1.5185],[0,1.5192],[0,1.5199],[0,1.5206],[0,1.5213],[0,1.522],[0,1.5227],[0,1.5234],[0,1.5241],[0,1.5248],[0,1.5255],[0,1.5262],[0,1.5269],[0,1.5276],[0,1.5283],[0,1.529],[0,1.5297],[0,1.5305],[0,1.5312],[0,1.5319],[0,1.5326],[0,1.5333],[0,1.534],[0,1.5347],[0,1.5354],[0,1.5361],[0,1.5368],[0,1.5375],[0,1.5382],[0,1.5389],[0,1.5396],[0,1.5403],[0,1.541],[0,1.5417],[0,1.5424],[0,1.5432],[0,1.5439],[0,1.5446],[0,1.5453],[0,1.546],[0,1.5467],[0,1.5474],[0,1.5481],[0,1.5488],[0,1.5495],[0,1.5502],[0,1.5509],[0,1.5516],[0,1.5523],[0,1.553],[0,1.5537],[0,1.5544],[0,1.5552],[0,1.5559],[0,1.5566],[0,1.5573],[0,1.558],[0,1.5587],[0,1.5594],[0,1.5601],[0,1.5608],[0,1.5615],[0,1.5622],[0,1.5629],[0,1.5636],[0,1.5643],[0,1.565],[0,1.5657],[0,1.5664],[0,1.5672],[0,1.5679],[0,1.5686],[0,1.5693],[0,1.57],[0,1.5707],[0,1.5714],[0,1.5721],[0,1.5728],[0,1.5735],[0,1.5742],[0,1.5749],[0,1.5756],[0,1.5763],[0,1.577],[0,1.5777],[0,1.5784],[0,1.5791],[0,1.5799],[0,1.5806],[0,1.5813],[0,1.582],[0,1.5827],[0,1.5834],[0,1.5841],[0,1.5848],[0,1.5855],[0,1.5862],[0,1.5869],[0,1.5876],[0,1.5883],[0,1.589],[0,1.5897],[0,1.5904],[0,1.5911],[0,1.5919],[0,1.5926],[0,1.5933],[0,1.594],[0,1.5947],[0,1.5954],[0,1.5961],[0,1.5968],[0,1.5975],[0,1.5982],[0,1.5989],[0,1.5996],[0,1.6003],[0,1.601],[0,1.6017],[0,1.6024],[0,1.6031],[0,1.6038],[0,1.6046],[0,1.6053],[0,1.606],[0,1.6067],[0,1.6074],[0,1.6081],[0,1.6088],[0,1.6095],[0,1.6102],[0,1.6109],[0,1.6116],[0,1.6123],[0,1.613],[0,1.6137],[0,1.6144],[0,1.6151],[0,1.6158],[0,1.6166],[0,1.6173],[0,1.618],[0,1.6187],[0,1.6194],[0,1.6201],[0,1.6208],[0,1.6215],[0,1.6222],[0.0001,1.623],[0.0001,1.6237],[0.0002,1.6244],[0.0003,1.6251],[0.0005,1.6259],[0.0006,1.6266],[0.0008,1.6272],[0.0011,1.6279],[0.0013,1.6286],[0.0016,1.6292],[0.0018,1.6299],[0.0022,1.6305],[0.0025,1.6312],[0.0028,1.6318],[0.0032,1.6324],[0.0036,1.6329],[0.004,1.6335],[0.0044,1.6341],[0.0049,1.6346],[0.0054,1.6351],[0.0058,1.6356],[0.0064,1.6361],[0.0069,1.6366],[0.0074,1.637],[0.008,1.6375],[0.0085,1.6379],[0.0091,1.6383],[0.0097,1.6387],[0.0103,1.639],[0.011,1.6393],[0.0116,1.6396],[0.0123,1.6399],[0.0129,1.6402],[0.0136,1.6404],[0.0143,1.6407],[0.015,1.6409],[0.0157,1.641],[0.0164,1.6412],[0.0172,1.6413],[0.0176,1.6413],[0.0181,1.6414],[0.0188,1.6415],[0.0196,1.6415],[0.0203,1.6416],[0.0211,1.6417],[0.0218,1.6418],[0.0225,1.6418],[0.0233,1.6419],[0.024,1.642],[0.0248,1.6421],[0.0255,1.6422],[0.0263,1.6422],[0.027,1.6423],[0.0278,1.6424],[0.0285,1.6425],[0.0292,1.6425],[0.03,1.6426],[0.0307,1.6427],[0.0315,1.6428],[0.0323,1.6429],[0.033,1.6429],[0.0338,1.643],[0.0345,1.6431],[0.0353,1.6432],[0.036,1.6432],[0.0368,1.6433],[0.0375,1.6434],[0.0383,1.6435],[0.039,1.6436],[0.0397,1.6436],[0.0404,1.6437],[0.0411,1.6438],[0.0418,1.6438],[0.0426,1.6439],[0.0433,1.644],[0.044,1.6441],[0.0447,1.6441],[0.0454,1.6442],[0.0461,1.6443],[0.0468,1.6444],[0.0475,1.6444],[0.0482,1.6445],[0.0489,1.6446],[0.0496,1.6447],[0.0503,1.6447],[0.0511,1.6448],[0.0518,1.6449],[0.0525,1.645],[0.0532,1.645],[0.0539,1.6451],[0.0546,1.6452],[0.0553,1.6452],[0.056,1.6453],[0.0568,1.6454],[0.0575,1.6455],[0.0582,1.6455],[0.0589,1.6456],[0.0596,1.6457],[0.0603,1.6458],[0.061,1.6458],[0.0617,1.6459],[0.0624,1.646],[0.0631,1.6461],[0.0639,1.6461],[0.0646,1.6462],[0.0653,1.6463],[0.066,1.6463],[0.0667,1.6464],[0.0674,1.6465],[0.0681,1.6466],[0.0688,1.6466],[0.0695,1.6467],[0.0702,1.6468],[0.0709,1.6469],[0.0716,1.6469],[0.0723,1.647],[0.073,1.6471],[0.0737,1.6472],[0.0744,1.6472],[0.0751,1.6473],[0.0758,1.6474],[0.0765,1.6474],[0.0772,1.6475],[0.078,1.6476],[0.0787,1.6477],[0.0794,1.6477],[0.0801,1.6478],[0.0808,1.6479],[0.0815,1.648],[0.0822,1.648],[0.0829,1.6481],[0.0836,1.6482],[0.0843,1.6482],[0.085,1.6483],[0.0857,1.6484],[0.0864,1.6485],[0.0871,1.6485],[0.0878,1.6486],[0.0885,1.6487],[0.0892,1.6488],[0.0899,1.6488],[0.0906,1.6489],[0.0914,1.649],[0.0921,1.6491],[0.0928,1.6491],[0.0935,1.6492],[0.0942,1.6493],[0.0949,1.6493],[0.0956,1.6494],[0.0963,1.6495],[0.097,1.6496],[0.0977,1.6496],[0.0984,1.6497],[0.0991,1.6498],[0.0998,1.6499],[0.1005,1.6499],[0.1012,1.65],[0.1019,1.6501],[0.1026,1.6501],[0.1033,1.6502],[0.1041,1.6503],[0.1048,1.6504],[0.1055,1.6504],[0.1062,1.6505],[0.1069,1.6506],[0.1076,1.6507],[0.1083,1.6507],[0.109,1.6508],[0.1098,1.6509],[0.1105,1.651],[0.1112,1.651],[0.1119,1.6511],[0.1126,1.6512],[0.1133,1.6513],[0.114,1.6513],[0.1148,1.6514],[0.1155,1.6515],[0.1162,1.6515],[0.1169,1.6516],[0.1176,1.6517],[0.1183,1.6518],[0.119,1.6518],[0.1197,1.6519],[0.1204,1.652],[0.1211,1.6521],[0.1218,1.6521],[0.1226,1.6522],[0.1233,1.6523],[0.124,1.6524],[0.1247,1.6524],[0.1254,1.6525],[0.1261,1.6526],[0.1268,1.6526],[0.1275,1.6527],[0.1282,1.6528],[0.1289,1.6529],[0.1296,1.6529],[0.1303,1.653],[0.131,1.6531],[0.1317,1.6532],[0.1324,1.6532],[0.1331,1.6533],[0.1338,1.6534],[0.1345,1.6534],[0.1352,1.6535],[0.136,1.6536],[0.1367,1.6537],[0.1375,1.6538],[0.1382,1.6538],[0.139,1.6539],[0.1397,1.654],[0.1404,1.6541],[0.1412,1.6541],[0.1419,1.6542],[0.1427,1.6543],[0.1434,1.6544],[0.1442,1.6544],[0.1449,1.6545],[0.1457,1.6546],[0.1464,1.6547],[0.1471,1.6548],[0.1479,1.6548],[0.1486,1.6549],[0.1494,1.655],[0.1501,1.6551],[0.1508,1.6551],[0.1516,1.6552],[0.1523,1.6553],[0.153,1.6554],[0.1538,1.6554],[0.1545,1.6555],[0.1552,1.6556],[0.156,1.6557],[0.1567,1.6557],[0.1574,1.6558],[0.1581,1.6559],[0.1589,1.656],[0.1596,1.656],[0.1603,1.6561],[0.1611,1.6562],[0.1618,1.6563],[0.1625,1.6563],[0.1632,1.6564],[0.1639,1.6565],[0.1647,1.6566],[0.1654,1.6566],[0.1661,1.6567],[0.1668,1.6568],[0.1675,1.6569],[0.1682,1.6569],[0.169,1.657],[0.1697,1.6571],[0.1704,1.6572],[0.1711,1.6572],[0.1718,1.6573],[0.1725,1.6574],[0.1732,1.6575],[0.1739,1.6575],[0.1746,1.6576],[0.1753,1.6577],[0.1761,1.6578],[0.1769,1.6578],[0.1777,1.6579],[0.1785,1.658],[0.1793,1.6581],[0.1801,1.6582],[0.181,1.6583],[0.1818,1.6583],[0.1826,1.6584],[0.1834,1.6585],[0.1842,1.6586],[0.185,1.6587],[0.1858,1.6588],[0.1866,1.6588],[0.1874,1.6589],[0.1882,1.659],[0.189,1.6591],[0.1898,1.6592],[0.1906,1.6593],[0.1914,1.6593],[0.1922,1.6594],[0.193,1.6595],[0.1938,1.6596],[0.1946,1.6597],[0.1953,1.6598],[0.1961,1.6598],[0.1969,1.6599],[0.1977,1.66],[0.1985,1.6601],[0.1992,1.6602],[0.2,1.6602],[0.2008,1.6603],[0.2015,1.6604],[0.2023,1.6605],[0.2031,1.6606],[0.2038,1.6606],[0.2046,1.6607],[0.2054,1.6608],[0.2061,1.6609],[0.2069,1.6609],[0.2076,1.661],[0.2084,1.6611],[0.2092,1.6612],[0.2099,1.6613],[0.2106,1.6613],[0.2114,1.6614],[0.2121,1.6615],[0.2129,1.6616],[0.2136,1.6616],[0.2143,1.6617],[0.2151,1.6618],[0.2158,1.6619],[0.2165,1.6619],[0.2173,1.662],[0.218,1.6621],[0.2187,1.6622],[0.2194,1.6622],[0.2202,1.6623],[0.2209,1.6624],[0.2216,1.6625],[0.2223,1.6625],[0.223,1.6626],[0.2237,1.6627],[0.2244,1.6628],[0.2251,1.6628],[0.2259,1.6629],[0.2266,1.663],[0.2274,1.6631],[0.2282,1.6632],[0.229,1.6632],[0.2299,1.6633],[0.2307,1.6634],[0.2315,1.6635],[0.2323,1.6636],[0.2331,1.6637],[0.234,1.6638],[0.2348,1.6638],[0.2356,1.6639],[0.2364,1.664],[0.2372,1.6641],[0.238,1.6642],[0.2387,1.6642],[0.2395,1.6643],[0.2403,1.6644],[0.2411,1.6645],[0.2419,1.6646],[0.2426,1.6646],[0.2434,1.6647],[0.2442,1.6648],[0.2449,1.6649],[0.2457,1.665],[0.2464,1.665],[0.2472,1.6651],[0.2479,1.6652],[0.2486,1.6653],[0.2494,1.6653],[0.2501,1.6654],[0.2508,1.6655],[0.2516,1.6656],[0.2523,1.6656],[0.253,1.6657],[0.2537,1.6658],[0.2546,1.6659],[0.2555,1.666],[0.2563,1.6661],[0.2572,1.6662],[0.258,1.6662],[0.2589,1.6663],[0.2597,1.6664],[0.2606,1.6665],[0.2614,1.6666],[0.2622,1.6667],[0.263,1.6668],[0.2639,1.6668],[0.2647,1.6669],[0.2654,1.667],[0.2662,1.6671],[0.267,1.6672],[0.2678,1.6673],[0.2686,1.6673],[0.2693,1.6674],[0.2701,1.6675],[0.2708,1.6676],[0.2715,1.6676],[0.2723,1.6677],[0.273,1.6678],[0.2737,1.6679],[0.2744,1.6679],[0.2751,1.668],[0.2758,1.6681],[0.2767,1.6682],[0.2776,1.6683],[0.2785,1.6684],[0.2794,1.6685],[0.2802,1.6685],[0.2811,1.6686],[0.2819,1.6687],[0.2827,1.6688],[0.2835,1.6689],[0.2841,1.6689],[0.2847,1.669],[0.2852,1.6691],[0.2858,1.6691],[0.2864,1.6692],[0.2869,1.6692],[0.2874,1.6693],[0.288,1.6693],[0.2885,1.6694],[0.289,1.6695],[0.2895,1.6695],[0.29,1.6696],[0.2905,1.6696],[0.291,1.6697],[0.2914,1.6697],[0.2919,1.6697],[0.2923,1.6698],[0.2928,1.6698],[0.2932,1.6699],[0.2936,1.6699],[0.2941,1.67],[0.2945,1.67],[0.2949,1.6701],[0.2952,1.6701],[0.2956,1.6701],[0.296,1.6702],[0.2963,1.6702],[0.2967,1.6702],[0.297,1.6703],[0.2974,1.6703],[0.2977,1.6703],[0.298,1.6704],[0.2983,1.6704],[0.2986,1.6704],[0.2989,1.6705],[0.2991,1.6705],[0.2994,1.6705],[0.2997,1.6706],[0.2999,1.6706],[0.3001,1.6706],[0.3003,1.6706],[0.3006,1.6706],[0.3008,1.6707],[0.301,1.6707],[0.3011,1.6707],[0.3013,1.6707],[0.3015,1.6707],[0.3016,1.6708],[0.3018,1.6708],[0.3019,1.6708],[0.302,1.6708],[0.3021,1.6708],[0.3023,1.6708],[0.3025,1.6708],[0.3031,1.6709],[0.3037,1.6709],[0.3043,1.6709],[0.3049,1.6709],[0.3055,1.6709],[0.306,1.6708],[0.3066,1.6707],[0.3071,1.6706],[0.3076,1.6705],[0.3082,1.6704],[0.3086,1.6703],[0.3091,1.6701],[0.3096,1.6699],[0.3101,1.6697],[0.3105,1.6695],[0.3109,1.6693],[0.3113,1.6691],[0.3117,1.6689],[0.3121,1.6686],[0.3125,1.6684],[0.3129,1.6681],[0.3132,1.6678],[0.3136,1.6676],[0.3139,1.6673],[0.3142,1.667],[0.3145,1.6667],[0.3148,1.6664],[0.3151,1.6661],[0.3154,1.6658],[0.3157,1.6655],[0.3159,1.6652],[0.3161,1.6649],[0.3164,1.6646],[0.3166,1.6643],[0.3168,1.664],[0.317,1.6637],[0.3172,1.6634],[0.3174,1.6631],[0.3176,1.6628],[0.3177,1.6625],[0.3179,1.6622],[0.318,1.662],[0.3182,1.6617],[0.3183,1.6614],[0.3184,1.6612],[0.3185,1.661],[0.3186,1.6608],[0.3187,1.6605],[0.3188,1.6603],[0.3189,1.6602],[0.3189,1.66],[0.319,1.6598],[0.319,1.6597],[0.3191,1.6596],[0.3191,1.6595],[0.3192,1.6594],[0.3192,1.6593],[0.3192,1.6593],[0.3192,1.6592],[0.3192,1.6592],[0.3192,1.6592],[0.3192,1.6592],[0.3192,1.6591],[0.3192,1.6591],[0.3192,1.659],[0.3192,1.6589],[0.3193,1.6588],[0.3193,1.6587],[0.3193,1.6586],[0.3193,1.6584],[0.3193,1.6583],[0.3193,1.6581],[0.3194,1.6579],[0.3194,1.6577],[0.3194,1.6575],[0.3194,1.6572],[0.3195,1.657],[0.3195,1.6567],[0.3195,1.6564],[0.3195,1.6561],[0.3196,1.6558],[0.3196,1.6555],[0.3197,1.6552],[0.3197,1.6549],[0.3197,1.6545],[0.3198,1.6541],[0.3198,1.6537],[0.3199,1.6533],[0.3199,1.6529],[0.3199,1.6525],[0.32,1.6521],[0.32,1.6516],[0.3201,1.6512],[0.3201,1.6507],[0.3202,1.6502],[0.3202,1.6497],[0.3203,1.6492],[0.3204,1.6487],[0.3204,1.6482],[0.3205,1.6477],[0.3205,1.6471],[0.3206,1.6466],[0.3206,1.646],[0.3207,1.6454],[0.3208,1.6448],[0.3208,1.6442],[0.3209,1.6436],[0.321,1.643],[0.321,1.6424],[0.3211,1.6417],[0.3212,1.6411],[0.3212,1.6404],[0.3213,1.6398],[0.3214,1.6391],[0.3215,1.6384],[0.3215,1.6377],[0.3216,1.637],[0.3217,1.6363],[0.3218,1.6356],[0.3218,1.6349],[0.3219,1.6341],[0.322,1.6334],[0.3221,1.6326],[0.3222,1.6319],[0.3222,1.6311],[0.3223,1.6303],[0.3224,1.6295],[0.3225,1.6288],[0.3226,1.628],[0.3227,1.6271],[0.3228,1.6263],[0.3228,1.6255],[0.3229,1.6247],[0.323,1.6239],[0.3231,1.623],[0.3232,1.6222],[0.3233,1.6214],[0.3234,1.6205],[0.3235,1.6196],[0.3236,1.6188],[0.3236,1.6181],[0.3237,1.6174],[0.3238,1.6167],[0.3239,1.616],[0.3239,1.6153],[0.324,1.6146],[0.3241,1.6138],[0.3242,1.6131],[0.3243,1.6124],[0.3243,1.6117],[0.3244,1.611],[0.3245,1.6102],[0.3246,1.6095],[0.3246,1.6088],[0.3247,1.608],[0.3248,1.6073],[0.3249,1.6065],[0.325,1.6058],[0.325,1.6051],[0.3251,1.6043],[0.3252,1.6036],[0.3253,1.6028],[0.3254,1.602],[0.3254,1.6013],[0.3255,1.6005],[0.3256,1.5998],[0.3257,1.599],[0.3258,1.5982],[0.3259,1.5975],[0.3259,1.5967],[0.326,1.596],[0.3261,1.5953],[0.3262,1.5946],[0.3262,1.5939],[0.3263,1.5932],[0.3264,1.5925],[0.3265,1.5918],[0.3265,1.5911],[0.3266,1.5904],[0.3267,1.5897],[0.3268,1.589],[0.3268,1.5883],[0.3269,1.5876],[0.327,1.5869],[0.3271,1.5861],[0.3272,1.5854],[0.3272,1.5847],[0.3273,1.584],[0.3274,1.5833],[0.3275,1.5826],[0.3275,1.5819],[0.3276,1.5812],[0.3277,1.5805],[0.3278,1.5798],[0.3278,1.579],[0.3279,1.5783],[0.328,1.5776],[0.3281,1.5769],[0.3281,1.5762],[0.3282,1.5755],[0.3283,1.5748],[0.3284,1.5741],[0.3285,1.5734],[0.3285,1.5727],[0.3286,1.572],[0.3287,1.5713],[0.3288,1.5705],[0.3288,1.5698],[0.3289,1.5691],[0.329,1.5684],[0.3291,1.5677],[0.3291,1.567],[0.3292,1.5663],[0.3293,1.5656],[0.3294,1.5649],[0.3294,1.5641],[0.3295,1.5633],[0.3296,1.5626],[0.3297,1.5618],[0.3298,1.561],[0.3299,1.5603],[0.3299,1.5595],[0.33,1.5588],[0.3301,1.558],[0.3302,1.5573],[0.3303,1.5565],[0.3303,1.5558],[0.3304,1.555],[0.3305,1.5543],[0.3306,1.5535],[0.3307,1.5528],[0.3307,1.5521],[0.3308,1.5513],[0.3309,1.5506],[0.331,1.5499],[0.3311,1.5492],[0.3311,1.5484],[0.3312,1.5477],[0.3313,1.547],[0.3314,1.5463],[0.3314,1.5456],[0.3315,1.5449],[0.3316,1.5442],[0.3317,1.5435],[0.3318,1.5426],[0.3319,1.5417],[0.3319,1.5409],[0.332,1.54],[0.3321,1.5392],[0.3322,1.5383],[0.3323,1.5375],[0.3324,1.5367],[0.3325,1.5358],[0.3326,1.535],[0.3327,1.5342],[0.3327,1.5334],[0.3328,1.5326],[0.3329,1.5318],[0.333,1.5311],[0.3331,1.5303],[0.3332,1.5295],[0.3332,1.5288],[0.3333,1.528],[0.3334,1.5273],[0.3335,1.5265],[0.3336,1.5258],[0.3336,1.5251],[0.3337,1.5244],[0.3338,1.5237],[0.3339,1.523],[0.3339,1.5223],[0.334,1.5216],[0.3341,1.521],[0.3342,1.5203],[0.3342,1.5197],[0.3343,1.519],[0.3344,1.5184],[0.3344,1.5178],[0.3345,1.5172],[0.3346,1.5166],[0.3346,1.516],[0.3347,1.5154],[0.3347,1.5148],[0.3348,1.5143],[0.3349,1.5137],[0.3349,1.5132],[0.335,1.5127],[0.335,1.5121],[0.3351,1.5117],[0.3351,1.5112],[0.3352,1.5107],[0.3352,1.5102],[0.3353,1.5098],[0.3353,1.5093],[0.3354,1.5089],[0.3354,1.5085],[0.3355,1.5081],[0.3355,1.5077],[0.3356,1.5073],[0.3356,1.5069],[0.3356,1.5066],[0.3357,1.5062],[0.3357,1.5059],[0.3357,1.5056],[0.3358,1.5053],[0.3358,1.505],[0.3358,1.5047],[0.3359,1.5044],[0.3359,1.5042],[0.3359,1.5039],[0.3359,1.5037],[0.336,1.5035],[0.336,1.5033],[0.336,1.5032],[0.336,1.503],[0.336,1.5028],[0.336,1.5027],[0.3361,1.5026],[0.3361,1.5025],[0.3361,1.5024],[0.3361,1.5023],[0.3361,1.5023],[0.3361,1.5022],[0.3361,1.5022],[0.3361,1.5022],[0.3361,1.5022],[0.3361,1.5022],[0.3361,1.5022],[0.3361,1.5022],[0.3361,1.5022],[0.3361,1.5022],[0.3361,1.5022],[0.3361,1.5018],[0.3361,1.5015],[0.3361,1.5008],[0.336,1.5001],[0.336,1.4994],[0.3359,1.4987],[0.3358,1.4981],[0.3357,1.4974],[0.3356,1.4967],[0.3355,1.4961],[0.3353,1.4954],[0.3352,1.4948],[0.335,1.4941],[0.3348,1.4935],[0.3346,1.4928],[0.3344,1.4922],[0.3342,1.4916],[0.3339,1.4909],[0.3337,1.4903],[0.3334,1.4897],[0.3331,1.4891],[0.3329,1.4885],[0.3326,1.4879],[0.3322,1.4872],[0.3319,1.4866],[0.3316,1.486],[0.3312,1.4855],[0.3309,1.4849],[0.3305,1.4843],[0.3301,1.4837],[0.3297,1.4831],[0.3293,1.4825],[0.3289,1.4819],[0.3285,1.4814],[0.328,1.4808],[0.3276,1.4802],[0.3271,1.4796],[0.3266,1.4791],[0.3262,1.4785],[0.3257,1.4779],[0.3252,1.4774],[0.3247,1.4768],[0.3241,1.4762],[0.3236,1.4757],[0.3231,1.4751],[0.3225,1.4746],[0.322,1.474],[0.3214,1.4735],[0.3208,1.4729],[0.3202,1.4724],[0.3197,1.4718],[0.3191,1.4712],[0.3185,1.4707],[0.3178,1.4701],[0.3172,1.4696],[0.3166,1.469],[0.316,1.4685],[0.3153,1.4679],[0.3147,1.4674],[0.314,1.4669],[0.3134,1.4663],[0.3127,1.4658],[0.312,1.4652],[0.3113,1.4647],[0.3108,1.4642],[0.3102,1.4638],[0.3097,1.4633],[0.3091,1.4629],[0.3086,1.4624],[0.308,1.462],[0.3074,1.4616],[0.3068,1.4611],[0.3063,1.4607],[0.3057,1.4602],[0.3051,1.4598],[0.3045,1.4593],[0.3039,1.4589],[0.3033,1.4584],[0.3027,1.458],[0.3021,1.4575],[0.3015,1.4571],[0.3009,1.4566],[0.3003,1.4562],[0.2997,1.4557],[0.2991,1.4553],[0.2985,1.4548],[0.2979,1.4543],[0.2973,1.4539],[0.2967,1.4534],[0.296,1.453],[0.2954,1.4525],[0.2948,1.452],[0.2942,1.4516],[0.2935,1.4511],[0.2929,1.4506],[0.2923,1.4501],[0.2917,1.4497],[0.291,1.4492],[0.2904,1.4487],[0.2898,1.4482],[0.2891,1.4477],[0.2885,1.4473],[0.2878,1.4468],[0.2872,1.4463],[0.2866,1.4458],[0.2859,1.4453],[0.2853,1.4448],[0.2847,1.4443],[0.284,1.4438],[0.2834,1.4433],[0.2827,1.4428],[0.2821,1.4423],[0.2815,1.4418],[0.2808,1.4413],[0.2802,1.4407],[0.2795,1.4402],[0.2789,1.4397],[0.2782,1.4392],[0.2776,1.4387],[0.277,1.4381],[0.2763,1.4376],[0.2757,1.437],[0.2751,1.4365],[0.2744,1.436],[0.2738,1.4354],[0.2732,1.4349],[0.2725,1.4343],[0.2719,1.4338],[0.2713,1.4332],[0.2706,1.4326],[0.27,1.4321],[0.2694,1.4315],[0.2687,1.4309],[0.2681,1.4304],[0.2676,1.4299],[0.2671,1.4294],[0.2666,1.4289],[0.266,1.4284],[0.2655,1.4279],[0.265,1.4274],[0.2645,1.4269],[0.264,1.4264],[0.2635,1.4259],[0.263,1.4254],[0.2625,1.4249],[0.262,1.4244],[0.2615,1.4239],[0.261,1.4234],[0.2605,1.4228],[0.26,1.4223],[0.2595,1.4218],[0.259,1.4213],[0.2585,1.4207],[0.258,1.4202],[0.2575,1.4197],[0.257,1.4191],[0.2566,1.4186],[0.2561,1.418],[0.2556,1.4175],[0.2551,1.4169],[0.2547,1.4164],[0.2542,1.4158],[0.2537,1.4152],[0.2532,1.4147],[0.2528,1.4141],[0.2523,1.4135],[0.2519,1.413],[0.2514,1.4124],[0.251,1.4118],[0.2505,1.4112],[0.2501,1.4106],[0.2496,1.41],[0.2492,1.4094],[0.2487,1.4088],[0.2483,1.4082],[0.2479,1.4076],[0.2474,1.407],[0.247,1.4064],[0.2466,1.4058],[0.2462,1.4051],[0.2458,1.4045],[0.2453,1.4039],[0.2449,1.4032],[0.2445,1.4026],[0.2441,1.402],[0.2437,1.4013],[0.2433,1.4007],[0.2429,1.4],[0.2425,1.3993],[0.2422,1.3987],[0.2418,1.398],[0.2414,1.3973],[0.241,1.3967],[0.2407,1.396],[0.2403,1.3953],[0.2399,1.3946],[0.2396,1.3939],[0.2392,1.3932],[0.2389,1.3925],[0.2385,1.3918],[0.2382,1.3911],[0.2378,1.3904],[0.2375,1.3897],[0.2372,1.389],[0.2368,1.3882],[0.2365,1.3875],[0.2362,1.3868],[0.2359,1.386],[0.2356,1.3853],[0.2353,1.3845],[0.235,1.3838],[0.2347,1.383],[0.2344,1.3823],[0.2341,1.3815],[0.2338,1.3807],[0.2336,1.38],[0.2333,1.3792],[0.233,1.3784],[0.2328,1.3776],[0.2325,1.3768],[0.2323,1.376],[0.232,1.3752],[0.2318,1.3744],[0.2315,1.3736],[0.2313,1.3728],[0.2311,1.3719],[0.2309,1.3711],[0.2307,1.3703],[0.2305,1.3694],[0.2303,1.3686],[0.2301,1.3677],[0.2299,1.3669],[0.2297,1.366],[0.2295,1.3652],[0.2293,1.3643],[0.2292,1.3634],[0.229,1.3625],[0.2288,1.3616],[0.2287,1.3608],[0.2285,1.3599],[0.2284,1.3589],[0.2283,1.358],[0.2282,1.3571],[0.228,1.3562],[0.2279,1.3553],[0.2278,1.3546],[0.2278,1.3539],[0.2277,1.3532],[0.2276,1.3525],[0.2275,1.3518],[0.2275,1.3511],[0.2274,1.3503],[0.2274,1.3496],[0.2273,1.3489],[0.2273,1.3482],[0.2272,1.3474],[0.2272,1.3467],[0.2271,1.346],[0.2271,1.3452],[0.2271,1.3445],[0.227,1.3438],[0.227,1.343],[0.227,1.3422],[0.227,1.3415],[0.227,1.3407],[0.227,1.34],[0.227,1.3392],[0.227,1.3384],[0.227,1.3377],[0.227,1.3369],[0.227,1.3361],[0.227,1.3353],[0.227,1.3345],[0.227,1.3338],[0.2271,1.333],[0.2271,1.3322],[0.2271,1.3314],[0.2272,1.3306],[0.2272,1.3298],[0.2273,1.3289],[0.2273,1.3281],[0.2274,1.3273],[0.2274,1.3265],[0.2275,1.3257],[0.2276,1.3249],[0.2277,1.324],[0.2277,1.3232],[0.2278,1.3223],[0.2279,1.3215],[0.228,1.3207],[0.2281,1.3198],[0.2282,1.319],[0.2283,1.3181],[0.2284,1.3172],[0.2285,1.3164],[0.2286,1.3155],[0.2287,1.3146],[0.2288,1.3139],[0.229,1.3132],[0.2291,1.3125],[0.2292,1.3118],[0.2293,1.3111],[0.2294,1.3104],[0.2295,1.3097],[0.2296,1.309],[0.2298,1.3083],[0.2299,1.3075],[0.23,1.3068],[0.2302,1.3061],[0.2303,1.3054],[0.2304,1.3046],[0.2306,1.3039],[0.2307,1.3032],[0.2309,1.3024],[0.231,1.3017],[0.2312,1.3009],[0.2313,1.3002],[0.2315,1.2994],[0.2316,1.2987],[0.2318,1.2979],[0.232,1.2972],[0.2321,1.2964],[0.2323,1.2957],[0.2325,1.2949],[0.2327,1.2941],[0.2329,1.2934],[0.2331,1.2926],[0.2333,1.2918],[0.2335,1.291],[0.2337,1.2903],[0.2338,1.2895],[0.234,1.2887],[0.2343,1.2879],[0.2345,1.2871],[0.2347,1.2863],[0.2349,1.2855],[0.2351,1.2847],[0.2353,1.2839],[0.2356,1.2831],[0.2358,1.2823],[0.236,1.2815],[0.2363,1.2807],[0.2365,1.28],[0.2367,1.2794],[0.2369,1.2787],[0.2371,1.278],[0.2373,1.2773],[0.2375,1.2766],[0.2377,1.2759],[0.2379,1.2753],[0.2381,1.2746],[0.2383,1.274],[0.2385,1.2735],[0.2386,1.2733],[0.2387,1.273],[0.2387,1.2729],[0.2387,1.2727],[0.2388,1.2726],[0.2389,1.2724],[0.2391,1.2717],[0.2393,1.271],[0.2395,1.2703],[0.2398,1.2697],[0.24,1.269],[0.2402,1.2683],[0.2404,1.2676],[0.2406,1.267],[0.2409,1.2663],[0.2411,1.2655],[0.2414,1.2648],[0.2416,1.2641],[0.2419,1.2633],[0.2422,1.2626],[0.2424,1.2618],[0.2427,1.2611],[0.2429,1.2603],[0.2432,1.2596],[0.2435,1.2588],[0.2437,1.2581],[0.244,1.2574],[0.2443,1.2566],[0.2445,1.2559],[0.2448,1.2552],[0.2451,1.2544],[0.2453,1.2537],[0.2456,1.253],[0.2459,1.2523],[0.2462,1.2515],[0.2464,1.2508],[0.2467,1.2501],[0.247,1.2494],[0.2472,1.2486],[0.2475,1.2479],[0.2478,1.2472],[0.2481,1.2465],[0.2484,1.2458],[0.2486,1.2451],[0.2489,1.2443],[0.2492,1.2436],[0.2495,1.2429],[0.2498,1.2422],[0.25,1.2415],[0.2503,1.2408],[0.2506,1.2401],[0.2509,1.2394],[0.2512,1.2387],[0.2515,1.238],[0.2518,1.2373],[0.252,1.2366],[0.2523,1.2359],[0.2526,1.2352],[0.2529,1.2345],[0.2532,1.2338],[0.2535,1.2331],[0.2538,1.2324],[0.2541,1.2318],[0.2544,1.2311],[0.2547,1.2304],[0.255,1.2297],[0.2553,1.229],[0.2556,1.2283],[0.2559,1.2277],[0.2562,1.227],[0.2565,1.2263],[0.2568,1.2256],[0.2571,1.225],[0.2574,1.2243],[0.2577,1.2236],[0.258,1.223],[0.2583,1.2223],[0.2586,1.2216],[0.2589,1.2209],[0.2592,1.2203],[0.2595,1.2196],[0.2598,1.219],[0.2601,1.2183],[0.2604,1.2176],[0.2608,1.217],[0.2611,1.2163],[0.2614,1.2157],[0.2617,1.215],[0.262,1.2144],[0.2623,1.2137],[0.2626,1.2131],[0.263,1.2124],[0.2633,1.2118],[0.2636,1.2111],[0.2639,1.2105],[0.2642,1.2098],[0.2645,1.2092],[0.2649,1.2085],[0.2652,1.2079],[0.2655,1.2073],[0.2658,1.2066],[0.2661,1.206],[0.2665,1.2053],[0.2668,1.2047],[0.2671,1.2041],[0.2674,1.2035],[0.2678,1.2028],[0.2681,1.2022],[0.2684,1.2016],[0.2687,1.2009],[0.2691,1.2003],[0.2694,1.1996],[0.2698,1.1989],[0.2702,1.1982],[0.2706,1.1975],[0.271,1.1968],[0.2713,1.1961],[0.2717,1.1954],[0.2721,1.1947],[0.2725,1.194],[0.2729,1.1933],[0.2733,1.1926],[0.2736,1.1919],[0.274,1.1912],[0.2744,1.1905],[0.2748,1.1898],[0.2752,1.1891],[0.2756,1.1885],[0.276,1.1878],[0.2764,1.1871],[0.2767,1.1864],[0.2771,1.1857],[0.2775,1.1851],[0.2779,1.1844],[0.2783,1.1837],[0.2787,1.183],[0.2791,1.1824],[0.2795,1.1817],[0.2799,1.181],[0.2803,1.1804],[0.2807,1.1797],[0.2811,1.179],[0.2815,1.1784],[0.2819,1.1777],[0.2823,1.1771],[0.2827,1.1764],[0.2831,1.1757],[0.2835,1.1751],[0.2839,1.1745],[0.2843,1.1738],[0.2847,1.1732],[0.2851,1.1725],[0.2855,1.1719],[0.2859,1.1712],[0.2864,1.1706],[0.2868,1.1699],[0.2872,1.1693],[0.2876,1.1687],[0.288,1.168],[0.2884,1.1674],[0.2888,1.1668],[0.2892,1.1661],[0.2897,1.1655],[0.2901,1.1649],[0.2905,1.1643],[0.2909,1.1636],[0.2913,1.163],[0.2917,1.1624],[0.2922,1.1618],[0.2926,1.1612],[0.293,1.1605],[0.2934,1.1599],[0.2938,1.1593],[0.2942,1.1587],[0.2947,1.1581],[0.2951,1.1575],[0.2955,1.1569],[0.2959,1.1563],[0.2964,1.1557],[0.2968,1.1551],[0.2972,1.1545],[0.2976,1.1539],[0.2981,1.1533],[0.2985,1.1527],[0.2989,1.1521],[0.2994,1.1515],[0.2998,1.1509],[0.3002,1.1503],[0.3006,1.1497],[0.3011,1.1491],[0.3015,1.1485],[0.3019,1.148],[0.3024,1.1474],[0.3028,1.1468],[0.3032,1.1462],[0.3037,1.1456],[0.3041,1.1451],[0.3045,1.1445],[0.305,1.1439],[0.3054,1.1433],[0.3058,1.1428],[0.3063,1.1422],[0.3067,1.1416],[0.3072,1.1411],[0.3076,1.1405],[0.308,1.1399],[0.3085,1.1394],[0.3089,1.1388],[0.3094,1.1383],[0.3098,1.1377],[0.3102,1.1372],[0.3107,1.1366],[0.3111,1.1361],[0.3116,1.1355],[0.312,1.1349],[0.3125,1.1344],[0.313,1.1338],[0.3135,1.1331],[0.314,1.1325],[0.3145,1.1319],[0.3151,1.1312],[0.3156,1.1306],[0.3161,1.13],[0.3166,1.1294],[0.3172,1.1287],[0.3177,1.1281],[0.3182,1.1275],[0.3187,1.1269],[0.3193,1.1263],[0.3198,1.1257],[0.3203,1.1251],[0.3208,1.1244],[0.3214,1.1238],[0.3219,1.1232],[0.3224,1.1226],[0.323,1.122],[0.3235,1.1214],[0.324,1.1208],[0.3246,1.1202],[0.3251,1.1197],[0.3256,1.1191],[0.3261,1.1185],[0.3267,1.1179],[0.3272,1.1173],[0.3278,1.1167],[0.3283,1.1161],[0.3288,1.1156],[0.3294,1.115],[0.3299,1.1144],[0.3304,1.1138],[0.331,1.1133],[0.3315,1.1127],[0.332,1.1121],[0.3326,1.1116],[0.3331,1.111],[0.3337,1.1105],[0.3342,1.1099],[0.3347,1.1093],[0.3353,1.1088],[0.3358,1.1082],[0.3364,1.1077],[0.3369,1.1071],[0.3374,1.1066],[0.338,1.106],[0.3385,1.1055],[0.3391,1.1049],[0.3396,1.1044],[0.3402,1.1039],[0.3407,1.1033],[0.3413,1.1028],[0.3418,1.1023],[0.3423,1.1017],[0.3429,1.1012],[0.3434,1.1007],[0.344,1.1001],[0.3445,1.0996],[0.3451,1.0991],[0.3456,1.0986],[0.3462,1.0981],[0.3467,1.0975],[0.3473,1.097],[0.3478,1.0965],[0.3484,1.096],[0.3489,1.0955],[0.3495,1.095],[0.35,1.0945],[0.3506,1.094],[0.3511,1.0935],[0.3517,1.093],[0.3522,1.0925],[0.3528,1.092],[0.3533,1.0915],[0.3539,1.091],[0.3544,1.0905],[0.355,1.09],[0.3555,1.0895],[0.3561,1.089],[0.3566,1.0885],[0.3572,1.0881],[0.3577,1.0876],[0.3583,1.0871],[0.3588,1.0866],[0.3594,1.0862],[0.3599,1.0857],[0.3605,1.0852],[0.361,1.0847],[0.3616,1.0843],[0.3622,1.0838],[0.3627,1.0833],[0.3633,1.0829],[0.3638,1.0824],[0.3644,1.0819],[0.3649,1.0815],[0.3655,1.081],[0.366,1.0806],[0.3666,1.0801],[0.3671,1.0797],[0.3677,1.0792],[0.3683,1.0788],[0.3688,1.0783],[0.3694,1.0779],[0.3699,1.0774],[0.3705,1.077],[0.371,1.0766],[0.3717,1.076],[0.3724,1.0755],[0.373,1.075],[0.3737,1.0745],[0.3744,1.0739],[0.375,1.0734],[0.3757,1.0729],[0.3764,1.0724],[0.377,1.0719],[0.3777,1.0714],[0.3783,1.0709],[0.379,1.0704],[0.3797,1.0699],[0.3803,1.0694],[0.381,1.0689],[0.3817,1.0684],[0.3823,1.0679],[0.383,1.0675],[0.3837,1.067],[0.3843,1.0665],[0.385,1.066],[0.3857,1.0655],[0.3863,1.0651],[0.387,1.0646],[0.3877,1.0641],[0.3883,1.0637],[0.389,1.0632],[0.3896,1.0627],[0.3903,1.0623],[0.391,1.0618],[0.3916,1.0614],[0.3923,1.0609],[0.393,1.0605],[0.3936,1.06],[0.3943,1.0595],[0.3949,1.0591],[0.3956,1.0587],[0.3963,1.0582],[0.3969,1.0578],[0.3976,1.0573],[0.3982,1.0569],[0.3989,1.0565],[0.3996,1.0561],[0.4002,1.0556],[0.4009,1.0552],[0.4015,1.0548],[0.4022,1.0544],[0.4028,1.0539],[0.4035,1.0535],[0.4042,1.0531],[0.4048,1.0527],[0.4055,1.0523],[0.4061,1.0519],[0.4068,1.0515],[0.4074,1.0511],[0.4081,1.0507],[0.4087,1.0503],[0.4094,1.0499],[0.41,1.0495],[0.4107,1.0491],[0.4113,1.0487],[0.412,1.0483],[0.4126,1.0479],[0.4133,1.0475],[0.4139,1.0472],[0.4146,1.0468],[0.4152,1.0464],[0.4159,1.046],[0.4165,1.0456],[0.4172,1.0453],[0.4178,1.0449],[0.4184,1.0445],[0.4191,1.0442],[0.4197,1.0438],[0.4204,1.0434],[0.421,1.0431],[0.4216,1.0427],[0.4223,1.0424],[0.4229,1.042],[0.4236,1.0417],[0.4242,1.0413],[0.4248,1.041],[0.4255,1.0406],[0.4261,1.0403],[0.4267,1.0399],[0.4274,1.0396],[0.428,1.0393],[0.4286,1.0389],[0.4293,1.0386],[0.4299,1.0382],[0.4305,1.0379],[0.4312,1.0376],[0.4318,1.0373],[0.4324,1.0369],[0.433,1.0366],[0.4338,1.0362],[0.4346,1.0358],[0.4354,1.0354],[0.4362,1.035],[0.4369,1.0346],[0.4377,1.0343],[0.4385,1.0339],[0.4392,1.0335],[0.44,1.0331],[0.4408,1.0327],[0.4415,1.0324],[0.4423,1.032],[0.4431,1.0316],[0.4438,1.0313],[0.4446,1.0309],[0.4453,1.0305],[0.4461,1.0302],[0.4469,1.0298],[0.4476,1.0295],[0.4484,1.0291],[0.4491,1.0288],[0.4499,1.0285],[0.4506,1.0281],[0.4513,1.0278],[0.4521,1.0275],[0.4528,1.0271],[0.4536,1.0268],[0.4543,1.0265],[0.455,1.0261],[0.4558,1.0258],[0.4565,1.0255],[0.4572,1.0252],[0.4579,1.0249],[0.4587,1.0246],[0.4594,1.0243],[0.4601,1.024],[0.4608,1.0237],[0.4615,1.0234],[0.4623,1.0231],[0.463,1.0228],[0.4637,1.0225],[0.4644,1.0222],[0.4651,1.0219],[0.4658,1.0216],[0.4665,1.0213],[0.4672,1.0211],[0.4679,1.0208],[0.4686,1.0205],[0.4693,1.0203],[0.4699,1.02],[0.4706,1.0197],[0.4713,1.0195],[0.472,1.0192],[0.4727,1.0189],[0.4734,1.0187],[0.474,1.0184],[0.4747,1.0182],[0.4754,1.0179],[0.476,1.0177],[0.4767,1.0174],[0.4776,1.0171],[0.4785,1.0168],[0.4793,1.0165],[0.4802,1.0162],[0.4811,1.0159],[0.4819,1.0156],[0.4828,1.0153],[0.4836,1.015],[0.4845,1.0147],[0.4853,1.0144],[0.4861,1.0141],[0.487,1.0138],[0.4878,1.0136],[0.4886,1.0133],[0.4894,1.013],[0.4902,1.0128],[0.491,1.0125],[0.4918,1.0123],[0.4926,1.012],[0.4934,1.0118],[0.4942,1.0115],[0.495,1.0113],[0.4957,1.011],[0.4965,1.0108],[0.4973,1.0106],[0.498,1.0104],[0.4988,1.0101],[0.4995,1.0099],[0.5002,1.0097],[0.501,1.0095],[0.5017,1.0093],[0.5024,1.0091],[0.5031,1.0089],[0.5038,1.0087],[0.5045,1.0085],[0.5052,1.0083],[0.5059,1.0081],[0.5066,1.0079],[0.5073,1.0077],[0.5083,1.0075],[0.5093,1.0072],[0.5102,1.007],[0.5112,1.0067],[0.5121,1.0065],[0.5131,1.0062],[0.514,1.006],[0.5149,1.0058],[0.5158,1.0056],[0.5166,1.0054],[0.5175,1.0052],[0.5183,1.005],[0.5191,1.0048],[0.5199,1.0046],[0.5207,1.0044],[0.5215,1.0043],[0.5222,1.0041],[0.523,1.004],[0.5237,1.0038],[0.5244,1.0037],[0.5251,1.0035],[0.5258,1.0034],[0.5264,1.0033],[0.527,1.0031],[0.5276,1.003],[0.5283,1.0029],[0.5288,1.0028],[0.5294,1.0027],[0.5299,1.0026],[0.5305,1.0025],[0.531,1.0024],[0.5314,1.0023],[0.5319,1.0022],[0.5324,1.0022],[0.5328,1.0021],[0.5332,1.002],[0.5336,1.002],[0.534,1.0019],[0.5343,1.0019],[0.5346,1.0018],[0.5349,1.0018],[0.5352,1.0017],[0.5355,1.0017],[0.5357,1.0016],[0.536,1.0016],[0.5362,1.0016],[0.5363,1.0016],[0.5365,1.0015],[0.5366,1.0015],[0.5368,1.0015],[0.5369,1.0015],[0.5369,1.0015],[0.537,1.0015],[0.537,1.0015],[0.537,1.0015],[0.537,1.0015],[0.537,1.0015],[0.537,1.0015],[0.537,1.0015],[0.5371,1.0015],[0.5371,1.0015],[0.5371,1.0014],[0.5373,1.0014],[0.5374,1.0013],[0.5381,1.0011],[0.5387,1.0009],[0.5393,1.0006],[0.5399,1.0004],[0.5405,1.0002],[0.5411,0.9999],[0.5417,0.9997],[0.5422,0.9994],[0.5428,0.9992],[0.5433,0.9989],[0.5439,0.9986],[0.5444,0.9984],[0.5449,0.9981],[0.5454,0.9978],[0.5459,0.9975],[0.5464,0.9972],[0.5468,0.9969],[0.5473,0.9967],[0.5478,0.9964],[0.5482,0.9961],[0.5486,0.9958],[0.5491,0.9955],[0.5495,0.9952],[0.5499,0.9949],[0.5503,0.9946],[0.5507,0.9942],[0.5511,0.9939],[0.5514,0.9936],[0.5518,0.9933],[0.5521,0.993],[0.5528,0.9923],[0.5535,0.9917],[0.5541,0.9911],[0.5547,0.9904],[0.5552,0.9898],[0.5558,0.9891],[0.5563,0.9885],[0.5567,0.9878],[0.5572,0.9871],[0.5576,0.9865],[0.558,0.9859],[0.5584,0.9852],[0.5587,0.9846],[0.559,0.9839],[0.5593,0.9833],[0.5596,0.9827],[0.5598,0.9821],[0.5601,0.9815],[0.5603,0.9809],[0.5605,0.9803],[0.5607,0.9797],[0.5608,0.9792],[0.561,0.9787],[0.5611,0.9781],[0.5612,0.9776],[0.5613,0.9771],[0.5614,0.9766],[0.5615,0.9762],[0.5616,0.9757],[0.5616,0.9753],[0.5617,0.9749],[0.5617,0.9745],[0.5618,0.9742],[0.5618,0.9738],[0.5618,0.9736],[0.5618,0.9733],[0.5618,0.973],[0.5618,0.9728],[0.5618,0.9726],[0.5618,0.9724],[0.5618,0.9723],[0.5618,0.9721],[0.5618,0.9721],[0.5618,0.972],[0.5618,0.972],[0.5618,0.972],[0.5618,0.972],[0.5618,0.9719],[0.5618,0.9719],[0.5618,0.9718],[0.5618,0.9717],[0.5618,0.9716],[0.5618,0.9715],[0.5618,0.9714],[0.5618,0.9712],[0.5618,0.9711],[0.5618,0.9709],[0.5618,0.9707],[0.5618,0.9704],[0.5618,0.9702],[0.5618,0.97],[0.5618,0.9697],[0.5617,0.9694],[0.5617,0.9691],[0.5617,0.9688],[0.5617,0.9685],[0.5617,0.9681],[0.5617,0.9678],[0.5617,0.9674],[0.5617,0.967],[0.5617,0.9666],[0.5617,0.9661],[0.5616,0.9657],[0.5616,0.9652],[0.5616,0.9648],[0.5616,0.9643],[0.5616,0.9638],[0.5616,0.9633],[0.5616,0.9627],[0.5615,0.9622],[0.5615,0.9616],[0.5615,0.961],[0.5615,0.9604],[0.5615,0.9598],[0.5615,0.9592],[0.5614,0.9586],[0.5614,0.9579],[0.5614,0.9573],[0.5614,0.9566],[0.5614,0.9559],[0.5613,0.9552],[0.5613,0.9544],[0.5613,0.9537],[0.5613,0.953],[0.5613,0.9522],[0.5612,0.9514],[0.5612,0.9506],[0.5612,0.9498],[0.5612,0.949],[0.5611,0.9482],[0.5611,0.9473],[0.5611,0.9465],[0.5611,0.9456],[0.561,0.9447],[0.561,0.9438],[0.561,0.9429],[0.561,0.942],[0.5609,0.941],[0.5609,0.9401],[0.5609,0.9391],[0.5609,0.9381],[0.5608,0.9372],[0.5608,0.9361],[0.5608,0.9351],[0.5608,0.9341],[0.5607,0.9331],[0.5607,0.9324],[0.5607,0.9317],[0.5607,0.931],[0.5606,0.9302],[0.5606,0.9295],[0.5606,0.9288],[0.5606,0.9281],[0.5606,0.9273],[0.5605,0.9266],[0.5605,0.9258],[0.5605,0.9251],[0.5605,0.9243],[0.5605,0.9236],[0.5604,0.9228],[0.5604,0.922],[0.5604,0.9212],[0.5604,0.9204],[0.5603,0.9197],[0.5603,0.9189],[0.5603,0.9181],[0.5603,0.9173],[0.5603,0.9164],[0.5602,0.9156],[0.5602,0.9148],[0.5602,0.914],[0.5602,0.9132],[0.5601,0.9123],[0.5601,0.9115],[0.5601,0.9106],[0.5601,0.9098],[0.56,0.9089],[0.56,0.9081],[0.56,0.9072],[0.56,0.9064],[0.56,0.9055],[0.5599,0.9046],[0.5599,0.9037],[0.5599,0.9028],[0.5599,0.9019],[0.5598,0.901],[0.5598,0.9001],[0.5598,0.8992],[0.5598,0.8983],[0.5597,0.8974],[0.5597,0.8965],[0.5597,0.8956],[0.5596,0.8946],[0.5596,0.8937],[0.5596,0.893],[0.5596,0.8923],[0.5596,0.8916],[0.5595,0.8909],[0.5595,0.8902],[0.5595,0.8895],[0.5595,0.8888],[0.5595,0.888],[0.5594,0.8873],[0.5594,0.8866],[0.5594,0.8859],[0.5594,0.8851],[0.5594,0.8844],[0.5593,0.8837],[0.5593,0.8829],[0.5593,0.8822],[0.5593,0.8815],[0.5593,0.8807],[0.5592,0.88],[0.5592,0.8792],[0.5592,0.8785],[0.5592,0.8777],[0.5592,0.877],[0.5591,0.8762],[0.5591,0.8754],[0.5591,0.8747],[0.5591,0.8739],[0.559,0.8732],[0.559,0.8724],[0.559,0.8716],[0.559,0.8708],[0.559,0.8701],[0.5589,0.8693],[0.5589,0.8685],[0.5589,0.8677],[0.5589,0.8669],[0.5589,0.8662],[0.5588,0.8654],[0.5588,0.8646],[0.5588,0.8638],[0.5588,0.863],[0.5587,0.8622],[0.5587,0.8614],[0.5587,0.8606],[0.5587,0.8599],[0.5587,0.8592],[0.5586,0.8584],[0.5586,0.8577],[0.5586,0.857],[0.5586,0.8563],[0.5586,0.8556],[0.5585,0.8548],[0.5585,0.8541],[0.5585,0.8534],[0.5585,0.8527],[0.5585,0.8519],[0.5584,0.8512],[0.5584,0.8504],[0.5584,0.8497],[0.5584,0.849],[0.5584,0.8482],[0.5583,0.8475],[0.5583,0.8468],[0.5583,0.846],[0.5583,0.8453],[0.5583,0.8445],[0.5582,0.8438],[0.5582,0.843],[0.5582,0.8423],[0.5582,0.8415],[0.5581,0.8408],[0.5581,0.84],[0.5581,0.8392],[0.5581,0.8385],[0.5581,0.8377],[0.558,0.837],[0.558,0.8362],[0.558,0.8354],[0.558,0.8347],[0.558,0.8339],[0.5579,0.8331],[0.5579,0.8324],[0.5579,0.8316],[0.5579,0.8308],[0.5578,0.83],[0.5578,0.8293],[0.5578,0.8285],[0.5578,0.8277],[0.5578,0.8269],[0.5577,0.8262],[0.5577,0.8255],[0.5577,0.8248],[0.5577,0.8241],[0.5577,0.8234],[0.5576,0.8227],[0.5576,0.822],[0.5576,0.8213],[0.5576,0.8206],[0.5576,0.8199],[0.5575,0.8191],[0.5575,0.8184],[0.5575,0.8177],[0.5575,0.817],[0.5575,0.8163],[0.5574,0.8155],[0.5574,0.8148],[0.5574,0.8141],[0.5574,0.8134],[0.5574,0.8127],[0.5573,0.8119],[0.5573,0.8112],[0.5573,0.8105],[0.5573,0.8097],[0.5573,0.809],[0.5572,0.8083],[0.5572,0.8076],[0.5572,0.8068],[0.5572,0.8061],[0.5572,0.8054],[0.5571,0.8046],[0.5571,0.8039],[0.5571,0.8032],[0.5571,0.8024],[0.5571,0.8017],[0.557,0.8009],[0.557,0.8002],[0.557,0.7995],[0.557,0.7987],[0.557,0.798],[0.5569,0.7972],[0.5569,0.7965],[0.5569,0.7957],[0.5569,0.795],[0.5568,0.7942],[0.5568,0.7935],[0.5568,0.7927],[0.5568,0.792],[0.5568,0.7912],[0.5567,0.7905],[0.5567,0.7897],[0.5567,0.789],[0.5567,0.7882],[0.5567,0.7875],[0.5566,0.7867],[0.5566,0.786],[0.5566,0.7852],[0.5566,0.7844],[0.5566,0.7837],[0.5565,0.7829],[0.5565,0.7822],[0.5565,0.7814],[0.5565,0.7806],[0.5564,0.7799],[0.5564,0.7791],[0.5564,0.7783],[0.5564,0.7776],[0.5564,0.7768],[0.5563,0.776],[0.5563,0.7753],[0.5563,0.7745],[0.5563,0.7737],[0.5563,0.773],[0.5562,0.7722],[0.5562,0.7714],[0.5562,0.7706],[0.5562,0.7699],[0.5561,0.7691],[0.5561,0.7683],[0.5561,0.7675],[0.5561,0.7668],[0.5561,0.7661],[0.556,0.7654],[0.556,0.7647],[0.556,0.764],[0.556,0.7633],[0.556,0.7626],[0.5559,0.7619],[0.5559,0.7612],[0.5559,0.7604],[0.5559,0.7597],[0.5559,0.759],[0.5558,0.7583],[0.5558,0.7576],[0.5558,0.7569],[0.5558,0.7562],[0.5558,0.7554],[0.5557,0.7547],[0.5557,0.754],[0.5557,0.7533],[0.5557,0.7526],[0.5557,0.7519],[0.5556,0.7511],[0.5556,0.7504],[0.5556,0.7497],[0.5556,0.749],[0.5556,0.7482],[0.5555,0.7475],[0.5555,0.7468],[0.5555,0.7461],[0.5555,0.7454],[0.5555,0.7446],[0.5554,0.7439],[0.5554,0.7432],[0.5554,0.7425],[0.5554,0.7417],[0.5554,0.741],[0.5553,0.7403],[0.5553,0.7395],[0.5553,0.7388],[0.5553,0.7381],[0.5553,0.7374],[0.5552,0.7366],[0.5552,0.7359],[0.5552,0.7352],[0.5552,0.7344],[0.5552,0.7337],[0.5551,0.733],[0.5551,0.7322],[0.5551,0.7315],[0.5551,0.7308],[0.5551,0.73],[0.555,0.7293],[0.555,0.7286],[0.555,0.7278],[0.555,0.7271],[0.555,0.7264],[0.5549,0.7256],[0.5549,0.7249],[0.5549,0.7242],[0.5549,0.7234],[0.5548,0.7227],[0.5548,0.7219],[0.5548,0.7212],[0.5548,0.7205],[0.5548,0.7197],[0.5547,0.719],[0.5547,0.7183],[0.5547,0.7175],[0.5547,0.7168],[0.5547,0.716],[0.5546,0.7153],[0.5546,0.7145],[0.5546,0.7138],[0.5546,0.7131],[0.5546,0.7123],[0.5545,0.7116],[0.5545,0.7108],[0.5545,0.7101],[0.5545,0.7093],[0.5545,0.7086],[0.5544,0.7079],[0.5544,0.7071],[0.5544,0.7064],[0.5544,0.7056],[0.5544,0.7049],[0.5543,0.7041],[0.5543,0.7034],[0.5543,0.7027],[0.5543,0.7019],[0.5542,0.7012],[0.5542,0.7005],[0.5542,0.6998],[0.5542,0.6991],[0.5542,0.6984],[0.5541,0.6976],[0.5541,0.6969],[0.5541,0.6962],[0.5541,0.6955],[0.5541,0.6948],[0.554,0.694],[0.554,0.6933],[0.554,0.6926],[0.554,0.6919],[0.554,0.6912],[0.5539,0.6905],[0.5539,0.6897],[0.5539,0.689],[0.5539,0.6883],[0.5539,0.6876],[0.5538,0.6869],[0.5538,0.6861],[0.5538,0.6854],[0.5538,0.6847],[0.5538,0.684],[0.5537,0.6833],[0.5537,0.6825],[0.5537,0.6818],[0.5537,0.6811],[0.5537,0.6804],[0.5536,0.6796],[0.5536,0.6789],[0.5536,0.6782],[0.5536,0.6775],[0.5536,0.6768],[0.5535,0.676],[0.5535,0.6753],[0.5535,0.6746],[0.5535,0.6739],[0.5535,0.6731],[0.5534,0.6724],[0.5534,0.6717],[0.5534,0.671],[0.5534,0.6703],[0.5534,0.6695],[0.5533,0.6688],[0.5533,0.6681],[0.5533,0.6673],[0.5533,0.6666],[0.5533,0.6659],[0.5532,0.6652],[0.5532,0.6644],[0.5532,0.6637],[0.5532,0.663],[0.5532,0.6623],[0.5531,0.6615],[0.5531,0.6608],[0.5531,0.6601],[0.5531,0.6594],[0.5531,0.6586],[0.553,0.6579],[0.553,0.6572],[0.553,0.6565],[0.553,0.6557],[0.553,0.655],[0.5529,0.6543],[0.5529,0.6536],[0.5529,0.6528],[0.5529,0.6521],[0.5529,0.6514],[0.5528,0.6507],[0.5528,0.65],[0.5528,0.6493],[0.5528,0.6486],[0.5528,0.6479],[0.5527,0.6471],[0.5527,0.6464],[0.5527,0.6457],[0.5527,0.645],[0.5527,0.6443],[0.5526,0.6436],[0.5526,0.6429],[0.5526,0.6422],[0.5526,0.6414],[0.5526,0.6407],[0.5525,0.64],[0.5525,0.6393],[0.5525,0.6386],[0.5525,0.6379],[0.5525,0.6372],[0.5524,0.6365],[0.5524,0.6358],[0.5524,0.635],[0.5524,0.6343],[0.5524,0.6336],[0.5523,0.6329],[0.5523,0.6322],[0.5523,0.6315],[0.5523,0.6308],[0.5523,0.6301],[0.5522,0.6293],[0.5522,0.6286],[0.5522,0.6279],[0.5522,0.6272],[0.5522,0.6265],[0.5521,0.6258],[0.5521,0.6251],[0.5521,0.6244],[0.5521,0.6236],[0.5521,0.6229],[0.552,0.6222],[0.552,0.6215],[0.552,0.6208],[0.552,0.6201],[0.552,0.6194],[0.5519,0.6186],[0.5519,0.6179],[0.5519,0.6172],[0.5519,0.6164],[0.5519,0.6157],[0.5518,0.615],[0.5518,0.6143],[0.5518,0.6135],[0.5518,0.6128],[0.5518,0.6121],[0.5517,0.6114],[0.5517,0.6106],[0.5517,0.6099],[0.5517,0.6092],[0.5517,0.6085],[0.5516,0.6077],[0.5516,0.607],[0.5516,0.6063],[0.5516,0.6056],[0.5516,0.6048],[0.5515,0.6041],[0.5515,0.6034],[0.5515,0.6027],[0.5515,0.6019],[0.5515,0.6012],[0.5514,0.6005],[0.5514,0.5998],[0.5514,0.599],[0.5514,0.5983],[0.5514,0.5976],[0.5513,0.5969],[0.5513,0.5961],[0.5513,0.5954],[0.5513,0.5947],[0.5513,0.594],[0.5512,0.5933],[0.5512,0.5925],[0.5512,0.5918],[0.5512,0.5911],[0.5512,0.5904],[0.5511,0.5896],[0.5511,0.5889],[0.5511,0.5882],[0.5511,0.5875],[0.551,0.5867],[0.551,0.586],[0.551,0.5853],[0.551,0.5846],[0.551,0.5839],[0.5509,0.5832],[0.5509,0.5824],[0.5509,0.5817],[0.5509,0.581],[0.5509,0.5803],[0.5508,0.5796],[0.5508,0.5788],[0.5508,0.5781],[0.5508,0.5774],[0.5508,0.5767],[0.5507,0.576],[0.5507,0.5752],[0.5507,0.5745],[0.5507,0.5738],[0.5507,0.5731],[0.5506,0.5724],[0.5506,0.5717],[0.5506,0.5709],[0.5506,0.5702],[0.5506,0.5695],[0.5505,0.5687],[0.5505,0.568],[0.5505,0.5672],[0.5505,0.5665],[0.5505,0.5657],[0.5504,0.565],[0.5504,0.5642],[0.5504,0.5635],[0.5504,0.5628],[0.5504,0.562],[0.5503,0.5613],[0.5503,0.5605],[0.5503,0.5598],[0.5503,0.559],[0.5503,0.5583],[0.5502,0.5576],[0.5502,0.5568],[0.5502,0.5561],[0.5502,0.5553],[0.5501,0.5546],[0.5501,0.5538],[0.5501,0.5531],[0.5501,0.5524],[0.5501,0.5516],[0.55,0.5509],[0.55,0.5502],[0.55,0.5494],[0.55,0.5487],[0.55,0.5479],[0.5499,0.5472],[0.5499,0.5465],[0.5499,0.5457],[0.5499,0.545],[0.5499,0.5443],[0.5498,0.5435],[0.5498,0.5428],[0.5498,0.5421],[0.5498,0.5413],[0.5498,0.5406],[0.5497,0.5398],[0.5497,0.5391],[0.5497,0.5384],[0.5497,0.5376],[0.5497,0.5369],[0.5496,0.5362],[0.5496,0.5355],[0.5496,0.5347],[0.5496,0.534],[0.5496,0.5333],[0.5495,0.5325],[0.5495,0.5318],[0.5495,0.5311],[0.5495,0.5304],[0.5495,0.5296],[0.5494,0.5289],[0.5494,0.5282],[0.5494,0.5275],[0.5494,0.5267],[0.5494,0.526],[0.5493,0.5253],[0.5493,0.5246],[0.5493,0.5238],[0.5493,0.5231],[0.5492,0.5224],[0.5492,0.5217],[0.5492,0.521],[0.5492,0.5202],[0.5492,0.5195],[0.5491,0.5188],[0.5491,0.5181],[0.5491,0.5174],[0.5491,0.5166],[0.5491,0.5159],[0.549,0.5152],[0.549,0.5145],[0.549,0.5138],[0.549,0.5131],[0.549,0.5124],[0.5489,0.5116],[0.5489,0.5109],[0.5489,0.5102],[0.5489,0.5095],[0.5489,0.5088],[0.5488,0.5081],[0.5488,0.5074],[0.5488,0.5067],[0.5488,0.506],[0.5488,0.5052],[0.5487,0.5044],[0.5487,0.5036],[0.5487,0.5029],[0.5487,0.5021],[0.5487,0.5013],[0.5486,0.5005],[0.5486,0.4997],[0.5486,0.499],[0.5486,0.4982],[0.5486,0.4974],[0.5485,0.4967],[0.5485,0.4959],[0.5485,0.4951],[0.5485,0.4944],[0.5484,0.4936],[0.5484,0.4928],[0.5484,0.4921],[0.5484,0.4913],[0.5484,0.4905],[0.5483,0.4898],[0.5483,0.489],[0.5483,0.4882],[0.5483,0.4875],[0.5483,0.4867],[0.5482,0.486],[0.5482,0.4852],[0.5482,0.4845],[0.5482,0.4837],[0.5481,0.4829],[0.5481,0.4822],[0.5481,0.4814],[0.5481,0.4807],[0.5481,0.4799],[0.548,0.4792],[0.548,0.4784],[0.548,0.4777],[0.548,0.4769],[0.548,0.4762],[0.5479,0.4754],[0.5479,0.4747],[0.5479,0.4739],[0.5479,0.4732],[0.5479,0.4725],[0.5478,0.4717],[0.5478,0.471],[0.5478,0.4702],[0.5478,0.4695],[0.5477,0.4688],[0.5477,0.468],[0.5477,0.4673],[0.5477,0.4666],[0.5477,0.4658],[0.5476,0.4651],[0.5476,0.4644],[0.5476,0.4636],[0.5476,0.4629],[0.5476,0.4622],[0.5475,0.4614],[0.5475,0.4607],[0.5475,0.46],[0.5475,0.4593],[0.5475,0.4585],[0.5474,0.4578],[0.5474,0.4571],[0.5474,0.4564],[0.5474,0.4557],[0.5474,0.4549],[0.5473,0.4542],[0.5473,0.4535],[0.5473,0.4528],[0.5473,0.4521],[0.5473,0.4514],[0.5472,0.4506],[0.5472,0.4499],[0.5472,0.4492],[0.5472,0.4485],[0.5472,0.4478],[0.5471,0.4471],[0.5471,0.4464],[0.5471,0.4456],[0.5471,0.4448],[0.5471,0.444],[0.547,0.4433],[0.547,0.4425],[0.547,0.4417],[0.547,0.4409],[0.5469,0.4402],[0.5469,0.4394],[0.5469,0.4386],[0.5469,0.4379],[0.5469,0.4371],[0.5468,0.4363],[0.5468,0.4356],[0.5468,0.4348],[0.5468,0.434],[0.5468,0.4333],[0.5467,0.4325],[0.5467,0.4317],[0.5467,0.431],[0.5467,0.4302],[0.5466,0.4295],[0.5466,0.4287],[0.5466,0.428],[0.5466,0.4272],[0.5466,0.4265],[0.5465,0.4257],[0.5465,0.425],[0.5465,0.4243],[0.5465,0.4235],[0.5465,0.4228],[0.5464,0.422],[0.5464,0.4213],[0.5464,0.4206],[0.5464,0.4198],[0.5464,0.4191],[0.5463,0.4184],[0.5463,0.4176],[0.5463,0.4169],[0.5463,0.4162],[0.5463,0.4155],[0.5462,0.4147],[0.5462,0.414],[0.5462,0.4133],[0.5462,0.4126],[0.5461,0.4118],[0.5461,0.411],[0.5461,0.4102],[0.5461,0.4094],[0.5461,0.4086],[0.546,0.4078],[0.546,0.407],[0.546,0.4062],[0.546,0.4054],[0.546,0.4046],[0.5459,0.4038],[0.5459,0.4031],[0.5459,0.4023],[0.5459,0.4015],[0.5458,0.4007],[0.5458,0.4],[0.5458,0.3992],[0.5458,0.3984],[0.5458,0.3976],[0.5457,0.3969],[0.5457,0.3961],[0.5457,0.3954],[0.5457,0.3946],[0.5456,0.3939],[0.5456,0.3931],[0.5456,0.3924],[0.5456,0.3916],[0.5456,0.3909],[0.5455,0.3901],[0.5455,0.3894],[0.5455,0.3886],[0.5455,0.3879],[0.5455,0.3872],[0.5454,0.3864],[0.5454,0.3857],[0.5454,0.385],[0.5454,0.3843],[0.5454,0.3835],[0.5453,0.3828],[0.5453,0.3821],[0.5453,0.3814],[0.5453,0.3807],[0.5453,0.38],[0.5452,0.3793],[0.5452,0.3783],[0.5452,0.3774],[0.5452,0.3765],[0.5451,0.3755],[0.5451,0.3746],[0.5451,0.3737],[0.5451,0.3728],[0.545,0.3719],[0.545,0.371],[0.545,0.3701],[0.545,0.3692],[0.5449,0.3683],[0.5449,0.3674],[0.5449,0.3665],[0.5449,0.3657],[0.5448,0.3648],[0.5448,0.3639],[0.5448,0.3631],[0.5448,0.3622],[0.5447,0.3614],[0.5447,0.3605],[0.5447,0.3597],[0.5447,0.3588],[0.5446,0.358],[0.5446,0.3572],[0.5446,0.3564],[0.5446,0.3555],[0.5446,0.3547],[0.5445,0.3539],[0.5445,0.3531],[0.5445,0.3523],[0.5445,0.3515],[0.5444,0.3507],[0.5444,0.35],[0.5444,0.3492],[0.5444,0.3484],[0.5444,0.3476],[0.5443,0.3469],[0.5443,0.3461],[0.5443,0.3454],[0.5443,0.3446],[0.5442,0.3439],[0.5442,0.3432],[0.5442,0.3424],[0.5442,0.3417],[0.5442,0.341],[0.5441,0.3403],[0.5441,0.3396],[0.5441,0.3385],[0.5441,0.3375],[0.544,0.3365],[0.544,0.3354],[0.544,0.3344],[0.544,0.3335],[0.5439,0.3325],[0.5439,0.3315],[0.5439,0.3306],[0.5438,0.3296],[0.5438,0.3287],[0.5438,0.3278],[0.5438,0.3269],[0.5437,0.326],[0.5437,0.3251],[0.5437,0.3243],[0.5437,0.3234],[0.5437,0.3226],[0.5436,0.3218],[0.5436,0.321],[0.5436,0.3202],[0.5436,0.3194],[0.5435,0.3186],[0.5435,0.3179],[0.5435,0.3172],[0.5435,0.3164],[0.5435,0.3157],[0.5434,0.315],[0.5434,0.3144],[0.5434,0.3137],[0.5434,0.313],[0.5434,0.3124],[0.5433,0.3118],[0.5433,0.3112],[0.5433,0.3106],[0.5433,0.31],[0.5433,0.3094],[0.5433,0.3089],[0.5433,0.3084],[0.5432,0.3078],[0.5432,0.3073],[0.5432,0.3068],[0.5432,0.3064],[0.5432,0.3059],[0.5432,0.3055],[0.5432,0.3051],[0.5432,0.3047],[0.5431,0.3042],[0.5431,0.3039],[0.5431,0.3035],[0.5431,0.3032],[0.5431,0.3028],[0.5431,0.3025],[0.5431,0.3022],[0.5431,0.3019],[0.5431,0.3017],[0.5431,0.3014],[0.5431,0.3012],[0.5431,0.301],[0.543,0.3008],[0.543,0.3006],[0.543,0.3004],[0.543,0.3003],[0.543,0.3001],[0.543,0.3],[0.543,0.2999],[0.543,0.2998],[0.543,0.2997],[0.543,0.2997],[0.543,0.2997],[0.543,0.2997],[0.543,0.2996],[0.543,0.2996],[0.543,0.2996],[0.543,0.2996],[0.543,0.2996],[0.543,0.2994],[0.543,0.2993],[0.543,0.299],[0.543,0.2988],[0.5429,0.2983],[0.5429,0.2978],[0.5429,0.2973],[0.5428,0.2968],[0.5428,0.2963],[0.5427,0.2958],[0.5426,0.2953],[0.5426,0.2949],[0.5424,0.294],[0.5422,0.2931],[0.542,0.2922],[0.5418,0.2913],[0.5415,0.2905],[0.5413,0.2897],[0.541,0.2889],[0.5407,0.2882],[0.5404,0.2875],[0.5401,0.2867],[0.5397,0.286],[0.5394,0.2854],[0.539,0.2847],[0.5386,0.2841],[0.5382,0.2835],[0.5378,0.2829],[0.5374,0.2823],[0.537,0.2818],[0.5366,0.2812],[0.5361,0.2807],[0.5357,0.2802],[0.5353,0.2797],[0.5348,0.2793],[0.5344,0.2788],[0.5339,0.2784],[0.5335,0.278],[0.5331,0.2776],[0.5326,0.2773],[0.5322,0.2769],[0.5317,0.2766],[0.5313,0.2762],[0.5309,0.2759],[0.5305,0.2756],[0.5301,0.2754],[0.5297,0.2751],[0.5293,0.2749],[0.5289,0.2746],[0.5285,0.2744],[0.5282,0.2742],[0.5279,0.274],[0.5275,0.2739],[0.5272,0.2737],[0.5269,0.2736],[0.5266,0.2734],[0.5264,0.2733],[0.5262,0.2732],[0.5259,0.2731],[0.5257,0.273],[0.5256,0.2729],[0.5254,0.2729],[0.5253,0.2728],[0.5252,0.2728],[0.5251,0.2728],[0.525,0.2727],[0.525,0.2727],[0.525,0.2727],[0.525,0.2727],[0.525,0.2727],[0.525,0.2727],[0.525,0.2727],[0.525,0.2727],[0.525,0.2727],[0.5248,0.2726],[0.5247,0.2725],[0.5241,0.2722],[0.5236,0.2719],[0.5231,0.2715],[0.5226,0.2712],[0.5221,0.2708],[0.5216,0.2704],[0.5212,0.2699],[0.5207,0.2695],[0.5203,0.269],[0.5199,0.2686],[0.5195,0.2681],[0.5191,0.2676],[0.5187,0.2671],[0.5184,0.2666],[0.518,0.2661],[0.5177,0.2656],[0.5173,0.265],[0.517,0.2645],[0.5167,0.264],[0.5164,0.2634],[0.5161,0.2629],[0.5159,0.2623],[0.5156,0.2618],[0.5153,0.2612],[0.5151,0.2607],[0.5149,0.2601],[0.5146,0.2595],[0.5144,0.259],[0.5142,0.2585],[0.514,0.2579],[0.5139,0.2574],[0.5137,0.2568],[0.5135,0.2563],[0.5133,0.2558],[0.5132,0.2553],[0.5131,0.2548],[0.5129,0.2543],[0.5128,0.2538],[0.5127,0.2534],[0.5126,0.2529],[0.5125,0.2525],[0.5124,0.2521],[0.5123,0.2517],[0.5122,0.2513],[0.5121,0.2509],[0.512,0.2506],[0.512,0.2502],[0.5119,0.2499],[0.5119,0.2496],[0.5118,0.2494],[0.5118,0.2491],[0.5118,0.2489],[0.5117,0.2487],[0.5117,0.2485],[0.5117,0.2484],[0.5117,0.2482],[0.5116,0.2482],[0.5116,0.2481],[0.5116,0.2481],[0.5116,0.248],[0.5116,0.248],[0.5116,0.2479],[0.5116,0.2478],[0.5116,0.2478],[0.5116,0.2476],[0.5116,0.2475],[0.5115,0.2474],[0.5115,0.2472],[0.5115,0.247],[0.5115,0.2468],[0.5114,0.2466],[0.5114,0.2463],[0.5114,0.2461],[0.5113,0.2458],[0.5113,0.2455],[0.5113,0.2452],[0.5112,0.2449],[0.5112,0.2445],[0.5111,0.2441],[0.5111,0.2438],[0.511,0.2434],[0.511,0.243],[0.5109,0.2425],[0.5108,0.2421],[0.5108,0.2416],[0.5107,0.2412],[0.5106,0.2407],[0.5106,0.2402],[0.5105,0.2396],[0.5104,0.2391],[0.5104,0.2385],[0.5103,0.238],[0.5102,0.2374],[0.5101,0.2368],[0.51,0.2362],[0.51,0.2356],[0.5099,0.2349],[0.5098,0.2343],[0.5097,0.2336],[0.5096,0.2329],[0.5095,0.2322],[0.5094,0.2315],[0.5093,0.2308],[0.5092,0.2301],[0.5091,0.2293],[0.509,0.2286],[0.5089,0.2278],[0.5088,0.227],[0.5087,0.2262],[0.5086,0.2254],[0.5085,0.2246],[0.5084,0.2238],[0.5083,0.2229],[0.5082,0.2221],[0.508,0.2212],[0.5079,0.2203],[0.5078,0.2194],[0.5077,0.2186],[0.5076,0.2176],[0.5074,0.2167],[0.5073,0.2158],[0.5072,0.2149],[0.5071,0.2139],[0.5069,0.2129],[0.5068,0.212],[0.5067,0.211],[0.5065,0.21],[0.5064,0.209],[0.5063,0.208],[0.5061,0.207],[0.506,0.206],[0.5059,0.2049],[0.5058,0.2042],[0.5057,0.2035],[0.5056,0.2028],[0.5055,0.2021],[0.5054,0.2014],[0.5053,0.2007],[0.5052,0.2],[0.5051,0.1993],[0.505,0.1985],[0.5049,0.1978],[0.5048,0.1971],[0.5047,0.1964],[0.5046,0.1956],[0.5045,0.1949],[0.5044,0.1941],[0.5043,0.1934],[0.5042,0.1926],[0.5041,0.1919],[0.504,0.1911],[0.5039,0.1904],[0.5038,0.1896],[0.5037,0.1889],[0.5036,0.1881],[0.5035,0.1873],[0.5034,0.1866],[0.5033,0.1858],[0.5032,0.185],[0.5031,0.1842],[0.503,0.1834],[0.5029,0.1827],[0.5028,0.1819],[0.5027,0.1811],[0.5026,0.1803],[0.5025,0.1795],[0.5024,0.1787],[0.5023,0.1779],[0.5022,0.1771],[0.502,0.1763],[0.5019,0.1755],[0.5018,0.1747],[0.5017,0.1739],[0.5016,0.1731],[0.5015,0.1724],[0.5014,0.1717],[0.5013,0.171],[0.5012,0.1703],[0.5011,0.1696],[0.5011,0.1689],[0.501,0.1682],[0.5009,0.1674],[0.5008,0.1667],[0.5007,0.166],[0.5006,0.1653],[0.5005,0.1646],[0.5004,0.1639],[0.5003,0.1632],[0.5002,0.1625],[0.5001,0.1618],[0.5,0.161],[0.4999,0.1603],[0.4998,0.1596],[0.4997,0.1589],[0.4996,0.1582],[0.4995,0.1574],[0.4994,0.1567],[0.4993,0.156],[0.4992,0.1553],[0.4991,0.1546],[0.499,0.1538],[0.4989,0.1531],[0.4989,0.1524],[0.4988,0.1517],[0.4987,0.1509],[0.4986,0.1502],[0.4985,0.1495],[0.4984,0.1488],[0.4983,0.148],[0.4982,0.1473],[0.4981,0.1466],[0.498,0.1459],[0.4979,0.1452],[0.4978,0.1445],[0.4977,0.1438],[0.4976,0.1431],[0.4975,0.1424],[0.4974,0.1417],[0.4973,0.141],[0.4972,0.1403],[0.4971,0.1396],[0.497,0.1389],[0.497,0.1382],[0.4969,0.1375],[0.4968,0.1368],[0.4967,0.136],[0.4966,0.1353],[0.4965,0.1346],[0.4964,0.1339],[0.4963,0.1332],[0.4962,0.1325],[0.4961,0.1318],[0.496,0.1311],[0.4959,0.1304],[0.4958,0.1297],[0.4957,0.129],[0.4956,0.1283],[0.4955,0.1276],[0.4954,0.1269],[0.4953,0.1261],[0.4953,0.1254],[0.4952,0.1247],[0.4951,0.124],[0.495,0.1232],[0.4949,0.1225],[0.4948,0.1218],[0.4947,0.1211],[0.4946,0.1203],[0.4945,0.1196],[0.4944,0.1189],[0.4943,0.1182],[0.4942,0.1174],[0.4941,0.1167],[0.494,0.116],[0.4939,0.1153],[0.4938,0.1146],[0.4937,0.1138],[0.4936,0.1131],[0.4935,0.1124],[0.4934,0.1117],[0.4933,0.111],[0.4932,0.1103],[0.4931,0.1096],[0.493,0.1089],[0.4929,0.1081],[0.4929,0.1074],[0.4928,0.1067],[0.4927,0.106],[0.4926,0.1053],[0.4925,0.1046],[0.4924,0.1039],[0.4923,0.1032],[0.4922,0.1025],[0.4921,0.1017],[0.492,0.1009],[0.4919,0.1001],[0.4918,0.0993],[0.4917,0.0985],[0.4916,0.0977],[0.4914,0.0969],[0.4913,0.0961],[0.4912,0.0953],[0.4911,0.0945],[0.491,0.0937],[0.4909,0.0929],[0.4908,0.0921],[0.4907,0.0913],[0.4906,0.0906],[0.4905,0.0898],[0.4904,0.089],[0.4903,0.0882],[0.4902,0.0874],[0.4901,0.0867],[0.49,0.0859],[0.4899,0.0851],[0.4898,0.0844],[0.4897,0.0836],[0.4896,0.0829],[0.4895,0.0821],[0.4894,0.0814],[0.4893,0.0806],[0.4892,0.0799],[0.4891,0.0791],[0.489,0.0784],[0.4889,0.0777],[0.4888,0.0769],[0.4887,0.0762],[0.4886,0.0755],[0.4885,0.0748],[0.4884,0.0741],[0.4883,0.0733],[0.4882,0.0726],[0.4881,0.0719],[0.488,0.0712],[0.4879,0.0705],[0.4878,0.0695],[0.4877,0.0684],[0.4875,0.0674],[0.4874,0.0664],[0.4873,0.0654],[0.4871,0.0644],[0.487,0.0634],[0.4869,0.0624],[0.4867,0.0615],[0.4866,0.0605],[0.4865,0.0596],[0.4864,0.0586],[0.4862,0.0577],[0.4861,0.0568],[0.486,0.0559],[0.4859,0.055],[0.4858,0.0541],[0.4856,0.0532],[0.4855,0.0524],[0.4854,0.0515],[0.4853,0.0507],[0.4852,0.0498],[0.4851,0.049],[0.485,0.0482],[0.4849,0.0474],[0.4848,0.0467],[0.4847,0.0459],[0.4846,0.0451],[0.4845,0.0444],[0.4844,0.0437],[0.4843,0.043],[0.4842,0.0422],[0.4841,0.0416],[0.484,0.0409],[0.4839,0.0402],[0.4838,0.0396],[0.4837,0.0389],[0.4837,0.0383],[0.4836,0.0377],[0.4835,0.0371],[0.4834,0.0365],[0.4834,0.036],[0.4833,0.0354],[0.4832,0.0349],[0.4831,0.0344],[0.4831,0.0339],[0.483,0.0334],[0.4829,0.0329],[0.4829,0.0325],[0.4828,0.032],[0.4828,0.0316],[0.4827,0.0312],[0.4827,0.0308],[0.4826,0.0304],[0.4826,0.0302],[0.4826,0.0301],[0.4826,0.03],[0.4825,0.0299],[0.4825,0.0299],[0.4825,0.0299],[0.4825,0.0298],[0.4825,0.0298],[0.4825,0.0298],[0.4825,0.0297],[0.4825,0.0296],[0.4825,0.0296],[0.4825,0.0294],[0.4825,0.0292],[0.4824,0.029],[0.4824,0.0289],[0.4824,0.0288],[0.4824,0.0287],[0.4824,0.0286],[0.4824,0.0286],[0.4824,0.0286],[0.4824,0.0286],[0.4824,0.0286],[0.4824,0.0286],[0.4823,0.0285],[0.4823,0.0284],[0.4823,0.0282],[0.4823,0.0281],[0.4822,0.0277],[0.4822,0.0274],[0.482,0.0268],[0.4819,0.0262],[0.4818,0.0256],[0.4817,0.025],[0.4815,0.0244],[0.4814,0.0238],[0.4812,0.0232],[0.481,0.0227],[0.4809,0.0221],[0.4807,0.0216],[0.4805,0.021],[0.4803,0.0205],[0.4802,0.02],[0.48,0.0195],[0.4798,0.019],[0.4796,0.0185],[0.4794,0.018],[0.4792,0.0175],[0.4789,0.017],[0.4787,0.0166],[0.4785,0.0161],[0.4783,0.0157],[0.478,0.0153],[0.4778,0.0148],[0.4776,0.0144],[0.4773,0.014],[0.4768,0.0132],[0.4763,0.0124],[0.4758,0.0117],[0.4753,0.011],[0.4747,0.0103],[0.4742,0.0097],[0.4736,0.009],[0.4731,0.0084],[0.4725,0.0079],[0.472,0.0073],[0.4714,0.0068],[0.4708,0.0063],[0.4702,0.0058],[0.4697,0.0054],[0.4691,0.005],[0.4685,0.0046],[0.468,0.0042],[0.4674,0.0038],[0.4668,0.0035],[0.4663,0.0032],[0.4658,0.0029],[0.4652,0.0026],[0.4647,0.0023],[0.4642,0.0021],[0.4637,0.0019],[0.4632,0.0016],[0.4627,0.0015],[0.4622,0.0013],[0.4618,0.0011],[0.4614,0.001],[0.461,0.0008],[0.4605,0.0007],[0.4602,0.0006],[0.4598,0.0005],[0.4595,0.0004],[0.4592,0.0003],[0.4589,0.0003],[0.4586,0.0002],[0.4584,0.0001],[0.4582,0.0001],[0.458,0.0001],[0.4578,0],[0.4577,0],[0.4576,0],[0.4576,0],[0.4575,0],[0.4575,0],[0.4575,0],[0.4575,0],[0.4574,0],[0.4567,0],[0.456,0],[0.4553,0],[0.4546,0],[0.4539,0],[0.4532,0],[0.4525,0],[0.4518,0],[0.4511,0],[0.4504,0],[0.4497,0],[0.449,0],[0.4483,0],[0.4476,0],[0.4469,0],[0.4461,0],[0.4454,0],[0.4447,0],[0.444,0],[0.4433,0],[0.4426,0],[0.4419,0],[0.4412,0],[0.4405,0],[0.4398,0],[0.4391,0],[0.4384,0],[0.4377,0],[0.437,0],[0.4363,0],[0.4356,0],[0.4348,0],[0.4341,0],[0.4334,0],[0.4327,0],[0.432,0],[0.4313,0],[0.4306,0],[0.4299,0],[0.4292,0],[0.4285,0],[0.4278,0],[0.4271,0],[0.4264,0],[0.4257,0],[0.425,0],[0.4243,0],[0.4235,0],[0.4228,0],[0.4221,0],[0.4214,0],[0.4207,0],[0.42,0],[0.4193,0],[0.4186,0],[0.4179,0],[0.4172,0],[0.4165,0],[0.4158,0],[0.4151,0],[0.4144,0],[0.4137,0],[0.413,0],[0.4122,0],[0.4115,0],[0.4108,0],[0.4101,0],[0.4094,0],[0.4087,0],[0.408,0],[0.4073,0],[0.4066,0],[0.4059,0],[0.4052,0],[0.4045,0],[0.4038,0],[0.4031,0],[0.4024,0],[0.4017,0],[0.4009,0],[0.4002,0],[0.3995,0],[0.3988,0],[0.3981,0],[0.3974,0],[0.3967,0],[0.396,0],[0.3953,0],[0.3946,0],[0.3939,0],[0.3932,0],[0.3925,0],[0.3918,0],[0.3911,0],[0.3904,0],[0.3896,0],[0.3889,0],[0.3882,0],[0.3875,0],[0.3868,0],[0.3861,0],[0.3854,0],[0.3847,0],[0.384,0],[0.3833,0],[0.3826,0],[0.3819,0],[0.3812,0],[0.3805,0],[0.3798,0],[0.3791,0],[0.3783,0],[0.3776,0],[0.3769,0],[0.3762,0],[0.3755,0],[0.3748,0],[0.3741,0],[0.3734,0],[0.3727,0],[0.372,0],[0.3713,0],[0.3706,0],[0.3699,0],[0.3692,0],[0.3685,0],[0.3678,0],[0.367,0],[0.3663,0],[0.3656,0],[0.3649,0],[0.3642,0],[0.3635,0],[0.3628,0],[0.3621,0],[0.3614,0],[0.3607,0],[0.36,0],[0.3593,0],[0.3586,0],[0.3579,0],[0.3572,0],[0.3565,0],[0.3557,0],[0.355,0],[0.3543,0],[0.3536,0],[0.3529,0],[0.3522,0],[0.3515,0],[0.3508,0],[0.3501,0],[0.3494,0],[0.3487,0],[0.348,0],[0.3473,0],[0.3466,0],[0.3459,0],[0.3452,0],[0.3445,0],[0.3437,0],[0.343,0],[0.3423,0],[0.3416,0],[0.3409,0],[0.3402,0],[0.3395,0],[0.3388,0],[0.3381,0],[0.3374,0],[0.3367,0],[0.336,0],[0.3353,0],[0.3346,0],[0.3339,0],[0.3332,0],[0.3324,0],[0.3317,0],[0.331,0],[0.3303,0],[0.3296,0],[0.3289,0],[0.3282,0],[0.3275,0],[0.3268,0],[0.3261,0],[0.3254,0],[0.3247,0],[0.324,0],[0.3233,0],[0.3226,0],[0.3219,0],[0.3211,0],[0.3204,0],[0.3197,0],[0.319,0],[0.3183,0],[0.3176,0],[0.3169,0],[0.3162,0],[0.3155,0],[0.3148,0],[0.3141,0],[0.3134,0],[0.3127,0],[0.312,0],[0.3113,0],[0.3106,0],[0.3098,0],[0.3091,0],[0.3084,0],[0.3077,0],[0.307,0],[0.3063,0],[0.3056,0],[0.3049,0],[0.3042,0],[0.3035,0],[0.3028,0],[0.3021,0],[0.3014,0],[0.3007,0],[0.3,0],[0.2993,0],[0.2985,0],[0.2978,0],[0.2971,0],[0.2964,0],[0.2957,0],[0.295,0],[0.2943,0],[0.2936,0],[0.2929,0],[0.2922,0],[0.2915,0],[0.2908,0],[0.2901,0],[0.2894,0],[0.2887,0],[0.288,0],[0.2872,0],[0.2865,0],[0.2858,0],[0.2851,0],[0.2844,0],[0.2837,0],[0.283,0],[0.2823,0],[0.2816,0],[0.2809,0],[0.2802,0],[0.2795,0],[0.2788,0],[0.2781,0],[0.2774,0],[0.2767,0],[0.2759,0],[0.2752,0],[0.2745,0],[0.2738,0],[0.2731,0],[0.2724,0],[0.2717,0],[0.271,0],[0.2703,0],[0.2696,0],[0.2689,0],[0.2682,0],[0.2675,0],[0.2668,0],[0.2661,0],[0.2654,0],[0.2646,0],[0.2639,0],[0.2632,0],[0.2625,0],[0.2618,0],[0.2611,0],[0.2604,0],[0.2597,0],[0.259,0],[0.2583,0],[0.2576,0],[0.2569,0],[0.2562,0],[0.2555,0],[0.2548,0],[0.2541,0],[0.2533,0],[0.2526,0],[0.2519,0],[0.2512,0],[0.2505,0],[0.2498,0],[0.2491,0],[0.2484,0],[0.2477,0],[0.247,0],[0.2463,0],[0.2456,0],[0.2449,0],[0.2442,0],[0.2435,0],[0.2428,0],[0.2421,0],[0.2413,0],[0.2406,0],[0.2399,0],[0.2392,0],[0.2385,0],[0.2378,0],[0.2371,0],[0.2364,0],[0.2357,0],[0.235,0],[0.2343,0],[0.2336,0],[0.2329,0],[0.2322,0],[0.2315,0],[0.2308,0],[0.23,0],[0.2293,0],[0.2286,0],[0.2279,0],[0.2272,0],[0.2265,0],[0.2258,0],[0.2251,0],[0.2244,0],[0.2237,0],[0.223,0],[0.2223,0],[0.2216,0],[0.2209,0],[0.2202,0],[0.2195,0],[0.2187,0],[0.218,0],[0.2173,0],[0.2166,0],[0.2159,0],[0.2152,0],[0.2145,0],[0.2138,0],[0.2131,0],[0.2124,0],[0.2117,0],[0.211,0],[0.2103,0],[0.2096,0],[0.2089,0],[0.2082,0],[0.2074,0],[0.2067,0],[0.206,0],[0.2053,0],[0.2046,0],[0.2039,0],[0.2032,0],[0.2025,0],[0.2018,0],[0.2011,0],[0.2004,0],[0.1997,0],[0.199,0],[0.1983,0],[0.1976,0],[0.1969,0],[0.1961,0],[0.1954,0],[0.1947,0],[0.194,0],[0.1933,0],[0.1926,0],[0.1919,0],[0.1912,0],[0.1905,0],[0.1898,0],[0.1891,0],[0.1884,0],[0.1877,0],[0.187,0],[0.1863,0],[0.1856,0],[0.1848,0],[0.1841,0],[0.1834,0],[0.1827,0],[0.182,0],[0.1813,0],[0.1806,0],[0.1799,0],[0.1792,0],[0.1785,0],[0.1778,0],[0.1771,0],[0.1764,0],[0.1757,0],[0.175,0],[0.1743,0],[0.1735,0],[0.1728,0],[0.1721,0],[0.1714,0],[0.1707,0],[0.17,0],[0.1693,0],[0.1686,0],[0.1679,0],[0.1672,0],[0.1665,0],[0.1658,0],[0.1651,0],[0.1644,0],[0.1637,0],[0.163,0],[0.1622,0],[0.1615,0],[0.1608,0],[0.1601,0],[0.1594,0],[0.1587,0],[0.158,0],[0.1573,0],[0.1566,0],[0.1559,0],[0.1552,0],[0.1545,0],[0.1538,0],[0.1531,0],[0.1524,0],[0.1517,0],[0.1509,0],[0.1502,0],[0.1495,0],[0.1488,0],[0.1481,0],[0.1474,0],[0.1467,0],[0.146,0],[0.1453,0],[0.1446,0],[0.1439,0],[0.1432,0],[0.1425,0],[0.1418,0],[0.1411,0],[0.1404,0],[0.1397,0],[0.1389,0],[0.1382,0],[0.1375,0],[0.1368,0],[0.1361,0],[0.1354,0],[0.1347,0],[0.134,0],[0.1333,0],[0.1326,0],[0.1319,0],[0.1312,0],[0.1305,0],[0.1298,0],[0.1291,0],[0.1284,0],[0.1276,0],[0.1269,0],[0.1262,0],[0.1255,0],[0.1248,0],[0.1241,0],[0.1234,0],[0.1227,0],[0.122,0],[0.1213,0],[0.1206,0],[0.1199,0],[0.1192,0],[0.1185,0],[0.1178,0],[0.1171,0],[0.1163,0],[0.1156,0],[0.1149,0],[0.1142,0],[0.1135,0],[0.1128,0],[0.1121,0],[0.1114,0],[0.1107,0],[0.11,0],[0.1093,0],[0.1086,0],[0.1079,0],[0.1072,0],[0.1065,0],[0.1058,0],[0.105,0],[0.1043,0],[0.1036,0],[0.1029,0],[0.1022,0],[0.1015,0],[0.1008,0],[0.1001,0],[0.0994,0],[0.0987,0],[0.098,0],[0.0973,0],[0.0966,0],[0.0959,0],[0.0952,0],[0.0945,0],[0.0937,0],[0.093,0],[0.0923,0],[0.0916,0],[0.0909,0],[0.0902,0],[0.0895,0],[0.0888,0],[0.0881,0],[0.0874,0],[0.0867,0],[0.086,0],[0.0853,0],[0.0846,0],[0.0839,0],[0.0832,0],[0.0824,0],[0.0817,0],[0.081,0],[0.0803,0],[0.0796,0],[0.0789,0],[0.0782,0],[0.0775,0],[0.0768,0],[0.0761,0],[0.0754,0],[0.0747,0],[0.074,0],[0.0733,0],[0.0726,0],[0.0719,0],[0.0711,0],[0.0704,0],[0.0697,0],[0.069,0],[0.0683,0],[0.0676,0],[0.0669,0],[0.0662,0],[0.0655,0],[0.0648,0],[0.0641,0],[0.0634,0],[0.0627,0],[0.062,0],[0.0613,0],[0.0606,0],[0.0598,0],[0.0591,0],[0.0584,0],[0.0577,0],[0.057,0],[0.0563,0],[0.0556,0],[0.0549,0],[0.0542,0],[0.0535,0],[0.0528,0],[0.0521,0],[0.0514,0],[0.0507,0],[0.05,0],[0.0493,0],[0.0485,0]]"),L5={id:"arcade-cabinet",name:"Borne d'Arcade",dimensions:"600 × 1700 × 700 mm",printable:[600,1700],icon:"🕹️",printAspect:1,twoSided:!1,zones:[{id:"left",label:"Côté Gauche",col:0,row:1,aspect:561.8/1670.9},{id:"right",label:"Côté Droit",col:1,row:1,aspect:561.8/1670.9},{id:"marquee",label:"Fronton (Haut)",col:2,row:1,aspect:600/200},{id:"front",label:"Porte Avant",col:2,row:0,aspect:600/800}],create(){const n=new Et,e=new dt({color:1118481,roughness:.9}),t=new dt({color:16777215,roughness:.6,metalness:.1}),i=new dt({color:328965,roughness:.2,metalness:.8});new Yd().load("/ryu-vs-ryu.avif",de=>{de.colorSpace=zt,i.map=de,i.color.set(16777215),i.needsUpdate=!0});function s(de,pe,We,nt,R,Q,Z,$=!1){const j=de.attributes.uv,ce=de.attributes.position,ne=Q*(1/3),se=(1-Z)*.5;for(let Ie=0;Ie<j.count;Ie++){const Ue=ce.getX(Ie),A=ce.getY(Ie);let x=(Ue-pe)/(We-pe);$&&(x=1-x);const B=(A-nt)/(R-nt);j.setXY(Ie,ne+x*(1/3),se+B*.5)}j.needsUpdate=!0}function o(de,pe,We,nt,R=null){const Q=new ri(de,pe),Z=R||t,$=Q.attributes.uv;if(!R){const ce=We*.3333333333333333,ne=(1-nt)*.5;for(let se=0;se<$.count;se++){let Ie=$.getX(se),Ue=$.getY(se);$.setXY(se,ce+Ie*(1/3),ne+Ue*.5)}}const j=new Oe(Q,Z);return j.rotation.y=Math.PI/2,j}function a(de,pe,We,nt,R=null){const Q=pe.x-de.x,Z=pe.y-de.y,$=Math.hypot(Q,Z),j=Math.atan2(Z,Q),ce=o(.58,$,We,nt,R),ne=new Et;ne.add(ce);const se=de.x+Q/2,Ie=de.y+Z/2;return ne.position.set(se,Ie,0),ne.rotation.z=j-Math.PI/2,ne}const l=new ii;if(fi.length>0){l.moveTo(fi[0][0],fi[0][1]);for(let de=1;de<fi.length;de++)l.lineTo(fi[de][0],fi[de][1])}else l.moveTo(0,0),l.lineTo(0,1),l.lineTo(1,1),l.lineTo(1,0),l.lineTo(0,0);const c={depth:.018,bevelEnabled:!0,bevelSegments:2,bevelSize:.002,bevelThickness:.002};let u=1/0,h=-1/0,f=1/0,m=-1/0;fi.forEach(de=>{de[0]<u&&(u=de[0]),de[0]>h&&(h=de[0]),de[1]<f&&(f=de[1]),de[1]>m&&(m=de[1])});const g=new en(l,c);g.translate(0,0,.285),s(g,u,h,f,m,0,1,!1);const _=new Oe(g,[t,e]),p=new en(l,c);p.translate(0,0,-.303),s(p,u,h,f,m,1,1,!0);const d=new Oe(p,[t,e]),M={x:.5128-.03,y:0},y={x:.5618-.03,y:.9731},v={x:.5618,y:.9731},C={x:.48,y:.985},S={x:.35,y:1.05},T={x:.15,y:1.35},L={x:.336,y:1.5},w={x:.3147,y:1.6665},E={x:0,y:1.6222},D={x:0,y:0},F=a(M,y,2,0),z=a(y,v,null,null,e),V=a(v,C,null,null,e),G=a(C,S,null,null,e),X=a(T,L,null,null,e),K=a(w,E,null,null,e),W=a(D,M,null,null,e),he=a(E,D,null,null,e),_e=new dt({color:16711680,roughness:.3,metalness:.1}),be=new dt({color:22015,roughness:.3,metalness:.1}),Ge=new dt({color:22015,roughness:.3,metalness:.1}),Ze=new dt({color:16711680,roughness:.3,metalness:.1});function rt(de,pe,We,nt){const R=new dt({color:13421772,roughness:.4,metalness:.8}),Q=new vn(.005,.005,.05,16),Z=new Oe(Q,R);Z.rotation.z=-Math.PI/2,Z.position.set(.025,.01,pe+.12);const $=new M0(.015,32,32),j=new Oe($,We);j.position.set(.05,.01,pe+.12),de.add(Z,j);const ce=new vn(.012,.012,.005,32),ne=new vn(.015,.015,.002,32),se=new dt({color:2236962,roughness:.8});[{y:.02,z:pe+.04},{y:.03,z:pe-0},{y:.02,z:pe-.04},{y:-.02,z:pe+.03},{y:-.01,z:pe-.01},{y:-.02,z:pe-.05}].forEach(Ue=>{const A=new Oe(ce,nt);A.rotation.z=-Math.PI/2,A.position.set(.0025,Ue.y,Ue.z);const x=new Oe(ne,se);x.rotation.z=-Math.PI/2,x.position.set(.001,Ue.y,Ue.z),de.add(A,x)})}rt(V,.05,_e,be),rt(V,-.19,Ge,Ze);const tt=a(S,T,null,null,i),J=a(L,w,2,1),te=new Et;te.add(_,d,F,z,V,G,tt,X,J,K,W,he),te.position.set(-.2809,-.83325,0);const Se=new Et;return Se.rotation.y=-Math.PI/2,Se.add(te),n.add(Se),n.position.set(0,0,0),{group:n,topMaterial:t,baseMaterial:e,joystick1Material:_e,button1Material:be,joystick2Material:Ge,button2Material:Ze,type:"arcade",zones:this.zones,twoSided:!1}}},mi=2.5,Zn=.2,D5={id:"event-wristband-fabric",name:"Bracelet événementiel en tissu",dimensions:[250,20,1],printable:[250,20],icon:"🎟️",create(){const n=new Et,e=new dt({color:15067115,roughness:.95,metalness:0}),t=new dt({color:16777215,roughness:.88,metalness:0,side:Wn}),i=new dt({color:13358561,roughness:1}),r=new dt({color:16316661,roughness:.62,metalness:0}),s=new Oe(new Tn(mi,.012,Zn),e);s.castShadow=!0,s.receiveShadow=!0,n.add(s);const o=new ri(mi,Zn);o.rotateX(-Math.PI/2);const a=new Oe(o,t);a.position.y=.0065,a.receiveShadow=!0,n.add(a);for(const u of[-Zn/2+.008,Zn/2-.008]){const h=new Oe(new Tn(mi-.035,.001,.002),i);h.position.set(0,.0075,u),n.add(h)}const l=new Oe(new Tn(.072,.023,Zn+.012),r);l.position.set(mi/2-.18,.01,0),l.castShadow=!0,n.add(l);const c=new Oe(new Tn(.016,.004,Zn*.45),r);return c.position.set(mi/2-.18,.023,0),n.add(c),{group:n,top:a,topMaterial:t,baseMaterial:e,printMesh:a,printAspect:mi/Zn,meshWidth:mi,meshHeight:Zn,type:"flat"}}},I5={CanvasTexture:v0,CircleGeometry:jr,Color:Ve,DirectionalLight:Zd,GridHelper:ef,HemisphereLight:jd,LinearToneMapping:pc,MathUtils:Tc,Mesh:Oe,PCFSoftShadowMap:mc,PerspectiveCamera:an,Raycaster:Qd,SRGBColorSpace:zt,Scene:ed,ShadowMaterial:Bd,Sprite:nd,SpriteMaterial:Nc,Vector2:re,Vector3:P,WebGLRenderer:zg},U5={THREE:I5,OrbitControls:Hg,ArrayBufferTarget:lu,Muxer:o5,mousePadProduct:l5,mug11ozProduct:u5,keychainRectProduct:d5,keychainRoundProduct:m5,keychainHeartProduct:p5,tshirt3DProduct:b5,puzzleProduct:w5,coasterProduct:A5,coasterRoundProduct:C5,pencilCaseProduct:R5,cushionProduct:P5,arcadeCabinetProduct:L5,eventWristbandProduct:D5};function N5(n){n.updateSceneBackground=function(){const t=!n.suppressClientWatermarkForOwnerExport&&(n.clientMode||(document.querySelector("#showWatermark")?.checked??!0)),i=document.querySelector("#sceneColor")?.value||"#e9edf0",r=document.querySelector("#bgOpacity"),s=r?Number(r.value)/100:1;if(!t&&!n.bgImageObj){n.sceneWatermarkTexture?.dispose(),n.sceneWatermarkTexture=null,n.scene.background=new n.THREE.Color(i);return}const o=document.createElement("canvas");o.width=window.innerWidth>0?window.innerWidth*2:2048,o.height=window.innerHeight>0?window.innerHeight*2:2048;const a=o.getContext("2d");if(a.fillStyle=i,a.fillRect(0,0,o.width,o.height),n.bgImageObj){a.save(),a.globalAlpha=s;const l=Math.max(o.width/n.bgImageObj.width,o.height/n.bgImageObj.height),c=n.bgImageObj.width*l,u=n.bgImageObj.height*l;a.drawImage(n.bgImageObj,(o.width-c)/2,(o.height-u)/2,c,u),a.restore()}if(t&&n.isWatermarkLoaded&&n.watermarkImg.width>0){a.save();const l=document.createElement("canvas");l.width=n.watermarkImg.width,l.height=n.watermarkImg.height;const c=l.getContext("2d");c.drawImage(n.watermarkImg,0,0),c.globalCompositeOperation="source-in",c.fillStyle="#425260",c.fillRect(0,0,l.width,l.height),a.globalAlpha=.08,a.translate(o.width/2,o.height/2),a.rotate(-25*Math.PI/180),a.translate(-o.width/2,-o.height/2);const u=340,h=220,f=220,m=Math.round(f*(n.watermarkImg.height/n.watermarkImg.width));for(let g=-o.height*.6;g<o.height*1.6;g+=h){const _=Math.floor(g/h)%2*(u/2);for(let p=-o.width*.6;p<o.width*1.6;p+=u)a.drawImage(l,p+_,g,f,m)}a.restore()}n.sceneWatermarkTexture?.dispose(),n.sceneWatermarkTexture=new n.THREE.CanvasTexture(o),n.sceneWatermarkTexture.colorSpace=n.THREE.SRGBColorSpace,n.scene.background=n.sceneWatermarkTexture}}function O5(n){n.clientMode=document.documentElement.dataset.mode!=="admin",n.clientSelectedProduct=!1,n.clientDesignConfirmed=!1,n.submissionInProgress=!1,n.suppressClientWatermarkForOwnerExport=!1,document.body.classList.toggle("client-mode",n.clientMode),document.querySelector("#submitCreation").hidden=!n.clientMode,document.querySelector("#clientGuide").hidden=!n.clientMode,document.querySelector("#clientModeLink").href="/",document.querySelector("#modeLabel").textContent=n.clientMode?"ESPACE CLIENT":"ATELIER PROPRIÉTAIRE";for(const e of["topColor","baseColor","handleColor","innerColor","j1Color","j2Color","b1Color","b2Color"]){const t=document.getElementById(e);t&&(t.disabled=!0,t.title="Non disponible pour le moment — objets blancs uniquement")}if(document.querySelectorAll(".quick-palette .swatch").forEach(e=>{e.disabled=!0,e.title="Non disponible pour le moment — objets blancs uniquement"}),n.watermarkControl=document.querySelector("#showWatermark"),n.clientMode&&(n.watermarkControl.checked=!0,n.watermarkControl.disabled=!0),window.matchMedia("(max-width: 900px)").matches&&(document.querySelector(".workspace").classList.add("right-collapsed"),document.querySelector("#wrapPreviewWidget").classList.add("collapsed"),n.clientMode||document.querySelector(".workspace").classList.add("left-collapsed")),window.location.hostname!=="localhost"&&window.location.hostname!=="127.0.0.1"){const e=document.querySelector("#localBadge");e&&(e.style.display="none")}n.viewer=document.querySelector("#viewer"),n.renderer=new n.THREE.WebGLRenderer({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),n.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),n.renderer.shadowMap.enabled=!0,n.renderer.shadowMap.type=n.THREE.PCFSoftShadowMap,n.renderer.outputColorSpace=n.THREE.SRGBColorSpace,n.renderer.toneMapping=n.THREE.LinearToneMapping,n.renderer.toneMappingExposure=1,n.viewer.append(n.renderer.domElement),n.scene=new n.THREE.Scene,n.scene.background=new n.THREE.Color(15330800),n.camera=new n.THREE.PerspectiveCamera(34,1,.1,100),n.camera.position.set(3.4,2.8,3.8),n.scene.add(n.camera),n.sceneWatermarkTexture=null,n.bgImageObj=null,n.backgroundTexture=null,n.watermarkImg=new Image,n.watermarkImg.src="/logo-graph2print.png",n.isWatermarkLoaded=!1,n.watermarkImg.onload=()=>{n.isWatermarkLoaded=!0,n.updateSceneBackground(),(n.imagesList.length>0||n.textParams.text.trim())&&n.buildTexture()},n.wrapPreview=new n.THREE.Sprite(new n.THREE.SpriteMaterial({transparent:!0,depthTest:!1,depthWrite:!1})),n.wrapPreview.position.set(0,-1.28,-5),n.wrapPreview.visible=!1,n.wrapPreview.renderOrder=20,n.controls=new n.OrbitControls(n.camera,n.renderer.domElement),n.controls.enableDamping=!1,n.controls.autoRotate=!1,n.controls.minDistance=2.2,n.controls.maxDistance=8}const F5=Object.freeze(Object.defineProperty({__proto__:null,initialize:O5,register:N5},Symbol.toStringTag,{value:"Module"}));function B5(n){n.getActiveImage=function(){if(n.activeImageIndex>=0&&n.activeImageIndex<n.imagesList.length){const t=n.imagesList[n.activeImageIndex];return t.scaleX===void 0&&(t.scaleX=t.scale??1),t.scaleY===void 0&&(t.scaleY=t.scale??1),t}return null},n.syncActiveControls=function(){const t=n.getActiveImage(),i=document.querySelector("#adjustments"),r=document.querySelector("#activeImageLabel");if(!t){i?.classList.add("disabled"),r&&(r.textContent="Aucune image active");return}i?.classList.remove("disabled"),r&&(r.textContent=`Image active : ${t.name}`);const s=Math.round((t.scaleX+t.scaleY)/2*100);document.querySelector("#scale").value=s,document.querySelector("#scaleValue").value=`${s} %`,document.querySelector("#posX").value=Math.round(t.x*100),document.querySelector("#posXValue").value=`${Math.round(t.x*100)} %`,document.querySelector("#posY").value=Math.round(t.y*100),document.querySelector("#posYValue").value=`${Math.round(t.y*100)} %`,document.querySelector("#rotation").value=Math.round(t.rotation),document.querySelector("#rotationValue").value=`${Math.round(t.rotation)}°`,document.querySelectorAll("[data-fit]").forEach(o=>o.classList.toggle("active",o.dataset.fit===t.fitMode))},n.selectActiveImage=function(t){t>=0&&t<n.imagesList.length?n.activeImageIndex=t:n.activeImageIndex=n.imagesList.length-1,n.renderImagesList(),n.syncActiveControls(),n.setOverlayVisible(document.querySelector("#showTransformFrame").checked),n.updateOverlay()},n.removeImageByIndex=function(t,i){i&&i.stopPropagation();const r=n.imagesList[t];r?.img.src.startsWith("blob:")&&URL.revokeObjectURL(r.img.src),n.imagesList.splice(t,1),n.activeImageIndex>=n.imagesList.length&&(n.activeImageIndex=n.imagesList.length-1),n.renderImagesList(),n.syncActiveControls(),n.buildTexture(),n.setOverlayVisible(document.querySelector("#showTransformFrame").checked)}}function z5(n){n.controls.target.set(0,-.04,0),n.scene.add(new n.THREE.HemisphereLight(16777215,14870768,2)),n.key=new n.THREE.DirectionalLight(16777215,2.8),n.key.position.set(-3,5,4),n.key.castShadow=!0,n.key.shadow.mapSize.set(2048,2048),n.scene.add(n.key),n.fill=new n.THREE.DirectionalLight(16777215,1.6),n.fill.position.set(4,2,-3),n.scene.add(n.fill),n.frontLight=new n.THREE.DirectionalLight(16777215,.8),n.frontLight.position.set(0,0,5),n.scene.add(n.frontLight),n.floor=new n.THREE.Mesh(new n.THREE.CircleGeometry(5,64),new n.THREE.ShadowMaterial({color:5595499,opacity:.15})),n.floor.rotation.x=-Math.PI/2,n.floor.position.y=-.09,n.floor.receiveShadow=!0,n.scene.add(n.floor),n.productDefinitions={mousePad:n.mousePadProduct,mug11oz:n.mug11ozProduct,keychainRect:n.keychainRectProduct,keychainRound:n.keychainRoundProduct,keychainHeart:n.keychainHeartProduct,tshirt3D:n.tshirt3DProduct,puzzle:n.puzzleProduct,coaster:n.coasterProduct,coasterRound:n.coasterRoundProduct,pencilCase:n.pencilCaseProduct,cushion:n.cushionProduct,arcadeCabinet:n.arcadeCabinetProduct,eventWristband:n.eventWristbandProduct},n.defaultProductKey=document.querySelector("#productSelect")?.value||"mug11oz",n.currentProductKey=n.defaultProductKey,n.product=n.productDefinitions[n.defaultProductKey].create(),n.scene.add(n.product.group),n.grid=new n.THREE.GridHelper(8,24,6385784,10135212),n.grid.position.y=-.085,n.grid.visible=!1,n.scene.add(n.grid),n.imagesList=[],n.activeImageIndex=-1,n.heartTexture=null,n.texture=null,n.fitMode="cover",n.params={scale:1,x:0,y:0,rotation:0},n.textParams={text:"",color:"#111820",font:"Inter, sans-serif",size:60,bold:!1,italic:!1,align:"center",x:0,y:0,rotation:0},n.overlay=document.querySelector("#transformOverlay"),n.box=document.querySelector("#transformBox"),n.rotateHandle=document.querySelector("#rotateHandle"),n.rotateStem=document.querySelector("#rotateStem"),n.handles=[...document.querySelectorAll(".resize-handle")],n.edgeHandles=[...document.querySelectorAll(".edge-handle")]}const k5=Object.freeze(Object.defineProperty({__proto__:null,initialize:z5,register:B5},Symbol.toStringTag,{value:"Module"}));function H5(n){n.renderImagesList=function(){const t=document.querySelector("#imagesList");t&&(t.innerHTML="",n.imagesList.forEach((i,r)=>{const s=document.createElement("div");s.className=`image-item${r===n.activeImageIndex?" active":""}`,s.onclick=()=>n.selectActiveImage(r);const o=document.createElement("img");o.className="image-item-thumb",o.src=i.img.src,o.alt=i.name;const a=document.createElement("div");a.className="image-item-info",a.innerHTML=`<span class="image-item-name">${i.name}</span><small class="image-item-meta">Calque #${r+1} • ${Math.round(i.scale*100)}%</small>`;const l=document.createElement("select");l.className="layer-side-select",n.product.zones?l.innerHTML='<option value="both">Toutes zones</option>'+n.product.zones.map(u=>`<option value="${u.id}">${u.label}</option>`).join(""):l.innerHTML='<option value="both">Deux faces</option><option value="A">Face A</option><option value="B">Face B</option>'+(n.currentProductKey==="tshirt3D"?'<option value="heart">Cœur (petit)</option>':""),l.value=i.side||"both",l.onclick=u=>u.stopPropagation(),l.onchange=u=>{i.side=u.target.value,n.buildTexture()},(n.product.twoSided||n.product.zones)&&a.append(l);const c=document.createElement("button");c.className="image-item-remove",c.title="Supprimer cette image",c.innerHTML="×",c.onclick=u=>n.removeImageByIndex(r,u),s.append(o,a,c),t.append(s)}))},n.isOverlayVisible=function(){return!n.overlay.hasAttribute("hidden")&&!n.overlay.classList.contains("hidden")&&n.overlay.style.display!=="none"},n.setOverlayVisible=function(t){const i=n.product.type==="flat",r=document.querySelector("#showTransformFrame").checked,s=n.getActiveImage();!!t&&r&&!!s&&i?(n.overlay.removeAttribute("hidden"),n.overlay.classList.remove("hidden"),n.overlay.style.display="block"):(n.overlay.setAttribute("hidden",""),n.overlay.classList.add("hidden"),n.overlay.style.display="none")},n.updateWrapPreviewWidget=function(t){const i=document.querySelector("#wrapPreviewWidget"),r=document.querySelector("#wrapPreviewImg");if(!i||!r)return;const s=document.querySelector("#heartPreviewPanel"),o=document.querySelector("#downloadHeartBtn");if(s&&(s.hidden=!n.heartTexture),o&&(o.hidden=!n.heartTexture||n.clientMode),n.heartTexture&&(document.querySelector("#heartPreviewImg").src=n.heartTexture.image.toDataURL("image/png")),n.imagesList.length>0||n.textParams.text.trim().length>0){i.hidden=!1;const l=t||n.texture?.image;l&&l.toDataURL&&(r.src=l.toDataURL("image/png"))}else i.hidden=!0}}function V5(n){document.querySelector("#toggleWrapPreview")?.addEventListener("click",()=>{document.querySelector("#wrapPreviewWidget")?.classList.toggle("collapsed")}),document.querySelector("#downloadHeartBtn")?.addEventListener("click",()=>{if(!n.heartTexture?.image)return;const e=document.createElement("a");e.href=n.heartTexture.image.toDataURL("image/png"),e.download="coeur-tshirt-"+Date.now()+".png",document.body.append(e),e.click(),e.remove()}),document.querySelector("#downloadWrapBtn")?.addEventListener("click",()=>{const e=n.texture?.image;if(!e||!e.toDataURL){n.showToast("Aucun visuel wrap à exporter");return}const t=document.createElement("a");t.href=e.toDataURL("image/png");const i=n.product.printable||n.productDefinitions[n.currentProductKey].printable,r=Array.isArray(i)?i.join("x")+"mm":"210x95mm";t.download="wrap-"+n.currentProductKey+"-"+r+"-"+Date.now()+".png",document.body.append(t),t.click(),t.remove(),n.showToast("Fichier d’impression Wrap PNG téléchargé")})}const G5=Object.freeze(Object.defineProperty({__proto__:null,initialize:V5,register:H5},Symbol.toStringTag,{value:"Module"}));function W5(n){n.buildHeartTexture=function(){if(n.heartTexture?.dispose(),n.heartTexture=null,n.currentProductKey!=="tshirt3D")return;const t=n.imagesList.filter(o=>o.side==="heart"&&o.img),i=n.textParams.side==="heart"&&n.textParams.text.trim();if(!t.length&&!i)return;const r=document.createElement("canvas");r.width=r.height=1024;const s=r.getContext("2d");for(const o of t){const a=o.img.width/o.img.height;let l,c;o.fitMode==="fill"?l=c=1024:o.fitMode==="contain"==a>1?(l=1024,c=l/a):(c=1024,l=c*a),l*=o.scaleX??o.scale??1,c*=o.scaleY??o.scale??1,s.save(),s.translate(512+o.x*512,512-o.y*512),s.rotate(-o.rotation*Math.PI/180),s.drawImage(o.img,-l/2,-c/2,l,c),s.restore()}if(i){s.save(),s.translate(512+n.textParams.x*512,512-n.textParams.y*512),s.rotate(-n.textParams.rotation*Math.PI/180),s.font=(n.textParams.italic?"italic ":"")+(n.textParams.bold?"bold ":"normal ")+n.textParams.size+"px "+n.textParams.font,s.fillStyle=n.textParams.color,s.textAlign=n.textParams.align||"center",s.textBaseline="middle";const o=n.textParams.text.split(`
`);o.forEach((a,l)=>s.fillText(a,0,(l-(o.length-1)/2)*n.textParams.size*1.25)),s.restore()}n.clientMode&&!n.suppressClientWatermarkForOwnerExport&&n.isWatermarkLoaded&&(s.save(),s.globalAlpha=.16,s.drawImage(n.watermarkImg,320,320,384,384*n.watermarkImg.height/n.watermarkImg.width),s.restore()),n.heartTexture=new n.THREE.CanvasTexture(r),n.heartTexture.colorSpace=n.THREE.SRGBColorSpace,n.heartTexture.anisotropy=n.renderer.capabilities.getMaxAnisotropy()}}function X5(n){}const q5=Object.freeze(Object.defineProperty({__proto__:null,initialize:X5,register:W5},Symbol.toStringTag,{value:"Module"}));function Y5(n){n.buildTexture=function(){const t=n.textParams.text.trim().length>0;if(!(n.imagesList.length>0)&&!t){n.product.clearDecals?.(),n.texture?.dispose(),n.texture=null,n.heartTexture?.dispose(),n.heartTexture=null,n.product.topMaterial.map=null,n.product.topMaterial.needsUpdate=!0,n.wrapPreview.material.map=null,n.wrapPreview.material.needsUpdate=!0,n.updateWrapPreviewWidget(null),n.updateClientGuide();return}const r=document.querySelector("#topColor")?.value||"#ffffff",s=!!n.product.twoSided,o=!!n.product.zones,a=document.createElement("canvas");a.width=o?3072:s?3200:1600,a.height=o?2048:Math.round(1600/n.product.printAspect);const l=a.getContext("2d");if(l.clearRect(0,0,a.width,a.height),n.product.type!=="3d-decal"&&(l.fillStyle=r,l.fillRect(0,0,a.width,a.height)),!n.suppressClientWatermarkForOwnerExport&&(n.clientMode||(document.querySelector("#showWatermark")?.checked??!0))&&n.isWatermarkLoaded&&n.watermarkImg.width>0&&n.product.type!=="3d-decal"){l.save();const u=document.createElement("canvas");u.width=n.watermarkImg.width,u.height=n.watermarkImg.height;const h=u.getContext("2d");h.drawImage(n.watermarkImg,0,0),h.globalCompositeOperation="source-in",h.fillStyle="#111820",h.fillRect(0,0,u.width,u.height),l.globalAlpha=.12,l.translate(a.width/2,a.height/2),l.rotate(-25*Math.PI/180),l.translate(-a.width/2,-a.height/2);const f=320,m=200,g=190,_=Math.round(g*(n.watermarkImg.height/n.watermarkImg.width));for(let p=-a.height*.6;p<a.height*1.6;p+=m){const d=Math.floor(p/m)%2*(f/2);for(let M=-a.width*.6;M<a.width*1.6;M+=f)l.drawImage(u,M+d,p,g,_)}l.restore()}if(n.imagesList.forEach(u=>{if(!u.img||n.currentProductKey==="tshirt3D"&&u.side==="heart")return;const h=u.scaleX??u.scale??1,f=u.scaleY??u.scale??1,m=u.img.width/u.img.height;let g=[];n.product.zones?g=u.side==="both"||!u.side?n.product.zones:n.product.zones.filter(_=>_.id===u.side):g=(s?u.side==="A"?[0]:u.side==="B"?[1]:[0,1]:[0]).map(p=>({col:p,row:0,width:1600,height:a.height})),g.forEach(_=>{const p=o?1024:1600,d=o?1024:a.height,M=_.col*p,y=(_.row||0)*d,v=o?_.aspect||1:p/d;let C,S;u.fitMode==="fill"?(C=p,S=d):u.fitMode==="contain"==m>v?(C=p,S=o?p*v/m:C/m):(S=d,C=o?d*m/v:S*m),C*=h,S*=f;const T=M+p/2+u.x*p*.5,L=y+d/2-u.y*d*.5;l.save(),l.beginPath(),l.rect(M,y,p,d),l.clip(),l.translate(T,L),l.rotate(-u.rotation*Math.PI/180),l.drawImage(u.img,-C/2,-S/2,C,S),l.restore()})}),t&&!(n.currentProductKey==="tshirt3D"&&n.textParams.side==="heart")){let u=[];n.product.zones?u=n.textParams.side==="both"||!n.textParams.side?n.product.zones:n.product.zones.filter(h=>h.id===n.textParams.side):u=(s?n.textParams.side==="A"?[0]:n.textParams.side==="B"?[1]:[0,1]:[0]).map(f=>({col:f,row:0,width:1600,height:a.height})),u.forEach(h=>{l.save();const f=o?1024:1600,m=o?1024:a.height,g=h.col*f,_=(h.row||0)*m;l.beginPath(),l.rect(g,_,f,m),l.clip();const p=g+f/2+n.textParams.x*f*.5,d=_+m/2-n.textParams.y*m*.5;l.translate(p,d),l.rotate(-n.textParams.rotation*Math.PI/180);const M=`${n.textParams.italic?"italic ":""}${n.textParams.bold?"bold ":"normal "}${n.textParams.size}px ${n.textParams.font}`;l.font=M,l.fillStyle=n.textParams.color,l.textAlign=n.textParams.align||"center",l.textBaseline="middle";const y=n.textParams.text.split(`
`),v=n.textParams.size*1.25,S=-((y.length-1)*v)/2;y.forEach((T,L)=>{l.fillText(T,0,S+L*v)}),l.restore()})}n.buildHeartTexture(),n.texture?.dispose(),n.texture=new n.THREE.CanvasTexture(a),n.texture.colorSpace=n.THREE.SRGBColorSpace,n.texture.anisotropy=n.renderer.capabilities.getMaxAnisotropy(),n.product.type==="3d-decal"?(n.texture.needsUpdate=!0,n.product.applyDecals&&n.product.applyDecals(n.texture,s,a,n.heartTexture)):(n.product.topMaterial.map=n.texture,n.product.topMaterial.color.set(16777215),n.product.topMaterial.needsUpdate=!0),n.wrapPreview.material.map=n.texture,n.wrapPreview.material.needsUpdate=!0,n.wrapPreview.scale.set(3.1,3.1/n.product.printAspect,1),n.updateWrapPreviewWidget(a),n.updateClientGuide()}}function j5(n){}const $5=Object.freeze(Object.defineProperty({__proto__:null,initialize:j5,register:Y5},Symbol.toStringTag,{value:"Module"}));function K5(n){n.updatePrintableLabel=function(){const t=n.product.printable||n.productDefinitions[n.currentProductKey].printable;if(n.currentProductKey==="tshirt3D"){const i=document.querySelector("#tshirtOrientation").value==="landscape"?"paysage":"portrait";document.querySelector("#productDimensions").textContent="Zone devant et dos : A4 "+i+" ("+t.join(" × ")+" mm)"}Array.isArray(t)&&(document.querySelector("#wrapDimensions").textContent="Visuel déroulé ("+t.join(" × ")+" mm)")}}function Z5(n){document.querySelector("#imageInput").addEventListener("change",async e=>{const t=Array.from(e.target.files||[]);if(t.length){for(const i of t){const r=URL.createObjectURL(i);await new Promise(s=>{const o=new Image;o.onload=()=>{n.imagesList.push({id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,name:i.name,img:o,scale:1,scaleX:1,scaleY:1,x:0,y:0,rotation:0,fitMode:"cover",side:n.product.zones?n.product.zones[0].id:"both"}),s()},o.onerror=()=>{URL.revokeObjectURL(r),s()},o.src=r})}e.target.value="",n.activeImageIndex=n.imagesList.length-1,n.renderImagesList(),n.syncActiveControls(),n.buildTexture(),n.setOverlayVisible(document.querySelector("#showTransformFrame").checked),n.showToast(`${t.length} image(s) ajoutée(s)`)}}),document.querySelector("#productSelect").onchange=e=>{n.clientMode&&!e.detail?.initial&&(n.clientSelectedProduct=!0),n.currentProductKey=e.target.value,n.scene.remove(n.product.group),n.product.group.traverse(g=>g.geometry?.dispose());const t=n.productDefinitions[n.currentProductKey];n.product=t.create(),n.scene.add(n.product.group),document.querySelector("#productDimensions").textContent=Array.isArray(t.dimensions)?`${t.dimensions.join(" × ")} mm`:t.dimensions,document.querySelector("#productIcon").textContent=t.icon||(n.currentProductKey==="mousePad"?"▰":n.currentProductKey==="mug11oz"?"☕":"👕"),document.querySelector("#tshirtOrientationWrap").hidden=n.currentProductKey!=="tshirt3D",document.querySelector("#loadTshirtExample").hidden=n.currentProductKey!=="tshirt3D",n.currentProductKey==="tshirt3D"&&(document.querySelector("#tshirtOrientation").value="portrait"),n.updatePrintableLabel();const i={mug11oz:"13,00 €",mousePad:"10,00 €",keychainRect:"6,00 €",keychainRound:"6,00 €",keychainHeart:"6,00 €",tshirt3D:"17,00 € - 21,00 €",puzzle:"15,00 €",coaster:"8,00 €",coasterRound:"8,00 €",pencilCase:"11,00 €",cushion:"17,00 €",arcadeCabinet:"2090,00 €",eventWristband:"À définir"},r=document.querySelector("#productPrice");r&&(r.textContent=i[n.currentProductKey]||"-- €");const s=n.currentProductKey==="mug11oz",o=n.currentProductKey==="arcadeCabinet";document.querySelector("#handleColorWrap").hidden=!s,document.querySelector("#innerColorWrap").hidden=!s,document.querySelector("#quickPalette").hidden=!s;const a=document.querySelector("#arcadeControlsWrap");a&&(a.hidden=!o);const l=document.querySelector("#arcadeGlowWrap");l&&(l.hidden=!o),document.querySelector("#baseColor").value="#ffffff",document.querySelector("#topColor").value="#ffffff",s&&(document.querySelector("#handleColor").value="#ffffff",document.querySelector("#innerColor").value="#ffffff"),o&&(document.querySelector("#j1Color")&&(document.querySelector("#j1Color").value="#ff0000"),document.querySelector("#j2Color")&&(document.querySelector("#j2Color").value="#0055ff"),document.querySelector("#b1Color")&&(document.querySelector("#b1Color").value="#0055ff"),document.querySelector("#b2Color")&&(document.querySelector("#b2Color").value="#ff0000"),document.querySelector("#arcadeGlow")&&(document.querySelector("#arcadeGlow").checked=!1));const c=!!n.product.twoSided,u=!!n.product.zones,h=document.querySelector("#viewFaceA"),f=document.querySelector("#viewFaceB");h&&(h.style.display=c||u?"inline-block":"none"),f&&(f.style.display=c||u?"inline-block":"none"),h&&(h.innerHTML=u?'<span style="font-weight:900;margin-right:4px;">A</span> Face Avant':'<span style="font-weight:900;margin-right:4px;">A</span> Face A'),f&&(f.innerHTML=u?'<span style="font-weight:900;margin-right:4px;">B</span> Côtés':'<span style="font-weight:900;margin-right:4px;">B</span> Face B');const m=document.querySelector("#textSideSelect");m&&(m.style.display=c||u?"inline-block":"none",u?m.innerHTML='<option value="both">Toutes zones</option>'+n.product.zones.map(g=>`<option value="${g.id}">${g.label}</option>`).join(""):m.innerHTML='<option value="both">2 faces</option><option value="A">Face A</option><option value="B">Face B</option>'+(n.currentProductKey==="tshirt3D"?'<option value="heart">Cœur (petit)</option>':"")),n.floor.position.y=o?-.835:-.09,n.renderImagesList(),(n.imagesList.length>0||n.textParams.text.trim())&&n.buildTexture(),n.homeView(),n.setOverlayVisible(document.querySelector("#showTransformFrame").checked),n.updateWrapPreviewWidget(n.texture?.image),n.updateClientGuide()},document.querySelector("#tshirtOrientation").addEventListener("change",e=>{n.currentProductKey==="tshirt3D"&&(n.product.setPrintOrientation(e.target.value),n.updatePrintableLabel(),(n.imagesList.length||n.textParams.text.trim())&&n.buildTexture(),n.showToast("Zone A4 "+(e.target.value==="landscape"?"paysage":"portrait")+" appliquée aux deux faces"))}),document.querySelector("#showTransformFrame").addEventListener("change",e=>{n.setOverlayVisible(e.target.checked),e.target.checked&&n.updateOverlay(),n.showToast(e.target.checked?"Cadre de sélection activé":"Cadre de sélection masqué")}),document.querySelectorAll("[data-fit]").forEach(e=>e.onclick=()=>{const t=n.getActiveImage();t&&(t.fitMode=e.dataset.fit,document.querySelectorAll("[data-fit]").forEach(i=>i.classList.toggle("active",i===e)),n.resetActiveImage(!0))}),n.sliders={scale:["scaleValue",e=>`${e} %`,e=>e/100],posX:["posXValue",e=>`${e} %`,e=>e/100],posY:["posYValue",e=>`${e} %`,e=>e/100],rotation:["rotationValue",e=>`${e}°`,Number]},Object.entries(n.sliders).forEach(([e,[t,i,r]])=>document.querySelector(`#${e}`).addEventListener("input",s=>{const o=n.getActiveImage();if(o){if(e==="scale"){const a=r(s.target.value);o.scale=a,o.scaleX=a,o.scaleY=a}else o[e==="posX"?"x":e==="posY"?"y":e]=r(s.target.value);document.querySelector(`#${t}`).value=i(s.target.value),n.buildTexture()}}))}const J5=Object.freeze(Object.defineProperty({__proto__:null,initialize:Z5,register:K5},Symbol.toStringTag,{value:"Module"}));function Q5(n){n.resetActiveImage=function(t=!0){const i=n.getActiveImage();i&&(i.scale=1,i.scaleX=1,i.scaleY=1,i.x=0,i.y=0,i.rotation=0,n.syncActiveControls(),t&&n.buildTexture())}}function e3(n){document.querySelector("#resetImage").onclick=()=>n.resetActiveImage(!0),document.querySelector("#customText").addEventListener("input",e=>{n.textParams.text=e.target.value,n.buildTexture()}),document.querySelector("#textSideSelect")?.addEventListener("change",e=>{n.textParams.side=e.target.value,n.buildTexture()}),document.querySelector("#textColor").addEventListener("input",e=>{n.textParams.color=e.target.value,n.buildTexture()}),document.querySelector("#textFont").addEventListener("change",async e=>{if(n.textParams.font=e.target.value,document.fonts)try{await document.fonts.load(`${n.textParams.bold?"bold ":"normal "}${n.textParams.size}px ${n.textParams.font}`)}catch{}n.buildTexture()}),document.querySelector("#textSize").addEventListener("input",e=>{n.textParams.size=Number(e.target.value),document.querySelector("#textSizeValue").value=`${e.target.value} px`,n.buildTexture()}),document.querySelector("#textBold").addEventListener("change",e=>{n.textParams.bold=e.target.checked,n.buildTexture()}),document.querySelector("#textItalic").addEventListener("change",e=>{n.textParams.italic=e.target.checked,n.buildTexture()}),document.querySelectorAll(".align-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".align-btn").forEach(t=>t.classList.toggle("active",t===e)),n.textParams.align=e.dataset.align,n.buildTexture()})}),document.querySelector("#textPosX").addEventListener("input",e=>{n.textParams.x=Number(e.target.value)/100,document.querySelector("#textPosXValue").value=`${e.target.value} %`,n.buildTexture()}),document.querySelector("#textPosY").addEventListener("input",e=>{n.textParams.y=Number(e.target.value)/100,document.querySelector("#textPosYValue").value=`${e.target.value} %`,n.buildTexture()}),document.querySelector("#textRotation").addEventListener("input",e=>{n.textParams.rotation=Number(e.target.value),document.querySelector("#textRotationValue").value=`${e.target.value}°`,n.buildTexture()}),document.querySelector("#resetText").addEventListener("click",()=>{n.textParams.text="",n.textParams.color="#111820",n.textParams.font="Inter, sans-serif",n.textParams.size=60,n.textParams.bold=!1,n.textParams.italic=!1,n.textParams.align="center",n.textParams.x=0,n.textParams.y=0,n.textParams.rotation=0,document.querySelector("#customText").value="",document.querySelector("#textColor").value="#111820",document.querySelector("#textFont").value="Inter, sans-serif",document.querySelector("#textSize").value=60,document.querySelector("#textSizeValue").value="60 px",document.querySelector("#textBold").checked=!1,document.querySelector("#textItalic").checked=!1,document.querySelectorAll(".align-btn").forEach(e=>e.classList.toggle("active",e.dataset.align==="center")),document.querySelector("#textPosX").value=0,document.querySelector("#textPosXValue").value="0 %",document.querySelector("#textPosY").value=0,document.querySelector("#textPosYValue").value="0 %",document.querySelector("#textRotation").value=0,document.querySelector("#textRotationValue").value="0°",n.buildTexture(),n.updateWrapPreviewWidget(n.texture?.image)}),document.querySelectorAll(".collapsible-section .section-title-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.closest(".collapsible-section");if(!t)return;const i=t.classList.toggle("collapsed");e.setAttribute("aria-expanded",String(!i))})}),n.homeView=()=>{n.currentProductKey==="mug11oz"?(n.camera.position.set(.6,2.7,6.2),n.controls.target.set(0,.68,0)):n.currentProductKey==="mousePad"||n.currentProductKey==="puzzle"||n.currentProductKey==="coaster"?(n.camera.position.set(0,4.5,.001),n.controls.target.set(0,0,0)):n.currentProductKey==="eventWristband"?(n.camera.position.set(0,2.5,.001),n.controls.target.set(0,0,0)):n.currentProductKey==="keychainHeart"?(n.camera.position.set(0,.45,1.15),n.controls.target.set(0,.45,0)):n.currentProductKey==="keychainRound"?(n.camera.position.set(0,.32,.9),n.controls.target.set(0,.32,0)):n.currentProductKey==="keychainRect"?(n.camera.position.set(0,.29,.7),n.controls.target.set(0,.29,0)):n.currentProductKey.startsWith("tshirt")?(n.camera.position.set(0,.35,1.6),n.controls.target.set(0,.35,0)):n.currentProductKey==="arcadeCabinet"?(n.camera.position.set(.7,-.05,3.4),n.controls.target.set(0,-.05,0)):(n.camera.position.set(3.4,2.8,3.8),n.controls.target.set(0,-.04,0)),n.controls.update()},document.querySelector("#resetView")?.addEventListener("click",n.homeView),document.querySelector("#resetViewSide")?.addEventListener("click",n.homeView),document.querySelector("#viewFaceA")?.addEventListener("click",()=>{n.homeView(),n.currentProductKey==="arcadeCabinet"&&(n.camera.position.set(0,-.05,3.4),n.controls.update())}),document.querySelector("#viewFaceB")?.addEventListener("click",()=>{n.homeView(),n.currentProductKey==="mug11oz"?n.camera.position.set(-.8,2.5,-6.5):n.currentProductKey==="arcadeCabinet"?n.camera.position.set(3.4,-.05,0):n.camera.position.z=-Math.abs(n.camera.position.z),n.controls.update()}),document.querySelector("#zoomIn").onclick=()=>{n.camera.position.multiplyScalar(.84),n.controls.update()},document.querySelector("#zoomOut").onclick=()=>{n.camera.position.multiplyScalar(1.16),n.controls.update()},document.querySelector("#autoRotate").onchange=()=>{n.controls.autoRotate=!1,n.swingAngle=0,n.swingDirection=1},n.controls.autoRotateSpeed=1.25,document.querySelector("#topColor").oninput=e=>{n.product.topMaterial.color.set(e.target.value),n.product.topMaterial.needsUpdate=!0,n.buildTexture()},document.querySelector("#baseColor").oninput=e=>{n.product.baseMaterial.color.set(e.target.value),n.product.baseMaterial.needsUpdate=!0},document.querySelector("#handleColor").oninput=e=>{n.product.handleMaterial&&(n.product.handleMaterial.color.set(e.target.value),n.product.handleMaterial.needsUpdate=!0)},document.querySelector("#innerColor").oninput=e=>{n.product.innerMaterial&&(n.product.innerMaterial.color.set(e.target.value),n.product.innerMaterial.needsUpdate=!0)},["j1Color","j2Color","b1Color","b2Color"].forEach(e=>{const t=document.querySelector("#"+e);t&&t.addEventListener("change",i=>{let r=null;e==="j1Color"&&(r=n.product.joystick1Material),e==="j2Color"&&(r=n.product.joystick2Material),e==="b1Color"&&(r=n.product.button1Material),e==="b2Color"&&(r=n.product.button2Material),r&&(r.color.set(i.target.value),document.querySelector("#arcadeGlow").checked&&(r.emissive.set(i.target.value),r.emissiveIntensity=5),r.needsUpdate=!0)})})}const t3=Object.freeze(Object.defineProperty({__proto__:null,initialize:e3,register:Q5},Symbol.toStringTag,{value:"Module"}));function n3(n){n.applyExportPose=function(t,i){const r=document.querySelector("#rotationMode").value,s=document.querySelector("#reverse").checked?-1:1,o=i.clone().sub(n.controls.target),a=r==="swing"?Math.sin(t*Math.PI*2)*.8*s:t*Math.PI*2*s;o.applyAxisAngle(n.rotationAxes[r],a),n.camera.position.copy(n.controls.target).add(o),n.camera.lookAt(n.controls.target)},n.setViewAngle=function(t){const i=Math.hypot(n.camera.position.x-n.controls.target.x,n.camera.position.z-n.controls.target.z),r=n.THREE.MathUtils.degToRad(t);n.camera.position.x=n.controls.target.x+Math.cos(r)*i,n.camera.position.z=n.controls.target.z+Math.sin(r)*i,n.camera.lookAt(n.controls.target),n.controls.update(),document.querySelector("#viewAngle").value=t,document.querySelector("#angleValue").value=`${t}°`},n.setBackgroundImageFromUrl=function(t,i){const r=new Image;r.onload=()=>{n.bgImageObj=r;const s=document.getElementById("bgOpacityControl");s&&(s.hidden=!1),n.updateSceneBackground(),n.showToast(i||"Image de fond appliquée")},r.src=t},n.getSelectedResolution=function(){return Number(n.resSelectTop?.value||n.resSelectSide?.value||2)},n.updateExportStatus=function(t){const i=document.querySelector("#exportStatus"),r=document.querySelector("#exportStatusSide");i&&(i.textContent=t),r&&(r.textContent=t)},n.runExportPng=function(){const t=n.isOverlayVisible(),i=n.grid.visible,r=n.getSelectedResolution();n.setOverlayVisible(!1),n.grid.visible=!1,n.renderer.getPixelRatio();const s=new n.THREE.Vector2;n.renderer.getSize(s),n.renderer.setPixelRatio(Math.min(devicePixelRatio,2)*r),n.renderer.render(n.scene,n.camera);const o=document.createElement("a"),a=r===1?"standard":r===2?"hd-2x":"ultrahd-3x";o.download=`mockup-${n.currentProductKey}-${a}-${Date.now()}.png`,o.href=n.renderer.domElement.toDataURL("image/png"),document.body.append(o),o.click(),o.remove(),n.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),n.renderer.setSize(s.x,s.y,!1),n.renderer.render(n.scene,n.camera),n.setOverlayVisible(t),n.grid.visible=i,n.showToast(`Aperçu PNG ${a.toUpperCase()} téléchargé`)}}function i3(n){document.querySelector("#arcadeGlow")&&(document.querySelector("#arcadeGlow").onchange=e=>{const t=e.target.checked;[n.product.joystick1Material,n.product.joystick2Material,n.product.button1Material,n.product.button2Material].forEach(r=>{r&&(t?(r.emissive.copy(r.color),r.emissiveIntensity=5):r.emissive.setHex(0),r.needsUpdate=!0)})}),document.querySelectorAll(".quick-palette .swatch").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.color;document.querySelector("#handleColor").value=t,document.querySelector("#innerColor").value=t,n.product.handleMaterial&&(n.product.handleMaterial.color.set(t),n.product.handleMaterial.needsUpdate=!0),n.product.innerMaterial&&(n.product.innerMaterial.color.set(t),n.product.innerMaterial.needsUpdate=!0)})}),document.querySelector("#sceneColor").oninput=()=>n.updateSceneBackground(),document.querySelector("#showGrid").onchange=e=>n.grid.visible=e.target.checked,document.querySelector("#showShadow")?.addEventListener("change",e=>{n.floor.visible=e.target.checked,n.showToast(e.target.checked?"Ombre au sol activée":"Ombre au sol masquée")}),document.querySelector("#showWatermark")?.addEventListener("change",()=>{if(n.clientMode){n.watermarkControl.checked=!0;return}n.updateSceneBackground(),n.buildTexture(),n.showToast(document.querySelector("#showWatermark").checked?"Filigrane activé":"Filigrane retiré")}),document.querySelector("#speed").oninput=e=>{n.controls.autoRotateSpeed=Number(e.target.value)/9.6*(document.querySelector("#reverse").checked?-1:1),document.querySelector("#speedValue").value=`${(Number(e.target.value)/12).toFixed(1)}×`},document.querySelector("#reverse").onchange=e=>n.controls.autoRotateSpeed=Math.abs(n.controls.autoRotateSpeed)*(e.target.checked?-1:1),n.rotationAxes={horizontal:new n.THREE.Vector3(0,1,0),vertical:new n.THREE.Vector3(1,0,0),diagonal:new n.THREE.Vector3(1,1,0).normalize(),swing:new n.THREE.Vector3(0,1,0)},n.swingAngle=0,n.swingDirection=1,n.previousFrameTime=performance.now(),document.querySelectorAll("[data-angle]").forEach(e=>e.onclick=()=>n.setViewAngle(Number(e.dataset.angle))),document.querySelector("#bgPresetPodium")?.addEventListener("click",()=>{n.setBackgroundImageFromUrl("/background-podium.jpg","Studio podium coloré appliqué"),n.currentProductKey==="mug11oz"&&(n.camera.position.set(0,1.85,4.8),n.controls.target.set(0,.05,0),n.controls.update())}),document.querySelector("#bgPresetMug")?.addEventListener("click",()=>{n.setBackgroundImageFromUrl("/background-mug.jpg","Mise en scène cuisine moderne appliquée")}),document.querySelector("#bgPresetBureau")?.addEventListener("click",()=>{n.setBackgroundImageFromUrl("/background-bureau.jpg","Mise en scène bureau avec ordi appliquée"),n.currentProductKey==="mousePad"&&(n.camera.position.set(0,3.1,3.4),n.controls.target.set(0,-.05,.15),n.controls.update())}),document.querySelector("#bgPresetSalon")?.addEventListener("click",()=>{n.setBackgroundImageFromUrl("/background-salon.jpg","Simulation salon moderne appliquée")}),document.querySelector("#bgInput").onchange=e=>{const t=e.target.files[0];if(!t)return;const i=URL.createObjectURL(t);n.setBackgroundImageFromUrl(i,"Image de fond appliquée")},document.querySelector("#bgOpacity")&&(document.querySelector("#bgOpacity").oninput=e=>{document.querySelector("#bgOpacityValue").value=`${e.target.value} %`,n.updateSceneBackground()}),document.querySelector("#clearBg").onclick=()=>{n.bgImageObj=null,n.backgroundTexture?.dispose(),n.backgroundTexture=null;const e=document.getElementById("bgOpacityControl");e&&(e.hidden=!0),n.updateSceneBackground(),document.querySelector("#bgInput").value=""},n.resSelectTop=document.querySelector("#exportResolution"),n.resSelectSide=document.querySelector("#exportResolutionSide"),n.resSelectTop?.addEventListener("change",()=>{n.resSelectSide&&(n.resSelectSide.value=n.resSelectTop.value)}),n.resSelectSide?.addEventListener("change",()=>{n.resSelectTop&&(n.resSelectTop.value=n.resSelectSide.value)}),document.querySelector("#exportPng")?.addEventListener("click",n.runExportPng),document.querySelector("#exportPngSide")?.addEventListener("click",n.runExportPng)}const r3=Object.freeze(Object.defineProperty({__proto__:null,initialize:i3,register:n3},Symbol.toStringTag,{value:"Module"}));function s3(n){n.runExportMugViews=async function(){n.currentProductKey!=="mug11oz"&&(document.querySelector("#productSelect").value="mug11oz",document.querySelector("#productSelect").dispatchEvent(new Event("change")),await new Promise(u=>setTimeout(u,120)));const t=n.isOverlayVisible(),i=n.grid.visible,r=n.getSelectedResolution(),s=r===1?"standard":r===2?"hd-2x":"ultrahd-3x";n.setOverlayVisible(!1),n.grid.visible=!1,n.renderer.getPixelRatio();const o=new n.THREE.Vector2;n.renderer.getSize(o);const a=n.camera.position.clone(),l=n.controls.target.clone(),c=[{name:"vue1-90deg-anse-droite",degrees:90,label:"90°"},{name:"vue2-225deg-face",degrees:225,label:"225°"},{name:"vue3-270deg-anse-gauche",degrees:270,label:"270°"}];n.renderer.setPixelRatio(Math.min(devicePixelRatio,2)*r);for(let u=0;u<c.length;u++){const h=c[u];n.updateExportStatus(`Export vue ${u+1}/3 (${h.label})…`),n.setViewAngle(h.degrees),n.camera.lookAt(n.controls.target),n.renderer.render(n.scene,n.camera);const f=document.createElement("a");f.download=`mockup-mug-vue-${u+1}-${h.name}-${s}-${Date.now()}.png`,f.href=n.renderer.domElement.toDataURL("image/png"),document.body.append(f),f.click(),f.remove(),await new Promise(m=>setTimeout(m,350))}n.updateExportStatus("Prêt"),n.camera.position.copy(a),n.controls.target.copy(l),n.controls.update(),n.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),n.renderer.setSize(o.x,o.y,!1),n.renderer.render(n.scene,n.camera),n.setOverlayVisible(t),n.grid.visible=i,n.showToast(`3 vues Mug exportées (90°, 225°, 270°) - ${s.toUpperCase()}`)},n.runExportKeychainViews=async function(){const t=n.isOverlayVisible(),i=n.grid.visible,r=n.getSelectedResolution(),s=r===1?"standard":r===2?"hd-2x":"ultrahd-3x";n.setOverlayVisible(!1),n.grid.visible=!1;const o=new n.THREE.Vector2;n.renderer.getSize(o);const a=n.camera.position.clone(),l=n.controls.target.clone();n.renderer.setPixelRatio(Math.min(devicePixelRatio,2)*r);const c=[{name:"face-a",degrees:90,label:"Face A"},{name:"face-b",degrees:270,label:"Face B"}];for(let u=0;u<c.length;u++){const h=c[u];n.updateExportStatus(`Export vue ${u+1}/2 (${h.label})…`),n.setViewAngle(h.degrees),n.camera.lookAt(n.controls.target),n.renderer.render(n.scene,n.camera);const f=document.createElement("a");f.download=`mockup-${n.currentProductKey}-${h.name}-${s}-${Date.now()}.png`,f.href=n.renderer.domElement.toDataURL("image/png"),document.body.append(f),f.click(),f.remove(),await new Promise(m=>setTimeout(m,350))}n.updateExportStatus("Prêt"),n.camera.position.copy(a),n.controls.target.copy(l),n.controls.update(),n.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),n.renderer.setSize(o.x,o.y,!1),n.renderer.render(n.scene,n.camera),n.setOverlayVisible(t),n.grid.visible=i,n.showToast(`2 vues Porte-clés exportées (Face A, Face B) - ${s.toUpperCase()}`)},n.runExportAll=async function(){const t=document.querySelector("#exportAll");t&&(t.disabled=!0),document.querySelector("#exportStatus").textContent="Export complet...";try{n.currentProductKey==="mug11oz"?await n.runExportMugViews():n.currentProductKey.startsWith("keychain")?await n.runExportKeychainViews():n.runExportPng(),await n.exportMp4(),n.showToast("Tous les exports sont terminés !")}catch(i){console.error(i)}finally{t&&(t.disabled=!1),document.querySelector("#exportStatus").textContent="Prêt"}}}function o3(n){document.querySelector("#exportMugViews")?.addEventListener("click",n.runExportMugViews),document.querySelector("#exportMugViewsSide")?.addEventListener("click",n.runExportMugViews),document.querySelector("#exportMp4Side")?.addEventListener("click",()=>{document.querySelector("#exportMp4")?.click()}),document.querySelector("#exportMp4").onclick=n.exportMp4,document.querySelector("#exportAll")?.addEventListener("click",n.runExportAll)}const a3=Object.freeze(Object.defineProperty({__proto__:null,initialize:o3,register:s3},Symbol.toStringTag,{value:"Module"}));function l3(n){n.exportMp4=async function({download:t=!0}={}){const i=document.querySelector("#exportMp4"),r=document.querySelector("#exportMp4Side"),s=document.querySelector("#exportStatus"),o=i?.textContent||"Export MP4 (Rotation)",a=S=>{i&&(i.disabled=S),r&&(r.disabled=S)},l=S=>{i&&(i.textContent=S),r&&(r.textContent=S)};if(!window.VideoEncoder||!window.VideoFrame)return await n.exportMp4Compat(i,r,s,o,t);let c=n.renderer.domElement.width-n.renderer.domElement.width%2,u=n.renderer.domElement.height-n.renderer.domElement.height%2;(c<=0||u<=0)&&(c=1280,u=720);const h=[{codec:"avc1.4d002a",width:c,height:u,bitrate:6e6,framerate:30,avc:{format:"avc"}},{codec:"avc1.42001f",width:c,height:u,bitrate:5e6,framerate:30,avc:{format:"avc"}}];let f=null;for(const S of h)try{if((await VideoEncoder.isConfigSupported(S))?.supported){f=S;break}}catch{}if(!f)return await n.exportMp4Compat(i,r,s,o,t);const m=n.camera.position.clone(),g=new n.ArrayBufferTarget,_=new n.Muxer({target:g,video:{codec:"avc",width:c,height:u},fastStart:"in-memory",firstTimestampBehavior:"offset"});let p=null,d=null;try{d=new VideoEncoder({output:(S,T)=>_.addVideoChunk(S,T),error:S=>{p=S}}),d.configure(f)}catch(S){return console.warn("Initialisation VideoEncoder echouee, passage au mode compatibilite :",S),await n.exportMp4Compat(i,r,s,o,t)}const M=typeof n.isOverlayVisible=="function"?n.isOverlayVisible():!1,y=n.grid?n.grid.visible:!1,v=n.wrapPreview?n.wrapPreview.visible:!1;n.setOverlayVisible(!1),n.grid&&(n.grid.visible=!1),n.wrapPreview&&(n.wrapPreview.visible=!1),a(!0),n.controls.enabled=!1,n.controls.autoRotate=!1;const C=document.querySelector("#autoRotate");C&&(C.checked=!1);try{for(let T=0;T<180;T++){n.applyExportPose(T/180,m),n.renderer.render(n.scene,n.camera);const L=new VideoFrame(n.renderer.domElement,{timestamp:Math.round(T*1e6/30),duration:Math.round(1e6/30)});d.encode(L,{keyFrame:T%60===0}),L.close();const w=Math.round((T+1)/1.8);l(`Creation MP4… ${w} %`),s&&(s.textContent="Gardez cette fenetre ouverte"),await new Promise(E=>requestAnimationFrame(E))}if(await d.flush(),p)throw p;_.finalize();const S=new Blob([g.buffer],{type:"video/mp4"});if(t){const T=URL.createObjectURL(S),L=document.createElement("a");L.href=T,L.download=`animation-${n.currentProductKey}-${Date.now()}.mp4`,document.body.append(L),L.click(),L.remove(),setTimeout(()=>URL.revokeObjectURL(T),1e4),n.showToast("Animation MP4 enregistree")}return S}catch(S){if(console.error(S),n.showToast("Impossible de creer le MP4"),!t)throw S}finally{if(d)try{d.state!=="closed"&&d.close()}catch(S){console.warn("Erreur fermeture encoder :",S)}try{n.camera.position.copy(m),n.camera.lookAt(n.controls.target),n.controls.enabled=!0,n.controls.update(),n.setOverlayVisible(M),n.grid&&(n.grid.visible=y),n.wrapPreview&&(n.wrapPreview.visible=v),n.renderer.render(n.scene,n.camera)}catch(S){console.warn("Erreur restauration camera/scene :",S)}a(!1),l(o),s&&(s.textContent="PNG haute qualite ou MP4 de 6 secondes")}}}function c3(n){}const u3=Object.freeze(Object.defineProperty({__proto__:null,initialize:c3,register:l3},Symbol.toStringTag,{value:"Module"})),h3="modulepreload",d3=function(n){return"/"+n},hc={},dc=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};var o=c;document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");r=c(t.map(u=>{if(u=d3(u),u in hc)return;hc[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":h3,h||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),h)return new Promise((g,_)=>{m.addEventListener("load",g),m.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return r.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};function f3(n){n.exportMp4Compat=async function(t,i,r,s,o=!0){const a=M=>{t&&(t.disabled=M),i&&(i.disabled=M)},l=M=>{t&&(t.textContent=M),i&&(i.textContent=M)};if(!window.MediaRecorder||!n.renderer.domElement.captureStream){n.showToast("Export video indisponible dans ce navigateur"),a(!1);return}const c=n.camera.position.clone(),u=[],h=n.renderer.domElement.captureStream(30),f=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(M=>MediaRecorder.isTypeSupported(M));if(!f){n.showToast("Enregistrement video indisponible"),a(!1);return}let m=null;try{m=new MediaRecorder(h,{mimeType:f,videoBitsPerSecond:5e6})}catch{n.showToast("Erreur initialisation enregistreur"),a(!1);return}m.ondataavailable=M=>{M.data&&M.data.size&&u.push(M.data)};const g=typeof n.isOverlayVisible=="function"?n.isOverlayVisible():!1,_=n.grid?n.grid.visible:!1,p=n.wrapPreview?n.wrapPreview.visible:!1;n.setOverlayVisible(!1),n.grid&&(n.grid.visible=!1),n.wrapPreview&&(n.wrapPreview.visible=!1),a(!0),n.controls.enabled=!1,n.controls.autoRotate=!1;const d=document.querySelector("#autoRotate");d&&(d.checked=!1);try{m.start(250);const M=performance.now(),y=6e3;await new Promise(D=>{const F=z=>{const V=Math.min(1,(z-M)/y);n.applyExportPose(V,c),n.renderer.render(n.scene,n.camera),l(`Enregistrement… ${Math.round(V*100)} %`),r&&(r.textContent="Creation locale de la video"),V<1?requestAnimationFrame(F):D()};requestAnimationFrame(F)});const v=new Promise(D=>m.addEventListener("stop",D,{once:!0}));m.stop(),await v,h.getTracks().forEach(D=>D.stop()),l("Conversion en MP4…"),r&&(r.textContent="Premiere conversion : quelques secondes");const[{FFmpeg:C},{fetchFile:S}]=await Promise.all([dc(()=>import("./index-CUxsIblL.js"),[]),dc(()=>import("./index-607UPNXL.js"),[])]),T=new C;await T.load({coreURL:"/ffmpeg-core.js",wasmURL:"/ffmpeg-core.wasm"}),await T.writeFile("rotation.webm",await S(new Blob(u,{type:f})));const L=await T.exec(["-i","rotation.webm","-vf","scale=1280:-2","-r","30","-an","-c:v","libx264","-profile:v","baseline","-level","3.1","-pix_fmt","yuv420p","-movflags","+faststart","rotation.mp4"]);if(L!==0)throw new Error(`FFmpeg a retourne le code ${L}`);const w=await T.readFile("rotation.mp4");if(!w?.length)throw new Error("Le fichier MP4 est vide");const E=new Blob([w],{type:"video/mp4"});if(o){const D=URL.createObjectURL(E),F=document.createElement("a");F.href=D,F.download=`animation-${n.currentProductKey}-${Date.now()}.mp4`,document.body.append(F),F.click(),F.remove(),setTimeout(()=>URL.revokeObjectURL(D),1e4),n.showToast("Animation MP4 enregistree")}return T.terminate(),E}catch(M){if(console.error(M),n.showToast("La conversion MP4 a echoue"),!o)throw M}finally{try{m&&m.state!=="inactive"&&m.stop()}catch{}try{h.getTracks().forEach(M=>M.stop())}catch{}try{n.camera.position.copy(c),n.camera.lookAt(n.controls.target),n.controls.enabled=!0,n.controls.update(),n.setOverlayVisible(g),n.grid&&(n.grid.visible=_),n.wrapPreview&&(n.wrapPreview.visible=p),n.renderer.render(n.scene,n.camera)}catch{}a(!1),l(s),r&&(r.textContent="PNG haute qualite ou MP4 de 6 secondes")}},n.showToast=function(t){const i=document.querySelector("#toast");i.textContent=t,i.classList.add("show"),setTimeout(()=>i.classList.remove("show"),2400)}}function m3(n){}const p3=Object.freeze(Object.defineProperty({__proto__:null,initialize:m3,register:f3},Symbol.toStringTag,{value:"Module"}));function g3(n){n.imageLocalCorners=function(){const t=n.getActiveImage();if(!t||!t.img)return[];const i=t.img.width/t.img.height,r=n.currentProductKey.startsWith("tshirt"),s=n.currentProductKey.startsWith("keychain"),o=n.product.printAspect||1.2,a=n.product.meshWidth||(r?1.45:s?1.2:2.4),l=n.product.meshHeight||(r?1.85:s?1.2/o:2);let c,u;t.fitMode==="contain"==i>o?(c=a,u=c/i):(u=l,c=u*i);const h=t.scaleX??t.scale??1,f=t.scaleY??t.scale??1;c*=h,u*=f;const m=t.x*(a/2),g=t.y*(l/2),_=n.THREE.MathUtils.degToRad(t.rotation),p=Math.cos(_),d=Math.sin(_);return[[-c/2,-u/2],[c/2,-u/2],[c/2,u/2],[-c/2,u/2]].map(([M,y])=>[m+M*p-y*d,g+M*d+y*p])},n.projectPoint=function([t,i]){let r;const o=n.getActiveImage()?.side||"A";if(n.currentProductKey.startsWith("keychain")){const l={keychainHeart:.45,keychainRound:.32,keychainRect:.29}[n.currentProductKey]||.32,c=o==="B"?-.015:.015,u=o==="B"?-t:t;r=new n.THREE.Vector3(u,i+l,c).project(n.camera)}else if(n.currentProductKey.startsWith("tshirt")){const a=o==="B"?-.015:.015,l=o==="B"?-t:t;r=new n.THREE.Vector3(l,i+.35,a).project(n.camera)}else r=new n.THREE.Vector3(t,-.002,i).project(n.camera);return[(r.x*.5+.5)*n.viewer.clientWidth,(-r.y*.5+.5)*n.viewer.clientHeight]},n.updateOverlay=function(){const t=n.getActiveImage();if(!t||!n.isOverlayVisible()||n.product.type!=="flat")return;const i=t.side||"A";if(i==="A"&&n.camera.position.z<-.1||i==="B"&&n.camera.position.z>.1){n.box.setAttribute("points",""),n.handles.forEach(h=>{h.setAttribute("cx",-9999),h.setAttribute("cy",-9999)}),n.edgeHandles.forEach(h=>{h.setAttribute("cx",-9999),h.setAttribute("cy",-9999)}),n.rotateStem.setAttribute("x1",-9999),n.rotateStem.setAttribute("y1",-9999),n.rotateStem.setAttribute("x2",-9999),n.rotateStem.setAttribute("y2",-9999),n.rotateHandle.setAttribute("cx",-9999),n.rotateHandle.setAttribute("cy",-9999);return}const r=n.imageLocalCorners().map(n.projectPoint);if(!r.length)return;if(n.box.setAttribute("points",r.map(h=>h.join(",")).join(" ")),n.handles.forEach((h,f)=>{h.setAttribute("cx",r[f][0]),h.setAttribute("cy",r[f][1])}),n.edgeHandles.length>=4){const h=[(r[0][0]+r[1][0])/2,(r[0][1]+r[1][1])/2],f=[(r[1][0]+r[2][0])/2,(r[1][1]+r[2][1])/2],m=[(r[2][0]+r[3][0])/2,(r[2][1]+r[3][1])/2],g=[(r[3][0]+r[0][0])/2,(r[3][1]+r[0][1])/2],_=[h,f,m,g];n.edgeHandles.forEach((p,d)=>{p.setAttribute("cx",_[d][0]),p.setAttribute("cy",_[d][1])})}const s=[(r[0][0]+r[1][0])/2,(r[0][1]+r[1][1])/2],o=r.reduce((h,f)=>[h[0]+f[0]/4,h[1]+f[1]/4],[0,0]),a=s[0]-o[0],l=s[1]-o[1],c=Math.hypot(a,l)||1,u=[s[0]+a/c*28,s[1]+l/c*28];n.rotateStem.setAttribute("x1",s[0]),n.rotateStem.setAttribute("y1",s[1]),n.rotateStem.setAttribute("x2",u[0]),n.rotateStem.setAttribute("y2",u[1]),n.rotateHandle.setAttribute("cx",u[0]),n.rotateHandle.setAttribute("cy",u[1])},n.overlayCenter=function(){return n.imageLocalCorners().map(n.projectPoint).reduce((i,r)=>[i[0]+r[0]/4,i[1]+r[1]/4],[0,0])},n.pointInImage=function(t,i){const r=n.imageLocalCorners().map(n.projectPoint);if(!r.length)return!1;let s=!1;for(let o=0,a=r.length-1;o<r.length;a=o++){const[l,c]=r[o],[u,h]=r[a];c>i!=h>i&&t<(u-l)*(i-c)/(h-c)+l&&(s=!s)}return s}}function _3(n){n.directDrag=null,n.viewerPointer=null,n.raycaster=new n.THREE.Raycaster,n.mouseVec=new n.THREE.Vector2}const v3=Object.freeze(Object.defineProperty({__proto__:null,initialize:_3,register:g3},Symbol.toStringTag,{value:"Module"}));function x3(n){n.getIntersection=function(t){const i=n.renderer.domElement.getBoundingClientRect();n.mouseVec.x=(t.clientX-i.left)/i.width*2-1,n.mouseVec.y=-((t.clientY-i.top)/i.height)*2+1,n.raycaster.setFromCamera(n.mouseVec,n.camera);const r=[];n.product.printMesh&&r.push(n.product.printMesh),n.product.group.traverse(o=>{o.isMesh&&o.material===n.product.topMaterial&&r.push(o)});const s=n.raycaster.intersectObjects(r.length?r:n.product.group.children,!0);return s.length>0?s[0]:null}}function y3(n){n.renderer.domElement.addEventListener("pointerdown",e=>{n.viewerPointer={x:e.offsetX,y:e.offsetY};const t=n.getActiveImage();t&&n.currentProductKey==="mug11oz"&&n.getIntersection(e)&&(n.controls.enabled=!1,n.directDrag={type:"mug-drag",startX:e.clientX,startY:e.clientY,initialPosX:t.x,initialPosY:t.y},n.renderer.domElement.setPointerCapture(e.pointerId))}),n.renderer.domElement.addEventListener("pointermove",e=>{const t=n.getActiveImage();if(n.directDrag&&n.directDrag.type==="mug-drag"&&t){const i=(e.clientX-n.directDrag.startX)/n.viewer.clientWidth,r=(e.clientY-n.directDrag.startY)/n.viewer.clientHeight;t.x=Math.max(-1,Math.min(1,n.directDrag.initialPosX+i*2.2)),t.y=Math.max(-1,Math.min(1,n.directDrag.initialPosY-r*2.2)),n.syncActiveControls(),n.buildTexture()}}),n.renderer.domElement.addEventListener("pointerup",e=>{if(n.directDrag&&n.directDrag.type==="mug-drag"){try{n.renderer.domElement.releasePointerCapture(e.pointerId)}catch{}n.directDrag=null,n.controls.enabled=!0;return}const t=n.getActiveImage();if(!t||!n.viewerPointer)return;if(!(Math.hypot(e.offsetX-n.viewerPointer.x,e.offsetY-n.viewerPointer.y)>5)){if(n.product.type==="flat")document.querySelector("#showTransformFrame").checked&&n.setOverlayVisible(n.pointInImage(e.offsetX,e.offsetY));else if(n.currentProductKey==="mug11oz"){const r=n.getIntersection(e);r&&r.uv&&(t.x=Math.max(-1,Math.min(1,(r.uv.x-.5)*2)),t.y=Math.max(-1,Math.min(1,(r.uv.y-.5)*2)),n.syncActiveControls(),n.buildTexture(),n.showToast("Image positionnée"))}}n.viewerPointer=null}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(document.querySelector("#showTransformFrame").checked=!1,n.setOverlayVisible(!1))}),n.box.addEventListener("pointerdown",e=>{const t=n.getActiveImage();t&&(e.preventDefault(),n.directDrag={type:"move",x:e.clientX,y:e.clientY,startX:t.x,startY:t.y},n.overlay.setPointerCapture(e.pointerId),n.controls.enabled=!1)}),n.handles.forEach(e=>e.addEventListener("pointerdown",t=>{const i=n.getActiveImage();if(!i)return;t.preventDefault();const r=n.overlayCenter();n.directDrag={type:"corner-scale",corner:Number(e.dataset.corner),center:r,startDistance:Math.hypot(t.offsetX-r[0],t.offsetY-r[1])||1,startScaleX:i.scaleX??1,startScaleY:i.scaleY??1},n.overlay.setPointerCapture(t.pointerId),n.controls.enabled=!1})),n.edgeHandles.forEach(e=>e.addEventListener("pointerdown",t=>{const i=n.getActiveImage();if(!i)return;t.preventDefault();const r=n.overlayCenter(),s=Number(e.dataset.edge);n.directDrag={type:"edge-scale",edge:s,center:r,startDistance:Math.hypot(t.offsetX-r[0],t.offsetY-r[1])||1,startScaleX:i.scaleX??1,startScaleY:i.scaleY??1},n.overlay.setPointerCapture(t.pointerId),n.controls.enabled=!1})),n.rotateHandle.addEventListener("pointerdown",e=>{const t=n.getActiveImage();if(!t)return;e.preventDefault();const i=n.overlayCenter();n.directDrag={type:"rotate",center:i,startAngle:Math.atan2(e.offsetY-i[1],e.offsetX-i[0]),startRotation:t.rotation},n.overlay.setPointerCapture(e.pointerId),n.controls.enabled=!1}),n.overlay.addEventListener("pointermove",e=>{const t=n.getActiveImage();if(!n.directDrag||!t)return;const i=t.side||"A";if(n.directDrag.type==="move"){const r=(e.clientX-n.directDrag.x)/n.viewer.clientWidth*2.2,s=i==="B"?-r:r;t.x=Math.max(-1,Math.min(1,n.directDrag.startX+s)),t.y=Math.max(-1,Math.min(1,n.directDrag.startY-(e.clientY-n.directDrag.y)/n.viewer.clientHeight*2.2))}else if(n.directDrag.type==="corner-scale"){const s=Math.hypot(e.offsetX-n.directDrag.center[0],e.offsetY-n.directDrag.center[1])/n.directDrag.startDistance;t.scaleX=Math.max(.15,Math.min(3.5,n.directDrag.startScaleX*s)),t.scaleY=Math.max(.15,Math.min(3.5,n.directDrag.startScaleY*s)),t.scale=(t.scaleX+t.scaleY)/2}else if(n.directDrag.type==="edge-scale"){const s=Math.hypot(e.offsetX-n.directDrag.center[0],e.offsetY-n.directDrag.center[1])/n.directDrag.startDistance;n.directDrag.edge===0||n.directDrag.edge===2?t.scaleY=Math.max(.15,Math.min(3.5,n.directDrag.startScaleY*s)):t.scaleX=Math.max(.15,Math.min(3.5,n.directDrag.startScaleX*s)),t.scale=(t.scaleX+t.scaleY)/2}else if(n.directDrag.type==="rotate"){const r=Math.atan2(e.offsetY-n.directDrag.center[1],e.offsetX-n.directDrag.center[0]),s=n.THREE.MathUtils.radToDeg(r-n.directDrag.startAngle);t.rotation=n.directDrag.startRotation+(i==="B"?-s:s)}n.syncActiveControls(),n.buildTexture()}),n.overlay.addEventListener("pointerup",()=>{n.directDrag=null,n.controls.enabled=!0})}const S3=Object.freeze(Object.defineProperty({__proto__:null,initialize:y3,register:x3},Symbol.toStringTag,{value:"Module"}));function M3(n){n.resize=function(){const{clientWidth:t,clientHeight:i}=n.viewer;!t||!i||(n.renderer.setSize(t,i,!0),n.camera.aspect=t/i,n.camera.updateProjectionMatrix())},n.animate=function(t=performance.now()){requestAnimationFrame(n.animate);const i=Math.min(.05,(t-n.previousFrameTime)/1e3);if(n.previousFrameTime=t,document.querySelector("#autoRotate").checked&&n.controls.enabled){const r=document.querySelector("#rotationMode").value,s=document.querySelector("#reverse").checked?-1:1,o=Number(document.querySelector("#speed").value)/12*.55;let a=s;r==="swing"&&(n.swingAngle+=o*i*n.swingDirection,Math.abs(n.swingAngle)>.75&&(n.swingAngle=Math.sign(n.swingAngle)*.75,n.swingDirection*=-1),a*=n.swingDirection);const l=n.camera.position.clone().sub(n.controls.target).applyAxisAngle(n.rotationAxes[r],o*i*a);n.camera.position.copy(n.controls.target).add(l),n.camera.lookAt(n.controls.target)}n.controls.update(),n.renderer.render(n.scene,n.camera),n.updateOverlay()}}function b3(n){new ResizeObserver(n.resize).observe(n.viewer),n.resize(),n.homeView(),n.animate(),setTimeout(()=>document.querySelector("#productSelect").dispatchEvent(new CustomEvent("change",{detail:{initial:!0}})),100),n.workspace=document.querySelector(".workspace");for(const[e,t,i]of[["toggleLeftSidebar","left-collapsed","gauche"],["toggleRightSidebar","right-collapsed","droite"]]){const r=document.getElementById(e),s=()=>{const o=!n.workspace.classList.contains(t);r.setAttribute("aria-expanded",String(o)),r.setAttribute("aria-label",(o?"Masquer":"Afficher")+" le menu de "+i),r.title=r.getAttribute("aria-label")};r.addEventListener("click",()=>{n.workspace.classList.toggle(t),s(),requestAnimationFrame(n.resize),setTimeout(n.resize,320)}),s()}}const E3=Object.freeze(Object.defineProperty({__proto__:null,initialize:b3,register:M3},Symbol.toStringTag,{value:"Module"}));function w3(n){n.captureSubmissionPng=async function(){const t=new n.THREE.Vector2;n.renderer.getSize(t);const i=n.renderer.getPixelRatio(),r=n.isOverlayVisible(),s=n.grid.visible,o=n.wrapPreview.visible;try{return n.setOverlayVisible(!1),n.grid.visible=!1,n.wrapPreview.visible=!1,n.renderer.setPixelRatio(Math.min(devicePixelRatio,2)*2),n.renderer.render(n.scene,n.camera),n.renderer.domElement.toDataURL("image/png")}finally{n.renderer.setPixelRatio(i),n.renderer.setSize(t.x,t.y,!1),n.grid.visible=s,n.wrapPreview.visible=o,n.setOverlayVisible(r),n.renderer.render(n.scene,n.camera)}},n.blobToDataUrl=function(t){return new Promise((i,r)=>{const s=new FileReader;s.onload=()=>i(s.result),s.onerror=()=>r(s.error),s.readAsDataURL(t)})},n.submissionWrapDataUrl=function(){const t=n.texture?.image;if(!t?.toDataURL)throw new Error("Ajoutez une image ou un texte avant l’envoi.");return t.toDataURL("image/png")}}function T3(n){document.querySelector("#submitCreation")?.addEventListener("click",async()=>{if(!n.clientMode||n.submissionInProgress)return;n.submissionInProgress=!0;const e=document.querySelector("#submitCreation"),t=e.textContent;e.disabled=!0;let i=!1;try{if(!n.texture)throw new Error("Ajoutez une image ou un texte avant l’envoi.");if(!(await(await fetch("/api/submissions/status")).json()).configured)throw new Error("Envoi mail non configuré. Contactez Graph2Print.");i=!0,document.querySelector(".workspace").inert=!0,document.querySelector("#submissionMask").hidden=!1,n.suppressClientWatermarkForOwnerExport=!0,n.buildTexture(),n.updateSceneBackground(),e.textContent="Préparation des fichiers…";const o=n.currentProductKey,a=[],l=(p,d)=>a.push({name:p,type:"image/png",data:d}),c=n.product.printable||n.productDefinitions[o].printable||[210,95];if(l("wrap-"+o+"-"+c.join("x")+"mm.png",n.submissionWrapDataUrl()),n.heartTexture?.image&&l("coeur-tshirt.png",n.heartTexture.image.toDataURL("image/png")),o==="tshirt3D"){const p=n.texture.image;for(const[d,M]of["a","b"].entries()){const y=document.createElement("canvas");y.width=p.width/2,y.height=p.height,y.getContext("2d").drawImage(p,d*y.width,0,y.width,y.height,0,0,y.width,y.height),l("wrap-tshirt-face-"+M+"-"+c.join("x")+"mm.png",y.toDataURL("image/png"))}}const u=n.camera.position.clone(),h=n.controls.target.clone(),f=document.querySelector("#viewAngle").value;try{l("mockup-"+o+"-apercu.png",await n.captureSubmissionPng());const p=o==="mug11oz"?[{name:"90deg",angle:90},{name:"225deg",angle:225},{name:"270deg",angle:270}]:o.startsWith("keychain")||o==="tshirt3D"?[{name:"face-a",angle:90},{name:"face-b",angle:270}]:[];for(const d of p)n.setViewAngle(d.angle),l("mockup-"+o+"-"+d.name+".png",await n.captureSubmissionPng())}finally{n.camera.position.copy(u),n.controls.target.copy(h),n.controls.update(),document.querySelector("#viewAngle").value=f,n.renderer.render(n.scene,n.camera)}e.textContent="Création de la vidéo…";let m=!1;try{const p=await n.exportMp4({download:!1});p?.size?a.push({name:"animation-"+o+".mp4",type:"video/mp4",data:await n.blobToDataUrl(p)}):m=!0}catch(p){console.warn("MP4 unavailable:",p),m=!0}e.textContent="Envoi en cours…";const g=await fetch("/api/submissions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({product:n.productDefinitions[o].name,files:a})}),_=await g.json();if(!g.ok||!_.ok)throw new Error(_.error||"L'envoi a échoué.");n.showToast(m?"Création envoyée, vidéo indisponible":"Création et exports envoyés")}catch(r){console.error(r),n.showToast(r.message||"L'envoi a échoué.")}finally{i&&(n.suppressClientWatermarkForOwnerExport=!1,n.buildTexture(),n.updateSceneBackground(),document.querySelector("#submissionMask").hidden=!0),n.submissionInProgress=!1,document.querySelector(".workspace").inert=!1,e.textContent=t,n.updateClientGuide()}})}const A3=Object.freeze(Object.defineProperty({__proto__:null,initialize:T3,register:w3},Symbol.toStringTag,{value:"Module"}));function C3(n){n.updateClientGuide=function(){if(!n.clientMode)return;const t=n.imagesList.length>0||!!n.textParams.text.trim(),i=n.clientSelectedProduct?t?n.clientDesignConfirmed?4:3:2:1;document.body.dataset.clientStep=String(i);const r=["","Étape 1 · Choisir un produit","Étape 2 · Ajouter un visuel","Étape 3 · Ajuster le rendu","Étape 4 · Envoyer la création"],s=["","Choisissez un produit dans la liste, puis confirmez votre choix.","Importez une image PNG ou JPG, ou ajoutez du texte.","Vérifiez les faces, la position et les couleurs. Confirmez quand le rendu vous convient.","Les fichiers PNG et la vidéo seront préparés puis envoyés à Graph2Print."];document.querySelector("#clientGuideTitle").textContent=r[i],document.querySelector("#clientGuideText").textContent=s[i],document.querySelectorAll("[data-guide-step]").forEach(a=>{const l=Number(a.dataset.guideStep);a.classList.toggle("active",l===i),a.classList.toggle("done",l<i)});const o=document.querySelector("#clientGuideAction");o.hidden=i===2,o.textContent=i===1?"Choisir ce produit":i===3?"Mon visuel est prêt":"Envoyer ma création",document.querySelector("#submitCreation").disabled=i!==4||n.submissionInProgress}}function R3(n){document.querySelector("#clientGuideAction").addEventListener("click",()=>{const e=Number(document.body.dataset.clientStep);e===1&&(n.clientSelectedProduct=!0),e===3&&(n.clientDesignConfirmed=!0),e===4&&document.querySelector("#submitCreation").click(),n.updateClientGuide()}),n.updateClientGuide(),document.querySelector("#loadTshirtExample").addEventListener("click",async()=>{if(n.currentProductKey!=="tshirt3D")return;const e=new Image;e.src="/logo-graph2print.png",await e.decode();for(const t of["A","B","heart"])n.imagesList.push({id:"example-"+t+"-"+Date.now(),name:"Exemple Graph2Print · "+t,img:e,scale:1,scaleX:1,scaleY:1,x:0,y:0,rotation:0,fitMode:"contain",side:t});n.activeImageIndex=n.imagesList.length-1,n.renderImagesList(),n.syncActiveControls(),n.buildTexture(),n.showToast("Exemples ajoutés : devant, dos et cœur")}),document.querySelectorAll("[data-close-panel]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.closePanel;document.querySelector(".workspace").classList.add(t+"-collapsed"),document.querySelector(t==="left"?"#toggleLeftSidebar":"#toggleRightSidebar").setAttribute("aria-expanded","false")})})}const P3=Object.freeze(Object.defineProperty({__proto__:null,initialize:R3,register:C3},Symbol.toStringTag,{value:"Module"})),xu={...U5},yu=[F5,k5,G5,q5,$5,J5,t3,r3,a3,u3,p3,v3,S3,E3,A3,P3];for(const n of yu)n.register(xu);for(const n of yu)n.initialize(xu);
