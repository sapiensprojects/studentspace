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
            ["navBar", CmptHub.navBar],
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

            student.authentication.then(() => console.log(student.info))

            student.authentication.catch(() => console.log(student.isAuthentic))

            student.authentication.finally(() => console.log(student.isAuthentic))
            // })

            console.log(student);
            console.log(student.authentication)
            setTimeout(() => console.log(student.authentication), 3000)

        }

        // Refreshing app body component
        // appBodyCmpt.refresh(true);
    }
    
}