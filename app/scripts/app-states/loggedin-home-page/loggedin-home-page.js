import { CmptHub } from "../CmptHub.mjs";
import { updateContainerCmptLayout } from "../utilities.mjs";
import { LoggedinAttandancePage } from "../loggedin-attandance-page/loggedin-attandance-page.js";
import { LoggedinToolsPage } from "../loggedin-tools-page.js/loggedin-tools-page.js";
import { LoggedinMenuPage } from "../loggedin-menu-page/loggedin-menu-page.js";




export class LoggedinHomePage{
    static load(pageTitleCmpt, appBodyCmpt){
        pageTitleCmpt.text = "SPACE | HOME";

        // Defining page layout
        let layout = [
            ["navBar", CmptHub.navBar, {loginBtn:false}],
            ["loggedinHomePageContent", CmptHub.loggedoutHomePageContent],
            ["copywriteFooter", CmptHub.copywriteFooter],
            ["bottomNavBarShapedContainer", CmptHub.bottomNavBarShapedContainer],
            ["bottomNavBar", CmptHub.bottomNavBar],

        ]
        updateContainerCmptLayout(layout, appBodyCmpt);

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
        elmts.homeBtn.style.backgroundColor = "var(--PRIMARY-COLOR--DARK)";
        
        // UI-agents
        elmts.attandanceBtn.onclick = () => {
            elmts.homeBtn.style.backgroundColor = "transparent";
            LoggedinAttandancePage.load(pageTitleCmpt, appBodyCmpt);
        }

        elmts.toolsBtn.onclick = () => {
            elmts.homeBtn.style.backgroundColor = "transparent";
            LoggedinToolsPage.load(pageTitleCmpt, appBodyCmpt);
        }

        elmts.bottomMenuBtn.onclick = () => {
            elmts.homeBtn.style.backgroundColor = "transparent";
            LoggedinMenuPage.load(pageTitleCmpt, appBodyCmpt);
        }
        
        // console.log(appBodyCmpt.hookeds["bottomNavBar"]._hooks)


    }
}