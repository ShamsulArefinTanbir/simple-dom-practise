document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for ( const friend of friends)

    friend.style.backgroundColor = 'red';

})

// 

document.getElementById('center-3').addEventListener('click', function(){
    const third = document.getElementById('friend-3');
    third.style.textAlign = 'center';
})

document.getElementById('newadd').addEventListener('click', function(){
    const frndcontainer = document.getElementById('frnd');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = 
    `
    <h3 class="friend-name">New Friends</h3>
    <p>something new added </p>
    `
       frndcontainer.appendChild(friend);

})

