# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn install`
para instalar as libs necessárias.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Backend

Django framework com banco de dados postgress

### `python install -r requirements.txt`

Na pasta backend tem um arquivo requirements.txt onde se encontra toda as libs utilizadas

agora configure seu arquivo settings com seu banco de dados postgress
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "calculadora-orcamento", #name banco
        "USER": "postgres",
        "PASSWORD": "****",
        "HOST": "127.0.0.1",
        "PORT": "5432",
    }

Após a configuração acima execute o comando a seguir.

### `python manage.py migrate`

com isso o django ira criar as tabelas de acordo com os models implementados.

### `python manage.py runserver`
para startar o backend

o arquivo `insominia_calculadora_orcamento.json` contem todas os testes de requesições com Insominia.


