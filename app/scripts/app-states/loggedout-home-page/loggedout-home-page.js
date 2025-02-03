import { CmptHub } from "../CmptHub.mjs";
import { LoggedinHomePage } from "../loggedin-home-page/loggedin-home-page.js";
import { updateContainerCmptLayout } from "../utilities.mjs";
import { User } from "../../core-scripts/User.mjs";


export class LoggedoutHomePage{
    static load(titleCmpt, appBodyCmpt){
        // Updating title of page
        titleCmpt.text = "SPACE | HOME"

        // Defining page layout
        let layout = [
            ["navBar", CmptHub.navBar, {loginBtn:false}],
            ["loginForm", CmptHub.loginForm],
            ["loggedoutHomePageContent", CmptHub.loggedoutHomePageContent],
            ["copywriteFooter", CmptHub.copywriteFooter]
        ]
        updateContainerCmptLayout(layout, appBodyCmpt);
        
        // Adding UI-agents
        let rollInp = document.getElementById("roll-inp");
        let passwordInp = document.getElementById("password-inp");
        let loginBtn = document.getElementById("login-btn");

        loginBtn.onclick = function () {
            let student = new User(rollInp.value, passwordInp.value)
            // authenticate()
            // .then(() => {
            student.authentication.then(() => {
                LoggedinHomePage.load(titleCmpt, appBodyCmpt);
            })

            // })


        }

        // Refreshing app body component
        // appBodyCmpt.refresh(true);
    }
    
}