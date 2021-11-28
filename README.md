### 引入第三方库的方式

- 可以在index.html引入cdn链接

- 也可以将cdn链接的文件下载下载保存到assets目录下的静态文件，然后再angular.json -> "styles"，引入第三方库样式的路径(那为啥这样做，不推荐啊)

- 直接在styles.scss下@import引入更好(因为i脚手架本来就引入该入口文件)

  ```scss
  @import "./assets/styles/bootstrap@4.min.css";
  ```

- npm引入



### NgModules

> https://angular.cn/guide/ngmodules



### 绑定属性

>属性、类、样式、事件、双向绑定
>
>https://angular.cn/guide/property-binding

普通属性如td的colspan 注意驼峰写发[colSpan]

input或者button的disabled属性 [disabled]

[attr.title]



### 绑定样式

> https://angular.cn/guide/attribute-binding

单一类绑定

[class.btn-primary]="isPrimary" --- isPrimary = true

多重类绑定

[class]="btnCls" --- btnCls = 'btn-primary test' 字符串、数组、对象

Ng内置绑定 -- NgClass

[ngClass]

绑定单个style

[style.color]="'#178'"



#### 样式优先级

> https://angular.cn/guide/attribute-binding#styling-precedence



### 创建组件

`ng g c componentA`

`ng g c components/componentB`

`ng g c components/componentC -s -t --skipTests` 表示去掉测试文件， -s -t表示内敛模式，没有外联css文件，而且是内敛模板，也没有html 保留了component.ts文件



### 输入和输出属性

> https://angular.cn/guide/inputs-outputs



### 基本双向绑定

> https://angular.cn/guide/two-way-binding



```html
<!-- <app-sizer [size]="size" (change)="size = $event"></app-sizer> -->
<app-sizer [(size)]="size"></app-sizer>
<p>
  <label [style.fontSize.px]="size">FontSize: {{ size }}px</label>
</p>
```

效果一样的，下面的写法更精简



### 表单的双向绑定

[(ngModel)] 一个指令 

1. 名为ngModel的输入属性
2. 名为ngModelChange的输出属性

```ts
import {Component} from '@angular/core';

@Component({
  selector: 'example-app',
  template: `
    <input [(ngModel)]="name" #ctrl="ngModel" required>
    
    <p>Value: {{ name }}</p>
    <p>Valid: {{ ctrl.valid }}</p>
    
    <button (click)="setValue()">Set value</button>
  `,
})
export class SimpleNgModelComp {
  name: string = '';

  setValue() {
    this.name = 'Nancy';
  }
}
```

<input [(ngModel)]="name" /> 上面这行代码相当于： <input [value]="name" (input)="name = $event.target.value" />

#### 在form表单中使用

> 表单中使用[(ngModel)]，需要做下面两件事其中之一：

- 给控件加上name属性
- 将ngModelOptions.standalone设为true

```html
<form>
  <form>
    <input [(ngModel)]="value" name="name" />
    <input [(ngModel)]="value" [ngModelOptions]="{ standalone: true }" />
  </form>
</form>
```

