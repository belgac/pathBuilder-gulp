# pathbuilder-gulp
A small library to generate gulp paths from a json object

## Setup

This library is distributed with npm

```
npm install --save-dev pathbuilder-gulp
```

## Usage

You need to give a correctly formated array of path parts and extensions and an optional config object.

## array of path parts and extension
```
{
  parts:[
    {...},
    ...
  ],
  extension:''
    or
  extension:['',...]
}
```
### parts

the part object can be of three types path, link and glob

#### path

a path object copies the value of part.value in the path.

```
{
  type:'path',
  value:'this is the value to add'
}
```

#### link

a link copies the key from the config object corresponding to part.value, it accepts '.' and '[i]' values

```
{
  type:'link',
  value:'someKey.subKey[0]'
}
```

#### glob

a glob adds a glob to the path, you can choose from a recursive or a file glob with the part.subFolders boolean value;

```
{
  type:'glob',
  subFolders: true or false
}
```

### extensions

you can give one or more extensions to add to the path

#### extension string

if you give a string a single extension will be added to the path it auto-places a point if it is missing

#### extension array

if you give an array a correctly formated vinyl multi extension object will be created, the points ara automatically removed when needed.

## config object

This object should be passed when you use a part of the link type
