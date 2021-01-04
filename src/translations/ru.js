export const ru = {
    translations: {
        values: {
            one: "единица",
            two: "двойка",
            three: "тройка",
            four: "четверка",
            five: "пятерка",
            six: "шестерка",
            seven: "семерка",
            eight: "восьмерка",
            nine: "девятка",
            redFive: "red five",
            east: "восточный ветер",
            south: "южный ветер",
            west: "западный ветер",
            north: "северный ветер",
            white: "белый дракон",
            green: "зеленый дракон",
            red: "красный дракон",
            hidden: "скрытый тайл",
        },
        suits: {
            characters: "символов",
            circles: "точек",
            bamboo: "бамбуков"
        },
        shuupai: "{{value}} {{suit}}",
        winds: {
            east: "Восток",
            south: "Юг",
            west: "Запад",
            north: "Север"
        },
        roundName: "{{wind}} {{number}}-{{repeats}}",
        trainer: {
            disclaimer: "Предупреждение: Этот тренер поможет научиться находить самое эффективное по скорости решение на текущий ход, он не учитывает эффективность в последующих ходах. Также он не поможет научиться опознавать ситуации когда может быть выгодно принять не самое эффективное по скорости решение, или как повысить стоимость руки. Играть каждую руку согласно тому как подсказывает этот тренер не является лучшей стратегией, но порой будут руки где именно то что он предлагает является лучшим решением. Сильные игроки не всегда играют таким образом, но они умеют играть на максимальную эффективность и могут ответить верно на вопросы тренера. Не забудьте дополнить практику здесь чтением статей и источников по стратегии маджонга, чтобы узнать когда стоит отказаться от эффективности в пользу чего-то еще. В меню вы можете выбрать практику с более специфическими сценариями.",
            instructions: "Кликните на тайл, который хотите сбросить.",
            start: "Запущена новая рука: {{hand}}",
            complete: "Ваша рука собрана. Поздравляем! Ваша эффективность была {{achieved}}/{{total}}, или {{percent}}%.",
            newHandButtonLabel: "Новая рука",
            loadButtonLabel: "Загрузить руку",
            roundWind: "Ветер раунда:",
            seatWind: "Ваш ветер:",
            doraIndicator: "Индикатор доры:",
            copyHand: "Скопировать руку",
            copied: "Скопировано!",
            error: {
                load: "Ошибка: Не удалось загрузить руку",
                wallEmpty: "Ошибка: Недостаточно тайлов чтобы завершить руку.",
                wallEmptyShuffle: "В стене осталось недостаточно тайлов чтобы сделать новую руку. Перераздача."
            },
            playerNames: {
                you: "Вы",
                right: "Шимоча",
                across: "Тоймен",
                left: "Камича"
            }
        },
        history: {
            label: "История руки",
            tenhouLinkText: "[Улучшающие тайлы]",
            concise: {
                discard: "Сброс: {{tile}}",
                acceptance: " (тайлов: {{count}}).",
                acceptance_plural: " (тайлов: {{count}}).",
                loweredShanten: " (ухудшение шантен).",
                optimal: " Лучший:",
                optimalSpoiler: " {{tile}}",
                best: " Это был лучший выбор!",
                exceptionalNoten: " Все выигрышные тайлы уже использованы в руке, так что это еще не тенпай.",
                furiten: " Фуритен. ",
                furitenWarning: " Осторожно, ситуация может привести к фуритену.",
                exhausted: " В стене не осталось тайлов. Попробуйте снова! ",
                draw: " Взятие: {{tile}}. "
            },
            verbose: {
                discard: "Вы выбрали сбросить {{tile}}, и",
                acceptance: " количество тайлов улучающих вашу руку теперь {{count}}.",
                acceptance_plural: " количество тайлов улучающих вашу руку теперь {{count}}.",
                loweredShanten: " увеличили свой шантен - до тенпая стало больше шагов.",
                optimal: " Лучший выбор для сброса",
                optimalSpoiler: " это {{tile}}, ",
                best: " Это был лучший выбор!",
                exceptionalNoten: " Ваша рука готова, но все выигрышные тайлы уже использованы в ней. Это не считается тенпаем почти в любых правилах, поэтому руку придется поменять.",
                furiten: " Вы в фуритене. Вы не можете выиграть по рону, потому что один или более выигрышных тайлов находятся в вашем сбросе.",
                furitenWarning: " Есть опасность выйти в фуритен. Один или более тайлов необходимых для завершения руки находится в вашем сбросе.",
                exhausted: " В стене не осталось тайлов. Попробуйте снова! ",
                draw: " Вы взяли {{tile}}. "
            }
        },
        discards: {
            label: "Сброс",
            discardCount: "Сброшено тайлов: {{count}}.",
            discardCount_plural: "Сброшено тайлов: {{count}}.",
            tilesLeft: "Тайлов осталось в стене: {{count}}.",
            tilesLeft_plural: "Тайлов осталось в стене: {{count}}."
        },
        settings: {
            buttonLabel: "Настройки",
            tilesAllowed: "Разрешенные тайлы:",
            characters: "Символы",
            circles: "Точки",
            bamboo: "Бамбуки",
            honors: "Достоинства",
            sanma: "Игра на троих (Хиросима)",
            redFives: "Количество акадор:",
            verbose: "Полные имена тайлов (\"единица бамбуков\" или \"1s\")",
            concise: "Краткие объяснения",
            spoilers: "Показывать что было лучшим выбором",
            shuffle: "Замешивать использованные тайлы назад в стену когда начинается новая рука",
            simulate: "Добавить виртуальных игроков сбрасывающих тайлы",
            exceptions: "Учитывать нестандартные руки (Кокуши/Тринадцать сирот и Читойцу/Семь пар)",
            minShanten: "Минимальный шантен стартовой руки:",
            minShantenLimit: "(не больше количества включенных видов тайлов)",
            sort: "Сортировать руку",
            blind: "Скрыть тайлы в руке",
            time: "Time per discard:",
            extraTime: "Bonus time per hand:",
            seconds: "секунды"
        },
        stats: {
            buttonLabel: "Статистика",
            info: "Статистика обновляется каждый раз когда вы завершаете руку.",
            ready: "Завершено рук: {{count}}",
            ready_plural: "Завершено рук: {{count}}",
            discards: "Сброшено тайлов: {{count}}",
            discards_plural: "Сброшено тайлов: {{count}}",
            average: "Среднее количество сбросов до тенпая: {{average}}",
            optimal: "Лучших выборов: {{count}}",
            optimal_plural: "Лучших выборов: {{count}}",
            optimalRate: "Процент лучшего выбора: {{percent}}% ({{achieved}}/{{total}})",
            efficiency: "Тайлов улучающих шантен: {{count}}",
            efficiency_plural: "Тайлов улучающих шантен: {{count}}",
            possible: "Тайлов улучающих шантен, если бы все выборы были правильными: {{count}}",
            possible_plural: "Тайлов улучающих шантен, если бы все выборы были правильными: {{count}}",
            overall: "Общая эффективность: {{percent}}% ({{achieved}}/{{total}})",
            reset: "Сбросить статистику",
            confirmation: "Вы уверены, что хотите обнулить всю статистику? Это нельзя будет отменить.",
            yes: "Да, обнулить!",
            no: "Нет, оставить!"
        },
        credits: {
            label: "Благодарности",
            tilesPreLink: "Изображения тайлов взяты с ",
            tilesLinkText: "riichi-mahjong-tiles от FluffyStuff на Github",
            tilesPostLink: ", под лицензией ",
            ccLinkText: "Creative Commons Attribution 4.0 International License.",
            shantenPreLink: "Алгоритм вычисления шантен адаптирован из ",
            shantenLinkText: "этого набора программ на C.",
            shantenPostLink: "",
        },
        menu: {
            trainer: "Тренер",
            analyzer: "Анализатор",
            allLast: "Тренер последнего раунда",
            explorer: "Разбор вариантов",
            utils: "Утилиты",
            language: "Язык",
            defense: "Защита"
        },
        allLast: {
            placements: {
                first: "первое",
                second: "второе",
                third: "третье",
                fourth: "четвертое"
            },
            title: "Тренер последнего раунда",
            maxFu: "Максимальные фу (минипоинты)",
            showDifferences: "Показывать разницу в очках",
            loadInstructions: "Введите очки через запятую для Востока, Юга, Запада и Севера, в таком порядке, чтобы сгенерировать ситуацию.",
            loadLabel: "Сгенерировать ситуацию",
            newLabel: "Новая случайная ситуация",
            info: "Идет последний раунд игры. Вы на последнем месте. Очки игроков:",
            escapeHeader: "Избежать последнего места",
            riichiHeader: "Объявления ричи",
            higherHeader: "Получить место выше третьего",
            question: "При какой минимальной стоимости вашей руки, {{action}} даст вам {{placement}} место?",
            riichiQuestion: "Если {{player}} объявит, при какой минимальной стоимости руки, {{action}} даст вам {{placement}} место?",
            ron: "если {{target}} место накинет в рон то ",
            tsumo: "объявление цумо",
            han: "Хан",
            fu: "Фу",
            submit: "Проверить",
            wrong: "Неправильно! Такая стоимость не позволит занять {{placement}}! Выделите для ответа: ",
            tooMuch: "Эта стоимость позволит занять {{placement}}, но она не меньшая возможна. Выделите для ответа: ",
            correct: "Правильно! Это наименьшая стоимость которая позволит занять {{placement}}!",
            score: "{{han}} хан {{fu}} фу",
            results: "Результаты:",
            you: "ВЫ",
            error: {
                few: "Ошибка: Очки предоставлены не для всех игроков.",
                NaN: "Ошибка: Не удалось распарсить очки для: {{seat}}."
            }
        },
        analyzer: {
            instructions1: "Инструкция:",
            instructions2: "Скопируйте URL вашего реплея в текстовое поле.",
            instructions3: 'Затем, правый клик мышкой на появившуюся ссылку и сохраните её как файл.',
            instructions4: 'Наконец, нажмите на загрузку файла и выберите сохраненный файл.',
            instructions5: "Как альтернатива, если у вас есть файл mjlog, вы можете переименовать его, чтобы он заканчивался на .zip.",
            instructions6: "После этого нажмите на загрузку файла и загрузите файл внутри этого zip.",
            instructions7: "Вы также можете загружать напрямую XML файлы реплеев, если у вас есть способ их достать.",
            instructions8: "Предупреждение из основного тренера применимо здесь в не меньшей мере.",
            instructions9: "Для рейтинга безопасности, чем больше тем лучше. 1 самый опасный тайл, а 15 самый безопасный.",
            URLplaceholder: "URL Реплея",
            invalidURL: "Некорректный URL",
            downloadInstructions: "Правый клик мышкой на эту ссылку и сохраните как файл!",
            roundSelect: "Выберите раунд",
            playerSelect: "Сменить игрока",
            previousTurn: "Предыдущий ход",
            nextTurn: "Следующий ход",
            nextIssue: "Следующее отклонение",
            turn: "{{round}}, ход {{turn}}",
            discards: "Тайлы в вашем сбросе: {{symbols}} ({{tiles}})",
            calls: "Ваши объявления: {{calls}}",
            callsSeparator: ", ",
            tenhouLinkText: "[Анализ сбросов от Тенхо]",
            replayError: "Пришлите мне этот реплей, что-то с ним не так.",
            noName: "Анонимный игрок",
            startingHand: "Ваша стартовая рука: {{hand}}. Улучшений до тенпая: {{count}}. Индикатор доры - {{dora}}.",
            startingHand_plural: "Ваша стартовая рука: {{hand}}. Улучшений до тенпая: {{count}}. Индикатор доры - {{dora}}.",
            unknownAction: "Извиняемся, на такой реплей мы не рассчитывали. Пожалуйста пришлите его разработчику чтобы его добавили. {{debugInfo}}",
            call: "Вы объявили на {{tile}} чтобы закрыть {{meld}}. ({{hand}})",
            callSameShanten: "Это объявление не привело вас ближе к тенпаю.",
            ryuukyoku: "Раунд закончился вничью.",
            playerRiichi: "Вы объявили ричи. Анализ окончен.",
            otherRiichi: "Игрок {{number}} объвил ричи. ",
            fold: "Вы все еще в {{shanten}} тайлах от тенпая, поэтому надо уйти в защиту.",
            probablyFold: "Вы в одном тайле от тенпая. Стоит подумать о защите.",
            win: "Игрок {{number}} выиграл этот раунд.",
            kandora: "Новый индикатор доры - {{tile}}.",
            draw: "Вы взяли {{tile}}. ({{hand}})",
            chosenSafety: "Тайл {{tile}} имел рейтинг безопасности {{rating}}. ({{- explanation}}) ",
            correctSafety: "Это был самый безопасный тайл.",
            bestSafety: "Самый безопасный тайл: {{tile}}, рейтинг безопасности {{rating}}. ({{- explanation}})",
            safetyExplanations: {
                zero: "Это сообщение вы видеть не должны. Сообщите разработчикам",
                one: "не суджи 4/5/6",
                two: "не суджи 3/7",
                three: "не суджи 2/8",
                four: "единственный шанс",
                five: "не суджи 1/9",
                six: "первый тайл достоинства",
                seven: "суджи 3/7",
                eight: "суджи 2/8",
                nine: "суджи 4/5/6",
                ten: "второй тайл достоинства",
                eleven: "первый суджи 1/9",
                twelve: "второй суджи 1/9",
                thirteen: "третий суджи 1/9 / третий тайл достоинства",
                fourteen: "четвертый суджи 1/9 / четвертый тайл достоинства",
                fifteen: "генбуцу, 100% безопасно"
            }
        },
        explorer: {
            warning: "Предупреждение: загрузка руки может стать причиной подвисания страницы на 5-10 секунд, или даже больше на старых компьютерах, в зависимости от сложности руки. Загрузка руки покажет все укеире и возможности улучшения на каждый вариант дискарда, включая возврат назад в шантене. По умолчанию варианты которые однозначно хуже других не будут показаны, но вы можете нажать кнопку снизу чтобы изменить это. Если вам нужно только укеире, tenhou.net/2/ может это сделать.",
            shanten: "Шантен: минимальное количество улучшений необходимое для выхода в тенпай.",
            ukeire: "Укеире: количество тайло которые улучшают ваш шантен.",
            notableDiscards: "Показывать только значимые дискарды",
            allDiscards: "Показывать все дискарды",
            discardInfo: {
                discard: "При сбросе {{tile}}:",
                shanten: "Шантен: {{count}}",
                ukeire: "Укеире: {{count}} ({{tiles}})",
                expand: "Показать укеире при последующем улучшении",
                draw: "Взятие {{draw}}, сброс {{discard}}: {{count}} укеире",
                average: "Среднее укеире: {{average}}",
                upgrades: "Тайлы улучшающие укеире: {{count}} ({{tiles}})",
                expandUpgrades: "Показать возможные улучшения"
            }
        },
        defense: {
            instructions: "Сбросьте самый безопасный тайл.",
            finalHands: "Руки в конце раздачи:",
            hand: "{{player}}: {{hand}}",
            safetyRatings: "Рейтинг безопасности",
            averagedSafetyRating: "Против нескольких ричи, рейтинг безопасности будет подсчитываться по среднему, лучшим будет лучшее среднее.",
            safetyRating: "{{rating}}: {{- explanation}}",
            riichiCount: "Количество ричи: ",
            minTurns: "Минимальное число ходов до объявления ричи: ",
            tilesInHand: "Количество тайлов в руке: "
        },
        utils: {
            convertHeader: "Преобразование руки",
            convertButtonLabel: "Преобразовать руку",
            ascii: "ASCII:",
            emoji: "Эмоджи:",
            stateHeader: "Генератор случайных состояний игры",
            playerLabel: "{{seat}} {{you}}",
            points: "Очки:",
            discards: "Сброс:",
            stateButtonLabel: "Сгенерировать новое состояние",
            info: "Идет ход {{turn}}, {{round}}. Вы {{seat}}.",
            dora: "Индикатор доры - {{tile}}."
        }
    }
}