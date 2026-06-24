const nomeS = localStorage.getItem('nomeFor')

const idadeS = localStorage.getItem('idadeFor')

const emailS = localStorage.getItem('emailFor')

const telefoneS = localStorage.getItem('telefoneFor')

const cidadeS = localStorage.getItem('cidadeFor')

const enderecoS = localStorage.getItem('enderecoFor')

const perfilS = localStorage.getItem('perfilFor')

const habilidadesS = localStorage.getItem('habilidadesFor')

const formacaoS = localStorage.getItem('formacaoFor')

const experienciaS = localStorage.getItem('experiênciaFor')


if (!enderecoS || enderecoS.trim() === '') {
    document.getElementById('linha_endereco').style.display = 'none'
} else {
    document.getElementById('endereco_salvo').textContent = enderecoS
}


document.getElementById('nome_salvo').textContent = nomeS
document.getElementById('idade_salvo').textContent = idadeS
document.getElementById('email_salvo').textContent = emailS
document.getElementById('telefone_salvo').textContent = telefoneS
document.getElementById('cidade_salvo').textContent = cidadeS
document.getElementById('perfil_salvo').textContent =  perfilS
document.getElementById('habilidades_salvo').textContent = habilidadesS
document.getElementById('formacao_salvo').textContent = formacaoS
document.getElementById('experiencia_salvo').textContent = experienciaS
