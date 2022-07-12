import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import { getRepository } from "../../services/get"
import { Card, Container, Content } from "./style"

export const Home =()=>{
    const [repository, setRepository] = useState<IRepository[]>([]);
    const DataGetRepository =async()=>{
        const {data,error}= await getRepository();
        if (data) {
            setRepository(data.data)
        }else{
            toast(error)
        }
    }

    useEffect(() => {
        DataGetRepository();
    }, [])
    
    return(
        <Container>
            <Content>
                {repository?.map((rep,index)=>
                    <Card>
                        {rep.name}
                        {rep.language}
                    </Card>
                )}
            </Content>
        </Container>
    )
}