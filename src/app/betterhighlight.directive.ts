import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit {

  constructor(private elref: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.renderer.setStyle(this.elref.nativeElement, "background-color", "blue")
  }
  @HostBinding("style.border") border: string | undefined
  
  @HostListener("mouseenter") mouseover() {
    this.renderer.setStyle(this.elref.nativeElement, "background-color", "pink")
    this.border="5px red solid"
  }
  @HostListener("mouseleave") mouseleave() {
    this.renderer.setStyle(this.elref.nativeElement, "background-color", "aqua")
    this.border="5px red dotted"
  }

}
