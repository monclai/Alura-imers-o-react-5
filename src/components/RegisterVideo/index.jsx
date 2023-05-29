import { useState } from "react";
import { StyledRegisterVideo } from "./styles";

//Custom Hook
function useForm(propsDoForm) {
    const [values, setValues] = useState(propsDoForm.initialValues);
    const [thumbImg, setThumbImg] = useState("https://img.youtube.com/vi/undefined/mqdefault.jpg");

    return {
        values,
        thumbImg,
        handleChange: 
            (evento) => {
                const value = evento.target.value;
                const name = evento.target.name;
                setValues({
                    ...values, 
                    [name]: value
                })
            },
            handleBlurUrl: 
                (evento) => {
                    evento.preventDefault()
                    setThumbImg(`https://img.youtube.com/vi/${values.url.split("=")[1]}/mqdefault.jpg`)
                    console.log('url code: ', thumbImg);
                },
            clearForm(){
                setValues({});
                setThumbImg("");
            }        
    };
}

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: { titulo: "Frost punk", url: "https://youtube..." }
    });
    const [formVisivel, setFormVisivel] = useState(false);


    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel ? (
                <form onSubmit={(evento) => {
                    evento.preventDefault();
                    setFormVisivel(false);
                    formCadastro.clearForm();
                }}>
                    <div>
                        <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                            x
                        </button>
                        <input placeholder="Titulo do vídeo" name="titulo" data-tipo="titulo1" value={formCadastro.values.titulo} onChange={formCadastro.handleChange} />
                        <input placeholder="URL" name="url" value={formCadastro.values.url} onChange={formCadastro.handleChange} onBlur={formCadastro.handleBlurUrl}/>
                        <button type="submit">Cadastrar</button>
                        <img src={formCadastro.thumbImg} alt="imagem video youtube" />
                        <p>{formCadastro.values.titulo}</p>
                    </div>
                </form>
            ) : false}
        </StyledRegisterVideo>
    )
}
