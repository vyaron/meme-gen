'use strict';(function(_0x1d598a,_0x31cf91){const _0x575a7b=_0x4b6b,_0x5c3595=_0x1d598a();while(!![]){try{const _0x1c748f=-parseInt(_0x575a7b(0x224))/0x1+parseInt(_0x575a7b(0x1d6))/0x2+-parseInt(_0x575a7b(0x1e1))/0x3+-parseInt(_0x575a7b(0x1e7))/0x4*(parseInt(_0x575a7b(0x1e4))/0x5)+-parseInt(_0x575a7b(0x201))/0x6*(-parseInt(_0x575a7b(0x1cb))/0x7)+-parseInt(_0x575a7b(0x1fb))/0x8*(-parseInt(_0x575a7b(0x226))/0x9)+parseInt(_0x575a7b(0x229))/0xa*(-parseInt(_0x575a7b(0x216))/0xb);if(_0x1c748f===_0x31cf91)break;else _0x5c3595['push'](_0x5c3595['shift']());}catch(_0x1b5ff3){_0x5c3595['push'](_0x5c3595['shift']());}}}(_0x3f2c,0x9d87a));const DEFAULT_CANVAS_WIDTH=0x258,ROTATE_SQUARE_SIZE=0xa,CLICK_MARGIN=0xa,TOUCH_EVS=['touchstart','touchmove','touchend'];let gElCanvas,gCtx,gElImg,gCanvasWidth=DEFAULT_CANVAS_WIDTH,gStartPos={},gIntervalId,gIsListenersAdded=![],gIsMouseDown=![],gIsRotate=![],gIsDrag=![];function _0x3f2c(){const _0x28000d=['align','.font-picker','3235421VcLCkQ','.save-confirmation-modal','toUpperCase','onerror','status','src','touchmove','remove','shown','body','<option\x20value=\x22','1715144jeoonG','center','naturalWidth','px\x20','alt','//ca-upload.com/here/upload.php','size','textAlign','findIndex','style','strokeStyle','1783326ePaYSk','readyState','mouseup','1145cPbTnY','https://www.facebook.com/sharer/sharer.php?u=','INPUT','3076zzYtIC','right','onload','nodeName','touchstart','POST','.active','move','\x0aGot\x20response\x20data:','onreadystatechange','SELECT','toDataURL','name','value','img','clientLeft','append','offsetY','width','target','8VrUQvq','cursor','strokeText','clientTop','preventDefault','restore','12lHKQDw','default','lineWidth','innerWidth','rect','Add\x20Text\x20Here','parentNode','pageX','focus','querySelector','download','innerHTML','responseText','add','pos','.meme-text-input','Error\x20connecting\x20to\x20server\x20with\x20request:','.stroke-color-icon','addEventListener','meme','measureText','121uUNXsG','txt','min','send','open','DONE','color','classList','naturalHeight','changedTouches','fillStyle','save','includes','keydown','120159oGdgSp','offsetTop','9639657MfzDYL','Error\x20uploading\x20image','lines','1197370yLLNfe','.meme-editor-page','pageY','.meme-saved-page','error','type','#000000','font','&t=','mousemove','.meme-editor-canvas','hidden','touchend','key','image/jpeg'];_0x3f2c=function(){return _0x28000d;};return _0x3f2c();}function openMemeEditor(){const _0x51644e=_0x4b6b;document[_0x51644e(0x20a)](_0x51644e(0x1ed))?.[_0x51644e(0x21d)][_0x51644e(0x1d2)]('active'),document['querySelector']('.meme-gallery-page')['classList'][_0x51644e(0x20e)](_0x51644e(0x1c5)),document[_0x51644e(0x20a)](_0x51644e(0x1bd))[_0x51644e(0x21d)][_0x51644e(0x20e)]('hidden'),document['querySelector'](_0x51644e(0x22a))[_0x51644e(0x21d)][_0x51644e(0x1d2)](_0x51644e(0x1c5)),gElImg=null,gElCanvas=document[_0x51644e(0x20a)](_0x51644e(0x1c4)),gCtx=gElCanvas['getContext']('2d'),gCtx[_0x51644e(0x203)]=0x3,renderFonts(),renderMeme(),resetInputs();if(!gIsListenersAdded)addCanvasEventListeners();onResizeCanvas();}function addCanvasEventListeners(){const _0x5cda6b=_0x4b6b;window[_0x5cda6b(0x213)]('resize',onResizeCanvas),gElCanvas[_0x5cda6b(0x213)]('mousedown',onDown),gElCanvas[_0x5cda6b(0x213)](_0x5cda6b(0x1c3),onMove),gElCanvas[_0x5cda6b(0x213)](_0x5cda6b(0x1e3),onUp),gElCanvas['addEventListener'](_0x5cda6b(0x1eb),onDown),gElCanvas[_0x5cda6b(0x213)](_0x5cda6b(0x1d1),onMove),gElCanvas[_0x5cda6b(0x213)](_0x5cda6b(0x1c6),onUp),gElCanvas[_0x5cda6b(0x213)](_0x5cda6b(0x223),onKeyPressed),document[_0x5cda6b(0x213)]('mousedown',()=>gIsMouseDown=!![]),document[_0x5cda6b(0x213)]('mouseup',()=>gIsMouseDown=![]),document[_0x5cda6b(0x213)](_0x5cda6b(0x1eb),()=>gIsMouseDown=!![]),document[_0x5cda6b(0x213)](_0x5cda6b(0x1c6),()=>gIsMouseDown=![]),document[_0x5cda6b(0x213)]('mousedown',stopLineEditing),gIsListenersAdded=!![];}function renderMeme(){const _0x38e3f7=_0x4b6b,_0x4db34a=getMeme();if(!gElImg){const _0x24f37d=getCurrImg();gElImg=getElImg(_0x24f37d['url']),gElImg[_0x38e3f7(0x1e9)]=()=>renderImage(_0x4db34a);}else renderImage(_0x4db34a);}function renderImage(_0x41412c){const _0x9bcbd=_0x4b6b;gElCanvas[_0x9bcbd(0x1f9)]=gCanvasWidth,gElCanvas['height']=gElImg[_0x9bcbd(0x21e)]*gCanvasWidth/gElImg[_0x9bcbd(0x1d8)],gCtx['drawImage'](gElImg,0x0,0x0,gElCanvas['width'],gElCanvas['height']),drawTxt(_0x41412c[_0x9bcbd(0x228)]);const _0x48a4d1=getCurrLine();_0x48a4d1&&drawOutlineRectangle(_0x48a4d1);}function _0x4b6b(_0x3a6878,_0x36371c){const _0x3f2c36=_0x3f2c();return _0x4b6b=function(_0x4b6bdc,_0x5d655c){_0x4b6bdc=_0x4b6bdc-0x1bd;let _0x419d7d=_0x3f2c36[_0x4b6bdc];return _0x419d7d;},_0x4b6b(_0x3a6878,_0x36371c);}function getElImg(_0x5bff45){const _0x38ac30=_0x4b6b,_0x32b3ce=new Image();return _0x32b3ce[_0x38ac30(0x1d0)]=_0x5bff45,_0x32b3ce[_0x38ac30(0x1da)]=_0x38ac30(0x214),_0x32b3ce;}function onDown(_0x2d4b80){const _0x116930=_0x4b6b,_0x14e61b=getEvPos(_0x2d4b80);let _0x546c48=findClickedLineIdx(_0x14e61b);if(_0x546c48===-0x1){setLineEmpty(),renderMeme();return;}_0x2d4b80[_0x116930(0x1ff)](),onSetSelectedLine(_0x546c48),renderMeme(),gIsDrag=!![],document[_0x116930(0x1d4)][_0x116930(0x1df)]['cursor']=_0x116930(0x1ee),gStartPos['x']=_0x14e61b['x'],gStartPos['y']=_0x14e61b['y'];}function onMove(_0x116e3a){clearInterval(gIntervalId);if(!gIsMouseDown||!gIsDrag)return;const _0x532bf3=getEvPos(_0x116e3a),_0x27e210=_0x532bf3['x']-gStartPos['x'],_0x5779ac=_0x532bf3['y']-gStartPos['y'];gStartPos['x']=_0x532bf3['x'],gStartPos['y']=_0x532bf3['y'],setLinePos(_0x27e210,_0x5779ac),renderMeme();}function onUp(){const _0x39c1a0=_0x4b6b;gIsDrag=![],gIsRotate=![],document['body'][_0x39c1a0(0x1df)][_0x39c1a0(0x1fc)]=_0x39c1a0(0x202);}function getEvPos(_0x22feac){const _0x2aebce=_0x4b6b;let _0x5cb727={'x':_0x22feac['offsetX'],'y':_0x22feac[_0x2aebce(0x1f8)]};return TOUCH_EVS[_0x2aebce(0x222)](_0x22feac[_0x2aebce(0x1bf)])&&(_0x22feac=_0x22feac[_0x2aebce(0x21f)][0x0],_0x5cb727={'x':_0x22feac[_0x2aebce(0x208)]-_0x22feac[_0x2aebce(0x1fa)]['offsetLeft']-_0x22feac[_0x2aebce(0x1fa)][_0x2aebce(0x1f6)],'y':_0x22feac[_0x2aebce(0x22b)]-_0x22feac[_0x2aebce(0x1fa)][_0x2aebce(0x225)]-_0x22feac[_0x2aebce(0x1fa)][_0x2aebce(0x1fe)]}),_0x5cb727;}function findClickedLineIdx(_0x1de500){const _0xd50c66=_0x4b6b,_0x71f01b=getMeme();return _0x71f01b[_0xd50c66(0x228)][_0xd50c66(0x1de)](_0x457ac3=>{const _0x43a99=_0xd50c66;gCtx['save'](),gCtx['font']=_0x457ac3['size']+'px\x20'+_0x457ac3['font'];const _0xcceecc=gCtx[_0x43a99(0x215)](_0x457ac3[_0x43a99(0x217)])[_0x43a99(0x1f9)];let {x:_0x4acb39,y:_0x55487f}=_0x457ac3[_0x43a99(0x20f)],_0x56b2ae=_0x4acb39+_0xcceecc,_0x3df752=_0x55487f-_0x457ac3[_0x43a99(0x1dc)];return _0x457ac3['align']===_0x43a99(0x1d7)&&(_0x4acb39-=_0xcceecc/0x2,_0x56b2ae-=_0xcceecc/0x2),_0x457ac3[_0x43a99(0x1c9)]===_0x43a99(0x1e8)&&(_0x4acb39-=_0xcceecc,_0x56b2ae-=_0xcceecc),_0x4acb39-=CLICK_MARGIN,_0x56b2ae+=CLICK_MARGIN,_0x3df752-=CLICK_MARGIN,_0x55487f+=CLICK_MARGIN,gCtx[_0x43a99(0x200)](),_0x1de500['x']>_0x4acb39&&_0x1de500['x']<_0x56b2ae&&_0x1de500['y']>_0x3df752&&_0x1de500['y']<_0x55487f;});}function drawOutlineRectangle(_0x179e86){const _0x37e592=_0x4b6b;gCtx[_0x37e592(0x221)](),gCtx['lineWidth']=0x3,gCtx[_0x37e592(0x1e0)]=_0x37e592(0x1c0);let {x:_0x57849a,y:_0x34060a}=_0x179e86['pos'];_0x34060a-=_0x179e86[_0x37e592(0x1dc)],gCtx[_0x37e592(0x1c1)]=_0x179e86[_0x37e592(0x1dc)]+_0x37e592(0x1d9)+_0x179e86[_0x37e592(0x1c1)];const _0x4f9bf6=gCtx[_0x37e592(0x215)](_0x179e86['txt'])[_0x37e592(0x1f9)];_0x179e86[_0x37e592(0x1c9)]===_0x37e592(0x1d7)&&(_0x57849a=_0x57849a-_0x4f9bf6/0x2),_0x179e86[_0x37e592(0x1c9)]===_0x37e592(0x1e8)&&(_0x57849a=_0x57849a-_0x4f9bf6),_0x57849a-=CLICK_MARGIN,gCtx['beginPath'](),gCtx[_0x37e592(0x205)](_0x57849a,_0x34060a,_0x4f9bf6+CLICK_MARGIN*0x2,_0x179e86['size']+CLICK_MARGIN),gCtx['stroke'](),gCtx['restore']();}function renderFonts(){const _0x11eb0f=_0x4b6b,_0x2b5126=getFonts(),_0x31359d=_0x2b5126['map'](_0x2ab09b=>_0x11eb0f(0x1d5)+_0x2ab09b+'\x22>'+_0x2ab09b[_0x11eb0f(0x1cd)]()+'</option>')['join'](''),_0x8597c2=document[_0x11eb0f(0x20a)]('.font-picker');_0x8597c2[_0x11eb0f(0x20c)]=_0x31359d;}function updateEditorInputs(){const _0x2f5f44=_0x4b6b,_0x1fb9c0=getMeme(),_0x59d2f6=_0x1fb9c0['selectedLineIdx'],_0x4cde86=_0x1fb9c0[_0x2f5f44(0x228)][_0x59d2f6]||0x0;document[_0x2f5f44(0x20a)]('.meme-text-input')[_0x2f5f44(0x1f4)]=_0x4cde86['txt'],document[_0x2f5f44(0x20a)]('.stroke-color-input')['value']=_0x4cde86['strokeStyle'],document[_0x2f5f44(0x20a)]('.fill-color-input')[_0x2f5f44(0x1f4)]=_0x4cde86[_0x2f5f44(0x220)],document[_0x2f5f44(0x20a)](_0x2f5f44(0x212))['style']['color']=_0x4cde86[_0x2f5f44(0x1e0)],document[_0x2f5f44(0x20a)]('.fill-color-icon')[_0x2f5f44(0x1df)][_0x2f5f44(0x21c)]=_0x4cde86[_0x2f5f44(0x220)],document[_0x2f5f44(0x20a)](_0x2f5f44(0x1ca))[_0x2f5f44(0x1f4)]=_0x4cde86[_0x2f5f44(0x1c1)];}function drawTxt(_0x8d728a){_0x8d728a['forEach'](_0x459b52=>{const _0x2f081b=_0x4b6b,{x:_0x3895ca,y:_0x546435}=_0x459b52[_0x2f081b(0x20f)];gCtx[_0x2f081b(0x1e0)]=_0x459b52['strokeStyle'],gCtx['fillStyle']=_0x459b52['fillStyle'],gCtx[_0x2f081b(0x1dd)]=_0x459b52[_0x2f081b(0x1c9)],gCtx[_0x2f081b(0x1c1)]=_0x459b52['size']+'px\x20\x20'+_0x459b52[_0x2f081b(0x1c1)],gCtx['fillText'](_0x459b52['txt'],_0x3895ca,_0x546435),gCtx[_0x2f081b(0x1fd)](_0x459b52[_0x2f081b(0x217)],_0x3895ca,_0x546435);});}function stopLineEditing(_0x54f03f){const _0x1fa00b=_0x4b6b;let _0x8ad764=_0x54f03f[_0x1fa00b(0x1fa)];do{if([_0x1fa00b(0x1e6),'BUTTON','A','CANVAS',_0x1fa00b(0x1f1)][_0x1fa00b(0x222)](_0x8ad764[_0x1fa00b(0x1ea)]))return;_0x8ad764=_0x8ad764[_0x1fa00b(0x207)];}while(_0x8ad764);setLineEmpty(),renderMeme();}function onAddTxt(_0x2fbcd3){const _0x441b2b=_0x4b6b,_0x7d5c5e=_0x2fbcd3[_0x441b2b(0x1f4)];setLineTxt(_0x7d5c5e),renderMeme();}function onSetSelectedLine(_0x5ba355){const _0x23e2bf=_0x4b6b;setSelectedLine(_0x5ba355);const _0x25b318=getCurrLine();if(_0x25b318[_0x23e2bf(0x217)]!==_0x23e2bf(0x206))document[_0x23e2bf(0x20a)](_0x23e2bf(0x210))[_0x23e2bf(0x1f4)]=_0x25b318[_0x23e2bf(0x217)];updateEditorInputs();}function resetInputs(){const _0x144f05=_0x4b6b;document[_0x144f05(0x20a)]('.meme-text-input')['value']='',updateEditorInputs();}function onAddLine(){const _0x4c8a2a=_0x4b6b;document[_0x4c8a2a(0x20a)]('.meme-text-input')[_0x4c8a2a(0x1f4)]='',document[_0x4c8a2a(0x20a)](_0x4c8a2a(0x210))[_0x4c8a2a(0x209)](),addLine(),renderMeme();}function onDeleteLine(){const _0x54cb8c=_0x4b6b;document[_0x54cb8c(0x20a)](_0x54cb8c(0x210))[_0x54cb8c(0x1f4)]='',deleteLine(),renderMeme();}function onSwitchLine(){switchLine(),updateEditorInputs(),renderMeme();}function onUpdateLineSize(_0x5727e9){updateLineSize(_0x5727e9),renderMeme();}function onSetAlignment(_0x231e36){setLineAlign(_0x231e36),renderMeme();}function onSetFont(_0x2417ec){const _0x3590f1=_0x4b6b;setLineFont(_0x2417ec[_0x3590f1(0x1f4)]),renderMeme();}function onSetStrokeStyle(_0x1fdb39){const _0x568eb1=_0x4b6b;_0x1fdb39[_0x568eb1(0x207)][_0x568eb1(0x1df)]['color']=_0x1fdb39[_0x568eb1(0x1f4)],setStrokeStyle(_0x1fdb39[_0x568eb1(0x1f4)]),renderMeme();}function onSetFillStyle(_0x163c7d){const _0x50a370=_0x4b6b;_0x163c7d['parentNode'][_0x50a370(0x1df)]['color']=_0x163c7d['value'],setFillStyle(_0x163c7d['value']),renderMeme();}function onDownloadMeme(_0x1186cf){const _0x2243a9=_0x4b6b;setLineEmpty(),renderMeme();const _0x194f2e=gElCanvas[_0x2243a9(0x1f2)]('image/jpeg');_0x1186cf[_0x2243a9(0x20b)]=getCurrImg()[_0x2243a9(0x1f3)],_0x1186cf['href']=_0x194f2e;}function onSaveMeme(){const _0x4e6f2b=_0x4b6b;setLineEmpty(),renderMeme();const _0x1c2932=getMeme(),_0x13bd60=getCurrImg(),_0x49cbe8=gElCanvas[_0x4e6f2b(0x1f2)](_0x4e6f2b(0x1c8));saveMeme(_0x1c2932,_0x13bd60,_0x49cbe8);const _0x45c61a=document[_0x4e6f2b(0x20a)](_0x4e6f2b(0x1cc));_0x45c61a[_0x4e6f2b(0x21d)][_0x4e6f2b(0x20e)]('shown'),setTimeout(()=>{const _0x3ef48b=_0x4e6f2b;_0x45c61a[_0x3ef48b(0x21d)][_0x3ef48b(0x1d2)](_0x3ef48b(0x1d3));},0x7d0);}function onShareMeme(){const _0xff87b5=_0x4b6b;setLineEmpty(),renderMeme();const _0x189a55=gElCanvas[_0xff87b5(0x1f2)](_0xff87b5(0x1c8));function _0x153123(_0x4d71be){const _0x429ade=_0xff87b5,_0x5446a9=encodeURIComponent(_0x4d71be);window['open'](_0x429ade(0x1e5)+_0x5446a9+_0x429ade(0x1c2)+_0x5446a9);}doUploadImg(_0x189a55,_0x153123);}function doUploadImg(_0x1c945e,_0x543a58){const _0x599ffc=_0x4b6b,_0x43183f=new FormData();_0x43183f[_0x599ffc(0x1f7)](_0x599ffc(0x1f5),_0x1c945e);const _0x1a1d23=new XMLHttpRequest();_0x1a1d23[_0x599ffc(0x1f0)]=()=>{const _0x3d53d4=_0x599ffc;if(_0x1a1d23[_0x3d53d4(0x1e2)]!==XMLHttpRequest[_0x3d53d4(0x21b)])return;if(_0x1a1d23[_0x3d53d4(0x1cf)]!==0xc8)return console[_0x3d53d4(0x1be)](_0x3d53d4(0x227));const _0x4d2bb9=_0x1a1d23[_0x3d53d4(0x20d)];_0x543a58(_0x4d2bb9);},_0x1a1d23[_0x599ffc(0x1ce)]=(_0x5259cf,_0xd7c63d)=>{const _0x4ec0fd=_0x599ffc;console[_0x4ec0fd(0x1be)](_0x4ec0fd(0x211),_0x5259cf,_0x4ec0fd(0x1ef),_0xd7c63d);},_0x1a1d23[_0x599ffc(0x21a)](_0x599ffc(0x1ec),_0x599ffc(0x1db)),_0x1a1d23[_0x599ffc(0x219)](_0x43183f);}function onResizeCanvas(){const _0x3165ac=_0x4b6b;gCanvasWidth=Math[_0x3165ac(0x218)](window[_0x3165ac(0x204)],DEFAULT_CANVAS_WIDTH),renderMeme();}function onKeyPressed(_0x565cb0){const _0x46f4d0=_0x4b6b;document[_0x46f4d0(0x20a)](_0x46f4d0(0x210))[_0x46f4d0(0x1f4)]+=_0x565cb0[_0x46f4d0(0x1c7)],appendLineTxt(_0x565cb0['key']),renderMeme();}