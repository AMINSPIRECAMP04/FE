//import Button from "../../components/ui/Button";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

const EventPage = () => {

    const handler = (id, pwd) => {
        console.log('>>>>>> handler call', id, pwd)
    }
    //이벤트 소스, 이벤트, 이벤트 핸들러가 있음(3가지)

    const idHandler = (e) => { //이벤트를 받음
        //setId(id); //이렇게 해도 안 됨
        setId(e.target.value);
    }

    const pwdHandler = (e) => { //이벤트에 대한 동작을 객체로 전달받음
        setPwd(e.target.value); //타켓은 인풋이되고 그 밸류를 가져오라고 함
    }

    
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');


    //const pwd = 'jslim';

    return(

        <div> 
            <div>
            <label>아이디</label>
            <input
            type="text"
            value={id} //input의 value로 아이디를 걸어준다.
            //onChange={}//핸들러를 직접 호출할 수도 있고, 특정 값만 변경시킬 거라면 어떻게 할까?
            // onChange={ () => {
            //     setId(id);
            // }} -> 이렇게 하면 안 됨

            //onChange={idHandler} -> 이것도 부족함

            onChange={(e) => idHandler(e)}
            placeholder='아이디를 입력하세요'/>
            </div>
            <div>
            <label>비밀번호</label>
            <input
            type="text"
 
            value={pwd}

            onChange={(e) => pwdHandler(e)}
            placeholder='비밀번호를 입력하세요'/>
            </div>

            <Button variant='primary' onClick = { () => handler(id, pwd)} >login</Button>

        </div>
        //리액트안에서 폼을 만든다면 리액트에 의해 제어가 되어야 한다. 입력된 값과 ~~가 싱크되어서 실시간으로 동기화가 되어야 한다.
        //리턴 안에서 스크립트를 하려면 중괄호쓰면 됨 {}
    )
}

export default EventPage;

//만약에 서버가 인증을 요청할 수 있다. 인가가 아닌 인증임. 로그인하기위해..
//핸들러에 아이디와 패스워드를 호출할 수 있어야한다
//매개변수 없는 함수호출이 있을 수 있고 매개변수 있는 함수 호출이 있을 수 있다.
//캄포넌트에 버튼을 만들어놨음

//react에 bootstrap 설치할 수 있음.. npm install react-bootstrap