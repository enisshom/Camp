<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    {{-- <link rel="stylesheet" href="bootstrap.css"> --}}
    <link rel="stylesheet" href="font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossorigin="anonymous"
    />
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        body{
            font-family: 'Raleway',sans-serif;
            font-size: 14px;
            font-weight: 400;
            color: #777;
        }
        h1{
            font-size: 36px;
            color: #555;
            font-weight: bold;
        }
        h3{
            font-size: 24px;
            color: #333;
            font-weight: bold;
        }
        #camp img{
            margin-top: -50px;
        }
        #camp i{
            font-size: 26px;
            color: #555;
        }
        #camp p{
            font-weight: 500;
        }
        #camp .card{
            border-radius: 0;
            box-shadow: 5px 5px 15px #000;
            transition: all 0.3s ease-in;
            -webkit-transition: all 0.3s ease-in;
            -moz-transition: all 0.3s ease-in;
        }
        #camp .card:hover{
            background: #7371cc;
            color: #fff;
            border-radius: 5px;
            border: none;
            box-shadow: 5px 5px 10px #9E9E9E;
        }
        #camp .card:hover h3, #camp .card:hover i{
            color: #fff;
        }
    </style>
</head>
<body>
    <section id="camp">
        <div class="container my-3 py-5 text-center">
            <div class="row mb-5">
                <div class="col">
                    <h1>Gestion des Bivouacs</h1>
                </div>
            </div>
            <div class="row">
                {{-- @php
                    dd(sites);
                @endphp --}}
                @foreach ($sites as $site)
                <div class="col-lg-3 col-md-6" style="margin-bottom: 50px">
                    <div class="card" style="cursor:pointer;">
                        <div class="card-body">
                            <img src="https://www.bivouacsouslesetoiles.org/fichiers_site/a5833has/produits/20170102_173729.jpg" alt="" class="img-fluid rounded-circle w-50 mb-3">
                            {{-- <h3>Marrakech</h3> --}}
                            <h3 class="ville" id="{{$site->id}}">{{$site->lib_class}}</h3>
                            <p>Rooms
                                {{$site->site_occuped}}/{{$site->site_cap}}
                            </p>
                            <div class="d-flex flex-row justify-content-center">
                                <div class="p-4">
                                    <a href="#">
                                        <span style="color: black; font-size: 22px">{{$site->site_pax}}
                                        <i class="fas fa-male icon-lg" style="color: black"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
            
        </div>
    </section>
</body>
    <script>
        $(".card").on('click',function() {
            var id = $(this).find('.ville')[0].id;
            var ville = $(this).find('.ville').html();
            $(location).attr('href','/camp/'+id);
        });           
    </script>
</html>