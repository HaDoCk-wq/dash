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
        let done;
        req.open(ajaxBody.method, ajaxBody.url, true);
        if (this.done) {
            done = this.done;
        }
        if (this.loading) {
            this.loading(req);
        }
        req.onreadystatechange = function () {
            if (ajaxBody.unsent) {
                if (req.readyState == 0) {
                    ajaxBody.unsent(req);
                }
            }
            if (ajaxBody.opened) {
                if (req.readyState == 1) {
                    ajaxBody.opened(req);
                }
            }
            if (ajaxBody.headers_received) {
                if (req.readyState == 2) {
                    ajaxBody.headers_received(req);
                }
            }
            if (ajaxBody.loading) {
                if (req.readyState == 3) {
                    ajaxBody.loading(req);
                }
            }
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
                    if (done) {
                        done(req);
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
    async post(ajaxBody) {
        if (ajaxBody.data == undefined) {
            ajaxBody.data = null;
        }
        let req = new XMLHttpRequest();
        let done;
        req.open("post", ajaxBody.url, true);
        if (this.done) {
            done = this.done;
        }
        if (this.loading) {
            this.loading(req);
        }
        req.onreadystatechange = function () {
            if (ajaxBody.unsent) {
                if (req.readyState == 0) {
                    ajaxBody.unsent(req);
                }
            }
            if (ajaxBody.opened) {
                if (req.readyState == 1) {
                    ajaxBody.opened(req);
                }
            }
            if (ajaxBody.headers_received) {
                if (req.readyState == 2) {
                    ajaxBody.headers_received(req);
                }
            }
            if (ajaxBody.loading) {
                if (req.readyState == 3) {
                    ajaxBody.loading(req);
                }
            }
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
                    if (done) {
                        done(req);
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
    async get(ajaxBody) {
        if (ajaxBody.method == undefined) {
            ajaxBody.method = "GET";
        }
        if (ajaxBody.data == undefined) {
            ajaxBody.data = null;
        }
        let req = new XMLHttpRequest();
        let done;
        req.open("get", ajaxBody.url, true);
        if (this.done) {
            done = this.done;
        }
        if (this.loading) {
            this.loading(req);
        }
        req.onreadystatechange = function () {
            if (ajaxBody.unsent) {
                if (req.readyState == 0) {
                    ajaxBody.unsent(req);
                }
            }
            if (ajaxBody.opened) {
                if (req.readyState == 1) {
                    ajaxBody.opened(req);
                }
            }
            if (ajaxBody.headers_received) {
                if (req.readyState == 2) {
                    ajaxBody.headers_received(req);
                }
            }
            if (ajaxBody.loading) {
                if (req.readyState == 3) {
                    ajaxBody.loading(req);
                }
            }
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
                    if (done) {
                        done(req);
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
    }
}
const http = new ajaxClass();
