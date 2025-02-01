import { CmptHub } from "../CmptHub.mjs";
import { updateContainerCmptLayout } from "../utilities.mjs";

export class LoggedoutAboutPage{
    static load(titleCmpt, appBodyCmpt){
        // Updating title of page
        titleCmpt.text = "SPACE | ABOUT"

        // Defining page layout
        let layout = [
            ["navBar", CmptHub.navBar],
            ["aboutStudentSpaceContent", CmptHub.aboutStudentSpaceContent],
            ["copywriteFooter", CmptHub.copywriteFooter]
        ]
        updateContainerCmptLayout(layout, appBodyCmpt);

        // UI-agents


        // Refreshing app body component
        // appBodyCmpt.refresh(true);
    }
    
}