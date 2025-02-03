// INPUT NEW TASK
const formInput = document.querySelector('#form-input')
const taskInput = document.querySelector('#task-input');
const submitTask = document.querySelector('#submit-task');
const dateInput = document.querySelector('#date');
const priorityInput = document.querySelector('#priority');
const threeStar = document.querySelector('#three-star');
const twoStar = document.querySelector('#two-star');
const oneStar = document.querySelector('#one-star');

let todayTask = [];
let previousTask = [];
let futureTask = [];

const addTask = (data) => {
    if(data.hari === 'today') {
        todayTask = [...todayTask, data];
    } else if (data.hari === 'yesterday') {
        previousTask = [...previousTask, data];
    } else {
        futureTask = [...futureTask, data];
    }
}

const rowTask = `<div class="w-full h-12 px-5 py-0.5 rounded-md bg-red-100 flex items-center">
                        <div class="w-full flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <div class="w-4 h-4 rounded-full bg-transparent border border-red-900 cursor-pointer"></div>
                                    <div class="flex flex-col  cursor-default">
                                        <span id="text-task" class="text-sm font-medium">Build login page</span>
                                        <span id="date-task" class="text-xs font-light text-slate-500">30/01/2025</span>
                                    </div>
                                </div>
                                <div id="three-star">
                                    <i class="ri-star-fill text-yellow-400"></i>
                                    <i class="ri-star-fill text-yellow-400"></i>
                                    <i class="ri-star-fill text-yellow-400"></i>
                                </div>
                            </div>    
                        </div>
                    </div>`;

const displayTask = () => {
    const previousBox = document.querySelector('#previous-box');
    const todayBox = document.querySelector('#today-box');
    const futureBox = document.querySelector('#future-box');

    previousTask.forEach(() => {
        previousBox.innerHTML = rowTask;
    });

    todayTask.forEach(() => {
        todayBox.innerHTML = rowTask;
    });
    futureTask.forEach(() => {
        futureBox.innerHTML = rowTask;
    });
}

function collectData () {
    const taskInputValue = taskInput.value;
    const today = new Date().toISOString().split("T")[0];
    const todayAsNumber = new Date(today).getTime();
    const dateInputValue = dateInput.valueAsNumber;
    const priorityInputValue = priorityInput.value;

    formInput.reset();
    
    if (!!taskInputValue && !!dateInputValue && !!priorityInputValue) {
        if (dateInputValue === todayAsNumber) {
            addTask(
                {task: taskInputValue, date: dateInputValue, prior: priorityInputValue, hari: 'today'}
            );
        } else if (dateInputValue < todayAsNumber) {
            addTask(
                {task: taskInputValue, date: dateInputValue, prior: priorityInputValue, hari: 'yesterday'}
            );
        } else {
            addTask(
                {task: taskInputValue, date: dateInputValue, prior: priorityInputValue, hari: 'tomorrow'}
            );
        }
    }
}

formInput.addEventListener('submit', (e) => {
    e.preventDefault();
    collectData();
    displayTask();
    console.log(todayTask);
    console.log(previousTask);
    console.log(futureTask);
});



