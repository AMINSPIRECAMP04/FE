
import { useState,useEffect } from 'react';
import api from '../../api/axios';


const BlogJsonPage = () => {
    console.log(">>>> BlogJsonPage load event")
    //const data = null; //선언시점에 할당
    //let data = null;

    const [ary, setAry] = useState([]); //0을 줘서 테스트를 진행할 수는 있지만 좋은 방법은 아님. 동적으로 렌더링 해야되기 때문에 비어둠
    //이런 문제를 해결하기 위해 옵셔널 체이닝이라는 문법을 사용할 수 있음. es6 문법? ?. 이거임

    const getBlogs = async () => {
        const response = await api.get('/blogs');
        console.log("response >>>");
        //data = response.data; //재할당
        setAry(response.data);

        //console.log(data);
        //console.log(data[0].title);
        console.log(ary);
        console.log(ary[0]?.title);
    };

    useEffect(() => {
        getBlogs();
    },[])
    // getBlogs(); 이렇게 말고 useEffect을 써야한다.

    return (
    <dic>
        { `data - ${ary[0]?.title}` } 
    </dic>
    //에러이유: 비동기가 끝나지 않았는데 접근해서 화면에 안뜸
    //상태, 사이드 이펙으로 무언가 처리가 되어야한다.
    //오늘 제일 중요한 건 훅임 템플릿 UI와 싱크될 수 있다.
    //사이드이펙 작업도 필요할 수 있다.
)
}

export default BlogJsonPage;