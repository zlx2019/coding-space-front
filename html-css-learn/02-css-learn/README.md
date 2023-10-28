# Css学习
> CSS(Cascading Style Sheets)**层叠样式表**,是一种样式表语言,用来描述HTML页面的**表现**。

CSS 是开放 Web 的核心语言之一，并根据 W3C 规范在 Web 浏览器中进行了标准化。以前，CSS 规范的各个部分的开发是同步进行的，这种方式允许对最新推荐的 CSS 版本进行控制。你可能已经听说过 CSS1、CSS2.1 甚至 CSS3。但是以后将不会再有 CSS3 或者 CSS4；相反，现在的一切都是没有版本号的 CSS。


**使用Css样式的方式分为三种:**
- 行内样式: 优先级最高,但是太过冗余,不推荐使用。
- 内部样式: 样式与元素分离,便于阅读,但是作用域只能针对当前页面。
- 外部样式: 导入指定的样式文件,样式分离且复用。

**内联样式**(行内样式)

行内样式也就是直接将Css样式定义在标签元素中,通过标签的`style`属性设置,这种方式优先级最高。
```html
<!--通过行内样式定义字体颜色与大小-->
<h1 style="color: red; font-size: 64px">Hello</h1>
```

**内部样式**

内部样式就是在当前html文件中的`<head>`标签内创建一个`<style></style>`样式块
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    
    <!--定义内部样式-->
    <style>
        /*使用标签选择器,会给所有的h1标签添加以下样式*/
        h1{
            color: red;
        }
    </style>
</head>
<body>
<h1>Hello</h1>
</body>
</html>
```

**外部样式**

定义样式文件`index.css`:
```css
h1{
    color: red;
    font-size: 16px;
}
```
定义结构文件`index.html`并且引用`index.css`样式:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!--引入外部的css文件-->
    <link rel="stylesheet" href="./index.css">
</head>
<body>
<h1>Hello</h1>
</body>
</html>
```

**注意:** 内部样式和外部样式都需要**选择器**来指定为哪些元素添加样式。

## 元素选择器
>Css选择器用来指定要设置样式的元素。
### 基本选择器
- **标签选择器**
  
    根据标签(元素)类型进行选择**多个**元素。如下: 选择页面中所有的`<p>`标签
    ```css
    p{
        color: red;
  }
    ```
- **id选择器**

    根据元素的`id`属性进行选择一个**唯一**的元素。如下:选择`id`为`root`的元素。
    ```css
    #root{
        color: red;  
    }
    ```
- **类选择器(最常用)**

    根据元素的`class`属性选择**多个**元素。如下: 选择`class`为`btn`的元素。
    ```css
    .btn{
        color: red;
    } 
    ```

- **通配选择器**
  
    选择页面中的所有元素。
    ```css
    *{
        color: red;    
    }
    ```

- **属性选择器**
    
    根据元素中的属性和值选择元素。`id`和`class`也算属性,只是这种方式更加灵活。

    语法: 
     - `[属性名=属性值]` 选中完全匹配属性值的元素。
     - `[属性名^=属性值]` 选中属性值以指定内容开头的元素
     - `[属性名$=属性值]` 选中属性值以指定内容结尾的元素
     - `[属性名*=属性值]` 选中属性值包含指定内容的元素

    如下:
    ```css
    /*选择所有带有title属性的元素*/
    [title]{
    
  }
    /*选择所有带有title属性并且值为hello的元素*/
    [title=hello]{
    
  }
  
  /* 以 "#" 开头的页面内部链接 */
  a[href^="#"] {
        background-color: gold;
  }
  
  /* 包含 "example" 的链接 */
  a[href*="example"] {
        background-color: silver;
  }
  
  /* 包含 "insensitive" 的链接，不区分大小写 */
  a[href*="insensitive" i] {
        color: cyan;
  }
  
  /* 包含 "cAsE" 的链接，区分大小写 */
  a[href*="cAsE" s] {
        color: pink;
  }
  
  /* 以 ".org" 结尾的链接 */
  a[href$=".org"] {
        color: red;
  }
  
  /* 以 "https" 开始，".org" 结尾的链接 */
  a[href^="https"][href$=".org"] {
  color: green;
  }
    ```
  
- **分组选择器**

  同时选中多组元素，并且为它们同时设置样式。
  语法: `选择器1,选择器2,选择器3{}`


- **混合选择器**

  比如要选择如下元素:
  ```html
  <div class="me" title="菊花">我花开后百花杀。</div>
  ```
  可以同时使用`元素选择器`+`类选择器`+`属性选择器`:
  ```css
    div.me[title="菊花"]{
      color: red;
  }
  ```
### 关系选择器
> 根据元素之间的关系来选中元素

分为三种:
- 子元素选择器

  选中指定元素的子元素(下一层)

  语法: `父元素 > 子元素{}`
  
  示例: 
  ```css
  /*选中所有`div`元素的所有`h1`*/
  div > h1{
  
  }
  ```
- 后代元素选择器

  选中指定元素的后代元素(子元素的子元素)

  语法: `指定元素 后代元素{}`
  
  示例:
  ```css
  /*选中所有`div`元素中的所有`h1`元素*/
  div h1{
  
  }
  ```
- 兄弟元素选择器
  
  选中指定元素的同级元素。
  
  语法:
  - `指定元素 ~ 兄弟元素{}`
    选中指定元素的后边的所有兄弟元素。
    
  示例:
  ```css
  /*选中`div`元素的所有同级`h1`元素*/
  div ~ h1{
  
  }
  ```
