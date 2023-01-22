import axios from "axios";
import { createContext, useState, useEffect, ReactNode } from "react";
import { toast } from "react-toastify";

interface requestBody{
    amount: string,
    installments: string,
    mdr: string
}

interface Antecipation{
    1?: number,
    15?: number,
    30?: number,
    90?: number
}

interface contextData{
    getAntecipation: (data: any) => void;
    antecipation: Antecipation | undefined;
}

interface providerProps{
    children: ReactNode
}

export const context = createContext({} as contextData)

export const ContextProvider = ({children}: providerProps) => {

    const [entry, setEntry] = useState()
    const [antecipation, setAntecipation] = useState()


    const getAntecipation = (data: any) => {
        setEntry(data)
    }

    useEffect(() => {
        if(entry){
            axios.post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", entry)
            .then(res => {
                console.log(res)
                setAntecipation(res.data)
            
                res.status === 200 && toast.success('Antecipação concluída', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                    

                
            })
            .catch(err =>{
            
            err.response.status === 408 && toast.error('Connection TimeOut', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });

            err.response.status === 500 && toast.warn('Algo deu errado!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                })
                
            })
            
           
            

        }


    }, [entry])
    
    return(
        <context.Provider value={{
            getAntecipation,
            antecipation,
            }}>
            {children}
        </context.Provider>
    )
}