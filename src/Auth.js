/*eslint no-restricted-globals: 0*/

import auth0 from "auth0-js";
import jwtDecode from "jwt-decode"

//redirectUri:"http://localhost:3001/callback" || 

const LOGIN_SUCCESS_PAGE = "/home";
const LOGIN_FAILURE_PAGE = "/";

class Auth {
    auth0 = new auth0.WebAuth({
        domain:"dev-vny--4ui.us.auth0.com",
        clientID:"HfXSTmsqkuqCz0IGgLF0Nt4PVUsl9fCt",
        redirectUri: "https://minha-carteira.netlify.app/callback",
        audience:"https://dev-vny--4ui.us.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid profile"
    });

    constructor() {
        this.login = this.login.bind(this);
    }

    login(){
       this.auth0.authorize();
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResults) => {
            if (authResults && authResults.accessToken && authResults.idToken) {
                let expiresAt = JSON.stringify((authResults.expiresIn) *100000 + new Date().getTime());
                localStorage.setItem("access_token", authResults.accessToken);
                localStorage.setItem("id_token", authResults.idToken);
                localStorage.setItem("experies_at", expiresAt);
                location.hash = "";
                location.pathname = LOGIN_SUCCESS_PAGE;
            } else if (err) {
                location.pathname = LOGIN_FAILURE_PAGE;
                console.log(err);
            }
        });
    }

    isAuthenticated() {
        let expiresAt = JSON.parse(localStorage.getItem("experies_at"));
        return new Date().getTime() < expiresAt;
    }

    logout (){
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("experies_at");
        location.pathname = LOGIN_FAILURE_PAGE;
    }
    getProfile() {
        if (localStorage.getItem("id_token")) {
            return jwtDecode(localStorage.getItem("id_token"));
        } else {
           return {};
        }
    }

}

export default Auth