export class User{
    static ROLL = null;
    static PASS = null;
    static isAuthenticated = false;
    static setCredentials(roll, pass){
        User.ROLL = roll;
        User.PASS = pass;
    }

    
    static authenticate(){
        // Get user encrypted password

        // Decrypt user password

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