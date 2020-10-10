# Django

## Install the lastest official release of Django

python3 -m pip install Django

## Starting the project with the Django Admin

django-admin startproject control_laboral

## Command for run the server at 127.0.0.1:8000

python3 manage.py runserver

## Start the app

python3 manage.py startapp controllaboral

## For applying and unapplying migrations

python3 manage.py migrate

## For creating new migrations based on the changes you have made to your models

python3 manage.py makemigrations controllaboral

## Working with secret key

### Create a new file secrets.py or what have you and put the secret key in that. Place it alongside your settings file and place everything secret in there; then in your settings file put from secrets import \* at the top. Then add a .gitignore file and add secrets.py to this file so that it won't be committed.

## Create super user

python3 manage.py createsuperuser

## Adding CORS Headers for the API REST

### Adding CORS headers allows your resources to be accessed on other domains. It’s important you understand the implications before adding the headers, since you could be unintentionally opening up your site’s private data to others.

### 'python3 -m pip install django-cors-headers'

    INSTALLED_APPS = [
    ...
    'corsheaders',
    ...
    ]

    You will also need to add a middleware class to listen in on responses.

    MIDDLEWARE = [
        ...
        'corsheaders.middleware.CorsMiddleware',
        'django.middleware.common.CommonMiddleware',
        ...
    ]

# Django Rest Framework

## Installation

sudo pip3 install djangorestframework

# Angular

## Installation

sudo npm install -g @angular/cli

## Creating the workspace

ng new control-laboral-angular

## Run the application

cd control-laboral-angular

ng serve --open

## Creating the service

ng generate service user

## Install materials from Angular

npm install --save @angular/material

npm install --save @angular/cdk

## Using material icons

npm install material-design-icons

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<i class="material-icons align-middle">x</i>

### Changing sizes

#### CSS

.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }

#### Code

<i class="material-icons md-18">face</i>
<i class="material-icons md-24">face</i>
<i class="material-icons md-36">face</i>
<i class="material-icons md-48">face</i>

Example for drawing an icon on a light background with a dark foreground color:

<i class="material-icons md-dark">face</i>
<i class="material-icons md-dark md-inactive">face</i>
<i class="material-icons md-light">face</i>
<i class="material-icons md-light md-inactive">face</i>