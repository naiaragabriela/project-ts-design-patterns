# Mediator - Behavioural (Comportamental)

Intenção

Define um objeto que encapsula como um conjunto de objetos interage. O mediator promove o acoplamento fraco ao evitar que os objetos se refiram explicitamente uns aos outros, permitindo que você varie suas interações.

O Mediator é um padrão de projeto muito simples. Basicamente ele sugere a criação de um objeto central que faz a mediação da comunicação entre outros objetos.

Imagine um botão que só pode ser ativado quando todos os campos de input do formulário forem validados (isso é super comum). Nesse caso, muitas pessoas poderiam acoplar os inputs ao objeto do botão a fim de fazer tal validação e, quando necessário, ativar este botão para envio do formulário.

Isso pode gerar transtorno e um código super complexo e acoplado dependendo da quantidade de validações e quantos elementos de input existirem. Além de dificultar a reusabilidade de classes em outros locais do sistema.

O mediator nos diz que ao invés de acoplar as classes, devemos criar um único objeto central que toma conta dos botões e dos inputs (o objeto mediador). Nesse caso, os botões e inputs podem notificar o mediador quando for necessário.

Por exemplo, se existem dois campos de Email/Password, e um botão Submit que só pode ser ativado quando Email e Password forem propriamente validados. O objeto mediador pode ser notificado através de um método quando as validações forem concluídas e, em resposta, ativar o botão Submit. Perceba que, com o objeto Mediator, nenhuma das classes de input ou botão se conhecem, elas conhecem apenas o objeto mediador, que executa as ações necessárias quando achar conveniente.


# Estrutura

Veja a pasta diagramas.

# Aplicabilidade

Use o Mediator quando:

🟣 você quer diminuir ou extinguir o acoplamento direto entre as classes que poderiam estar diretamente acopladas

🟣você quer simplificar comunicações de muitos-para-muitos para comunicações um-para-muitos

# Implementação

Veja o código e os diagramas dessa pasta para entender como o Mediator é implementado.

# Consequências

O que é bom ou ruim no Mediator:

🟢 Bom:

✔️ desacopla objetos que poderiam estar firmemente acoplados

✔️ facilita a reutilização de objetos

✔️facilita a adição de novos mediadores e classes participantes na comunicação

✔️encapsula a comunicação entre objetos

🔴 Ruim:

❌ é fácil criar um mediator "faz tudo" (god class)
