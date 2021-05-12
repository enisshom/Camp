@extends('layout.default')
@section('content')
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

<div class="row">
    
    <div class="col-lg-12 margin-tb">
        <div class="pull-left">
            <h2>Role Management</h2><br>
        </div>
        <div class="pull-right">
        @can('role-create')
            <a class="btn btn-success" href="{{ route('roles.create') }}"> Create New Role</a><br><br>
        @endcan
        </div>
    </div>
</div>





<table class="table table-bordered">
  <tr>
     <th>No</th>
     <th>Name</th>
     <th width="280px">Action</th>
  </tr>
    @foreach ($roles as $key => $role)
    <tr>
        <td>{{ $role->id }}</td>
        <td>{{ $role->name }}</td>
        <td>
            <a class="btn btn-info" href="{{ route('roles.show',$role->id) }}">Show</a>
            @can('role-edit')
                <a class="btn btn-primary" href="{{ route('roles.edit',$role->id) }}">Edit</a>
            @endcan
            @can('role-delete')
                {!! Form::open(['method' => 'DELETE','route' => ['roles.destroy', $role->id],'style'=>'display:inline']) !!}
                    {!! Form::submit('x', ['class' => 'btn btn-danger']) !!}
                {!! Form::close() !!}
            @endcan
        </td>
    </tr>
    @endforeach
</table>


{{-- {!! $roles->render() !!} --}}

@endsection
@push('scripts')
    <script >
         $(document).ready(function () {
                $('.close').on('click',function(){
                    $('.alert').fadeOut('slow');
                });
            });
    </script>
@endpush