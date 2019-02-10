import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'dodgerblue';

  @HostBinding('style.backgroundColor') backgroundColor: string =  this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(){ 
    this.backgroundColor = this.defaultColor;
   }
  
  @HostListener('mouseenter') mouseover(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'dodgerblue')
    this.backgroundColor = this.highlightColor
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = this.defaultColor

  }
}
