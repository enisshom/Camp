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
        margin-top: 100px;
    }
</style>
<body>
    <br>
    <div class="container">
        <div class="jumbotron text-center">
            <img src="media/error/no_permission.png">
            <h1>Oops!</h1>
            <h3>Vous n'avez pas de permission pour accéder!</h3><br><br>
            <a href="{{ route('camps') }}" class="btn btn-danger">
               <span class="glyphicon glyphicon-chevron-left"></span> ACCUEIL</a>
        </div>
    </div>
</body>
</html>