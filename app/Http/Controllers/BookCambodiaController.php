<?php

namespace App\Http\Controllers;

use App\Models\BannerPosition;
use Inertia\Inertia;
use App\Models\Banner;
use App\Models\Heading;
use App\Models\Item;
use App\Models\ItemDailyView;
use App\Models\Page;
use App\Models\Post;
use Illuminate\Http\Request;

class BookCambodiaController extends Controller
{
    public function index()
    {
        return Inertia::render('book-cambodia/Home/Index');
    }

    public function detail($id)
    {
        return Inertia::render('book-cambodia/Home/Detail');
    }

    public function news_show($id)
    {
        $itemShow = Post::with('images')->find($id);
        $bannerInDetail = Banner::where('position_code', 'BANNER_IN_VIEW_DETAIL')->orderBy('order_index')->where('status', 'active')->get();
        // $itemShow = Post::with('images')
        // ->where('status', 'active')
        // ->get();
        //  return  $itemShow;
        return Inertia::render('rule-library/news/Show', [
            'id' => $id,
            'bannerInDetail' => $bannerInDetail,
            'itemShow' => $itemShow,
        ]);
    }
}
