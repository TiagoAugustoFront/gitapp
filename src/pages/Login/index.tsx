import { useState } from "react"
import { getUser } from "../../services/get"
import { Button, Container, Content, ContentInput, Input, Label, Title } from "./style"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useAuthSelected } from "../../context/auth";

export const Login =()=>{
    const [Name, setName] = useState<string>('')
    let history = useNavigate();
    const {setUser} = useAuth()
    const DataGetUser =async(name:string)=>{
        const {data,error} = await getUser(Name);
        if (data) {
            setUser(data.data)
            console.log(data.data)
            history('/home')
        }else{
            alert("Nome de usuario invalido!")
        }
    }
    
    return(
        <Container>
            <Content>
                <Title>Informe o usuario do seu github</Title>
                <ContentInput>
                    <Input onChange={(e)=>{
                        setName(e.currentTarget.value);
                    }}/>
                </ContentInput>
                <Button onClick={()=>{
                    DataGetUser(Name);
                }}>Entrar</Button>
            </Content>
        </Container>
    )
}