import React, { useEffect, useState } from "react";


export default function VagasEmprego() {

  return (

    <>
    
    <main>
        <section>

            <div className="container">

                    <div className="vagas_titulo my-5">
                        <h2>Vagas</h2>
                    </div>

                    <div id="CardsVagasCursos" className="row justify-content-center my-5">

                        <div className="col-sm">
                            <div className="card border-dark mb-3" style={{maxWidth: "30rem", height: "30rem"}}>
                                <div id= "vagaCidade" className="card-header border-dark">Uberlândia - MG</div>
                                <div className="card-body text-second">
                                    <h3 id="vaga" className="card-title mt-3 mb-4">Gerente de Loja</h3>

                                    <h4 className="card-text">Forever 21</h4>
                                </div>
                                <div>
                                    <a id="btnCandidatar" className="btn btn-lg botao" target="_blank"
                                        href="https://www.transempregos.com.br/op/53d03718-4e44-4b02-b6e9-36eb6e368381">Candidatar-se</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="card border-dark mb-3" style={{maxWidth: "30rem", height: "30rem"}}>
                                <div id= "vagaCidade" className="card-header border-dark">São Paulo - SP</div>
                                <div className="card-body text-second">
                                    <h3 className="card-title mt-3 mb-4">Auxiliar Administrativo</h3>
                                    <h4 className="card-text">Condumax Incesa</h4>
                                </div>
                                <div>
                                    <a id="btnCandidatar" className="btn btn-lg botao" target="_blank"
                                        href="https://www.transempregos.com.br/op/565d2987-d82c-4841-ac69-bebc69acff90">Candidatar-se</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="card border-dark mb-3" style={{maxWidth: "30rem", height: "30rem"}}>
                                <div id= "vagaCidade" className="card-header border-dark">Osasco - SP</div>
                                <div className="card-body text-second">
                                    <h3 className="card-title mt-3 mb-4">Programa de Estágio</h3>
                                    <h4 className="card-text">Jequiti</h4>
                                </div>
                                <div>
                                    <a id="btnCandidatar" className="btn btn-lg botao" target="_blank"
                                        href="https://www.transempregos.com.br/op/12fb7a85-4918-4f1a-a95b-f7f730778191">Candidatar-se</a>
                                </div>
                            </div>
                        </div> 

                    </div>

                    <div id="CardsVagasCursos" className="row justify-content-center">
                        <div className="col-sm">
                            <div className="card border-dark mb-3" style={{maxWidth: "30rem", height: "30rem"}}>
                                <div id= "vagaCidade" className="card-header border-dark">Porto Alegre - RS</div>
                                <div className="card-body text-second">
                                    <h3 className="card-title mt-3 mb-4">Supervisor(a/e) de Costumer Experience</h3> 
                                    <h4 className="card-text">Tecredi Tecnologia</h4>
                                </div>
                                <div>
                                    <a id="btnCandidatar" className="btn btn-lg botao" target="_blank"
                                        href="https://www.transempregos.com.br/op/8d67dc04-3934-49c7-b875-519e02d635cd">Candidatar-se</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="card border-dark mb-3" style={{maxWidth: "30rem", height: "30rem"}}>
                                <div id= "vagaCidade" className=" card-header border-dark">São Paulo - SP</div>
                                <div className="card-body text-second">
                                    <h3 className="card-title mt-3 mb-4">Auxiliar de Cozinha</h3>
                                    <h4 className="card-text">Let's Poke</h4>
                                </div>
                                <div>
                                    <a id="btnCandidatar" className="btn btn-lg botao" target="_blank"
                                        href="https://www.transempregos.com.br/op/f164aa8a-8b91-47bd-9587-b9443659a660">Candidatar-se</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="card border-dark mb-3" style={{maxWidth: "30rem", height: "30rem"}}>
                                <div id= "vagaCidade" className=" card-header border-dark">Barueri - SP</div>
                                <div className="card-body text-second">
                                    <h3 className="card-title mt-3 mb-4">Estágio em Infraestrutura (TI)</h3>
                                    <h4 className="card-text">EF English Live</h4>
                                </div>

                                <div>
                                    <a id="btnCandidatar" className="btn btn-lg botao" target="_blank"
                                        href="https://www.transempregos.com.br/op/524e625c-c7bd-46c4-91f4-01f9e699b4eb">Candidatar-se</a>
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