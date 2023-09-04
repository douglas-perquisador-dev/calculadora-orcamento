from django.shortcuts import render
from decouple import config
from rest_framework import permissions
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView
from backend.categorias.models import Categorias


# Create your views here.
class CategoriaViewSet(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    @staticmethod
    def get(request):

        id_catego = request.query_params.get("id_catego", None)

        try:

            # queryset = Items.objects.all()
            queryset = Categorias.objects.filter(id_catego=id_catego, is_active=True)

            categorias = []
            for catego in queryset:
                categorias.append({
                    'id': catego.id,
                    'nome_item': catego.nome_item,
                    'valor': catego.valor,
                    'id_catego': catego.categoria.id,
                    'name_catego': catego.categoria.nome_catego,
                })
            return Response({"categoria": categorias})

        except Exception as e:
            return Response({
                'status': '400',
                'message': f'Error. {e}'
            })

    @classmethod
    def get_extra_actions(cls):
        return []



class CategoriaAllViewSet(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    @staticmethod
    def get(request):
        # queryset = Categorias.objects.all()
        try:
            queryset = Categorias.objects.filter(is_active=True).order_by('id_catego')
            categorias = []
            for catego in queryset:
                categorias.append({
                    'id': catego.id_catego,
                    'nome_catego': catego.nome_catego,
                    'descri': catego.descri
                })
            return Response({"categorias": categorias})

        except Categorias.DoesNotExist:
            return Response({
                'status': '400',
                'message': f'Sem Categorias para listar'
            })
    @classmethod
    def get_extra_actions(cls):
        return []


class CategoriaAddViewSet(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    @staticmethod
    def post(request, *args, **kwargs):

        id_categoria: str = request.data['id_categoria'] if 'id_categoria' in request.data else None
        nome_catego: int = request.data['nome_catego'] if 'nome_catego' in request.data else None
        descri: float = request.data['descri'] if 'descri' in request.data else None

        if nome_catego and descri:

            catego = Categorias(
                id_catego=id_categoria,
                nome_catego=nome_catego,
                descri=descri
            )

            catego.save()

            return Response({
                'status': '200',
                'message': 'Salvo com sucesso!'
            })

        else:
            return Response({
                'status': '400',
                'message': 'Parametros invalidos!'
            })
