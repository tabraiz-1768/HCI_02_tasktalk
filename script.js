document.addEventListener('DOMContentLoaded', function () {
    const tasks = [
      { title: 'Task 1: Say Good Morning to 5 New People', description: 'Greet five new people with a smile to gain confidence.' },
      { title: 'Task 2: Ask for Directions', description: 'Ask someone for directions to a nearby place.' },
      { title: 'Task 3: Order a Meal in English', description: 'Order your next meal in English.' },
      { title: 'Task 4: Introduce Yourself to Someone', description: 'Introduce yourself to someone you haven’t met before.' },
      { title: 'Task 5: Start a Casual Conversation', description: 'Engage in a short, casual conversation with a new person.' },
      { title: 'Task 6: Give a Compliment to a Colleague', description: 'Compliment a coworker or friend about their work or outfit.' },
      { title: 'Task 7: Talk About the Weather', description: 'Make small talk by discussing the weather with someone.' },
      { title: 'Task 8: Describe Your Weekend Plans', description: 'Tell someone what you plan to do during the weekend.' },
      { title: 'Task 9: Ask for Help in a Store', description: 'Ask a store employee for help finding an item.' },
      { title: 'Task 10: Join a Group Discussion', description: 'Participate in a group discussion at work, school, or an event.' }
    ];
  
    const params = new URLSearchParams(window.location.search);
    const taskIndex = parseInt(params.get('task')) - 1;
  
    if (taskIndex >= 0 && taskIndex < tasks.length) {
      document.getElementById('task-title').innerText = tasks[taskIndex].title;
      document.getElementById('task-description').innerText = tasks[taskIndex].description;
  
      const nextTaskButton = document.getElementById('next-task-btn');
      const taskCompleteCheckbox = document.getElementById('task-complete-checkbox');
  
      nextTaskButton.disabled = true;
  
      taskCompleteCheckbox.addEventListener('change', function () {
        nextTaskButton.disabled = !taskCompleteCheckbox.checked;
      });
  
      nextTaskButton.addEventListener('click', function () {
        if (taskIndex + 1 < tasks.length) {
          window.location.href = `task-details.html?task=${taskIndex + 2}`;
        } else {
          window.location.href = 'tasks.html';
        }
      });
    }
  });
  