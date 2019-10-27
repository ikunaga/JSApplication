//計算ボタンがクリックされた時の処理関数
function onCalcBMIButtonClick() {
	//身長入力input要素を取得
	let heightInput = document.getElementById("heightInput");
	//入力された身長の値を取得。
	let height = heightInput.value;
	//体重入力input要素を取得。
	let weightInput = document.getElementById("weightInput")
	//入力された体重の値を取得。
	let weight = weightInput.value;

	//BMI計算オブジェクトを生成。身長と体重を渡す。
	let bmiObj = new BMI(height, weight);
	//BMIを取得
	let bmi = bmiObj.getBMI();

	//BMIを表示するspan要素を取得。
	let bmiResult = document.getElementById("bmiResult");

	//BMIを表示。
	bmiResult.textContent = bmi;

	//アドバイスを取得
	let advice = bmiObj.getAdvice();
	//アドバイスを表示するspan要素を取得。
	let adviceMessage = document.getElementById("adviceMessage");
	//アドバイスを表示
	adviceMessage.textContent = advice;

	//結果を表示するp要素を取得。
	let resultMessage = document.getElementById("resultMessage");

	//非表示にしているクラス属性を削除。
	resultMessage.classList.remove("displayNone");


}