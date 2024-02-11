// ========== Si vezbav sintaksa :))) ============
// function fetchTodoById(TodoByid){
//     fetch (`https://jsonplaceholder.typicode.com/todos/${TodoByid}`)
//     .then (function(response){
//         console.log(response)
//         return response.json()
//     })
//     .then (function(data){
//         console.log(data)
//         console.log (data.userId)
//         let detailUserId = data.userId
//         console.log(detailUserId)
//     })
//     .catch (function(error){
//         console.log(`Error occured: ${error}`)
//     })
// }

// fetchTodoById(1)


async function fetchTodoById(todoById){
    try{
    let todoId = await fetch (`https://jsonplaceholder.typicode.com/todos/${todoById}`)
    let parsedTodo = await todoId.json()
    return parsedTodo
} catch (error){
    console.log(`Error occured in fetch Todo by id, ${error}`)
    }
}

async function fetchUserDataById(userById){
    try{
    let userId = await fetch (`https://jsonplaceholder.typicode.com/users/${userById}`)
    let parsedUser = await userId.json()
    return parsedUser
} catch(error){
    console.log(`Error occured in fetch Todo by id, ${error}`)
    }
}

async function getAllData(){
    try{
        let todo = await fetchTodoById(1)
        console.log(todo)
        let user = await fetchUserDataById(todo.userId)
        console.log(user)
    }
    catch(error){
        console.log(`Error occured: ${error}`)
    }
}

getAllData();
