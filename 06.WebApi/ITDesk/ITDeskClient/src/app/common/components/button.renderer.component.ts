import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
    selector: "app-button-renderer",
    standalone: true,
    imports: [ButtonModule],
    template: `
    <span style="cursor: pointer;" class="p-badge p-component p-badge-lg p-badge-success" (click)="onClick($event)" >
        Detay
    </span>
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