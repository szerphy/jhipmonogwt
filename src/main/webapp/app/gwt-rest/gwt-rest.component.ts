import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'jhi-gwt-rest',
    templateUrl: './gwt-rest.component.html',
    styleUrls: ['./gwt-rest.css']
})
export class GwtRestComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        // load gwt script
        const node = document.createElement('script');
        node.src = 'gwtrest/gwtrest.nocache.js';
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementById('gwt').appendChild(node);
    }
}
