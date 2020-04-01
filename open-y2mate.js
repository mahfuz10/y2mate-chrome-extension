console.log('run y2mate scripe');

var has_err = false;
var err_msg = '';

var host_name = window.location.hostname;
if(host_name == 'www.youtube.com' || host_name == 'm.youtube.com' || host_name == 'youtube.com') {
  var url = window.location.href;
  var pre_part_length = (window.location.protocol.length + '//'.length + window.location.hostname.length - 4);

  if( (url.length - pre_part_length ) > 10 ) {
    var pre_part = url.substring(0, pre_part_length);
    var post_part = url.substring(pre_part_length, url.length);
    var new_url = pre_part + 'pp' + post_part;
    window.open(new_url, "_blank");  
  } else {
    // has_err = true;
    // err_msg = 'Please, play a video or playlist';
  }
  
} else {
  has_err = true;
  err_msg = 'This extension only works in youtube';
}

if( has_err ) {
  var sty_le = 'position:fixed;z-index:9999999999;display:inline-block;padding: 7px 12px;top: 5px;'
  sty_le += 'background:#f00;border-radius:3px;right:5px;color:#fff;font-weight:600;';
  var div_cls = 'torovin-y2mate-youtube-video-downloader';
  document.body.innerHTML += '<div class="'+div_cls+'" style="'+sty_le+'">'+err_msg+'</div>';
  setTimeout(function(){ 
    document.querySelectorAll('.'+div_cls).forEach(el => el.remove());
  }, 3000);
}
