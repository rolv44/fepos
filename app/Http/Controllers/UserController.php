<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function checklogin1(Request $request)
    {
        $r=array("code"=>20000,"data"=>array(
            "avatar"=>"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "introduction"=>"I am a super administrator",
            "name"=>"Super Admin",
            "roles"=>array("admin")
        ));
        return json_encode($r);
    }

    public function checklogin(Request $request)
    {
        // var_dump($request['loginForm']);
        // echo "<hr>HELLO WORLD<hr>";
        // var_dump($request->data);
        // var_dump($_POST);

    //  $user_data = array(
    //   'user'  => $request->get('user'),
    //   'password' => $request->get('password')
    //  );

    //  if(Auth::attempt($user_data))
    //  {
    // //   return redirect('/home');
    //  }
    //  else
    //  {
    // //   return back()->with('error', 'Wrong Login Details');
    //  }
        // $t=makeRandomTokenKey();  str_random(56)
        $r=array("code"=>20000,"data"=>array("token"=>"admin-token"));
        return json_encode($r);
    }

    function logout()
    {
     Auth::logout();
     return redirect('login');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
