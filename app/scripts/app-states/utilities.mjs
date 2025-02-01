export function updateContainerCmptLayout(layout, containerCmpt){
    // layout = [ ["cmptName", method], ["cmptName", method] ]

    // Finding required layout cmptNames
    let requiredLayout = [];
    for (let layoutElmt of layout){requiredLayout.push(layoutElmt[0])}
    
    // Clearing unrequired component
    let currentLayout = Object.keys(containerCmpt.hookeds);
    
    for (let currCmptName of currentLayout){
        if (!(requiredLayout.includes(currCmptName))){
            containerCmpt.removeContent(currCmptName);
            delete currentLayout[currCmptName];
        }
    }

    if (requiredLayout.length === 0){return containerCmpt;}

    // Adding required component

    // Adding first component
    if (!(currentLayout.includes(requiredLayout[0]))){
        let requiredCmpt = layout[0][1](requiredLayout[0]);
        containerCmpt.prependContent(requiredCmpt);
        containerCmpt.refreshAttachment(requiredLayout[0], true);
    }

    // Adding remaining component
    for (let i = 1; i < requiredLayout.length; i++){
        if (!(currentLayout.includes(requiredLayout[i]))){
            let requiredCmpt = layout[i][1](requiredLayout[i]);
            containerCmpt.insertContentAfter(requiredCmpt, requiredLayout[i-1]);
            containerCmpt.refreshAttachment(requiredLayout[i], true);
        }
    }

    return containerCmpt;
}