@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card" style="background-color: transparent; border: none;">

                <div class="card-body" style="margin: 10px auto; width: 80%">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="form-group row">

                            <div class="col-12 col-md-10">
                                <input id="user" type="text" class="form-control @error('user') is-invalid @enderror" 
                                    name="user" value="{{ old('user') }}" required autocomplete="user" autofocus placeholder="Usuario" 
                                    style="border-radius: 20px; background-color: rgba(255,255,255,.1); color: white!important; 
                                    border-color: transparent;">

                                @error('user')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">

                            <div class="col-12 col-md-10">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" 
                                    name="password" required autocomplete="current-password" placeholder="Contraseña" 
                                    style="border-radius: 20px; background-color: rgba(255,255,255,.1); color: white!important; 
                                    border-color: transparent;">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-12 col-md-10 text-center">
                                <button type="submit" class="btn btn-primary d-block" style="width: 100%; border-radius: 20px">
                                    {{ __('Iniciar Sesión') }}
                                </button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
