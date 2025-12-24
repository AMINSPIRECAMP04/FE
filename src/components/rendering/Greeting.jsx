import UserGreeting from './UserGreeting'
import GuestGreeting from './GuestGreeting'

const Greeting = (props) => {

    const isFlag = props.flag ;
    // if(isFlag){
    //     return <UserGreeting/>
    // } else {
    //     return <GuestGreeting/>
    // } -> 우리는 배운 사람이니까 이렇게 쓰지 말자

    //트루쉬풀쉬?가뭐야

    {
        return isFlag ? <UserGreeting/> : <GuestGreeting/>
    }

}

export default Greeting;