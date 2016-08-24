import {SIGN_IN} from "../../constants/constant"
import { setCookie } from "../../utils/stringUtils"
import { readUserInfo } from "../public/navigateor"
/**
 * 显示登陆框
 * @param displayDetail
 * @param detailData
 * @param originalUrl
 * @returns {{type: string, displayDetail: *, detailData: *}}
 */
export function signIn(displayLogin){
    let isSignIn = false;
    let username = $(".want-login-username-input").val().trim();
    let password = $(".want-login-password-input").val().trim();
    $.ajax({
        type:"POST",
        url:"http://localhost:8080/wantplus/action/user/login",
        datatype:"json",
        data:{
            username:username,
            password:password
        },
        async: false,
        success: function (data) {
            let user = JSON.parse(data).data
            if(JSON.parse(data).state == 1 || JSON.parse(data).state == '1'){
                setCookie('username',user.username);
                if(user.nickName == "" || user.nickName == undefined){
                    setCookie('nickName',user.username);
                }
                setCookie('headImg',user.headImg);
                setCookie('userId',user.userId);
                isSignIn = true;
                setCookie('isSignIn',isSignIn);
                $(".want-login").css("display","none");
                readUserInfo();
            }
            console.log( user);
        }
    });
    return {
        type:SIGN_IN,
        isSignIn:isSignIn
    }
}

