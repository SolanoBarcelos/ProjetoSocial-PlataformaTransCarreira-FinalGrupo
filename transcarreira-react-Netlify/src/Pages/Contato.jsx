import React from "react";
import { Form } from "react-bootstrap";

export default function Contato() {
  return (

    <>
    
    <main>

        <section>
            <div className="vagas_titulo my-5">
                <h2>Entre em contato</h2>
            </div>
        </section>

        <form>
            <div className="container">
                <div className="form-group">
                    <label for="exampleInputEmail1">Seu nome:</label>
                    <br/>
                    <input type="text" class="formControlNome" id="nome" aria-describedby="nomeHelp" size="30"/>
                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">E-mail:</label>
                    <br/>
                    <input type="email" className="formControlEmail" id="email1" aria-describedby="emailHelp" size="30"/>
                    <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu email com
                        ninguém.</small>
                </div>

                <div className="form-group">
                    <label for="FormControlTextarea1">Deixe sua mensagem aqui!</label>
                    <textarea className="form-control" id="FormControlTextarea1" rows="3"></textarea>
                </div>

                <button id="formBotao" type="submit" className="btn btn-primary">Enviar</button>
              </div>
        </form>

    </main>
    
    </>

  );
}