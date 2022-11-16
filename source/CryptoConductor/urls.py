from django.contrib import admin
from django.urls import path, re_path
from django.urls import include
from rest_framework import routers
from API import views
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'Projects', views.ProjectViewSet)
router.register(r'Projects/<int:id>', views.ProjectDetailViewSet)
router.register(r'ProjectEntries', views.ProjectEntryViewSet)
router.register(r'ProjectEntries/<int:id>', views.ProjectEntryDetailViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    re_path('^', views.index, name="index")
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
