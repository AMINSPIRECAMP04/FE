//import Button from "../../components/ui/Button";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

const EventPage = () => {

    const handler = (id, pwd) => {
        console.log('>>>>>> handler call', id, pwd)
    }

    const id = 'jslim';
    const pwd = 'jslim';

    return(

        <div> 
            <div>
            <label>아이디</label>
            <input
            typr="text"
            placeholder='아이디를 입력하세요'/>
            </div>
            <Button variant='primary' onClick = { () => handler()} >login</Button>

        </div>
        //리액트안에서 폼을 만든다면 리액트에 의해 제어가 되어야 한다. 입력된 값과 ~~가 싱크되어서 실시간으로 동기화가 되어야 한다.
        //리턴 안에서 스크립트를 하기 위해선 중괄호쓰면 됨 {}
    )
}

export default EventPage;

//만약에 서버가 인증을 요청할 수 있다. 인가가 아닌 인증임. 로그인하기위해..
//핸들러에 아이디와 패스워드를 호출할 수 있어야한다
//매개변수 없는 함수호출이 있을 수 있고 매개변수 있는 함수 호출이 있을 수 있다.
//캄포넌트에 버튼을 만들어놨음

//react에 bootstrap 설치할 수 있음.. npm install react-bootstrap