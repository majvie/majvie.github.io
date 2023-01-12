import{S as N,i as U,s as Y,k as _,l as v,m as $,h,n as m,b as A,f as x,g as Z,d as F,t as R,Z as J,q as B,a as b,w as M,r as C,c as k,x as O,C as d,y as G,u as P,z as W,B as Q}from"../../../chunks/index-e1a266ff.js";import{S as X}from"../../../chunks/Seo-123bff72.js";import{A as ee}from"../../../chunks/arrow-up-right-7d8cd01c.js";import{f as K}from"../../../chunks/utils-7d7f714d.js";function L(o,e,l){const a=o.slice();return a[1]=e[l],a}function z(o){let e,l,a,t=o[1].title+"",p,r,n,s,i,c=K("%B %-d, %Y",o[1].date)+"",w,S,y,D=o[1].summary+"",T,j,E,g;return n=new ee({props:{size:18,class:"inline text-neutral-400"}}),{c(){e=_("a"),l=_("div"),a=_("div"),p=B(t),r=b(),M(n.$$.fragment),s=b(),i=_("div"),w=B(c),S=b(),y=_("div"),T=B(D),j=b(),this.h()},l(f){e=v(f,"A",{href:!0,class:!0,target:!0,rel:!0});var u=$(e);l=v(u,"DIV",{class:!0});var I=$(l);a=v(I,"DIV",{class:!0});var V=$(a);p=C(V,t),r=k(V),O(n.$$.fragment,V),V.forEach(h),s=k(I),i=v(I,"DIV",{class:!0});var q=$(i);w=C(q,c),q.forEach(h),I.forEach(h),S=k(u),y=v(u,"DIV",{class:!0});var H=$(y);T=C(H,D),H.forEach(h),j=k(u),u.forEach(h),this.h()},h(){m(a,"class","text-lg text-black"),m(i,"class","sm:ml-auto mb-0.5 text-neutral-500"),m(l,"class","flex flex-col sm:flex-row sm:items-end mb-1.5"),m(y,"class","text-lg leading-snug font-serif italic"),m(e,"href",E=o[1].link),m(e,"class","block -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors"),m(e,"target","_blank"),m(e,"rel","noreferrer")},m(f,u){A(f,e,u),d(e,l),d(l,a),d(a,p),d(a,r),G(n,a,null),d(l,s),d(l,i),d(i,w),d(e,S),d(e,y),d(y,T),d(e,j),g=!0},p(f,u){(!g||u&1)&&t!==(t=f[1].title+"")&&P(p,t),(!g||u&1)&&c!==(c=K("%B %-d, %Y",f[1].date)+"")&&P(w,c),(!g||u&1)&&D!==(D=f[1].summary+"")&&P(T,D),(!g||u&1&&E!==(E=f[1].link))&&m(e,"href",E)},i(f){g||(x(n.$$.fragment,f),g=!0)},o(f){R(n.$$.fragment,f),g=!1},d(f){f&&h(e),W(n)}}}function te(o){let e,l,a=o[0],t=[];for(let r=0;r<a.length;r+=1)t[r]=z(L(o,a,r));const p=r=>R(t[r],1,1,()=>{t[r]=null});return{c(){e=_("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=v(r,"DIV",{class:!0});var n=$(e);for(let s=0;s<t.length;s+=1)t[s].l(n);n.forEach(h),this.h()},h(){m(e,"class","grid gap-y-4")},m(r,n){A(r,e,n);for(let s=0;s<t.length;s+=1)t[s].m(e,null);l=!0},p(r,[n]){if(n&1){a=r[0];let s;for(s=0;s<a.length;s+=1){const i=L(r,a,s);t[s]?(t[s].p(i,n),x(t[s],1)):(t[s]=z(i),t[s].c(),x(t[s],1),t[s].m(e,null))}for(Z(),s=a.length;s<t.length;s+=1)p(s);F()}},i(r){if(!l){for(let n=0;n<a.length;n+=1)x(t[n]);l=!0}},o(r){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)R(t[n]);l=!1},d(r){r&&h(e),J(t,r)}}}function ae(o,e,l){let{data:a}=e;return o.$$set=t=>{"data"in t&&l(0,a=t.data)},[a]}class se extends N{constructor(e){super(),U(this,e,ae,te,Y,{data:0})}}var re={papers:[{title:"Trajectory Prediction for Telescope Based UAV Tracking",date:new Date(16566336e5),summary:`Bachelor thesis comparing the use of Kalman and Particle filters for object tracking, improving the performance in cases of object occlusion and jumping trackers.
`,link:"/assets/pdf/Vieweg_TrajectoryPrediction.pdf"},{title:"Oceanography Report",date:new Date(16732224e5),summary:`Report from the class 'Oceanography', describing the cast of CTD's and the comparison between simulated drifter advection and data recorded with Ifremer. 
`,link:"/assets/pdf/Vieweg_Oceanography_Trip_Report.pdf"},{title:"Transmission Box Report (GER)",date:new Date(16304544e5),summary:`Report from the class 'Machine Design - Project', describing calculations for a transmission box, using DIN and ISO norms
`,link:"/assets/pdf/e11806443_Berechnung.pdf"},{title:"Modelling of a Hexabot Leg in MATLAB",date:new Date(16645824e5),summary:`Report from the class 'Kinematics and Geometric Modelling', describing reverse kinematics modelling for a hexabot leg
`,link:"/assets/pdf/lab_kinematic_chains.pdf"},{title:"The Cultural Revolution in China (GER)",date:new Date(14859072e5),summary:`High school thesis on the Chinese Cultural Revolution, including an interview held and translated by myself
`,link:"/assets/pdf/Vieweg_DieKulturrevolutionInChina.pdf"}],notes:[{title:"Stat 211: Statistical Inference",date:new Date(16383168e5),summary:`Graduate-level class discussing inference on statistical models, frequentist and Bayesian perspectives.
`,link:"/assets/pdf/Vieweg_TrajectoryPrediction.pdf"}]};function ne(o){let e,l,a,t,p,r,n,s;return e=new X({props:{title:"Maximilian Vieweg – Writing",description:"Past writing: academic papers, presentations, notes, tutorials, and technical blog posts."}}),n=new se({props:{data:re.papers}}),{c(){M(e.$$.fragment),l=b(),a=_("section"),t=_("h2"),p=B("Academic Writing and Reports"),r=b(),M(n.$$.fragment),this.h()},l(i){O(e.$$.fragment,i),l=k(i),a=v(i,"SECTION",{class:!0});var c=$(a);t=v(c,"H2",{class:!0});var w=$(t);p=C(w,"Academic Writing and Reports"),w.forEach(h),r=k(c),O(n.$$.fragment,c),c.forEach(h),this.h()},h(){m(t,"class","heading2"),m(a,"class","layout-md py-12")},m(i,c){G(e,i,c),A(i,l,c),A(i,a,c),d(a,t),d(t,p),d(a,r),G(n,a,null),s=!0},p:Q,i(i){s||(x(e.$$.fragment,i),x(n.$$.fragment,i),s=!0)},o(i){R(e.$$.fragment,i),R(n.$$.fragment,i),s=!1},d(i){W(e,i),i&&h(l),i&&h(a),W(n)}}}class fe extends N{constructor(e){super(),U(this,e,null,ne,Y,{})}}export{fe as default};