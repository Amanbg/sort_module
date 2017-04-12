module.exports = (obj, key) => {
	let objCopy = obj.slice(0)
	return ( objCopy.sort(function( a, b ) {
			if ( key.indexOf('.') > -1) {
				key = key.split('.')
				let len = key.length
				let i = 0
				while ( i < len ) {
					a = a[key[i]]
					b = b[key[i]]
					i ++
				}
				return a < b ? -1 : a > b ? 1 : 0
			} else if ( typeof objCopy[0][key] == 'string' ) {
				let x = a[key].toLowerCase()
				let y = b[key].toLowerCase()
				return x < y ? -1 : x > y ? 1 : 0
			} else {
				return a[key] - b[key]
			}
		})
	)
}

