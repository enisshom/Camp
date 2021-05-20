@extends('layout.default')
@section('content')

@section('styles')
    <link rel="stylesheet" href="https://docs.dhtmlx.com/scheduler/codebase/dhtmlxscheduler.css">
    <link rel="stylesheet" href="style.css">
    <style>
        html, body{
            margin:0;
            padding:0;
            height:100%;
            overflow:hidden;
        }
        .timeline_item_cell {
            width: 32%;
            font-size: 14px;
            text-align: center;
        }
        .timeline_item_separator {
            background-color: #CECECE;
            width: 1px;
            height: 100% !important;
        }
        .dhx_matrix_scell{
            text-align:left;
        }
        .timeline_item_separator,
        .timeline_item_cell {
            vertical-align:top;
            height: 100% !important;
            display:inline-block;
            line-height: 50px;
            vertical-align:top;
        }
        .collection_label {
            z-index: 2;
        }
        .room_status {
            position: relative;
        }
        .room_status_indicator {
            position: absolute;
            background-color: red;
            left: 0;
            top: 0;
            right: 95%;
            bottom: 0;
        }
        .room_status_indicator_1 {
            background-color: #4CAF50;
        }
        .room_status_indicator_2 {
            background-color: red;
        }
        .room_status_indicator_3 {
            background-color: #FFA000;
        }
        .event_1 {
            background-color: #FFB74D !important;
        }
        .event_2 {
            background-color: #9CCC65 !important;
        }
        .event_3 {
            background-color: #40C4FF !important;
        }
        .event_4 {
            background-color: #BDBDBD !important;
        }
    </style>
@endsection

    <div id="scheduler_here" class="dhx_cal_container" style='width:100%; height:100%;'>
		<div class="dhx_cal_navline">
			<div class="dhx_cal_prev_button">&nbsp;</div>
			<div class="dhx_cal_next_button">&nbsp;</div>
			<div class="dhx_cal_today_button"></div>
			<div class="dhx_cal_date"></div>
			<select id="room_filter" onchange='showRooms(this.value)'></select>
		</div>
		<div class="dhx_cal_header">
		</div>
		<div class="dhx_cal_data">
		</div>		
	</div>
    <script src="https://docs.dhtmlx.com/scheduler/codebase/dhtmlxscheduler.js"></script>
    {{-- <script src="https://docs.dhtmlx.com/scheduler/codebase/ext/dhtmlxscheduler_timeline.js"></script> --}}
    <script>
        window.showRooms = function showRooms(type) {
        var allRooms = scheduler.serverList("rooms");
        var visibleRooms ;
        if (type == 'all') {
            visibleRooms = allRooms.slice();
        }else{
            visibleRooms = allRooms
                .filter(function(room){
                return room.type == type;
            });
        }
        scheduler.updateCollection("visibleRooms", visibleRooms);
    };
    scheduler.locale.labels.section_custom="Section";
    scheduler.config.details_on_create=true;
    scheduler.config.details_on_dblclick=true;
    
    //===============
    //Configuration
    //===============
    
    scheduler.serverList("roomTypes");
    scheduler.serverList("roomStatuses");
    scheduler.serverList("bookingStatuses");
    scheduler.serverList("rooms");
    
    scheduler.createTimelineView({
        name:	"timeline",
        x_unit: "day",
        x_date: "%j",
        x_step: 1,
        x_size: 31,
        section_autoheight: false,
        y_unit:	scheduler.serverList("visibleRooms"),
        y_property:	"room",
        render:"bar",
        round_position:true,
        dy:60,
        event_dy: "full",
        second_scale:{
            x_unit: "month", 
            x_date: "%F, %Y" 
        }
    });
    
    scheduler.attachEvent("onBeforeViewChange", function(old_mode,old_date,mode,date){
        var year = date.getFullYear();
        var month= (date.getMonth() + 1);
        var d = new Date(year, month, 0);
        var daysInMonth = d.getDate();
        var timeline = scheduler.getView('timeline'); 
        timeline.x_size = daysInMonth;
        return true;
    });
    
    scheduler.date.timeline_start = scheduler.date.month_start;
    
    scheduler.date.add_timeline = function(date, step){
        if(step > 0){
            step = 1;
        }else if(step < 0){
            step = -1;
        }
        return scheduler.date.add(date, step, "month")
    };
    
    //===============
    //Data loading
    //===============
    scheduler.config.lightbox.sections=[
        {name:"description", height:130, map_to:"text", type:"textarea" , focus:true},
        {name:"custom", height:23, type:"select", options:	scheduler.serverList("rooms"), map_to:"room" },
        {name:"time", height:72, type:"time", map_to:"auto"}
    ];
    
    scheduler.attachEvent('onEventCreated', function (event_id) {
        var ev = scheduler.getEvent(event_id);
        ev.status = 1;
        ev.is_paid = false;
        ev.text = 'new booking';
    });
    
    scheduler.attachEvent("onParse", function(){
        showRooms("all");
        
        var roomSelect = document.querySelector("#room_filter");
        var types = scheduler.serverList("roomTypes");
        var typeElements = ["<option value='all'>All</option>"];
        types.forEach(function(type){
        typeElements.push("<option value='"+type.key+"'>" + type.label +"</option>");
        });
        roomSelect.innerHTML = typeElements.join("")
    });
    
    var headerHTML = "<div class='timeline_item_separator'></div>" +
        "<div class='timeline_item_cell'>Number</div>" +
        "<div class='timeline_item_separator'></div>" +
        "<div class='timeline_item_cell'>Type</div>" +
        "<div class='timeline_item_separator'></div>" +
        "<div class='timeline_item_cell room_status'>Status</div>";
    
    scheduler.locale.labels.timeline_scale_header = headerHTML;
    
    scheduler.attachEvent("onTemplatesReady", function(){
        
        function findInArray(array, key) {
        for (var i = 0; i < array.length; i++) {
            if (key == array[i].key)
            return array[i];
        }
        return null;
        }
    
        function getRoomType(key) {
        return findInArray(scheduler.serverList("roomTypes"), key).label;
        }
    
        function getRoomStatus(key) {
        return findInArray(scheduler.serverList("roomStatuses"), key);
        }
    
        function getRoom(key) {
        return findInArray(scheduler.serverList("rooms"), key);
        }
    
        scheduler.templates.timeline_scale_label = function (key, label, section) {
        var roomStatus = getRoomStatus(section.status);
        return ["<div class='timeline_item_separator'></div>",
                "<div class='timeline_item_cell'>" + label + "</div>",
                "<div class='timeline_item_separator'></div>",
                "<div class='timeline_item_cell'>" + getRoomType(section.type) + "</div>",
                "<div class='timeline_item_separator'></div>",
                "<div class='timeline_item_cell room_status'>",
                "<span class='room_status_indicator room_status_indicator_"+section.status+"'></span>",
                "<span class='status-label'>" + roomStatus.label + "</span>",
                "</div>"].join("");
        };
    
        scheduler.templates.event_class = function (start, end, event) {
            return "event_" + (event.status || "");
        };
    });
    
    
    scheduler.init('scheduler_here',new Date(2017,2,30),"timeline");
    scheduler.parse(JSON.stringify({
        "data":[
            {"room":"1","start_date":"2017-03-02","end_date":"2017-03-23","text":"A-12","id":"1","status":"1","is_paid":"1"},
            {"room":"3","start_date":"2017-03-07","end_date":"2017-03-21","text":"A-45","id":"2","status":"2","is_paid":"1"},
            {"room":"5","start_date":"2017-03-06","end_date":"2017-03-14","text":"A-58","id":"3","status":"3","is_paid":"0"},
            {"room":"7","start_date":"2017-03-04","end_date":"2017-03-18","text":"A-28","id":"4","status":"4","is_paid":"0"}],
        "collections":{
            "roomTypes":[
                {"value":"1","label":"1 bed"},
                {"value":"2","label":"2 beds"},
                {"value":"3","label":"3 beds"},
                {"value":"4","label":"4 beds"}
            ],
            "roomStatuses":[
                {"value":"1","label":"Ready"},
                {"value":"2","label":"Dirty"},
                {"value":"3","label":"Clean up"}
            ],
            "bookingStatuses":[
                {"value":"1","label":"New"},
                {"value":"2","label":"Confirmed"},
                {"value":"3","label":"Arrived"},
                {"value":"4","label":"Checked Out"}
            ],
            "rooms":[
                {"value":"1","label":"101","type":"1","status":"1"},
                {"value":"2","label":"102","type":"1","status":"3"},
                {"value":"3","label":"103","type":"1","status":"2"},
                {"value":"4","label":"104","type":"1","status":"1"},
                {"value":"5","label":"105","type":"2","status":"1"},
                {"value":"6","label":"201","type":"2","status":"2"},
                {"value":"7","label":"202","type":"2","status":"1"},
                {"value":"8","label":"203","type":"3","status":"3"},
                {"value":"9","label":"204","type":"3","status":"3"},
                {"value":"10","label":"301","type":"4","status":"2"},
                {"value":"11","label":"302","type":"4","status":"2"}
            ]
        }
    }),"json");
    </script>

@endsection