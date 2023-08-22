import {useState} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function Teste () {
    let navigate = useNavigate();
    

    function cadastrarUsuario(e) {
        e.preventDefault();
        if (name === "gabriel" , senha === "123")
        navigate("/Logado", { replace: true });
    }

    const [name, setName]= useState('')
    const [senha, setSenha] = useState('')
    
    return (
    <div className="App">
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text"
                        id="name"
                        name="name"
                        placeholder="Usuario"
                        onChange={(e) => setName(e.target.value)}>
                        </input><br></br>
            </div>
            <div className='senha'>
                <label htmlFor="password">Senha:</label>
                <input type="password" 
                        id="password" 
                        name= "password" 
                        placeholder="Senha"
                        onChange={(e) => setSenha(e.target.value)}>
                </input><br></br>
            </div>
            <div className='d_bt'>
                <input type="submit" value="Cadastrar"/>
            </div>
        </form>
    </div>
    )
}

export default Teste