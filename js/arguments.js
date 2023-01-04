var args = {
    hta: [],
    begin: 0,
    appFilepath: '',
    flags: [
        {enable: false, value: '' },
        {enable: false, value: '' },
        {enable: false, value: '' },
        {enable: false, value: '' },
        {enable: false, value: '' },
        {enable: false, value: '' },
        {enable: false, value: '' },
        {enable: false, value: '' }
    ],
    init: function() {
        this.appFilepath = this.hta[0];
    },
    countFlags: function() { 
        return this.flags.filter(function(flag){ return flag.enable; }).length;
    },
    getArgument: function(name) {

    },
    setArgument: function(name, value) {

    },
    screen: function() {
        document.body.innerText = '\t\tParâmetros:\n\n' +
        '\t\t\t\t-q ou -qtd [qtde]\n\t\t\t\t\t\t\t\tUltimos registros\n\n';
        app.resize(520, 930);
    }
}