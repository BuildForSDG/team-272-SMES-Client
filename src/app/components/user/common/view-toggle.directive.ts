import { Directive, OnInit, Inject, ElementRef } from '@angular/core';

@Directive({
    selector: '[view-toggle]'
})

export class ViewToggleDirective implements OnInit {
    private el: HTMLElement;
    private views: any;
    private links: any;
    private BtnGrp: any;
    private step = 0;


    constructor(ref: ElementRef) {
        this.el = ref.nativeElement;
    }

    ngOnInit() {
        this.views = this.el.querySelectorAll('.view');
        this.links = this.el.querySelectorAll('.view-links');
        this.BtnGrp = this.el.querySelector('.btnGrp');
        const elements = {
            views: this.views,
            links: this.links,
            BtnGrp: this.BtnGrp
        };

        initialDisplay(elements);

        this.links[0].addEventListener('click', () => {
            this.views[0].style.display = 'block';
            elements.BtnGrp.querySelector('#btn-group .nav-btn-group #next').style.display = 'inline-block';
            initialDisplay(elements);
            this.step = 0;
        });

        this.links[1].addEventListener('click', () => {
            businessView(elements);
            this.step = 1;
        });

        this.links[2].addEventListener('click', () => {
            credentialsView(elements);
            this.step = 2;
        });

        this.BtnGrp.querySelector('#btn-group .nav-btn-group #back').addEventListener('click', () => {
            switch (this.step) {
                case 1:
                    this.views[0].style.display = 'block';
                    initialDisplay(elements);
                    this.step = 0;
                    break;
                case 2:
                    businessView(elements);
                    this.step = 1;
                    break;
                default:
                    this.views[0].style.display = 'block';
                    initialDisplay(elements);
                    this.step = 0;
            }
        });

        this.BtnGrp.querySelector('#btn-group .nav-btn-group #next').addEventListener('click', () => {
            switch (this.step) {
                case 0:
                    businessView(elements);
                    this.step = 1;
                    break;
                case 1:
                    credentialsView(elements);
                    this.step = 2;
                    break;
                default:
                    this.views[0].style.display = 'block';
                    initialDisplay(elements);
                    this.step = 0;
            }
        });


    }
}

function initialDisplay(elements: any) {
    elements.views[1].style.display = 'none';
    elements.views[2].style.display = 'none';
    elements.BtnGrp.querySelector('#btn-group .submit-btn-group').style.display = 'none';
    elements.BtnGrp.querySelector('#btn-group .nav-btn-group #back').style.display = 'none';
}

function businessView(elements: any) {
    elements.views[0].style.display = 'none';
    elements.views[2].style.display = 'none';
    elements.views[1].style.display = 'block';
    elements.BtnGrp.querySelector('#btn-group .nav-btn-group #back').style.display = 'inline-block';
    elements.BtnGrp.querySelector('#btn-group .nav-btn-group #next').style.display = 'inline-block';
    elements.BtnGrp.querySelector('#btn-group .submit-btn-group').style.display = 'none';
}

function credentialsView(elements: any) {
    elements.views[0].style.display = 'none';
    elements.views[2].style.display = 'block';
    elements.views[1].style.display = 'none';
    elements.BtnGrp.querySelector('#btn-group .nav-btn-group #back').style.display = 'inline-block';
    elements.BtnGrp.querySelector('#btn-group .nav-btn-group #next').style.display = 'none';
    elements.BtnGrp.querySelector('#btn-group .submit-btn-group').style.display = 'inline-block';
}
