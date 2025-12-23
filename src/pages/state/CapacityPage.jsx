import Button from '../../components/ui/Button'
import { useState, useEffect } from 'react'; //중괄호인건 export 되었다. 하는거임


/*

d임포트한게 컴포트랑 컴포트를 합성한 것??

리액트가 스테이트한 상태로 관리되어야한다.

Quiz)
입장 인원이 있고
증가 버튼의 이벤트를 통해서 버튼이 클릭될 때마다인원 증가시키고
해당인원이 꽉 차면 입장버튼을 비활성화시키고
감소버튼의 이벤트를 통해서 버튼이 클릭될 때마다 인원 감소시키고
입장버튼을 활성화

reactive state 상태를 관리할 예정(증가 버튼 클릭시 입장 인원을 화면에 출력시킬 것)

양방향으로 데이터 싱크
데이터 동기화..

핸들러안에 스크립트형식이기때문에 화살표 ㅎ함수를 써야한다?
또는 핸들러를 직접적으로 호출한다.
*/


const CapacityPage = () => {

    const capacity = 10;
    const [cnt, setCnt] = useState(0);

    const upCntHandler = () => {
        console.log(">>>> upCntHandler call")
        setCnt( cnt => cnt + 1); //람다식 쓴 거임.
        //console.log(">>>> cnt ++" , cnt);
    }


    const downCntHandler = () => {
        console.log(">>>> downCntHandler call")
        setCnt(cnt => cnt - 1);
        //console.log(">>>> cnt --" , cnt);
    }

    useEffect( () => {
        console.log(">>>> useEffect call")
        console.log(">>> cnt " , cnt);
        setFull( cnt >= capacity)
    }, [cnt]);


    return(
        <dic>
            <p>
                입장인원: {cnt}
            </p>
            <Button title="입장" onClick={ () => upCntHandler()}/>
            <Button title="퇴장" onClick={ () => downCntHandler()}/>
                {
                    full && <p style={{color: "red"}}> 정원이 가득찼습니다.</p>
                }
        </dic>
    )

}

export default CapacityPage;