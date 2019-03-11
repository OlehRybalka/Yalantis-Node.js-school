const users = [
    {id: 1, name: 'Bob'},
    {id: 2, name: 'Joe'},
    {id: 3, name: 'Don', groupId: 1},
    {id: 4, name: 'Kally'},
    {name: 'Alex'},
    {name: 'John'},
  ];
  
  const groups = [
    {id: 5, title: 'First Group'},
    {id: 7, title: 'Last Group'},
  ];
  
  function addUser(name) {
    users.push({
      name: name
    })
  }
  
  function addGroup(id, title) {
    groups.push({
      id: id,
      title: title
    })
  }
  
  function getOneGroup(chosenId) {
    let result;
    for(var key of groups){
      if(key.id === chosenId){
        result = chosenId;
        return result
      }
    }
  }
  
  function markUser() {
    for(var user of users) {
      if(!user.id) {
        user.id = Math.floor(Math.random() * 101)
      }
    }
  }
  
  
  function addSelectedGroupToUsers(users, group) {
    return fetch(users)
      .then(addUser('Oleh'))
      .then(addGroup(9, 'myGroup'))
      .then(markUser())
      .then(()=>{
        for(var user of users) {
          if(!user.groupId) {
            user.groupId = getOneGroup(group);
          }
        }
      })
      .then(() => console.log(users))
  }
  
  addSelectedGroupToUsers(users, 9)
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
  
  
  