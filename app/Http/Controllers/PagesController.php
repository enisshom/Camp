<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Classes\Theme\Menu;
use Illuminate\Support\Facades\Session;

class PagesController extends Controller
{
    public function index()
    {
        $page_title = 'Dashboard';
        $page_description = 'Some description for the page';

        // Menu::renderVerMenu($items);

        $url = 'http://192.168.1.18/api/sites'; 
        $response = file_get_contents($url); 
        $sites = json_decode($response);
        return view('cards', compact(['sites', 'page_title', 'page_description']));
        // return dd($sites);
    }

    // public function camp($ville)
    // {
    //     $url = 'http://192.168.1.18/api/sites/'.$ville; 
    //     return view('camp',['ville'=>$ville]);
    // }

    public function camp(Request $request, $id)
    {
        $url = 'http://192.168.1.18/api/sites/'; 
        $response = file_get_contents($url); 
        $sites = json_decode($response);   
        $site = $sites[$id-1];
        $request->session()->put('camp', $id);
        $request->session()->save();
        // dd($request->session()->all());
        return view('camp',['site'=>$site]);
    }

    /**
     * Demo methods below
     */

    // Datatables
    public function datatables(Request $request)
    {
        $page_title = 'Datatables';
        $page_description = 'This is datatables test page';
        // dd($request->session()->all());
        return view('pages.datatables', compact('page_title', 'page_description'));
    }

    // KTDatatables
    public function ktDatatables()
    {
        $page_title = 'KTDatatables';
        $page_description = 'This is KTdatatables test page';

        return view('pages.ktdatatables', compact('page_title', 'page_description'));
    }

    // Select2
    public function select2()
    {
        $page_title = 'Select 2';
        $page_description = 'This is Select2 test page';
        // return session('camp_id');
        return view('pages.select2', compact('page_title', 'page_description'));
    }

    // jQuery-mask
    public function jQueryMask()
    {
        $page_title = 'jquery-mask';
        $page_description = 'This is jquery masks test page';

        return view('pages.jquery-mask', compact('page_title', 'page_description'));
    }

    // custom-icons
    public function customIcons()
    {
        $page_title = 'customIcons';
        $page_description = 'This is customIcons test page';

        return view('pages.icons.custom-icons', compact('page_title', 'page_description'));
    }

    // flaticon
    public function flaticon()
    {
        $page_title = 'flaticon';
        $page_description = 'This is flaticon test page';

        return view('pages.icons.flaticon', compact('page_title', 'page_description'));
    }

    // fontawesome
    public function fontawesome()
    {
        $page_title = 'fontawesome';
        $page_description = 'This is fontawesome test page';

        return view('pages.icons.fontawesome', compact('page_title', 'page_description'));
    }

    // lineawesome
    public function lineawesome()
    {
        $page_title = 'lineawesome';
        $page_description = 'This is lineawesome test page';

        return view('pages.icons.lineawesome', compact('page_title', 'page_description'));
    }

    // socicons
    public function socicons()
    {
        $page_title = 'socicons';
        $page_description = 'This is socicons test page';

        return view('pages.icons.socicons', compact('page_title', 'page_description'));
    }

    // svg
    public function svg()
    {
        $page_title = 'svg';
        $page_description = 'This is svg test page';

        return view('pages.icons.svg', compact('page_title', 'page_description'));
    }

    // Quicksearch Result
    public function quickSearch()
    {
        return view('layout.partials.extras._quick_search_result');
    }
}
