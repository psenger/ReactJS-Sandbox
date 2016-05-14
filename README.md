# ReactJS-Sandbox

My ReactJS sandbox based on Plurashight's _React.js: Getting Started_ 

I noticed that the tutorial is based on version 13 but my code is based on 15. So there are differences

[React.js: Getting Started](https://app.pluralsight.com/library/courses/react-js-getting-started/table-of-contents)

Notes:
---

* Componets - have
  * properties ( this.props ) - can not be changed ( immutable )
  * state ( this.state ) - state can be changed ( react repaints the dom )
* React has a virtual dom that it monitors for changes and updates the dom.
* JSX is parsed by React and can have HTML embeded.
* Sample 
```javascript
React.createClass({ render:function(){} }) // create a componet
ReactDOM.render({ <>, mountNode }) // render
```
* React has normalized events accross the browsers 
