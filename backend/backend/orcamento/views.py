from django.shortcuts import render

from backend.items.models import Items, ItemsOrc
from backend.orcamento.models import Orcamentos

import requests
from decouple import config
from rest_framework import permissions
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView
import json


class OrcamentoViewSet(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    @staticmethod
    def get(request):

        id_orc = request.query_params.get("id_orc", None)

        try:
            # queryset = Items.objects.all()
            queryset = Orcamentos.objects.filter(id_orc=id_orc, is_active=True)

            orcs = []
            for orc in queryset:
                orc.append({
                    'id': orc.id,
                    'nome_item': orc.nome_item,
                    'valor': orc.valor,
                    'id_catego': orc.categoria.id,
                    'name_catego': orc.categoria.nome_catego,
                })
            return Response({"orcamento": orcs})

        except Exception as e:
            return Response({
                'status': '400',
                'message': f'Error. {e}'
            })

    @classmethod
    def get_extra_actions(cls):
        return []


class OrcamentosAllViewSet(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    @staticmethod
    def get(request):

        try:
            queryset = Orcamentos.objects.all()
            orcaments = []
            for orc in queryset:
                orcaments.append({
                    'id': orc.id_orc,
                    'qtd_itens': orc.qtd_itens,
                    'valor_orc': orc.valor_orc,
                    'descri_orc': orc.descri_orc,
                })
            return Response({"orcamentos": orcaments})

        except Orcamentos.DoesNotExist:
            return Response({
                'status': '400',
                'message': f'Sem Orcamentos para listar'
            })

    @classmethod
    def get_extra_actions(cls):
        return []


class OrcamentosAddViewSet(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    @staticmethod
    def post(request, *args, **kwargs):

        data = json.loads(request.body)

        qtd_itens: int = data['qtd_itens']
        valor_orc: float = data['valor_orc']
        descri_orc: str = data['descri_orc']
        list_items: list[dict] = data['items']

        orc = None

        if qtd_itens and valor_orc and descri_orc and list_items:

            orc = Orcamentos(
                qtd_itens=qtd_itens,
                valor_orc=valor_orc,
                descri_orc=descri_orc
            )

            orc.save()

        else:
            return Response({
                'status': '400',
                'message': 'Parametros invalidos!'
            })

        try:
            for item in list_items:
                item_orc = ItemsOrc(
                    item_id=item['id_item'],
                    qtd=item['qtd'],
                    valor=item['subtotal'],
                    orcamento_id=orc.id_orc
                )

                item_orc.save()

        except Exception as e:
            return Response({
                'status': '400',
                'message': f'Erro ao vincular items ao orcamento. {e}'
            })

        return Response({
            'status': '200',
            'message': 'Orçamento salvo com sucesso'
        })

    @classmethod
    def get_extra_actions(cls):
        return []


class OrcamentoGraficoViewSet(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    @staticmethod
    def post(request, *args, **kwargs):

        data = json.loads(request.body)

        qtd_itens: int = data['qtd_total']
        valor_orc: float = data['valor_total']
        list_items: list[dict] = data['items']

        category_group = {}
        list_value_by_catego = []

        try:
            for item in list_items:
                if item['name_catego'] not in category_group:
                    category_group[item['name_catego']] = []
                category_group[item['name_catego']].append(item)

            for catego, items in category_group.items():
                soma_valores = sum(obj['subtotal'] for obj in items)
                list_value_by_catego.append({"name": catego, "value": soma_valores})

            return Response(list_value_by_catego)


        except Exception as e:
            return Response({
                'status': '400',
                'message': f'Erro ao gerar Grafico de cagegorias. {e}'
            })


    @classmethod
    def get_extra_actions(cls):
        return []
