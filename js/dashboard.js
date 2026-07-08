/* ================= COUNTER ================= */

const counters=document.querySelectorAll(".stat-card h2");

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

let count=0;

const speed=25;

const update=()=>{

if(count<target){

count++;

counter.innerText=count;

setTimeout(update,speed);

}else{

counter.innerText=target;

}

};

update();

});

// Sidebar Menu Active

const menuItems = document.querySelectorAll(".sidebar-menu li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(menu => menu.classList.remove("active"));

        item.classList.add("active");

    });

});

// Add Module Button

const addModuleBtn = document.querySelector(".add-module");

addModuleBtn.addEventListener("click", () => {

    alert("Add Module page coming in next step.");

});

/* ==========================
      MODULE TABS
========================== */

const tabs=document.querySelectorAll(".tab");

tabs.forEach(tab=>{

tab.addEventListener("click",()=>{

tabs.forEach(t=>t.classList.remove("active"));

tab.classList.add("active");

});

});

/* ==========================
      GRID / LIST BUTTON
========================== */

const views=document.querySelectorAll(".view-btn");

views.forEach(btn=>{

btn.addEventListener("click",()=>{

views.forEach(v=>v.classList.remove("active"));

btn.classList.add("active");

});

});

/* ===========================
      ENERGY CARD
=========================== */

const detailsBtn = document.querySelector(".details-btn");

if(detailsBtn){

detailsBtn.addEventListener("click",()=>{

alert("Opening Energy Agent Dashboard...");

});

}

const analyticsBtn=document.querySelector(".secondary-btn");

if(analyticsBtn){

analyticsBtn.addEventListener("click",()=>{

alert("Energy Analytics coming soon...");

});

}
/* ==========================
      LIVE SYNC BUTTON
========================== */

const syncButton = document.querySelector(".sync-btn");

if(syncButton){

syncButton.addEventListener("click",()=>{

syncButton.innerHTML="<i class='bx bx-loader-alt bx-spin'></i> Syncing...";

setTimeout(()=>{

syncButton.innerHTML="<i class='bx bx-check'></i> Synced";

},2000);

});

}

/* ==========================
      LOGOUT
========================== */

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {

    const confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {

        // Remove login information if stored
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        sessionStorage.clear();

        // Redirect to Sign In page
        window.location.href = "signin.html";

    }

});

const profileName = document.getElementById("profileName");

const userName = localStorage.getItem("userName");

if(userName){

    profileName.textContent = userName;

}