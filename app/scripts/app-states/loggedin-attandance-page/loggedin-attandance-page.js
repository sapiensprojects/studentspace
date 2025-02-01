import { CmptHub } from "../CmptHub.mjs";
import { updateContainerCmptLayout } from "../utilities.mjs";

export class LoggedinAttandancePage{
    static load(pageTitleCmpt, appBodyCmpt){
        pageTitleCmpt.text = "SPACE | ATTANDANCE";

        // Defining page layout
        let layout = [
            ["navBar", CmptHub.navBar],
            ["loggedinAttandancePageContent", CmptHub.loggedinAttandancePageContent],
            ["copywriteFooter", CmptHub.copywriteFooter],
            ["bottomNavBarShapedContainer", CmptHub.bottomNavBarShapedContainer],
            ["bottomNavBar", CmptHub.bottomNavBar],

        ]
        updateContainerCmptLayout(layout, appBodyCmpt);


        let attandanceData = [ ['march', 45], ["april", 56.45], ["may", 89], ["june", 90]];

        // Showing Attandance Data on Display
        if (!(appBodyCmpt.hookeds["loggedinAttandancePageContent"].hookeds["monthwiseAttandanceDisplay"])){
            appBodyCmpt.hookeds["loggedinAttandancePageContent"].appendContent(
                CmptHub.monthwiseAttandanceDiplay("monthwiseAttandanceDisplay", attandanceData)
            );
        }

        appBodyCmpt.refreshAttachment("loggedinAttandancePageContent");


        // UI-agents
        appBodyCmpt.hookeds["bottomNavBar"].rootElmt.children[1].style.backgroundColor = "var(--PRIMARY-COLOR--DARK)";

    }
}