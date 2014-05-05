define(['jquery',  'component/template', 'component/maskLayer'],
    function ($, template, MaskLayer) {
        return function () {
            var maskLayer = MaskLayer({
                opacity: 0.5
            });

            maskLayer.show( function(){
                var templateStr = template.render('chat-alert-template'), chatAlert = $(templateStr);
                $(document.body).append( chatAlert );
                chatAlert.css('margin-top', -chatAlert.outerHeight()/2).fadeIn();

                $('#chat-alert-btn').on('tap', function(e){
                    e.preventDefault();
                    chatAlert.fadeOut();
                    maskLayer.hide();
                });
            });

            (function(){
                var qqface = $('#qqface'), faceNumbers = 75, faces = '';
                for(var i = 0; i < faceNumbers; i++ ) {
                    faces += '<a href="javascript:void(null)" data-face="' + ( i + 1 ) +
                            '"><img src="assets/images/face/' + ( i + 1 ) + '.gif" /></a>'
                }

                qqface.html( faces );

                $('#select-face').on('tap', function(e){
                    e.preventDefault();
                    qqface.show();

                });

                var faceStatus = {};

                qqface.on('tap','a', function(e){
                    e.preventDefault();
                    var $this = $(this),
                        faceIndex = $this.attr('data-face'),
                        faceStr = '[em_' + faceIndex + ']',
                        inputMsg = $('#input-chat-msg')[0];
                    if( !faceStatus[faceIndex] ) {
                        inputMsg.value += faceStr;
                        faceStatus[faceIndex] = 1;
                    }

                    qqface.hide();

                });

            }());


        };
    });
