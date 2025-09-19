// src/routes/post.routes.js
import { Router } from 'express';
import * as postController from '../controllers/post.controller.js';

const router = Router();

router.get('/', postController.getAllPosts);
router.post('/', postController.createPost);
router.get('/:id', postController.getPostById);
router.put('/:id', postController.updatePost);

// *** NEW ROUTE DEFINITION FOR PATCH ***
router.patch('/:id', postController.partiallyUpdatePost);

router.delete('/:id', postController.deletePost);

export default router;