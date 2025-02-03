import { CmptWebPage } from "https://sapiensprojects.github.io/CmptWebPage/CmptWebPage.js";

export class CmptHub{
    static appBodyCmpt(name="appBodyCmpt"){
        return new CmptWebPage.ContainerCmpt(name, [])
    }

    static appHeadTitle(name="appHeadTitle", text=""){
        return new CmptWebPage.TitleCmpt(name, text)
    }

    static navBar(name="navBar", configs={}){
        let loginBtn = configs["loginBtn"];
        let homePageUrl = "https://sapiensprojects.github.io/studentspace/";

        let navLeftCode = `
            <a href="${homePageUrl}">
                <div class="navBar__logo"><img src="./app/assets/logos/logo.svg" width="40" height="40"></div>
                <div class="navBar__name-logo"><img src="./app/assets/logos/name-logo.svg" width="100" height="43"></div>
            </a>
        `;
        let navLeftHtmlCmpt = new CmptWebPage.HtmlCodeCmpt("navLeftCode", navLeftCode);
        navLeftHtmlCmpt.styles = `
            .navBar__logo{
                width: 40px;
                height: 40px;
            }

            .navBar__name-logo{
                width: 100px;
                height: 43px;
            }

            .navBar__logo img{
                width: 100%;
                height: auto;
            }

            .navBar__name-logo img{
                width: 100%;
                height: auto;
            }

        `;

        let navLeftContainer = new CmptWebPage.ContainerCmpt("navLeftContainer", navLeftHtmlCmpt);
        navLeftContainer.rawStyles = `
            .${navLeftContainer.cmptId} > a{
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                gap: 0.5rem;
            }
        `;


        let loginBtnCmpt = null
        if (loginBtn){
            let loginBtnCode = `<button class="btn btn--highlight-color">Login</button>`;
            let loginBtnCodeCmpt = new CmptWebPage.HtmlCodeCmpt("loginBtnCode", loginBtnCode);
            loginBtnCmpt = new CmptWebPage.ContainerCmpt("loginBtn", loginBtnCodeCmpt);
            loginBtnCmpt.hookStyles = `
                margin-right: 1rem;
            `;
        }

        let menuCode = `<img src="./app/assets/icons/menu.svg" width="32" height="32">`;
        let menuCodeCmpt = new CmptWebPage.HtmlCodeCmpt("menuCode", menuCode);
        let menuCmpt = new CmptWebPage.ContainerCmpt("menu", menuCodeCmpt);
        
        let navRightContainer = null;
        if (loginBtnCmpt){
            navRightContainer = new CmptWebPage.ContainerCmpt("navRightContainer", [loginBtnCmpt, menuCmpt]);
        }
        else {
            navRightContainer = new CmptWebPage.ContainerCmpt("navRightContainer", [menuCmpt]);
        }
        navRightContainer.styles = `
            display: flex;
            align-items: center;
            justify-content: space-between;
        `;


        let rootCmpt = new CmptWebPage.ContainerCmpt(name, [navLeftContainer, navRightContainer]);


        rootCmpt.styles = `
            background-color: var(--PRIMARY-COLOR);
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
            height: 70px;
            display: flex;
            align-items: center;
            padding-inline: 1rem;
            // gap: 0.5rem;
            justify-content: space-between;
        `;

        return rootCmpt;
    }

    static loginForm(name="loginForm"){
        let code = `
            <section id="login-form" class="section-margin--second">
                <input type="text" id="roll-inp" placeholder="University Roll Number">
                <input type="password" id="password-inp" placeholder="Password">
                <button class="btn btn--highlight-color" id="login-btn">Log In</button>
            </section>
        `;

        let styles = `
            #login-form > input{
                width: 100%;
                font: inherit;
                
            }

            #login-form > *{
                margin: 0.5rem 0rem;
                padding: 0.5em 1em;
            }

            #login-form > button{
                width: 100%;
                /* padding: 0.5em 1em; */
                border-radius: 0px;
                /* font: inherit; */
            }

            #login-form #roll-inp{
                text-transform: uppercase;
            }
        `;

        let loginFormCodeCmpt = new CmptWebPage.HtmlCodeCmpt(`${name}--HtmlCode`, code);
        loginFormCodeCmpt.styles = styles;

        let loginFormCmpt = new CmptWebPage.ContainerCmpt(name, loginFormCodeCmpt)
        return loginFormCmpt;
    }

    static loggedoutHomePageContent(name="loggedoutHomePageContent"){
        let rootCmpt = new CmptWebPage.ContainerCmpt(name, []);
        rootCmpt.styles = `
            min-height: 100vh;
        `
        return rootCmpt;
    }


    static bottomNavBar(name="bottomNavBar"){
        let bottomNavBtn = "bottomNavBtn";
        
        let homeBtnCode = `<img src="./app/assets/icons/home.svg" alt="home">`;
        let homeBtnHtmlCodeCmpt = new CmptWebPage.HtmlCodeCmpt("homeBtnCode", homeBtnCode);
        let homeBtn = new CmptWebPage.ContainerCmpt("homeBtn", homeBtnHtmlCodeCmpt, {class:["bottom-nav-btn"]});

        let attandanceBtnCode = `<img src="./app/assets/icons/attandence.svg" alt="attandance">`;
        let attandanceBtnHtmlCodeCmpt = new CmptWebPage.HtmlCodeCmpt("attandanceBtnCode", attandanceBtnCode);
        let attandanceBtn = new CmptWebPage.ContainerCmpt("attandanceBtn", attandanceBtnHtmlCodeCmpt, {class:["bottom-nav-btn"]});
        
        let notificationBtnCode = `<img src="./app/assets/icons/bell.svg" alt="notification">`;
        let notificationBtnHtmlCodeCmpt = new CmptWebPage.HtmlCodeCmpt("notificationBtnCode", notificationBtnCode)
        let notificationBtn = new CmptWebPage.ContainerCmpt("notificationBtn", notificationBtnHtmlCodeCmpt, {class:["bottom-nav-btn"]});

        let menuBtnCode = `<img src="./app/assets/icons/menu--blue.svg" alt="menu" width="32" height="32">`;
        let menuBtnHtmlCodeCmpt = new CmptWebPage.HtmlCodeCmpt("menuBtnCode", menuBtnCode);
        let menuBtn = new CmptWebPage.ContainerCmpt("menuBtn", menuBtnHtmlCodeCmpt, {class:["bottom-nav-btn"]});

        
        let rootCmpt = new CmptWebPage.ContainerCmpt(name, [
            homeBtn, attandanceBtn, notificationBtn, menuBtn
        ]);
        
        rootCmpt.styles = `
            display: flex;
            position: fixed;
            bottom: 0px;
            left: 0px;
            // justify-content: space-around;
            align-items: center;
            width: 100%;
            height: 70px;
            box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
            z-index: 1;
            background-color: var(--PRIMARY-COLOR--LIGHT);
        `;

        rootCmpt.rawStyles = `
            .${rootCmpt.cmptId} > *{
                flex-basis: 25%;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
            }
            .${rootCmpt.cmptId} > div:hover{
                background-color: var(--PRIMARY-COLOR--DARK);
            }
        `;

        
        // rootCmpt.refreshAttachment("navBtnStyleCode", true)

        return rootCmpt;
    }

    static bottomNavBarShapedContainer(name="bottomNavBarShapedContainer"){
        let rootCmpt = new CmptWebPage.ContainerCmpt(name, []);
        rootCmpt.styles = `
            height: 70px;
            width: 100%;
        `
        return rootCmpt;
    }

    static advertismentCard(){}

    static monthwiseAttandanceDiplay(name="monthwiseAttandanceDisplay", attandanceData){
        let rootCmpt = new CmptWebPage.ContainerCmpt(name, []);
        for (let monthAttandance of attandanceData){
            let month = monthAttandance[0];
            let attandance = monthAttandance[1];
            let cardCmpt = CmptHub.monthAttandanceDisplayCard(month, month, attandance);
            rootCmpt.appendContent(cardCmpt);
        }

        rootCmpt.styles = `
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.5rem;
            max-width: 500px;
            margin: auto;
        `;

        rootCmpt.rawStyles = `
            .${rootCmpt.cmptId} > div{
                flex-basis: 70px;
                min-height: 70px;
                flex-grow: 1;
            }
        `;

        return rootCmpt;

    }

    static monthAttandanceDisplayCard(name="monthAttandanceDisplayCard", month, attandancePercentage){
        if (typeof attandancePercentage === "string"){
            attandancePercentage = Number(attandancePercentage.replace("%", ""))
        }

        let monthCmpt = new CmptWebPage.ParaCmpt("month", month);
        monthCmpt.styles = `
            font-size: 0.75rem;
            text-transform: capitalize;
            padding-top: 0.5rem;
            padding-bottom: 0.75rem;
            // margin: 0;
            // padding: 0;
        `;

        let attandancePercentageCmpt = new CmptWebPage.ParaCmpt("attandancePercentage", String(attandancePercentage) + "%");
        attandancePercentageCmpt.styles = `
            font-size: 1rem;
            font-weight: bold;
        `;

        let rootCmpt = new CmptWebPage.ContainerCmpt(name, [monthCmpt, attandancePercentageCmpt]);


        let minAvg = 75;
        let maxAvg = 80;
        let backgroundColor = null;
        if (attandancePercentage < minAvg){
            backgroundColor = "var(--BAD-ATTANDANCE-CARD-COLOR)";
        }
        else if (attandancePercentage > maxAvg){
            backgroundColor = "var(--GOOD-ATTANDANCE-CARD-COLOR)";
        }
        else {backgroundColor = "var(--AVG-ATTANDANCE-CARD-COLOR)";}


        rootCmpt.styles = `
            width: 100%;
            height: 100%;
            background-color: ${backgroundColor};
            text-align: center;
            // margin: 1rem;
        `;

        return rootCmpt;

    }

    static loggedinAttandancePageContent(name="loggedinAttandancePageContent"){
        let rootCmpt = new CmptWebPage.ContainerCmpt(name, [], {"class":["section-margin--second"]});
        rootCmpt.styles="min-height: 100vh;margin-top: 2rem;"
        return rootCmpt;
    }

    static aboutStudentSpaceContent(name="aboutStudentSpaceContent"){
        let code = `
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci inventore quod id quasi mollitia totam neque? Iure saepe et sint officiis necessitatibus similique, non accusantium asperiores quisquam. Veritatis, recusandae cum?</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci inventore quod id quasi mollitia totam neque? Iure saepe et sint officiis necessitatibus similique, non accusantium asperiores quisquam. Veritatis, recusandae cum?</p>
        `;

        let aboutPageHeading = new CmptWebPage.ContainerCmpt("aboutPageHeading", ["ABOUT"]);
        aboutPageHeading.styles = `
            font-size: 2.5rem;
            font-weight: bold;
            diplay: block;
        `;

        let aboutPageText = new CmptWebPage.HtmlCodeCmpt("aboutPageText", code);

        let rootCmpt = new CmptWebPage.ContainerCmpt(name, [aboutPageHeading, aboutPageText], {"class": ["section-margin--second"]});

        rootCmpt.styles = `
            min-height: 100vh;
        `

        return rootCmpt;
    }
    
    static copywriteFooter(name="copywriteFooter"){
        let code = `
            <p>&copy; Dhiraj Kumar Gupta</p>
        `;
        let htmlCodeCmpt = new CmptWebPage.HtmlCodeCmpt(`${name}--HtmlCode`, code);
        let cmpt = new CmptWebPage.ContainerCmpt(name, htmlCodeCmpt);
        cmpt.styles = `
            font-size: 0.5rem;
            background-color: var(--PRIMARY-COLOR--DARK);
            width: 100%;
            height: 0.75rem;
            text-align: center;
        `;
        // console.log(cmpt);
        return cmpt;
    }

}