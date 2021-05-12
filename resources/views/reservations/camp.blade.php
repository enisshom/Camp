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
@endsection
@can($site->lib_class)
@php
    // dd($site);
@endphp
    <br>
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
            </div>
            <div class="pull-right">
                <a class="btn btn-primary btn-lg" href="{{ route('camps') }}"> Back</a><br><br>
            </div>
        </div>
    </div>    
    <h1>{{$site->lib_class}}</h1>
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
        @php
            // dd($site->lib_class);
        @endphp
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
            </div>
        </div>
        <div class="col-6 col-md-4 col-sm-4 col-lg-2">
            <div data-id="_backlog" data-order="1" class="kanban-board shadow-lg bg-white " style="border-radius: 0px; height: calc(100% - 50px); width: 100%; margin-top:10px">
                <main class="kanban-drag" style="text-align: center">
                    <span class="card-title font-weight text-dark font-size-h1 mb-0 mt-6 d-block">{{$site->site_blocked}}</span>    
                    <h5 style="padding-bottom:35px">BLOQUEES</h5>
                    <div class="bg-dark"><span style="color: #fff">Bloqués : 3</span></div>
                </main>
            </div>
        </div>
        <div class="col-6 col-md-4 col-sm-4 col-lg-2">
            <div data-id="_backlog" data-order="1" class="kanban-board shadow-lg bg-white " style="border-radius: 0px; height: calc(100% - 50px); width: 100%; margin-top:10px">
                <main class="kanban-drag" style="text-align: center">
                    <span class="card-title font-weight text-dark font-size-h1 mb-0 mt-6 d-block">4</span>    
                    <h5 style="padding-bottom:35px">DELOGEMENT</h5>
                    <div class="bg-dark"><span style="color: #fff">Déplacés : 3</span></div>
                </main>
            </div>
        </div>
    </div>
    
    @else
    <h1>U don't have permission</h1>
@endcan
@endsection 