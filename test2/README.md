# Test: Converting an Icomoon font icon into a clip path

The following image shows two identically sized pink squares. 
The second square looks like a clock because it has had a clip path in the shape of a clock applied to it.
The path for the clip path was copied from an Icomoon icon.

![example 1](https://richardinho.github.io/malebranche-tests/test2/images/example-1.png)
[live demo](https://richardinho.github.io/malebranche-tests/test2/)

This picture demonstrates one of the issues with working with the CSS `clip-path` property: The inability for clip paths to stretch and scale with the elements to which they are applied.
The coordinates of the applied clip path are the same as those of the original SVG clip path, relative to the position of the html element itself. That is to say the zero x and y coordinates of the original clip path will be located at the left and top edges respectively of the html element. 
This state of affairs may be satisfactory some of the time, but often we will wish the clip path to stretch and scale.


Fortunately this problem is solvable, as you can see in the next image.

![example 2](https://richardinho.github.io/malebranche-tests/test2/images/example-2.png)
[live demo](https://richardinho.github.io/malebranche-tests/test2/index2.html)

Here we have a similar set up. There are two identically sized green squares in this picture, with the second square having a clip path applied to it. This time, however, the clip path scales and stretches to fit the element.


We have added the `clipPathUnits` attribute to the SVG clip path element with a value of `objectBoundingBox`. 
Then, we have use Malebranche to covert the absolute coordinates of the source SVG image into fractional units. e.g. values between 0 and 1.

```
    <svg height="0" width="0">
        <defs>
            <clipPath id="clock" clipPathUnits="objectBoundingBox">
                <path d="M0.5 0c-0.27615625 0 -0.5 0.22384375 -0.5 0.5s 0.22384375 0.5 0.5 0.5 0.5 -0.22384375 0.5 -0.5 -0.22384375 -0.5 -0.5 -0.5ZM0.6433125 0.7316875l-0.2058125 -0.2058125v-0.275875h0.125v0.224125l0.1691875 0.1691875 -0.08840625 0.08840625Z"/>
            </clipPath>
        </defs>
    </svg>

```