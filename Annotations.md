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
   Muda a cor de algo de acordo com o que o cliente fez ou definir como no exemplo.
   
```javascript
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b';
  }

}

```
Usando a diretiva
```html
<i class="material-icons v-middle" appRed> favorite</i>
```
#### Comportamento:
   Fazer um get na api quando clica no botão
#### Diretiva estrutural 
    Vem com * na frente e manipula a Dom (ngIf, ngFor)

***Exemplo:***

```javascript
// Uma diretiva para fazer o for do que for passado a ela
// for.directive.ts
import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {


  @Input('myForEm') numbers: number[]

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) { 

  }

  ngOnInit(){
    for(let number of this.numbers){
      this.container.createEmbeddedView(this.template,{
        $implicit: number
      })
    }
  }

}

```
Usando a diretiva. Para usar uma diretiva estrutura é necessário o * e então usar o nome aplicado a ela e passar os valores
```html
    <ul>
        <li *myFor="let n Em [1,2,3] ">{{ n }}</li>
    </ul>
```
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

## Services

Classes que compartilham e organizam códigos entre componentes. Também posso usar services dentro de diretivas.
Lógicas que não dizem respeito em que o componente faz vão para dentro do service. Sempre separando as lógicas dentro do service
de forma coerente(SOLID)

O service é usado dentro do componente através da injeção de dependencias.

Dentro do service
```javascript
@Injectable({
    providedIn: "root", // Significa que vou ter apenas UMA instância do product service em toda a aplicação
})
export class ProductService{
    //Code here
}
```
Ou seja no componente X eu adiciono 3 produtos ao service de carrinho e chamo o mesmo serivce no componente Y logo após, os 3 mesmo produtos estarão lá.

    Lembra do estado no react? Redux e pipipopo lembrei dele


> Padrão de projeto ***Singleton***

#### Injeção de Dependência

É um padrão no qual a classe recebe as ***dependências*** de uma ***fonte externa*** ao invés de criar por conta própria.

##### Sem injeção de Dependência

Você cria uma instância novo de motor ou seja a classe carro que instanciou o motor e não houve injeção de dependência.

Cenário 1
```javascript
//Classe carro

class Carro{
    motor: Motor

    constructor(){
        this.motor = new Motor()
    }
}

// Classe Motor

class Motor {

}
```

Cenário 2
```javascript
//Classe carro

class Carro{
    motor: Motor

    constructor(){
        this.motor = new Motor() //Temos um erro por não passar a cilidrada para a classe motor
    }
}

// Classe Motor

class Motor {
    cilindrada: number

    constructor(cilindrada: cilidrada){
        this.cilindrada = cilindrada;
    }

}
```

Ou seja sempre que algo for alterado na classe motor será necessário refatorar para que não tenha erro todas as classes que usam o motor

##### Com injeção de Dependência

Você passa o motor como parametro. Ou seja ela já está pronta para uso e construida

Cenário 1
```javascript
//Classe carro

class Carro{
    motor: Motor

    constructor(motor: Motor){
        this.motor = motor
    }
}

// Classe Motor

class Motor {
    cilindrada: number

    constructor(cilindrada: cilidrada){
        this.cilindrada = cilindrada;
    }
}
```
Quando uma classe é marcada com @Injectable ela é instanciada para toda a aplicação Angualr. E quando eu uso  o service dentro do componente ele passa essa classe já instancia para dentro do componente.

**Que fique claro quem cria as instancias do serivces é o Angular**

```javascript
@Injectable({
    providedIn: "root", /* root seria um alias para AppModule ou
    seja o providedIn é o AppModule.
    Você também pode apontar para um modulo dentro do providedIn porém será 
    o import do modulo as aspas é apenas para o root.
    */
})
export class ProductService{
    //Code here
}
```
```javascript
//Services são singletons dentro do escopo de um injetor 
GruposDeInjetores:[
    ModuleInject: { /* Quando estiver usando um desses dois vc 
    esta usando o injetor de modulo */
        @NgModule,
        @Injectable
    }, 
    ElementInjector: {
    /* Instância própria, uma instância nova exclusiva pro componente */
        @Directive
        @Component
    }
]

```