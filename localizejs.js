(function(global){
    var _localization = global.localization = global.localization || {};
    var _currentLang, _defaultLang, _langs;

    function getLang(){
        if(!_currentLang) throw "You didn't set the language...";
        return _currentLang;
    }
    
    var messages = {};
    
    _localization.language = function(lang){
        if(arguments.length === 0) return getLang();
        if(_langs.indexOf(lang) === -1) throw "Current language cannot be found in the available languages.";
        _currentLang = lang || _defaultLang;
    };

    _localization.initialize = function(langs, defaultLang, currentLang){
        _langs = langs;
        _defaultLang = defaultLang;
        _currentLang = currentLang;
    };
    
    _localization.choose = function(choices){
        if(!(getLang() in choices)) throw "Current language cannot be found in your choices";
        return choices[getLang()];
    };

    _localization.message = function(message, lang){
        var l = lang || getLang();
        if(_langs.indexOf(l) === -1) throw "Current language cannot be found in the available languages.";
    	if(message in messages){
            return messages[message][l];
    	}
    };
    
    _localization.addMessages = function(arr){
        arr.forEach(function(item){
            messages[item.name] = item.message;
        });
    };

    _localization.getMessages = function(){
        return messages;
    };

})(window);

