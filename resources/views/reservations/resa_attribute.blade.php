<div class="accordion accordion-solid accordion-toggle-plus" id="accordionExample6">
    @foreach ($reservation->data as $resa)
    <div class="card">
        <div class="card-header" id="headingOne6">
        <div class="card-title collapsed type" data-toggle="collapse" type={{$resa->type}} datedep="{{$datedep}}" datearr="{{$datearr}}" data-target="#{{$resa->type}}">
          <i class="fas fa-chess-king"></i> {{$resa->type}}
        </div>
        </div>
        <div id="{{$resa->type}}" class="collapse" data-parent="#accordionExample6">
        <div class="card-body">
          {{-- @foreach ($resa->rooms as $room) --}}
          @foreach ($resa->rooms as $room)
            @foreach ($room->paxs as $pax)
              @if($pax->nper==1)
                <div class="row room">
                  <div class="form-group">
                    <select class="form-control selectpicker roomSelect" title="Chambre" name="nchambre" id="select" roomId="{{$room->room_id}}" roomType="{{$resa->type}}" numresa="{{$numresa}}" datedep="{{$datedep}}" datearr="{{$datearr}}">
                      <option>{{$room->number}}</option>
                    </select>
                  </div>
                </div>
              @endif
              <div class="row pax">
                <div class="form-group row pers">
                  <div class="col-4">
                    <input type="hidden" class="form-control {{$room->room_id}}" name="nchambre"  value="{{$room->number}}"  aria-describedby="helpId">
                    <input type="hidden" class="form-control {{$pax->xref}}" name="xref" value="{{$pax->xref}}"  aria-describedby="helpId">
                    <input type="text" class="form-control" name="nom" id="{{$pax->nper}}_{{$pax->nbrper}}" value="{{$pax->Pers}}"  aria-describedby="helpId" placeholder="Nom">
                  </div>
                  <div class="col-4">
                    <input type="text" class="form-control" name="prenom"  aria-describedby="helpId" placeholder="Prénom">
                  </div>
                  <div class="col-4">
                    <select class="form-control selectpicker" name="nationalit" >
                      <option>Maroc</option>
                      <option>USA</option>
                      <option>Germany</option>
                      <option>Espane</option>
                      <option>UK</option>
                      <option>Canada</option>
                    </select>
                  </div>
                </div>
              </div>
            @endforeach
          @endforeach

        </div>
        </div>
    </div>
      @endforeach
  </div>

  @push('scripts')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="http://malsup.github.io/jquery.blockUI.js"></script>
  @endpush
   
  <script>
    
    $('select').selectpicker();
    /*Click on the room type*/
    $(".type").on('click',function() {

      var type = $(this).attr('type');
      var numresa = $(this).attr('numresa');
      var datedep = $(this).attr('datedep');
      var datearr = $(this).attr('datearr');
      
      var params = {type,numresa,datedep,datearr};
      params = JSON.stringify(params);
      $.ajax({ 
          type:'POST', 
          url:"{{route('available_rooms')}}", 
          headers: {'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')}, 
          data : params,
          contentType: "application/json",
          dataType: 'json',
          success:function(data){
            $("[roomType|= '"+type+"']").find('option').remove();
            data.forEach(room => {
              $("[roomType|= '"+type+"']").append('<option> '+room.numero+'</option>');
            });
            console.log(data);
          } 
      });
    });

    /*Change room number*/
    $(".roomSelect").change(function() {
        // Get the selected value
        console.log('aaaa');
        var selected =[];
        var notSelected =[];
        // Get the ID of this element
        var thisID = $(this).attr("id");
        // Reset so all values are showing:
        $(".roomSelect option:selected").each(function() {
          if($(this).val() != ""){
            selected.push($(this).val());
            // $(this).show();
          }
        });
        $(".roomSelect").each(function() {
          // console.log($(this).val());
            selected.forEach(sl => {
            if ($(this).val() != sl) {
                $("option[value='" + sl + "']", $(this)).hide();
            }
            if(selected.includes("100"))
            {
              console.log('kayna')
            }
          });
        });
        console.log(selected);
    });
    
    /*Option values*/
    $(".roomSelect").bind('change',function(){
      var room = ($(this).attr('roomid'));
      $("."+room).val($(this).val());
    }); 

    /*Save attribution*/
    $(".save").on('click',function(){
      var paxs = $(".pax :input").serializeArray();
      
      var paxs = JSON.stringify(paxs);

      // console.log(data)
      $.ajax({ 
        type:'POST', 
        url:"{{route('saveAttribution')}}", 
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')}, 
        data : paxs,
        contentType: "application/json",
        dataType: 'json',
        success:function(data){ 
          console.log(data);
        } 
      });
    });        

    var pax = [];
    var paxs = [];
    document.querySelectorAll(".pax").forEach(f => {
      f.querySelectorAll(".pers input ,select").forEach(t => {
        /*all informations*/
        // console.log(t.value)
        if(t.value == "") {

        }
        pax.push(t.value);
        // console.log(pax)
      });
      // paxs.push(pax);
      // console.log('------')
    });
  </script>
</html>