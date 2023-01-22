import { useContext } from "react";
import { useForm } from "react-hook-form";
import { context } from "../../providers";
import { Form } from "./style";



const Formulário = () => {

    

    const { register, handleSubmit } = useForm()

    const { getAntecipation } = useContext(context)

    return(
        <>
            <Form>
                <h1>Simule sua Antecipação</h1>
                <form className="form" onSubmit={handleSubmit(getAntecipation)}>
                    <label>Informe o valor da venda *</label>
                    <input type="number" {...register("amount")}/>
                    <label>Em quantas parcelas *</label>
                    <input type="number" {...register("installments")}/>
                    <label>Informe o percentual de MDR *</label>
                    <input type="number" {...register("mdr")}/>
                    <button type="submit">Submit</button>
                </form>
            </Form>
            
        </>
    )
}

export default Formulário