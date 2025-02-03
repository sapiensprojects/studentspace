import { CmptHub } from "../CmptHub.mjs";
import { updateContainerCmptLayout } from "../utilities.mjs";
import { LoggedinAttandancePage } from "../loggedin-attandance-page/loggedin-attandance-page.js";




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
        let homeBtnOriginalColor = elmts.homeBtn.style.backgroundColor;
        elmts.homeBtn.style.backgroundColor = "var(--PRIMARY-COLOR--DARK)";
        
        // UI-agents
        elmts.attandanceBtn.onclick = () => {
            elmts.homeBtn.style.backgroundColor = homeBtnOriginalColor;
            LoggedinAttandancePage.load(pageTitleCmpt, appBodyCmpt);
        }
        
        // console.log(appBodyCmpt.hookeds["bottomNavBar"]._hooks)


    }
}