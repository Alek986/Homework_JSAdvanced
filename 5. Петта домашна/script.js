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
    let todoId = await fetch (`https://jsonplaceholder.typicode.com/todos/${todoById}`)
    let parsedTodo = await todoId.json()
    return parsedTodo
}

async function fetchUserDataById(userById){
    let userId = await fetch (`https://jsonplaceholder.typicode.com/users/${userById}`)
    let parsedUser = await userId.json()
    return parsedUser
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

getAllData()
