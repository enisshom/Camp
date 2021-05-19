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
                <h3 class="card-label">LISTE DES RESERVATIONS </h3>
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

                            <div class="col-md-4 my-2 my-md-0">
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
                            </div>
                            <div class="col-md-4 my-2 my-md-0">
                                <div class="d-flex align-items-center">
                                    <label class="mr-3 mb-0 d-none d-md-block">Type:</label>
                                    <select class="form-control" id="kt_datatable_search_type">
                                        <option value="">All</option>
                                        <option value="1">Online</option>
                                        <option value="2">Retail</option>
                                        <option value="3">Direct</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-xl-4 mt-5 mt-lg-0">
                        <a href="#" class="btn btn-light-primary px-6 font-weight-bold">
                            Search
                        </a>
                    </div>
                </div>
            </div>
            <!--end::Search Form-->
            <div class="my_table" id="kt_datatable"></div>
        </div>
    </div>
</div>   
            <!--Modal-->
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
@endsection

{{-- Scripts Section --}}
@push('scripts')
    <script src="{{ asset('js/pages/widgets.js') }}" type="text/javascript"></script>
    <script>
        var id = {!!$id!!};
        //  var datatable = $('#kt_datatable').KTDatatable(options);
        "use strict";
        var KTDatatableJsonRemoteDemo = {
        init: function() {
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
                    return '<button type="button" id="'+e.numresa+'" datedep="'+e.datedep+'" datearr="'+e.datearr+'" class="btn btn-light-primary afficher"><span class="navi-icon"><i class="flaticon-eye"></i></span></button>'
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
            // $.post( "{{route('resa_attribute')}}", { numresa: numresa})
            //     .done(function( data ) {
            //     $(".attribution").html(data);
            //     $("#affichage").modal('toggle');
            // });
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
        $("#kt_datatable_search_type").on("change", (function() {
            t.search($(this).val().toLowerCase(), "Type")
        })), $("#kt_datatable_search_status, #kt_datatable_search_type").selectpicker()
    }
        };
        jQuery(document).ready((function() {
            KTDatatableJsonRemoteDemo.init()
        }));
    </script>
@endpush