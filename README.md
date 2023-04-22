# mergely-react

![mergely logo](https://www.mergely.com/images/mergely.png)

A React.js (v18) component for [Mergely](https://mergely.com) (v5) that is used for differencing and merging files interactively in a browser (diff/merge), providing rich API that enables you to easily integrate Mergely into your existing web application. It is suitable for comparing text files online, for example, .txt, .html, .xml, .c, .cpp, .java, etc.

## Installation

```bash
npm install mergely-react
```

## Example

```jsx
<MergelyView
    height="400px"
    ignorews
    lhs="I like apples!"
    rhs="I like bananas!"
/>
```

## Configuration

All [configuration options](https://mergely.com/doc#options) can be found on https://mergely.com/doc. In addition to those options, the following can be configured:

|Option|Type|Default value|Description|
|------|----|-------------|-----------|
|**height**|`string`|`'400px'`|The height of the editor. Supports CSS height units.|
|**onChanged**|`function ()`| |Triggered when one of the editors change, e.g. text was altered.|
|**onInit**|`function ()`| |Triggered once, after editor is resized and initial document changes are rendered.|
|**onResized**|`function ()`| |Triggered after the editor is resized.|
|**onUpdated**|`function ()`| |Triggered after the editor finishes rendering. For example, text updates, options, or scroll events may trigger renders. |


## License

Mergely is distributed under the [GPL](http://www.gnu.org/licenses/gpl.html), [LGPL](http://www.gnu.org/licenses/lgpl.html) and [MPL](http://www.mozilla.org/MPL/MPL-1.1.html) open source licenses.

Commercial licenses are available (see https://mergely.com/license).
