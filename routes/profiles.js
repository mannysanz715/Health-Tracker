import { Router } from 'express'
import * as profileCtrl from '../controllers/profiles.js'


const router = Router()

router.get('/new', profileCtrl.new)

router.get('/:id', profileCtrl.index)

router.patch('/:id', profileCtrl.create)

export {
  router
}
