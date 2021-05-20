@php
// $resa=;
// dd($datedep);
@endphp
<div class="accordion accordion-solid accordion-toggle-plus" id="accordionExample6">
    @foreach ($reservation->data as $resa)
    @php
    
  @endphp
    <div class="card">
      <div class="card-header" id="headingOne6">
       <div class="card-title collapsed type" data-toggle="collapse" type={{$resa->type}} datedep="{{$datedep}}" datearr="{{$datearr}}" data-target="#{{$resa->type}}">
        <i class="fas fa-chess-king"></i> {{$resa->type}}
       </div>
      </div>
      @php
      // dd($resa);
      @endphp
      <div id="{{$resa->type}}" class="collapse" data-parent="#accordionExample6">
       <div class="card-body">
        {{-- @foreach ($resa->rooms as $room) --}}
        
        @foreach ($resa->rooms as $room)
          @foreach ($room->paxs as $pax)

            @if($pax->nper==1)
               <div class="row room">
                 <div class="form-group">
                  <select class="form-control myselect" name="nchambre" id="select" type="{{$resa->type}}" numresa="{{$numresa}}" datedep="{{$datedep}}" datearr="{{$datearr}}">
                    <option>{{$room->number}}</option>
                    <option value="100">100</option>
                    <option value="101">101</option>
                    <option value="102">102</option>
                    <option value="103">103</option>
                    <option value="104">104</option>
                  </select>
                </div>
               </div>
            @endif
            <div class="row pax">
           
               
           
              <div class="form-group">
                <input type="text" class="form-control" name="nchambre" id="{{$pax->nper}}_{{$pax->nbrper}}" value="{{$room->number}}" aria-describedby="helpId" placeholder="Nom">
                <input type="text" class="form-control" name="nom" id="{{$pax->nper}}_{{$pax->nbrper}}" value="{{$pax->Pers}}" aria-describedby="helpId" placeholder="Nom">
              </div>
        
              <div class="form-group">
                <input type="text" class="form-control" name="prenom"  aria-describedby="helpId" placeholder="Prénom">
              </div>
      
              <div class="form-group">
                <select class="form-control" name="nationalit" >
                  <option>Maroc</option>
                  <option>USA</option>
                  <option>Allmand</option>
                  <option>Espane</option>
                  <option>UK</option>
                  <option>Canada</option>
                </select>
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
    // var options=document.getElementById('select').options;
    var types = ['']
    $(".type").on('click',function() {
        // alert($(this).attr('type')); 
        var type = $(this).attr('type');
        var numresa = $(this).attr('numresa');
        var datedep = $(this).attr('datedep');
        var datearr = $(this).attr('datearr');
        $.ajax({ 
            type:'POST', 
            url:"{{route('available_rooms')}}", 
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')}, 
            data : { type,numresa,datedep,datearr},
            success:function(data){ 
              console.log(data);
                // $('.myselect').empty();

                // $('.myselect').append("<option value='a'>a</option>");
                // $('.myselect').append("<option value='b'>b</option>");
                // $('.myselect').append("<option value='c'>c</option>");
            } 
        });
    });
        $(".myselect").change(function() {
            // Get the selected value
            var selected =[];
            var notSelected =[];
            // Get the ID of this element
            var thisID = $(this).attr("id");
            // Reset so all values are showing:
            $(".myselect option:selected").each(function() {
              if($(this).val() != ""){
                selected.push($(this).val());
                // $(this).show();
              }
            });
            $(".myselect").each(function() {
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
    
  </script>
</html>