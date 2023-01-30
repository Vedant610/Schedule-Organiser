let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnSort = $('#btnSort')
let btnReset = $('#btnReset')
let btnCleanup = $('#btnCleanup')
let inpNewTask = $('#inpNewTask')

function addItem(){
    let listItem=$('<li>',{
        'class':'list-group-item',
        text:inpNewTask.val()
    })
    
    listItem.click(()=>{
    listItem.toggleClass('done')
    })
    ulTasks.append(listItem)
    inpNewTask.val('')
}

function sortTasks(){
    $('#ulTasks .done').appendTo(ulTasks)
}
function Cleardone(){
    $('#ulTasks .done').remove()
}


inpNewTask.keypress((e)=>{
    if(e.which==13) addItem()
    
})
btnAdd.click(addItem)

btnSort.click(sortTasks)
btnReset.click(()=>inpNewTask.val(''))
btnCleanup.click(Cleardone)
