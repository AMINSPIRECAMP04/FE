//import Button from "../../components/ui/Button";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

const EventPage = () => {

    return(

        <div> 
            <Button variant='primary'>login</Button>

        </div>
        //리턴 안에서 스크립트를 하기 위해선 중괄호쓰면 됨 {}
    )
}

export default EventPage;

//만약에 서버가 인증을 요청할 수 있다. 인가가 아닌 인증임. 로그인하기위해..
//핸들러에 아이디와 패스워드를 호출할 수 있어야한다
//매개변수 없는 함수호출이 있을 수 있고 매개변수 있는 함수 호출이 있을 수 있다.
//캄포넌트에 버튼을 만들어놨음

//react에 bootstrap 설치할 수 있음.. npm install react-bootstrap