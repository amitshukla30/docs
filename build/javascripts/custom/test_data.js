function findAndReplaceApiKeys(e){window.findAndReplaceDOMText(document.getElementsByTagName("body")[0],{find:/%test_secret_key%/g,replace:e.secret}),window.findAndReplaceDOMText(document.getElementsByTagName("body")[0],{find:/%test_public_key%/g,replace:e["public"]})}$(function(){fetch("https://api.stgverifypayments.com/test_data").then(function(e){return e.json()}).then(function(e){findAndReplaceApiKeys(e.api_keys[0])})});