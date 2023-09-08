(()=>{"use strict";const e={projects:[],currentPurpose:null};let t=function(e){let t=document.querySelector(".main_side");const o=document.querySelector(".to-do-line-closed").cloneNode(!0);o.style.display="block",t.appendChild(o),o.querySelector("#title_text").textContent=e.title,o.querySelector(".deadline").textContent=e.deadline;let r=o.querySelector(".toggle"),l=!1;r.addEventListener("click",(function(){!1===l?(s.style.display="block",d.setAttribute("src","pics/toggle_on.svg"),l=!0):(m(),l=!1)}));let s=document.createElement("div");s.className="description_and_priority_part",o.appendChild(s);let n=document.createElement("div");n.className="description_side",s.appendChild(n);let c=document.createElement("p");c.textContent="Description:",n.appendChild(c);let i=document.createElement("p");i.textContent=e.details,n.appendChild(i);let p=document.createElement("div");p.className="priority_side",s.appendChild(p);let u=document.createElement("p");u.textContent="Priority:",p.appendChild(u);let a=document.createElement("p");a.textContent=e.priority,p.appendChild(a);let d=r.querySelector("#toggleImg");function m(){s.style.display="none",d.setAttribute("src","pics/toggle_off.svg")}return m(),o};if(!localStorage.getItem("projects")){var o=JSON.stringify([{name:"Default Project",isActive:"true",purposes:[]}]);localStorage.setItem("projects",o)}const r=function(e,t){const o=Object.keys(e),r=Object.keys(t);if(o.length!==r.length)return!1;for(const r of o)if("isActive"!==r&&"purposes"!==r&&"DOM"!==r&&"object"==typeof e[r]&&"object"==typeof t[r]){if(!deepEqual(e[r],t[r]))return!1}else if("isActive"!==r&&"purposes"!==r&&"DOM"!==r&&e[r]!==t[r])return!1;return!0};!function(){document.querySelector(".addProjectBtn").addEventListener("click",(function(){l.showForm()}));let o=document.getElementById("projectForm");o.addEventListener("submit",(e=>{e.preventDefault(),l.submitForm(o)})),document.querySelector(".closeProjectBtn").addEventListener("click",(function(){l.hideForm()}));let l={formWrapper:document.querySelector(".pop-up_project_window"),showForm(){this.formWrapper.style.display="flex"},hideForm(){this.formWrapper.style.display="none"},submitForm(e){let t=this.serializeForm(e);this.hideForm(),c.createProject(t)},serializeForm(e){const{elements:t}=e;return Array.from(t).filter((e=>!!e.name)).map((function(e){const{name:t,value:o}=e;return{name:t,value:o}}))}};class s{constructor(t){this.name=t,this.isActive=!1,this.purposes=[],e.projects.push(this);var o=localStorage.getItem("projects"),l=JSON.parse(o),s=this,n=!0;l.forEach((function(e){r(e,s)&&(n=!1)})),n&&l.push(this);var c=JSON.stringify(l);localStorage.setItem("projects",c)}}let n={deletePurpose(t){let o=document.querySelector(".main_side");t.DOM.querySelector(".trash").addEventListener("click",(function(){o.removeChild(t.DOM);for(let o=0;o<e.projects.length;o++)if(1==e.projects[o].isActive){let n=e.projects[o].purposes.indexOf(t);if(-1!==n){e.projects[o].purposes.splice(n,1);var l=localStorage.getItem("projects"),s=JSON.parse(l);s.forEach((function(l){r(l,e.projects[o])&&(l.purposes.forEach((function(e){r(e,t)&&l.purposes.splice(n,1)})),localStorage.setItem("projects",JSON.stringify(s)))}))}}}))},changePurpose(t){t.DOM.querySelector(".change").addEventListener("click",(function(){document.querySelector(".pop-up_purpose_window").style.display="flex",e.currentPurpose=t}))}},c={createProject(e){let t=new s(e[0].value),o=i(t);o.querySelector(".trash").addEventListener("click",(function(){c.deleteProject(t,o)}))},deleteProject(t,o){for(let o=0;o<e.projects.length;o++)if(e.projects[o]==t){e.projects.splice(o,1);var l=localStorage.getItem("projects"),s=JSON.parse(l);s.forEach((function(e){if(r(t,e)){let t=s.indexOf(e);s.splice(t,1),localStorage.setItem("projects",JSON.stringify(s))}}))}document.querySelector(".projects_list").removeChild(o),projectName.textContent="deleted project";let n=document.querySelector(".main_side");n.querySelectorAll(".to-do-line").forEach((e=>{"block"===e.style.display&&n.removeChild(e)}))},creationOfStorageProjects(){var o=localStorage.getItem("projects");JSON.parse(o).forEach((function(o){c.createProject([{value:o.name}]);let l=document.querySelector(".project_list"),s=l.querySelector(".toggle"),i={};e.projects.forEach((function(e){r(e,o)&&(i=e)})),o.purposes.forEach((function(e){i.purposes.push(e),e.DOM=t(e),n.deletePurpose(e),n.changePurpose(e)})),p.openToggle(s,l,o)}))},alwaysOpenFirstProject(){let t=e.projects[0],o=document.querySelector(".project_list"),r=o.querySelector(".toggle");p.openToggle(r,o,t);let l=document.querySelector(".toggle");l.click(),l.click()}},i=function(t){let o=document.querySelector(".projects_list"),r=document.createElement("div");r.classList.add("project_list"),o.appendChild(r);let l=document.createElement("button");l.classList.add("toggle"),r.appendChild(l);let s=document.createElement("img");s.classList.add("toggle_img"),s.setAttribute("src","pics/toggle_off.svg"),l.addEventListener("click",(function(){if(!1===p.isToggleOpen&&!1===t.isActive)p.openToggle(s,r,t);else if(!0===p.isToggleOpen&&!0===t.isActive)p.closeToggle(s,r,t);else if(!0===p.isToggleOpen&&!1===t.isActive)for(let l=0;l<e.projects.length;l++){if(!0===e.projects[l].isActive){e.projects[l].isActive=!1;let t=o.querySelectorAll(".project_list"),r=o.querySelectorAll(".toggle_img");t.forEach((e=>{e.style.background="rgba(172, 196, 204, 1)",e.style.border="none"})),r.forEach((e=>{e.setAttribute("src","pics/toggle_off.svg")}))}p.openToggle(s,r,t)}})),l.appendChild(s);let n=document.createElement("p");n.textContent=t.name,r.appendChild(n);let c=document.createElement("button");c.classList.add("trash"),r.appendChild(c);let i=document.createElement("img");return i.setAttribute("src","pics/trash.svg"),c.appendChild(i),r},p={isToggleOpen:!1,openToggle(e,t,o){this.isToggleOpen=!0,e.setAttribute("src","pics/toggle_on.svg"),t.style.background="#B49463",t.style.border="1px solid black",u.setProjectName(o.name),o.isActive=!0,u.purposeDisplaying(o)},closeToggle(e,t,o){this.isToggleOpen=!1,e.setAttribute("src","pics/toggle_off.svg"),t.style.background="rgba(172, 196, 204, 1)",t.style.border="none",o.isActive=!1}},u={projectName:document.getElementById("projectName"),mainSide:document.querySelector(".main_side"),purposeDisplaying(e){this.mainSide.querySelectorAll(".to-do-line").forEach((t=>{let o=t.querySelector("#title_text");0===e.purposes.length&&(t.style.display="none");for(let r=0;r<e.purposes.length;r++){if(e.purposes[r].title===o.textContent){t.style.display="block";break}t.style.display="none"}}))},setProjectName(e){this.projectName.textContent=e}};c.creationOfStorageProjects(),c.alwaysOpenFirstProject()}(),function(){document.querySelector(".addPurposeBtn").addEventListener("click",(function(){s.showEmptyForm()}));let o=document.getElementById("purposeForm");o.addEventListener("submit",(function(r){let l;r.preventDefault();let a=s.serializeForm(o);if(e.currentPurpose){l=e.currentPurpose,document.querySelector(".main_side").removeChild(l.DOM);let o=p(a);l.DOM=t(o),console.log(e.projects),e.currentPurpose=null}else console.log("ohh i messed here!"),l=n(a),l.DOM=t(l);i(l),u(l),l.DOM.querySelector("#todo-checkbox").addEventListener("click",(function(){c(l)})),s.hideForm()})),document.querySelector(".closePurposetBtn").addEventListener("click",(function(){s.hideForm()}));let l=document.querySelector(".pop-up_purpose_window");e.currentPurpose=null;let s={title:l.querySelector(".title"),submitBtn:l.querySelector("#submit_btn"),formNodelist:l.querySelectorAll(".input"),showEmptyForm(){this.title.textContent="New Form",this.submitBtn.textContent="Add",this.formNodelist.forEach((function(e){e.value=""})),l.style.display="flex"},showFilledForm(t){e.currentPurpose=t,this.title.textContent="Change Form",this.submitBtn.textContent="Change",l.style.display="flex"},hideForm(){l.style.display="none"},serializeForm(e){const{elements:t}=e;return Array.from(t).filter((e=>!!e.name)).map((function(e){const{name:t,value:o}=e;return{name:t,value:o}}))}},n=function(t){let o={isDone:!1};o.title=t[0].value,o.deadline=t[1].value,o.details=t[2].value,o.priority=t[3].value,o.DOM="";for(let t=0;t<e.projects.length;t++)if(1==e.projects[t].isActive){e.projects[t].purposes.push(o);var l=localStorage.getItem("projects"),s=JSON.parse(l);s.forEach((function(l){if(r(l,e.projects[t])){let e=s.findIndex((e=>e===l));-1!==e&&(s[e].purposes.push(o),localStorage.setItem("projects",JSON.stringify(s)))}}))}return o},c=function(e){let t=e.DOM.querySelector("#title_text");!1===e.isDone?(t.style.color="grey",t.style.textDecoration="line-through",e.isDone=!0):(e.isDone=!1,t.style.color="black",t.style.textDecoration="none")},i=function(t){let o=document.querySelector(".main_side");t.DOM.querySelector(".trash").addEventListener("click",(function(){o.removeChild(t.DOM);for(let o=0;o<e.projects.length;o++)if(1==e.projects[o].isActive){let n=e.projects[o].purposes.indexOf(t);if(-1!==n){e.projects[o].purposes.splice(n,1);var l=localStorage.getItem("projects"),s=JSON.parse(l);s.forEach((function(l){r(l,e.projects[o])&&(l.purposes.forEach((function(e){r(e,t)&&l.purposes.splice(n,1)})),localStorage.setItem("projects",JSON.stringify(s)))}))}}}))},p=function(t){var o=localStorage.getItem("projects"),l=JSON.parse(o);return l.forEach((function(o){o.purposes.forEach((function(o){r(o,e.currentPurpose)&&(o.title=t[0].value,o.deadline=t[1].value,o.details=t[2].value,o.priority=t[3].value,localStorage.setItem("projects",JSON.stringify(l)))}))})),e.currentPurpose.title=t[0].value,e.currentPurpose.deadline=t[1].value,e.currentPurpose.details=t[2].value,e.currentPurpose.priority=t[3].value,e.currentPurpose},u=function(e){e.DOM.querySelector(".change").addEventListener("click",(function(){s.showFilledForm(e)}))}}()})();
//# sourceMappingURL=main.js.map