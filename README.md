# Back End Challenge

Criar um projeto Nodejs utilizando Mongoose e Express.


## Projeto:

* Criar uma aplicação simples com dois models (podendo ser Teacher e Student, Person e Pet, ou qualquer outra relação entre duas entidades)
* Criar um relacionamento one-to-many do model 1 para com o model 2
* Implementar todos os métodos de API: C/R/U/D 
   Obs: no GET, o model 2 deve retornar sua relação com o model 1 no resultado, como no exemplo abaixo:

```
{
    "items": [
        {
            "name "Doogg",
            "id": "5eefd2a5de61ac7e2e66cdd8",
            "person": {
                "name": "Robson",
                "id": "5eefd2a5de61ac7e2e66cdd4"
            }
        },
        ...
    ],
    meta: {
      total: 100,
      page: 1
    }
}
```
    

* Criar sistema de autenticação simples, utilizando Json Web Token, para restringir o acesso aos dados.

## Publicação:

Publicar no github e enviar por email. (Se possivel subir aplicação no https://www.heroku.com)
robson@transformacaodigital.com

