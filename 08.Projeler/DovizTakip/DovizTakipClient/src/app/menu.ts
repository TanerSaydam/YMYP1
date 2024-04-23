export class MenuModel{
    name: string = "";
    icon: string = "";
    url: string = "";
    isTitle: boolean = false;
    subMenus: MenuModel[] = [];
}

export const Menus: MenuModel[] = [
    {
        name: "Ana Sayfa",
        icon: "far fa fa-home",
        url: "/",
        isTitle: false,
        subMenus: []
    },
    {
        name: "Ana Sayfa",
        icon: "far fa fa-home",
        url: "/",
        isTitle: true,
        subMenus: []
    },
    {
        name: "Ürünler",
        icon: "far fa fa-box",
        url: "/producs",
        isTitle: false,
        subMenus: [
            {
                name: "Ana Sayfa",
                icon: "far fa fa-home",
                url: "/",
                isTitle: false,
                subMenus: []
            }
        ]
    }
]