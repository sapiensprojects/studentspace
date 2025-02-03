import { CmptHub } from "./app/scripts/app-states/CmptHub.mjs";
import { LoggedoutHomePage } from "./app/scripts/app-states/loggedout-home-page/loggedout-home-page.js";
import { LoggedoutAboutPage } from "./app/scripts/app-states/loggedout-about-page/loggedout-about-page.js";
import { LoggedinHomePage } from "./app/scripts/app-states/loggedin-home-page/loggedin-home-page.js";
import { LoggedinAttandancePage } from "./app/scripts/app-states/loggedin-attandance-page/loggedin-attandance-page.js";


let appHeadTitle = CmptHub.appHeadTitle("appHeadTitle", "")
let appBodyCmpt = CmptHub.appBodyCmpt("appBodyCmpt");

document.querySelector("head").appendChild(appHeadTitle.getHtmlElmt());
document.querySelector("body").insertAdjacentElement("afterbegin", appBodyCmpt.getHtmlElmt());



LoggedoutHomePage.load(appHeadTitle, appBodyCmpt);
// await new Promise(r => setTimeout(r, 3000));
// LoggedoutAboutPage.load(appHeadTitle, appBodyCmpt);
// await new Promise(r => setTimeout(r, 3000));
// LoggedoutHomePage.load(appHeadTitle, appBodyCmpt);
// await new Promise(r => setTimeout(r, 3000));
// LoggedoutAboutPage.load(appHeadTitle, appBodyCmpt);
// await new Promise(r => setTimeout(r, 3000));
// LoggedoutHomePage.load(appHeadTitle, appBodyCmpt);
// await new Promise(r => setTimeout(r, 3000));
// LoggedinHomePage.load(appHeadTitle, appBodyCmpt);
// await new Promise(r => setTimeout(r, 3000));
// LoggedinHomePage.load(appHeadTitle, appBodyCmpt);
// await new Promise(r => setTimeout(r, 3000));
// LoggedinAttandancePage.load(appHeadTitle, appBodyCmpt);
// await new Promise(r => setTimeout(r, 3000));
// LoggedinHomePage.load(appHeadTitle, appBodyCmpt);
// await new Promise(r => setTimeout(r, 3000));
// LoggedinAttandancePage.load(appHeadTitle, appBodyCmpt);
// LoggedinAttandancePage.load(appHeadTitle, appBodyCmpt);

