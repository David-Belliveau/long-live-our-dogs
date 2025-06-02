from django.contrib import admin
from django.utils.html import format_html
from .models import MedicalRecord

@admin.register(MedicalRecord)
class MedicalRecordAdmin(admin.ModelAdmin):
    list_display = ['id', 'file_link', 'uploaded_at']
    readonly_fields = ['uploaded_at']
    
    def file_link(self, obj):
        if obj.file:
            return format_html(
                '<a href="{}" target="_blank">Download: {}</a>',
                obj.file.url,
                obj.file.name.split('/')[-1]
            )
        return "No file"
    file_link.short_description = 'File'