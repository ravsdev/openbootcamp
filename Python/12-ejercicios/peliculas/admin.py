from django.contrib import admin

# Register your models here.
from .models import Director, Film

admin.site.register(Director)
admin.site.register(Film)
