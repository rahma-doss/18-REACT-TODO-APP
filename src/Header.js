import React from 'react'
// import { thisTypeAnnotation } from '@babel/types';

class Header extends React.Component{
constructor (props) {
    super(props);
this.state={
    userInput:'',
    list : []
}
}
changeUserInput = e =>{
    this.setState({
        userInput : e.target.value
    });
}
addToList = () => {
    this.setState({ list: this.state.list.concat({text: this.state.userInput, completed: false}),
        userInput: ''
        // list: [...this.state.list, {text: this.state.userInput, completed: false}] // spread operator
    })
}
deletelist = i => {
    this.setState({
        list: this.state.list.filter((el, j) => j !== i)
    })
}
toggletodo = todo =>{
    this.setState({
    list: this.state.list.map(el=> el.userInput===todo.userInput?{...todo, completed: !todo.completed} : el)
    })
}

 render() {
    return (<div>
    <div className='header'>
    <h1>To-Do App!</h1>
    <label > Add New To-Do  </label>
    <input
    onChange={this.changeUserInput}
    value={this.state.userInput}
     type="text" 
     placeholder="Enter new task"/>
         <button className='button-add' onClick={this.addToList}> Add</button>
         </div>
         <h1 className='title' >Let's get some work done </h1> 
    <ul >{this.state.list.map((el, i)=><li>
    <button onClick={()=> this.toggletodo(el)} >{el.completed? 'undo':'Complete'}</button>
    <button onClick={()=>this.deletelist(i)}>Delete</button>
    <h3 className={el.completed? 'crossed': undefined} >{el.text}</h3></li> )}</ul>
</div>
)
 }
}



export default Header