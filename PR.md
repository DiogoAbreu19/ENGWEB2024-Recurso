# Correção Dataset

O dataset possuia algumas listas como strings, logo foi necessário alterar todos os campos que tinham este problema. Alterou-se o nome do campo `bookId` para `_id` de modo a este servir de identificador de cada conjunto de dados na base de dados mongo. 
Estas alterações foram efetuadas com o script presente na pasta `ex1` no ficheiro `fixdataset.py`.

# Importação para a base de dados

Criou-se um container para a mesma:

```code
docker run -d -p 27017:27017 --name livros mongo
```

Depois, importou-se o dataset com as alterações já realizadas para a base de dados:

```code
docker cp datasets/datasetfinal.json livros:/datasetfinal.json
docker exec -it livros mongoimport -d livros -c livros --type json --file datasetfinal.json --jsonArray
```

# Queries

As queries estão localizadas no ficheiro `queries.txt` da pasta `ex1`

# Ex1 

Para colocar a API em execução, basta correr os seguintes comandos:

```code
npm install
npm start
```

# Ex 2

Para colocar o FrontEnd relativo ao segundo exercício a correr, executa-se os seguintes comandos:

```code
npm install
npm start
```

# Docker 

Para correr as componentes todas do projeto através do Docker, basta correr o seguinte comando:

```code
docker-compose up --build
```


