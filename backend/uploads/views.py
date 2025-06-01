from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from django.middleware.csrf import get_token
from .models import MedicalRecord
import json

# View to provide CSRF token to frontend
@ensure_csrf_cookie
def get_csrf_token(request):
    """
    Endpoint for frontend to get CSRF token
    """
    token = get_token(request)
    response = JsonResponse({'csrfToken': token})
    
    # Force set the CSRF cookie for cross-origin requests
    response.set_cookie(
        'csrftoken',
        token,
        secure=True,
        samesite='None',
        httponly=False,
    )
    return response

@csrf_exempt
def upload_file(request):
    """
    Secure file upload endpoint (CSRF exempt for cross-origin)
    """
    if request.method == 'POST' and request.FILES.get('file'):
        uploaded_file = request.FILES['file']
        record = MedicalRecord.objects.create(file=uploaded_file)
        return JsonResponse({
            'message': 'File uploaded successfully', 
            'filename': record.file.name
        })
    
    if request.method == 'GET':
        return JsonResponse({
            'message': 'POST a file to this endpoint to upload medical records',
            'required_fields': ['file'],
            'csrf_required': False
        })
    
    return JsonResponse({'error': 'No file provided'}, status=400)