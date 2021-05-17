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
        {{-- <div class="col-lg-6 col-xxl-4">
            @include('pages.widgets._widget-1', ['class' => 'card-stretch gutter-b'])
        </div>

        <div class="col-lg-6 col-xxl-4">
            @include('pages.widgets._widget-2', ['class' => 'card-stretch gutter-b'])
        </div>

        <div class="col-lg-6 col-xxl-4">
            @include('pages.widgets._widget-3', ['class' => 'card-stretch card-stretch-half gutter-b'])
            @include('pages.widgets._widget-4', ['class' => 'card-stretch card-stretch-half gutter-b'])
        </div>

        <div class="col-lg-6 col-xxl-4 order-1 order-xxl-1">
            @include('pages.widgets._widget-5', ['class' => 'card-stretch gutter-b'])
        </div>

        <div class="col-xxl-8 order-2 order-xxl-1">
            @include('pages.widgets._widget-6', ['class' => 'card-stretch gutter-b'])
        </div>

        <div class="col-lg-6 col-xxl-4 order-1 order-xxl-2">
            @include('pages.widgets._widget-7', ['class' => 'card-stretch gutter-b'])
        </div>

        <div class="col-lg-6 col-xxl-4 order-1 order-xxl-2">
            @include('pages.widgets._widget-8', ['class' => 'card-stretch gutter-b'])
        </div>

        <div class="col-lg-12 col-xxl-4 order-1 order-xxl-2">
            @include('pages.widgets._widget-9', ['class' => 'card-stretch gutter-b'])
        </div> --}}
        {{-- <h1>USER, ROLES, PERMISSIONS</h1> --}}
                                             {{-- First --}}
        {{-- <div class="col-xl-3">
            <!--begin::Stats Widget 30-->
            <div class="card card-custom bg-info card-stretch gutter-b"  style="border-radius: 0px; 
                                                                        height: calc(100% - 40px);
                                                                        width: calc(100% - 40px);" >
               <!--begin::Body-->
               <div class="card-body">
                   <div class="col-6 row">
                    <span class="svg-icon svg-icon-2x svg-icon-white">
                        <!--begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/Communication/Group.svg-->
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                           <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <polygon points="0 0 24 0 24 24 0 24"></polygon>
                              <path d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"></path>
                              <path d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fill-rule="nonzero"></path>
                           </g>
                        </svg>
                        <!--end::Svg Icon-->
                     </span>
                     <div class="col-6 row"><span class="font-weight-bold text-white font-size-sm">Marrakech</span></div>
                   </div>
                    <div class="row"><span class="card-title font-weight text-white font-size-h4 mb-0 mt-6 d-block">75%</span></div>
                    <div class="row"><span class="card-title font-weight text-white font-size-h4 mb-0 mt-6 d-block">15%</span></div>    
                    <div class="row"><span class="card-title font-weight text-white font-size-h4 mb-0 mt-6 d-block">10%</span></div>
               </div>                           
            </div>
        </div> --}}
        @for ($i = 0; $i < 12; $i++)
        <div class="col-6 col-md-3">
            <div data-id="_backlog" data-order="1" class="kanban-board shadow-lg bg-white " style="border-radius: 0px; height: calc(100% - 80px); width: 100%; margin-top:10px">
                <header class="kanban-board-header light-dark" style="background-color: #00a1ff; text-align: center;">
                <div class="kanban-title-board">
                    <span class="navi-icon">
                        <i class="la la-campground"></i>
                        </span>
                    <span class="navi-text" style="margin-left: 20px;">Marrakech</span>
                    </div>
                </header>
                <main class="kanban-drag" style="text-align: center">
                    <span class="card-title font-weight text-dark font-size-h1 mb-0 mt-6 d-block">12</span>    
                    <span class="card-title font-weight text-dark font-size-h4 mb-0 mt-6 d-block">Capacité</span>
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

