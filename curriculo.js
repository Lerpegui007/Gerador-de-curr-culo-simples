const nomeS = localStorage.getItem('nomeFor');
const idadeS = localStorage.getItem('idadeFor');
const emailS = localStorage.getItem('emailFor');
const telefoneS = localStorage.getItem('telefoneFor');
const cidadeS = localStorage.getItem('cidadeFor');
const enderecoS = localStorage.getItem('enderecoFor');
const perfilS = localStorage.getItem('perfilFor');
const habilidadesS = localStorage.getItem('habilidadesFor');
const formacaoS = localStorage.getItem('formacaoFor');
const experienciaS = localStorage.getItem('experienciaFor');

const curriculo = {
    nome: nomeS,
    idade: idadeS,
    email: emailS,
    telefone: telefoneS,
    cidade: cidadeS,
    endereco: enderecoS,
    perfil: perfilS,
    habilidade: habilidadesS,
    formacao: formacaoS,
    experiencia: experienciaS
};

const escolhido = localStorage.getItem("template") || "simples";


document.getElementById("tema").href = `css/${escolhido}.css`;


document.getElementById("preview").innerHTML = templates[escolhido](curriculo);