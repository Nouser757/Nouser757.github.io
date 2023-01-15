const tabbar = document.getElementById("tabbar");
const contentframe = document.getElementById("contentframe")

function selectTab(evt) {
    if (evt.target.className == "activetab") {return} //can't activate a tab that's already active
    for (const tab of tabbar.children) {
        tab.className = "inactivetab"; //deactivate all the tabs
    }
    evt.target.className = "activetab"; //activate the selected tab
    contentframe.src = evt.target.dataset.page //change the content to match
}

for (const tab of tabbar.children) {
    tab.onclick = selectTab;
}