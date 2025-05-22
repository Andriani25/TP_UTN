import { Router } from "express";
import userRoutes from './userRoutes'
import gamesRoutes from './gamesRoutes'

const router = Router()

router.use(userRoutes)
router.use(gamesRoutes)

export default router