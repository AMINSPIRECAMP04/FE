import {BrowserRouter, Route, Routes} from 'react-router-dom'
import styled from 'styled-components';
import SignIn from './feature/user/signin';
import SignUp from './feature/user/signup';

const TitleDiv = styled.p`
font-size: 24px;
font-weigh: bold;
text-aliogn: center;
`

const BlogApp = () => {
    return(
        <BrowserRouter>
            <TitleDiv>
                AM Inspire Camp 4th Lgcns
            </TitleDiv>
            <Routes>
                <Route path='/' element={<SignUp/>}/>
                <Route path='/login' element={<SignIn/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export default BlogApp;