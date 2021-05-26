@extends('layout.default')
@section('content')

<div class="container">
    <div class="card card-custom">
        <div class="card-body">
            <div class="datatable datatable-bordered datatable-head-custom" id="Mdatatable"></div>
        </div>
    </div>
</div>

@endsection

@push('scripts')
    <script>
        var MyTable = {
            init: function() {
                var t;
                t = $("#Mdatatable").KTDatatable({
                    data: {
                        type: "remote",
                        source: "{{config('app.url')}}/api/planning",
                        pageSize: 100,
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
                        field: "dat",
                        title: "Date",
                        // sortable: !1,
                        width: 75,
                        type: "number",
                        // selector: {
                        //     class: ""
                        // },
                        textAlign: "center"
                    }, 
                    {
                        field: "libdat",
                        title: "Jour",
                        width: 70,
                        template: function(e){
                            var span = '<span>'+e.libdat+'</span>'
                            if(e.libdat==""){
                                return '<span class="datatable-row datatable-row-even" style="background-color:yellow">---------</span>';
                            }
                            return span;
                        }
                    },  
                    {
                        field: "typch",
                        title: "Type",
                        width: 50
                    },  
                    {
                        field: "libch",
                        title: "Libellé",
                        width: 70
                    }, 
                    {
                        field: "cap",
                        title: "Cap",
                        width: 35
                    },
                    {
                        field: "allo",
                        title: "Allo",
                        autoHide : false,
                        width: 35
                    },
                    {
                        field: "occup",
                        title: "Occ",
                        width: 35
                    }, 
                    {
                        field: "bloq",
                        title: "Blo",
                        width: 35,
                    },
                    {
                        field: "disp",
                        title: "Disp",
                        width: 35,
                    },
                    // {
                    //     field: "Actions",
                    //     title: "Actions",
                    //     width: 35,
                    //     template: function(){
                    //         return '<a name="" id="" class="btn btn-primary clik" href="#" role="button"></a>';
                    //     }
                    // },
                ]     
                }), 
                $("#kt_datatable_search_status").on("change", (function() {
                    t.search($(this).val().toLowerCase(), "Status")
                })), 
                $("#kt_datatable_search_type").on("change", (function() {
                    t.search($(this).val().toLowerCase(), "Type")
                })), 
                $("#btn").on("click", (function() {
                    consle.log(table.row( this ).data());
                })), 
                $("#kt_datatable_search_status, #kt_datatable_search_type").selectpicker()
            }
        };

        jQuery(document).ready((function() {
            MyTable.init();
        }));
    </script>
@endpush