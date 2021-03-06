class Clock extends React.Component {
        state={time:null};
        
        componentDidMount() {
            setInterval(() => {
                this.setState({time: new Date().toLocaleTimeString()})
            }, 1000)
            
        }
        
        render() {
            return (
                <div className="time">
                    The time is: {this.state.time}
                </div>
            );
        }
    }


    
    ReactDOM.render(<Clock />, document.querySelector('#root'));