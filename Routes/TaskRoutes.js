const express = require("express")
const router = express.Router()
const Joi = require('joi')
const tasks = require('../Models/Task.model')


const taskSchema = Joi.object({
    id: Joi.string().default(`${Date.now()}`),
    title: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.string().default("TODO"),
    priority: Joi.string(),
    dueDate: Joi.date().required(),
    createdAt: Joi.date(),
    updatedAt: Joi.date().default(Date.now())
})


router.get('/tasks', async (req, res) => {
    const limit = parseInt(req.query.limit) || 10;
const skip = parseInt(req.query.skip) || 0;
    try {
       const task =  await tasks.find().skip(skip).limit(limit)
       res.json({task})
    } catch (e) {
        res.status(500).json({ msg: "Internal server error", e })
    }
})

router.post("/tasks", async (req, res) => {
    try {
        const validate = await taskSchema.validateAsync(req.body);
        console.log(validate)
        const insertTask = await tasks.create(validate)
        res.status(200).json({ task: insertTask });
    } catch (e) {
        if (Joi.isError()) {
            return res.status(422).json({ msg: "invalid data" })
        }
        return res.status(500).json({ msg: "Internal server error" })
    }

})


router.get('/tasks/:id', async (req, res) => {
    const { id } = req.params
    try {
        const task = await tasks.findOne({ id })
        if (task) {
            res.status(200).json({ task })
        } else {
            res.status(404).json({ msg: "Not Found" })
        }
    } catch (e) {
        res.status(500).json({ msg: "Internal server error", e })
    }
})

router.put("/task", async (req, res) => {
    try {
        const validate = await taskSchema.validateAsync(req.body);
        console.log(validate)
        const updatedTask = await tasks.updateOne({ id }, validate)
        res.status(200).json({ updatedTask })
    } catch (e) {
        res.status(500).json({ msg: "Internal server error" })
    }
})


router.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params
    try {
        const deleteTask = await tasks.deleteOne({ id })
        res.status(204).json({ msg: "deleted successfully" })
    } catch (e) {
        res.status(400).json({ msg: 'Internal server error' })
    }
})

module.exports = router