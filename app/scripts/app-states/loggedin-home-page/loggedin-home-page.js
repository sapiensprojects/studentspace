import { CmptHub } from "../CmptHub.mjs";
import { updateContainerCmptLayout } from "../utilities.mjs";

export class LoggedinHomePage{
    static load(pageTitleCmpt, appBodyCmpt){
        pageTitleCmpt.text = "SPACE | HOME";

        // Defining page layout
        let layout = [
            ["navBar", CmptHub.navBar],
            ["loggedoutHomePageContent", CmptHub.loggedoutHomePageContent],
            ["copywriteFooter", CmptHub.copywriteFooter],
            ["bottomNavBarShapedContainer", CmptHub.bottomNavBarShapedContainer],
            ["bottomNavBar", CmptHub.bottomNavBar],

        ]
        updateContainerCmptLayout(layout, appBodyCmpt);

        // UI-agents
        appBodyCmpt.hookeds["bottomNavBar"].rootElmt.firstElementChild.style.backgroundColor = "var(--PRIMARY-COLOR--DARK)";

    }
}