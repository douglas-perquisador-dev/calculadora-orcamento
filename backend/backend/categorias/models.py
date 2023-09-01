from django.db import models

# Create your models here.

class Categorias(models.Model):
    id_catego = models.BigAutoField(primary_key=True)
    nome_catego = models.CharField(max_length=50)
    descri = models.CharField(max_length=100, blank=True, null=True)

    is_active = models.BooleanField('Ativo', default=True)
    created_at = models.DateTimeField('criado em', auto_now_add=True)
    updated_at = models.DateTimeField('atualizado em ', auto_now_add=True)

    class Meta:
        db_table = 'categorias'
        verbose_name_plural = 'Categorias dos itens'
        verbose_name = 'Categoria do item'

