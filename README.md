# Django

[Install the lastest official release of Django]

python3 -m pip install Django

[Starting the project with the Django Admin]

django-admin startproject control_laboral

[Command for run the server at 127.0.0.1:8000]

python3 manage.py runserver

[Start the app]

python3 manage.py startapp controllaboral

[For applying and unapplying migrations]

python3 manage.py migrate

[For creating new migrations based on the changes you have made to your models]

python3 manage.py makemigrations controllaboral

[Working with secret key]

Create a new file secrets.py or what have you and put the secret key in that. Place it alongside your settings file and place everything secret in there; then in your settings file put from secrets import * at the top. Then add a .gitignore file and add secrets.py to this file so that it won't be committed.

[Create super user]

python3 manage.py createsuperuser

# Django Rest Framework

[Installation]

pip install djangorestframework

# Angular


