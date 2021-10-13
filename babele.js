Hooks.once('init', () => {

    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'swade_zh_tw',
            lang: 'zh-TW',
            dir: 'compendium'
        });
    }
});

