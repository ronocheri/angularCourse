import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
selector: 'my-root',
templateUrl: './root.component.html',
styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit , OnDestroy{

    first:string="Pizza"
    second:string="Sushi"
 isListPresented: boolean = true;

 onOffBtnText='show'
constructor() { }

showHideList()
{
    this.isListPresented=!this.isListPresented
    if(!this.isListPresented)
    {
        this.onOffBtnText="show"
    }
    else
    this.onOffBtnText="hide"
    
}

copyText()
{
    this.second=this.first
}

copyText2()
{
    this.first=this.second
}
ngOnInit(): void {
}

ngOnDestroy(): void {
    console.log("OnDestroy")
}

}