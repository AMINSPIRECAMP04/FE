import React, { useState } from "react";
import { Placeholder } from "react-bootstrap";
import styled from "styled-components";
import api from "../../api/axios";
import { useNavigate, Link } from "react-router-dom";

// Container
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

// Form Box
const FormWrapper = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  width: 350px;
`;

// Title
const Title = styled.h2`
  text-align: center;
  margin-bottom: 25px;
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
`;

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

const SignIn = () => {

    const [form, setForm] = useState({
        email : '',
        password: ''
    })
    const moveUrl = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;

        //기존값을 유지하면서 현재 입력된 필드에 대한 업데이트
        setForm({...form, [name] : value })

    }

    
    const handlerSubmit =async (e) => {

        e.preventDefault(); //이벤트 버블링 방지

        console.log(">>>> signin submit call")

        try{

            const response = await api.get("/users", {
                params: {
                email : form.email ,
                password : form.password,
                },
            });

            console.log(">>>> axios success : " , response );
            moveUrl("/")
        } catch (err) {
            console.log(">>>> axios err : " , err )
        }

        /*
        쿼리스트링
        api.get(/users?email=${}&password=${}`)

        실무 권장 방식
        api.get(`users` , {
        params : {
        email : xxxxx,
        password : xxxxx
        }
        }
        )
        */




    }
    return(
        <Container>
            <FormWrapper>
                <Title>로그인</Title>
                <form onSubmit={handlerSubmit}>
                    <Input
                        type="email"
                        name="email"
                        //실시간 싱크가 되어야 하므로 여기에 value랑 onChange 추가한다.
                        value={form.email}
                        onChange={handleChange}
                        placeholder="email" 
                        />
                        <Input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="password"
                         />
                        <Button type="submit">로그인</Button>
                </form>
                <TextLink> 비밀번호를 잊으셨나요? </TextLink>
                <TextLink as={Link} to="/">회원가입</TextLink>

            </FormWrapper>
        </Container>
    )
}

export default SignIn