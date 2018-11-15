import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'jhi-gwt',
    templateUrl: './gwt.component.html',
    styleUrls: ['./gwt.css']
})
export class GwtComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        // load gwt script
        const node = document.createElement('script');
        node.src = 'jhipmonogwt/jhipmonogwt.nocache.js';
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementById('gwt').appendChild(node);
    }
}
