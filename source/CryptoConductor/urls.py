from django.contrib import admin
from django.urls import path, re_path
from django.urls import include
from rest_framework import routers
from API import views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth.decorators import login_required

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'specialties', views.SpecialtyListViewSet)
router.register(r'niches', views.NicheListViewSet)
router.register(r'users', views.UserListViewSet)
router.register(r'groups', views.GroupListViewSet)
router.register(r'projectEntries', views.ProjectEntryListViewSet)
router.register(r'projects', views.ProjectListViewSet)
# router.register(r'user-to-projects', views.UserToProjectListViewSet)
# router.register(r'nicheToProject', views.NicheToProjectListViewSet)
# router.register(r'specialtyToProject', views.SpecialtyToProjectListViewSet)
# router.register(r'denialToProject', views.DenialToProjectListViewSet)

router.register(r'specialties/<int:id>', views.SpecialtyDetailViewSet)
router.register(r'niches/<int:id>', views.NicheDetailViewSet)
router.register(r'users/<int:id>', views.UserDetailViewSet)
router.register(r'groups/<int:id>', views.GroupDetailViewSet)
router.register(r'projectEntries/<int:id>', views.ProjectEntryDetailViewSet)
router.register(r'projects/<int:id>', views.ProjectDetailViewSet)
# router.register(r'userToProject/<int:id>', views.UserToProjectDetailViewSet)
# router.register(r'nicheToProject/<int:id>', views.NicheToProjectDetailViewSet)
# router.register(r'specialtyToProject/<int:id>', views.SpecialtyToProjectDetailViewSet)
# router.register(r'denialToProject/<int:id>', views.DenialToProjectDetailViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('session/', views.Session.as_view()),
    re_path('^', views.index, name="index")
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
