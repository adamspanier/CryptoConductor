from django.contrib import admin
from django.urls import path, re_path
from django.urls import include
from rest_framework import routers
from API import views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth.decorators import login_required

# Define default router, disable trailing slash for compatibility
router = routers.DefaultRouter(trailing_slash=False)
router.register(r'specialties', views.SpecialtyListViewSet)
router.register(r'niches', views.NicheListViewSet)
router.register(r'users', views.UserListViewSet)
router.register(r'groups', views.GroupListViewSet)
router.register(r'projectEntries', views.ProjectEntryListViewSet)
router.register(r'projects', views.ProjectListViewSet)
router.register(r'profiles', views.ProfileListViewSet)

# Individual view sets
router.register(r'specialties/<int:id>', views.SpecialtyListViewSet)
router.register(r'niches/<int:id>', views.NicheListViewSet)
router.register(r'users/<int:id>', views.UserListViewSet)
router.register(r'groups/<int:id>', views.GroupListViewSet)
router.register(r'projectEntries/<int:id>', views.ProjectEntryListViewSet)
router.register(r'projects/<int:id>', views.ProjectListViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('session/', views.Session.as_view()),
    re_path('^', views.index, name="index")
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
