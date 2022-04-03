import React from "react";

export default function QuemSomos() {
  return (

    <>
    
    <main>
        
        <div className="container">

            <section>

                <div className="vagas_titulo my-5">
                    <h2>Quem somos</h2>
                </div>

                <div id="quemSomos">
                <p>O Programa Recode Pro visa a formação em tecnologia e a empregabilidade de pessoas de 18 a 39
                    anos,
                    em situação de maior vulnerabilidade social, como programadores full stack.</p>

                <p>Paticipantes do programa Recode Pro, itegrantes do Squad 15, que tem o objetivo de propor uma
                    solução tecnologica
                    para o problema de acesso a educação, qualificação e empregabilidade da população transxexual e
                    trangênere da cidade de BH e região metropolitana.</p>

                <p>A plataforma TransCarreira propoem um ambiente on line onde pessoas trans possam se qualificar e
                    conectar-se a ao mercado de trabalho, e empresas que ja possuem boas praticas de diversidade e
                    inclusão.</p>
                </div>

                <div className="vagas_titulo my-5">
                    <h2>Participates</h2>
                </div>

            </section>

            <section>

                    <div className="membros">

                        <div id="cardQuemSomos" className="card" style={{width: "30rem"}}>
                            <img  className="card-img" width="80px" height="250px" src="../Imagens/Wash.jpeg" alt="Foto Integrande Washington"/>
                            <div id="divQuemSomos" className="card-body">
                                <p id="nomeQuemSomos" className="card-text">Washington</p>
                                <br/>
                                <a className="redesSociais" target="_blank" href="https://github.com/WashMarvin">  GitHub  </a>
                                <a className="redesSociais" target="_blank" href="https://www.linkedin.com/in/washington-santos-714a8031/">Linkedin</a>
                            </div>
                        </div>

                        <div id="cardQuemSomos" className="card" style={{width: "30rem"}}>
                            <img  className="card-img" width="80px" height="250px" src="../Imagens/Camila.jpeg" alt="Foto Integrande Camila"/>
                                <div id="divQuemSomos" className="card-body">
                                <p id="nomeQuemSomos" className="card-text">Camila</p>
                                <br/>
                                <a className="redesSociais" target="_blank" href="">  GitHub  </a>
                                <a className="redesSociais" target="_blank" href="">Linkedin</a>
                            
                            </div>
                        </div>

                        <div id="cardQuemSomos" className="card" style={{width: "30rem"}}>
                            <img  className="card-img" width="80px" height="250px" src="../Imagens/Solano.jpeg" alt="Foto Integrande Solano"/>
                            <div id="divQuemSomos" className="card-body">
                                <p id="nomeQuemSomos" className="card-text">Solano</p>
                                <br/>
                                <a className="redesSociais" target="_blank" href="https://github.com/SolanoBarcelos">  GitHub  </a>
                                <a className="redesSociais" target="_blank" href="https://www.linkedin.com/in/solanobarcelos/">Linkedin</a>
                            </div>
                        </div>

                    </div>

                    <div className="membros">

                    <div id="cardQuemSomos" className="card" style={{width: "30rem"}}>
                            <img className="card-img" width="80px" height="250px" src="../Imagens/Willy.jpeg" alt="Foto Integrande Willi"/>
                            <div id="divQuemSomos" className="card-body">
                                <p id="nomeQuemSomos" className="card-text">Williane</p>
                                <br/>
                                <a className="redesSociais" target="_blank" href="https://github.com/willyfelix">  GitHub  </a>
                                <a className="redesSociais" target="_blank" href="https://www.linkedin.com/in/willianefelix/">Linkedin</a>
                            </div>
                        </div>

                        <div id="cardQuemSomos" className="card" style={{width: "30rem"}}>
                            <img className="card-img" width="80px" height="250px" src="../Imagens/Vini.jpeg" alt="Foto Integrande Vinicios"/>
                            <div id="divQuemSomos" className="card-body">
                                <p id="nomeQuemSomos" classname="card-text">Vinicios</p>
                                <br/>
                                <a className="redesSociais" target="_blank" href="https://github.com/vntsmatos">  GitHub  </a>
                                <a className="redesSociais" target="_blank" href="https://www.linkedin.com/in/vnmatos">Linkedin</a>
                            </div>
                        </div>

                        <div id="cardQuemSomos" className="card" style={{width: "30rem"}}>
                            <img className="card-img" width="80px" height="250px" src="../Imagens/Marcos.jpeg" alt="Foto Integrande marcoss"/>
                            <div id="divQuemSomos" className="card-body">
                                <p id="nomeQuemSomos" className="card-text">Marcos</p>
                                <br/>
                                <a className="redesSociais" target="_blank" href="">  GitHub  </a>
                                <a className="redesSociais" target="_blank" href="">Linkedin</a>
                            </div>
                        </div>

                    </div>

            </section>

        </div>

    </main>
    
    </>

  );
}