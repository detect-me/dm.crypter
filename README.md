# CLI Шифратор/Дешифратор

## Использовать для защищенной коммуникации между detect-me сервисами

### Установка

1. Склонировать репозиторий
2. Установить node-js платформу https://nodejs.org
3. Выполнить установку пакетов командой npm install
4. Создать файл .env на основе файла .env.exemple
5. Запросить ключи detectme.tech@gmail.com
6. Подставить ключи место VALUE
7. Создать файл appConfig.json на основе appConfig.exemple.json
8. Наполнить его
  1. hostURL это целевая страница на которую ведет площадка(facebook)
  2. blackPageUrl страница на которой хостится оффер
  3. **Полностью скопировать путь к страницы, с протоколом**

### Запуск создания ключа для приложения

1. Запустить консольную команду **npm run encrypt**
2. После вы должны увидеть надпись **Your __DM_API_KEY__ is success generated**🎉🎉🎉
3. Можете заходить в файл appConfig.json и забирать ваш ключ **__DM_API_KEY__**, он готов
