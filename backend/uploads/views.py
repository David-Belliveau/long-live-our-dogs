from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import MedicalRecord

@csrf_exempt
def upload_file(request):
    if request.method == 'POST' and request.FILES.get('file'):
        uploaded_file = request.FILES['file']
        record = MedicalRecord.objects.create(file=uploaded_file)
        return JsonResponse({'message': 'File uploaded successfully', 'filename': record.file.name})
    
    return JsonResponse({'error': 'No file provided'}, status=400)
