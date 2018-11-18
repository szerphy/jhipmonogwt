import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'jhi-gwt-rpc',
    templateUrl: './gwt-rpc.component.html',
    styleUrls: ['./gwt-rpc.css']
})
export class GwtRpcComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        // load gwt script
        const node = document.createElement('script');
        node.src = 'gwtrpc/gwtrpc.nocache.js';
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementById('gwt').appendChild(node);
    }
}
