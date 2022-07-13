import { ReactNode, useState } from 'react';
import { createContext, useContext, useContextSelector } from 'use-context-selector'

interface AuthContext{
    user?: IUser
    setUser: (user:IUser)=>void
}

const context = createContext({} as AuthContext);

export const AuthProvider =({ children }:{children: ReactNode })=>{
    const [User, setUser] = useState<IUser>()
    return(
        <context.Provider 
            value={{
                user: User,
                setUser:(user)=>{
                    console.log(user)
                    setUser(user)
                },
            }}
        >
            {children}
        </context.Provider>
    )
}

export const useAuth=()=>{
    const Auth = useContext(context);
    if (!Auth) {
        throw new Error("This hook should be used inside a 'Auth Provide'.");
    }
    return Auth
}

export function useAuthSelected<Selected>(
    selector: (value: AuthContext) => Selected
  ): Selected {
    return useContextSelector(context, (Auth) => {
      if (!Auth) {
        throw new Error("This hook should be used inside a 'Game Provide'.")
      } else {
        return selector(Auth)
      }
    })
}