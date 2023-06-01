$(document).ready(function(){
  TranslateByParents();

  $(".ENBtn").click(function(){
    $(window.parent)[0].SelectLanguageForTranslate("EN");
  });

  $(".FRBtn").click(function(){
    $(window.parent)[0].SelectLanguageForTranslate("FR");
  });
});


function TranslateByParents(){
  if(window !== null && window !== undefined)
    if(window.parent !== null && window.parent !== undefined)
      if($(window.parent).length > 0)
        if($(window.parent)[0].myXML !== undefined && $(window.parent)[0].myXML !== null){
          $(".Translatable").each(function(){
              this.innerHTML = $(window.parent)[0].GetTranslation($(window.parent)[0].myXML,$(this).attr("key"));
          });

          $(".TitleTranslatable").each(function(){
              $(this).attr("title",$(window.parent)[0].GetTranslation($(window.parent)[0].myXML,$(this).attr("key")));
          });

          $(".HrefTranslatable").each(function(){
              $(this).attr("href",$(window.parent)[0].GetTranslation($(window.parent)[0].myXML,$(this).attr("key")));
          });
        }
}
