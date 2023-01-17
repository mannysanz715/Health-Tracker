import { Router } from 'express'
import * as profileCtrl from '../controllers/profiles.js'


const router = Router()

router.get('/edit', profileCtrl.edit)

router.patch('/:id', profileCtrl.create)

export {
  router
}