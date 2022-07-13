import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthSelected } from "../../context/auth";
import { getRepository } from "../../services/get"
import { Card, CardTitle, Container, Content, ContentCard, ContentChebox, ContentCheboxOrder, ContentOrder, Header, Input, TextLanguage } from "./style"

export const Home =()=>{
    const [repository, setRepository] = useState<IRepository[]>([]);
    const [repositoryFilter, setRepositoryFilter] = useState<IRepository[]>([]);

    const [loading, setLoading] = useState<boolean>(true)

    const [archived, setArchived] = useState(false)
    const [fork, setFork] = useState(false)
    const [disable, setDisable] = useState(false)

    const user = useAuthSelected((context) => context.user)
    let history = useNavigate();

    const DataGetRepository =async()=>{
        const {data,error}= await getRepository(`${user?.login}`)
        .finally(()=>setLoading(false));
        if (data) {
            setRepository(data.data)
            setRepositoryFilter(data.data)
        }else{
            toast(error)
        }
    }

    const SortRepo=(a:string,b:string)=>{
        return a.localeCompare(b)
    }

    const FilterRepo=(search:string,archique?:boolean)=>{
        if(search == undefined || search == null || search == ""){
            console.log("aqui")
            setRepositoryFilter(repository)
        }else{
            console.log(search)
            setRepositoryFilter(repository.filter(x=>x.name.toLowerCase()
            .indexOf(search?.toLowerCase()) > -1))
        }
    }

    console.log(repositoryFilter)

    useEffect(() => {
        if (user) {
            DataGetRepository();
        }else{
            history("/")

        }
    }, [user])

    return(
        <Container>
            <Content>
                <Header>
                    <Input type="text" onChange={(e)=>{
                        FilterRepo(e.currentTarget.value)
                    }}/>
                    <ContentChebox>
                        <input type="checkbox" onChange={()=>{
                            setArchived(!archived)
                        }}/>
                        <p>Arquivados</p>
                    </ContentChebox>
                    <ContentChebox>
                        <input type="checkbox" onChange={()=>{
                            setFork(!fork)
                        }}/>
                        <p>Forks</p>
                    </ContentChebox>
                    <ContentChebox>
                        <input type="checkbox" onChange={()=>{
                            setDisable(!disable)
                        }}/>
                        <p>desabilitados</p>
                    </ContentChebox>
                </Header>
                {/* .sort((a,b)=>SortRepo(a.updated_at,b.updated_at)) */}
                <ContentCard>
                    <ContentOrder>
                        <h3>ordenar por:</h3>
                        <ContentCheboxOrder>
                            <select onChange={(e)=>{
                                console.log(e.currentTarget.value)
                                if (e.currentTarget.value === "alfabetica"){
                                    let value:IRepository[] = []
                                    repositoryFilter.sort((a,b)=>SortRepo(a.name,b.name)).map(x=>value.push(x))
                                    return setRepositoryFilter(value)
                                }
                                if (e.currentTarget.value === "commit") {
                                    let value:IRepository[] = []
                                    repositoryFilter.sort((a,b)=>SortRepo(a.updated_at,b.updated_at)).reverse().map(x=>value.push(x))
                                    return setRepositoryFilter(value)
                                }
                            }}>
                                <option value="alfabetica">A-Z</option>
                                <option value="commit">commit</option>
                            </select>
                        </ContentCheboxOrder>
                    </ContentOrder>
                    {repositoryFilter?.filter((x)=>{
                        if(archived && fork && disable) return x.archived == archived && x.fork == fork && x.disabled == disable
                        if(archived && fork) return x.archived == archived && x.fork == fork
                        if(archived && disable) return x.archived == archived && x.disabled == disable
                        if(fork && disable) return x.fork == fork && x.disabled == disable
                        if(archived) return x.archived == archived 
                        if(fork) return x.fork == fork
                        if(disable) return x.disabled == disable
                        return x
                    }).map((rep,index)=>
                        <Card key={rep.id}>
                            <CardTitle>{rep.name}</CardTitle>
                            <TextLanguage>{rep.language? rep.language : '-----'}</TextLanguage>
                        </Card>
                    )}
                </ContentCard>
            </Content>
        </Container>
    )
}