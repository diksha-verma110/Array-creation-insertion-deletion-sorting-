let students = []
total_length = 10
function insert_element(name){
    if(students.length == total_length){
        console.log(`Can't add ${name}, array is full`)
    }
    else{
        students.push(name)
        console.log(`${name} Pushed! ${totla_length-students.length} places remaining`)
    }
    return 
}
function delete_element(){
    if(students.length == 0){
        console.log("Can't delete the element, array is empty!")
    }
    else{
        console.log(`${students[0]} deleted, ${total_length-students.length +1} places remaining`)
        students.shift()
    }
    return
}
function search_element(name){
    let index = students.indexOf(name)
    if (index === -1){
        console.log(`${name} is absent in the array.`)
    }
    else{
        console.log(`${name} is present at the index ${index}`)
    }
}
function sort_array(){
    console.log(students.sort())
}
insert_element("Diksha")
search_element("Ayushi") 
delete_element()
insert_element("Khushbu")
insert_element("Aastha")
insert_element("Kajal")
insert_element("Muskan")
insert_element("Unnati")
insert_element("Sunetra")
insert_element("Sakshi")
insert_element("Pallavi")
insert_element("Anchal")
insert_element("Payal")
insert_element("Akriti")
search_element("Kritika")
