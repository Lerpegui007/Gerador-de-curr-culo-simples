const formulario = document.getElementById('formularioCurriculo')

formulario.addEventListener('submit',function(event){
event.preventDefault();

const formData = new FormData(formulario)

const nome = formData.get('nome')

const idade = formData.get('idade')

const email = formData.get('email')

const telefone = formData.get('telefone')

const cidade = formData.get('cidade')

const endereco = formData.get('endereco')

const perfil_profissional = formData.get('perfil_profissional')

const habilidades = formData.get('habilidades')

const formacao = formData.get('formacao')

const experiencia_profissional = formData.get('experiencia_profissional')

const template = formData.get('template')

localStorage.setItem('nomeFor',nome)

localStorage.setItem('idadeFor',idade)

localStorage.setItem('emailFor',email)

localStorage.setItem('telefoneFor',telefone)

localStorage.setItem('cidadeFor',cidade)

localStorage.setItem('enderecoFor',endereco)

localStorage.setItem('perfilFor', perfil_profissional)

localStorage.setItem('habilidadesFor',habilidades)

localStorage.setItem('formacaoFor',formacao)

localStorage.setItem('experienciaFor',experiencia_profissional)

localStorage.setItem("template", template)

window.location.href = 'curriculo.html'

})

function atualizarPreview() {

    const curriculo = {
        nome: document.getElementById("Nome").value,
        idade: document.getElementById("Idade").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("Telefone").value,
        cidade: document.getElementById("Cidade").value,
        endereco: document.getElementById("Endereco").value,
        perfil: document.getElementById("perfil").value,
        habilidade: document.getElementById("habilidades").value,
        formacao: document.getElementById("formacao").value,
        experiencia: document.getElementById("experiencia").value
    };

    const escolhido = document.querySelector(
        'input[name="template"]:checked'
    ).value;

    const frame = document.getElementById("preview");

    const doc = frame.contentDocument || frame.contentWindow.document;

    doc.open();

    doc.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <link rel="stylesheet" href="css/${escolhido}.css">
        </head>
        <body>
            ${templates[escolhido](curriculo)}
        </body>
        </html>
    `);

    doc.close();
}

document.querySelectorAll("input, textarea").forEach(campo => {
    campo.addEventListener("input", atualizarPreview);
});

document.querySelectorAll('input[name="template"]').forEach(radio => {
    radio.addEventListener("change", atualizarPreview);
});

atualizarPreview();