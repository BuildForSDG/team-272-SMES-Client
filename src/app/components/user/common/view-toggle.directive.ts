import { Directive, OnInit, Inject, ElementRef } from '@angular/core';
import { JQ_TOKEN } from 'src/app/shared/jQuery.service';

@Directive({
    selector: '[view-toggle]'
})

export class ViewToggleDirective implements OnInit{
    private el: HTMLElement;
    private views: any;
    private links: any;
    constructor(@Inject(JQ_TOKEN) private $, ref: ElementRef) {
        this.el = ref.nativeElement;
    }

    ngOnInit() {
        this.views = this.el.querySelectorAll('.view');
        this.links = this.el.querySelectorAll('.view-links');
        initialDisplay(this.views);

        this.links[0].addEventListener('click', e => {
            this.views[0].style.display = 'block';
            initialDisplay(this.views);
        });

        this.links[1].addEventListener('click', e => {
            this.views[0].style.display = 'none';
            this.views[2].style.display = 'none';
            this.views[1].style.display = 'block';
        });

        this.links[2].addEventListener('click', e => {
            this.views[0].style.display = 'none';
            this.views[2].style.display = 'block';
            this.views[1].style.display = 'none';
        });


    }
}

function initialDisplay(views: any) {
    views[1].style.display = 'none';
    views[2].style.display = 'none';
}

