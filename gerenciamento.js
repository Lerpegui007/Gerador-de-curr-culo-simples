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

window.location.href = 'curriculo.html'

})
