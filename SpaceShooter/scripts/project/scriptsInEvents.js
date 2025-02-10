


const scriptsInEvents = {

	async EventSheet1_Event83_Act2(runtime, localVars)
	{
		// Попробуем инициировать и показать баннер
		try {
		    // Инициализация Adsgram и показ баннера
		    await window.Adsgram.init({ blockId: "int-7999" }).show();
		} catch (error) {
		    // Обработка ошибок: ничего не делаем или выполняем другие действия
		    console.error("Ошибка при показе рекламы:", error);
		}
	},

	async EventSheet1_Event84_Act2(runtime, localVars)
	{
		// Инициализация Adsgram и показ видео-рекламы
		try {
		    // Инициализация Adsgram с блоком 8000
		    const adController = window.Adsgram.init({ blockId: "8000" });
		
		    // Показ видео-рекламы
		    adController.show()
		        .then(() => {
		            // Пользователь досмотрел рекламу до конца
		            console.log("Реклама успешно показана, награда выдана!");
		            // Здесь можно добавить логику награды, например, добавить игровую валюту
		            runtime.callFunction("GiveReward"); // Вызов функции в Construct 3 для выдачи награды
		        })
		        .catch((error) => {
		            // Обработка ошибки, если реклама не была показана
		            console.error("Ошибка при показе рекламы:", error);
		            // Здесь можно добавить логику обработки ошибки
		            runtime.callFunction("HandleAdError"); // Вызов функции в Construct 3 для обработки ошибки
		        });
		} catch (error) {
		    // Обработка ошибки, если Adsgram не загружен или произошла другая ошибка
		    console.error("Ошибка при инициализации Adsgram:", error);
		    runtime.callFunction("HandleAdError"); // Вызов функции в Construct 3 для обработки ошибки
		}
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

