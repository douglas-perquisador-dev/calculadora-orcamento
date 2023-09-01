from django.shortcuts import render
import requests
from decouple import config
from rest_framework import permissions
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView
from models import Items
# Create your views here.

class ItemsAllViewSet(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    @staticmethod
    def get(self, request):
        # queryset = Items.objects.all()
        queryset = Items.objects.filter(is_active=True).order_by('nome_item')

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

        if nome_item and valor and id_categoria:

            item = Items(
                nome_item=nome_item,
                valor=valor,
                categoria=id_categoria
            )

            item.save(force_update=True)

        else:
            return Response({
                'status': '400',
                'message': 'Parametros invalidos!'
            })