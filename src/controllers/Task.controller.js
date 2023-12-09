import Task from '../models/Task.model.js'

export async function store(req, res) {
  try {
    const { title, description, date } = req.body
    const newTask = new Task({
      title,
      description,
      date
    })

    await newTask.save()

    res.status(201)
    res.json({ message: 'Task created successfully' })
  }
  catch (error) {
    console.log('Error: ', error)
    res.status(500)
    res.json({ message: 'Error when creating the task' })
  }
}

export async function index(_, res) {
  try {
    const tasks = await Task.find();
    
    res.json(tasks)
  } catch (error) {
    console.log('Error when listing all tasks: ' + error)
    res.status(500)
    res.json({ message: 'Error when list all tasks.' })
  }
}

export async function show(req, res) {
  try {
    const { id } = req.params
    const task = await Task.findById(id)

    res.json(task)
  } catch (error) {
    console.log('Error when listing a task: ' + error)

    res.status(500)
    res.json({ message: 'Error when listing a task.' })
  }
}

export async function update(req, res) {
  try {
    const { id } = req.params
    await Task.findByIdAndUpdate(id, req.body)

    res.json({ message: 'Task is updated' })
  } catch (error) {
    console.log('Error when updating a task: ' + error)

    res.status(500)
    res.json({ message:  'Error when updating a task.'})
  }
}

export async function deleteOne(req, res) {
  try {
    const { id } = req.params
    await Task.findByIdAndDelete(id) 

    res.json({ message: 'Task deleted is successfully' })
  } catch (error) {
    console.log('Error when deleting: ' + error)

    res.status(500)
    res.json({ message: 'Error when deleting.' })
  }
}