# Abstract Factory - Creational (Criação)

Intenção

Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.

O Abstract Factory é usado para garantir que uma família de produtos relacionados ou dependentes trabalhem sempre juntos (veja aplicabilidade para mais casos de uso).

O Abstract Factory ajuda a garantir que classes de mesma família trabalhem sempre juntas. Por isso focamos em família de objetos relacionados ou dependentes.


# Estrutura

Veja a pasta diagramas.

# Aplicabilidade

Use o padrão Abstract Factory quando:

🟠 um sistema deve ser independente de como seus produtos são criados, compostos ou representados

🟠 um sistema deve ser configurado como um produto de família de múltiplos produtos

🟠 uma família de objetos for projetada para ser usada em conjunto e você necessita garantir essa restrição

🟠 você quer fornecer uma biblioteca de classes de produtos e quer revelar somente suas interfaces, não suas implementações


# Implementação - Teoria

Observação importante: objetos criados por um fábricas tendem a ser chamados de "Product" (produto). Veja os diagramas na pasta "diagramas" para melhor entendimento.

🟣 Crie uma interface em comum para todas as factories concretas: essa interface define métodos que retornam famílias de produtos diferentes em um nível mais abstrato. Esses produtos podem colaborar entre si caso necessário. Esses métodos devem ser implementados por todas as fábricas concretas.

🟣 Crie fábricas concretas: essas fábricas implementam os métodos da fábrica abstrata e retornam os produtos concretos. A assinatura dos métodos nas fábricas concretas retornam a mesma família da fábrica abstrata, porém o retorno são produtos concretos que implementam a interface da família de produtos retornados pela fábrica abstrata.

🟣 Crie interfaces correspondentes para cada família de produto: essas interfaces definem os tipos dos objetos a serem retornados pela fábrica abstrata. Essas interfaces são os retornos dos métodos fábrica na fábrica abstrata.

🟣 Crie os produtos concretos: crie os produtos concretos que implementam as interfaces de produtos. Note que produtos de interfaces diferentes podem colaborar entre si por composição. Esses produtos são os retornos dos métodos fábrica nas fábricas concretas.

# Consequências

O que é bom ou ruim no Abstract Factory:

🟢 Bom:

✔️Os produtos sempre serão compatíveis entre si

✔️Aplicação clara do Open/Closed Principle, é fácil adicionar novas fábricas e produtos

✔️Aplicação clara do Single Responsibility Principle, o código que cria está separado do código que usa os objetos

🔴 Ruim:

❌Muitas classes e maior complexidade será introduzida no código
