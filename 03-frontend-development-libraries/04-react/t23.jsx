class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {    
      const name = 'freeCodeCamp';    
      return (
        <div>       
            <h1>{name}</h1>        
        </div>
      );
    }
  };