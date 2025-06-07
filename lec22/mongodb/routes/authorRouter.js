import express from 'express'
import { addAuthor, getAuthors } from '../controllers/authorController.js'

const router = express.Router()

router.post('/add-author',addAuthor)
router.get('/get-author',getAuthors)

export default router;