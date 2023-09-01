from django.shortcuts import render
from decouple import config
from rest_framework import permissions
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView
from models import Categorias


# Create your views here.

class CategoriaAllViewSet(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    @staticmethod
    def get(self, request):
        # queryset = Categorias.objects.all()
        queryset = Categorias.objects.filter(is_active=True).order_by('nome_catego')
        categorias = []
        for catego in queryset:
            categorias.append({
                'id': catego.id,
                'nome_catego': catego.nome_catego,
                'descri': catego.descri
            })
        return Response({"categorias": categorias})

    @classmethod
    def get_extra_actions(cls):
        return []


class CategoriaAddViewSet(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    @staticmethod
    def post(request, *args, **kwargs):

        id_categoria: str = request.data['id_categoria']
        nome_catego: int = request.data['nome_catego']
        descri: float = request.data['descri']

        if nome_catego and descri and id_categoria:

            catego = Categorias(
                id_catego=id_categoria,
                nome_catego=nome_catego,
                descri=descri
            )

            catego.save(force_update=True)

        else:
            return Response({
                'status': '400',
                'message': 'Parametros invalidos!'
            })
