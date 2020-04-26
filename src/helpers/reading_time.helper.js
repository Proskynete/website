export const printReadingTime = reading_time => {
	let textResponse;

	if (reading_time < 1) {
		textResponse = 'Menos de un minuto';
	} else if (reading_time === 1 || Math.ceil(reading_time) === 1) {
		textResponse = `Lectura de 1 minuto`;
	} else {
		textResponse = `Lectura de ${Math.ceil(reading_time)} minutos`;
	}

	return textResponse;
};