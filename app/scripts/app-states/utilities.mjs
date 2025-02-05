export function updateContainerCmptLayout(layout, containerCmpt){
    // layout = [ ["cmptName", method], ["cmptName", method] ]

    // Finding required layout cmptNames
    let requiredLayoutNames = [];
    for (let layoutElmt of layout){requiredLayoutNames.push(layoutElmt[0])}
    
    // Clearing unrequired component
    let currentLayout = Object.keys(containerCmpt.hookeds);
    
    for (let currCmptName of currentLayout){
        if (!(requiredLayoutNames.includes(currCmptName))){
            containerCmpt.removeContent(currCmptName);
            delete currentLayout[currCmptName];
        }
    }

    if (requiredLayoutNames.length === 0){return containerCmpt;}

    // Adding required component

    // Adding first component
    if (!(currentLayout.includes(requiredLayoutNames[0]))){
        let requiredCmpt = layout[0][1](requiredLayoutNames[0], layout[0][2]);
        containerCmpt.prependContent(requiredCmpt);
        containerCmpt.refreshAttachment(requiredLayoutNames[0], true);
    }

    // Adding remaining component
    for (let i = 1; i < requiredLayoutNames.length; i++){
        if (!(currentLayout.includes(requiredLayoutNames[i]))){
            let requiredCmpt = layout[i][1](requiredLayoutNames[i], layout[i][2]);
            containerCmpt.insertContentAfter(requiredCmpt, requiredLayoutNames[i-1]);
            containerCmpt.refreshAttachment(requiredLayoutNames[i], true);
        }
    }

    return containerCmpt;
}