import React ,{ Component} from 'react'

class Form extends Component
{
constructor(props){
    super(props)

    this.state ={
        username: '',
        comment: '',
        topic: ''

    }
}

handleUsernameChange =event =>{
    this.setState({
        username: event.target.value
        
    })
}

handleCommentChange =event =>{
    this.setState({
        comment: event.target.value
    })
}

handleTopicChange = event =>{
    this.setState({
        topic: event.target.value
    })
}

handleSubmit =  event => {
   
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
    
}

    render()
    {
        return ( 
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label> 
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                </div>
               <br></br>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                </div>
                <br></br>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Viu">Viu</option>
                    </select>
                </div>
                
                <br></br>
                <button type="submit" className="btn btn-success">Submit</button>

            </form>
        )
    }
}

export default Form