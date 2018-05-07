//处理请求地址

//搜索位置
/*
 * 参数：
    keyword=搜索位置
	offset=0
	limit=20
	latitude=经度
	longitude=纬度
*/

const SEARCH_ADDRESS = "restapi/bgs/poi/search_poi_nearby";

//定位当前地址
/*
	 参数：latitude=22.626024
	 	 longitude=113.837884
 * */
const NOW_ADDRESS = "restapi/bgs/poi/reverse_geo_coding";

//商家搜索
/*
kw=
latitude=22.626908
longitude=113.837364
city_id=11
 * */
const BUSINESS_SEARCH = "restapi/shopping/v1/typeahead"

//商家搜索分类页
/*
 restapi/shopping/v2/restaurants/search?
 offset=0&
 limit=15
 &keyword=&
 latitude=25.822654&
 longitude=114.95978&
 search_item_type=3&
 is_rewrite=1&
 extras[]=activities&
 extras[]=coupon&
 terminal=h5
 * */

const BUSINESS_PAGES = 'restapi/shopping/v2/restaurants/search'
//热门搜索信息

/*  参数
 * latitude=22.601986&
 * longitude=114.119934*/
const HOT_SEARCH = 'restapi/shopping/v3/hot_search_words'

//商家分类信息地址

/*
 	参数：
 		latitude=经度
		longitude=纬度
		templates[]=main_template
		&templates[]=favourable_template
		&templates[]=svip_template
 * */
const SHOPS_DATAS = "restapi/shopping/openapi/entries";

//图片服务器地址
const IMG_PATH = "//fuss10.elemecdn.com";

//banner图片
/*
		https://h5.ele.me/restapi/shopping/v2/entries?latitude=22.625496&longitude=113.837678&templates%		5B%5D=big_sale_promotion_template
*/

//商家推荐

/*
	参数：
 latitude=22.625496&
 longitude=113.837678&
 offset=0&
 limit=8&
 extras[]=activities&
 extras[]=tags&
 extra_filters=home&
 rank_id=&
 terminal=h5
 * */

const BUSINESS = "restapi/shopping/v3/restaurants"

/*	
 * 	参数：
 platform=1
 block_index=0
 * */

//发现--->活动
const DISCOVER_ACYIVE = "restapi/member/v1/discover";

//发现---->限时推荐数据

const DISCOVER_TIMELIMIT = "restapi/member/gifts/suggest";

//商家详情

/*
 * //restapi/shopping/restaurant/155686820?
 * extras[]=activities
 * &extras[]=albums
 * &extras[]=license
 * &extras[]=identification
 * &extras[]=qualification
 * &terminal=h5
 * &latitude=22.626024
 * &longitude=113.837884*/
const SELLER_DETALIS = "restapi/shopping/restaurant";

//商品详情左边菜单
/*
 * restapi/shopping/v2/menu?
 * restaurant_id=1408691
 */
const DETAIKS_MENU = "restapi/shopping/v2/menu"

/*
 * 
 * 商品评价
 评论

 https://h5.ele.me/
 restapi/ugc/v3/restaurants/
 155686820/ratings
 ?has_content=true
 &offset=0&
 limit=8
*/
const EVALUATE_DATA = "restapi/ugc/v3/restaurants/"

export default {
	SEARCH_ADDRESS, //搜索地址
	NOW_ADDRESS, //定位
	SHOPS_DATAS, //商品信息
	IMG_PATH, //图片地址
	BUSINESS, //商品推荐
	DISCOVER_ACYIVE, //发现中的活动
	DISCOVER_TIMELIMIT, //发现中的限时好礼
	HOT_SEARCH, //热门搜索
	BUSINESS_SEARCH, //商家搜索
	BUSINESS_PAGES,
	SELLER_DETALIS,
	DETAIKS_MENU,
	EVALUATE_DATA
}

/*
 
 * https://h5.ele.me/restapi/shopping/restaurant/1408691?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&extras[]=qualification&terminal=h5&latitude=22.626024&longitude=113.837884*/