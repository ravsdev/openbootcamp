import logging
from django.shortcuts import render
from .models import Director,Film

def index(request):
    num_films = Film.objects.all().count()
    num_directors = Director.objects.all().count()
    films = Film.objects

    logging.warning(films)
    return render(
        request,
        'index.html',
        context={
            'num_films': num_films,
            'num_directors': num_directors
        }
    )

from django.views import generic

class DirectorsListView(generic.ListView):
    model = Director