import {testFunction, t2} from '../controller/testControl.js'
import express from 'express'

const router = express.Router()

router.get('/abc',testFunction)
router.post('/t2',t2)

export default router