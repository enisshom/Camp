@extends('layout.default')
@section('content')

@section('styles')
    {{-- <link href="{{ asset('css/Kanban.bundle.css') }}" rel="stylesheet" type="text/css" /> --}}

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
@endsection

@push('scripts')
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
        // Load Charts and the corechart package.
        google.charts.load('current', {
            'packages': ['corechart']
        });

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
            data.addRows([ ['Occupée', 1], ['Disponible', 2], ['Bloquée', 3] ]);

            // Set options for Sarah's pie chart.
            var options = { title: 'Statistiques des réservations', width: 400, height: 300 };

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
            data.addRows([ ['Propre', 2], ['Fermée', 1] ]);

            // Set options for Anthony's pie chart.
            var options = { title: 'Etat de tentes', width: 400, height: 300 };

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
                <a class="btn btn-primary" href="{{ route('camps') }}"><i class="fa fas fa-arrow-left"></i></a><br>
            </div>
        </div>
    </div>
    <h1 style="text-align:center">{{ $site->lib_class }}</h1>
    <div class="row">
        <div class="col-6 col-md-4 col-sm-4 col-lg-2">
            <div data-id="_backlog" data-order="1" class="kanban-board shadow-lg bg-white "
                style="border-radius: 5px; height: calc(100% - 50px); width: 100%; margin-top:10px">
                <main class="kanban-drag" style="text-align: center">
                    <span class="card-title font-weight text-dark font-size-h1 mb-0 mt-6 d-block">4</span>
                    <h5 style="padding-bottom:35px">ARRIVEES</h5>
                    <div class="bg-dark" style="border-radius: 2px;"><span style="color: #fff;">Arrivées prévues : 3</span>
                    </div>
                </main>
            </div>
        </div>
        <div class="col-6 col-md-4 col-sm-4 col-lg-2">
            <div data-id="_backlog" data-order="1" class="kanban-board shadow-lg bg-white "
                style="border-radius: 5px; height: calc(100% - 50px); width: 100%; margin-top:10px">
                <main class="kanban-drag" style="text-align: center">
                    <span class="card-title font-weight text-dark font-size-h1 mb-0 mt-6 d-block">4</span>
                    <h5 style="padding-bottom:35px">DEPARTS</h5>
                    <div class="bg-dark" style="border-radius: 2px;"><span style="color: #fff">Départs prévus : 3</span>
                    </div>
                </main>
            </div>
        </div>
        <div class="col-6 col-md-4 col-sm-4 col-lg-2">
            <div data-id="_backlog" data-order="1" class="kanban-board shadow-lg bg-white "
                style="border-radius: 5px; height: calc(100% - 50px); width: 100%; margin-top:10px">
                <main class="kanban-drag" style="text-align: center">
                    <span
                        class="card-title font-weight text-dark font-size-h1 mb-0 mt-6 d-block">{{ $site->site_occuped }}</span>
                    <h5 style="padding-bottom:35px">IN HOUSE</h5>
                    <div class="bg-dark" style="border-radius: 2px;"><span style="color: #fff">-</span></div>
                </main>
            </div>
        </div>
        <div class="col-6 col-md-4 col-sm-4 col-lg-2">
            <div data-id="_backlog" data-order="1" class="kanban-board shadow-lg bg-white "
                style="border-radius: 5px; height: calc(100% - 50px); width: 100%; margin-top:10px">
                <main class="kanban-drag" style="text-align: center">
                    <span
                        class="card-title font-weight text-dark font-size-h1 mb-0 mt-6 d-block">{{ $site->site_available }}</span>
                    <h5 style="padding-bottom:35px">DISPONIBLES</h5>
                    <div class="bg-dark" style="border-radius: 2px;"><span style="color: #fff">Capacité :
                            {{ $site->site_cap }}</span></div>
                </main>
                {{-- <footer>Arrived : 3</footer> --}}
            </div>
        </div>
        <div class="col-6 col-md-4 col-sm-4 col-lg-2">
            <div data-id="_backlog" data-order="1" class="kanban-board shadow-lg bg-white "
                style="border-radius: 5px; height: calc(100% - 50px); width: 100%; margin-top:10px">
                <main class="kanban-drag" style="text-align: center">
                    <span
                        class="card-title font-weight text-dark font-size-h1 mb-0 mt-6 d-block">{{ $site->site_blocked }}</span>
                    <h5 style="padding-bottom:35px">BLOQUES</h5>
                    <div class="bg-dark" style="border-radius: 2px;"><span style="color: #fff">Bloqués : 3</span></div>
                </main>
                {{-- <footer>Arrived : 3</footer> --}}
            </div>
        </div>
        <div class="col-6 col-md-4 col-sm-4 col-lg-2">
            <div data-id="_backlog" data-order="1" class="kanban-board shadow-lg bg-white "
                style="border-radius: 5px; height: calc(100% - 50px); width: 100%; margin-top:10px">
                <main class="kanban-drag" style="text-align: center">
                    <span class="card-title font-weight text-dark font-size-h1 mb-0 mt-6 d-block">4</span>
                    <h5 style="padding-bottom:35px">DELOGEMENT</h5>
                    <div class="bg-dark" style="border-radius: 2px;"><span style="color: #fff">Déplacés : 3</span></div>
                </main>
                {{-- <footer>Arrived : 3</footer> --}}
            </div>
        </div>
    </div>
    <br><br><br>

    <!--Table and divs that hold the pie charts-->
    <div class="row">
        <div class="col-6">
            <div id="Sarah_chart_div"></div>
        </div>
        <div class="col-6">
            <div id="Anthony_chart_div"></div>
        </div>
    </div>

@else
    <script>
        window.location = "{{ route('permission') }}";;
    </script>
@endcan
@endsection
