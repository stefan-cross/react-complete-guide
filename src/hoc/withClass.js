import React,{Component} from 'react';

// // Normal js component that takes args, returns another embedded HOC
// const withClass = (WrappedComponent, className) => (
//     return (props) => (
//     <div className={className}>
//          {/*Functional HOC component*/}
//          {/*Pass in unknown props with es6 spread operator to make truly higher order*/}
//         <WrappedComponent {...props}/>
//     </div>
// )


// Make a stateful component rather than functional as above
const withClass = (WrappedComponent, className) => {
    return class extends Component {
        render() {
            return (
                <div className={className}>
                    {/*Functional HOC component*/}
                    {/*Pass in unknown props with es6 spread operator to make truly higher order*/}
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }
    }
}

export default withClass;