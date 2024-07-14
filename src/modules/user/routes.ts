import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('User list');
});

router.get('/:id', (req: Request, res: Response) => {
  const userId: string = req.params.id;
  res.send(`User details for ID: ${userId}`);
});

export default router;
