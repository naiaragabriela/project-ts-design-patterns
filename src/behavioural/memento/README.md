# Memento - Behavioural (Comportamental)

Intenção

Sem violar o encapsulamento, captura e externaliza um estado interno de um objeto, de modo que o mesmo possa posteriormente ser restaurado para este estado.

O Memento é um padrão de projeto que visa delegar a tarefa de salvar e restaurar o estado de um objeto para outro chamado de Caretaker (ou zelador). Isso seria algo bem simples de se fazer, porém precisamos tomar cuidado com o encapsulamento dos dados.


# Estrutura

Veja a pasta diagramas.

# Aplicabilidade

Use o Memento quando:

🔵 você quer ter a possibilidade de salvar e restaurar o estado atual de um objeto sem violar o encapsulamento
🔵 você deseja implementar a função "desfazer" e "refazer" no seu sistema

# Implementação

Veja o código e os diagramas dessa pasta para entender como o Memento é implementado.

# Consequências


O que é bom ou ruim no Memento:

🟢 Bom:

✔️ desacopla a responsabilidade de tomar conta do backup da classe original

✔️ é fácil salvar e restaurar um backup de uma classe

🔴 Ruim:

❌ quanto mais backups, maior o consumo de memória da sua aplicação

❌ as classes zeladoras precisam acompanhar as mudanças nas classes originadoras

❌ pode ser desafiador garantir o encapsulamento em algumas linguagens de programação
