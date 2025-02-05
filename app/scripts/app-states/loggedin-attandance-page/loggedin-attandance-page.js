import { CmptHub } from "../CmptHub.mjs";
import { updateContainerCmptLayout } from "../utilities.mjs";
import { LoggedinHomePage } from "../loggedin-home-page/loggedin-home-page.js";
import { LoggedinToolsPage } from "../loggedin-tools-page.js/loggedin-tools-page.js";
import { LoggedinMenuPage } from "../loggedin-menu-page/loggedin-menu-page.js";


export class LoggedinAttandancePage{
    static load(pageTitleCmpt, appBodyCmpt, student){
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
            "toolsBtn": null,
            "bottomMenuBtn": null,
        }

        function getElmts(){
            elmts.homeBtn = appBodyCmpt.hookeds["bottomNavBar"]._hooks["homeBtn"];
            elmts.attandanceBtn = appBodyCmpt.hookeds["bottomNavBar"]._hooks["attandanceBtn"];
            elmts.toolsBtn = appBodyCmpt.hookeds["bottomNavBar"]._hooks["toolsBtn"];
            elmts.bottomMenuBtn = appBodyCmpt.hookeds["bottomNavBar"]._hooks["menuBtn"];

        }
        getElmts();

        // UI-styles
        elmts.attandanceBtn.style.backgroundColor = "var(--PRIMARY-COLOR--DARK)";
        
        // UI-agents
        elmts.homeBtn.onclick = () => {
            elmts.attandanceBtn.style.backgroundColor = "transparent";
            LoggedinHomePage.load(pageTitleCmpt, appBodyCmpt, student);
        }

        elmts.toolsBtn.onclick = () => {
            elmts.attandanceBtn.style.backgroundColor = "transparent";
            LoggedinToolsPage.load(pageTitleCmpt, appBodyCmpt, student);
        }

        elmts.bottomMenuBtn.onclick = () => {
            elmts.attandanceBtn.style.backgroundColor = "transparent";
            LoggedinMenuPage.load(pageTitleCmpt, appBodyCmpt, student);
        }

    }
}