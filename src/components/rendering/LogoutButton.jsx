import Button from "../ui/Button"


const LogoutButton = (props) => {
    const logoutHandler = (setIsFlag) => {
        
        console.log(">>>>> logotHandler click");
        setIsFlag(false);
    };

    return(
        <div>
            <Button title="로그아웃" onClick ={() => logoutHandler(props.isLogin)}></Button>
        </div>
    )
}

export default LogoutButton