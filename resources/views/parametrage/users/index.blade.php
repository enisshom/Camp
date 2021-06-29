@extends('layout.default')
@section('content')

<div class="row">
    <div class="col-lg-12 margin-tb">
        <div class="pull-left">
          <br>
            <h2 style="text-align: center">Gestion des utilisateurs</h2><br>
        </div>
        <div class="pull-right">
          @can('user-create')
            <button type="button" class="btn add_user" data-target="#create">
              <i class="fa la-user-plus text-success mr-5"></i><br><br>
            </button>
          @endcan
        </div>
      <!-- Modal add user-->
      <div class="modal fade" id="create" tabindex="-1" role="dialog" aria-labelledby="staticBackdrop" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-lg" style="width: auto" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ajouter utilisateur</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i aria-hidden="true" class="ki ki-close"></i>
                    </button>
                </div>
                <div class="modal-body users">

                </div>
                {{-- <div class="modal-footer">
                    <button type="button" class="btn btn-light-primary font-weight-bold" data-dismiss="modal">Fermer</button>
                    <button type="submit" class="btn btn-primary font-weight-bold save" data-dismiss="modal">Ajouter</button>
                </div> --}}
            </div>
        </div>
      </div>  
    </div>
</div>

{{-- ERROR MESSAGE --}}
@if (count($errors) > 0)
    <div class="alert alert-danger">
        <strong>Whoops!</strong> Erreur!<br><br>
        <ul>
        @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
        @endforeach
        </ul>
    </div>
@endif

{{-- SUCCESS MESSAGE --}}
@if ($message = Session::get('success'))
    <div class="alert alert-custom alert-notice alert-light-primary  " role="alert">
        <div class="alert-icon"><i class="flaticon-warning"></i></div>
        <div class="alert-text">{{$message}}</div>
        <div class="alert-close">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true"><i class="ki ki-close"></i></span>
            </button>
        </div>
    </div>
@endif

@push('scripts')
  <script>
    // ADD USER MODAL
    $(".add_user").on('click', function() {
      $.ajax({
          type: 'GET',
          url: "{{ route('users.create') }}",
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')
          },
          data: {},
          success: function(data) {
              $(".users").html(data);
              $("#create").modal('toggle');
          }
      });
    });

    // EDIT USER MODAL
    $(".update_user").on('click', function() {
      var id = $(this).attr('data-id');
      $.ajax({
          type: 'GET',
          url: 'users/' + id + '/edit',
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')
          },
          data: {},
          success: function(data) {
              $(".edit-user").html(data);
              $("#edit").modal('toggle');
          }
        });
    });

    // SHOW USER MODAL
    $(".show_user").on('click', function() {
      var id = $(this).attr('data-id');
      $.ajax({
          type: 'GET',
          url: 'users/' + id,
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')
          },
          data: {},
          success: function(data) {
              $(".show-user").html(data);
              $("#show").modal('toggle');
          }
        });
    });
  </script>
@endpush


<table class="table">
 <thead class="thead-dark">
 <tr>
   <th>#</th>
   <th>Nom</th>
   <th>E-mail</th>
   <th>Rôle</th>
   <th width="280px">Action</th>
 </tr>
 </thead>
 @foreach ($data as $key => $user)
 <tbody>
  <tr>
    <td>{{ $user->id }}</td>
    <td>{{ $user->name }}</td>
    <td>{{ $user->email }}</td>
    <td>
      @if(!empty($user->getRoleNames()))
        @foreach($user->getRoleNames() as $v)
          <label class="badge badge-success">{{ $v }}</label>
        @endforeach
      @endif
    </td>

    <td>
        <a class="btn show_user" data-target="#show" data-id="{{ $user->id }}"><i class="fa far fa-eye text-info mr-5"></i></a>
      @can('user-edit')
        <a class="btn update_user" data-target="#edit" data-id="{{ $user->id }}"><i class="fas fa-user-edit text-primary"></i></a>
      @endcan
    </td>

     <!-- Modal edit user-->
     <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="staticBackdrop" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable modal-lg" style="width: auto" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modifier utilisateur</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <i aria-hidden="true" class="ki ki-close"></i>
                  </button>
              </div>
              <div class="modal-body edit-user">

              </div>
          </div>
      </div>
    </div>  

     <!-- Modal show user-->
     <div class="modal fade" id="show" tabindex="-1" role="dialog" aria-labelledby="staticBackdrop" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable modal-lg" style="width: auto" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Afficher utilisateur</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <i aria-hidden="true" class="ki ki-close"></i>
                  </button>
              </div>
              <div class="modal-body show-user">

              </div>
          </div>
      </div>
    </div>  
  </tr>
</tbody>
 @endforeach
</table>

@endsection