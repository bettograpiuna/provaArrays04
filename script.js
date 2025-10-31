/*
 * ============================================
 * GERENCIADOR DE LISTA DE COMPRAS
 * ============================================
 */

// 1. Inicia o array (a nossa lista)
// Vamos começar com alguns itens para facilitar o teste
let listaDeCompras = ["Arroz", "Feijão", "Leite", "Pão"];

// 2. Função principal que controla o menu
function iniciarGerenciador() {
    console.log("--- Bem-vindo ao Gerenciador da Lista de Compras! ---");
    // Um loop infinito que só para quando o usuário escolhe "Sair"
    while (true) {
        
        let escolha = prompt(
            "--- Bem-vindo ao Gerenciador da Lista de Compras! ---\n\n" +
            "O que você deseja fazer?\n\n" +
            "1. Adicionar item\n" +
            "2. Remover item\n" +
            "3. Atualizar item\n" +
            "4. Ver lista\n" +
            "5. Sair\n\n" +
            "Digite o número da sua escolha:"
        );

        // Se o usuário clicar em "Cancelar" (null) ou "Sair" (5)
        if (escolha === '5' || escolha === null) {
            alert("Obrigado por usar o gerenciador. Até logo!");
            console.log("--- Programa finalizado ---");
            break; // Quebra o loop 'while(true)' e encerra o programa
        }

        // Direciona a ação com base na escolha
        switch (escolha) {
            case '1':
                adicionarItem();
                break;
            case '2':
                removerItem();
                break;
            case '3':
                atualizarItem();
                break;
            case '4':
                exibirLista();
                break;
            default:
                alert("Opção inválida. Por favor, escolha um número de 1 a 5.");
        }
    }
}

/**
 * REQUISITO: Adicionar Itens com push()
 */
function adicionarItem() {
    let novoItem = prompt("Digite o nome do item que deseja adicionar:");
    
    if (novoItem) { // Verifica se o usuário digitou algo (e não clicou em 'Cancelar')
        listaDeCompras.push(novoItem.trim()); // .trim() remove espaços em branco
        alert(`"${novoItem}" foi adicionado à lista!`);
    } else {
        alert("Adição cancelada.");
    }
}

/**
 * REQUISITO: Exibir Lista com for...of (e índice)
 */
function exibirLista() {
    if (listaDeCompras.length === 0) {
        console.clear();
        console.log("Sua lista de compras está vazia.");
        alert("Sua lista de compras está vazia.");
        return;
    }

    // Limpa o console para uma visualização limpa
    console.clear();
    console.log("--- SUA LISTA DE COMPRAS ---");
    
    let listaFormatadaParaAlert = "--- SUA LISTA DE COMPRAS ---\n\n";

    // O método .entries() nos dá o [índice, valor]
    // Isso nos permite usar o 'for...of' e ainda ter o índice!
    for (const [indice, item] of listaDeCompras.entries()) {
        let linha = `[${indice}]: ${item}`;
        
        console.log(linha);
        listaFormatadaParaAlert += linha + "\n";
    }

    // Mostra no alert também, pois o console pode estar fechado
    alert(listaFormatadaParaAlert);
}

/**
 * REQUISITO: Remover Itens com splice()
 */
function removerItem() {
    // 1. Mostra a lista para o usuário saber qual índice remover
    exibirLista();
    
    if (listaDeCompras.length === 0) return; // Se a lista já estava vazia, não faz mais nada.

    // 2. Pede o índice
    let indiceParaRemover = prompt("Digite o NÚMERO (índice) do item que deseja REMOVER:");
    let indice = parseInt(indiceParaRemover);

    // 3. Validação do índice
    // (isNaN = "Não é um Número")
    // (indice < 0 || indice >= listaDeCompras.length) = verifica se está fora dos limites do array
    if (isNaN(indice) || indice < 0 || indice >= listaDeCompras.length) {
        alert("Índice inválido. Por favor, digite um número da lista.");
        return;
    }

    // 4. Usa o splice()
    // .splice(indice, 1) -> "A partir do 'indice', remova '1' item"
    // Splice retorna um array com os itens removidos, por isso [0]
    let itemRemovido = listaDeCompras.splice(indice, 1)[0];
    
    alert(`O item "${itemRemovido}" foi removido com sucesso.`);
    
    // Mostra a lista atualizada
    exibirLista();
}

/**
 * REQUISITO: Atualizar Itens
 */
function atualizarItem() {
    // 1. Mostra a lista
    exibirLista();
    
    if (listaDeCompras.length === 0) return;

    // 2. Pede o índice
    let indiceParaAtualizar = prompt("Digite o NÚMERO (índice) do item que deseja ATUALIZAR:");
    let indice = parseInt(indiceParaAtualizar);

    // 3. Validação do índice
    if (isNaN(indice) || indice < 0 || indice >= listaDeCompras.length) {
        alert("Índice inválido. Por favor, digite um número da lista.");
        return;
    }

    // 4. Pede o novo valor
    let valorAntigo = listaDeCompras[indice];
    let novoValor = prompt(`Digite o novo nome para o item "${valorAntigo}":`);

    if (novoValor) {
        // 5. Atualiza o item usando o índice
        listaDeCompras[indice] = novoValor.trim();
        alert(`Item "${valorAntigo}" foi atualizado para "${novoValor}".`);
        // Mostra a lista atualizada
        exibirLista();
    } else {
        alert("Atualização cancelada.");
    }
}


// 4. Inicia o programa assim que o script é carregado
iniciarGerenciador();