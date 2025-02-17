function r(e){return e.replace(/[.,/#!$%^&*;:{}=\-_'"`~()]/g,"").replace(/s{2,}/g," ").toLowerCase().normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),"")}export{r as s};
