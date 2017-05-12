# Test: Converting an Icomoon font icon into a clip path

How to use svg font icons from Icomoon as clip paths.

### Introduction
The CSS clip-path property permits svg clip paths to be used as clip paths for html elements.
Effectively allowing custom shapes to be applied to elements, this enables a lot of interesting effects to be achieved.

Here is a simple example. A CSS rule set defines a list of declarations which includes a `clip-path` property referencing an svg clip path element using the `url()` function.
```
    .foo {
        width : 200px;
        height : 200px;
        background : pink;
        clip-path : url(#clock);
    }
```

The SVG clip path definition follows. Note the `id` property of the `clipPath` element which is used above by the `clip-path` property to reference it.


```
    <div class="foo"></div>

    <svg height="0" width="0">
        <defs>
            <clipPath id="clock">
                <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM20.586 23.414l-6.586-6.586v-8.828h4v7.172l5.414 5.414-2.829 2.829z"></path>
            </clipPath>
        </defs>
    </svg>
```


