
dojo.require("dijit.layout.ContentPane");
dojo.require("dijit.layout.BorderContainer");
dojo.require("dijit.DropDownMenu");
dojo.require("dijit.MenuItem");
dojo.require("dijit.form.Button");
dojo.require("dijit.form.TextBox");

function findNews() {
    var url = "filter=" + dojo.toJson({'name__contains': document.getElementById('findByName').value});
    setStore(url);
}

function setStore(extUrl, categories) {

	dojo.xhrGet({
		url: window.location.origin + "/?" + extUrl,
		handleAs: "json",
		load: function (data) {
            var news = data['news'];
            if (dijit.byId('info-pane'))
                dijit.byId('info-pane').destroyRecursive();
            var myCp = new dijit.layout.ContentPane({
                id: 'info-pane',
                style: "height: 100%",
            }).placeAt("main-pane").startup();
            for (var i = 0; i < news.length; i++) {
                var content = '<h2>' + news[i]['name'] + '</h2>';//<div class="holder"></div>
                content += '<p><img src="' + MYMEDIA + news[i]['photo'] + '" height="80" alt="Фото" align="left">';
                content += news[i]['text'].substr(0, 300) + '<a href="/vote/' + news[i]['id'] + '">...Читать далее...</a></p>';
                var tmpCp = new dijit.layout.ContentPane({
                    id: 'report-' + i,
                    class: 'shadow-cp',
                    content: content
                }).placeAt("info-pane").startup();

            }

		},
		error: function(error){
			console.log("An unexpected error occurred: " + error);
		}})
}


dojo.ready(function(){
    setTimeout(function() {
        dijit.byId("layoutContainer").resize();
    }, 50);

});