const PostController = require('../controllers/post.controller');
const CommentController = require('../controllers/comment.controller');

module.exports = router => {
    router.post('/posts', PostController.create)
    router.get('/posts', PostController.getAll)
    router.get('/posts/:id', PostController.getOne)
    router.patch('/posts/:id', PostController.update)
    router.delete('/posts/:id', PostController.delete)

    router.post('/comments', CommentController.create);
    router.get('/comments', CommentController.getAll)
    router.get('/comments/:id', CommentController.getOne)
    router.put('/comments/:id', CommentController.update)
    router.delete('/comments/:id', CommentController.delete)

    return router;
}