# Singleton - Creational (Criação)

##Intenção

Garantir que uma classe tenha somente uma instância no programa e fornecer um ponto de acesso global para a mesma.


O Singleton é um padrão de projeto que tem a intenção de resolver dois problemas em uma aplicação:

- Garantir que uma classe tenha somente uma instância no programa - isso é muito comum para programas que acessam recursos compartilhados, como bases de dados, sistemas de arquivos, interfaces gráficas, spoolers de impressão, módulos de um programa e mais.

- Fornecer um ponto de acesso global para a mesma - isso deixa o singleton muito parecido com variáveis globais, porque temos um único objeto, com acesso global, sendo usado por várias partes da aplicação.

Note que o Singleton tem duas responsabilidades e isso quebra a regra do SRP (Single Responsibility Principle).

## Implementação - Teoria


Isso pode mudar de linguagem para linguagem, mas o senso comum sobre singletons é o seguinte:

- Declarar um campo privado na classe para armazenar a instância do Singleton.
- Declarar um método público (getter) para obter a instância do Singleton;
- Na chamada do método público, adicione lazy instantiation, ou seja, verifique se uma instância do Singleton já foi criada; se foi, retorne-a, se não crie uma nova instância e retorne-a.
- Não permita que novas instâncias da classe. Você pode atingir facilmente este objetivo fazendo o construtor da classe privado.

##Consequências

O que é bom ou ruim nos Singletons:

🟢 Bom:

✔️Acesso controlado por encapsulamento à instância única;
✔️É possível permitir um número variável de instâncias (pode soar estranho, mas é possível criar um Singleton que permite n instâncias de uma classe);
✔️É possível usar thead lock para garantir que duas partes do código não alterem o singleton simultaneamente;
✔️Usa lazy instantiation, ou seja, o Singleton só será instanciado no momento do uso;


🔴 Ruim:

❌É mais difícil de testar;
❌Viola o princípio da responsabilidade única;
❌Requer tratamento especial em casos de concorrência;
