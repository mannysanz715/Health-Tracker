import { Router } from 'express'
import * as profileCtrl from '../controllers/profiles.js'


const router = Router()

router.post('/:id', profileCtrl.create)

export {
  router
}
