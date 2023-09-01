from django.db import models
from backend.categorias.models import Categorias
from backend.orcamento.models import Orcamentos

# Create your models here.
class Items(models.Model):
    id_item = models.BigAutoField(primary_key=True)
    nome_item = models.CharField(max_length=50)
    valor = models.DecimalField(max_digits=9, decimal_places=2)
    categoria = models.ForeignKey(Categorias, models.DO_NOTHING, db_column='id_catego')
    descri = models.CharField(max_length=100, blank=True, null=True)

    is_active = models.BooleanField('Ativo', default=True)
    created_at = models.DateTimeField('criado em', auto_now_add=True)
    updated_at = models.DateTimeField('atualizado em ', auto_now_add=True)

    class Meta:
        db_table = 'items'
        verbose_name_plural = 'Itens da construção'
        verbose_name = 'Item da construção'



class ItemsOrc(models.Model):
    id_item_orc = models.BigAutoField(primary_key=True)
    item = models.ForeignKey(Items, models.DO_NOTHING, db_column='id_item', blank=True, null=True)
    orcamento = models.ForeignKey(Orcamentos, models.DO_NOTHING, db_column='id_orc', blank=True, null=True)
    qtd = models.IntegerField(blank=False, null=True)
    valor = models.DecimalField(max_digits=9, decimal_places=2, null=True)

    is_active = models.BooleanField('Ativo', default=True)
    created_at = models.DateTimeField('criado em', auto_now_add=True)
    updated_at = models.DateTimeField('atualizado em ', auto_now_add=True)

    class Meta:

        db_table = 'items_orc'
        verbose_name_plural = 'Itens do orçamento'
        verbose_name = 'Itens do orçamento'

