# what is hooks ? 

1. hooks is a general function inside of react js 
2. hooks add some features there we used hook
3. hooks is used to fetch data data | add some effects | add some dependencies in applications there we add hook 
4. hook is used to destructured data inside of state and we can update it using useState hook 
5. inside of hook data pass in object 

# types of hook in react ?  

  1. useState()
  2. useRef()
  3. useFetch()
  4. useEffect()
  5. useMemo()
  6. useReducer()
  7. useContext()
  8. useId()


# hooks is no more supported in side of class based components 

  Employee.jsx

  import React,{useState} from 'react'
  import {React.component} from 'react'
  class Employees extends {React.Component}
  {

    //destructuring 
    const[data,setData]=useState(0);
    render{

        return(
            <><h1>Hi my name is Brijesh</h1>
        )
    }

  }


  # note : useState is not work inside of class based components hooks are supported inside of function based components start from React js 16.0.3 version 


# advantage of hooks in react js 


1. Simpler and Cleaner Code

Hooks allow you to write function components instead of class components, reducing boilerplate code.

2. Reuse Stateful Logic

Hooks make it easy to share logic between components using custom hooks.

 ```
  function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(c => c + 1);

  return { count, increment };
  }

```


3. Better Separation of Concerns

Related logic can be grouped together instead of being spread across different lifecycle methods.

For example, fetching data and handling subscriptions can be kept in one useEffect block rather than split between:

componentDidMount
componentDidUpdate
componentWillUnmount
useEffect(() => {
  fetchData();

  return () => {
    cleanup();
  };
}, []);


4. Easier State Management

    Hooks such as useState and useReducer provide a straightforward way to manage component state.

    const [user, setUser] = useState(null);

    or

    const [state, dispatch] = useReducer(reducer, initialState);


5. No this Keyword Issues (this) is used to stored current state object of data

Class components often require binding methods or dealing with this.

   this.state.age=age
   this.state.id=id



6. Improved Readability and Maintainability

Function components with hooks are generally easier to understand, test, and maintain than large class components with multiple lifecycle methods.

7. Access to React Features Through Built-in Hooks

React provides several powerful hooks:

useState → Component state

useEffect → Side effects

useContext → Context API

useReducer → Complex state management

useMemo → Performance optimization

useCallback → Memoized functions

useRef → DOM references and mutable values