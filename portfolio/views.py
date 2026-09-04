from django.shortcuts import render


def home(request):

    return render(
        request,
        "portfolio/home.html"
    )


def portfolio(request):

    return render(
        request,
        "portfolio/portfolio.html"
    )

def projects(request):

    return render(
        request,
        "portfolio/projects.html"
    )

def achievements(request):

    return render(
        request,
        "portfolio/achievements.html"
    )