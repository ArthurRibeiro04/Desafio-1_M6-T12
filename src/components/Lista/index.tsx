import { useContext } from "react";
import { context } from "../../providers";
import { Lista } from "./style";



const ListaRecebimentos = () => {

    const { antecipation } = useContext(context)

    const montarLista = () => {
        return(
            <ul>
                { antecipation?.[1] &&
                    <li>
                        <p>Amanhã:</p>
                        <span>R${antecipation[1]},00</span>
                    </li>
                }
                { antecipation?.[15] &&
                    <li>
                        <p>Em 15 dias:</p>
                        <span>R${antecipation[15]},00</span>
                    </li>
                }
                { antecipation?.[30] &&
                    <li>
                        <p>Em 30 dias:</p>
                        <span>R${antecipation[30]},00</span>
                    </li>
                }
                { antecipation?.[90] &&
                    <li>
                        <p>Em 90 dias:</p>
                        <span>R${antecipation[90]},00</span>
                    </li>
                }
            </ul>
        )
    }

    return(
        <Lista>
            <h2>Você receberá:</h2>
            { antecipation &&
                montarLista()
            }
        </Lista>
        
    )
}

export default ListaRecebimentos