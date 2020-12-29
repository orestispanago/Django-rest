### Django-rest

Simple REST API in Django

To start the server:

* Activate the environment using ```pipenv shell```
* navigate to ```mysite/```
* start the server with ```python manage.py runserver```

The server runs at  http://127.0.0.1:8000/ . The Django admin panel is in ```/admin```

API URLs - requests:

```/```: API root


```/heroes``` : ```GET``` all heroes, ```POST``` a new hero


```/heroes/id``` :  ```GET``` ```PUT``` ```PATCH``` and ```DELETE``` requests for each hero
