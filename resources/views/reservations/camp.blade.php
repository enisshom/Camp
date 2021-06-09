@extends('layout.default')
@section('content')

@section('styles')
    <link href="{{asset('css/Kanban.bundle.css')}}" rel="stylesheet" type="text/css" />
    
    <style>
        .kanban-board .kanban-drag {
            height: 135px !important;
            padding: 0px;
        }
        .divider {
            border-top: 1px solid #bbb;
            margin-top: 30px;
            margin-bottom: 5px;
        }
    </style> 
    
    {{-- <style>
        h2 {
            font-size: 25px;
            color: #fff;
            font-weight: 500;
        }

        .card {
            max-height: 200px;
            min-height: 200px;
            max-width: 200px;
            min-width: 200px;
        }

        #team .card {
            border-radius: 5px;
            border: 0;
            box-shadow: 5px 5px 10px #9e9e9e;
            transition: all 0.3s ease-in;
            -webkit-transition: all 0.3s ease-in;
            -moz-transition: all 0.3s ease-in;
        }

        #team .card:hover {
            border-radius: 5px;
            border: none;
            box-shadow: 5px 5px 10px #9E9E9E;
        }

        #crd ~ #crd {
            margin-left: 30px;
        }
    </style> --}}
@endsection

@push('scripts')
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">

        // Load Charts and the corechart package.
        google.charts.load('current', {'packages':['corechart']});

        // Draw the pie chart for Sarah's pizza when Charts is loaded.
        google.charts.setOnLoadCallback(drawSarahChart);

        // Draw the pie chart for the Anthony's pizza when Charts is loaded.
        google.charts.setOnLoadCallback(drawAnthonyChart);

        // Callback that draws the pie chart for Sarah's pizza.
        function drawSarahChart() {

            // Create the data table for Sarah's pizza.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            data.addRows([
            ['Mushrooms', 1],
            ['Onions', 1],
            ['Olives', 2],
            ['Zucchini', 2],
            ['Pepperoni', 1]
            ]);

            // Set options for Sarah's pie chart.
            var options = {title:'How Much Pizza Sarah Ate Last Night',
                        width:400,
                        height:300};

            // Instantiate and draw the chart for Sarah's pizza.
            var chart = new google.visualization.PieChart(document.getElementById('Sarah_chart_div'));
            chart.draw(data, options);
        }

        // Callback that draws the pie chart for Anthony's pizza.
        function drawAnthonyChart() {

            // Create the data table for Anthony's pizza.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            data.addRows([
            ['Mushrooms', 2],
            ['Onions', 2],
            ['Olives', 2],
            ['Zucchini', 0],
            ['Pepperoni', 3]
            ]);

            // Set options for Anthony's pie chart.
            var options = {title:'How Much Pizza Anthony Ate Last Night',
                        width:400,
                        height:300};

            // Instantiate and draw the chart for Anthony's pizza.
            var chart = new google.visualization.PieChart(document.getElementById('Anthony_chart_div'));
            chart.draw(data, options);
        }
    </script>
@endpush

@can($site->lib_class)
    <br>
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('camps') }}"><i class="fa fas fa-arrow-left"></i></a><br><br>
            </div>
        </div>
    </div>    
    <h1 style="text-align:center">{{$site->lib_class}}</h1>
    {{-- <section id="team">
        <div class="my-1 py-6 text-center">
            <div class="row">
                <div class="col-lg-2 col-md-6" id="crd">
                    <div class="card col-6 col-md-4 col-sm-4 col-lg-2" style="background-color: #9E9E9E;">
                        <div class="card-body">
                            <br><br>
                            <h2>ARRIVEES</h2>
                            <h2>4</h2>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-6 col-md-4 col-sm-4 col-lg-2" id="crd">
                    <div class="card mb-5" style="background-color: #9E9E9E;">
                        <div class="card-body">
                            <br><br>
                            <h2>DEPARTS</h2>
                            <h2>4</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> --}}
    <div class="row">  
        <div class="col-6 col-md-4 col-sm-4 col-lg-2">
            <div data-id="_backlog" data-order="1" class="kanban-board shadow-lg bg-white " style="border-radius: 0px; height: calc(100% - 50px); width: 100%; margin-top:10px">
                <main class="kanban-drag" style="text-align: center">
                    <span class="card-title font-weight text-dark font-size-h1 mb-0 mt-6 d-block">4</span>    
                    <h5 style="padding-bottom:35px">ARRIVEES</h5>
                    <div class="bg-dark"><span style="color: #fff">Arrivées prévues : 3</span></div>
                </main>
            </div>
        </div>
        <div class="col-6 col-md-4 col-sm-4 col-lg-2">
            <div data-id="_backlog" data-order="1" class="kanban-board shadow-lg bg-white " style="border-radius: 0px; height: calc(100% - 50px); width: 100%; margin-top:10px">
                <main class="kanban-drag" style="text-align: center">
                    <span class="card-title font-weight text-dark font-size-h1 mb-0 mt-6 d-block">4</span>    
                    <h5 style="padding-bottom:35px">DEPARTS</h5>
                    <div class="bg-dark"><span style="color: #fff">Départs prévus : 3</span></div>
                </main>
            </div>
        </div>
        <div class="col-6 col-md-4 col-sm-4 col-lg-2">
            <div data-id="_backlog" data-order="1" class="kanban-board shadow-lg bg-white " style="border-radius: 0px; height: calc(100% - 50px); width: 100%; margin-top:10px">
                <main class="kanban-drag" style="text-align: center">
                    <span class="card-title font-weight text-dark font-size-h1 mb-0 mt-6 d-block">{{$site->site_occuped}}</span>    
                    <h5 style="padding-bottom:35px">IN HOUSE</h5>
                    <div class="bg-dark"><span style="color: #fff">-</span></div>
                </main>
            </div>
        </div>
        <div class="col-6 col-md-4 col-sm-4 col-lg-2">
            <div data-id="_backlog" data-order="1" class="kanban-board shadow-lg bg-white " style="border-radius: 0px; height: calc(100% - 50px); width: 100%; margin-top:10px">
                <main class="kanban-drag" style="text-align: center">
                    <span class="card-title font-weight text-dark font-size-h1 mb-0 mt-6 d-block">{{$site->site_available}}</span>    
                    <h5 style="padding-bottom:35px">DISPONIBLES</h5>
                    <div class="bg-dark"><span style="color: #fff">Capacité : {{$site->site_cap}}</span></div>
                </main>
                {{-- <footer>Arrived : 3</footer> --}}
            </div>
        </div>
        <div class="col-6 col-md-4 col-sm-4 col-lg-2">
            <div data-id="_backlog" data-order="1" class="kanban-board shadow-lg bg-white " style="border-radius: 0px; height: calc(100% - 50px); width: 100%; margin-top:10px">
                <main class="kanban-drag" style="text-align: center">
                    <span class="card-title font-weight text-dark font-size-h1 mb-0 mt-6 d-block">{{$site->site_blocked}}</span>    
                    <h5 style="padding-bottom:35px">BLOQUEES</h5>
                    <div class="bg-dark"><span style="color: #fff">Bloqués : 3</span></div>
                </main>
                {{-- <footer>Arrived : 3</footer> --}}
            </div>
        </div>
        <div class="col-6 col-md-4 col-sm-4 col-lg-2">
            <div data-id="_backlog" data-order="1" class="kanban-board shadow-lg bg-white " style="border-radius: 0px; height: calc(100% - 50px); width: 100%; margin-top:10px">
                <main class="kanban-drag" style="text-align: center">
                    <span class="card-title font-weight text-dark font-size-h1 mb-0 mt-6 d-block">4</span>    
                    <h5 style="padding-bottom:35px">DELOGEMENT</h5>
                    <div class="bg-dark"><span style="color: #fff">Déplacés : 3</span></div>
                </main>
                {{-- <footer>Arrived : 3</footer> --}}
            </div>
        </div>
    </div>
    <br><br>
    
    <!--Table and divs that hold the pie charts-->
    <div class="row">
        <table class="columns">
                <tr>
                    <div class="col-6">
                        <td>
                            <div id="Sarah_chart_div" style="border: 1px solid #ccc;"></div>
                        </td>
                    </div>
                    <div class="col-6">
                        <td>
                            <div id="Anthony_chart_div" style="border: 1px solid #ccc;" ></div>
                        </td>
                    </div>
                </tr>
        </table>
    </div>
    
@else
    <h1>Pas de permission</h1>
@endcan
@endsection 