(()=>{"use strict";if(!localStorage.getItem("projects")){var e=JSON.stringify([]);localStorage.setItem("projects",e),console.log("creation of storage")}const t=function(e,t){const o=Object.keys(e),r=Object.keys(t);if(o.length!==r.length)return!1;for(const r of o)if("isActive"!==r&&"purposes"!==r&&"DOM"!==r&&"object"==typeof e[r]&&"object"==typeof t[r]){if(!deepEqual(e[r],t[r]))return!1}else if("isActive"!==r&&"purposes"!==r&&"DOM"!==r&&e[r]!==t[r])return!1;return!0},o={projects:[]};let r=function(e){let t=document.querySelector(".main_side");const o=document.querySelector(".to-do-line-closed").cloneNode(!0);o.style.display="block",t.appendChild(o),o.querySelector("#title_text").textContent=e.title,o.querySelector(".deadline").textContent=e.deadline;let r=o.querySelector(".toggle"),l=!1;r.addEventListener("click",(function(){!1===l?(s.style.display="block",d.setAttribute("src","pics/toggle_on.svg"),l=!0):(m(),l=!1)}));let s=document.createElement("div");s.className="description_and_priority_part",o.appendChild(s);let n=document.createElement("div");n.className="description_side",s.appendChild(n);let c=document.createElement("p");c.textContent="Description:",n.appendChild(c);let i=document.createElement("p");i.textContent=e.details,n.appendChild(i);let a=document.createElement("div");a.className="priority_side",s.appendChild(a);let p=document.createElement("p");p.textContent="Priority:",a.appendChild(p);let u=document.createElement("p");u.textContent=e.priority,a.appendChild(u);let d=r.querySelector("#toggleImg");function m(){s.style.display="none",d.setAttribute("src","pics/toggle_off.svg")}return m(),o};const l=function(){document.querySelector(".addPurposeBtn").addEventListener("click",(function(){n.showEmptyForm()}));let e=document.getElementById("purposeForm");e.addEventListener("submit",(function(t){let l;t.preventDefault();let d=n.serializeForm(e);if(s){l=s,document.querySelector(".main_side").removeChild(l.DOM);let e=p(s,d);l.DOM=r(e),console.log(o.projects),s=null}else l=c(d),l.DOM=r(l);a(l),u(l),l.DOM.querySelector("#todo-checkbox").addEventListener("click",(function(){i(l)})),n.hideForm()})),document.querySelector(".closePurposetBtn").addEventListener("click",(function(){n.hideForm()}));let l=document.querySelector(".pop-up_purpose_window"),s=null,n={title:l.querySelector(".title"),submitBtn:l.querySelector("#submit_btn"),formNodelist:l.querySelectorAll(".input"),showEmptyForm(){this.title.textContent="New Form",this.submitBtn.textContent="Add",this.formNodelist.forEach((function(e){e.value=""})),l.style.display="flex"},showFilledForm(e){s=e,this.title.textContent="Change Form",this.submitBtn.textContent="Change",l.style.display="flex"},hideForm(){l.style.display="none"},serializeForm(e){const{elements:t}=e;return Array.from(t).filter((e=>!!e.name)).map((function(e){const{name:t,value:o}=e;return{name:t,value:o}}))}},c=function(e){let r={isDone:!1};r.title=e[0].value,r.deadline=e[1].value,r.details=e[2].value,r.priority=e[3].value,r.DOM="";for(let e=0;e<o.projects.length;e++)if(1==o.projects[e].isActive){o.projects[e].purposes.push(r);var l=localStorage.getItem("projects"),s=JSON.parse(l);s.forEach((function(l){if(t(l,o.projects[e])){let e=s.findIndex((e=>e===l));-1!==e&&(s[e].purposes.push(r),localStorage.setItem("projects",JSON.stringify(s)))}}))}return r},i=function(e){let t=e.DOM.querySelector("#title_text");!1===e.isDone?(t.style.color="grey",t.style.textDecoration="line-through",e.isDone=!0):(e.isDone=!1,t.style.color="black",t.style.textDecoration="none")},a=function(e){let r=document.querySelector(".main_side");e.DOM.querySelector(".trash").addEventListener("click",(function(){r.removeChild(e.DOM);for(let r=0;r<o.projects.length;r++)if(1==o.projects[r].isActive){let n=o.projects[r].purposes.indexOf(e);if(-1!==n){o.projects[r].purposes.splice(n,1);var l=localStorage.getItem("projects"),s=JSON.parse(l);s.forEach((function(l){t(l,o.projects[r])&&(l.purposes.forEach((function(o){t(o,e)&&l.purposes.splice(n,1)})),localStorage.setItem("projects",JSON.stringify(s)))}))}}console.log(o.projects)}))},p=function(e,o){var r=localStorage.getItem("projects"),l=JSON.parse(r);return l.forEach((function(r){r.purposes.forEach((function(r){t(r,e)&&(r.title=o[0].value,r.deadline=o[1].value,r.details=o[2].value,r.priority=o[3].value,localStorage.setItem("projects",JSON.stringify(l)))}))})),e.title=o[0].value,e.deadline=o[1].value,e.details=o[2].value,e.priority=o[3].value,e},u=function(e){e.DOM.querySelector(".change").addEventListener("click",(function(){n.showFilledForm(e)}))}};!function(){document.querySelector(".addProjectBtn").addEventListener("click",(function(){s.showForm()}));let e=document.getElementById("projectForm");e.addEventListener("submit",(t=>{t.preventDefault(),s.submitForm(e)})),document.querySelector(".closeProjectBtn").addEventListener("click",(function(){s.hideForm()}));let s={formWrapper:document.querySelector(".pop-up_project_window"),showForm(){this.formWrapper.style.display="flex"},hideForm(){this.formWrapper.style.display="none"},submitForm(e){let t=this.serializeForm(e);this.hideForm(),c.createProject(t)},serializeForm(e){const{elements:t}=e;return Array.from(t).filter((e=>!!e.name)).map((function(e){const{name:t,value:o}=e;return{name:t,value:o}}))}};class n{constructor(e){this.name=e,this.isActive=!1,this.purposes=[],o.projects.push(this);var r=localStorage.getItem("projects"),l=JSON.parse(r),s=this,n=!0;l.forEach((function(e){t(e,s)&&(n=!1)})),n&&l.push(this);var c=JSON.stringify(l);localStorage.setItem("projects",c)}}let c={createProject(e){let t=new n(e[0].value),o=i(t);o.querySelector(".trash").addEventListener("click",(function(){c.deleteProject(t,o)}))},deleteProject(e,r){for(let r=0;r<o.projects.length;r++)if(o.projects[r]==e){o.projects.splice(r,1);var l=localStorage.getItem("projects"),s=JSON.parse(l);s.forEach((function(o){if(t(e,o)){let e=s.indexOf(o);s.splice(e,1),localStorage.setItem("projects",JSON.stringify(s))}}))}document.querySelector(".projects_list").removeChild(r),projectName.textContent="deleted project";let n=document.querySelector(".main_side");n.querySelectorAll(".to-do-line").forEach((e=>{"block"===e.style.display&&n.removeChild(e)}))},defaultProjectCreation(){this.createProject([{value:"Default project"}]);let e=document.querySelector(".project_list"),t=e.querySelector(".toggle");if(a.openToggle(t,e,o.projects[0]),!localStorage.getItem("projects")){var r=JSON.stringify(o.projects);localStorage.setItem("projects",r)}},creationOfStorageProjects(){var e=localStorage.getItem("projects"),s=JSON.parse(e);console.log("is dere are projects?",o),s.forEach((function(e){c.createProject([{value:e.name}]);let s=document.querySelector(".project_list"),n=s.querySelector(".toggle"),i={};o.projects.forEach((function(o){t(o,e)&&(i=o)})),e.purposes.forEach((function(e){i.purposes.push(e),console.log("is there purposes... ",o.projects),r(e),l.purposeDelete(e)})),a.openToggle(n,s,e)}))}},i=function(e){let t=document.querySelector(".projects_list"),r=document.createElement("div");r.classList.add("project_list"),t.appendChild(r);let l=document.createElement("button");l.classList.add("toggle"),r.appendChild(l);let s=document.createElement("img");s.classList.add("toggle_img"),s.setAttribute("src","pics/toggle_off.svg"),l.addEventListener("click",(function(){if(!1===a.isToggleOpen&&!1===e.isActive)a.openToggle(s,r,e);else if(!0===a.isToggleOpen&&!0===e.isActive)a.closeToggle(s,r,e);else if(!0===a.isToggleOpen&&!1===e.isActive)for(let l=0;l<o.projects.length;l++){if(!0===o.projects[l].isActive){o.projects[l].isActive=!1;let e=t.querySelectorAll(".project_list"),r=t.querySelectorAll(".toggle_img");e.forEach((e=>{e.style.background="rgba(172, 196, 204, 1)",e.style.border="none"})),r.forEach((e=>{e.setAttribute("src","pics/toggle_off.svg")}))}a.openToggle(s,r,e)}})),l.appendChild(s);let n=document.createElement("p");n.textContent=e.name,r.appendChild(n);let c=document.createElement("button");c.classList.add("trash"),r.appendChild(c);let i=document.createElement("img");return i.setAttribute("src","pics/trash.svg"),c.appendChild(i),r},a={isToggleOpen:!1,openToggle(e,t,o){this.isToggleOpen=!0,e.setAttribute("src","pics/toggle_on.svg"),t.style.background="#B49463",t.style.border="1px solid black",p.setProjectName(o.name),o.isActive=!0,p.purposeDisplaying(o)},closeToggle(e,t,o){this.isToggleOpen=!1,e.setAttribute("src","pics/toggle_off.svg"),t.style.background="rgba(172, 196, 204, 1)",t.style.border="none",o.isActive=!1}},p={projectName:document.getElementById("projectName"),mainSide:document.querySelector(".main_side"),purposeDisplaying(e){this.mainSide.querySelectorAll(".to-do-line").forEach((t=>{let o=t.querySelector("#title_text");0===e.purposes.length&&(t.style.display="none");for(let r=0;r<e.purposes.length;r++){if(console.log(" цели внутри ",e.name," проекта: ",e.purposes),e.purposes[r].title===o.textContent){t.style.display="block",console.log("yayy");break}t.style.display="none",console.log(e.purposes[r].title," and ",o.textContent," not yayy")}}))},setProjectName(e){this.projectName.textContent=e}};c.creationOfStorageProjects()}(),l(),console.log(o.projects)})();
//# sourceMappingURL=main.js.map