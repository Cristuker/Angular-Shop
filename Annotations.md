# Anotações

Algumas anotações feitas durante os estudos.

## Configurações

* Angular.json tem as configurações do projeto.

## Componentes

* Estilo não é obrigatório e o html pode ser feito dentro do arquivo TS usando templateInline true
* Estilo é aplicado apenas no componente, ele não "vaza"
* Para estilo global basta colocar no styles.css

## Diretivas

* Existem 2 tipos

#### Aparência: 
   Muda a cor de algo de acordo com o que o cliente fez
#### Comportamento:
   Fazer um get na api quando clica no botão
#### Diretiva estrutural 
    Vem com * na frente e manipula a Dom (ngIf, ngFor)

## Bindings

#### Property Binding
Usado para comunicação entre o código ts e o html.

[dataSource]="nomeDaVariavel" é usado para referenciar uma varivel de dentro do componente no HTML.

#### EventBinding

(click)="salvarUsuario()" esse binding executa uma função declarada na classe do modulo.

#### One Way Data Binding

Data binding de uma unica direção

```typescript
nome: string;
```
Se eu alterar dentro do componente adicionando o valor "Cristian" a variavel nome
dentro da dom o valor será adiciona ao elemento que estiver marcado da forma abaixo, logo o input terá o valor "Cristian"
One way <strong> componente -> dom </strong>
One way só funciona dessa forma componente to dom. Se for alterado o mesmo acontece no HTML.

```html
<input [value]="nome"> 
```

#### Two Way Data Binding

Two way <strong> componente <-> dom </strong>

```typescript
nome: string;
```

Dessa forma alterando no TS o input no HTML é alterado e alterando no HTML a variavel do TS é alterada também. 


```html
<input [(ngModel)]="nome"> 
```

## Angular Router

Será feito um mapeamento de URL -> Componente

/home [comp.Home]

/produto [comp.Prod]

/usuario [comp.Usuário]

Os componentes são carregados dentro do Router Outlet que é uma "tag html"

## Angular Pipes

São processamento feitos em conteúdo de variaveis

```html
<p>
    O vencimento é
    {{ produto.vencimento | date }} 
    <!-- Nesse caso ele vai formatar o conteudo de produto.
    Vencimento para date(é um metodo que transforma o valor em data) -->
</p> 

<!-- Também é possivel passar parametros para o pipe no formato de atributo obj-->
<td>
    {{produc.price | currency: 'BRL' }}
</td>

<!-- Cadeia de pipes-->

<p>
    O vencimento é
    {{ produto.vencimento | date:'fullDate' | uppercase }} 
    <!-- É possivel passar mais de 1 pipe e encadea-los assim tranformando em data e 
    depois deixando tudo em maiusculo -->
</p> 
```

## Angular Elements

### Programação Reativa (rxjs)

O código só é chamado de forma reativa. Algo externo e então o código é executado.

```javascript
import { Observable } from "rxjs"
```
#### O Padrão Observer
Padrão orientado a Evento
* Padrão Observer é o mais ultilizado da web (callback, promisses...)
* Padrão Orietado a evento
* Subject: Quem tem a capacidade de monitorar e detectar quando o evento acontecer
* Observer: Código ou pessoas que estão interessadas em um determinado evento.

```
                       Observer
                       Observer
Subject <-(Registrar)- Observer - Os observers se registram no subject dizendo que estão interessados no evento
                       Observer
                       Observer
```

Quando o subject decta o evento 

```
Evento <-(Detecta)- Subject
```

Ele notificado todos os observadores dizendo que o evento aconteceu e então uma função é executado dentro de cada observer;

```
                      Observer
                      Observer
Subject -(Notifica)-> Observer
                      Observer
                      Observer

```

Ou seja os observer REAGEM a notificação do subject. Nesse padrão o observer fica liberado para fazer outras coisas e não existe a necessidade de ficar observando o tempo inteiro

#### Observables

***Evolução***
Callbacks -> Promises -> Observables (Reusavel, Stream de dados, Operados)