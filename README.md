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

app.module.ts要引入FormsModule

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
>
> https://angular.cn/api/forms/NgModel#using-a-standalone-ngmodel-within-a-group

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



一些补充可以看文档:

> https://angular.cn/api/forms/NgModel#instance-properties



### 指令

- 属性型指令
- 结构性指令(带*号的)



### 模板引用变量 #var

#phone

ref-phone 两种写法是一样的 相当于vue的refs=""

获取实例



### 模板运算符

安全导航运算符(?)和空属性路径

#### 可选链? ---> es2020定义

a?.b?.c?.d

a && a.b && a.b.c && a.b.c.d

```
<p>The item name is : {{item?.name}} </p>
```



#### 非空断言(!)

> 在ts中，开启--strictNullChecks后，将一个可能是undefined或null的变量赋给一个有确切类型的变量时，会报错

但在特定情况下，我们很确定那个变量一定不是undefined或null，这个时候就可以用非空断言操作符，用了这个操作符的变量，可以理解为ts不要去操心了，我这个变量一定是有值的，非空断言生效的前提是开启 --strictNullCheck使用非空断言的两个步骤:

- tsconfig.json中设置"strictNullChecks": true, 
- tslint.json中设置"no-non-null-assertion": false

```ts
ngOnInit(): void {
    const hereName: string = this.name!;
    // 以上写法相当于
	if (this.name) {
        const heroName: string = this.name;
    }
}
```

