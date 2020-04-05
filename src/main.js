import {createMenu} from "./components/menu.js";
import {createFilter} from "./components/filter.js";
import {createBoard} from "./components/board.js";
import {createSortingControls} from "./components/sorting.js";
import {createTaskEditingForm} from "./components/task-editing";

const TASKS_NUMBER = 3;

const siteMainElement = document.querySelector(`.main`);
const siteMainControlElement = siteMainElement.querySelector(`.main__control`);

const createTaskTemplate = () => {
  return (
    `<article class="card card--black">
      <div class="card__form">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
              edit
            </button>
            <button type="button" class="card__btn card__btn--archive">
              archive
            </button>
            <button
              type="button"
              class="card__btn card__btn--favorites card__btn--disabled"
            >
              favorites
            </button>
          </div>

          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <p class="card__text">Example default task with default color.</p>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <div class="card__date-deadline">
                  <p class="card__input-deadline-wrap">
                    <span class="card__date">23 September</span>
                    <span class="card__time">16:15</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>`
  );
};

const createLoadButton = () => {
  return (
    `<button class="load-more" type="button">load more</button>`
  );
};

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

