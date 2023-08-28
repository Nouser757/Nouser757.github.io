var resources = {
    "basic": 0,
    "basecond": 0,
    "bird": 0,
    "bas4": 0
}
timePassed = 0
timeMax = 120

birdstone = false

function resourceClick(resource, gainInt=1, costArray){
    for (const costid in costArray){
        cost = costArray[costid]
        if (resources[cost[0]] < cost[1]){
            return;
        }
    }
    resources[resource] += gainInt;
    for (const costid in costArray){
        cost = costArray[costid]
        resources[cost[0]] -= cost[1];
    }
	updateResources();
	return;
}

function updateResources(){
    for (const resource in resources){
        numberthingy = document.getElementById(resource)
        numberthingy.innerText = resources[resource]
    }
    checkMilestones();
    return;
}

function checkMilestones(){
    if ((!birdstone) && (resources["bird"] >= 20)){
        birdstone = true
        timeMax += 30
    }
}

function timePasses(){
    timePassed += 0.1;
    document.getElementById("progressBar").style.width = ((timePassed/timeMax)*100) + "%";
    if (timePassed >= timeMax){
        for (const resource in resources){
            resources[resource] = 0
        }
        timePassed = 0
    }
}

setInterval(timePasses, 100);