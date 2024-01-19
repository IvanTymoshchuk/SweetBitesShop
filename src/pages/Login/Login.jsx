import {LoginPage} from "../../components/LoginPage/LoginPage";
import {RegPage} from "../../components/LoginPage/RegPage";

import {SwitchTransition, CSSTransition} from "react-transition-group";
import {useRef, useState} from "react";
import {LoginWrapper} from "./Login.styled";


export const Login = () => {
    const [isLoginPage, setIsLoginPage] = useState(true)
    const [userData, setUserData] = useState('')
    const [isLoginForm, setIsLoginForm] = useState('')
    const loginRef = useRef(null)
    const regRef = useRef(null)
    const nodeRef = isLoginPage ? loginRef : regRef;

    function changeTypePage(e) {
        e.preventDefault()
        setIsLoginPage(!isLoginPage)
    }

    function sendData(){
        if (isLoginForm){
            console.log(isLoginForm)
            console.log(userData)
            return {code: 200}
        }
        else if (!isLoginForm){
            console.log(isLoginForm)
            console.log(userData)
            return {code: 400}
        }
    }

    return (
        <>
            <LoginWrapper>
                <SwitchTransition mode={'out-in'}>
                    <CSSTransition
                        key={isLoginPage}
                        nodeRef={nodeRef}
                        addEndListener={(done) => {
                            nodeRef.current.addEventListener("transitionend", done, false);
                        }}
                        classNames="fade"
                    >
                        {isLoginPage ? (<LoginPage innerRef={loginRef} sendData={sendData} changeTypePage={changeTypePage} setUserData={setUserData} typeFormSet={setIsLoginForm}/>) : (
                            <RegPage changeTypePage={changeTypePage} sendData={sendData} typeFormSet={setIsLoginForm} setUserData={setUserData} innerRef={regRef}/>)}
                    </CSSTransition>
                </SwitchTransition>
            </LoginWrapper>
        </>
    );
};

export default Login;
