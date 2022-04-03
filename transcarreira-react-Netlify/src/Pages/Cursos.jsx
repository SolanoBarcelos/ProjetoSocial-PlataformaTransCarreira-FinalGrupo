import React from "react";
export default function Cursos() {
  return (

    <>
    
    <main>
        {/* <div id="btnsCadLog" className="container">
            <a href="./Cadastro.html"><Button id="formBotaoCurso">Cadastro</Button></a>
            <a href="./Login.html"><Button id="formBotaoCurso">Já sou alune</Button></a>
        </div> */}
        <section>
            <div className="container">
                <div className="vagas_titulo my-5">
                    <h2>Plataformas de Cursos</h2>
                </div>
                <div  id="espacoErrado" className="row justify-content-center my-5">
                    <div className="col-sm">
                        <div className="card text-center bg-light border-dark" style={{width: "30rem", height: "40rem"}}>
                            <div className="card-body">
                                <h3 id="tituloCursos" className="card-title mb-3 border-dark">DIO</h3>
                                <p className="card-text">O seu propósito é democratizar o conhecimento em
                                    desenvolvimento de software
                                    para acelerar a formação de milhões de talentos digitais, conectando-os com
                                    grandes oportunidades em empresas inovadoras.</p>
                                <div>
                                    <a id="btnCursos" className="btn btn-lg botao mt-3" target="_blank"
                                        href="https://www.dio.me/">Inscreva-se</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                    <div className="card text-center bg-light border-dark" style={{width: "30rem", height: "40rem"}}>
                            <div className="card-body">
                                <h3 id="tituloCursos" className="card-title mb-3 border-dark">Escola Virtual GO</h3>
                                <p className="card-text">Cursos on-lines e gratuitos de várias áreas de conhecimento
                                    para o desenvolvimento da Administração Pública e da Sociedade.</p>
                                <div>
                                    <a id="btnCursos" className="btn btn-lg botao mt-3" target="_blank"
                                        href="https://www.escolavirtual.gov.br/">Inscreva-se</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                    <div className="card text-center bg-light border-dark" style={{width: "30rem", height: "40rem"}}>
                            <div className="card-body">
                                <h3 id="tituloCursos" className="card-title mb-3 border-dark">Fundação Bradesco</h3>
                                <p className="card-text">São mais de 90 cursos para você estudar, enriquecer seu
                                    currículo e
                                    aumentar suas chances de ingresso no mercado de trabalho.
                                </p>
                                <div>
                                    <a id="btnCursos" className="btn btn-lg botao mt-3" target="_blank"
                                        href="https://www.ev.org.br/">Inscreva-se</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row justify-content-center">
                    <div className="col-sm">
                    <div className="card text-center bg-light border-dark" style={{width: "30rem", height: "40rem"}}>
                            <div className="card-body">
                                <h3 id="tituloCursos" className="card-title mb-3 border-dark">Geração Crescer</h3>
                                <p className="card-text">A cada curso que você concluir, você receberá um
                                    certificado do
                                    Geração Crescer. Isso é superimportante para que os empregadores possam saber
                                    sobre sua
                                    qualificação profissional.
                                    E é claro que seus certificados serão um diferencial na hora da contratação.</p>
                                <div>
                                    <a id="btnCursos" className="btn btn-lg botao mt-3" target="_blank"
                                        href="https://geracaocrescer.org.br/web/">Inscreva-se</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                    <div className="card text-center bg-light border-dark" style={{width: "30rem", height: "40rem"}}>
                            <div className="card-body">
                                <h3 id="tituloCursos" className="card-title mb-3 border-dark">edX</h3>
                                <p className="card-text">
                                    Como uma organização orientada para a missão, buscam incansavelmente sua visão
                                    de um mundo onde cada aluno pode acessar a educação para liberar seu potencial,
                                    sem as barreiras de custo ou localização.
                                </p>
                                <div>
                                    <a id="btnCursos" className="btn btn-lg botao mt-3" target="_blank"
                                        href="http://www.edx.org/">Inscreva-se</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                    <div className="card text-center bg-light border-dark" style={{width: "30rem", height: "40rem"}}>
                            <div className="card-body">
                                <h3 id="tituloCursos" className="card-title mb-3 border-dark">Coursera</h3>
                                <p className="card-text">
                                    Possui parceria com mais de 200 universidades e empresas para oferecer
                                    aprendizado on-line, acessível e relevante para o trabalho e
                                    organizações em todo o mundo. Há muitas oportunidades de aprendizado,
                                    desde projetos e cursos práticos e programas de graduação
                                    prontos para o trabalho.
                                </p>
                                <div>
                                    <a id="btnCursos" className="btn btn-lg botao mt-3" target="_blank"
                                        href="https://www.coursera.org/">Inscreva-se</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

      </main>
    
    </>

  );
}