@extends('layout.default')
@section('content')

<div class="container">
    @php
        // dd($id);
    @endphp
	<!--begin::Card-->
    <!--begin::Search Form-->
    <div class="card card-custom">
        <div class="card-header flex-wrap border-0 pt-6 pb-0">
            <div class="card-title">
                <h2 class="card-label">LISTE DES RESERVATIONS </h2>
            </div>
            <!--Month-Week-Day-->
            <div class="card-toolbar">
                <ul class="nav nav-pills nav-pills-sm nav-dark-75">
                    <li class="nav-item">
                        <a class="nav-link py-2 px-4" data-toggle="tab" href="#kt_tab_pane_1_1">Month</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link py-2 px-4" data-toggle="tab" href="#kt_tab_pane_1_2">Week</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link py-2 px-4 active" data-toggle="tab" href="#kt_tab_pane_1_3">Day</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="card-body">
            <!--begin::Search Form-->
            <div class="mt-2 mb-5 mt-lg-5 mb-lg-10">
                <div class="row align-items-center">
                    <div class="col-lg-9 col-xl-8">
                        <div class="row align-items-center">
                            <div class="col-md-4 my-2 my-md-0">
                                <div class="input-icon">
                                    <input type="text" class="form-control" placeholder="Search..." id="kt_datatable_search_query"/>
                                    <span><i class="flaticon2-search-1 text-muted"></i></span>
                                </div>
                            </div>
                            <div class="col-lg-3 col-xl-4 mt-5 mt-lg-0">
                                <a href="#" class="btn btn-light-primary px-6 font-weight-bold">
                                    Search
                                </a>
                            </div>
                            {{-- <div class="col-md-4 my-2 my-md-0">
                                <div class="d-flex align-items-center">
                                    <label class="mr-3 mb-0 d-none d-md-block">Status:</label>
                                    <select class="form-control" id="kt_datatable_search_status">
                                        <option value="">All</option>
                                        <option value="1">Pending</option>
                                        <option value="2">Delivered</option>
                                        <option value="3">Canceled</option>
                                        <option value="4">Success</option>
                                        <option value="5">Info</option>
                                        <option value="6">Danger</option>
                                    </select>
                                </div>
                            </div> --}}
                            {{-- <div class="col-md-4 my-2 my-md-0">
                                <div class="d-flex align-items-center">
                                    <label class="mr-3 mb-0 d-none d-md-block">Type:</label>
                                    <select class="form-control" id="kt_datatable_search_type">
                                        <option value="">All</option>
                                        <option value="1">Online</option>
                                        <option value="2">Retail</option>
                                        <option value="3">Direct</option>
                                    </select>
                                </div>
                            </div> --}}
                        </div>
                    </div>
                </div>
            </div>
            <!--end::Search Form-->
            <div class="my_table" id="kt_datatable"></div>
        </div>
    </div>
</div>   
            <!--Modal attribution-->
            <div class="modal fade" id="affichage" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centred modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Attribution</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body attribution">
                       
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
            </div>
            <!--Modal check-in-->
            <div class="modal fade" id="checkin" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centred modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Check-in</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body checkin">
                        <div class="checkin_dt" id="checkin_dt"></div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
            </div>
@endsection

{{-- Scripts Section --}}
@push('scripts')
    <script>
        var id = {!!$id!!};
        numresa = 0;
        // console.log(id);
        //  var datatable = $('#kt_datatable').KTDatatable(options);
        "use strict";
        
        var KTDatatables = function() {
            
        var KTDatatableJsonRemoteDemo = function() {
            // init: function() {
            var t;
            t = $("#kt_datatable").KTDatatable({
                data: {
                    type: "remote",
                    source: "{{config('app.url')}}/api/resa_list/"+id,
                    pageSize: 10
                },
                layout: {
                    scroll: !1,
                    footer: !1
                },
                sortable: !0,
                pagination: !0,
                search: {
                    input: $("#kt_datatable_search_query"),
                    key: "generalSearch"
                },
                columns: [{
                    field: "numresa",
                    title: "#",
                    sortable: !1,
                    width: 45,
                    type: "number",
                    // selector: {
                    //     class: ""
                    // },
                    textAlign: "center"
                }, 
                {
                    field: "nom",
                    title: "Nom",
                    width: 80
                },  
                {
                    field: "prenom",
                    title: "Prénom",
                    width: 80
                },  
                {
                    field: "datearr",
                    title: "Arrivée",
                    width: 75
                }, 
                {
                    field: "datedep",
                    title: "Départ",
                    width: 75
                },
                {
                    field: "nuite",
                    title: "Nuité",
                    autoHide : true,
                    width: 35
                },
                {
                    field: "nbrtotpax",
                    title: "Pax",
                    width: 30
                }, 
                {
                    field: "Actions",
                    title: "Actions",
                    width: 50,
                    overflow: "visible",
                    template: function(e) {
                        return '<button type="button" id="'+e.numresa+'" datedep="'+e.datedep+'" datearr="'+e.datearr+'" class="btn btn-light-primary afficher"><span class="navi-icon"><i class="flaticon-eye"></i></span></button> <button type="button" numresa="'+e.numresa+'" class="btn btn-light-success checkbtn"><span class="navi-icon"><i class="flaticon2-check-mark"></i></span></button> '
                    }
                }]     
            }), $("#kt_datatable_search_status").on("change", (function() {
                t.search($(this).val().toLowerCase(), "Status")
            })), 
            t.on("click",".afficher", (function() {
                // console.log($(this).attr('id'));
                var numresa = $(this).attr('id');
                var datedep = $(this).attr('datedep');
                var datearr = $(this).attr('datearr');
                // console.log(datedep);
            $.ajax({ 
                type:'POST', 
                url:"{{route('resa_attribute')}}", 
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')}, 
                data : { numresa,datedep,datearr},
                success:function(data){ 
                    $(".attribution").html(data);
                    $("#affichage").modal('toggle');
                } 
            });
            })), 
            t.on("click",".checkbtn", (function() {
                var numresa = $(this).attr('numresa');
            //     $.ajax({ 
            //     type:'POST', 
            //     url:"{{route('check_in')}}", 
            //     headers: {'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')}, 
            //     data : { numresa },
            //     success:function(data){ 
            //         $(".checkin").html(data);
            //         $("#checkin").modal('toggle');
            //     } 
            // });
            KTDatatableJsonRemoteDemo2(numresa);
            $("#checkin").modal('toggle');
            // $("#checkin_dt").KTDatatable().reload();
            })), 
            $("#kt_datatable_search_type").on("change", (function() {
                t.search($(this).val().toLowerCase(), "Type")
            })), $("#kt_datatable_search_status, #kt_datatable_search_type").selectpicker()
            // }
        };
        var KTDatatableJsonRemoteDemo2 = function(numresa) {
            // init: function() {
            console.log(numresa)
            var t;
            t = $("#checkin_dt").KTDatatable({
                data: {
                    type: "remote",
                    source: "{{config('app.url')}}/api/check_in/"+numresa,
                    pageSize: 10
                },
                layout: {
                    scroll: !1,
                    footer: !1
                },
                    sortable: !0,
                    pagination: !0,
                    search: {
                        input: $("#kt_datatable_search_query"),
                        key: "generalSearch"
                },
                    columns: [{
                    field: "xref",
                    title: "#",
                    sortable: !1,
                    width: 15,
                    // selector: true,
                    type: "number",
                    textAlign: "center",
                    template: function(e) {
                        var checkbox = '<label class="checkbox checkbox-single"><input type="checkbox"><span></span></label>'
                        if(e.chin=='O') {
                            checkbox = '<label class="checkbox checkbox-single"><input type="checkbox" checked disabled><span></span></label>';
                        }
                        return checkbox;
                    }
                }, 
                {
                    field: "nchambre",
                    title: "Numéro",
                    width: 80
                },  
                {
                    field: "nom",
                    title: "Nom",
                    width: 80
                },  
                {
                    field: "nationalit",
                    title: "Nationalité",
                    width: 75
                },
                {
                    field: "prix",
                    title: "Prix",
                    width: 30
                }, 
                {
                    field: "chin",
                    title: "Etat",
                    width: 75,
                    template : function(e){
                        var span = '<span class="label label-lg font-weight-bold label-light-danger label-inline">OUT</span>';
                        // console.log(e.chin)
                        if(e.chin=='O') {
                            span = '<span class="label label-lg font-weight-bold label-light-success label-inline">IN</span>';
                        }
                        return span
                    }
                }, 
                // {
                //     field: "nbrper",
                //     title: "NombreP",
                //     width: 75
                // },
                // {
                //     field: "enf1",
                //     title: "E1",
                //     width: 35
                // },
                // {
                //     field: "enf2",
                //     title: "E2",
                //     width: 30
                // },
                // {
                //     field: "enf3",
                //     title: "E3",
                //     width: 30
                // },
                // {
                //     field: "chin",
                //     title: "Check-in",
                //     width: 30
                // },
                // {
                //     field: "nper",
                //     title: "Check-in",
                //     width: 30
                // }
                ]     
            }), $("#kt_datatable_search_status").on("change", (function() {
                t.search($(this).val().toLowerCase(), "Status")
            })),  
            $("#kt_datatable_search_type").on("change", (function() {
                t.search($(this).val().toLowerCase(), "Type")
            })), $("#kt_datatable_search_status, #kt_datatable_search_type").selectpicker()
            // }
        };
            return {
                init : function(){
                    KTDatatableJsonRemoteDemo();
                    KTDatatableJsonRemoteDemo2(numresa);
                }
            };
        }();

        jQuery(document).ready((function() {
            KTDatatables.init()
        }));
    </script>
@endpush