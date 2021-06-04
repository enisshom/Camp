@extends('layout.default')
@section('content')

<div class="container">
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
                        <a class="nav-link py-2 px-4" data-toggle="tab" href="#kt_tab_pane_1_1">Mois</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link py-2 px-4" data-toggle="tab" href="#kt_tab_pane_1_2">Semaine</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link py-2 px-4 active" data-toggle="tab" href="#kt_tab_pane_1_3">Aujourd'hui</a>
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
                                    <input type="text" class="form-control" placeholder="Chercher..." id="kt_datatable_search_query"/>
                                    <span><i class="flaticon2-search-1 text-muted"></i></span>
                                </div>
                            </div>
                            <div class="col-lg-3 col-xl-4 mt-5 mt-lg-0">
                                <a href="#" class="btn btn-light-primary px-6 font-weight-bold">
                                    Chercher
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
    <!--begin::Modal-->
        <div class="modal fade" id="affichage" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centred modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"><span id="numresa"></span></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body attribution">
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    <button type="button" class="btn btn-primary save" data-dismiss="modal">Enregistrer</button>
                </div>
                </div>
            </div>
        </div>
    <!--end::Modal-->
            
    <!--Modal check-in-->
    <!--begin::Modal-->
        <div id="kt_datatable_modal" class="modal fade" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-centered">
                <div class="modal-content" style="min-height: 590px;">
                    <div class="modal-body ">
                        <!--begin: Datatable-->
                        <div class="datatable datatable-bordered datatable-head-custom" id="kt_datatable_sub"></div>
                        <!--end: Datatable-->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light-primary font-weight-bold text-uppercase" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary font-weight-bold text-uppercase eng" data-dismiss="modal">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    <!--end::Modal-->
           
@endsection

{{-- Scripts Section --}}
@push('scripts')
    <script>
        var id = {!!$id!!};
        var numresa = 0;
        
        'use strict';
// Class definition

var KTDatatableModal = function () {

        var initDatatable = function () {
            var el = $('#kt_datatable');

            var datatable = el.KTDatatable({
                // datasource definition
                
                data: {
                    type: 'remote',
                    source: "{{config('app.url')}}/api/resa_list/"+id,
                    pageSize: 10, // display 20 records per page
                    serverPaging: true,
                    serverFiltering: false,
                    serverSorting: true,
                    },

                    // layout definition
                    layout: {
                        theme: 'default',
                        scroll: false,
                        height: null,
                        footer: false,
                    },

                    // column sorting
                    sortable: true,

                    pagination: true,

                    search: {
                        input: el.find('#kt_datatable_search_query'),
                        key: 'generalSearch'
                    },

                    // columns definition
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
                                return '<button type="button" id="'+e.numresa+'" datedep="'+e.datedep+'" datearr="'+e.datearr+'" class="btn btn-light-primary afficher"><span class="navi-icon"><i class="flaticon-eye"></i></span></button> <button type="button" numresa="'+e.numresa+'" class="btn btn-light-success checkbtn"><span class="navi-icon"><i class="flaticon2-check-mark"></i></span></button>';
                            }
                        }],
                });

                var card = datatable.closest('.card');

                $('#kt_datatable_search_status').on('change', function () {
                    datatable.search($(this).val().toLowerCase(), 'Status');
                });

                $('#kt_datatable_search_type').on('change', function () {
                    datatable.search($(this).val().toLowerCase(), 'Type');
                });

                $('#kt_datatable_search_status, #kt_datatable_search_type').selectpicker();

                datatable.on("click",".afficher", (function() {
                    var numresa = $(this).attr('id');
                    var datedep = $(this).attr('datedep');
                    var datearr = $(this).attr('datearr');
                    $(".modal-title").html('<h5>Attribution - Réservation N° <span id="numresa">'+numresa+'</span></h5>')
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
                })); 
                datatable.on('click', '.checkbtn', function () {
                
                    var numresa = $(this).attr('numresa');
                    initSubDatatable(numresa);
                    $('#kt_datatable_modal').modal('show');
                });
            };

        // subModal
        var initSubDatatable = function (id) {
            // console.log(id);
            var el = $('#kt_datatable_sub');
                var datatable = el.KTDatatable({
                    data: {
                        type: 'remote',
                        source: "{{config('app.url')}}/api/check_in/"+id,
                        pageSize: 10,
                        serverPaging: true,
                        serverFiltering: false,
                        serverSorting: true,
                    },
                    pagination: false,
                    // layout definition
                    layout: {
                        theme: 'default',
                        scroll: false,
                        height: 800,
                        footer: false,
                    },
                    search: {
                        input: el.find('#kt_datatable_search_query_2'),
                        key: 'generalSearch'
                    },

                    sortable: true,

                    // columns definition
                    columns: [{
                            field: "xref",
                            title: "#",
                            sortable: !1,
                            width: 25,
                            // selector: true,
                            type: "text",
                            textAlign: "center",
                            template : function(e) {
                                if(e.chin=="N" && e.nchambre!="") {
                                    return '<label class="checkbox checkbox-single"><input class="check" type="checkbox" etat="N" value="'+e.xref+'"><span></span></label>';
                                }
                                else if(e.chin=="O"){
                                    return '<label class="checkbox checkbox-single checkbox-success"><input type="checkbox" class="checkin check" etat="O" checked disabled><span></span></label>';
                                }
                                else if(e.chin=="N" && e.nchambre=="") {
                                    return '<label class="checkbox checkbox-single"><input type="checkbox" class="checkin check" etat="N" value="'+e.xref+'" disabled><span></span></label>';
                                }
                            }
                        }, 
                        {
                            field: "nchambre",
                            title: "Numéro",
                            width: 75
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
                                var span = '<span class="label label-lg font-weight-bold label-light-danger label-inline etat" value="N">OUT</span>';
                                if(e.chin=="O") {
                                    span = '<span class="label label-lg font-weight-bold label-light-success label-inline etat" value="O">IN</span>'
                                }
                                return span
                            }
                        }, 
                    ],
                });

            var modal = datatable.closest('.modal');

            $('#kt_datatable_search_status_2').on('change', function () {
                datatable.search($(this).val().toLowerCase(), 'Status');
            });

            $('#kt_datatable_search_type_2').on('change', function () {
                datatable.search($(this).val().toLowerCase(), 'Type');
            });

            $('#kt_datatable_search_status_2, #kt_datatable_search_type_2').selectpicker();

            // fix datatable layout after modal shown
            datatable.hide();
            modal.on('shown.bs.modal', function () {
                    var modalContent = $(this).find('.modal-content');
                    datatable.spinnerCallback(true, modalContent);
                    datatable.spinnerCallback(false, modalContent);
                }).on('hidden.bs.modal', function () {
                el.KTDatatable('destroy');
            });

            datatable.on('datatable-on-layout-updated', function () {
                datatable.show();
                datatable.redraw();
            });
        };
        
        return {
            // public functions
            init: function () {
                initDatatable();
            }
        };
    }();

    jQuery(document).ready(function () {
        KTDatatableModal.init();
    });

    /*Save check-in*/
    var check = {};
    
    $(".eng").on('click',function() {
        var checkin = [];
        document.querySelectorAll(".check").forEach(f => {
            if(f.checked && f.getAttribute('etat')=='N') {
                check['xref'] = f.value;
                checkin.push(check);
                check = [];
            }
        });
        console.log(checkin);
        var tab = JSON.stringify(checkin);
        $.ajax({ 
            type:'POST', 
            url:"{{ route('check_in') }}", 
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')}, 
            data : tab,
            // contentType: "application/json",
            dataType: 'json',
            success:function(data){ 
            } 
        });
    });
    </script>
@endpush