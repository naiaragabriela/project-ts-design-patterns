# Template Method - Behavioural (Comportamental)

Intenção

Define o esqueleto de um algoritmo em uma operação, postergando a definição de alguns passos para subclasses. O template method permite que as subclasses redefinam certos passos de um algoritmo sem mudar sua estrutura

# Estrutura

Veja a pasta diagramas.

# Aplicabilidade

Use o Template Method quando:

🟠 você precisa de variações de um mesmo algoritmo sem mudar a ordem de execução dos métodos

🟠 você percebe que está usando herança para alterar apenas pequenos trechos de código de um algoritmo

# Implementação

Veja o código e os diagramas dessa pasta para entender como o Template Method é implementado.

# Consequências

O que é bom ou ruim no Template Method:

🟢 Bom:

✔️ Evita duplicação de código

✔️ Permite fácil alteração de algoritmos

✔️ Aplica o OCP e SRP
🔴 Ruim:

❌ Em alguns casos pode violar o LSP ao alterar o comportamento de métodos nas subclasses
