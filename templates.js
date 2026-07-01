function templateSimples(dados){
    return `
    <div class="curriculo">
        <h1>${dados.nome}</h1>

        <div class="contato">
            <p><strong>Idade:</strong> ${dados.idade}</p>
            <p><strong>Email:</strong> ${dados.email}</p>
            <p><strong>Telefone:</strong> ${dados.telefone}</p>
            <p><strong>Cidade:</strong> ${dados.cidade}</p>

            ${dados.endereco ? `
                <p><strong>Endereço:</strong> ${dados.endereco}</p>
            ` : ""}
        </div>

        <h2>Perfil Profissional</h2>
        <p>${dados.perfil}</p>

        <h2>Formação Acadêmica</h2>
        <p>${dados.formacao}</p>

        <h2>Habilidades</h2>
        <p>${dados.habilidade}</p>

        <h2>Experiência Profissional</h2>
        <p>${dados.experiencia}</p>
    </div>
    `;

}

function templateExecutivo(dados) {
    return `
    <div class="curriculo executivo">

        <header>

            <h1>${dados.nome}</h1>

            <p>
                ${dados.email} |
                ${dados.telefone} |
                ${dados.cidade}
            </p>

            ${dados.endereco ? `
            <p>${dados.endereco}</p>
            ` : ""}

        </header>

        <section>

            <h2>Perfil Profissional</h2>

            <p>${dados.perfil}</p>

        </section>

        <section>

            <h2>Experiência Profissional</h2>

            <p>${dados.experiencia}</p>

        </section>

        <section>

            <h2>Formação Acadêmica</h2>

            <p>${dados.formacao}</p>

        </section>

        <section>

            <h2>Habilidades</h2>

            <p>${dados.habilidade}</p>

        </section>

    </div>
    `;
}

function templateModerno(dados) {
    return `
    <div class="curriculo moderno">

        <aside class="lateral">

            <h1>${dados.nome}</h1>

            <h3>Contato</h3>

            <p>${dados.email}</p>
            <p>${dados.telefone}</p>
            <p>${dados.cidade}</p>

            ${dados.endereco ? `
            <p>${dados.endereco}</p>
            ` : ""}

            
        </aside>

        <main class="conteudo">

            <h2>Perfil</h2>

            <p>${dados.perfil}</p>

            <h2>Formação</h2>

            <p>${dados.formacao}</p>

            <h2>Experiência</h2>

            <p>${dados.experiencia}</p>

            <h2>Habilidades</h2>

            <p>${dados.habilidade}</p>

        </main>

    </div>
    `;
}

const templates = {
    simples: templateSimples,
    moderno: templateModerno,
    executivo: templateExecutivo
};