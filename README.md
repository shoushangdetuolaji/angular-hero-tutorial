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



### 属性型指令

> https://angular.cn/guide/attribute-directives

创建指令

`ng g d <name> --skipTests`

参考官网例子



### 结构型指令

> https://angular.cn/guide/structural-directives



### TemplateRef和ViewContainerRef

> 一般在ts文件中的

- https://angular.cn/api/core/EmbeddedViewRef
- https://angular.cn/api/core/TemplateRef
- https://angular.cn/api/core/ViewContainerRef



ViewContainerRef

表示可以将一个或多个视图附着到组件中的容器。

EmbeddedVieRef

表示视图容器中的 Angular [视图](https://angular.cn/guide/glossary#view)。[嵌入视图](https://angular.cn/guide/glossary#view-tree)可以从在模板中定义它的宿主组件之外的组件中引用，也可以由 `TemplateRef` 进行独立定义。

TemplateRef

表示一个内嵌模板，它可用于实例化内嵌的视图。 要想根据模板实例化内嵌的视图，请使用 `ViewContainerRef` 的 `createEmbeddedView()` 方法。

用法可查看:

> https://gitee.com/Madom/ng10-course/blob/master/hero(%E5%89%8D9%E7%AB%A0%E6%BA%90%E7%A0%81)/notes/1.%E7%BB%84%E4%BB%B6%E4%B8%8E%E6%A8%A1%E7%89%88/TemplateRef%E5%92%8CViewContainerRef.md



### NgTemplateOutlet指令

> 根据一个提前准备好的templateRef插入一个内嵌式图

> https://angular.cn/api/common/NgTemplateOutlet#description



### 组件投影

> 相当于组件中的slot插槽？

```TS
import { Component, Input, TemplateRef } from '@angular/core';
@Component({
  selector: 'app-shadow',
  template: `
            <div class="shadow">
              <div class="head">
                <ng-content select=".head"></ng-content>
              </div>
              <div class="body">
                <ng-content select="[attr]"></ng-content>
                <ng-content select="article"></ng-content>
                <ng-content></ng-content>
              </div>
              <div class="foot">
                <ng-content select=".foot"></ng-content>
              </div>
            </div>`
})
export class ShadowComponent  {}
```

调用ShadowComponent:

```ts
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
            <app-shadow [visible]="true">
              <div class="head">这是head的投影</div>
              <div attr>这是attr的投影内容</div>
              <article>这是article的投影内容</article>
              <b style="color: #007bff">这是默认的投影内容</b>
              <div class="foot">这是foot的投影</div>
            </app-shadow>
          `
})
export class AppComponent  {}
```



### ViewChild和ViewChildren

>https://angular.cn/api/core/ViewChild
>
>https://angular.cn/api/core/ViewChildren



#### ViewChild

最好在ngAfterViewInit(生命周期处理函数)，获取模板上得内容

```ts
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-view-child',
  template: `
      <section>
        <h3>获取dom</h3>
        <div class="box" #box>
          <p>box</p>
        </div>
      </section>
 `,
  styles: []
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  @ViewChild('box') private boxEl: ElementRef;
  constructor() {
    // TypeError: Cannot read property 'nativeElement' of undefined
    console.log('0', this.boxEl.nativeElement);
  }

  ngOnInit(): void {
    // TypeError: Cannot read property 'nativeElement' of undefined
    console.log('1', this.boxEl.nativeElement);
  }
  ngAfterViewInit(): void {
    console.log(2, this.boxEl.nativeElement); // 正确
  }
}
```

**上面例子中的boxEl，默认在变更检测之后才会获取到元素，而ngAfterViewInit就是在变更检测之后才会调用**

##### static属性

> 默认在变更检测之后才会获取到目标元素，可开启static，这样组件初始化到时候，变更检测前就能获取到目标

```TS
export class ViewChildComponent implements OnInit, AfterViewInit {
  @ViewChild('box', { static: true }) private boxEl: ElementRef;
  constructor() {
    // TypeError: Cannot read property 'nativeElement' of undefined
    console.log('0', this.boxEl.nativeElement);
  }

  ngOnInit(): void {
    console.log('1', this.boxEl.nativeElement); // 正确
  }
  ngAfterViewInit(): void {
    console.log(2, this.boxEl.nativeElement); // 正确
  }
}
```

**可以看到在constructor里是拿不到模板元素的，建议如果目标从一开始就显示在模版上**
**即没有被ngIf等指令操控，就开启static**

##### 获取子组件（指令）

> 以组件为例，获取到组件实例后可以访问子组件到属性和方法，指令用法和组件一摸一样

```TS
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
@Component({
  selector: 'app-view-child-panel',
  templateUrl: './view-child-panel.component.html'
})
export class ViewChildPanelComponent implements OnInit {
  readonly name = 'panel';
  constructor() { }
  ngOnInit(): void {}
}


@Component({
  selector: 'app-view-child',
  template: `
      <section>
        <h3>获取自组件</h3>
        <app-view-child-panel></app-view-child-panel>
      </section>
 `,
  styles: []
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  @ViewChild(ViewChildPanelComponent, { static: true }) private panel: ViewChildPanelComponent;
    constructor() {}
    ngOnInit(): void {}
    ngAfterViewInit(): void {
      // console.log(2, this.boxEl.nativeElement);
      console.log(this.panel.name);
    }
}
```

获取template也行(TemplateRef和ViewContainerRef)



#### ViewChildren

> 与ViewChild类似，它可以批量获取模板上相同选择器的元素并存放到[QueryList](https://gitee.com/link?target=https%3A%2F%2Fangular.cn%2Fapi%2Fcore%2FQueryList%23querylist)类中 ViewChildren没有static属性
>
> 批量获取子组件和dom元素

```TS
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-view-child',
  template: `
      <section>
        <h3>获取dom</h3>
        <div class="box" #box>
          <p>box</p>
        </div>
      </section>
      
      
      <section #box>
        <h3>获取子组件</h3>
        <app-view-child-panel #myPanel></app-view-child-panel>
        <app-view-child-panel #myPanel></app-view-child-panel>
        <app-view-child-panel #myPanel></app-view-child-panel>
      </section>
 `,
  styles: []
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  @ViewChild('box', { static: true }) private boxEl: ElementRef;
  @ViewChildren('box') private boxEls: QueryList<ElementRef>;
  @ViewChild(ViewChildPanelComponent, { static: true }) private panel: ViewChildPanelComponent;
  @ViewChildren(ViewChildPanelComponent) private panels: QueryList<ViewChildPanelComponent>;    constructor() {}
    ngOnInit(): void {}
    ngAfterViewInit(): void {
      console.log(this.panels);
      console.log(this.boxEls);
    }
}
```

#### QueryList

> 模板元素集合

```TS
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-view-child',
  template: `
      
      <section>
        <h3>获取子组件</h3>
        <button class="btn btn-primary" (click)="showMidPanel = !showMidPanel">toggle mid</button>
        <app-view-child-panel #myPanel></app-view-child-panel>
        <app-view-child-panel #myPanel *ngIf="showMidPanel"></app-view-child-panel>
        <app-view-child-panel #myPanel></app-view-child-panel>
      </section>
 `,
  styles: []
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  @ViewChildren(ViewChildPanelComponent) private panels: QueryList<ViewChildPanelComponent>;    constructor() {}
    ngOnInit(): void {}
    ngAfterViewInit(): void {
      this.panels.changes.subscribe(changes => {
        console.log('changes', changes);
      });
    }
}
```



### ContentChild和ContentChildren

> https://angular.cn/api/core/ContentChild
>
> https://angular.cn/api/core/ContentChildren

用法类似ViewChild，获取投影中到组件或指令还有元素dom等

#### 获取投影中单组件

```TS
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-content-child-panel',
  templateUrl: './content-child-panel.component.html'
})
export class ContentChildPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  alert() {
    alert('aa');
  }
}

@Component({
  selector: 'app-content-child',
  template: `
      <div class="content-child-box">
        <h2>这是content child组件</h2>
        <div class="head" style="border: 1px solid; margin: 10px 0;">
          <ng-content select=".head"></ng-content>
        </div>
        <ng-content></ng-content>
      </div>
 `,
  styles: []
})
export class ContentChildComponent implements AfterViewInit {
  // 无法获取dom元素
  // @ContentChild('.head', { static: true }) private headEl: ElementRef;
  // @ContentChild('list', { static: true }) private listEl: ElementRef;
  @ContentChild(ContentChildPanelComponent, { static: true }) private panel: ContentChildPanelComponent;
  constructor() { }

  ngAfterViewInit(): void {
    this.panel.alert();
  }

}
```

调用ContentChildComponent：

```
<app-content-child>
  <div class="head">
    这是头部
  </div>
  <app-content-child-panel></app-content-child-panel>
  <ul #list>
    <li>aaa</li>
    <li>bbb</li>
  </ul>
</app-content-child>
```

#### ContentChildren

> 用法类似ViewChildren，批量获取投影中到组件或指令

```
<app-content-child>
  <div class="head">
    这是头部
  <app-content-child-panel></app-content-child-panel>
  </div>
  <app-content-child-panel></app-content-child-panel>
  <app-content-child-panel></app-content-child-panel>
  <ul #list>
    <li>aaa</li>
    <li>bbb</li>
  </ul>
</app-content-child>
export class ContentChildComponent implements AfterViewInit {
  @ContentChildren(ContentChildPanelComponent) private panels: QueryList<ContentChildPanelComponent>;
  constructor() { }

  ngAfterViewInit(): void {
    console.log(this.panels); // 只有两个结果
  }

}
```



#### descendants属性

> 是ContentChildren特有但属性，上个例子少拿类一个panel组件，原因是默认只寻找直属子panel 而.head里但panel组件，并非直属，所以拿不到，想要寻找到所有层级的panel组件，就开启descendants

**@ContentChildren(ContentChildPanelComponent, { descendants: true }) private panels: QueryList;**



### 管道

> https://angular.cn/guide/pipes#transforming-data-using-pipes



### 生命周期

> 组件和指令 但是指令没全的



### 变更检测

> 叼这个很难说，用的时候就2行代码给搞定，忘记了再看文档吧。



### 组件样式

#### 宿主选择器

> :host 选择是是把宿主元素作为目标的唯一方式

它选中的是组件模板标签，比如，相当于在父组件的style中选择 app-user {}

当宿主标签上有 active class时生效

```
:host(.active) {
  border-width: 3px;
}
```

#### 祖先选择器

当某个祖先元素有 CSS 类 theme-light 时，才会把 background-color 样式应用到组件内部的所有 .title 元素中
找到根元素(html标签)为止

```
:host-context(.theme-light) .title {
  background-color: #95f04c;
}
```



#### 样式模块化

- 在 @Component 的元数据中指定的样式只会对该组件的模板生效
- 组件的样式不会影响到子组件中的模板
- 组件的样式不会影响到投影内容

#### 视图封装模式

- ShadowDom -- 不进不出，没有样式能进来，组件样式出不去, 就自己玩
- Emulated -- 默认选项，只进不出，全局样式能进来，组件样式出不去
- None -- 能进能出，此时组件的样式是全局生效的，注意与其他组件发生样式冲突



### 动态组件

> https://angular.cn/guide/dynamic-component-loader

这是官网的一个生动的例子，看云师兄的模板也行(理解不了的话

> https://gitee.com/Madom/ng10-course/blob/master/hero(%E5%89%8D9%E7%AB%A0%E6%BA%90%E7%A0%81)/notes/1.%E7%BB%84%E4%BB%B6%E4%B8%8E%E6%A8%A1%E7%89%88/%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6.md





### 一些配置问题

- SOLUTION - Error TS2564: Property has no initializer and is not definitely assigned in constructor

  - tsconfig.json->compilerOptions ->

    ```
    "noImplicitReturns": false,
    "strictPropertyInitialization": false,
    ```

