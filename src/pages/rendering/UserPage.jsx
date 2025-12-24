import { useState } from "react";
import Greeting from "../../components/rendering/Greeting";
import LogoutButton from "../../components/rendering/LogoutButton";
import LoginButton from "../../components/rendering/LoginButton";

const UserPage = () => {
    const [isFlag, setIsFlag] = useState(false); //리액스 스테이트를 사용하기 위해 훅을 사용하고 있다<div className="
    //합성된 프롭스에 데이터 뿐만 아니라 함수도 전달할 수 있다.
    return (
        <div>
            <Greeting flag={isFlag} />

            {
                isFlag ? <LogoutButton isLogin={setIsFlag}/> 
                       : <LoginButton isLogin={setIsFlag}/>
            }
        </div>
    )
}

export default UserPage;

