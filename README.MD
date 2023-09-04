# K Indent
Simple indentation tool, supports relative indent

![npm](https://img.shields.io/npm/v/k-indent?color=green) <!-- version -->
![npm](https://img.shields.io/bundlephobia/min/k-indent?color=green) <!-- size -->
![npm](https://img.shields.io/npm/dm/k-indent?color=green) <!-- downloads -->
![npm](https://img.shields.io/npm/l/k-indent?color=green ) <!-- licence -->

## Install
```sh
# npm
npm i k-indent
# yarn
yarn add k-indent
```

## Usage
Indent string
``` ts
// adds 2 spaces indent
indentStr('a', 2); // '  a'

// adds 2 stars indent
indentStr('a', 2, '*'); // '**a'

// first line of string contains only spaces
const str1 = `
    
  a
`;

// not indents empty lines
indentStr(str1, 2, ' ', { indentEmptyLines: true }); 
/* Output
(no spaces)
  a (2 spaces)
'*/

const str2 = `{
  a: 1,

  b: {
    c: 2
  }
}`;

// adds 2 spaces with keeping relative indent
indentStr(str2, 2, { relativeIndent: true }); 
/* Output 
  {
    a: 1,
    b: {
        c: 2
    }
  }
*/
```

Create indent
```
createIndent(2); // '  '
createIndent(2, '*'); // '**'
```

## Contributing
Want to collaborate? 
:octocat: <a href="https://github.com/Kostayne/k-indent">Check github repo</a>