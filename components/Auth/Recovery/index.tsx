// import * as S from '../styles/styles'
// import { useForm } from 'react-hook-form';
// import logo from "../../assets/img/visao.png"
// import linkedin from "../../../public/images/linkedin.png"
// import instagram from "../../assets/img/instagram.png"
// import youtube from "../../assets/img/youtube2.png"
// import whatsapp from "../../assets/img/whatsapp2.png"
// import Link from 'next/link';
// export default function SectionLogin() {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     return (
//         <S.Container>
//             <div className="contact-form">
//                 <header>
//                     <Link href="/">
//                         <img src="images/logo-white.svg" alt="Logo da Pizzaria do Mylti a imagem do hamburguer" />
//                     </Link>
//                 </header>
//                 <form >
//                     <h1>Cadastrar Nova Senha</h1>
//                     <div className="fields">
//                         <div className="field">
//                             <input
//                                 type="password"
//                                 placeholder=" Nova Senha"
//                                 {...register("Senha", { required: true, maxLength: 80 })}
//                             />
//                         </div>
//                         <div className="field">
//                             <input
//                                 type="password"
//                                 placeholder="Confirme sua Senha"
//                                 {...register("Senha", { required: true, maxLength: 80 })}
//                             />
//                         </div>

//                     </div>
//                     <div className="container-btn">
//                         <button type="submit" className="btn">Redefinir</button>
//                     </div>
//                 </form>
//             </div>

//         </S.Container>
//     )
// }
