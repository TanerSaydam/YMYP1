import { Component } from "@angular/core";

@Component({
    selector: "app-button-renderer",
    standalone: true,
    imports: [],
    template: `
    <button type="button" class="btn btn-sm btn-danger" (click)="onClick($event)">
        {{label}}
    </button>
    `
})
export class ButtonRendererComponent{
    params: any;
    label: string = "";

    agInit(params: any): void{
        this.params = params;
        this.label = this.params.label || null;
    }    

    onClick(event: any){
        if(this.params.onClick instanceof Function){
            const params = {
                event: event,
                rowData: this.params.node.data
            }
            this.params.onClick(params);
        }
    }
}