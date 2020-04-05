import {createMenu} from "./components/menu.js";
import {createFilter} from "./components/filter.js";
import {createBoard} from "./components/board.js";
import {createSortingControls} from "./components/sorting.js";
import {createTaskEditingForm} from "./components/task-editing.js";
import {createTaskTemplate} from "./components/task.js";
import {createLoadButton} from "./components/load-button.js";

const TASKS_NUMBER = 3;

const siteMainElement = document.querySelector(`.main`);
const siteMainControlElement = siteMainElement.querySelector(`.main__control`);

const renderTemplate = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

// рендеринг шапки приложения и контейнера для контента

renderTemplate(siteMainControlElement, createMenu());
renderTemplate(siteMainElement, createFilter());
renderTemplate(siteMainElement, createBoard());

// рендеринг блока сортировки, контейнера для карточек заданий и кнопки загрузки

const board = siteMainElement.querySelector(`.board`);

renderTemplate(board, createSortingControls(), `afterbegin`);
renderTemplate(board, createLoadButton());

// рендеринг карточек заданий и формы редактирования задания

const tasksContainer = board.querySelector(`.board__tasks`);

renderTemplate(tasksContainer, createTaskEditingForm());

for (let i = 0; i < TASKS_NUMBER; i++) {
  renderTemplate(tasksContainer, createTaskTemplate());
}
