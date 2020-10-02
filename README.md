# Back End Challenge

Criar um projeto Nodejs utilizando Mongoose e Apollo Server (Graphql)


## Projeto:

* Criar uma aplicação simples com duas collections (podendo ser Teacher e Student, Person e Pet, ou qualquer outra relação entre duas entidades)

* Implementar queries collectionPlural (multiplos), collectionPlural (single) de cada collection

```
query {
  collectionPlural(first: 50, after: "$endCursor para paginação") {
    totalCount
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        name
        relatedCollection {
            id
            name
        }
      }
    }
  }
  
  collectionSingular(id: "ObjectId") {
    id
    name
    relatedCollection {
      id
      name
    }
  }
}
```

* Implementar mutations deleteCollectionSingular, createCollectionSingular, updateCollectionSingular de cada collection
```
mutation {
  deleteCollectionSingular(id: "ObjectId") {
    id
    success
  }
  createCollectionSingular(inputs: {}) {
    id
    name
    relatedCollection {
        id
        name
    }
  }
  updateCollectionSingular(id: "ObjectId", inputs: {}) {
    id
    name
    relatedCollection {
        id
        name
    }
  }
}
```

* Criar sistema de autenticação simples, utilizando Json Web Token, para restringir o acesso aos dados.

## Publicação:

Fazer Pull Request para esse repositório. (Se possivel subir aplicação no https://www.heroku.com)

## Contato:
robson@transformacaodigital.com

