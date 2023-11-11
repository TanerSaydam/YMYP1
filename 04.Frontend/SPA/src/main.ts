interface ComponentOptions{
    template: string;
    selector?:string;
}

function Component(options: ComponentOptions){
    return function (constructor: any){
        constructor.prototype.template = options.template;
        constructor.prototype.selector = options.selector || "";
    }
}

class Router{ //oop => tanımı nesne yönelimli 
    static navigate(component: any){
        const root = document.querySelector("app-root");
        if(root){
            const instance = new component();
            root.innerHTML = instance.template;
            if(typeof instance.ngOnInit === 'function'){
                instance.ngOnInit();
            }
        }
    }
}

window.addEventListener("load", ()=> {
    Router.navigate(HomeComponent);
})


@Component({ //decarator
    template: `
    <h1>Home Component</h1>
    <app-child></app-child>
    `
})
class HomeComponent{  
    ngOnInit(){
        const childElement = document.querySelector("app-child");
        if(childElement){
            //childElement.innerHTML = new ChildComponent().template;
            childElement.innerHTML = (new ChildComponent() as any).template;
        }
    }  
}
//<!-- 12:23 görüşelim -->

@Component({
    template: "<p>I'm a child component</p>",
    selector: "app-child"
})
class ChildComponent{
   // [x: string]: string;
}