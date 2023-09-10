(()=>{"use strict";const e={projects:[],currentPurpose:null};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function o(e){r(1,arguments);var o=Object.prototype.toString.call(e);return e instanceof Date||"object"===t(e)&&"[object Date]"===o?new Date(e.getTime()):"number"==typeof e||"[object Number]"===o?new Date(e):("string"!=typeof e&&"[object String]"!==o||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function n(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function i(e){r(1,arguments);var t=o(e);return t.setHours(0,0,0,0),t}function l(e,t){var r=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return r<0?-1:r>0?1:r}Math.pow(10,8);var s=36e5;var c={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},a=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,u=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,p=/^([+-])(\d{2})(?::?(\d{2}))?$/;function d(e){return e?parseInt(e):1}function g(e){return e&&parseFloat(e.replace(",","."))||0}var m=[31,null,31,30,31,30,31,31,30,31,30,31];function f(e){return e%400==0||e%4==0&&e%100!=0}let y=function(e){let t=document.querySelector(".main_side");const y=document.querySelector(".to-do-line-closed").cloneNode(!0);y.style.display="block",t.appendChild(y),y.querySelector("#title_text").textContent=e.title,y.querySelector(".deadline").textContent=e.deadline;let h=y.querySelector(".days_till_deadline");const v=function(e,t){r(2,arguments);var s=o(e),c=o(t),a=l(s,c),u=Math.abs(function(e,t){r(2,arguments);var o=i(e),l=i(t),s=o.getTime()-n(o),c=l.getTime()-n(l);return Math.round((s-c)/864e5)}(s,c));s.setDate(s.getDate()-a*u);var p=a*(u-Number(l(s,c)===-a));return 0===p?0:p}(function(e,t){var o;r(1,arguments);var n=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}(null!==(o=null==t?void 0:t.additionalDigits)&&void 0!==o?o:2);if(2!==n&&1!==n&&0!==n)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var i,l=function(e){var t,r={},o=e.split(c.dateTimeDelimiter);if(o.length>2)return r;if(/:/.test(o[0])?t=o[0]:(r.date=o[0],t=o[1],c.timeZoneDelimiter.test(r.date)&&(r.date=e.split(c.timeZoneDelimiter)[0],t=e.substr(r.date.length,e.length))),t){var n=c.timezone.exec(t);n?(r.time=t.replace(n[1],""),r.timezone=n[1]):r.time=t}return r}(e);if(l.date){var y=function(e,t){var r=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),o=e.match(r);if(!o)return{year:NaN,restDateString:""};var n=o[1]?parseInt(o[1]):null,i=o[2]?parseInt(o[2]):null;return{year:null===i?n:100*i,restDateString:e.slice((o[1]||o[2]).length)}}(l.date,n);i=function(e,t){if(null===t)return new Date(NaN);var r=e.match(a);if(!r)return new Date(NaN);var o=!!r[4],n=d(r[1]),i=d(r[2])-1,l=d(r[3]),s=d(r[4]),c=d(r[5])-1;if(o)return function(e,t,r){return t>=1&&t<=53&&r>=0&&r<=6}(0,s,c)?function(e,t,r){var o=new Date(0);o.setUTCFullYear(e,0,4);var n=7*(t-1)+r+1-(o.getUTCDay()||7);return o.setUTCDate(o.getUTCDate()+n),o}(t,s,c):new Date(NaN);var u=new Date(0);return function(e,t,r){return t>=0&&t<=11&&r>=1&&r<=(m[t]||(f(e)?29:28))}(t,i,l)&&function(e,t){return t>=1&&t<=(f(e)?366:365)}(t,n)?(u.setUTCFullYear(t,i,Math.max(n,l)),u):new Date(NaN)}(y.restDateString,y.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);var h,v=i.getTime(),S=0;if(l.time&&(S=function(e){var t=e.match(u);if(!t)return NaN;var r=g(t[1]),o=g(t[2]),n=g(t[3]);return function(e,t,r){return 24===e?0===t&&0===r:r>=0&&r<60&&t>=0&&t<60&&e>=0&&e<25}(r,o,n)?r*s+6e4*o+1e3*n:NaN}(l.time),isNaN(S)))return new Date(NaN);if(!l.timezone){var D=new Date(v+S),j=new Date(0);return j.setFullYear(D.getUTCFullYear(),D.getUTCMonth(),D.getUTCDate()),j.setHours(D.getUTCHours(),D.getUTCMinutes(),D.getUTCSeconds(),D.getUTCMilliseconds()),j}return h=function(e){if("Z"===e)return 0;var t=e.match(p);if(!t)return 0;var r="+"===t[1]?-1:1,o=parseInt(t[2]),n=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,n)?r*(o*s+6e4*n):NaN}(l.timezone),isNaN(h)?new Date(NaN):new Date(v+S+h)}(e.deadline),new Date);h.textContent=v,h.style.color="red";let S=y.querySelector(".toggle"),D=!1;S.addEventListener("click",(function(){!1===D?(j.style.display="block",w.setAttribute("src","pics/toggle_on.svg"),D=!0):(x(),D=!1)}));let j=document.createElement("div");j.className="description_and_priority_part",y.appendChild(j);let b=document.createElement("div");b.className="description_side",j.appendChild(b);let N=document.createElement("p");N.textContent="Description:",b.appendChild(N);let E=document.createElement("p");E.textContent=e.details,b.appendChild(E);let C=document.createElement("div");C.className="priority_side",j.appendChild(C);let O=document.createElement("p");O.textContent="Priority:",C.appendChild(O);let q=document.createElement("p");q.textContent=e.priority,C.appendChild(q);let w=S.querySelector("#toggleImg");function x(){j.style.display="none",w.setAttribute("src","pics/toggle_off.svg")}return x(),y};if(!localStorage.getItem("projects")){var h=JSON.stringify([{name:"Default Project",isActive:"true",purposes:[]}]);localStorage.setItem("projects",h)}const v=function(e,t){const r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(const o of r)if("isActive"!==o&&"purposes"!==o&&"DOM"!==o&&"isDone"!==o&&"object"==typeof e[o]&&"object"==typeof t[o]){if(!deepEqual(e[o],t[o]))return!1}else if("isActive"!==o&&"purposes"!==o&&"DOM"!==o&&"isDone"!==o&&e[o]!==t[o])return!1;return!0};!function(){document.querySelector(".addProjectBtn").addEventListener("click",(function(){r.showForm()}));let t=document.getElementById("projectForm");t.addEventListener("submit",(e=>{e.preventDefault(),r.submitForm(t)})),document.querySelector(".closeProjectBtn").addEventListener("click",(function(){r.hideForm()}));let r={formWrapper:document.querySelector(".pop-up_project_window"),showForm(){this.formWrapper.style.display="flex"},hideForm(){this.formWrapper.style.display="none"},submitForm(e){let t=this.serializeForm(e);this.hideForm(),i.createProject(t)},serializeForm(e){const{elements:t}=e;return Array.from(t).filter((e=>!!e.name)).map((function(e){const{name:t,value:r}=e;return{name:t,value:r}}))}};class o{constructor(t){this.name=t,this.isActive=!1,this.purposes=[],e.projects.push(this);var r=localStorage.getItem("projects"),o=JSON.parse(r),n=this,i=!0;o.forEach((function(e){v(e,n)&&(i=!1)})),i&&o.push(this);var l=JSON.stringify(o);localStorage.setItem("projects",l)}}let n={deletePurpose(t){let r=document.querySelector(".main_side");t.DOM.querySelector(".trash").addEventListener("click",(function(){r.removeChild(t.DOM);for(let r=0;r<e.projects.length;r++)if(1==e.projects[r].isActive){let i=e.projects[r].purposes.indexOf(t);if(-1!==i){e.projects[r].purposes.splice(i,1);var o=localStorage.getItem("projects"),n=JSON.parse(o);n.forEach((function(o){v(o,e.projects[r])&&(o.purposes.forEach((function(e){v(e,t)&&o.purposes.splice(i,1)})),localStorage.setItem("projects",JSON.stringify(n)))}))}}}))},changePurpose(t){t.DOM.querySelector(".change").addEventListener("click",(function(){let r=document.querySelector(".pop-up_purpose_window");r.style.display="flex";let o=r.querySelector(".title"),n=r.querySelector("#submit_btn"),i=r.querySelectorAll(".input");o.textContent="Change Form",n.textContent="Change",i.forEach((function(e){switch(e.id){case"title":e.value=t.title;break;case"deadline":e.value=t.deadline;break;case"details":e.value=t.details;break;case"priority":e.value=t.priority}})),e.currentPurpose=t}))}},i={createProject(e){let t=new o(e[0].value),r=l(t);r.querySelector(".trash").addEventListener("click",(function(){i.deleteProject(t,r)}))},deleteProject(t,r){for(let r=0;r<e.projects.length;r++)if(e.projects[r]==t){e.projects.splice(r,1);var o=localStorage.getItem("projects"),n=JSON.parse(o);n.forEach((function(e){if(v(t,e)){let t=n.indexOf(e);n.splice(t,1),localStorage.setItem("projects",JSON.stringify(n))}}))}document.querySelector(".projects_list").removeChild(r),projectName.textContent="deleted project";let i=document.querySelector(".main_side");i.querySelectorAll(".to-do-line").forEach((e=>{"block"===e.style.display&&i.removeChild(e)}))},creationOfStorageProjects(){var t=localStorage.getItem("projects"),r=JSON.parse(t);r.forEach((function(t){i.createProject([{value:t.name}]);let o=document.querySelector(".project_list"),l=o.querySelector(".toggle"),c={};e.projects.forEach((function(e){v(e,t)&&(c=e)})),t.purposes.forEach((function(e){c.purposes.push(e),e.DOM=y(e),n.deletePurpose(e),n.changePurpose(e);let t=e.DOM.querySelector("#todo-checkbox"),o=e.DOM.querySelector("#title_text");r.forEach((function(r){r.purposes.forEach((function(r){v(r,e)&&(!0===r.isDone?(o.style.color="grey",o.style.textDecoration="line-through",t.checked=!0):(o.style.color="black",o.style.textDecoration="none"))}))})),t.addEventListener("click",(function(){r.forEach((function(t){t.purposes.forEach((function(t){v(t,e)&&(!1===t.isDone?(o.style.color="grey",o.style.textDecoration="line-through",e.isDone=!0,t.isDone=!0):(e.isDone=!1,o.style.color="black",o.style.textDecoration="none",t.isDone=!1))}))}));var t=JSON.stringify(r);localStorage.setItem("projects",t)}))})),s.openToggle(l,o,t)}))},alwaysOpenFirstProject(){let t=e.projects[0],r=document.querySelector(".project_list"),o=r.querySelector(".toggle");s.openToggle(o,r,t);let n=document.querySelector(".toggle");n.click(),n.click()}},l=function(t){let r=document.querySelector(".projects_list"),o=document.createElement("div");o.classList.add("project_list"),r.appendChild(o);let n=document.createElement("button");n.classList.add("toggle"),o.appendChild(n);let i=document.createElement("img");i.classList.add("toggle_img"),i.setAttribute("src","pics/toggle_off.svg"),n.addEventListener("click",(function(){if(!1===s.isToggleOpen&&!1===t.isActive)s.openToggle(i,o,t);else if(!0===s.isToggleOpen&&!0===t.isActive)s.closeToggle(i,o,t);else if(!0===s.isToggleOpen&&!1===t.isActive)for(let n=0;n<e.projects.length;n++){if(!0===e.projects[n].isActive){e.projects[n].isActive=!1;let t=r.querySelectorAll(".project_list"),o=r.querySelectorAll(".toggle_img");t.forEach((e=>{e.style.background="rgba(172, 196, 204, 1)",e.style.border="none"})),o.forEach((e=>{e.setAttribute("src","pics/toggle_off.svg")}))}s.openToggle(i,o,t)}})),n.appendChild(i);let l=document.createElement("p");l.textContent=t.name,o.appendChild(l);let c=document.createElement("button");c.classList.add("trash"),o.appendChild(c);let a=document.createElement("img");return a.setAttribute("src","pics/trash.svg"),c.appendChild(a),o},s={isToggleOpen:!1,openToggle(e,t,r){this.isToggleOpen=!0,e.setAttribute("src","pics/toggle_on.svg"),t.style.background="#B49463",t.style.border="1px solid black",c.setProjectName(r.name),r.isActive=!0,c.purposeDisplaying(r)},closeToggle(e,t,r){this.isToggleOpen=!1,e.setAttribute("src","pics/toggle_off.svg"),t.style.background="rgba(172, 196, 204, 1)",t.style.border="none",r.isActive=!1}},c={projectName:document.getElementById("projectName"),mainSide:document.querySelector(".main_side"),purposeDisplaying(e){this.mainSide.querySelectorAll(".to-do-line").forEach((t=>{let r=t.querySelector("#title_text");0===e.purposes.length&&(t.style.display="none");for(let o=0;o<e.purposes.length;o++){if(e.purposes[o].title===r.textContent){t.style.display="block";break}t.style.display="none"}}))},setProjectName(e){this.projectName.textContent=e}};i.creationOfStorageProjects(),i.alwaysOpenFirstProject()}(),function(){document.querySelector(".addPurposeBtn").addEventListener("click",(function(){o.showEmptyForm()}));let t=document.getElementById("purposeForm");t.addEventListener("submit",(function(r){let a;r.preventDefault();let u=o.serializeForm(t);if(e.currentPurpose){a=e.currentPurpose,document.querySelector(".main_side").removeChild(a.DOM);let t=s(u);a.DOM=y(t),e.currentPurpose=null}else a=n(u),a.DOM=y(a);l(a),c(a),a.DOM.querySelector("#todo-checkbox").addEventListener("click",(function(){i(a)})),o.hideForm()})),document.querySelector(".closePurposetBtn").addEventListener("click",(function(){o.hideForm()}));let r=document.querySelector(".pop-up_purpose_window");e.currentPurpose=null;let o={title:r.querySelector(".title"),submitBtn:r.querySelector("#submit_btn"),formNodelist:r.querySelectorAll(".input"),deadlineInput:r.querySelector("#deadline"),setMinToActualDate(){const e=new Date,t=`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`;this.deadlineInput.min=t},showEmptyForm(){this.title.textContent="New Form",this.submitBtn.textContent="Add",this.formNodelist.forEach((function(e){e.value=""})),r.style.display="flex",this.setMinToActualDate()},showFilledForm(t){e.currentPurpose=t,this.title.textContent="Change Form",this.submitBtn.textContent="Change",this.formNodelist.forEach((function(e){switch(e.id){case"title":e.value=t.title;break;case"deadline":e.value=t.deadline;break;case"details":e.value=t.details;break;case"priority":e.value=t.priority}})),r.style.display="flex",this.setMinToActualDate()},hideForm(){r.style.display="none"},serializeForm(e){const{elements:t}=e;return Array.from(t).filter((e=>!!e.name)).map((function(e){const{name:t,value:r}=e;return{name:t,value:r}}))}},n=function(t){let r={isDone:!1};r.title=t[0].value,r.deadline=t[1].value,r.details=t[2].value,r.priority=t[3].value,r.DOM="";for(let t=0;t<e.projects.length;t++)if(1==e.projects[t].isActive){e.projects[t].purposes.push(r);var o=localStorage.getItem("projects"),n=JSON.parse(o);n.forEach((function(o){if(v(o,e.projects[t])){let e=n.findIndex((e=>e===o));-1!==e&&(n[e].purposes.push(r),localStorage.setItem("projects",JSON.stringify(n)))}}))}return r},i=function(e){let t=e.DOM.querySelector("#title_text");var r=localStorage.getItem("projects"),o=JSON.parse(r);o.forEach((function(r){r.purposes.forEach((function(r){v(r,e)&&(!1===r.isDone?(t.style.color="grey",t.style.textDecoration="line-through",e.isDone=!0,r.isDone=!0):(e.isDone=!1,t.style.color="black",t.style.textDecoration="none",r.isDone=!1))}))}));var n=JSON.stringify(o);localStorage.setItem("projects",n)},l=function(t){let r=document.querySelector(".main_side");t.DOM.querySelector(".trash").addEventListener("click",(function(){r.removeChild(t.DOM);for(let r=0;r<e.projects.length;r++)if(1==e.projects[r].isActive){let i=e.projects[r].purposes.indexOf(t);if(-1!==i){e.projects[r].purposes.splice(i,1);var o=localStorage.getItem("projects"),n=JSON.parse(o);n.forEach((function(o){v(o,e.projects[r])&&(o.purposes.forEach((function(e){v(e,t)&&o.purposes.splice(i,1)})),localStorage.setItem("projects",JSON.stringify(n)))}))}}}))},s=function(t){var r=localStorage.getItem("projects"),o=JSON.parse(r);return o.forEach((function(r){r.purposes.forEach((function(r){v(r,e.currentPurpose)&&(r.title=t[0].value,r.deadline=t[1].value,r.details=t[2].value,r.priority=t[3].value,localStorage.setItem("projects",JSON.stringify(o)))}))})),e.currentPurpose.title=t[0].value,e.currentPurpose.deadline=t[1].value,e.currentPurpose.details=t[2].value,e.currentPurpose.priority=t[3].value,e.currentPurpose},c=function(e){e.DOM.querySelector(".change").addEventListener("click",(function(){o.showFilledForm(e)}))}}()})();
//# sourceMappingURL=main.js.map