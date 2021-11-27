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





