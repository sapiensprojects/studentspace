import { CmptHub } from "../CmptHub.mjs";
import { updateContainerCmptLayout } from "../utilities.mjs";
import { LoggedinHomePage } from "../loggedin-home-page/loggedin-home-page.js";

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


        // UI-elements
        let elmts = {
            "homeBtn": null,
            "attandanceBtn": null,
            "notificationBtn": null,
            "bottomMenuBtn": null,
        }

        function getElmts(){
            elmts.homeBtn = appBodyCmpt.hookeds["bottomNavBar"]._hooks["homeBtn"];
            elmts.attandanceBtn = appBodyCmpt.hookeds["bottomNavBar"]._hooks["attandanceBtn"];
            elmts.notificationBtn = appBodyCmpt.hookeds["bottomNavBar"]._hooks["notificationBtn"];
            elmts.bottomMenuBtn = appBodyCmpt.hookeds["bottomNavBar"]._hooks["menuBtn"];

        }
        getElmts();

        // UI-styles
        let attandanceBtnOriginalColor = elmts.attandanceBtn.style.backgroundColor;
        elmts.attandanceBtn.style.backgroundColor = "var(--PRIMARY-COLOR--DARK)";
        
        // UI-agents
        elmts.homeBtn.onclick = () => {
            elmts.attandanceBtn.style.backgroundColor = attandanceBtnOriginalColor;
            LoggedinHomePage.load(pageTitleCmpt, appBodyCmpt);
        }

    }
}