
import 'expose-loader?$!expose-loader?jQuery!jquery'
 
import $ from 'jquery'
window.$ = window.jQuery = $

import 'bootstrap'
import 'admin-lte' 

import '../../node_modules/admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js' 

$('body').on('click', '.custom-router-link', function () { 
    var w_width = $(window).width();
    if (w_width < 992){
        $("body").removeClass("sidebar-open").addClass("sidebar-closed sidebar-collapse");
    }
}); 

