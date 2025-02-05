import { CmptWebPage } from "https://sapiensprojects.github.io/CmptWebPage/CmptWebPage.js";

export class LocalCmptHub{
    static generalInfoHeading(name="generalInfoHeading", configs={heading:"HEADING"}){
        let rootCmpt = new CmptWebPage.ContainerCmpt(name, [configs.heading],{
            "class" : ["section-margin--second"]
        });
        rootCmpt.styles = `
            background-color: var(--HIGHLIGHT-COLOR);
            // width: 100%;
            padding: 1rem;
            margin-bottom: 1.5rem;
            text-align: center;
            font-size: 1.5rem;
            font-weight: bold;
            color: whitesmoke;
            text-transform: uppercase;
        `;
        return rootCmpt;
    }

    static generalInfoData(name="generalInfoData", configs={field:"FIELD", value:"value"}){
        console.log(configs)
        let generalInfoFieldCmpt = new CmptWebPage.ParaCmpt("generalInfoField", configs.field);
        generalInfoFieldCmpt.styles = `
            text-transform: uppercase;
            width: 100%;
            border-right: 2px solid black;
            padding: 0 1rem;
            height: 100%;
            display: flex;
            align-items: center;
            font-weight: 500;
        `;
        generalInfoFieldCmpt.hookStyles = `
            width: 50%;
        `;

        // if (configs.field === "email"){configs.value = configs.value.replace("@",  " @")}

        let generalInfoValueCmpt = new CmptWebPage.ParaCmpt("generalInfoValue", configs.value);
        // console.log(generalInfoFieldCmpt.cmptId)
        generalInfoValueCmpt.styles = `
            width: 100%;
            padding: 0 1rem;
            height: 100%;
            display: flex;
            align-items: center;
            font-weight: 500;
        `;

        if (configs.field === "email"){generalInfoValueCmpt.addStyle("line-break", "anywhere")}

        generalInfoValueCmpt.hookStyles = `
            width: 50%;
            vertical-align: middle;
        `;



        let rootCmpt = new CmptWebPage.ContainerCmpt(name, [generalInfoFieldCmpt, generalInfoValueCmpt], {"class":["section-margin--second"]});
        rootCmpt.styles = `
            background-color: whitesmoke;
            border-radius: 10px;
            display: flex;
            // justify-content: center;
            margin-top: 0.5rem;
            padding: 1rem 0;
        `;
        return rootCmpt;
    }
}