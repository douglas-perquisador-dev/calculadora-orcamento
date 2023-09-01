# Generated by Django 4.2.4 on 2023-09-01 19:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('orcamento', '0001_initial'),
        ('categorias', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Items',
            fields=[
                ('id_item', models.BigAutoField(primary_key=True, serialize=False)),
                ('nome_item', models.CharField(max_length=50)),
                ('valor', models.DecimalField(decimal_places=2, max_digits=9)),
                ('is_active', models.BooleanField(default=True, verbose_name='Ativo')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='criado em')),
                ('updated_at', models.DateTimeField(auto_now_add=True, verbose_name='atualizado em ')),
                ('categoria', models.ForeignKey(db_column='id_catego', on_delete=django.db.models.deletion.DO_NOTHING, to='categorias.categorias')),
            ],
            options={
                'verbose_name': 'Item da construção',
                'verbose_name_plural': 'Itens da construção',
                'db_table': 'items',
            },
        ),
        migrations.CreateModel(
            name='ItemsOrc',
            fields=[
                ('id_item_orc', models.BigAutoField(primary_key=True, serialize=False)),
                ('is_active', models.BooleanField(default=True, verbose_name='Ativo')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='criado em')),
                ('updated_at', models.DateTimeField(auto_now_add=True, verbose_name='atualizado em ')),
                ('id_item', models.ForeignKey(blank=True, db_column='id_item', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='items.items')),
                ('id_orc', models.ForeignKey(blank=True, db_column='id_orc', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='orcamento.orcamentos')),
            ],
            options={
                'verbose_name': 'Itens do orçamento',
                'verbose_name_plural': 'Itens do orçamento',
                'db_table': 'items_orc',
            },
        ),
    ]
