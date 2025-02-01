import { CmptHub } from "../CmptHub.mjs";
import { updateContainerCmptLayout } from "../utilities.mjs";


export class LoggedoutHomePage{
    static load(titleCmpt, appBodyCmpt){
        // Updating title of page
        titleCmpt.text = "SPACE | HOME"

        // Defining page layout
        let layout = [
            ["navBar", CmptHub.navBar],
            ["loginForm", CmptHub.loginForm],
            ["loggedoutHomePageContent", CmptHub.loggedoutHomePageContent],
            ["copywriteFooter", CmptHub.copywriteFooter]
        ]
        updateContainerCmptLayout(layout, appBodyCmpt);
        
        // Adding UI-agents


        // Refreshing app body component
        // appBodyCmpt.refresh(true);
    }
    
}