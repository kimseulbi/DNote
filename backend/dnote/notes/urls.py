from django.urls import re_path
from .views import NoteViewSet

note_list = NoteViewSet.as_view({"get": "list", "post": "create"})

note_detail = NoteViewSet.as_view(
    {"get": "retrieve", "patch": "partial_update", "delete": "destroy"}
)


urlpatterns = [
    re_path("^notes/$", note_list, name="note-list"),
    re_path("^notes/(?P<pk>[0-9]+)/$", note_detail, name="note-detail"),
]
