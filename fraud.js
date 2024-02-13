
let activities = [];



function logActivity(activityType) {

    let activity = activities.find(a => a.type === activityType);

    if (activity) {

        activity.times += 1;
    } else {
       
        activities.push({ type: activityType, times: 1 });
    }

    localStorage.setItem('ac',JSON.stringify(activities))
    
}


window.addEventListener('contextmenu', function(e) {
    logActivity('Click droit');
    
});


window.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        logActivity(`Touche combinée avec ${e.key}`);
    }
});

window.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
        logActivity('Ouverture des outils de développement');
    }
});


window.addEventListener('beforeunload', function() {
    logActivity('Quitter la page');
});

window.addEventListener('unload', function() {
    console.log('Activités détectées :', activities);
});