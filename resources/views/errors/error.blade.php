<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Page d'erreur</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<style type="text/css">
    img {
        width: 100px;
        height: 100px;
    }
    .jumbotron {
        margin-top: 150px;
    }
</style>
<body>
    <div class="container">
        <div class="jumbotron text-center">
            <img src="media/error/verrou.png">
            <h1>Oops!</h1>
            <p>Vous n'avez pas de permission pour accéder à cette page.</p>
            <a href="{{ route('camps') }}" class="btn btn-primary mb1 black bg-aqua btn-lg">
               <span class="glyphicon glyphicon-chevron-left"></span> ACCUEIL</a>
        </div>
    </div>
</body>
</html>