import {  } from 'react'
import "./Home.scss";
import idosoImage from '../assets/idoso.jpg';
import Medico from '../assets/medico.jpg';
import Ambulancia from '../assets/ambulancia.jpg';
import Banner from '../assets/banner.jpg';


function Home() {

  return (
    <>
    <section className="rightArea">
  <div className="textBox">
    <h1>Solução</h1>
    <p>A solução proposta é um Sistema de Dispensação de Medicamentos Automatizado, 
      projetado para simplificar a administração de medicamentos de idosos e pessoas com Alzheimer. O dispositivo, com um display intuitivo, 
      permite a fácil programação de horários de medicação. Com dispensação automática, alertas sonoros e indicadores visuais, 
      a solução promove uma abordagem organizada e consciente na gestão diária de medicamentos.</p>
  </div>
  <div className="textBox">
    <h1>O que Faz</h1>
    <p>O sistema opera com ênfase na praticidade e segurança. O usuário configura os horários desejados no display, desencadeando a dispensação automática. 
      Alertas sonoros e indicadores visuais notificam o usuário, garantindo uma administração de medicamentos eficiente e livre de esquecimentos. 
      Adicionalmente, a solução inclui um microfone integrado para chamadas de emergência, proporcionando uma camada adicional de segurança em situações críticas.</p>
  </div>
  <div className="textBox">
    <h1>Como Funcionara</h1>
    <p>A solução proporciona uma administração eficaz e organizada de medicamentos, melhorando a adesão ao tratamento. 
      A comunicação de dados ao médico via aplicativo permite monitoramento remoto para intervenções oportunas. 
      Integrando praticidade, segurança e inovação, o Sistema de Dispensação de Medicamentos Automatizado 
      busca melhorar significativamente a qualidade de vida dos usuários com suporte adaptado às suas necessidades específicas.</p>
  </div>
</section>
    <section className="banner">
    <img src={Banner} alt='Idosos'/>
     </section>
     <section className='titulo'><h1>Sistema de Dispensação de Medicamentos Automatizado</h1></section>
     <section className="texto2">O Dispositivo de Assistência Medicamentosa simplifica a administração de medicamentos, permitindo que o usuário programe os horários desejados. Com dispensação automática, alertas sonoros e indicadores visuais, evita esquecimentos. Em emergências, o microfone aciona chamadas para serviços de socorro. Além disso, envia automaticamente dados de medicação ao médico via aplicativo para monitoramento remoto, proporcionando uma abordagem abrangente e eficaz na gestão da saúde.</section>
      <section className="destaque">
        <article>
          <img className="image-class" src={idosoImage} alt="idoso" />
          <div>
            <h1>Benefícios</h1>
            <p>As vantagens para os idosos incluem uma administração eficaz e organizada de medicamentos, 
              com alertas sonoros e indicadores visuais para evitar esquecimentos. Isso resulta em maior adesão ao tratamento, 
              promovendo uma rotina de medicação consistente e melhor qualidade de vida.</p>
          </div>
        </article>

        <article>
          <img className="image-class" src={Medico} alt="medico" />
          <div>
            <h1>Aplicativo</h1>
            <p>O dispositivo envia automaticamente dados de administração de medicamentos ao médico por meio do aplicativo associado, 
              permitindo monitoramento remoto em tempo real para intervenções oportunas.</p>
          </div>
        </article>

        <article>
          <img className="image-class" src={Ambulancia} alt="ambulancia" />
          <div>
            <h1>Sistema de Segurança</h1>
            <p>O mecanismo da ambulância é ativado pelo usuário ao pronunciar "socorro". 
              O microfone integrado inicia uma chamada em tempo real com o serviço de emergência, 
              permitindo que o usuário solicite assistência específica, como ambulância, bombeiros ou polícia. 
              Esse processo visa garantir resposta rápida e adequada em situações críticas.</p>
          </div>
        </article>
      </section>
    </>
  )
}

export default Home
