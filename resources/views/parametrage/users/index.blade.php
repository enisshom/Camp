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
            <a class="btn" href="{{ route('users.create') }}"><i class="fa la-user-plus text-success mr-5"></i></a><br><br>
          @endcan
        </div>
    </div>
</div>

@if ($message = Session::get('success'))
  <div class="alert alert-success">
    <p>{{ $message }}</p>
  </div>
@endif

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
       <a class="btn" href="{{ route('users.show',$user->id) }}"><i class="fa far fa-eye text-info mr-5"></i></a>
      @can('user-edit')
        <a class="btn" href="{{ route('users.edit',$user->id) }}"><i class="fas fa-user-edit text-primary mr-5"></i></a>
      @endcan
      {{-- @can('user-delete')
      <a class="btn fa fas fa-trash text-danger mr-5" href="{{ route('delete',$user->id) }}">x</a> --}}
        {{-- {!! Form::open(['method' => 'DELETE','route' => ['users.destroy', $user->id],'style'=>'display:inline']) !!}
            {!! Form::submit('X', ['class' => 'btn fa fas fa-trash text-danger mr-5']) !!}
        {!! Form::close() !!} --}}
      {{-- @endcan --}}
    </td>
  </tr>
</tbody>
 @endforeach
</table>

@endsection