// STAR PRIORITY
const priorityStar = {
    threeStar: `<i class="ri-star-fill text-star"></i><i class="ri-star-fill text-star"></i><i class="ri-star-fill text-star"></i>`,
    twoStar: `<i class="ri-star-fill text-star"></i><i class="ri-star-fill text-star"></i><i class="ri-star-line text-star"></i>`,
    oneStar: `<i class="ri-star-fill text-star"></i><i class="ri-star-line text-star"></i><i class="ri-star-line text-star"></i>`
}

class Task {
    constructor(text, date, priority) {
        this.text = text;
        this.date = date;
        this.priority = priority;
    }
}

const addTaskToRow = (task) => {
    const newDateInput = new Date(task.date); 
    const dateInputNum = newDateInput.getTime();
  
    const today = new Date().toISOString().split("T")[0];
    const newToday = new Date(today);
    const todayNum = newToday.getTime();

    const box = document.querySelector('#task-box');
    const completedBox = document.querySelector('#completed-box');
    const rowTask = document.createElement('div');
    rowTask.className = 'row-task w-full h-12 px-5 py-0.5 rounded-md flex items-center bg-secondary';
    rowTask.innerHTML = `<div class="w-full flex items-center justify-between">
                            <div class="info flex items-center gap-3">
                                <div>
                                    <input name="checkTask" class="check-task" type="checkbox">
                                </div>
                                <div class="flex flex-col  cursor-default">
                                    <span class="text-sm font-medium">${task.text}</span>
                                    <span class="text-xs font-light">${task.date}</span>
                                </div>
                            </div>
                            <div>${task.priority === 'low' ? priorityStar.oneStar : task.priority === 'medium' ? priorityStar.twoStar : priorityStar.threeStar}</div>
                            </div>`;

    box.appendChild(rowTask);

    const checkBox = rowTask.querySelector('.check-task');
    checkBox.addEventListener('change', () => {
        if (checkBox.checked) {
            rowTask.style.textDecoration = 'line-through';
            rowTask.style.opacity = '0.5';
            completedBox.appendChild(rowTask);
        } else {
            rowTask.style.textDecoration = 'none';
            rowTask.style.opacity = '1';
            box.appendChild(rowTask);
        }
    });
}

document.querySelector('#form-input').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const text = document.querySelector('#input-task').value;
    const priority = document.querySelector('#priority').value;
    const date = document.querySelector('#date').value;
    
    const task = new Task(text, date, priority);
    
    if (!text || !priority || !date) {
        alert('Please fill all fields');
        return;
    } 
    addTaskToRow(task);
    document.querySelector('#form-input').reset();
})

document.querySelector('#clear-btn').addEventListener('click', () => {
    const rowTask = document.querySelectorAll('.row-task');
    rowTask.forEach((e) => {
        e.remove();
    })
})




