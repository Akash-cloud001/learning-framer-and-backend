import {Router} from 'express'
import {healthcheck} from '../controller/healthCheck.controllers.js'

const router = Router();

router.route("/").get(healthcheck)

export default router;
