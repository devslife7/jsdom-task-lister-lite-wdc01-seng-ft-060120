document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('create-task-form')
    const taskUl = document.getElementById('tasks')
    const taskInput = document.getElementById('new-task-description')
    const taskList = document.getElementById('list')

    taskForm.addEventListener('submit', e => {
        e.preventDefault()

        const inputText = e.target['new-task-description'].value // grab the text from the input field
        const listLi = document.createElement('li') // creates new <li> element
        listLi.textContent = inputText // adds the input value to our new li element
        taskUl.append(listLi) // appends our new li to existing
        taskInput.value = ''

        const btn = document.createElement('button')
        btn.textContent = 'X'
        listLi.append(btn)

        btn.addEventListener('click', e => {
            e.target.parentElement.remove()
        })
    })
})
