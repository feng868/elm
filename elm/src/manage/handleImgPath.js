import api from "../api"

function handleImg(path, size) {
	if(!path) {
		return "";
	}
	if(path.endsWith('png')) {
		path = path + '.png'
	} else if(path.endsWith('jpeg')) {
		path = path + '.jpeg'
	}
	
	if(!size){
		path = api.IMG_PATH + '/' + path + `?imageMogr/format/webp/`;
	}else{
		path = api.IMG_PATH + '/' + path + `?imageMogr/format/webp/thumbnail/!${size}x${size}r/gravity/Center/crop/${size}x${size}/`;
	}
	

	return path;
}


/*

    //https://fuss10.elemecdn.com
 	/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?
    imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/

 */

export default handleImg;
