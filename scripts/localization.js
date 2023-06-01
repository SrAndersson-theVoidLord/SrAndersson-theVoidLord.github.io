const FR_XML_PATH = "../xml/fr.xml";
const EN_XML_PATH = "../xml/en.xml";
const DEFAULT_LANGUAGE = "EN";
const USE_DEFAULT_LANGUAGE = true;
const FR = "FR";
const EN = "EN";

var frXML, enXML, myXML;
var xmlhttpFR = new XMLHttpRequest();
var currentLanguage;

  xmlhttpFR.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      frXMLGet(this);
    }
  };

    var xmlhttpEN = new XMLHttpRequest();

      xmlhttpEN.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          enXMLGet(this);
        }
      };
  $(document).ready(function(){
    xmlhttpFR.open("GET", FR_XML_PATH, true);
    xmlhttpFR.send();
    xmlhttpEN.open("GET", EN_XML_PATH, true);
    xmlhttpEN.send();
  });


  function frXMLGet(xml) {
    frXML = xml.responseXML;
    if(DEFAULT_LANGUAGE === FR && USE_DEFAULT_LANGUAGE)
      SelectLanguageForTranslate(FR);

      $(".FRBtn").click(function(){
        SelectLanguageForTranslate(FR,$(this).hasClass("firstLChose"));
      });
  }

    function enXMLGet(xml) {
      enXML = xml.responseXML;
      if(DEFAULT_LANGUAGE === EN && USE_DEFAULT_LANGUAGE)
        SelectLanguageForTranslate(EN);

        $(".ENBtn").click(function(){
          SelectLanguageForTranslate(EN,$(this).hasClass("firstLChose"));
        });

    }


function SelectLanguageForTranslate(language){
  currentLanguage = language;

  switch (language) {
    case "FR":
      myXML = frXML;
      break;
    case "EN":
      myXML = enXML;
      break;
    default:
      myXML = frXML;
  }

  Translate(myXML);
  TranslateTitle(myXML);
  TranslateHref(myXML);
  $(".TranslatableIFrame").each(function(){
    if($(this)[0].contentWindow.TranslateByParents !== undefined)
      $(this)[0].contentWindow.TranslateByParents();
  });
}

function Translate(xml){
  $(".Translatable").each(function(){
    this.innerHTML = GetTranslation(xml,$(this).attr("key"));
  });
}

function TranslateAttr(attr,xml,caller){
  caller.attr(attr,GetTranslation(xml,caller.attr("key")));
}

function TranslateTitle(xml){
  $(".TitleTranslatable").each(function(){
      TranslateAttr("title",xml,$(this));
  });
}

function TranslateHref(xml){
  $(".HrefTranslatable").each(function(){
      TranslateAttr("href",xml,$(this));
  });
}

function GetTranslation(xml,key){
  var xmlElement = xml.getElementsByTagName(key);
  if(xmlElement != null && xmlElement.length > 0)
    return xmlElement[0].innerHTML

  return key;
}
