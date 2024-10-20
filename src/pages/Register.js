import { useState } from "react";
import {
    All, TitleRegister, Mandatory, RegistrationData, Inputs, TitleInput,
    Position, FinishBack, EnterRegister, ToGoBack, RegistrationLogoPhoto,
    UploadPhotoContainer, UploadPhotoContent, UploadText
} from "../assets/Styles/RegisterStyled";
import Logo from "../assets/images/logo_bleck.svg";
import Arrow from "../assets/images/arrow-uturn-left.png";
import { CiCamera } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


export default function Register() {
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [nameUser, setNameUser] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [namePosition, setNamePosition] = useState('')
    const [administrator, setAdministrator] = useState(false)
    const [photo, setPhoto] = useState('');
    const navigate = useNavigate()

    const handlePhotoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRegister = async () => {
        if (password === confirmPassword) {
            if (namePosition === "Administrador") {
                setAdministrator(true)
            }
            try {
                const urlRequest = `${process.env.REACT_APP_API_URL}/register`;
                const data = {
                    name, cpf, email, nameUser, password,
                    administrator: administrator,
                    photo: photo ? photo : null
                }
                const response = await axios.post(urlRequest, data);
                if (response.status !== 201) {
                    throw new Error('Erro ao registrar');
                }
                setName('')
                setCpf('')
                setEmail('')
                setNameUser('')
                setPassword('')
                setConfirmPassword('')
                setNamePosition('')
                setAdministrator(false)
                setPhoto('');
                navigate("/");
            } catch (error) {
                const errorMessage = error.response ? error.response.data.message : "Erro desconhecido. Tente novamente mais tarde.";
                alert(errorMessage);
                console.error(error);
            }
        } else {
            setPassword('')
            setConfirmPassword('')
            alert("Senhas não correspondem, tente novamente ")
        }
    };


    return (
        <All>
            <RegistrationLogoPhoto>
                <img src={Logo} alt="Logo da Txai" />
                <div>
                    <TitleRegister>Faça seu cadastro</TitleRegister>
                    <Mandatory>*Campos obrigatórios</Mandatory>
                </div>
                <UploadPhotoContainer>
                    {photo !== 0 && (
                        <img
                            src={photo}
                            style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '50%' }}
                            alt=""
                        />
                    )}
                    <label htmlFor="upload-photo">
                        <UploadPhotoContent>
                            <CiCamera style={{ zIndex: '2', height: '45px', width: '50px', color: '#579191' }} />
                        </UploadPhotoContent>
                        <UploadText>Carregar foto</UploadText>
                    </label>
                    <input
                        type="file"
                        id="upload-photo"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handlePhotoUpload}
                    />
                </UploadPhotoContainer>
            </RegistrationLogoPhoto>

            <RegistrationData  >
                <TitleInput>
                    <p>*Nome completo</p>
                    <Inputs
                        className="value-rule"
                        placeholder="Insira seu nome completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}>
                    </Inputs>
                </TitleInput>
                <TitleInput>
                    <p>*CPF</p>
                    <Inputs
                        className="value-rule"
                        placeholder="Insira seu CPF, somente os números"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}>
                    </Inputs>
                </TitleInput>
                <TitleInput>
                    <p>*E-mail</p>
                    <Inputs
                        className="value-rule"
                        placeholder="Insira seu melhor e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}>
                    </Inputs>
                </TitleInput>
            </RegistrationData>

            <RegistrationData>
                <TitleInput>
                    <p>*Nome de usuário</p>
                    <Inputs
                        className="value-rule"
                        placeholder="Insira um nome de usuário"
                        value={nameUser}
                        onChange={(e) => setNameUser(e.target.value)}>
                    </Inputs>
                </TitleInput>
                <TitleInput>
                    <p>*Senha</p>
                    <Inputs
                        className="value-rule"
                        placeholder="Insira sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}>
                    </Inputs>
                </TitleInput>
                <TitleInput>
                    <p>*Confirmar senha</p>
                    <Inputs
                        className="value-rule"
                        placeholder="Insira a senha novamente"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}>
                    </Inputs>
                </TitleInput>
            </RegistrationData>

            <RegistrationData>
                <TitleInput>
                    <p>*Cargo</p>
                    <Position
                        className="value-rule"
                        value={namePosition}
                        onChange={(e) => setNamePosition(e.target.value)}
                    >
                        <option value="">Selecione um cargo</option>
                        <option value="Administrador">Administrador</option>
                        <option value="Escritor/Vendedor">Escritor</option>
                    </Position>
                </TitleInput>
            </RegistrationData>

            <FinishBack>

                <ToGoBack onClick={() => { navigate("/login") }}>
                    <img src={Arrow} alt="Logo da Txai" />
                    <p>Voltar ao Login</p>
                </ToGoBack>
                <EnterRegister onClick={async () => {
                    handleRegister();
                }} >
                    Concluir cadastro
                </EnterRegister>
            </FinishBack>
        </All>

    );
}
