define(['jquery', 'jquery.mobile', './commonInitialize',  './commonIscroll', './generalizeInitialize'],
    function($, mobile, commonInitialize,  commonIscroll, generalizeInitialize){

        $(function(){

            // 初始化公共模板
            commonInitialize();

            if( $('#generalize-page').length ) {
                generalizeInitialize();
            }

        });

    });