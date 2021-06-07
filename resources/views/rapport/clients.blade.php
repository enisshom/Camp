@extends('layout.default')
@section('content')

<div class="container">
	<!--begin::Card-->
    <!--begin::Search Form-->
    <div class="card card-custom">
        <div class="card-header flex-wrap border-0 pt-6 pb-0">
            <div class="card-title">
                <h2 class="card-label">RAPPORT D'OCCUPATION </h2>
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
                        </div>
                    </div>
                </div>
            </div>
            <!--end::Search Form-->
            <div class="my_table" id="kt_datatable"></div>
        </div>
    </div>
</div>     
@endsection

{{-- Scripts Section --}}
@push('scripts')
    <script>
        var id = {!!$id!!};
        'use strict';
// Class definition

var KTDatatableModal = function () {

        var initDatatable = function () {
            var el = $('#kt_datatable');

            var datatable = el.KTDatatable({
                // datasource definition
                
                data: {
                    type: 'remote',
                    source: "{{config('app.url')}}/api/rapport_occup/"+id,
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
                            field: "nochb",
                            title: "#",
                            sortable: !1,
                            width: 25,
                            type: "number",
                            // selector: {
                            //     class: ""
                            // },
                            textAlign: "center"
                        }, 
                        {
                            field: "ncompte",
                            title: "N° compte",
                            width: 75
                        },  
                        {
                            field: "nom",
                            title: "Nom",
                            width: 85
                        },  
                        {
                            field: "prenom",
                            title: "Prénom",
                            width: 80
                        },  
                        {
                            field: "log",
                            title: "Logement",
                            width: 80
                        },  
                        {
                            field: "datarr",
                            title: "Arrivée",
                            width: 75
                        }, 
                        {
                            field: "datdep",
                            title: "Départ",
                            width: 75
                        }, 
                        {
                            field: "Actions",
                            title: "Actions",
                            width: 50,
                            overflow: "visible",
                            // template: function(e) {
                            //     return ;
                            // }
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

    </script>
@endpush