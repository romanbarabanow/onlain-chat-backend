const { trimStr } = require('./utils')

let users = []

const findUser = user => {
	const userName = trimStr(user.name)
	const userRoom = trimStr(user.room)

	return users.find(
		u => trimStr(u.name) === userName && trimStr(u.room) === userRoom
	)
}

const addUser = user => {
	const isExist = findUser(user)

	!isExist && users.push(user)

	const currentUser = isExist || user

	return { isExist: !!isExist, user: currentUser }
}

const getRoomUser = room => users.filter(u => u.room === room)

const removeUser = user => {
	const foubdUser = findUser(user)

	if (foubdUser) {
		users = users.filter(({ room, name }) => {
			room === foubdUser.room && name != foubdUser.name
		})
	}
	return foubdUser
}

module.exports = { addUser, findUser, getRoomUser, removeUser }
