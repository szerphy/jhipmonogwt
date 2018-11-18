import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'jhi-gwt-dispatch',
    templateUrl: './gwt-dispatch.component.html',
    styleUrls: ['./gwt-dispatch.css']
})
export class GwtDispatchComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        // load gwt script
        const node = document.createElement('script');
        node.src = 'gwtdispatch/gwtdispatch.nocache.js';
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementById('gwt').appendChild(node);
    }
}
