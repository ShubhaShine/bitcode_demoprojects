import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
 selector:"[appBasicHighlight]"
})
   

export class basicHighlight implements OnInit
{
    constructor(private elRef: ElementRef) {
        
    }
    ngOnInit(): void {
        this.elRef.nativeElement.style.backgroundColor = "yellow"
    }
 }