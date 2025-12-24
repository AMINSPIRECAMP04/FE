import React, { useState } from "react";
import styled from "styled-components";
import api from "../../api/axios";
import { useNavigate, Link } from "react-router-dom";

//Link를 써야 컴포지션 트랜지션이 됨.. 앵커?를 쓰면 안됨

// Container
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

// Form Box
const FormWrapper = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0,0,0,0.1);
  width: 400px;
`;

// Title
const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

// Input
const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0,123,255,0.3);
  }
`;

// Button
const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`

// Link
const TextLink = styled.p`
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  color: #007bff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const SignUp = () => {

    const [form, setForm] = useState({
        name : '',
        email : '',
        password: ''
    })

    const handlerChange = (e) => {
        // e.target.name
        // e.target.value

        //이거를 구조분할 해서

        const {name, value} = e.target;

        //기존값을 유지하면서 현재 입력된 필드에 대한 업데이트
        setForm({...form, [name] : value })

    }

    //해당 이벤트 함수 호출시 서버에 데이터(name, email, password) : json 전달
    //반드시 유효성 체크

    //이걸 통해서 라우트에 해당하는 path를..~~
    const moveUrl = useNavigate();

    // 해당 이벤트 함수 호출시 서버에 데이터(name, email, passwod) : json  전달 
    // 반드시  유효성 체크  
    const handlerSubmit = async (e) => {
        
        e.preventDefault() ; //이벤트 버블링 방지

        console.log(">>>> sigup submit call");
        try{
            //api가 axios다. 
            /*
            CRUD
            creat, read, update, delete
            axios를 통해서 통신을 하다보면
            - insert: post(새로운 자원을 생성)
            - read: get(자원을 조회)
            - update: put(전체 리소스 수정), patch(일부 리소스를 수정) 
            - delete: delete(자원 삭제)
            */
            const response = await api.post("/users" , {
                name : form.name ,
                email : form.email,
                password : form.password
            })
            console.log(">>>> axios success : " , response );     
            moveUrl("/login"); 
        } catch (err) {
            console.log(">>>> axios err : " , err );    
        }
    }

    return(
        <Container>
            <FormWrapper>
                <Title> 회원가입</Title>
                <form onSubmit={handlerSubmit}>
                    <Input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handlerChange}
                        placeholder="name" />
                        <Input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handlerChange}
                        placeholder="email" />
                        <Input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handlerChange}
                        placeholder="password" />
                        <Button type="submit">가입하기</Button>
                </form>
                <TextLink as={Link} to="/login">로그인</TextLink>
                
            </FormWrapper>
        </Container>
    )
}


// <TextLink as={Link} to="/login">로그인</TextLink> 이렇게 해서 컴포지션 트랜지션 구현

export default SignUp