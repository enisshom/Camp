@extends('layout.default')
@section('content')

@section('styles')
    <link href="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/plugins/custom/kanban/kanban.bundle.css?v=7.2.7" rel="stylesheet" type="text/css" />
    <style>
        .kanban-board .kanban-drag {
            min-height: 180px;
            padding: 0px;
        }
        .divider {
            border-top: 1px solid #bbb;
            margin-top: 30px;
            margin-bottom: 5px;
        }
    </style> 
@endsection

    <div class="row">
        @for ($i = 0; $i < 6; $i++)
        <div class="col-6 col-md-4 col-sm-4 col-lg-2">
            <div data-id="_backlog" data-order="1" class="kanban-board shadow-lg bg-white " style="border-radius: 0px; height: calc(100% - 50px); width: 100%; margin-top:10px">
                <main class="kanban-drag" style="text-align: center">
                    <span class="card-title font-weight text-dark font-size-h1 mb-0 mt-6 d-block" style="color: red !important">4</span>    
                    <span class="card-title font-weight text-dark font-size-h5 mb-0 mt-6 d-block">Arrivals</span>
                    <hr class="divider">
                    <span>Arrived : 3</span>
                </main>
                {{-- <footer>Arrived : 3</footer> --}}
            </div>
        </div>
        @endfor
        @can($ville)
            <h1>U have permissions</h1>
        @endcan
    </div>
    
@endsection