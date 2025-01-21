from django.http import HttpResponse
from prometheus_client import CONTENT_TYPE_LATEST, generate_latest


def prometheus_view(request):
    """
    Expose Prometheus metrics.
    """
    metrics = generate_latest()
    return HttpResponse(metrics, content_type=CONTENT_TYPE_LATEST)
