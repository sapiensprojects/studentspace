// import CryptoJS from "crypto-js";

export function getStudentInfoFileURL(roll){
    let WEBSITE_ROOTURL = "https://sapiensprojects.github.io/studentspace/";
    let INFO_DIRPATH = "data/student_data/info/";
    let FILENAME = String(roll) + ".txt";
    let URL = WEBSITE_ROOTURL + INFO_DIRPATH + FILENAME;
    return URL;
}

// export function getWebFileContent(URL){
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", URL);
//     xhr.onload = (){}
// }


export function decryptTextWithPass(text, pass){
    let error = null;
    let decryptedText = null;
    try{
        decryptedText = CryptoJS.AES.decrypt(text, pass).toString(CryptoJS.enc.Utf8);
    }
    catch{
        error = true;
    }
    return [error, decryptedText];
}


export function getAuthKeyAndDataFromFileText(contentText){
    // console.log("from: getAuthKeyAndDataFromFileText - 1", contentText)
    contentText = contentText.replace("\n", "\n\n");
    // console.log("from: getAuthKeyAndDataFromFileText - 2")
    return contentText.split("\n\n");
}


export function objectifyTwoColsCSVText(csvText, colName=true, delimiter=","){
    csvText = csvText.trim();
    let lines = csvText.split("\n");
    let rows = []
    
    for (let line of lines){
        rows.push(line.split(delimiter));
    }
    
    if (rows.lenght === 0){return {}}
    else if ((rows.length === 1) && (colName)){return {}}

    if (colName) {rows.shift()}
    
    let obj = {};
    for (let row of rows){
        obj[row[0]] = row[1];
    }
    return obj;
}


export function getFileTextFromURL(url) {
    let method = "GET";
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            }
            else{
                reject(true);
            }
        };

        xhr.onerror = function () {
            reject(true);
        };
        xhr.send();
    });
}