import { CmptHub } from "../CmptHub.mjs";
import { updateContainerCmptLayout } from "../utilities.mjs";
import { LoggedinHomePage } from "../loggedin-home-page/loggedin-home-page.js";
import { LoggedinAttandancePage } from "../loggedin-attandance-page/loggedin-attandance-page.js";
import { LoggedinMenuPage } from "../loggedin-menu-page/loggedin-menu-page.js";





export class LoggedinToolsPage{
    static load(pageTitleCmpt, appBodyCmpt, student){
        pageTitleCmpt.text = "SPACE | TOOLS";

        // Defining page layout
        let layout = [
            ["navBar", CmptHub.navBar, {loginBtn:false}],
            ["fullPageEmptyContent", CmptHub.fullPageEmptyContent],
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
        elmts.toolsBtn.style.backgroundColor = "var(--PRIMARY-COLOR--DARK)";
        
        // UI-agents
        elmts.homeBtn.onclick = () => {
            elmts.toolsBtn.style.backgroundColor = "transparent";
            LoggedinHomePage.load(pageTitleCmpt, appBodyCmpt, student);
        }

        elmts.attandanceBtn.onclick = () => {
            elmts.toolsBtn.style.backgroundColor = "transparent";
            LoggedinAttandancePage.load(pageTitleCmpt, appBodyCmpt, student);
        }

        elmts.bottomMenuBtn.onclick = () => {
            elmts.toolsBtn.style.backgroundColor = "transparent";
            LoggedinMenuPage.load(pageTitleCmpt, appBodyCmpt, student);
        }
        
        // console.log(appBodyCmpt.hookeds["bottomNavBar"]._hooks)


    }
}