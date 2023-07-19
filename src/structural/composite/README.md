# Composite - Structural (Estrutural)
Intenção
Compor objetos em estruturas de árvore para representar hierarquias partes/todo. Composite permite aos clientes tratarem de maneira uniforme objetos individuais e composições de objetos.

Observação: partes são objetos que formam a estrutura (as partes da estrutura); todo é a estrutura inteira que é formada por várias partes.

O composite é um padrão de projeto que permite ao cliente tratar um único objeto ou uma estrutura formada de vários objetos aninhados hierarquicamente da mesma maneira.

# Estrutura

Veja a pasta diagramas.

# Aplicabilidade

Use o padrão Composite quando:

🟠 sua estrutura de objetos possa ser representada hierarquicamente, como por exemplo, estruturas do tipo árvore

🟠 você quiser que o código cliente trate objetos compostos e objetos simples da mesma maneira

# Implementação - Teoria


🔵 Crie uma interface em comum para objetos compostos e objetos simples (Component): pode ser uma classe abstrata ou uma interface, contando que os métodos façam sentido em ambos os objetos. Defina um ou mais métodos que funcionam de maneira polimórfica em objetos compostos e objetos simples. Quando esse método for chamado em um objeto composto, ele delegará a tarefa para seus filhos; quando chamado em objetos simples, eles não tem para onde delegar, então realizam a ação requisitada

🔵 Crie objetos folha (Leaf) que implementam a interface Component: são os objetos da ponta da estrutura, geralmente são os objetos que realmente fazem o trabalho real (como descrito acima)


🔵 Crie objetos compostos (Composite): são objetos que têm filhos. Esses filhos podem ser outros objetos compostos (Composite) ou objetos folha (Leaf). O trabalho desses objetos é delegar o trabalho para seus filhos. Objetos compostos devem ter um container que sustenta seus filhos (pode ser um vetor, uma tabela de dispersão, um dicionário ou qualquer outra estrutura de dados). Além disso, eles também têm métodos para adicionar e remover novos filhos.

# Consequências


O que é bom ou ruim no Composite:

🟢 Bom:

✔️ É muito fácil criar objetos complexos por composição
✔️ É fácil gerar uma hierarquia de objetos
✔️ É fácil usar polimorfismo e recursão
✔️ É fácil adicionar novos tipos de elementos na estrutura (OCP)

🔴 Ruim:

❌ Dependendo da estrutura, pode quebrar o princípio da segregação de interface (ISP). Objetos do tipo "Leaf" (folha) tendem a ter métodos que não usam ou não fazem nada
