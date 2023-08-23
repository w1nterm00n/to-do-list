(()=>{"use strict";const e={projects:[]};let t=function(e){let t=document.querySelector(".main_side");const o=document.querySelector(".to-do-line-closed").cloneNode(!0);o.style.display="block",t.appendChild(o),o.querySelector("#title_text").textContent=e.title,o.querySelector(".deadline").textContent=e.deadline;let l=o.querySelector(".toggle"),r=!1;l.addEventListener("click",(function(){!1===r?(n.style.display="block",p.setAttribute("src","pics/toggle_on.svg"),r=!0):(m(),r=!1)}));let n=document.createElement("div");n.className="description_and_priority_part",o.appendChild(n);let i=document.createElement("div");i.className="description_side",n.appendChild(i);let s=document.createElement("p");s.textContent="Description:",i.appendChild(s);let c=document.createElement("p");c.textContent=e.details,i.appendChild(c);let d=document.createElement("div");d.className="priority_side",n.appendChild(d);let a=document.createElement("p");a.textContent="Priority:",d.appendChild(a);let u=document.createElement("p");u.textContent=e.priority,d.appendChild(u);let p=l.querySelector("#toggleImg");function m(){n.style.display="none",p.setAttribute("src","pics/toggle_off.svg")}return m(),o};!function(){document.querySelector(".addProjectBtn").addEventListener("click",(function(){o.showForm()}));let t=document.getElementById("projectForm");t.addEventListener("submit",(e=>{e.preventDefault(),o.submitForm(t)})),document.querySelector(".closeProjectBtn").addEventListener("click",(function(){o.hideForm()}));let o={formWrapper:document.querySelector(".pop-up_project_window"),showForm(){this.formWrapper.style.display="flex"},hideForm(){this.formWrapper.style.display="none"},submitForm(e){let t=this.serializeForm(e);this.hideForm(),r.createProject(t)},serializeForm(e){const{elements:t}=e;return Array.from(t).filter((e=>!!e.name)).map((function(e){const{name:t,value:o}=e;return{name:t,value:o}}))}};class l{constructor(t){this.name=t,this.isActive=!1,this.purposes=[],e.projects.push(this)}}let r={createProject(e){let t=new l(e[0].value),o=n(t);o.querySelector(".trash").addEventListener("click",(function(){r.deleteProject(t,o)}))},deleteProject(t,o){for(let o=0;o<e.projects.length;o++)e.projects[o]==t&&e.projects.splice(o,1);document.querySelector(".projects_list").removeChild(o),projectName.textContent="deleted project";let l=document.querySelector(".main_side");l.querySelectorAll(".to-do-line").forEach((e=>{"block"===e.style.display&&l.removeChild(e)}))},defaultProjectCreation(){this.createProject([{value:"Default project"}]);let t=document.querySelector(".project_list"),o=t.querySelector(".toggle");i.openToggle(o,t,e.projects[0])}},n=function(t){let o=document.querySelector(".projects_list"),l=document.createElement("div");l.classList.add("project_list"),o.appendChild(l);let r=document.createElement("button");r.classList.add("toggle"),l.appendChild(r);let n=document.createElement("img");n.classList.add("toggle_img"),n.setAttribute("src","pics/toggle_off.svg"),r.addEventListener("click",(function(){if(!1===i.isToggleOpen&&!1===t.isActive)i.openToggle(n,l,t);else if(!0===i.isToggleOpen&&!0===t.isActive)i.closeToggle(n,l,t);else if(!0===i.isToggleOpen&&!1===t.isActive)for(let r=0;r<e.projects.length;r++){if(!0===e.projects[r].isActive){e.projects[r].isActive=!1;let t=o.querySelectorAll(".project_list"),l=o.querySelectorAll(".toggle_img");t.forEach((e=>{e.style.background="rgba(172, 196, 204, 1)",e.style.border="none"})),l.forEach((e=>{e.setAttribute("src","pics/toggle_off.svg")}))}i.openToggle(n,l,t)}})),r.appendChild(n);let s=document.createElement("p");s.textContent=t.name,l.appendChild(s);let c=document.createElement("button");c.classList.add("trash"),l.appendChild(c);let d=document.createElement("img");return d.setAttribute("src","pics/trash.svg"),c.appendChild(d),l},i={isToggleOpen:!1,openToggle(e,t,o){this.isToggleOpen=!0,e.setAttribute("src","pics/toggle_on.svg"),t.style.background="#B49463",t.style.border="1px solid black",s.setProjectName(o.name),o.isActive=!0,s.purposeDisplaying(o)},closeToggle(e,t,o){this.isToggleOpen=!1,e.setAttribute("src","pics/toggle_off.svg"),t.style.background="rgba(172, 196, 204, 1)",t.style.border="none",o.isActive=!1}},s={projectName:document.getElementById("projectName"),mainSide:document.querySelector(".main_side"),purposeDisplaying(e){this.mainSide.querySelectorAll(".to-do-line").forEach((t=>{let o=t.querySelector("#title_text");0===e.purposes.length&&(t.style.display="none");for(let l=0;l<e.purposes.length;l++){if(e.purposes[l].title===o.textContent){t.style.display="block";break}t.style.display="none"}}))},setProjectName(e){this.projectName.textContent=e}};r.defaultProjectCreation()}(),function(){document.querySelector(".addPurposeBtn").addEventListener("click",(function(){n.showEmptyForm()}));let o=document.getElementById("purposeForm");o.addEventListener("submit",(function(l){let u;l.preventDefault();let p=n.serializeForm(o);if(r){u=r,document.querySelector(".main_side").removeChild(u.DOM);let o=d(r,p);u.DOM=t(o),console.log(e.projects),r=null}else u=i(p),u.DOM=t(u);c(u),a(u),u.DOM.querySelector("#todo-checkbox").addEventListener("click",(function(){s(u)})),n.hideForm()})),document.querySelector(".closePurposetBtn").addEventListener("click",(function(){n.hideForm()}));let l=document.querySelector(".pop-up_purpose_window"),r=null,n={title:l.querySelector(".title"),submitBtn:l.querySelector("#submit_btn"),formNodelist:l.querySelectorAll(".input"),showEmptyForm(){this.title.textContent="New Form",this.submitBtn.textContent="Add",this.formNodelist.forEach((function(e){e.value=""})),l.style.display="flex"},showFilledForm(e){r=e,this.title.textContent="Change Form",this.submitBtn.textContent="Change",l.style.display="flex"},hideForm(){l.style.display="none"},serializeForm(e){const{elements:t}=e;return Array.from(t).filter((e=>!!e.name)).map((function(e){const{name:t,value:o}=e;return{name:t,value:o}}))}},i=function(t){let o={isDone:!1};o.title=t[0].value,o.deadline=t[1].value,o.details=t[2].value,o.priority=t[3].value,o.DOM="";for(let t=0;t<e.projects.length;t++)1==e.projects[t].isActive&&e.projects[t].purposes.push(o);return o},s=function(e){let t=e.DOM.querySelector("#title_text");!1===e.isDone?(t.style.color="grey",t.style.textDecoration="line-through",e.isDone=!0):(e.isDone=!1,t.style.color="black",t.style.textDecoration="none")},c=function(t){let o=document.querySelector(".main_side");t.DOM.querySelector(".trash").addEventListener("click",(function(){o.removeChild(t.DOM);for(let o=0;o<e.projects.length;o++)if(1==e.projects[o].isActive){let l=e.projects[o].purposes.indexOf(t);-1!==l&&e.projects[o].purposes.splice(l,1)}console.log(e.projects)}))},d=function(e,t){return e.title=t[0].value,e.deadline=t[1].value,e.details=t[2].value,e.priority=t[3].value,e},a=function(e){e.DOM.querySelector(".change").addEventListener("click",(function(){n.showFilledForm(e)}))}}(),console.log(e.projects)})();
//# sourceMappingURL=main.js.map