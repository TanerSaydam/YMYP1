import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[validate]'
})
export class ValidateDirective {

  constructor(
    private el: ElementRef<HTMLInputElement>
  ) { }

  checkValidation(){
    const isValid = this.el.nativeElement.validity.valid;
    if(isValid){  
      this.el.nativeElement.classList.add("is-valid");
      this.el.nativeElement.classList.remove("is-invalid");
    }else{
      this.el.nativeElement.classList.add("is-invalid");
      this.el.nativeElement.classList.remove("is-valid");

      console.log(this.el)
      const divEl:any = document.querySelector(`#${this.el.nativeElement.id} + .invalid-feedback`)
      divEl.innerHTML = this.el.nativeElement.validationMessage
    }
  }

  @HostListener("keyup") keyup(){
    this.checkValidation();
  }

}
