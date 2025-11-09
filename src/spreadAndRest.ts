// const friends = ['Rahim','Karim',]

// const schoolFriends = ['pintu', 'chintu', 'bulbul']

// const collegeFriends = ['Mr smart', 'Mr very very smart'];

// friends.push(...collegeFriends)
// friends.push(...schoolFriends)

// console.log(friends);

const user = {
    name: 'mezba',
    phoneNumber: '017789391',
}

const otherInfo = {
    hobby: "hangout",
    favouriteColor: 'black'
}

const fullInfo = {...user, ...otherInfo}

// console.log(fullInfo);

//rest operator

const sendInvite = (...friends:string[]) => {
 friends.forEach((friend:string) => console.log(`Send Invitaion to ${friend}`))
}

sendInvite("pintu","cintu","bulbul","mezba", "hasan")