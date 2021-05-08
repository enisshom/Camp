<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="http://192.168.1.78:8000/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css"/>
    <link href="http://192.168.1.78:8000/plugins/custom/prismjs/prismjs.bundle.css" rel="stylesheet" type="text/css"/>
    <link href="http://192.168.1.78:8000/css/style.bundle.css" rel="stylesheet" type="text/css"/>
    <link href="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/plugins/custom/kanban/kanban.bundle.css?v=7.2.7" rel="stylesheet" type="text/css" />
    <link href="http://192.168.1.78:8000/css/themes/layout/header/base/light.css" rel="stylesheet" type="text/css"/>
    <link href="http://192.168.1.78:8000/css/themes/layout/header/menu/light.css" rel="stylesheet" type="text/css"/>
    <link href="http://192.168.1.78:8000/css/themes/layout/aside/dark.css" rel="stylesheet" type="text/css"/>
    <link href="http://192.168.1.78:8000/css/themes/layout/brand/dark.css" rel="stylesheet" type="text/css"/>
     
    <link rel="shortcut icon" href="http://192.168.1.78:8000/media/logos/favicon.ico" />

        
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700">
    <style>
        .kanban-board header {
            font-size: 15px;
            padding: 5px;
        }
        .kanban-board .kanban-drag {
            min-height: 175px;
            padding: 0px;
        }
        .divider{
            margin-top: 15px !important;
            margin-bottom: 5px !important;
        }
    </style>
</head>
<body>
    <div class="row">
        @php
            // dd($sites);
        @endphp
        @foreach ($sites as $site)
        
        <div class="col-6 col-md-3 col-sm-4 col-lg-3">
            <div data-id="_backlog" data-order="1" class="kanban-board shadow-lg bg-white " style="border-radius: 0px; height: calc(100% - 80px); width: 100%;margin-top:10px; cursor:pointer;">
                <header class="kanban-board-header bg-dark" style="color:white ;text-align: center;">
                <div class="kanban-title-board">
                    <span class="navi-icon">
                        <i class="la la-campground"></i>
                        </span>
                    {{-- <span class="navi-text ville" id="{{$site['id']}}" style="margin-left: 10px;">{{$site['ville']}}</span> --}}
                    <span class="navi-text ville" id="{{$site->id}}" style="margin-left: 10px;">{{$site->lib_class}}</span>
                </div>
                </header>
                <main class="kanban-drag" style="text-align: center;">
                    <span class="card-title font-weight text-dark font-size-h1 mb-0 mt-6 d-block link">{{$site->site_occuped}}/{{$site->site_cap}}</span>    
                    <h5>Rooms</h5>
                    <hr class="divider">
                    <span class="font-size-h3" style="color: black;">{{$site->site_pax}}
                        <i class="fas fa-male icon-lg" style="color: black"></i>
                    </span>
                    {{-- <div class="bg-dark"><span style="color: #fff">Total Pax:</span></div> --}}
                    {{-- <span class="card-title font-weight text-dark font-size-h5 mb-0 mt-6 d-block link">Rooms</span>     --}}
                    {{-- <span class="card-title font-weight text-dark font-size-h4 mb-0 mt-6 d-block">Capacité</span> --}}
                </main>
                {{-- <footer></footer> --}}
            </div>
        </div>
        @endforeach
    </div>
</body>
{{-- Scripts Section --}}
    <script src="http://192.168.1.78:8000/plugins/global/plugins.bundle.js" type="text/javascript"></script>
    <script src="http://192.168.1.78:8000/plugins/custom/prismjs/prismjs.bundle.js" type="text/javascript"></script>
    <script src="http://192.168.1.78:8000/js/scripts.bundle.js" type="text/javascript"></script>
    <script src="{{ asset('js/pages/widgets.js') }}" type="text/javascript"></script>
    <script>
        $(".kanban-board").on('click',function() {
            var id = $(this).find('.ville')[0].id;
            var ville = $(this).find('.ville').html();
            $(location).attr('href','/camp/'+id);
        });           
    </script>
</html>

