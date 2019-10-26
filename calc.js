//BMI計算オブジェクト
class BMI {

	constructor(height = 0, weight = 0) {
		this.height = height;
		this.weight = weight;
	}

	//BMIを計算するメソッド
	getBMI() {
		let bmi = this.weight / Math.pow(this.height/100, 2);

		//以下３行で少数第二位を四捨五入して小数点以下人桁表示に。
		bmi = bmi * 10;
		bmi = Math.round(bmi);
		bmi = bmi / 10;
		//BMIをリターン
		return bmi;
	}
}