let common = {
	matrix (str, type){
		if(!str) return false;
		let reg = /(.+)\(\s*([0-9\.]+),\s*([0-9\.]+),\s*([0-9\.]+),\s*([0-9\.]+),\s*([0-9\.]+),\s*([0-9\.]+)\s*\)/ig;
		let a_reg = reg.exec(str);
		let result = [];
		
		switch(type){
			case 'translate' :
				result['x'] = this.str_number(a_reg[2]) * this.str_number(a_reg[4]) + this.str_number(a_reg[6]);
				result['y'] = this.str_number(a_reg[3]) * this.str_number(a_reg[5]) + this.str_number(a_reg[7]);
			break; 
		}
		return result;
	},
	str_number (str){
		return parseInt(str)
	}
}

export { common }