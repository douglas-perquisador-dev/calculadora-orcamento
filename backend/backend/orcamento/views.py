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


class OrcamentosAllViewSet(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    @staticmethod
    def get(self, request):
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

    @classmethod
    def get_extra_actions(cls):
        return []


class OrcamentosAddViewSet(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    @staticmethod
    def post(request, *args, **kwargs):

        qtd_itens: int = request.data['qtd_itens']
        valor_orc: float = request.data['valor_orc']
        descri_orc: str = request.data['descri_orc']
        list_items: list[Items] = json.loads(request.data['items'])

        orc = None

        if qtd_itens and valor_orc and descri_orc and list_items:

            orc = Orcamentos(
                qtd_itens=qtd_itens,
                valor_orc=valor_orc,
                descri_orc=descri_orc
            )

            orc.save(force_update=True)

        else:
            return Response({
                'status': '400',
                'message': 'Parametros invalidos!'
            })

        try:
            for item in list_items:
                item_orc = ItemsOrc(
                    id_item=item.id_item,
                    id_orc=orc.id
                )

                item_orc.save(force_update=True)

        except Exception as e:
            return Response({
                'status': '400',
                'message': f'Erro ao vincular items ao orcamento. {e}'
            })

        return Response({
            'status': '200',
            'message': 'feedback salvo com sucesso'
        })

    @classmethod
    def get_extra_actions(cls):
        return []
