from django.shortcuts import render
import requests
from decouple import config
from rest_framework import permissions
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView
from backend.items.models import Items


# Create your views here.

class ItemViewSet(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    @staticmethod
    def get(request):

        id_item = request.query_params.get("id_item", None)

        try:

            # queryset = Items.objects.all()
            queryset = Items.objects.filter(id_item=id_item, is_active=True)

            items = []
            for item in queryset:
                items.append({
                    'id': item.id,
                    'nome_item': item.nome_item,
                    'valor': item.valor,
                    'id_catego': item.categoria.id,
                    'name_catego': item.categoria.nome_catego,
                })
            return Response({"items": items})

        except Exception as e:
            return Response({
                'status': '400',
                'message': f'Error. {e}'
            })

    @classmethod
    def get_extra_actions(cls):
        return []


class ItemsAllViewSet(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    @staticmethod
    def get(request, format=None):
        # queryset = Items.objects.all()
        try:
            queryset = Items.objects.filter(is_active=True).order_by('nome_item')

            items = []
            for item in queryset:
                items.append({
                    'id_item': item.id_item,
                    'nome_item': item.nome_item,
                    'valor': item.valor,
                    'id_catego': item.categoria.id_catego,
                    'name_catego': item.categoria.nome_catego,
                    'descri': item.descri
                })
            return Response({"items": items})

        except Items.DoesNotExist:
            return Response({
                'status': '400',
                'message': f'Sem itens para listar'
            })

    @classmethod
    def get_extra_actions(cls):
        return []


class ItemsAddViewSet(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    @staticmethod
    def post(request, *args, **kwargs):

        nome_item: int = request.data['nome_item']
        valor: float = request.data['valor']
        id_categoria: str = request.data['id_categoria']
        descri: str = request.data['descri']

        if nome_item and valor and id_categoria:

            item = Items(
                nome_item=nome_item,
                valor=valor,
                categoria_id=id_categoria,
                descri=descri
            )

            item.save()

            return Response({
                'status': '200',
                'message': 'Salvo com sucesso!'
            })

        else:
            return Response({
                'status': '400',
                'message': 'Parametros invalidos!'
            })
