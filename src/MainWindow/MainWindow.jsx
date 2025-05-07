import React from "react";
import styles from "./MainWindow.module.css";
import axios from "axios";
import { useEffect, useState } from "react";


function MainWindow() {
	// function alternateLanguage() {
	// 	document.documentElement.dir
	// }

	// ---------------------------------------------------------
	// States
	const [weatherResponse, setWeatherResponse] = useState({
		mintemp: null,
		maxtemp: null,
		temp: null,
		iconID: null,
		description: null,
	});

	// ---------------------------------------------------------
	// API requesting
	useEffect(() => {
		axios
			.get(
				"https://api.openweathermap.org/data/2.5/weather?units=metric&lat=30&lon=31.2&appid=e54e6b2694e9ccc0b1b1e45b5f9719bf"
			)
			.then((response) => {
				setWeatherResponse({
					mintemp: response.data["main"]["temp_min"],
					maxtemp: response.data["main"]["temp_max"],
					temp: response.data["main"]["temp"],
					iconID: response.data["weather"][0]["icon"],
					description: response.data["weather"][0]["description"],
				});
				console.log(weatherResponse);
			});
	}, []);

	// ----------------------------------------------------------
	return (
		<div className={styles["main-container"]}>
			<div className={styles["card"]}>
				<div className={styles["window-head"]}>
					<div className={styles["city-name"]}>Cairo</div>
					<div className={styles["city-date"]}>27-04-2025</div>
				</div>

				<hr />
				<div className={styles["window-body"]}>
					<div className={styles["weather-icon"]}>
						{/* if iconID has a value -> render it 
						else -> dont render anything */}
						{weatherResponse.iconID && (
							<img
								className={styles["weather-icon"]}
								src={`https://openweathermap.org/img/wn/${weatherResponse.iconID}@2x.png`}
							/>
						)}
						<div className={styles["weather-description"]}>
							{weatherResponse.description}
						</div>
					</div>
					{/* ------------------------------------------------------------------------------------------------ */}
					<div className={styles["weather-data"]}>
						<div className={styles["tmp-avg"]}>
							tmp : {weatherResponse.temp}
						</div>
						<div className={styles["min"]}>
							min : {weatherResponse.mintemp}
						</div>
						<div className={styles["max"]}>
							max : {weatherResponse.maxtemp}
						</div>
					</div>
				</div>
			</div>

			{/* <div className={styles["language-button"]}>إنجليزي</div> */}
		</div>
	);
}

export default MainWindow;
