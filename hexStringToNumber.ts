// Converts hex string like #DDA8A8 to number type hex 0xdda8a8
export const hexStringToNumber = (hexString: string): number => {
	return parseInt(hexString.replace("#", ""), 16)
}
