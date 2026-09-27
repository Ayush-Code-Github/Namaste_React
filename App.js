import React from "react"
import ReactDOM from 'react-dom/client'


//  React.createElement => object => after rendering becomes(HTML Element)

//Also below is a React element (we also know it as a variable in js)
const heading = React.createElement("h1", {id:"heading"}, "React Learn")
console.log(heading)


// jsx is HTML like syntax or we can say XML like syntax (also a javascript object , ALl react elements are js objects only)

// JSX =>BAbel transplies it to React.createElement=> ReactElement - JS object => (HTML Element)(render)
const jsxHeading = (<h1 id="child1">This is jSX heading test2</h1>)
console.log(jsxHeading);

// components 
// class based components
// Functional components

// Functional components are nothing but a normal JS functions returning a JSX
// 
// and React rule keep the first letter caps for components

const FunctionalComponent = () => {
    return <h1>This is a functional component</h1>
}

const FunctionalComponent2 = () => (
     <h1>This is a functional component 222</h1>  //DONT PUT RETURN IN THIS FORMAT where we use ()
)

// short hand way of writing a function

const Fn =() => <h1 className="showr">Short hand Functional component</h1>
const Fn2 =() => {
return (<h1 

className="multi">
    
    multi line function
    </h1>)}


console.log(Fn2)

const Testing = () => (
    <h1>
        {Fn()}
        <Fn></Fn>
        <Fn2/>
    </h1>
)



const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(FunctionalComponent()) 
// root.render(<FunctionalComponent2/>) //This is how we render a functionalcomponent

root.render(<Testing/>)