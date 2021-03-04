class ajaxClass {
    constructor() {
    }
    async call(ajaxBody) {
        if (ajaxBody.method == undefined) {
            ajaxBody.method = "GET";
        }
        if (ajaxBody.data == undefined) {
            ajaxBody.data = null;
        }
        let req = new XMLHttpRequest();
        req.open(ajaxBody.method, ajaxBody.url, true);
        req.onreadystatechange = function () {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    if (ajaxBody.success) {
                        if (ajaxBody.object) {
                            ajaxBody.success(JSON.parse(req.responseText));
                        }
                        else {
                            ajaxBody.success(req.responseText);
                        }
                    }
                }
                else {
                    if (ajaxBody.error) {
                        ajaxBody.error(req);
                    }
                }
                if (ajaxBody.done) {
                    ajaxBody.done(req);
                }
            }
        };
        req.send(ajaxBody.data);
    }
    async load(ajaxBody, id) {
        if (ajaxBody.method == undefined) {
            ajaxBody.method = "GET";
        }
        if (ajaxBody.data == undefined) {
            ajaxBody.data = null;
        }
        let req = new XMLHttpRequest();
        req.open(ajaxBody.method, ajaxBody.url, true);
        req.onreadystatechange = function () {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    if (ajaxBody.success) {
                        if (ajaxBody.object) {
                            ajaxBody.success(JSON.parse(req.responseText));
                        }
                        else {
                            ajaxBody.success(req.responseText);
                        }
                    }
                }
                else {
                    if (ajaxBody.error) {
                        ajaxBody.error(req);
                    }
                }
                if (ajaxBody.done) {
                    ajaxBody.done(req);
                }
            }
        };
        req.send(ajaxBody.data);
    }
}
const http = new ajaxClass();
