import {FormContainer} from "./styles"
import { useForm } from "react-hook-form"

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { DropdownButton, Dropdown, Button } from "react-bootstrap";

const validationClient = yup.object().shape({
    name: yup
        .string()
        .required("Nome completo é obrigatório")
        .max(40, "O nome só pode conter até 40 caracteres"),

    datanasc: yup
        .string()
        .required("Coloque uma data válida"),

    rg: yup
        .string()
        .required("Número de RG inválido")
        .max(8, "Digite apenas  os 8 números do seu RG"),

    cpf: yup
        .string()
        .required("Número de CPF inválido")
        .max(11, "Digite apenas os 11 números do seu CPF"),

    endereco: yup
        .string()
        .required("Endereço Inválido")
        .max(40, "O endereço só pode conter até 40 caracteres"),

    cep: yup
        .string()
        .required("CEP Inválido")
        .max(8, "Digite apenas os 8 números do seu CEP"),

    telefone: yup
        .string()
        .required("Telefone Inválido"),

    email: yup
        .string()
        .required("E-mail Inválido")
        .max(25, "Limite de caracteres excedido")


})

const FormClient = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationClient)
    })
    
    const addClient = data => console.log(data)

    return (<>

            <FormContainer>
                <div className="title">
                    <h1>Dados do Cliente</h1>
                </div>
                
                <main>
                        <div className="card-post">
                        
                        <div className="line"></div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit(addClient)}>

                                <div className="fields">
                                    <label>Nome Completo</label>
                                    <input 
                                        type="text"  
                                        name="name" {...register("name")}
                                    />
                                    <p className="error-message">{errors.name?.message}</p>
                                </div>

                                <div className="fields">
                                    <label>Data de Nascimento</label>
                                    <input 
                                        type="date"  
                                        name="datanasc" {...register("datanasc")}    
                                    />
                                    <p className="error-message">{errors.datanasc?.message}</p>
                                </div>

                                <div className="fields">
                                    <label>RG</label>
                                    <input 
                                        type="text" 
                                        name="rg" {...register("rg")}    
                                    />
                                    <p className="error-message">{errors.rg?.message}</p>
                                </div>

                                <div className="fields">
                                    <label>CPF</label>
                                    <input 
                                        type="text" 
                                        name="cpf" {...register("cpf")}     
                                    />
                                    <p className="error-message">{errors.cpf?.message}</p>
                                </div>

                                <div className="fields">
                                    <label>Endereço Residencial</label>
                                    <input 
                                        type="text"  
                                        name="endereco" {...register("endereco")}
                                    />
                                    <p className="error-message">{errors.endereco?.message}</p>
                                </div>

                                <div className="fields">
                                    <label>CEP</label>
                                    <input 
                                        type="text"  
                                        name="cep" {...register("cep")}    
                                    />
                                    <p className="error-message">{errors.cep?.message}</p>
                                </div>

                                <div className="fields">
                                    <label>Telefone</label>
                                    <input 
                                        type="text" 
                                        name="telefone" {...register("telefone")}    
                                    />
                                    <p className="error-message">{errors.telefone?.message}</p>
                                </div>

                                <div className="fields">
                                    <label>E-mail</label>
                                    <input 
                                        type="email" 
                                        name="email" {...register("email")}     
                                    />
                                    <p className="error-message">{errors.email?.message}</p>
                                </div>

                                <div className="fields">
                                    <label>Possui Veículo?</label>
                                    <select>
                                        <option>Selecione sua resposta</option>
                                        <option>Sim</option>
                                        <option>Não</option>
                                    </select>
                                    
                                    <p className="error-message">{errors.veiculo?.message}</p>
                                </div>

                                <div className="fields">
                                    <label>Marca/Modelo</label>
                                    <input 
                                        type="text"  
                                        name="marca" {...register("marca")}    
                                    />
                                    <p className="error-message">{errors.marca?.message}</p>
                                </div>

                                <div className="fields">
                                    <label>Ano do Veículo</label>
                                    <input 
                                        type="text" 
                                        name="anoVeiculo" {...register("anoVeiculo")}    
                                    />
                                    <p className="error-message">{errors.anoVeiculo?.message}</p>
                                </div>

                                <div className="fields">
                                    <label>Profissão</label>
                                    <input 
                                        type="text" 
                                        name="profissao" {...register("profissao")}     
                                    />
                                    <p className="error-message">{errors.profissao?.message}</p>
                                </div>

                                <div className="btn-post">
                                    <button type="submit" >Finalizar Cadastro</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </FormContainer>
        </>)
}

export default FormClient