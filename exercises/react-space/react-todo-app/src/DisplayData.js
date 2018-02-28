import React, {Component} from "react";
import TodoComponent from './TodoComponent';


class DisplayData extends Component {
    constructor() {
        super();
        this.state={
            isEditing: false
        }
    }

    render() {
        let mappedData = this.props.todoItems.map((item, i) => {
            return <TodoComponent deleteTodoItem={this.props.deleteTodoItem} key={item.title+i} item={item}/>
        })
        return (
            <div>
                {mappedData}
            </div>
         )
        }
    }

export default DisplayData;
