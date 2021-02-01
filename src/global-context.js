import React, { createContext, useEffect, useReducer} from 'react'

const Context = createContext()
function ContextProvider({children}) {
    const api = ""
    const [state, dispatch] = useReducer(
        (state, action)=> {
            switch (action.type) {
                case "LOAD_DATA": {
                    return { ...state, 
                            loading: false,
                            jobList: action.data,
                            
                        }
                };
                case "FULL_TIME": {
                    return {
                        ...state,
                        loading: false,
                        jobList: action.data,
                    }
                };
                case "FILTER_BY_CITY": {
                    return {
                        ...state,
                        loading: false,
                        jobList: action.data,
                        location: action.location,
                        searchInput: action.location
                    }
                };
                case "SEARCH": {
                    return {
                        ...state,
                        loading: false,
                        jobList: action.data,
                        location: "",
                        searchInput: action.input
                    }
                };
                case "GET_NEW_PAGE": {
                    return {
                        ...state,
                        loading: false,
                        jobList: action.data,
                        location: "",
                    }
                }
            
                default: "No data";
                    break;
            }
        }, {
            loading: true,
            jobList: [],
            location: "london",
            searchInput: "",
        })

        useEffect(async() => {
            const data = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location=${state.location}`)
            const response = await data.json();
            console.log(data);
            setTimeout(() => {
                dispatch({type: "LOAD_DATA", data: response})
            }, 1000)
        }, [])

        // async function Search(){
        //     const data = await fetch(``)
        // }

        async function getFullTimeData(city) {
            const data = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?&full time=true&location=${city}`)
            const response = await data.json();
            dispatch({type: "FULL_TIME", data: response,})
        }

       async function handleCheckboxFilter(city) {
            const data = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location=${city}`)
            const response = await data.json();
            console.log(data)
            dispatch({type: "FILTER_BY_CITY", data: response, location: city })
        }
    return (
        <Context.Provider value={{state, dispatch, getFullTimeData, handleCheckboxFilter}}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context} 