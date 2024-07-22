const prompt = require('prompt-sync')({ sigint: true });

let ferias = [];

function adicionar() {
    let dia = prompt('Insira qual o dia das atividades nas férias: ');
    let atividades = prompt('Quais foram as atividades do dia?: ');
    ferias.push({ dia, atividades });
}

function listar() {
    if (ferias.length === 0) {
        console.log('Nenhuma data adicionada ainda.');
    } else {
        ferias.forEach((item, index) => {
            console.log(`${index + 1}. Data: ${item.dia} - Atividades: ${item.atividades}`);
        });
    }
}

function editar() {
    listar();
    let editar = parseInt(prompt('O que você deseja editar? ')) - 1;

    if (editar >= 0 && editar < ferias.length) {
        let novoDados = ferias[editar];

        console.log(`
        Qual dado você deseja editar?
        1 - Data.
        2 - Atividade.
        0 - Sair.`);

        let edit_dados = prompt('Opção: ');

        switch (edit_dados) {
            case '1':
                novoDados.dia = prompt('Qual é a data correta? ');
                break;
            case '2':
                novoDados.atividades = prompt('Qual é ou são as novas atividades? ');
                break;
            case '0':
                console.log('Saindo...');
                return;
            default:
                console.log('Opção inválida!');
        }
        console.log('Atualizado com sucesso!', novoDados);
    } else {
        console.log('Não encontrado!');
    }
}

function excluir() {
    listar();
    let cancelar = parseInt(prompt('Qual data deseja excluir? ')) - 1;

    if (cancelar >= 0 && cancelar < ferias.length) {
        ferias.splice(cancelar, 1);
        console.log('Excluído com sucesso!');
    } else {
        console.log('Não encontrado!');
    }
}

module.exports = {
    adicionar,
    listar,
    editar,
    excluir
};