import Button from "../ui/Button"

const LoginButton = (props) => {
    const loginHandler = (setIsFlag) => {
        
        console.log(">>>>> loginHandler click");
        setIsFlag(true);
    };

    return(
        <div>
            <Button title="로그인" onClick ={() => loginHandler(props.isLogin)}></Button>
        </div>
    )

}

export default LoginButton