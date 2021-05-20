 
<div class="checkin_dt" id="checkin_dt"></div>

@push('scripts')
    <script>
         var KTDatatableJsonRemoteDemo2 = {
            init: function() {
                console.log(numresa);
                var t;
                t = $("#checkin_dt").KTDatatable({
                    data: {
                        type: "remote",
                        source: "{{config('app.url')}}/api/check_in/"+numresa,
                        serverFiltering: true,
                        pageSize: 10
                    },
                    layout: {
                        scroll: !1,
                        footer: !0
                    },
                    sortable: !0,
                    pagination: !0,
                    search: {
                        input: $("#kt_datatable_search_query"),
                        key: "generalSearch"
                    },
                    
                    columns: 
                    [   {
                        field: "xref",
                        title: "#",
                        sortable: !1,
                        width: 25,
                        // selector: true,
                        type: "text",
                        textAlign: "center",
                        template : function(e){
                        
                            if(e.chin=="O") {
                                return '<label class="checkbox checkbox-single"><input type="checkbox" checked disabled><span></span></label>';
                            }
                            return '<label class="checkbox checkbox-single"><input type="checkbox" class="checkin" ><span></span></label>';
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
                                if(e.chin=="O") {
                                    span = '<span class="label label-lg font-weight-bold label-light-success label-inline">IN</span>'
                                }
                                return span;
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
                }), 
                $("#kt_datatable_search_status").on("change", (function() {
                    t.search($(this).val().toLowerCase(), "Status")
                })), 
                
                $("#kt_datatable_search_type").on("change", (function() {
                    t.search($(this).val().toLowerCase(), "Type")
                })), $("#kt_datatable_search_status, #kt_datatable_search_type").selectpicker()
            }
        };

         jQuery(document).ready((function() {
            KTDatatableJsonRemoteDemo2.init(numresa)
        }));
    </script>
@endpush