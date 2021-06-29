@extends('layout.default')
@section('content')

@section('styles')
    <style>
        .control-label {
            position: absolute;
            left: 1em;
            bottom: 51px;
            color: red;
        }

    </style>
@endsection
<br><br><br>
<div class="container">
    <!--begin::Card-->
    <!--begin::Search Form-->
    <div class="card card-custom">
        <div class="card-header flex-wrap border-0 pt-6 pb-0">
            <div class="card-title">
                <h2 class="card-label">LISTE DES RESERVATIONS </h2>
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
                                    <input type="text" class="form-control" placeholder="Chercher..."
                                        id="kt_datatable_search_query">
                                    <span>
                                        <i class="flaticon2-search-1 text-muted"></i>
                                    </span>
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
<div class="modal fade" id="affichage" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
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
<div id="kt_datatable_modal" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg" style="width: auto">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"><span id="numresa"></span></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body ">
                <!--begin: Datatable-->
                <div class="datatable datatable-bordered datatable-head-custom" id="kt_datatable_sub"></div>
                <!--end: Datatable-->
            </div>
            <div class="modal-footer">  
                <div class="alert alert-custom alert-light-danger fade show mb-5" role="alert" style="height: 10px; width: 100%;">
                    <div class="alert-icon"><i class="flaticon-warning"></i></div>
                    <div class="alert-text">N.B : Le numéro de chambre et nationalité sont obligatoires pour effectuer le check In!</div>
                </div>
                <div class="form-group row compte">
                    <label class="col-16 col-form-label">Compte d'arrangement</label>
                    <div class="col-3 col-form-label">
                        <div class="checkbox-inline">
                            <label class="checkbox checkbox-outline checkbox-primary">
                                <input class="cpt" type="checkbox" name="Checkboxes15"/>
                                <span></span>
                            </label>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-light-primary font-weight-bold text-uppercase" data-dismiss="modal">Fermer</button>
                <button id="ch-btn" type="button" class="btn btn-primary font-weight-bold text-uppercase eng" data-dismiss="modal" disabled>Check In</button>
            </div>
        </div>
    </div>
</div>
<!--end::Modal-->

@endsection

{{-- Scripts Section --}}
@push('scripts')
<script>
    var id = {!! $id !!};
    var numresa = 0;
    var datedep;
    var datearr;
    'use strict';
    // Class definition

    var KTDatatableModal = function() {

        var initDatatable = function() {
            var el = $('#kt_datatable');

            var datatable = el.KTDatatable({
                // datasource definition

                data: {
                    type: 'remote',
                    source: "{{ config('app.url') }}/api/resa_list/" + id,
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
                    input: $('#kt_datatable_search_query'),
                    key: 'generalSearch'
                },

                // columns definition
                columns: [{
                        field: "numresa",
                        title: "#",
                        sortable: !1,
                        // width: 45,
                        type: "number",
                        textAlign: "center"
                    },
                    {
                        field: "nom",
                        title: "Nom",
                        // width: 80
                    },
                    {
                        field: "prenom",
                        title: "Prénom",
                        // width: 75
                    },
                    {
                        field: "datearr",
                        title: "Arrivée",
                        // width: 75
                    },
                    {
                        field: "datedep",
                        title: "Départ",
                        // width: 75
                    },
                    {
                        field: "nuite",
                        title: "Nuité",
                        width: 35
                    },
                    {
                        field: "nbrtotpax",
                        title: "Pax",
                        autoHide: true,
                        width: 30
                    },
                    {
                        field: "Actions",
                        title: "Actions",
                        width: 145,
                        overflow: "visible",
                        template: function(e) {
                            return '<button type="button" id="' + e.numresa + '" datedep="' + e.datedep + '" datearr="' + e.datearr +'" class="btn afficher" data-toggle="dropdown><span class="navi-icon"><i class="far fa-edit text-primary mr-5"></i></span></button><button type="button" numresa="' +e.numresa +'" class="btn checkbtn"><span class="navi-icon"><i class="fas fa-user-check text-success mr-5"></i></span></button>';
                        }
                    }
                ],
            });

            var card = datatable.closest('.card');

            $('#kt_datatable_search_status').on('change', function() {
                datatable.search($(this).val().toLowerCase(), 'Status');
            });

            $('#kt_datatable_search_type').on('change', function() {
                datatable.search($(this).val().toLowerCase(), 'Type');
            });

            // $('#kt_datatable_search_status, #kt_datatable_search_type').selectpicker();

            datatable.on("click", ".afficher", (function() {
                var numresa = $(this).attr('id');
                datedep = $(this).attr('datedep');
                datearr = $(this).attr('datearr');
                $(".modal-title").html('<h5>Attribution - Réservation N° <span id="numresa">' +
                    numresa + '</span></h5>')
                $.ajax({
                    type: 'POST',
                    url: "{{ route('resa_attribute') }}",
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')
                    },
                    data: {
                        numresa,
                        datedep,
                        datearr
                    },
                    success: function(data) {
                        $(".attribution").html(data);
                        $("#affichage").modal('toggle');
                    }
                });
            }));
            datatable.on('click', '.checkbtn', (function() {

                var numresa = $(this).attr('numresa');                
                $(".modal-title").html('<h5>Check In - Réservation N° <span id="numresa">' + numresa +'</span></h5>')
                initSubDatatable(numresa);
                $('#kt_datatable_modal').modal('show');

                var xhr = new XMLHttpRequest();
                var csrf_token = $('meta[name="csrf_token"]').attr('content');
                var url = "{{ config('app.url') }}/api/check_in_list/" + numresa;
                xhr.open("POST", url, true);
                // xhr.responseType ='json';
                xhr.setRequestHeader('X-CSRF-TOKEN', csrf_token);
                xhr.setRequestHeader("Accept", "application/json");
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        var resa = JSON.parse(this.responseText);
                        console.log(resa.data.resa[0].agence);
                        if(resa.data.resa[0].agence == "") {
                            $(".cpt").prop('checked', false); 
                            $(".compte").hide();
                        }else {
                            $(".compte").show();
                        }
                    }
                };
                xhr.send('here');
            }));
        
        };
        // subModal
        var initSubDatatable = function(numresa) {
            console.log(numresa);
            var el = $('#kt_datatable_sub');
            var datatable = el.KTDatatable({
                data: {
                    type: 'remote',
                    source: "{{ config('app.url') }}/api/check_in_list/" + numresa,
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
                    footer: false,
                },

                sortable: false,

                // columns definition
                columns: [{
                        field: "xref",
                        title: '<label class="checkbox checkbox-single"><input type="checkbox" class="checkin check select-all" etat="O"><span></span></label>',
                        sortable: !1,
                        width: 45,
                        type: "text",
                        textAlign: "center",
                        template: function(e) {
                            var checkbox = '<label class="checkbox checkbox-single"><input class="check" type="checkbox" etat="N" value="' + e.xref + '" nchambre="' + e.nchambre + '" nationalit="' + e.nationalit + '"><span></span></label>';
                            if (e.chin == "O") {
                                checkbox = '<label class="checkbox checkbox-single checkbox-success"><input type="checkbox" class="checkin" etat="O" checked disabled><span></span></label>';
                            } else if (e.nchambre == "" || e.nationalit == "") {
                                checkbox =  '<label class="checkbox checkbox-single"><input type="checkbox" class="checkin check" etat="N" value="' +e.xref + '" nchambre="' + e.nchambre + '" nationalit="' + e.nationalit + '" disabled><span></span></label>';
                            }
                            return checkbox;
                        }
                    },
                    {
                        field: "nchambre",
                        title: "Chambre",
                        width: 75
                    },
                    {
                        field: "nom",
                        title: "Nom",
                    },
                    {
                        field: "nationalit",
                        title: "Nationalité",
                    },
                    {
                        field: "prix",
                        title: "Prix",
                    },
                    {
                        field: "chin",
                        title: "Etat",
                        template: function(e) {
                            var span =
                                '<span class="label label-lg font-weight-bold label-light-danger label-inline etat" value="N">OUT</span>';
                            if (e.chin == "O") {
                                span =
                                    '<span class="label label-lg font-weight-bold label-light-success label-inline etat" value="O">IN</span>'
                            }
                            return span
                        }
                    },
                ],
            });

            var modal = datatable.closest('.modal');

            $('#kt_datatable_search_status_2').on('change', function() {
                datatable.search($(this).val().toLowerCase(), 'Status');
            });

            /*SELECT-ALL CHECKBOXS EVENT*/
            $('.select-all').on('click', function() {
                $("input[type=checkbox][etat=N][nchambre!=''][nationalit!='']").prop('checked', $(this).prop('checked'));
            });

            // $('#kt_datatable_search_status_2, #kt_datatable_search_type_2').selectpicker();

            // fix datatable layout after modal shown
            datatable.hide();
            
            modal.on('shown.bs.modal', function() {
                var modalContent = $(this).find('.modal-content');
                datatable.spinnerCallback(true, modalContent);
                datatable.spinnerCallback(false, modalContent);

                /**ENABLE OR DISABLE BUTTON*/
                var tab = 0;
                $('.check').on('click',function() {
                    if ($('.check').is(':checked')) {
                        console.log('done');
                        tab++;
                        $("#ch-btn").attr("disabled", false);
                    }
                    else { 
                        $("#ch-btn").attr("disabled", true);
                    }                         
                });
                
            }).on('hidden.bs.modal', function() {
                el.KTDatatable('destroy');
            });

            datatable.on('datatable-on-layout-updated', function() {
                datatable.show();
                datatable.redraw();
            });
        };

        return {
            // public functions
            init: function() {
                initDatatable();
            }
        };

    }();

    jQuery(document).ready(function() {
        KTDatatableModal.init();
    });

    /*Save attribution*/
    $(".save").on('click', function() {
        var numresa = $("#numresa").html();

        var pax = {};
        var paxs = [];

        document.querySelectorAll(".pax").forEach(f => {
            // console.log(f.attr);
            if(f.getAttribute('checkin')=='N') {
                f.querySelectorAll(".pers input ,select").forEach(t => {
                pax[t.name] = t.value;
                pax['numresa'] = numresa;
                pax['du'] = datearr;
                pax['au'] = datedep;
            });
            paxs.push(pax);
            pax = {};
            }
            
        });

        var xhr = new XMLHttpRequest();
        var csrf_token = $('meta[name="csrf_token"]').attr('content');
        var url = "{{ config('app.url') }}/api/saveAttribution";
        xhr.open("POST", url, true);
        xhr.setRequestHeader('X-CSRF-TOKEN', csrf_token);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(paxs);
            }
        };
        var attr = JSON.stringify(paxs);
        xhr.send(attr);
    });


    /*Save check-in*/
    var check = {};
    var pax = [];
    $(".eng").on('click', function() {
        var numresa = $("#numresa").html();
        var checkin = [];
        var in_rooms = [];
        document.querySelectorAll(".check").forEach(f => {
            if (f.checked && f.getAttribute('etat') == 'N') {
                check['xref'] = f.value;
                pax.push(check);
                check = {};
            }
        });

        /**TEST IF COMPTE D'ARRANGEMENT IS CHECKED**/
        if($(".cpt").is(':checked')) {
            var compteDest = true;
            console.log('checked');
        }
        else {
            compteDest = false;
            console.log('not checked');
        }

        var xhr = new XMLHttpRequest();
        var csrf_token = $('meta[name="csrf_token"]').attr('content');
        var url = "{{ config('app.url') }}/api/check_in/" + numresa;
        xhr.open("POST", url, true);
        xhr.setRequestHeader('X-CSRF-TOKEN', csrf_token);
        xhr.setRequestHeader("Accept", "application/json");
        // xhr.responseType ='json';
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(JSON.parse(this.responseText));
                var msg = JSON.parse(this.responseText);
                toastr.options = {
                    "closeButton": true,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": false,
                    "positionClass": "toast-top-right",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "1000",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                };
                toastr.info(msg.message);
            }
        };

        $("td[data-field=nchambre]").each(function(f) {
            if ($(this).closest('tr').find('[data-field="chin"]').text() == "IN") {
                in_rooms.push($(this).text())    
            }
        });
        console.log(in_rooms);
        checkin.push({ "numresa": numresa }, { "paxs": pax }, {"compteDest": compteDest},{"in_rooms": in_rooms});
        pax = [];
        var paxs = JSON.stringify(checkin);
        xhr.send(paxs);
    });

</script>
@endpush
