import uuid
from django.db import models

# Create your models here.
class Director(models.Model):
    name = models.CharField(max_length=64, help_text="Nombre del director") 

    def __str__(self):
        return self.name

class Film(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    director = models.ManyToManyField(Director)

    def __str__(self):
        return f'{self.name} {self.description}'