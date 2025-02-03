import { 
    getFileTextFromURL,
    decryptTextWithPass,
    getAuthKeyAndDataFromFileText,
    objectifyTwoColsCSVText,
 } from "./utilities.mjs";



export class User{
    constructor(roll, password){
        this._error = null;

        this._roll = roll;
        this._password = password;

        this._authentication = null;
        this._isAuthentic = false;
        this._info = {};
        this._FILE_DECRYPTION_AUTH_KEY = password;

        this._authenticateAndSetUserInfo();
    }

    // GETTER

    get error(){return this._error}
    get roll(){return this._roll}
    get password(){return this._password}
    get authentication(){return this._authentication}
    get isAuthentic(){return this._isAuthentic}
    get info(){return {...this._info}};
    get FILE_DECRYPTION_AUTH_KEY(){return this._FILE_DECRYPTION_AUTH_KEY}


    // METHODS

    getInfo(field){
        if (field === "password"){return this.password}
        return this._info[field];
    }

    getAttandance(subject, month=null){
        console.log("Feature not available till now.")
    }




    _authenticateAndSetUserInfo(){
        this._authentication = new Promise((resolve, reject) => {
            // Getting info file from web
            let temp = getFileTextFromURL(User._getUserInfoFileURL(this.roll))

            temp.then((fileText) => {
                // Decrypting file text
                let [error, text] = decryptTextWithPass(fileText, this._password);
                if (error) {
                    this._isAuthentic = false;
                    reject();
                }
                let [authKey, dataString] = getAuthKeyAndDataFromFileText(text);
                // Authenticating file decrypedText
                if (authKey !== this._FILE_DECRYPTION_AUTH_KEY){
                     this._isAuthentic = false;
                     reject();
                }
                // Getting user info
                this._info = objectifyTwoColsCSVText(dataString, false);

                // Authenticating
                if (this._password === this._info["password"]){
                    this._isAuthentic = true;
                    delete this._info["password"]
                    resolve();
                }
                else {
                    this._isAuthentic = false;
                    this._info = {};
                    reject();
                }

                resolve();

            })
            .catch(() => {
                this._isAuthentic = false;
                reject();
            })
        })
    }


    static _getUserInfoFileURL(roll){
        // let WEBSITE_ROOTURL = "https://sapiensprojects.github.io/studentspace/";
        let INFO_DIRPATH = "data/student_data/info/";
        let FILENAME = String(roll) + ".txt";
        let URL = INFO_DIRPATH + FILENAME;
        // let WEBSITE_ROOTURL = "http:/127.0.0.1:5500/";
        // let INFO_DIRPATH = "data/student_data/info/";
        // let FILENAME = String(roll) + ".txt";
        // let URL = INFO_DIRPATH + FILENAME;
        return URL;
    }


}







/*
export class User{
    static ROLL = null;
    static PASS = null;
    static isAuthenticated = false;
    static setCredentials(roll, pass){
        User.ROLL = roll;
        User.PASS = pass;
    }

    static info = {};

    
    static authenticate(roll, pass){
        let error = false
        let URL =  getStudentInfoFileURL(roll);
        
        // Getting user info (password includes in user info);
        let xhr = new XMLHttpRequest();
        xhr.open("GET", URL);
        xhr.onload = () => {
            let [err, decryptedFileContent] = decryptTextWithPass(xhr.response, pass);

            if (err){error = true; return}
        
            let [checkSum, infoCsv] = getCheckSumAndDataFromFileContent(decryptedFileContent);
            
            // Matching checksum
            if (checkSum !== pass){error = true; return}

            // Getting user info
            let info = objectifyTwoColsCSVText(infoCsv);

            // Authenticating
            if (info["password"] !== pass) {error=true; return}
        }

        // Authenticate user

        // Set User isAuthenticate value

        // Return isAuthenticate
    }

    static getGenralInfo(){
        // Check for User isAuthenticate

        // Fetch user genral info

        // Decrypt genral info data

        // return genral info
    }

    static getAttandance(){
        // Check for is User Authenticated

        // Fetch user attandance data

        // Decrypt user attandance data

        // return attandance data
    }


}

*/