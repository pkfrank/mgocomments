CKEDITOR.editorConfig=function(config){config.indentClasses=['rteindent1','rteindent2','rteindent3','rteindent4'];config.justifyClasses=['rteleft','rtecenter','rteright','rtejustify'];config.resize_minWidth=450;config.protectedSource.push(/<\?[\s\S]*?\?>/g);config.protectedSource.push(/<code>[\s\S]*?<\/code>/gi);config.extraPlugins='';config.extraCss='';var themeName=Drupal.settings.ckeditor.theme;if(typeof themeName=="object"){themeName=Drupal.settings.ckeditor.theme[0];}
if(themeName=="marinelli"){config.extraCss+="body{background:#FFF;text-align:left;font-size:0.8em;}";config.extraCss+="#primary ol, #primary ul{margin:10px 0 10px 25px;}";}
if(themeName=="newsflash"){config.extraCss="body{min-width:400px}";}
config.bodyClass='';config.bodyId='';if(themeName=="marinelli"){config.bodyClass='singlepage';config.bodyId='primary';}};Drupal.settings.cke_toolbar_DrupalBasic=[['Format','Bold','Italic','-','NumberedList','BulletedList','-','Link','Unlink','Image']];Drupal.settings.cke_toolbar_DrupalAdvanced=[['Source'],['Cut','Copy','Paste','PasteText','PasteFromWord','-','SpellChecker','Scayt'],['Undo','Redo','Find','Replace','-','SelectAll','RemoveFormat'],['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar'],['Maximize','ShowBlocks'],'/',['Format'],['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiRtl','BidiLtr'],['Link','Unlink','Anchor','Linkit','LinkToNode','LinkToMenu'],['DrupalBreak','DrupalPageBreak']];Drupal.settings.cke_toolbar_DrupalFull=[['Source'],['Cut','Copy','Paste','PasteText','PasteFromWord','-','SpellChecker','Scayt'],['Undo','Redo','Find','Replace','-','SelectAll','RemoveFormat'],['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','Iframe'],'/',['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],['NumberedList','BulletedList','-','Outdent','Indent','Blockquote','CreateDiv'],['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiRtl','BidiLtr'],['Link','Unlink','Anchor','Linkit','LinkToNode','LinkToMenu'],'/',['Format','Font','FontSize'],['TextColor','BGColor'],['Maximize','ShowBlocks'],['DrupalBreak','DrupalPageBreak']];