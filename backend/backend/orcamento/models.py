from django.db import models


# Create your models here.

class Orcamentos(models.Model):
    id_orc = models.BigAutoField(primary_key=True)
    qtd_itens = models.IntegerField()
    valor_orc = models.DecimalField(max_digits=9, decimal_places=2)
    descri_orc = models.CharField(max_length=100)

    is_active = models.BooleanField('Ativo', default=True)
    created_at = models.DateTimeField('criado em', auto_now_add=True)
    updated_at = models.DateTimeField('atualizado em ', auto_now_add=True)

    class Meta:
        db_table = 'orcamentos'
        verbose_name_plural = 'orçamentos calculado'
        verbose_name = 'Orçamento'

    def __str__(self):
        return self.descri_orc
